/**
 * Environment configuration for the UI components
 * This provides a centralized way to access environment variables
 * with proper type safety and fallbacks for demo/showcase mode
 */

export interface EnvConfig {
  // API Configuration
  apiBaseUrl: string;
  apiAuthToken: string;

  // Third-party services
  stripePublishableKey: string;

  // App Configuration
  appUrl: string;

  // Feature flags
  isDemoMode: boolean;
}

/**
 * Get environment configuration with fallbacks for demo mode
 * In production, these should come from actual environment variables
 */
export function getEnvConfig(): EnvConfig {
  // Check if we're in a Next.js environment
  const isNextJs = typeof process !== "undefined" && process.env;

  // In demo/showcase mode, use mock values
  const isDemoMode =
    !isNextJs ||
    process.env.NODE_ENV === "development" ||
    !process.env.NEXT_PUBLIC_API_BASE_URL;

  return {
    // API Configuration
    apiBaseUrl: isNextJs
      ? process.env.NEXT_PUBLIC_API_BASE_URL || "/api"
      : "/api",

    apiAuthToken: isNextJs
      ? process.env.NEXT_PUBLIC_API_AUTH_TOKEN || "demo-token"
      : "demo-token",

    // Third-party services
    stripePublishableKey: isNextJs
      ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_mock_key"
      : "pk_test_mock_key",

    // App Configuration
    appUrl: isNextJs
      ? process.env.NEXT_PUBLIC_APP_URL ||
        (typeof window !== "undefined"
          ? window.location.origin
          : "http://localhost:3000")
      : typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000",

    // Feature flags
    isDemoMode,
  };
}

// Singleton instance
let envConfig: EnvConfig | null = null;

/**
 * Get cached environment configuration
 */
export function getEnv(): EnvConfig {
  if (!envConfig) {
    envConfig = getEnvConfig();
  }
  return envConfig;
}

/**
 * Helper function to construct API URLs
 */
export function getApiUrl(endpoint: string): string {
  const env = getEnv();
  // Remove leading slash from endpoint if present
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  // Ensure base URL doesn't end with slash
  const cleanBaseUrl = env.apiBaseUrl.endsWith("/")
    ? env.apiBaseUrl.slice(0, -1)
    : env.apiBaseUrl;
  return `${cleanBaseUrl}/${cleanEndpoint}`;
}

/**
 * Helper function to get authorization headers
 */
export function getAuthHeaders(): Record<string, string> {
  const env = getEnv();
  return {
    Authorization: `Bearer ${env.apiAuthToken}`,
    "Content-Type": "application/json",
  };
}
