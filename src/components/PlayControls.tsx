import React from "react";
import { Shuffle, Rewind, Play, FastForward, Pause } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  playbackRate: number;
  setPlaybackRate: (rate: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  shuffle: boolean;
  toggleShuffle: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPause,
  playbackRate,
  setPlaybackRate,
  nextSong,
  prevSong,
  shuffle,
  toggleShuffle,
}) => {
  const handleSpeedClick = () => {
    const nextRate = playbackRate === 0.5 ? 1 : playbackRate === 1 ? 2 : 0.5;
    setPlaybackRate(nextRate);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Speed Button */}
      <button
        onClick={handleSpeedClick}
        className="px-3 py-2 font-semibold text-[var(--color-tahiti)] border border-white rounded-md hover:bg-[var(--color-bermuda)]"
      >
        {playbackRate}x
      </button>

      {/* Rewind */}
      <button
        onClick={prevSong}
        className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition"
      >
        <Rewind size={24} />
      </button>

      {/* Play / Pause */}
      <button
        onClick={onPlayPause}
        className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition"
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </button>

      {/* Fast Forward */}
      <button
        onClick={nextSong}
        className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition"
      >
        <FastForward size={24} />
      </button>

      {/* Shuffle */}
      <button
        onClick={toggleShuffle}
        className={`text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition ${
          shuffle ? "text-[var(--color-bermuda)]" : ""
        }`}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
