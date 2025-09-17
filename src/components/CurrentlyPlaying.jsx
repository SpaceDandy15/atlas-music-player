import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-xl shadow bg-[var(--color-midnight)]">
      <CoverArt />
      <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
