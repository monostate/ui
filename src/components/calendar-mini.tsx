"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { Button } from "../primitives/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

export interface CalendarMiniProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  disabledDates?: Date[];
  className?: string;
}

export function CalendarMini({
  selectedDate = new Date(),
  onDateSelect,
  disabledDates = [],
  className,
}: CalendarMiniProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate);
  const [selected, setSelected] = useState(selectedDate);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelected(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const isDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return disabledDates.some(d => 
      d.getDate() === date.getDate() &&
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      selected.getDate() === day &&
      selected.getMonth() === currentMonth.getMonth() &&
      selected.getFullYear() === currentMonth.getFullYear()
    );
  };

  const monthYear = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{monthYear}</CardTitle>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={`day-${index}`} className="text-muted-foreground font-medium p-2">
              {day}
            </div>
          ))}
          {previousMonthDays.map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => !isDisabled(day) && handleDateClick(day)}
              disabled={isDisabled(day)}
              className={cn(
                "p-2 text-sm rounded-md hover:bg-muted transition-colors",
                isSelected(day) && "bg-primary text-primary-foreground hover:bg-primary",
                isDisabled(day) && "opacity-50 cursor-not-allowed"
              )}
            >
              {day}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}