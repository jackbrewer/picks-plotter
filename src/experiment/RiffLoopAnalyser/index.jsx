import React, { useState } from 'react'
import { number, string } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'

const RiffLoopAnalyser = ({
  audio,
  width,
  height,
  printWidth,
  printHeight,
}) => {
  const [data, setData] = useState({})

  // Set up audio context
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  const audioContext = new AudioContext()

  /**
   * Retrieves audio from an external source, the initializes the drawing function
   * @param {String} url the url of the audio we'd like to fetch
   */
  const drawAudio = ({ url, channels }) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        const filteredData = {}
        const normalisedData = {}

        channels.map((name) => {
          return (filteredData[name] = filterData(audioBuffer, name))
        })
        const max = Math.max(...filteredData.left)
        channels.map((name) => {
          return (normalisedData[name] = normalizeData(filteredData[name], max))
        })
        setData(normalisedData)
      })
  }

  /**
   * Filters the AudioBuffer retrieved from an external source
   * @param {AudioBuffer} audioBuffer the AudioBuffer from drawAudio()
   * @returns {Array} an array of floating point numbers
   */
  const filterData = (audioBuffer, channel) => {
    const rawData = audioBuffer.getChannelData(channel === 'left' ? 0 : 1) // We only need to work with one channel of data
    const samples = 720 // Number of samples we want to have in our final data set
    const blockSize = Math.floor(rawData.length / samples) // the number of samples in each subdivision
    const filteredData = []
    for (let i = 0; i < samples; i++) {
      const blockStart = blockSize * i // the location of the first sample in the block
      let sum = 0
      for (let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
      }
      const average = sum / blockSize // divide the sum by the block size to get the average
      filteredData.push(average > 0.002 ? average : 0) // Trim any really low values to zero
    }
    return filteredData
  }

  /**
   * Normalizes the audio data to make a cleaner illustration
   * @param {Array} filteredData the data from filterData()
   * @returns {Array} an normalized array of floating point numbers
   */
  const normalizeData = (filteredData, max) => {
    const multiplier = Math.pow(max, -1)
    return filteredData.map((n) => +(n * multiplier).toFixed(4))
  }

  const handleClick = () => {
    drawAudio({ url: audio, channels: ['left'] })
  }

  return (
    <div>
      <Svg
        width={`${printWidth}mm`}
        height={`${printHeight}mm`}
        viewBox={`0 0 ${width} ${height}`}
      >
        <g>
          {data.left &&
            data.left.map((point, i) => (
              <Polyline
                key={i}
                points={[
                  [i * 0.5, height],
                  [i * 0.5, height - height * point],
                ]}
                strokeWidth="0.5"
                stroke="blue"
                strokeOpacity="0.5"
              />
            ))}
        </g>
        <g>
          {data.right &&
            data.right.map((point, i) => (
              <Polyline
                key={i}
                points={[
                  [i * 0.5, height],
                  [i * 0.5, height - height * point],
                ]}
                strokeWidth="0.5"
                stroke="red"
                strokeOpacity="0.5"
              />
            ))}
        </g>
      </Svg>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={audio} loop controls />
      <button onClick={handleClick}>Click</button>
      <textarea value={JSON.stringify(data, '', 2)} />
    </div>
  )
}

RiffLoopAnalyser.defaultProps = {
  printWidth: 360,
  printHeight: 100,
  width: 360,
  height: 100,
  audio: '',
}

RiffLoopAnalyser.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  audio: string,
}

export default RiffLoopAnalyser
