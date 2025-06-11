"use client";

import { cn } from "../lib/utils";

export interface RealtimeIndicatorProps {
  status?: "online" | "offline" | "connecting";
  label?: string;
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function RealtimeIndicator({
  status = "online",
  label,
  pulse = true,
  size = "md",
  className,
}: RealtimeIndicatorProps) {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    connecting: "bg-yellow-500",
  };

  const sizes = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div
          className={cn(
            "rounded-full",
            sizes[size],
            statusColors[status]
          )}
        />
        {pulse && status === "online" && (
          <div
            className={cn(
              "absolute inset-0 rounded-full animate-ping",
              sizes[size],
              statusColors[status]
            )}
          />
        )}
      </div>
      {label && (
        <span className="text-sm font-medium">
          {label || status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )}
    </div>
  );
}