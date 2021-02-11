const pythagoras = ({ a, b, c }) => {
  if (a && b && c) {
    throw new Error('Expected two arguments, received three')
  }
  if (!((a && b) || (a && c) || (b && c))) {
    throw new Error('Expected two arguments, received one')
  }
  if (
    (a && typeof a !== 'number') ||
    (b && typeof b !== 'number') ||
    (c && typeof c !== 'number')
  ) {
    throw new TypeError('Arguments must be numbers')
  }

  // Hypotenuse
  if (a && b) return Math.sqrt(a * a + b * b)

  // Leg
  const l = a || b
  return Math.sqrt(c * c - l * l)
}

export default pythagoras
