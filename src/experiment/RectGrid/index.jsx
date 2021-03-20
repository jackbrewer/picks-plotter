import React from 'react'
import { bool, func, number, string } from 'prop-types'

import Svg from '../../component/Svg'
import Line from '../../component/Line'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'

const RectGrid = ({
  width,
  height,
  cols,
  rows,
  debug,
  childFunc,
  corners,
  cornerRadius,
  printWidth,
  printHeight,
  safe,
  seed,
}) => {
  const colWidth = width / (cols + safe)
  const rowHeight = height / (rows + safe)
  const cornerProps = { strokeWidth: 0.4 }

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {debug && (
        <g id="Guides" opacity="0.25" className="debug">
          <Rect width={width} height={height} />
          {[...Array(cols + safe).keys()].map((col, i) => (
            <Line
              key={i}
              x1={i * colWidth}
              y1={0}
              x2={i * colWidth}
              y2={height}
            />
          ))}
          {[...Array(rows + safe).keys()].map((row, i) => (
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
      <g transform={`translate(${colWidth * safe}, ${rowHeight * safe})`}>
        {[...Array(cols * rows).keys()].map((box, i) => {
          const colNumber = i % cols
          const rowNumber = Math.floor(i / cols)

          return (
            <g
              key={i}
              transform={`translate(${colNumber * colWidth}, ${
                rowNumber * rowHeight
              })`}
            >
              <g>
                {childFunc({
                  width: colWidth,
                  height: rowHeight,
                  i,
                  col: colNumber,
                  row: rowNumber,
                  totalCount: cols * rows,
                  seed,
                })}
              </g>
              {corners && (
                <>
                  {colNumber === 0 && rowNumber === 0 && (
                    <g>
                      <Polyline
                        {...cornerProps}
                        points={[
                          [-cornerRadius, 0],
                          [cornerRadius, 0],
                        ]}
                      />
                      <Polyline
                        {...cornerProps}
                        points={[
                          [0, -cornerRadius],
                          [0, cornerRadius],
                        ]}
                      />
                    </g>
                  )}

                  {colNumber === 0 && (
                    <g>
                      <Polyline
                        {...cornerProps}
                        points={[
                          [-cornerRadius, rowHeight],
                          [cornerRadius, rowHeight],
                        ]}
                      />
                      <Polyline
                        {...cornerProps}
                        points={[
                          [0, rowHeight - cornerRadius],
                          [0, rowHeight + cornerRadius],
                        ]}
                      />
                    </g>
                  )}
                  {rowNumber === 0 && (
                    <g>
                      <Polyline
                        {...cornerProps}
                        points={[
                          [colWidth - cornerRadius, 0],
                          [colWidth + cornerRadius, 0],
                        ]}
                      />
                      <Polyline
                        {...cornerProps}
                        points={[
                          [colWidth, -cornerRadius],
                          [colWidth, cornerRadius],
                        ]}
                      />
                    </g>
                  )}
                  <g>
                    <Polyline
                      {...cornerProps}
                      points={[
                        [colWidth - cornerRadius, rowHeight],
                        [colWidth + cornerRadius, rowHeight],
                      ]}
                    />
                    <Polyline
                      {...cornerProps}
                      points={[
                        [colWidth, rowHeight - cornerRadius],
                        [colWidth, rowHeight + cornerRadius],
                      ]}
                    />
                  </g>
                </>
              )}
            </g>
          )
        })}
      </g>
    </Svg>
  )
}

RectGrid.defaultProps = {
  childFunc: () => {},
  cornerRadius: 3,
  printWidth: 160,
  printHeight: 160,
  safe: 0,
  seed: '',
}

RectGrid.propTypes = {
  debug: bool,
  width: number,
  height: number,
  cols: number,
  rows: number,
  childFunc: func,
  corners: bool,
  cornerRadius: number,
  printWidth: number,
  printHeight: number,
  safe: number,
  seed: string,
}

export default RectGrid
