import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function BookingRoomSwiper() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <>
      <Swiper
        slidesPerView={1}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="bookingswiper"
      >
        <SwiperSlide>
        <div>Regular Rooms</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>Business Rooms</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>VIP Rooms</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>VVIP Rooms</div>
        </SwiperSlide>
        <div className="flex gap-4 absolute -top-1/3 z-10 w-full justify-between px-2">
          <div ref={navigationPrevRef}><i class="uil uil-angle-left-b text-5xl cursor-pointer"></i></div>
          <div ref={navigationNextRef}><i class="uil uil-angle-right-b text-5xl cursor-pointer"></i></div>
        </div>
      </Swiper>

    </>

  )
}

export default BookingRoomSwiper;