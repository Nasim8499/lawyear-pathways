import { Link } from "react-router-dom";
import { ChevronLeft, User, Bell, Shield, FileText, LogOut } from "lucide-react";

const Profile = () => (
  <main className="min-h-screen bg-gradient-soft py-8 px-4">
    <div className="max-w-xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mb-4"><ChevronLeft size={16}/>Back</Link>
      <div className="bg-card rounded-3xl shadow-card border border-border p-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <User className="text-primary-foreground" size={32}/>
        </div>
        <h1 className="mt-3 text-xl font-bold text-foreground">Alex Morgan</h1>
        <p className="text-xs text-muted-foreground">alex@example.com</p>
      </div>
      <div className="mt-4 bg-card rounded-3xl shadow-card border border-border divide-y divide-border">
        {[
          { icon: Bell, label: "Notifications" },
          { icon: FileText, label: "My Documents" },
          { icon: Shield, label: "Privacy & Security" },
          { icon: LogOut, label: "Log out" },
        ].map((i) => {
          const I = i.icon;
          return (
            <div key={i.label} className="px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-soft flex items-center justify-center"><I className="text-primary" size={16}/></div>
              <span className="text-sm font-semibold text-foreground">{i.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  </main>
);

export default Profile;