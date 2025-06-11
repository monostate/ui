"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../lib/utils";

export interface MoodTrackerProps {
  moods?: Array<{
    emoji: string;
    label: string;
    value: number;
  }>;
  onMoodSelect?: (mood: { emoji: string; label: string; value: number }) => void;
  selectedValue?: number;
  className?: string;
}

export function MoodTracker({
  moods = [
    { emoji: "😢", label: "Sad", value: 1 },
    { emoji: "😕", label: "Down", value: 2 },
    { emoji: "😐", label: "Neutral", value: 3 },
    { emoji: "🙂", label: "Good", value: 4 },
    { emoji: "😄", label: "Great", value: 5 },
  ],
  onMoodSelect,
  selectedValue,
  className,
}: MoodTrackerProps) {
  const [selected, setSelected] = useState(selectedValue);

  const handleSelect = (mood: typeof moods[0]) => {
    setSelected(mood.value);
    if (onMoodSelect) {
      onMoodSelect(mood);
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-center">How are you feeling?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-2">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleSelect(mood)}
              className={cn(
                "p-3 rounded-lg transition-all hover:scale-110",
                selected === mood.value
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <div className="text-3xl">{mood.emoji}</div>
              <p className="text-xs mt-1">{mood.label}</p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}