"use client";

import { useState } from "react";
import { Card } from "../primitives/card";
import { Button } from "../primitives/button";
import { Copy, Check } from "lucide-react";
import { cn } from "../lib/utils";

export interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  showLineNumbers = true,
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <Card className={cn("overflow-hidden", className)}>
      {filename && (
        <div className="bg-muted px-4 py-2 border-b">
          <span className="text-sm font-mono">{filename}</span>
        </div>
      )}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm">
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-muted-foreground select-none">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </Card>
  );
}