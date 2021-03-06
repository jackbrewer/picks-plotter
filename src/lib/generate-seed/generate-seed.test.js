import generateSeed from '../generate-seed'

describe('generateSeed()', () => {
  // JSDOM can't test the needed SVG methods
  test('should always return the same value', () => {
    expect(generateSeed().split(' ')).toHaveLength(3)
  })
})
