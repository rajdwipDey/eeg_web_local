import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-[#F8F8F8] dark:bg-white/10 p-8 space-y-4 rounded-lg">
    {icon}
    <h3 className="text-[#102030] dark:text-white text-2xl font-medium">
      {title.split(" ").map((line, i) => (
        <React.Fragment key={i}>{line} <br /></React.Fragment>
      ))}
    </h3>
    <p className="text-sm font-normal">{description}</p>
  </div>
);

export default ServiceCard;
