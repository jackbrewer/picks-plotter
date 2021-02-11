import React from 'react'
import { node, string } from 'prop-types'

const Group = ({ children, id, label, ...other }) => (
  <g
    id={id || label}
    {...{ 'inkscape:groupmode': 'layer', 'inkscape:label': label }}
    {...other}
  >
    {children}
  </g>
)

Group.propTypes = {
  children: node.isRequired,
  id: string,
  label: string,
}

export default Group
