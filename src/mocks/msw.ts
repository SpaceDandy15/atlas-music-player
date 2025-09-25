// src/mocks/msw.ts
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.get("/api/v1/songs/playlist.json", () => {
    return HttpResponse.json([
      {
        title: "Mock Song 1",
        artist: "Mock Artist",
        duration: 210,
        cover: "/mock-cover1.jpg",
        song: "/mock-song1.mp3",
      },
      {
        title: "Mock Song 2",
        artist: "Another Artist",
        duration: 185,
        cover: "/mock-cover2.jpg",
        song: "/mock-song2.mp3",
      },
      {
        title: "Mock Song 3",
        artist: "Third Artist",
        duration: 200,
        cover: "/mock-cover3.jpg",
        song: "/mock-song3.mp3",
      },
    ]);
  }),
];

export const server = setupServer(...handlers);
