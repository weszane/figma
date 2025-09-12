import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { createContext, forwardRef, useContext } from 'react'
import { jsx } from 'react/jsx-runtime'
import { defaultComponentAttribute } from '../905/577641'
import { useRecording } from '../905/959312'

/**
 * Context for LinkPrimitive click handler
 * (original: l)
 */
const LinkPrimitiveContext = createContext<((e: React.MouseEvent<HTMLAnchorElement>) => void) | undefined>(undefined)

/**
 * Provider for LinkPrimitiveContext
 * (original: $$d1)
 */
export const LinkPrimitiveProvider = LinkPrimitiveContext.Provider

export interface LinkPrimitiveProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href' | 'children' | 'ref'> {
  recordingKey?: string
  children?: ReactNode
  href?: string
  trusted?: boolean
  newTab?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  htmlAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>
}

/**
 * LinkPrimitive component
 * (original: $$c0)
 * @param props - LinkPrimitiveProps
 * @param ref - React ref
 */
export const LinkPrimitive = forwardRef<HTMLAnchorElement, LinkPrimitiveProps>(({
  recordingKey,
  children,
  href,
  trusted,
  newTab,
  onClick,
  htmlAttributes,
  ...rest
}, ref) => {
  const contextOnClick = useContext(LinkPrimitiveContext)

  // Determine rel attribute based on trust
  const rel = trusted ?? isTrustedUrl(href)
    ? 'noopener'
    : 'noopener nofollow noreferrer ugc'

  /**
   * Helper to check if URL is trusted
   * (original: inline function in $$c0)
   */
  function isTrustedUrl(url?: string): boolean {
    try {
      const origin = window.location.origin
      return url ? new URL(url, origin).origin === origin : false
    }
    catch {
      return false
    }
  }

  /**
   * Combined click handler with recording
   * (original: f)
   */
  const handleClick = useRecording(
    onClick || contextOnClick
      ? (e: React.MouseEvent<HTMLAnchorElement>) => {
          contextOnClick?.(e)
          onClick?.(e)
        }
      : undefined,
    {
      eventName: 'click',
      recordingKey,
    },
    [onClick, contextOnClick],
  )

  return jsx('a', {
    target: newTab ? '_blank' : undefined,
    rel,
    ...defaultComponentAttribute,
    ...htmlAttributes,
    ...rest,
    ref,
    onClick: handleClick,
    href,
    children,
  })
})

LinkPrimitive.displayName = 'LinkPrimitive'
export const _ = LinkPrimitive
export const a = LinkPrimitiveProvider
