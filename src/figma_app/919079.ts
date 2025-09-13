import classNames from 'classnames'
import { PureComponent } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { SvgComponent } from '../905/714743'
import { _W, _X, A4, aK, B4, C0, Dt, eD, Fw, FZ, gL, Iv, JR, KK, ko, KT, M6, o9, Pu, rJ, rL, rw, sM, Sx, t1, TT, uo, uS, Uu, v, vg, vT, W5, WH, Ww, xi, Xo, yZ, zB, ZN } from '../905/937197'
import { throwTypeError } from '../figma_app/465776'
import { A as SVG } from '../svg/545021'

// Refactored enums and component with clearer names and types.
// Original enum: $$u3
export enum BadgeColor {
  INVERT = 0,
  DEFAULT = 1,
  TOOLBAR = 2,
  TERTIARY = 3,
  SUCCESS = 4,
  WARNING = 5,
  WARNING_TERTIARY = 6,
  DANGER = 7,
  DESIGN = 8,
  COMPONENT = 9,
  FIGJAM = 10,
  BRAND = 11,
  DISABLED = 12,
  INFORMATIONAL = 13,
  LIGHT = 14,
  TOOLBAR_SELECTED = 15,
  DEFAULT_TRANSLUCENT = 16,
  LIGHT_TRANSLUCENT = 17,
}

// Original enum: $$p2
export enum BadgeSize {
  SMALL = 0,
  LARGE = 1,
  EXTRA_LARGE = 2,
}

// Original map-like enum: $$_1
export enum BadgeLabels {
  PRO_TRIAL_EXPIRED = 'Pro trial expired badge',
  PRO_TRIAL = 'Pro trial badge',
  FREE = 'Free badge',
  LOCKED = 'Locked Team Badge',
  PROFESSIONAL = 'Professional badge',
  DEV_MODE_TRIAL = 'Dev Mode trial badge',
}

// Helper types for props (added)
// Original component props were untyped on $$h0
interface BadgePadding {
  x: number
  y: number
}
interface BadgeProps {
  // visual
  size?: BadgeSize
  color: BadgeColor
  subtle?: boolean
  padding?: BadgePadding
  className?: string
  flex?: boolean

  // content
  icon?: any
  text?: any // could be a node or a component function, preserving original behavior
  onClose?: (e: any) => void

  // accessibility / events
  onClick?: (e: any) => void
  onMouseUp?: (e: any) => void
  onPointerUp?: (e: any) => void

  // data attributes for tooltips
  dataTestId?: string
  dataTooltip?: string
  dataTooltipInteractive?: boolean
  dataTooltipMaxWidth?: number
  dataTooltipMeta?: string
  dataTooltipShowRight?: boolean
  dataTooltipShowAbove?: boolean
  dataTooltipShowBelow?: boolean
  dataTooltipTimeout?: number
  dataTooltipType?: string
}

/**
 * Resolve the container className by size.
 * Original size-to-container mapping logic: local variable `t`
 */
function getSizeContainerClass(size: BadgeSize) {
  switch (size) {
    case BadgeSize.SMALL:
      return ZN
    case BadgeSize.LARGE:
      return v
    case BadgeSize.EXTRA_LARGE:
      return TT
    default:
      return ZN
  }
}

/**
 * Resolve the default padding class by size.
 * Original size-to-padding mapping logic: local variable `r`
 */
function getSizePaddingClass(size: BadgeSize) {
  switch (size) {
    case BadgeSize.SMALL:
      return Ww
    case BadgeSize.LARGE:
      return o9
    case BadgeSize.EXTRA_LARGE:
      return WH
    default:
      return Ww
  }
}

/**
 * Resolve the color className given color and subtle.
 * Original inline IIFE mapping to `i`
 */
