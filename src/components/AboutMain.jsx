import React from "react";
import fac1 from "../assets/fac1.jpg"
import fac2 from "../assets/fac2.jpg"

function AboutMain() {
  return (
    <div className="layout">
      <div className="section pb-20">
        <div className="section__title mb-20">About The Valhalla Hotels</div>
        <div className="aboutmain__container grid grid-cols-1 mx-auto gap-x-12 gap-y-8 lg:grid-cols-[repeat(2,_500px)]">

          <div className="relative flex justify-center max-w-xl mx-auto">
            <img src={fac1} className=" max-w-[15rem] aspect-square sm:max-w-xs" />
            <div className="absolute bg-primary min-w-[15rem] sm:min-w-[20rem] max-w-xs aspect-square top-4 left-8"></div>
            <img src={fac2} className="absolute max-w-[15rem] sm:max-w-xs top-8 right-12 aspect-square drop-shadow-[35px_25px_20px_rgba(0,0,0,0.45)]" />
          </div>

          <div className="relative mt-20 text-center max-w-xl mx-auto lg:col-start-2 lg:row-start-1 lg:text-left">
            <div className="text-h2 mb-8">The Valhalla Hotels</div>
            <div>The Valhalla Hotels are hotels designed to cater to all work-related needs. Our main motivation in building this hotel is as a comfortable place with various supporting facilities for those of you who are always working hard and busy with work. like heaven for workaholics who are ready to fulfill your wishes in terms of the workplace</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMain;