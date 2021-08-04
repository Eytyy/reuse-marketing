import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import ProjectsSlider from "./Slider"
import ProjectPreview from "./Preview"

import { Grid } from "../../styles/layout"
import { H2 } from "../../styles/typography"

const query = graphql`
  query projectCollectionQuery {
    projects: allSanityProject {
      all: nodes {
        _id
        title
        mainMedia {
          ... on SanityVideo {
            ...SanityVideo
          }
          ... on SanityImage {
            ...SanityImage
          }
        }
        slug {
          current
        }
      }
    }
  }
`

const ProjectsPreviews = ({ layout, collectionId }) => {
  const { projects } = useStaticQuery(query)

  switch (layout) {
    case "Slider":
      return <ProjectsSlider data={projects.all} />

    case "Grid":
      return (
        <Grid>
          {projects.all.map(project =>
            project.slug ? (
              <ProjectPreview
                key={`${collectionId}-${project._id}`}
                {...project}
              />
            ) : null
          )}
        </Grid>
      )

    default:
      return (
        <ul>
          {projects.all.map(({ _id, title, slug }) => (
            <li key={_id}>
              <Link to={`/work/${slug.current}`}>
                <H2>{title}</H2>
              </Link>
            </li>
          ))}
        </ul>
      )
  }
}

export default ProjectsPreviews
