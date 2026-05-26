import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CalendarCheck, ChevronLeft, ChevronRight, Building2, Video, MessageCircle } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { LAWYERS, findLawyer } from "@/data/lawyers";

const MODES = [
  { id: "Physical Appointment", label: "Physical", icon: Building2 },
  { id: "Google Meet", label: "Google Meet", icon: Video },
  { id: "WhatsApp Consultation", label: "WhatsApp", icon: MessageCircle },
];
const SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();
const fmtKey = (d: Date) => d.toISOString().slice(0, 10);

const BookAppointment = () => {
  const nav = useNavigate();
  const [sp] = useSearchParams();
  const initialLawyer = sp.get("lawyer") || LAWYERS[0].id;
  const [lawyerId, setLawyerId] = useState(initialLawyer);
  const lawyer = findLawyer(lawyerId) ?? LAWYERS[0];

  const today = new Date();
  const [monthOffset, setMonthOffset] = useState(0);
  const [selected, setSelected] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string>("");
  const [mode, setMode] = useState(MODES[1].id);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  const monthDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const monthLabel = monthDate.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const days = useMemo(() => {
    const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
    const last = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
    const arr: (Date | null)[] = [];
    for (let i = 0; i < first.getDay(); i++) arr.push(null);
    for (let d = 1; d <= last.getDate(); d++) arr.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), d));
    return arr;
  }, [monthDate]);

  // Fake availability: slots blocked based on date hash
  const takenSlots = useMemo(() => {
    if (!selected) return new Set<string>();
    const seed = selected.getDate() + selected.getMonth();
    return new Set(SLOTS.filter((_, i) => (seed * 7 + i) % 4 === 0));
  }, [selected]);

  const canSubmit = selected && slot && form.name && form.email;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !selected) return;
    const booking = {
      id: crypto.randomUUID(), createdAt: Date.now(), status: "Scheduled",
      lawyerId: lawyer.id, lawyerName: lawyer.name, country: lawyer.country, service: lawyer.spec,
      mode, date: fmtKey(selected), time: slot, ...form,
    };
    const list = JSON.parse(localStorage.getItem("ml_bookings") || "[]");
    list.unshift(booking);
    localStorage.setItem("ml_bookings", JSON.stringify(list));
    nav(`/bookings/confirmed/${booking.id}`);
  };

  return (
    <MobileLayout title="Book Appointment" showBack>
      <div className="px-4 pt-4 pb-6 space-y-4">
        {/* Lawyer card */}
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-4 shadow-deep flex items-center gap-3 animate-scale-in">
          <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
            <span className="font-display text-base text-primary-foreground">{lawyer.name.split(" ").map(n=>n[0]).join("")}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-lg leading-tight">{lawyer.name}</p>
            <p className="text-[11px] opacity-80">{lawyer.spec} · {lawyer.fee}</p>
          </div>
          <select value={lawyerId} onChange={(e)=>{setLawyerId(e.target.value); setSelected(null); setSlot("");}}
            className="bg-primary-foreground/10 border border-primary-foreground/20 text-[10px] rounded-lg px-2 py-1 text-primary-foreground outline-none">
            {LAWYERS.map((l)=>(<option key={l.id} value={l.id} className="text-foreground">{l.name}</option>))}
          </select>
        </div>

        {/* Calendar */}
        <section className="bg-card rounded-3xl p-4 border border-border shadow-card animate-fade-up stagger-1">
          <div className="flex items-center justify-between mb-3">
            <button onClick={()=>setMonthOffset(monthOffset-1)} disabled={monthOffset<=0}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center disabled:opacity-30"><ChevronLeft size={16}/></button>
            <p className="font-display text-base">{monthLabel}</p>
            <button onClick={()=>setMonthOffset(monthOffset+1)} disabled={monthOffset>=3}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center disabled:opacity-30"><ChevronRight size={16}/></button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground mb-1">
            {["S","M","T","W","T","F","S"].map((d,i)=>(<div key={i}>{d}</div>))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => {
              if (!d) return <div key={i}/>;
              const past = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const isSel = selected && sameDay(d, selected);
              const isToday = sameDay(d, today);
              const isSunday = d.getDay() === 0;
              const disabled = past || isSunday;
              return (
                <button key={i} disabled={disabled}
                  onClick={()=>{setSelected(d); setSlot("");}}
                  className={`aspect-square rounded-xl text-xs font-semibold transition-all ${
                    disabled ? "text-muted-foreground/40"
                    : isSel ? "bg-gradient-primary text-primary-foreground shadow-glow scale-105"
                    : isToday ? "border border-gold text-foreground"
                    : "hover:bg-secondary text-foreground"}`}>
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </section>

        {/* Time slots */}
        <section className="bg-card rounded-3xl p-4 border border-border shadow-card animate-fade-up stagger-2">
          <p className="text-xs font-bold text-foreground mb-2">Available time slots</p>
          {!selected ? (
            <p className="text-[11px] text-muted-foreground py-6 text-center">Pick a date to view available times.</p>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              {SLOTS.map((s) => {
                const taken = takenSlots.has(s);
                return (
                  <button key={s} disabled={taken} onClick={()=>setSlot(s)}
                    className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                      taken ? "bg-secondary/40 text-muted-foreground/50 line-through"
                      : slot === s ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-foreground hover:bg-secondary/80"}`}>{s}</button>
                );
              })}
            </div>
          )}
        </section>

        {/* Mode */}
        <section className="bg-card rounded-3xl p-4 border border-border shadow-card animate-fade-up stagger-3">
          <p className="text-xs font-bold text-foreground mb-2">Consultation mode</p>
          <div className="grid grid-cols-3 gap-2">
            {MODES.map((m) => {
              const I = m.icon;
              return (
                <button key={m.id} onClick={()=>setMode(m.id)}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1 transition-all ${
                    mode === m.id ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-background border-border text-foreground"}`}>
                  <I size={16}/>
                  <span className="text-[10px] font-semibold">{m.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Details */}
        <form onSubmit={submit} className="bg-card rounded-3xl p-4 border border-border shadow-card space-y-3 animate-fade-up stagger-4">
          <p className="text-xs font-bold text-foreground">Your details</p>
          {[
            { k: "name", l: "Full name", t: "text" },
            { k: "email", l: "Email", t: "email" },
            { k: "phone", l: "Phone / WhatsApp", t: "tel" },
          ].map((f)=>(
            <input key={f.k} required type={f.t} placeholder={f.l} maxLength={120}
              value={(form as Record<string,string>)[f.k]}
              onChange={(e)=>setForm({...form, [f.k]: e.target.value})}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all"/>
          ))}
          <textarea rows={2} maxLength={500} placeholder="Notes for your lawyer (optional)"
            value={form.notes} onChange={(e)=>setForm({...form, notes: e.target.value})}
            className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all"/>
          <button type="submit" disabled={!canSubmit}
            className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold text-sm shadow-glow disabled:opacity-40 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <CalendarCheck size={16}/>Confirm booking
          </button>
          <p className="text-[10px] text-muted-foreground text-center">Handled by registered migration lawyers and authorised legal consultants.</p>
        </form>
      </div>
    </MobileLayout>
  );
};

export default BookAppointment;