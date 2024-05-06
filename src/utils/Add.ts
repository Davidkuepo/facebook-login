export function add(a: number, b: number): Promise<number | string> {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('Must provide two numbers as parameters');
      } else {
        resolve(a + b);
      }
    });
  }