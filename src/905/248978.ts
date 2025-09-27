import { jsx, jsxs } from 'react/jsx-runtime'
import { renderI18nText } from '../905/303541'
import { registerTooltip } from '../905/524523'
import { cssBuilderInstance } from '../cssbuilder/589278'

export const styleInfoTooltip = registerTooltip('style_info', (e) => {
  let {
    styleName,
    styleDescription,
    styleFileName,
    styleElementType,
  } = e
  const children: any[] = []

  if (styleName) {
    children.push(jsx('div', { children: styleName }))
  }

  if (styleElementType) {
    children.push(jsx('div', { children: styleElementType }))
  }

  if (styleDescription) {
    children.push(jsxs('div', {
      children: [
        (styleName || styleElementType) ? jsx('br', {}) : null,
        styleDescription,
      ],
    }))
  }

  if (styleFileName) {
    children.push(jsx('div', {
      style: { fontStyle: 'italic' },
      children: renderI18nText('design_systems.styles.style_name_tooltip', {
        fileName: styleFileName,
      }),
    }))
  }

  return jsxs('div', {
    className: cssBuilderInstance.alignLeft.$,
    children,
  })
}, (e) => {
  let t = e.getAttribute('data-tooltip-style-name') || ''
  let i = e.getAttribute('data-tooltip-style-description') || ''
  let n = e.getAttribute('data-tooltip-style-element-type') || ''
  return {
    styleName: t,
    styleDescription: i,
    styleFileName: e.getAttribute('data-tooltip-style-file-name') || '',
    styleElementType: n,
    unconstrainWidth: e.getAttribute('data-tooltip-unconstrain-width') === 'true',
  }
})
// Backward-compatible alias
export const Z = styleInfoTooltip
