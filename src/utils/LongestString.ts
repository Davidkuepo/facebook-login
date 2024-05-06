export function findLongestString(strings: string[]): string {
    let longestString = '';
  
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }
  
    return longestString;
  }