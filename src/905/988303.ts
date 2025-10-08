import { jsx, jsxs } from "react/jsx-runtime"
import { _y, az, dq, gu, k9, lo, Qe, s0, TQ, Yd } from "../905/5637"
import { SvgComponent } from "../905/714743"
import { A as _$$A } from "../5724/322086"
import { A } from "../6828/379561"
import { formatNumber } from "../figma_app/930338"

interface IconMetricBaseProps {
  metric: number
}

interface IconMetricDisplayProps extends IconMetricBaseProps {
  icon: string
}

interface IconMetricInteractiveProps extends IconMetricBaseProps {
  icon: string
  hoverIcon?: string
  activeIcon?: string
  onClick?: () => void
  classNameOverride?: string
  isActive?: boolean
  isDisabled?: boolean
  isWhiteboard?: boolean
}

interface IconMetricButtonProps extends IconMetricBaseProps {
  icon: string
}

/**
 * Display a simple icon with a formatted metric value
 * Original: $$d3
 */
export function IconMetricDisplay({ icon, metric }: IconMetricDisplayProps) {
  return jsxs("div", {
    className: lo,
    children: [
      jsx("div", {
        className: TQ,
        children: jsx(SvgComponent, {
          className: Yd,
          svg: icon,
        }),
      }),
      formatNumber(metric),
    ],
  })
}

/**
 * Interactive icon metric component with hover and active states
 * Original: $$c2
 */
export function IconMetricInteractive({
  icon,
  hoverIcon,
  activeIcon,
  metric,
  onClick,
  classNameOverride,
}: IconMetricInteractiveProps) {
  const handleClick = "onClick" in { onClick } ? onClick : undefined
  const containerClassName = classNameOverride ?? dq

  const getIconClassNames = (): string => {
    const classNames = [Yd]
    if (hoverIcon)
      classNames.push(gu)
    if (activeIcon)
      classNames.push(az)
    return classNames.join(" ")
  }

  return jsxs("div", {
    className: containerClassName,
    onClick: handleClick,
    children: [
      jsxs("div", {
        className: TQ,
        children: [
          jsx(SvgComponent, {
            className: getIconClassNames(),
            svg: icon,
          }),
          hoverIcon
          && jsx(SvgComponent, {
            className: k9,
            svg: hoverIcon,
          }),
          activeIcon
          && jsx(SvgComponent, {
            className: s0,
            svg: activeIcon,
          }),
        ],
      }),
      formatNumber(metric),
    ],
  })
}

/**
 * Button-like icon metric component with different states
 * Original: $$u1
 */
export function IconMetricButton({
  metric,
  onClick,
  isActive,
  isDisabled,
  isWhiteboard,
}: IconMetricButtonProps & {
  onClick?: () => void
  isActive?: boolean
  isDisabled?: boolean
  isWhiteboard?: boolean
}) {
  if (!onClick || isDisabled) {
    return jsx(IconMetricDisplay, {
      icon: _$$A,
      metric,
    })
  }

  return jsx(IconMetricInteractive, {
    icon: _$$A,
    hoverIcon: _$$A,
    activeIcon: _$$A,
    metric,
    classNameOverride: isActive ? (isWhiteboard ? _y : Qe) : undefined,
    onClick,
  })
}

/**
 * Icon metric component for comments
 * Original: $$p0
 */
export function IconMetricComments({ metric }: IconMetricBaseProps) {
  return jsx(IconMetricDisplay, {
    icon: A,
    metric,
  })
}

// Export aliases for backward compatibility
export const Ij = IconMetricComments // Original: $$p0
export const OV = IconMetricButton // Original: $$u1
export const vE = IconMetricInteractive // Original: $$c2
export const x8 = IconMetricDisplay // Original: $$d3
