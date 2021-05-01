import randomInt from '../random-int'

describe('randomInt()', () => {
  test('should return a random integer between two values', () => {
    expect(randomInt(2, 2)).toEqual(2)
    expect(randomInt(1, 10)).toBeLessThanOrEqual(10)
    expect(randomInt(1, 10)).toBeGreaterThanOrEqual(1)
  })
})
