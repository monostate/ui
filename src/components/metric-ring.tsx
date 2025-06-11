"use client";

import { Card, CardContent } from "../primitives/card";
import { cn } from "../lib/utils";

export interface MetricRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: string;
  className?: string;
}

export function MetricRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  label,
  color = "rgb(59, 130, 246)", // blue-500
  className,
}: MetricRingProps) {
  const percentage = (value / max) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Card className={cn("", className)}>
      <CardContent className="flex items-center justify-center p-6">
        <div className="relative">
          <svg width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="none"
              className="text-muted"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-500 -rotate-90 origin-center"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{value}</span>
            {label && <span className="text-xs text-muted-foreground">{label}</span>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}