
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    // For demo purposes, navigate to scanner
    navigate('/scanner');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">UNITRAFFIC</h2>
          {error && (
            <div className="mb-4 p-3 text-sm text-white bg-unitraffic-red rounded-md">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unitraffic-black"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unitraffic-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-unitraffic-black text-white rounded-md py-3 text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Login
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-gray-600 hover:underline"
              >
                forgot password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
