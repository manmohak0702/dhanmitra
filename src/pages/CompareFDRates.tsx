import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Search, AlertCircle, Loader2 } from 'lucide-react';
import { allBanks } from '../data';
import { calculateBestRates, filterBanksByType, searchBanks } from '../data/bankUtils';
import { Bank } from '../data/types';
import { FDComparisonResponse, generateFDComparison } from '../utils/investmentAI';

const CompareFDRates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customerType, setCustomerType] = useState('general');
  const [bankTypes, setBankTypes] = useState<string[]>([]);
  const [expandedBank, setExpandedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState('1 year');
  const [selectedBanks, setSelectedBanks] = useState<Bank[]>([]);
  const [age, setAge] = useState(30);
  const [comparisonResults, setComparisonResults] = useState<FDComparisonResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredBanks = searchBanks(
    filterBanksByType(allBanks, bankTypes),
    searchTerm
  );

  const bestRates = calculateBestRates(filteredBanks, amount, tenure, customerType);

  const toggleBankDetails = (bankId: string) => {
    setExpandedBank(expandedBank === bankId ? null : bankId);
  };

  const toggleBankType = (type: string) => {
    setBankTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleBankSelection = (bank: Bank) => {
    if (selectedBanks.some(b => b.id === bank.id)) {
      setSelectedBanks(prev => prev.filter(b => b.id !== bank.id));
    } else {
      if (selectedBanks.length < 3) {
        setSelectedBanks(prev => [...prev, bank]);
      }
    }
  };

  const generateComparison = async () => {
    if (selectedBanks.length === 0) {
      setError("Please select at least one bank to compare");
      return;
    }

    setLoading(true);
    setError(null);
    setComparisonResults(null);

    try {
      const tenureInYears = parseTenure(tenure);
      
      // Prepare banks data for comparison
      const banksData = selectedBanks.map(bank => {
        const matchingRate = bank.rates.find(r => r.tenure === tenure) || bank.rates[0];
        const rate = matchingRate[customerType as 'general' | 'senior'];
        const maturityAmount = calculateMaturityAmount(amount, rate, tenureInYears);
        const interestEarned = maturityAmount - amount;
        
        return {
          id: bank.id,
          name: bank.name,
          type: bank.type,
          rate,
          maturityAmount,
          interestEarned
        };
      });
      
      // Call the utility function to generate the comparison
      const comparisonData = await generateFDComparison({
        banks: banksData,
        amount,
        tenure,
        tenureInYears,
        customerType,
        age
      });
      
      setComparisonResults(comparisonData);
    } catch (err) {
      console.error("Error generating comparison:", err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to parse tenure string to years
  const parseTenure = (tenureStr: string): number => {
    if (tenureStr.includes('year')) {
      return parseInt(tenureStr.split(' ')[0]);
    } else if (tenureStr.includes('month')) {
      return parseInt(tenureStr.split(' ')[0]) / 12;
    } else if (tenureStr.includes('day')) {
      return parseInt(tenureStr.split(' ')[0]) / 365;
    }
    return 1; // Default to 1 year
  };

  // Helper function to calculate maturity amount
  const calculateMaturityAmount = (principal: number, rate: number, years: number): number => {
    // Simple interest calculation for FD
    const interest = principal * (rate / 100) * years;
    return principal + interest;
  };

  // Function to render markdown tables as HTML
  const renderMarkdownTable = (markdown: string) => {
    if (!markdown) return null;
    
    // Simple markdown table parser
    const rows = markdown.split('\n').filter(row => row.trim());
    if (rows.length < 3) return <p>{markdown}</p>;
    
    const headers = rows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.slice(2).map((row, i) => (
              <tr key={i}>
                {row.split('|').filter(cell => cell.trim()).map((cell, j) => (
                  <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/" className="mr-4 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Compare FD Rates</h1>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search banks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Customer Type */}
            <select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="general">General</option>
              <option value="senior">Senior Citizen</option>
            </select>

            {/* Amount */}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Amount"
            />

            {/* Tenure */}
            <select
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
              <option value="3 years">3 Years</option>
              <option value="5 years">5 Years</option>
            </select>

            {/* Age */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your age"
                min="18"
                max="100"
              />
            </div>

            {/* Selected Banks Count */}
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                <span className="text-blue-700 font-medium">
                  Selected Banks: {selectedBanks.length}/3
                </span>
                {selectedBanks.length > 0 && (
                  <button
                    onClick={generateComparison}
                    className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="inline animate-spin mr-2 h-4 w-4" />
                        Comparing...
                      </>
                    ) : (
                      'Compare Selected Banks'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bank Types */}
          <div className="mt-4 flex flex-wrap gap-2">
            {['private', 'public', 'small_finance', 'nbfc', 'corporate', 'rural'].map((type) => (
              <button
                key={type}
                onClick={() => toggleBankType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  bankTypes.includes(type)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Selected Banks */}
          {selectedBanks.length > 0 && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-3">Selected Banks for Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedBanks.map(bank => (
                  <div key={bank.id} className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <img
                      src={bank.logo_url}
                      alt={bank.name}
                      className="h-10 w-10 object-contain mr-3"
                    />
                    <div className="flex-grow">
                      <p className="font-medium text-sm">{bank.name}</p>
                      <p className="text-xs text-gray-600">{bank.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                    </div>
                    <button
                      onClick={() => toggleBankSelection(bank)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Comparison Results */}
        {comparisonResults && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">FD Comparison Results</h2>
            
            {/* Best Option Highlight */}
            {comparisonResults.bestOption && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800">Best Option: {comparisonResults.bestOption}</h3>
                <p className="text-green-700 mt-2">{comparisonResults.bestOptionReason}</p>
              </div>
            )}
            
            {/* Text Comparison */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Detailed Comparison</h3>
              <div className="p-4 bg-gray-50 rounded-lg prose max-w-none">
                <p>{comparisonResults.textComparison}</p>
              </div>
            </div>
            
            {/* Table Comparison */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Comparison Table</h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                {renderMarkdownTable(comparisonResults.tableComparison)}
              </div>
            </div>
            
            {/* Visual Suggestions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Visual Insights</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p>{comparisonResults.visualSuggestions}</p>
              </div>
            </div>
            
            {/* Additional Considerations */}
            {comparisonResults.additionalConsiderations && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Additional Considerations</h3>
                <p className="text-blue-700">{comparisonResults.additionalConsiderations}</p>
              </div>
            )}
          </div>
        )}

        {/* Bank List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Select Up to 3 Banks to Compare</h2>
          
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start mb-4">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          {bestRates.map((bank) => (
            <div
              key={bank.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-grow cursor-pointer" onClick={() => toggleBankDetails(bank.id)}>
                    <img
                      src={bank.logo_url}
                      alt={bank.name}
                      className="h-12 w-12 object-contain mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {bank.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {bank.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} • 
                        Best Rate: {bank.bestRate}%
                      </p>
                    </div>
                    {expandedBank === bank.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 ml-4" />
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleBankSelection(bank)}
                    className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedBanks.some(b => b.id === bank.id)
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : selectedBanks.length >= 3
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    disabled={selectedBanks.length >= 3 && !selectedBanks.some(b => b.id === bank.id)}
                  >
                    {selectedBanks.some(b => b.id === bank.id) ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>

              {expandedBank === bank.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      FD Rates for {tenure}
                    </h4>
                    <div className="space-y-2">
                      {bank.rates
                        .filter(rate => rate.tenure === tenure)
                        .map((rate, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-gray-600">
                              {customerType === 'general' ? 'General' : 'Senior Citizen'}
                            </span>
                            <span className="font-medium text-gray-900">
                              {rate[customerType as 'general' | 'senior']}%
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            About Fixed Deposit Comparisons
          </h3>
          <div className="space-y-4 text-blue-800">
            <p>
              Comparing Fixed Deposits (FDs) from different banks can help you maximize your returns
              while meeting your financial goals. Here's what you should consider:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Interest rates vary based on the bank, deposit amount, and tenure</li>
              <li>Senior citizens typically get 0.25% to 0.75% higher rates</li>
              <li>Tax implications depend on your income tax bracket</li>
              <li>Some banks may offer better liquidity options or premature withdrawal terms</li>
              <li>Consider the bank's credibility and ease of account management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareFDRates; 