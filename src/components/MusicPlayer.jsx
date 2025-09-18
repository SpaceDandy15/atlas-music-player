import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

const songs = [
  { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55", cover: "/assets/cover1.svg" },
  { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02", cover: "/assets/cover2.svg" },
  { title: "Fading Shadows", artist: "The Emberlight", length: "3:01", cover: "/assets/cover3.svg" },
  { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01", cover: "/assets/cover4.svg" },
  { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54", cover: "/assets/cover5.svg" },
  { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13", cover: "/assets/cover6.svg" },
  { title: "Electric Fever", artist: "Neon Jungle", length: "8:41", cover: "/assets/cover7.svg" },
  { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27", cover: "/assets/cover8.svg" },
  { title: "Golden Haze", artist: "Velvet Waves", length: "3:15", cover: "/assets/cover9.svg" },
  { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22", cover: "/assets/cover10.svg" },
];

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <CurrentlyPlaying song={songs[currentIndex]} />
      <Playlist 
        songs={songs} 
        selectedIndex={currentIndex} 
        onSelect={setCurrentIndex} 
      />
    </div>
  );
}
