import React, { useState } from 'react';

interface PromoCodeInputProps {
  onApply: (code: string) => void;
}

export const PromoCodeInput: React.FC<PromoCodeInputProps> = ({ onApply }) => {
  const [code, setCode] = useState('');

  const handleApply = () => {
    if (code.trim()) {
      onApply(code);
      setCode('');
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Promo Code
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-200"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200 font-medium"
        >
          Apply
        </button>
      </div>
    </div>
  );
};