import type { Bank } from './types';

const privateBanks: Bank[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    logo_url: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b76e2c1e-4c9c-4f2c-bc67-d191bf8c0c43/common/logo.svg",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.60, senior: 7.10 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "icici",
    name: "ICICI Bank",
    logo_url: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/logo.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.90, senior: 7.40 }
    ]
  },
  {
    id: "axis",
    name: "Axis Bank",
    logo_url: "https://www.axisbank.com/assets/images/logo-white.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    logo_url: "https://www.kotak.com/content/dam/Kotak/kotak-bank-logo.jpg",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 2.75, senior: 3.25 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.20, senior: 6.70 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "idbi",
    name: "IDBI Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IDBI_Bank_Logo.svg/200px-IDBI_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/IndusInd_Bank_Logo.svg/200px-IndusInd_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 7.25, senior: 7.75 },
      { tenure: "2-3 years", general: 7.25, senior: 7.75 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "yes",
    name: "Yes Bank",
    logo_url: "https://www.yesbank.in/content/published/api/v1.1/assets/CONT4C8C5C0D4C5F4EAFB057C9B76449A390/native/YBL-logo-for-Light-BG.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.50, senior: 4.00 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 7.25, senior: 7.75 },
      { tenure: "1-2 years", general: 7.50, senior: 8.00 },
      { tenure: "2-3 years", general: 7.25, senior: 7.75 },
      { tenure: "3-5 years", general: 7.25, senior: 7.75 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "federal",
    name: "Federal Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Federal_Bank_Logo.svg/200px-Federal_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.85, senior: 7.35 },
      { tenure: "1-2 years", general: 7.25, senior: 7.75 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "idfc",
    name: "IDFC First Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/IDFC_First_Bank_Logo.svg/200px-IDFC_First_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.50, senior: 4.00 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 7.25, senior: 7.75 },
      { tenure: "1-2 years", general: 7.75, senior: 8.25 },
      { tenure: "2-3 years", general: 7.50, senior: 8.00 },
      { tenure: "3-5 years", general: 7.25, senior: 7.75 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "au",
    name: "AU Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/AU_Small_Finance_Bank_Logo.svg/200px-AU_Small_Finance_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 6.25, senior: 6.75 },
      { tenure: "6-9 months", general: 6.75, senior: 7.25 },
      { tenure: "9-12 months", general: 7.50, senior: 8.00 },
      { tenure: "1-2 years", general: 8.00, senior: 8.50 },
      { tenure: "2-3 years", general: 7.75, senior: 8.25 },
      { tenure: "3-5 years", general: 7.50, senior: 8.00 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "rbl",
    name: "RBL Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/RBL_Bank_Logo.svg/200px-RBL_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.25, senior: 5.75 },
      { tenure: "90 days - 6 months", general: 6.25, senior: 6.75 },
      { tenure: "6-9 months", general: 6.75, senior: 7.25 },
      { tenure: "9-12 months", general: 7.40, senior: 7.90 },
      { tenure: "1-2 years", general: 7.80, senior: 8.30 },
      { tenure: "2-3 years", general: 7.50, senior: 8.00 },
      { tenure: "3-5 years", general: 7.25, senior: 7.75 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "dbs",
    name: "DBS Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/DBS_Bank_logo.svg/200px-DBS_Bank_logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.90, senior: 7.40 },
      { tenure: "1-2 years", general: 7.20, senior: 7.70 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "south_indian",
    name: "South Indian Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/s/si/South_Indian_Bank_Logo.svg/200px-South_Indian_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "karur_vysya",
    name: "Karur Vysya Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/k/kv/Karur_Vysya_Bank_Logo.svg/200px-Karur_Vysya_Bank_Logo.svg.png",
    type: 'private',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.90, senior: 7.40 },
      { tenure: "1-2 years", general: 7.25, senior: 7.75 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  }
];

export default privateBanks; 