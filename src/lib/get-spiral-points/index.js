const getSpiralPoints = ({
  numPoints,
  pointRadius,
  angleDiff,
  distance,
  cx,
  cy,
}) => {
  let angle = 0
  return [...Array(numPoints).keys()].map((i) => {
    const radius = Math.sqrt(i + 0.3) * pointRadius * distance
    angle += Math.asin(1 / radius) * pointRadius * angleDiff
    angle = angle % (Math.PI * 2)
    return {
      x: Math.cos(angle) * radius + cx,
      y: Math.sin(angle) * radius + cy,
      angle,
    }
  })
}

export default getSpiralPoints
