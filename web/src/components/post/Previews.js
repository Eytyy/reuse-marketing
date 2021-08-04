import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import PostPreview from "./Preview"
import PostsSlider from "./Slider"

import { Grid } from "../../styles/layout"
import { H2 } from "../../styles/typography"

const query = graphql`
  query postsCollectionQuery {
    posts: allSanityPost {
      all: nodes {
        _id
        title
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
`

const PostsPreviews = ({ layout, collectionId }) => {
  const { posts } = useStaticQuery(query)

  switch (layout) {
    case "Slider":
      return <PostsSlider data={posts.all} />

    case "Grid":
      return (
        <Grid>
          {posts.all.map(post =>
            post.slug ? (
              <PostPreview key={`${collectionId}-${post._id}`} {...post} />
            ) : null
          )}
        </Grid>
      )

    default:
      return (
        <ul>
          {posts.all.map(({ _id, title, slug }) => (
            <li key={_id}>
              <Link to={`/blog/${slug.current}`}>
                <H2>{title}</H2>
              </Link>
            </li>
          ))}
        </ul>
      )
  }
}

export default PostsPreviews
