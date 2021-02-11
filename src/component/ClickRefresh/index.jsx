import { cloneElement, useState } from 'react'
import { node } from 'prop-types'

const Frame = ({ children }) => {
  const [now, setNow] = useState(Date.now())
  const handleRefresh = () => {
    setNow(Date.now())
  }
  return cloneElement(children, { now, onClick: handleRefresh })
}

Frame.propTypes = {
  children: node,
}

export default Frame
