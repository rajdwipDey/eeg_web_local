export interface NotificationPreferences {
    orderUpdates: boolean;
    productUpdates: boolean;
    marketing: boolean;
  }
  
  export interface DisplayPreferences {
    language: string;
    timezone: string;
    currency: string;
  }
  
  export interface PrivacyPreferences {
    profileVisibility: boolean;
    dataAnalytics: boolean;
  }
  
  export interface Preferences {
    notifications: NotificationPreferences;
    display: DisplayPreferences;
    privacy: PrivacyPreferences;
  }