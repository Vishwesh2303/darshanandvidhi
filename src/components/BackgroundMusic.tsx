import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={`${basePath}song.mp3`} />
      
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Mute music' : 'Play music'}
      >
        {isPlaying ? (
          <span className="text-2xl animate-pulse">🎵</span>
        ) : (
          <span className="text-2xl opacity-60">🔇</span>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
