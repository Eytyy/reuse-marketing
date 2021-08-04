import React from "react"
import { Global, css } from "@emotion/react"
import { fonts } from "./vars"
import { mq } from "./utils"

import Bold from "../fonts/IBMPlexMono-Bold.woff2"
import Light from "../fonts/IBMPlexMono-Regular.woff2"
import reset from "./reset"

const styles = css`
  ${reset}
  @font-face {
    font-family: "Plex";
    src: url(${Light}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Plex Bold";
    src: url(${Bold}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: ${fonts.regular};
    font-size: 14px;
    ${mq.tablet} {
      font-size: 16px;
    }
  }

  strong {
    font-family: ${fonts.bold};
  }
`
export default () => <Global styles={styles} />
