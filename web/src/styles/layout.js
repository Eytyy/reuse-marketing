import styled from "@emotion/styled"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  .media_wrapper {
    padding-top: 56.25%;
    position: relative;
    img,
    .video-wrapper {
      height: 100%;
      top: 0;
      position: absolute;
      width: 100%;
    }
    img {
      object-fit: cover;
    }
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
