"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Banner() {
  return (
    <section className="banner-slide">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        autoplay={false}
        effect="fade"
        className="h-screen"
      >
        {/* --- Slide 1 --- */}
        <SwiperSlide>
          <div
            className="h-screen relative overflow-hidden rounded-t-[50px]"
            style={{
              backgroundImage: "url('/img/ab1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center h-full relative z-10">
              <div className="container mx-auto">
                <div className="w-full md:w-1/3 relative p-10 bg-[#005d90]/80">
                  <h5 className="text-[14px] font-light text-white">
                    Effective MRI Safety Warning Signage System That Keeps Patients and Healthcare Staff Safe
                  </h5>
                  <h2 className="font-bold text-[28px] lg:text-[44px] text-white my-4 leading-tight">
                    TechGate Auto: Automatic MRI Caution Barrier
                  </h2>
                  <p className="text-[16px] font-light text-white/70">
                    TechGate Auto allows MRI staff to focus on patient care and efficient MRI room turnaround rather than worrying about unauthorized access.
                  </p>
                  <p className="text-[16px] font-light text-white/70 mt-3">
                    The use of a “caution barrier” at the MRI room entrance is now recommended by the American College of Radiology MR Safety Committee.
                  </p>
                  <button className="bg-[#6fb43f] rounded-full text-white font-medium px-6 py-3 mt-6 group uppercase font-semibold border border-[#005d90] hover:bg-white hover:text-[#005d90] transition-all duration-300">
                    Explore More{" "}
                    <span
                      aria-hidden="true"
                      className="group-hover:ml-4 transition-all duration-300"
                    >
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 2 --- */}
        <SwiperSlide>
          <div
            className="h-screen"
            style={{
              backgroundImage: "url('/img/slide-02.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center h-full relative z-10">
              <div className="container mx-auto text-center text-white">
                <h5 className="text-[14px] font-light text-[#005d90]">
                  We are Always on Guard for Your Family and Business
                </h5>
                <h2 className="font-bold text-[28px] lg:text-[60px] text-[#005d90] my-4 leading-tight">
                  Top Modern Technology <br /> on TechGate Auto
                </h2>
                <p className="text-[20px] font-light text-gray-500 dark:text-gray-400">
                  We are Always on Guard for Your Family and Business
                </p>
                <button className="bg-[#005d90] rounded-full text-white font-medium px-6 py-3 mt-6 group uppercase font-semibold border border-[#005d90] hover:bg-white hover:text-[#005d90] transition-all duration-300">
                  Make an appointment{" "}
                  <span
                    aria-hidden="true"
                    className="group-hover:ml-4 transition-all duration-300"
                  >
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 3 --- */}
        <SwiperSlide>
          <div
            className="h-screen"
            style={{
              backgroundImage: "url('/img/slide-03.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center h-full relative z-10">
              <div className="container mx-auto">
                <div className="flex">
                  <div className="w-full md:w-1/2 lg:flex hidden"></div>
                  <div className="w-full md:w-1/2 px-10 md:px-0 lg:px-0">
                    <h5 className="text-[14px] font-light text-[#005d90]">
                      The most experienced
                    </h5>
                    <h2 className="font-bold text-[28px] lg:text-[60px] text-[#005d90] my-4 leading-tight">
                      TechGate Auto: Automatic MRI Caution Barrier
                    </h2>
                    <p className="text-[20px] font-light">
                      We have established a team of investment professionals, focused <br /> on buyouts and growth equity investments.
                    </p>
                    <button className="bg-[#005d90] rounded-full text-white font-medium px-6 py-3 mt-6 group uppercase font-semibold border border-[#005d90] hover:bg-white hover:text-[#005d90] transition-all duration-300">
                      Make an appointment{" "}
                      <span
                        aria-hidden="true"
                        className="group-hover:ml-4 transition-all duration-300"
                      >
                        &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
