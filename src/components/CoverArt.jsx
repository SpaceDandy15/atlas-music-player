import React from "react";
import placeholder from "../assets/placeholder.svg"; // fallback if no src provided

export default function CoverArt({ src }) {
  return (
    <div className="w-48 h-48 overflow-hidden rounded-lg">
      <img
        src={src || placeholder}
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
