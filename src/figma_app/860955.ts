import type { ForwardedRef, ReactNode } from 'react'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { getThemeContextOrDefault } from '../905/158740'
import { useTheme } from '../905/289770'
import { a as SVG } from '../905/339331'
import { _5, AR, AS, BB, CT, DD, iM, Ji, kL, me, Os, p$, Pq, rv, Sv, Th, XT, zc } from '../905/379736'
import { c as SVG2 } from '../905/453572'
import { MenuContainer, MenuGroup, MenuItemPrimitive, MenuPrimitiveLink, MenuRoot, MenuSubContainer, MenuTitle, ScrollArrow, SubMenu, SubTrigger, useMenu } from '../905/465888'
import { s as _$$s } from '../905/536340'
import { r as SCG3 } from '../905/571562'
import { loadFeatureFlags } from '../905/586361'
import { setupThemeContext } from '../905/614223'
import { R as SVG4 } from '../905/621802'
import { useDarkContext } from '../figma_app/215667'

/**
 * Menu utilities and components for figma_app.
 * Original function/component names are preserved in comments for traceability.
 * All exports are renamed for clarity and maintainability.
 */

/** Types for menu props */
export interface MenuProps {
  children?: ReactNode
  [key: string]: any
}

export interface SubTriggerProps extends MenuProps {
  hasChecked?: boolean
}

export interface MenuItemProps extends MenuProps {}

export interface MenuLinkProps extends MenuProps {}

export interface MenuGroupProps extends MenuProps {}

export interface MenuTitleProps extends MenuProps {}

export interface MenuContainerProps extends MenuProps {
  rareUseIndentOptOut?: boolean
}

/**
 * Setup menu hook with offset.
 * Original: $$E7
 */
export function setupMenu(props: any) {
  return useMenu({
    ...props,
    offset: 4,
  })
}

/**
 * SubMenu component with offset based on theme version.
 * Original: $$y9
 */
export function MenuSubMenu(props: any) {
  const { version } = getThemeContextOrDefault()
  return jsx(SubMenu, {
    offset: {
      mainAxis: version === 'ui2' ? 0 : 4,
      alignmentAxis: -8,
    },
    ...props,
  })
}
MenuSubMenu.displayName = 'Menu.SubMenu'

/**
 * SubTrigger component for menu.
 * Original: $$b6
 */
export const MenuSubTrigger = forwardRef((
  { children, hasChecked, ...rest }: SubTriggerProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(SubTrigger, {
    className: classNames(AS, iM),
    ...rest,
    ref,
    hasChecked,
    children: jsxs('span', {
      className: classNames(rv, p$),
      children: [
        jsxs('span', {
          className: AR,
          children: [
            hasChecked !== undefined && jsx(SVG2, {
              'className': CT,
              'aria-hidden': true,
            }),
            children,
          ],
        }),
        jsx('span', {
          className: zc,
          children: jsx(SVG4, {}),
        }),
      ],
    }),
  })
})
MenuSubTrigger.displayName = 'Menu.SubTrigger'

/**
 * SubContainer for submenu.
 * Original: $$T1
 */
export const MenuSubContainerComp = forwardRef((
  { children, ...rest }: MenuProps,
  ref: ForwardedRef<any>,
) => {
  const mode = useDarkContext()
  const { color } = useTheme()
  return jsx(MenuSubContainer, {
    className: classNames(
      kL,
      (mode === 'dark' ? 'dark' : color) === 'light' ? BB : XT,
    ),
    ...rest,
    ref,
    children: jsxs(setupThemeContext, {
      mode: mode === 'dark' ? 'dark' : undefined,
      children: [
        jsx(ScrollArrow, {
          className: Th,
          direction: 'up',
          children: jsx(SVG, {}),
        }),
        children,
        jsx(ScrollArrow, {
          className: Th,
          direction: 'down',
          children: jsx(SCG3, {}),
        }),
      ],
    }),
  })
})
MenuSubContainerComp.displayName = 'Menu.SubContainer'

/**
 * Menu container with feature flag for indent.
 * Original: $$I11
 */
