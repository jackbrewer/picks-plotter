import React from 'react'
import { array } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Circle from '../../component/Circle'
import Safe from '../../component/Safe'

const safe = 10
const width = 500
const height = 300
const safeWidth = width - safe * 2
const safeHeight = height - safe * 2

const Random = ({ points }) => {
  return (
    <Svg width={width} height={width}>
      <Safe width={width} height={height} safe={safe} />
      {points.map((point, i) => {
        const size = 2
        const maxPoint = Math.max(...points)
        const minPoint = Math.min(...points)
        const cx = safe + (safeWidth / points.length) * i
        const cy =
          safeHeight +
          safe -
          mapRange({
            value: point,
            min1: minPoint,
            max1: maxPoint,
            min2: 0,
            max2: safeHeight,
          })
        return <Circle key={`i-${i}`} r={size} cx={cx} cy={cy} />
      })}
    </Svg>
  )
}
Random.defaultProps = {
  points: [],
}

Random.propTypes = {
  points: array,
}

export default Random
