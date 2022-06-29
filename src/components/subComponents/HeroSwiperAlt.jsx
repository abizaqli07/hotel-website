import React from "react";

function HeroSwiperAlt() {
  const [toggle, setToggle] = React.useState(false)

  function toggleHandler() {
    setToggle((prev) => {
      return !prev
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default HeroSwiperAlt;