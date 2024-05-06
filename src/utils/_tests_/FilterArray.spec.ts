import { describe, expect, it } from 'vitest'
import { filterArray } from '../FilterArray'

describe('filterArray', () => {
  it('should filter out specified values from the original array', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const valuesToFilter = [2, 4]

    const filteredArray = filterArray(originalArray, valuesToFilter)

    expect(filteredArray).toEqual([1, 3, 5])
  })

  it('should handle empty original array', () => {
    const originalArray: number[] = []
    const valuesToFilter = [2, 4]

    const filteredArray = filterArray(originalArray, valuesToFilter)

    expect(filteredArray).toEqual([])
  })

  it('should handle empty valuesToFilter array', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const valuesToFilter: number[] = []

    const filteredArray = filterArray(originalArray, valuesToFilter)

    expect(filteredArray).toEqual(originalArray)
  })

  it('should handle original array with no matching values', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const valuesToFilter = [6, 7]

    const filteredArray = filterArray(originalArray, valuesToFilter)

    expect(filteredArray).toEqual(originalArray)
  })

  it('should handle original array containing strings', () => {
    const originalArray = ['apple', 'banana', 'cherry', 'date', 'elderberry']
    const valuesToFilter = ['banana', 'date']

    const filteredArray = filterArray(originalArray, valuesToFilter)

    expect(filteredArray).toEqual(['apple', 'cherry', 'elderberry'])
  })
})
