import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GlassStyle = "none" | "subtle" | "medium" | "strong" | "ultra";

export const glassStyles: Record<GlassStyle, string> = {
  none: "",
  subtle: "backdrop-blur-sm bg-background/5 dark:bg-background/10 border-white/10 dark:border-white/5 shadow-sm",
  medium: "backdrop-blur-md bg-background/10 dark:bg-background/20 border-white/20 dark:border-white/10 shadow-lg",
  strong: "backdrop-blur-lg bg-background/20 dark:bg-background/30 border-white/30 dark:border-white/20 shadow-xl",
  ultra: "backdrop-blur-xl bg-background/30 dark:bg-background/40 border-white/40 dark:border-white/30 shadow-2xl",
};

export const glassOverrides = {
  // Override default backgrounds
  bg: "!bg-transparent",
  // Add glass-specific hover states
  hover: {
    subtle: "hover:bg-background/10 dark:hover:bg-background/15",
    medium: "hover:bg-background/15 dark:hover:bg-background/25",
    strong: "hover:bg-background/25 dark:hover:bg-background/35",
    ultra: "hover:bg-background/35 dark:hover:bg-background/45",
  },
};

/**
 * Apply glass morphism effect to any component
 * @param glassStyle - The intensity of the glass effect
 * @param className - Additional classes to apply
 * @returns Combined class string with glass effects
 */
export function glass(glassStyle: GlassStyle = "medium", className?: string): string {
  if (glassStyle === "none") return className || "";
  
  return cn(
    glassStyles[glassStyle],
    glassOverrides.bg,
    glassOverrides.hover[glassStyle],
    className
  );
}
