// src/__tests__/MusicPlayer.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';

describe('MusicPlayer Component', () => {
  test('renders first song in playlist by default', async () => {
    render(<MusicPlayer />);
    const songTitle = await screen.findByText(/Mock Song 1/i);
    expect(songTitle).toBeInTheDocument();
  });

  test('play/pause button toggles correctly', async () => {
    render(<MusicPlayer />);
    const playButton = await screen.findByRole('button', { name: /play/i });

    fireEvent.click(playButton);
    expect(playButton).toHaveTextContent(/pause/i);

    fireEvent.click(playButton);
    expect(playButton).toHaveTextContent(/play/i);
  });

  test('forward button changes current song', async () => {
    render(<MusicPlayer />);
    const forwardButton = await screen.findByRole('button', { name: /forward/i });

    fireEvent.click(forwardButton);
    const currentSong = await screen.findByText(/Mock Song 2/i);
    expect(currentSong).toBeInTheDocument();
  });

  test('back button changes current song', async () => {
    render(<MusicPlayer />);
    const forwardButton = await screen.findByRole('button', { name: /forward/i });
    const backButton = await screen.findByRole('button', { name: /back/i });

    fireEvent.click(forwardButton); // move to song 2
    fireEvent.click(backButton);    // back to song 1

    const currentSong = await screen.findByText(/Mock Song 1/i);
    expect(currentSong).toBeInTheDocument();
  });

  test('clicking a song in playlist changes current song', async () => {
    render(<MusicPlayer />);
    const songItem = await screen.findByText(/Mock Song 2/i);

    fireEvent.click(songItem);
    const currentSong = await screen.findByText(/Mock Song 2/i);
    expect(currentSong).toBeInTheDocument();
  });
});
