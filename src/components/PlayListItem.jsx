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
      className={`flex justify-between items-center px-4 py-2 cursor-pointer transition-colors ${
        selected
          ? "bg-[var(--color-tahiti)]"
          : "hover:bg-[var(--color-bermuda)]"
      }`}
      onClick={onClick}
    >
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-white">{artist}</p>
      </div>
      <span className="text-xs text-white">{length}</span>
    </div>
  );
}
