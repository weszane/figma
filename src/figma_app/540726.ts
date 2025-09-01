import { kiwiParserCodec } from '../905/294864'
import { decodeBase64, encodeBase64 } from '../905/561685'
import { glU } from '../figma_app/763686'
import { hX } from '../figma_app/930338'

let $$o3 = '\x3C!--(figma)'
let $$l12 = '(/figma)--\x3E'
let $$d5 = `<span data-buffer="${$$o3}`
let $$c2 = `${$$l12}"></span>`
let $$u17 = '&lt;!--(figma)'
let $$p9 = '(/figma)--&gt;'
let $$_1 = '\x3C!--(figmeta)'
let $$h8 = '(/figmeta)--\x3E'
let $$m11 = `<span data-metadata="${$$_1}`
let $$g7 = `${$$h8}"></span>`
let $$f4 = '&lt;!--(figmeta)'
let $$E16 = '(/figmeta)--&gt;'
export function $$y0(e, t, r) {
  let n = `<meta charset="utf-8">${$$d5}${encodeBase64(t)}${$$c2}${hX(r)}`
  try {
    e.setData('text/html', n)
  }
  catch (e) {
    console.warn('DataTransfer failed in clipboard event')
  }
}
export function $$b18(e) {
  let t
  try {
    t = e.getData('text/html')
  }
  catch (e) {
    console.warn('DataTransfer failed in clipboard event')
    return null
  }
  return $$T6(t)
}
export function $$T6(e) {
  let t = e.indexOf($$o3)
  let r = e.indexOf($$l12)
  return t >= 0 && r >= 0 && t < r ? decodeBase64(e.slice(t + $$o3.length, r)) : null
}
export function $$I13(e) {
  let t = e.clipboardData?.getData('text/html')
  return !!t?.includes($$o3) || !!t?.includes($$u17)
}
export function $$S15(e) {
  return e.clipboardData && [...e.clipboardData.items].some(e => e.type.startsWith('image/'))
}
export function $$v10(e, t) {
  if (!glU)
    return null
  let r = kiwiParserCodec.encodeMessage({
    type: 'STYLE',
    pasteFileKey: e != null ? e : void 0,
    sessionID: 0,
    ackID: 0,
    nodeChanges: [{
      guid: {
        sessionID: 0,
        localID: 0,
      },
      phase: 'CREATED',
      ...t,
    }],
  })
  return glU.encodeClipboardData(r)
}
export function $$A14(e) {
  return glU ? kiwiParserCodec.decodeMessage(glU.decodeClipboardData(e)) : null
}
export const C4 = $$y0
export const D2 = $$_1
export const Er = $$c2
export const FJ = $$o3
export const FM = $$f4
export const H3 = $$d5
export const Ze = $$T6
export const cB = $$g7
export const cu = $$h8
export const eY = $$p9
export const fG = $$v10
export const fb = $$m11
export const gU = $$l12
export const gk = $$I13
export const l7 = $$A14
export const tj = $$S15
export const wh = $$E16
export const xY = $$u17
export const yH = $$b18
