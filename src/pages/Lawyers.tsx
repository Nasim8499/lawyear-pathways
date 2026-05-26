import { Link } from "react-router-dom";
import { Scale, Star, Search } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const lawyers = [
  { name: "Sarah Mitchell", country: "Australia", spec: "Skilled Migration", rating: 4.9 },
  { name: "James Tan", country: "Singapore", spec: "Work Pass & PR", rating: 4.8 },
  { name: "Emily Carter", country: "New Zealand", spec: "Partner & Family", rating: 4.9 },
  { name: "Lukas Muller", country: "Schengen", spec: "EU Visa & Appeals", rating: 4.7 },
  { name: "Aisha Rahman", country: "Australia", spec: "Student Pathway", rating: 4.8 },
  { name: "Marco Rossi", country: "Schengen", spec: "Business & Investor", rating: 4.6 },
];

const Lawyers = () => (
  <MobileLayout title="Registered Lawyers">
    <div className="px-4 pt-4">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
        <input placeholder="Search lawyers" className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-card border border-border text-sm outline-none shadow-card"/>
      </div>
      <div className="mt-4 space-y-2.5">
        {lawyers.map((l) => (
          <div key={l.name} className="bg-card rounded-2xl p-3 shadow-card border border-border">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Scale className="text-primary-foreground" size={18}/>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{l.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{l.spec} • {l.country}</p>
              </div>
              <Link to="/book" className="text-[11px] font-semibold bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-glow">Book</Link>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] font-semibold text-foreground"><Star size={12} className="fill-primary text-primary"/>{l.rating}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </MobileLayout>
);

export default Lawyers;