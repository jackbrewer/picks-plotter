import React from 'react'
import { number, string } from 'prop-types'
import { noise } from '@chriscourses/perlin-noise'

import Svg from '../../component/Svg'
import randomSeeded from '../../lib/random-seeded'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'
import mapRange from '../../lib/map-range'

import words from './data/passwords.json'

const Passwords = ({
  printWidth,
  printHeight,
  seed,
  width,
  height,
  count,
  size,
  offset,
}) => {
  const shuffledWords = shuffleArraySeeded({ seed, arr: words })
  const tOff = 0.015
  let tx = randomSeeded(`x:${seed}`) * 10000 + offset * tOff
  let ty = randomSeeded(`y:${seed}`) * 10000 + 100000 + offset * tOff
  console.log(seed, shuffledWords[0], words[0])
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(count).keys()].map((i) => {
        // const x = randomSeeded(`x:${i}:${seed}`) * width * 1.2 - width * 0.1
        // const y = randomSeeded(`y:${i}:${seed}`) * height * 1.2 - height * 0.1
        const x = mapRange({
          value: noise(tx),
          min1: 0,
          max1: 1,
          min2: 0 - width * 0.75,
          max2: width + width * 0.75,
        })
        const y = mapRange({
          value: noise(ty),
          min1: 0,
          max1: 1,
          min2: 0 - height * 0.75,
          max2: height + height * 0.75,
        })
        tx += tOff
        ty += tOff

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            // fontFamily="Fira Code, sans-serif"
            fontSize={`${size}mm`}
            fill="#000"
          >
            {shuffledWords[i + offset]}
          </text>
        )
      })}
    </Svg>
  )
}

Passwords.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  width: 210,
  height: 297,
  seed: '',
  count: 100,
  size: 4,
  offset: 0,
}

Passwords.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  seed: string,
  count: number,
  size: number,
  offset: number,
}

export default Passwords
