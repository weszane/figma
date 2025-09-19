let i = 0
let s = 0
let o = 0
let a = 2
let h = 0
let d = 0
let p = 2
let g = 1
let m = 64
let v = 0
class y {
  constructor() {
    this.vkFormat = v
    this.typeSize = 1
    this.pixelWidth = 0
    this.pixelHeight = 0
    this.pixelDepth = 0
    this.layerCount = 0
    this.faceCount = 1
    this.supercompressionScheme = i
    this.levels = []
    this.dataFormatDescriptor = [{
      vendorId: o,
      descriptorType: s,
      descriptorBlockSize: 0,
      versionNumber: a,
      colorModel: h,
      colorPrimaries: g,
      transferFunction: p,
      flags: d,
      texelBlockDimension: [0, 0, 0, 0],
      bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
      samples: [],
    }]
    this.keyValue = {}
    this.globalData = null
  }
}
class b {
  constructor(e, r, n, i) {
    this._dataView = void 0
    this._littleEndian = void 0
    this._offset = void 0
    this._dataView = new DataView(e.buffer, e.byteOffset + r, n)
    this._littleEndian = i
    this._offset = 0
  }

  _nextUint8() {
    let e = this._dataView.getUint8(this._offset)
    this._offset += 1
    return e
  }

  _nextUint16() {
    let e = this._dataView.getUint16(this._offset, this._littleEndian)
    this._offset += 2
    return e
  }

  _nextUint32() {
    let e = this._dataView.getUint32(this._offset, this._littleEndian)
    this._offset += 4
    return e
  }

  _nextUint64() {
    let e = this._dataView.getUint32(this._offset, this._littleEndian) + 0x100000000 * this._dataView.getUint32(this._offset + 4, this._littleEndian)
    this._offset += 8
    return e
  }

  _nextInt32() {
    let e = this._dataView.getInt32(this._offset, this._littleEndian)
    this._offset += 4
    return e
  }

  _nextUint8Array(e) {
    let r = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, e)
    this._offset += e
    return r
  }

  _skip(e) {
    this._offset += e
    return this
  }

  _scan(e, r = 0) {
    let n = this._offset
    let i = 0
    for (; this._dataView.getUint8(this._offset) !== r && i < e;) {
      i++
      this._offset++
    }
    i < e && this._offset++
    return new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i)
  }
}
new Uint8Array([0])
let O = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10]
function x(e) {
  return new TextDecoder().decode(e)
}
function w(e) {
  let [r, n, i] = e.dataFormatDescriptor[0].texelBlockDimension
  return [r + 1, n + 1, i + 1]
}
export function read(e) {
  let r = new Uint8Array(e.buffer, e.byteOffset, O.length)
  if (r[0] !== O[0] || r[1] !== O[1] || r[2] !== O[2] || r[3] !== O[3] || r[4] !== O[4] || r[5] !== O[5] || r[6] !== O[6] || r[7] !== O[7] || r[8] !== O[8] || r[9] !== O[9] || r[10] !== O[10] || r[11] !== O[11])
    throw new Error('Missing KTX 2.0 identifier.')
  let n = new y()
  let i = 17 * Uint32Array.BYTES_PER_ELEMENT
  let s = new b(e, O.length, i, !0)
  n.vkFormat = s._nextUint32()
  n.typeSize = s._nextUint32()
  n.pixelWidth = s._nextUint32()
  n.pixelHeight = s._nextUint32()
  n.pixelDepth = s._nextUint32()
  n.layerCount = s._nextUint32()
  n.faceCount = s._nextUint32()
  let o = s._nextUint32()
  n.supercompressionScheme = s._nextUint32()
  let a = s._nextUint32()
  let h = s._nextUint32()
  let d = s._nextUint32()
  let p = s._nextUint32()
  let g = s._nextUint64()
  let v = s._nextUint64()
  let w = 24 * o
  let k = new b(e, O.length + i, w, !0)
  for (let r = 0; r < o; r++) {
    n.levels.push({
      levelData: new Uint8Array(e.buffer, e.byteOffset + k._nextUint64(), k._nextUint64()),
      uncompressedByteLength: k._nextUint64(),
    })
  }
  let _ = new b(e, a, h, !0)
  let S = {
    vendorId: _._skip(4)._nextUint16(),
    descriptorType: _._nextUint16(),
    versionNumber: _._nextUint16(),
    descriptorBlockSize: _._nextUint16(),
    colorModel: _._nextUint8(),
    colorPrimaries: _._nextUint8(),
    transferFunction: _._nextUint8(),
    flags: _._nextUint8(),
    texelBlockDimension: [_._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8()],
    bytesPlane: [_._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8()],
    samples: [],
  }
  let E = 6
  let A = 4
  let C = (S.descriptorBlockSize / 4 - E) / A
  for (let e = 0; e < C; e++) {
    let r = {
      bitOffset: _._nextUint16(),
      bitLength: _._nextUint8(),
      channelType: _._nextUint8(),
      samplePosition: [_._nextUint8(), _._nextUint8(), _._nextUint8(), _._nextUint8()],
      sampleLower: -1 / 0,
      sampleUpper: 1 / 0,
    }
    r.channelType & m ? (r.sampleLower = _._nextInt32(), r.sampleUpper = _._nextInt32()) : (r.sampleLower = _._nextUint32(), r.sampleUpper = _._nextUint32())
    S.samples[e] = r
  }
  n.dataFormatDescriptor.length = 0
  n.dataFormatDescriptor.push(S)
  let T = new b(e, d, p, !0)
  for (; T._offset < p;) {
    let e = T._nextUint32()
    let r = T._scan(e)
    let i = x(r)
    if (n.keyValue[i] = T._nextUint8Array(e - r.byteLength - 1), i.match(/^ktx/i)) {
      let e = x(n.keyValue[i])
      n.keyValue[i] = e.substring(0, e.lastIndexOf('\0'))
    }
    let s = e % 4 ? 4 - e % 4 : 0
    T._skip(s)
  }
  if (v <= 0)
    return n
  let I = new b(e, g, v, !0)
  let P = I._nextUint16()
  let R = I._nextUint16()
  let M = I._nextUint32()
  let D = I._nextUint32()
  let N = I._nextUint32()
  let $ = I._nextUint32()
  let L = []
  for (let e = 0; e < o; e++) {
    L.push({
      imageFlags: I._nextUint32(),
      rgbSliceByteOffset: I._nextUint32(),
      rgbSliceByteLength: I._nextUint32(),
      alphaSliceByteOffset: I._nextUint32(),
      alphaSliceByteLength: I._nextUint32(),
    })
  }
  let j = g + I._offset
  let z = j + M
  let Z = z + D
  let F = Z + N
  let U = new Uint8Array(e.buffer, e.byteOffset + j, M)
  let Q = new Uint8Array(e.buffer, e.byteOffset + z, D)
  let V = new Uint8Array(e.buffer, e.byteOffset + Z, N)
  let B = new Uint8Array(e.buffer, e.byteOffset + F, $)
  n.globalData = {
    endpointCount: P,
    selectorCount: R,
    imageDescs: L,
    endpointsData: U,
    selectorsData: Q,
    tablesData: V,
    extendedData: B,
  }
  return n
}
export const LF4 = read
