import React from 'react'

import getRandomInt from '../../lib/random-int'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Circle from '../../component/Circle'
import Rect from '../../component/Rect'
import Safe from '../../component/Safe'

const safe = 10
const width = 300
const height = 300

const One = () => (
  <Svg width={width} height={height}>
    <Safe width={width} height={height} safe={safe} />
    <Group id="1" label="1 squares">
      {[...Array(20).keys()].map((i) => {
        const size = getRandomInt(2, 5) * 2
        return (
          <Rect
            key={`i-${i}`}
            width={size}
            height={size}
            x={getRandomInt(size + 2, width - size - 2)}
            y={getRandomInt(size + 2, height - size - 2)}
          />
        )
      })}
    </Group>
    <Group id="2" label="1 circles">
      {[...Array(20).keys()].map((i) => {
        const size = getRandomInt(2, 5) * 2
        return (
          <Circle
            key={`i-${i}`}
            r={size}
            cx={getRandomInt(size + safe + 0.5, width - size - safe + 0.5)}
            cy={getRandomInt(size + safe + 0.5, height - size - safe + 0.5)}
          />
        )
      })}
    </Group>
  </Svg>
)

export default One
