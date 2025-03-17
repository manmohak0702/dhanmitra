import type { Bank } from './types';

const corporateBanks: Bank[] = [
  {
    id: "icici_corporate",
    name: "ICICI Bank Corporate FD",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.90, senior: 7.40 },
      { tenure: "1-2 years", general: 7.25, senior: 7.85 },
      { tenure: "15 months - 18 months", general: 7.25, senior: 7.85 },
      { tenure: "2-3 years", general: 7.15, senior: 7.65 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "hdfc_corporate",
    name: "HDFC Bank Corporate FD",
    logo_url: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b76e2c1e-4c9c-4f2c-bc67-d191bf8c0c43/common/logo.svg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.85, senior: 6.35 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.20, senior: 7.70 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "axis_corporate",
    name: "Axis Bank Corporate FD",
    logo_url: "https://www.axisbank.com/assets/images/logo-white.png",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.85, senior: 6.35 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.95, senior: 7.45 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "kotak_corporate",
    name: "Kotak Mahindra Bank Corporate FD",
    logo_url: "https://www.kotak.com/content/dam/Kotak/kotak-bank-logo.jpg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.40, senior: 6.90 },
      { tenure: "9-12 months", general: 6.95, senior: 7.45 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "sbi_corporate",
    name: "State Bank of India Corporate FD",
    logo_url: "https://sbi.co.in/documents/16012/22867/sbi-logo.svg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.95, senior: 7.45 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  }
];

export default corporateBanks; 