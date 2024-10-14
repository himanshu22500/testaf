import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-royal-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Truck size={24} />
          <span className="text-xl font-bold">LogiTrack</span>
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-sea-pink">Login</Link>
          <Link to="/register" className="hover:text-sea-pink">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;