import React, { Fragment } from 'react'
import { bool, number } from 'prop-types'
import pythagoras from '../../../lib/pythagoras'
import anglesFromSides from '../../../lib/triangle/angles-from-sides'
import getStrokeWidth from '../lib/getStrokeWidth'

const getArcOffset = ({ i, lines, offset }) => {
  if (offset) {
    return (1 / lines) * (i + 0.5)
  }
  return (1 / (lines - 1)) * i
}

const TileCorner = ({ x, y, w, h, rot, lines, offset, offsetJoin, edges }) => {
  const hyp = pythagoras({ a: w, b: h })

  return (
    <g transform={`rotate(${rot}, ${x + w / 2}, ${y + h / 2})`}>
      {/* {[...Array(lines).keys()].map((i) => {
        const m = getArcOffset({i, offset})
        return (
          <path
            key={i}
            d={[
              `M ${x + w}, ${y + h * (1 - m)}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w - w * m}, ${y + h}`,
            ]}
            stroke="lightgrey"
          />
        )
      })} */}

      {/* {[...Array(lines + 1).keys()].map((i) => {
        const angleStep = (90 / (lines + 1)) * i
        return (
          <line
            key={100000 + i}
            x1={0}
            y1={0}
            x2={w}
            y2={0}
            transform={`rotate(${angleStep},${0},${0})`}
          />
        )
      })} */}

      {[...Array(lines).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        if (!offsetJoin && hyp < w + w * m) return null
        if (offsetJoin && hyp < w - (w / lines) * 0.5 + w * m) return null
        return (
          <path
            key={i}
            d={[
              `M ${x + w}, ${y + h * (1 - m)}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w - w * m}, ${y + h}`,
            ]}
            strokeWidth={getStrokeWidth({ edges, i, lines })}
            // stroke="green"
          />
        )
      })}

      {[...Array(lines).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        if (!offsetJoin && hyp > w + w * m) return null
        if (offsetJoin && hyp > w - (w / lines) * 0.5 + w * m) return null

        const angle = offsetJoin
          ? anglesFromSides({
              a: w * m,
              b: w - (w / lines) * 0.5,
              c: hyp,
            }).a
          : anglesFromSides({
              a: w * m,
              b: w,
              c: hyp,
            }).a

        const rad = (Math.PI / 180) * (angle + 45)
        const end = {}
        if (offsetJoin) {
          end.x = (w - (w / lines) * 0.5) * Math.sin(rad)
          end.y = Math.sqrt(
            Math.pow(w - (w / lines) * 0.5, 2) - Math.pow(end.x, 2)
          )
        } else {
          end.x = w * Math.sin(rad)
          end.y = Math.sqrt(Math.pow(w, 2) - Math.pow(end.x, 2))
        }

        return (
          <Fragment key={i}>
            {/* <line x1={end.x} y1={0} x2={end.x} y2={h} stroke="purple" />
            <line x1={0} y1={end.y} x2={w} y2={end.y} stroke="purple" /> */}
            <path
              d={[
                `M ${x + w}, ${y + h * (1 - m)}`,
                `A ${h * m}, ${w * m} 0,0,0 ${x + end.x}, ${y + end.y}`,
              ]}
              strokeWidth={getStrokeWidth({ edges, i, lines })}
              // stroke="orange"
            />
            <path
              d={[
                `M ${x + end.y}, ${y + end.x}`,
                `A ${h * m}, ${w * m} 0,0,0 ${x + w * (1 - m)}, ${y + h}`,
              ]}
              strokeWidth={getStrokeWidth({ edges, i, lines })}
              // stroke="blue"
            />
          </Fragment>
        )
      })}

      {[...Array(lines).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        return (
          <path
            key={i}
            d={[
              `M ${x}, ${y + h - h * (1 - m)}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w * m}, ${y}`,
            ]}
            strokeWidth={getStrokeWidth({ edges, i, lines })}
            // stroke="black"
          />
        )
      })}
    </g>
  )
}

TileCorner.propTypes = {
  x: number,
  y: number,
  w: number,
  h: number,
  rot: number,
  lines: number,
  offset: bool,
  offsetJoin: bool,
  edges: bool,
}

export default TileCorner
