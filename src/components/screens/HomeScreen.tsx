import { MapPin, Plane, Briefcase, Globe, HeadphonesIcon, Search, Scale, FileCheck, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

export const HomeScreen = () => {
  const cats = [
    { label: "Australia", icon: MapPin },
    { label: "New Zealand", icon: Plane },
    { label: "Singapore", icon: Briefcase },
    { label: "Schengen", icon: Globe },
    { label: "Support", icon: HeadphonesIcon },
  ];
  return (
    <div className="relative w-full h-full bg-background overflow-hidden">
      <div className="h-full overflow-y-auto pb-16 px-4 pt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Good morning,</p>
            <p className="text-sm font-bold text-foreground">Alex 👋</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-soft flex items-center justify-center">
            <Bell size={16} className="text-primary" />
          </div>
        </div>
        <h2 className="mt-4 text-base font-bold text-foreground leading-snug">What legal service do you need today?</h2>

        <div className="mt-4 grid grid-cols-5 gap-1.5">
          {cats.map((c) => {
            const I = c.icon;
            return (
              <Link to="/countries" key={c.label} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center">
                  <I size={16} className="text-primary" />
                </div>
                <span className="text-[8px] text-center text-foreground font-medium leading-tight">{c.label}</span>
              </Link>
            );
          })}
        </div>

        <Link to="/book" className="mt-4 block rounded-2xl bg-gradient-deep p-4 shadow-glow relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary-foreground/10" />
          <p className="text-primary-foreground font-bold text-sm">Book a Lawyer</p>
          <p className="text-primary-foreground/80 text-[10px] mt-1 leading-snug">Choose physical, Google Meet, or WhatsApp consultation</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-primary-foreground/90 text-[9px] font-medium">120+ registered consultants available</span>
            <div className="w-9 h-9 rounded-full bg-primary-foreground flex items-center justify-center">
              <Search size={14} className="text-primary" />
            </div>
          </div>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-bold text-foreground">Popular Services</p>
          <span className="text-[10px] text-primary font-semibold">See all</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="bg-card rounded-2xl p-3 shadow-card border border-border">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
              <Scale size={14} className="text-primary-foreground" />
            </div>
            <p className="text-[11px] font-bold text-foreground leading-tight">Migration Lawyer Consultation</p>
            <p className="text-[9px] text-muted-foreground mt-1">Book legal advice</p>
          </div>
          <div className="bg-card rounded-2xl p-3 shadow-card border border-border">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
              <FileCheck size={14} className="text-primary-foreground" />
            </div>
            <p className="text-[11px] font-bold text-foreground leading-tight">Visa Eligibility Review</p>
            <p className="text-[9px] text-muted-foreground mt-1">Check your pathway</p>
          </div>
        </div>

        <p className="mt-4 text-xs font-bold text-foreground">Recent Activity</p>
        <div className="mt-2 bg-card rounded-2xl p-3 shadow-card border border-border flex gap-3 items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-soft flex items-center justify-center">
            <Bell size={14} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-foreground">Appointment Update</p>
            <p className="text-[9px] text-muted-foreground">Google Meet consultation scheduled</p>
          </div>
          <span className="text-[9px] text-muted-foreground">2h ago</span>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
};