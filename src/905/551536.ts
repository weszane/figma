import { Component } from 'react'
import { jsx } from 'react/jsx-runtime'
import { nf } from '../905/190597'
import { handleUrlAction } from '../905/280005'

/**
 * LinkProps - Props for Link component (original: $$o0)
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  canFocus?: boolean
  trusted?: boolean
}

/**
 * Link - Refactored from $$o0
 * Renders an anchor element with custom focus and trust logic.
 */
export class BaseLinkComponent extends Component<LinkProps> {
  static displayName = 'Link'
  /**
   * Renders the Link component.
   */
  render() {
    // Compose className from nf and incoming className
    const className = `${nf} ${this.props.className || ''}`

    // Destructure props for custom logic
    const {
      canFocus,
      trusted,
      children,
      onClick,
      href,
      ...restProps
    } = this.props

    // Set rel attribute based on trusted prop
    const rel = trusted ? 'noopener' : 'noopener nofollow noreferrer ugc'

    // Handle anchor props
    let anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      ...restProps,
      className,
      rel,
      onClick: (event) => {
        // Original onClick handler
        onClick && onClick(event)
        // Handle URL action if href is provided
        href && handleUrlAction(href, event)
      },
    }

    // If canFocus is true, add focusable attributes
    if (canFocus) {
      anchorProps = {
        href: '#',
        tabIndex: 0,
        ...anchorProps,
      }
    }

    return jsx('a', {
      ...anchorProps,
      children,
    })
  }
}



/**
 * N - Exported alias for Link (original: N)
 */
export const N = BaseLinkComponent
