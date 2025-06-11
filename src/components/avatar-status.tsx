"use client";

import { Avatar } from "../primitives/avatar";
import { cn } from "../lib/utils";

export interface AvatarStatusProps {
  src?: string;
  alt?: string;
  status?: "online" | "offline" | "busy" | "away";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
};

const sizes = {
  sm: { avatar: "h-8 w-8", status: "h-2 w-2" },
  md: { avatar: "h-10 w-10", status: "h-3 w-3" },
  lg: { avatar: "h-12 w-12", status: "h-3.5 w-3.5" },
};

export function AvatarStatus({
  src = "/placeholder-user.jpg",
  alt = "User",
  status = "online",
  size = "md",
  className,
}: AvatarStatusProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <Avatar className={sizes[size].avatar}>
        <img src={src} alt={alt} />
      </Avatar>
      <span
        className={cn(
          "absolute bottom-0 right-0 block rounded-full ring-2 ring-white",
          sizes[size].status,
          statusColors[status]
        )}
      />
    </div>
  );
}