import { Scale, Globe2, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export const WelcomeScreen = () => (
  <div className="relative w-full h-full bg-gradient-soft overflow-hidden flex flex-col">
    <svg className="absolute -top-10 -left-10 opacity-50" width="320" height="220" viewBox="0 0 320 220">
      <path d="M0,140 C80,80 200,200 320,120 L320,0 L0,0 Z" fill="hsl(263 75% 58% / 0.15)" />
      <path d="M0,170 C80,110 220,210 320,150 L320,0 L0,0 Z" fill="hsl(280 85% 72% / 0.12)" />
    </svg>
    {[
      { t: "12%", l: "15%", s: 8 },
      { t: "22%", l: "78%", s: 6 },
      { t: "55%", l: "10%", s: 5 },
      { t: "62%", l: "85%", s: 7 },
      { t: "78%", l: "20%", s: 4 },
    ].map((d, i) => (
      <div key={i} className="absolute rounded-full bg-gradient-primary opacity-60"
        style={{ top: d.t, left: d.l, width: d.s * 2, height: d.s * 2 }} />
    ))}
    <div className="relative flex flex-col items-center justify-center flex-1 px-6 text-center">
      <div className="relative w-32 h-32 rounded-[2rem] bg-gradient-primary shadow-glow flex items-center justify-center mb-6">
        <Globe2 className="absolute text-primary-foreground/30" size={88} strokeWidth={1.2} />
        <Scale className="absolute text-primary-foreground" size={54} strokeWidth={1.8} />
        <Plane className="absolute bottom-3 right-3 text-primary-foreground rotate-45" size={22} />
      </div>
      <h1 className="text-2xl font-bold text-foreground tracking-tight">Migration <span className="text-gradient-primary">LawYear</span></h1>
      <p className="text-xs text-muted-foreground mt-2 px-4">Global Migration Lawyer & Visa Consultation</p>
      <p className="text-[10px] text-primary-deep/70 mt-2 font-medium">Australia • New Zealand • Singapore • Schengen</p>
      <Link to="/book" className="mt-8 w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold text-sm shadow-glow text-center">
        Book Appointment
      </Link>
      <p className="text-[11px] text-muted-foreground mt-4">Already have an account? <span className="text-primary font-semibold">Log in</span></p>
    </div>
  </div>
);