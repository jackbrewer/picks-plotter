import pointsInPath from '../points-in-path'

const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
pathEl.setAttribute('d', 'M 70 110 C 70 140, 110 140, 110 110')

describe('pointsInPath()', () => {
  // JSDOM can't test the needed SVG methods
  test.skip('should return value mapped from one range to another', () => {
    expect(pointsInPath({ pathElement: pathEl, numPoints: 6 })).toEqual(15)
  })
})
