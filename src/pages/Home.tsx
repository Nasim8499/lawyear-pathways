import { Link } from "react-router-dom";
import { Scale, Globe2, Plane, MapPin, Briefcase, Globe, Users, GraduationCap, TrendingUp, Gavel, Video, MessageCircle, Building2, BadgeCheck, CalendarClock, ShieldCheck, Headphones, FileCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import { TopNav, Footer } from "@/components/TopNav";

const countries = [
  { c: "Australia", icon: MapPin, desc: "Skilled, Partner, Student, Business Innovation" },
  { c: "New Zealand", icon: Plane, desc: "Skilled Migrant, Partnership, Work to Residence" },
  { c: "Singapore", icon: Briefcase, desc: "Employment Pass, S Pass, PR Application" },
  { c: "Schengen", icon: Globe, desc: "Short & Long Stay, Family Reunification, Appeals" },
];

const areas = [
  { icon: Users, label: "Family & Partner Visa" },
  { icon: GraduationCap, label: "Student Pathway" },
  { icon: TrendingUp, label: "Business & Investor" },
  { icon: Gavel, label: "Appeals & Compliance" },
];

const modes = [
  { icon: Building2, label: "Physical Appointment", desc: "Meet your lawyer in person at the office" },
  { icon: Video, label: "Google Meet", desc: "Secure video consultation from anywhere" },
  { icon: MessageCircle, label: "WhatsApp Consultation", desc: "Quick chat-based legal guidance" },
];

const why = [
  { icon: BadgeCheck, label: "Registered Lawyers", desc: "Authorized migration legal consultants" },
  { icon: CalendarClock, label: "Fast Scheduling", desc: "Pick a slot that fits your timezone" },
  { icon: ShieldCheck, label: "Clear Advice", desc: "Honest assessment of your eligibility" },
  { icon: Headphones, label: "End-to-End Support", desc: "Guidance from inquiry to outcome" },
];

const steps = [
  { icon: MapPin, label: "Select Country", desc: "Choose your destination" },
  { icon: Scale, label: "Choose Lawyer", desc: "Browse registered consultants" },
  { icon: CalendarClock, label: "Pick Schedule", desc: "Date, time, mode" },
  { icon: MessageCircle, label: "Attend Consultation", desc: "Get expert legal advice" },
];

const Home = () => (
  <div className="min-h-screen bg-background">
    <TopNav />

    {/* HERO */}
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-primary shadow-card">
              <BadgeCheck size={14} /> Registered Migration Consultants
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Global Migration <span className="text-gradient-primary">Lawyer & Visa</span> Consultation
            </h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl">
              Book appointments with migration lawyers and authorized legal consultants for Australia, New Zealand, Singapore, and Schengen countries.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-glow inline-flex items-center gap-2">
                Book Appointment <ArrowRight size={16} />
              </Link>
              <Link to="/lawyers" className="bg-card border border-border text-foreground px-6 py-3 rounded-2xl font-semibold">
                Browse Lawyers
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">120+ registered consultants • Physical, Google Meet & WhatsApp</p>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-[2.5rem] bg-gradient-primary shadow-glow flex items-center justify-center relative overflow-hidden">
              <Globe2 className="absolute text-primary-foreground/20" size={360} strokeWidth={1} />
              <Scale className="text-primary-foreground relative" size={140} strokeWidth={1.5} />
              <Plane className="absolute bottom-10 right-10 text-primary-foreground rotate-45" size={48} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center"><CalendarClock className="text-primary" size={18} /></div>
              <div>
                <p className="text-xs font-bold text-foreground">Next consultation</p>
                <p className="text-[10px] text-muted-foreground">Google Meet • Fri 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* COUNTRIES */}
    <section id="countries" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Destinations</p>
          <h2 className="text-3xl font-bold text-foreground mt-1">Countries we serve</h2>
        </div>
        <Link to="/countries" className="text-sm font-semibold text-primary">See all →</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map((c) => {
          const I = c.icon;
          return (
            <Link to="/countries" key={c.c} className="bg-card rounded-2xl p-5 border border-border shadow-card hover:shadow-glow transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow"><I className="text-primary-foreground" size={20} /></div>
              <p className="mt-4 font-bold text-foreground">{c.c}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>

    {/* SERVICES / AREAS */}
    <section className="bg-gradient-soft py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Services</p>
          <h2 className="text-3xl font-bold text-foreground mt-1">Legal Consultation Areas</h2>
          <p className="text-muted-foreground mt-2">Professional guidance across the full migration pathway.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((a) => {
            const I = a.icon;
            return (
              <div key={a.label} className="bg-card rounded-2xl p-5 border border-border shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-soft flex items-center justify-center"><I className="text-primary" size={20} /></div>
                <p className="mt-4 font-bold text-foreground text-sm">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-1">Expert legal review and end-to-end consultation.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CONSULTATION MODES */}
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Consultation Modes</p>
        <h2 className="text-3xl font-bold text-foreground mt-1">Meet your way</h2>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {modes.map((m) => {
          const I = m.icon;
          return (
            <div key={m.label} className="bg-gradient-deep rounded-3xl p-6 text-primary-foreground shadow-glow relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary-foreground/10" />
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center"><I className="text-primary-foreground" size={22} /></div>
              <p className="mt-4 font-bold text-lg">{m.label}</p>
              <p className="text-sm opacity-80 mt-1">{m.desc}</p>
              <Link to="/book" className="mt-5 inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-xl font-semibold text-sm">Book now <ArrowRight size={14} /></Link>
            </div>
          );
        })}
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="bg-gradient-soft py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Process</p>
          <h2 className="text-3xl font-bold text-foreground mt-1">How it works</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const I = s.icon;
            return (
              <div key={s.label} className="bg-card rounded-2xl p-5 border border-border shadow-card relative">
                <span className="absolute top-4 right-4 text-xs font-bold text-primary/50">0{i+1}</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow"><I className="text-primary-foreground" size={20} /></div>
                <p className="mt-4 font-bold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Why Migration LawYear</p>
          <h2 className="text-3xl font-bold text-foreground mt-1">Trusted by clients worldwide</h2>
          <p className="text-muted-foreground mt-3">We connect you with registered migration lawyers and authorized legal consultants — clear advice, fast scheduling, and full support.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {why.map((w) => {
              const I = w.icon;
              return (
                <div key={w.label} className="bg-card border border-border rounded-2xl p-4 shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center"><I className="text-primary" size={18} /></div>
                  <p className="mt-3 font-bold text-foreground text-sm">{w.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gradient-deep rounded-3xl p-8 text-primary-foreground shadow-glow relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary-foreground/10" />
          <FileCheck size={40} />
          <h3 className="mt-4 text-2xl font-bold">Check your visa eligibility today</h3>
          <p className="mt-2 opacity-85">Tell us your destination and goal — we'll match you with the right consultant.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/book" className="bg-primary-foreground text-primary px-5 py-2.5 rounded-xl font-semibold inline-flex items-center gap-2">
              <ClipboardCheck size={16} /> Start Eligibility Check
            </Link>
            <Link to="/lawyers" className="border border-primary-foreground/40 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold">Talk to a Lawyer</Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="bg-gradient-primary rounded-3xl p-10 text-center text-primary-foreground shadow-glow">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to start your migration journey?</h2>
        <p className="mt-3 opacity-90 max-w-xl mx-auto">Book a consultation with a registered migration lawyer in minutes.</p>
        <Link to="/book" className="mt-6 inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-2xl font-semibold">
          Book Appointment <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;