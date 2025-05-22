import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { mergeSort } from './mergeSort';
import { quickSort } from './quickSort';
import { ArrayBar, Algorithm } from '../types';

export const runSortingAlgorithm = async (
  algorithm: Algorithm,
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  delay: number
): Promise<void> => {
  switch (algorithm) {
    case 'bubble':
      await bubbleSort(array, setArray, delay);
      break;
    case 'selection':
      await selectionSort(array, setArray, delay);
      break;
    case 'insertion':
      await insertionSort(array, setArray, delay);
      break;
    case 'merge':
      await mergeSort(array, setArray, delay);
      break;
    case 'quick':
      await quickSort(array, setArray, delay);
      break;
    default:
      throw new Error(`Algorithm ${algorithm} not implemented`);
  }
};