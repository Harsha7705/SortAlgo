import { ArrayBar } from '../types';

export async function selectionSort(
  array: ArrayBar[], 
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    arr[i].state = 'selected';
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    for (let j = i + 1; j < n; j++) {
      // Mark current element being compared
      arr[j].state = 'comparing';
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      if (arr[j].value < arr[minIndex].value) {
        // Reset previous min if exists
        if (minIndex !== i) {
          arr[minIndex].state = 'default';
        }
        minIndex = j;
        arr[minIndex].state = 'selected';
      } else {
        // Reset if not minimum
        arr[j].state = 'default';
      }
      
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay/2));
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      arr[minIndex].state = 'default';
    }
    
    // Mark current position as sorted
    arr[i].state = 'sorted';
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  // Mark the last element as sorted
  arr[n - 1].state = 'sorted';
  setArray([...arr]);
}