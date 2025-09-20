import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

export interface Song {
  title: string;
  artist: string;
  length: string;
  cover: string;
  src: string; // URL or local path to song file
}

const songs: Song[] = [
  { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55", cover: "/assets/cover1.svg", src: "/assets/song1.mp3" },
  { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02", cover: "/assets/cover2.svg", src: "/assets/song2.mp3" },
  { title: "Fading Shadows", artist: "The Emberlight", length: "3:01", cover: "/assets/cover3.svg", src: "/assets/song3.mp3" },
  { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01", cover: "/assets/cover4.svg", src: "/assets/song4.mp3" },
  { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54", cover: "/assets/cover5.svg", src: "/assets/song5.mp3" },
  { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13", cover: "/assets/cover6.svg", src: "/assets/song6.mp3" },
  { title: "Electric Fever", artist: "Neon Jungle", length: "8:41", cover: "/assets/cover7.svg", src: "/assets/song7.mp3" },
  { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27", cover: "/assets/cover8.svg", src: "/assets/song8.mp3" },
  { title: "Golden Haze", artist: "Velvet Waves", length: "3:15", cover: "/assets/cover9.svg", src: "/assets/song9.mp3" },
  { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22", cover: "/assets/cover10.svg", src: "/assets/song10.mp3" },
];

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [shuffle, setShuffle] = useState<boolean>(false);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSong = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => (prev < songs.length - 1 ? prev + 1 : prev));
    }
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setIsPlaying(true);
  };

  const toggleShuffle = () => setShuffle((prev) => !prev);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <CurrentlyPlaying
        song={songs[currentIndex]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        volume={volume}
        setVolume={setVolume}
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
        nextSong={nextSong}
        prevSong={prevSong}
        shuffle={shuffle}
        toggleShuffle={toggleShuffle}
      />
      <Playlist
        songs={songs}
        selectedIndex={currentIndex}
        onSelect={(index) => {
          setCurrentIndex(index);
          setIsPlaying(true);
        }}
      />
    </div>
  );
}
