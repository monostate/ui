"use client";

import { useState } from "react";
import { Card, CardContent } from "../primitives/card";
import { Input } from "../primitives/input";
import { Label } from "../primitives/label";
import { cn } from "../lib/utils";

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  presets?: string[];
  showInput?: boolean;
  className?: string;
}

export function ColorPicker({
  value = "#000000",
  onChange,
  presets = [
    "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
    "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
    "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
    "#ec4899", "#f43f5e"
  ],
  showInput = true,
  className,
}: ColorPickerProps) {
  const [color, setColor] = useState(value);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={color}
              onChange={(e) => handleChange(e.target.value)}
              className="h-16 w-16 cursor-pointer rounded"
            />
            {showInput && (
              <div className="flex-1">
                <Label htmlFor="color-input">Hex Color</Label>
                <Input
                  id="color-input"
                  type="text"
                  value={color}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="#000000"
                />
              </div>
            )}
          </div>

          {presets.length > 0 && (
            <div className="grid grid-cols-9 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  className={cn(
                    "h-8 w-8 rounded border-2",
                    color === preset ? "border-primary" : "border-transparent"
                  )}
                  style={{ backgroundColor: preset }}
                  onClick={() => handleChange(preset)}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}