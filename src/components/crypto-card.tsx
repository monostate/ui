"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { Badge } from "../primitives/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";

export interface CryptoCardProps {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h?: number;
  icon?: string;
  sparklineData?: number[];
  className?: string;
}

export function CryptoCard({
  symbol,
  name,
  price,
  change24h,
  volume24h,
  icon,
  sparklineData,
  className,
}: CryptoCardProps) {
  const isPositive = change24h >= 0;

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <img src={icon} alt={symbol} className="w-8 h-8 rounded-full" />
            )}
            <div>
              <CardTitle className="text-base">{symbol}</CardTitle>
              <p className="text-xs text-muted-foreground">{name}</p>
            </div>
          </div>
          <Badge
            variant={isPositive ? "default" : "destructive"}
            className="flex items-center gap-1"
          >
            {isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            {Math.abs(change24h).toFixed(2)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold">
              ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            {volume24h && (
              <p className="text-xs text-muted-foreground">
                Vol: ${(volume24h / 1e9).toFixed(2)}B
              </p>
            )}
          </div>
          {sparklineData && sparklineData.length > 0 && (
            <div className="h-12 flex items-end gap-0.5">
              {sparklineData.map((value, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-t",
                    isPositive ? "bg-green-500" : "bg-red-500"
                  )}
                  style={{
                    height: `${(value / Math.max(...sparklineData)) * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}