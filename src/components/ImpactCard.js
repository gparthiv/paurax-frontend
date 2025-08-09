import React from "react";

export default function ImpactCard({ title, description, coins, progress }) {
  const getProgressColor = () => {
    if (progress >= 70) return "bg-green-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-6 mb-4 relative overflow-hidden">
        <div
          className={`${getProgressColor()} h-6 transition-all duration-500 ease-in-out flex items-center justify-center text-white font-semibold text-sm`}
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      {/* Coins */}
      <p className="text-sm text-gray-700">
        Reward:{" "}
        <span className="font-bold text-green-600">{coins} Civic Coins</span>
      </p>
    </div>
  );
}
