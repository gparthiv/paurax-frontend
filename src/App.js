import ImpactCard from "./components/ImpactCard";
import Header from "./components/Header"; // Import new component
import WalletSummary from "./components/WalletSummary"; // Import new component

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* New Header */}
        <Header />

        {/* New Wallet Summary Card */}
        <WalletSummary />
        
        {/* Section Title for the project cards */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Community Projects</h2>

        {/* Grid for the project cards */}
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