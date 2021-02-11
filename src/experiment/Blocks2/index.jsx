import React from 'react'
import { number } from 'prop-types'

const colours = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'purple',
  'black',
  'magenta',
  'grey',
  'red',
]

const getBlockTypes = (count) => {
  const blockTypes = []
  for (let i = count; i >= count / 2; i--) {
    const split = count - i
    const splitArr = [count - split, split]
    blockTypes.push(splitArr)
  }
  return blockTypes
}

const Blocks2 = ({ max, size }) => {
  const blockTypes = [...Array(max).keys()].map((i) => getBlockTypes([i + 1]))
  let colX = 0
  let blockY = 0
  return (
    <>
      {blockTypes.map((blockType, i) => {
        const x = colX
        colX += blockType.length * 2
        return (
          <g
            key={`blockType:${i}`}
            className="col"
            transform={`translate(${x * size}, 0)`}
          >
            {blockType.map((block, j) => {
              blockY = 0
              return (
                <g
                  key={`block:${j}`}
                  className="group"
                  transform={`translate(0, ${(max - i) * size})`}
                >
                  {block.map((blockPart, k) => {
                    if (blockPart === 0) return null
                    const y = blockY
                    blockY += blockPart
                    return (
                      <rect
                        key={`blockPart:${k}`}
                        x={j * size * 2}
                        y={y * size}
                        width={size}
                        height={size * blockPart}
                        fill="none"
                        // fill={colours[blockPart - 1]}
                        stroke={colours[blockPart - 1] || '#000'}
                        strokeWidth="2"
                      />
                    )
                  })}
                </g>
              )
            })}
          </g>
        )
      })}
    </>
  )
}

Blocks2.defaultProps = { max: 9, size: 10 }

Blocks2.propTypes = { max: number, size: number }

export default Blocks2
