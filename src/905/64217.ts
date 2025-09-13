import classNames from 'classnames'
import { Component, createRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { isElementFocusable } from '../905/877503'
import { s as _$$s } from '../cssbuilder/589278'

/**
 * TabLoopDisplayAs - Enum for displayAs prop values
 */
export enum TabLoopDisplayAs {
  Block = 'block',
  DeprecatedFullHeightBlock = 'fullHeightBlock',
  Contents = 'contents',
}

/**
 * Props for TabLoop component
 */
export interface TabLoopProps {
  className?: string
  style?: React.CSSProperties
  displayAs?: TabLoopDisplayAs
  children?: React.ReactNode
}

/**
 * TabLoop - Component for managing tab focus loop
 */
export class TabLoop extends Component<TabLoopProps> {
  static defaultProps = {
    displayAs: TabLoopDisplayAs.Contents,
  }

  static displayName = 'TabLoop'

  containerRef = createRef<HTMLDivElement>()
  firstTabbableEl?: HTMLElement
  lastTabbableEl?: HTMLElement

  /**
   * Traverses children to find first and last tabbable elements
   * (traverseChildren)
   */
  traverseChildren = (): void => {
    this.firstTabbableEl = undefined
    this.lastTabbableEl = undefined
    const traverse = (el: HTMLElement | null): void => {
      if (!el)
        return
      if (isElementFocusable(el)) {
        if (!this.firstTabbableEl || el.tabIndex < this.firstTabbableEl.tabIndex) {
          this.firstTabbableEl = el
        }
        if (!this.lastTabbableEl || (el).tabIndex >= this.lastTabbableEl.tabIndex) {
          this.lastTabbableEl = el
        }
      }
      Array.from(el.children).forEach((child: HTMLElement) => traverse(child))
      Array.from((el as any).shadowRoot?.children || []).forEach((child: HTMLElement) => traverse(child))
    }
    traverse(this.containerRef.current)
  }

  /**
   * Handles focus on front guard
   * (onFrontGuardFocus)
   */
  onFrontGuardFocus = (e: React.FocusEvent<HTMLDivElement>): void => {
    this.traverseChildren()
    const target = this.containerRef.current?.contains(e.relatedTarget as Node)
      ? this.lastTabbableEl
      : this.firstTabbableEl
    this.focusElement(target as HTMLInputElement)
  }

  /**
   * Handles focus on back guard
   * (onBackGuardFocus)
   */
  onBackGuardFocus = (): void => {
    this.traverseChildren()
    this.focusElement(this.firstTabbableEl as HTMLInputElement)
  }

  /**
   * Focuses the given element and selects its content if possible
   * (focusElement)
   */
  focusElement(el?: HTMLInputElement): void {
    if (el) {
      setTimeout(() => {
        el.focus()
        if (typeof el.select === 'function')
          el.select()
      }, 0)
    }
  }

  /**
   * Renders TabLoop component
   * (render)
   */
  render() {
    const { className, style, displayAs, children } = this.props
    const classes = classNames(className, {
      [_$$s.hFull.$]: displayAs === TabLoopDisplayAs.DeprecatedFullHeightBlock,
      displayContents: displayAs === TabLoopDisplayAs.Contents,
    })
    return jsxs('div', {
      className: classes,
      style,
      children: [
        jsx('div', {
          'aria-hidden': 'true',
          'tabIndex': 0,
          'onFocus': this.onFrontGuardFocus,
        }),
        jsx('div', {
          className: classes,
          ref: this.containerRef,
          children,
        }),
        jsx('div', {
          'aria-hidden': 'true',
          'tabIndex': 0,
          'onFocus': this.onBackGuardFocus,
        }),
      ],
    })
  }
}

// Export refactored names
export const C = TabLoopDisplayAs
export const i = TabLoop
