import React from "react";
import { Volume2 } from "lucide-react";

type VolumeControlsProps = {
  volume: number; // Current volume (0–100)
  onChange: (value: number) => void; // Callback when slider changes
};

export default function VolumeControls({ volume, onChange }: VolumeControlsProps) {
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
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-bermuda)]"
      />
    </div>
  );
}
