import { Link } from "react-router-dom";
import { MapPin, Plane, Briefcase, Globe } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const items = [
  { c: "Australia", icon: MapPin, services: ["Skilled Migration", "Partner Visa", "Student Visa", "Business Innovation"] },
  { c: "New Zealand", icon: Plane, services: ["Skilled Migrant", "Work to Residence", "Partnership", "Investor"] },
  { c: "Singapore", icon: Briefcase, services: ["Employment Pass", "S Pass", "PR Application", "Dependant Pass"] },
  { c: "Schengen", icon: Globe, services: ["Short Stay Visa", "Long Stay", "Family Reunification", "Appeals"] },
];

const Countries = () => (
  <MobileLayout title="Countries">
    <div className="px-4 pt-4">
      <p className="text-xs text-muted-foreground">Choose a destination to see consultation areas.</p>
      <div className="mt-4 space-y-3">
        {items.map((it) => {
          const I = it.icon;
          return (
            <div key={it.c} className="bg-card rounded-3xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <I className="text-primary-foreground" size={18}/>
                </div>
                <p className="font-bold text-foreground text-sm">{it.c}</p>
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-1.5">
                {it.services.map((s) => (
                  <li key={s} className="text-[11px] px-2 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-semibold">{s}</li>
                ))}
              </ul>
              <Link to="/book" className="mt-3 inline-block text-xs font-semibold bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow">Book Consultation</Link>
            </div>
          );
        })}
      </div>
    </div>
  </MobileLayout>
);

export default Countries;