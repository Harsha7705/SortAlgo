import { ArrayBar } from '../types';

export async function insertionSort(
  array: ArrayBar[], 
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  // Mark first element as sorted
  arr[0].state = 'sorted';
  setArray([...arr]);
  await new Promise(resolve => setTimeout(resolve, delay));
  
  for (let i = 1; i < n; i++) {
    // Mark current element
    const key = { ...arr[i] };
    key.state = 'selected';
    arr[i] = key;
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    let j = i - 1;
    
    // Move elements greater than key to one position ahead
    while (j >= 0 && arr[j].value > key.value) {
      arr[j].state = 'comparing';
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      arr[j + 1] = { ...arr[j] };
      arr[j].state = 'sorted';
      
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      j--;
    }
    
    // Place key at the correct position
    key.state = 'sorted';
    arr[j + 1] = key;
    
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}