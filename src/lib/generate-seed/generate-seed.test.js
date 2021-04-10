import generateSeed from '../generate-seed'

describe('generateSeed()', () => {
  test('should always return the same value', () => {
    expect(generateSeed().split(' ')).toHaveLength(3)
  })
})
