import { cn } from "@/lib/utils";

interface HealthTagProps {
  name: string;
  category: "nutrition" | "hygiene" | "maternal" | "common" | "prevention";
}

const categoryStyles = {
  nutrition: "bg-success/10 text-success border-success/20 hover:bg-success/20",
  hygiene: "bg-sky-500/10 text-sky-600 border-sky-500/20 hover:bg-sky-500/20",
  maternal: "bg-pink-500/10 text-pink-600 border-pink-500/20 hover:bg-pink-500/20",
  common: "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
  prevention: "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
};

export function HealthTag({ name, category }: HealthTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer",
        categoryStyles[category]
      )}
    >
      {name}
    </span>
  );
}
