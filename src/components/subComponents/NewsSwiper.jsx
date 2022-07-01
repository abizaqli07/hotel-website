import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import fac1 from "../../assets/fac1.jpg"
import fac2 from "../../assets/fac2.jpg"
import fac3 from "../../assets/fac3.jpg"
import fac4 from "../../assets/fac4.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function NewsSwiper() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 2,
            centeredSlides: false
          }
        }}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        pagination={true}
        coverflowEffect={{
          slideShadows: true
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="newsswiper"
      >
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={fac1} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">News Today</div>
              <div className="text-small">Lorem sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={fac2} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">News Today</div>
              <div className="text-small">Lorem sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={fac3} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">News Today</div>
              <div className="text-small">Lorem sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={fac4} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">News Today</div>
              <div className="text-small">Lorem sit amet consectetur adipisicing elit. Quia aliquid odio fugit unde. Hic ipsa libero sequi harum quae vel nobis, blanditiis accusamus totam beatae?</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default NewsSwiper;