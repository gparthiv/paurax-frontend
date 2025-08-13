import React, { useState } from 'react';
import ImpactCard from "./components/ImpactCard";
import Header from "./components/Header";
import WalletSummary from "./components/WalletSummary";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // If the user is NOT logged in, show the Login screen
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // If the user IS logged in, show the main dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        <Header />
        <WalletSummary />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Community Projects</h2>

        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ImpactCard
            title="Solar Street Light Installation"
            description="Fund the installation of eco-friendly solar street lights in local parks."
            coins={50}
            progress={70}
          />
          <ImpactCard
            title="Community Park Benches"
            description="Help place new benches in your neighborhood park."
            coins={30}
            progress={45}
          />
          <ImpactCard
            title="Waste Management Initiative"
            description="Support waste segregation and recycling programs."
            coins={40}
            progress={85}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
