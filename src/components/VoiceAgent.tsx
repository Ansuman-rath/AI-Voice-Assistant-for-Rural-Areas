import { useState, useCallback } from "react";
import { Mic, MicOff, Loader2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceAgentProps {
  agentId?: string;
  theme?: "policies" | "health";
}

export function VoiceAgent({ agentId, theme = "policies" }: VoiceAgentProps) {
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "speaking">("idle");
  const [isListening, setIsListening] = useState(false);

  const isHealth = theme === "health";

  const handleStartConversation = useCallback(async () => {
    if (!agentId) {
      // Demo mode - simulate connection
      setStatus("connecting");
      setTimeout(() => {
        setStatus("connected");
        setIsListening(true);
      }, 1500);
      return;
    }

    setStatus("connecting");
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setStatus("connected");
      setIsListening(true);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setStatus("idle");
    }
  }, [agentId]);

  const handleStopConversation = useCallback(() => {
    setStatus("idle");
    setIsListening(false);
  }, []);

  const isActive = status === "connected" || status === "speaking";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Status Text */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-foreground">
          
          {status === "connecting" && "Connecting..."}
          {status === "connected" && "Listening..."}
          {status === "speaking" && "Speaking..."}
        </p>
        {isActive && (
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Volume2 className="h-4 w-4 animate-pulse" />
            <span className="text-sm">Voice agent is active</span>
          </div>
        )}
        {status === "idle" && (
          <p className="text-sm text-muted-foreground max-w-xs">
            {isHealth 
              ? "Ask about nutrition, hygiene, common illnesses, and preventive care"
              : "Ask about PM-KISAN, MGNREGA, Ayushman Bharat, and more government schemes"}
          </p>
        )}
      </div>
    </div>
  );
}
