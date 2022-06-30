import React from "react";
import wall2 from "../assets/wall2.jpg"

function Services() {
  return (
    <div className="section mt-16">
      <div className="layout">
        <div className="section__title">Services</div>
        <div className="service__container grid gap-6 grid-cols-[minmax(0,_600px)] lg:grid-cols-[repeat(2,_minmax(0,500px))] 2xl:grid-cols-[repeat(2,_minmax(0,550px))] justify-center lg:gap-0 lg:gap-y-4">
          <div className="relative overflow-hidden">
            <img className="shadow-md shadow-primary" src={wall2} />
            <div className="absolute glass w-fit py-2 px-8 bottom-4 left-4 rounded-full flex items-center gap-4 group hover:gap-12 transition-all duration-500 ease-out cursor-pointer">
              <div className="text-normal font-medium flex items-center gap-2"><i class="uil uil-coffee"></i>Cafe </div>
              <div className="flex gap-x-2 text-smallest font-light items-center"><div className=" hidden group-hover:flex">View More</div><i class="uil uil-arrow-right"></i></div>
            </div>
          </div>

          <div className="service__content p-12 rounded-2xl text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?
          </div>

          <div className="relative overflow-hidden">
            <img className="shadow-md shadow-primary" src={wall2} />
            <div className="absolute glass w-fit py-2 px-8 bottom-4 left-4 rounded-full flex items-center gap-4 group hover:gap-12 transition-all duration-500 ease-out cursor-pointer">
              <div className="text-normal font-medium flex items-center gap-2"><i class="uil uil-coffee"></i>Cafe </div>
              <div className="flex gap-x-2 text-smallest font-light items-center"><div className=" hidden group-hover:flex">View More</div><i class="uil uil-arrow-right"></i></div>
            </div>
          </div>

          <div className="service__content lg:row-start-2 lg:col-start-1 p-12 rounded-2xl text-center lg:text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;