import { Notification } from '@/src/types/dashboard';
import React from 'react';

interface NotificationCardProps {
  notification: Notification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  const typeColors = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-500',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-500',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
  };

  const dotColors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500'
  };

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${typeColors[notification.type]}`}>
      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dotColors[notification.type]}`}></div>
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{notification.message}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</p>
      </div>
    </div>
  );
};
