import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import fac1 from "../../assets/fac1.jpg"
import fac2 from "../../assets/fac2.jpg"
import fac3 from "../../assets/fac3.jpg"
import fac4 from "../../assets/fac4.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";



function HeroSwiper() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <div className="layout px-4 relative top-0">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        coverflowEffect={{
          slideShadows: true
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="heroswiper"
      >
        <SwiperSlide>
          <div className="heroswiper__container text-center">
            <img className="object-cover" src={fac1} />
            <h1 className="glass py-2 absolute bottom-0 w-full">Cafe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="heroswiper__container text-center">
            <img className="object-cover" src={fac2} />
            <h1 className="glass py-2 absolute bottom-0 w-full">Cafe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="heroswiper__container text-center">
            <img className="object-cover" src={fac3} />
            <h1 className="glass py-2 absolute bottom-0 w-full">Cafe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="heroswiper__container text-center">
            <img className="object-cover" src={fac4} />
            <h1 className="glass py-2 absolute bottom-0 w-full">Cafe</h1>
          </div>
        </SwiperSlide>
        <div className="flex gap-4 absolute top-1/2 z-10 w-full justify-between px-2">
          <div ref={navigationPrevRef}><i class="uil uil-angle-left-b text-5xl cursor-pointer"></i></div>
          <div ref={navigationNextRef}><i class="uil uil-angle-right-b text-5xl cursor-pointer"></i></div>
        </div>
      </Swiper>
    </div>
  )
}

export default HeroSwiper;