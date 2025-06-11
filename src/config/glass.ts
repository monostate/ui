export interface GlassConfig {
  /** Enable glass effects globally */
  enabled: boolean;
  /** Blur intensity for glass effect */
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background opacity for glass effect */
  opacity?: number;
  /** Border opacity for glass effect */
  borderOpacity?: number;
  /** Enable noise texture overlay */
  noise?: boolean;
}

export const defaultGlassConfig: GlassConfig = {
  enabled: false,
  blur: 'md',
  opacity: 0.1,
  borderOpacity: 0.2,
  noise: true,
};

// CSS classes for glass effects
export const glassClasses = {
  base: 'backdrop-blur supports-backdrop-blur:bg-opacity-60',
  blur: {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  },
  light: 'bg-white/10 border-white/20',
  dark: 'bg-black/10 border-black/20',
  noise: 'before:absolute before:inset-0 before:bg-noise before:opacity-[0.02] before:pointer-events-none',
} as const;

// Utility to generate glass classes
export function getGlassClasses(
  config: Partial<GlassConfig> = {},
  isDark: boolean = false
): string {
  const mergedConfig = { ...defaultGlassConfig, ...config };
  
  if (!mergedConfig.enabled) return '';
  
  const classes = [
    glassClasses.base,
    glassClasses.blur[mergedConfig.blur || 'md'],
    isDark ? glassClasses.dark : glassClasses.light,
    mergedConfig.noise ? glassClasses.noise : '',
  ];
  
  return classes.filter(Boolean).join(' ');
}