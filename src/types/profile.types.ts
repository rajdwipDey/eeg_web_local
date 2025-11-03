export interface UserProfile {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    organization: string;
    bio: string;
    profileImage?: string;
    memberSince: string;
    totalOrders: number;
    status: 'active' | 'inactive';
  }