import styled from "@emotion/styled"
import { mq } from "../../styles/utils"
import { spacing } from "../../styles/vars"

export const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${spacing.mobile};
  ${mq.tablet} {
    max-width: 90vw;
    padding: 0 ${spacing.tablet};
  }
  ${mq.desktop} {
    padding: 0 ${spacing.desktop};
    width: 90vw;
    max-width: 1680px;
  }
`
