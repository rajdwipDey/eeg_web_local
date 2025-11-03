import React from "react";
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode | LucideIcon;
  gradient: string;
  change: string;
  changeLabel: string;
  changeType: "positive" | "neutral";
  changeColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  gradient,
  change,
  changeLabel,
  changeType,
}) => {
  const Icon = icon as LucideIcon; // type assertion if it's a Lucide icon

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>

        <div
          className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white`}
        >
          {/* ✅ Handles both ReactNode and LucideIcon */}
          {React.isValidElement(icon) ? icon : <Icon className="w-6 h-6" />}
        </div>
      </div>

      <div className="mt-4 flex items-center text-sm">
        <span
          className={`${
            changeType === "positive" ? "text-green-600" : "text-blue-600"
          } font-medium`}
        >
          {change}
        </span>
        <span className="text-gray-500 dark:text-gray-400 ml-2">{changeLabel}</span>
      </div>
    </div>
  );
};
