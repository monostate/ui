"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "../primitives/card";
import { cn } from "../lib/utils";

export interface RatingCardProps {
  rating: number;
  maxRating?: number;
  title?: string;
  subtitle?: string;
  showNumber?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function RatingCard({
  rating,
  maxRating = 5,
  title,
  subtitle,
  showNumber = true,
  size = "md",
  className,
}: RatingCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        {title && <h3 className="font-semibold mb-2">{title}</h3>}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: maxRating }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  sizes[size],
                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                )}
              />
            ))}
          </div>
          {showNumber && (
            <span className="text-sm font-medium text-muted-foreground">
              {rating.toFixed(1)}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}