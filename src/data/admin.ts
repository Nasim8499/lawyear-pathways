export interface BookingRecord {
  id: string;
  client: string;
  country: string;
  lawyer: string;
  date: string;
  channel: "Office" | "Google Meet" | "WhatsApp";
  status: "New" | "Confirmed" | "Completed" | "Cancelled";
  fee: string;
}

export interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  country: string;
  service: string;
  priority: "High" | "Medium" | "Low";
  stage: "New" | "Contacted" | "Document Review" | "Converted";
}

export interface SiteContent {
  headline: string;
  subheadline: string;
  announcement: string;
  supportEmail: string;
  whatsapp: string;
}

export const BOOKING_STORAGE_KEY = "lawyear.admin.bookings";
export const LEAD_STORAGE_KEY = "lawyear.admin.leads";
export const CONTENT_STORAGE_KEY = "lawyear.admin.content";
export const ADMIN_AUTH_KEY = "lawyear.admin.authenticated";

export const DEFAULT_BOOKINGS: BookingRecord[] = [
  { id: "BK-1024", client: "Md Ashraf Ali", country: "Australia", lawyer: "Sarah Mitchell", date: "2026-07-10 15:00", channel: "Google Meet", status: "Confirmed", fee: "AUD 250" },
  { id: "BK-1025", client: "Nusrat Jahan", country: "New Zealand", lawyer: "Emily Carter", date: "2026-07-12 11:30", channel: "WhatsApp", status: "New", fee: "NZD 240" },
  { id: "BK-1026", client: "Rahim Uddin", country: "Singapore", lawyer: "James Tan", date: "2026-07-15 17:00", channel: "Office", status: "Completed", fee: "SGD 220" },
];

export const DEFAULT_LEADS: LeadRecord[] = [
  { id: "LD-901", name: "Imran Hossain", phone: "+880 1711 000111", country: "Australia", service: "Student Visa", priority: "High", stage: "Document Review" },
  { id: "LD-902", name: "Sadia Akter", phone: "+880 1812 222333", country: "Schengen", service: "Family Reunification", priority: "Medium", stage: "Contacted" },
  { id: "LD-903", name: "Tanvir Hasan", phone: "+880 1913 444555", country: "Singapore", service: "Employment Pass", priority: "Low", stage: "New" },
];

export const DEFAULT_CONTENT: SiteContent = {
  headline: "Counsel, crafted for your journey.",
  subheadline: "A private bureau of registered migration lawyers for Australia, New Zealand, Singapore and Schengen pathways.",
  announcement: "Priority consultation slots are open for July 2026.",
  supportEmail: "support@lawyear.example",
  whatsapp: "+880 1345 860223",
};

const isBrowser = () => typeof window !== "undefined";

export function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T) {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getBookings = () => readJson<BookingRecord[]>(BOOKING_STORAGE_KEY, DEFAULT_BOOKINGS);
export const saveBookings = (bookings: BookingRecord[]) => writeJson(BOOKING_STORAGE_KEY, bookings);
export const getLeads = () => readJson<LeadRecord[]>(LEAD_STORAGE_KEY, DEFAULT_LEADS);
export const saveLeads = (leads: LeadRecord[]) => writeJson(LEAD_STORAGE_KEY, leads);
export const getSiteContent = () => readJson<SiteContent>(CONTENT_STORAGE_KEY, DEFAULT_CONTENT);
export const saveSiteContent = (content: SiteContent) => writeJson(CONTENT_STORAGE_KEY, content);

export const exportAdminSnapshot = () => ({
  exportedAt: new Date().toISOString(),
  bookings: getBookings(),
  leads: getLeads(),
  content: getSiteContent(),
});
