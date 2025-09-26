import classNames from 'classnames'
import { jsx } from 'react/jsx-runtime'

import { cssBuilderInstance } from '../cssbuilder/589278'

/**
 * ThumbnailContainer component (original: $$o0)
 * Renders a container div with customizable background, border radius, and border.
 * @param backgroundColor - Inline background color style
 * @param backgroundClassName - Additional className for background
 * @param borderRadius - Border radius value (2, 4, 6, 8)
 * @param noBorder - If true, removes border
 * @param children - React children
 */
export function ThumbnailContainer({
  backgroundColor,
  backgroundClassName,
  borderRadius,
  noBorder,
  children,
}: {
  backgroundColor?: React.CSSProperties['backgroundColor']
  backgroundClassName?: string
  borderRadius?: 2 | 4 | 6 | 8
  noBorder?: boolean
  children: React.ReactNode
}) {
  // Build border classes conditionally
  const borderClasses = !noBorder
    ? cssBuilderInstance.b1.bSolid.colorBorder
    : undefined

  // Map border radius to class
  const radiusClassMap: Record<number, string> = {
    2: cssBuilderInstance.bRadius2.$,
    4: cssBuilderInstance.bRadius4.$,
    6: cssBuilderInstance.bRadius6.$,
    8: cssBuilderInstance.bRadius8.$,
  }

  return jsx('div', {
    'data-testid': 'thumbnail-container',
    'className': classNames(
      cssBuilderInstance.hFull.wFull.borderBox,
      borderClasses,
      cssBuilderInstance.overflowHidden.$,
      radiusClassMap[borderRadius ?? 0],
      backgroundClassName,
    ),
    'style': backgroundColor
      ? { backgroundColor }
      : undefined,
    'children': jsx('div', {
      className: 'thumbnail_container--aspectRatio--Q7gu8',
      children,
    }),
  })
}

// Export with original name for compatibility
export const q = ThumbnailContainer
