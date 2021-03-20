import React from 'react'
import { bool, number, string } from 'prop-types'

import randomSeeded from '../../lib/random-seeded'
import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Line from '../../component/Line'
import Rect from '../../component/Rect'

import One from './component/One'
import Two from './component/Two'
import Three from './component/Three'
import Four from './component/Four'
import Five from './component/Five'
import Six from './component/Six'
import Seven from './component/Seven'
import Eight from './component/Eight'

const Tiles = [One, Two, One, Two, Three, Four, Five, Six, Seven, Eight]
// const Tiles = [Three]

const TruchetTiles = ({
  debug,
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  seed,
}) => {
  const cells = cols * rows

  const colWidth = width / cols
  const rowHeight = height / rows

  let spaces = new Array(cells).fill(false)

  // const boxTypes = []

  const packedBoxes = []
  let packedBoxCount = 0

  // const testPlace = ({ type, top, left, spaces }) => {
  //   const tempSpaces = [...spaces]
  //   for (let row = top; row < type.height + top; row++) {
  //     for (let col = left; col < type.width + left; col++) {
  //       const toCheck = row * cols + col
  //       if (tempSpaces[toCheck]) {
  //         return false
  //       } else {
  //         tempSpaces[toCheck] = true
  //       }
  //     }
  //   }
  //   return tempSpaces
  // }

  const mapBoxes = () => {
    return null
    // boxTypes.map((type) =>
    //   [...Array(type.maxCount).keys()].map((i) => {
    //     let fits = false
    //     let left = 0
    //     let top = 0

    //     for (let retry = 0; retry < type.maxRetries; retry++) {
    //       left = randomInt(0, cols - type.width)
    //       top = randomInt(0, rows - type.height)
    //       fits = testPlace({ type, top, left, spaces })
    //       if (fits) break
    //     }

    //     if (!fits) return false
    //     spaces = fits

    //     packedBoxCount += type.width * type.height
    //     return packedBoxes.push({ ...type, left, top })
    //   })
    // )
  }

  const fillSpaces = () => {
    if (packedBoxCount >= cells) return
    spaces.map((space, i) => {
      if (!space) {
        packedBoxes.push({
          height: 1,
          width: 1,
          left: i % cols,
          top: Math.floor(i / cols),
        })
        spaces[i] = true
      }
      return null
    })
  }

  mapBoxes()
  fillSpaces()

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {debug && (
        <g id="Guides" opacity="0.25" className="debug">
          <Rect width={width} height={height} />
          {[...Array(cols).keys()].map((_, i) => (
            <Line
              key={i}
              x1={i * colWidth}
              y1={0}
              x2={i * colWidth}
              y2={height}
            />
          ))}
          {[...Array(rows).keys()].map((_, i) => (
            <Line
              key={i}
              x1={0}
              y1={i * rowHeight}
              x2={width}
              y2={i * rowHeight}
            />
          ))}
        </g>
      )}

      <g fill="none" stroke="#000" strokeWidth="0.5">
        {packedBoxes.map((box, i) => {
          const rotation =
            Math.floor(
              mapRange({
                value: randomSeeded(`${seed} ${i * i}`),
                min1: 0,
                max1: 1,
                min2: 0,
                max2: 4,
              })
            ) * 90
          const Tile =
            Tiles[
              Math.floor(
                mapRange({
                  value: randomSeeded(`${seed} ${i}`),
                  min1: 0,
                  max1: 1,
                  min2: 0,
                  max2: Tiles.length,
                })
              )
            ]
          return (
            <g
              key={i}
              transform={`translate(${box.left * colWidth}, ${
                box.top * rowHeight
              }) rotate(${rotation}, ${(box.width * colWidth) / 2}, ${
                (box.height * rowHeight) / 2
              })`}
              width={box.width * colWidth}
              height={box.height * rowHeight}
            >
              <Tile
                height={box.height * rowHeight}
                width={box.width * colWidth}
              />
            </g>
          )
        })}
      </g>
    </Svg>
  )
}

TruchetTiles.defaultProps = {
  printWidth: 160,
  printHeight: 160,
  seed: '',
  cols: 10,
  rows: 10,
}

TruchetTiles.propTypes = {
  debug: bool,
  width: number,
  height: number,
  cols: number,
  rows: number,
  printWidth: number,
  printHeight: number,
  seed: string,
}

export default TruchetTiles
