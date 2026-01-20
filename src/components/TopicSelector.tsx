import { Landmark, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicSelectorProps {
  selectedTopic: "policies" | "health";
  onSelectTopic: (topic: "policies" | "health") => void;
}

export function TopicSelector({ selectedTopic, onSelectTopic }: TopicSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
      <button
        onClick={() => onSelectTopic("policies")}
        className={cn(
          "flex-1 relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group",
          "border-2",
          selectedTopic === "policies"
            ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
            : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
        )}
      >
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div
            className={cn(
              "h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-300",
              selectedTopic === "policies"
                ? "hero-gradient"
                : "bg-muted group-hover:bg-primary/20"
            )}
          >
            <Landmark
              className={cn(
                "h-7 w-7 transition-colors",
                selectedTopic === "policies"
                  ? "text-primary-foreground"
                  : "text-primary"
              )}
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg text-foreground">
              Government Schemes
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Policies, subsidies & welfare programs
            </p>
          </div>
        </div>
        {selectedTopic === "policies" && (
          <div className="absolute top-2 right-2 h-3 w-3 rounded-full bg-primary animate-pulse" />
        )}
      </button>

      <button
        onClick={() => onSelectTopic("health")}
        className={cn(
          "flex-1 relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group",
          "border-2",
          selectedTopic === "health"
            ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
            : "border-border bg-card hover:border-accent/50 hover:bg-accent/5"
        )}
      >
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div
            className={cn(
              "h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-300",
              selectedTopic === "health"
                ? "bg-gradient-to-br from-accent to-accent/80"
                : "bg-muted group-hover:bg-accent/20"
            )}
          >
            <Stethoscope
              className={cn(
                "h-7 w-7 transition-colors",
                selectedTopic === "health"
                  ? "text-accent-foreground"
                  : "text-accent"
              )}
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg text-foreground">
              Health Knowledge
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Common health issues & prevention
            </p>
          </div>
        </div>
        {selectedTopic === "health" && (
          <div className="absolute top-2 right-2 h-3 w-3 rounded-full bg-accent animate-pulse" />
        )}
      </button>
    </div>
  );
}
