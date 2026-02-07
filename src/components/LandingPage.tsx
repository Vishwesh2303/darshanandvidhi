import FloatingHearts from './FloatingHearts';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="romantic-bg flex flex-col items-center justify-center min-h-screen px-4">
      <FloatingHearts />
      
      {/* Decorative top hearts */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-30">
        <span className="text-4xl animate-float-heart" style={{ animationDelay: '0s' }}>💕</span>
        <span className="text-3xl animate-float-heart" style={{ animationDelay: '0.5s' }}>💖</span>
        <span className="text-4xl animate-float-heart" style={{ animationDelay: '1s' }}>💕</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center animate-fade-in">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-2xl">✨</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Main text */}
        <h1 
          className="love-text text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-slide-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Ready for something special?
        </h1>

        {/* Subtitle */}
        <p 
          className="romantic-quote text-lg md:text-xl text-muted-foreground mb-12 animate-slide-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          A moment crafted just for you...
        </p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="glow-button animate-gentle-pulse animate-slide-up"
          style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Start ❤️
        </button>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <span className="text-5xl">💗</span>
      </div>
    </div>
  );
};

export default LandingPage;
