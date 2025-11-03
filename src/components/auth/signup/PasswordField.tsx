'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
}

export default function PasswordField({ id, label, value, onChange, placeholder, disabled }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#6fb43f] transition-colors duration-300" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#6fb43f] focus:border-transparent transition-all duration-300 outline-none"
          placeholder={placeholder}
          disabled={disabled}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg transition-colors duration-200"
          disabled={disabled}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
          )}
        </button>
      </div>
    </div>
  );
}