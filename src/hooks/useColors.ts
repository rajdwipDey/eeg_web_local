import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../config/colors'

export const useColors = () => {
  const { isDark } = useTheme()
  
  return {
    // Brand colors
    primary: colors.primary[500], // #42b3e5
    secondary: colors.secondary[500], // #6fb43f
    darkBlue: colors.darkBlue[500], // #005d90
    
    // Theme-aware colors
    background: isDark ? colors.semantic.background.dark : colors.semantic.background.light,
    foreground: isDark ? colors.semantic.foreground.dark : colors.semantic.foreground.light,
    card: isDark ? colors.semantic.card.dark : colors.semantic.card.light,
    cardForeground: isDark ? colors.semantic.cardForeground.dark : colors.semantic.cardForeground.light,
    border: isDark ? colors.semantic.border.dark : colors.semantic.border.light,
    input: isDark ? colors.semantic.input.dark : colors.semantic.input.light,
    muted: isDark ? colors.semantic.muted.dark : colors.semantic.muted.light,
    mutedForeground: isDark ? colors.semantic.mutedForeground.dark : colors.semantic.mutedForeground.light,
    
    // Status colors
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    
    // Utility colors
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    
    // Gradient combinations
    primaryGradient: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.darkBlue[500]})`,
    secondaryGradient: `linear-gradient(135deg, ${colors.secondary[500]}, ${colors.primary[500]})`,
  }
}

export default useColors

