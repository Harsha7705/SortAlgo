import { ArrayBar } from '../types';

export async function mergeSort(
  array: ArrayBar[], 
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  // Helper function to visualize merge sort
  async function mergeSortHelper(start: number, end: number): Promise<void> {
    if (start >= end) return;
    
    const mid = Math.floor((start + end) / 2);
    
    // Highlight current subarray being processed
    for (let i = start; i <= end; i++) {
      arr[i].state = 'comparing';
    }
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Reset highlighting
    for (let i = start; i <= end; i++) {
      arr[i].state = 'default';
    }
    setArray([...arr]);
    
    // Recursively sort two halves
    await mergeSortHelper(start, mid);
    await mergeSortHelper(mid + 1, end);
    
    // Merge the two halves
    await merge(start, mid, end);
  }
  
  async function merge(start: number, mid: number, end: number): Promise<void> {
    const leftSize = mid - start + 1;
    const rightSize = end - mid;
    
    // Create temporary arrays
    const leftArray: ArrayBar[] = [];
    const rightArray: ArrayBar[] = [];
    
    // Copy data to temporary arrays
    for (let i = 0; i < leftSize; i++) {
      leftArray[i] = { ...arr[start + i] };
    }
    for (let i = 0; i < rightSize; i++) {
      rightArray[i] = { ...arr[mid + 1 + i] };
    }
    
    // Highlight the subarrays being merged
    for (let i = start; i <= end; i++) {
      arr[i].state = 'comparing';
    }
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Merge the temporary arrays back
    let i = 0, j = 0, k = start;
    
    while (i < leftSize && j < rightSize) {
      // Highlight elements being compared
      if (leftArray[i].value <= rightArray[j].value) {
        arr[k] = { ...leftArray[i], state: 'selected' };
        i++;
      } else {
        arr[k] = { ...rightArray[j], state: 'selected' };
        j++;
      }
      
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Mark as processed
      arr[k].state = 'sorted';
      k++;
      setArray([...arr]);
    }
    
    // Copy remaining elements
    while (i < leftSize) {
      arr[k] = { ...leftArray[i], state: 'selected' };
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      arr[k].state = 'sorted';
      i++;
      k++;
      setArray([...arr]);
    }
    
    while (j < rightSize) {
      arr[k] = { ...rightArray[j], state: 'selected' };
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      arr[k].state = 'sorted';
      j++;
      k++;
      setArray([...arr]);
    }
    
    // Final update for this subarray
    for (let i = start; i <= end; i++) {
      arr[i].state = 'default';
    }
    setArray([...arr]);
  }
  
  // Start the merge sort process
  await mergeSortHelper(0, n - 1);
  
  // Mark all elements as sorted at the end
  for (let i = 0; i < n; i++) {
    arr[i].state = 'sorted';
  }
  setArray([...arr]);
}