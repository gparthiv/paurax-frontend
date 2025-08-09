import React from 'react';

function WalletSummary() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-10 text-center">
      <p className="text-gray-500 text-lg">Total Civic Coin Balance</p>
      <h2 className="text-5xl font-bold text-blue-600 my-2">1,250</h2>
      <div className="mt-4">
        <p className="font-medium text-gray-700">Community Impact Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">You're a Gold Contributor!</p>
      </div>
    </div>
  );
}

export default WalletSummary;