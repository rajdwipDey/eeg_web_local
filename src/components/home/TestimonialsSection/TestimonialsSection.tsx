"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef,useState,useEffect } from "react";
const testimonials = [
  {
    name: "Jese Leos",
    role: "Hospital Administrator",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Melani Beltran",
    role: "Chief Legal Counsel",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Dayton Duke",
    role: "Radiology technician",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Edith Sierra",
    role: "Chief Medical Officer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Curtis Guerra",
    role: "Surgeon",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Marlowe Brennan",
    role: "Pediatrician",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Demetrius Horne",
    role: "Director of Operations",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
  {
    name: "Imani Valentine",
    role: "Chief Nursing Officer",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, ferment!",
  },
];

export default function TestimonialSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      if (typeof swiperInstance.params.navigation !== "boolean") {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
      }

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <section className="py-20 px-4 md:px-10 lg:px-14 bg-[#F8F8F8] dark:bg-gray-950">
      <div className="container mx-auto text-center mb-12">
        <h1 className="mb-6">
          <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
            testimonials
          </span>
          <span className="text-4xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
            We Provide Services for <b className="font-semibold"> a Huge Number <br /> of Customers</b>
          </span>
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        // slidesPerView={5}
        // navigation
        pagination={false}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mx-auto"
        onSwiper={setSwiperInstance}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },  
          640: { slidesPerView: 1.5, spaceBetween: 25 }, 
          768: { slidesPerView: 2, spaceBetween: 30 },   
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-8 bg-white space-y-10 dark:bg-gray-800 dark:text-white rounded-xl">
              <img src="/img/starTest.png" className="w-[100px]" alt="stars" />
              <p className="text-[18px] font-light">{t.text}</p>
              <figcaption className="flex items-center justify-start mt-4">
                <img className="rounded-full w-9 h-9" src={t.avatar} alt={t.name} />
                <div className="space-y-0.5 dark:text-white text-left ms-3">
                  <div className="font-bold text-[#005d90] dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </figcaption>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-4 mt-6">
      <button
        ref={prevRef}
        className="bg-[#d6d6d6] left-0 top-1/2 -translate-y-1/2 z-10  text-white px-3 py-1 rounded hover:bg-[#004872]"
      >
        <svg className="w-5 carousel-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </button>
      <button
        ref={nextRef}
        className="bg-[#d6d6d6] right-0 top-1/2 -translate-y-1/2 z-10  text-white px-3 py-1 rounded hover:bg-[#004872]"
      >
        <svg className="w-5 carousel-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </button>
      </div>
    </section>
  );
}
