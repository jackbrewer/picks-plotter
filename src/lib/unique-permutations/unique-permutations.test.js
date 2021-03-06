import uniquePermutations from '../unique-permutations'

describe('uniquePermutations()', () => {
  // JSDOM can't test the needed SVG methods
  test('should return all unique permutations', () => {
    expect(uniquePermutations('123')).toEqual([
      '123',
      '132',
      '213',
      '231',
      '312',
      '321',
    ])
    expect(uniquePermutations('1234')).toHaveLength(24)
  })

  test('should handle repeated characters', () => {
    expect(uniquePermutations('113')).toEqual(['113', '131', '311'])
  })
})
