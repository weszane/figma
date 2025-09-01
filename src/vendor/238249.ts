import { arraySet, Buf16, Buf8 } from "../vendor/997643";
import { _tr_flush_block, _tr_tally, _tr_init, _tr_align, _tr_stored_block } from "../vendor/310611";
import a from "../vendor/566739";
import h from "../vendor/939973";
import { r as _$$r } from "../vendor/406216";
var i;
var p = 0;
var g = 1;
var m = 3;
var v = 4;
var y = 5;
var b = 0;
var O = 1;
var x = -2;
var w = -3;
var k = -5;
var _ = -1;
var S = 1;
var E = 2;
var A = 3;
var C = 4;
var T = 0;
var I = 2;
var P = 8;
var R = 9;
var M = 15;
var D = 8;
var N = 286;
var $ = 30;
var L = 19;
var j = 573;
var z = 15;
var Z = 3;
var F = 258;
var U = 262;
var Q = 32;
var V = 42;
var B = 69;
var q = 73;
var W = 91;
var Y = 103;
var G = 113;
var X = 666;
var H = 1;
var K = 2;
var J = 3;
var ee = 4;
var et = 3;
function er(e, r) {
  e.msg = _$$r;
  return r;
}
function en(e) {
  return (e << 1) - (e > 4 ? 9 : 0);
}
function ei(e) {
  for (var r = e.length; --r >= 0;) e[r] = 0;
}
function es(e) {
  var r = e.state;
  var n = r.pending;
  n > e.avail_out && (n = e.avail_out);
  0 !== n && (arraySet(e.output, r.pending_buf, r.pending_out, n, e.next_out), e.next_out += n, r.pending_out += n, e.total_out += n, e.avail_out -= n, r.pending -= n, 0 === r.pending && (r.pending_out = 0));
}
function eo(e, r) {
  _tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r);
  e.block_start = e.strstart;
  es(e.strm);
}
function ea(e, r) {
  e.pending_buf[e.pending++] = r;
}
function el(e, r) {
  e.pending_buf[e.pending++] = r >>> 8 & 255;
  e.pending_buf[e.pending++] = 255 & r;
}
function eu(e, r, n, i) {
  var o = e.avail_in;
  return (o > i && (o = i), 0 === o) ? 0 : (e.avail_in -= o, arraySet(r, e.input, e.next_in, o, n), 1 === e.state.wrap ? e.adler = a(e.adler, r, o, n) : 2 === e.state.wrap && (e.adler = h(e.adler, r, o, n)), e.next_in += o, e.total_in += o, o);
}
function ec(e, r) {
  var n;
  var i;
  var s = e.max_chain_length;
  var o = e.strstart;
  var a = e.prev_length;
  var h = e.nice_match;
  var d = e.strstart > e.w_size - U ? e.strstart - (e.w_size - U) : 0;
  var p = e.window;
  var g = e.w_mask;
  var m = e.prev;
  var v = e.strstart + F;
  var y = p[o + a - 1];
  var b = p[o + a];
  e.prev_length >= e.good_match && (s >>= 2);
  h > e.lookahead && (h = e.lookahead);
  do {
    if (p[(n = r) + a] !== b || p[n + a - 1] !== y || p[n] !== p[o] || p[++n] !== p[o + 1]) continue;
    o += 2;
    n++;
    do ; while (p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && p[++o] === p[++n] && o < v);
    if (i = F - (v - o), o = v - F, i > a) {
      if (e.match_start = r, a = i, i >= h) break;
      y = p[o + a - 1];
      b = p[o + a];
    }
  } while ((r = m[r & g]) > d && 0 != --s);
  return a <= e.lookahead ? a : e.lookahead;
}
function eh(e) {
  var r;
  var n;
  var i;
  var o;
  var a;
  var h = e.w_size;
  do {
    if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= h + (h - U)) {
      arraySet(e.window, e.window, h, h, 0);
      e.match_start -= h;
      e.strstart -= h;
      e.block_start -= h;
      r = n = e.hash_size;
      do {
        i = e.head[--r];
        e.head[r] = i >= h ? i - h : 0;
      } while (--n);
      r = n = h;
      do {
        i = e.prev[--r];
        e.prev[r] = i >= h ? i - h : 0;
      } while (--n);
      o += h;
    }
    if (0 === e.strm.avail_in) break;
    if (n = eu(e.strm, e.window, e.strstart + e.lookahead, o), e.lookahead += n, e.lookahead + e.insert >= Z) for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + Z - 1]) & e.hash_mask, e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < Z)););
  } while (e.lookahead < U && 0 !== e.strm.avail_in);
}
function ed(e, r) {
  for (void 0;;) {
    var n;
    var i;
    if (e.lookahead < U) {
      if (eh(e), e.lookahead < U && r === p) return H;
      if (0 === e.lookahead) break;
    }
    if (n = 0, e.lookahead >= Z && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Z - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - U && (e.match_length = ec(e, n)), e.match_length >= Z) {
      if (i = _tr_tally(e, e.strstart - e.match_start, e.match_length - Z), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= Z) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Z - 1]) & e.hash_mask;
          n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (0 != --e.match_length);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
      }
    } else {
      i = _tr_tally(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (i && (eo(e, !1), 0 === e.strm.avail_out)) return H;
  }
  return (e.insert = e.strstart < Z - 1 ? e.strstart : Z - 1, r === v) ? (eo(e, !0), 0 === e.strm.avail_out) ? J : ee : e.last_lit && (eo(e, !1), 0 === e.strm.avail_out) ? H : K;
}
function ef(e, r) {
  for (void 0;;) {
    var n;
    var i;
    var s;
    if (e.lookahead < U) {
      if (eh(e), e.lookahead < U && r === p) return H;
      if (0 === e.lookahead) break;
    }
    if (n = 0, e.lookahead >= Z && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Z - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = Z - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - U && (e.match_length = ec(e, n), e.match_length <= 5 && (e.strategy === S || e.match_length === Z && e.strstart - e.match_start > 4096) && (e.match_length = Z - 1)), e.prev_length >= Z && e.match_length <= e.prev_length) {
      s = e.strstart + e.lookahead - Z;
      i = _tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - Z);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do ++e.strstart <= s && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Z - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (0 != --e.prev_length);
      if (e.match_available = 0, e.match_length = Z - 1, e.strstart++, i && (eo(e, !1), 0 === e.strm.avail_out)) return H;
    } else if (e.match_available) {
      if ((i = _tr_tally(e, 0, e.window[e.strstart - 1])) && eo(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return H;
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  return (e.match_available && (i = _tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < Z - 1 ? e.strstart : Z - 1, r === v) ? (eo(e, !0), 0 === e.strm.avail_out) ? J : ee : e.last_lit && (eo(e, !1), 0 === e.strm.avail_out) ? H : K;
}
function ep(e, r) {
  for (h = e.window, void 0;;) {
    var n;
    var i;
    var s;
    var a;
    var h;
    if (e.lookahead <= F) {
      if (eh(e), e.lookahead <= F && r === p) return H;
      if (0 === e.lookahead) break;
    }
    if (e.match_length = 0, e.lookahead >= Z && e.strstart > 0 && (i = h[s = e.strstart - 1]) === h[++s] && i === h[++s] && i === h[++s]) {
      a = e.strstart + F;
      do ; while (i === h[++s] && i === h[++s] && i === h[++s] && i === h[++s] && i === h[++s] && i === h[++s] && i === h[++s] && i === h[++s] && s < a);
      e.match_length = F - (a - s);
      e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= Z ? (n = _tr_tally(e, 1, e.match_length - Z), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = _tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (eo(e, !1), 0 === e.strm.avail_out)) return H;
  }
  return (e.insert = 0, r === v) ? (eo(e, !0), 0 === e.strm.avail_out) ? J : ee : e.last_lit && (eo(e, !1), 0 === e.strm.avail_out) ? H : K;
}
function eg(e, r) {
  for (var n;;) {
    if (0 === e.lookahead && (eh(e), 0 === e.lookahead)) {
      if (r === p) return H;
      break;
    }
    if (e.match_length = 0, n = _tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (eo(e, !1), 0 === e.strm.avail_out)) return H;
  }
  return (e.insert = 0, r === v) ? (eo(e, !0), 0 === e.strm.avail_out) ? J : ee : e.last_lit && (eo(e, !1), 0 === e.strm.avail_out) ? H : K;
}
function em(e, r, n, i, s) {
  this.good_length = e;
  this.max_lazy = r;
  this.nice_length = n;
  this.max_chain = i;
  this.func = s;
}
function ev(e) {
  e.window_size = 2 * e.w_size;
  ei(e.head);
  e.max_lazy_match = i[e.level].max_lazy;
  e.good_match = i[e.level].good_length;
  e.nice_match = i[e.level].nice_length;
  e.max_chain_length = i[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = Z - 1;
  e.match_available = 0;
  e.ins_h = 0;
}
function ey() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = P;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Buf16(2 * j);
  this.dyn_dtree = new Buf16((2 * $ + 1) * 2);
  this.bl_tree = new Buf16((2 * L + 1) * 2);
  ei(this.dyn_ltree);
  ei(this.dyn_dtree);
  ei(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Buf16(z + 1);
  this.heap = new Buf16(2 * N + 1);
  ei(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Buf16(2 * N + 1);
  ei(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function eb(e) {
  var r;
  return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = I, (r = e.state).pending = 0, r.pending_out = 0, r.wrap < 0 && (r.wrap = -r.wrap), r.status = r.wrap ? V : G, e.adler = 2 === r.wrap ? 0 : 1, r.last_flush = p, _tr_init(r), b) : er(e, x);
}
function eO(e) {
  var r = eb(e);
  r === b && ev(e.state);
  return r;
}
function ex(e, r) {
  return e && e.state && 2 === e.state.wrap ? (e.state.gzhead = r, b) : x;
}
function ew(e, r, n, i, o, a) {
  if (!e) return x;
  var h = 1;
  if (r === _ && (r = 6), i < 0 ? (h = 0, i = -i) : i > 15 && (h = 2, i -= 16), o < 1 || o > R || n !== P || i < 8 || i > 15 || r < 0 || r > 9 || a < 0 || a > C) return er(e, x);
  8 === i && (i = 9);
  var d = new ey();
  e.state = d;
  d.strm = e;
  d.wrap = h;
  d.gzhead = null;
  d.w_bits = i;
  d.w_size = 1 << d.w_bits;
  d.w_mask = d.w_size - 1;
  d.hash_bits = o + 7;
  d.hash_size = 1 << d.hash_bits;
  d.hash_mask = d.hash_size - 1;
  d.hash_shift = ~~((d.hash_bits + Z - 1) / Z);
  d.window = new Buf8(2 * d.w_size);
  d.head = new Buf16(d.hash_size);
  d.prev = new Buf16(d.w_size);
  d.lit_bufsize = 1 << o + 6;
  d.pending_buf_size = 4 * d.lit_bufsize;
  d.pending_buf = new Buf8(d.pending_buf_size);
  d.d_buf = 1 * d.lit_bufsize;
  d.l_buf = 3 * d.lit_bufsize;
  d.level = r;
  d.strategy = a;
  d.method = n;
  return eO(e);
}
function ek(e, r) {
  return ew(e, r, P, M, D, T);
}
function e_(e, r) {
  if (!e || !e.state || r > y || r < 0) return e ? er(e, x) : x;
  if (s = e.state, !e.output || !e.input && 0 !== e.avail_in || s.status === X && r !== v) return er(e, 0 === e.avail_out ? k : x);
  if (s.strm = e, n = s.last_flush, s.last_flush = r, s.status === V) {
    if (2 === s.wrap) {
      e.adler = 0;
      ea(s, 31);
      ea(s, 139);
      ea(s, 8);
      s.gzhead ? (ea(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), ea(s, 255 & s.gzhead.time), ea(s, s.gzhead.time >> 8 & 255), ea(s, s.gzhead.time >> 16 & 255), ea(s, s.gzhead.time >> 24 & 255), ea(s, 9 === s.level ? 2 : s.strategy >= E || s.level < 2 ? 4 : 0), ea(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (ea(s, 255 & s.gzhead.extra.length), ea(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (e.adler = h(e.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = B) : (ea(s, 0), ea(s, 0), ea(s, 0), ea(s, 0), ea(s, 0), ea(s, 9 === s.level ? 2 : s.strategy >= E || s.level < 2 ? 4 : 0), ea(s, et), s.status = G);
    } else {
      var n;
      var s;
      var a;
      var d;
      var w = P + (s.w_bits - 8 << 4) << 8;
      var _ = -1;
      w |= (_ = s.strategy >= E || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3) << 6;
      0 !== s.strstart && (w |= Q);
      w += 31 - w % 31;
      s.status = G;
      el(s, w);
      0 !== s.strstart && (el(s, e.adler >>> 16), el(s, 65535 & e.adler));
      e.adler = 1;
    }
  }
  if (s.status === B) {
    if (s.gzhead.extra) {
      for (a = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a)), es(e), a = s.pending, s.pending !== s.pending_buf_size));) {
        ea(s, 255 & s.gzhead.extra[s.gzindex]);
        s.gzindex++;
      }
      s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a));
      s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = q);
    } else s.status = q;
  }
  if (s.status === q) {
    if (s.gzhead.name) {
      a = s.pending;
      do {
        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a)), es(e), a = s.pending, s.pending === s.pending_buf_size)) {
          d = 1;
          break;
        }
        d = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0;
        ea(s, d);
      } while (0 !== d);
      s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a));
      0 === d && (s.gzindex = 0, s.status = W);
    } else s.status = W;
  }
  if (s.status === W) {
    if (s.gzhead.comment) {
      a = s.pending;
      do {
        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a)), es(e), a = s.pending, s.pending === s.pending_buf_size)) {
          d = 1;
          break;
        }
        d = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0;
        ea(s, d);
      } while (0 !== d);
      s.gzhead.hcrc && s.pending > a && (e.adler = h(e.adler, s.pending_buf, s.pending - a, a));
      0 === d && (s.status = Y);
    } else s.status = Y;
  }
  if (s.status === Y && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && es(e), s.pending + 2 <= s.pending_buf_size && (ea(s, 255 & e.adler), ea(s, e.adler >> 8 & 255), e.adler = 0, s.status = G)) : s.status = G), 0 !== s.pending) {
    if (es(e), 0 === e.avail_out) {
      s.last_flush = -1;
      return b;
    }
  } else if (0 === e.avail_in && en(r) <= en(n) && r !== v) return er(e, k);
  if (s.status === X && 0 !== e.avail_in) return er(e, k);
  if (0 !== e.avail_in || 0 !== s.lookahead || r !== p && s.status !== X) {
    var S = s.strategy === E ? eg(s, r) : s.strategy === A ? ep(s, r) : i[s.level].func(s, r);
    if ((S === J || S === ee) && (s.status = X), S === H || S === J) {
      0 === e.avail_out && (s.last_flush = -1);
      return b;
    }
    if (S === K && (r === g ? _tr_align(s) : r !== y && (_tr_stored_block(s, 0, 0, !1), r === m && (ei(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), es(e), 0 === e.avail_out)) {
      s.last_flush = -1;
      return b;
    }
  }
  return r !== v ? b : s.wrap <= 0 ? O : (2 === s.wrap ? (ea(s, 255 & e.adler), ea(s, e.adler >> 8 & 255), ea(s, e.adler >> 16 & 255), ea(s, e.adler >> 24 & 255), ea(s, 255 & e.total_in), ea(s, e.total_in >> 8 & 255), ea(s, e.total_in >> 16 & 255), ea(s, e.total_in >> 24 & 255)) : (el(s, e.adler >>> 16), el(s, 65535 & e.adler)), es(e), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? b : O);
}
function eS(e) {
  var r;
  return e && e.state ? (r = e.state.status) !== V && r !== B && r !== q && r !== W && r !== Y && r !== G && r !== X ? er(e, x) : (e.state = null, r === G ? er(e, w) : b) : x;
}
function eE(e, r) {
  var n;
  var i;
  var o;
  var h;
  var d;
  var p;
  var g;
  var m;
  var v = r.length;
  if (!e || !e.state || 2 === (h = (n = e.state).wrap) || 1 === h && n.status !== V || n.lookahead) return x;
  for (1 === h && (e.adler = a(e.adler, r, v, 0)), n.wrap = 0, v >= n.w_size && (0 === h && (ei(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), m = new Buf8(n.w_size), arraySet(m, r, v - n.w_size, n.w_size, 0), r = m, v = n.w_size), d = e.avail_in, p = e.next_in, g = e.input, e.avail_in = v, e.next_in = 0, e.input = r, eh(n); n.lookahead >= Z;) {
    i = n.strstart;
    o = n.lookahead - (Z - 1);
    do {
      n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + Z - 1]) & n.hash_mask;
      n.prev[i & n.w_mask] = n.head[n.ins_h];
      n.head[n.ins_h] = i;
      i++;
    } while (--o);
    n.strstart = i;
    n.lookahead = Z - 1;
    eh(n);
  }
  n.strstart += n.lookahead;
  n.block_start = n.strstart;
  n.insert = n.lookahead;
  n.lookahead = 0;
  n.match_length = n.prev_length = Z - 1;
  n.match_available = 0;
  e.next_in = p;
  e.input = g;
  e.avail_in = d;
  n.wrap = h;
  return b;
}
i = [new em(0, 0, 0, 0, function (e, r) {
  var n = 65535;
  for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
    if (e.lookahead <= 1) {
      if (eh(e), 0 === e.lookahead && r === p) return H;
      if (0 === e.lookahead) break;
    }
    e.strstart += e.lookahead;
    e.lookahead = 0;
    var i = e.block_start + n;
    if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, eo(e, !1), 0 === e.strm.avail_out) || e.strstart - e.block_start >= e.w_size - U && (eo(e, !1), 0 === e.strm.avail_out)) return H;
  }
  return (e.insert = 0, r === v) ? (eo(e, !0), 0 === e.strm.avail_out) ? J : ee : (e.strstart > e.block_start && (eo(e, !1), e.strm.avail_out), H);
}), new em(4, 4, 8, 4, ed), new em(4, 5, 16, 8, ed), new em(4, 6, 32, 32, ed), new em(4, 4, 16, 16, ef), new em(8, 16, 32, 32, ef), new em(8, 16, 128, 128, ef), new em(8, 32, 128, 256, ef), new em(32, 128, 258, 1024, ef), new em(32, 258, 258, 4096, ef)];
exports.deflateInit = ek;
exports.deflateInit2 = ew;
exports.deflateReset = eO;
exports.deflateResetKeep = eb;
exports.deflateSetHeader = ex;
exports.deflate = e_;
exports.deflateEnd = eS;
exports.deflateSetDictionary = eE;
exports.deflateInfo = "pako deflate (from Nodeca project)";