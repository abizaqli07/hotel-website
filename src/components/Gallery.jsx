import React from "react";
import fac5 from "../assets/fac5.jpg"
import fac6 from "../assets/fac6.jpg"

function Gallery() {
  return (
    <div className="section mt-16">
      <div className="layout">
        <div className="section__title">Gallery</div>
        <div className="gallery__container grid gap-6 grid-cols-[minmax(0,_600px)] lg:grid-cols-[repeat(2,_minmax(0,500px))] 2xl:grid-cols-[repeat(2,_minmax(0,550px))] justify-center lg:gap-0 lg:gap-y-4">
          <div className="max-h-[25rem] aspect-[3/2] relative overflow-hidden [&:hover>img]:scale-125 [&:hover>span]:opacity-30">
            <img className="  transition-all duration-500 ease-out" src={fac5} />
            <span className="absolute transition-opacity duration-500 w-full h-full bg-dark top-0 opacity-0"></span>
            <div className="absolute glass w-fit py-2 px-8 bottom-4 left-4 rounded-full flex items-center gap-4 group hover:gap-12 transition-all duration-500 ease-out cursor-pointer">
              <div className="text-normal font-medium flex items-center gap-2"><i class="uil uil-coffee"></i>Cafe </div>
              <div className="flex gap-x-2 text-smallest font-light items-center"><div className=" hidden group-hover:flex">View More</div><i class="uil uil-arrow-right"></i></div>
            </div>
          </div>

          <div className="gallery__content p-12 rounded-2xl text-center lg:text-left">
          prepare yourself for the convenience of working with all our premium and unlimited facilities. There is no place as beautiful as The Valhalla Hotels for those of you who always work without knowing time and want to feel the warmth between work.
          </div>

          <div className="max-h-[25rem] aspect-[3/2] relative overflow-hidden [&:hover>img]:scale-125 [&:hover>span]:opacity-30">
            <img className=" transition-all duration-500 ease-out" src={fac6} />
            <span className="absolute transition-opacity duration-500 w-full h-full bg-dark top-0 opacity-0"></span>
            <div className="absolute glass w-fit py-2 px-8 bottom-4 left-4 rounded-full flex items-center gap-4 group hover:gap-12 transition-all duration-500 ease-out cursor-pointer">
              <div className="text-normal font-medium flex items-center gap-2"><i class="uil uil-coffee"></i>Cafe </div>
              <div className="flex gap-x-2 text-smallest font-light items-center"><div className=" hidden group-hover:flex">View More</div><i class="uil uil-arrow-right"></i></div>
            </div>
          </div>

          <div className="gallery__content lg:row-start-2 lg:col-start-1 p-12 rounded-2xl text-center lg:text-right">
          various facilities that you can easily get and our premium service that will relieve all your fatigue. Join us now with thousands of other workaholics.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;