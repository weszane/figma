import { jsx, jsxs } from 'react/jsx-runtime'
import { Button } from '../905/521428'
import { formatKeyboardShortcuts } from '../905/783179'
import { TH } from '../figma_app/171177'
import { generateRecordingKey } from '../figma_app/878298'

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  shortcuts?: any[]
  onAction?: (params: { shortcut: any | null, target: any }) => void
  children: React.ReactNode
  disabled?: boolean
  submenuRef?: React.Ref<any>
  target?: any
  disableKeyboardShortcuts?: boolean
  recordingKey?: string
  iconPrefix?: React.ReactNode
}

/**
 * ActionButton - A customizable button component that supports keyboard shortcuts and various visual variants.
 * Original name: $$l0
 */
export function ActionButton({
  variant = 'primary',
  shortcuts,
  onAction,
  children,
  disabled = false,
  submenuRef,
  target = null,
  disableKeyboardShortcuts = false,
  recordingKey,
  iconPrefix,
}: ActionButtonProps) {
  // Register keyboard shortcuts if onAction is provided and shortcuts are enabled
  TH(shortcuts || [], (event, shortcut) => {
    if (onAction && !disabled) {
      event.preventDefault()
      onAction({
        shortcut,
        target,
      })
    }
  }, !!onAction && !disableKeyboardShortcuts)

  // Format keyboard shortcuts for display
  const formattedShortcuts = shortcuts ? formatKeyboardShortcuts(shortcuts) : null

  return jsxs(Button, {
    variant,
    onClick: () => onAction?.({
      shortcut: null,
      target,
    }),
    disabled,
    iconPrefix,
    recordingKey: generateRecordingKey(recordingKey, 'actionButton'),
    ref: submenuRef,
    htmlAttributes: {
      'data-testid': 'actionButton',
    },
    children: [
      children,
      formattedShortcuts && jsx(Button.Shortcut, {
        children: formattedShortcuts,
      }),
    ],
  })
}

// Export the component with the new meaningful name
export const r = ActionButton
