import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import { TopNav, Footer } from "@/components/TopNav";
import { toast } from "sonner";

const COUNTRIES = ["Australia", "New Zealand", "Singapore", "Schengen"];
const SERVICES = [
  "Migration Lawyer Consultation",
  "Visa Eligibility Review",
  "Family & Partner Visa",
  "Student Pathway",
  "Business & Investor",
  "Appeals & Compliance",
];
const MODES = ["Physical Appointment", "Google Meet", "WhatsApp Consultation"];

const SelectField = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
  <div>
    <label className="text-xs font-semibold text-foreground">{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </div>
);

const BookAppointment = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", country: COUNTRIES[0], service: SERVICES[0],
    mode: MODES[0], date: "", time: "", notes: "",
  });
  const set = (k: string, v: string) => setForm({ ...form, [k]: v });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("ml_bookings") || "[]");
    list.unshift({ ...form, id: crypto.randomUUID(), status: "Requested", createdAt: Date.now() });
    localStorage.setItem("ml_bookings", JSON.stringify(list));
    toast.success("Appointment requested");
    nav("/bookings");
  };
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="max-w-lg mx-auto py-10 px-4">
        <div className="bg-card rounded-3xl shadow-card border border-border p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <CalendarCheck className="text-primary-foreground" size={20}/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Book Appointment</h1>
              <p className="text-xs text-muted-foreground">Connect with a registered migration lawyer</p>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-3">
            {[
              { k: "name", label: "Full Name", type: "text" },
              { k: "phone", label: "Phone / WhatsApp", type: "tel" },
              { k: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.k}>
                <label className="text-xs font-semibold text-foreground">{f.label}</label>
                <input required type={f.type} value={(form as Record<string,string>)[f.k]} onChange={(e) => set(f.k, e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <SelectField label="Country" value={form.country} onChange={(v) => set("country", v)} options={COUNTRIES} />
              <SelectField label="Service Type" value={form.service} onChange={(v) => set("service", v)} options={SERVICES} />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground">Consultation Mode</label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {MODES.map((m) => (
                  <button type="button" key={m} onClick={() => set("mode", m)}
                    className={`text-[11px] py-2 rounded-xl font-semibold border ${form.mode === m ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "bg-background text-foreground border-border"}`}>
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-foreground">Preferred Date</label>
                <input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"/>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground">Preferred Time</label>
                <input required type="time" value={form.time} onChange={(e) => set("time", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"/>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground">Notes</label>
              <textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"/>
            </div>
            <button type="submit" className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-2xl font-semibold text-sm shadow-glow mt-2">
              Confirm Booking Request
            </button>
            <p className="text-[10px] text-muted-foreground text-center">Handled by registered migration lawyers and authorized legal consultants, where applicable.</p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;