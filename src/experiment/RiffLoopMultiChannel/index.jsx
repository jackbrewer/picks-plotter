import React from 'react'
import { array, arrayOf, number, string } from 'prop-types'

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
  multipliers,
  innerPadding,
  innerRadiusMultiplier,
  lyricRadiusMultiplier,
  lyrics,
  lyricsColor,
  lyricsSize,
}) => {
  const c = { x: width / 2, y: height / 2 }
  const d = Math.min(width, height)
  const r1 = (d / 2) * innerRadiusMultiplier
  const r2 = d / 2
  const r1inset = r1 * lyricRadiusMultiplier

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
              // if (i !== 3 && j % 2 !== 0) return null // Only do every 2nd line
              if (i !== 3 && j % 2 !== 0) return null // Special case to make fourth layer more dense
              if (point === 0) return null
              const multipliedPoint = multipliers[i]
                ? point * multipliers[i]
                : point
              const normalisedPoint = mapRange({
                value: multipliedPoint,
                min1: 0,
                max1: 1,
                min2: innerPadding,
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

        {/* {lyrics && (
          <Group label="% Lyrics" transform={`rotate(90, ${c.x}, ${c.y})`}>
            <defs>
              <path
                id="heading-arc"
                // d='M ' + headingOffset + ' ' + totalR + ' a ' + headingR + ' ' + headingR + ' 0 1 1 ' + headingD + ' 0'
                // d={`M ${10} ${r2} a ${r1} ${r1} 0 1 1 ${r1 * 2} 0`}
                d={`
              M ${c.x - r1inset}, ${c.y}
              a ${r1inset},${r1inset} 0 1,1 ${r1inset * 2},0
              a ${r1inset},${r1inset} 0 1,1 ${-1 * r1inset * 2},0
            `}
              />
            </defs>
            <use xlinkHref="#heading-arc" fill="none" />
            <text xmlSpace="preserve" fontSize="18">
              <textPath xlinkHref="#heading-arc">{lyrics}</textPath>
            </text>
          </Group>
        )} */}

        {lyrics && (
          <Group label="% Lyrics">
            {lyrics.split('').map((char, i) => (
              <text
                key={i}
                transform={`rotate(${(360 / lyrics.length) * i}, ${c.x}, ${
                  c.y
                })`}
                textAnchor="middle"
                x={c.x}
                y={c.y - r1inset}
                fontFamily="Open Sans, sans-serif"
                fontSize={lyricsSize}
                fill={lyricsColor}
              >
                {char}
              </text>
            ))}
          </Group>
        )}

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
  innerPadding: 0,
  multipliers: [],
  innerRadiusMultiplier: 0.3,
  lyricRadiusMultiplier: 1,
  lyricsColor: 'black',
  lyricsSize: 18,
}

RiffLoopMultiChannel.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: array,
  audio: string,
  colors: array,
  multipliers: arrayOf(number),
  innerPadding: number,
  innerRadiusMultiplier: number,
  lyrics: string,
  lyricRadiusMultiplier: number,
  lyricsColor: string,
  lyricsSize: number,
}

export default RiffLoopMultiChannel
