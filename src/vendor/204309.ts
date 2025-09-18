import { buf2binstring, string2buf } from '../vendor/175554'
import { deflate, deflateEnd, deflateInit2, deflateSetDictionary, deflateSetHeader } from '../vendor/238249'
import { p as _$$p } from '../vendor/406216'
import h from '../vendor/570352'
import { assign, Buf8, flattenChunks, shrinkBuf } from '../vendor/997643'

let d = Object.prototype.toString
let p = 0
let g = 4
let m = 0
let v = 1
let y = 2
let b = -1
let O = 0
let x = 8
function Deflate(e) {
  if (!(this instanceof Deflate))
    return new Deflate(e)
  this.options = assign({
    level: b,
    method: x,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: O,
    to: '',
  }, e || {})
  let r
  let n = this.options
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16)
  this.err = 0
  this.msg = ''
  this.ended = !1
  this.chunks = []
  this.strm = new h()
  this.strm.avail_out = 0
  let p = deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy)
  if (p !== m)
    throw new Error(_$$p)
  if (n.header && deflateSetHeader(this.strm, n.header), n.dictionary) {
    if (r = typeof n.dictionary == 'string' ? string2buf(n.dictionary) : d.call(n.dictionary) === '[object ArrayBuffer]' ? new Uint8Array(n.dictionary) : n.dictionary, (p = deflateSetDictionary(this.strm, r)) !== m)
      throw new Error(_$$p)
    this._dict_set = !0
  }
}
function k(e, r) {
  let n = new Deflate(r)
  if (n.push(e, !0), n.err)
    throw n.msg || a[n.err]
  return n.result
}
function _(e, r) {
  (r = r || {}).raw = !0
  return k(e, r)
}
function S(e, r) {
  (r = r || {}).gzip = !0
  return k(e, r)
}
Deflate.prototype.push = function (e, r) {
  let n
  let a
  let h = this.strm
  let b = this.options.chunkSize
  if (this.ended)
    return !1
  a = r === ~~r ? r : !0 === r ? g : p
  typeof e == 'string' ? h.input = string2buf(e) : d.call(e) === '[object ArrayBuffer]' ? h.input = new Uint8Array(e) : h.input = e
  h.next_in = 0
  h.avail_in = h.input.length
  do {
    if (h.avail_out === 0 && (h.output = new Buf8(b), h.next_out = 0, h.avail_out = b), (n = deflate(h, a)) !== v && n !== m) {
      this.onEnd(n)
      this.ended = !0
      return !1
    }
    (h.avail_out === 0 || h.avail_in === 0 && (a === g || a === y)) && (this.options.to === 'string' ? this.onData(buf2binstring(shrinkBuf(h.output, h.next_out))) : this.onData(shrinkBuf(h.output, h.next_out)))
  } while ((h.avail_in > 0 || h.avail_out === 0) && n !== v)
  return a === g ? (n = deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === m) : (a === y && (this.onEnd(m), h.avail_out = 0), !0)
}
Deflate.prototype.onData = function (e) {
  this.chunks.push(e)
}
Deflate.prototype.onEnd = function (e) {
  e === m && (this.options.to === 'string' ? this.result = this.chunks.join('') : this.result = flattenChunks(this.chunks))
  this.chunks = []
  this.err = e
  this.msg = this.strm.msg
}
exports.Deflate = Deflate
exports.deflate = k
exports.deflateRaw = _
exports.gzip = S
