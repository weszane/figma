import i, { Qj, PH, uY, iX, fI, Z6, cF } from "../vendor/579039";
class s {
  constructor(e, r, n, i, s, o, a, h, d, p = 0, g) {
    this.p = e;
    this.stack = r;
    this.state = n;
    this.reducePos = i;
    this.pos = s;
    this.score = o;
    this.buffer = a;
    this.bufferBase = h;
    this.curContext = d;
    this.lookAhead = p;
    this.parent = g;
  }
  toString() {
    return `[${this.stack.filter((e, r) => r % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(e, r, n = 0) {
    let i = e.parser.context;
    return new s(e, [], r, n, n, 0, [], 0, i ? new o(i, i.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, r) {
    this.stack.push(this.state, r, this.bufferBase + this.buffer.length);
    this.state = e;
  }
  reduce(e) {
    var r;
    let n = e >> 19;
    let i = 65535 & e;
    let {
      parser
    } = this.p;
    let o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let a = parser.dynamicPrecedence(i);
    if (a && (this.score += a), 0 == n) {
      this.pushState(parser.getGoto(this.state, i, !0), this.reducePos);
      i < parser.minRepeatTerm && this.storeNode(i, this.reducePos, this.reducePos, o ? 8 : 4, !0);
      this.reduceContext(i, this.reducePos);
      return;
    }
    let h = this.stack.length - (n - 1) * 3 - (262144 & e ? 6 : 0);
    let d = h ? this.stack[h - 2] : this.p.ranges[0].from;
    let p = this.reducePos - d;
    p >= 2e3 && !this.p.parser.nodeSet.types[i]?.isAnonymous && (d == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = p) : this.p.lastBigReductionSize < p && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = d, this.p.lastBigReductionSize = p));
    let g = h ? this.stack[h - 1] : 0;
    let m = this.bufferBase + this.buffer.length - g;
    if (i < parser.minRepeatTerm || 131072 & e) {
      let e = parser.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(i, d, e, m + 4, !0);
    }
    if (262144 & e) this.state = this.stack[h];else {
      let e = this.stack[h - 3];
      this.state = parser.getGoto(e, i, !0);
    }
    for (; this.stack.length > h;) this.stack.pop();
    this.reduceContext(i, d);
  }
  storeNode(e, r, n, i = 4, s = !1) {
    if (0 == e && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let e = this;
      let i = this.buffer.length;
      if (0 == i && e.parent && (i = e.bufferBase - e.parent.bufferBase, e = e.parent), i > 0 && 0 == e.buffer[i - 4] && e.buffer[i - 1] > -1) {
        if (r == n) return;
        if (e.buffer[i - 2] >= r) {
          e.buffer[i - 2] = n;
          return;
        }
      }
    }
    if (s && this.pos != n) {
      let s = this.buffer.length;
      if (s > 0 && 0 != this.buffer[s - 4]) {
        let e = !1;
        for (let r = s; r > 0 && this.buffer[r - 2] > n; r -= 4) if (this.buffer[r - 1] >= 0) {
          e = !0;
          break;
        }
        if (e) for (; s > 0 && this.buffer[s - 2] > n;) {
          this.buffer[s] = this.buffer[s - 4];
          this.buffer[s + 1] = this.buffer[s - 3];
          this.buffer[s + 2] = this.buffer[s - 2];
          this.buffer[s + 3] = this.buffer[s - 1];
          s -= 4;
          i > 4 && (i -= 4);
        }
      }
      this.buffer[s] = e;
      this.buffer[s + 1] = r;
      this.buffer[s + 2] = n;
      this.buffer[s + 3] = i;
    } else this.buffer.push(e, r, n, i);
  }
  shift(e, r, n, i) {
    if (131072 & e) this.pushState(65535 & e, this.pos);else if ((262144 & e) == 0) {
      let s = e;
      let {
        parser
      } = this.p;
      (i > this.pos || r <= parser.maxNode) && (this.pos = i, parser.stateFlag(s, 1) || (this.reducePos = i));
      this.pushState(s, n);
      this.shiftContext(r, n);
      r <= parser.maxNode && this.buffer.push(r, n, i, 4);
    } else {
      this.pos = i;
      this.shiftContext(r, n);
      r <= this.p.parser.maxNode && this.buffer.push(r, n, i, 4);
    }
  }
  apply(e, r, n, i) {
    65536 & e ? this.reduce(e) : this.shift(e, r, n, i);
  }
  useNode(e, r) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let i = this.pos;
    this.reducePos = this.pos = i + e.length;
    this.pushState(r, i);
    this.buffer.push(n, i, this.reducePos, -1);
    this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  split() {
    let e = this;
    let r = e.buffer.length;
    for (; r > 0 && e.buffer[r - 2] > e.reducePos;) r -= 4;
    let n = e.buffer.slice(r);
    let i = e.bufferBase + r;
    for (; e && i == e.bufferBase;) e = e.parent;
    return new s(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, i, this.curContext, this.lookAhead, e);
  }
  recoverByDelete(e, r) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, r, 4);
    this.storeNode(0, this.pos, r, n ? 8 : 4);
    this.pos = this.reducePos = r;
    this.score -= 190;
  }
  canShift(e) {
    for (let r = new a(this);;) {
      let n = this.p.parser.stateSlot(r.state, 4) || this.p.parser.hasAction(r.state, e);
      if (0 == n) return !1;
      if ((65536 & n) == 0) return !0;
      r.reduce(n);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return [];
    let r = this.p.parser.nextStates(this.state);
    if (r.length > 8 || this.stack.length >= 120) {
      let n = [];
      for (function () {
        let i = 0;
        let s;
      }(); i < r.length; i += 2) (s = r[i + 1]) != this.state && this.p.parser.hasAction(s, e) && n.push(r[i], s);
      if (this.stack.length < 120) for (let e = 0; n.length < 8 && e < r.length; e += 2) {
        let i = r[e + 1];
        n.some((e, r) => 1 & r && e == i) || n.push(r[e], i);
      }
      r = n;
    }
    let n = [];
    for (let e = 0; e < r.length && n.length < 4; e += 2) {
      let i = r[e + 1];
      if (i == this.state) continue;
      let s = this.split();
      s.pushState(i, this.pos);
      s.storeNode(0, s.pos, s.pos, 4, !0);
      s.shiftContext(r[e], this.pos);
      s.reducePos = this.pos;
      s.score -= 200;
      n.push(s);
    }
    return n;
  }
  forceReduce() {
    let {
      parser
    } = this.p;
    let r = parser.stateSlot(this.state, 5);
    if ((65536 & r) == 0) return !1;
    if (!parser.validAction(this.state, r)) {
      let n = r >> 19;
      let i = 65535 & r;
      let s = this.stack.length - 3 * n;
      if (s < 0 || 0 > parser.getGoto(this.stack[s], i, !1)) {
        let e = this.findForcedReduction();
        if (null == e) return !1;
        r = e;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0);
      this.score -= 100;
    }
    this.reducePos = this.pos;
    this.reduce(r);
    return !0;
  }
  findForcedReduction() {
    let {
      parser
    } = this.p;
    let r = [];
    let n = (i, s) => {
      if (!r.includes(i)) {
        r.push(i);
        return parser.allActions(i, r => {
          if (393216 & r) ;else if (65536 & r) {
            let n = (r >> 19) - s;
            if (n > 1) {
              let i = 65535 & r;
              let s = this.stack.length - 3 * n;
              if (s >= 0 && parser.getGoto(this.stack[s], i, !1) >= 0) return n << 19 | 65536 | i;
            }
          } else {
            let e = n(r, s + 1);
            if (null != e) return e;
          }
        });
      }
    };
    return n(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2);) if (!this.forceReduce()) {
      this.storeNode(0, this.pos, this.pos, 4, !0);
      break;
    }
    return this;
  }
  get deadEnd() {
    if (3 != this.stack.length) return !1;
    let {
      parser
    } = this.p;
    return 65535 == parser.data[parser.stateSlot(this.state, 1)] && !parser.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0);
    this.state = this.stack[0];
    this.stack.length = 0;
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
    for (let r = 0; r < this.stack.length; r += 3) if (this.stack[r] != e.stack[r]) return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, r) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(r)));
  }
  reduceContext(e, r) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(r)));
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || -3 != this.buffer[e]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || -4 != this.buffer[e]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let r = new o(this.curContext.tracker, e);
      r.hash != this.curContext.hash && this.emitContext();
      this.curContext = r;
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext();
    this.lookAhead > 0 && this.emitLookAhead();
  }
}
class o {
  constructor(e, r) {
    this.tracker = e;
    this.context = r;
    this.hash = e.strict ? e.hash(r) : 0;
  }
}
class a {
  constructor(e) {
    this.start = e;
    this.state = e.state;
    this.stack = e.stack;
    this.base = this.stack.length;
  }
  reduce(e) {
    let r = 65535 & e;
    let n = e >> 19;
    0 == n ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let i = this.start.p.parser.getGoto(this.stack[this.base - 3], r, !0);
    this.state = i;
  }
}
class h {
  constructor(e, r, n) {
    this.stack = e;
    this.pos = r;
    this.index = n;
    this.buffer = e.buffer;
    0 == this.index && this.maybeNext();
  }
  static create(e, r = e.bufferBase + e.buffer.length) {
    return new h(e, r, r - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    null != e && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4;
    this.pos -= 4;
    0 == this.index && this.maybeNext();
  }
  fork() {
    return new h(this.stack, this.pos, this.index);
  }
}
function d(e, r = Uint16Array) {
  if ("string" != typeof e) return e;
  let n = null;
  for (function () {
    let i = 0;
    let s = 0;
  }(); i < e.length;) {
    let o = 0;
    for (;;) {
      let r = e.charCodeAt(i++);
      let n = !1;
      if (126 == r) {
        o = 65535;
        break;
      }
      r >= 92 && r--;
      r >= 34 && r--;
      let s = r - 32;
      if (s >= 46 && (s -= 46, n = !0), o += s, n) break;
      o *= 46;
    }
    n ? n[s++] = o : n = new r(o);
  }
  return n;
}
class p {
  constructor() {
    this.start = -1;
    this.value = -1;
    this.end = -1;
    this.extended = -1;
    this.lookAhead = 0;
    this.mask = 0;
    this.context = 0;
  }
}
let g = new p();
class m {
  constructor(e, r) {
    this.input = e;
    this.ranges = r;
    this.chunk = "";
    this.chunkOff = 0;
    this.chunk2 = "";
    this.chunk2Pos = 0;
    this.next = -1;
    this.token = g;
    this.rangeIndex = 0;
    this.pos = this.chunkPos = r[0].from;
    this.range = r[0];
    this.end = r[r.length - 1].to;
    this.readNext();
  }
  resolveOffset(e, r) {
    let n = this.range;
    let i = this.rangeIndex;
    let s = this.pos + e;
    for (; s < n.from;) {
      if (!i) return null;
      let e = this.ranges[--i];
      s -= n.from - e.to;
      n = e;
    }
    for (; r < 0 ? s > n.to : s >= n.to;) {
      if (i == this.ranges.length - 1) return null;
      let e = this.ranges[++i];
      s += e.from - n.to;
      n = e;
    }
    return s;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) return e;
    for (let r of this.ranges) if (r.to > e) return Math.max(e, r.from);
    return this.end;
  }
  peek(e) {
    let r = this.chunkOff + e;
    let n;
    let i;
    if (r >= 0 && r < this.chunk.length) {
      n = this.pos + e;
      i = this.chunk.charCodeAt(r);
    } else {
      let r = this.resolveOffset(e, 1);
      if (null == r) return -1;
      if ((n = r) >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length) i = this.chunk2.charCodeAt(n - this.chunk2Pos);else {
        let e = this.rangeIndex;
        let r = this.range;
        for (; r.to <= n;) r = this.ranges[++e];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n);
        n + this.chunk2.length > r.to && (this.chunk2 = this.chunk2.slice(0, r.to - n));
        i = this.chunk2.charCodeAt(0);
      }
    }
    n >= this.token.lookAhead && (this.token.lookAhead = n + 1);
    return i;
  }
  acceptToken(e, r = 0) {
    let n = r ? this.resolveOffset(r, -1) : this.pos;
    if (null == n || n < this.token.start) throw RangeError("Token end out of bounds");
    this.token.value = e;
    this.token.end = n;
  }
  acceptTokenTo(e, r) {
    this.token.value = e;
    this.token.end = r;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let {
        chunk,
        chunkPos
      } = this;
      this.chunk = this.chunk2;
      this.chunkPos = this.chunk2Pos;
      this.chunk2 = chunk;
      this.chunk2Pos = chunkPos;
      this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk;
      this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos);
      let r = this.pos + e.length;
      this.chunk = r > this.range.to ? e.slice(0, this.range.to - this.pos) : e;
      this.chunkPos = this.pos;
      this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to;) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      e -= this.range.to - this.pos;
      this.range = this.ranges[++this.rangeIndex];
      this.pos = this.range.from;
    }
    this.pos += e;
    this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1);
    return this.readNext();
  }
  setDone() {
    this.pos = this.chunkPos = this.end;
    this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
    this.chunk = "";
    return this.next = -1;
  }
  reset(e, r) {
    if (r ? (this.token = r, r.start = e, r.lookAhead = e + 1, r.value = r.extended = -1) : this.token = g, this.pos != e) {
      if (this.pos = e, e == this.end) {
        this.setDone();
        return this;
      }
      for (; e < this.range.from;) this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to;) this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0);
      this.readNext();
    }
    return this;
  }
  read(e, r) {
    if (e >= this.chunkPos && r <= this.chunkPos + this.chunk.length) return this.chunk.slice(e - this.chunkPos, r - this.chunkPos);
    if (e >= this.chunk2Pos && r <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(e - this.chunk2Pos, r - this.chunk2Pos);
    if (e >= this.range.from && r <= this.range.to) return this.input.read(e, r);
    let n = "";
    for (let i of this.ranges) {
      if (i.from >= r) break;
      i.to > e && (n += this.input.read(Math.max(i.from, e), Math.min(i.to, r)));
    }
    return n;
  }
}
class v {
  constructor(e, r) {
    this.data = e;
    this.id = r;
  }
  token(e, r) {
    let {
      parser
    } = r.p;
    O(this.data, e, r, this.id, parser.data, parser.tokenPrecTable);
  }
}
v.prototype.contextual = v.prototype.fallback = v.prototype.extend = !1;
export class $$y3 {
  constructor(e, r, n) {
    this.precTable = r;
    this.elseToken = n;
    this.data = "string" == typeof e ? d(e) : e;
  }
  token(e, r) {
    let n = e.pos;
    let i = 0;
    for (;;) {
      let n = e.next < 0;
      let s = e.resolveOffset(1, 1);
      if (O(this.data, e, r, 0, this.data, this.precTable), e.token.value > -1) break;
      if (null == this.elseToken) return;
      if (!n && i++, null == s) break;
      e.reset(s, e.token);
    }
    i && (e.reset(n, e.token), e.acceptToken(this.elseToken, i));
  }
}
$$y3.prototype.contextual = v.prototype.fallback = v.prototype.extend = !1;
export class $$b1 {
  constructor(e, r = {}) {
    this.token = e;
    this.contextual = !!r.contextual;
    this.fallback = !!r.fallback;
    this.extend = !!r.extend;
  }
}
function O(e, r, n, i, s, o) {
  let a = 0;
  let h = 1 << i;
  let {
    dialect
  } = n.p.parser;
  a: for (; (h & e[a]) != 0;) {
    let n = e[a + 1];
    for (let i = a + 3; i < n; i += 2) if ((e[i + 1] & h) > 0) {
      let n = e[i];
      if (dialect.allows(n) && (-1 == r.token.value || r.token.value == n || w(n, r.token.value, s, o))) {
        r.acceptToken(n);
        break;
      }
    }
    let i = r.next;
    let p = 0;
    let g = e[a + 2];
    if (r.next < 0 && g > p && 65535 == e[n + 3 * g - 3]) {
      a = e[n + 3 * g - 1];
      continue;
    }
    for (; p < g;) {
      let s = p + g >> 1;
      let o = n + s + (s << 1);
      let h = e[o];
      let d = e[o + 1] || 65536;
      if (i < h) g = s;else if (i >= d) p = s + 1;else {
        a = e[o + 2];
        r.advance();
        continue a;
      }
    }
    break;
  }
}
function x(e, r, n) {
  for (function () {
    let i = r;
    let s;
  }(); 65535 != (s = e[i]); i++) if (s == n) return i - r;
  return -1;
}
function w(e, r, n, i) {
  let s = x(n, i, r);
  return s < 0 || x(n, i, e) < s;
}
let k = "undefined" != typeof process && process.env && /\bparse\b/.test(process.env.LOG);
let _ = null;
function S(e, r, n) {
  let s = e.cursor(Qj.IncludeAnonymous);
  for (s.moveTo(r);;) if (!(n < 0 ? s.childBefore(r) : s.childAfter(r))) for (;;) {
    if ((n < 0 ? s.to < r : s.from > r) && !s.type.isError) return n < 0 ? Math.max(0, Math.min(s.to - 1, r - 25)) : Math.min(e.length, Math.max(s.from + 1, r + 25));
    if (n < 0 ? s.prevSibling() : s.nextSibling()) break;
    if (!s.parent()) return n < 0 ? 0 : e.length;
  }
}
class E {
  constructor(e, r) {
    this.fragments = e;
    this.nodeSet = r;
    this.i = 0;
    this.fragment = null;
    this.safeFrom = -1;
    this.safeTo = -1;
    this.trees = [];
    this.start = [];
    this.index = [];
    this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? S(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? S(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length;) {
        this.trees.pop();
        this.start.pop();
        this.index.pop();
      }
      this.trees.push(e.tree);
      this.start.push(-e.offset);
      this.index.push(0);
      this.nextStart = this.safeFrom;
    } else this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e;) this.nextFragment();
    if (!this.fragment) return null;
    for (;;) {
      let r = this.trees.length - 1;
      if (r < 0) {
        this.nextFragment();
        return null;
      }
      let n = this.trees[r];
      let s = this.index[r];
      if (s == n.children.length) {
        this.trees.pop();
        this.start.pop();
        this.index.pop();
        continue;
      }
      let o = n.children[s];
      let a = this.start[r] + n.positions[s];
      if (a > e) {
        this.nextStart = a;
        return null;
      }
      if (o instanceof PH) {
        if (a == e) {
          if (a < this.safeFrom) return null;
          let e = a + o.length;
          if (e <= this.safeTo) {
            let r = o.prop(uY.lookAhead);
            if (!r || e + r < this.fragment.to) return o;
          }
        }
        this.index[r]++;
        a + o.length >= Math.max(this.safeFrom, e) && (this.trees.push(o), this.start.push(a), this.index.push(0));
      } else {
        this.index[r]++;
        this.nextStart = a + o.length;
      }
    }
  }
}
class A {
  constructor(e, r) {
    this.stream = r;
    this.tokens = [];
    this.mainToken = null;
    this.actions = [];
    this.tokens = e.tokenizers.map(e => new p());
  }
  getActions(e) {
    let r = 0;
    let n = null;
    let {
      parser
    } = e.p;
    let {
      tokenizers
    } = i;
    let o = parser.stateSlot(e.state, 3);
    let a = e.curContext ? e.curContext.hash : 0;
    let h = 0;
    for (let i = 0; i < tokenizers.length; i++) {
      if ((1 << i & o) == 0) continue;
      let d = tokenizers[i];
      let p = this.tokens[i];
      if ((!n || d.fallback) && ((d.contextual || p.start != e.pos || p.mask != o || p.context != a) && (this.updateCachedToken(p, d, e), p.mask = o, p.context = a), p.lookAhead > p.end + 25 && (h = Math.max(p.lookAhead, h)), 0 != p.value)) {
        let i = r;
        if (p.extended > -1 && (r = this.addActions(e, p.extended, p.end, r)), r = this.addActions(e, p.value, p.end, r), !d.extend && (n = p, r > i)) break;
      }
    }
    for (; this.actions.length > r;) this.actions.pop();
    h && e.setLookAhead(h);
    n || e.pos != this.stream.end || ((n = new p()).value = e.p.parser.eofTerm, n.start = n.end = e.pos, r = this.addActions(e, n.value, n.end, r));
    this.mainToken = n;
    return this.actions;
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken;
    let r = new p();
    let {
      pos,
      p
    } = e;
    r.start = pos;
    r.end = Math.min(pos + 1, p.stream.end);
    r.value = pos == p.stream.end ? p.parser.eofTerm : 0;
    return r;
  }
  updateCachedToken(e, r, n) {
    let i = this.stream.clipPos(n.pos);
    if (r.token(this.stream.reset(i, e), n), e.value > -1) {
      let {
        parser
      } = n.p;
      for (let i = 0; i < parser.specialized.length; i++) if (parser.specialized[i] == e.value) {
        let s = parser.specializers[i](this.stream.read(e.start, e.end), n);
        if (s >= 0 && n.p.parser.dialect.allows(s >> 1)) {
          (1 & s) == 0 ? e.value = s >> 1 : e.extended = s >> 1;
          break;
        }
      }
    } else {
      e.value = 0;
      e.end = this.stream.clipPos(i + 1);
    }
  }
  putAction(e, r, n, i) {
    for (let r = 0; r < i; r += 3) if (this.actions[r] == e) return i;
    this.actions[i++] = e;
    this.actions[i++] = r;
    this.actions[i++] = n;
    return i;
  }
  addActions(e, r, n, i) {
    let {
      state
    } = e;
    let {
      parser
    } = e.p;
    let {
      data
    } = o;
    for (let e = 0; e < 2; e++) for (let h = parser.stateSlot(state, e ? 2 : 1);; h += 3) {
      if (65535 == data[h]) {
        if (1 == data[h + 1]) h = D(data, h + 2);else {
          0 == i && 2 == data[h + 1] && (i = this.putAction(D(data, h + 2), r, n, i));
          break;
        }
      }
      data[h] == r && (i = this.putAction(D(data, h + 1), r, n, i));
    }
    return i;
  }
}
class C {
  constructor(e, r, n, i) {
    this.parser = e;
    this.input = r;
    this.ranges = i;
    this.recovering = 0;
    this.nextStackID = 9812;
    this.minStackPos = 0;
    this.reused = [];
    this.stoppedAt = null;
    this.lastBigReductionStart = -1;
    this.lastBigReductionSize = 0;
    this.bigReductionCount = 0;
    this.stream = new m(r, i);
    this.tokens = new A(e, this.stream);
    this.topTerm = e.top[1];
    let {
      from
    } = i[0];
    this.stacks = [s.start(this, e.top[0], from)];
    this.fragments = n.length && this.stream.end - from > 4 * e.bufferLength ? new E(n, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e;
    let r;
    let n = this.stacks;
    let i = this.minStackPos;
    let s = this.stacks = [];
    if (this.bigReductionCount > 300 && 1 == n.length) {
      let [e] = n;
      for (; e.forceReduce() && e.stack.length && e.stack[e.stack.length - 2] >= this.lastBigReductionStart;);
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < n.length; o++) {
      let a = n[o];
      for (;;) {
        if (this.tokens.mainToken = null, a.pos > i) s.push(a);else {
          if (this.advanceStack(a, s, n)) continue;
          e || (e = [], r = []);
          e.push(a);
          let i = this.tokens.getMainToken(a);
          r.push(i.value, i.end);
        }
        break;
      }
    }
    if (!s.length) {
      let r = e && N(e);
      if (r) {
        k && console.log("Finish with " + this.stackID(r));
        return this.stackToTree(r);
      }
      if (this.parser.strict) {
        k && e && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
        return SyntaxError("No parse at " + i);
      }
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && e) {
      let n = null != this.stoppedAt && e[0].pos > this.stoppedAt ? e[0] : this.runRecovery(e, r, s);
      if (n) {
        k && console.log("Force-finish " + this.stackID(n));
        return this.stackToTree(n.forceAll());
      }
    }
    if (this.recovering) {
      let e = 1 == this.recovering ? 1 : 3 * this.recovering;
      if (s.length > e) for (s.sort((e, r) => r.score - e.score); s.length > e;) s.pop();
      s.some(e => e.reducePos > i) && this.recovering--;
    } else if (s.length > 1) {
      t: for (let e = 0; e < s.length - 1; e++) {
        let r = s[e];
        for (let n = e + 1; n < s.length; n++) {
          let i = s[n];
          if (r.sameState(i) || r.buffer.length > 500 && i.buffer.length > 500) {
            if ((r.score - i.score || r.buffer.length - i.buffer.length) > 0) s.splice(n--, 1);else {
              s.splice(e--, 1);
              continue t;
            }
          }
        }
      }
      s.length > 12 && s.splice(12, s.length - 12);
    }
    this.minStackPos = s[0].pos;
    for (let e = 1; e < s.length; e++) s[e].pos < this.minStackPos && (this.minStackPos = s[e].pos);
    return null;
  }
  stopAt(e) {
    if (null != this.stoppedAt && this.stoppedAt < e) throw RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, r, n) {
    let s = e.pos;
    let {
      parser
    } = this;
    let a = k ? this.stackID(e) + " -> " : "";
    if (null != this.stoppedAt && s > this.stoppedAt) return e.forceReduce() ? e : null;
    if (this.fragments) {
      let r = e.curContext && e.curContext.tracker.strict;
      let n = r ? e.curContext.hash : 0;
      for (let h = this.fragments.nodeAt(s); h;) {
        let s = this.parser.nodeSet.types[h.type.id] == h.type ? parser.getGoto(e.state, h.type.id) : -1;
        if (s > -1 && h.length && (!r || (h.prop(uY.contextHash) || 0) == n)) {
          e.useNode(h, s);
          k && console.log(a + this.stackID(e) + ` (via reuse of ${parser.getName(h.type.id)})`);
          return !0;
        }
        if (!(h instanceof PH) || 0 == h.children.length || h.positions[0] > 0) break;
        let d = h.children[0];
        if (d instanceof PH && 0 == h.positions[0]) h = d;else break;
      }
    }
    let h = parser.stateSlot(e.state, 4);
    if (h > 0) {
      e.reduce(h);
      k && console.log(a + this.stackID(e) + ` (via always-reduce ${parser.getName(65535 & h)})`);
      return !0;
    }
    if (e.stack.length >= 8400) for (; e.stack.length > 6e3 && e.forceReduce(););
    let d = this.tokens.getActions(e);
    for (let i = 0; i < d.length;) {
      let h = d[i++];
      let p = d[i++];
      let g = d[i++];
      let m = i == d.length || !n;
      let v = m ? e : e.split();
      let y = this.tokens.mainToken;
      if (v.apply(h, p, y ? y.start : v.pos, g), k && console.log(a + this.stackID(v) + ` (via ${(65536 & h) == 0 ? "shift" : `reduce of ${parser.getName(65535 & h)}`} for ${parser.getName(p)} @ ${s}${v == e ? "" : ", split"})`), m) return !0;
      v.pos > s ? r.push(v) : n.push(v);
    }
    return !1;
  }
  advanceFully(e, r) {
    let n = e.pos;
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1;
      if (e.pos > n) {
        T(e, r);
        return !0;
      }
    }
  }
  runRecovery(e, r, n) {
    let i = null;
    let s = !1;
    for (let o = 0; o < e.length; o++) {
      let a = e[o];
      let h = r[o << 1];
      let d = r[(o << 1) + 1];
      let p = k ? this.stackID(a) + " -> " : "";
      if (a.deadEnd && (s || (s = !0, a.restart(), k && console.log(p + this.stackID(a) + " (restarted)"), this.advanceFully(a, n)))) continue;
      let g = a.split();
      let m = p;
      for (let e = 0; g.forceReduce() && e < 10 && (k && console.log(m + this.stackID(g) + " (via force-reduce)"), !this.advanceFully(g, n)); e++) k && (m = this.stackID(g) + " -> ");
      for (let e of a.recoverByInsert(h)) {
        k && console.log(p + this.stackID(e) + " (via recover-insert)");
        this.advanceFully(e, n);
      }
      this.stream.end > a.pos ? (d == a.pos && (d++, h = 0), a.recoverByDelete(h, d), k && console.log(p + this.stackID(a) + ` (via recover-delete ${this.parser.getName(h)})`), T(a, n)) : (!i || i.score < a.score) && (i = a);
    }
    return i;
  }
  stackToTree(e) {
    e.close();
    return PH.build({
      buffer: h.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let r = (_ || (_ = new WeakMap())).get(e);
    r || _.set(e, r = String.fromCodePoint(this.nextStackID++));
    return r + e;
  }
}
function T(e, r) {
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    if (i.pos == e.pos && i.sameState(e)) {
      r[n].score < e.score && (r[n] = e);
      return;
    }
  }
  r.push(e);
}
class I {
  constructor(e, r, n) {
    this.source = e;
    this.flags = r;
    this.disabled = n;
  }
  allows(e) {
    return !this.disabled || 0 == this.disabled[e];
  }
}
let P = e => e;
export class $$R0 {
  constructor(e) {
    this.start = e.start;
    this.shift = e.shift || P;
    this.reduce = e.reduce || P;
    this.reuse = e.reuse || P;
    this.hash = e.hash || (() => 0);
    this.strict = !1 !== e.strict;
  }
}
export class $$M2 extends iX {
  constructor(e) {
    this.wrappers = [];
    if (super(), 14 != e.version) throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let r = e.nodeNames.split(" ");
    this.minRepeatTerm = r.length;
    for (let n = 0; n < e.repeatNodeCount; n++) r.push("");
    let n = Object.keys(e.topRules).map(r => e.topRules[r][1]);
    let s = [];
    for (let e = 0; e < r.length; e++) s.push([]);
    function o(e, r, n) {
      s[e].push([r, r.deserialize(String(n))]);
    }
    if (e.nodeProps) for (let r of e.nodeProps) {
      let e = r[0];
      "string" == typeof e && (e = uY[e]);
      for (let n = 1; n < r.length;) {
        let i = r[n++];
        if (i >= 0) o(i, e, r[n++]);else {
          let s = r[n + -i];
          for (let a = -i; a > 0; a--) o(r[n++], e, s);
          n++;
        }
      }
    }
    this.nodeSet = new fI(r.map((r, o) => Z6.define({
      name: o >= this.minRepeatTerm ? void 0 : r,
      id: o,
      props: s[o],
      top: n.indexOf(o) > -1,
      error: 0 == o,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(o) > -1
    })));
    e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources));
    this.strict = !1;
    this.bufferLength = cF;
    let a = d(e.tokenData);
    this.context = e.context;
    this.specializerSpecs = e.specialized || [];
    this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let e = 0; e < this.specializerSpecs.length; e++) this.specialized[e] = this.specializerSpecs[e].term;
    this.specializers = this.specializerSpecs.map($);
    this.states = d(e.states, Uint32Array);
    this.data = d(e.stateData);
    this.$$goto = d(e.$$goto);
    this.maxTerm = e.maxTerm;
    this.tokenizers = e.tokenizers.map(e => "number" == typeof e ? new v(a, e) : e);
    this.topRules = e.topRules;
    this.dialects = e.dialects || {};
    this.dynamicPrecedences = e.dynamicPrecedences || null;
    this.tokenPrecTable = e.tokenPrec;
    this.termNames = e.termNames || null;
    this.maxNode = this.nodeSet.types.length - 1;
    this.dialect = this.parseDialect();
    this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, r, n) {
    let i = new C(this, e, r, n);
    for (let s of this.wrappers) i = s(i, e, r, n);
    return i;
  }
  getGoto(e, r, n = !1) {
    let i = this.$$goto;
    if (r >= i[0]) return -1;
    for (let s = i[r + 1];;) {
      let r = i[s++];
      let o = 1 & r;
      let a = i[s++];
      if (o && n) return a;
      for (let n = s + (r >> 1); s < n; s++) if (i[s] == e) return a;
      if (o) return -1;
    }
  }
  hasAction(e, r) {
    var _this = this;
    let n = this.data;
    for (let i = 0; i < 2; i++) for (function () {
      let s = _this.stateSlot(e, i ? 2 : 1);
      let o;
    }();; s += 3) {
      if (65535 == (o = n[s])) {
        if (1 == n[s + 1]) o = n[s = D(n, s + 2)];else if (2 == n[s + 1]) return D(n, s + 2);else break;
      }
      if (o == r || 0 == o) return D(n, s + 1);
    }
    return 0;
  }
  stateSlot(e, r) {
    return this.states[6 * e + r];
  }
  stateFlag(e, r) {
    return (this.stateSlot(e, 0) & r) > 0;
  }
  validAction(e, r) {
    return !!this.allActions(e, e => e == r || null);
  }
  allActions(e, r) {
    let n = this.stateSlot(e, 4);
    let i = n ? r(n) : void 0;
    for (let n = this.stateSlot(e, 1); null == i; n += 3) {
      if (65535 == this.data[n]) {
        if (1 == this.data[n + 1]) n = D(this.data, n + 2);else break;
      }
      i = r(D(this.data, n + 1));
    }
    return i;
  }
  nextStates(e) {
    let r = [];
    for (let n = this.stateSlot(e, 1);; n += 3) {
      if (65535 == this.data[n]) {
        if (1 == this.data[n + 1]) n = D(this.data, n + 2);else break;
      }
      if ((1 & this.data[n + 2]) == 0) {
        let e = this.data[n + 1];
        r.some((r, n) => 1 & n && r == e) || r.push(this.data[n], e);
      }
    }
    return r;
  }
  configure(e) {
    let r = Object.assign(Object.create($$M2.prototype), this);
    if (e.props && (r.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n) throw RangeError(`Invalid top rule name ${e.top}`);
      r.top = n;
    }
    e.tokenizers && (r.tokenizers = this.tokenizers.map(r => {
      let n = e.tokenizers.find(e => e.from == r);
      return n ? n.to : r;
    }));
    e.specializers && (r.specializers = this.specializers.slice(), r.specializerSpecs = this.specializerSpecs.map((n, i) => {
      let s = e.specializers.find(e => e.from == n.external);
      if (!s) return n;
      let o = Object.assign(Object.assign({}, n), {
        external: s.to
      });
      r.specializers[i] = $(o);
      return o;
    }));
    e.contextTracker && (r.context = e.contextTracker);
    e.dialect && (r.dialect = this.parseDialect(e.dialect));
    null != e.strict && (r.strict = e.strict);
    e.wrap && (r.wrappers = r.wrappers.concat(e.wrap));
    null != e.bufferLength && (r.bufferLength = e.bufferLength);
    return r;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let r = this.dynamicPrecedences;
    return null == r ? 0 : r[e] || 0;
  }
  parseDialect(e) {
    var _this2 = this;
    let r = Object.keys(this.dialects);
    let n = r.map(() => !1);
    if (e) for (let i of e.split(" ")) {
      let e = r.indexOf(i);
      e >= 0 && (n[e] = !0);
    }
    let i = null;
    for (let e = 0; e < r.length; e++) if (!n[e]) for (function () {
      let n = _this2.dialects[r[e]];
      let s;
    }(); 65535 != (s = this.data[n++]);) (i || (i = new Uint8Array(this.maxTerm + 1)))[s] = 1;
    return new I(e, n, i);
  }
  static deserialize(e) {
    return new $$M2(e);
  }
}
function D(e, r) {
  return e[r] | e[r + 1] << 16;
}
function N(e) {
  let r = null;
  for (let n of e) {
    let e = n.p.stoppedAt;
    (n.pos == n.p.stream.end || null != e && n.pos > e) && n.p.parser.stateFlag(n.state, 2) && (!r || r.score < n.score) && (r = n);
  }
  return r;
}
function $(e) {
  if (e.external) {
    let r = e.extend ? 1 : 0;
    return (n, i) => e.external(n, i) << 1 | r;
  }
  return e.get;
}
export const Aj = $$R0;
export const Lu = $$b1;
export const U1 = $$M2;
export const uC = $$y3;