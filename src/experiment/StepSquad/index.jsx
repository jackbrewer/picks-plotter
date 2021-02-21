import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
// import Polyline from '../../component/Polyline'

const StepSquad = ({ width, height }) => {
  const count = 10
  let acc = 0
  const numbers = []

  for (let i = 1; i <= count; i++) {
    numbers.push(acc + i)
    acc += i
  }

  console.log({ count, numbers, acc })

  return (
    <Svg
      width={`${width}mm`}
      height={`${height}mm`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ background: '#222' }}
    >
      <Group label="Text">
        <text
          textAnchor="left"
          fontFamily="Open Sans, sans-serif"
          fontSize="4"
          fill="lime"
        >
          {numbers.map((n) => (
            <tspan key={n} x="0" dy="8">
              {n}
            </tspan>
          ))}
        </text>
      </Group>
      <Group label="Shapes">
        {/* {line.pointsGroups.map((points, j) => (
          // <Polyline
          //   key={`polyline:${j}`}
          //   points={points}
          //   stroke={line.color || '#fff'}
          //   strokeWidth="2"
          // />
          <path
            d={points}
            key={`polyline:${j}`}
            stroke={line.color || '#fff'}
            strokeWidth="2"
            fill="transparent"
          />
        ))} */}
      </Group>
    </Svg>
  )
}

StepSquad.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

StepSquad.propTypes = {
  width: number,
  height: number,
}

export default StepSquad
