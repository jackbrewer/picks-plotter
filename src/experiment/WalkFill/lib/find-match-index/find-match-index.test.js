import findMatchIndex from '.'

describe('findMatchIndex()', () => {
  test('should return expected match', () => {
    expect(
      findMatchIndex({
        availables: [1, 2, 3, 4],
        possibles: [2, 3],
      })
    ).toEqual(1)
    expect(
      findMatchIndex({
        availables: [1, 2, 3, 4],
        possibles: [3, 2],
      })
    ).toEqual(2)
    expect(
      findMatchIndex({
        availables: [1, 2, 3, 4],
        possibles: [100, 4],
      })
    ).toEqual(3)
  })

  test('should return false if no match found', () => {
    expect(
      findMatchIndex({
        availables: [1, 2, 3, 4],
        possibles: [5, 6],
      })
    ).toEqual(-1)
  })
})
