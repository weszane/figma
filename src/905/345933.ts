/**
 * Theme configuration constants
 *
 * @deprecated C_ - Use ThemeVariants instead
 * @deprecated D6 - Use ON_THEME_UPDATE_IPC_KEY instead
 * @deprecated Nx - Use ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY instead
 */
const ThemeVariants = ['light', 'dark', 'system'] as const
const ON_THEME_UPDATE_IPC_KEY = 'on-theme-update-ipc-key'
const ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY = 'on-enhanced-contrast-update-ipc-key'

// Legacy exports for backward compatibility
export const C_ = ThemeVariants
export const D6 = ON_THEME_UPDATE_IPC_KEY
export const Nx = ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY

// New meaningful exports
export { ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY, ON_THEME_UPDATE_IPC_KEY, ThemeVariants }
