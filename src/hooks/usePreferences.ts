import { useState, useCallback } from 'react';
import { Preferences } from '../types/preferences.types';

export const usePreferences = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    notifications: {
      orderUpdates: true,
      productUpdates: true,
      marketing: false
    },
    display: {
      language: 'en',
      timezone: 'EST',
      currency: 'USD'
    },
    privacy: {
      profileVisibility: false,
      dataAnalytics: true
    }
  });

  const [loading, setLoading] = useState(false);

  const updatePreference = useCallback(
    async <K extends keyof Preferences>(
      section: K,
      field: keyof Preferences[K],
      value: any
    ) => {
      setLoading(true);
      try {
        setPreferences(prev => ({
          ...prev,
          [section]: { ...prev[section], [field]: value }
        }));
        return true;
      } catch (error) {
        console.error('Failed to update preference:', error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { preferences, updatePreference, loading };
};