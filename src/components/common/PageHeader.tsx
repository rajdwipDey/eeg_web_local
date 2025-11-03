"use client";

import React from "react";

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
  scrollTargetId?: string;
}

export default function PageHeader({
  title,
  backgroundImage,
  subtitle,
  scrollTargetId,
}: PageHeaderProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!scrollTargetId) return;
    const section = document.querySelector(scrollTargetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-[#005d90]/80"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto relative z-10 text-center space-y-3 px-4">
        <h1 className="text-4xl font-bold leading-tight text-white">{title}</h1>

        {subtitle && (
          <p className="text-white/90 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}

        {scrollTargetId && (
          <a
            href={scrollTargetId}
            onClick={handleScroll}
            className="inline-block scroll-to-section"
          >
            <svg
              className="w-6 h-6 mx-auto mt-4 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.52689C11.7501 5.52689 11.5002 5.4656 11.2706 5.34302L5.36689 2.19099C3.97914 1.45006 2.49789 3.00163 3.16496 4.49746L10.5275 21.0072C10.8226 21.6691 11.4113 22 12 22"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.5"
                d="M12 5.52689C12.2499 5.52689 12.4998 5.4656 12.7294 5.34302L18.6331 2.19099C20.0209 1.45006 21.5021 3.00163 20.835 4.49746L13.4725 21.0072C13.1774 21.6691 12.5887 22 12 22"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
