import { Link, useParams, Navigate } from "react-router-dom";
import { Star, MapPin, Globe2, Briefcase, MessageCircle, CalendarCheck, BadgeCheck, Award } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { findLawyer } from "@/data/lawyers";

const LawyerProfile = () => {
  const { id = "" } = useParams();
  const l = findLawyer(id);
  if (!l) return <Navigate to="/lawyers" replace/>;

  return (
    <MobileLayout title={l.name} showBack>
      <div className="px-4 pt-4 pb-6 space-y-4">
        <div className="bg-gradient-primary rounded-3xl p-5 text-primary-foreground shadow-deep relative overflow-hidden animate-scale-in">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-gold opacity-20 blur-3xl"/>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center backdrop-blur">
              <span className="font-display text-2xl text-primary-foreground">{l.name.split(" ").map(n=>n[0]).join("")}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-2xl leading-tight">{l.name}</p>
              <p className="text-[12px] opacity-80 mt-0.5">{l.spec}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-[11px] bg-primary-foreground/10 px-2 py-0.5 rounded-full"><Star size={10} className="fill-gold text-gold"/>{l.rating}</span>
                <span className="flex items-center gap-1 text-[11px] bg-primary-foreground/10 px-2 py-0.5 rounded-full"><BadgeCheck size={10} className="text-gold"/>Verified</span>
              </div>
            </div>
          </div>
          <p className="text-[12px] opacity-80 mt-4 leading-relaxed">{l.bio}</p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-primary-foreground/10 rounded-xl p-2 text-center">
              <p className="font-display text-lg leading-none">{l.years}+</p>
              <p className="text-[10px] opacity-70 mt-1">years</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-2 text-center">
              <p className="font-display text-lg leading-none text-gold">{l.fee.split(" ")[0]}</p>
              <p className="text-[10px] opacity-70 mt-1">per session</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-2 text-center">
              <p className="font-display text-lg leading-none">{l.languages.length}</p>
              <p className="text-[10px] opacity-70 mt-1">languages</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 animate-fade-up stagger-1">
          <Link to={`/messages/${l.id}`} className="bg-card rounded-2xl p-3 border border-border shadow-card hover-lift flex flex-col items-center gap-1">
            <MessageCircle size={18} className="text-primary"/>
            <span className="text-xs font-semibold">Message</span>
          </Link>
          <Link to={`/book?lawyer=${l.id}`} className="bg-gradient-primary text-primary-foreground rounded-2xl p-3 shadow-glow hover-lift flex flex-col items-center gap-1">
            <CalendarCheck size={18}/>
            <span className="text-xs font-semibold">Book consultation</span>
          </Link>
        </div>

        <section className="bg-card rounded-2xl p-4 border border-border shadow-card animate-fade-up stagger-2">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={14} className="text-primary"/>
            <p className="font-display text-base">Services</p>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {l.services.map((s) => (
              <li key={s} className="text-[11px] px-2.5 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold">{s}</li>
            ))}
          </ul>
        </section>

        <section className="bg-card rounded-2xl p-4 border border-border shadow-card animate-fade-up stagger-3">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 size={14} className="text-primary"/>
            <p className="font-display text-base">Country coverage</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {l.coverage.map((c) => (
              <span key={c} className="text-[11px] px-2.5 py-1 rounded-full border border-gold/60 text-foreground font-semibold flex items-center gap-1">
                <MapPin size={10} className="text-gold"/>{c}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
            <MapPin size={12}/>Based in {l.location}
          </div>
        </section>

        <section className="bg-card rounded-2xl p-4 border border-border shadow-card animate-fade-up stagger-4">
          <div className="flex items-center gap-2 mb-3">
            <Award size={14} className="text-primary"/>
            <p className="font-display text-base">Languages</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {l.languages.map((lng) => (
              <span key={lng} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-semibold">{lng}</span>
            ))}
          </div>
        </section>

        <Link to={`/book?lawyer=${l.id}`} className="block w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold text-sm shadow-glow text-center animate-fade-up stagger-5">
          Book with {l.name.split(" ")[0]}
        </Link>
      </div>
    </MobileLayout>
  );
};

export default LawyerProfile;