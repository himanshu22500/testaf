import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-royal-blue">Welcome to LogiTrack</h1>
      <p className="text-xl mb-8">Your reliable logistics partner</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Truck className="w-12 h-12 text-royal-blue" />}
          title="Efficient Delivery"
          description="Fast and reliable delivery services for all your needs"
        />
        <FeatureCard
          icon={<Package className="w-12 h-12 text-cornflower-blue" />}
          title="Package Tracking"
          description="Real-time tracking for all your shipments"
        />
        <FeatureCard
          icon={<MapPin className="w-12 h-12 text-dodger-blue" />}
          title="Wide Coverage"
          description="Extensive network covering multiple locations"
        />
      </div>
      <Link to="/register" className="btn btn-primary">Get Started</Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;