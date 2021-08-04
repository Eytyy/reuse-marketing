import React from "react"
import { H1 } from "../../styles/typography"
import { PageHeader } from "../../styles/layout"
import MediaBlock from "../media/Block"
import PortableText from "../PortableText"
import OtherProjects from "../OtherProjects"

const Project = props => {
  const { title, mainMedia, body, id } = props
  return (
    <article>
      <PageHeader>
        <H1>{title}</H1>
        {mainMedia && <MediaBlock data={mainMedia} />}
      </PageHeader>
      {body && <PortableText blocks={body} />}
      <OtherProjects projectId={id} />
    </article>
  )
}

export default Project
