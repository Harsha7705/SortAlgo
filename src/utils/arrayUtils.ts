import { ArrayBar } from '../types';

// Generate a random array of numbers
export const generateRandomArray = (size: number, max: number = 50): number[] => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
};

// Generate a nearly sorted array
export const generateNearlySortedArray = (size: number, max: number = 50): number[] => {
  const arr = Array.from({ length: size }, (_, i) => Math.floor((i / size) * max) + 1);
  
  // Swap a few elements to make it nearly sorted
  const swaps = Math.floor(size * 0.1); // Swap about 10% of elements
  for (let i = 0; i < swaps; i++) {
    const idx1 = Math.floor(Math.random() * size);
    const idx2 = Math.floor(Math.random() * size);
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  return arr;
};

// Generate a reversed array
export const generateReversedArray = (size: number, max: number = 50): number[] => {
  return Array.from({ length: size }, (_, i) => max - Math.floor((i / size) * max) + 1);
};

// Convert a number array to array bar objects
export const convertToArrayBars = (arr: number[]): ArrayBar[] => {
  return arr.map(value => ({ value, state: 'default' }));
};

// Get the maximum value in an array
export const getMaxValue = (arr: ArrayBar[]): number => {
  return Math.max(...arr.map(bar => bar.value));
};

// Calculate delay based on animation speed
export const getAnimationDelay = (speed: string): number => {
  switch (speed) {
    case 'slow': return 1000;
    case 'medium': return 500;
    case 'fast': return 200;
    default: return 500;
  }
};