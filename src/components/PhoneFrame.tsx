import { ReactNode } from "react";

export const PhoneFrame = ({ children, label }: { children: ReactNode; label?: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-[280px] h-[580px] rounded-[2.75rem] bg-foreground/90 p-2 shadow-glow">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-foreground rounded-b-2xl z-20" />
      <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-background">
        {children}
      </div>
    </div>
    {label && <span className="text-xs font-medium text-muted-foreground">{label}</span>}
  </div>
);