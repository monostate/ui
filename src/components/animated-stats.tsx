"use client";

import { useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

export interface AnimatedStatsProps {
  stats: Array<{
    icon?: LucideIcon;
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
  }>;
  duration?: number;
  className?: string;
}

export function AnimatedStats({
  stats,
  duration = 2000,
  className,
}: AnimatedStatsProps) {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        if (current < stat.value) {
          current += increment;
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.min(current, stat.value);
            return newValues;
          });
        } else {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [stats, duration]);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          {stat.icon && (
            <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-2">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
          )}
          <div className="text-2xl font-bold">
            {stat.prefix}
            {Math.floor(animatedValues[index]).toLocaleString()}
            {stat.suffix}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}