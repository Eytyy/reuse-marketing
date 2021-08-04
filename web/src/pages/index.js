import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/GraphQLErrorList"
import Seo from "../components/Seo"
import Page from "../components/Page"

export const query = graphql`
  query FrontPageQuery {
    page: sanityHomePage(_id: { regex: "/homePage/" }) {
      title
      id
      sections: _rawSections(resolveReferences: { maxDepth: 10 })
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <Page data={data.page} />
      <Seo title={data.page.title} />
    </>
  )
}

export default IndexPage
