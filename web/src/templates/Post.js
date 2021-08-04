import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post"
import GraphQLErrorList from "../components/GraphQLErrorList"
import Seo from "../components/Seo"

export const query = graphql`
  query GetBlogPost($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      body: _rawBody(resolveReferences: { maxDepth: 10 })
      mainMedia {
        ...MediaFragment
      }
    }
    posts: allSanityPost {
      nodes {
        id
        title
        _rawBody(resolveReferences: { maxDepth: 10 })
        slug {
          current
        }
        mainMedia {
          ...MediaFragment
        }
      }
    }
  }
`

const PostTemplate = ({ viewer = "default", data, errors }) => {
  const post = data && data.post
  if (errors) {
    return <GraphQLErrorList erros={errors} />
  }

  let posts, currentPostIndex, nextPostIndex, nextPost
  if (data.posts && viewer === "default") {
    posts = data.posts.nodes
    currentPostIndex = posts.findIndex(({ id }) => post.id === id)
    nextPostIndex = (currentPostIndex + 1) % posts.length
    nextPost = posts[nextPostIndex]
  }

  return (
    <>
      <Seo title={post.title || "Untitled"} description={"meao"} />
      <Post nextPost={nextPost} {...post} />
    </>
  )
}

export default PostTemplate
