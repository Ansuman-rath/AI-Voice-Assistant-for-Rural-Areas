interface SchemeTagProps {
  name: string;
  category: "agriculture" | "health" | "housing" | "employment" | "education";
}

const categoryColors = {
  agriculture: "bg-success/10 text-success border-success/20",
  health: "bg-accent/10 text-accent border-accent/20",
  housing: "bg-primary/10 text-primary border-primary/20",
  employment: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  education: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

export function SchemeTag({ name, category }: SchemeTagProps) {
  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border
        transition-transform duration-200 hover:scale-105 cursor-default
        ${categoryColors[category]}
      `}
    >
      {name}
    </span>
  );
}
