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
      setMusicPath(`${process.env.PUBLIC_URL}/music/shunno.mp3`);
    } else {
      // For custom domain, use root path
      setMusicPath('/music/shunno.mp3');
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    // Try to auto-play when component mounts
    if (audio) {
      // Handle audio loading errors
      const handleError = (e) => {
        console.error('Audio loading error:', e);
        console.error('Audio source:', audio.src);
      };
      audio.addEventListener('error', handleError);

      // Set volume to a reasonable level (0.5 = 50%)
      audio.volume = 0.5;

      let hasAttemptedPlay = false;

      const attemptAutoPlay = async () => {
        if (hasAttemptedPlay) return;
        hasAttemptedPlay = true;

        try {
          // Try to play immediately
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          // If autoplay is blocked, try again after a short delay
          // Some browsers allow autoplay after a brief interaction
          setTimeout(async () => {
            try {
              await audio.play();
              setIsPlaying(true);
            } catch (err) {
              // Auto-play was prevented - user will need to click the button
              setIsPlaying(false);
            }
          }, 1000);
        }
      };

      // Wait for audio to be ready, then attempt to play
      const handleCanPlay = () => {
        attemptAutoPlay();
      };

      audio.addEventListener('canplay', handleCanPlay);
      
      // Also try after a short delay as fallback
      const timer = setTimeout(() => {
        attemptAutoPlay();
      }, 500);

      return () => {
        clearTimeout(timer);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
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
