import React from "react";
import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex items-center gap-2 w-48">
      {/* Volume icon */}
      <Volume2 size={24} className="text-[var(--color-bermuda)]" />

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        className="w-full accent-[var(--color-bermuda)]"
      />
    </div>
  );
}
