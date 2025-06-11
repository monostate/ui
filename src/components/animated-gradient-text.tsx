"use client";

import React from "react";
import { cn } from "../lib/utils";

export interface AnimatedGradientTextProps {
  children: React.ReactNode;
  gradient?: string;
  animationSpeed?: "slow" | "normal" | "fast";
  className?: string;
}

export function AnimatedGradientText({
  children,
  gradient = "from-purple-400 via-pink-500 to-red-500",
  animationSpeed = "normal",
  className,
}: AnimatedGradientTextProps) {
  const speeds = {
    slow: "animate-gradient-slow",
    normal: "animate-gradient",
    fast: "animate-gradient-fast",
  };

  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent bg-300% ",
        gradient,
        speeds[animationSpeed],
        className
      )}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-slow {
          animation: gradient 6s ease infinite;
        }
        .animate-gradient-fast {
          animation: gradient 1.5s ease infinite;
        }
        .bg-300\% {
          background-size: 300%;
        }
      `}</style>
    </span>
  );
}