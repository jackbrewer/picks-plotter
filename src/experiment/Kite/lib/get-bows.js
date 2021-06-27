const getBows = ({ tailPoints, tailRotations, bowSize }) => {
  const bowInterval = 4
  const bows = tailRotations
    .map((rotRad, i) => {
      if (i === 0) return null
      if (i % bowInterval !== 0) return null
      const x = tailPoints[i][0]
      const y = tailPoints[i][1]
      const offX = x - bowSize * 0.5
      const offY = y - bowSize * 0.5
      const rot = (rotRad * 180) / Math.PI

      return { x, y, offX, offY, rot, size: bowSize }
    })
    .filter(Boolean)

  // Remove last item - it's sometimes too close to the end
  const trimmedBows = bows.slice(0, -1)

  return trimmedBows
}

export default getBows
