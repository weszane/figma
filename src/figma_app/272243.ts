import classNames from 'classnames'
import { createContext, forwardRef, Fragment, useContext, useMemo, useRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { ScrollContainer } from '../905/143421'
import { getThemeContextOrDefault } from '../905/158740'
import { gy } from '../905/183218'
import { useTheme } from '../905/289770'
import { IconButton } from '../905/443068'
import { actionStrip, allowOverflow, arrow, body, bodyInner, bodyNoScroll, bodyScrollContainer, close, closeButtonDark, closeButtonLight, contents, customContents, customFooter, footer, header, scroller, tabStripContent, tabStripRoot, tabStripScroll, title } from '../905/511376'
import { C as SVG2 } from '../905/520159'
import { loadFeatureFlags } from '../905/586361'
import { L as SVG1 } from '../905/704296'
import { setupPaddingStyle } from '../905/737752'
import { useDialogClose } from '../905/749786'
import { useAnyScrollable } from '../905/780985'
import { DialogLabel } from '../905/799737'
import { setupRefUpdater } from '../905/823680'
import { TabsPrimitiveTabStrip } from '../905/840133'
import { isCSSRegisterPropertySupported } from '../905/893109'
import { useFplStrings } from '../figma_app/415899'
/**
 * Dialog Context for sharing body and scroll refs.
 * Original: let v = createContext(null);
 */
export const DialogContext = createContext<{
  bodyRef: React.RefObject<HTMLDivElement>
  scrollRef: React.RefObject<HTMLDivElement>
} | null>(null)

/**
 * Dialog.Contents
 * Provides context and main dialog container.
 * Original: $$A11
 */
export function DialogContents({
  className,
  allowOverflow: isOverflowAllowed,
  htmlAttributes,
  ...rest
}: {
  className?: string
  allowOverflow?: boolean
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  [key: string]: any
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const contextValue = useMemo(
    () => ({
      bodyRef,
      scrollRef,
    }),
    [],
  )

  const anyScrollable = useAnyScrollable(containerRef, bodyRef, scrollRef)
  const featureFlags = loadFeatureFlags()
  const windowScrollContainer = featureFlags.fpl_window_scroll_container

  return jsx(DialogContext.Provider, {
    value: contextValue,
    children: jsx(
      'div',
      {
        ...htmlAttributes,
        'ref': containerRef,
        'data-body-scrolls': !windowScrollContainer && anyScrollable || undefined,
        'className': classNames(contents, className, {
          [allowOverflow]: isOverflowAllowed,
        }),
        ...rest,
      },
    ),
  })
}

/**
 * Dialog.CustomContents
 * Custom dialog content container.
 * Original: $$x2
 */
export function DialogCustomContents({
  className,
  htmlAttributes,
  ...rest
}: {
  className?: string
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  [key: string]: any
}) {
  return jsx(
    'div',
    {
      ...htmlAttributes,
      className: classNames(customContents, className),
      ...rest,
    },
  )
}

/**
 * Dialog.Arrow
 * Renders the arrow for dialog popover.
 * Original: $$N5
 */
export function DialogArrow({
  position,
  offset,
}: {
  position: 'top' | 'bottom' | 'left' | 'right'
  offset: number | string
}) {
  const theme = useTheme()
  const styleKey = position === 'top' || position === 'bottom' ? 'left' : 'top'

  return jsx(
    'svg',
    {
      className: classNames(arrow),
      width: '12',
      height: '6',
      viewBox: '0 0 12 6',
      fill: 'none',
      style: { [styleKey]: offset },
      children: jsxs(Fragment, {
        children: [
          jsx('path', { d: 'M6 0L0 6L12 6Z', fill: 'var(--color-bg)' }),
          theme.color === 'dark'
            ? jsx('path', { d: 'M0 6L6 0L12 6', stroke: 'var(--color-border)' })
            : null,
        ],
      }),
    },
  )
}

/**
 * Dialog.Header
 * Original: $$C3
 */
export const DialogHeader = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return jsx(
      'div',
      {
        'className': header,
        'data-fpl-header': true,
        ref,
        children,
      },
    )
  },
)

/**
 * Dialog.CloseButton
 * Original: $$w0
 */
export function DialogCloseButton({
  overrideColor,
}: {
  overrideColor?: 'light' | 'dark'
}) {
  const { version } = getThemeContextOrDefault()
  const closeDialog = useDialogClose()
  const ariaLabel = useFplStrings('close')

  return jsx(
    'div',
    {
      'data-fpl-close': true,
      'className': classNames(close, {
        [closeButtonLight]: overrideColor === 'light',
        [closeButtonDark]: overrideColor === 'dark',
      }),
      'children': jsx(
        IconButton,
        {
          'onClick': () => closeDialog({ source: 'button' }),
          'aria-label': ariaLabel,
          'children': version === 'ui2'
            ? jsx(DialogCloseIcon, {})
            : jsx(SVG1, {}),
        },
      ),
    },
  )
}

/**
 * DialogCloseIcon
 * SVG for close button.
 * Original: O
 */
export function DialogCloseIcon() {
  return jsx(
    'svg',
    {
      width: '12',
      height: '12',
      viewBox: '0 0 12 12',
      fill: 'none',
      children: jsx('path', {
        fill: 'var(--color-icon)',
        fillRule: 'nonzero',
        d: 'm6 5.293 4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z',
      }),
    },
  )
}

/**
 * Dialog.Title
 * Original: $$R4
 */
