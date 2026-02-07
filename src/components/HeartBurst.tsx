import { useEffect, useState } from 'react';

interface Burst {
  id: number;
  x: number;
  y: number;
  hearts: { angle: number; distance: number; size: number }[];
}

const HeartBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const createBurst = () => {
      const newBurst: Burst = {
        id: Date.now(),
        x: 20 + Math.random() * 60, // Keep centered
        y: 20 + Math.random() * 60,
        hearts: Array.from({ length: 8 }, () => ({
          angle: Math.random() * 360,
          distance: 50 + Math.random() * 100,
          size: 0.8 + Math.random() * 0.8,
        })),
      };
      setBursts(prev => [...prev.slice(-4), newBurst]);
    };

    createBurst();
    const interval = setInterval(createBurst, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bursts.map(burst => (
        <div
          key={burst.id}
          className="absolute"
          style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
        >
          {burst.hearts.map((heart, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                fontSize: `${heart.size}rem`,
                animation: 'heart-burst 2s ease-out forwards',
                transform: `rotate(${heart.angle}deg) translateX(${heart.distance}px)`,
                opacity: 0.7,
              }}
            >
              {['💕', '💖', '💗', '✨', '💝'][i % 5]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HeartBurst;
