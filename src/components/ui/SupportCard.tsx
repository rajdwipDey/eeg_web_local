import React from 'react';
import { LifeBuoy, Phone } from 'lucide-react';

export const SupportCard: React.FC = () => {
  return (
    <div className="mt-6 bg-gradient-to-br from-[#6fb43f]/10 to-[#5a9935]/10 dark:from-[#6fb43f]/20 dark:to-[#5a9935]/20 rounded-2xl p-6 border border-[#6fb43f]/20">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#6fb43f] to-[#5a9935] rounded-2xl flex items-center justify-center mx-auto">
          <LifeBuoy className="w-8 h-8 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Need Help?</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Our MRI safety experts are here to assist you with your order.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#6fb43f] hover:text-[#5a9935] font-medium transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};
