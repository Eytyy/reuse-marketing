import styled from "@emotion/styled"
import { spacing } from "../../styles/vars"

export const VideoWrapper = styled.div`
  position: relative;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center;
  }
`

export const VideoCaption = styled.div`
  display: inline-block;
  color: #fff;
  padding: 8px;
`

export const VideoControls = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  font-size: 10rem;

  .video-btn {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play {
    color: blue;
    background: #fff;
    border-radius: 100%;
    width: 42px;
    height: 42px;
    font-size: 42px;
  }
`

export const BottomControls = styled.div`
  font-size: 3.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: ${spacing.mobile};
  display: flex;
  justify-content: space-between;
`