function getColorClass(color: BadgeColor, subtle: boolean | undefined) {
  const t = !!subtle
  switch (color) {
    case BadgeColor.INVERT:
      return t ? _W : sM
    case BadgeColor.DEFAULT:
      return t ? Dt : JR
    case BadgeColor.TERTIARY:
      return t ? Dt : uS
    case BadgeColor.SUCCESS:
      return t ? Pu : xi
    case BadgeColor.WARNING:
      return t ? KK : M6
    case BadgeColor.WARNING_TERTIARY:
      return t ? A4 : uo
    case BadgeColor.DANGER:
      return t ? FZ : B4
    case BadgeColor.DESIGN:
      return t ? yZ : C0
    case BadgeColor.COMPONENT:
      return t ? KT : zB
    case BadgeColor.FIGJAM:
      return t ? ko : Iv
    case BadgeColor.BRAND:
      return t ? rL : Xo
    case BadgeColor.TOOLBAR:
      return t ? vg : rJ
    case BadgeColor.TOOLBAR_SELECTED:
      return vT
    case BadgeColor.INFORMATIONAL:
      return t ? Dt : Fw
    case BadgeColor.DISABLED:
      return t ? Dt : Uu
    case BadgeColor.LIGHT:
      return t ? gL : _X
    case BadgeColor.DEFAULT_TRANSLUCENT:
      return Sx
    case BadgeColor.LIGHT_TRANSLUCENT:
      return t1
    default:
      throwTypeError(color, 'cases exhausted: this shouldn\'t happen')
  }
}

/**
 * Badge component
 * Original class name: $$h0 (PureComponent)
 */
export class Badge extends PureComponent<BadgeProps> {
  render() {
    const size: BadgeSize = (this.props.size ?? BadgeSize.SMALL)
    const containerClass = getSizeContainerClass(size)
    const paddingClass = getSizePaddingClass(size)
    const colorClass = getColorClass(this.props.color, this.props.subtle)
    const subtleClass = this.props.subtle ? aK : ''
    const classes = classNames(
      containerClass,
      this.props.padding ? void 0 : paddingClass,
      colorClass,
      subtleClass,
      this.props.className,
      this.props.flex ? rw : W5,
    )

    return jsxs('span', {
      'className': classes,
      'data-testid': this.props.dataTestId,
      'data-tooltip': this.props.dataTooltip,
      'data-tooltip-interactive': this.props.dataTooltipInteractive,
      'data-tooltip-max-width': this.props.dataTooltipMaxWidth,
      'data-tooltip-meta': this.props.dataTooltipMeta,
      'data-tooltip-offset-x': this.props.dataTooltipShowRight ? 8 : 0,
      'data-tooltip-show-above': this.props.dataTooltipShowAbove,
      'data-tooltip-show-below': this.props.dataTooltipShowBelow,
      'data-tooltip-show-right': this.props.dataTooltipShowRight,
      'data-tooltip-timeout-delay': this.props.dataTooltipTimeout,
      'data-tooltip-type': this.props.dataTooltipType,
      'onClick': this.props.onClick,
      'onMouseUp': this.props.onMouseUp,
      'onPointerUp': this.props.onPointerUp,
      'role': this.props.onClick ? 'button' : void 0,
      'style': {
        padding: this.props.padding
          ? `${this.props.padding.y}px ${this.props.padding.x}px`
          : void 0,
      },
      'tabIndex': this.props.onClick ? 0 : void 0,
      'children': [
        this.props.icon,
        typeof this.props.text !== 'function'
          ? this.props.text
          : jsx(this.props.text, {}),
        this.props.onClose
        && jsx(SvgComponent, {
          className: eD,
          onClick: this.props.onClose,
          svg: SVG,
        }),
      ],
    })
  }
}

// Export aliases to maintain original imports
// Original: export class $$h0 ... ; export const Ex = $$h0
export const Ex = Badge
// Original: export const _Y = $$_1
export const _Y = BadgeLabels
// Original: export const vj = $$p2
export const vj = BadgeSize
// Original: export const zE = $$u3
export const zE = BadgeColor
