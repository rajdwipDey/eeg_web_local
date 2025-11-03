import React from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

const PremiumServices: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Text Section */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="mb-6">
            <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
              PREMIUM SERVICES
            </span>
            <span className="text-4xl inline-block font-light text-[#005d90] dark:text-white">
              TechGate helps <b className="font-semibold">reduce <br /> your Liability.</b>
            </span>
          </h1>
          <p className="font-normal pb-10 leading-relaxed">
            Choosing the right auto provider matters. We combine expert care, advanced technology,
            and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to
            your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PremiumServices;
