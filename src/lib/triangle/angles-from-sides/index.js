// Law Of Cosines
// https://www.geeksforgeeks.org/find-angles-given-triangle/

const anglesFromSides = ({ a, b, c }) => {
  const precision = 5

  const a2 = Math.pow(a, 2)
  const b2 = Math.pow(b, 2)
  const c2 = Math.pow(c, 2)

  // From Cosine law
  const aRad = Math.acos((b2 + c2 - a2) / (2 * b * c))
  const bRad = Math.acos((a2 + c2 - b2) / (2 * a * c))
  const cRad = Math.acos((a2 + b2 - c2) / (2 * a * b))

  // Converting to degree
  const aDeg = (aRad * 180) / Math.PI
  const bDeg = (bRad * 180) / Math.PI
  const cDeg = (cRad * 180) / Math.PI

  return {
    a: +aDeg.toFixed(precision),
    b: +bDeg.toFixed(precision),
    c: +cDeg.toFixed(precision),
  }
}

export default anglesFromSides
