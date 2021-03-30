import React from 'react'
import { bool, number, string } from 'prop-types'

import Hexagon from '../../component/Hexagon'
import Polyline from '../../component/Polyline'

const IsometricCube = ({
  height,
  hatchTop,
  hatchLeft,
  hatchRight,
  hatchTop2,
  hatchLeft2,
  hatchRight2,
  hatchTopColor,
  hatchLeftColor,
  hatchRightColor,
  outline,
  outlineColor,
  inline,
  inlineColor,
}) => {
  const width = (height / 2) * Math.sqrt(3)
  return (
    <g>
      {/* Top Hatching */}
      {hatchTop &&
        [...Array(hatchTop).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(${(width / -2 / (hatchTop + 1)) * (i + 1)}, ${
              (height / 2 / -2 / (hatchTop + 1)) * (i + 1)
            }) rotate(${60}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchTopColor}
            />
          </g>
        ))}
      {hatchTop2 &&
        [...Array(hatchTop2).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(${(width / 2 / (hatchTop2 + 1)) * (i + 1)}, ${
              (height / 2 / -2 / (hatchTop2 + 1)) * (i + 1)
            }) rotate(${-60}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchTopColor}
            />
          </g>
        ))}

      {/* Left Hatching */}
      {hatchLeft &&
        [...Array(hatchLeft).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(0, ${
              (height / 2 / (hatchLeft + 1)) * (i + 1)
            }) rotate(${-60}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchLeftColor}
            />
          </g>
        ))}
      {hatchLeft2 &&
        [...Array(hatchLeft2).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(${
              (width / -2 / (hatchLeft2 + 1)) * (i + 1)
            }, ${
              (height / 2 / -2 / (hatchLeft2 + 1)) * (i + 1)
            }) rotate(${180}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchLeftColor}
            />
          </g>
        ))}

      {/* Right Hatching */}
      {hatchRight &&
        [...Array(hatchRight).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(0, ${
              (height / 2 / (hatchRight + 1)) * (i + 1)
            }) rotate(${60}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchRightColor}
            />
          </g>
        ))}
      {hatchRight2 &&
        [...Array(hatchRight2).keys()].map((i) => (
          <g
            key={i}
            transform={`translate(${
              (width / 2 / (hatchRight2 + 1)) * (i + 1)
            }, ${
              (height / 2 / -2 / (hatchRight2 + 1)) * (i + 1)
            }) rotate(${180}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.4}
              stroke={hatchRightColor}
            />
          </g>
        ))}

      {outline && (
        <Hexagon
          cx={width / 2}
          cy={height / 2}
          r={height / 2}
          strokeWidth={1}
          stroke={outlineColor}
        />
      )}

      {inline &&
        [0, 1, 2].map((i) => (
          <g
            key={i}
            transform={`rotate(${120 * i + 60}, ${width / 2}, ${height / 2})`}
          >
            <Polyline
              points={[
                [width / 2, 0],
                [width / 2, height / 2],
              ]}
              strokeWidth={0.8}
              stroke={inlineColor}
            />
          </g>
        ))}
    </g>
  )
}

IsometricCube.defaultProps = {
  hatchTopColor: 'black',
  hatchLeftColor: 'black',
  hatchRightColor: 'black',
  outlineColor: 'black',
  inlineColor: 'black',
  outline: true,
  inline: true,
}

IsometricCube.propTypes = {
  height: number,
  hatchTop: number,
  hatchLeft: number,
  hatchRight: number,
  hatchTop2: number,
  hatchLeft2: number,
  hatchRight2: number,
  hatchTopColor: string,
  hatchLeftColor: string,
  hatchRightColor: string,
  outlineColor: string,
  inlineColor: string,
  outline: bool,
  inline: bool,
}

export default IsometricCube
