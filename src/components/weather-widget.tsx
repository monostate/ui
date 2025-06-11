"use client";

import { Card, CardContent } from "../primitives/card";
import { Cloud, CloudRain, Sun, CloudSnow } from "lucide-react";
import { cn } from "../lib/utils";

export interface WeatherWidgetProps {
  location: string;
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy" | "snowy";
  high?: number;
  low?: number;
  unit?: "C" | "F";
  className?: string;
}

export function WeatherWidget({
  location,
  temperature,
  condition,
  high,
  low,
  unit = "C",
  className,
}: WeatherWidgetProps) {
  const icons = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
    snowy: CloudSnow,
  };

  const Icon = icons[condition];

  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{location}</h3>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-bold">{temperature}</span>
              <span className="text-xl text-muted-foreground">°{unit}</span>
            </div>
            {(high !== undefined || low !== undefined) && (
              <div className="text-sm text-muted-foreground mt-1">
                {high !== undefined && <span>H: {high}°</span>}
                {high !== undefined && low !== undefined && <span> / </span>}
                {low !== undefined && <span>L: {low}°</span>}
              </div>
            )}
          </div>
          <Icon className="h-16 w-16 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}