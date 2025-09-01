import { Lz, S7, ld, NZ, Z9, r as _$$r, TS } from "../vendor/37366";
import s, { vS, MK, Fh, OF, Pe, sU, sj, QR, Je, $t, zK, vB, Nb } from "../vendor/59696";
import { A as _$$A } from "../vendor/235093";
let a = "function" == typeof String.prototype.normalize ? e => e.normalize("NFKD") : e => e;
class h {
  constructor(e, r, n = 0, i = e.length, s, o) {
    this.test = o;
    this.value = {
      from: 0,
      to: 0
    };
    this.done = !1;
    this.matches = [];
    this.buffer = "";
    this.bufferPos = 0;
    this.iter = e.iterRange(n, i);
    this.bufferStart = n;
    this.normalize = s ? e => s(a(e)) : a;
    this.query = this.normalize(r);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
      this.bufferPos = 0;
      this.buffer = this.iter.value;
    }
    return vS(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length;) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek();
      if (e < 0) {
        this.done = !0;
        return this;
      }
      let r = MK(e);
      let n = this.bufferStart + this.bufferPos;
      this.bufferPos += Fh(e);
      let i = this.normalize(r);
      if (i.length) for (function () {
        let e = 0;
        let s = n;
      }();; e++) {
        let o = i.charCodeAt(e);
        let a = this.match(o, s, this.bufferPos + this.bufferStart);
        if (e == i.length - 1) {
          if (a) {
            this.value = a;
            return this;
          }
          break;
        }
        s == n && e < r.length && r.charCodeAt(e) == o && s++;
      }
    }
  }
  match(e, r, n) {
    let i = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let s = this.matches[r];
      let o = !1;
      this.query.charCodeAt(s) == e && (s == this.query.length - 1 ? i = {
        from: this.matches[r + 1],
        to: n
      } : (this.matches[r]++, o = !0));
      o || (this.matches.splice(r, 2), r -= 2);
    }
    this.query.charCodeAt(0) == e && (1 == this.query.length ? i = {
      from: r,
      to: n
    } : this.matches.push(1, r));
    i && this.test && !this.test(i.from, i.to, this.buffer, this.bufferStart) && (i = null);
    return i;
  }
}
"undefined" != typeof Symbol && (h.prototype[Symbol.iterator] = function () {
  return this;
});
let d = {
  from: -1,
  to: -1,
  match: /.*/.exec("")
};
let p = "gm" + (null == /x/.unicode ? "" : "u");
class g {
  constructor(e, r, n, i = 0, s = e.length) {
    this.text = e;
    this.to = s;
    this.curLine = "";
    this.done = !1;
    this.value = d;
    if (/\\[sWDnr]|\n|\r|\[\^/.test(r)) return new y(e, r, n, i, s);
    this.re = new RegExp(r, p + (n?.ignoreCase ? "i" : ""));
    this.test = n?.test;
    this.iter = e.iter();
    let o = e.lineAt(i);
    this.curLineStart = o.from;
    this.matchPos = O(e, i);
    this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e);
    this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1;
    this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart;;) {
      this.re.lastIndex = e;
      let r = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (r) {
        let n = this.curLineStart + r.index;
        let i = n + r[0].length;
        if (this.matchPos = O(this.text, i + (n == i ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < i || n > this.value.to) && (!this.test || this.test(n, i, r))) {
          this.value = {
            from: n,
            to: i,
            match: r
          };
          return this;
        }
        e = this.matchPos - this.curLineStart;
      } else {
        if (!(this.curLineStart + this.curLine.length < this.to)) {
          this.done = !0;
          return this;
        }
        this.nextLine();
        e = 0;
      }
    }
  }
}
let m = new WeakMap();
class v {
  constructor(e, r) {
    this.from = e;
    this.text = r;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, r, n) {
    let i = m.get(e);
    if (!i || i.from >= n || i.to <= r) {
      let i = new v(r, e.sliceString(r, n));
      m.set(e, i);
      return i;
    }
    if (i.from == r && i.to == n) return i;
    let {
      text,
      from
    } = i;
    from > r && (s = e.sliceString(r, from) + text, o = r);
    i.to < n && (s += e.sliceString(i.to, n));
    m.set(e, new v(from, text));
    return new v(r, text.slice(r - from, n - from));
  }
}
class y {
  constructor(e, r, n, i, s) {
    this.text = e;
    this.to = s;
    this.done = !1;
    this.value = d;
    this.matchPos = O(e, i);
    this.re = new RegExp(r, p + (n?.ignoreCase ? "i" : ""));
    this.test = n?.test;
    this.flat = v.get(e, i, this.chunkEnd(i + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (;;) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from;
      let r = this.re.exec(this.flat.text);
      if (r && !r[0] && r.index == e && (this.re.lastIndex = e + 1, r = this.re.exec(this.flat.text)), r) {
        let e = this.flat.from + r.index;
        let n = e + r[0].length;
        if ((this.flat.to >= this.to || r.index + r[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, r))) {
          this.value = {
            from: e,
            to: n,
            match: r
          };
          this.matchPos = O(this.text, n + (e == n ? 1 : 0));
          return this;
        }
      }
      if (this.flat.to == this.to) {
        this.done = !0;
        return this;
      }
      this.flat = v.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length));
    }
  }
}
function b(e) {
  try {
    new RegExp(e, p);
    return !0;
  } catch (e) {
    return !1;
  }
}
function O(e, r) {
  if (r >= e.length) return r;
  let n = e.lineAt(r);
  let i;
  for (; r < n.to && (i = n.text.charCodeAt(r - n.from)) >= 56320 && i < 57344;) r++;
  return r;
}
function x(e) {
  let r = String(e.state.doc.lineAt(e.state.selection.main.head).number);
  let n = _$$A("input", {
    class: "cm-textfield",
    name: "line",
    value: r
  });
  function a() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(n.value);
    if (!r) return;
    let {
      state
    } = e;
    let a = state.doc.lineAt(state.selection.main.head);
    let [, h, d, p, g] = r;
    let m = p ? +p.slice(1) : 0;
    let v = d ? +d : a.number;
    if (d && g) {
      let e = v / 100;
      h && (e = e * ("-" == h ? -1 : 1) + a.number / state.doc.lines);
      v = Math.round(state.doc.lines * e);
    } else d && h && (v = v * ("-" == h ? -1 : 1) + a.number);
    let y = state.doc.line(Math.max(1, Math.min(state.doc.lines, v)));
    let b = OF.cursor(y.from + Math.max(0, Math.min(m, y.length)));
    e.dispatch({
      effects: [w.of(!1), Lz.scrollIntoView(b.from, {
        y: "center"
      })],
      selection: b
    });
    e.focus();
  }
  return {
    dom: _$$A("form", {
      class: "cm-gotoLine",
      onkeydown: r => {
        27 == r.keyCode ? (r.preventDefault(), e.dispatch({
          effects: w.of(!1)
        }), e.focus()) : 13 == r.keyCode && (r.preventDefault(), a());
      },
      onsubmit: e => {
        e.preventDefault();
        a();
      }
    }, _$$A("label", e.state.phrase("Go to line"), ": ", n), " ", _$$A("button", {
      class: "cm-button",
      type: "submit"
    }, e.state.phrase("go")))
  };
}
"undefined" != typeof Symbol && (g.prototype[Symbol.iterator] = y.prototype[Symbol.iterator] = function () {
  return this;
});
let w = Pe.define();
let k = sU.define({
  create: () => !0,
  update(e, r) {
    for (let n of r.effects) n.is(w) && (e = n.value);
    return e;
  },
  provide: e => S7.from(e, e => e ? x : null)
});
let _ = e => {
  let r = ld(e, x);
  if (!r) {
    let n = [w.of(!0)];
    null == e.state.field(k, !1) && n.push(Pe.appendConfig.of([k, S]));
    e.dispatch({
      effects: n
    });
    r = ld(e, x);
  }
  r && r.dom.querySelector("input").select();
  return !0;
};
let S = Lz.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": {
      fontSize: "80%"
    }
  }
});
let E = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
};
let A = sj.define({
  combine: e => QR(e, E, {
    highlightWordAroundCursor: (e, r) => e || r,
    minSelectionLength: Math.min,
    maxMatches: Math.min
  })
});
export function $$C6(e) {
  let r = [D, M];
  e && r.push(A.of(e));
  return r;
}
let T = NZ.mark({
  class: "cm-selectionMatch"
});
let I = NZ.mark({
  class: "cm-selectionMatch cm-selectionMatch-main"
});
function P(e, r, n, i) {
  return (0 == n || e(r.sliceDoc(n - 1, n)) != Je.Word) && (i == r.doc.length || e(r.sliceDoc(i, i + 1)) != Je.Word);
}
function R(e, r, n, i) {
  return e(r.sliceDoc(n, n + 1)) == Je.Word && e(r.sliceDoc(i - 1, i)) == Je.Word;
}
let M = Z9.fromClass(class {
  constructor(e) {
    this.decorations = this.getDeco(e);
  }
  update(e) {
    (e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view));
  }
  getDeco(e) {
    let r = e.state.facet(A);
    let {
      state
    } = e;
    let s = state.selection;
    if (s.ranges.length > 1) return NZ.none;
    let o = s.main;
    let a;
    let d = null;
    if (o.empty) {
      if (!r.highlightWordAroundCursor) return NZ.none;
      let e = state.wordAt(o.head);
      if (!e) return NZ.none;
      d = state.charCategorizer(o.head);
      a = state.sliceDoc(e.from, e.to);
    } else {
      let e = o.to - o.from;
      if (e < r.minSelectionLength || e > 200) return NZ.none;
      if (r.wholeWords) {
        if (a = state.sliceDoc(o.from, o.to), !(P(d = state.charCategorizer(o.head), state, o.from, o.to) && R(d, state, o.from, o.to))) return NZ.none;
      } else if (!(a = state.sliceDoc(o.from, o.to))) return NZ.none;
    }
    let p = [];
    for (let s of e.visibleRanges) {
      let e = new h(state.doc, a, s.from, s.to);
      for (; !e.next().done;) {
        let {
          from,
          to
        } = e.value;
        if ((!d || P(d, state, from, to)) && (o.empty && from <= o.from && to >= o.to ? p.push(I.range(from, to)) : (from >= o.to || to <= o.from) && p.push(T.range(from, to)), p.length > r.maxMatches)) return NZ.none;
      }
    }
    return NZ.set(p);
  }
}, {
  decorations: e => e.decorations
});
let D = Lz.baseTheme({
  ".cm-selectionMatch": {
    backgroundColor: "#99ff7780"
  },
  ".cm-searchMatch .cm-selectionMatch": {
    backgroundColor: "transparent"
  }
});
let N = ({
  state: e,
  dispatch: r
}) => {
  let {
    selection
  } = e;
  let i = OF.create(selection.ranges.map(r => e.wordAt(r.head) || OF.cursor(r.head)), selection.mainIndex);
  return !i.eq(selection) && (r(e.update({
    selection: i
  })), !0);
};
function $(e, r) {
  let {
    main,
    ranges
  } = e.selection;
  let s = e.wordAt(main.head);
  let o = s && s.from == main.from && s.to == main.to;
  for (function () {
    let n = !1;
    let s = new h(e.doc, r, ranges[ranges.length - 1].to);
  }();;) if (s.next(), s.done) {
    if (n) return null;
    s = new h(e.doc, r, 0, Math.max(0, ranges[ranges.length - 1].from - 1));
    n = !0;
  } else {
    if (n && ranges.some(e => e.from == s.value.from)) continue;
    if (o) {
      let r = e.wordAt(s.value.from);
      if (!r || r.from != s.value.from || r.to != s.value.to) continue;
    }
    return s.value;
  }
}
let L = ({
  state: e,
  dispatch: r
}) => {
  let {
    ranges
  } = e.selection;
  if (ranges.some(e => e.from === e.to)) return N({
    state: e,
    dispatch: r
  });
  let o = e.sliceDoc(ranges[0].from, ranges[0].to);
  if (e.selection.ranges.some(r => e.sliceDoc(r.from, r.to) != o)) return !1;
  let a = $(e, o);
  return !!a && (r(e.update({
    selection: e.selection.addRange(OF.range(a.from, a.to), !1),
    effects: Lz.scrollIntoView(a.to)
  })), !0);
};
let j = sj.define({
  combine: e => QR(e, {
    top: !1,
    caseSensitive: !1,
    literal: !1,
    regexp: !1,
    wholeWord: !1,
    createPanel: e => new ev(e),
    scrollToMatch: e => Lz.scrollIntoView(e)
  })
});
export function $$z0(e) {
  return e ? [j.of(e), ek] : ek;
}
export class $$Z4 {
  constructor(e) {
    this.search = e.search;
    this.caseSensitive = !!e.caseSensitive;
    this.literal = !!e.literal;
    this.regexp = !!e.regexp;
    this.replace = e.replace || "";
    this.valid = !!this.search && (!this.regexp || b(this.search));
    this.unquoted = this.unquote(this.search);
    this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, r) => "n" == r ? "\n" : "r" == r ? "\r" : "t" == r ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new G(this) : new V(this);
  }
  getCursor(e, r = 0, n) {
    let i = e.doc ? e : $t.create({
      doc: e
    });
    null == n && (n = i.doc.length);
    return this.regexp ? B(this, i, r, n) : U(this, i, r, n);
  }
}
class F {
  constructor(e) {
    this.spec = e;
  }
}
function U(e, r, n, i) {
  return new h(r.doc, e.unquoted, n, i, e.caseSensitive ? void 0 : e => e.toLowerCase(), e.wholeWord ? Q(r.doc, r.charCategorizer(r.selection.main.head)) : void 0);
}
function Q(e, r) {
  return (n, i, o, a) => ((a > n || a + o.length < i) && (a = Math.max(0, n - 2), o = e.sliceString(a, Math.min(e.length, i + 2))), (r(q(o, n - a)) != Je.Word || r(W(o, n - a)) != Je.Word) && (r(W(o, i - a)) != Je.Word || r(q(o, i - a)) != Je.Word));
}
class V extends F {
  constructor(e) {
    super(e);
  }
  nextMatch(e, r, n) {
    let i = U(this.spec, e, n, e.doc.length).nextOverlapping();
    if (i.done) {
      let n = Math.min(e.doc.length, r + this.spec.unquoted.length);
      i = U(this.spec, e, 0, n).nextOverlapping();
    }
    return i.done || i.value.from == r && i.value.to == n ? null : i.value;
  }
  prevMatchInRange(e, r, n) {
    for (let i = n;;) {
      let n = Math.max(r, i - 1e4 - this.spec.unquoted.length);
      let s = U(this.spec, e, n, i);
      let o = null;
      for (; !s.nextOverlapping().done;) o = s.value;
      if (o) return o;
      if (n == r) return null;
      i -= 1e4;
    }
  }
  prevMatch(e, r, n) {
    let i = this.prevMatchInRange(e, 0, r);
    i || (i = this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length));
    return i && (i.from != r || i.to != n) ? i : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, r) {
    let n = U(this.spec, e, 0, e.doc.length);
    let i = [];
    for (; !n.next().done;) {
      if (i.length >= r) return null;
      i.push(n.value);
    }
    return i;
  }
  highlight(e, r, n, i) {
    let s = U(this.spec, e, Math.max(0, r - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done;) i(s.value.from, s.value.to);
  }
}
function B(e, r, n, i) {
  return new g(r.doc, e.search, {
    ignoreCase: !e.caseSensitive,
    test: e.wholeWord ? Y(r.charCategorizer(r.selection.main.head)) : void 0
  }, n, i);
}
function q(e, r) {
  return e.slice(zK(e, r, !1), r);
}
function W(e, r) {
  return e.slice(r, zK(e, r));
}
function Y(e) {
  return (r, n, i) => !i[0].length || (e(q(i.input, i.index)) != Je.Word || e(W(i.input, i.index)) != Je.Word) && (e(W(i.input, i.index + i[0].length)) != Je.Word || e(q(i.input, i.index + i[0].length)) != Je.Word);
}
class G extends F {
  nextMatch(e, r, n) {
    let i = B(this.spec, e, n, e.doc.length).next();
    i.done && (i = B(this.spec, e, 0, r).next());
    return i.done ? null : i.value;
  }
  prevMatchInRange(e, r, n) {
    for (let i = 1;; i++) {
      let s = Math.max(r, n - 1e4 * i);
      let o = B(this.spec, e, s, n);
      let a = null;
      for (; !o.next().done;) a = o.value;
      if (a && (s == r || a.from > s + 10)) return a;
      if (s == r) return null;
    }
  }
  prevMatch(e, r, n) {
    return this.prevMatchInRange(e, 0, r) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (r, n) => {
      if ("&" == n) return e.match[0];
      if ("$" == n) return "$";
      for (let r = n.length; r > 0; r--) {
        let i = +n.slice(0, r);
        if (i > 0 && i < e.match.length) return e.match[i] + n.slice(r);
      }
      return r;
    });
  }
  matchAll(e, r) {
    let n = B(this.spec, e, 0, e.doc.length);
    let i = [];
    for (; !n.next().done;) {
      if (i.length >= r) return null;
      i.push(n.value);
    }
    return i;
  }
  highlight(e, r, n, i) {
    let s = B(this.spec, e, Math.max(0, r - 250), Math.min(n + 250, e.doc.length));
    for (; !s.next().done;) i(s.value.from, s.value.to);
  }
}
let $$X5 = Pe.define();
let H = Pe.define();
let K = sU.define({
  create: e => new J(eh(e).create(), null),
  update(e, r) {
    for (let n of r.effects) n.is($$X5) ? e = new J(n.value.create(), e.panel) : n.is(H) && (e = new J(e.query, n.value ? ec : null));
    return e;
  },
  provide: e => S7.from(e, e => e.panel)
});
class J {
  constructor(e, r) {
    this.query = e;
    this.panel = r;
  }
}
let ee = NZ.mark({
  class: "cm-searchMatch"
});
let et = NZ.mark({
  class: "cm-searchMatch cm-searchMatch-selected"
});
let er = Z9.fromClass(class {
  constructor(e) {
    this.view = e;
    this.decorations = this.highlight(e.state.field(K));
  }
  update(e) {
    let r = e.state.field(K);
    (r != e.startState.field(K) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(r));
  }
  highlight({
    query: e,
    panel: r
  }) {
    if (!r || !e.spec.valid) return NZ.none;
    let {
      view
    } = this;
    let o = new vB();
    for (function () {
      let r = 0;
      let i = view.visibleRanges;
      let s = i.length;
    }(); r < s; r++) {
      let {
        from,
        to
      } = _$$r;
      for (; r < s - 1 && to > i[r + 1].from - 500;) h = i[++r].to;
      e.highlight(view.state, from, to, (e, r) => {
        let i = view.state.selection.ranges.some(n => n.from == e && n.to == r);
        o.add(e, r, i ? et : ee);
      });
    }
    return o.finish();
  }
}, {
  decorations: e => e.decorations
});
function en(e) {
  return r => {
    let n = r.state.field(K, !1);
    return n && n.query.spec.valid ? e(r, n) : ep(r);
  };
}
let $$ei3 = en((e, {
  query: r
}) => {
  let {
    to
  } = e.state.selection.main;
  let i = r.nextMatch(e.state, to, to);
  if (!i) return !1;
  let o = OF.single(i.from, i.to);
  let a = e.state.facet(j);
  e.dispatch({
    selection: o,
    effects: [ex(e, i), a.scrollToMatch(o.main, e)],
    userEvent: "select.search"
  });
  ef(e);
  return !0;
});
let $$es7 = en((e, {
  query: r
}) => {
  let {
    state
  } = e;
  let {
    from
  } = state.selection.main;
  let o = r.prevMatch(state, from, from);
  if (!o) return !1;
  let a = OF.single(o.from, o.to);
  let h = e.state.facet(j);
  e.dispatch({
    selection: a,
    effects: [ex(e, o), h.scrollToMatch(a.main, e)],
    userEvent: "select.search"
  });
  ef(e);
  return !0;
});
let eo = en((e, {
  query: r
}) => {
  let n = r.matchAll(e.state, 1e3);
  return !!n && !!n.length && (e.dispatch({
    selection: OF.create(n.map(e => OF.range(e.from, e.to))),
    userEvent: "select.search.matches"
  }), !0);
});
let ea = ({
  state: e,
  dispatch: r
}) => {
  let n = e.selection;
  if (n.ranges.length > 1 || n.main.empty) return !1;
  let {
    from,
    to
  } = n.main;
  let a = [];
  let d = 0;
  for (let r = new h(e.doc, e.sliceDoc(from, to)); !r.next().done;) {
    if (a.length > 1e3) return !1;
    r.value.from == from && (d = a.length);
    a.push(OF.range(r.value.from, r.value.to));
  }
  r(e.update({
    selection: OF.create(a, d),
    userEvent: "select.search.matches"
  }));
  return !0;
};
let $$el1 = en((e, {
  query: r
}) => {
  let {
    state
  } = e;
  let {
    from,
    to
  } = state.selection.main;
  if (state.readOnly) return !1;
  let h = r.nextMatch(state, from, from);
  if (!h) return !1;
  let d = h;
  let p = [];
  let g;
  let m;
  let v = [];
  if (d.from == from && d.to == to && (m = state.toText(r.getReplacement(d)), p.push({
    from: d.from,
    to: d.to,
    insert: m
  }), d = r.nextMatch(state, d.from, d.to), v.push(Lz.announce.of(state.phrase("replaced match on line $", state.doc.lineAt(from).number) + "."))), d) {
    let r = 0 == p.length || p[0].from >= h.to ? 0 : h.to - h.from - m.length;
    g = OF.single(d.from - r, d.to - r);
    v.push(ex(e, d));
    v.push(state.facet(j).scrollToMatch(g.main, e));
  }
  e.dispatch({
    changes: p,
    selection: g,
    effects: v,
    userEvent: "input.replace"
  });
  return !0;
});
let $$eu8 = en((e, {
  query: r
}) => {
  if (e.state.readOnly) return !1;
  let n = r.matchAll(e.state, 1e9).map(e => {
    let {
      from,
      to
    } = e;
    return {
      from,
      to,
      insert: r.getReplacement(e)
    };
  });
  if (!n.length) return !1;
  let s = e.state.phrase("replaced $ matches", n.length) + ".";
  e.dispatch({
    changes: n,
    effects: Lz.announce.of(s),
    userEvent: "input.replace.all"
  });
  return !0;
});
function ec(e) {
  return e.state.facet(j).createPanel(e);
}
function eh(e, r) {
  var n;
  var i;
  var s;
  var o;
  var a;
  let h = e.selection.main;
  let d = h.empty || h.to > h.from + 100 ? "" : e.sliceDoc(h.from, h.to);
  if (r && !d) return r;
  let p = e.facet(j);
  return new $$Z4({
    search: (null !== (n = r?.literal) && void 0 !== n ? n : p.literal) ? d : d.replace(/\n/g, "\\n"),
    caseSensitive: null !== (i = r?.caseSensitive) && void 0 !== i ? i : p.caseSensitive,
    literal: null !== (s = r?.literal) && void 0 !== s ? s : p.literal,
    regexp: null !== (o = r?.regexp) && void 0 !== o ? o : p.regexp,
    wholeWord: null !== (a = r?.wholeWord) && void 0 !== a ? a : p.wholeWord
  });
}
function ed(e) {
  let r = ld(e, ec);
  return r && r.dom.querySelector("[main-field]");
}
function ef(e) {
  let r = ed(e);
  r && r == e.root.activeElement && r.select();
}
let ep = e => {
  let r = e.state.field(K, !1);
  if (r && r.panel) {
    let n = ed(e);
    if (n && n != e.root.activeElement) {
      let i = eh(e.state, r.query.spec);
      i.valid && e.dispatch({
        effects: $$X5.of(i)
      });
      n.focus();
      n.select();
    }
  } else e.dispatch({
    effects: [H.of(!0), r ? $$X5.of(eh(e.state, r.query.spec)) : Pe.appendConfig.of(ek)]
  });
  return !0;
};
let eg = e => {
  let r = e.state.field(K, !1);
  if (!r || !r.panel) return !1;
  let n = ld(e, ec);
  n && n.dom.contains(e.root.activeElement) && e.focus();
  e.dispatch({
    effects: H.of(!1)
  });
  return !0;
};
let $$em2 = [{
  key: "Mod-f",
  run: ep,
  scope: "editor search-panel"
}, {
  key: "F3",
  run: $$ei3,
  shift: $$es7,
  scope: "editor search-panel",
  preventDefault: !0
}, {
  key: "Mod-g",
  run: $$ei3,
  shift: $$es7,
  scope: "editor search-panel",
  preventDefault: !0
}, {
  key: "Escape",
  run: eg,
  scope: "editor search-panel"
}, {
  key: "Mod-Shift-l",
  run: ea
}, {
  key: "Mod-Alt-g",
  run: _
}, {
  key: "Mod-d",
  run: L,
  preventDefault: !0
}];
class ev {
  constructor(e) {
    this.view = e;
    let r = this.query = e.state.field(K).query.spec;
    function n(e, r, n) {
      return _$$A("button", {
        class: "cm-button",
        name: e,
        onclick: r,
        type: "button"
      }, n);
    }
    this.commit = this.commit.bind(this);
    this.searchField = _$$A("input", {
      value: r.search,
      placeholder: ey(e, "Find"),
      "aria-label": ey(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    });
    this.replaceField = _$$A("input", {
      value: r.replace,
      placeholder: ey(e, "Replace"),
      "aria-label": ey(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    });
    this.caseField = _$$A("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: r.caseSensitive,
      onchange: this.commit
    });
    this.reField = _$$A("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: r.regexp,
      onchange: this.commit
    });
    this.wordField = _$$A("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: r.wholeWord,
      onchange: this.commit
    });
    this.dom = _$$A("div", {
      onkeydown: e => this.keydown(e),
      class: "cm-search"
    }, [this.searchField, n("next", () => $$ei3(e), [ey(e, "next")]), n("prev", () => $$es7(e), [ey(e, "previous")]), n("select", () => eo(e), [ey(e, "all")]), _$$A("label", null, [this.caseField, ey(e, "match case")]), _$$A("label", null, [this.reField, ey(e, "regexp")]), _$$A("label", null, [this.wordField, ey(e, "by word")]), ...(e.state.readOnly ? [] : [_$$A("br"), this.replaceField, n("replace", () => $$el1(e), [ey(e, "replace")]), n("replaceAll", () => $$eu8(e), [ey(e, "replace all")])]), _$$A("button", {
      name: "close",
      onclick: () => eg(e),
      "aria-label": ey(e, "close"),
      type: "button"
    }, ["\xd7"])]);
  }
  commit() {
    let e = new $$Z4({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({
      effects: $$X5.of(e)
    }));
  }
  keydown(e) {
    TS(this.view, e, "search-panel") ? e.preventDefault() : 13 == e.keyCode && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? $$es7 : $$ei3)(this.view)) : 13 == e.keyCode && e.target == this.replaceField && (e.preventDefault(), $$el1(this.view));
  }
  update(e) {
    for (let r of e.transactions) for (let e of r.effects) e.is($$X5) && !e.value.eq(this.query) && this.setQuery(e.value);
  }
  setQuery(e) {
    this.query = e;
    this.searchField.value = e.search;
    this.replaceField.value = e.replace;
    this.caseField.checked = e.caseSensitive;
    this.reField.checked = e.regexp;
    this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(j).top;
  }
}
function ey(e, r) {
  return e.state.phrase(r);
}
let eb = 30;
let eO = /[\s\.,:;?!]/;
function ex(e, {
  from: r,
  to: n
}) {
  let s = e.state.doc.lineAt(r);
  let o = e.state.doc.lineAt(n).to;
  let a = Math.max(s.from, r - eb);
  let h = Math.min(o, n + eb);
  let d = e.state.sliceDoc(a, h);
  if (a != s.from) {
    for (let e = 0; e < eb; e++) if (!eO.test(d[e + 1]) && eO.test(d[e])) {
      d = d.slice(e);
      break;
    }
  }
  if (h != o) {
    for (let e = d.length - 1; e > d.length - eb; e--) if (!eO.test(d[e - 1]) && eO.test(d[e])) {
      d = d.slice(0, e);
      break;
    }
  }
  return Lz.announce.of(`${e.state.phrase("current match")}. ${d} ${e.state.phrase("on line")} ${s.number}.`);
}
let ew = Lz.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": {
    backgroundColor: "#ffff0054"
  },
  "&dark .cm-searchMatch": {
    backgroundColor: "#00ffff8a"
  },
  "&light .cm-searchMatch-selected": {
    backgroundColor: "#ff6a0054"
  },
  "&dark .cm-searchMatch-selected": {
    backgroundColor: "#ff00ff8a"
  }
});
let ek = [K, Nb.low(er), ew];
export const $P = $$z0;
export const Aw = $$el1;
export const Eo = $$em2;
export const Hg = $$ei3;
export const L0 = $$Z4;
export const Ri = $$X5;
export const gN = $$C6;
export const ve = $$es7;
export const yh = $$eu8;