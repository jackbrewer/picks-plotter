import React from 'react'
import { array, number, arrayOf, string } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'

// https://tides4fishing.com/uk/england/bude

/*

copy(
  [...document.querySelectorAll('#tabla_mareas .tabla_mareas_fila[title]')].map(
    row => ({
      date: [
        row.querySelector('.tabla_mareas_dia').innerText.replace(/\D/g, ''),
        document.querySelector('#tabla_mareas_mes_mes').innerText,
        document.querySelector('#tabla_mareas_mes_ano').innerText
      ].join(' '),
      sunrise: row.querySelector('.tabla_mareas_salida_puesta_sol_salida').innerText.replace(' h', ''),
      sunset: row.querySelector('.tabla_mareas_salida_puesta_sol_puesta').innerText.replace(' h', ''),
      tides: [...row.querySelectorAll('.tabla_mareas_marea_hora')].map(i =>
        i.innerText.replace(' h', '')
      )
    })
  )
)

*/

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

const Tides = ({
  data,
  width,
  height,
  printWidth,
  printHeight,
  color1,
  color2,
}) => {
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group label="2 lines">
        {data.map((day, i) =>
          day.tides.map((tide, j) => (
            <Polyline
              key={`temp:${j}`}
              points={[
                [(width / data.length) * i, height],
                [
                  (width / data.length) * i,
                  height - height * normaliseTime(tide),
                ],
              ]}
              stroke={color1}
              strokeWidth="2"
              strokeOpacity="0.25"
            />
          ))
        )}
      </Group>

      {/* <Group label="1 humidity line">
        <Polyline
          points={humidities.map((humidity, i) => [
            (width / data.length) * i,
            height - humidity,
          ])}
          stroke={color2}
          strokeWidth="2"
        />
      </Group> */}

      <Group label="1 datelines">
        {data.map((day, i) => {
          if (!day.date.match(/^1 /)) return null
          return (
            <Polyline
              key={`humidity:${i}`}
              points={[
                [(width / data.length) * i, 0],
                [(width / data.length) * i, height],
              ]}
              stroke={color2}
              strokeWidth="4"
            />
          )
        })}
      </Group>

      {/* <Group label="1 humidity">
        {humidities.map((humidity, i) => (
          <Polyline
            key={`humidity:${i}`}
            points={[
              [(width / data.length) * i, height],
              [(width / data.length) * i, height - humidity],
            ]}
            stroke={color2}
            strokeWidth="0.5"
          />
        ))}
      </Group> */}

      {/* <Group label="1 Night">
        {days.map((day, i) => (
          <Polyline
            key={i}
            points={[
              [(width / data.length) * i, height],
              [(width / data.length) * i, height - height * day.sunrise],
            ]}
            stroke={color1}
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
      </Group> */}

      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

Tides.defaultProps = {
  printWidth: 730 / 4,
  printHeight: 300 / 4,
  width: 730,
  height: 300,
  data: [],
  color1: 'blue',
  color2: 'red',
}

Tides.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  data: arrayOf(array),
  color1: string,
  color2: string,
}

export default Tides
