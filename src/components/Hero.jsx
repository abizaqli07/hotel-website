import React from "react";
import HeroSwiper from "./subComponents/HeroSwiper";
import { useMediaQuery } from "react-responsive";
import HeroSwiperAlt from "./subComponents/HeroSwiperAlt";

function Hero() {
  const isDesktop = useMediaQuery({
    query: '(max-width: 1023px)'
  })

  return (
    <div className="hero w-full min-h-screen text-white pb-4 lg:max-h-screen">
      <div className="glass fixed h-[70%] w-full rounded-b-2xl mb-8 lg:w-1/2 lg:h-screen lg:rounded-none -z-0"/>
      <div className="layout mb-24">
        <div className="relative z-10 pt-28 text-center flex flex-col gap-y-1 lg:text-left lg:gap-y-4 lg:pt-[30%] lg:w-[47%] xl:pt-[20%]">
          <div className="text__diff text-normal">Choose Your Favorite</div>
          <div className="text-big font-bold">Hotels and Enjoy</div>
          <div className="text-small font-extralight"><span className="text__diff">12</span> Hotels with more than haundred rooms and exclusive service with <span className="text__diff">100K+</span> testimonials from various customer who trust our service</div>
          <div className="flex justify-center gap-x-4 mb-8 lg:justify-start">
            <div className="hero__button ">About Us</div>
            <div className="hero__button ">Book Now</div>
          </div>
        </div>
        <div className="relative flex justify-center items-center gap-8 lg:absolute lg:bottom-8 lg:justify-start lg:pl-8 md:gap-12 lg:gap-16">
          <div><i class="uil uil-instagram nav__icons"></i></div>
          <div><i class="uil uil-twitter nav__icons"></i></div>
          <div><i class="uil uil-facebook-f nav__icons"></i></div>
        </div>
      </div>
      {isDesktop ? <HeroSwiper /> : <HeroSwiperAlt/>}
    </div>
  );
}

export default Hero;