import { jsx } from 'react/jsx-runtime'
import { I5, jl } from '../905/112861'
import { getIconColor } from '../905/499018'
import { SvgComponent } from '../905/714743'

let o = jl
export function $$l0({
  icon: e,
  fill: t = 'default',
  dataTestId: i,
  ariaHidden: l,
}) {
  let d = e.split('-').join(' ')
  let c = e in o
  return jsx(SvgComponent, {
    style: {
      fill: getIconColor(t),
    },
    dataTestId: i,
    title: d,
    ariaLabel: d,
    ariaHidden: l,
    svg: I5[e],
    useOriginalSrcFills_DEPRECATED: c,
  })
}
export const I = $$l0
