import React from "react";
import { CheckCircle } from "lucide-react";

export const AccountStatus: React.FC = () => (
  <div className="bg-gradient-to-br from-[#6fb43f]/10 to-[#5a9935]/10 dark:from-[#6fb43f]/20 dark:to-[#5a9935]/20 rounded-2xl p-6 border border-[#6fb43f]/20">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-gradient-to-br from-[#6fb43f] to-[#5a9935] rounded-2xl flex items-center justify-center mx-auto">
        <CheckCircle className="w-8 h-8 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
          Account Verified
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Your account is fully verified and you have access to all features.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-[#6fb43f] font-medium">
          <CheckCircle className="w-4 h-4" />
          Premium Member
        </div>
      </div>
    </div>
  </div>
);
