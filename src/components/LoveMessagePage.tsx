import { useEffect, useState } from 'react';
import Sparkles from './Sparkles';

interface LoveMessagePageProps {
  onComplete: () => void;
}

const LoveMessagePage = ({ onComplete }: LoveMessagePageProps) => {
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    // Show photos after a brief delay
    const photoTimer = setTimeout(() => setShowPhotos(true), 1500);
    
    // Auto-advance after 15 seconds
    const advanceTimer = setTimeout(onComplete, 15000);

    return () => {
      clearTimeout(photoTimer);
      clearTimeout(advanceTimer);
    };
  }, [onComplete]);

  // Placeholder images - replace these with your actual photos
  // Put your images in the public folder and update these paths
   const photos = [
    { id: 1, src: '/IMG1.JPG.jpeg' },
  { id: 2, src: '/IMG2.JPG.jpeg' },
  { id: 3, src: '/IMG3.JPG.jpeg' },
  { id: 4, src: '/IMG4.JPG.jpeg' },
  { id: 5, src: '/IMG5.JPG.jpeg' },

  ];

  return (
    <div className="romantic-bg min-h-screen px-4 py-12 overflow-auto">
      <Sparkles />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main quote */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-4xl mb-6 block">🌹</span>
          
          <h2 
            className="love-text text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            "Dancing in the dark, with you between my arms."
          </h2>

          <div 
            className="romantic-quote text-xl md:text-2xl space-y-4 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <p>Some souls meet by chance, but stay by choice.</p>
            <p>You became my favorite feeling without trying.</p>
            <p>If love is a story, you are my forever chapter.</p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="text-2xl">💕</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Photo gallery */}
        <div className={`transition-all duration-1000 ${showPhotos ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-frame aspect-square flex items-center justify-center bg-gradient-to-br from-secondary/50 to-muted/50"
                style={{
                  animation: showPhotos ? `zoom-in 0.8s ease-out ${index * 0.2}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                {/* 
                  Replace this placeholder with your actual image:
                  <img 
                    src={`/image${photo.id}.jpg`} 
                    alt={`Memory ${photo.id}`}
                    className="w-full h-full object-cover"
                  />
                */}
                <div className="text-center p-4">
                  <span className="text-4xl mb-2 block">💝</span>
                  <span className="text-sm text-muted-foreground">{photo.placeholder}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom hearts */}
        <div className="flex justify-center gap-4 mt-12 opacity-50">
          <span className="text-2xl animate-float-heart">❤️</span>
          <span className="text-3xl animate-float-heart" style={{ animationDelay: '0.5s' }}>💗</span>
          <span className="text-2xl animate-float-heart" style={{ animationDelay: '1s' }}>❤️</span>
        </div>
      </div>
    </div>
  );
};

export default LoveMessagePage;
