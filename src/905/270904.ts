import { useEffect, useState } from 'react'
import { isBrowser } from '../905/268204'
import { addEventlistenerWithCleanup } from '../905/955878'

// Original: s
// Type definition for a mock media query object used in non-browser environments
// interface MockMediaQuery {
//   matches: boolean
//   addEventListener: () => void
//   removeEventListener: () => void
// }

// Original: s
const mockMediaQuery: MediaQueryList = {
  matches: false,
  addEventListener: () => {},
  removeEventListener: () => {},
} as unknown as MediaQueryList

/**
 * Creates a media query object.
 * Original: $$o0
 * @param query - The media query string.
 * @returns A media query object or a mock if not in browser.
 */
export function createMediaQuery(query: string): MediaQueryList {
  return isBrowser ? window.matchMedia(query) : mockMediaQuery
}

/**
 * Custom hook to track media query matches.
 * Original: $$l1
 * @param mediaQuery - The media query object.
 * @returns The current matches state.
 */
export function useMediaQuery(element: MediaQueryList): boolean {
  const [matches, setMatches] = useState(element.matches)
  useEffect(() => {
    addEventlistenerWithCleanup(element, 'change', (event: MediaQueryListEvent) => setMatches(event.matches))
  }, [element])
  return matches
}

// Original exports: D = $$o0, U = $$l1
export const D = createMediaQuery
export const U = useMediaQuery
