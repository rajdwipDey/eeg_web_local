'use client';

import { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../ui/Button';
import SuccessMessage from '../../ui/SuccessMessage';
import InputField from '../../common/InputField';
import { authService } from '@/src/services/authService';

/* --------------------------------------------
 * Centralized Static Data
 * ------------------------------------------ */
const FORGOT_PASSWORD_CONTENT = {
  schema: {
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
  },
  messages: {
    info: "Enter your email address and we'll send you a link to reset your password.",
    successTitle: 'Check Your Email',
    successMessage:
      "We've sent a password reset link to your email address. Please check your inbox and follow the instructions.",
    successActionText: 'Try Again',
    successActionDescription: "Didn't receive the email? Check your spam folder or",
    errorGeneric: 'An unexpected error occurred. Please try again later.',
    errorFallback: 'Failed to send reset email. Please try again.',
  },
  labels: {
    email: 'Email Address',
  },
  placeholders: {
    email: 'Enter your email',
  },
  buttons: {
    sending: 'Sending...',
    send: 'Send Reset Link',
  },
  colors: {
    focusRing: '#6fb43f',
  },
};

/* --------------------------------------------
 * Validation Schema
 * ------------------------------------------ */
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, FORGOT_PASSWORD_CONTENT.schema.emailRequired)
    .email(FORGOT_PASSWORD_CONTENT.schema.emailInvalid),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

/* --------------------------------------------
 * Icons
 * ------------------------------------------ */
const EmailIcon = ({ isFocused }: { isFocused: boolean }) => (
  <svg
    className={`h-5 w-5 transition-colors duration-300 ${isFocused ? 'text-[#6fb43f]' : 'text-gray-400'
      }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

/* --------------------------------------------
 * Component
 * ------------------------------------------ */
export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setIsLoading(true);
        await authService.forgotPassword(data.email);
        setIsSuccess(true);
      } catch (error: any) {
        setError('root', { 
          type: 'manual', 
          message: error.message || FORGOT_PASSWORD_CONTENT.messages.errorFallback 
        });
      } finally {
        setIsLoading(false);
      }
    },
    [setError]
  );

  const handleReset = useCallback(() => {
    setIsSuccess(false);
  }, []);

  /* --------------------------------------------
   * Success State
   * ------------------------------------------ */
  if (isSuccess) {
    return (
      <SuccessMessage
        show={isSuccess}
        variant="centered"
        title={FORGOT_PASSWORD_CONTENT.messages.successTitle}
        message={FORGOT_PASSWORD_CONTENT.messages.successMessage}
        actionText={FORGOT_PASSWORD_CONTENT.messages.successActionText}
        actionDescription={FORGOT_PASSWORD_CONTENT.messages.successActionDescription}
        onActionClick={handleReset}
      />
    );
  }

  /* --------------------------------------------
   * Default Form
   * ------------------------------------------ */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Error Message */}
      {errors.root && (
        <div
          className="p-4 text-sm text-red-800 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800"
          role="alert"
        >
          {errors.root.message}
        </div>
      )}

      {/* Info Message */}
      <div
        className="p-4 text-sm text-blue-800 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-800"
        role="status"
      >
        {FORGOT_PASSWORD_CONTENT.messages.info}
      </div>

      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <InputField
            id="email"
            name="email"
            type="email"
            label={FORGOT_PASSWORD_CONTENT.labels.email}
            value={field.value}
            onChange={field.onChange}
            onBlur={(e) => {
              setIsFocused(false);
              field.onBlur();
            }}
            onFocus={() => setIsFocused(true)}
            placeholder={FORGOT_PASSWORD_CONTENT.placeholders.email}
            autoComplete="email"
            required
            error={errors.email?.message}
            icon={<EmailIcon isFocused={isFocused} />}
            focusRing={FORGOT_PASSWORD_CONTENT.colors.focusRing}
            ariaDescribedBy={errors.email ? 'email-error' : undefined}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="success"
        fullWidth
        loading={isLoading}
        icon={!isLoading ? <SendIcon /> : undefined}
      >
        {isLoading
          ? FORGOT_PASSWORD_CONTENT.buttons.sending
          : FORGOT_PASSWORD_CONTENT.buttons.send}
      </Button>
    </form>
  );
}
