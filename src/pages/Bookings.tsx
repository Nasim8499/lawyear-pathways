import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import { TopNav, Footer } from "@/components/TopNav";

type Status = "Requested" | "Scheduled" | "Completed" | "Cancelled";
interface Booking { id: string; name: string; country: string; service: string; mode: string; date: string; time: string; status: Status; }

const STATUSES: Status[] = ["Requested", "Scheduled", "Completed", "Cancelled"];

const Bookings = () => {
  const [items, setItems] = useState<Booking[]>([]);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("ml_bookings") || "[]"));
  }, []);
  const update = (id: string, status: Status) => {
    const next = items.map((b) => b.id === id ? { ...b, status } : b);
    setItems(next);
    localStorage.setItem("ml_bookings", JSON.stringify(next));
  };
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
          <Link to="/book" className="text-xs font-semibold bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-glow">New</Link>
        </div>
        {items.length === 0 ? (
          <div className="mt-10 text-center bg-card rounded-3xl p-10 border border-border shadow-card">
            <CalendarCheck className="mx-auto text-primary" size={36}/>
            <p className="mt-3 text-sm text-muted-foreground">No bookings yet.</p>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {items.map((b) => (
              <div key={b.id} className="bg-card rounded-2xl p-4 shadow-card border border-border">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-foreground">{b.service}</p>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    b.status === "Scheduled" ? "bg-primary/15 text-primary" :
                    b.status === "Completed" ? "bg-secondary text-secondary-foreground" :
                    b.status === "Cancelled" ? "bg-destructive/15 text-destructive" :
                    "bg-accent text-accent-foreground"}`}>{b.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{b.name} - {b.country} - {b.mode}</p>
                <p className="text-xs text-muted-foreground">{b.date} at {b.time}</p>
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  {STATUSES.map((s) => (
                    <button key={s} onClick={() => update(b.id, s)}
                      className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${b.status === s ? "bg-gradient-primary text-primary-foreground border-transparent" : "bg-background text-foreground border-border"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Bookings;