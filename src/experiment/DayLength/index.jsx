import React from 'react'
import { array, number, arrayOf, string } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'

const normaliseTime = (time) => {
  const parts = time.split(':')
  const mins = +parts[0] * 60 + +parts[1]
  return mapRange({
    value: mins,
    min1: 0,
    max1: 24 * 60, // one day
    min2: 0,
    max2: 1,
  })
}

const formatData = ({ data }) =>
  data.map((day) => {
    return {
      sunrise: normaliseTime(day.sunrise),
      sunset: normaliseTime(day.sunset),
      first: day.date.match(/(-01)$/),
    }
  })

const DayLength = ({
  data,
  width,
  height,
  printWidth,
  printHeight,
  color1,
  color2,
}) => {
  const days = formatData({ data })
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
              [(width / data.length) * i, height - height * day.sunrise],
              [(width / data.length) * i, height * (1 - day.sunset)],
            ]}
            stroke={day.first ? 'black' : color2}
            strokeWidth="0.5"
          />
        ))}
      </Group>

      {/* <Group label="2 Daylight Full">
        {days.map((day, i) => (
          <Polyline
            key={`daylight:${i}`}
            points={[
              [(width / data.length) * i, 0],
              [(width / data.length) * i, height],
            ]}
            stroke={color1}
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
        ))}
      </Group> */}

      <Group label="1 Night">
        {days.map((day, i) => (
          <Polyline
            key={i}
            points={[
              [(width / data.length) * i, height],
              [(width / data.length) * i, height - height * day.sunrise],
            ]}
            stroke={day.first ? 'black' : color1}
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
        ))}
        {days.map((day, i) => (
          <Polyline
            key={`evening:${i}`}
            points={[
              [(width / data.length) * i, 0],
              [(width / data.length) * i, height * (1 - day.sunset)],
            ]}
            stroke={color1}
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
        ))}
      </Group>

      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

DayLength.defaultProps = {
  printWidth: 730 / 4,
  printHeight: 300 / 4,
  width: 730,
  height: 300,
  data: [],
  color1: 'blue',
  color2: 'red',
}

DayLength.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: arrayOf(array),
  color1: string,
  color2: string,
}

export default DayLength
