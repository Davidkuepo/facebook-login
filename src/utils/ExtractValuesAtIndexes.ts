export function extractValuesAtIndexes(array: any[], indexes: number[]): any[] {
    return indexes.map((index) => array[index]);
  }