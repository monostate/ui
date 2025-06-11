"use client";

import { Card, CardContent } from "../primitives/card";
import { X } from "lucide-react";
import { Button } from "../primitives/button";
import { cn } from "../lib/utils";

export interface NotificationStackProps {
  notifications: Array<{
    id: string;
    title: string;
    message?: string;
    type?: "info" | "success" | "warning" | "error";
    timestamp?: Date;
  }>;
  onDismiss?: (id: string) => void;
  className?: string;
}

export function NotificationStack({
  notifications,
  onDismiss,
  className,
}: NotificationStackProps) {
  const typeStyles = {
    info: "border-blue-500/50 bg-blue-500/10",
    success: "border-green-500/50 bg-green-500/10",
    warning: "border-yellow-500/50 bg-yellow-500/10",
    error: "border-red-500/50 bg-red-500/10",
  };

  return (
    <div className={cn("space-y-2", className)}>
      {notifications.map((notification, index) => (
        <Card
          key={notification.id}
          className={cn(
            "border-l-4 animate-slide-in-right",
            typeStyles[notification.type || "info"]
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-medium">{notification.title}</h4>
                {notification.message && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                )}
                {notification.timestamp && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.timestamp.toLocaleTimeString()}
                  </p>
                )}
              </div>
              {onDismiss && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => onDismiss(notification.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}