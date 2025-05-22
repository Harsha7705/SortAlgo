import React, { useState, useEffect } from 'react';
import { Algorithm, ArrayBar, AnimationSpeed } from './types';
import { algorithmData } from './data/algorithmData';
import { generateRandomArray, convertToArrayBars, getAnimationDelay } from './utils/arrayUtils';
import { runSortingAlgorithm } from './algorithms';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import Visualizer from './components/Visualizer';
import AlgorithmInfo from './components/AlgorithmInfo';
import Legend from './components/Legend';

function App() {
  const [algorithm, setAlgorithm] = useState<Algorithm>('bubble');
  const [arraySize, setArraySize] = useState<number>(8);
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [originalArray, setOriginalArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<AnimationSpeed>('medium');

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const generateNewArray = () => {
    const newArray = generateRandomArray(arraySize);
    setOriginalArray(newArray);
    setArray(convertToArrayBars(newArray));
  };

  const resetArray = () => {
    setArray(convertToArrayBars(originalArray));
  };

  const startSorting = async () => {
    if (isSorting) return;
    
    setIsSorting(true);
    const delay = getAnimationDelay(speed);
    
    try {
      await runSortingAlgorithm(algorithm, array, setArray, delay);
    } catch (error) {
      console.error('Sorting error:', error);
    } finally {
      setIsSorting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 pb-12">
        <ControlPanel
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          arraySize={arraySize}
          setArraySize={setArraySize}
          speed={speed}
          setSpeed={setSpeed}
          generateNewArray={generateNewArray}
          isSorting={isSorting}
          startSorting={startSorting}
          resetArray={resetArray}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Visualizer array={array} />
            <Legend />
          </div>
          
          <div className="lg:col-span-1">
            <AlgorithmInfo algorithmInfo={algorithmData[algorithm]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;