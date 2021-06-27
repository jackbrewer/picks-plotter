import { noise } from '@chriscourses/perlin-noise'
import mapRange from '../../../lib/map-range'
import randomSeeded from '../../../lib/random-seeded'

const getTail = ({ seed, origin, offset }) => {
  const tOff = 0.25
  let tx = randomSeeded(`x:${seed}`) * 10000 + offset * tOff
  const maxRotStep = mapRange({
    value: randomSeeded(`${seed}:maxRotStep`),
    min2: 0.2,
    max2: 1,
  })
  // Default to down direction (in radians)
  let rot =
    Math.PI / 2 +
    mapRange({
      value: randomSeeded(`${seed}:tailInitialRot`),
      min2: -0.5,
      max2: 0.5,
    })
  const segmentLength = mapRange({
    value: randomSeeded(`${seed}:segmentLength`),
    min2: 2,
    max2: 3,
  })
  const segmentCount = Math.round(
    mapRange({
      value: randomSeeded(`${seed}:segmentCount`),
      min2: 30,
      max2: 50,
    })
  )
  const keys = [...Array(segmentCount).keys()]
  const points = [origin]
  const rotations = [rot]

  keys.forEach((i) => {
    const [x1, y1] = points[points.length - 1]

    // https://math.stackexchange.com/a/39393
    const x2 = x1 + segmentLength * Math.cos(rot)
    const y2 = y1 + segmentLength * Math.sin(rot)

    rot += mapRange({
      value: noise(tx),
      min2: maxRotStep * -1,
      max2: maxRotStep,
    })
    tx += tOff

    points.push([x2, y2])
    rotations.push(rot)
  })

  return { tailPoints: points, tailRotations: rotations }
}

export default getTail
