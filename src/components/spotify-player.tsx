"use client";

import { Card, CardContent } from "../primitives/card";
import { Button } from "../primitives/button";
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { cn } from "../lib/utils";

export interface SpotifyPlayerProps {
  track: {
    title: string;
    artist: string;
    album?: string;
    coverUrl?: string;
    duration?: number;
  };
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onLike?: () => void;
  liked?: boolean;
  className?: string;
}

export function SpotifyPlayer({
  track,
  isPlaying = false,
  onPlayPause,
  onNext,
  onPrevious,
  onLike,
  liked = false,
  className,
}: SpotifyPlayerProps) {
  const progress = 30; // Static progress for demo

  return (
    <Card className={cn("bg-black text-white", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {track.coverUrl && (
            <img
              src={track.coverUrl}
              alt={track.album || track.title}
              className="w-16 h-16 rounded"
            />
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{track.title}</h3>
            <p className="text-sm text-gray-400 truncate">{track.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-green-500"
            onClick={onLike}
          >
            <Heart className={cn("h-5 w-5", liked && "fill-green-500 text-green-500")} />
          </Button>
        </div>

        <div className="mt-4">
          <div className="bg-gray-800 rounded-full h-1 mb-2">
            <div
              className="bg-white h-1 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80"
              onClick={onPrevious}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80 h-10 w-10"
              onClick={onPlayPause}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80"
              onClick={onNext}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}