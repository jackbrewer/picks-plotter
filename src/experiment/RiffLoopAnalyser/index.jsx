import React, { useState } from 'react'
import { arrayOf, number, string } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'

const RiffLoopAnalyser = ({
  audio,
  width,
  height,
  printWidth,
  printHeight,
  sampleCount,
  precision,
  colors,
}) => {
  const [data, setData] = useState([])

  // Set up audio context
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  const audioContext = new AudioContext()

  /**
   * Retrieves audio from an external source, the initializes the drawing function
   * @param {String} url the url of the audio we'd like to fetch
   */
  const drawAudio = ({ url }) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        const filteredData = []
        const normalisedData = []
        const channelsCount = audioBuffer.numberOfChannels
        const channels = [...Array(channelsCount).keys()]

        channels.map((c) => {
          return filteredData.push(filterData(audioBuffer, c))
        })
        const max = Math.max(...filteredData.map((c) => Math.max(...c)))
        channels.map((c) => {
          return normalisedData.push(normalizeData(filteredData[c], max))
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
    const rawData = audioBuffer.getChannelData(channel) // We only need to work with one channel of data
    const samples = sampleCount // Number of samples we want to have in our final data set
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
    return filteredData.map((n) => +(n * multiplier).toFixed(precision))
  }

  const handleClick = () => {
    drawAudio({ url: audio })
  }

  const lineGap = width / sampleCount
  const lineWidth = Math.max(lineGap, 0.1).toFixed(2)
  const lineOffset = lineGap * 0.5
  return (
    <div>
      <Svg
        width={`${printWidth}mm`}
        height={`${printHeight}mm`}
        viewBox={`0 0 ${width} ${height}`}
      >
        <style>{(() => `polyline { mix-blend-mode: multiply; }`)()}</style>
        {data.map((channel, j) => (
          <g key={`channel:${j}`}>
            {channel &&
              channel.map((point, i) => {
                if (!point) return null
                return (
                  <Polyline
                    key={i}
                    points={[
                      [i * lineGap + lineOffset, height],
                      [i * lineGap + lineOffset, height - height * point],
                    ]}
                    strokeWidth={lineWidth}
                    stroke={colors[j]}
                    strokeOpacity="0.5"
                  />
                )
              })}
          </g>
        ))}
      </Svg>

      <div className="audio-player">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={audio} loop controls />
      </div>
      <div className="frame__actions">
        <button className="button" onClick={handleClick}>
          Click
        </button>
        <textarea value={JSON.stringify(data, '', 2)} readOnly rows="4" />
      </div>
    </div>
  )
}

RiffLoopAnalyser.defaultProps = {
  printWidth: 200,
  printHeight: 60,
  width: 200,
  height: 60,
  audio: '',
  sampleCount: 720,
  precision: 4,
  colors: ['blue', 'red'],
}

RiffLoopAnalyser.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  audio: string,
  sampleCount: number,
  precision: number,
  colors: arrayOf(string),

  // TODO: trim normalised values using these limits, then renormalise?
  highCutoff: number,
  lowCutoff: number,

  // optionsal timestamps?
}

export default RiffLoopAnalyser
