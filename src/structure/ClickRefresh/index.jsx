import { cloneElement, useState } from 'react'
import { node } from 'prop-types'

const ClickRefresh = ({ children }) => {
  const [now, setNow] = useState(Date.now())
  const handleRefresh = () => {
    setNow(Date.now())
  }
  return cloneElement(children, { now, onClick: handleRefresh })
}

ClickRefresh.propTypes = {
  children: node,
}

export default ClickRefresh
