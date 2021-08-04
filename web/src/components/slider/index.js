import React from "react"
import SliderNavigation from "./Navigation"

import { Slide, SliderWrapper } from "./styles"
import useSlider from "../../hooks/useSlider"

const Slider = ({ data, children }) => {
  const { next, prev, activeIndex, slidesRef } = useSlider(data)

  return (
    <SliderWrapper>
      {data?.map((slide, i) => {
        const key = slide._key || slide._id
        const active = activeIndex === i
        slidesRef.current[i] = slidesRef.current[i] || React.createRef()
        return (
          <Slide ref={slidesRef.current[i]} key={key} active={active}>
            {children({ slide, active })}
          </Slide>
        )
      })}
      <SliderNavigation next={next} prev={prev} />
    </SliderWrapper>
  )
}

export default Slider
