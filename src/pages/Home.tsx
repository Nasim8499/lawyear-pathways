import { Link } from "react-router-dom";
import { Scale, Globe2, Plane, MapPin, Briefcase, Globe, Users, GraduationCap, TrendingUp, Gavel, Video, MessageCircle, Building2, BadgeCheck, ShieldCheck, Search, ArrowRight, ChevronRight } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const countries = [
  { c: "Australia", icon: MapPin, flag: "AU" },
  { c: "New Zealand", icon: Plane, flag: "NZ" },
  { c: "Singapore", icon: Briefcase, flag: "SG" },
  { c: "Schengen", icon: Globe, flag: "EU" },
];

const areas = [
  { icon: Users, label: "Family & Partner Visa" },
  { icon: GraduationCap, label: "Student Pathway" },
  { icon: TrendingUp, label: "Business & Investor" },
  { icon: Gavel, label: "Appeals & Compliance" },
];

const modes = [
  { icon: Building2, label: "Physical", desc: "In-office" },
  { icon: Video, label: "Google Meet", desc: "Video call" },
  { icon: MessageCircle, label: "WhatsApp", desc: "Chat consult" },
];

const featuredLawyers = [
  { name: "Sarah Mitchell", spec: "Skilled Migration", country: "Australia", rating: 4.9 },
  { name: "James Tan", spec: "Work Pass & PR", country: "Singapore", rating: 4.8 },
  { name: "Emily Carter", spec: "Partner & Family", country: "New Zealand", rating: 4.9 },
];

