import React from 'react'
import { number, string } from 'prop-types'

import Svg from '../../component/Svg'
import Kite from '../Kite'

import mapRange from '../../lib/map-range'
import randomSeeded from '../../lib/random-seeded'

const Kites = ({ printWidth, printHeight, seed, width, height, count }) => {
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(count).keys()].map((i) => {
        const kiteSeed = `${seed}:kite:${i}`

        const kite = {
          seed: kiteSeed,
          size: mapRange({
            value: randomSeeded(`${kiteSeed}:size`),
            min2: 10,
            max2: 20,
          }),
          x: mapRange({
            value: randomSeeded(`${kiteSeed}:x`),
            min2: 0.1,
            max2: 0.9,
          }),
          y: mapRange({
            value: randomSeeded(`${kiteSeed}:y`),
            min2: 0.05,
            max2: 0.4,
          }),
        }
        return <Kite key={i} {...kite} />
      })}
    </Svg>
  )
}

Kites.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  width: 210,
  height: 297,
  count: 3,
}

Kites.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  width: number,
  height: number,
  count: number,
}

export default Kites
