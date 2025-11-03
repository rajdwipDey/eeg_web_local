import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SignInForm from '@/src/components/auth/signin/SignInForm';
import Logo from '@/src/components/auth/Logo';

export const metadata: Metadata = {
  title: 'Sign In - Aegys',
  description: 'Sign in to your Aegys account to continue',
};

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to your Aegys account to continue
            </p>
          </div>
          {/* Login Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <SignInForm />
          </div>
        </div>
      </div>
    </main>
  );
}