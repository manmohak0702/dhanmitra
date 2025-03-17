import type { Bank } from './types';

const nbfcBanks: Bank[] = [
  {
    id: "bajaj_finance",
    name: "Bajaj Finance",
    logo_url: "https://www.bajajfinserv.in/BajajFinance_Logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0, senior: 0 },
      { tenure: "15-29 days", general: 0, senior: 0 },
      { tenure: "30-45 days", general: 0, senior: 0 },
      { tenure: "46-60 days", general: 0, senior: 0 },
      { tenure: "61-89 days", general: 0, senior: 0 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.25 },
      { tenure: "6-9 months", general: 7.50, senior: 7.75 },
      { tenure: "9-12 months", general: 8.05, senior: 8.30 },
      { tenure: "1-2 years", general: 8.35, senior: 8.60 },
      { tenure: "2-3 years", general: 8.50, senior: 8.75 },
      { tenure: "3-5 years", general: 8.65, senior: 8.90 },
      { tenure: "5-10 years", general: 8.20, senior: 8.45 }
    ]
  },
  {
    id: "shriram_finance",
    name: "Shriram Finance",
    logo_url: "https://www.shriramfinance.in/documents/10157/12884/shriram-finance-logo.svg",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0, senior: 0 },
      { tenure: "15-29 days", general: 0, senior: 0 },
      { tenure: "30-45 days", general: 0, senior: 0 },
      { tenure: "46-60 days", general: 0, senior: 0 },
      { tenure: "61-89 days", general: 0, senior: 0 },
      { tenure: "90 days - 6 months", general: 7.25, senior: 7.75 },
      { tenure: "6-9 months", general: 7.75, senior: 8.25 },
      { tenure: "9-12 months", general: 8.25, senior: 8.75 },
      { tenure: "1-2 years", general: 8.80, senior: 9.30 },
      { tenure: "2-3 years", general: 9.07, senior: 9.57 },
      { tenure: "3-5 years", general: 8.90, senior: 9.40 },
      { tenure: "5-10 years", general: 8.50, senior: 9.00 }
    ]
  },
  {
    id: "mahindra_finance",
    name: "Mahindra Finance",
    logo_url: "https://www.mahindrafinance.com/media/125662/mf_logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0, senior: 0 },
      { tenure: "15-29 days", general: 0, senior: 0 },
      { tenure: "30-45 days", general: 0, senior: 0 },
      { tenure: "46-60 days", general: 0, senior: 0 },
      { tenure: "61-89 days", general: 0, senior: 0 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.50 },
      { tenure: "6-9 months", general: 7.50, senior: 8.00 },
      { tenure: "9-12 months", general: 8.00, senior: 8.50 },
      { tenure: "1-2 years", general: 8.50, senior: 9.00 },
      { tenure: "2-3 years", general: 8.75, senior: 9.25 },
      { tenure: "3-5 years", general: 8.50, senior: 9.00 },
      { tenure: "5-10 years", general: 8.25, senior: 8.75 }
    ]
  },
  {
    id: "pnb_housing",
    name: "PNB Housing Finance",
    logo_url: "https://www.pnbhousing.com/wp-content/uploads/2022/07/PNB-Housing-Logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0, senior: 0 },
      { tenure: "15-29 days", general: 0, senior: 0 },
      { tenure: "30-45 days", general: 0, senior: 0 },
      { tenure: "46-60 days", general: 0, senior: 0 },
      { tenure: "61-89 days", general: 0, senior: 0 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.00 },
      { tenure: "6-9 months", general: 7.25, senior: 7.50 },
      { tenure: "9-12 months", general: 7.75, senior: 8.00 },
      { tenure: "1-2 years", general: 8.25, senior: 8.50 },
      { tenure: "2-3 years", general: 8.40, senior: 8.65 },
      { tenure: "3-5 years", general: 8.25, senior: 8.50 },
      { tenure: "5-10 years", general: 8.00, senior: 8.25 }
    ]
  },
  {
    id: "lic_housing",
    name: "LIC Housing Finance",
    logo_url: "https://www.lichousing.com/static/images/logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0, senior: 0 },
      { tenure: "15-29 days", general: 0, senior: 0 },
      { tenure: "30-45 days", general: 0, senior: 0 },
      { tenure: "46-60 days", general: 0, senior: 0 },
      { tenure: "61-89 days", general: 0, senior: 0 },
      { tenure: "90 days - 6 months", general: 6.50, senior: 7.00 },
      { tenure: "6-9 months", general: 7.00, senior: 7.50 },
      { tenure: "9-12 months", general: 7.50, senior: 8.00 },
      { tenure: "1-2 years", general: 8.00, senior: 8.50 },
      { tenure: "2-3 years", general: 8.25, senior: 8.75 },
      { tenure: "3-5 years", general: 8.10, senior: 8.60 },
      { tenure: "5-10 years", general: 7.75, senior: 8.25 }
    ]
  }
];

export default nbfcBanks; 