import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-6 mb-6 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart2 size={32} className="mr-3" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Sorting Visualizer</h1>
              <p className="text-indigo-200">Understanding algorithms through visualization</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;