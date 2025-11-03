'use client';

import InputFieldWithIcon from '@/src/components/common/InputFieldWithIcon';
import { Phone } from 'lucide-react';

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function PhoneField({ value, onChange, disabled }: PhoneFieldProps) {
  return (
    <InputFieldWithIcon
        label="Phone Number"
        id="phone"
        type="tel"
        value={value}
        onChange={onChange}
        placeholder="Enter your phone number"
        required
        icon={Phone}
        focusRing="#6fb43f"
        disabled={disabled}
      />
  );
}