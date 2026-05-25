import { BookOpen, Globe2, Calendar, FileText, ChevronLeft, MapPin, Plane, Briefcase, Globe, Users, GraduationCap, TrendingUp, Gavel, Video, MessageCircle, Building2, BadgeCheck, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceScreen2 = () => {
  const areas = [
    { icon: MapPin, label: "Australia Migration" },
    { icon: Plane, label: "New Zealand Migration" },
    { icon: Briefcase, label: "Singapore Work Pass" },
    { icon: Globe, label: "Schengen Visa" },
    { icon: Users, label: "Family & Partner Visa" },
    { icon: GraduationCap, label: "Student Pathway" },
    { icon: TrendingUp, label: "Business & Investor" },
    { icon: Gavel, label: "Appeals & Compliance" },
  ];
  const modes = [
    { icon: Building2, label: "Physical Appointment" },
    { icon: Video, label: "Google Meet" },
    { icon: MessageCircle, label: "WhatsApp Consultation" },
  ];
  const why = [
    "Registered professionals where applicable",
    "Country-specific legal guidance",
    "Appointment scheduling support",
    "Online and physical consultation options",
    "Clear document checklist guidance",
  ];
  return (
    <div className="relative w-full h-full bg-background overflow-hidden">
      <div className="bg-gradient-deep px-4 pt-5 pb-20 relative">
        <div className="flex items-center justify-between text-primary-foreground">
          <ChevronLeft size={18} />
          <span className="text-xs font-semibold">Service</span>
          <div className="w-4" />
        </div>
        <div className="mt-2 text-center text-primary-foreground">
          <h2 className="text-base font-bold">Visa & Migration Review</h2>
          <p className="text-[10px] opacity-80 mt-1">Get professional guidance for your migration pathway</p>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center"><BookOpen size={16} className="text-primary-foreground" /></div>
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center"><FileText size={16} className="text-primary-foreground" /></div>
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center"><Globe2 size={16} className="text-primary-foreground" /></div>
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center"><Calendar size={16} className="text-primary-foreground" /></div>
        </div>
      </div>
      <div className="h-full overflow-y-auto pb-20 -mt-12 px-3">
        <div className="bg-card rounded-2xl p-3 shadow-card border border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <ClipboardCheck size={16} className="text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-foreground">Check Eligibility</p>
            <p className="text-[9px] text-muted-foreground">Find the right legal consultation for your needs</p>
          </div>
        </div>

        <p className="mt-4 px-1 text-xs font-bold text-foreground">Our Legal Consultation Areas</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {areas.map((a) => {
            const I = a.icon;
            return (
              <div key={a.label} className="bg-card border border-border rounded-xl p-1.5 flex flex-col items-center gap-1 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-gradient-soft flex items-center justify-center">
                  <I size={12} className="text-primary" />
                </div>
                <span className="text-[7.5px] text-center text-foreground font-medium leading-tight">{a.label}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 px-1 text-xs font-bold text-foreground">Consultation Options</p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {modes.map((m) => {
            const I = m.icon;
            return (
              <div key={m.label} className="bg-gradient-soft rounded-xl p-2 flex flex-col items-center gap-1">
                <I size={14} className="text-primary" />
                <span className="text-[8px] text-center font-semibold text-foreground leading-tight">{m.label}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 px-1 text-xs font-bold text-foreground">Why Choose Migration LawYear?</p>
        <ul className="mt-2 space-y-1.5">
          {why.map((w) => (
            <li key={w} className="flex items-start gap-2 px-1">
              <BadgeCheck size={12} className="text-primary mt-0.5 shrink-0" />
              <span className="text-[9.5px] text-foreground leading-snug">{w}</span>
            </li>
          ))}
        </ul>

        <Link to="/book" className="mt-3 mb-2 block w-full bg-gradient-primary text-primary-foreground py-3 rounded-2xl font-semibold text-xs text-center shadow-glow">
          Schedule Now
        </Link>
      </div>
    </div>
  );
};