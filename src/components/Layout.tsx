import { Shield } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Shield size={24} className="text-primary dark:text-blue-300" />
            <span className="font-heading text-xl text-foreground tracking-tight">
              PulseGuard
            </span>
            <span className="text-xs font-body text-muted-foreground ml-2 uppercase tracking-widest">
              Ward Display System
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
