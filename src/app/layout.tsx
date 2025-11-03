import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '../contexts/ThemeContext'
import { ThemeToggle } from '../components/common/ThemeToggle'
import './globals.css'
import { ThemeScript } from './ThemeScript'
import StoreProvider from '../lib/store/StoreProvider'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Aegys - Safety Solutions',
    template: '%s | Aegys'
  },
  description: 'Providing Safety Solutions That Make a Difference',
  icons: {
    icon: '/img/logo-color.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="font-montserrat bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <StoreProvider>
          <ThemeScript />
          <ThemeProvider>
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}