'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { UserProfile } from '@/src/types/profile.types';

interface AccountStatusCardProps {
  profile: UserProfile;
}

const AccountStatusCard: React.FC<AccountStatusCardProps> = ({ profile }) => (
  <div className="bg-gradient-to-br from-[#6fb43f]/10 to-[#5a9935]/10 dark:from-[#6fb43f]/20 dark:to-[#5a9935]/20 rounded-2xl p-6 border border-[#6fb43f]/20">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-gradient-to-br from-[#6fb43f] to-[#5a9935] rounded-2xl flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Premium Member</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Account verified and active since 2022</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Member Since:</span>
            <span className="font-medium text-gray-900 dark:text-white">March 2022</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Total Orders:</span>
            <span className="font-medium text-gray-900 dark:text-white">24</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Status:</span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountStatusCard;
