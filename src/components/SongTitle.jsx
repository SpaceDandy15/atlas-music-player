import React from "react";

export default function SongTitle({ title = "Song Title", artist = "Artist" }) {
  return (
    <div className="flex flex-col items-start text-left">
      <h2 className="text-lg font-bold text-white -ml-1">{title}</h2>
      <p className="text-sm text-[var(--color-tahiti)] -ml-1">{artist}</p>
    </div>
  );
}
