"use client";

import { Button } from "../primitives/button";
import { cn } from "../lib/utils";

export interface SocialShareProps {
  url?: string;
  title?: string;
  platforms?: Array<"twitter" | "facebook" | "linkedin" | "email">;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialShare({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = "Check this out!",
  platforms = ["twitter", "facebook", "linkedin", "email"],
  size = "md",
  className,
}: SocialShareProps) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  };

  const icons = {
    twitter: "𝕏",
    facebook: "f",
    linkedin: "in",
    email: "✉",
  };

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {platforms.map((platform) => (
        <Button
          key={platform}
          variant="outline"
          size="icon"
          className={sizes[size]}
          onClick={() => window.open(shareLinks[platform], '_blank')}
          title={`Share on ${platform}`}
        >
          <span className="font-bold">{icons[platform]}</span>
        </Button>
      ))}
    </div>
  );
}