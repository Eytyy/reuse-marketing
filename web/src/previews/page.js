import React, { useEffect, useState } from "react"
import clientConfig from "../../client-config"
import PageTemplate from "../templates/Page"

const sanityClient = require("@sanity/client")

const pagePreviewQuery = `
	_id,
	title,
	seo,
	sections
`

const PagePreview = props => {
  const { slug, pageContext } = props

  const client = sanityClient({
    projectId: clientConfig.sanity.projectId,
    dataset: clientConfig.sanity.dataset,
    apiVersion: "v2021-08-04",
    withCredentials: true,
    useCdn: false,
  })

  const [data, setData] = useState({
    id: null,
    page: null,
  })

  const queryPreviewPage = `*[slug.current == "${slug}"] {
    ${pagePreviewQuery}
  }`

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(queryPreviewPage)
      const data = result?.[0]

      console.log(data)

      if (data) {
        setData({
          id: data._id,
          page: { ...data },
        })
      }
    }
    fetchData()
  }, [])

  return data?.id ? (
    <PageTemplate data={data} pageContext={{ ...pageContext, id: data.id }} />
  ) : null
}

export default PagePreview
