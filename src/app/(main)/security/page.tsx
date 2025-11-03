
'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHeader from '@/src/components/common/PageHeader'
import { NavigationTabs } from '@/src/components/dashboard/NavigationTabs'
import { mockNavItems } from '@/src/dummyData/dashboardData'
import { Home,MapPin, Shield, ShoppingCart, User } from 'lucide-react'
import DashboardNav from '@/src/components/profile/DashboardNav'

export default function Security() {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)
  const [activeSessions, setActiveSessions] = useState([
    {
      id: 'current',
      device: 'MacBook Pro - Chrome',
      location: 'New York, United States',
      status: 'Active now',
      ip: '192.168.1.1',
      isCurrent: true
    },
    {
      id: 'iphone',
      device: 'iPhone 13 - Safari',
      location: 'Los Angeles, United States',
      status: '2 hours ago',
      ip: '192.168.1.105',
      isCurrent: false
    },
    {
      id: 'ipad',
      device: 'iPad Pro - Safari',
      location: 'Chicago, United States',
      status: '1 day ago',
      ip: '192.168.1.50',
      isCurrent: false
    }
  ])

  const loginHistory = [
    { success: true, date: 'October 15, 2024 at 9:30 AM', location: 'New York, US' },
    { success: true, date: 'October 14, 2024 at 2:15 PM', location: 'New York, US' },
    { success: true, date: 'October 13, 2024 at 10:00 AM', location: 'Los Angeles, US' },
    { success: false, date: 'October 12, 2024 at 11:45 PM', location: 'Unknown location' },
    { success: true, date: 'October 12, 2024 at 8:20 AM', location: 'Chicago, US' }
  ]

  const handlePasswordChange = (e:any) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    })
  }

  const handlePasswordSubmit = (e:any) => {
    e.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Password change submitted')
    alert('Password updated successfully!')
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  const toggle2FA = () => {
    setIs2FAEnabled(!is2FAEnabled)
    alert(is2FAEnabled ? '2FA has been disabled' : '2FA has been enabled')
  }

  const logoutDevice = (deviceId:any) => {
    if (confirm('Are you sure you want to logout this device?')) {
      setActiveSessions(sessions => sessions.filter(session => session.id !== deviceId))
    }
  }

  const logoutAllDevices = () => {
    if (confirm('Are you sure you want to logout all devices except current?')) {
      setActiveSessions(sessions => sessions.filter(session => session.isCurrent))
    }
  }

  const deleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone!')) {
      console.log('Account deletion requested')
      alert('Account deletion process initiated')
    }
  }
  const dashboardNavItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile-settings', icon: <User className="w-5 h-5" />},
    { label: 'Addresses', href: '/addresses', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Orders', href: '/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { label: 'Security', href: '/security', icon: <Shield className="w-5 h-5" /> , active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

       <PageHeader
        title="Security Settings"
        subtitle="Protect your account with enhanced security features"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="#next-section"
      />
      <section id="next-section" className="py-20">
        <div className="container mx-auto px-4">
          {/* <NavigationTabs items={mockNavItems} /> */}
          <DashboardNav items={dashboardNavItems} />
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Security & Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400">Protect your account with enhanced security features</p>
            </div>

            {/* Change Password Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] px-6 py-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white">Change Password</h3>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Current Password*
                    </label>
                    <input 
                      type="password" 
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      New Password*
                    </label>
                    <input 
                      type="password" 
                      name="newPassword"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      required
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Must be at least 8 characters with uppercase, lowercase, and numbers</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Confirm New Password*
                    </label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>

            {/* Two-Factor Authentication Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] px-6 py-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white">Two-Factor Authentication</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Add an extra layer of security to your account by enabling two-factor authentication.</p>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        is2FAEnabled 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          is2FAEnabled ? 'bg-green-500' : 'bg-red-500'
                        }`}></span>
                        {is2FAEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={toggle2FA}
                    className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold whitespace-nowrap"
                  >
                    {is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                  </button>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p className="text-sm text-blue-900 dark:text-blue-300 font-semibold mb-1">How it works</p>
                      <p className="text-sm text-blue-800 dark:text-blue-400">You'll receive a verification code via SMS or authenticator app each time you log in.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Sessions Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="text-xl font-bold text-white">Active Sessions</h3>
                  </div>
                  <button 
                    onClick={logoutAllDevices}
                    className="text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Logout All
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {activeSessions.map((session) => (
                    <div key={session.id} className={`flex items-start gap-4 p-4 rounded-lg ${
                      session.isCurrent 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                        : 'bg-gray-50 dark:bg-gray-700/50'
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        session.isCurrent 
                          ? 'bg-green-100 dark:bg-green-900/50' 
                          : 'bg-gray-100 dark:bg-gray-600'
                      }`}>
                        <svg className={`w-6 h-6 ${
                          session.isCurrent 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {session.device.includes('iPhone') || session.device.includes('iPad') ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          )}
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">{session.device}</h4>
                          {session.isCurrent && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">Current</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{session.location} • {session.status}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">IP: {session.ip}</p>
                      </div>
                      {!session.isCurrent && (
                        <button 
                          onClick={() => logoutDevice(session.id)}
                          className="text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                          Logout
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Login History Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] px-6 py-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white">Recent Login History</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {loginHistory.map((login, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                      <div className={`w-2 h-2 ${login.success ? 'bg-green-500' : 'bg-red-500'} rounded-full flex-shrink-0`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {login.success ? 'Successful login' : 'Failed login attempt'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{login.date} • {login.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delete Account Card */}
            <div className="bg-white dark:bg-gray-800 border-2 border-red-200 dark:border-red-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-red-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white">Danger Zone</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Delete Account</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <button 
                  onClick={deleteAccount}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

