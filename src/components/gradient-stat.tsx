"use client";

import { Card, CardContent } from "../primitives/card";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

export interface GradientStatProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  gradient?: string;
  trend?: {
    value: number;
    label: string;
  };
  className?: string;
}

export function GradientStat({
  title,
  value,
  icon: Icon,
  gradient = "from-blue-500 to-purple-500",
  trend,
  className,
}: GradientStatProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className={cn("h-2 bg-gradient-to-r", gradient)} />
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
            {trend && (
              <p className="text-sm text-muted-foreground mt-2">
                <span className={cn(
                  "font-medium",
                  trend.value > 0 ? "text-green-600" : "text-red-600"
                )}>
                  {trend.value > 0 ? "+" : ""}{trend.value}%
                </span>
                {" "}{trend.label}
              </p>
            )}
          </div>
          {Icon && (
            <div className={cn("p-3 rounded-lg bg-gradient-to-r text-white", gradient)}>
              <Icon className="h-6 w-6" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}