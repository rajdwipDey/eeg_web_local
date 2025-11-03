'use client';

import React, { memo, useCallback } from 'react';

interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  id?: string;
  required?: boolean;
  placeholder?: string;
  focusRing?: string;
  icon?: React.ReactNode;
  rightAddon?: React.ReactNode; 
  error?: string;
  name?: string;
  className?: string;
  autoComplete?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  readOnly?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

const InputField: React.FC<InputFieldProps> = memo(({
  label,
  type = 'text',
  value,
  onChange,
  id,
  required = false,
  placeholder = '',
  focusRing = '#42b3e5',
  icon,
  rightAddon,
  error,
  name,
  className = '',
  autoComplete,
  disabled = false,
  maxLength,
  minLength,
  pattern,
  readOnly = false,
  onBlur,
  onFocus,
  ariaLabel,
  ariaDescribedBy,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = ariaDescribedBy || errorId;

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>
      )}
      <div className={icon || rightAddon ? 'relative' : ''}>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          readOnly={readOnly}
          aria-label={ariaLabel}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
          aria-required={required}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} ${rightAddon ? 'pr-12' : 'pr-3'} py-3 border ${
            error ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
          } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 transition-all duration-300 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-gray-50 dark:read-only:bg-gray-800 ${className}`}
          style={{ outlineColor: focusRing }}
        />
        {rightAddon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-1 z-10">
            {rightAddon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;