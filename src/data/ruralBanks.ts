import type { Bank } from './types';

const ruralBanks: Bank[] = [
  {
    id: "kerala_gramin",
    name: "Kerala Gramin Bank",
    logo_url: "https://www.keralagbank.com/assets/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "karnataka_vikas",
    name: "Karnataka Vikas Grameena Bank",
    logo_url: "https://www.kvgbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.60, senior: 7.10 },
      { tenure: "1-2 years", general: 6.90, senior: 7.40 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "baroda_up",
    name: "Baroda UP Bank",
    logo_url: "https://www.barodaupbank.in/sites/default/files/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "punjab_gramin",
    name: "Punjab Gramin Bank",
    logo_url: "https://www.pgb.org.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "aryavart",
    name: "Aryavart Bank",
    logo_url: "https://www.aryavart-rrb.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.60, senior: 7.10 },
      { tenure: "1-2 years", general: 6.95, senior: 7.45 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  }
];

export default ruralBanks; 