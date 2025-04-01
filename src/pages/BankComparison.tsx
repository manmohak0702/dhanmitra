import React, { useState } from 'react';
import { Search, SlidersHorizontal, Building, TrendingUp, TrendingDown } from 'lucide-react';
import bankDataImport from '../data/banks.json';

interface Rate {
  id: string;
  product_type: string;
  interest_rate: number;
  min_amount: number;
  max_amount: number;
  tenure_months: number;
}

interface Bank {
  id: string;
  name: string;
  logo_url: string;
  rates: Rate[];
}

interface BankData {
  banks: Bank[];
}

const bankData = bankDataImport as BankData;

const BankComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [sortBy, setSortBy] = useState<'rate' | 'name'>('rate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const productTypes = [...new Set(bankData.banks.flatMap(bank => 
    bank.rates.map(rate => rate.product_type)
  ))];

  const filteredBanks = bankData.banks
    .filter(bank => 
      bank.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        const aRate = Math.max(...a.rates
          .filter(rate => selectedProduct === 'all' || rate.product_type === selectedProduct)
          .map(rate => rate.interest_rate));
        const bRate = Math.max(...b.rates
          .filter(rate => selectedProduct === 'all' || rate.product_type === selectedProduct)
          .map(rate => rate.interest_rate));
        return sortOrder === 'asc' ? aRate - bRate : bRate - aRate;
      }
    });

  const getBestRate = (rates: Rate[], type: string): Rate | undefined => {
    return rates
      .filter(rate => type === 'all' || rate.product_type === type)
      .reduce<Rate | undefined>((best, current) => 
        !best || current.interest_rate > best.interest_rate ? current : best
      , undefined);
  };

  const formatCurrency = (amount: number): string => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(2)} K`;
    }
    return `₹${amount}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Compare Banks</h1>
        
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search banks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="text-gray-400" />
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Products</option>
                {productTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (sortBy === 'rate') {
                    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortBy('rate');
                    setSortOrder('desc');
                  }
                }}
                className={`px-4 py-2 rounded-md border ${
                  sortBy === 'rate' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {sortBy === 'rate' && sortOrder === 'desc' ? <TrendingUp className="inline-block w-4 h-4 mr-2" /> : <TrendingDown className="inline-block w-4 h-4 mr-2" />}
                Sort by Rate
              </button>
              
              <button
                onClick={() => {
                  if (sortBy === 'name') {
                    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortBy('name');
                    setSortOrder('asc');
                  }
                }}
                className={`px-4 py-2 rounded-md border ${
                  sortBy === 'name' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                Sort by Name
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredBanks.map(bank => {
            const bestRate = getBestRate(bank.rates, selectedProduct);
            
            if (selectedProduct !== 'all' && !bestRate) {
              return null;
            }

            return (
              <div key={bank.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    {bank.logo_url ? (
                      <img 
                        src={bank.logo_url} 
                        alt={bank.name} 
                        className="h-12 w-12 object-contain mr-4"
                      />
                    ) : (
                      <Building className="h-12 w-12 text-gray-400 mr-4" />
                    )}
                    <h2 className="text-xl font-semibold">{bank.name}</h2>
                  </div>
                  
                  {bestRate && (
                    <div className="bg-blue-50 px-4 py-2 rounded-md">
                      <span className="text-blue-700 font-semibold">
                        Best Rate: {bestRate.interest_rate}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Product</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Interest Rate</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Min Amount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Max Amount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600">Tenure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bank.rates
                        .filter(rate => selectedProduct === 'all' || rate.product_type === selectedProduct)
                        .map(rate => (
                          <tr key={rate.id} className="hover:bg-gray-50">
                            <td className="py-3 px-4">{rate.product_type}</td>
                            <td className="py-3 px-4 font-medium text-blue-600">{rate.interest_rate}%</td>
                            <td className="py-3 px-4">{formatCurrency(rate.min_amount)}</td>
                            <td className="py-3 px-4">{formatCurrency(rate.max_amount)}</td>
                            <td className="py-3 px-4">
                              {rate.tenure_months >= 12 
                                ? `${rate.tenure_months / 12} Year${rate.tenure_months > 12 ? 's' : ''}`
                                : `${rate.tenure_months} Months`
                              }
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BankComparison;