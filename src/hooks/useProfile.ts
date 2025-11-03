import { useState, useCallback } from 'react';
import { UserProfile } from '../types/profile.types';

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 123-4567',
    jobTitle: 'MRI Safety Specialist',
    organization: 'City General Hospital',
    bio: 'Experienced MRI Safety Specialist with over 8 years in diagnostic imaging.',
    memberSince: 'March 2022',
    totalOrders: 24,
    status: 'active'
  });

  const [loading, setLoading] = useState(false);

  const updateProfile = useCallback(async (updates: Partial<UserProfile>) => {
    setLoading(true);
    try {
      // Uncomment for real API:
      // const updated = await profileApi.updateProfile(updates);
      // setProfile(updated);
      
      // Mock update:
      setProfile(prev => ({ ...prev, ...updates }));
      return true;
    } catch (error) {
      console.error('Failed to update profile:', error);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { profile, updateProfile, loading };
};