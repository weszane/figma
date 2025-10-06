export function initializeTheme() {
}

export function getCurrentThemePreferences() {
  return {
    color: document.body.getAttribute('data-preferred-theme') || 'light',
    brand: document.body.getAttribute('data-editor-theme') || 'design',
    enhancedContrast: document.body.hasAttribute('data-enhanced-contrast'),
  }
}

export function toggleEnhancedContrast(enabled: any) {
  let attributeName = 'data-enhanced-contrast'
  enabled ? document.body.setAttribute(attributeName, '') : document.body.removeAttribute(attributeName)
}

export let themeAttributeNames = ['data-editor-theme', 'data-preferred-theme', 'data-enhanced-contrast']

export function createThemeDataAttributes({
  brand: brandTheme,
  color: colorTheme,
  enhancedContrast: isEnhancedContrast,
}) {
  return {
    'data-editor-theme': brandTheme,
    'data-preferred-theme': colorTheme,
    'data-enhanced-contrast': isEnhancedContrast || void 0,
  }
}

export function compareThemePreferences(themeA, themeB) {
  return themeA === themeB || themeA.color === themeB.color && themeA.brand === themeB.brand && themeA.enhancedContrast === themeB.enhancedContrast
}

// Export aliases for backward compatibility if needed
export const Pd = createThemeDataAttributes
export const Qf = toggleEnhancedContrast
export const TE = getCurrentThemePreferences
export const dK = themeAttributeNames
export const lQ = initializeTheme
export const v9 = compareThemePreferences
