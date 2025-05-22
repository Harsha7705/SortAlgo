export type Algorithm = 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';

export interface AlgorithmInfo {
  name: string;
  description: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  code: string;
  implementations: {
    [key: string]: string;
  };
}

export interface ArrayBar {
  value: number;
  state: 'default' | 'comparing' | 'sorted' | 'selected' | 'pivot';
}

export type AnimationSpeed = 'slow' | 'medium' | 'fast';