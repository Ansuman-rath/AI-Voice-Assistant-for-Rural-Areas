import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { VoiceAgent } from "@/components/VoiceAgent";
import { FeatureCard } from "@/components/FeatureCard";
import { SchemeTag } from "@/components/SchemeTag";
import { HealthTag } from "@/components/HealthTag";
import { TopicSelector } from "@/components/TopicSelector";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        "agent-id": string;
      }, HTMLElement>;
    }
  }
}
import { 
  MessageCircle, 
  Languages, 
  Shield, 
  Clock,
  Sprout,
  Heart,
  Home,
  Briefcase,
  GraduationCap,
  Apple,
  Droplets,
  Baby,
  Activity,
  ShieldCheck
} from "lucide-react";



const policyFeatures = [
  {
    icon: MessageCircle,
    title: "Voice-First Experience",
    description: "Just speak naturally. Ask questions about any government scheme and get instant answers.",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description: "Communicate in Hindi, English, or regional languages for easy understanding.",
  },
  {
    icon: Shield,
    title: "Verified Information",
    description: "All information is sourced directly from official government portals and documents.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Get help anytime, anywhere. No waiting in lines or office hours.",
  },
];

const healthFeatures = [
  {
    icon: MessageCircle,
    title: "Ask Any Health Question",
    description: "Get answers about common symptoms, prevention, and when to seek medical help.",
  },
  {
    icon: Languages,
    title: "Simple Language",
    description: "Health information explained in easy-to-understand terms in your language.",
  },
  {
    icon: Shield,
    title: "Reliable Guidance",
    description: "Information based on trusted health guidelines and medical best practices.",
  },
  {
    icon: Clock,
    title: "Instant Support",
    description: "Get health guidance anytime without waiting for clinic hours.",
  },
];

const schemes = [
  { name: "PM-KISAN", category: "agriculture" as const },
  { name: "MGNREGA", category: "employment" as const },
  { name: "Ayushman Bharat", category: "health" as const },
  { name: "PM Awas Yojana", category: "housing" as const },
  { name: "Kisan Credit Card", category: "agriculture" as const },
  { name: "Sukanya Samriddhi", category: "education" as const },
  { name: "PM Fasal Bima", category: "agriculture" as const },
  { name: "Jan Dhan Yojana", category: "employment" as const },
];

const healthTopics = [
  { name: "Malnutrition", category: "nutrition" as const },
  { name: "Anaemia Prevention", category: "nutrition" as const },
  { name: "Safe Drinking Water", category: "hygiene" as const },
  { name: "Hand Hygiene", category: "hygiene" as const },
  { name: "Maternal Care", category: "maternal" as const },
  { name: "Child Vaccination", category: "maternal" as const },
  { name: "Fever & Cold", category: "common" as const },
  { name: "Diarrhea Treatment", category: "common" as const },
  { name: "Dengue Prevention", category: "prevention" as const },
  { name: "Tuberculosis Awareness", category: "prevention" as const },
];

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<"policies" | "health">("policies");
  
  const features = selectedTopic === "policies" ? policyFeatures : healthFeatures;
  const isHealth = selectedTopic === "health";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = import.meta.env.VITE_ELEVENLABS_WIDGET_SCRIPT_URL;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isHealth ? "health-gradient" : "warm-gradient"}`}>
      <Header activeSection={selectedTopic} />
      
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="space-y-4 animate-fade-in">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              isHealth ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
            }`}>
              {selectedTopic === "policies" ? (
                <>
                  <Sprout className="h-4 w-4" />
                  Empowering Rural India
                </>
              ) : (
                <>
                  <Heart className="h-4 w-4" />
                  Health for Every Village
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Voice to
              <span className={`block transition-colors duration-300 ${isHealth ? "text-accent" : "text-primary"}`}>
                {selectedTopic === "policies" ? "Government Schemes" : "Better Health"}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {selectedTopic === "policies" 
                ? "CivicGuide helps you discover and understand government policies, subsidies, and welfare schemes through simple voice conversations."
                : "CivicGuide helps you learn about common health issues, prevention, and care through simple voice conversations in your language."}
            </p>
          </div>
        </div>
      </section>

      {/* Topic Selector */}
      <section id="topics" className="container py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Would You Like to Know?
          </h2>
          <p className="text-muted-foreground">
            Choose a topic to get started
          </p>
        </div>
        <TopicSelector selectedTopic={selectedTopic} onSelectTopic={setSelectedTopic} />
      </section>

      {/* Voice Agent */}
      <section className="container py-12">
        <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <p className="text-muted-foreground mb-6 text-center">
            {selectedTopic === "policies" 
              ? "Ask about government schemes"
              : "Ask about health topics"}
          </p>
          <VoiceAgent theme={selectedTopic} />
        </div>
      </section>

      {/* Info Section - Schemes or Health Topics */}
      <section id="info" className="container py-12">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {selectedTopic === "policies" ? "Schemes We Can Help With" : "Health Topics We Cover"}
          </h2>
          <p className="text-muted-foreground">
            {selectedTopic === "policies" 
              ? "Ask about any of these schemes and many more"
              : "Ask about any of these health topics"}
          </p>
        </div>
        
        {selectedTopic === "policies" ? (
          <>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              {schemes.map((scheme) => (
                <SchemeTag key={scheme.name} name={scheme.name} category={scheme.category} />
              ))}
            </div>

            {/* Category Legend - Policies */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Sprout className="h-4 w-4 text-success" />
                <span>Agriculture</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-accent" />
                <span>Health</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-primary" />
                <span>Housing</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-amber-600" />
                <span>Employment</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-purple-600" />
                <span>Education</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              {healthTopics.map((topic) => (
                <HealthTag key={topic.name} name={topic.name} category={topic.category} />
              ))}
            </div>

            {/* Category Legend - Health */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Apple className="h-4 w-4 text-success" />
                <span>Nutrition</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-sky-600" />
                <span>Hygiene</span>
              </div>
              <div className="flex items-center gap-2">
                <Baby className="h-4 w-4 text-pink-600" />
                <span>Maternal & Child</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-accent" />
                <span>Common Illnesses</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-purple-600" />
                <span>Prevention</span>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Features Section */}
      <section id="features" className="container py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Use CivicGuide?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {selectedTopic === "policies" 
              ? "We make it simple to access information about government welfare programs"
              : "We make health information accessible and easy to understand"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16 pb-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Bridging the Information Gap
          </h2>
          {selectedTopic === "policies" ? (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CivicGuide is built to help rural citizens of India easily access information about government schemes and policies. We understand that navigating government programs can be confusing, which is why we've created a simple voice-based interface.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Just ask your question in your own language, and our AI assistant will guide you through eligibility criteria, application processes, required documents, and more.
              </p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CivicGuide brings essential health knowledge to rural communities. We believe everyone deserves access to reliable health information, regardless of where they live or what language they speak.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ask about symptoms, prevention methods, nutrition advice, or when to seek medical help. Our AI assistant provides easy-to-understand guidance based on trusted health practices.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative">
        <div className="absolute bottom-8 left-8">
          <elevenlabs-convai 
            key={selectedTopic}
            agent-id={selectedTopic === "policies" ? import.meta.env.VITE_ELEVENLABS_AGENT_ID_POLICIES : import.meta.env.VITE_ELEVENLABS_AGENT_ID_HEALTH}
          ></elevenlabs-convai>
        </div>
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 CivicGuide. Empowering Rural India with Information.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

