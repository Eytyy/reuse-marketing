import React from "react"
import { SansBlock, SansBlockTitle } from "./styles"
import ContentBlock from "./ContentBlock"
import ImageBlock from "./ImageBlock"
import CollectionBlock from "./CollectionBlock"
import CustomCollectionBlock from "./CustomCollectionBlock"

const PageBlockContent = ({ _type, ...block }) => {
  switch (_type) {
    case "sectionContentBlock":
      return <ContentBlock {...block} />
    case "sectionImageBlock":
      return <ImageBlock {...block} />
    case "sectionCollectionBlock":
      return <CollectionBlock {...block} />
    case "sectionCustomCollectionBlock":
      return <CustomCollectionBlock {...block} />
    default:
      return null
  }
}
const PageBlock = block => {
  return (
    <SansBlock>
      <SansBlockTitle>Block: {block.title}</SansBlockTitle>
      <PageBlockContent {...block} />
    </SansBlock>
  )
}

export default PageBlock
