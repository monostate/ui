"use client";

import { cn } from "../lib/utils";

export interface StatusIndicatorProps {
  status: "active" | "inactive" | "pending" | "error";
  label?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

const statusStyles = {
  active: "bg-green-500",
  inactive: "bg-gray-400",
  pending: "bg-yellow-500",
  error: "bg-red-500",
};

const sizes = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

export function StatusIndicator({
  status,
  label,
  size = "md",
  pulse = false,
  className,
}: StatusIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <span
          className={cn(
            "block rounded-full",
            sizes[size],
            statusStyles[status]
          )}
        />
        {pulse && status === "active" && (
          <span
            className={cn(
              "absolute inset-0 rounded-full animate-ping",
              sizes[size],
              statusStyles[status],
              "opacity-75"
            )}
          />
        )}
      </div>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}