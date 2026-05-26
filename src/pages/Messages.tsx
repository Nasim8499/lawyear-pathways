import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { LAWYERS } from "@/data/lawyers";
import { loadThread } from "@/lib/chat";

const Messages = () => {
  const [q, setQ] = useState("");
  const [threads, setThreads] = useState<Record<string, { last: string; time: number }>>({});

  useEffect(() => {
    const next: Record<string, { last: string; time: number }> = {};
    for (const l of LAWYERS) {
      const msgs = loadThread(l.id);
      const last = msgs[msgs.length - 1];
      next[l.id] = last
        ? { last: last.text, time: last.ts }
        : { last: `Tap to start a conversation with ${l.name.split(" ")[0]}.`, time: 0 };
    }
    setThreads(next);
  }, []);

  const filtered = LAWYERS.filter((l) => l.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <MobileLayout title="Messages">
      <div className="px-4 pt-4 animate-fade-in">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search conversations"
            className="w-full pl-9 pr-3 py-3 rounded-2xl bg-card border border-border text-sm outline-none shadow-card"/>
        </div>
        <div className="mt-4 space-y-2">
          {filtered.map((l, i) => {
            const t = threads[l.id];
            const time = t?.time ? new Date(t.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
            return (
              <Link key={l.id} to={`/messages/${l.id}`}
                className={`bg-card rounded-2xl p-3 shadow-card border border-border flex items-center gap-3 hover-lift animate-fade-up stagger-${Math.min(i+1,5)}`}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <span className="font-display text-primary-foreground text-base">{l.name.split(" ").map(n=>n[0]).join("")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-foreground text-sm font-display">{l.name}</p>
                    <span className="text-[10px] text-muted-foreground">{time}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">{t?.last}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Messages;