export const MenuContainerComp = forwardRef((
  { children, rareUseIndentOptOut, ...rest }: MenuContainerProps,
  ref: ForwardedRef<any>,
) => {
  const mode = useDarkContext()
  const { color } = useTheme()
  const { fpl_consistent_menu_indent_by_default } = loadFeatureFlags()
  return jsx(MenuContainer, {
    className: classNames(
      kL,
      (mode === 'dark' ? 'dark' : color) === 'light' ? BB : XT,
      {
        [Ji]: fpl_consistent_menu_indent_by_default && !rareUseIndentOptOut,
      },
    ),
    ...rest,
    ref,
    children: jsxs(setupThemeContext, {
      mode: mode === 'dark' ? 'dark' : undefined,
      children: [
        jsx(ScrollArrow, {
          className: Th,
          direction: 'up',
          children: jsx(SVG, {}),
        }),
        children,
        jsx(ScrollArrow, {
          className: Th,
          direction: 'down',
          children: jsx(SCG3, {}),
        }),
      ],
    }),
  })
})
MenuContainerComp.displayName = 'Menu.Container'

/**
 * Menu root component.
 * Original: $$S8
 */
export const MenuRootComp = (props: any) => jsx(MenuRoot, { ...props })
MenuRootComp.displayName = 'Menu.Root'

/**
 * Menu title.
 * Original: $$v10
 */
export const MenuTitleComp = forwardRef((
  props: MenuTitleProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(MenuTitle, {
    className: DD,
    ...props,
    ref,
  })
})
MenuTitleComp.displayName = 'Menu.Title'

/**
 * Hidden menu title.
 * Original: $$A13
 */
export const MenuHiddenTitleComp = forwardRef((
  props: MenuTitleProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(MenuTitle, {
    className: _$$s,
    ...props,
    ref,
  })
})
MenuHiddenTitleComp.displayName = 'Menu.HiddenTitle'

/**
 * Menu group.
 * Original: $$x5
 */
export const MenuGroupComp = forwardRef((
  props: MenuGroupProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(MenuGroup, {
    className: Os,
    ...props,
    ref,
  })
})
MenuGroupComp.displayName = 'Menu.Group'

/**
 * Menu item primitive.
 * Original: $$N12
 */
export const MenuItemComp = forwardRef((
  { children, ...rest }: MenuItemProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(MenuItemPrimitive, {
    className: AS,
    ...rest,
    ref,
    children: jsx('span', {
      className: rv,
      children,
    }),
  })
})
MenuItemComp.displayName = 'Menu.Item'

/**
 * Menu link primitive.
 * Original: $$C2
 */
export const MenuLinkComp = forwardRef((
  { children, ...rest }: MenuLinkProps,
  ref: ForwardedRef<any>,
) => {
  return jsx(MenuPrimitiveLink, {
    className: AS,
    ...rest,
    ref,
    children: jsx('span', {
      className: rv,
      children,
    }),
  })
})
MenuLinkComp.displayName = 'Menu.Link'

/**
 * Menu item trail.
 * Original: $$w3
 */
export function MenuItemTrail(props: any) {
  return jsx('span', {
    className: Pq,
    ...props,
  })
}
MenuItemTrail.displayName = 'Menu.ItemTrail'

/**
 * Menu item lead.
 * Original: $$O4
 */
export function MenuItemLead(props: any) {
  return jsx('span', {
    className: _5,
    ...props,
  })
}
MenuItemLead.displayName = 'Menu.ItemLead'

/**
 * Menu subtext.
 * Original: $$R0
 */
export function MenuSubText(props: any) {
  return jsx('div', {
    className: Sv,
    ...props,
  })
}
MenuSubText.displayName = 'Menu.SubText'

/**
 * Menu shortcut.
 * Original: $$L14
 */
export function MenuShortcut(props: any) {
  return jsx('div', {
    className: Sv,
    ...props,
  })
}
MenuShortcut.displayName = 'Menu.Shortcut'

/**
 * Menu separator.
 * Original: $$P15
 */
export function MenuSeparator() {
  return jsx('li', {
    className: me,
    role: 'separator',
  })
}
MenuSeparator.displayName = 'Menu.Separator'

/** Exported aliases for refactored components/functions */
export const ME = MenuSubText
export const MJ = MenuSubContainerComp
export const N_ = MenuLinkComp
export const Ov = MenuItemTrail
export const Q$ = MenuItemLead
export const YJ = MenuGroupComp
export const ZP = MenuSubTrigger
export const b = setupMenu
export const bL = MenuRootComp
export const g8 = MenuSubMenu
export const hE = MenuTitleComp
export const mc = MenuContainerComp
export const q7 = MenuItemComp
export const r1 = MenuHiddenTitleComp
export const rm = MenuShortcut
export const wv = MenuSeparator
