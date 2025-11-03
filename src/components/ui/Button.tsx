import React, { memo, useMemo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const VARIANT_STYLES = {
  primary: 'bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white hover:shadow-lg transform hover:-translate-y-0.5',
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
  danger: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50',
  outline: 'bg-[#42b3e5]/10 text-[#42b3e5] hover:bg-[#42b3e5]/20',
  success: 'bg-gradient-to-r from-[#6fb43f] to-[#5a9935] text-white hover:shadow-lg transform hover:-translate-y-0.5',
  ghost: 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
} as const;

const SIZE_STYLES = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3',
  lg: 'px-6 py-4 text-lg',
} as const;

const LoadingSpinner = memo(() => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
));

LoadingSpinner.displayName = 'LoadingSpinner';

export const Button: React.FC<ButtonProps> = memo(({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  icon,
  fullWidth = false,
  size = 'md',
  loading = false,
  disabled,
  ...props
}) => {
  const buttonClasses = useMemo(() => {
    const widthClass = fullWidth ? 'w-full' : '';
    const variantClass = VARIANT_STYLES[variant];
    const sizeClass = SIZE_STYLES[size];
    
    return `${sizeClass} rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${variantClass} ${widthClass} ${className}`;
  }, [variant, size, fullWidth, className]);

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? <LoadingSpinner /> : icon}
      {children}
    </button>
  );
});

Button.displayName = 'Button';