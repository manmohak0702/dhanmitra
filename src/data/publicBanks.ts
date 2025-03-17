import type { Bank } from './types';

const publicBanks: Bank[] = [
  {
    id: "sbi",
    name: "State Bank of India",
    logo_url: "https://sbi.co.in/documents/16012/22867/sbi-logo.svg",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "400 days", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    logo_url: "https://www.pnbindia.in/images/logo.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.80, senior: 6.30 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "300 days", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    logo_url: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/logo/logo.svg",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.85, senior: 7.35 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "399 days", general: 7.15, senior: 7.65 }
    ]
  },
  {
    id: "canara",
    name: "Canara Bank",
    logo_url: "https://canarabank.com/assets/images/Canara-Bank-Logo.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 6.70, senior: 7.20 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "444 days", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "union",
    name: "Union Bank of India",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Union_Bank_of_India_Logo.svg/200px-Union_Bank_of_India_Logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.70, senior: 7.20 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "399 days", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "iob",
    name: "Indian Overseas Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Indian_Overseas_Bank_Logo.svg/200px-Indian_Overseas_Bank_Logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 6.70, senior: 7.20 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "555 days", general: 7.15, senior: 7.65 }
    ]
  },
  {
    id: "boi",
    name: "Bank of India",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bank_of_India_logo.svg/200px-Bank_of_India_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "444 days", general: 7.05, senior: 7.55 }
    ]
  }
];

export default publicBanks; 