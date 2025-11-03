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
    profilePicture?: string;
    role?: string;
    memberSince: string;
    totalOrders: number;
    status: 'active' | 'inactive';
    dateOfBirth?: string;
    gender?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
  }