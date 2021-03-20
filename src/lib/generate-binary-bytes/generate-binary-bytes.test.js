import pythagoras from '../pythagoras'

describe('pythagoras()', () => {
  test('should return c (hypotenuse) when passed a and b', () => {
    expect(pythagoras({ a: 3, b: 4 })).toEqual(5)
    expect(pythagoras({ a: 4, b: 3 })).toEqual(5)
    expect(pythagoras({ a: 321, b: 123 })).toEqual(343.7586362551492)
  })

  test('should return a (leg) when passed b and c', () => {
    expect(pythagoras({ b: 4, c: 5 })).toEqual(3)
  })

  test('should return b (leg) when passed a and c', () => {
    expect(pythagoras({ a: 3, c: 5 })).toEqual(4)
  })

  test('should error with too many arguments', () => {
    expect(() => pythagoras({ a: 3, b: 4, c: 5 })).toThrow(
      'Expected two arguments, received three'
    )
  })

  test('should error with not enough arguments', () => {
    expect(() => pythagoras({ a: 3 })).toThrow(
      'Expected two arguments, received one'
    )
    expect(() => pythagoras({ b: 3 })).toThrow(
      'Expected two arguments, received one'
    )
    expect(() => pythagoras({ c: 3 })).toThrow(
      'Expected two arguments, received one'
    )
  })

  test('should error with incorrect types', function () {
    expect(() => pythagoras({ a: '3', b: '4' })).toThrow(
      'Arguments must be numbers'
    )
  })
})
