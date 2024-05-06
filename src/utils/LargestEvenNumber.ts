export function getLargestEvenNumber(numbers: number[]): number | undefined {
    let largestEvenNumber: number | undefined;
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
  
      if (currentNumber % 2 === 0 && (largestEvenNumber === undefined || currentNumber > largestEvenNumber)) {
        largestEvenNumber = currentNumber;
      }
    }
  
    return largestEvenNumber;
  }