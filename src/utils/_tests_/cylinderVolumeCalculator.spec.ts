import { getCylinderVolume } from '../cylinderVolumeCalculator';
import { describe, expect, it , vi} from 'vitest';

describe('Cylinder', () => {
  it('should calculate the volume of a cylinder correctly', async () => {
    const radius = 5;
    const height = 10;
    const expectedVolume = Math.PI * Math.pow(radius, 2) * height;
    const actualVolume = getCylinderVolume(radius, height);
    expect(actualVolume).toBeCloseTo(expectedVolume, 4);
  });
});