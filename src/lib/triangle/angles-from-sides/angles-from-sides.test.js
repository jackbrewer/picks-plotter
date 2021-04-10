import anglesFromSides from './'

describe('anglesFromSides()', () => {
  test('should return triangle angles from supplied sides', () => {
    expect(anglesFromSides({ a: 3, b: 4, c: 5 })).toEqual({
      a: 36.8699,
      b: 53.1301,
      c: 90,
    })
    expect(anglesFromSides({ a: 2, b: 2, c: 2 })).toEqual({
      a: 60,
      b: 60,
      c: 60,
    })
  })
})
