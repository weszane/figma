import { jsx } from 'react/jsx-runtime'
import { AppDomain, getNodeTypeDomain, NodeTypeMap } from '../905/252555'
import { ENTITY_STATUS_CODES, ENTITY_STATUS_SYMBOLS } from '../905/407439'
import { AutoLayout } from '../905/470281'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { nP, YY } from '../figma_app/722791'

function c({
  badge: e,
}) {
  switch (e.type) {
    case 'type':
      return jsx(I, {
        type: e.value,
        tracked: e.tracked,
      })
    case 'phase':
      return jsx(C, {
        phase: e.value,
      })
    case 'change':
      return jsx(renderChangeBadge, {
        type: e.value,
      })
    case 'editType':
      return jsx(P, {
        type: e.value,
      })
    default:
      return jsx(D, {
        ...e,
      })
  }
}
let u = cssBuilderInstance.px4.minW10.inlineBlock.bRadius4.h16.flex.alignCenter.justifyCenter.fontSemiBold
let p = u.colorBgSecondary.colorText.$
let m = u.colorBgBrandSecondary.colorTextOnbrand.$
let h = u.colorBgBrand.colorTextOnbrand.$
let g = u.colorBgSuccess.colorTextOnsuccess.$
let f = u.colorBgWarning.colorTextOnwarning.$
let _ = u.colorBgDanger.colorTextOndanger.$
let A = u.minW28.w28.colorBg.b1.h14
let y = {
  [AppDomain.Editor]: A.colorBorderDesign.colorTextDesignSecondary.$,
  [AppDomain.DesignSystems]: A.colorBorderComponent.colorTextComponent.$,
  [AppDomain.FigJam]: A.colorBorderFigjam.colorBorderFigjam.$,
  [AppDomain.Page]: A.colorBorder.colorText.$,
  [AppDomain.Other]: A.colorBorderSuccess.colorTextSuccessSecondary.$,
}
let b = {
  fontSize: 9,
  lineHeight: '16px',
  fontStyle: 'normal',
}
let v = {
  fontSize: 9,
  lineHeight: '14px',
  fontStyle: 'normal',
}
function I({
  type: e,
  tracked: t = !0,
}) {
  return jsx('div', {
    title: `${e}${t ? ' (tracked)' : ' (untracked)'}`,
    className: y[getNodeTypeDomain(e)],
    style: {
      ...v,
      ...(t
        ? {}
        : {
            borderStyle: 'dashed',
          }),
    },
    children: NodeTypeMap[e],
  })
}
let E = {
  CREATED: g,
  MODIFIED: m,
  CHILD_MODIFIED: h,
  REMOVED: _,
}

let S = u.minW24.w24.colorBg.b1.h14
let w = {
  CREATED: S.colorBorderSuccess.colorTextSuccessSecondary.$,
  MODIFIED: S.colorBorderBrand.colorTextBrandSecondary.$,
  REMOVED: S.colorBorderDanger.colorTextDangerSecondary.$,
}
let T = u.minW28.w28.colorBg.b1.h14
let k = T.colorBorderComponent.colorTextComponent.$
let R = T.colorBorderComponent.colorTextComponentTertiary.$
let N = T.colorBorderWarning.colorTextWarning.$

function C({
  phase: e,
}) {
  return jsx('div', {
    title: e,
    className: w[e],
    style: v,
    children: ENTITY_STATUS_CODES[e],
  })
}

function P({
  type: e,
}) {
  return jsx('div', {
    title: `Edit scope type: ${e}`,
    className: e === 'MIXED' ? R : YY.has(e) ? k : N,
    style: v,
    children: nP[e],
  })
}
let O = {
  info: p,
  warning: f,
  error: _,
}

function D({
  type: e,
  value: t,
  title: i,
}) {
  return jsx('div', {
    title: i,
    className: O[e],
    style: b,
    children: t,
  })
}

/**
 * Renders a change badge with appropriate style and symbol.
 * @param props - Props containing the badge type.
 * @returns JSX.Element
 * (Original function: $$x1)
 */
export function renderChangeBadge({
  type,
}: {
  type: keyof typeof E
}) {
  return jsx('div', {
    title: type,
    className: E[type],
    style: b,
    children: ENTITY_STATUS_SYMBOLS[type],
  })
}

/**
 * Renders a list of badges inside an AutoLayout container.
 * @param props - Props containing the badges array.
 * @returns JSX.Element
 * (Original function: $$d0)
 */
export function renderBadgesLayout({
  badges,
}: {
  badges: Array<{ type: string, value?: string, tracked?: boolean, title?: string }>
}) {
  return jsx(AutoLayout, {
    width: 'hug-contents',
    children: badges.map((badge, idx) =>
      jsx(c, {
        badge,
      }, idx),
    ),
  })
}

// Refactored exports to match new names
export const IV = renderBadgesLayout
export const gp = renderChangeBadge
