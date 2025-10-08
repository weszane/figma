import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DARK_THEME_MEDIA_QUERY, ThemeContext } from '../905/187165';
import { ThemeVariants } from '../905/345933';

/**
 * Returns the user's theme preference from Redux store.
 * Original name: $$o1
 */
export function getThemePreference() {
  const themePreference = useSelector(state => state.theme.themePreference);
  return ThemeVariants.includes(themePreference) ? themePreference : 'light';
}

/**
 * Returns the currently visible theme from Redux store.
 * Original name: $$l0
 */
export function getVisibleTheme() {
  return useSelector(state => state.theme?.visibleTheme);
}

/**
 * Determines and tracks the current theme, updating on system theme changes.
 * Original name: $$d2
 */
export function useCurrentTheme() {
  const visibleTheme = getVisibleTheme();
  const [currentTheme, setCurrentTheme] = useState(visibleTheme ?? (DARK_THEME_MEDIA_QUERY.matches ? 'dark' : 'light'));
  useEffect(() => {
    if (visibleTheme) {
      setCurrentTheme(visibleTheme);
      return;
    }
    /**
     * Handles system theme changes.
     */
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setCurrentTheme(event.matches ? 'dark' : 'light');
    };
    DARK_THEME_MEDIA_QUERY.addEventListener('change', handleThemeChange);
    return () => DARK_THEME_MEDIA_QUERY.removeEventListener('change', handleThemeChange);
  }, [visibleTheme]);
  return currentTheme;
}

/**
 * Returns the current theme context value.
 * Original name: $$c3
 */
export function useThemeContext() {
  return useContext(ThemeContext);
}

// Exported aliases for backward compatibility
export const DP = getVisibleTheme;
export const am = getThemePreference;
export const dB = useCurrentTheme;
export const yM = useThemeContext;