// src/components/ReviewSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import customerReview from "../assets/customerReview.svg";
import reviewMonkey from "../assets/reviewMonkey.svg";
import groundling from "../assets/groundling.svg";
import { useParallax } from "react-scroll-parallax";

const ReviewSlider = () => {
  const monkeyParallax = useParallax({
    // translateX: [100, -50],
    translateY: [-10, 30],
    // move from -50px to 0px as you scroll
  });

  return (
    <div className="bg-no-repeat bg-cover bg-center relative py-30">
      <div className="absolute  bg-gray-900  opacity-75 inset-0 z-0 " />
      <div className="min-h-screen  relative">
        <img
          src={groundling}
          className="flip absolute right-0 top-[-5] z-1 w-60 "
          // ref={downParallax.ref}
        />
        <img
          src={reviewMonkey}
          alt=""
          className="absolute right-0 z-2"
          ref={monkeyParallax.ref}
        />
        <h1 className="text-center text-white text-3xl font-bold montserrat py-10">
          What others say
        </h1>
        <div className="grid grid-cols-1 gap-4 items-center px-6">
          {/* Swiper */}
          <div className="swiper-container relative flex items-center justify-center z-10">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-full "
            >
              <SwiperSlide>
                <div className="flex items-center justify-center md:flex-row flex-col-reverse">
                  <div className="  max-w-[508px] w-full h-full min-h-[396px] bg-[#3E8C4EB2] relative z-10 md:left-20 md:bottom-0 bottom-30 rounded-2xl px-10 py-15">
                    <h1 className="text-white text-[16px]">Johan Bridge</h1>
                    <p className="text-[#CCF3B9] text-[12px]">
                      Senior Research Manager
                    </p>
                    <span className="flex text-[25px] my-5">
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                    </span>
                    <p className="text-[24px] font-bold text-white leading-8 tracking-wide">
                      Lorem ipsum dolor sit amet consectetur. Consequat auctor
                      consectetur nunc vitae dolor blandit. Elit enim massa
                      etiam neque laoreet lorem sed.{" "}
                    </p>
                  </div>
                  <img
                    src={customerReview}
                    alt="Slide 1"
                    className="max-w-[348px] w-full h-[517px] px-5 object-contain rounded-xl  relative z-1 md:top-0 top-20"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center md:flex-row flex-col-reverse">
                  <div className="  max-w-[508px] w-full h-full min-h-[396px] bg-[#3E8C4EB2] relative z-10 md:left-20 md:bottom-0 bottom-30 rounded-2xl px-10 py-15">
                    <h1 className="text-white text-[16px]">Johan Bridge</h1>
                    <p className="text-[#CCF3B9] text-[12px]">
                      Senior Research Manager
                    </p>
                    <span className="flex text-[25px] my-5">
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                      <i class="fa-solid fa-star text-[#FACC15]"></i>
                    </span>
                    <p className="text-[24px] font-bold text-white leading-8 tracking-wide">
                      Lorem ipsum dolor sit amet consectetur. Consequat auctor
                      consectetur nunc vitae dolor blandit. Elit enim massa
                      etiam neque laoreet lorem sed.{" "}
                    </p>
                  </div>
                  <img
                    src={customerReview}
                    alt="Slide 1"
                    className="max-w-[348px] w-full h-[517px] px-5 object-contain rounded-xl  relative z-1 md:top-0 top-20"
                  />
                </div>
              </SwiperSlide>

              {/* Add more slides as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
