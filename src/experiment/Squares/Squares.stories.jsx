import React from 'react'
import { node, number } from 'prop-types'

import Squares from './'
import Svg from '../../component/Svg'
import Safe from '../../component/Safe'
import Frame from '../../structure/Frame'

import Corners from './component/Corners'
import Cross from './component/Cross'
import Hatch from './component/Hatch'
import InsetOutline from './component/InsetOutline'

export default {
  title: 'Example/Squares',
  component: Squares,
}

const Template = (args) => <Squares {...args} />

export const Default = Template.bind({})
Default.args = {}

const SquareTemplate = ({ size, width, height, children }) => (
  <Frame name="Squares">
    <Svg width={width || size} height={height || size}>
      <Safe width={width || size} height={height || size} safe={0} />
      {children}
    </Svg>
  </Frame>
)
SquareTemplate.propTypes = {
  children: node,
  size: number,
  width: number,
  height: number,
}

export const SquareCorners = (args) => (
  <SquareTemplate size={args.size}>
    <Corners {...args} />
  </SquareTemplate>
)
SquareCorners.argTypes = {
  inset: { control: 'range' },
  length: { control: 'range' },
  strokeWidth: { control: 'range' },
}
SquareCorners.args = {
  inset: 0,
  length: 20,
  size: 100,
  strokeWidth: 2,
}

export const SquareCross = (args) => (
  <SquareTemplate size={args.size}>
    <Cross {...args} />
  </SquareTemplate>
)
SquareCross.argTypes = {
  offsetX: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  offsetY: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  rotate: { control: { type: 'range', min: 0, max: 359, step: 1 } },
  scale: { control: { type: 'range', min: 0, max: 2, step: 0.01 } },
  strokeWidth: { control: 'range' },
}
SquareCross.args = {
  offsetX: 0,
  offsetY: 0,
  rotate: 0,
  scale: 1,
  size: 100,
  strokeWidth: 2,
}

export const SquareHatch = (args) => (
  <div style={{ display: 'flex', gap: 20 }}>
    <SquareTemplate width={args.width} height={args.height}>
      <Hatch {...args} />
    </SquareTemplate>
    <SquareTemplate width={args.width * 2} height={args.height}>
      <Hatch {...args} width={args.width * 2} />
    </SquareTemplate>
    <SquareTemplate width={args.width} height={args.height * 2}>
      <Hatch {...args} height={args.height * 2} />
    </SquareTemplate>
  </div>
)
SquareHatch.argTypes = {
  space: { control: { type: 'range', min: 2, max: 100, step: 1 } },
  rotate: { control: { type: 'range', min: 0, max: 359, step: 1 } },
  strokeWidth: { control: 'range' },
}
SquareHatch.args = {
  space: 10,
  rotate: 45,
  width: 200,
  height: 200,
  strokeWidth: 1,
}

export const SquareInsetOutline = (args) => (
  <SquareTemplate size={args.size}>
    <InsetOutline {...args} />
  </SquareTemplate>
)
SquareInsetOutline.argTypes = {
  inset: { control: 'range' },
  length: { control: 'range' },
  strokeWidth: { control: 'range' },
}
SquareInsetOutline.args = {
  inset: 0,
  size: 100,
  strokeWidth: 2,
}
