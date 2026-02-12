export interface Scheme {
  id: number;
  name: string;
  category: string;
  eligibility: string;
  benefits: string;
  apply: string;
}

export const schemes: Scheme[] = [
  {
    id: 1,
    name: "Pradhan Mantri Jan Dhan Yojana",
    category: "Financial Inclusion",
    eligibility: "Women above 18 years",
    benefits: "Zero balance bank account, debit card, insurance",
    apply: "Visit nearest bank branch",
  },
  {
    id: 2,
    name: "Ujjwala Yojana",
    category: "Women Welfare",
    eligibility: "BPL women households",
    benefits: "Free LPG gas connection",
    apply: "Apply through gas agency",
  },
  {
    id: 3,
    name: "PM Matru Vandana Yojana",
    category: "Maternal Health",
    eligibility: "Pregnant women",
    benefits: "₹5,000 maternity benefit",
    apply: "Apply via Anganwadi / health worker",
  },
];
