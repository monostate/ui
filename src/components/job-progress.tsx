"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { Progress } from "../primitives/progress";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { cn } from "../lib/utils";

export interface JobProgressProps {
  title: string;
  steps: Array<{
    name: string;
    status: "completed" | "active" | "pending";
  }>;
  className?: string;
}

export function JobProgress({
  title,
  steps,
  className,
}: JobProgressProps) {
  const completedSteps = steps.filter(s => s.status === "completed").length;
  const progress = (completedSteps / steps.length) * 100;

  const statusIcons = {
    completed: CheckCircle,
    active: Clock,
    pending: Circle,
  };

  const statusColors = {
    completed: "text-green-500",
    active: "text-blue-500",
    pending: "text-muted-foreground",
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {steps.map((step, index) => {
            const Icon = statusIcons[step.status];
            return (
              <div key={index} className="flex items-center gap-3">
                <Icon className={cn("h-5 w-5", statusColors[step.status])} />
                <span
                  className={cn(
                    "text-sm",
                    step.status === "completed" && "line-through text-muted-foreground"
                  )}
                >
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}