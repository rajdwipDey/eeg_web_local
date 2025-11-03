export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  role: string;
  isActive: boolean;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  bio?: string;
  profilePicture?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}