import { useCallback } from 'react'
import { isVsCodeEnvironment } from '../905/858738'
import { openInBrowser } from '../figma_app/415217'

/**
 * Checks if the environment is VSCode and opens the given URL in the browser.
 * @param url - The URL to open.
 * @returns True if in VSCode environment, otherwise false.
 * @originalName $$openInVsCode
 */
export function openInVsCode(url: string): boolean {
  if (!isVsCodeEnvironment())
    return false
  openInBrowser(url)
  return true
}

/**
 * Provides link props based on the environment.
 * If in VSCode, disables default navigation and opens in browser.
 * @param url - The URL for the link.
 * @returns Object containing href and onClick handler.
 * @originalName $$getLinkProps
 */
export function getVsCodeLinkProps(url: string) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (openInVsCode(url))
        event.preventDefault()
    },
    [url],
  )

  return {
    href: isVsCodeEnvironment() ? undefined : url,
    onClick: isVsCodeEnvironment() ? handleClick : undefined,
  }
}

// Export aliases for backward compatibility
export const I = openInVsCode
export const y = getVsCodeLinkProps
