
import { AxiosRequestConfig } from 'axios';
import { apiClient } from './client';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    timestamp: string;
    path: string;
    method: string;
    statusCode: number;
  };
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

class ApiService {
    /**
 * Makes a GET request to the specified URL.
 * @param {string} url - The URL to send the GET request to.
 * @returns {Promise<ApiResponse | undefined>} - The data returned from the API.
 */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.get<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.post<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.put<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.patch<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.delete<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): ApiError {
    if (error.response) {
      return {
        message: error.response.data?.message || 'An error occurred',
        errors: error.response.data?.errors,
        statusCode: error.response.status,
      };
    }
    
    if (error.request) {
      return {
        message: 'No response from server. Please check your connection.',
      };
    }
    
    return {
      message: error.message || 'An unexpected error occurred',
    };
  }
}

export const apiService = new ApiService();