const Home = () => (
  <MobileLayout>
    {/* Editorial greeting */}
    <section className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-body">Maison • Est. 2026</p>
        <span className="text-[10px] text-gold font-semibold tracking-widest">EN</span>
      </div>
      <h1 className="font-display text-[44px] leading-[1.02] text-foreground mt-3 font-medium">
        Counsel,<br/>
        <span className="italic text-gradient-gold">crafted</span> for<br/>
        your journey.
      </h1>
      <p className="text-sm text-muted-foreground mt-3 max-w-[280px] leading-relaxed">A private bureau of registered migration lawyers — Australia, New Zealand, Singapore, Schengen.</p>
      <div className="mt-5 relative">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"/>
        <input placeholder="Search counsel, jurisdictions…"
          className="w-full pl-10 pr-4 py-3.5 rounded-full bg-card border border-border/80 text-sm outline-none focus:ring-1 focus:ring-gold shadow-card font-body"/>
      </div>
    </section>

    {/* BENTO GRID */}
    <section className="px-5 mt-6 grid grid-cols-6 gap-3 auto-rows-[88px]">

      {/* Hero booking — large */}
      <Link to="/book" className="col-span-6 row-span-3 bg-gradient-deep text-primary-foreground rounded-[28px] p-5 shadow-glow relative overflow-hidden border border-foreground/30">
        <div className="absolute -right-8 -bottom-10 opacity-[0.12]"><Globe2 size={220} strokeWidth={0.8}/></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-20 blur-3xl rounded-full"/>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gold/40 text-[10px] font-semibold tracking-widest text-gold uppercase">
          <BadgeCheck size={11}/> Registered
        </span>
        <h2 className="font-display font-medium text-[30px] leading-[1.05] mt-3">
          Book a private <span className="italic text-gradient-gold">consultation</span>
        </h2>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Next slot</p>
            <p className="text-sm font-semibold">Fri · 3:00 PM</p>
          </div>
          <span className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-foreground shadow-gold">
            <ArrowRight size={18}/>
          </span>
        </div>
      </Link>

      {/* Lawyers count — tall */}
      <Link to="/lawyers" className="col-span-3 row-span-2 bg-card rounded-[24px] p-4 border border-border shadow-card relative overflow-hidden">
        <Scale className="absolute -right-3 -bottom-3 text-foreground/5" size={110} strokeWidth={1}/>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Counsel</p>
        <p className="font-display text-[40px] leading-none mt-1 text-foreground">120<span className="text-gold">+</span></p>
        <p className="text-[11px] text-muted-foreground mt-1">registered lawyers</p>
        <ChevronRight size={14} className="absolute top-4 right-4 text-muted-foreground"/>
      </Link>

      {/* Trust badge */}
      <div className="col-span-3 row-span-1 bg-gradient-gold rounded-[24px] p-3 flex items-center gap-2 shadow-gold">
        <ShieldCheck className="text-foreground shrink-0" size={20}/>
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/70">Trusted</p>
          <p className="text-[11px] font-semibold text-foreground">Verified bureau</p>
        </div>
      </div>

      {/* Rating */}
      <Link to="/lawyers" className="col-span-3 row-span-1 bg-card rounded-[24px] p-3 border border-border shadow-card flex items-center gap-2">
        <span className="text-gold text-lg">★</span>
        <div className="leading-tight">
          <p className="font-display text-xl text-foreground">4.9<span className="text-sm text-muted-foreground">/5</span></p>
          <p className="text-[10px] text-muted-foreground">2.4k reviews</p>
        </div>
      </Link>

      {/* Countries — wide */}
      <div className="col-span-6 row-span-2 bg-card rounded-[28px] p-4 border border-border shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Jurisdictions</p>
            <p className="font-display text-xl text-foreground leading-tight">Four destinations</p>
          </div>
          <Link to="/countries" className="text-[10px] font-semibold text-gold uppercase tracking-widest flex items-center gap-1">All <ChevronRight size={11}/></Link>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {countries.map((c) => {
            const I = c.icon;
            return (
              <Link to="/countries" key={c.c} className="flex flex-col items-center text-center gap-1.5 py-2 rounded-2xl border border-border/60 hover:border-gold transition-colors">
                <div className="w-9 h-9 rounded-full bg-gradient-deep flex items-center justify-center">
                  <I className="text-gold" size={14}/>
                </div>
                <p className="text-[10px] font-semibold text-foreground leading-tight">{c.c}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mode tiles */}
      {modes.map((m, i) => {
        const I = m.icon;
        const isGold = i === 1;
        return (
          <Link to="/book" key={m.label} className={`col-span-2 row-span-2 rounded-[24px] p-3 border shadow-card relative overflow-hidden flex flex-col justify-between ${isGold ? "bg-gradient-gold border-gold/40" : "bg-card border-border"}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isGold ? "bg-foreground/10" : "bg-gradient-deep"}`}>
              <I size={16} className={isGold ? "text-foreground" : "text-gold"}/>
            </div>
            <div>
              <p className={`font-display text-base leading-tight ${isGold ? "text-foreground" : "text-foreground"}`}>{m.label}</p>
              <p className={`text-[10px] mt-0.5 ${isGold ? "text-foreground/70" : "text-muted-foreground"}`}>{m.desc}</p>
            </div>
          </Link>
        );
      })}

      {/* Services — wide */}
      <div className="col-span-6 row-span-2 bg-gradient-deep text-primary-foreground rounded-[28px] p-4 shadow-glow border border-foreground/30">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg">Practice <span className="italic text-gradient-gold">areas</span></p>
          <Link to="/book" className="text-[10px] font-semibold text-gold uppercase tracking-widest">Brief us</Link>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {areas.map((a) => {
            const I = a.icon;
            return (
              <div key={a.label} className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-foreground/5 border border-foreground/10">
                <I size={14} className="text-gold shrink-0"/>
                <p className="text-[11px] font-medium leading-tight">{a.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured counsel — wide tall */}
      <div className="col-span-6 row-span-4 bg-card rounded-[28px] p-4 border border-border shadow-card">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg text-foreground">Senior <span className="italic text-gold">counsel</span></p>
          <Link to="/lawyers" className="text-[10px] font-semibold text-gold uppercase tracking-widest flex items-center gap-1">All <ChevronRight size={11}/></Link>
        </div>
        <div className="mt-3 divide-y divide-border/60">
          {featuredLawyers.map((l) => (
            <Link to="/book" key={l.name} className="flex items-center gap-3 py-3">
              <div className="w-11 h-11 rounded-full bg-gradient-deep border border-gold/30 flex items-center justify-center shrink-0">
                <span className="font-display text-gold text-base">{l.name.split(" ").map(n=>n[0]).join("")}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-base text-foreground truncate leading-tight">{l.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{l.spec} · {l.country}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-semibold text-gold">★ {l.rating}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Verified</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <div className="px-5 mt-6 mb-2 text-center">
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Maison Migration LawYear</p>
      <p className="font-display italic text-foreground/40 text-sm mt-1">discretion · expertise · outcome</p>
    </div>
  </MobileLayout>
);

export default Home;