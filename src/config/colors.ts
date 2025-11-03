// Centralized color system for Aegys application
export const colors = {
  // Primary brand colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#42b3e5', 
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Secondary brand colors
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#6fb43f',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  // Dark blue brand color
  darkBlue: {
    50: '#f0f4ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#005d90',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  /* Status colors */
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  /* Semantic color mappings */
  semantic: {
    background: {
      light: '#ffffff',
      dark: '#0a0a0a',
    },
    foreground: {
      light: '#171717',
      dark: '#ededed',
    },
    card: {
      light: '#ffffff',
      dark: '#1f2937',
    },
    cardForeground: {
      light: '#171717',
      dark: '#ededed',
    },
    border: {
      light: '#e5e7eb',
      dark: '#374151',
    },
    input: {
      light: '#ffffff',
      dark: '#374151',
    },
    primary: {
      light: '#42b3e5',
      dark: '#42b3e5',
    },
    primaryForeground: {
      light: '#ffffff',
      dark: '#ffffff',
    },
    secondary: {
      light: '#6fb43f',
      dark: '#6fb43f',
    },
    secondaryForeground: {
      light: '#ffffff',
      dark: '#ffffff',
    },
    muted: {
      light: '#f5f5f5',
      dark: '#374151',
    },
    mutedForeground: {
      light: '#737373',
      dark: '#9ca3af',
    },
    accent: {
      light: '#f5f5f5',
      dark: '#374151',
    },
    accentForeground: {
      light: '#171717',
      dark: '#ededed',
    },
    destructive: {
      light: '#ef4444',
      dark: '#ef4444',
    },
    destructiveForeground: {
      light: '#ffffff',
      dark: '#ffffff',
    },
  }
}

/* Helper function to get colors based on theme */
export const getThemeColors = (isDark: boolean = false) => {
  return {
    background: isDark ? colors.semantic.background.dark : colors.semantic.background.light,
    foreground: isDark ? colors.semantic.foreground.dark : colors.semantic.foreground.light,
    card: isDark ? colors.semantic.card.dark : colors.semantic.card.light,
    cardForeground: isDark ? colors.semantic.cardForeground.dark : colors.semantic.cardForeground.light,
    border: isDark ? colors.semantic.border.dark : colors.semantic.border.light,
    input: isDark ? colors.semantic.input.dark : colors.semantic.input.light,
    primary: isDark ? colors.semantic.primary.dark : colors.semantic.primary.light,
    primaryForeground: isDark ? colors.semantic.primaryForeground.dark : colors.semantic.primaryForeground.light,
    secondary: isDark ? colors.semantic.secondary.dark : colors.semantic.secondary.light,
    secondaryForeground: isDark ? colors.semantic.secondaryForeground.dark : colors.semantic.secondaryForeground.light,
    muted: isDark ? colors.semantic.muted.dark : colors.semantic.muted.light,
    mutedForeground: isDark ? colors.semantic.mutedForeground.dark : colors.semantic.mutedForeground.light,
    accent: isDark ? colors.semantic.accent.dark : colors.semantic.accent.light,
    accentForeground: isDark ? colors.semantic.accentForeground.dark : colors.semantic.accentForeground.light,
    destructive: isDark ? colors.semantic.destructive.dark : colors.semantic.destructive.light,
    destructiveForeground: isDark ? colors.semantic.destructiveForeground.dark : colors.semantic.destructiveForeground.light,
  }
}

/* CSS custom properties for dynamic theming */
export const getCSSVariables = (isDark: boolean = false) => {
  const themeColors = getThemeColors(isDark)
  return {
    '--background': themeColors.background,
    '--foreground': themeColors.foreground,
    '--card': themeColors.card,
    '--card-foreground': themeColors.cardForeground,
    '--border': themeColors.border,
    '--input': themeColors.input,
    '--primary': themeColors.primary,
    '--primary-foreground': themeColors.primaryForeground,
    '--secondary': themeColors.secondary,
    '--secondary-foreground': themeColors.secondaryForeground,
    '--muted': themeColors.muted,
    '--muted-foreground': themeColors.mutedForeground,
    '--accent': themeColors.accent,
    '--accent-foreground': themeColors.accentForeground,
    '--destructive': themeColors.destructive,
    '--destructive-foreground': themeColors.destructiveForeground,
  }
}

export default colors

