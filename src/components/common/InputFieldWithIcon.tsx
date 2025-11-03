'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldWithIconProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  placeholder?: string;
  focusRing?: string;
  icon: LucideIcon;
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  disabled = false,
  id,
  required = false,
  placeholder = '',
  focusRing = '#6fb43f',
  icon: Icon,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {label}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-[#6fb43f] transition-colors duration-300" />
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:border-transparent transition-all duration-300 outline-none"
        style={{ 
          '--tw-ring-color': focusRing,
        } as React.CSSProperties}
      />
    </div>
  </div>
);

export default InputFieldWithIcon;