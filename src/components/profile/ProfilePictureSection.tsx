'use client';

import React from 'react';
import { Camera, User } from 'lucide-react';
import { UserProfile } from '@/src/types/dashboard';
import { validateFileSize, validateFileType } from '@/src/utils/validation';

interface ProfilePictureSectionProps {
  profile: UserProfile;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

const ProfilePictureSection: React.FC<ProfilePictureSectionProps> = ({
  profile,
  onUpload,
  onRemove,
}) => {
  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        if (!validateFileSize(file)) {
          alert('File size must be less than 5MB');
          return;
        }
        if (!validateFileType(file)) {
          alert('Please select a valid image file');
          return;
        }
        onUpload(file);
      }
    };
    input.click();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Camera className="w-5 h-5 text-[#42b3e5]" />
        Profile Picture
      </h3>

      {/* Profile Picture */}
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div
            className="w-32 h-32 bg-gradient-to-br from-[#005d90] to-[#42b3e5] rounded-full flex items-center justify-center mx-auto overflow-hidden"
            style={
              profile.profileImage
                ? {
                  backgroundImage: `url(${profile.profileImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
                : {}
            }
          >
            {!profile.profileImage && <User className="w-16 h-16 text-white" />}
          </div>
          <button
            onClick={handleFileSelect}
            className="absolute bottom-2 right-2 w-10 h-10 bg-[#6fb43f] text-white rounded-full flex items-center justify-center hover:bg-[#5a9935] transition-colors duration-200 shadow-lg"
          >
            <Camera className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{profile.name}</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{profile.role}</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleFileSelect}
              className="px-4 py-2 bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
            >
              Upload New
            </button>
            <button
              onClick={onRemove}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureSection;
