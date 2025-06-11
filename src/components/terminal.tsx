"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card } from "../primitives/card";
import { cn } from "../lib/utils";

export interface TerminalProps {
  commands?: Array<{
    input: string;
    output: string;
  }>;
  prompt?: string;
  onCommand?: (command: string) => string | Promise<string>;
  className?: string;
}

export function Terminal({
  commands = [],
  prompt = "$",
  onCommand,
  className,
}: TerminalProps) {
  const [history, setHistory] = useState(commands);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const command = input.trim();
    setInput("");
    setIsProcessing(true);

    try {
      let output = "Command not recognized";
      if (onCommand) {
        output = await onCommand(command);
      }
      setHistory((prev) => [...prev, { input: command, output }]);
    } catch (error) {
      setHistory((prev) => [
        ...prev,
        { input: command, output: "Error executing command" },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card
      className={cn(
        "bg-black text-green-400 font-mono p-4 overflow-hidden",
        className
      )}
    >
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {history.map((item, index) => (
          <div key={index}>
            <div className="flex gap-2">
              <span className="text-green-500">{prompt}</span>
              <span>{item.input}</span>
            </div>
            {item.output && (
              <div className="ml-4 text-gray-300 whitespace-pre-wrap">
                {item.output}
              </div>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="text-green-500">{prompt}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isProcessing}
            className="flex-1 bg-transparent outline-none"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </Card>
  );
}