"use client";

import { cn } from "../lib/utils";

export interface VoiceWaveProps {
  isActive?: boolean;
  bars?: number;
  color?: string;
  className?: string;
}

export function VoiceWave({
  isActive = false,
  bars = 5,
  color = "bg-primary",
  className,
}: VoiceWaveProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full transition-all",
            color,
            isActive ? "animate-voice-wave" : "h-2"
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isActive ? undefined : "8px",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes voice-wave {
          0%, 100% { height: 8px; }
          50% { height: 24px; }
        }
        .animate-voice-wave {
          animation: voice-wave 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}