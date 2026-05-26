import { User, Bell, Shield, FileText, LogOut, ChevronRight } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const Profile = () => (
  <MobileLayout title="Profile">
    <div className="px-4 pt-4">
      <div className="bg-gradient-deep rounded-3xl shadow-glow p-6 text-center text-primary-foreground">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-primary-foreground/15 backdrop-blur flex items-center justify-center">
          <User className="text-primary-foreground" size={32}/>
        </div>
        <h1 className="mt-3 text-lg font-bold">Alex Morgan</h1>
        <p className="text-xs opacity-80">alex@example.com</p>
      </div>
      <div className="mt-4 bg-card rounded-3xl shadow-card border border-border divide-y divide-border overflow-hidden">
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
              <span className="text-sm font-semibold text-foreground flex-1">{i.label}</span>
              <ChevronRight className="text-muted-foreground" size={16}/>
            </div>
          );
        })}
      </div>
    </div>
  </MobileLayout>
);

export default Profile;