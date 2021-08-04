import React from "react"
import { Link } from "gatsby"

import Media from "../media"
import { H2 } from "../../styles/typography"

const ProjectPreview = ({ mainMedia, slug, title }) => {
  return (
    <div>
      <Media data={mainMedia[0]} />
      <Link to={`/work/${slug.current}`}>
        <H2>{title}</H2>
      </Link>
    </div>
  )
}

export default ProjectPreview
