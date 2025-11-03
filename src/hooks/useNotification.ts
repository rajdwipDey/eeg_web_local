import { useState, useCallback } from 'react';
import { NotificationType } from '../types/common.types';

interface Notification {
  message: string;
  type: NotificationType;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = useCallback((message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return { notification, showNotification, hideNotification };
};