export function DialogTitle(props: React.ComponentProps<typeof DialogLabel>) {
  return jsx(DialogLabel, { className: title, ...props })
}

/**
 * Dialog.HiddenTitle
 * Original: $$L10
 */
export function DialogHiddenTitle(props: React.ComponentProps<typeof DialogLabel>) {
  return jsx(DialogLabel, { className: 'utils__srOnly__kNoua', ...props })
}

/**
 * Dialog.BackButton
 * Original: $$P8
 */
export function DialogBackButton({ onClick }: { onClick: () => void }) {
  const ariaLabel = useFplStrings('back')
  return jsx(
    IconButton,
    {
      onClick,
      'aria-label': ariaLabel,
      'children': jsx(SVG2, {}),
    },
  )
}

/**
 * Dialog.TabStrip
 * Original: $$D9
 */
export function DialogTabStrip(props: React.ComponentProps<typeof TabsPrimitiveTabStrip>) {
  return jsx(
    ScrollContainer,
    {
      'scroll': 'x',
      'fill': true,
      'theme': {
        root: tabStripRoot,
        scroll: tabStripScroll,
        content: tabStripContent,
      },
      'data-houdini-fallback': !isCSSRegisterPropertySupported || undefined,
      'children': jsx(TabsPrimitiveTabStrip, { ...props, className: gy }),
    },
  )
}

/**
 * Dialog.Body
 * Original: $$k7
 */
export const DialogBody = Object.assign(
  forwardRef<
    HTMLDivElement,
    {
      children: React.ReactNode
      className?: string
      style?: React.CSSProperties
      padding?: any
      scrolling?: 'none' | 'custom' | string
      htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
      [key: string]: any
    }
  >((
    {
      children,
      className,
      style,
      padding,
      scrolling,
      htmlAttributes,
      ...rest
    },
    ref,
  ) => {
    const context = useContext(DialogContext)
    const combinedRef = setupRefUpdater(ref, context?.bodyRef)
    const featureFlags = loadFeatureFlags()
    const windowScrollContainer = featureFlags.fpl_window_scroll_container

    if (windowScrollContainer) {
      if (scrolling === 'none') {
        return jsx(
          'div',
          {
            ...htmlAttributes,
            ...rest,
            ref: combinedRef,
            className: classNames(body, bodyNoScroll),
            style: setupPaddingStyle(padding),
            children,
          },
        )
      }
      return jsx(
        ScrollContainer,
        {
          ...htmlAttributes,
          ...rest,
          ref: combinedRef,
          fill: true,
          theme: {
            root: bodyScrollContainer,
            content: classNames(bodyInner, className),
            contentStyle: {
              ...setupPaddingStyle(padding),
              ...style,
            },
          },
          children,
        },
      )
    }

    return jsx(
      'div',
      {
        ...htmlAttributes,
        ...rest,
        ref: combinedRef,
        className: classNames(body, className, {
          [bodyNoScroll]: scrolling === 'none',
        }),
        style: {
          ...style,
          ...setupPaddingStyle(padding),
        },
        children:
          scrolling === 'none' || scrolling === 'custom'
            ? children
            : jsx(
                'div',
                {
                  ref: context?.scrollRef,
                  className: scroller,
                  children,
                },
              ),
      },
    )
  }),
  {
    /**
     * Returns the scrollRef from DialogContext.
     * Original: useScrollRef
     */
    useScrollRef() {
      const context = useContext(DialogContext)
      return context?.scrollRef
    },
  },
)

/**
 * Dialog.Footer
 * Original: $$M12
 */
export function DialogFooter({ children }: { children: React.ReactNode }) {
  return jsx('div', { className: footer, children })
}

/**
 * Dialog.CustomFooter
 * Original: $$F1
 */
export function DialogCustomFooter({
  className,
  ...rest
}: {
  className?: string
  [key: string]: any
}) {
  return jsx('div', { className: classNames(customFooter, className), ...rest })
}

/**
 * Dialog.ActionStrip
 * Original: $$j6
 */
export function DialogActionStrip({ children }: { children: React.ReactNode }) {
  return jsx('div', { className: actionStrip, children })
}

// Display names for debugging
DialogContents.displayName = 'Dialog.Contents'
DialogCustomContents.displayName = 'Dialog.CustomContents'
DialogArrow.displayName = 'Dialog.Arrow'
DialogHeader.displayName = 'Dialog.Header'
DialogCloseButton.displayName = 'Dialog.CloseButton'
DialogTitle.displayName = 'Dialog.Title'
DialogHiddenTitle.displayName = 'Dialog.HiddenTitle'
DialogBackButton.displayName = 'Dialog.BackButton'
DialogTabStrip.displayName = 'Dialog.TabStrip'
DialogBody.displayName = 'Dialog.Body'
DialogFooter.displayName = 'Dialog.Footer'
DialogCustomFooter.displayName = 'Dialog.CustomFooter'
DialogActionStrip.displayName = 'Dialog.ActionStrip'

// Refactored exports
export const vo = DialogContents
export const Wk = DialogCustomContents
export const i3 = DialogArrow
export const Y9 = DialogHeader
export const Jn = DialogCloseButton
export const hE = DialogTitle
export const r1 = DialogHiddenTitle
export const oq = DialogBackButton
export const qj = DialogTabStrip
export const nB = DialogBody
export const wi = DialogFooter
export const Pt = DialogCustomFooter
export const jk = DialogActionStrip
