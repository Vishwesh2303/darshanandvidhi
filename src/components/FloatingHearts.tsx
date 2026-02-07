import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 0.5 + Math.random() * 1,
      duration: 6 + Math.random() * 4,
    }));
    setHearts(initialHearts);

    // Continuously add new hearts
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart: Heart = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          size: 0.5 + Math.random() * 1,
          duration: 6 + Math.random() * 4,
        };
        // Keep only last 20 hearts to avoid memory issues
        return [...prev.slice(-19), newHeart];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-primary/40"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size * 1.5}rem`,
            animation: `float-up ${heart.duration}s ease-out ${heart.delay}s forwards`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

