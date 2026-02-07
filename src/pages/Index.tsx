import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import CountdownPage from '../components/CountdownPage';
import LoveMessagePage from '../components/LoveMessagePage';
import FinalPage from '../components/FinalPage';

// Step-based navigation (no react-router needed)
type Step = 'landing' | 'countdown' | 'message' | 'final';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('landing');

  // Render the current page based on step
  const renderPage = () => {
    switch (currentStep) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentStep('countdown')} />;
      case 'countdown':
        return <CountdownPage onComplete={() => setCurrentStep('message')} />;
      case 'message':
        return <LoveMessagePage onComplete={() => setCurrentStep('final')} />;
      case 'final':
        return <FinalPage />;
      default:
        return <LandingPage onStart={() => setCurrentStep('countdown')} />;
    }
  };

  return (
    <div className="relative">
      {renderPage()}
    </div>
  );
};

export default Index;
