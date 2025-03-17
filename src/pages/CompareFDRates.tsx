import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { allBanks } from '../data';
import { calculateBestRates, filterBanksByType, searchBanks } from '../data/bankUtils';

const CompareFDRates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customerType, setCustomerType] = useState('general');
  const [bankTypes, setBankTypes] = useState<string[]>([]);
  const [expandedBank, setExpandedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState('1 year');

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
        </div>

        {/* Bank List */}
        <div className="space-y-4">
          {bestRates.map((bank) => (
            <div
              key={bank.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleBankDetails(bank.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
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
                        Best Rate: {bank.bestRate}%
                      </p>
                    </div>
                  </div>
                  {expandedBank === bank.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
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
                              {rate[customerType as keyof typeof rate]}%
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
            About Fixed Deposit Rates
          </h3>
          <div className="space-y-4 text-blue-800">
            <p>
              Fixed Deposits (FDs) are one of the most popular investment options in India,
              offering guaranteed returns and capital protection. Here's what you should know:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Interest rates vary based on the deposit amount and tenure</li>
              <li>Senior citizens typically get 0.25% to 0.75% higher rates</li>
              <li>Premature withdrawal may attract penalties</li>
              <li>Interest earned is taxable as per your income tax slab</li>
              <li>Some banks offer special rates for specific tenures or amounts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareFDRates; 