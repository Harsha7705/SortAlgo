import { ArrayBar } from '../types';

export async function quickSort(
  array: ArrayBar[], 
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> {
  const arr = [...array];
  
  async function partition(low: number, high: number): Promise<number> {
    // Choose pivot as the last element
    const pivot = arr[high].value;
    arr[high].state = 'pivot';
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      // Highlight current element being compared
      arr[j].state = 'comparing';
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay/2));
      
      if (arr[j].value <= pivot) {
        i++;
        
        // Highlight elements to be swapped
        arr[i].state = 'selected';
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, delay/2));
        
        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Reset state after swap
        arr[i].state = 'default';
      }
      
      // Reset state
      arr[j].state = 'default';
      setArray([...arr]);
    }
    
    // Highlight elements to be swapped with pivot
    arr[i + 1].state = 'selected';
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay/2));
    
    // Swap arr[i+1] and arr[high] (pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    arr[i + 1].state = 'sorted'; // Mark pivot in its correct position
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    return i + 1;
  }
  
  async function quickSortHelper(low: number, high: number): Promise<void> {
    if (low < high) {
      // Find pivot element
      const pivotIndex = await partition(low, high);
      
      // Recursively sort elements before and after pivot
      await quickSortHelper(low, pivotIndex - 1);
      await quickSortHelper(pivotIndex + 1, high);
    } else if (low === high) {
      // Single element is already sorted
      arr[low].state = 'sorted';
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay/2));
    }
  }
  
  await quickSortHelper(0, arr.length - 1);
  
  // Ensure all elements are marked as sorted
  for (let i = 0; i < arr.length; i++) {
    arr[i].state = 'sorted';
  }
  setArray([...arr]);
}