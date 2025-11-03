'use client';

import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { NotificationType } from '@/src/types/common.types';

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 transform transition-all duration-300 animate-slide-in`}
    >
      {icons[type]}
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-75">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Notification;
