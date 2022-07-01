import React from "react";
import fac3 from "../assets/fac3.jpg"
import fac4 from "../assets/fac4.jpg"

function AboutUs(){
  return (
    <div className="layout">
      <div className="section">
        <div className="section__title">About Us</div>
        <div className="aboutus__container flex flex-col gap-y-4 w-fit mx-auto gap-x-8 md:flex-row lg:gap-x-12 xl:gap-x-16">
          <div className="w-72 aspect-[3/4] xl:w-[27rem] xl:aspect-[4/3] mx-auto rounded-2xl overflow-hidden relative group">
            <div className="w-full"><img src={fac3} className="object-cover"/></div>
            <div className="transition-all duration-500 ease-in-out absolute -bottom-[80%] xl:-bottom-[75%] w-full h-full p-4 text-center glass__primary rounded-2xl group-hover:bottom-0">
              <div className="text-h3 font-medium">Abi Khoir Naufal Zaqli</div>
              <div className="text-small font-light mb-8">K3521001</div>
              <div>A second semester student of computer and informatics engineering education at the Sebelas Maret University. Really like frontend programming, drawing, scrolling manga and sleeping. aspire to be rich without trying</div>
              <div className="mt-4 w-fit mx-auto py-2 px-4 bg-primary rounded-lg cursor-pointer hover:bg-primary_hover">Contact Me</div>
            </div>
          </div>
          <div className="w-72 aspect-[3/4] xl:w-[27rem] xl:aspect-[4/3] mx-auto rounded-2xl overflow-hidden relative group">
            <div className="w-full"><img src={fac3} className="object-cover"/></div>
            <div className="transition-all duration-500 ease-in-out absolute -bottom-[80%] xl:-bottom-[75%] w-full h-full p-4 text-center glass__primary rounded-2xl group-hover:bottom-0">
              <div className="text-h3 font-medium">Dzakwan Azmy</div>
              <div className="text-small font-light mb-8">K3521001</div>
              <div>A second semester student of computer and informatics engineering education at the Sebelas Maret University. Really like frontend programming, drawing, scrolling manga and sleeping. aspire to be rich without trying</div>
              <div className="mt-4 w-fit mx-auto py-2 px-4 bg-primary rounded-lg cursor-pointer hover:bg-primary_hover">Contact Me</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutUs;