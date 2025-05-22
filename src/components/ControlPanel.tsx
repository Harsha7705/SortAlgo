import React from 'react';
import { Algorithm, AnimationSpeed } from '../types';
import { Sliders as Slider, RefreshCw, Play, Pause, RotateCcw } from 'lucide-react';

interface ControlPanelProps {
  algorithm: Algorithm;
  setAlgorithm: (algorithm: Algorithm) => void;
  arraySize: number;
  setArraySize: (size: number) => void;
  speed: AnimationSpeed;
  setSpeed: (speed: AnimationSpeed) => void;
  generateNewArray: () => void;
  isSorting: boolean;
  startSorting: () => void;
  resetArray: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  algorithm,
  setAlgorithm,
  arraySize,
  setArraySize,
  speed,
  setSpeed,
  generateNewArray,
  isSorting,
  startSorting,
  resetArray,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Algorithm</label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
            disabled={isSorting}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nodes</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="4"
              max="20"
              value={arraySize}
              onChange={(e) => setArraySize(parseInt(e.target.value))}
              disabled={isSorting}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm w-8 text-right">{arraySize}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Animation Speed</label>
          <select
            value={speed}
            onChange={(e) => setSpeed(e.target.value as AnimationSpeed)}
            disabled={isSorting}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Actions</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={generateNewArray}
              disabled={isSorting}
              className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              <RefreshCw size={16} className="mr-1" />
              New
            </button>
            <button
              onClick={startSorting}
              disabled={isSorting}
              className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              <Play size={16} className="mr-1" />
              Sort
            </button>
            <button
              onClick={resetArray}
              disabled={isSorting}
              className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
            >
              <RotateCcw size={16} className="mr-1" />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;