import React from 'react'
import { array, number, arrayOf } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'

const dayLength = 24 * 60

const normaliseTime = (time) => {
  const parts = time.split(':')
  const mins = +parts[0] * 60 + +parts[1]
  return mapRange({
    value: mins,
    min1: 0,
    max1: dayLength,
    min2: 0,
    max2: 1,
  })
}

const getTemperatureColor = (temp) => {
  if (temp <= 0) return 'blue'
  if (temp <= 5) return 'lightblue'
  if (temp <= 10) return 'green'
  if (temp <= 15) return 'yellow'
  if (temp <= 20) return 'orange'
  if (temp <= 25) return 'red'
  if (temp <= 30) return 'maroon'
  if (temp <= 50) return 'black'
  return 'lime'
}

const formatData = ({ data }) =>
  data.map((day) => {
    return {
      sunrise: normaliseTime(day.daylight.sunrise),
      sunset: normaliseTime(day.daylight.sunset),
      tempDay: day.temperature.day.max,
      tempNight: day.temperature.night.min,
      first: day.date.match(/(-01)$/),
    }
  })

const DayTemperature = ({ data, width, height, printWidth, printHeight }) => {
  const days = formatData({ data })
  const scaledHeight = height * 0.96
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group label="2 Daylight">
        {days.map((day, i) => (
          <Polyline
            key={`daylight:${i}`}
            points={[
              [
                (width / data.length) * i,
                height * 0.02 + scaledHeight - scaledHeight * day.sunrise,
              ],
              [
                (width / data.length) * i,
                height * 0.02 + scaledHeight * (1 - day.sunset),
              ],
            ]}
            stroke={getTemperatureColor(day.tempDay)}
            strokeWidth="0.5"
          />
        ))}
      </Group>
      <Group label="1 Night">
        {days.map((day, i) => (
          <Polyline
            key={i}
            points={[
              [(width / data.length) * i, height * 0.02 + scaledHeight],
              [
                (width / data.length) * i,
                height * 0.02 + scaledHeight - scaledHeight * day.sunrise,
              ],
            ]}
            stroke={getTemperatureColor(day.tempNight)}
            strokeWidth="0.5"
          />
        ))}
        {days.map((day, i) => (
          <Polyline
            key={`evening:${i}`}
            points={[
              [(width / data.length) * i, height * 0.02 + 0],
              [
                (width / data.length) * i,
                height * 0.02 + scaledHeight * (1 - day.sunset),
              ],
            ]}
            stroke={getTemperatureColor(day.tempNight)}
            strokeWidth="0.5"
          />
        ))}
      </Group>

      <Group label="2 MonthMarkerss">
        {days.map((day, i) => {
          if (!day.first && i !== 364) return null
          return (
            <g key={`monthmarker:${i}`}>
              <Polyline
                key={`daylight:${i}`}
                points={[
                  [(width / data.length) * i, 0],
                  [(width / data.length) * i, height * 0.02],
                ]}
                stroke="black"
                strokeWidth="0.5"
              />
              <Polyline
                points={[
                  [(width / data.length) * i, height * 0.02 + scaledHeight],
                  [(width / data.length) * i, height],
                ]}
                stroke="black"
                strokeWidth="0.5"
              />
            </g>
          )
        })}
      </Group>
      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

DayTemperature.defaultProps = {
  printWidth: 730 / 4,
  printHeight: 300 / 4,
  width: 730,
  height: 300,
  data: [],
}

DayTemperature.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: arrayOf(array),
}

export default DayTemperature
