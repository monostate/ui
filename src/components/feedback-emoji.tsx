"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../lib/utils";

export interface FeedbackEmojiProps {
  title?: string;
  emojis?: Array<{
    emoji: string;
    label: string;
  }>;
  onFeedback?: (feedback: { emoji: string; label: string }) => void;
  className?: string;
}

export function FeedbackEmoji({
  title = "Was this helpful?",
  emojis = [
    { emoji: "😍", label: "Love it" },
    { emoji: "😊", label: "Like it" },
    { emoji: "😐", label: "It's okay" },
    { emoji: "😕", label: "Not great" },
    { emoji: "😣", label: "Hate it" },
  ],
  onFeedback,
  className,
}: FeedbackEmojiProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (emoji: typeof emojis[0]) => {
    setSelected(emoji.emoji);
    if (onFeedback) {
      onFeedback(emoji);
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-center text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-3">
          {emojis.map((emoji) => (
            <button
              key={emoji.emoji}
              onClick={() => handleSelect(emoji)}
              className={cn(
                "group relative p-2 rounded-lg transition-all hover:scale-125",
                selected === emoji.emoji && "scale-125"
              )}
            >
              <span className="text-3xl">{emoji.emoji}</span>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {emoji.label}
              </span>
            </button>
          ))}
        </div>
        {selected && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            Thanks for your feedback!
          </p>
        )}
      </CardContent>
    </Card>
  );
}