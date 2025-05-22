import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Color Legend</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Unsorted</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-600">Comparing</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-purple-500 rounded"></div>
          <span className="text-sm text-gray-600">Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Pivot</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Sorted</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;