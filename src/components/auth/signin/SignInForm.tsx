'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginUser, clearError } from '@/src/lib/store/slices/authSlice';
import { emailSchema, passwordSchema } from '@/src/lib/validations/auth.schemas';
import { Button } from '@/src/components/ui/Button';
import InputField from '@/src/components/common/InputField';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { EmailIcon, EyeIcon, EyeOffIcon, LockIcon } from '../../icons';

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { loading, error: authError } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = async (data: SignInFormData) => {
    try {
      await dispatch(loginUser({
        email: data.email,
        password: data.password,
      })).unwrap();

      const redirect = searchParams.get('redirect') || '/dashboard';
      router.push(redirect);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {authError && (
          <div className="p-4 text-sm text-red-800 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
            {authError}
          </div>
        )}

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
              placeholder="Enter your password"
              autoComplete="current-password"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={value}
                  onChange={onChange}
                  disabled={loading}
                  className="h-4 w-4 text-[#6fb43f] focus:ring-[#6fb43f] border-gray-300 dark:border-gray-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              )}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300 select-none"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors focus:outline-none focus:underline"
            tabIndex={loading ? -1 : 0}
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          variant="success"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors focus:outline-none focus:underline"
            tabIndex={loading ? -1 : 0}
          >
            Sign up here
          </Link>
        </p>
      </div>
    </>
  );
}