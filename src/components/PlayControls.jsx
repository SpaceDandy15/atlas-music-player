import React from "react";
import { Shuffle, Rewind, Play, FastForward } from "lucide-react";

export default function PlayControls() {
  const activeButton = "play"; // options: "speed", "play", "shuffle", etc.

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Speed / 1x */}
      <button
        className={`px-3 py-2 font-semibold transition ${
          activeButton === "speed"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        1x
      </button>

      {/* Rewind */}
      <button className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition">
        <Rewind size={24} />
      </button>

      {/* Play */}
      <button className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition">
        <Play size={28} />
      </button>

      {/* Fast Forward */}
      <button className="text-[var(--color-tahiti)] hover:border hover:border-white rounded-md transition">
        <FastForward size={24} />
      </button>

      {/* Shuffle */}
      <button className={`transition ${
          activeButton === "shuffle"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
}
