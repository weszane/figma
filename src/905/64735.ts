import { jsx, jsxs } from 'react/jsx-runtime'
import { getI18nString } from '../905/303541'
import { IconButton } from '../905/443068'
import { AutoLayout } from '../905/470281'
import { ButtonPrimitive } from '../905/632989'
import { SvgComponent } from '../905/714743'
import { TextWithTruncation } from '../905/984674'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { LinkPrimitive } from '../figma_app/496441'
import { A as _$$A } from '../svg/545021'

/**
 * AlertVariants - Defines the possible variants for alerts.
 */
export type AlertVariant
  = | 'brand'
    | 'design'
    | 'figjam'
    | 'dev'
    | 'gray'
    | 'warning'
    | 'danger'
    | 'success'

/**
 * AlertOrientation - Defines the orientation of the alert.
 */
export type AlertOrientation = 'horizontal' | 'vertical'

/**
 * AlertAction - Defines the action for the alert button/link.
 */
export interface AlertAction {
  label: string
  onClick?: () => void
  href?: string
}

/**
 * AlertProps - Props for the Alert component (original: $$h0).
 */
export interface AlertProps {
  iconSrc: any
  children: React.ReactNode
  variant: AlertVariant
  orientation: AlertOrientation
  title?: string
  action?: AlertAction
  onClose?: () => void
  dataTestId?: string
  cornerRadius?: number
}

/**
 * Maps alert variants to background colors (original: m).
 */
const alertBgColors: Record<AlertVariant, string> = {
  brand: 'brand-tertiary',
  design: 'design-tertiary',
  figjam: 'figjam-tertiary',
  dev: 'handoff-tertiary',
  gray: 'tertiary',
  warning: 'warning-tertiary',
  danger: 'danger-tertiary',
  success: 'success-tertiary',
}

/**
 * Renders the icon for the alert (original: g).
 */
const AlertIcon: React.FC<{ svg: any }> = ({ svg }) => (
  // g
  jsx(SvgComponent, {
    className: cssBuilderInstance.w24.h24.flex.itemsCenter.justifyCenter.flexShrink0.colorIcon.$,
    svg,
  })
)

/**
 * Renders the action button or link for the alert (original: f).
 */
const AlertActionButton: React.FC<{ variant: AlertVariant, action: AlertAction }> = ({
  variant,
  action,
}) => {
  // f
  const className = cssBuilderInstance.flexShrink0.hAuto.noWrap.ellipsis.overflowHidden.cursorPointer.bgTransparent.match(variant, {
    brand: cssBuilderInstance.colorTextBrand,
    design: cssBuilderInstance.colorTextDesign,
    figjam: cssBuilderInstance.colorTextFigjam,
    dev: cssBuilderInstance.colorTextTertiary,
    gray: cssBuilderInstance.colorTextDesign,
    warning: cssBuilderInstance.colorTextWarning,
    danger: cssBuilderInstance.colorTextDanger,
    success: cssBuilderInstance.colorTextSuccess,
  }).$

  return action.href
    ? (
        jsx(LinkPrimitive, {
          onClick: action.onClick,
          newTab: true,
          href: action.href,
          className,
          trusted: true,
          children: action.label,
        })
      )
    : (
        jsx(ButtonPrimitive, {
          onClick: action.onClick,
          className,
          children: action.label,
        })
      )
}

/**
 * Alert - Main alert component (original: $$h0).
 */
export const Alert: React.FC<AlertProps> = ({
  iconSrc,
  children,
  variant,
  orientation,
  title,
  action,
  onClose,
  dataTestId,
  cornerRadius,
}) => {
  // $$h0
  if (orientation === 'horizontal') {
    return jsxs(AutoLayout, {
      padding: 8,
      spacing: 4,
      direction: 'horizontal',
      verticalAlignItems: 'center',
      backgroundColor: alertBgColors[variant],
      height: 'hug-contents',
      cornerRadius: cornerRadius ?? 4,
      dataTestId,
      children: [
        jsx(AlertIcon, { svg: iconSrc }),
        jsxs('div', {
          className: cssBuilderInstance.flex.flexRow.itemsCenter.flexGrow1.overflowHidden.gap16.$,
          children: [
            title
            && jsx('span', {
              className: cssBuilderInstance.flexShrink0.$,
              children: jsx(TextWithTruncation, {
                fontWeight: 'semi-bold',
                color: 'default',
                truncate: 'end',
                children: title,
              }),
            }),
            jsx(TextWithTruncation, {
              color: 'default',
              truncate: 'end',
              children,
            }),
            action
            && jsx('span', {
              className: cssBuilderInstance.mlAuto.px8.$,
              children: jsx(AlertActionButton, {
                variant,
                action,
              }),
            }),
          ],
        }),
        onClose
        && jsx(IconButton, {
          'aria-label': getI18nString('general.close'),
          'onClick': onClose,
          'children': jsx(SvgComponent, {
            svg: _$$A,
          }),
        }),
      ],
    })
  }

  // vertical
  return jsxs(AutoLayout, {
    padding: 8,
    spacing: 4,
    direction: 'horizontal',
    verticalAlignItems: 'start',
    backgroundColor: alertBgColors[variant],
    height: 'hug-contents',
    cornerRadius: cornerRadius ?? 4,
    dataTestId,
    children: [
      jsx(AlertIcon, { svg: iconSrc }),
      jsxs(AutoLayout, {
        direction: 'vertical',
        padding: { vertical: 4 },
        spacing: 4,
        children: [
          jsxs(AutoLayout, {
            direction: 'vertical',
            spacing: 0,
            children: [
              title
              && jsx(TextWithTruncation, {
                fontWeight: 'semi-bold',
                color: 'default',
                children: title,
              }),
              jsx(TextWithTruncation, {
                color: 'default',
                children,
              }),
            ],
          }),
          action
          && jsx(AlertActionButton, {
            variant,
            action,
          }),
        ],
      }),
      onClose
      && jsx(IconButton, {
        'aria-label': getI18nString('general.close'),
        'onClick': onClose,
        'children': jsx(SvgComponent, {
          svg: _$$A,
        }),
      }),
    ],
  })
}

/**
 * Export for legacy compatibility (original: zE).
 */
export const zE = Alert
