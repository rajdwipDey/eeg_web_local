'use client';

import Link from 'next/link';

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function TermsCheckbox({ checked, onChange, disabled }: TermsCheckboxProps) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 text-[#6fb43f] focus:ring-[#6fb43f] border-gray-300 dark:border-gray-600 rounded transition-colors"
          disabled={disabled}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="terms" className="text-gray-700 dark:text-gray-300 cursor-pointer">
          I agree to the{' '}
          <Link
            href="/terms-service"
            className="text-[#6fb43f] hover:text-[#5a9935] transition-colors"
          >
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link
            href="/privacy-policy"
            className="text-[#6fb43f] hover:text-[#5a9935] transition-colors"
          >
            Privacy Policy
          </Link>
        </label>
      </div>
    </div>
  );
}