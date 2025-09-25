import i from '../905/35608'
import o from '../figma_app/153199'
import l from '../figma_app/262526'
import n from '../figma_app/595042'
import { decodeBinarySchema } from '../figma_app/870879'

export async function $$s1(e) {
  let t = atob(e)
  let r = await fetch(t, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
  let n = await r.blob()
  let i = await n.arrayBuffer()
  return decodeBinarySchema(new Uint8Array(i))
}
export { Eo, f6 } from '../905/35608'
export { BX } from '../figma_app/153199'
export { _o } from '../figma_app/262526'
export { Dp, l0, wF, wV } from '../figma_app/595042'
export const _c = $$s1
