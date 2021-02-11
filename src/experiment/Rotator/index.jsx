import React from 'react'
import { number } from 'prop-types'

// import randomBm from '../../lib/random-bm'

import Svg from '../../component/Svg'
import Polygon from '../../component/Polygon'

const Rotator = ({
  width,
  height,
  count,
  rotate,
  scale,
  mod,
  corners,
  ...other
}) => {
  const c = Math.min(width, height) / 2
  let modPlus = 0
  return (
    <Svg width="160mm" height="160mm" viewBox={`0 0 ${width} ${height}`}>
      {[...Array(count).keys()].map((iteration, i) => {
        const size = 400 - i * scale + modPlus //* (randomBm(0, 1, 1) + 0.5)
        modPlus = modPlus + scale * mod
        console.log({ size, modPlus })
        if (size <= 0) return null
        return (
          <g
            key={`iteration:${i}`}
            transform={`rotate(${
              rotate * i //* (randomBm(0, 1, 1) + 0.5)
            }, ${c}, ${c})`}
          >
            <Polygon
              cx={c}
              cy={c}
              r={size / 2 / 2}
              corners={corners}
              // width={size}
              // height={size}
              fill="none"
              // x={c - ((size / 2) * randomBm(-1, 1, 1)) / 10}
              // y={c - ((size / 2) * randomBm(-1, 1, 1)) / 10}
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* <Polygon
              cx={c}
              cy={c}
              r={size / 2 / 5}
              // width={size}
              // height={size}
              fill="none"
              // x={c - ((size / 2) * randomBm(-1, 1, 1)) / 10}
              // y={c - ((size / 2) * randomBm(-1, 1, 1)) / 10}
              stroke="#000"
              strokeWidth="1"
              rotation={180}
            /> */}
          </g>
        )
      })}
    </Svg>
  )
}

Rotator.defaultProps = {
  count: 100,
  scale: 5,
  rotate: 3,
  width: 900,
  height: 900,
  mod: 0.1,
  corners: 5,
}

Rotator.propTypes = {
  count: number,
  scale: number,
  rotate: number,
  width: number,
  height: number,
  mod: number,
  corners: number,
}

export default Rotator
