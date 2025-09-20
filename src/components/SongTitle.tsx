import React from "react";

type SongTitleProps = {
  title?: string;
  artist?: string;
};

export default function SongTitle({
  title = "Song Title",
  artist = "Artist",
}: SongTitleProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <h2 className="text-lg font-bold text-white -ml-1">{title}</h2>
      <p className="text-sm text-[var(--color-tahiti)] -ml-1">{artist}</p>
    </div>
  );
}
