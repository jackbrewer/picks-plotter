import React from 'react'

import ColourGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/ColourGrid',
  component: ColourGrid,
}

const Template = (args) => (
  <Frame name="ColourGrid" seeded refresh={!args.seed}>
    <ColourGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  printWidth: 180,
  printHeight: 270,
  width: 400,
  height: 600,
  cols: 20,
  rows: 30,
  lines: 20,
  gap: 4,
}

export const Grouped = Template.bind({})
Grouped.args = {
  ...Default.args,
  rowsPerColour: 10,
}

export const Rotated = Template.bind({})
Rotated.args = {
  ...Default.args,
  rotation: -2,
}

export const Big = Template.bind({})
Big.args = {
  ...Default.args,
  cols: 60,
  rows: 1,
  lines: 8,
  gap: 0,
}

export const Weave = Template.bind({})
Weave.args = {
  ...Default.args,
  cols: 60,
  rows: 14,
  lines: 10,
  gap: 0,
  rowsPerColour: 100,
  rotation: 20,
  alternateRotation: true,
  width: 360,
}
// Nice seeds
// camera service men
// accurate horn having
