import { Buf16, Buf32, Buf8, arraySet } from "../vendor/997643";
import a from "../vendor/566739";
import h from "../vendor/939973";
import d from "../vendor/38295";
import p from "../vendor/339060";
var i;
var s;
var g = 0;
var m = 1;
var v = 2;
var y = 4;
var b = 5;
var O = 6;
var x = 0;
var w = 1;
var k = 2;
var _ = -2;
var S = -3;
var E = -4;
var A = -5;
var C = 8;
var T = 1;
var I = 2;
var P = 3;
var R = 4;
var M = 5;
var D = 6;
var N = 7;
var $ = 8;
var L = 9;
var j = 10;
var z = 11;
var Z = 12;
var F = 13;
var U = 14;
var Q = 15;
var V = 16;
var B = 17;
var q = 18;
var W = 19;
var Y = 20;
var G = 21;
var X = 22;
var H = 23;
var K = 24;
var J = 25;
var ee = 26;
var et = 27;
var er = 28;
var en = 29;
var ei = 30;
var es = 31;
var eo = 852;
var ea = 592;
var el = 15;
function eu(e) {
  return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}
function ec() {
  this.mode = 0;
  this.last = !1;
  this.wrap = 0;
  this.havedict = !1;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Buf16(320);
  this.work = new Buf16(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function eh(e) {
  var r;
  return e && e.state ? (r = e.state, e.total_in = e.total_out = r.total = 0, e.msg = "", r.wrap && (e.adler = 1 & r.wrap), r.mode = T, r.last = 0, r.havedict = 0, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new Buf32(eo), r.distcode = r.distdyn = new Buf32(ea), r.sane = 1, r.back = -1, x) : _;
}
function ed(e) {
  var r;
  return e && e.state ? ((r = e.state).wsize = 0, r.whave = 0, r.wnext = 0, eh(e)) : _;
}
function ef(e, r) {
  var n;
  var i;
  return e && e.state ? (i = e.state, r < 0 ? (n = 0, r = -r) : (n = (r >> 4) + 1, r < 48 && (r &= 15)), r && (r < 8 || r > 15)) ? _ : (null !== i.window && i.wbits !== r && (i.window = null), i.wrap = n, i.wbits = r, ed(e)) : _;
}
function ep(e, r) {
  var n;
  var i;
  return e ? (i = new ec(), e.state = i, i.window = null, (n = ef(e, r)) !== x && (e.state = null), n) : _;
}
function eg(e) {
  return ep(e, el);
}
var em = !0;
function ev(e) {
  if (em) {
    var r;
    for (i = new Buf32(512), s = new Buf32(32), r = 0; r < 144;) e.lens[r++] = 8;
    for (; r < 256;) e.lens[r++] = 9;
    for (; r < 280;) e.lens[r++] = 7;
    for (; r < 288;) e.lens[r++] = 8;
    for (p(m, e.lens, 0, 288, i, 0, e.work, {
      bits: 9
    }), r = 0; r < 32;) e.lens[r++] = 5;
    p(v, e.lens, 0, 32, s, 0, e.work, {
      bits: 5
    });
    em = !1;
  }
  e.lencode = i;
  e.lenbits = 9;
  e.distcode = s;
  e.distbits = 5;
}
function ey(e, r, n, i) {
  var s;
  var a = e.state;
  null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Buf8(a.wsize));
  i >= a.wsize ? (arraySet(a.window, r, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((s = a.wsize - a.wnext) > i && (s = i), arraySet(a.window, r, n - i, s, a.wnext), (i -= s) ? (arraySet(a.window, r, n - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s)));
  return 0;
}
function eb(e, r) {
  var n;
  var i;
  var s;
  var eo;
  var ea;
  var el;
  var ec;
  var eh;
  var ed;
  var ef;
  var ep;
  var eg;
  var em;
  var eb;
  var eO;
  var ex;
  var ew;
  var ek;
  var e_;
  var eS;
  var eE;
  var eA;
  var eC;
  var eT;
  var eI = 0;
  var eP = new Buf8(4);
  var eR = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return _;
  (n = e.state).mode === Z && (n.mode = F);
  ea = e.next_out;
  s = e.output;
  ec = e.avail_out;
  eo = e.next_in;
  i = e.input;
  el = e.avail_in;
  eh = n.hold;
  ed = n.bits;
  ef = el;
  ep = ec;
  eA = x;
  n: for (;;) switch (n.mode) {
    case T:
      if (0 === n.wrap) {
        n.mode = F;
        break;
      }
      for (; ed < 16;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if (2 & n.wrap && 35615 === eh) {
        n.check = 0;
        eP[0] = 255 & eh;
        eP[1] = eh >>> 8 & 255;
        n.check = h(n.check, eP, 2, 0);
        eh = 0;
        ed = 0;
        n.mode = I;
        break;
      }
      if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & eh) << 8) + (eh >> 8)) % 31) {
        e.msg = "incorrect header check";
        n.mode = ei;
        break;
      }
      if ((15 & eh) !== C) {
        e.msg = "unknown compression method";
        n.mode = ei;
        break;
      }
      if (eh >>>= 4, ed -= 4, eE = (15 & eh) + 8, 0 === n.wbits) n.wbits = eE;else if (eE > n.wbits) {
        e.msg = "invalid window size";
        n.mode = ei;
        break;
      }
      n.dmax = 1 << eE;
      e.adler = n.check = 1;
      n.mode = 512 & eh ? j : Z;
      eh = 0;
      ed = 0;
      break;
    case I:
      for (; ed < 16;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if (n.flags = eh, (255 & n.flags) !== C) {
        e.msg = "unknown compression method";
        n.mode = ei;
        break;
      }
      if (57344 & n.flags) {
        e.msg = "unknown header flags set";
        n.mode = ei;
        break;
      }
      n.head && (n.head.text = eh >> 8 & 1);
      512 & n.flags && (eP[0] = 255 & eh, eP[1] = eh >>> 8 & 255, n.check = h(n.check, eP, 2, 0));
      eh = 0;
      ed = 0;
      n.mode = P;
    case P:
      for (; ed < 32;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      n.head && (n.head.time = eh);
      512 & n.flags && (eP[0] = 255 & eh, eP[1] = eh >>> 8 & 255, eP[2] = eh >>> 16 & 255, eP[3] = eh >>> 24 & 255, n.check = h(n.check, eP, 4, 0));
      eh = 0;
      ed = 0;
      n.mode = R;
    case R:
      for (; ed < 16;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      n.head && (n.head.xflags = 255 & eh, n.head.os = eh >> 8);
      512 & n.flags && (eP[0] = 255 & eh, eP[1] = eh >>> 8 & 255, n.check = h(n.check, eP, 2, 0));
      eh = 0;
      ed = 0;
      n.mode = M;
    case M:
      if (1024 & n.flags) {
        for (; ed < 16;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        n.length = eh;
        n.head && (n.head.extra_len = eh);
        512 & n.flags && (eP[0] = 255 & eh, eP[1] = eh >>> 8 & 255, n.check = h(n.check, eP, 2, 0));
        eh = 0;
        ed = 0;
      } else n.head && (n.head.extra = null);
      n.mode = D;
    case D:
      if (1024 & n.flags && ((eg = n.length) > el && (eg = el), eg && (n.head && (eE = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), arraySet(n.head.extra, i, eo, eg, eE)), 512 & n.flags && (n.check = h(n.check, i, eg, eo)), el -= eg, eo += eg, n.length -= eg), n.length)) break n;
      n.length = 0;
      n.mode = N;
    case N:
      if (2048 & n.flags) {
        if (0 === el) break n;
        eg = 0;
        do {
          eE = i[eo + eg++];
          n.head && eE && n.length < 65536 && (n.head.name += String.fromCharCode(eE));
        } while (eE && eg < el);
        if (512 & n.flags && (n.check = h(n.check, i, eg, eo)), el -= eg, eo += eg, eE) break n;
      } else n.head && (n.head.name = null);
      n.length = 0;
      n.mode = $;
    case $:
      if (4096 & n.flags) {
        if (0 === el) break n;
        eg = 0;
        do {
          eE = i[eo + eg++];
          n.head && eE && n.length < 65536 && (n.head.comment += String.fromCharCode(eE));
        } while (eE && eg < el);
        if (512 & n.flags && (n.check = h(n.check, i, eg, eo)), el -= eg, eo += eg, eE) break n;
      } else n.head && (n.head.comment = null);
      n.mode = L;
    case L:
      if (512 & n.flags) {
        for (; ed < 16;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        if (eh !== (65535 & n.check)) {
          e.msg = "header crc mismatch";
          n.mode = ei;
          break;
        }
        eh = 0;
        ed = 0;
      }
      n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0);
      e.adler = n.check = 0;
      n.mode = Z;
      break;
    case j:
      for (; ed < 32;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      e.adler = n.check = eu(eh);
      eh = 0;
      ed = 0;
      n.mode = z;
    case z:
      if (0 === n.havedict) {
        e.next_out = ea;
        e.avail_out = ec;
        e.next_in = eo;
        e.avail_in = el;
        n.hold = eh;
        n.bits = ed;
        return k;
      }
      e.adler = n.check = 1;
      n.mode = Z;
    case Z:
      if (r === b || r === O) break n;
    case F:
      if (n.last) {
        eh >>>= 7 & ed;
        ed -= 7 & ed;
        n.mode = et;
        break;
      }
      for (; ed < 3;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      switch (n.last = 1 & eh, ed -= 1, 3 & (eh >>>= 1)) {
        case 0:
          n.mode = U;
          break;
        case 1:
          if (ev(n), n.mode = Y, r === O) {
            eh >>>= 2;
            ed -= 2;
            break n;
          }
          break;
        case 2:
          n.mode = B;
          break;
        case 3:
          e.msg = "invalid block type";
          n.mode = ei;
      }
      eh >>>= 2;
      ed -= 2;
      break;
    case U:
      for (eh >>>= 7 & ed, ed -= 7 & ed; ed < 32;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if ((65535 & eh) != (eh >>> 16 ^ 65535)) {
        e.msg = "invalid stored block lengths";
        n.mode = ei;
        break;
      }
      if (n.length = 65535 & eh, eh = 0, ed = 0, n.mode = Q, r === O) break n;
    case Q:
      n.mode = V;
    case V:
      if (eg = n.length) {
        if (eg > el && (eg = el), eg > ec && (eg = ec), 0 === eg) break n;
        arraySet(s, i, eo, eg, ea);
        el -= eg;
        eo += eg;
        ec -= eg;
        ea += eg;
        n.length -= eg;
        break;
      }
      n.mode = Z;
      break;
    case B:
      for (; ed < 14;) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if (n.nlen = (31 & eh) + 257, eh >>>= 5, ed -= 5, n.ndist = (31 & eh) + 1, eh >>>= 5, ed -= 5, n.ncode = (15 & eh) + 4, eh >>>= 4, ed -= 4, n.nlen > 286 || n.ndist > 30) {
        e.msg = "too many length or distance symbols";
        n.mode = ei;
        break;
      }
      n.have = 0;
      n.mode = q;
    case q:
      for (; n.have < n.ncode;) {
        for (; ed < 3;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        n.lens[eR[n.have++]] = 7 & eh;
        eh >>>= 3;
        ed -= 3;
      }
      for (; n.have < 19;) n.lens[eR[n.have++]] = 0;
      if (n.lencode = n.lendyn, n.lenbits = 7, eC = {
        bits: n.lenbits
      }, eA = p(g, n.lens, 0, 19, n.lencode, 0, n.work, eC), n.lenbits = eC.bits, eA) {
        e.msg = "invalid code lengths set";
        n.mode = ei;
        break;
      }
      n.have = 0;
      n.mode = W;
    case W:
      for (; n.have < n.nlen + n.ndist;) {
        for (; eO = (eI = n.lencode[eh & (1 << n.lenbits) - 1]) >>> 24, ex = eI >>> 16 & 255, ew = 65535 & eI, !(eO <= ed);) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        if (ew < 16) {
          eh >>>= eO;
          ed -= eO;
          n.lens[n.have++] = ew;
        } else {
          if (16 === ew) {
            for (eT = eO + 2; ed < eT;) {
              if (0 === el) break n;
              el--;
              eh += i[eo++] << ed;
              ed += 8;
            }
            if (eh >>>= eO, ed -= eO, 0 === n.have) {
              e.msg = "invalid bit length repeat";
              n.mode = ei;
              break;
            }
            eE = n.lens[n.have - 1];
            eg = 3 + (3 & eh);
            eh >>>= 2;
            ed -= 2;
          } else if (17 === ew) {
            for (eT = eO + 3; ed < eT;) {
              if (0 === el) break n;
              el--;
              eh += i[eo++] << ed;
              ed += 8;
            }
            eh >>>= eO;
            ed -= eO;
            eE = 0;
            eg = 3 + (7 & eh);
            eh >>>= 3;
            ed -= 3;
          } else {
            for (eT = eO + 7; ed < eT;) {
              if (0 === el) break n;
              el--;
              eh += i[eo++] << ed;
              ed += 8;
            }
            eh >>>= eO;
            ed -= eO;
            eE = 0;
            eg = 11 + (127 & eh);
            eh >>>= 7;
            ed -= 7;
          }
          if (n.have + eg > n.nlen + n.ndist) {
            e.msg = "invalid bit length repeat";
            n.mode = ei;
            break;
          }
          for (; eg--;) n.lens[n.have++] = eE;
        }
      }
      if (n.mode === ei) break;
      if (0 === n.lens[256]) {
        e.msg = "invalid code -- missing end-of-block";
        n.mode = ei;
        break;
      }
      if (n.lenbits = 9, eC = {
        bits: n.lenbits
      }, eA = p(m, n.lens, 0, n.nlen, n.lencode, 0, n.work, eC), n.lenbits = eC.bits, eA) {
        e.msg = "invalid literal/lengths set";
        n.mode = ei;
        break;
      }
      if (n.distbits = 6, n.distcode = n.distdyn, eC = {
        bits: n.distbits
      }, eA = p(v, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, eC), n.distbits = eC.bits, eA) {
        e.msg = "invalid distances set";
        n.mode = ei;
        break;
      }
      if (n.mode = Y, r === O) break n;
    case Y:
      n.mode = G;
    case G:
      if (el >= 6 && ec >= 258) {
        e.next_out = ea;
        e.avail_out = ec;
        e.next_in = eo;
        e.avail_in = el;
        n.hold = eh;
        n.bits = ed;
        d(e, ep);
        ea = e.next_out;
        s = e.output;
        ec = e.avail_out;
        eo = e.next_in;
        i = e.input;
        el = e.avail_in;
        eh = n.hold;
        ed = n.bits;
        n.mode === Z && (n.back = -1);
        break;
      }
      for (n.back = 0; eO = (eI = n.lencode[eh & (1 << n.lenbits) - 1]) >>> 24, ex = eI >>> 16 & 255, ew = 65535 & eI, !(eO <= ed);) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if (ex && (240 & ex) == 0) {
        for (ek = eO, e_ = ex, eS = ew; eO = (eI = n.lencode[eS + ((eh & (1 << ek + e_) - 1) >> ek)]) >>> 24, ex = eI >>> 16 & 255, ew = 65535 & eI, !(ek + eO <= ed);) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        eh >>>= ek;
        ed -= ek;
        n.back += ek;
      }
      if (eh >>>= eO, ed -= eO, n.back += eO, n.length = ew, 0 === ex) {
        n.mode = ee;
        break;
      }
      if (32 & ex) {
        n.back = -1;
        n.mode = Z;
        break;
      }
      if (64 & ex) {
        e.msg = "invalid literal/length code";
        n.mode = ei;
        break;
      }
      n.extra = 15 & ex;
      n.mode = X;
    case X:
      if (n.extra) {
        for (eT = n.extra; ed < eT;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        n.length += eh & (1 << n.extra) - 1;
        eh >>>= n.extra;
        ed -= n.extra;
        n.back += n.extra;
      }
      n.was = n.length;
      n.mode = H;
    case H:
      for (; eO = (eI = n.distcode[eh & (1 << n.distbits) - 1]) >>> 24, ex = eI >>> 16 & 255, ew = 65535 & eI, !(eO <= ed);) {
        if (0 === el) break n;
        el--;
        eh += i[eo++] << ed;
        ed += 8;
      }
      if ((240 & ex) == 0) {
        for (ek = eO, e_ = ex, eS = ew; eO = (eI = n.distcode[eS + ((eh & (1 << ek + e_) - 1) >> ek)]) >>> 24, ex = eI >>> 16 & 255, ew = 65535 & eI, !(ek + eO <= ed);) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        eh >>>= ek;
        ed -= ek;
        n.back += ek;
      }
      if (eh >>>= eO, ed -= eO, n.back += eO, 64 & ex) {
        e.msg = "invalid distance code";
        n.mode = ei;
        break;
      }
      n.offset = ew;
      n.extra = 15 & ex;
      n.mode = K;
    case K:
      if (n.extra) {
        for (eT = n.extra; ed < eT;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        n.offset += eh & (1 << n.extra) - 1;
        eh >>>= n.extra;
        ed -= n.extra;
        n.back += n.extra;
      }
      if (n.offset > n.dmax) {
        e.msg = "invalid distance too far back";
        n.mode = ei;
        break;
      }
      n.mode = J;
    case J:
      if (0 === ec) break n;
      if (eg = ep - ec, n.offset > eg) {
        if ((eg = n.offset - eg) > n.whave && n.sane) {
          e.msg = "invalid distance too far back";
          n.mode = ei;
          break;
        }
        eg > n.wnext ? (eg -= n.wnext, em = n.wsize - eg) : em = n.wnext - eg;
        eg > n.length && (eg = n.length);
        eb = n.window;
      } else {
        eb = s;
        em = ea - n.offset;
        eg = n.length;
      }
      eg > ec && (eg = ec);
      ec -= eg;
      n.length -= eg;
      do s[ea++] = eb[em++]; while (--eg);
      0 === n.length && (n.mode = G);
      break;
    case ee:
      if (0 === ec) break n;
      s[ea++] = n.length;
      ec--;
      n.mode = G;
      break;
    case et:
      if (n.wrap) {
        for (; ed < 32;) {
          if (0 === el) break n;
          el--;
          eh |= i[eo++] << ed;
          ed += 8;
        }
        if (ep -= ec, e.total_out += ep, n.total += ep, ep && (e.adler = n.check = n.flags ? h(n.check, s, ep, ea - ep) : a(n.check, s, ep, ea - ep)), ep = ec, (n.flags ? eh : eu(eh)) !== n.check) {
          e.msg = "incorrect data check";
          n.mode = ei;
          break;
        }
        eh = 0;
        ed = 0;
      }
      n.mode = er;
    case er:
      if (n.wrap && n.flags) {
        for (; ed < 32;) {
          if (0 === el) break n;
          el--;
          eh += i[eo++] << ed;
          ed += 8;
        }
        if (eh !== (0xffffffff & n.total)) {
          e.msg = "incorrect length check";
          n.mode = ei;
          break;
        }
        eh = 0;
        ed = 0;
      }
      n.mode = en;
    case en:
      eA = w;
      break n;
    case ei:
      eA = S;
      break n;
    case es:
      return E;
    default:
      return _;
  }
  return (e.next_out = ea, e.avail_out = ec, e.next_in = eo, e.avail_in = el, n.hold = eh, n.bits = ed, (n.wsize || ep !== e.avail_out && n.mode < ei && (n.mode < et || r !== y)) && ey(e, e.output, e.next_out, ep - e.avail_out)) ? (n.mode = es, E) : (ef -= e.avail_in, ep -= e.avail_out, e.total_in += ef, e.total_out += ep, n.total += ep, n.wrap && ep && (e.adler = n.check = n.flags ? h(n.check, s, ep, e.next_out - ep) : a(n.check, s, ep, e.next_out - ep)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Z ? 128 : 0) + (n.mode === Y || n.mode === Q ? 256 : 0), (0 === ef && 0 === ep || r === y) && eA === x && (eA = A), eA);
}
function eO(e) {
  if (!e || !e.state) return _;
  var r = e.state;
  r.window && (r.window = null);
  e.state = null;
  return x;
}
function ex(e, r) {
  var n;
  return e && e.state && (2 & (n = e.state).wrap) != 0 ? (n.head = r, r.done = !1, x) : _;
}
function ew(e, r) {
  var n;
  var i;
  var s = r.length;
  return e && e.state && (0 === (n = e.state).wrap || n.mode === z) ? n.mode === z && (i = a(i = 1, r, s, 0)) !== n.check ? S : ey(e, r, s, s) ? (n.mode = es, E) : (n.havedict = 1, x) : _;
}
exports.inflateReset = ed;
exports.inflateReset2 = ef;
exports.inflateResetKeep = eh;
exports.inflateInit = eg;
exports.inflateInit2 = ep;
exports.inflate = eb;
exports.inflateEnd = eO;
exports.inflateGetHeader = ex;
exports.inflateSetDictionary = ew;
exports.inflateInfo = "pako inflate (from Nodeca project)";