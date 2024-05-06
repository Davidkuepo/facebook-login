class Cylinder {
  private radius: number;
  private height: number;

  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }

  getVolume(): number {
    const PI = Math.PI;
    const volume = PI * Math.pow(this.radius, 2) * this.height;
    return Number(volume.toFixed(4));
  }
}

export function getCylinderVolume(radius: number, height: number): number {
  const cylinder = new Cylinder(radius, height);
  return cylinder.getVolume();
}
