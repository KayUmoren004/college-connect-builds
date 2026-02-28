import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[240px] sm:w-[280px] rounded-[2.5rem] sm:rounded-[3rem] border-[3px] border-[#333] bg-[#111] p-2.5 sm:p-3 shadow-2xl",
        className
      )}
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-3 sm:top-4 z-10 h-[22px] sm:h-[25px] w-[76px] sm:w-[90px] -translate-x-1/2 rounded-full bg-black" />

      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.3rem] bg-background">
        {children || <PlaceholderScreen />}
      </div>
    </div>
  );
}

function PlaceholderScreen() {
  return (
    <div className="flex h-[480px] sm:h-[580px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-card to-background p-6 sm:p-8">
      <div className="h-12 w-12 rounded-2xl bg-primary/20" />
      <div className="h-3 w-28 rounded-full bg-border" />
      <div className="h-2 w-20 rounded-full bg-border/60" />
      <div className="mt-8 w-full space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-card p-3">
            <div className="h-10 w-10 rounded-full bg-border/40" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-3/4 rounded-full bg-border/50" />
              <div className="h-2 w-1/2 rounded-full bg-border/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
