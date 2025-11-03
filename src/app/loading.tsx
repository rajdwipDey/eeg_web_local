'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => Math.min(p + 2, 100))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  if (progress >= 100) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center space-y-8 px-6">
        {/* Logo */}
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 blur-3xl bg-[#005d90]/10 scale-150" />
          <div className="relative flex justify-center">
            <Image
              src="/img/logo-color.png"
              alt="Aegys Logo"
              width={220}
              height={88}
              className="w-[220px] h-auto object-contain mx-auto"
              priority
              unoptimized
            />
          </div>
          <p className="text-gray-600 text-sm font-light mt-3 text-center">
            MRI Safety Solutions
          </p>
        </div>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-[#005d90] border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-3 bg-gradient-to-br from-[#005d90] to-[#6fb43f] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-72 mx-auto space-y-2">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#005d90] to-[#6fb43f] rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Loading...</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-2 h-2 bg-[#6fb43f] rounded-full animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm font-light">
            Initializing Security System
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  )
}
// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(p => p >= 100 ? 100 : p + 4)
//     }, 50)
//     return () => clearInterval(interval)
//   }, [])

//   if (progress >= 100) return null

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
//       <div className="text-center space-y-8 px-6">
//         {/* Logo with white background */}
//         <div className="relative">
//           <div className="absolute inset-0 blur-3xl bg-[#6fb43f]/10 scale-150" />
//           <div className="relative bg-white p-8 rounded-2xl inline-block">
//             <Image
//               src="/img/logo-color.png"
//               alt="Aegys Logo"
//               width={200}
//               height={80}
//               className="w-[200px] h-auto object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Spinner */}
//         <div className="flex justify-center">
//           <div className="relative w-16 h-16">
//             <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
//             <div className="absolute inset-0 border-4 border-[#005d90] border-t-transparent rounded-full animate-spin" />
//             <div className="absolute inset-3 bg-gradient-to-br from-[#005d90] to-[#6fb43f] rounded-full opacity-20" />
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-64 space-y-2">
//           <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-[#005d90] to-[#6fb43f] transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//           <p className="text-gray-500 text-sm font-light">Loading...</p>
//         </div>
//       </div>

//       <style jsx>{`
//         .animate-spin {
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   )
// }