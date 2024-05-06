import { add } from '../Add'
import { describe, expect, it, vi } from 'vitest'

describe('add function', () => {
  it('should add two numbers and return the result', async () => {
    const result = await add(2, 3)
    expect(result).toEqual(5)
  })

  it('should reject with an error message if one parameter is not a number', async () => {
    await expect(add(2, 'test' as any)).rejects.toEqual('Must provide two numbers as parameters')
  })

  it('should reject with an error message if no parameters are provided', async () => {
    await expect(add(undefined as any, undefined as any)).rejects.toEqual(
      'Must provide two numbers as parameters'
    )
  })
})
