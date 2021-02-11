import React from 'react'
import { number, object, string } from 'prop-types'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'
import Rect from '../../component/Rect'

const RiffLoop = ({
  audio,
  data,
  width,
  height,
  printWidth,
  printHeight,
  color1,
  color2,
  balanceL,
  balanceR,
}) => {
  const c = { x: width / 2, y: height / 2 }
  const d = Math.min(width, height)
  const r1 = (d / 2) * 0.3
  const r2 = d / 2

  return (
    <div>
      <Svg
        width={`${printWidth}mm`}
        height={`${printHeight}mm`}
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* <circle cx={c.x} cy={c.y} r={r1} fill="red" fillOpacity="0.2" />
        <circle cx={c.x} cy={c.y} r={r2} fill="blue" fillOpacity="0.2" /> */}
        <Group label="1 Left">
          {data.left &&
            data.left.map((point, i) => {
              if (i % 2 === 0) return null
              return (
                <Polyline
                  key={`left:${i}`}
                  points={[
                    [c.x, c.y - r1],
                    [c.x, c.y - r1 - (r2 - r1) * point * balanceL],
                  ]}
                  strokeWidth="0.5"
                  stroke={color1}
                  strokeOpacity="0.7"
                  transform={`rotate(${0.5 * i}, ${c.x}, ${c.y})`}
                />
              )
            })}
        </Group>
        <Group label="2 Right">
          {data.right &&
            data.right.map((point, i) => {
              if (i % 2 === 0) return null
              return (
                <Polyline
                  key={`right:${i}`}
                  points={[
                    [c.x, c.y - r1],
                    [c.x, c.y - r1 - (r2 - r1) * point * balanceR],
                  ]}
                  strokeWidth="0.5"
                  stroke={color2}
                  strokeOpacity="0.7"
                  transform={`rotate(${0.5 * i}, ${c.x}, ${c.y})`}
                />
              )
            })}
        </Group>
        <Group label="% Placeholder">
          <Rect width={width} height={height} />
        </Group>
      </Svg>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={audio} loop controls />
    </div>
  )
}

RiffLoop.defaultProps = {
  printWidth: 180,
  printHeight: 180,
  width: 1000,
  height: 1000,
  data: {},
  audio: '',
  color1: 'blue',
  color2: 'red',
  balanceL: 1,
  balanceR: 1,
}

RiffLoop.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: object,
  audio: string,
  color1: string,
  color2: string,
  balanceL: number,
  balanceR: number,
}

export default RiffLoop
