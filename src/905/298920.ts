import { setTagGlobal } from '../905/11'
import { updateEnvironmentInfo } from '../905/883621'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Sends a message to the parent window if origins match.
 * @param message - The message to post to the parent window.
 * (Original function: $$s0)
 */
export function sendMessageToParent(message: unknown): void {
  if (window.self.origin === window.parent.origin) {
    window.parent.postMessage(message, window.self.origin)
  }
}

/**
 * Initializes integration environment if running inside an iframe and integration_host is present.
 * (Original function: $$o1)
 */
export function initializeIntegrationEnvironment(): void {
  const options = getInitialOptions()
  if (
    options.integration_host
    && window.self !== window.top
  ) {
    updateEnvironmentInfo({
      integration_host: options.integration_host,
      integration_context: options.integration_context ?? null,
    })
    setTagGlobal('integration_host', options.integration_host)
    sendMessageToParent({ action: 'ready' })
  }
}

// Export aliases for backward compatibility (Original exports: m, z)
export const m = sendMessageToParent
export const z = initializeIntegrationEnvironment
