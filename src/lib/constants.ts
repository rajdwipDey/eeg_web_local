export const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];
  
  export const TIMEZONE_OPTIONS = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' }
  ];
  
  export const CURRENCY_OPTIONS = [
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'British Pound (GBP)' },
    { value: 'CAD', label: 'Canadian Dollar (CAD)' }
  ];
  
  export const MAX_FILE_SIZE = 5 * 1024 * 1024;

  export const COLORS = {
    primary: {
      dark: '#005d90',
      light: '#42b3e5',
      gradient: 'from-[#005d90] to-[#42b3e5]',
    },
    status: {
      delivered: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        label: 'Delivered',
      },
      shipped: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        label: 'Shipped',
      },
      processing: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        label: 'Processing',
      },
    },
    orderStatus: {
      'in-stock': {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-800 dark:text-green-200',
        label: 'In Stock',
      },
      'limited': {
        bg: 'bg-yellow-100 dark:bg-yellow-900',
        text: 'text-yellow-800 dark:text-yellow-200',
        label: '2-3 Weeks',
      },
      'pre-order': {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-800 dark:text-blue-200',
        label: 'Pre-Order',
      },
    },
  };
  
  export const PAYMENT_METHODS = [
    { name: 'VISA', color: 'bg-blue-600' },
    { name: 'MC', color: 'bg-red-500' },
    { name: 'AMEX', color: 'bg-blue-500' },
    { name: 'PP', color: 'bg-yellow-400' },
  ];
  
  export const FILTER_OPTIONS = [
    { value: 'all', label: 'All Orders' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
  ];