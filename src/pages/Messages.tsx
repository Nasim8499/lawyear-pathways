import { MessageCircle } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const msgs = [
  { from: "Sarah Mitchell", text: "Hi Alex, please share your passport details for review.", time: "10:24" },
  { from: "James Tan", text: "Your Singapore EP eligibility looks promising.", time: "Yesterday" },
  { from: "Emily Carter", text: "Scheduled Google Meet for Friday 3pm NZT.", time: "Mon" },
];

const Messages = () => (
  <MobileLayout title="Messages">
    <div className="px-4 pt-4">
      <div className="space-y-2">
        {msgs.map((m) => (
          <div key={m.from} className="bg-card rounded-2xl p-3 shadow-card border border-border flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0"><MessageCircle className="text-primary-foreground" size={18}/></div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-sm">{m.from}</p>
              <p className="text-[11px] text-muted-foreground truncate">{m.text}</p>
            </div>
            <span className="text-[10px] text-muted-foreground">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileLayout>
);

export default Messages;