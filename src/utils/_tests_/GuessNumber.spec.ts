import { describe, expect, it,vi } from 'vitest'
import { guessNumber } from '../GuessNumber'

describe('guessNumber', () => {
  it('should return "Good Work!" when the guess is correct', () => {
    global.Math.random = vi.fn(() => 0.4)
    const generateRandomNumber = guessNumber(5)
    expect(generateRandomNumber).toEqual('Good Work!')
  })

  it('should return "Not matched." when the guess is incorrect', () => {
    global.Math.random = vi.fn(() => 0.5)
    const generateRandomNumber = guessNumber(5)
    expect(generateRandomNumber).toEqual('Not matched.')
  })
})
