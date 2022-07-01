import React from "react";
import { useWindowScrollPositions } from "./GetScrollPosition";



function AboutBox(){
  const { scrollX, scrollY } = useWindowScrollPositions()
  const scroll = scrollY > 0

  return (
    <div className="layout text-white">
      <div className={`transition-all duration-500 ease-out aboutbox__container justify-center grid grid-cols-[repeat(1,_15rem)] gap-0 sm:grid-cols-[repeat(2,_15rem)] lg:grid-cols-[repeat(4,_15rem)] ${scroll ? "aboutbox__container-active" : ""}`}>
        <div className="bg-nav text-center align-middle items-center py-8 aspect-[3/1] px-4 text-h2 w-full border-primary border-y-[1px] sm:border-x-[1px] sm:aspect-[4/3] lg:aspect-square"><span className="text__diff">350+</span> Hotels Room</div>
        <div className="bg-nav text-center align-middle items-center py-8 aspect-[3/1] px-4 text-h2 w-full border-primary border-y-[1px] sm:border-x-[1px] sm:aspect-[4/3] lg:aspect-square"><span className="text__diff">12+</span> Premium Service</div>
        <div className="bg-nav text-center align-middle items-center py-8 aspect-[3/1] px-4 text-h2 w-full border-primary border-y-[1px] sm:border-x-[1px] sm:aspect-[4/3] lg:aspect-square"><span className="text__diff">15K+</span> Happy Customer</div>
        <div className="bg-nav text-center align-middle items-center py-8 aspect-[3/1] px-4 text-h2 w-full border-primary border-y-[1px] sm:border-x-[1px] sm:aspect-[4/3] lg:aspect-square"><span className="text__diff">1</span> Hotels</div>
      </div>
    </div>
  )
}

export default AboutBox;