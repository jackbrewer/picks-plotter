const getKitePoints = ({ size, width, height, x, y }) => {
  const kite = { n: size * 0.4, e: size * 0.5, w: size * 0.5, s: size * 0.75 }
  const pos = {
    x: width * x - kite.e,
    y: height * y - kite.n,
  }
  const kiteShapePoints = [
    [pos.x + kite.e, pos.y + 0],
    [pos.x + kite.e + kite.w, pos.y + kite.n],
    [pos.x + kite.e, pos.y + kite.n + kite.s],
    [pos.x + 0, pos.y + kite.n],
  ]
  const kiteStickPoints = [
    [
      [pos.x + kite.e, pos.y + 0],
      [pos.x + kite.e, pos.y + kite.n + kite.s],
    ],
    [
      [pos.x + 0, pos.y + kite.n],
      [pos.x + kite.e + kite.w, pos.y + kite.n],
    ],
  ]
  const kitePoi = {
    stringOrigin: [pos.x + kite.e, pos.y + kite.n],
    tailOrigin: [pos.x + kite.e, pos.y + kite.n + kite.s],
  }

  return { kiteShapePoints, kiteStickPoints, kitePoi }
}

export default getKitePoints
