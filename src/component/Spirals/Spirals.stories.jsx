import React from 'react'

import Spirals from './'

import Frame from '../Frame'
import Svg from '../Svg'

export default {
  title: 'Shape/Spirals',
  component: Spirals,
}

const size = 50

const Template = (args) => (
  <Frame args={args} name="Spirals">
    <Svg
      width={`${size}mm`}
      height={`${size}mm`}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Spirals {...args} />
      <text
        textAnchor="left"
        fontFamily="Open Sans, sans-serif"
        fontSize="2"
        fill="lime"
      >
        {args.colors.map((color, i) => (
          <tspan key={i} x="0" dy="2.2">{`${color}${
            args.strokeWidths &&
            args.strokeWidths.length &&
            ` – ${args.strokeWidths[i]} mm`
          }`}</tspan>
        ))}
        {Object.entries({
          size: `${args.maxRadius * 2} mm`,
          rotations: args.rotations,
          offset: args.offset,
          staggeredOffset: args.staggeredOffset ? 'true' : 'false',
          maxRadius: `${args.maxRadius} mm`,
          minRadius: `${args.minRadius} mm`,
        }).map((e) => (
          <tspan key={e[0]} x="0" dy="2.2">
            {e[0]}: {e[1]}
          </tspan>
        ))}
      </text>
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  maxRadius: size / 2,
  minRadius: 0.5,
  numPoints: 30,
  offset: 0.15,
  rotations: size * 0.6,
  tension: 1,
}

export const StrokeWidths = Template.bind({})
StrokeWidths.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  maxRadius: size / 2,
  minRadius: 0.5,
  numPoints: 30,
  offset: 0.15,
  rotations: size * 0.5,
  tension: 1,
  strokeWidths: [0.5, 0.5, 0.5, 0.3],
}

export const Offset = Template.bind({})
Offset.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  maxRadius: size / 2,
  minRadius: 0.5,
  numPoints: 30,
  offset: 10,
  rotations: size * 0.6,
  tension: 1,
}

const solidSize = 50
export const Solid = Template.bind({})
Solid.args = {
  colors: ['red'],
  maxRadius: solidSize / 2,
  minRadius: 0.1,
  numPoints: 30,
  offset: 0,
  rotations: solidSize * 0.8,
  tension: 1,
}
