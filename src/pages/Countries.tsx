import { Link } from "react-router-dom";
import { ChevronLeft, MapPin, Plane, Briefcase, Globe } from "lucide-react";

const items = [
  { c: "Australia", icon: MapPin, services: ["Skilled Migration", "Partner Visa", "Student Visa", "Business Innovation"] },
  { c: "New Zealand", icon: Plane, services: ["Skilled Migrant", "Work to Residence", "Partnership", "Investor"] },
  { c: "Singapore", icon: Briefcase, services: ["Employment Pass", "S Pass", "PR Application", "Dependant Pass"] },
  { c: "Schengen", icon: Globe, services: ["Short Stay Visa", "Long Stay", "Family Reunification", "Appeals"] },
];

const Countries = () => (
  <main className="min-h-screen bg-gradient-soft py-8 px-4">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mb-4"><ChevronLeft size={16}/>Back</Link>
      <h1 className="text-2xl font-bold text-foreground">Country & Service</h1>
      <p className="text-sm text-muted-foreground">Choose a destination to see consultation areas.</p>
      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        {items.map((it) => {
          const I = it.icon;
          return (
            <div key={it.c} className="bg-card rounded-2xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <I className="text-primary-foreground" size={18}/>
                </div>
                <p className="font-bold text-foreground">{it.c}</p>
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-1.5">
                {it.services.map((s) => (
                  <li key={s} className="text-xs px-2 py-1 rounded-lg bg-secondary text-secondary-foreground font-medium">{s}</li>
                ))}
              </ul>
              <Link to="/book" className="mt-3 inline-block text-xs font-semibold bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-full">Book Consultation</Link>
            </div>
          );
        })}
      </div>
    </div>
  </main>
);

export default Countries;