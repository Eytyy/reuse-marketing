import { css } from "@emotion/react"

export default css`
  html {
    box-sizing: border-box;
  }

  * {
    font-weight: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  img {
    height: auto;
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  header,
  video,
  article,
  section,
  main,
  nav,
  footer {
    display: block;
  }

  svg {
    display: block;
  }
`
