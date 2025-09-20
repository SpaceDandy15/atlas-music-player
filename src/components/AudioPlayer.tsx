import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  isPlaying: boolean;
  volume: number;       // 0-100
  playbackRate: number; // e.g., 0.5, 1, 2
  onEnded?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  isPlaying,
  volume,
  playbackRate,
  onEnded,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
    audio.playbackRate = playbackRate;

    if (isPlaying) {
      audio.play().catch((e) => console.error("Playback error:", e));
    } else {
      audio.pause();
    }
  }, [isPlaying, volume, playbackRate, src]);

  // Handle track end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !onEnded) return;

    const handleEnded = () => onEnded();
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [onEnded]);

  return <audio ref={audioRef} src={src} />;
};

export default AudioPlayer;
