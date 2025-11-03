'use client';

import InputFieldWithIcon from '@/src/components/common/InputFieldWithIcon';
import { Mail } from 'lucide-react';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function EmailField({ value, onChange, disabled }: EmailFieldProps) {
  return (
    <InputFieldWithIcon
        label="Email Address"
        id="email"
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Enter your email"
        required
        icon={Mail}
        focusRing="#6fb43f"
        disabled={disabled}
      />
  );
}