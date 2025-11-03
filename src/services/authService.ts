// src/services/authService.ts
import { apiService } from '@/src/lib/api/apiService';
import { tokenService } from '@/src/lib/api/tokenService';
import { AuthResponse, LoginCredentials, RegisterData, User } from '@/src/types/auth.types';
import { API } from '@/src/utils/apis';

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await apiService.post<AuthResponse>(API.login, credentials);
    tokenService.setToken(response.token);
    tokenService.setUser(response.user);
    return response.user;
  }

  async register(data: RegisterData): Promise<User> {
    const response = await apiService.post<AuthResponse>(API.register, data);
    tokenService.setToken(response.token);
    tokenService.setUser(response.user);
    return response.user;
  }

  async forgotPassword(email: string): Promise<void> {
    await apiService.post(API.forgotPassword, { email });
  }

  async resetPassword(token: string, password: string): Promise<void> {
    await apiService.post(API.resetPassword, { token, password });
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    await apiService.put(API.changePassword, { oldPassword: currentPassword, newPassword: newPassword });
  }

  async logout(): Promise<void> {
    try {
      // await apiService.post(API.logout);
    } finally {
      tokenService.clearAll();
    }
  }

  isAuthenticated(): boolean {
    return tokenService.isAuthenticated();
  }

  getStoredUser(): User | null {
    return tokenService.getUser();
  }
}

export const authService = new AuthService();