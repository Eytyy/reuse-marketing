import React from "react"
import { Dot, Dots } from "./styles"

const SliderDots = ({ slides, goTo, activeIndex }) => {
  return (
    <Dots>
      {slides.map(({ _id }, index) => (
        <Dot
          active={index === activeIndex}
          onClick={() => goTo(index)}
          key={_id}
        >
          •
        </Dot>
      ))}
    </Dots>
  )
}

export default SliderDots
