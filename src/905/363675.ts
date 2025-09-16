import { jsx, jsxs } from 'react/jsx-runtime'
import { ensureContext } from '../905/61417'
import { eJ, iU } from '../905/193774'
import { T8 } from '../905/417626'
import { s as _$$s } from '../905/536340'
import { T } from '../905/745591'
import { y } from '../905/842987'

export function BannerMessage({
  title: e,
  children: t,
  htmlAttributes: i,
  ...c
}) {
  let {
    variant,
  } = ensureContext(y, 'Banner.Message', 'Banner')
  let p = T8(variant)
  return jsxs(T, {
    className: iU,
    role: variant === 'danger' ? 'alert' : 'status',
    ...i,
    ...c,
    children: [p && jsxs('span', {
      className: _$$s,
      children: [p, '\xA0'],
    }), e && jsx('span', {
      className: eJ,
      children: e,
    }), jsx('span', {
      children: t,
    })],
  })
}
BannerMessage.displayName = 'Banner.Message'
export const Q = BannerMessage
