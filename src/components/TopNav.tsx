import { Link, NavLink } from "react-router-dom";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/lawyers", label: "Lawyers" },
  { to: "/countries", label: "Countries" },
  { to: "/bookings", label: "Bookings" },
  { to: "/messages", label: "Messages" },
  { to: "/profile", label: "Profile" },
];

export const TopNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Scale className="text-primary-foreground" size={18} />
          </div>
          <span className="font-bold text-foreground">Migration <span className="text-gradient-primary">LawYear</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${isActive ? "text-primary bg-secondary" : "text-foreground hover:bg-secondary"}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/book" className="ml-2 bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-xl shadow-glow">Book Appointment</Link>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-border" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) => `block px-3 py-2 rounded-xl text-sm font-medium ${isActive ? "text-primary bg-secondary" : "text-foreground"}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/book" onClick={() => setOpen(false)} className="block text-center bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl shadow-glow mt-2">Book Appointment</Link>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t border-border bg-card mt-16">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Migration LawYear. Global Migration Lawyer & Visa Consultation.</p>
      <p className="text-xs text-muted-foreground">Australia • New Zealand • Singapore • Schengen</p>
    </div>
  </footer>
);