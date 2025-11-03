import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RegisterForm from '@/src/components/auth/signup/RegisterForm';

export const metadata: Metadata = {
  title: 'Create Account - Aegys',
  description: 'Join Aegys and get access to our safety solutions',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/logo-color.png"
                alt="Aegys Logo"
                width={200}
                height={60}
                priority
                className="object-contain"
              />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join Aegys and get access to our safety solutions
            </p>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}