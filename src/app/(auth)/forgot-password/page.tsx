import { Metadata } from 'next';
import Link from 'next/link';
import ForgotPasswordForm from '@/src/components/auth/ForgotPassword/ForgotPasswordForm';
import Logo from '@/src/components/auth/Logo';

/* --------------------------------------------
 * Centralized Static Data
 * ------------------------------------------ */
const FORGOT_PASSWORD_CONTENT = {
  meta: {
    title: 'Forgot Password - Aegys',
    description: 'Reset your Aegys account password',
  },
  header: {
    title: 'Forgot Password?',
    subtitle: "No worries, we'll send you reset instructions",
  },
  link: {
    href: '/signin',
    text: 'Back to Sign In',
  },
};

/* --------------------------------------------
 * Metadata for Next.js SEO
 * ------------------------------------------ */
export const metadata: Metadata = {
  title: FORGOT_PASSWORD_CONTENT.meta.title,
  description: FORGOT_PASSWORD_CONTENT.meta.description,
};

/* --------------------------------------------
 * Icons
 * ------------------------------------------ */
const BackArrowIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

/* --------------------------------------------
 * Page Component
 * ------------------------------------------ */
export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <header className="text-center mb-8">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {FORGOT_PASSWORD_CONTENT.header.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {FORGOT_PASSWORD_CONTENT.header.subtitle}
            </p>
          </header>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <ForgotPasswordForm />

            <nav className="mt-6 text-center">
              <Link
                href={FORGOT_PASSWORD_CONTENT.link.href}
                className="inline-flex items-center text-sm font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors"
              >
                <BackArrowIcon />
                {FORGOT_PASSWORD_CONTENT.link.text}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
