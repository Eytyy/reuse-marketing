import { Link } from "gatsby"
import React from "react"

import Media from "../media"
import { H2 } from "../../styles/typography"
import Slider from "../slider"

const PostsSlider = ({ data }) => {
  return (
    <Slider name="posts" data={data}>
      {({ slide, active }) => {
        return (
          <>
            <Media active={active} data={slide?.mainMedia?.[0]} />
            <Link to={`blog/${slide.slug.current}`}>
              <H2>{slide.title}</H2>
            </Link>
          </>
        )
      }}
    </Slider>
  )
}

export default PostsSlider
