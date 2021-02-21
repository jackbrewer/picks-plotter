const pointsInPath = ({ pathElement, numPoints = 10 }) => {
  const pathLength = pathElement.getTotalLength()
  const step = pathLength / numPoints

  const points = []

  for (let i = 0; i <= pathLength; i += step) {
    points.push(pathElement.getPointAtLength(i))
  }

  return points
}

export default pointsInPath
