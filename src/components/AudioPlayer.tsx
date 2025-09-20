import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  isPlaying: boolean;
  volume: number;       // 0-100
  playbackRate: number; // e.g., 0.5, 1, 2
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, isPlaying, volume, playbackRate }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;
    audioRef.current.playbackRate = playbackRate;

    if (isPlaying) {
      audioRef.current.play().catch((e) => console.error("Playback error:", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, volume, playbackRate, src]);

  return <audio ref={audioRef} src={src} />;
};

export default AudioPlayer;
