import React, { useState, useEffect } from 'react';
import { ArrayBar } from '../types';
import { getMaxValue } from '../utils/arrayUtils';

interface VisualizerProps {
  array: ArrayBar[];
}

const Visualizer: React.FC<VisualizerProps> = ({ array }) => {
  const [maxValue, setMaxValue] = useState<number>(0);
  
  useEffect(() => {
    setMaxValue(getMaxValue(array));
  }, [array]);
  
  const getNodeColor = (state: string): string => {
    switch (state) {
      case 'comparing':
        return 'bg-yellow-500 border-yellow-600';
      case 'sorted':
        return 'bg-green-500 border-green-600';
      case 'selected':
        return 'bg-purple-500 border-purple-600';
      case 'pivot':
        return 'bg-red-500 border-red-600';
      default:
        return 'bg-blue-500 border-blue-600';
    }
  };
  
  const getTransition = (state: string): string => {
    if (state === 'comparing' || state === 'selected' || state === 'pivot') {
      return 'transition-all duration-200';
    }
    return 'transition-all duration-500';
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6 overflow-x-auto">
      <div className="min-h-[320px] flex items-center justify-center gap-2 md:gap-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {array.map((bar, index) => (
            <div
              key={index}
              className={`
                ${getNodeColor(bar.state)} 
                ${getTransition(bar.state)}
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                flex items-center justify-center
                border-2
                shadow-lg
                transform hover:scale-110
                cursor-pointer
              `}
            >
              <span className="text-white font-bold text-sm md:text-lg">
                {bar.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visualizer;