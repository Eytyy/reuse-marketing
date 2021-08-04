import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/GraphQLErrorList"
import Seo from "../components/Seo"
import Page from "../components/Page"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      title
      sections: _rawSections(resolveReferences: { maxDepth: 10 })
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const page = data.page
  const { title } = page
  return (
    <>
      <Seo title={title} />
      <Page data={page} />
    </>
  )
}

export default PageTemplate
