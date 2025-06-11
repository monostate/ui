"use client";

import { useState } from "react";
import { Button } from "../primitives/button";
import { Plus, X } from "lucide-react";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

export interface FloatingActionProps {
  actions?: Array<{
    icon: LucideIcon;
    label?: string;
    onClick: () => void;
  }>;
  mainIcon?: LucideIcon;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
}

export function FloatingAction({
  actions = [],
  mainIcon: MainIcon = Plus,
  position = "bottom-right",
  className,
}: FloatingActionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const actionPositionClasses = {
    "bottom-right": "bottom-16 right-0",
    "bottom-left": "bottom-16 left-0",
    "top-right": "top-16 right-0",
    "top-left": "top-16 left-0",
  };

  return (
    <div className={cn("fixed", positionClasses[position], className)}>
      <div className="relative">
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-transform" />
          ) : (
            <MainIcon className="h-6 w-6 transition-transform" />
          )}
        </Button>

        {isOpen && actions.length > 0 && (
          <div
            className={cn(
              "absolute space-y-2 transition-all",
              actionPositionClasses[position]
            )}
          >
            {actions.map((action, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
                style={{
                  animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                {action.label && (
                  <span className="text-sm bg-background border rounded px-2 py-1 whitespace-nowrap">
                    {action.label}
                  </span>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full shadow-md"
                  onClick={() => {
                    action.onClick();
                    setIsOpen(false);
                  }}
                >
                  <action.icon className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}