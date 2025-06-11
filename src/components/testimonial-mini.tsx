"use client";

import { Card, CardContent } from "../primitives/card";
import { Avatar } from "../primitives/avatar";
import { cn } from "../lib/utils";

export interface TestimonialMiniProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
  className?: string;
}

export function TestimonialMini({
  quote,
  author,
  role,
  company,
  avatarSrc,
  className,
}: TestimonialMiniProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        <blockquote className="text-sm text-muted-foreground mb-4">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          {avatarSrc && (
            <Avatar className="h-10 w-10">
              <img src={avatarSrc} alt={author} />
            </Avatar>
          )}
          <div>
            <p className="text-sm font-semibold">{author}</p>
            {(role || company) && (
              <p className="text-xs text-muted-foreground">
                {role}{role && company && " at "}{company}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}