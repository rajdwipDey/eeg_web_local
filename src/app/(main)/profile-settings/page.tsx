
'use client';

import React, { useEffect, useState } from 'react';
import { User, Home, MapPin, ShoppingCart, Shield, Bell, AlertTriangle, Save, Download, UserMinus, Trash2, Camera, Check } from 'lucide-react';
import { useNotification } from '@/src/hooks/useNotification';
import { usePreferences } from '@/src/hooks/usePreferences';
import { useProfile } from '@/src/hooks/useProfile';
import PageHeader from '@/src/components/common/PageHeader';
import Notification from '@/src/components/ui/Notification';
import DashboardNav from '@/src/components/profile/DashboardNav';
import ProfilePictureSection from '@/src/components/profile/ProfilePictureSection';
import AccountStatusCard from '@/src/components/profile/AccountStatusCard';

export default function ProfileSettingsPage() {
  const { profile, updateProfile, fetchProfile, setProfile, loading: profileLoading } = useProfile();
  const { preferences, updatePreference, loading: preferencesLoading } = usePreferences();
  const { notification, showNotification, hideNotification } = useNotification();


  useEffect(() => {
    fetchProfile();
  }, []);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await updateProfile(profile);
    if (success) {
      showNotification('Profile updated successfully!', 'success');
    } else {
      showNotification('Failed to update profile', 'error');
    }
  };

  const handleImageUpload = (file: File) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e:any) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          showNotification('File size must be less than 5MB.', 'error');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e:any) => {
          setProfile({ ...profile, profileImage: e.target.result });
          showNotification('Profile picture updated!', 'success');
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handlePreferenceChange = async (
    section: keyof typeof preferences,
    field: string,
    value: any
  ) => {
    const success = await updatePreference(section, field as any, value);
    if (success) {
      showNotification('Preferences auto-saved', 'success');
    }
  };

  const dashboardNavItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile-settings', icon: <User className="w-5 h-5" />, active: true },
    { label: 'Addresses', href: '/addresses', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Orders', href: '/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { label: 'Security', href: '/security', icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader
        title="Profile Settings"
        subtitle="Manage your personal information and preferences"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="'#next-section'"
      />

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}

      <section id="next-section" className="py-20">
        <div className="container mx-auto px-4">
          {/* Dashboard Navigation */}
          <DashboardNav items={dashboardNavItems} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="md:sticky top-5 space-y-8">
                {/* Profile Picture Section */}
                <ProfilePictureSection
                  profile={profile}
                  onUpload={handleImageUpload}
                  onRemove={() => {
                    updateProfile({ profileImage: undefined });
                    showNotification('Profile picture removed', 'info');
                  }}
                />

                {/* Account Status */}
                <AccountStatusCard profile={profile} />

              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] p-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <User className="w-6 h-6" />
                    Personal Information
                  </h3>
                </div>

                <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={profile.firstName}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={profile.lastName}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={profile.jobTitle}
                        onChange={(e) => setProfile({ ...profile, jobTitle: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={profile.organization}
                        onChange={(e) => setProfile({ ...profile, organization: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bio / Description
                    </label>
                    <textarea
                      rows={4}
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about yourself and your role in MRI safety..."
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={profileLoading}
                      className="px-6 py-3 bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center gap-2 disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {profileLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Preferences */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gradient-to-r from-[#6fb43f] to-[#5a9935] p-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Bell className="w-6 h-6" />
                    Preferences & Settings
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Email Notifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Email Notifications
                    </h4>
                    <div className="space-y-4">
                      {[
                        { key: 'orderUpdates', label: 'Order Updates', desc: 'Receive notifications about your order status' },
                        { key: 'productUpdates', label: 'Product Updates', desc: 'Get notified about new products and features' },
                        { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional offers and newsletters' }
                      ].map(item => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences.notifications[item.key]}
                              onChange={(e) => handlePreferenceChange('notifications', item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#42b3e5]/25 dark:peer-focus:ring-[#42b3e5]/25 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#42b3e5]"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-600" />

                  {/* Display Preferences */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Display Preferences
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Language
                        </label>
                        <select
                          value={preferences.display.language}
                          onChange={(e) => handlePreferenceChange('display', 'language', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Timezone
                        </label>
                        <select
                          value={preferences.display.timezone}
                          onChange={(e) => handlePreferenceChange('display', 'timezone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        >
                          <option value="EST">Eastern Time (EST)</option>
                          <option value="CST">Central Time (CST)</option>
                          <option value="MST">Mountain Time (MST)</option>
                          <option value="PST">Pacific Time (PST)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Currency
                        </label>
                        <select
                          value={preferences.display.currency}
                          onChange={(e) => handlePreferenceChange('display', 'currency', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
                        >
                          <option value="USD">US Dollar (USD)</option>
                          <option value="EUR">Euro (EUR)</option>
                          <option value="GBP">British Pound (GBP)</option>
                          <option value="CAD">Canadian Dollar (CAD)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-600" />

                  {/* Privacy Settings */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Privacy Settings
                    </h4>
                    <div className="space-y-4">
                      {[
                        { key: 'profileVisibility', label: 'Profile Visibility', desc: 'Make your profile visible to other users' },
                        { key: 'dataAnalytics', label: 'Data Analytics', desc: 'Help us improve by sharing usage data' }
                      ].map(item => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences.privacy[item.key]}
                              onChange={(e) => handlePreferenceChange('privacy', item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#42b3e5]/25 dark:peer-focus:ring-[#42b3e5]/25 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#42b3e5]"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 bg-gradient-to-r from-[#6fb43f] to-[#5a9935] text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6" />
                    Account Actions
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                          Important Notice
                        </h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          These actions are permanent and cannot be undone. Please proceed with caution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Export Account Data
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Download all your account data and order history
                        </p>
                      </div>
                      <button
                        onClick={() => showNotification('Preparing your data export...', 'info')}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export Data
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Deactivate Account
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Temporarily disable your account (can be reactivated)
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to deactivate your account? You can reactivate it later.')) {
                            showNotification('Account deactivation initiated.', 'warning');
                          }
                        }}
                        className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors duration-200 font-medium flex items-center gap-2"
                      >
                        <UserMinus className="w-4 h-4" />
                        Deactivate
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <div>
                        <h4 className="font-medium text-red-900 dark:text-red-200">
                          Delete Account
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Permanently delete your account and all associated data
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to permanently delete your account? This action cannot be undone.')) {
                            if (window.confirm('This will permanently delete all your data. Are you absolutely sure?')) {
                              showNotification('Account deletion request submitted.', 'error');
                            }
                          }
                        }}
                        className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/70 transition-colors duration-200 font-medium flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
