import React, { cloneElement, useState } from 'react'
import { node } from 'prop-types'

const Frame = ({ children }) => {
  const [now, setNow] = useState(Date.now())
  const handleRefresh = () => {
    setNow(Date.now())
  }

  const handleSave = ({ name }) => {
    const svgEl = document.querySelector('svg').cloneNode(true)
    const debugEls = [...svgEl.querySelectorAll('.debug')]
    debugEls.map((el) => el.parentNode.removeChild(el))
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    const svgData = svgEl.outerHTML
    const preface = '<?xml version="1.0" standalone="no"?>\r\n'
    const svgBlob = new Blob([preface, svgData], {
      type: 'image/svg+xml;charset=utf-8',
    })
    const svgUrl = URL.createObjectURL(svgBlob)
    const downloadLink = document.createElement('a')
    downloadLink.href = svgUrl
    downloadLink.download = name || Date.now()
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div className="frame">
      <div className="frame__content">
        <div className="frame__content-inner">
          {cloneElement(children, { now })}
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
        <div className="footnote">{now}</div>
      </div>
    </div>
  )
}

Frame.propTypes = {
  children: node,
}

export default Frame
