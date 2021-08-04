import React, { useEffect, useState } from "react"
import ProjectTemplate from "../templates/Project"

const projectPreviewQuery = `
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

const ProjectPreview = props => {
  const { client, slug, pageContext } = props
  const [data, setData] = useState({
    id: null,
    project: null,
  })

  const queryPreviewProject = `*[slug.current == "${slug}"] {
    ${projectPreviewQuery}
  }`

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(queryPreviewProject)
      const data = result?.[0]
      if (data) {
        setData({
          id: data._id,
          project: { ...data },
        })
      }
    }
    fetchData()
  }, [])

  // Listen to updates; live preview
  useEffect(() => {
    const subscription = client.listen(queryPreviewProject)
    subscription.subscribe(({ result, documentId }) => {
      if (result) {
        setData({
          id: documentId,
          project: { ...result },
        })
      }
    })

    return function cleanup() {
      subscription.unsubscribe()
    }
  }, [])

  return data?.id ? (
    <ProjectTemplate
      data={data}
      pageContext={{ ...pageContext, id: data.id }}
    />
  ) : null
}

export default ProjectPreview
