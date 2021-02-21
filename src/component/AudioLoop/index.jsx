import React, { useEffect, useRef, useState } from 'react'
import { node } from 'prop-types'

const AudioContext = window.AudioContext || window.webkitAudioContext

const AudioLoop = ({ children }) => {
  const [playing, setPlaying] = useState(false)
  const audioContextRef = useRef()

  const url = '/audio/lets-dance/LetsDance.ogg'

  useEffect(() => {
    const audioContext = new AudioContext()

    const source = audioContext.createBufferSource()
    source.connect(audioContext.destination)

    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    request.onload = function () {
      audioContext.decodeAudioData(
        request.response,
        function (response) {
          source.buffer = response
          source.start(0)
          source.loop = true
          c
        },
        function () {
          console.error('The request failed.')
        }
      )
    }
    request.send()

    // Store context and start suspended
    audioContextRef.current = audioContext
    audioContext.suspend()

    // Effect cleanup function to disconnect
    return () => source.disconnect(audioContext.destination)
  }, [])

  const toggleAudio = () => {
    if (playing) {
      audioContextRef.current.suspend()
    } else {
      audioContextRef.current.resume()
    }
    setPlaying((play) => !play)
  }

  // const context = new AudioContext()
  // const startAudio = () => {
  //   const source = context.createBufferSource()
  //   source.connect(context.destination)

  //   const request = new XMLHttpRequest()
  //   request.open('GET', url, true)
  //   request.responseType = 'arraybuffer'
  //   request.onload = function () {
  //     context.decodeAudioData(
  //       request.response,
  //       function (response) {
  //         /* --- play the sound AFTER the buffer loaded --- */
  //         // set the buffer to the response we just received.
  //         source.buffer = response
  //         // start(0) should play asap.
  //         source.start(0)
  //         source.loop = true
  //         setLoadedSource(source)
  //         console.log('Hello')
  //       },
  //       function () {
  //         console.error('The request failed.')
  //       }
  //     )
  //   }
  //   request.send()
  // }

  // // const startAudio = () => {
  // //   if (!canPlay) return
  // //   loadedSource.start(0)
  // //   setPlaying(true)
  // // }

  // const stopAudio = () => {
  //   if (!playing) return
  //   loadedSource.stop()
  //   loadedSource.disconnect()
  //   setPlaying(false)
  // }

  // useEffect(() => {
  //   // startAudio()
  //   return () => {
  //     stopAudio()
  //   }
  // }, [])

  return (
    <div>
      <button className="button" onClick={toggleAudio}>
        Loop {playing ? 'playing' : 'stopped'}
      </button>
    </div>
  )
}

AudioLoop.propTypes = {
  children: node,
}

export default AudioLoop
