import React from 'react'
import { array, number, arrayOf, string } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'

const ThermoHygrometer = ({
  data,
  width,
  height,
  printWidth,
  printHeight,
  color1,
  color2,
}) => {
  const rawTemps = data.map((i) => i.temp)
  const rawHumidities = data.map((i) => i.humidity)
  const rawDates = data.map((i) => i.date)
  const tempLimits = {
    min: 15 || Math.min(...rawTemps),
    max: 20 || Math.max(...rawTemps),
  }
  const humiditiesLimits = {
    min: 48 || Math.min(...rawHumidities),
    max: 72 || Math.max(...rawHumidities),
  }
  const temps = rawTemps.map((i) => {
    return mapRange({
      value: i,
      min1: tempLimits.min,
      max1: tempLimits.max,
      min2: 0,
      max2: height,
    })
  })
  const humidities = rawHumidities.map((i) => {
    return mapRange({
      value: i,
      min1: humiditiesLimits.min,
      max1: humiditiesLimits.max,
      min2: 0,
      max2: height,
    })
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* <Group label="2 temperature">
        {temps.map((temp, i) => (
          <Polyline
            key={`temp:${i}`}
            points={[
              [(width / data.length) * i, height],
              [(width / data.length) * i, height - temp],
            ]}
            stroke={color1}
            strokeWidth="0.5"
          />
        ))}
      </Group> */}

      <Group label="1 temperature line">
        <Polyline
          points={temps.map((temp, i) => [
            (width / data.length) * i,
            height - temp,
          ])}
          stroke={color1}
          strokeWidth="2"
        />
      </Group>

      <Group label="1 humidity line">
        <Polyline
          points={humidities.map((humidity, i) => [
            (width / data.length) * i,
            height - humidity,
          ])}
          stroke={color2}
          strokeWidth="2"
        />
      </Group>

      <Group label="1 datelines">
        {rawDates.map((date, i) => {
          if (!date.includes('00:01:00')) return null
          return (
            <Polyline
              key={`humidity:${i}`}
              points={[
                [(width / data.length) * i, 0],
                [(width / data.length) * i, height],
              ]}
              stroke={color2}
              strokeWidth="2"
            />
          )
        })}
      </Group>

      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

ThermoHygrometer.defaultProps = {
  printWidth: 730 / 4,
  printHeight: 300 / 4,
  width: 730,
  height: 300,
  data: [],
  color1: 'blue',
  color2: 'red',
}

ThermoHygrometer.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: arrayOf(array),
  color1: string,
  color2: string,
}

export default ThermoHygrometer
