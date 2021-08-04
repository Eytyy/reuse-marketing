import { graphql } from "gatsby"

export const SanityVideo = graphql`
  fragment SanityVideo on SanityVideo {
    _key
    _type
    title
    file {
      asset {
        url
      }
    }
  }
`

export const SanityImage = graphql`
  fragment SanityImage on SanityImage {
    _key
    _type
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }
`

export const MediaFragment = graphql`
  fragment MediaFragment on SanityImageOrVideo {
    ...SanityVideo
    ...SanityImage
  }
`

export const SEOFragment = graphql`
  fragment SEO on SanitySeo {
    title
    description
    image {
      ...SanityImage
    }
  }
`
