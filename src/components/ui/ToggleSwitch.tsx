'use client';

import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
  focusRing?: string; 
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  description,
  focusRing = '#42b3e5',
}) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="font-medium text-gray-900 dark:text-white">{label}</p>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div
        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#42b3e5] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
        style={{
          boxShadow: `0 0 0 0 transparent`,
        }}
      >
        <div
          className="peer-focus:ring-4 rounded-full"
          style={{ boxShadow: `0 0 0 4px ${focusRing}33` }}
        />
      </div>
    </label>
  </div>
);

export default ToggleSwitch;
