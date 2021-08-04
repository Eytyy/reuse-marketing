import React from "react"
import Media from "."
import Slider from "../slider"

const MediaBlock = ({ data }) => {
  return data.length > 1 ? (
    <Slider data={data}>
      {({ slide, active }) => {
        return <Media active={active} data={slide} />
      }}
    </Slider>
  ) : (
    <Media data={data[0]} />
  )
}

export default MediaBlock
