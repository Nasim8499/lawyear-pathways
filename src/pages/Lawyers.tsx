import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Search, MapPin, BadgeCheck, Briefcase, Languages, TrendingUp } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { LAWYERS } from "@/data/lawyers";

const FILTERS = ["All", "Australia", "New Zealand", "Singapore", "Schengen"];

const COUNTRY_TINT: Record<string, string> = {
  Australia: "from-sky-500/15 to-amber-400/10",
  "New Zealand": "from-emerald-500/15 to-teal-400/10",
  Singapore: "from-rose-500/15 to-orange-400/10",
  Schengen: "from-indigo-500/15 to-violet-400/10",
};
const COUNTRY_FLAG: Record<string, string> = {
  Australia: "AU", "New Zealand": "NZ", Singapore: "SG", Schengen: "EU",
};

const Lawyers = () => {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => LAWYERS.filter((l) =>
    (filter === "All" || l.country === filter) &&
    (l.name.toLowerCase().includes(q.toLowerCase()) || l.spec.toLowerCase().includes(q.toLowerCase()))
  ), [q, filter]);

  return (
    <MobileLayout title="Registered Counsel">
      <div className="px-4 pt-4 animate-fade-in pb-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search lawyers, specialities"
            className="w-full pl-9 pr-3 py-3 rounded-2xl bg-card border border-border text-sm outline-none shadow-card focus:ring-2 focus:ring-primary/30 transition-all"/>
        </div>

        {/* Infographic stat strip */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-2.5 shadow-glow">
            <p className="font-display text-xl leading-none">{LAWYERS.length}+</p>
            <p className="text-[9px] opacity-80 mt-1 uppercase tracking-wider">Counsel</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-2.5 shadow-card">
            <p className="font-display text-xl leading-none text-gold flex items-center gap-1"><Star size={12} className="fill-gold text-gold"/>4.8</p>
            <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">Avg rating</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-2.5 shadow-card">
            <p className="font-display text-xl leading-none flex items-center gap-1"><TrendingUp size={12} className="text-primary"/>98%</p>
            <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">Approval</p>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {FILTERS.map((f) => (
            <button key={f} onClick={()=>setFilter(f)}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 ${filter===f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-card border border-border text-muted-foreground"}`}>{f}</button>
          ))}
        </div>
        {/* 2-column profile cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {list.map((l, i) => {
            const tint = COUNTRY_TINT[l.country] ?? "from-primary/10 to-gold/10";
            const flag = COUNTRY_FLAG[l.country] ?? "";
            return (
              <Link to={`/lawyers/${l.id}`} key={l.id}
                className={`group relative block bg-card rounded-3xl p-3 border border-border shadow-card hover-lift overflow-hidden animate-fade-up stagger-${Math.min(i+1,5)}`}>
                {/* Top tinted band */}
                <div className={`absolute inset-x-0 top-0 h-16 bg-gradient-to-br ${tint}`}/>
                <div className="absolute top-2 right-2 z-10 text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-background/80 backdrop-blur border border-border">{flag}</div>

                <div className="relative pt-2 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow ring-4 ring-card">
                    <span className="font-display text-primary-foreground text-lg">{l.name.split(" ").map(n=>n[0]).join("")}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <p className="font-display text-[13px] leading-tight text-foreground truncate max-w-[110px]">{l.name}</p>
                    <BadgeCheck size={11} className="text-gold shrink-0"/>
                  </div>
                  <p className="text-[10px] text-muted-foreground truncate w-full">{l.spec}</p>

                  {/* Infographic mini-stats */}
                  <div className="mt-2 grid grid-cols-2 gap-1.5 w-full">
                    <div className="rounded-lg bg-secondary px-1.5 py-1 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-foreground flex items-center gap-0.5"><Star size={9} className="fill-gold text-gold"/>{l.rating}</span>
                      <span className="text-[8px] text-muted-foreground uppercase tracking-wider">Rating</span>
                    </div>
                    <div className="rounded-lg bg-secondary px-1.5 py-1 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-gold">{l.years}y</span>
                      <span className="text-[8px] text-muted-foreground uppercase tracking-wider">Exp</span>
                    </div>
                  </div>

                  {/* Bar chart: experience visualization */}
                  <div className="mt-2 w-full">
                    <div className="h-1 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-gradient-gold" style={{ width: `${Math.min(l.years*6, 100)}%` }}/>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-[9px] text-muted-foreground w-full justify-center">
                    <MapPin size={9}/><span className="truncate">{l.location}</span>
                  </div>

                  <div className="mt-2 w-full flex items-center justify-between gap-1 text-[9px]">
                    <span className="flex items-center gap-0.5 text-muted-foreground"><Briefcase size={9}/>{l.services.length} svc</span>
                    <span className="flex items-center gap-0.5 text-muted-foreground"><Languages size={9}/>{l.languages.length} lang</span>
                  </div>

                  <div className="mt-2.5 w-full bg-gradient-primary text-primary-foreground text-[10px] font-semibold py-1.5 rounded-xl shadow-glow">
                    View profile
                  </div>
                </div>
              </Link>
            );
          })}
          {list.length === 0 && (
            <p className="col-span-2 text-center text-sm text-muted-foreground py-10">No counsel found.</p>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Lawyers;