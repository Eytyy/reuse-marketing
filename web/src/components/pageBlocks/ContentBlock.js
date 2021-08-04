import React from "react"
import PortableText from "../PortableText"
const ContentBlock = props => {
  const { content } = props

  return <PortableText blocks={content} />
}

export default ContentBlock
