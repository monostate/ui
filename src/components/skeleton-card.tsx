"use client";

import { Card, CardContent, CardHeader } from "../primitives/card";
import { Skeleton } from "../primitives/skeleton";
import { cn } from "../lib/utils";

export interface SkeletonCardProps {
  showHeader?: boolean;
  showImage?: boolean;
  lines?: number;
  className?: string;
}

export function SkeletonCard({
  showHeader = true,
  showImage = false,
  lines = 3,
  className,
}: SkeletonCardProps) {
  return (
    <Card className={cn("", className)}>
      {showHeader && (
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
      )}
      <CardContent>
        {showImage && <Skeleton className="h-40 w-full mb-4" />}
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
              key={i}
              className={cn("h-4", i === lines - 1 && "w-4/5")}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}