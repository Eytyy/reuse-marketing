import React from "react"

import Video from "../video"
import SanityFigure from "../sanityFigure"

const Media = ({ data, active }) => {
  return (
    <div className="media_wrapper">
      {data._type === "video" ? (
        <Video active={active} {...data} />
      ) : (
        <SanityFigure image={data} />
      )}
    </div>
  )
}

export default Media
