/* eslint-disable @typescript-eslint/no-explicit-any */
// type ArrayOfArrays<T> = T[][];

// // Example usage:
// const myArray: ArrayOfArrays<number> = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

export interface RootState {
  data: DataState;
}

export interface DataState {
  issues: any[];
  repo: any;
  loading: boolean;
  error: string;
}
