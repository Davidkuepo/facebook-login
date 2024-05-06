export function removeDuplicates(str: string): string {
    const charCount: { [key: string]: number } = {};
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        result += char;
      }
    }
  
    return result;
  }
  