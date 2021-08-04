import React from "react"
import { Router } from "@reach/router"
import DefaultPreview from "../previews/default"
import DocumentPreview from "../previews/document"
import PagePreview from "../previews/page"

const Preview = props => {
  return (
    <Router basepath="/preview">
      <DocumentPreview path="/:document/:slug" />
      <PagePreview path="/:slug" />
      <DefaultPreview path="/" />
    </Router>
  )
}

export default Preview
