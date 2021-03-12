import React, { cloneElement, useState } from 'react'
import { array, bool, node, object, string } from 'prop-types'

import saveSvg from './lib/save-svg'
import generateSeed from '../../lib/generate-seed'

const Frame = ({ children, seeded, name, blacklistProps }) => {
  const [now, setNow] = useState(Date.now())
  const seed = seeded ? children.props.seed || generateSeed() : false
  const genTime = new Date(now).toLocaleTimeString()

  const childProps = { ...children.props }
  blacklistProps &&
    blacklistProps.map((key) => (childProps[key] = 'blacklisted'))

  const handleRefresh = () => {
    setNow(Date.now())
  }

  const handleSave = () => {
    saveSvg({ childProps, name, seed, genTime })
  }

  return (
    <div className="frame">
      <div className="frame__content">
        <div className="frame__content-inner">
          {cloneElement(children, {
            now,
            ...(seeded && { seed }),
          })}
        </div>
      </div>
      <div className="frame__actions">
        <div className="button-group">
          <button className="button" onClick={handleRefresh}>
            Refresh
          </button>
          <button className="button" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="footnote">
          {name && `${name} | `}
          {genTime}
          {seeded && ` | ${seed}`}
        </div>
      </div>
    </div>
  )
}

Frame.propTypes = {
  args: object,
  children: node,
  seeded: bool,
  name: string,
  blacklistProps: array,
}

export default Frame
