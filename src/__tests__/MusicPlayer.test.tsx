import { render, screen } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";

test("renders mocked playlist songs", async () => {
  render(<MusicPlayer />);

  // MSW will return these from handlers.ts
  const firstSong = await screen.findByText("Mock Song 1");
  const secondSong = await screen.findByText("Mock Song 2");

  expect(firstSong).toBeInTheDocument();
  expect(secondSong).toBeInTheDocument();
});
