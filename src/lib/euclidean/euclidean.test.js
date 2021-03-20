import euclidean from '../euclidean'

describe('euclidean()', () => {
  test('should return distance between two sets of x,y coordinates', () => {
    expect(euclidean({ a: { x: 0, y: 0 }, b: { x: 4, y: 3 } })).toEqual(5)
    expect(euclidean({ a: { x: 4, y: 3 }, b: { x: 0, y: 0 } })).toEqual(5)
    expect(euclidean({ a: { x: 14, y: 13 }, b: { x: 10, y: 10 } })).toEqual(5)
  })
})
