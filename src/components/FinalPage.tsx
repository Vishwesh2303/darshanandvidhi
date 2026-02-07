import { useEffect, useState } from 'react';
import FloatingHearts from './FloatingHearts';
import Sparkles from './Sparkles';

const FinalPage = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="romantic-bg flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      {/* Background glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, hsl(350 65% 70% / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${showMain ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* Top decoration */}
        <div className="flex justify-center gap-3 mb-8">
          <span className="text-4xl animate-float-heart">💕</span>
          <span className="text-5xl animate-float-heart" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="text-4xl animate-float-heart" style={{ animationDelay: '0.6s' }}>💕</span>
        </div>

        {/* Main love text */}
        <h1 
          className="love-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold animate-pulse-glow"
        >
          I LOVE YOU
        </h1>

        {/* Heart below */}
        <div className="mt-6">
          <span 
            className="text-7xl md:text-8xl inline-block animate-pulse-glow"
            style={{ animationDelay: '0.5s' }}
          >
            ❤️
          </span>
        </div>

        {/* Romantic subtitle */}
        <p 
          className="romantic-quote text-2xl md:text-3xl mt-10 text-primary/80 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          Forever & Always
        </p>

        {/* Bottom floating hearts */}
        <div className="flex justify-center gap-4 mt-12">
          {['💗', '💝', '💖', '💕', '💗'].map((heart, i) => (
            <span 
              key={i}
              className="text-3xl animate-float-heart"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 text-5xl opacity-30 animate-float-heart">💕</div>
      <div className="absolute top-8 right-8 text-5xl opacity-30 animate-float-heart" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute bottom-8 left-8 text-5xl opacity-30 animate-float-heart" style={{ animationDelay: '0.5s' }}>💗</div>
      <div className="absolute bottom-8 right-8 text-5xl opacity-30 animate-float-heart" style={{ animationDelay: '1.5s' }}>💗</div>
    </div>
  );
};

export default FinalPage;
