import React from "react";
import wall3 from "../assets/wall3.jpg"

function Services(){
  return (
    <div className="sectiom mt-16">
      <div className="layout text-white">
        <div className="section__title ">Our Services</div>
        <div className="flex flex-col gap-2 max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:max-w-4xl xl:max-w-5xl lg:gap-12">
          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:gap-8">
            <div className="bg-nav shadow-sm shadow-primary w-full h-32 lg:h-full lg:aspect-square flex gap-x-4 p-4 items-center hover:bg-primary hover:-translate-y-4 hover:shadow-none transition-all duration-500">
              <div className="text-big font-semibold"><i class="uil uil-coffee"></i></div>
              <div className="text-normal">Cool and spacious cafe</div>
            </div>
            <div className="bg-nav shadow-sm shadow-primary w-full h-32 lg:h-full lg:aspect-square flex gap-x-4 p-4 items-center hover:bg-primary hover:-translate-y-4 hover:shadow-none transition-all duration-500">
              <div className="text-big font-semibold"><i class="uil uil-briefcase-alt"></i></div>
              <div className="text-normal">Comfortable place to work</div>
            </div>
            <div className="bg-nav shadow-sm shadow-primary w-full h-32 lg:h-full lg:aspect-square flex gap-x-4 p-4 items-center hover:bg-primary hover:-translate-y-4 hover:shadow-none transition-all duration-500">
              <div className="text-big font-semibold"><i class="uil uil-bed"></i></div>
              <div className="text-normal">Spacious bed with complete facilities</div>
            </div>
            <div className="bg-nav shadow-sm shadow-primary w-full h-32 lg:h-full lg:aspect-square flex gap-x-4 p-4 items-center hover:bg-primary hover:-translate-y-4 hover:shadow-none transition-all duration-500">
              <div className="text-big font-semibold"><i class="uil uil-cloud-wifi"></i></div>
              <div className="text-normal">Fast internet Connection</div>
            </div>
          </div>
          <div>
            <div className="w-full h-60 overflow-hidden lg:h-full"><img src={wall3} className="w-full h-full"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;