import { Home, Scale, CalendarCheck, MessageCircle, User } from "lucide-react";

export const BottomNav = ({ active = "home" }: { active?: string }) => {
  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "lawyers", icon: Scale, label: "Lawyers" },
    { id: "bookings", icon: CalendarCheck, label: "Bookings" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-3 py-2 flex justify-between">
      {items.map((it) => {
        const Icon = it.icon;
        const on = active === it.id;
        return (
          <div key={it.id} className="flex flex-col items-center gap-0.5 flex-1">
            <Icon size={18} className={on ? "text-primary" : "text-muted-foreground"} />
            <span className={`text-[9px] ${on ? "text-primary font-semibold" : "text-muted-foreground"}`}>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
};