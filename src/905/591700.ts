import { kiwiParserCodec } from '../905/294864'

export let $$n1
let a = class {
  _decodeMessageWithSingleNodeChange(e) {
    let t = kiwiParserCodec.decodeMessage(e)
    if (!t)
      throw new Error('Invalid message from C++')
    if (t.nodeChanges?.length !== 1)
      throw new Error('Invalid nodes changes from C++')
    return {
      data: t.nodeChanges[0],
      blobs: t.blobs || [],
    }
  }

  _decodeNodeChange(e) {
    let t = kiwiParserCodec.decodeNodeChange(e)
    if (!t)
      throw new Error('Invalid node change from C++')
    return t
  }

  decodeFillPaintData(e) {
    let t = this._decodeMessageWithSingleNodeChange(e).data.fillPaints
    if (!t)
      throw new Error('Missing paints from C++')
    return t
  }

  decodeEffectData(e) {
    let t = this._decodeMessageWithSingleNodeChange(e).data.effects
    if (!t)
      throw new Error('Missing effects from C++')
    return t
  }

  decodeVectorData(e) {
    let t = this._decodeMessageWithSingleNodeChange(e)
    if (!t)
      throw new Error('Missing vectorData from C++')
    return {
      data: t.data.vectorData,
      blobs: t.blobs,
    }
  }

  decodeTextData(e) {
    let t = this._decodeMessageWithSingleNodeChange(e).data.textData
    if (!t)
      throw new Error('Missing textData from C++')
    return t
  }

  decodePrototypeInteractions(e) {
    let t = this._decodeNodeChange(e).prototypeInteractions
    if (!t)
      throw new Error('Missing prototype interactions from C++')
    return t
  }
}
export function $$s0() {
  $$n1 = new a()
}
export const G = $$s0
export const K = $$n1
