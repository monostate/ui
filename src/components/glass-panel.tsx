import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const glassPanelVariants = cva(
  "relative overflow-hidden rounded-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "backdrop-blur-md bg-background/10 dark:bg-background/10 border border-white/20 dark:border-white/10",
        subtle: "backdrop-blur-sm bg-background/5 dark:bg-background/5 border border-white/10 dark:border-white/5",
        strong: "backdrop-blur-lg bg-background/20 dark:bg-background/20 border border-white/30 dark:border-white/20",
        colored: "backdrop-blur-md bg-primary/10 dark:bg-primary/10 border border-primary/20 dark:border-primary/20",
      },
      glow: {
        none: "",
        soft: "shadow-lg",
        medium: "shadow-xl shadow-primary/20",
        strong: "shadow-2xl shadow-primary/30",
      },
      noise: {
        true: "before:absolute before:inset-0 before:bg-noise before:opacity-[0.03] before:pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: "soft",
      noise: true,
    },
  },
);

export interface GlassPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPanelVariants> {}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant, glow, noise, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassPanelVariants({ variant, glow, noise, className }))}
      {...props}
    />
  ),
);
GlassPanel.displayName = "GlassPanel";

export { GlassPanel, glassPanelVariants };