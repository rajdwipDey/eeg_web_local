export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
  export interface AuthResponse {
    success: boolean;
    error?: string;
  }