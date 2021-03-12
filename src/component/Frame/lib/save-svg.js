const saveSvg = ({ args, childProps, name, seed, genTime }) => {
  let fileName = new Date().toISOString().split('T')[0]
  if (genTime) fileName += ` ${genTime}`
  if (name) fileName = `${name} ${fileName}`

  // Create SVG
  const svgEl = document.querySelector('svg').cloneNode(true)

  // Filter out debug els
  const debugEls = [...svgEl.querySelectorAll('.debug')]
  debugEls.map((el) => el.parentNode.removeChild(el))

  const svgNS = 'http://www.w3.org/2000/svg'

  if (seed) {
    const seedText = document.createElementNS(svgNS, 'text')
    seedText.setAttributeNS(null, 'x', 0)
    seedText.setAttributeNS(null, 'y', -10)
    seedText.setAttributeNS(null, 'font-size', '4')

    const textNode = document.createTextNode(`Seed: ${seed}`)
    seedText.appendChild(textNode)
    svgEl.appendChild(seedText)
  }

  if (childProps) {
    const propsText = document.createElementNS(svgNS, 'text')
    propsText.setAttributeNS(null, 'x', 0)
    propsText.setAttributeNS(null, 'y', '104%')
    propsText.setAttributeNS(null, 'font-size', '3')

    const textNode = document.createTextNode(
      `props: ${JSON.stringify(childProps, '', 2)}`
    )
    propsText.appendChild(textNode)
    svgEl.appendChild(propsText)
  }

  svgEl.setAttribute('xmlns', svgNS)
  const svgData = svgEl.outerHTML
  const preface = '<?xml version="1.0" standalone="no"?>\r\n'

  const svgBlob = new Blob([preface, svgData], {
    type: 'image/svg+xml;charset=utf-8',
  })

  const svgUrl = URL.createObjectURL(svgBlob)

  // const desc = document.createElement('desc')
  // desc.textContent = seed
  // svgEl.appendChild(desc)

  // Create download link
  const downloadLink = document.createElement('a')
  downloadLink.href = svgUrl
  downloadLink.download = fileName
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export default saveSvg
