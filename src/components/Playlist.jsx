import React from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist({ songs, selectedIndex, onSelect }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-[var(--color-midnight)] rounded-xl shadow w-80">
      <h2 className="text-lg font-bold text-white">Playlist</h2>
      {songs.map((song, index) => (
        <PlayListItem
          key={index}
          title={song.title}
          artist={song.artist}
          length={song.length}
          selected={index === selectedIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
