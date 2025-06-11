"use client";

import { Card, CardContent } from "../primitives/card";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

export interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  color?: string;
  className?: string;
}

export function QuickActionCard({
  icon: Icon,
  title,
  description,
  onClick,
  color = "primary",
  className,
}: QuickActionCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
            `bg-${color}/10`
          )}
        >
          <Icon className={cn("h-6 w-6", `text-${color}`)} />
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}