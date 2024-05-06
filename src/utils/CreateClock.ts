export function createClock(): void {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }
  