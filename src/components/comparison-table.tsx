"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { Check, X } from "lucide-react";
import { cn } from "../lib/utils";

export interface ComparisonTableProps {
  title?: string;
  plans: Array<{
    name: string;
    price: string;
    features: Record<string, boolean | string>;
    highlighted?: boolean;
  }>;
  className?: string;
}

export function ComparisonTable({
  title = "Compare Plans",
  plans,
  className,
}: ComparisonTableProps) {
  const allFeatures = Array.from(
    new Set(plans.flatMap(plan => Object.keys(plan.features)))
  );

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Features</th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={cn(
                      "text-center p-2",
                      plan.highlighted && "bg-primary/10"
                    )}
                  >
                    <div className="font-semibold">{plan.name}</div>
                    <div className="text-lg">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature} className="border-t">
                  <td className="p-2 text-sm">{feature}</td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        "text-center p-2",
                        plan.highlighted && "bg-primary/5"
                      )}
                    >
                      {typeof plan.features[feature] === "boolean" ? (
                        plan.features[feature] ? (
                          <Check className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{plan.features[feature] || "-"}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}