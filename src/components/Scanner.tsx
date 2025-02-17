
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, ScanLine } from 'lucide-react';

const Scanner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-unitraffic-gray">
      <header className="bg-unitraffic-black text-white py-4 px-6">
        <h1 className="text-lg font-medium">License Plate Scanner</h1>
      </header>
      
      <main className="flex-1 p-4 flex flex-col">
        <div className="flex-1 bg-white rounded-lg mb-4 shadow-sm"></div>
        
        <div className="grid grid-cols-2 gap-4 mb-20">
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <ScanLine className="w-6 h-6 mb-2" />
            <span className="text-sm">Scan Plate</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <ScanLine className="w-6 h-6 mb-2" />
            <span className="text-sm">Scan Sticker</span>
          </button>
        </div>
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-between items-center px-12 py-4">
          <button 
            onClick={() => navigate('/scanner')}
            className="flex flex-col items-center"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-unitraffic-black p-4 rounded-full">
            <ScanLine className="w-6 h-6 text-white" />
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center"
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Scanner;
