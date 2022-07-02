import React from "react";

function BookingHeader(){
  return (
    <div className="bookheader h-[50vh] w-full text-white relative mb-12 rounded-b-2xl overflow-hidden">
      <div className="glass__primary absolute h-full w-full mb-8 -z-0"/>
      <div className="layout mb-24">
        <div className="relative z-10 pt-28 text-center flex flex-col gap-y-1 lg:gap-y-4 mb-12">
          <div className="text__diff text-normal">Choose Your Favorite</div>
          <div className="text-big font-bold">Hotels and Enjoy</div>
          <div className="text-small font-extralight"><span className="text__diff">12</span> Hotels with more than haundred rooms and exclusive service with <span className="text__diff">100K+</span> testimonials from various customer who trust our service</div>
        </div>
        <div className="relative flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <div><i class="uil uil-instagram nav__icons"></i></div>
          <div><i class="uil uil-twitter nav__icons"></i></div>
          <div><i class="uil uil-facebook-f nav__icons"></i></div>
        </div>
      </div>
    </div>
  )
}

export default BookingHeader;