'use client';

import { FacebookIcon, GoogleIcon } from "../../icons";


export default function SocialLoginButtons() {
  const handleGoogleSignIn = () => {
    console.log('Google sign in');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook sign in');
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
      >
        <GoogleIcon className="w-5 h-5" />
        <span className="ml-2">Google</span>
      </button>
      <button
        type="button"
        onClick={handleFacebookSignIn}
        className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
      >
        <FacebookIcon className="w-5 h-5" />
        <span className="ml-2">Facebook</span>
      </button>
    </div>
  );
}