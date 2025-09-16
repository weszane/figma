import { Ck, e1, eW, FM, LC, LO, P2, Sp, tp, W } from '../905/193774'
import { R } from '../905/256203'
import { Z } from '../905/279476'
import { b } from '../905/946806'
import { B } from '../905/950875'
import { useFplStrings } from '../figma_app/415899'

export function $$d3(e, t) {
  switch (e) {
    case 'warn':
      return t === 'inset-modal' ? R : Z
    case 'danger':
    case 'success':
    case 'default':
    case 'brand':
      return t === 'inset-modal' ? B : b
  }
}
export function $$c2(e) {
  let t = useFplStrings('warning')
  let i = useFplStrings('danger')
  switch (e) {
    case 'warn':
      return t
    case 'danger':
      return i
    case 'success':
    case 'default':
    case 'brand':
      return null
  }
}
let $$u0 = {
  default: tp,
  brand: LO,
  success: FM,
  warn: Sp,
  danger: P2,
}
let $$p1 = {
  'full-width': W,
  'inline': eW,
  'informational': Ck,
  'inset-modal': LC,
  'inset': e1,
}
export const GS = $$u0
export const L4 = $$p1
export const T8 = $$c2
export const sW = $$d3
