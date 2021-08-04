import React from "react"
import clientConfig from "../../client-config"
import PostPreview from "./post"
import ProjectPreview from "./project"

const sanityClient = require("@sanity/client")

const DocumentPreview = props => {
  const { document, slug, pageContext } = props
  const client = sanityClient({
    projectId: clientConfig.sanity.projectId,
    dataset: clientConfig.sanity.dataset,
    apiVersion: "v2021-08-04",
    withCredentials: true,
    useCdn: false,
  })

  switch (document) {
    case "work":
      return (
        <ProjectPreview client={client} slug={slug} pageContext={pageContext} />
      )
    case "blog":
      return (
        <PostPreview client={client} slug={slug} pageContext={pageContext} />
      )
    default:
      return null
  }
}

export default DocumentPreview
