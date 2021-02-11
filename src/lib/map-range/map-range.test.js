import mapRange from '../map-range'

describe('mapRange()', () => {
  test('should return value mapped from one range to another', () => {
    expect(
      mapRange({ value: 0.5, min1: 0, max1: 1, min2: 10, max2: 20 })
    ).toEqual(15)
    expect(
      mapRange({ value: 1.5, min1: 0, max1: 1, min2: 10, max2: 20 })
    ).toEqual(25)
    expect(
      mapRange({ value: -0.5, min1: 0, max1: 1, min2: 10, max2: 20 })
    ).toEqual(5)
  })
})
