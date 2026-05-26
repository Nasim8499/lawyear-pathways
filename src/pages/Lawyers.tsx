import { Link } from "react-router-dom";
import { Scale, Star } from "lucide-react";
import { TopNav, Footer } from "@/components/TopNav";

const lawyers = [
  { name: "Sarah Mitchell", country: "Australia", spec: "Skilled Migration", rating: 4.9 },
  { name: "James Tan", country: "Singapore", spec: "Work Pass & PR", rating: 4.8 },
  { name: "Emily Carter", country: "New Zealand", spec: "Partner & Family", rating: 4.9 },
  { name: "Lukas Muller", country: "Schengen", spec: "EU Visa & Appeals", rating: 4.7 },
  { name: "Aisha Rahman", country: "Australia", spec: "Student Pathway", rating: 4.8 },
  { name: "Marco Rossi", country: "Schengen", spec: "Business & Investor", rating: 4.6 },
];

const Lawyers = () => (
  <div className="min-h-screen bg-background">
    <TopNav />
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-foreground">Registered Lawyers</h1>
      <p className="text-sm text-muted-foreground">Browse migration lawyers and authorized legal consultants.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lawyers.map((l) => (
          <div key={l.name} className="bg-card rounded-2xl p-4 shadow-card border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Scale className="text-primary-foreground" size={20}/>
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.spec} - {l.country}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-semibold text-foreground"><Star size={12} className="fill-primary text-primary"/>{l.rating}</span>
              <Link to="/book" className="text-xs font-semibold bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-full">Book</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Lawyers;