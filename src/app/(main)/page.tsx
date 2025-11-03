'use client'

import { useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Banner from '../../components/home/Banner/Banner'
import ServiceSection from '../../components/home/ServiceSection/ServiceSection'
import VideoGallery from '../../components/home/VideoGallery/VideoGallery'
import ProductsSection from '../../components/home/Products'
import PremiumServices from '../../components/home/PremiumServices'
import VideoCard from '../../components/ui/VideoCard'
import SecuritySection from '../../components/home/SecuritySection/SecuritySection'
import StatsSection from '../../components/home/StatsSection/StatsSection'
import TestimonialsSection from '../../components/home/TestimonialsSection/TestimonialsSection'
import ContactSection from '../../components/home/ContactSection/ContactSection'
import BlogSection from '../../components/home/BlogSection/BlogSection'



export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const initCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const bannerSlider = (window as any).$('#banner-slider')
        if (bannerSlider.length) {
          bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
          })
        }
      }
    }

    const timer = setTimeout(initCarousel, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Services Section */}
      <ServiceSection />

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Products Section */}
      <ProductsSection />

      <PremiumServices />

      <section className="min-h-[500px] flex items-center justify-center relative">
        <VideoCard
          videoSrc="#"
          thumbnailSrc="/img/video-banner.jpg"
          alt="Video Banner"
          tooltip="Play Video"
          className="w-[300px] md:w-[400px] lg:w-[500px]"
        />
      </section>
      <SecuritySection />
      <StatsSection />

      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </>
  )
}
