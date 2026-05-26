import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, Scale, CalendarCheck, MessageCircle, User, Bell, ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/lawyers", icon: Scale, label: "Lawyers" },
  { to: "/bookings", icon: CalendarCheck, label: "Bookings" },
  { to: "/messages", icon: MessageCircle, label: "Messages" },
  { to: "/profile", icon: User, label: "Profile" },
];

interface Props {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  hideHeader?: boolean;
  hideBottomNav?: boolean;
}

export const MobileLayout = ({ children, title, showBack, hideHeader, hideBottomNav }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-background flex flex-col mx-auto max-w-md w-full relative">
      {!hideHeader && (
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/85 border-b border-border/60 px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showBack ? (
              <Link to="/" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                <ArrowLeft size={18} className="text-foreground" />
              </Link>
            ) : (
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Scale className="text-primary-foreground" size={16} />
                </div>
              </Link>
            )}
            <div className="leading-tight">
              {title ? (
                <p className="font-bold text-foreground text-sm">{title}</p>
              ) : (
                <>
                  <p className="font-bold text-foreground text-sm">Migration <span className="text-gradient-primary">LawYear</span></p>
                  <p className="text-[10px] text-muted-foreground">Global Migration & Visa</p>
                </>
              )}
            </div>
          </div>
          <Link to="/messages" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center relative">
            <Bell size={16} className="text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
          </Link>
        </header>
      )}
      <main className={`flex-1 ${hideBottomNav ? "" : "pb-24"}`}>{children}</main>
      {!hideBottomNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 px-3 pb-3 pt-2 pointer-events-none">
          <div className="pointer-events-auto bg-card/95 backdrop-blur-xl border border-border shadow-card rounded-3xl px-2 py-2 flex items-center justify-between">
            {tabs.map((t) => {
              const Icon = t.icon;
              const active = t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
              return (
                <NavLink key={t.to} to={t.to} className="flex-1">
                  <div className={`flex flex-col items-center gap-0.5 py-1.5 rounded-2xl transition-colors ${active ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"}`}>
                    <Icon size={18} />
                    <span className="text-[10px] font-semibold">{t.label}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};