import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/GraphQLErrorList"
import Project from "../components/project"
import Seo from "../components/Seo"
import { toPlainText } from "../lib/helpers"

export const query = graphql`
  query GetProject($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      body: _rawBody(resolveReferences: { maxDepth: 10 })
      mainMedia {
        ... on SanityVideo {
          ...SanityVideo
        }
        ... on SanityImage {
          ...SanityImage
        }
      }
      seo {
        ...SEO
      }
    }
  }
`
const ProjectTemplate = ({ data, errors }) => {
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const project = data && data.project

  const seo_title = (project.seo && project.seo.title) || project.title || ""
  const seo_desc =
    (project.seo && project.seo.description) ||
    (project._rawBody && toPlainText(project._rawBody))
  const seo_image = project.seo && project.seo.image

  return (
    <>
      <Seo title={seo_title} description={seo_desc} image={seo_image} />
      <Project {...project} />
    </>
  )
}

export default ProjectTemplate
