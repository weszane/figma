import { VisualBellActions } from '../905/302958'
import { formatI18nMessage } from '../905/482208'
import { VisualBellIcon } from '../905/576487'
import { fullscreenValue } from '../figma_app/455680'

/**
 * Formats the plugin name based on vmType.
 * @param name - The plugin name.
 * @param vmType - The type of VM.
 * @returns Formatted plugin name.
 * @originalName $$d0
 */
export function formatPluginName(name: string, vmType: string): string {
  return vmType === 'realms'
    ? `${name} (${formatI18nMessage('plugins-realms-vm')})`
    : name
}

/**
 * Dispatches a visual bell notification for plugin status.
 * @param params - Plugin status parameters.
 * @originalName $$o1
 */
export function notifyPluginStatus(params: {
  name: string
  vmType: string
  isBackground: boolean
  isInsert: boolean
  shouldShowCheck: boolean
  delayOverride?: number
  cancelCallback: () => void
}): void {
  if (params.isBackground)
    return

  // Compose status message
  const message = params.isBackground
    ? formatI18nMessage('plugins-background', { plugin: formatPluginName(params.name, params.vmType) })
    : params.isInsert
      ? formatI18nMessage('plugins-inserting', { plugin: formatPluginName(params.name, params.vmType) })
      : formatI18nMessage('plugins-running', { plugin: formatPluginName(params.name, params.vmType) })

  // Determine icon
  const icon = params.isBackground
    ? VisualBellIcon.NONE
    : params.shouldShowCheck
      ? VisualBellIcon.CHECK
      : VisualBellIcon.SPINNER

  // Determine timeout
  const timeoutOverride = params.isBackground
    ? Infinity
    : params.shouldShowCheck
      ? 1000
      : undefined

  // Compose button if not insert
  const button = params.isInsert
    ? undefined
    : {
        text: params.isBackground
          ? formatI18nMessage('plugins-stop')
          : formatI18nMessage('plugins-cancel'),
        action: () => {
          params.cancelCallback()
        },
      }

  fullscreenValue.dispatch(
    VisualBellActions.enqueue({
      type: 'plugins-status',
      message,
      icon,
      timeoutType: 'exact',
      timeoutOverride,
      delay: params.delayOverride ?? 300,
      button,
    }),
  )
}

/**
 * Dequeues the visual bell notification for plugin status.
 * @param params - Parameters to control dequeue behavior.
 * @originalName $$l2
 */
export function dequeuePluginStatus(params: { shouldShowVisualBell: boolean }): void {
  if (fullscreenValue && fullscreenValue.isReady() && params.shouldShowVisualBell) {
    fullscreenValue.dispatch(
      VisualBellActions.dequeue({
        matchType: 'plugins-status',
      }),
    )
  }
}

// Export aliases for backward compatibility
export const WW = formatPluginName // $$d0
export const Ym = notifyPluginStatus // $$o1
export const pN = dequeuePluginStatus // $$l2
