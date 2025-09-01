import { inflateInit2, inflateGetHeader, inflateSetDictionary, inflate, inflateEnd } from "../vendor/319553";
import { assign, Buf8, arraySet, shrinkBuf, flattenChunks } from "../vendor/997643";
import { string2buf, binstring2buf, utf8border, buf2string } from "../vendor/175554";
import { Z_OK, Z_FINISH, Z_NO_FLUSH, Z_NEED_DICT, Z_BUF_ERROR, Z_STREAM_END, Z_SYNC_FLUSH } from "../vendor/802011";
import { n as _$$n } from "../vendor/406216";
import d from "../vendor/570352";
import p from "../vendor/984856";
var g = Object.prototype.toString;
function m(e) {
  if (!(this instanceof m)) return new m(e);
  this.options = assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, e || {});
  var r = this.options;
  r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, 0 === r.windowBits && (r.windowBits = -15));
  r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits) && (r.windowBits += 32);
  r.windowBits > 15 && r.windowBits < 48 && (15 & r.windowBits) == 0 && (r.windowBits |= 15);
  this.err = 0;
  this.msg = "";
  this.ended = !1;
  this.chunks = [];
  this.strm = new d();
  this.strm.avail_out = 0;
  var n = inflateInit2(this.strm, r.windowBits);
  if (n !== Z_OK || (this.header = new p(), inflateGetHeader(this.strm, this.header), r.dictionary && ("string" == typeof r.dictionary ? r.dictionary = string2buf(r.dictionary) : "[object ArrayBuffer]" === g.call(r.dictionary) && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (n = inflateSetDictionary(this.strm, r.dictionary)) !== Z_OK))) throw Error(_$$n);
}
function v(e, r) {
  var n = new m(r);
  if (n.push(e, !0), n.err) throw n.msg || h[n.err];
  return n.result;
}
function y(e, r) {
  (r = r || {}).raw = !0;
  return v(e, r);
}
m.prototype.push = function (e, r) {
  var n;
  var h;
  var d;
  var p;
  var m;
  var v = this.strm;
  var y = this.options.chunkSize;
  var b = this.options.dictionary;
  var O = !1;
  if (this.ended) return !1;
  h = r === ~~r ? r : !0 === r ? Z_FINISH : Z_NO_FLUSH;
  "string" == typeof e ? v.input = binstring2buf(e) : "[object ArrayBuffer]" === g.call(e) ? v.input = new Uint8Array(e) : v.input = e;
  v.next_in = 0;
  v.avail_in = v.input.length;
  do {
    if (0 === v.avail_out && (v.output = new Buf8(y), v.next_out = 0, v.avail_out = y), (n = inflate(v, Z_NO_FLUSH)) === Z_NEED_DICT && b && (n = inflateSetDictionary(this.strm, b)), n === Z_BUF_ERROR && !0 === O && (n = Z_OK, O = !1), n !== Z_STREAM_END && n !== Z_OK) {
      this.onEnd(n);
      this.ended = !0;
      return !1;
    }
    v.next_out && (0 === v.avail_out || n === Z_STREAM_END || 0 === v.avail_in && (h === Z_FINISH || h === Z_SYNC_FLUSH)) && ("string" === this.options.to ? (d = utf8border(v.output, v.next_out), p = v.next_out - d, m = buf2string(v.output, d), v.next_out = p, v.avail_out = y - p, p && arraySet(v.output, v.output, d, p, 0), this.onData(m)) : this.onData(shrinkBuf(v.output, v.next_out)));
    0 === v.avail_in && 0 === v.avail_out && (O = !0);
  } while ((v.avail_in > 0 || 0 === v.avail_out) && n !== Z_STREAM_END);
  return (n === Z_STREAM_END && (h = Z_FINISH), h === Z_FINISH) ? (n = inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Z_OK) : (h === Z_SYNC_FLUSH && (this.onEnd(Z_OK), v.avail_out = 0), !0);
};
m.prototype.onData = function (e) {
  this.chunks.push(e);
};
m.prototype.onEnd = function (e) {
  e === Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = flattenChunks(this.chunks));
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
exports.Inflate = m;
exports.inflate = v;
exports.inflateRaw = y;
exports.ungzip = v;