import React from "react";

export default function PlayListItem({
  title = "Song Title",
  artist = "Artist",
  length = "3:45",
  selected = false,
  onClick,
}) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-2 cursor-pointer transition-colors
        ${selected
          ? "bg-[var(--color-tahiti)] text-white"
          : "hover:bg-[var(--color-bermuda)] hover:text-black group"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <p className="text-sm font-medium text-white group-hover:text-black">{title}</p>
        <p className="text-xs text-white group-hover:text-black">{artist}</p>
      </div>
      <span className="text-xs text-white group-hover:text-black">{length}</span>
    </div>
  );
}
