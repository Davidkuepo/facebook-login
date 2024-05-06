export function compareObjects(obj1: any, obj2: any): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
      for (const key in obj2) {
      if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
        return false;
      }
  
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }