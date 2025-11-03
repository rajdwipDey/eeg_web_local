import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginCredentials, RegisterData } from '../types/auth.types';
import { authService } from '../services/authService';
import { ApiError } from '../lib/api/apiService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      
      const user = await authService.login(credentials);
      console.log(user,"user");
      
      router.push('/dashboard');
      return user;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      setError(null);
      
      const user = await authService.register(data);
      
      router.push('/dashboard');
      return user;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    loading,
    error,
    isAuthenticated: authService.isAuthenticated(),
  };
};