export interface Lawyer {
  id: string;
  name: string;
  country: string;
  spec: string;
  rating: number;
  years: number;
  bio: string;
  services: string[];
  coverage: string[];
  languages: string[];
  fee: string;
  location: string;
}

export const LAWYERS: Lawyer[] = [
  { id: "sarah-mitchell", name: "Sarah Mitchell", country: "Australia", spec: "Skilled Migration", rating: 4.9, years: 12, fee: "AUD 250 / 45 min", location: "Sydney, NSW",
    bio: "Registered Migration Agent (MARN 1786543) specialising in skilled and employer-sponsored visas across Australia.",
    services: ["Skilled Migration (189/190)", "Employer Sponsored (482/186)", "Partner & Family", "Skill Assessment"],
    coverage: ["Australia"], languages: ["English", "Mandarin"] },
  { id: "james-tan", name: "James Tan", country: "Singapore", spec: "Work Pass & PR", rating: 4.8, years: 9, fee: "SGD 220 / 45 min", location: "Raffles Place, SG",
    bio: "Singapore-based immigration counsel for Employment Pass, S Pass, and Permanent Residence applications.",
    services: ["Employment Pass", "S Pass", "PR Application", "Dependant Pass"],
    coverage: ["Singapore"], languages: ["English", "Mandarin", "Malay"] },
  { id: "emily-carter", name: "Emily Carter", country: "New Zealand", spec: "Partner & Family", rating: 4.9, years: 11, fee: "NZD 240 / 45 min", location: "Auckland, NZ",
    bio: "Licensed Immigration Adviser (LIA) focused on partnership, family, and skilled migrant streams in New Zealand.",
    services: ["Partnership Visa", "Skilled Migrant", "Work to Residence", "Family Stream"],
    coverage: ["New Zealand"], languages: ["English"] },
  { id: "lukas-muller", name: "Lukas Müller", country: "Schengen", spec: "EU Visa & Appeals", rating: 4.7, years: 14, fee: "EUR 200 / 45 min", location: "Berlin, DE",
    bio: "European migration lawyer covering Schengen short-stay, long-stay, family reunification and appeals.",
    services: ["Schengen Short Stay", "Long Stay (D-Visa)", "Family Reunification", "Appeals"],
    coverage: ["Germany", "France", "Netherlands", "Austria"], languages: ["English", "German", "French"] },
  { id: "aisha-rahman", name: "Aisha Rahman", country: "Australia", spec: "Student Pathway", rating: 4.8, years: 8, fee: "AUD 200 / 45 min", location: "Melbourne, VIC",
    bio: "Student visa and post-study pathway specialist guiding applicants from offer letter to PR.",
    services: ["Student Visa (500)", "Graduate Visa (485)", "GTE Statement", "Study Pathway Plan"],
    coverage: ["Australia"], languages: ["English", "Bengali", "Hindi"] },
  { id: "marco-rossi", name: "Marco Rossi", country: "Schengen", spec: "Business & Investor", rating: 4.6, years: 16, fee: "EUR 280 / 45 min", location: "Milan, IT",
    bio: "Investor and entrepreneur visa specialist across Italy, Portugal and Spain golden-route schemes.",
    services: ["Investor Visa", "Self-Employment", "Golden Visa", "Business Setup"],
    coverage: ["Italy", "Portugal", "Spain"], languages: ["English", "Italian", "Spanish"] },
];

export const findLawyer = (id: string) => LAWYERS.find((l) => l.id === id);