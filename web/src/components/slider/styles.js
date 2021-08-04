import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { rest_form_el_style } from "../../styles/utils"
import { spacing } from "../../styles/vars"

const visible = css`
  visibility: visible;
  opacity: 1;
`
const hidden = css`
  visibility: hidden;
  opacity: 0;
`

export const SliderWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

export const Slide = styled.div`
  ${({ active }) => (active ? visible : hidden)}
  transition: 500ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto min-content;
  .media_wrapper {
    position: relative;
  }
  img {
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const nav_style = css`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`

export const Nav = styled.nav``

export const Dots = styled.div`
  ${nav_style}
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Dot = styled.div`
  transition: 1s linear;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  font-size: 7em;
  margin: 0 0.1em;
  cursor: pointer;
`

export const SliderBtn = styled.button`
  ${rest_form_el_style}
  position: absolute;
  top: 50%;
  color: ${({ color }) => color || "blue"};
  background: ${({ background }) => background || "#FFF"};
  border-radius: 100%;
  font-size: 2.2em;
  transform: translateY(-100%);
  cursor: pointer;
  z-index: 10;
`

export const SliderBtnNext = styled(SliderBtn)`
  right: ${spacing.mobile};
`

export const SliderBtnPrev = styled(SliderBtn)`
  left: ${spacing.mobile};
`
