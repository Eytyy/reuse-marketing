import React from "react"
import PostPreview from "../post/Preview"
import ProjectPreview from "../project/Preview"

const ContentPreview = ({ _type, ...props }) => {
  switch (_type) {
    case "project":
      return <ProjectPreview {...props} />
    case "post":
      return <PostPreview {...props} />
    default:
      return null
  }
}

export default ContentPreview
