"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

export interface SectionCardsProps {
  sections: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
    href?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function SectionCards({
  sections,
  columns = 3,
  className,
}: SectionCardsProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {sections.map((section, index) => (
        <Card
          key={index}
          className={cn(
            "transition-all hover:shadow-lg",
            section.href && "cursor-pointer"
          )}
          onClick={() => section.href && window.location.assign(section.href)}
        >
          <CardHeader>
            <div className="flex items-start gap-3">
              {section.icon && (
                <section.icon className="h-5 w-5 text-primary mt-0.5" />
              )}
              <CardTitle className="text-lg">{section.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{section.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}