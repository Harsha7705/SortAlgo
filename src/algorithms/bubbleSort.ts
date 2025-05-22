import { ArrayBar } from '../types';

export async function bubbleSort(
  array: ArrayBar[], 
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Mark elements being compared
      arr[j].state = 'comparing';
      arr[j + 1].state = 'comparing';
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      if (arr[j].value > arr[j + 1].value) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
      // Reset state of compared elements
      arr[j].state = 'default';
      arr[j + 1].state = 'default';
    }
    
    // Mark the last element as sorted
    arr[n - i - 1].state = 'sorted';
    setArray([...arr]);
  }
  
  // Mark first element as sorted (last remaining element)
  arr[0].state = 'sorted';
  
  // Final array update
  setArray([...arr]);
}