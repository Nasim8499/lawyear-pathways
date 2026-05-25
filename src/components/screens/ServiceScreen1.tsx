import { Users, Scale, ChevronLeft, MapPin, CalendarClock, MessageSquare, ShieldCheck, BadgeCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceScreen1 = () => {
  const steps = [
    { icon: MapPin, label: "Select Country" },
    { icon: Scale, label: "Choose Lawyer" },
    { icon: CalendarClock, label: "Pick Schedule" },
    { icon: MessageSquare, label: "Attend Consultation" },
  ];
  const why = [
    { icon: BadgeCheck, label: "Registered Lawyers" },
    { icon: CalendarClock, label: "Fast Scheduling" },
    { icon: ShieldCheck, label: "Clear Advice" },
    { icon: Headphones, label: "End-to-End Support" },
  ];
  return (
    <div className="relative w-full h-full bg-gradient-deep overflow-hidden">
      <div className="px-4 pt-5 flex items-center justify-between text-primary-foreground">
        <ChevronLeft size={18} />
        <span className="text-xs font-semibold">Service</span>
        <div className="w-4" />
      </div>
      <div className="px-5 pt-3 text-center text-primary-foreground">
        <h2 className="text-lg font-bold">Lawyer Consultation</h2>
        <p className="text-[10px] opacity-80 mt-1">Speak with registered migration lawyers globally</p>
        <div className="mx-auto mt-3 w-20 h-20 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center relative">
          <Users size={32} className="text-primary-foreground" />
          <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <Scale size={14} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[210px] bg-card rounded-t-[2rem] p-4 overflow-y-auto">
        <p className="text-xs font-bold text-foreground">Consultation Process</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {steps.map((s) => {
            const I = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-xl bg-gradient-soft flex items-center justify-center">
                  <I size={14} className="text-primary" />
                </div>
                <span className="text-[8px] text-center text-foreground font-medium leading-tight">{s.label}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs font-bold text-foreground">Why Choose Us</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {why.map((w) => {
            const I = w.icon;
            return (
              <div key={w.label} className="bg-secondary rounded-xl p-2.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <I size={12} className="text-primary-foreground" />
                </div>
                <span className="text-[10px] font-semibold text-foreground">{w.label}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs font-bold text-foreground">About This Service</p>
        <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
          Our platform helps clients book consultations with migration lawyers and authorized legal consultants for Australia, New Zealand, Singapore, and Schengen country matters.
        </p>

        <Link to="/book" className="mt-4 mb-2 block w-full bg-gradient-primary text-primary-foreground py-3 rounded-2xl font-semibold text-xs text-center shadow-glow">
          Book Consultation
        </Link>
      </div>
    </div>
  );
};