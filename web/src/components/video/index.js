/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { useState, useRef, useEffect } from "react"

import { VideoWrapper, VideoControls, BottomControls } from "./styles"

import {
  MdPlayCircleOutline,
  MdPause,
  MdVolumeMute,
  MdVolumeUp,
} from "react-icons/md"
import { useCallback } from "react"

const Video = ({ file, autoplay, hideControls, active }) => {
  const videoElement = useRef(null)
  const [state, setState] = useState({
    playing: false,
    loading: false,
    muted: false,
  })

  function safelySetState(changes) {
    setState(state => ({
      ...state,
      ...changes,
    }))
  }

  const play = () => {
    if (!videoElement?.current) return false
    videoElement.current.play()
    safelySetState({
      playing: true,
    })
  }

  const pause = useCallback(() => {
    if (!videoElement?.current) return false

    videoElement.current.pause()
    safelySetState({
      playing: false,
    })
  }, [])

  const onComplete = () => {
    if (!videoElement?.current) return false

    safelySetState({
      playing: false,
    })
    videoElement.current.currentTime = 0
  }

  const showLoading = () => {
    safelySetState({
      loading: true,
    })
  }

  const hideLoading = () => {
    safelySetState({
      loading: false,
    })
  }

  const onPlaying = () => {
    safelySetState({
      playing: true,
      loading: state.loading ? false : state.loading,
    })
  }

  const onPaused = () => {
    safelySetState({
      playing: false,
    })
  }

  const toggleSound = () => {
    const isMuted = videoElement.current.muted
    videoElement.current.muted = !isMuted
    safelySetState({
      muted: !isMuted,
    })
  }

  const ToggleVideo = () => (state.playing ? pause() : play())

  useEffect(() => {
    const video = videoElement.current
    if (video.muted) {
      safelySetState({
        muted: true,
      })
    }
    return function cleanup() {
      pause()
    }
  }, [])

  useEffect(() => {
    if (!active && state.playing) {
      pause()
    }
  }, [active])

  const { playing, loading, muted } = state
  return (
    <VideoWrapper className="video-wrapper">
      {autoplay ? (
        <video
          ref={videoElement}
          onEnded={onComplete}
          onWaiting={showLoading}
          onLoadedMetadata={hideLoading}
          onPlay={onPlaying}
          onPlaying={onPlaying}
          onPause={onPaused}
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          src={file.asset.url}
          className="video"
        />
      ) : (
        <video
          ref={videoElement}
          onEnded={onComplete}
          onWaiting={showLoading}
          onLoadedMetadata={hideLoading}
          onPlay={onPlaying}
          onPlaying={onPlaying}
          onPause={onPaused}
          playsInline
          preload="auto"
          src={file.asset.url}
          className="video"
        />
      )}

      {loading ? (
        <div>loading...</div>
      ) : hideControls ? null : (
        <VideoControls>
          <div
            className="video-btn"
            onClick={ToggleVideo}
            onKeyDown={ToggleVideo}
            role="button"
            tabIndex={0}
          >
            {!playing && (
              <div className="play">
                <MdPlayCircleOutline />
              </div>
            )}
          </div>
          {playing && (
            <BottomControls>
              <div
                className="pause"
                onClick={ToggleVideo}
                onKeyDown={ToggleVideo}
                role="button"
                tabIndex={0}
              >
                <MdPause color={"#FFF"} />
              </div>
              <div
                onClick={toggleSound}
                onKeyDown={toggleSound}
                role="button"
                className="volume"
                tabIndex={0}
              >
                {muted ? (
                  <MdVolumeMute color="#FFF" />
                ) : (
                  <MdVolumeUp color="#FFF" />
                )}
              </div>
            </BottomControls>
          )}
        </VideoControls>
      )}
    </VideoWrapper>
  )
}

export default Video
