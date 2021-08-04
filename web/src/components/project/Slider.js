import { Link } from "gatsby"
import React from "react"

import Media from "../media"
import { H2 } from "../../styles/typography"
import Slider from "../slider"

const ProjectSlider = ({ data }) => {
  return (
    <Slider name="projects" data={data}>
      {({ slide, active }) => (
        <>
          <Media active={active} data={slide.mainMedia[0]} />
          <Link to={`work/${slide.slug.current}`}>
            <H2>{slide.title}</H2>
          </Link>
        </>
      )}
    </Slider>
  )
}

export default ProjectSlider
