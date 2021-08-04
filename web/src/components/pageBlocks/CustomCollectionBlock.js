import React from "react"
import { Link } from "gatsby"

import Media from "../media"
import ContentPreview from "../contentPreview"
import Slider from "../slider"

import { Grid } from "../../styles/layout"
import { H2 } from "../../styles/typography"

const CustomCollectionBlock = props => {
  const { content, layout } = props

  switch (layout) {
    case "Slider":
      return (
        <Slider name="custom collection" data={content}>
          {({ slide, active }) => {
            return (
              <>
                {slide?.mainMedia?.[0] && (
                  <Media active={active} data={slide?.mainMedia?.[0]} />
                )}
                <Link to={`blog/${slide.slug.current}`}>
                  <H2>{slide.title}</H2>
                </Link>
              </>
            )
          }}
        </Slider>
      )

    case "Grid":
      return (
        <Grid>
          {content?.map(item =>
            item.slug ? <ContentPreview key={`${item._id}`} {...item} /> : null
          )}
        </Grid>
      )

    default:
      return (
        <ul>
          {content?.map(item => (
            <li key={item._id}>
              <ContentPreview {...item} />
            </li>
          ))}
        </ul>
      )
  }
}

export default CustomCollectionBlock
