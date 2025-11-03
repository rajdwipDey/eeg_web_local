'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RegisterFormData, registerSchema } from '@/src/lib/validations/auth.schemas';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { registerUser, clearError } from '@/src/lib/store/slices/authSlice';
import { Button } from '@/src/components/ui/Button';
import InputField from '@/src/components/common/InputField';
import { EmailIcon, LockIcon, EyeIcon, EyeOffIcon } from '../../icons';
import { showToast } from '@/src/config/toastConfig';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error: authError } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await dispatch(registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
      })).unwrap();

      showToast.success('Account created successfully! Redirecting...');
      router.push('/dashboard');
    } catch (error: any) {      
      const errorMessage = 
        error?.error?.message || 
        error?.message || 
        error?.data?.error?.message ||
        error?.data?.message ||
        'Registration failed. Please try again.';
      
      showToast.error(errorMessage);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="firstName"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputField
                label="First Name"
                type="text"
                id="firstName"
                name="firstName"
                value={value}
                onChange={onChange}
                placeholder="Enter your first name"
                autoComplete="given-name"
                disabled={loading}
                error={errors.firstName?.message}
                focusRing="#6fb43f"
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputField
                label="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                value={value}
                onChange={onChange}
                placeholder="Enter your last name"
                autoComplete="family-name"
                disabled={loading}
                error={errors.lastName?.message}
                focusRing="#6fb43f"
              />
            )}
          />
        </div>

        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={value}
              onChange={onChange}
              placeholder="Enter your email"
              autoComplete="email"
              disabled={loading}
              error={errors.email?.message}
              focusRing="#6fb43f"
              icon={
                <EmailIcon className="h-5 w-5 text-gray-400 group-focus-within:text-[#6fb43f] transition-colors duration-300" />
              }
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Phone Number"
              type="tel"
              id="phone"
              name="phone"
              value={value}
              onChange={onChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              disabled={loading}
              error={errors.phone?.message}
              focusRing="#6fb43f"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={value}
              onChange={onChange}
              placeholder="Create a password"
              autoComplete="new-password"
              disabled={loading}
              error={errors.password?.message}
              focusRing="#6fb43f"
              icon={
                <LockIcon className="h-5 w-5 text-gray-400 group-focus-within:text-[#6fb43f] transition-colors duration-300" />
              }
              rightAddon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="pr-3 pl-2 h-full flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
                  )}
                </button>
              }
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={value}
              onChange={onChange}
              placeholder="Confirm your password"
              autoComplete="new-password"
              disabled={loading}
              error={errors.confirmPassword?.message}
              focusRing="#6fb43f"
              icon={
                <LockIcon className="h-5 w-5 text-gray-400 group-focus-within:text-[#6fb43f] transition-colors duration-300" />
              }
              rightAddon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={loading}
                  className="pr-3 pl-2 h-full flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200" />
                  )}
                </button>
              }
            />
          )}
        />

        <div>
          <div className="flex items-start">
            <Controller
              name="terms"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  id="terms"
                  type="checkbox"
                  checked={value}
                  onChange={onChange}
                  disabled={loading}
                  className="h-4 w-4 text-[#6fb43f] focus:ring-[#6fb43f] border-gray-300 dark:border-gray-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                />
              )}
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300 select-none"
            >
              I agree to the{' '}
              <Link
                href="/terms"
                className="font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors focus:outline-none focus:underline"
                tabIndex={loading ? -1 : 0}
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.terms.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="success"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            href="/signin"
            className="font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors focus:outline-none focus:underline"
            tabIndex={loading ? -1 : 0}
          >
            Sign in here
          </Link>
        </p>
      </div>
    </>
  );
}