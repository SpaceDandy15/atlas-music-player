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
            ? "text-white bg-[var(--color-tahiti)]"
            : "text-[var(--color-tahiti)] hover:text-[var(--color-bermuda)]"
        }`}
      >
        1x
      </button>

      {/* Rewind */}
      <button className="text-[var(--color-tahiti)] hover:text-[var(--color-bermuda)] transition">
        <Rewind size={24} />
      </button>

      {/* Play */}
      <button
        className={`transition ${
          activeButton === "play"
            ? "text-white bg-[var(--color-bermuda)]"
            : "text-[var(--color-bermuda)] hover:text-[var(--color-tahiti)]"
        }`}
      >
        <Play size={28} />
      </button>

      {/* Fast Forward */}
      <button className="text-[var(--color-tahiti)] hover:text-[var(--color-bermuda)] transition">
        <FastForward size={24} />
      </button>

      {/* Shuffle */}
      <button
        className={`transition ${
          activeButton === "shuffle"
            ? "text-white bg-[var(--color-tahiti)]"
            : "text-[var(--color-tahiti)] hover:text-[var(--color-bermuda)]"
        }`}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
}
