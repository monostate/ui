"use client";

import React from "react";
import { cn } from "../lib/utils";

export interface GradientBorderCardProps {
  children: React.ReactNode;
  gradient?: string;
  borderWidth?: number;
  className?: string;
}

export function GradientBorderCard({
  children,
  gradient = "from-purple-500 via-pink-500 to-red-500",
  borderWidth = 2,
  className,
}: GradientBorderCardProps) {
  return (
    <div
      className={cn("relative rounded-lg", className)}
      style={{ padding: `${borderWidth}px` }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r",
          gradient
        )}
      />
      <div className="relative rounded-lg bg-background p-6">
        {children}
      </div>
    </div>
  );
}