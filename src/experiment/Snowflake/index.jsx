import React from 'react'
import { func, number } from 'prop-types'

import mapRange from '../../lib/map-range'
import centralLimitRand from '../../lib/random-central-limit'
import randomiser from '../../lib/weighted-randomiser'
import getRandomInt from '../../lib/random-int'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'
import Circle from '../../component/Circle'
import Hexagon from '../../component/Hexagon'
import Fork from '../../component/Fork'

const arrSum = (arr) => arr.reduce((a, b) => a + b, 0)

const shapes = [
  { value: 'hexagon', probability: 0.08 },
  { value: 'circle', probability: 0.1 },
  { value: 'fork', probability: 0.08 },
  { value: 'empty', probability: 0.1 },
  { value: 'line', probability: '*' },
]

const Snowflake = ({ points, strokeWidth, height, width, onClick }) => {
  const safe = 10
  const safeWidth = width - safe * 2
  const safeHeight = height - safe * 2
  const c = { x: width / 2, y: height / 2 }
  const r = Math.min(safeWidth, safeHeight) / 2
  const spikeCount = Math.round(
    mapRange({
      value: centralLimitRand(),
      min1: 0,
      max1: 1,
      min2: 2,
      max2: 10,
    })
  )
  const spikeTotal = arrSum([...Array(spikeCount + 1).keys()])
  const spikeDistributions = [...Array(spikeCount).keys()]
    .map((i) => ((i + 1) / spikeTotal) * r * 0.8)
    .reverse()
  const bushiness = centralLimitRand() + 0.5
  const spikes = [...Array(spikeCount).keys()].map((spike, i) => {
    const shape = randomiser(shapes)
    return {
      inverse: Math.random() > 0.75,
      length: spikeDistributions[i + 1] * 2 * bushiness || 0,
      start: arrSum([
        ...spikeDistributions.slice(i, spikeDistributions.length),
      ]),
      shape,
      ...(shape === 'fork' && {
        triple: Math.random() > 0.8,
        split: getRandomInt(75, 85) / 100,
      }),
    }
  })

  return (
    <>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Circle className="debug" cx={c.x} cy={c.y} r={r} opacity="0.25" />
        {[...Array(points).keys()].map((line) => (
          <g
            transform={`rotate(${(360 / points) * line},${c.x},${c.y})`}
            key={line}
          >
            <line
              x1={c.x}
              y1={c.y}
              x2={c.x}
              y2={c.y - r}
              stroke="black"
              strokeWidth={strokeWidth}
            />
            {spikes.map((spike, i) => (
              <g key={i}>
                {spike.shape === 'line' && (
                  <>
                    {[30, 150].map((angle) => (
                      <line
                        key={angle}
                        x1={c.x}
                        y1={spike.start}
                        x2={c.x + spike.length}
                        y2={spike.start}
                        stroke="black"
                        strokeWidth={strokeWidth}
                        transform={`rotate(${
                          spike.inverse ? angle : angle * -1
                        } ${c.x} ${spike.start})`}
                      />
                    ))}
                  </>
                )}
                {spike.shape === 'fork' && (
                  <>
                    {[30, 150].map((angle) => (
                      <g
                        key={angle}
                        transform={`rotate(${angle - 90} ${c.x} ${
                          spike.start
                        })`}
                      >
                        <Fork
                          x1={c.x}
                          y1={spike.start}
                          length={spike.length}
                          strokeWidth={strokeWidth}
                          triple={spike.triple}
                          split={spike.split}
                        />
                      </g>
                    ))}
                  </>
                )}
                {spike.shape === 'hexagon' && (
                  <Hexagon
                    cx={c.x}
                    cy={spike.start}
                    r={spike.length * 0.5}
                    strokeWidth={strokeWidth}
                  />
                )}
                {spike.shape === 'circle' && (
                  <Circle
                    cx={c.x}
                    cy={spike.start}
                    r={spike.length * 0.5}
                    strokeWidth={strokeWidth}
                  />
                )}
              </g>
            ))}
          </g>
        ))}
        <Safe width={width} height={height} safe={safe} onClick={onClick} />
      </Svg>
    </>
  )
}

Snowflake.defaultProps = {
  points: 6,
  strokeWidth: 2,
  width: 500,
  height: 500,
  onClick: () => {},
}

Snowflake.propTypes = {
  points: number,
  strokeWidth: number,
  width: number,
  height: number,
  onClick: func,
}

export default Snowflake
