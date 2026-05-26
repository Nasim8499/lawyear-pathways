import { Link } from "react-router-dom";
import { Scale, Globe2, Plane, MapPin, Briefcase, Globe, Users, GraduationCap, TrendingUp, Gavel, Video, MessageCircle, Building2, BadgeCheck, CalendarClock, ShieldCheck, Search, ArrowRight, ChevronRight } from "lucide-react";
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
    {/* Greeting */}
    <section className="px-4 pt-5">
      <p className="text-xs text-muted-foreground">Hello, Alex 👋</p>
      <h1 className="text-2xl font-bold text-foreground leading-tight mt-1">Find your migration <span className="text-gradient-primary">lawyer</span></h1>
      <div className="mt-4 relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input placeholder="Search countries, services, lawyers..."
          className="w-full pl-9 pr-3 py-3 rounded-2xl bg-card border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30 shadow-card"/>
      </div>
    </section>

    {/* Hero CTA */}
    <section className="px-4 mt-5">
      <div className="bg-gradient-deep rounded-3xl p-5 text-primary-foreground shadow-glow relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 opacity-20"><Globe2 size={160} strokeWidth={1}/></div>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary-foreground/15 text-[10px] font-semibold">
          <BadgeCheck size={12}/> Registered Consultants
        </span>
        <h2 className="mt-3 text-xl font-bold leading-tight">Book your global <br/>visa consultation</h2>
        <p className="text-xs opacity-85 mt-1">Australia • NZ • Singapore • Schengen</p>
        <Link to="/book" className="mt-4 inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2.5 rounded-2xl font-semibold text-sm shadow-glow">
          Book Appointment <ArrowRight size={14}/>
        </Link>
      </div>
    </section>

    {/* Countries */}
    <section className="px-4 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-foreground">Countries</h3>
        <Link to="/countries" className="text-xs font-semibold text-primary flex items-center gap-1">See all <ChevronRight size={12}/></Link>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {countries.map((c) => {
          const I = c.icon;
          return (
            <Link to="/countries" key={c.c} className="bg-card rounded-2xl p-3 border border-border shadow-card flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <I className="text-primary-foreground" size={18}/>
              </div>
              <p className="text-[10px] font-bold text-foreground mt-2 leading-tight">{c.c}</p>
            </Link>
          );
        })}
      </div>
    </section>

    {/* Services */}
    <section className="px-4 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-foreground">Legal Services</h3>
        <Link to="/book" className="text-xs font-semibold text-primary flex items-center gap-1">Book <ChevronRight size={12}/></Link>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {areas.map((a) => {
          const I = a.icon;
          return (
            <div key={a.label} className="bg-card rounded-2xl p-3 border border-border shadow-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center shrink-0">
                <I className="text-primary" size={18}/>
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight">{a.label}</p>
            </div>
          );
        })}
      </div>
    </section>

    {/* Consultation modes */}
    <section className="px-4 mt-6">
      <h3 className="font-bold text-foreground">Consultation Modes</h3>
      <div className="mt-3 flex gap-2.5 overflow-x-auto -mx-4 px-4 pb-2 snap-x">
        {modes.map((m) => {
          const I = m.icon;
          return (
            <Link to="/book" key={m.label} className="snap-start min-w-[60%] bg-gradient-primary rounded-3xl p-4 text-primary-foreground shadow-glow relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary-foreground/15"/>
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur">
                <I size={18}/>
              </div>
              <p className="font-bold mt-3">{m.label}</p>
              <p className="text-[11px] opacity-85">{m.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>

    {/* Featured lawyers */}
    <section className="px-4 mt-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-foreground">Top Lawyers</h3>
        <Link to="/lawyers" className="text-xs font-semibold text-primary flex items-center gap-1">See all <ChevronRight size={12}/></Link>
      </div>
      <div className="mt-3 space-y-2.5">
        {featuredLawyers.map((l) => (
          <Link to="/book" key={l.name} className="block bg-card rounded-2xl p-3 border border-border shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Scale className="text-primary-foreground" size={18}/>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{l.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{l.spec} • {l.country}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-primary">★ {l.rating}</p>
                <p className="text-[10px] text-muted-foreground">Verified</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Trust footer */}
    <section className="px-4 mt-6">
      <div className="bg-card rounded-3xl p-4 border border-border shadow-card flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gradient-soft flex items-center justify-center">
          <ShieldCheck className="text-primary" size={20}/>
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">Registered & Trusted</p>
          <p className="text-[11px] text-muted-foreground">Authorized migration lawyers only</p>
        </div>
      </div>
    </section>
  </MobileLayout>
);

export default Home;