import React from "react"
import PostsPreviews from "../post/Previews"
import ProjectsPreviews from "../project/Previews"

const CollectionBlock = props => {
  const { layout, collection, _key } = props
  switch (collection) {
    case "Projects":
      return <ProjectsPreviews collectionId={_key} layout={layout} />
    case "Blog Posts":
      return <PostsPreviews collectionId={_key} layout={layout} />
    default:
      return null
  }
}

export default CollectionBlock
