'use client';

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#6fb43f] to-[#5a9935] hover:from-[#5a9935] hover:to-[#4a8a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6fb43f] transform hover:-translate-y-0.5 transition-all duration-300"
    >
      <span className="flex items-center">
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
      </span>
    </button>
  );
}