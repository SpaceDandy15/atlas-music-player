import { rest } from "msw";

export const handlers = [
  rest.get("/api/v1/songs/playlist.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
];
