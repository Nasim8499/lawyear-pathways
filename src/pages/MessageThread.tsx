import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Send, CalendarCheck, Phone, Video } from "lucide-react";
import { findLawyer } from "@/data/lawyers";
import { ChatMessage, autoReply, loadThread, saveThread } from "@/lib/chat";

const MessageThread = () => {
  const { id = "" } = useParams();
  const lawyer = findLawyer(id);
  const [msgs, setMsgs] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lawyer) return;
    const existing = loadThread(lawyer.id);
    if (existing.length === 0) {
      const seed: ChatMessage = { id: crypto.randomUUID(), from: "them", ts: Date.now() - 60000,
        text: `Hello, this is ${lawyer.name}. How can I help with your ${lawyer.country} matter today?` };
      saveThread(lawyer.id, [seed]);
      setMsgs([seed]);
    } else setMsgs(existing);
    inputRef.current?.focus();
  }, [lawyer]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  if (!lawyer) return <Navigate to="/messages" replace/>;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    const mine: ChatMessage = { id: crypto.randomUUID(), from: "me", text: t, ts: Date.now() };
    const next = [...msgs, mine];
    setMsgs(next); saveThread(lawyer.id, next); setText(""); setTyping(true);
    inputRef.current?.focus();
    setTimeout(() => {
      const reply: ChatMessage = { id: crypto.randomUUID(), from: "them", text: autoReply(), ts: Date.now() };
      const after = [...next, reply];
      setMsgs(after); saveThread(lawyer.id, after); setTyping(false);
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col mx-auto max-w-md w-full">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/90 border-b border-border px-3 h-14 flex items-center gap-2">
        <Link to="/messages" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center"><ArrowLeft size={18}/></Link>
        <Link to={`/lawyers/${lawyer.id}`} className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-display text-xs">{lawyer.name.split(" ").map(n=>n[0]).join("")}</span>
          </div>
          <div className="leading-tight min-w-0">
            <p className="font-bold text-sm text-foreground truncate">{lawyer.name}</p>
            <p className="text-[10px] text-muted-foreground truncate">{lawyer.spec} · online</p>
          </div>
        </Link>
        <button className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center"><Phone size={15}/></button>
        <Link to={`/book?lawyer=${lawyer.id}`} className="w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow"><Video size={15}/></Link>
      </header>

      <div className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        <Link to={`/book?lawyer=${lawyer.id}`} className="block bg-card border border-gold/60 rounded-2xl p-3 shadow-card animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center"><CalendarCheck size={16} className="text-foreground"/></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-foreground">Book a consultation</p>
              <p className="text-[10px] text-muted-foreground">{lawyer.fee}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary">Schedule →</span>
          </div>
        </Link>
        {msgs.map((m) => (
          <div key={m.id} className={`flex animate-fade-up ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[78%] px-3.5 py-2 rounded-2xl text-sm shadow-card ${
              m.from === "me" ? "bg-gradient-primary text-primary-foreground rounded-br-md"
                : "bg-card text-foreground border border-border rounded-bl-md"}`}>
              <p className="leading-snug whitespace-pre-wrap">{m.text}</p>
              <p className={`text-[9px] mt-1 ${m.from === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {new Date(m.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce"/>
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.15s" }}/>
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.3s" }}/>
            </div>
          </div>
        )}
        <div ref={endRef}/>
      </div>

      <form onSubmit={send} className="sticky bottom-0 bg-background/95 backdrop-blur-xl border-t border-border p-3 flex items-center gap-2">
        <input ref={inputRef} value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type a message…" maxLength={1000}
          className="flex-1 px-4 py-3 rounded-full bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all"/>
        <button type="submit" disabled={!text.trim()}
          className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow disabled:opacity-40 transition-transform active:scale-95">
          <Send size={16}/>
        </button>
      </form>
    </div>
  );
};

export default MessageThread;