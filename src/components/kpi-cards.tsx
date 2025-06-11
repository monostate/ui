"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

export interface KpiCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon?: LucideIcon;
  description?: string;
  className?: string;
}

export function KpiCard({
  title,
  value,
  change,
  icon: Icon,
  description,
  className,
}: KpiCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(change || description) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            {change && (
              <span
                className={cn(
                  "flex items-center gap-1",
                  change.type === "increase" ? "text-green-600" : "text-red-600"
                )}
              >
                {change.type === "increase" ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(change.value)}%
              </span>
            )}
            {description && <span>{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}