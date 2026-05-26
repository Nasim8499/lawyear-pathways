import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, Calendar, Clock, Video, MessageCircle, Building2 } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

interface Booking {
  id: string; lawyerId: string; lawyerName: string; service: string; country: string;
  mode: string; date: string; time: string; name: string; email: string; phone: string; notes?: string;
}

const ModeIcon = ({ mode }: { mode: string }) => {
  if (mode.includes("Meet")) return <Video size={16}/>;
  if (mode.includes("WhatsApp")) return <MessageCircle size={16}/>;
  return <Building2 size={16}/>;
};

const BookingConfirmed = () => {
  const { id = "" } = useParams();
  const [booking, setBooking] = useState<Booking | null>(null);
  useEffect(() => {
    const list: Booking[] = JSON.parse(localStorage.getItem("ml_bookings") || "[]");
    setBooking(list.find((b) => b.id === id) || null);
  }, [id]);

  if (booking === null) return null;
  if (!booking) return <Navigate to="/bookings" replace/>;

  const dateStr = new Date(booking.date).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <MobileLayout title="Confirmed" showBack>
      <div className="px-4 pt-4 pb-6 space-y-4">
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-6 shadow-deep text-center relative overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-gradient-gold opacity-10"/>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 flex items-center justify-center mx-auto animate-fade-in">
              <CheckCircle2 size={32} className="text-gold"/>
            </div>
            <p className="font-display text-3xl mt-3">Booking <span className="italic text-gradient-gold">confirmed</span></p>
            <p className="text-[12px] opacity-80 mt-1">Reference #{booking.id.slice(0,8).toUpperCase()}</p>
          </div>
        </div>

        <div className="bg-card rounded-3xl border border-border shadow-card p-4 space-y-3 animate-fade-up stagger-1">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="font-display text-primary-foreground text-sm">{booking.lawyerName.split(" ").map(n=>n[0]).join("")}</span>
            </div>
            <div>
              <p className="font-bold text-sm">{booking.lawyerName}</p>
              <p className="text-[11px] text-muted-foreground">{booking.service} · {booking.country}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs"><Calendar size={14} className="text-primary"/>{dateStr}</div>
            <div className="flex items-center gap-2 text-xs"><Clock size={14} className="text-primary"/>{booking.time}</div>
            <div className="flex items-center gap-2 text-xs col-span-2"><ModeIcon mode={booking.mode}/>{booking.mode}</div>
          </div>
          {booking.notes && (<p className="text-[11px] text-muted-foreground border-t border-border pt-3">"{booking.notes}"</p>)}
        </div>

        <div className="grid grid-cols-2 gap-3 animate-fade-up stagger-2">
          <Link to={`/messages/${booking.lawyerId}`} className="bg-card border border-border rounded-2xl p-3 text-center shadow-card hover-lift">
            <MessageCircle className="mx-auto text-primary" size={18}/>
            <p className="text-xs font-semibold mt-1">Message lawyer</p>
          </Link>
          <Link to="/bookings" className="bg-gradient-primary text-primary-foreground rounded-2xl p-3 text-center shadow-glow hover-lift">
            <Calendar className="mx-auto" size={18}/>
            <p className="text-xs font-semibold mt-1">View bookings</p>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default BookingConfirmed;