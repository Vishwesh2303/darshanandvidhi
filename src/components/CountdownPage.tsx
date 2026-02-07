import { useEffect, useState } from 'react';
import HeartBurst from './HeartBurst';
import Sparkles from './Sparkles';

interface CountdownPageProps {
  onComplete: () => void;
}

const CountdownPage = ({ onComplete }: CountdownPageProps) => {
  const [count, setCount] = useState(5);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (count === 0) {
      // Small delay before transitioning
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }

    const timer = setTimeout(() => {
      setCount(prev => prev - 1);
      setAnimationKey(prev => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="romantic-bg flex flex-col items-center justify-center min-h-screen px-4">
      <HeartBurst />
      <Sparkles />

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <div className="animate-fade-in mb-12">
          <span className="text-5xl mb-4 block">💍</span>
          <h1 className="love-text text-5xl md:text-6xl lg:text-7xl font-semibold">
            Propose Day
          </h1>
        </div>

        {/* Countdown number */}
        <div className="relative h-40 flex items-center justify-center">
          {count > 0 ? (
            <span
              key={animationKey}
              className="love-text text-8xl md:text-9xl font-bold animate-countdown-pulse"
            >
              {count}
            </span>
          ) : (
            <span className="text-6xl animate-zoom-in">💝</span>
          )}
        </div>

        {/* Decorative hearts */}
        <div className="mt-8 flex justify-center gap-6 opacity-60">
          <span className="text-3xl animate-float-heart" style={{ animationDelay: '0s' }}>💕</span>
          <span className="text-4xl animate-float-heart" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="text-3xl animate-float-heart" style={{ animationDelay: '0.6s' }}>💗</span>
          <span className="text-4xl animate-float-heart" style={{ animationDelay: '0.9s' }}>💕</span>
          <span className="text-3xl animate-float-heart" style={{ animationDelay: '1.2s' }}>💖</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
