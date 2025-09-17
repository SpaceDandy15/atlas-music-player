import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying({ song }) {
  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-xl shadow bg-[var(--color-midnight)]">
      <CoverArt src={song.cover} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
