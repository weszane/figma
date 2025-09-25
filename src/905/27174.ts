import classNames from 'classnames'
import { useCallback, useContext, useEffect, useRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { VimFocusContext } from '../905/153787'
import { renderChangeBadge } from '../905/154591'
import { AutoLayout } from '../905/470281'
import { lv, M3, yn } from '../figma_app/119475'
import { useLatestRef } from '../figma_app/922077'

let p = 'tree_row--expansionToggle--mYjsb'
/**
 * TreeRow component (original: $$m0)
 * Renders a tree row with expansion, selection, pinning, and change badge.
 */
export function TreeRow({
  children,
  changeType,
  isExpanded,
  isLeaf,
  isPinned,
  isSelected,
  isSelectedSecondary,
  isChanging,
  indent,
  style,
  keyboardNavigationPath,
  toggleExpanded,
  togglePinned,
  select,
  onContextMenu,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode
  changeType?: string
  isExpanded: boolean
  isLeaf: boolean
  isPinned?: boolean
  isSelected: boolean
  isSelectedSecondary?: boolean
  isChanging?: boolean
  indent: number
  style?: React.CSSProperties
  keyboardNavigationPath: any
  toggleExpanded: (metaKey: boolean) => void
  togglePinned?: () => void
  select: () => void
  onContextMenu?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
}) {
  // Keyboard navigation setup (original: M3)
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFocused,
  } = M3({
    path: keyboardNavigationPath,
  })

  const vimFocus = useContext(VimFocusContext)
  const latestIsSelectedRef = useLatestRef(isSelected)

  // Focus management effect (original: useEffect in $$m0)
  useEffect(() => {
    if (!latestIsSelectedRef && isSelected && !isFocused && vimFocus() && keyboardNavigationItem) {
      keyboardNavigationItem.focus()
    }
  }, [isFocused, latestIsSelectedRef, isSelected, keyboardNavigationItem, vimFocus])

  const mouseDownHandledRef = useRef(false)

  // Helper: isButtonTarget (original: D)
  const isButtonTarget = useCallback(
    (e: React.MouseEvent) =>
      e.target instanceof Element && e.target.tagName === 'BUTTON',
    [],
  )

  // Helper: isExpansionToggleTarget (original: L)
  const isExpansionToggleTarget = useCallback(
    (e: React.MouseEvent) =>
      !!(
        e.target instanceof Element
        && (e.target.classList.contains(p)
          || e.target.parentElement?.classList.contains(p))
      ),
    [],
  )

  // Render
  return jsx('button', {
    ref: setKeyboardNavigationElement,
    className: classNames('tree_row--treeItem--6gIYH', {
      'tree_row--selectedSecondary--8QYCx': isSelectedSecondary && !(isSelected || isFocused),
      'tree_row--selected--url1U': isSelected || isFocused,
      'tree_row--changing--E9CSm': isChanging,
    }),
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      if (mouseDownHandledRef.current) {
        mouseDownHandledRef.current = false
      }
      else {
        toggleExpanded(e.metaKey || e.altKey)
      }
      e.currentTarget.focus()
    },
    onContextMenu,
    onDoubleClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isExpansionToggleTarget(e)) {
        toggleExpanded(e.metaKey)
      }
    },
    onFocus: select,
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((isLeaf && yn(e.code, true)) || (!isLeaf && lv(e.code, true))) {
        toggleExpanded(e.metaKey)
      }
    },
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
      if ((isButtonTarget(e) || isExpansionToggleTarget(e)) && e.detail > 1) {
        e.preventDefault()
      }
      if (isExpansionToggleTarget(e)) {
        mouseDownHandledRef.current = e.detail > 1
      }
      else {
        mouseDownHandledRef.current = true
      }
    },
    onMouseEnter,
    onMouseLeave,
    style,
    children: jsxs(AutoLayout, {
      children: [
        jsx(TreeIndent, {
          indent,
          isLeaf,
          isExpanded,
        }),
        children,
        togglePinned
        && jsx(PinToggle, {
          isPinned: !!isPinned,
          togglePinned,
        }),
        changeType
        && jsx(renderChangeBadge, {
          type: changeType,
        }),
      ],
    }),
  })
}

/**
 * TreeIndent component (original: h)
 * Renders the indentation and expansion arrow.
 */
export function TreeIndent({
  indent,
  isLeaf,
  isExpanded,
}: {
  indent: number
  isLeaf: boolean
  isExpanded: boolean
}) {
  return jsx('div', {
    className: classNames(p, !isLeaf && 'tree_row--clickable--ttIc9'),
    style: {
      paddingLeft: 14 * indent,
      width: 14,
      minHeight: 14,
    },
    children: jsx('span', {
      children: isLeaf ? '' : isExpanded ? '\u25BC' : '\u25B6',
    }),
  })
}

/**
 * PinToggle component (original: g)
 * Renders the pin/unpin toggle.
 */
export function PinToggle({
  isPinned,
  togglePinned,
}: {
  isPinned: boolean
  togglePinned: () => void
}) {
  return jsx('span', {
    onClick: togglePinned,
    className: isPinned
      ? 'tree_row--unpinToggle--CU4-x tree_row--_pinToggleBase--W1djM'
      : 'tree_row--pinToggle--wbULT tree_row--_pinToggleBase--W1djM',
    children: isPinned ? 'Unpin' : 'Pin',
  })
}

// Refactored export for compatibility (original: Z)
export const Z = TreeRow
