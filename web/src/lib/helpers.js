import { isFuture } from "date-fns"

export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt)
}

export const getInternalLinkPath = ({ _type, slug }) => {
  let basePath
  switch (_type) {
    case "project":
      basePath = "/work/"
      break
    case "post":
      basePath = "/blog/"
      break
    default:
      basePath = "/"
      break
  }
  return `${basePath}${slug}`
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText(blocks) {
  if (!blocks) {
    return ""
  }
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}
