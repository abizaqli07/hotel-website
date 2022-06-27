import React from "react";

function Hero() {
  return (
    <div className="hero w-full min-h-screen text-white">
      <div className="glass w-full pb-48 rounded-b-2xl">
        <div className="layout pt-28 text-center flex flex-col gap-y-1">
          <div className="text__diff">Choose Your Favorite</div>
          <div className="text-3xl font-bold">Hotels and Enjoy</div>
          <div className="text-sm font-extralight"><span className="text__diff">12</span> Hotels with more than haundred rooms and exclusive service with <span className="text__diff">100K+</span> testimonials from various customer who trust our service</div>
          <div className="flex justify-center gap-x-4">
            <div className="hero__button">View More</div>
            <div className="hero__button">Book Now</div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Hero;