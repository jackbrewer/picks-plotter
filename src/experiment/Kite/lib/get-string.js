import mapRange from '../../../lib/map-range'
import randomSeeded from '../../../lib/random-seeded'

const getString = ({ seed, origin, height, width }) => {
  const x = mapRange({
    value: randomSeeded(`${seed}:stringX`),
    min2: width * 0.05,
    max2: width * 0.95,
  })
  const tension = mapRange({
    value: randomSeeded(`${seed}:stringTension`),
    // TODO - these aren't right. Need to work out the length of string vs. the
    // x/y of kite and the x/y of person
    min2: height * 0.3,
    max2: height * 0.8,
  })
  const stringPath = `
    M ${origin[0]} ${origin[1]}
    Q
      ${origin[0]} ${tension}
      ${x} ${height * 0.9}
  `
  return { stringPath }
}

export default getString
