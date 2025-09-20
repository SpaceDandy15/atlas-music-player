import React from "react";
import PlayListItem from "./PlayListItem";
import { Song } from "./MusicPlayer";

interface PlaylistProps {
  songs: Song[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  highlightColor?: string; // pass highlight color from MusicPlayer
}

export default function Playlist({
  songs,
  selectedIndex,
  onSelect,
  highlightColor = "var(--color-bermuda)", // default highlight
}: PlaylistProps) {
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
          highlightColor={highlightColor} // pass down dynamic highlight color
        />
      ))}
    </div>
  );
}
