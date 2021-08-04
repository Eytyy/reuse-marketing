import React from "react"

import { H1, H2, H3 } from "../../styles/typography"
import { PageHeader } from "../../styles/layout"
import MediaBlock from "../media/Block"
import PortableText from "../PortableText"
import { Link } from "gatsby"

const Post = props => {
  const { title, mainMedia, body, nextPost } = props
  return (
    <article>
      <PageHeader>
        {mainMedia && <MediaBlock data={mainMedia} />}
        <H1>{title}</H1>
      </PageHeader>
      {body && <PortableText blocks={body} />}
      {nextPost && (
        <section>
          <H2>Read Next</H2>
          <article>
            <Link to={`/blog/${nextPost.slug.current}`}>
              <H3>{nextPost.title}</H3>
            </Link>
          </article>
        </section>
      )}
    </article>
  )
}

export default Post
