"use client";

import { cn } from "../lib/utils";

export interface QrCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export function QrCode({
  value,
  size = 200,
  className,
}: QrCodeProps) {
  // In a real implementation, you'd use a QR code library
  // This is just a placeholder
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg inline-block",
        className
      )}
    >
      <div
        className="bg-black/10 rounded"
        style={{ width: size, height: size }}
      >
        <div className="flex items-center justify-center h-full text-xs text-muted-foreground text-center p-4">
          QR Code for: {value}
        </div>
      </div>
    </div>
  );
}