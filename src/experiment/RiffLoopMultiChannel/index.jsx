import React from 'react'
import { array, number, object, string } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'
import Rect from '../../component/Rect'

const RiffLoopMultiChannel = ({
  audio,
  data,
  width,
  height,
  printWidth,
  printHeight,
  colors,
}) => {
  const c = { x: width / 2, y: height / 2 }
  const d = Math.min(width, height)
  const r1 = (d / 2) * 0.3
  const r2 = d / 2

  return (
    <div>
      {/* <div className="riff-loop-mask-wrapper">
        <div className="riff-loop-mask" style={{ animationDuration: '16s' }} />
      </div> */}
      <Svg
        width={`${printWidth}mm`}
        height={`${printHeight}mm`}
        viewBox={`0 0 ${width} ${height}`}
      >
        <style>{(() => `polyline { mix-blend-mode: multiply; }`)()}</style>
        {/* <circle cx={c.x} cy={c.y} r={r1} fill="red" fillOpacity="0.2" />
        <circle cx={c.x} cy={c.y} r={r2} fill="blue" fillOpacity="0.2" /> */}

        {data.map((channel, i) => (
          <Group key={i} label={`${i}`}>
            {channel.map((point, j) => {
              if (j % 2 !== 0) return null // Only do every 2nd line
              if (point === 0) return null
              const normalisedPoint = mapRange({
                value: point,
                min1: 0,
                max1: 1,
                min2: 0.1,
                max2: 1,
              })
              return (
                <Polyline
                  key={`left:${j}`}
                  points={[
                    [c.x, c.y - r1],
                    // [c.x, c.y - r1 + 10],
                    // [c.x, c.y - r1 + (point > 0 ? 10 : 0)],
                    // [c.x, c.y - r1 + 10 + r1 * point * 0.3],

                    // [c.x, c.y - r1 - (r2 - r1) * point],
                    [c.x, c.y - r1 - (r2 - r1) * normalisedPoint],
                  ]}
                  strokeWidth="2"
                  stroke={colors[i]}
                  strokeOpacity="0.8"
                  transform={`rotate(${0.5 * j + (1 / data.length) * i}, ${
                    c.x
                  }, ${c.y})`}
                />
              )
            })}
          </Group>
        ))}

        <Group label="% Placeholder">
          <Rect width={width} height={height} />
        </Group>
      </Svg>

      <div className="audio-player">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={audio} loop controls />
      </div>
    </div>
  )
}

RiffLoopMultiChannel.defaultProps = {
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

RiffLoopMultiChannel.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: object,
  audio: string,
  colors: array,
}

export default RiffLoopMultiChannel
