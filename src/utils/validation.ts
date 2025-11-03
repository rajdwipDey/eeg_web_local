import { MAX_FILE_SIZE } from "../lib/constants";

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateFileSize = (file: File, maxSize: number = MAX_FILE_SIZE): boolean => {
    return file.size <= maxSize;
  };
  
  export const validateFileType = (file: File, allowedTypes: string[] = ['image/*']): boolean => {
    return allowedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -2));
      }
      return file.type === type;
    });
  };