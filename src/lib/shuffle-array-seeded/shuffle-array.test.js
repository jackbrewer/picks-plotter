import shuffleArraySeeded from './'

describe('shuffleArraySeeded()', () => {
  test('should return a seeded shuffled array of the same length', () => {
    expect(shuffleArraySeeded({ arr: [1, 2, 3], seed: '123' })).toEqual([
      2,
      3,
      1,
    ])
  })
})
