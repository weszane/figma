// Original variable: $$n0
export const COOKIE_NAME = 'figma.pc_modal'

/**
 * Clears the 'figma.pc' cookie by setting it to expire immediately.
 * Original function: $$i1
 */
export function clearFigmaPcCookie(): void {
  const cookieValue = `figma.pc=; domain=${window.location.hostname}; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
  document.cookie = cookieValue
}

/**
 * Clears the 'figma.pc_modal' cookie by setting it to expire immediately.
 * Original function: $$a2
 */
export function clearFigmaPcModalCookie(): void {
  const cookieValue = `${COOKIE_NAME}=; domain=${window.location.hostname}; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
  document.cookie = cookieValue
}

// Original exports: Bq = $$n0, _H = $$i1, lc = $$a2
export const Bq = COOKIE_NAME
export const _H = clearFigmaPcCookie
export const lc = clearFigmaPcModalCookie
