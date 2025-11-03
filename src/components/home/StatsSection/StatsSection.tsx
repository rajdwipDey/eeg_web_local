'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 100, suffix: '+', label: 'Completed Projects' },
  { target: 750, suffix: '+', label: 'Happy Customers' },
  { target: 20, suffix: 'K+', label: 'Working Hours' },
  { target: 20, suffix: '+', label: 'Healthcare Enterprise Partnerships' },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="relative text-center">
      <div className="text-[100px] font-bold text-gray-200 dark:text-white/20">
        {count}
        {suffix}
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span className="text-[16px] absolute left-0 top-1/2 -translate-y-1/2 w-full text-center font-medium text-[#005d90] dark:text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}