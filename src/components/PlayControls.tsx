import React, { useState } from "react";
import { Shuffle, Rewind, Play, FastForward } from "lucide-react";

type Control = "speed" | "rewind" | "play" | "forward" | "shuffle" | "";

const PlayControls: React.FC = () => {
  const [activeButton, setActiveButton] = useState<Control>("");

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Speed / 1x */}
      <button
        onClick={() => setActiveButton("speed")}
        className={`px-3 py-2 font-semibold transition ${
          activeButton === "speed"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        1x
      </button>

      {/* Rewind */}
      <button
        onClick={() => setActiveButton("rewind")}
        className={`transition ${
          activeButton === "rewind"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        <Rewind size={24} />
      </button>

      {/* Play */}
      <button
        onClick={() => setActiveButton("play")}
        className={`transition ${
          activeButton === "play"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        <Play size={28} />
      </button>

      {/* Fast Forward */}
      <button
        onClick={() => setActiveButton("forward")}
        className={`transition ${
          activeButton === "forward"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        <FastForward size={24} />
      </button>

      {/* Shuffle */}
      <button
        onClick={() => setActiveButton("shuffle")}
        className={`transition ${
          activeButton === "shuffle"
            ? "text-white border border-white rounded-md"
            : "text-[var(--color-tahiti)] hover:border hover:border-white rounded-md"
        }`}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
