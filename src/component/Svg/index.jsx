import React from 'react'
import { node, string } from 'prop-types'

const namespaces = {
  'xmlns:inkscape': 'http://www.inkscape.org/namespaces/inkscape',
}

const Svg = ({ children, width, height, viewBox, ...other }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox || `0 0 ${width} ${height}`}
    {...namespaces}
    {...other}
  >
    {children}
  </svg>
)

Svg.propTypes = {
  children: node.isRequired,
  width: string.isRequired,
  height: string.isRequired,
  viewBox: string,
}

export default Svg
