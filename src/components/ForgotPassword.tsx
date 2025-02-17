
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              To reset your password, submit your email address below. 
              If we can find you in the database, an email will be sent to 
              your email address, with instructions how to get access again.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unitraffic-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-unitraffic-black text-white rounded-md py-3 text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
