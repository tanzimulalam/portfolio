import React, { useState, useEffect, useRef } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer(props) {
  const theme = props.theme;
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicPath, setMusicPath] = useState('/music/Russ.mp3');
  const audioRef = useRef(null);

  // Set the correct music path based on the deployment environment
  useEffect(() => {
    // Use PUBLIC_URL if available (set during build)
    if (process.env.PUBLIC_URL) {
      setMusicPath(`${process.env.PUBLIC_URL}/music/Russ.mp3`);
    } else if (typeof window !== 'undefined') {
      // Runtime detection for GitHub Pages subdirectory
      const pathParts = window.location.pathname.split('/').filter(p => p);
      if (pathParts.length > 0 && pathParts[0] === 'portfolio') {
        setMusicPath('/portfolio/music/Russ.mp3');
      } else {
        setMusicPath('/music/Russ.mp3');
      }
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    // Try to auto-play when component mounts
    // Note: Most browsers block auto-play, so this may not work until user interacts
    if (audio) {
      // Handle audio loading errors
      audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        console.error('Audio source:', audio.src);
      });

      const attemptAutoPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          // Auto-play was prevented - user will need to click the button
          setIsPlaying(false);
        }
      };

      // Small delay to ensure audio is loaded
      const timer = setTimeout(() => {
        attemptAutoPlay();
      }, 500);

      return () => {
        clearTimeout(timer);
        audio.removeEventListener('error', () => {});
      };
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicPath} loop preload="auto" />
      <button
        className="music-play-button"
        onClick={togglePlayPause}
        style={{
          backgroundColor: theme.body,
          color: theme.text,
          borderColor: theme.text,
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
    </>
  );
}
