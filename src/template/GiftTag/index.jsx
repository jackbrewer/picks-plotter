import React from 'react'
import { bool, number } from 'prop-types'

import Svg from '../../component/Svg'
import Circle from '../../component/Circle'
import Snowflake from '../../experiment/Snowflake'

const GiftTag = ({ width, height, printGuide }) => {
  const size = width || height
  const safe = 50
  const safeSize = size - safe * 2
  const c = size / 2

  return (
    <Svg
      width={`${size / 10}mm`}
      height={`${size / 10}mm`}
      viewBox={`0 0 ${size} ${size}`}
    >
      {printGuide && (
        <>
          <rect
            width={size}
            height={size}
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray={size * 0.5}
            strokeDashoffset={size * 0.25}
          />
          <Circle cx={c} cy={c} r={size / 2} strokeWidth="4" />
          <Circle cx={c} cy={60} r={20} />
        </>
      )}
      {!printGuide && (
        <>
          <Circle className="debug" cx={c} cy={c} r={size / 2 - safe} />
          <Circle className="debug" cx={c} cy={c} r={size / 2} />
          <g
            transform={`translate(${safe}, ${safe}) rotate(30, ${c - safe}, ${
              c - safe
            })`}
          >
            <Snowflake width={safeSize} height={safeSize} strokeWidth={2} />
          </g>
        </>
      )}
    </Svg>
  )
}

GiftTag.defaultProps = {
  width: 600,
  height: 600,
}

GiftTag.propTypes = {
  width: number,
  height: number,
  printGuide: bool,
}

export default GiftTag
