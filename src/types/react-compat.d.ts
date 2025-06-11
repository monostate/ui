// React 19 compatibility types
declare module 'react' {
  interface HTMLAttributes<T> {
    jsx?: boolean;
  }
}

declare global {
  namespace React {
    interface ReactNode {
      bigint?: never;
    }
  }
}

export {};
