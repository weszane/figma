import { deflateInit2, deflateSetHeader, deflateSetDictionary, deflate, deflateEnd } from "../vendor/238249";
import { assign, Buf8, shrinkBuf, flattenChunks } from "../vendor/997643";
import { string2buf, buf2binstring } from "../vendor/175554";
import { p as _$$p } from "../vendor/406216";
import h from "../vendor/570352";
var d = Object.prototype.toString;
var p = 0;
var g = 4;
var m = 0;
var v = 1;
var y = 2;
var b = -1;
var O = 0;
var x = 8;
function w(e) {
  if (!(this instanceof w)) return new w(e);
  this.options = assign({
    level: b,
    method: x,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: O,
    to: ""
  }, e || {});
  var r;
  var n = this.options;
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16);
  this.err = 0;
  this.msg = "";
  this.ended = !1;
  this.chunks = [];
  this.strm = new h();
  this.strm.avail_out = 0;
  var p = deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
  if (p !== m) throw Error(_$$p);
  if (n.header && deflateSetHeader(this.strm, n.header), n.dictionary) {
    if (r = "string" == typeof n.dictionary ? string2buf(n.dictionary) : "[object ArrayBuffer]" === d.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary, (p = deflateSetDictionary(this.strm, r)) !== m) throw Error(_$$p);
    this._dict_set = !0;
  }
}
function k(e, r) {
  var n = new w(r);
  if (n.push(e, !0), n.err) throw n.msg || a[n.err];
  return n.result;
}
function _(e, r) {
  (r = r || {}).raw = !0;
  return k(e, r);
}
function S(e, r) {
  (r = r || {}).gzip = !0;
  return k(e, r);
}
w.prototype.push = function (e, r) {
  var n;
  var a;
  var h = this.strm;
  var b = this.options.chunkSize;
  if (this.ended) return !1;
  a = r === ~~r ? r : !0 === r ? g : p;
  "string" == typeof e ? h.input = string2buf(e) : "[object ArrayBuffer]" === d.call(e) ? h.input = new Uint8Array(e) : h.input = e;
  h.next_in = 0;
  h.avail_in = h.input.length;
  do {
    if (0 === h.avail_out && (h.output = new Buf8(b), h.next_out = 0, h.avail_out = b), (n = deflate(h, a)) !== v && n !== m) {
      this.onEnd(n);
      this.ended = !0;
      return !1;
    }
    (0 === h.avail_out || 0 === h.avail_in && (a === g || a === y)) && ("string" === this.options.to ? this.onData(buf2binstring(shrinkBuf(h.output, h.next_out))) : this.onData(shrinkBuf(h.output, h.next_out)));
  } while ((h.avail_in > 0 || 0 === h.avail_out) && n !== v);
  return a === g ? (n = deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === m) : (a === y && (this.onEnd(m), h.avail_out = 0), !0);
};
w.prototype.onData = function (e) {
  this.chunks.push(e);
};
w.prototype.onEnd = function (e) {
  e === m && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = flattenChunks(this.chunks));
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
exports.Deflate = w;
exports.deflate = k;
exports.deflateRaw = _;
exports.gzip = S;