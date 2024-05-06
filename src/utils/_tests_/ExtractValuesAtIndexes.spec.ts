import { describe, expect, it } from 'vitest'
import { extractValuesAtIndexes } from '../ExtractValuesAtIndexes'

describe('extractValuesAtIndexes', () => {
  it('should handle empty array', () => {
    const array: string[] = []
    const indexes = [0, 2]

    const extractedValues = extractValuesAtIndexes(array, indexes)

    expect(extractedValues).toEqual([undefined, undefined])
  })

  it('should handle empty indexes', () => {
    const array = ['apple', 'banana', 'cherry']
    const indexes: number[] = []

    const extractedValues = extractValuesAtIndexes(array, indexes)

    expect(extractedValues).toEqual([])
  })

  it('should handle out-of-range indexes', () => {
    const array = ['apple', 'banana', 'cherry']
    const indexes = [1, 5]

    const extractedValues = extractValuesAtIndexes(array, indexes)

    expect(extractedValues).toEqual(['banana', undefined])
  })
})
