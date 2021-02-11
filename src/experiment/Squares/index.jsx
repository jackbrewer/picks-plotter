import React from 'react'
import SquareArr from './component'
import { bool } from 'prop-types'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'

const safe = 10
const width = 1500 + safe * 2
const height = 1500 + safe * 2
// const safeWidth = width - safe * 2
// const safeHeight = height - safe * 2

const Squares = ({ outlines }) => {
  return (
    <Svg width={width} height={width}>
      <defs>
        <clipPath id="clipPath">
          <rect x="0" y="0" width="100" height="100" />
        </clipPath>
      </defs>

      <Safe width={width} height={height} safe={safe} />
      {SquareArr.map((Sq, i) => (
        <g
          key={i}
          transform={`translate(${safe + i * 100}, ${safe})`}
          style={{ clipPath: 'url(#clipPath)' }}
        >
          <rect
            width={100}
            height={100}
            fill="none"
            stroke="#000"
            strokeWidth={outlines ? 1 : 0}
          />
          <Sq size={100} stroke={5} />
        </g>
      ))}
    </Svg>
  )
}

Squares.propTypes = {
  outlines: bool,
}

export default Squares
