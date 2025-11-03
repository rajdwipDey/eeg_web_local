import { useState, useCallback } from 'react';
import { UserProfile } from '../types/profile.types';
import { apiService } from '../lib/api/apiService';
import { API } from '../utils/apis';

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    organization: '',
    profileImage: '',
    bio: '',
    memberSince: '',
    totalOrders: 0,
    status: 'active',
    _id: '',
    createdAt: '',
    updatedAt: ''
  });

  const [loading, setLoading] = useState(false);


  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const data: UserProfile = await apiService.get(API.profile);
      setProfile({
        firstName: data?.firstName || '',
        profileImage: data?.profileImage || '',
        lastName: data?.lastName || '',
        email: data?.email || '',
        phone: data?.phone || '',
        jobTitle: data?.role || '',
        organization: data?.organization || '',
        bio: data?.bio || '',
        memberSince: data?.memberSince || '',
        totalOrders: data?.totalOrders || 0,
        status: data?.isActive ? 'active' : 'inactive',
        _id: data?._id || '',
        createdAt: data?.createdAt || '',
        updatedAt: data?.updatedAt || ''
      });
      return true;
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (updates: Partial<UserProfile>) => {
    setLoading(true);
    try {
      // Uncomment for real API:
      // const updated = await profileApi.updateProfile(updates);
      // setProfile(updated);

      // Mock update:
      setProfile(prev => ({ ...prev, ...updates }));
      await apiService.patch(API.profile,
        {
          _id: updates._id,
          email: updates.email ?? '',
          firstName: updates.firstName ?? '',
          lastName: updates.lastName ?? '',
          phone: updates.phone ?? '',
          dateOfBirth: updates.dateOfBirth ?? '',
          gender: updates.gender ?? '',
          profilePicture: updates.profileImage ?? '',
          bio: updates.bio ?? '',
          role: updates.jobTitle ?? '',
          isActive: updates.status === 'active' ? true : false,
          createdAt: updates.createdAt || '',
          updatedAt: updates.updatedAt || ''
        }
      );
      await fetchProfile();
      return true;
    } catch (error: any) {
      const errorMessage = error?.message || 'Unknown error occurred';
      const errorDetails = error?.response?.data || {};
      console.error('Failed to update profile:', { message: errorMessage, details: errorDetails, error });
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { profile, updateProfile, setProfile, fetchProfile, loading };
};