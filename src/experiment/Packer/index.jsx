import React from 'react'
import { bool } from 'prop-types'

import Svg from '../../component/Svg'
import Line from '../../component/Line'
import Rect from '../../component/Rect'
import Hatch from '../Squares/component/Hatch'

import randomInt from '../../lib/random-int'
import { randomCmy } from '../../lib/random-cmyk'

const Packer = ({ hatch }) => {
  const width = 600
  const height = 600

  const colCount = 20
  const rowCount = 20
  const boxCount = colCount * rowCount

  const colWidth = width / colCount
  const rowHeight = height / rowCount

  let spaces = new Array(colCount * rowCount).fill(false)

  const boxTypes = [
    { name: '6x6', height: 6, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '4x2', height: 4, width: 2, maxCount: 3, maxRetries: 30 },
    { name: '2x4', height: 2, width: 4, maxCount: 3, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
    { name: '1x6', height: 1, width: 6, maxCount: 3, maxRetries: 30 },
    { name: '6x1', height: 6, width: 1, maxCount: 2, maxRetries: 30 },
    { name: '2x2', height: 2, width: 2, maxCount: 8, maxRetries: 30 },
    { name: '2x1', height: 2, width: 1, maxCount: 4, maxRetries: 30 },
  ]

  const packedBoxes = []
  let packedBoxCount = 0

  const testPlace = ({ type, top, left, spaces }) => {
    const tempSpaces = [...spaces]
    for (let row = top; row < type.height + top; row++) {
      for (let col = left; col < type.width + left; col++) {
        const toCheck = row * colCount + col
        if (tempSpaces[toCheck]) {
          return false
        } else {
          tempSpaces[toCheck] = true
        }
      }
    }
    return tempSpaces
  }

  const mapBoxes = () => {
    boxTypes.map((type) =>
      [...Array(type.maxCount).keys()].map((i) => {
        let fits = false
        let left = 0
        let top = 0

        for (let retry = 0; retry < type.maxRetries; retry++) {
          left = randomInt(0, colCount - type.width)
          top = randomInt(0, rowCount - type.height)
          fits = testPlace({ type, top, left, spaces })
          if (fits) break
        }

        if (!fits) return false
        spaces = fits

        packedBoxCount += type.width * type.height
        return packedBoxes.push({ ...type, left, top })
      })
    )
  }

  const fillSpaces = () => {
    if (packedBoxCount >= boxCount) return
    spaces.map((space, i) => {
      if (!space) {
        packedBoxes.push({
          height: 1,
          width: 1,
          left: i % colCount,
          top: Math.floor(i / colCount),
        })
        spaces[i] = true
      }
      return null
    })
  }

  mapBoxes()
  fillSpaces()

  return (
    <Svg width="100mm" height="100mm" viewBox={`0 0 ${width} ${height}`}>
      <g id="Guides" opacity="0.25" className="debug">
        <Rect width={width} height={height} />
        {[...Array(colCount).keys()].map((col, i) => (
          <Line
            key={i}
            x1={i * colWidth}
            y1={0}
            x2={i * colWidth}
            y2={height}
          />
        ))}
        {[...Array(rowCount).keys()].map((row, i) => (
          <Line
            key={i}
            x1={0}
            y1={i * rowHeight}
            x2={width}
            y2={i * rowHeight}
          />
        ))}
      </g>
      <g>
        {packedBoxes.map((box, i) => {
          // const area = Math.max(box.width, box.height)
          const hatchConfig = {
            // rotate: randomInt(-45, 45),
            rotate: Math.round(Math.random()) ? 30 : -30,
            // rotate: 0,
            // space: randomInt(4, 12),
            space: 7,
          }
          return (
            <g key={i}>
              {/* <Rect
                x={box.left * colWidth}
                y={box.top * rowHeight}
                width={box.width * colWidth}
                height={box.height * rowHeight}
                // fill={box.name ? '#0f0' : '#555'}
                fill="none"
                opacity={0.5}
                stroke="none"
              /> */}
              <Rect
                x={box.left * colWidth + 4}
                y={box.top * rowHeight + 4}
                width={box.width * colWidth - 8}
                height={box.height * rowHeight - 8}
                stroke="#000"
                rx={1}
              />
              {/* {children} */}
              {hatch && (
                <svg
                  x={box.left * colWidth + 8}
                  y={box.top * rowHeight + 8}
                  width={box.width * colWidth - 16}
                  height={box.height * rowHeight - 16}
                >
                  <clipPath id={`clip:${i}`}>
                    <rect
                      x={0}
                      y={0}
                      width={box.width * colWidth - 16}
                      height={box.height * rowHeight - 16}
                    />
                  </clipPath>
                  <g clipPath={`url(#clip:${i})`}>
                    <Hatch
                      width={box.width * colWidth - 8}
                      height={box.height * rowHeight - 8}
                      rotate={hatchConfig.rotate}
                      space={hatchConfig.space}
                      stroke={randomCmy()}
                    />
                    <Hatch
                      width={box.width * colWidth - 8}
                      height={box.height * rowHeight - 8}
                      rotate={hatchConfig.rotate * -1}
                      space={hatchConfig.space}
                      stroke={randomCmy()}
                    />
                  </g>
                </svg>
              )}
            </g>
          )
        })}
      </g>
    </Svg>
  )
}

Packer.propTypes = {
  hatch: bool,
}

export default Packer
