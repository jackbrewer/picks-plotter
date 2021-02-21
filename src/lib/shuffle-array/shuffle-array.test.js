import shuffleArray from '../shuffle-array'

describe('shuffleArray()', () => {
  // JSDOM can't test the needed SVG methods
  test('should return a shuffled array of the same length', () => {
    expect(shuffleArray([1, 2, 3])).toHaveLength(3)
  })
})
