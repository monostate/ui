"use client";

import React from "react";
import { cn } from "../lib/utils";

export interface PulseAnimationProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PulseAnimation({
  children,
  color = "bg-primary",
  duration = 2,
  size = "md",
  className,
}: PulseAnimationProps) {
  const sizes = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div className={cn("relative inline-flex", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-75 animate-ping",
          color
        )}
        style={{ animationDuration: `${duration}s` }}
      />
      <div className={cn("relative rounded-full", color, sizes[size])}>
        {children}
      </div>
    </div>
  );
}