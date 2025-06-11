"use client";

import { cn } from "../lib/utils";

export interface WaveDividerProps {
  color?: string;
  height?: number;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  color = "currentColor",
  height = 100,
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn("w-full", flip && "rotate-180", className)}
      style={{ height }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={color}
        />
      </svg>
    </div>
  );
}