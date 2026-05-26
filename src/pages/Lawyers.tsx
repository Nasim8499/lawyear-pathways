import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Search, MapPin, ChevronRight } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { LAWYERS } from "@/data/lawyers";

const FILTERS = ["All", "Australia", "New Zealand", "Singapore", "Schengen"];

const Lawyers = () => {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => LAWYERS.filter((l) =>
    (filter === "All" || l.country === filter) &&
    (l.name.toLowerCase().includes(q.toLowerCase()) || l.spec.toLowerCase().includes(q.toLowerCase()))
  ), [q, filter]);

  return (
    <MobileLayout title="Registered Counsel">
      <div className="px-4 pt-4 animate-fade-in">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search lawyers, specialities"
            className="w-full pl-9 pr-3 py-3 rounded-2xl bg-card border border-border text-sm outline-none shadow-card focus:ring-2 focus:ring-primary/30 transition-all"/>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {FILTERS.map((f) => (
            <button key={f} onClick={()=>setFilter(f)}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 ${filter===f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-card border border-border text-muted-foreground"}`}>{f}</button>
          ))}
        </div>
        <div className="mt-4 space-y-2.5">
          {list.map((l, i) => (
            <Link to={`/lawyers/${l.id}`} key={l.id}
              className={`block bg-card rounded-2xl p-3 shadow-card border border-border hover-lift animate-fade-up stagger-${Math.min(i+1,5)}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <span className="font-display text-primary-foreground text-base">{l.name.split(" ").map(n=>n[0]).join("")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm truncate font-display">{l.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{l.spec}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-foreground"><Star size={10} className="fill-gold text-gold"/>{l.rating}</span>
                    <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground"><MapPin size={10}/>{l.location}</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0"/>
              </div>
            </Link>
          ))}
          {list.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-10">No counsel found.</p>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Lawyers;