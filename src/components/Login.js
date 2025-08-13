import React from 'react';
import logo from '../assets/logo.png';

function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm text-center">
        
        <img src={logo} alt="PauraX Logo" className="h-12 mx-auto mb-6" />

        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          View Your Civic Wallet
        </h2>
        <p className="text-gray-500 mb-6">
          Enter your WhatsApp number to check your CivicCoin balance and Impact progress.
        </p>

        <input
          type="tel"
          placeholder="+91 12345 67890"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={onLogin}
          className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          View My Wallet
        </button>

      </div>
    </div>
  );
}

export default Login;