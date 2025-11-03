'use client';

import { useEffect, useState } from 'react';

export default function WhatWeDoSection() {
  const [typedText, setTypedText] = useState('');
  const words = ['Solutions', 'Technology', 'Innovation']; 
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < words[wordIndex].length) {
        setTypedText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setTypedText('');
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500); 
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section className="py-20 bg-[#005d90]">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mb-10">
            <span className="text-white text-sm font-medium uppercase block mb-4">
              What we do
            </span>
            <span className="text-4xl inline-block font-light text-white leading-relaxed">
              Protecting Patients, Staff, <br /> and Equipment{' '}
              <b className="font-semibold">
                with Advanced <br /> MRI Safety With{' '}
                <span id="typing-text">{typedText}</span>
                <span className="typing-cursor">|</span>
              </b>
            </span>
          </h1>

          <div className="space-y-3">
            <h3 className="text-[18px] font-semibold text-white">AegysGroup</h3>
            <p className="text-white/60">Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
