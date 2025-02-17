
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-unitraffic-black">
            UNITRAFFIC
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-unitraffic-black text-white rounded-md py-3 px-4 text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </button>
          <p className="text-sm text-gray-600 px-6">
            UniTraffic ensures hassle-free vehicle entry at New Era University by verifying sticker registration and tracking violations with a quick scan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
