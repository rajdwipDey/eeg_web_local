'use client'

import React from 'react'

export default function ServiceSection() {
  return (
    <section className="py-20 bg-[#005d90]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* --- Heading --- */}
          <h2 className="text-white text-3xl md:text-4xl font-light leading-tight text-center md:text-left">
            We Offer Fast,{" "}
            <b className="font-semibold">
              Professional and <br className="hidden md:block" /> Exceptional Services
            </b>
          </h2>

          {/* --- Buttons --- */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
            <button className="bg-white text-[#005d90] font-semibold px-6 py-3 rounded-full uppercase border border-white hover:bg-[#005d90] hover:text-white transition-all duration-300">
              Make an appointment
            </button>
            <button className="bg-white text-[#005d90] font-semibold px-6 py-3 rounded-full uppercase border border-white hover:bg-[#005d90] hover:text-white transition-all duration-300">
              Contact Us Online
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
