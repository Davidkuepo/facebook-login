import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../RemoveDuplicatesCharacters'

describe('removeDuplicates', () => {
  it('should handle an empty string', () => {
    const inputString = ''
    const expectedOutput = ''

    const resultString = removeDuplicates(inputString)

    expect(resultString).toBe(expectedOutput)
  })

  it('should handle a string with no duplicate characters', () => {
    const inputString = 'abcdefg'
    const expectedOutput = 'abcdefg'

    const resultString = removeDuplicates(inputString)

    expect(resultString).toBe(expectedOutput)
  })

  it('should handle a string with only duplicate characters', () => {
    const inputString = 'aaaaa'
    const expectedOutput = ''

    const resultString = removeDuplicates(inputString)

    expect(resultString).toBe(expectedOutput)
  })
})
