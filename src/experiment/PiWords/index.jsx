import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'

import piString from './pi-string'
import letterPaths from './letter-paths.json'

// const getPi = () => {
//   let i = BigInt(1)
//   let x = BigInt(3) * BigInt(10) ** BigInt(1020)
//   let pi = x
//   while (x > 0) {
//     x = (x * i) / ((i + BigInt(1)) * BigInt(4))
//     pi += x / (i + BigInt(2))
//     i += BigInt(2)
//   }
//   return pi / BigInt(10) ** BigInt(20)
// }

const words = {
  '.': 'point',
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

const getPiWords = ({ length }) => {
  const pi = piString
  const piTrimmed = [pi.slice(0, 1), '.', ...pi.slice(1, length - 1)]
  return piTrimmed.map((n) => words[n]).join('')
}

const PiWords = ({ width, height, printWidth, printHeight }) => {
  const piWords = getPiWords({ length: 1500 })
  const cols = 114
  const rows = 50
  const colWidth = 70
  const rowHeight = 110

  // const temp = piWords.split().map((n) => n)

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group label="1">
        {[...Array(cols * rows).keys()].map((i) => {
          const colNumber = i % cols
          const rowNumber = Math.floor(i / cols)
          return (
            <g
              key={i}
              transform={`translate(${colNumber * colWidth - 6 * colNumber}, ${
                rowNumber * rowHeight
              })`}
            >
              <path
                d={letterPaths[piWords[i]]}
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </g>
          )
        })}
      </Group>
      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

PiWords.defaultProps = {
  printWidth: 730 / 4,
  printHeight: 300 / 4,
  width: 730,
  height: 300,
}

PiWords.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
}

export default PiWords
