import React, { useEffect, useState } from "react"
import PostTemplate from "../templates/Post"

const postPreviewQuery = `
	_id,
	body,
	seo,
	mainMedia[]{
		asset->,
		file {
			asset->
		}
	},
`

const PostPreview = props => {
  const { client, slug, pageContext } = props
  const [data, setData] = useState({
    id: null,
    project: null,
  })

  const queryPreviewPost = `*[slug.current == "${slug}"] {
    ${postPreviewQuery}
  }`

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(queryPreviewPost)
      const data = result?.[0]
      if (data) {
        setData({
          id: data._id,
          post: { ...data },
        })
      }
    }
    fetchData()
  }, [])

  return data?.id ? (
    <PostTemplate
      viewer="sanity-preview"
      data={data}
      pageContext={{ ...pageContext, id: data.id }}
    />
  ) : null
}

export default PostPreview
