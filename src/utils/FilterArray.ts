export function filterArray(originalArray: any[], valuesToFilter: any[]): any[] {
    return originalArray.filter((item) => !valuesToFilter.includes(item));
  }