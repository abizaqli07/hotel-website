import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import face1 from "../../assets/1.jpg"
import face2 from "../../assets/2.jpg"
import face3 from "../../assets/3.png"
import face4 from "../../assets/4.jpg"


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
              <img className="object-cover min-h-full min-w-full" src={face1} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">May be once in lifetime</div>
              <div className="text-small">You can book and go to the top. Its worth it in the sense that you get this experience rarely - considering this is the tallest building. So may be once in a life time.</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={face2} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">Outstanding and must do in Dubai</div>
              <div className="text-small">An absolute must if you are in Dubai. This is truly outstanding. We experienced no queues and were able to go straight up without any issues. We went on the evening and would 100% go up again.</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={face3} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">Very Interesting Building and View</div>
              <div className="text-small">We timed our visit to be at sunset and were not disappointed, We also could see the Dubai Fountain show from the 148th floor.</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__card mx-auto flex flex-col glass rounded-xl overflow-hidden sm:grid sm:grid-cols-2 sm:max-h-72 md:flex md:flex-col md:max-h-fit  xl:grid xl:grid-cols-2 xl:max-h-[21rem]">
            <div className="border-b-2 rounded-xl overflow-hidden border-primary max-h-60 sm:max-h-full sm:border-b-transparent sm:border-r-2 md:max-h-60 md:border-b-2 md:border-r-transparent xl:max-h-full xl:border-b-transparent xl:border-r-2">
              <img className="object-cover min-h-full" src={face4} />
            </div>
            <div className="p-8 flex flex-col gap-y-4">
              <div className="text-normal font-semibold">Not for the view but for the experience</div>
              <div className="text-small">Restaurant beside.and shops around
Every thing was there is very nice
And the evening time are there so many things we are enjoyed relly very nice country</div>
              <div className="newscard__button">View More<i class="uil uil-arrow-right"></i></div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default NewsSwiper;