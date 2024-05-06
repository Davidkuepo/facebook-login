import { describe, expect, it } from 'vitest'
import { findLongestString } from '../LongestString'

describe('findLongestString', () => {
  it('should handle an empty array', () => {
    const strings: string[] = []
    const expectedLongestString = ''

    const longestString = findLongestString(strings)

    expect(longestString).toBe(expectedLongestString)
  })

  it('should handle an array with a single string', () => {
    const strings = ['apple']
    const expectedLongestString = 'apple'

    const longestString = findLongestString(strings)

    expect(longestString).toBe(expectedLongestString)
  })

  it('should handle an array with multiple strings of the same length', () => {
    const strings = ['cat', 'dog', 'bat']
    const expectedLongestString = 'cat'

    const longestString = findLongestString(strings)

    expect(longestString).toBe(expectedLongestString)
  })
})
