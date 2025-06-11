"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../primitives/card";
import { Button } from "../primitives/button";
import { Badge } from "../primitives/badge";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

export interface PricingCardProps {
  title: string;
  price: string | number;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText?: string;
  onSelect?: () => void;
  className?: string;
}

export function PricingCard({
  title,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  badge,
  buttonText = "Get Started",
  onSelect,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative",
        highlighted && "border-primary shadow-lg",
        className
      )}
    >
      {badge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          {badge}
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}