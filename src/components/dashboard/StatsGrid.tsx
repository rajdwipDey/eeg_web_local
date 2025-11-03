import React from "react";
import { StatCardProps } from "@/src/types/dashboard";
import { StatCard } from "../ui/StatCard";

interface StatsGridProps {
  stats: StatCardProps[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {stats.map((stat, index) => (
      <StatCard key={index} {...stat} />
    ))}
  </div>
);
