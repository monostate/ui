"use client";

import { Badge } from "../primitives/badge";
import { cn } from "../lib/utils";

export interface BadgeCollectionProps {
  badges: Array<{
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  }>;
  className?: string;
}

export function BadgeCollection({ badges, className }: BadgeCollectionProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((badge, index) => (
        <Badge key={index} variant={badge.variant || "default"}>
          {badge.label}
        </Badge>
      ))}
    </div>
  );
}