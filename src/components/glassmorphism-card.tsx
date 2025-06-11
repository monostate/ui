"use client";

import React from "react";
import { cn } from "../lib/utils";

export interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
}

export function GlassmorphismCard({
  children,
  className,
  blur = "md",
  opacity = 20,
}: GlassmorphismCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-white/20 p-6",
        blurClasses[blur],
        className
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
      }}
    >
      {children}
    </div>
  );
}