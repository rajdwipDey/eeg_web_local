import React from "react";
import { Zap } from "lucide-react";
import { QuickAction } from "@/src/types/dashboard";
import { QuickActionButton } from "../ui/QuickActionButton";

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
      <Zap className="w-5 h-5 text-[#42b3e5]" />
      Quick Actions
    </h3>
    <div className="space-y-3">
      {actions.map((action, index) => (
        <QuickActionButton key={index} {...action} />
      ))}
    </div>
  </div>
);
