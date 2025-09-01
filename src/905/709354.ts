import { ServiceCategories as _$$e } from '../905/165054'
import { kiwiParserCodec } from '../905/294864'
import { c2 } from '../905/382883'
import { decodeBase64, encodeBase64 } from '../905/561685'
import { N7 } from '../905/954389'

export function $$l1(e, t) {
  let i
  if (typeof t == 'string') {
    if (t === '')
      return
    i = kiwiParserCodec.decodeMessage(decodeBase64(t))
  }
  else {
    if (t.length === 0)
      return
    i = kiwiParserCodec.decodeMessage(t)
  }
  if (!i || !i.nodeChanges || i.nodeChanges.length !== 1 || void 0 === i.nodeChanges[0][e])
    throw new Error(`Cannot read value for ${e}`)
  return {
    data: i.nodeChanges[0][e],
    blobs: i.blobs || [],
  }
}
export function $$d2(e, t) {
  let i = kiwiParserCodec.encodeNodeChange({
    [e]: t.data,
  })
  let r = kiwiParserCodec.decodeNodeChange(i)
  return c2(t.data, r[e], !0, !1, !0)
    ? kiwiParserCodec.encodeMessage({
        type: 'NODE_CHANGES',
        sessionID: 0,
        ackID: 0,
        nodeChanges: [{
          [e]: t.data,
        }],
        blobs: t.blobs,
      })
    : (N7(_$$e.DESIGN_SYSTEMS_EDITOR, new Error(`Invalid format for ${e}`), {
        extra: {
          type: typeof t,
          value: t,
          jsonifiedData: JSON.stringify(t?.data),
          jsonifiedDecodedNodeChange: JSON.stringify(r),
          source: 'encodeDataWithBlobs',
          props: {
            field: e,
          },
        },
      }), kiwiParserCodec.encodeMessage({
        type: 'NODE_CHANGES',
        sessionID: 0,
        ackID: 0,
        nodeChanges: [{
          [e]: null,
        }],
        blobs: [],
      }))
}
export function $$c0(e, t) {
  return encodeBase64($$d2(e, t))
}
export const C_ = $$c0
export const dG = $$l1
export const xg = $$d2
