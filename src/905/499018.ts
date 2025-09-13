// Original code from /Users/allen/sigma-main/src/905/499018.ts
// Refactored to use meaningful function names, add types, and JSDoc documentation.
// Grouped related color utility functions together.
// Maintained original functionality: generating CSS variable strings for colors.

/**
 * Gets the CSS variable string for background color based on the variant.
 * Original function: $$n0
 * @param variant - The color variant (e.g., "transparent", "default", or a specific color name).
 * @returns The CSS variable string.
 */
export function getBackgroundColor(variant: string): string {
  switch (variant) {
    case 'transparent':
      return variant
    case 'default':
      return 'var(--color-bg, var(--fallback-color-bg))'
    default:
      return `var(--color-bg-${variant}, var(--fallback-color-bg-${variant}))`
  }
}

/**
 * Gets the CSS variable string for border color based on the variant.
 * Original function: $$r1
 * @param variant - The color variant (e.g., "transparent", "default", or a specific color name).
 * @returns The CSS variable string.
 */
export function getBorderColor(variant: string): string {
  switch (variant) {
    case 'transparent':
      return variant
    case 'default':
      return 'var(--color-border, var(--fallback-color-border))'
    default:
      return `var(--color-border-${variant}, var(--fallback-color-border-${variant}))`
  }
}

/**
 * Gets the CSS variable string for text color based on the variant.
 * Original function: $$a3
 * @param variant - The color variant (e.g., "default" or a specific color name).
 * @returns The CSS variable string.
 */
export function getTextColor(variant: string): string {
  return variant === 'default'
    ? 'var(--color-text, var(--fallback-color-text))'
    : `var(--color-text-${variant}, var(--fallback-color-text-${variant}))`
}

/**
 * Gets the CSS variable string for icon color based on the variant.
 * Original function: $$s2
 * @param variant - The color variant (e.g., "default" or a specific color name).
 * @returns The CSS variable string.
 */
export function getIconColor(variant: string): string {
  return variant === 'default'
    ? 'var(--color-icon, var(--fallback-color-icon))'
    : `var(--color-icon-${variant}, var(--fallback-color-icon-${variant}))`
}

// Updated exports to reference the refactored function names.
// Original exports: K = $$n0, Uw = $$r1, TD = $$s2, jk = $$a3
export const K = getBackgroundColor
export const Uw = getBorderColor
export const TD = getIconColor
export const jk = getTextColor
