import React from 'react'
import { node, number, oneOfType, string } from 'prop-types'

const namespaces = {
  'xmlns:inkscape': 'http://www.inkscape.org/namespaces/inkscape',
}

const Svg = ({ children, width, height, viewBox, ...other }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    {...namespaces}
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
      text {
        fill: #000;
        stroke-width: 0;
      }
    `,
      }}
    />

    {children}
  </svg>
)

Svg.propTypes = {
  children: node.isRequired,
  width: oneOfType([number, string]).isRequired,
  height: oneOfType([number, string]).isRequired,
  viewBox: string,
}

export default Svg
