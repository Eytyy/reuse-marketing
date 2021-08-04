import React, { useState, useCallback, useEffect, useRef } from "react"

const useSlider = slides => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderHeight, setSliderHeight] = useState(50)
  const slidesRef = useRef([])

  const updateSliderHeight = useCallback(() => {
    const activeSlide =
      slidesRef.current[activeIndex] && slidesRef.current[activeIndex].current
    if (!activeSlide) return

    const { height: slideHeight } = activeSlide.getBoundingClientRect()

    setSliderHeight(slideHeight)
  }, [activeIndex])

  useEffect(() => {
    updateSliderHeight()
    window.addEventListener("resize", updateSliderHeight)

    return function cleanup() {
      window.removeEventListener("resize", updateSliderHeight)
    }
  }, [activeIndex, updateSliderHeight])

  function goTo(index) {
    setActiveIndex(index)
  }

  function next() {
    setActiveIndex(prevIndex => (prevIndex + 1) % slides.length)
  }

  function prev() {
    setActiveIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length)
  }

  return {
    sliderHeight,
    slidesRef,
    activeIndex,
    slides,
    activeIndex,
    next,
    prev,
    goTo,
  }
}

export default useSlider
