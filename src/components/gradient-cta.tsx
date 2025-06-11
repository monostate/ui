"use client";

import { Button } from "../primitives/button";
import { cn } from "../lib/utils";

export interface GradientCtaProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  gradient?: string;
  className?: string;
}

export function GradientCta({
  title = "Ready to get started?",
  description = "Join thousands of developers building amazing apps.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "View Demo",
  onPrimaryClick,
  onSecondaryClick,
  gradient = "from-purple-600 via-pink-600 to-orange-600",
  className,
}: GradientCtaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br p-8 text-white",
        gradient,
        className
      )}
    >
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg mb-6 opacity-90">{description}</p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </div>
  );
}