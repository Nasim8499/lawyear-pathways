import { MessageCircle } from "lucide-react";
import { TopNav, Footer } from "@/components/TopNav";

const msgs = [
  { from: "Sarah Mitchell", text: "Hi Alex, please share your passport details for review.", time: "10:24" },
  { from: "James Tan", text: "Your Singapore EP eligibility looks promising.", time: "Yesterday" },
  { from: "Emily Carter", text: "Scheduled Google Meet for Friday 3pm NZT.", time: "Mon" },
];

const Messages = () => (
  <div className="min-h-screen bg-background">
    <TopNav />
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-foreground">Messages</h1>
      <div className="mt-6 space-y-2">
        {msgs.map((m) => (
          <div key={m.from} className="bg-card rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center"><MessageCircle className="text-primary-foreground" size={18}/></div>
            <div className="flex-1">
              <p className="font-bold text-foreground text-sm">{m.from}</p>
              <p className="text-xs text-muted-foreground">{m.text}</p>
            </div>
            <span className="text-[10px] text-muted-foreground">{m.time}</span>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Messages;