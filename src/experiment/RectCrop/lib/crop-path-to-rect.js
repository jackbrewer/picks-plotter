// TODO: optimise!!!
//
// TODO: Return multiple sets of points for cases where paths are split into parts
// TODO: this should be called at top-level of loop, then <polyline> else created for each returned array, rather than running directly in points attribute

const checkHorizontal = ({
  start,
  end,
  startDiff,
  startClipped,
  endClipped,
}) => {
  const height = start[1] - end[1]
  const width = end[0] - start[0]
  const ratio = height / width
  const newHeight = height - startDiff
  const points = [start, end]
  const newPoint = [end[0] - newHeight / ratio, start[1] - startDiff]
  if (startClipped) points[0] = newPoint
  if (endClipped) points[1] = newPoint
  return points
}

const checkVertical = ({ start, end, startDiff, startClipped, endClipped }) => {
  const height = start[1] - end[1]
  const width = end[0] - start[0]
  const ratio = width / height
  const newHeight = width - startDiff * -1
  const points = [start, end]
  const newPoint = [start[0] - startDiff, end[1] - (newHeight / ratio) * -1]
  if (startClipped) points[0] = newPoint
  if (endClipped) points[1] = newPoint
  return points
}

const checkTop = (start, end, clipPoint) => {
  const startDiff = start[1] - clipPoint[1]
  const endDiff = end[1] - clipPoint[1]
  const startClipped = startDiff < 1
  const endClipped = endDiff < 1
  if (startClipped && endClipped) return null
  return checkHorizontal({ start, end, startDiff, startClipped, endClipped })
}

const checkBottom = (start, end, clipPoint) => {
  const startDiff = start[1] - clipPoint[1]
  const endDiff = end[1] - clipPoint[1]
  const startClipped = startDiff > 1
  const endClipped = endDiff > 1
  if (startClipped && endClipped) return null
  return checkHorizontal({
    start,
    end,
    startDiff,
    startClipped,
    endClipped,
  })
}

const checkLeft = (start, end, clipPoint) => {
  const startDiff = start[0] - clipPoint[0]
  const endDiff = end[0] - clipPoint[0]
  const startClipped = startDiff < 1
  const endClipped = endDiff < 1
  if (startClipped && endClipped) return null
  return checkVertical({ start, end, startDiff, startClipped, endClipped })
}

const checkRight = (start, end, clipPoint) => {
  const startDiff = start[0] - clipPoint[0]
  const endDiff = end[0] - clipPoint[0]
  const startClipped = startDiff > 1
  const endClipped = endDiff > 1
  if (startClipped && endClipped) return null
  return checkVertical({ start, end, startDiff, startClipped, endClipped })
}

const cropPathToRect = ({ points, clipPoints }) => {
  const clippedPointsMaster = []

  for (let i = 0; i < points.length - 1; i++) {
    let path = [points[i], points[i + 1]]

    const top = checkTop(path[0], path[1], clipPoints[0])
    if (!top) return []
    path = top
    const bottom = checkBottom(path[0], path[1], clipPoints[1])
    if (!bottom) return []
    path = bottom
    const left = checkLeft(path[0], path[1], clipPoints[0])
    if (!left) return []
    path = left
    const right = checkRight(path[0], path[1], clipPoints[1])
    if (!right) return []
    path = right

    clippedPointsMaster.push(path)
  }
  return clippedPointsMaster
}

export default cropPathToRect

// const checkTop = (start, end, clipPoint) => {
//   const startClipped = start[1] < clipPoint[1]
//   const endClipped = end[1] < clipPoint[1]
//   const points = [start, end]
//   if (startClipped && endClipped) return null
//   if (startClipped) points[0] = [end[0], clipPoint[1]]
//   if (endClipped) points[1] = [start[0], clipPoint[1]]
//   return points
// }

// const checkBottom = (start, end, clipPoint) => {
//   const startClipped = start[1] > clipPoint[1]
//   const endClipped = end[1] > clipPoint[1]
//   const points = [start, end]
//   if (startClipped && endClipped) return null
//   if (startClipped) points[0] = [end[0], clipPoint[1]]
//   if (endClipped) points[1] = [start[0], clipPoint[1]]
//   return points
// }

// const checkRight = (start, end, clipPoint) => {
//   const startClipped = start[0] < clipPoint[0]
//   const endClipped = end[0] < clipPoint[0]
//   const points = [start, end]
//   if (startClipped && endClipped) return null
//   if (startClipped) points[0] = [clipPoint[0], end[1]]
//   if (endClipped) points[1] = [clipPoint[0], start[1]]
//   return points
// }

// const checkRight = (start, end, clipPoint) => {
//   const startClipped = start[0] > clipPoint[0]
//   const endClipped = end[0] > clipPoint[0]
//   const points = [start, end]
//   if (startClipped && endClipped) return null
//   if (startClipped) points[0] = [clipPoint[0], end[1]]
//   if (endClipped) points[1] = [clipPoint[0], start[1]]
//   return points
// }
