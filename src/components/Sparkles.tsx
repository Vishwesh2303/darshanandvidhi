import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkles = () => {
      const newSparkles: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 3,
      }));
      setSparkles(newSparkles);
    };

    createSparkles();
    const interval = setInterval(createSparkles, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size * 8}px`,
            height: `${sparkle.size * 8}px`,
            background: 'radial-gradient(circle, hsl(38 60% 75%) 0%, transparent 70%)',
            borderRadius: '50%',
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
