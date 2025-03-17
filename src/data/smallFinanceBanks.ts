import type { Bank } from './types';

const smallFinanceBanks: Bank[] = [
  {
    id: "au",
    name: "AU Small Finance Bank",
    logo_url: "https://www.aubank.in/assets/images/logo.svg",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 6.25, senior: 6.75 },
      { tenure: "6-9 months", general: 6.75, senior: 7.25 },
      { tenure: "9-12 months", general: 7.50, senior: 8.00 },
      { tenure: "1-2 years", general: 7.75, senior: 8.25 },
      { tenure: "2-3 years", general: 7.75, senior: 8.25 },
      { tenure: "3-5 years", general: 7.75, senior: 8.25 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "capital",
    name: "Capital Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Capital_Small_Finance_Bank_Logo.svg/200px-Capital_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "esaf",
    name: "ESAF Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESAF_Small_Finance_Bank_Logo.svg/200px-ESAF_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 5.00, senior: 5.50 },
      { tenure: "61-89 days", general: 5.50, senior: 6.00 },
      { tenure: "90 days - 6 months", general: 6.50, senior: 7.00 },
      { tenure: "6-9 months", general: 7.00, senior: 7.50 },
      { tenure: "9-12 months", general: 7.50, senior: 8.00 },
      { tenure: "1-2 years", general: 8.00, senior: 8.50 },
      { tenure: "2-3 years", general: 8.00, senior: 8.50 },
      { tenure: "3-5 years", general: 8.00, senior: 8.50 },
      { tenure: "5-10 years", general: 7.50, senior: 8.00 }
    ]
  },
  {
    id: "equitas",
    name: "Equitas Small Finance Bank",
    logo_url: "https://www.equitasbank.com/sites/default/files/2021-07/equitas-logo.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.25, senior: 5.75 },
      { tenure: "90 days - 6 months", general: 6.25, senior: 6.75 },
      { tenure: "6-9 months", general: 6.75, senior: 7.25 },
      { tenure: "9-12 months", general: 7.25, senior: 7.75 },
      { tenure: "1-2 years", general: 7.50, senior: 8.00 },
      { tenure: "2-3 years", general: 7.50, senior: 8.00 },
      { tenure: "3-5 years", general: 7.50, senior: 8.00 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "fincare",
    name: "Fincare Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Fincare_Small_Finance_Bank_Logo.svg/200px-Fincare_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.50, senior: 5.00 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.75, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.25 },
      { tenure: "6-9 months", general: 7.25, senior: 7.75 },
      { tenure: "9-12 months", general: 7.90, senior: 8.40 },
      { tenure: "1-2 years", general: 8.41, senior: 8.91 },
      { tenure: "2-3 years", general: 8.41, senior: 8.91 },
      { tenure: "3-5 years", general: 8.41, senior: 8.91 },
      { tenure: "5-10 years", general: 7.90, senior: 8.40 }
    ]
  },
  {
    id: "jana",
    name: "Jana Small Finance Bank",
    logo_url: "https://www.janabank.com/images/logo.svg",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.50, senior: 5.00 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.75, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.25 },
      { tenure: "6-9 months", general: 7.25, senior: 7.75 },
      { tenure: "9-12 months", general: 7.75, senior: 8.25 },
      { tenure: "1-2 years", general: 8.25, senior: 8.75 },
      { tenure: "2-3 years", general: 8.25, senior: 8.75 },
      { tenure: "3-5 years", general: 8.25, senior: 8.75 },
      { tenure: "5-10 years", general: 7.75, senior: 8.25 }
    ]
  },
  {
    id: "northeast",
    name: "North East Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/North_East_Small_Finance_Bank_Logo.svg/200px-North_East_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 4.00, senior: 4.50 },
      { tenure: "15-29 days", general: 4.25, senior: 4.75 },
      { tenure: "30-45 days", general: 4.75, senior: 5.25 },
      { tenure: "46-60 days", general: 5.50, senior: 6.00 },
      { tenure: "61-89 days", general: 6.00, senior: 6.50 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.50 },
      { tenure: "6-9 months", general: 7.50, senior: 8.00 },
      { tenure: "9-12 months", general: 8.50, senior: 9.00 },
      { tenure: "1-2 years", general: 9.00, senior: 9.50 },
      { tenure: "2-3 years", general: 9.00, senior: 9.50 },
      { tenure: "3-5 years", general: 9.00, senior: 9.50 },
      { tenure: "5-10 years", general: 8.40, senior: 8.75 }
    ]
  },
  {
    id: "shivalik",
    name: "Shivalik Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shivalik_Small_Finance_Bank_Logo.svg/200px-Shivalik_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.50, senior: 5.00 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.75, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.25 },
      { tenure: "6-9 months", general: 7.50, senior: 8.00 },
      { tenure: "9-12 months", general: 8.25, senior: 8.75 },
      { tenure: "1-2 years", general: 8.70, senior: 9.20 },
      { tenure: "2-3 years", general: 8.70, senior: 9.20 },
      { tenure: "3-5 years", general: 8.70, senior: 9.20 },
      { tenure: "5-10 years", general: 8.00, senior: 8.50 }
    ]
  },
  {
    id: "suryoday",
    name: "Suryoday Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Suryoday_Small_Finance_Bank_Logo.svg/200px-Suryoday_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 4.00, senior: 4.25 },
      { tenure: "15-29 days", general: 4.25, senior: 4.50 },
      { tenure: "30-45 days", general: 4.75, senior: 5.00 },
      { tenure: "46-60 days", general: 5.50, senior: 5.75 },
      { tenure: "61-89 days", general: 6.00, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.25 },
      { tenure: "6-9 months", general: 7.75, senior: 8.00 },
      { tenure: "9-12 months", general: 8.50, senior: 8.75 },
      { tenure: "1-2 years", general: 9.01, senior: 9.25 },
      { tenure: "2-3 years", general: 9.01, senior: 9.25 },
      { tenure: "3-5 years", general: 9.01, senior: 9.25 },
      { tenure: "5-10 years", general: 8.50, senior: 8.75 }
    ]
  },
  {
    id: "ujjivan",
    name: "Ujjivan Small Finance Bank",
    logo_url: "https://www.ujjivansfb.in/assets/web/images/logo.svg",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.50, senior: 5.00 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.75, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.25 },
      { tenure: "6-9 months", general: 7.50, senior: 8.00 },
      { tenure: "9-12 months", general: 8.00, senior: 8.50 },
      { tenure: "1-2 years", general: 8.50, senior: 9.00 },
      { tenure: "2-3 years", general: 8.50, senior: 9.00 },
      { tenure: "3-5 years", general: 8.50, senior: 9.00 },
      { tenure: "5-10 years", general: 8.00, senior: 8.50 }
    ]
  },
  {
    id: "unity",
    name: "Unity Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Unity_Small_Finance_Bank_Logo.svg/200px-Unity_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 4.00, senior: 4.50 },
      { tenure: "15-29 days", general: 4.25, senior: 4.75 },
      { tenure: "30-45 days", general: 4.75, senior: 5.25 },
      { tenure: "46-60 days", general: 5.50, senior: 6.00 },
      { tenure: "61-89 days", general: 6.00, senior: 6.50 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.50 },
      { tenure: "6-9 months", general: 7.75, senior: 8.25 },
      { tenure: "9-12 months", general: 8.50, senior: 9.00 },
      { tenure: "1-2 years", general: 9.00, senior: 9.50 },
      { tenure: "2-3 years", general: 9.00, senior: 9.50 },
      { tenure: "3-5 years", general: 9.00, senior: 9.50 },
      { tenure: "5-10 years", general: 8.50, senior: 8.90 }
    ]
  },
  {
    id: "utkarsh",
    name: "Utkarsh Small Finance Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/u/u8/Utkarsh_Small_Finance_Bank_Logo.svg/200px-Utkarsh_Small_Finance_Bank_Logo.svg.png",
    type: 'small_finance',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.35 },
      { tenure: "15-29 days", general: 4.00, senior: 4.60 },
      { tenure: "30-45 days", general: 4.50, senior: 5.10 },
      { tenure: "46-60 days", general: 5.25, senior: 5.85 },
      { tenure: "61-89 days", general: 5.75, senior: 6.35 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.35 },
      { tenure: "6-9 months", general: 7.50, senior: 8.10 },
      { tenure: "9-12 months", general: 8.00, senior: 8.60 },
      { tenure: "1-2 years", general: 8.50, senior: 9.10 },
      { tenure: "2-3 years", general: 8.50, senior: 9.10 },
      { tenure: "3-5 years", general: 8.50, senior: 9.10 },
      { tenure: "5-10 years", general: 8.20, senior: 8.60 }
    ]
  }
];

export default smallFinanceBanks; 