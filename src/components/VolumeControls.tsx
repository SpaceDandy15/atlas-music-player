import React from "react";
import { Volume2 } from "lucide-react";

interface VolumeControlsProps {
  volume: number; // 0-100
  setVolume: (v: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, setVolume }) => {
  return (
    <div className="flex items-center gap-2 w-48">
      {/* Volume icon */}
      <Volume2 size={24} className="text-[var(--color-bermuda)]" />

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-full accent-[var(--color-bermuda)]"
      />
    </div>
  );
};

export default VolumeControls;
