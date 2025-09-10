import { localStorageRef } from '../905/657224'
import { isDevEnvironment } from '../figma_app/169182'

/**
 * Checks if the application is running in a VS Code environment.
 * This is determined by either:
 * 1. Being in a development environment and having 'force-vscode' set to 'true' in localStorage
 * 2. Having an ancestor origin that starts with 'vscode-webview://'
 *
 * @returns {boolean} True if running in VS Code environment, false otherwise
 */
export function isVsCodeEnvironment(): boolean {
  const isDevEnv = isDevEnvironment()
  const forceVsCode = localStorageRef?.getItem('force-vscode') === 'true'
  const hasVsCodeAncestor = !!window?.location.ancestorOrigins
    && Array.prototype.slice.call(window.location.ancestorOrigins).some(origin =>
      origin.startsWith('vscode-webview://'),
    )

  return (isDevEnv && forceVsCode) || hasVsCodeAncestor
}

export const T = isVsCodeEnvironment
