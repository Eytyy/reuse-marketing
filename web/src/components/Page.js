import React from "react"
import PageBlock from "./pageBlocks"

const Page = ({ data }) => {
  return (data.sections || []).map(block => (
    <PageBlock key={block._key} {...block} />
  ))
}

export default Page
