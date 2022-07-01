import React from "react";
import { useWindowScrollPositions } from "./GetScrollPosition";



function AboutHeader() {
  const { scrollX, scrollY } = useWindowScrollPositions()
  const scroll = scrollY > 0

  return (
    <div className="aboutheader w-full min-h-screen text-white pb-4 lg:max-h-screen relative">
      <div className={`transition-all duration-500 ease-out glass aboutglass absolute h-[70%] w-full rounded-b-2xl mb-8 lg:w-1/3 lg:h-screen lg:rounded-none -z-0 ${scroll ? "headerglass__active" : ""}`} />
      <div className={`layout h-[100vh]`}>
        <div className={`headercontent transition-all duration-500 ease-out w-fit h-fit flex flex-col mx-auto lg:ml-0 ${scroll ? "headercontent__active" : ""}`}>
          <div className="relative z-10 pt-28 text-center flex flex-col gap-y-1 lg:gap-y-2 lg:pt-[30vh] lg:w-[90%] xl:pt-[20vh]">
            <div className="text__diff text-big font-tangerin">Know More</div>
            <div className="text-big font-bold">About Us</div>
            <div className="text-small font-extralight"><span className="text__diff">Heaven</span> for you who always work hard</div>
          </div>
          <div className="mt-12 relative flex justify-center items-center gap-8 lg:bottom-8 lg:justify-start lg:pl-8 md:gap-12 lg:gap-16">
            <div><i class="uil uil-instagram nav__icons"></i></div>
            <div><i class="uil uil-twitter nav__icons"></i></div>
            <div><i class="uil uil-facebook-f nav__icons"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader;