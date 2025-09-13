// Original file: /Users/allen/sigma-main/src/figma_app/858013.ts
// Refactored to improve readability, maintainability, and TypeScript best practices.
// Grouped related loading spinner components and wrappers.
// Added meaningful names, prop types, JSDoc comments, and simplified logic.
// Ensured functionality remains identical to the original.

import classNames from 'classnames'
import { Component, PureComponent } from 'react'
import { jsx } from 'react/jsx-runtime'
import { SvgComponent } from '../905/714743'
import { A as SpinnerIcon } from '../1617/62299'
import { A as LoadingIcon } from '../1617/976727'
import { $g, F, h, K_, Mn, OZ, PG, Pu, q5, sl, uz, WL, yM, zr } from '../figma_app/498055'

// Define prop types for better type safety
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'custom'
  shouldMatchTextColor?: boolean
  className?: string
  testId?: string
  cssBacked?: boolean
  imageBacked?: boolean
  altIcon?: string
}

interface LoadingOverlayProps extends LoadingSpinnerProps {}

interface ImageBackedLoadingProps extends LoadingSpinnerProps {}

interface CssBackedLoadingProps extends LoadingSpinnerProps {}

interface BlueLoadingSpinnerProps {
  className?: string
}

/**
 * Main loading spinner component.
 * Original name: $$u4
 */
export class LoadingSpinner extends Component<LoadingSpinnerProps> {
  static displayName: string

  render() {
    const { size, shouldMatchTextColor, className, testId, cssBacked, imageBacked, altIcon } = this.props

    // Determine size classes with early returns for simplicity
    let sizeClass: string | null = PG
    let innerClass: string | null = q5

    if (size === 'medium') {
      sizeClass = $g
      innerClass = Mn
    }
    else if (size === 'large') {
      sizeClass = Pu
      innerClass = OZ
    }
    else if (size === 'custom') {
      sizeClass = null
      innerClass = null
    }
    // Default is small, so no change needed

    return jsx('span', {
      'className': classNames(zr, sizeClass, shouldMatchTextColor ? K_ : h, className || ''),
      'data-testid': testId,
      'children': cssBacked
        ? jsx('span', { className: classNames(WL, innerClass) })
        : imageBacked
          ? jsx('img', {
              alt: 'Loading',
              className: yM,
              src: `data:image/svg+xml;base64,${btoa(LoadingIcon)}`,
            })
          : jsx(SvgComponent, {
              svg: altIcon || LoadingIcon,
              className: yM,
              autosize: !altIcon,
              dataTestId: 'loading-spinner',
            }),
    })
  }
}

LoadingSpinner.displayName = 'LoadingSpinner'

/**
 * Wrapper for loading overlay.
 * Original name: $$p6
 */
export function LoadingOverlay(props: LoadingOverlayProps) {
  return jsx('div', {
    className: F,
    children: jsx(LoadingSpinner, props),
  })
}

/**
 * Large loading spinner wrapper.
 * Original name: $$_5
 */
export function LargeLoadingSpinner() {
  return jsx('div', {
    className: F,
    children: jsx(LoadingSpinner, { size: 'large' }),
  })
}

/**
 * Image-backed loading spinner.
 * Original name: $$h3
 */
export function ImageBackedLoading(props: ImageBackedLoadingProps) {
  return jsx(LoadingSpinner, { imageBacked: true, ...props })
}

/**
 * CSS-backed loading spinner.
 * Original name: $$m0
 */
export function CssBackedLoading(props: CssBackedLoadingProps) {
  return jsx(LoadingSpinner, { cssBacked: true, ...props })
}

/**
 * Default loading spinner wrapper.
 * Original name: $$g1
 */
export function DefaultLoadingSpinner() {
  return jsx('div', {
    className: sl,
    children: jsx(LoadingSpinner, {}),
  })
}

/**
 * Blue loading spinner component.
 * Original name: $$f2
 */
export class BlueLoadingSpinner extends PureComponent<BlueLoadingSpinnerProps> {
  static displayName: string
  render() {
    const { className } = this.props
    return jsx('span', {
      className: `${uz} ${className || ''}`,
      children: jsx(SvgComponent, {
        svg: SpinnerIcon,
        className: yM,
      }),
    })
  }
}

BlueLoadingSpinner.displayName = 'BlueLoadingSpinner'

// Updated exports to match refactored names
export const $y = CssBackedLoading
export const Z_ = DefaultLoadingSpinner
export const a_ = BlueLoadingSpinner
export const dW = ImageBackedLoading
export const kt = LoadingSpinner
export const nt = LargeLoadingSpinner
export const qc = LoadingOverlay
