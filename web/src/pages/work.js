import React from "react"
import { graphql, Link } from "gatsby"

import GraphQLErrorList from "../components/GraphQLErrorList"
import Seo from "../components/Seo"

import { Grid } from "../styles/layout"
import { H2 } from "../styles/typography"

export const query = graphql`
  query projectsQuery {
    projects: allSanityProject {
      nodes {
        _id
        title
        slug {
          current
        }
        seo {
          title
          description
          image {
            ...SanityImage
          }
        }
      }
    }
  }
`

const Work = props => {
  const { data, errors } = props
  const projects = data.projects.nodes
  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <Seo title="Work" />
      <Grid>
        {projects.map(project => (
          <div key={project._id}>
            <Link to={project.slug.current}>
              <H2>{project.title}</H2>
            </Link>
          </div>
        ))}
      </Grid>
    </>
  )
}

export default Work
