'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NameFields from './NameFields';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import TermsCheckbox from './TermsCheckbox';
import SubmitButton from './SubmitButton';
import SocialLogin from './SocialLogin';
import { RegisterFormData } from '@/src/types/auth';
import PasswordField from './PasswordField';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { registerUser, clearError } from '@/src/lib/store/slices/authSlice';

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error: authError } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.terms) {
      alert('Please accept the Terms of Service and Privacy Policy');
      return;
    }

    try {
      await dispatch(registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone
      })).unwrap();
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const updateField = (field: keyof RegisterFormData, value: string | boolean) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {authError && (
          <div className="p-4 text-sm text-red-800 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
            {authError}
          </div>
        )}
        
        <NameFields
          firstName={formData.firstName}
          lastName={formData.lastName}
          onFirstNameChange={(value) => updateField('firstName', value)}
          onLastNameChange={(value) => updateField('lastName', value)}
          disabled={loading}
        />

        <EmailField
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          disabled={loading}
        />

        <PhoneField
          value={formData.phone}
          onChange={(value) => updateField('phone', value)}
          disabled={loading}
        />

        <PasswordField
          id="password"
          label="Password"
          value={formData.password}
          onChange={(value) => updateField('password', value)}
          placeholder="Create a password"
          disabled={loading}
        />

        <PasswordField
          id="confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(value) => updateField('confirmPassword', value)}
          placeholder="Confirm your password"
          disabled={loading}
        />

        <TermsCheckbox
          checked={formData.terms}
          onChange={(checked) => updateField('terms', checked)}
          disabled={loading}
        />

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#6fb43f] to-[#5a9935] hover:from-[#5a9935] hover:to-[#4a8a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6fb43f] transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={loading}
        >
          <span className="flex items-center">
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Create Account
              </>
            )}
          </span>
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/signin" className="font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors">
            Sign in here
          </Link>
        </p>
      </div>
    </>
  );
}