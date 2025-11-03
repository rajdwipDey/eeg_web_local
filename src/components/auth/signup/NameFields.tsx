'use client';

import InputFieldWithIcon from '@/src/components/common/InputFieldWithIcon';
import { User } from 'lucide-react';

interface NameFieldsProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  disabled?: boolean;
}

export default function NameFields({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  disabled,
}: NameFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputFieldWithIcon
        label="First Name"
        id="firstName"
        value={firstName}
        onChange={onFirstNameChange}
        placeholder="First name"
        required
        icon={User}
        focusRing="#6fb43f"
        disabled={disabled}
      />
      <InputFieldWithIcon
        label="Last Name"
        id="lastName"
        value={lastName}
        onChange={onLastNameChange}
        placeholder="Last name"
        required
        icon={User}
        focusRing="#6fb43f"
        disabled={disabled}
      />
    </div>
  );
}