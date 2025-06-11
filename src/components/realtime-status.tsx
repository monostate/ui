"use client";

import { Card, CardContent } from "../primitives/card";
import { cn } from "../lib/utils";

export interface RealtimeStatusProps {
  title: string;
  status: "operational" | "degraded" | "down" | "maintenance";
  message?: string;
  lastUpdated?: Date;
  className?: string;
}

export function RealtimeStatus({
  title,
  status,
  message,
  lastUpdated,
  className,
}: RealtimeStatusProps) {
  const statusConfig = {
    operational: {
      color: "bg-green-500",
      text: "Operational",
      textColor: "text-green-600",
    },
    degraded: {
      color: "bg-yellow-500",
      text: "Degraded Performance",
      textColor: "text-yellow-600",
    },
    down: {
      color: "bg-red-500",
      text: "Service Down",
      textColor: "text-red-600",
    },
    maintenance: {
      color: "bg-blue-500",
      text: "Under Maintenance",
      textColor: "text-blue-600",
    },
  };

  const config = statusConfig[status];

  return (
    <Card className={cn("", className)}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn("w-3 h-3 rounded-full mt-0.5", config.color)} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{title}</h3>
              <span className={cn("text-sm font-medium", config.textColor)}>
                {config.text}
              </span>
            </div>
            {message && (
              <p className="text-sm text-muted-foreground mt-1">{message}</p>
            )}
            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-2">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}