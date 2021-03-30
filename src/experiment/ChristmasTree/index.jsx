import React from 'react'
import { number, string } from 'prop-types'

import Svg from '../../component/Svg'

import pythagoras from '../../lib/pythagoras'

import Hexagon from '../../component/Hexagon'
import IsometricCube from '../../component/IsometricCube'

import Shine from './component/Shine'
import Star from './component/Star'

import config from './data/config'
import types from './data/types'

const ChristmasTree = ({ size, printWidth, printHeight, seed }) => {
  const colsLarge = 15
  const colsSmall = colsLarge - 1
  const rowPairs = 11
  const rows = rowPairs * 2 + 1
  const radius = size / 2
  // const hex = {
  //   height: size,
  //   sideLength: radius,
  //   width: radius * Math.sqrt(3),
  //   perimiter: radius * 6,
  // }

  const colWidth = radius * Math.sqrt(3)
  const rowHeight = size
  const rowOverlapHeight = pythagoras({ a: colWidth / 2, c: radius })

  const rawWidth = colWidth * colsLarge + colWidth / 2
  const width = rawWidth - colWidth / 2
  const height = rows * (rowHeight - rowOverlapHeight) + rowOverlapHeight

  // TODO: IDEAS
  //
  // Add a "realism" prop (0-1) which changes each time from a basic
  // cube (0) to a "realistic" feature (1).
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(rows).keys()].map((row) => {
        const cols = row % 2 ? colsLarge : colsSmall
        const oddRow = cols % 2 !== 1

        return [...Array(cols).keys()].map((col) => {
          const type = config.find((type) =>
            type.cells.includes(`${row + 1}:${col + 1}`)
          )
          const data = type ? types[type.type] : {}
          const scale = 0.9
          return (
            <g
              key={`${row}:${col}`}
              transform={`translate(${
                col * colWidth + (oddRow ? colWidth / 2 : 0)
              }, ${row * (rowHeight - rowOverlapHeight)})`}
            >
              <Hexagon
                cx={colWidth / 2}
                cy={rowHeight / 2}
                r={(rowHeight / 2) * 0.9}
                // fill={data?.color || 'whitesmoke'}
                stroke="lightgrey"
                strokeWidth="0.1mm"
              />
              <g
                transform={`translate(${colWidth * ((1 - scale) / 2)}, ${
                  rowHeight * ((1 - scale) / 2)
                })`}
              >
                {[
                  'shineLeft',
                  'shineRight',
                  'shineUpLeft',
                  'shineUpRight',
                ].includes(type?.type) && (
                  <Shine
                    rotation={data?.rotation}
                    r={(rowHeight / 2) * scale}
                    cx={(colWidth / 2) * scale}
                    cy={(rowHeight / 2) * scale}
                    stroke={data?.color}
                  />
                )}
                {type?.type === 'needles' && (
                  <IsometricCube
                    height={rowHeight * scale}
                    hatchTop={colsLarge / 2 >= col + 1 ? 5 : 0}
                    hatchTop2={colsLarge / 2 <= col + 1 ? 5 : 0}
                    hatchLeft={5}
                    // hatchLeft2={Math.floor(5)}
                    hatchRight={Math.floor(5)}
                    // hatchRight2={7}

                    hatchTopColor={data?.color || 'lightgrey'}
                    hatchLeftColor={data?.color || 'lightgrey'}
                    hatchRightColor={data?.color || 'lightgrey'}
                    outline={false}
                    // inline={false}
                    inlineColor={data?.color || 'lightgrey'}
                  />
                )}
                {type?.type === 'star' && (
                  <Star
                    r={(rowHeight / 2) * scale}
                    cx={(colWidth / 2) * scale}
                    cy={(rowHeight / 2) * scale}
                    stroke={data?.color}
                    lines
                    linesLength={0.7}
                  />
                )}
                {type?.type &&
                  ![
                    'needles',
                    'star',
                    'shineLeft',
                    'shineRight',
                    'shineUpLeft',
                    'shineUpRight',
                  ].includes(type?.type) && (
                    <IsometricCube
                      height={rowHeight * scale}
                      // hatchTop={3}
                      hatchTop2={Math.floor(3)}
                      // hatchLeft={5}
                      hatchLeft2={Math.floor(5)}
                      hatchRight={Math.floor(7)}
                      // hatchRight2={7}

                      outlineColor={
                        data?.colorDark || data?.color || 'lightgrey'
                      }
                      inlineColor={
                        data?.colorDark || data?.color || 'lightgrey'
                      }
                      hatchTopColor={data?.color || 'lightgrey'}
                      hatchLeftColor={data?.color || 'lightgrey'}
                      hatchRightColor={data?.color || 'lightgrey'}
                    />
                  )}
              </g>
            </g>
          )
        })
      })}
    </Svg>
  )
}

ChristmasTree.defaultProps = {
  printWidth: 160,
  printHeight: 220,
  seed: '',
}

ChristmasTree.propTypes = {
  printWidth: number,
  printHeight: number,
  size: number,
  seed: string,
}

export default ChristmasTree
