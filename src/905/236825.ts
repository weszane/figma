import { forwardRef, useLayoutEffect, useRef } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { FlexBox } from '../905/222272'
import { IconButton } from '../905/443068'
import { AutoLayout } from '../905/470281'
import { L } from '../905/704296'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { generateRecordingKey } from '../figma_app/878298'

interface PanelContentProps {
  children: React.ReactNode
}

/**
 * PanelContent - A container component for panel content with padding and flex layout
 * @param children - The content to be rendered inside the panel
 */
function PanelContent({ children }: PanelContentProps) {
  return jsx('div', {
    className: cssBuilderInstance.p8.flex.borderBox.$,
    children,
  })
}

export interface PanelProps {
  onDismiss?: () => void
  children: React.ReactNode
  content?: React.ReactNode
  extra?: React.ReactNode | React.ReactNode[]
  dataTestId?: string
  recordingKey?: string
  shouldAutoFocus?: boolean
}

/**
 * Panel - A focusable panel component with dismiss functionality and optional extra content
 * @param onDismiss - Callback function when the panel is dismissed
 * @param children - Main content of the panel (typically header/title)
 * @param content - Additional content below the header
 * @param extra - Extra content displayed at the bottom of the panel
 * @param dataTestId - Test identifier for the panel
 * @param recordingKey - Key for recording user interactions
 * @param shouldAutoFocus - Whether the panel should auto-focus when mounted
 * @param ref - Ref to the panel element
 */
export const Panel = forwardRef<HTMLDivElement, PanelProps>(({
  onDismiss,
  children,
  content,
  extra,
  dataTestId,
  recordingKey,
  shouldAutoFocus,
}, ref) => {
  /**
   * Render extra content with appropriate styling and separators
   * Original function name: _
   */
  const renderExtraContent = (extraContent: React.ReactNode | React.ReactNode[]) => {
    if (Array.isArray(extraContent)) {
      if (extraContent.length === 1) {
        return jsx(PanelContent, {
          children: extraContent[0],
        })
      }
      if (extraContent.length > 1) {
        return jsx(Fragment, {
          children: extraContent.map((item, index) => jsx('div', {
            className: cssBuilderInstance.if(index > 0, cssBuilderInstance.bSolid.bt1.colorBorder).$,
            children: jsx(PanelContent, {
              children: item,
            }),
          }, index)),
        })
      }
    }
    else if (extraContent) {
      return jsx(PanelContent, {
        children: extraContent,
      })
    }
    return null
  }

  const extraContent = renderExtraContent(extra)

  const internalRef = useRef<HTMLDivElement>(null)
  const panelRef = ref || internalRef

  useLayoutEffect(() => {
    if (shouldAutoFocus && panelRef && typeof panelRef !== 'function' && panelRef.current) {
      panelRef.current.focus()
    }
  }, [panelRef, shouldAutoFocus])

  return jsxs('div', {
    'data-testid': dataTestId,
    'ref': panelRef,
    'tabIndex': -1,
    'children': [
      jsx(PanelContent, {
        children: jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: 8,
          children: [
            jsxs(FlexBox, {
              fullWidth: true,
              gap: 4,
              align: 'center',
              children: [
                jsx('div', {
                  className: cssBuilderInstance.flex1.$,
                  children,
                }),
                onDismiss && jsx(IconButton, {
                  'aria-label': 'close',
                  'onClick': onDismiss,
                  'recordingKey': generateRecordingKey(recordingKey, 'dismiss'),
                  'children': jsx(L, {}),
                }),
              ],
            }),
            content,
          ],
        }),
      }),
      extraContent && jsx('div', {
        className: cssBuilderInstance.bt1.bSolid.colorBorder.$,
        children: extraContent,
      }),
    ],
  })
})

export const y = Panel
