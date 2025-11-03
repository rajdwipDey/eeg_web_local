'use client'

import { useColors } from '../hooks/useColors'

export default function ColorDemo() {
  const colors = useColors()

  return (
    <div className="p-8 space-y-6" style={{ backgroundColor: colors.background, color: colors.foreground }}>
      <h2 className="text-3xl font-bold" style={{ color: colors.darkBlue }}>
        Color System Demo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Brand Colors */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Brand Colors</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.primary }}></div>
              <span>Primary: {colors.primary}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.secondary }}></div>
              <span>Secondary: {colors.secondary}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.darkBlue }}></div>
              <span>Dark Blue: {colors.darkBlue}</span>
            </div>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Theme Colors</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.background }}></div>
              <span>Background</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.card }}></div>
              <span>Card</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.border }}></div>
              <span>Border</span>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Status Colors</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.success }}></div>
              <span>Success</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.warning }}></div>
              <span>Warning</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.error }}></div>
              <span>Error</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: colors.primary }}>Gradient Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="h-20 rounded-lg flex items-center justify-center text-white font-semibold"
            style={{ background: colors.primaryGradient }}
          >
            Primary Gradient
          </div>
          <div 
            className="h-20 rounded-lg flex items-center justify-center text-white font-semibold"
            style={{ background: colors.secondaryGradient }}
          >
            Secondary Gradient
          </div>
        </div>
      </div>
    </div>
  )
}

