// React 19 compatibility types
import { ReactElement, ReactNode as OriginalReactNode } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    jsx?: boolean;
  }
  
  // Fix for React 19 ReactNode type compatibility
  type ReactNode = OriginalReactNode | Promise<OriginalReactNode>;
}

declare global {
  namespace React {
    interface ReactPortal {
      children?: ReactNode;
    }
  }
}

export {};
