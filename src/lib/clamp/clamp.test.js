import clamp from '../clamp'

describe('clamp()', () => {
  test('should return value unaltered if in range', () => {
    expect(clamp({ min: 2, value: 3, max: 4 })).toEqual(3)
  })

  test('should return min if greater than value', () => {
    expect(clamp({ min: 2, value: 1, max: 4 })).toEqual(2)
  })

  test('should return max if less than value', () => {
    expect(clamp({ min: 2, value: 5, max: 4 })).toEqual(4)
  })
})
