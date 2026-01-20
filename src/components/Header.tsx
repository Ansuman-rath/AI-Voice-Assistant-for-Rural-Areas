import { Landmark, Stethoscope } from "lucide-react";

interface HeaderProps {
  activeSection?: "policies" | "health";
}

export function Header({ activeSection = "policies" }: HeaderProps) {
  const isHealth = activeSection === "health";
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isHealth ? "health-hero-gradient" : "hero-gradient"
        }`}>
          {isHealth ? (
            <Stethoscope className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Landmark className="h-5 w-5 text-primary-foreground" />
          )}
        </div>
        <div>
          <h1 className="font-bold text-xl text-foreground">CivicGuide</h1>
          <p className="text-xs text-muted-foreground">
            {isHealth 
              ? "Your Voice to Better Health" 
              : "Your Voice to Government Schemes"}
          </p>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <a href="#topics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Topics
        </a>
        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {isHealth ? "Health Topics" : "Schemes"}
        </a>
        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
      </nav>
    </header>
  );
}
