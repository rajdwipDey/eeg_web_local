import PageHeader from '@/src/components/common/PageHeader';
import { AccountStatus } from '@/src/components/dashboard/AccountStatus';
import { NavigationTabs } from '@/src/components/dashboard/NavigationTabs';
import { NotificationsList } from '@/src/components/dashboard/NotificationsList';
import { QuickActions } from '@/src/components/dashboard/QuickActions';
import { RecentOrders } from '@/src/components/dashboard/RecentOrders';
import { StatsGrid } from '@/src/components/dashboard/StatsGrid';
import { WelcomeBanner } from '@/src/components/dashboard/WelcomeBanner';
import { mockNavItems, mockNotifications, mockOrders, mockQuickActions, mockStats, mockUser } from '@/src/dummyData/dashboardData';
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's your account overview"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="#main-content"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <WelcomeBanner user={mockUser} />
          <NavigationTabs items={mockNavItems} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <StatsGrid stats={mockStats} />
              <RecentOrders orders={mockOrders} />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <QuickActions actions={mockQuickActions} />
              <NotificationsList notifications={mockNotifications} />
              <AccountStatus />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
