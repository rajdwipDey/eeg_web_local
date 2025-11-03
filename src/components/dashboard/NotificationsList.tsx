import React from "react";
import { Bell } from "lucide-react";
import { Notification } from "@/src/types/dashboard";
import { NotificationCard } from "../ui/NotificationCard";

interface NotificationsListProps {
  notifications: Notification[];
}

export const NotificationsList: React.FC<NotificationsListProps> = ({ notifications }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
      <Bell className="w-5 h-5 text-[#42b3e5]" />
      Recent Notifications
    </h3>
    <div className="space-y-4">
      {notifications.map((n, i) => (
        <NotificationCard key={i} notification={n} />
      ))}
    </div>
  </div>
);
