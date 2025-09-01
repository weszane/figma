import { YH, sj, QR, sU, ZX, VR, Gu, OF, Pe, y$, zK, EY } from "../vendor/59696";
import { Lz, OP } from "../vendor/37366";
import { mv, jU, tp as _$$tp, KB, _v, EI, Xt } from "../vendor/401644";
import { uY } from "../vendor/579039";
let h = e => {
  let {
    state
  } = e;
  let n = state.doc.lineAt(state.selection.main.from);
  let i = v(e.state, n.from);
  return i.line ? p(e) : !!i.block && m(e);
};
function d(e, r) {
  return ({
    state: n,
    dispatch: i
  }) => {
    if (n.readOnly) return !1;
    let s = e(r, n);
    return !!s && (i(n.update(s)), !0);
  };
}
let p = d(w, 0);
let g = d(x, 0);
let m = d((e, r) => x(e, r, O(r)), 0);
function v(e, r) {
  let n = e.languageDataAt("commentTokens", r);
  return n.length ? n[0] : {};
}
let y = 50;
function b(e, {
  open: r,
  close: n
}, i, s) {
  let o;
  let a;
  let h = e.sliceDoc(i - y, i);
  let d = e.sliceDoc(s, s + y);
  let p = /\s*$/.exec(h)[0].length;
  let g = /^\s*/.exec(d)[0].length;
  let m = h.length - p;
  if (h.slice(m - r.length, m) == r && d.slice(g, g + n.length) == n) return {
    open: {
      pos: i - p,
      margin: p && 1
    },
    close: {
      pos: s + g,
      margin: g && 1
    }
  };
  s - i <= 2 * y ? o = a = e.sliceDoc(i, s) : (o = e.sliceDoc(i, i + y), a = e.sliceDoc(s - y, s));
  let v = /^\s*/.exec(o)[0].length;
  let b = /\s*$/.exec(a)[0].length;
  let O = a.length - b - n.length;
  return o.slice(v, v + r.length) == r && a.slice(O, O + n.length) == n ? {
    open: {
      pos: i + v + r.length,
      margin: /\s/.test(o.charAt(v + r.length)) ? 1 : 0
    },
    close: {
      pos: s - b - n.length,
      margin: /\s/.test(a.charAt(O - 1)) ? 1 : 0
    }
  } : null;
}
function O(e) {
  let r = [];
  for (let n of e.selection.ranges) {
    let i = e.doc.lineAt(n.from);
    let s = n.to <= i.to ? i : e.doc.lineAt(n.to);
    s.from > i.from && s.from == n.to && (s = n.to == i.to + 1 ? i : e.doc.lineAt(n.to - 1));
    let o = r.length - 1;
    o >= 0 && r[o].to > i.from ? r[o].to = s.to : r.push({
      from: i.from + /^\s*/.exec(i.text)[0].length,
      to: s.to
    });
  }
  return r;
}
function x(e, r, n = r.selection.ranges) {
  let i = n.map(e => v(r, e.from).block);
  if (!i.every(e => e)) return null;
  let s = n.map((e, n) => b(r, i[n], e.from, e.to));
  if (2 != e && !s.every(e => e)) return {
    changes: r.changes(n.map((e, r) => s[r] ? [] : [{
      from: e.from,
      insert: i[r].open + " "
    }, {
      from: e.to,
      insert: " " + i[r].close
    }]))
  };
  if (1 != e && s.some(e => e)) {
    let e = [];
    for (function () {
      let r = 0;
      let n;
    }(); r < s.length; r++) if (n = s[r]) {
      let s = i[r];
      let {
        open,
        close
      } = n;
      e.push({
        from: open.pos - s.open.length,
        to: open.pos + open.margin
      }, {
        from: close.pos - close.margin,
        to: close.pos + s.close.length
      });
    }
    return {
      changes: e
    };
  }
  return null;
}
function w(e, r, n = r.selection.ranges) {
  let i = [];
  let s = -1;
  for (let {
    from,
    to
  } of n) {
    let n = i.length;
    let a = 1e9;
    let h = v(r, from).line;
    if (h) {
      for (let n = from; n <= to;) {
        let d = r.doc.lineAt(n);
        if (d.from > s && (from == to || to > d.from)) {
          s = d.from;
          let e = /^\s*/.exec(d.text)[0].length;
          let r = e == d.length;
          let n = d.text.slice(e, e + h.length) == h ? e : -1;
          e < d.text.length && e < a && (a = e);
          i.push({
            line: d,
            comment: n,
            token: h,
            indent: e,
            empty: r,
            single: !1
          });
        }
        n = d.to + 1;
      }
      if (a < 1e9) for (let e = n; e < i.length; e++) i[e].indent < i[e].line.text.length && (i[e].indent = a);
      i.length == n + 1 && (i[n].single = !0);
    }
  }
  if (2 != e && i.some(e => e.comment < 0 && (!e.empty || e.single))) {
    let e = [];
    for (let {
      line,
      token,
      indent,
      empty,
      single
    } of i) (single || !empty) && e.push({
      from: line.from + indent,
      insert: token + " "
    });
    let n = r.changes(e);
    return {
      changes: n,
      selection: r.selection.map(n, 1)
    };
  }
  if (1 != e && i.some(e => e.comment >= 0)) {
    let e = [];
    for (let {
      line,
      comment,
      token
    } of i) if (comment >= 0) {
      let i = line.from + comment;
      let o = i + token.length;
      " " == line.text[o - line.from] && o++;
      e.push({
        from: i,
        to: o
      });
    }
    return {
      changes: e
    };
  }
  return null;
}
let k = YH.define();
let _ = YH.define();
let S = sj.define();
let E = sj.define({
  combine: e => QR(e, {
    minDepth: 100,
    newGroupDelay: 500,
    joinToEvent: (e, r) => r
  }, {
    minDepth: Math.max,
    newGroupDelay: Math.min,
    joinToEvent: (e, r) => (n, i) => e(n, i) || r(n, i)
  })
});
let A = sU.define({
  create: () => q.empty,
  update(e, r) {
    let n = r.state.facet(E);
    let s = r.annotation(k);
    if (s) {
      let i = D.fromTransaction(r, s.selection);
      let o = s.side;
      let a = 0 == o ? e.undone : e.done;
      a = i ? N(a, a.length, n.minDepth, i) : F(a, r.startState.selection);
      return new q(0 == o ? s.rest : a, 0 == o ? a : s.rest);
    }
    let o = r.annotation(_);
    if (("full" == o || "before" == o) && (e = e.isolate()), !1 === r.annotation(ZX.addToHistory)) return r.changes.empty ? e : e.addMapping(r.changes.desc);
    let a = D.fromTransaction(r);
    let h = r.annotation(ZX.time);
    let d = r.annotation(ZX.userEvent);
    a ? e = e.addChanges(a, h, d, n, r) : r.selection && (e = e.addSelection(r.startState.selection, h, d, n.newGroupDelay));
    ("full" == o || "after" == o) && (e = e.isolate());
    return e;
  },
  toJSON: e => ({
    done: e.done.map(e => e.toJSON()),
    undone: e.undone.map(e => e.toJSON())
  }),
  fromJSON: e => new q(e.done.map(D.fromJSON), e.undone.map(D.fromJSON))
});
export function $$C3(e = {}) {
  return [A, E.of(e), Lz.domEventHandlers({
    beforeinput(e, r) {
      let n = "historyUndo" == e.inputType ? I : "historyRedo" == e.inputType ? P : null;
      return !!n && (e.preventDefault(), n(r));
    }
  })];
}
function T(e, r) {
  return function ({
    state: n,
    dispatch: i
  }) {
    if (!r && n.readOnly) return !1;
    let s = n.field(A, !1);
    if (!s) return !1;
    let o = s.pop(e, n, r);
    return !!o && (i(o), !0);
  };
}
let I = T(0, !1);
let P = T(1, !1);
let R = T(0, !0);
let M = T(1, !0);
class D {
  constructor(e, r, n, i, s) {
    this.changes = e;
    this.effects = r;
    this.mapped = n;
    this.startSelection = i;
    this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new D(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e;
    var r;
    var n;
    return {
      changes: this.changes?.toJSON(),
      mapped: this.mapped?.toJSON(),
      startSelection: this.startSelection?.toJSON(),
      selectionsAfter: this.selectionsAfter.map(e => e.toJSON())
    };
  }
  static fromJSON(e) {
    return new D(e.changes && VR.fromJSON(e.changes), [], e.mapped && Gu.fromJSON(e.mapped), e.startSelection && OF.fromJSON(e.startSelection), e.selectionsAfter.map(OF.fromJSON));
  }
  static fromTransaction(e, r) {
    let n = z;
    for (let r of e.startState.facet(S)) {
      let i = r(e);
      i.length && (n = n.concat(i));
    }
    return !n.length && e.changes.empty ? null : new D(e.changes.invert(e.startState.doc), n, void 0, r || e.startState.selection, z);
  }
  static selection(e) {
    return new D(void 0, z, void 0, void 0, e);
  }
}
function N(e, r, n, i) {
  let s = r + 1 > n + 20 ? r - n - 1 : 0;
  let o = e.slice(s, r);
  o.push(i);
  return o;
}
function $(e, r) {
  let n = [];
  let i = !1;
  e.iterChangedRanges((e, r) => n.push(e, r));
  r.iterChangedRanges((e, r, s, o) => {
    for (let e = 0; e < n.length;) {
      let r = n[e++];
      let a = n[e++];
      o >= r && s <= a && (i = !0);
    }
  });
  return i;
}
function L(e, r) {
  return e.ranges.length == r.ranges.length && 0 === e.ranges.filter((e, n) => e.empty != r.ranges[n].empty).length;
}
function j(e, r) {
  return e.length ? r.length ? e.concat(r) : e : r;
}
let z = [];
let Z = 200;
function F(e, r) {
  if (!e.length) return [D.selection([r])];
  {
    let n = e[e.length - 1];
    let i = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - Z));
    return i.length && i[i.length - 1].eq(r) ? e : (i.push(r), N(e, e.length - 1, 1e9, n.setSelAfter(i)));
  }
}
function U(e) {
  let r = e[e.length - 1];
  let n = e.slice();
  n[e.length - 1] = r.setSelAfter(r.selectionsAfter.slice(0, r.selectionsAfter.length - 1));
  return n;
}
function Q(e, r) {
  if (!e.length) return e;
  let n = e.length;
  let i = z;
  for (; n;) {
    let s = V(e[n - 1], r, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = e.slice(0, n);
      r[n - 1] = s;
      return r;
    }
    r = s.mapped;
    n--;
    i = s.selectionsAfter;
  }
  return i.length ? [D.selection(i)] : z;
}
function V(e, r, n) {
  let s = j(e.selectionsAfter.length ? e.selectionsAfter.map(e => e.map(r)) : z, n);
  if (!e.changes) return D.selection(s);
  let o = e.changes.map(r);
  let a = r.mapDesc(e.changes, !0);
  let h = e.mapped ? e.mapped.composeDesc(a) : a;
  return new D(o, Pe.mapEffects(e.effects, r), h, e.startSelection.map(a), s);
}
let B = /^(input\.type|delete)($|\.)/;
class q {
  constructor(e, r, n = 0, i) {
    this.done = e;
    this.undone = r;
    this.prevTime = n;
    this.prevUserEvent = i;
  }
  isolate() {
    return this.prevTime ? new q(this.done, this.undone) : this;
  }
  addChanges(e, r, n, s, o) {
    let a = this.done;
    let h = a[a.length - 1];
    return new q(a = h && h.changes && !h.changes.empty && e.changes && (!n || B.test(n)) && (!h.selectionsAfter.length && r - this.prevTime < s.newGroupDelay && s.joinToEvent(o, $(h.changes, e.changes)) || "input.type.compose" == n) ? N(a, a.length - 1, s.minDepth, new D(e.changes.compose(h.changes), j(Pe.mapEffects(e.effects, h.changes), h.effects), h.mapped, h.startSelection, z)) : N(a, a.length, s.minDepth, e), z, r, n);
  }
  addSelection(e, r, n, i) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : z;
    return s.length > 0 && r - this.prevTime < i && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && L(s[s.length - 1], e) ? this : new q(F(this.done, e), this.undone, r, n);
  }
  addMapping(e) {
    return new q(Q(this.done, e), Q(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, r, n) {
    let i = 0 == e ? this.done : this.undone;
    if (0 == i.length) return null;
    let s = i[i.length - 1];
    let o = s.selectionsAfter[0] || r.selection;
    if (n && s.selectionsAfter.length) return r.update({
      selection: s.selectionsAfter[s.selectionsAfter.length - 1],
      annotations: k.of({
        side: e,
        rest: U(i),
        selection: o
      }),
      userEvent: 0 == e ? "select.undo" : "select.redo",
      scrollIntoView: !0
    });
    if (!s.changes) return null;
    {
      let n = 1 == i.length ? z : i.slice(0, i.length - 1);
      s.mapped && (n = Q(n, s.mapped));
      return r.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: k.of({
          side: e,
          rest: n,
          selection: o
        }),
        filter: !1,
        userEvent: 0 == e ? "undo" : "redo",
        scrollIntoView: !0
      });
    }
  }
}
q.empty = new q(z, z);
export let $$W4 = [{
  key: "Mod-z",
  run: I,
  preventDefault: !0
}, {
  key: "Mod-y",
  mac: "Mod-Shift-z",
  run: P,
  preventDefault: !0
}, {
  linux: "Ctrl-Shift-z",
  run: P,
  preventDefault: !0
}, {
  key: "Mod-u",
  run: R,
  preventDefault: !0
}, {
  key: "Alt-u",
  mac: "Mod-Shift-u",
  run: M,
  preventDefault: !0
}];
function Y(e, r) {
  return OF.create(e.ranges.map(r), e.mainIndex);
}
function G(e, r) {
  return e.update({
    selection: r,
    scrollIntoView: !0,
    userEvent: "select"
  });
}
function X({
  state: e,
  dispatch: r
}, n) {
  let i = Y(e.selection, n);
  return !i.eq(e.selection, !0) && (r(G(e, i)), !0);
}
function H(e, r) {
  return OF.cursor(r ? e.to : e.from);
}
function K(e, r) {
  return X(e, n => n.empty ? e.moveByChar(n, r) : H(n, r));
}
function J(e) {
  return e.textDirectionAt(e.state.selection.main.head) == OP.LTR;
}
let ee = e => K(e, !J(e));
let et = e => K(e, J(e));
function er(e, r) {
  return X(e, n => n.empty ? e.moveByGroup(n, r) : H(n, r));
}
let en = e => er(e, !J(e));
let ei = e => er(e, J(e));
function es(e, r, n) {
  if (r.type.prop(n)) return !0;
  let i = r.to - r.from;
  return i && (i > 2 || /[^\s,.;:]/.test(e.sliceDoc(r.from, r.to))) || r.firstChild;
}
function eo(e, r, n) {
  let s;
  let h;
  let d = mv(e).resolveInner(r.head);
  let p = n ? uY.closedBy : uY.openedBy;
  for (let i = r.head;;) {
    let r = n ? d.childAfter(i) : d.childBefore(i);
    if (!r) break;
    es(e, r, p) ? d = r : i = n ? r.to : r.from;
  }
  h = d.type.prop(p) && (s = n ? jU(e, d.from, 1) : jU(e, d.to, -1)) && s.matched ? n ? s.end.to : s.end.from : n ? d.to : d.from;
  return OF.cursor(h, n ? -1 : 1);
}
"undefined" != typeof Intl && Intl.Segmenter;
let ea = e => X(e, r => eo(e.state, r, !J(e)));
let el = e => X(e, r => eo(e.state, r, J(e)));
function eu(e, r) {
  return X(e, n => {
    if (!n.empty) return H(n, r);
    let i = e.moveVertically(n, r);
    return i.head != n.head ? i : e.moveToLineBoundary(n, r);
  });
}
let ec = e => eu(e, !1);
let eh = e => eu(e, !0);
function ed(e) {
  let r = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2;
  let n = 0;
  let i = 0;
  let o;
  if (r) {
    for (let r of e.state.facet(Lz.scrollMargins)) {
      let s = r(e);
      s?.top && (n = Math.max(s?.top, n));
      s?.bottom && (i = Math.max(s?.bottom, i));
    }
    o = e.scrollDOM.clientHeight - n - i;
  } else o = (e.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: i,
    selfScroll: r,
    height: Math.max(e.defaultLineHeight, o - 5)
  };
}
function ef(e, r) {
  let n;
  let i = ed(e);
  let {
    state
  } = e;
  let a = Y(state.selection, n => n.empty ? e.moveVertically(n, r, i.height) : H(n, r));
  if (a.eq(state.selection)) return !1;
  if (i.selfScroll) {
    let r = e.coordsAtPos(state.selection.main.head);
    let h = e.scrollDOM.getBoundingClientRect();
    let d = h.top + i.marginTop;
    let p = h.bottom - i.marginBottom;
    r && r.top > d && r.bottom < p && (n = Lz.scrollIntoView(a.main.head, {
      y: "start",
      yMargin: r.top - d
    }));
  }
  e.dispatch(G(state, a), {
    effects: n
  });
  return !0;
}
let ep = e => ef(e, !1);
let eg = e => ef(e, !0);
function em(e, r, n) {
  let s = e.lineBlockAt(r.head);
  let o = e.moveToLineBoundary(r, n);
  if (o.head == r.head && o.head != (n ? s.to : s.from) && (o = e.moveToLineBoundary(r, n, !1)), !n && o.head == s.from && s.length) {
    let n = /^\s*/.exec(e.state.sliceDoc(s.from, Math.min(s.from + 100, s.to)))[0].length;
    n && r.head != s.from + n && (o = OF.cursor(s.from + n));
  }
  return o;
}
let ev = e => X(e, r => em(e, r, !0));
let ey = e => X(e, r => em(e, r, !1));
let eb = e => X(e, r => em(e, r, !J(e)));
let eO = e => X(e, r => em(e, r, J(e)));
let ex = e => X(e, r => OF.cursor(e.lineBlockAt(r.head).from, 1));
let ew = e => X(e, r => OF.cursor(e.lineBlockAt(r.head).to, -1));
function ek(e, r, n) {
  let s = !1;
  let a = Y(e.selection, r => {
    let a = jU(e, r.head, -1) || jU(e, r.head, 1) || r.head > 0 && jU(e, r.head - 1, 1) || r.head < e.doc.length && jU(e, r.head + 1, -1);
    if (!a || !a.end) return r;
    s = !0;
    let h = a.start.from == r.head ? a.end.to : a.end.from;
    return n ? OF.range(r.anchor, h) : OF.cursor(h);
  });
  return !!s && (r(G(e, a)), !0);
}
let e_ = ({
  state: e,
  dispatch: r
}) => ek(e, r, !1);
function eS(e, r) {
  let n = Y(e.state.selection, e => {
    let n = r(e);
    return OF.range(e.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return !n.eq(e.state.selection) && (e.dispatch(G(e.state, n)), !0);
}
function eE(e, r) {
  return eS(e, n => e.moveByChar(n, r));
}
let eA = e => eE(e, !J(e));
let eC = e => eE(e, J(e));
function eT(e, r) {
  return eS(e, n => e.moveByGroup(n, r));
}
let eI = e => eT(e, !J(e));
let eP = e => eT(e, J(e));
let eR = e => eS(e, r => eo(e.state, r, !J(e)));
let eM = e => eS(e, r => eo(e.state, r, J(e)));
function eD(e, r) {
  return eS(e, n => e.moveVertically(n, r));
}
let eN = e => eD(e, !1);
let e$ = e => eD(e, !0);
function eL(e, r) {
  return eS(e, n => e.moveVertically(n, r, ed(e).height));
}
let ej = e => eL(e, !1);
let ez = e => eL(e, !0);
let eZ = e => eS(e, r => em(e, r, !0));
let eF = e => eS(e, r => em(e, r, !1));
let eU = e => eS(e, r => em(e, r, !J(e)));
let eQ = e => eS(e, r => em(e, r, J(e)));
let eV = e => eS(e, r => OF.cursor(e.lineBlockAt(r.head).from));
let eB = e => eS(e, r => OF.cursor(e.lineBlockAt(r.head).to));
let eq = ({
  state: e,
  dispatch: r
}) => (r(G(e, {
  anchor: 0
})), !0);
let eW = ({
  state: e,
  dispatch: r
}) => (r(G(e, {
  anchor: e.doc.length
})), !0);
let eY = ({
  state: e,
  dispatch: r
}) => (r(G(e, {
  anchor: e.selection.main.anchor,
  head: 0
})), !0);
let eG = ({
  state: e,
  dispatch: r
}) => (r(G(e, {
  anchor: e.selection.main.anchor,
  head: e.doc.length
})), !0);
let eX = ({
  state: e,
  dispatch: r
}) => (r(e.update({
  selection: {
    anchor: 0,
    head: e.doc.length
  },
  userEvent: "select"
})), !0);
let eH = ({
  state: e,
  dispatch: r
}) => {
  let n = tn(e).map(({
    from: r,
    to: n
  }) => OF.range(r, Math.min(n + 1, e.doc.length)));
  r(e.update({
    selection: OF.create(n),
    userEvent: "select"
  }));
  return !0;
};
let eK = ({
  state: e,
  dispatch: r
}) => {
  let n = Y(e.selection, r => {
    let n = mv(e);
    let s = n.resolveStack(r.from, 1);
    if (r.empty) {
      let e = n.resolveStack(r.from, -1);
      e.node.from >= s.node.from && e.node.to <= s.node.to && (s = e);
    }
    for (let e = s; e; e = e.next) {
      let {
        node
      } = e;
      if ((node.from < r.from && node.to >= r.to || node.to > r.to && node.from <= r.from) && e.next) return OF.range(node.to, node.from);
    }
    return r;
  });
  return !n.eq(e.selection) && (r(G(e, n)), !0);
};
let eJ = ({
  state: e,
  dispatch: r
}) => {
  let n = e.selection;
  let s = null;
  n.ranges.length > 1 ? s = OF.create([n.main]) : n.main.empty || (s = OF.create([OF.cursor(n.main.head)]));
  return !!s && (r(G(e, s)), !0);
};
function e0(e, r) {
  if (e.state.readOnly) return !1;
  let n = "delete.selection";
  let {
    state
  } = e;
  let a = state.changeByRange(s => {
    let {
      from,
      to
    } = s;
    if (from == to) {
      let i = r(s);
      i < from ? (n = "delete.backward", i = e1(e, i, !1)) : i > from && (n = "delete.forward", i = e1(e, i, !0));
      o = Math.min(from, i);
      a = Math.max(to, i);
    } else {
      o = e1(e, from, !1);
      a = e1(e, to, !0);
    }
    return from == to ? {
      range: s
    } : {
      changes: {
        from,
        to
      },
      range: OF.cursor(from, from < s.head ? -1 : 1)
    };
  });
  return !a.changes.empty && (e.dispatch(state.update(a, {
    scrollIntoView: !0,
    userEvent: n,
    effects: "delete.selection" == n ? Lz.announce.of(state.phrase("Selection deleted")) : void 0
  })), !0);
}
function e1(e, r, n) {
  if (e instanceof Lz) for (let i of e.state.facet(Lz.atomicRanges).map(r => r(e))) i.between(r, r, (e, i) => {
    e < r && i > r && (r = n ? i : e);
  });
  return r;
}
let e2 = (e, r, n) => e0(e, s => {
  let a = s.from;
  let {
    state
  } = e;
  let d = state.doc.lineAt(a);
  let p;
  let g;
  if (n && !r && a > d.from && a < d.from + 200 && !/[^ \t]/.test(p = d.text.slice(0, a - d.from))) {
    if ("	" == p[p.length - 1]) return a - 1;
    let e = y$(p, state.tabSize) % _$$tp(state) || _$$tp(state);
    for (let r = 0; r < e && " " == p[p.length - 1 - r]; r++) a--;
    g = a;
  } else (g = zK(d.text, a - d.from, r, r) + d.from) == a && d.number != (r ? state.doc.lines : 1) ? g += r ? 1 : -1 : !r && /[\ufe00-\ufe0f]/.test(d.text.slice(g - d.from, a - d.from)) && (g = zK(d.text, g - d.from, !1, !1) + d.from);
  return g;
});
let e5 = e => e2(e, !1, !0);
let e3 = e => e2(e, !0, !1);
let e6 = (e, r) => e0(e, n => {
  let s = n.head;
  let {
    state
  } = e;
  let a = state.doc.lineAt(s);
  let h = state.charCategorizer(s);
  for (let e = null;;) {
    if (s == (r ? a.to : a.from)) {
      s == n.head && a.number != (r ? state.doc.lines : 1) && (s += r ? 1 : -1);
      break;
    }
    let d = zK(a.text, s - a.from, r) + a.from;
    let p = a.text.slice(Math.min(s, d) - a.from, Math.max(s, d) - a.from);
    let g = h(p);
    if (null != e && g != e) break;
    (" " != p || s != n.head) && (e = g);
    s = d;
  }
  return s;
});
let e4 = e => e6(e, !1);
let e8 = e => e6(e, !0);
let e7 = e => e0(e, r => {
  let n = e.lineBlockAt(r.head).to;
  return r.head < n ? n : Math.min(e.state.doc.length, r.head + 1);
});
let e9 = e => e0(e, r => {
  let n = e.moveToLineBoundary(r, !1).head;
  return r.head > n ? n : Math.max(0, r.head - 1);
});
let te = e => e0(e, r => {
  let n = e.moveToLineBoundary(r, !0).head;
  return r.head < n ? n : Math.min(e.state.doc.length, r.head + 1);
});
let tt = ({
  state: e,
  dispatch: r
}) => {
  if (e.readOnly) return !1;
  let n = e.changeByRange(e => ({
    changes: {
      from: e.from,
      to: e.to,
      insert: EY.of(["", ""])
    },
    range: OF.cursor(e.from)
  }));
  r(e.update(n, {
    scrollIntoView: !0,
    userEvent: "input"
  }));
  return !0;
};
let tr = ({
  state: e,
  dispatch: r
}) => {
  if (e.readOnly) return !1;
  let n = e.changeByRange(r => {
    if (!r.empty || 0 == r.from || r.from == e.doc.length) return {
      range: r
    };
    let n = r.from;
    let s = e.doc.lineAt(n);
    let o = n == s.from ? n - 1 : zK(s.text, n - s.from, !1) + s.from;
    let a = n == s.to ? n + 1 : zK(s.text, n - s.from, !0) + s.from;
    return {
      changes: {
        from: o,
        to: a,
        insert: e.doc.slice(n, a).append(e.doc.slice(o, n))
      },
      range: OF.cursor(a)
    };
  });
  return !n.changes.empty && (r(e.update(n, {
    scrollIntoView: !0,
    userEvent: "move.character"
  })), !0);
};
function tn(e) {
  let r = [];
  let n = -1;
  for (let i of e.selection.ranges) {
    let s = e.doc.lineAt(i.from);
    let o = e.doc.lineAt(i.to);
    if (i.empty || i.to != o.from || (o = e.doc.lineAt(i.to - 1)), n >= s.number) {
      let e = r[r.length - 1];
      e.to = o.to;
      e.ranges.push(i);
    } else r.push({
      from: s.from,
      to: o.to,
      ranges: [i]
    });
    n = o.number + 1;
  }
  return r;
}
function ti(e, r, n) {
  if (e.readOnly) return !1;
  let s = [];
  let o = [];
  for (let r of tn(e)) {
    if (n ? r.to == e.doc.length : 0 == r.from) continue;
    let a = e.doc.lineAt(n ? r.to + 1 : r.from - 1);
    let h = a.length + 1;
    if (n) for (let n of (s.push({
      from: r.to,
      to: a.to
    }, {
      from: r.from,
      insert: a.text + e.lineBreak
    }), r.ranges)) o.push(OF.range(Math.min(e.doc.length, n.anchor + h), Math.min(e.doc.length, n.head + h)));else for (let n of (s.push({
      from: a.from,
      to: r.from
    }, {
      from: r.to,
      insert: e.lineBreak + a.text
    }), r.ranges)) o.push(OF.range(n.anchor - h, n.head - h));
  }
  return !!s.length && (r(e.update({
    changes: s,
    scrollIntoView: !0,
    selection: OF.create(o, e.selection.mainIndex),
    userEvent: "move.line"
  })), !0);
}
let ts = ({
  state: e,
  dispatch: r
}) => ti(e, r, !1);
let to = ({
  state: e,
  dispatch: r
}) => ti(e, r, !0);
function ta(e, r, n) {
  if (e.readOnly) return !1;
  let i = [];
  for (let r of tn(e)) n ? i.push({
    from: r.from,
    insert: e.doc.slice(r.from, r.to) + e.lineBreak
  }) : i.push({
    from: r.to,
    insert: e.lineBreak + e.doc.slice(r.from, r.to)
  });
  r(e.update({
    changes: i,
    scrollIntoView: !0,
    userEvent: "input.copyline"
  }));
  return !0;
}
let tl = ({
  state: e,
  dispatch: r
}) => ta(e, r, !1);
let tu = ({
  state: e,
  dispatch: r
}) => ta(e, r, !0);
let tc = e => {
  if (e.state.readOnly) return !1;
  let {
    state
  } = e;
  let n = state.changes(tn(state).map(({
    from: e,
    to: n
  }) => (e > 0 ? e-- : n < state.doc.length && n++, {
    from: e,
    to: n
  })));
  let i = Y(state.selection, r => {
    let n;
    if (e.lineWrapping) {
      let i = e.lineBlockAt(r.head);
      let s = e.coordsAtPos(r.head, r.assoc || 1);
      s && (n = i.bottom + e.documentTop - s.bottom + e.defaultLineHeight / 2);
    }
    return e.moveVertically(r, !0, n);
  }).map(n);
  e.dispatch({
    changes: n,
    selection: i,
    scrollIntoView: !0,
    userEvent: "delete.line"
  });
  return !0;
};
function th(e, r) {
  if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(r - 1, r + 1))) return {
    from: r,
    to: r
  };
  let n = mv(e).resolveInner(r);
  let i = n.childBefore(r);
  let s = n.childAfter(r);
  let h;
  return i && s && i.to <= r && s.from >= r && (h = i.type.prop(uY.closedBy)) && h.indexOf(s.name) > -1 && e.doc.lineAt(i.to).from == e.doc.lineAt(s.from).from && !/\S/.test(e.sliceDoc(i.to, s.from)) ? {
    from: i.to,
    to: s.from
  } : null;
}
let td = tp(!1);
let tf = tp(!0);
function tp(e) {
  return ({
    state: r,
    dispatch: n
  }) => {
    if (r.readOnly) return !1;
    let s = r.changeByRange(n => {
      let {
        from,
        to
      } = n;
      let h = r.doc.lineAt(from);
      let d = !e && from == to && th(r, from);
      e && (s = a = (to <= h.to ? h : r.doc.lineAt(to)).to);
      let p = new KB(r, {
        simulateBreak: from,
        simulateDoubleBreak: !!d
      });
      let g = _v(p, from);
      for (null == g && (g = y$(/^\s*/.exec(r.doc.lineAt(from).text)[0], r.tabSize)); to < h.to && /\s/.test(h.text[to - h.from]);) to++;
      d ? {
        from: s,
        to: a
      } = d : from > h.from && from < h.from + 100 && !/\S/.test(h.text.slice(0, from)) && (s = h.from);
      let m = ["", EI(r, g)];
      d && m.push(EI(r, p.lineIndent(h.from, -1)));
      return {
        changes: {
          from,
          to,
          insert: EY.of(m)
        },
        range: OF.cursor(from + 1 + m[1].length)
      };
    });
    n(r.update(s, {
      scrollIntoView: !0,
      userEvent: "input"
    }));
    return !0;
  };
}
function tg(e, r) {
  let n = -1;
  return e.changeByRange(s => {
    let o = [];
    for (let i = s.from; i <= s.to;) {
      let a = e.doc.lineAt(i);
      a.number > n && (s.empty || s.to > a.from) && (r(a, o, s), n = a.number);
      i = a.to + 1;
    }
    let a = e.changes(o);
    return {
      changes: o,
      range: OF.range(a.mapPos(s.anchor, 1), a.mapPos(s.head, 1))
    };
  });
}
let $$tm1 = ({
  state: e,
  dispatch: r
}) => !e.readOnly && (r(e.update(tg(e, (r, n) => {
  n.push({
    from: r.from,
    insert: e.facet(Xt)
  });
}), {
  userEvent: "input.indent"
})), !0);
let $$tv0 = ({
  state: e,
  dispatch: r
}) => !e.readOnly && (r(e.update(tg(e, (r, n) => {
  let s = /^\s*/.exec(r.text)[0];
  if (!s) return;
  let a = y$(s, e.tabSize);
  let h = 0;
  let d = EI(e, Math.max(0, a - _$$tp(e)));
  for (; h < s.length && h < d.length && s.charCodeAt(h) == d.charCodeAt(h);) h++;
  n.push({
    from: r.from + h,
    to: r.from + s.length,
    insert: d.slice(h)
  });
}), {
  userEvent: "delete.dedent"
})), !0);
let ty = [{
  key: "Ctrl-b",
  run: ee,
  shift: eA,
  preventDefault: !0
}, {
  key: "Ctrl-f",
  run: et,
  shift: eC
}, {
  key: "Ctrl-p",
  run: ec,
  shift: eN
}, {
  key: "Ctrl-n",
  run: eh,
  shift: e$
}, {
  key: "Ctrl-a",
  run: ex,
  shift: eV
}, {
  key: "Ctrl-e",
  run: ew,
  shift: eB
}, {
  key: "Ctrl-d",
  run: e3
}, {
  key: "Ctrl-h",
  run: e5
}, {
  key: "Ctrl-k",
  run: e7
}, {
  key: "Ctrl-Alt-h",
  run: e4
}, {
  key: "Ctrl-o",
  run: tt
}, {
  key: "Ctrl-t",
  run: tr
}, {
  key: "Ctrl-v",
  run: eg
}];
let $$tb5 = [{
  key: "Alt-ArrowLeft",
  mac: "Ctrl-ArrowLeft",
  run: ea,
  shift: eR
}, {
  key: "Alt-ArrowRight",
  mac: "Ctrl-ArrowRight",
  run: el,
  shift: eM
}, {
  key: "Alt-ArrowUp",
  run: ts
}, {
  key: "Shift-Alt-ArrowUp",
  run: tl
}, {
  key: "Alt-ArrowDown",
  run: to
}, {
  key: "Shift-Alt-ArrowDown",
  run: tu
}, {
  key: "Escape",
  run: eJ
}, {
  key: "Mod-Enter",
  run: tf
}, {
  key: "Alt-l",
  mac: "Ctrl-l",
  run: eH
}, {
  key: "Mod-i",
  run: eK,
  preventDefault: !0
}, {
  key: "Mod-[",
  run: $$tv0
}, {
  key: "Mod-]",
  run: $$tm1
}, {
  key: "Mod-Alt-\\",
  run: ({
    state: e,
    dispatch: r
  }) => {
    if (e.readOnly) return !1;
    let n = Object.create(null);
    let i = new KB(e, {
      overrideIndentation: e => {
        let r = n[e];
        return r;
      }
    });
    let s = tg(e, (r, s, a) => {
      let h = _v(i, r.from);
      if (null == h) return;
      /\S/.test(r.text) || (h = 0);
      let d = /^\s*/.exec(r.text)[0];
      let p = EI(e, h);
      (d != p || a.from < r.from + d.length) && (n[r.from] = h, s.push({
        from: r.from,
        to: r.from + d.length,
        insert: p
      }));
    });
    s.changes.empty || r(e.update(s, {
      userEvent: "indent"
    }));
    return !0;
  }
}, {
  key: "Shift-Mod-k",
  run: tc
}, {
  key: "Shift-Mod-\\",
  run: e_
}, {
  key: "Mod-/",
  run: h,
  preventDefault: !0,
  stopPropagation: !0
}, {
  key: "Alt-A",
  run: g
}, {
  key: "Ctrl-m",
  mac: "Shift-Alt-m",
  run: e => (e.setTabFocusMode(), !0)
}].concat([{
  key: "ArrowLeft",
  run: ee,
  shift: eA,
  preventDefault: !0
}, {
  key: "Mod-ArrowLeft",
  mac: "Alt-ArrowLeft",
  run: en,
  shift: eI,
  preventDefault: !0
}, {
  mac: "Cmd-ArrowLeft",
  run: eb,
  shift: eU,
  preventDefault: !0
}, {
  key: "ArrowRight",
  run: et,
  shift: eC,
  preventDefault: !0
}, {
  key: "Mod-ArrowRight",
  mac: "Alt-ArrowRight",
  run: ei,
  shift: eP,
  preventDefault: !0
}, {
  mac: "Cmd-ArrowRight",
  run: eO,
  shift: eQ,
  preventDefault: !0
}, {
  key: "ArrowUp",
  run: ec,
  shift: eN,
  preventDefault: !0
}, {
  mac: "Cmd-ArrowUp",
  run: eq,
  shift: eY
}, {
  mac: "Ctrl-ArrowUp",
  run: ep,
  shift: ej
}, {
  key: "ArrowDown",
  run: eh,
  shift: e$,
  preventDefault: !0
}, {
  mac: "Cmd-ArrowDown",
  run: eW,
  shift: eG
}, {
  mac: "Ctrl-ArrowDown",
  run: eg,
  shift: ez
}, {
  key: "PageUp",
  run: ep,
  shift: ej
}, {
  key: "PageDown",
  run: eg,
  shift: ez
}, {
  key: "Home",
  run: ey,
  shift: eF,
  preventDefault: !0
}, {
  key: "Mod-Home",
  run: eq,
  shift: eY
}, {
  key: "End",
  run: ev,
  shift: eZ,
  preventDefault: !0
}, {
  key: "Mod-End",
  run: eW,
  shift: eG
}, {
  key: "Enter",
  run: td,
  shift: td
}, {
  key: "Mod-a",
  run: eX
}, {
  key: "Backspace",
  run: e5,
  shift: e5
}, {
  key: "Delete",
  run: e3
}, {
  key: "Mod-Backspace",
  mac: "Alt-Backspace",
  run: e4
}, {
  key: "Mod-Delete",
  mac: "Alt-Delete",
  run: e8
}, {
  mac: "Mod-Backspace",
  run: e9
}, {
  mac: "Mod-Delete",
  run: te
}].concat(ty.map(e => ({
  mac: e.key,
  run: e.run,
  shift: e.shift
}))));
let $$tO2 = {
  key: "Tab",
  run: $$tm1,
  shift: $$tv0
};
export const Mg = $$tv0;
export const UY = $$tm1;
export const Yc = $$tO2;
export const b6 = $$C3;
export const cL = $$W4;
export const pw = $$tb5;