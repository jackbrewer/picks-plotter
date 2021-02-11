import React from 'react'
import { number } from 'prop-types'

import randomBm from '../../lib/random-bm'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'
import Hatch from '../../experiment/Squares/component/Hatch'
import Circle from '../../component/Circle'
import LineStar from '../../experiment/LineStar'

const CircleContainer = ({ thickness }) => {
  const width = 500
  const height = 500
  const safe = 20
  const c = { x: width / 2, y: height / 2 }
  const size = Math.min(width, height) - safe * 2
  const r1 = size / 2
  const r2 = r1 - thickness
  // const safeWidth = width - safe * 2
  // const safeHeight = height - safe * 2

  return (
    <Svg width={width} height={height}>
      <Safe width={width} height={height} safe={safe} />
      <defs>
        <clipPath id="clipPathDonut">
          {/* Donut */}
          <path
            d={[
              // Outer circle
              `M ${c.x - r1}, ${c.y}`,
              `a ${r1}, ${r1} 0,1,0 ${r1 * 2}, 0`,
              `a ${r1}, ${r1} 0,1,0 ${r1 * -2}, 0 z`,

              // Inner circle
              `M ${c.x - r2}, ${c.y}`,
              `a ${r2}, ${r2} 0,1,1 ${r2 * 2}, 0`,
              `a ${r2}, ${r2} 0,1,1 ${r2 * -2}, 0 z`,
            ].join(' ')}
          />
        </clipPath>

        <clipPath id="clipPathInner">
          <path
            d={[
              // Inner circle
              `M ${c.x - r2}, ${c.y}`,
              `a ${r2}, ${r2} 0,1,1 ${r2 * 2}, 0`,
              `a ${r2}, ${r2} 0,1,1 ${r2 * -2}, 0 z`,
            ].join(' ')}
          />
        </clipPath>
      </defs>

      <g style={{ clipPath: 'url(#clipPathDonut)' }}>
        <LineStar count={300} />
      </g>

      <Circle cx={c.x} cy={c.y} r={r1} strokeWidth={4} />
      <Circle cx={c.x} cy={c.y} r={r2} strokeWidth={4} />

      <g style={{ clipPath: 'url(#clipPathInner)' }}>
        <Hatch
          width={width}
          height={height}
          strokeWidth={1}
          strokeDasharray={`${randomBm(10, 20, 2)} 3`}
          // strokeDashoffset={`${Math.random() * -10}`}
          space={8}
          rotate={45}
        />
      </g>
    </Svg>
  )
}

CircleContainer.defaultProps = {
  thickness: 20,
}

CircleContainer.propTypes = {
  thickness: number,
}

export default CircleContainer
