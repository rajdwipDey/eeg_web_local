// src/lib/api/tokenService.ts
import { User } from '@/src/types/auth.types';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user_data';

class TokenService {

  private setCookie(name: string, value: string, days = 7): void {
    if (typeof document === 'undefined') return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax;Secure`;
  }

  private getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`))
      ?.split('=')[1];
    return value ? decodeURIComponent(value) : null;
  }

  private deleteCookie(name: string): void {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  setToken(token: string): void {
    this.setCookie(TOKEN_KEY, token, 7);
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY) || this.getCookie(TOKEN_KEY);
  }

  setUser(user: User): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  getUser(): User | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  clearAll(): void {
    this.deleteCookie(TOKEN_KEY);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }
}

export const tokenService = new TokenService();