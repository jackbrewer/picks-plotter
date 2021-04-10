import shuffleArray from '../shuffle-array'

describe('shuffleArray()', () => {
  test('should return a shuffled array of the same length', () => {
    expect(shuffleArray([1, 2, 3])).toHaveLength(3)
  })
})
