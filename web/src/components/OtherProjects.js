import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { H2, H3 } from "../styles/typography"

const OtherProjects = ({ projectId }) => {
  const { projects } = useStaticQuery(graphql`
    query otherProjectsQuery {
      projects: allSanityProject(limit: 10) {
        all: nodes {
          id
          title
          _rawBody(resolveReferences: { maxDepth: 10 })
          slug {
            current
          }
          mainMedia {
            ... on SanityVideo {
              ...SanityVideo
            }
            ... on SanityImage {
              ...SanityImage
            }
          }
        }
      }
    }
  `)

  const otherProjects = projects.all.filter(project => project.id !== projectId)

  return (
    <section>
      <H2>Other Projects</H2>
      <ul>
        {otherProjects.map(project => (
          <li key={project.id}>
            <Link to={`/work/${project.slug.current}`}>
              <H3>{project.title}</H3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OtherProjects
