import React, { useState } from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  const songs = [
    { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
    { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
    { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13" },
    { title: "Electric Fever", artist: "Neon Jungle", length: "8:41" },
    { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27" },
    { title: "Golden Haze", artist: "Velvet Waves", length: "3:15" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // start with first song selected

  return (
    <div className="flex flex-col gap-4 p-6 bg-[var(--color-midnight)] rounded-xl shadow w-80">
      <h2 className="text-lg font-bold text-white">Playlist</h2>
      {songs.map((song, index) => (
        <PlayListItem
          key={index}
          title={song.title}
          artist={song.artist}
          length={song.length}
          selected={index === selectedIndex} // highlight based on state
          onClick={() => setSelectedIndex(index)} // change selected song on click
        />
      ))}
    </div>
  );
}
