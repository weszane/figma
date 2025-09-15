import { useEffect, useState } from 'react'

/**
 * usePrefersMediaQuery - Tracks a media query and returns its match status.
 * Original: $$i0
 * @param query - The media query string to match.
 * @returns boolean - Whether the media query matches.
 */
export function usePrefersMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = matchMedia(query)
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    mediaQueryList.addEventListener('change', handleChange)
    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

/**
 * usePrefersReducedMotion - Returns true if user prefers reduced motion.
 * Original: $$a1
 */
export function usePrefersReducedMotion(): boolean {
  return usePrefersMediaQuery('(prefers-reduced-motion: reduce)')
}

/**
 * Alias for usePrefersMediaQuery.
 * Original: N
 */
export const N = usePrefersMediaQuery
export const j = usePrefersReducedMotion
