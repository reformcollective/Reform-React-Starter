import React, { useEffect } from "react"
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

type props = {
  children: React.ReactNode
}

const Scroll: React.FC<props> = ({ children }) => {

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}

export default Scroll