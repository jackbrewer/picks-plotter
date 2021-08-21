import mapRange from '../../../lib/map-range'
import randomSeeded from '../../../lib/random-seeded'

const getBowDimensions = ({ seed }) => {
  const width = mapRange({ value: randomSeeded(seed), min2: 2.5, max2: 4 })
  const height = mapRange({ value: randomSeeded(seed), min2: 1.5, max2: 2.3 })

  return { width, height }
}

const getBows = ({ tailPoints, tailRotations, randomBows, seed }) => {
  const bowInterval = 4
  let { width, height } = getBowDimensions({ seed: `${seed}:bow` })
  const bows = tailRotations
    .map((rotRad, i) => {
      if (i === 0) return null
      if (i % bowInterval !== 0) return null

      if (randomBows) {
        ;({ width, height } = getBowDimensions({
          seed: `${seed}:randomBow:${i}`,
        }))
      }
      const x = tailPoints[i][0]
      const y = tailPoints[i][1]
      const offX = x - width * 0.5
      const offY = y - height * 0.5
      const rot = (rotRad * 180) / Math.PI

      return { x, y, offX, offY, rot, width, height }
    })
    .filter(Boolean)

  // Remove last item - it's sometimes too close to the end
  const trimmedBows = bows.slice(0, -1)

  return trimmedBows
}

export default getBows
