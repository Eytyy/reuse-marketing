import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { mq } from "../../styles/utils"
import { fonts, spacing } from "../../styles/vars"

export const MobileNavToggleButton = styled.div`
  position: relative;
  z-index: 11;
  cursor: pointer;
  .icon {
    font-size: 40px;
  }
  /* ${mq.laptop} {
    display: none;
  } */
`

const mobile_nav_styles = props => css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 60px ${spacing.mobile} ${spacing.mobile};
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  transform: ${props.isNavVisible ? "translateX(0%)" : "translateX(-100%)"};
  opacity: ${props.isNavVisible ? "1" : "0"};
  transition: transform 200ms ease-in-out, opacity 200ms 100ms ease-in-out;
  ${mq.tablet} {
    padding: 60px ${spacing.tablet} ${spacing.tablet};
  }
  ${mq.desktop} {
    padding: 60px ${spacing.desktop} ${spacing.desktop};
  }
`

export const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  ${mobile_nav_styles}
`

export const NavigationItem = styled.div`
  font-family: ${fonts.bold};
  font-size: 4em;
  margin-bottom: 1em;
`
