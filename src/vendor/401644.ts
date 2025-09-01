import { uY, PH, Qj, rr, iX, Z6 } from "../vendor/579039";
import { sj, $t, Pe, sU, y$, QR, vB, om, Nb } from "../vendor/59696";
import { Z9, c_, Lz, NZ, xO, wJ, cU, OP } from "../vendor/37366";
import { az, DM, _A, pn } from "../vendor/548993";
import { G } from "../vendor/804148";
var i;
export let $$p19 = new uY();
export function $$g24(e) {
  return sj.define({
    combine: e ? r => r.concat(e) : void 0
  });
}
export let $$m5 = new uY();
export class $$v8 {
  constructor(e, r, n = [], i = "") {
    this.data = e;
    this.name = i;
    $t.prototype.hasOwnProperty("tree") || Object.defineProperty($t.prototype, "tree", {
      get() {
        return $$O21(this);
      }
    });
    this.parser = r;
    this.extension = [T.of(this), $t.languageData.of((e, r, n) => {
      let i = y(e, r, n);
      let s = i.type.prop($$p19);
      if (!s) return [];
      let o = e.facet(s);
      let a = i.type.prop($$m5);
      if (a) {
        let s = i.resolve(r - i.from, n);
        for (let r of a) if (r.test(s, e)) {
          let n = e.facet(r.facet);
          return "replace" == r.type ? n : n.concat(o);
        }
      }
      return o;
    })].concat(n);
  }
  isActiveAt(e, r, n = -1) {
    return y(e, r, n).type.prop($$p19) == this.data;
  }
  findRegions(e) {
    let r = e.facet(T);
    if (r?.data == this.data) return [{
      from: 0,
      to: e.doc.length
    }];
    if (!r || !r.allowsNesting) return [];
    let n = [];
    let i = (e, r) => {
      if (e.prop($$p19) == this.data) {
        n.push({
          from: r,
          to: r + e.length
        });
        return;
      }
      let o = e.prop(uY.mounted);
      if (o) {
        if (o.tree.prop($$p19) == this.data) {
          if (o.overlay) for (let e of o.overlay) n.push({
            from: e.from + r,
            to: e.to + r
          }); else n.push({
            from: r,
            to: r + e.length
          });
          return;
        }
        if (o.overlay) {
          let e = n.length;
          if (i(o.tree, o.overlay[0].from + r), n.length > e) return;
        }
      }
      for (let n = 0; n < e.children.length; n++) {
        let o = e.children[n];
        o instanceof PH && i(o, e.positions[n] + r);
      }
    };
    i($$O21(e), 0);
    return n;
  }
  get allowsNesting() {
    return !0;
  }
}
function y(e, r, n) {
  let i = e.facet(T);
  let o = $$O21(e).topNode;
  if (!i || i.allowsNesting) for (let e = o; e; e = e.enter(r, n, Qj.ExcludeBuffers)) e.type.isTop && (o = e);
  return o;
}
$$v8.setState = Pe.define();
export class $$b16 extends $$v8 {
  constructor(e, r, n) {
    super(e, r, [], n);
    this.parser = r;
  }
  static define(e) {
    let r = $$g24(e.languageData);
    return new $$b16(r, e.parser.configure({
      props: [$$p19.add(e => e.isTop ? r : void 0)]
    }), e.name);
  }
  configure(e, r) {
    return new $$b16(this.data, this.parser.configure(e), r || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
export function $$O21(e) {
  let r = e.field($$v8.state, !1);
  return r ? r.tree : PH.empty;
}
class x {
  constructor(e) {
    this.doc = e;
    this.cursorPos = 0;
    this.string = "";
    this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    this.string = this.cursor.next(e - this.cursorPos).value;
    this.cursorPos = e + this.string.length;
    return this.cursorPos - this.string.length;
  }
  chunk(e) {
    this.syncTo(e);
    return this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, r) {
    let n = this.cursorPos - this.string.length;
    return e < n || r >= this.cursorPos ? this.doc.sliceString(e, r) : this.string.slice(e - n, r - n);
  }
}
let w = null;
export class $$k23 {
  constructor(e, r, n = [], i, s, o, a, h) {
    this.parser = e;
    this.state = r;
    this.fragments = n;
    this.tree = i;
    this.treeLen = s;
    this.viewport = o;
    this.skipped = a;
    this.scheduleOn = h;
    this.parse = null;
    this.tempSkipped = [];
  }
  static create(e, r, n) {
    return new $$k23(e, r, [], PH.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new x(this.state.doc), this.fragments);
  }
  work(e, r) {
    return (null != r && r >= this.state.doc.length && (r = void 0), this.tree != PH.empty && this.isDone(null != r ? r : this.state.doc.length)) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if ("number" == typeof e) {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), null != r && (null == this.parse.stoppedAt || this.parse.stoppedAt > r) && r < this.state.doc.length && this.parse.stopAt(r); ;) {
        let i = this.parse.advance();
        if (i) {
          if (this.fragments = this.withoutTempSkipped(rr.addTree(i, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (n = this.parse.stoppedAt) && void 0 !== n ? n : this.state.doc.length, this.tree = i, this.parse = null, !(this.treeLen < (null != r ? r : this.state.doc.length))) return !0;
          this.parse = this.startParse();
        }
        if (e()) return !1;
      }
    });
  }
  takeTree() {
    let e;
    let r;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(r = this.parse.advance()););
    }), this.treeLen = e, this.tree = r, this.fragments = this.withoutTempSkipped(rr.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let r = w;
    w = this;
    try {
      return e();
    } finally {
      w = r;
    }
  }
  withoutTempSkipped(e) {
    for (let r; r = this.tempSkipped.pop();) e = _(e, r.from, r.to);
    return e;
  }
  changes(e, r) {
    let {
      fragments,
      tree,
      treeLen,
      viewport,
      skipped
    } = this;
    if (this.takeTree(), !e.empty) {
      let r = [];
      if (e.iterChangedRanges((e, n, i, s) => r.push({
        fromA: e,
        toA: n,
        fromB: i,
        toB: s
      })), n = rr.applyChanges(fragments, r), i = PH.empty, o = 0, a = {
        from: e.mapPos(viewport.from, -1),
        to: e.mapPos(viewport.to, 1)
      }, this.skipped.length) for (let r of (h = [], this.skipped)) {
        let n = e.mapPos(r.from, 1);
        let i = e.mapPos(r.to, -1);
        n < i && skipped.push({
          from: n,
          to: i
        });
      }
    }
    return new $$k23(this.parser, r, fragments, tree, treeLen, viewport, skipped, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
    this.viewport = e;
    let r = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let {
        from,
        to
      } = this.skipped[r];
      from < e.to && to > e.from && (this.fragments = _(this.fragments, from, to), this.skipped.splice(r--, 1));
    }
    return !(this.skipped.length >= r) && (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, r) {
    this.skipped.push({
      from: e,
      to: r
    });
  }
  static getSkippingParser(e) {
    return new class extends iX {
      createParse(r, n, i) {
        let o = i[0].from;
        let a = i[i.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let r = w;
            if (r) {
              for (let e of i) r.tempSkipped.push(e);
              e && (r.scheduleOn = r.scheduleOn ? Promise.all([r.scheduleOn, e]) : e);
            }
            this.parsedPos = a;
            return new PH(Z6.none, [], [], a - o);
          },
          stoppedAt: null,
          stopAt() { }
        };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let r = this.fragments;
    return this.treeLen >= e && r.length && 0 == r[0].from && r[0].to >= e;
  }
  static get() {
    return w;
  }
}
function _(e, r, n) {
  return rr.applyChanges(e, [{
    fromA: r,
    toA: n,
    fromB: r,
    toB: n
  }]);
}
class S {
  constructor(e) {
    this.context = e;
    this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let r = this.context.changes(e.changes, e.state);
    let n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), r.viewport.to);
    r.work(20, n) || r.takeTree();
    return new S(r);
  }
  static init(e) {
    let r = Math.min(3e3, e.doc.length);
    let n = $$k23.create(e.facet(T).parser, e, {
      from: 0,
      to: r
    });
    n.work(20, r) || n.takeTree();
    return new S(n);
  }
}
$$v8.state = sU.define({
  create: S.init,
  update(e, r) {
    for (let e of r.effects) if (e.is($$v8.setState)) return e.value;
    return r.startState.facet(T) != r.state.facet(T) ? S.init(r.state) : e.apply(r);
  }
});
let E = e => {
  let r = setTimeout(() => e(), 500);
  return () => clearTimeout(r);
};
"undefined" != typeof requestIdleCallback && (E = e => {
  let r = -1;
  let n = setTimeout(() => {
    r = requestIdleCallback(e, {
      timeout: 400
    });
  }, 100);
  return () => r < 0 ? clearTimeout(n) : cancelIdleCallback(r);
});
let A = "undefined" != typeof navigator && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null;
let C = Z9.fromClass(class {
  constructor(e) {
    this.view = e;
    this.working = null;
    this.workScheduled = 0;
    this.chunkEnd = -1;
    this.chunkBudget = -1;
    this.work = this.work.bind(this);
    this.scheduleWork();
  }
  update(e) {
    let r = this.view.state.field($$v8.state).context;
    (r.updateViewport(e.view.viewport) || this.view.viewport.to > r.treeLen) && this.scheduleWork();
    (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork());
    this.checkAsyncSchedule(r);
  }
  scheduleWork() {
    if (this.working) return;
    let {
      state
    } = this.view;
    let r = state.field($$v8.state);
    r.tree == r.context.tree && r.context.isDone(state.doc.length) || (this.working = E(this.work));
  }
  work(e) {
    this.working = null;
    let r = Date.now();
    if (this.chunkEnd < r && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = r + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let {
      state,
      viewport: {
        to
      }
    } = this.view;
    let s = state.field($$v8.state);
    if (s.tree == s.context.tree && s.context.isDone(to + 1e5)) return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !A ? Math.max(25, e.timeRemaining() - 5) : 1e9);
    let a = s.context.treeLen < to && state.doc.length > to + 1e3;
    let h = s.context.work(() => A && A() || Date.now() > o, to + (a ? 0 : 1e5));
    this.chunkBudget -= Date.now() - r;
    (h || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({
      effects: $$v8.setState.of(new S(s.context))
    }));
    this.chunkBudget > 0 && !(h && !a) && this.scheduleWork();
    this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch(e => c_(this.view.state, e)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: {
    focus() {
      this.scheduleWork();
    }
  }
});
let T = sj.define({
  combine: e => e.length ? e[0] : null,
  enables: e => [$$v8.state, C, Lz.contentAttributes.compute([e], r => {
    let n = r.facet(e);
    return n && n.name ? {
      "data-language": n.name
    } : {};
  })]
});
export class $$I11 {
  constructor(e, r = []) {
    this.language = e;
    this.support = r;
    this.extension = [e, r];
  }
}
export class $$P26 {
  constructor(e, r, n, i, s, o) {
    this.name = e;
    this.alias = r;
    this.extensions = n;
    this.filename = i;
    this.loadFunc = s;
    this.support = o;
    this.loading = null;
  }
  load() {
    return this.loading || (this.loading = this.loadFunc().then(e => this.support = e, e => {
      this.loading = null;
      return e;
    }));
  }
  static of(e) {
    let {
      load,
      support
    } = e;
    if (!load) {
      if (!support) throw RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
      r = () => Promise.resolve(support);
    }
    return new $$P26(e.name, (e.alias || []).concat(e.name).map(e => e.toLowerCase()), e.extensions || [], e.filename, load, support);
  }
  static matchFilename(e, r) {
    for (let n of e) if (n.filename && n.filename.test(r)) return n;
    let n = /\.([^.]+)$/.exec(r);
    if (n) {
      for (let r of e) if (r.extensions.indexOf(n[1]) > -1) return r;
    }
    return null;
  }
  static matchLanguageName(e, r, n = !0) {
    for (let n of (r = r.toLowerCase(), e)) if (n.alias.some(e => e == r)) return n;
    if (n) for (let n of e) for (let e of n.alias) {
      let i = r.indexOf(e);
      if (i > -1 && (e.length > 2 || !/\w/.test(r[i - 1]) && !/\w/.test(r[i + e.length]))) return n;
    }
    return null;
  }
}
let R = sj.define();
let $$M10 = sj.define({
  combine: e => {
    if (!e.length) return "  ";
    let r = e[0];
    if (!r || /\S/.test(r) || Array.from(r).some(e => e != r[0])) throw Error("Invalid indent unit: " + JSON.stringify(e[0]));
    return r;
  }
});
export function $$D27(e) {
  let r = e.facet($$M10);
  return 9 == r.charCodeAt(0) ? e.tabSize * r.length : r.length;
}
export function $$N1(e, r) {
  let n = "";
  let i = e.tabSize;
  let s = e.facet($$M10)[0];
  if ("	" == s) {
    for (; r >= i;) {
      n += "	";
      r -= i;
    }
    s = " ";
  }
  for (let e = 0; e < r; e++) n += s;
  return n;
}
export function $$$14(e, r) {
  for (let n of (e instanceof $t && (e = new $$L2(e)), e.state.facet(R))) {
    let i = n(e, r);
    if (void 0 !== i) return i;
  }
  let n = $$O21(e.state);
  return n.length >= r ? z(e, n, r) : null;
}
export class $$L2 {
  constructor(e, r = {}) {
    this.state = e;
    this.options = r;
    this.unit = $$D27(e);
  }
  lineAt(e, r = 1) {
    let n = this.state.doc.lineAt(e);
    let {
      simulateBreak,
      simulateDoubleBreak
    } = this.options;
    return null != simulateBreak && simulateBreak >= n.from && simulateBreak <= n.to ? simulateDoubleBreak && simulateBreak == e ? {
      text: "",
      from: e
    } : (r < 0 ? simulateBreak < e : simulateBreak <= e) ? {
      text: n.text.slice(simulateBreak - n.from),
      from: simulateBreak
    } : {
      text: n.text.slice(0, simulateBreak - n.from),
      from: n.from
    } : n;
  }
  textAfterPos(e, r = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
    let {
      text,
      from
    } = this.lineAt(e, r);
    return text.slice(e - from, Math.min(text.length, e + 100 - from));
  }
  column(e, r = 1) {
    let {
      text,
      from
    } = this.lineAt(e, r);
    let s = this.countColumn(text, e - from);
    let o = this.options.overrideIndentation ? this.options.overrideIndentation(from) : -1;
    o > -1 && (s += o - this.countColumn(text, text.search(/\S|$/)));
    return s;
  }
  countColumn(e, r = e.length) {
    return y$(e, this.state.tabSize, r);
  }
  lineIndent(e, r = 1) {
    let {
      text,
      from
    } = this.lineAt(e, r);
    let s = this.options.overrideIndentation;
    if (s) {
      let e = s(from);
      if (e > -1) return e;
    }
    return this.countColumn(text, text.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
export let $$j4 = new uY();
function z(e, r, n) {
  let i = r.resolveStack(n);
  let s = r.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
  if (s != i.node) {
    let e = [];
    for (let r = s; r && !(r.from == i.node.from && r.type == i.node.type); r = r.parent) e.push(r);
    for (let r = e.length - 1; r >= 0; r--) i = {
      node: e[r],
      next: i
    };
  }
  return Z(i, e, n);
}
function Z(e, r, n) {
  for (let i = e; i; i = i.next) {
    let e = U(i.node);
    if (e) return e(V.create(r, n, i));
  }
  return 0;
}
function F(e) {
  return e.pos == e.options.simulateBreak && e.options.simulateDoubleBreak;
}
function U(e) {
  let r = e.type.prop($$j4);
  if (r) return r;
  let n = e.firstChild;
  let i;
  if (n && (i = n.type.prop(uY.closedBy))) {
    let r = e.lastChild;
    let n = r && i.indexOf(r.name) > -1;
    return e => Y(e, !0, 1, void 0, n && !F(e) ? r.from : void 0);
  }
  return null == e.parent ? Q : null;
}
function Q() {
  return 0;
}
class V extends $$L2 {
  constructor(e, r, n) {
    super(e.state, e.options);
    this.base = e;
    this.pos = r;
    this.context = n;
  }
  get node() {
    return this.context.node;
  }
  static create(e, r, n) {
    return new V(e, r, n);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let r = this.state.doc.lineAt(e.from);
    for (; ;) {
      let n = e.resolve(r.from);
      for (; n.parent && n.parent.from == n.from;) n = n.parent;
      if (B(n, e)) break;
      r = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(r.from);
  }
  continue() {
    return Z(this.context.next, this.base, this.pos);
  }
}
function B(e, r) {
  for (let n = r; n; n = n.parent) if (e == n) return !0;
  return !1;
}
function q(e) {
  let r = e.node;
  let n = r.childAfter(r.from);
  let i = r.lastChild;
  if (!n) return null;
  let s = e.options.simulateBreak;
  let o = e.state.doc.lineAt(n.from);
  let a = null == s || s <= o.from ? o.to : Math.min(o.to, s);
  for (let e = n.to; ;) {
    let s = r.childAfter(e);
    if (!s || s == i) return null;
    if (!s.type.isSkipped) {
      if (s.from >= a) return null;
      let e = /^ */.exec(o.text.slice(n.to - o.from))[0].length;
      return {
        from: n.from,
        to: n.to + e
      };
    }
    e = s.to;
  }
}
export function $$W0({
  closing: e,
  align: r = !0,
  units: n = 1
}) {
  return i => Y(i, r, n, e);
}
function Y(e, r, n, i, s) {
  let o = e.textAfter;
  let a = o.match(/^\s*/)[0].length;
  let h = i && o.slice(a, a + i.length) == i || s == e.pos + a;
  let d = r ? q(e) : null;
  return d ? h ? e.column(d.from) : e.column(d.to) : e.baseIndent + (h ? 0 : e.unit * n);
}
export let $$G13 = e => e.baseIndent;
export function $$X22({
  except: e,
  units: r = 1
} = {}) {
  return n => {
    let i = e && e.test(n.textAfter);
    return n.baseIndent + (i ? 0 : r * n.unit);
  };
}
let H = 200;
export function $$K9() {
  return $t.transactionFilter.of(e => {
    if (!e.docChanged || !e.isUserEvent("input.type") && !e.isUserEvent("input.complete")) return e;
    let r = e.startState.languageDataAt("indentOnInput", e.startState.selection.main.head);
    if (!r.length) return e;
    let n = e.newDoc;
    let {
      head
    } = e.newSelection.main;
    let s = n.lineAt(head);
    if (head > s.from + H) return e;
    let o = n.sliceString(s.from, head);
    if (!r.some(e => e.test(o))) return e;
    let {
      state
    } = e;
    let h = -1;
    let d = [];
    for (let {
      head
    } of state.selection.ranges) {
      let r = state.doc.lineAt(head);
      if (r.from == h) continue;
      h = r.from;
      let n = $$$14(state, r.from);
      if (null == n) continue;
      let i = /^\s*/.exec(r.text)[0];
      let s = $$N1(state, n);
      i != s && d.push({
        from: r.from,
        to: r.from + i.length,
        insert: s
      });
    }
    return d.length ? [e, {
      changes: d,
      sequential: !0
    }] : e;
  });
}
let $$J25 = sj.define();
let $$ee15 = new uY();
export function $$et29(e) {
  let r = e.firstChild;
  let n = e.lastChild;
  return r && r.to < n.from ? {
    from: r.to,
    to: n.type.isError ? e.to : n.from
  } : null;
}
function er(e, r, n) {
  let i = $$O21(e);
  if (i.length < n) return null;
  let s = i.resolveStack(n, 1);
  let o = null;
  for (let a = s; a; a = a.next) {
    let s = a.node;
    if (s.to <= n || s.from > n) continue;
    if (o && s.from < r) break;
    let h = s.type.prop($$ee15);
    if (h && (s.to < i.length - 50 || i.length == e.doc.length || !en(s))) {
      let i = h(s, e);
      i && i.from <= n && i.from >= r && i.to > n && (o = i);
    }
  }
  return o;
}
function en(e) {
  let r = e.lastChild;
  return r && r.to == e.to && r.type.isError;
}
function ei(e, r, n) {
  for (let i of e.facet($$J25)) {
    let s = i(e, r, n);
    if (s) return s;
  }
  return er(e, r, n);
}
function es(e, r) {
  let n = r.mapPos(e.from, 1);
  let i = r.mapPos(e.to, -1);
  return n >= i ? void 0 : {
    from: n,
    to: i
  };
}
let eo = Pe.define({
  map: es
});
let ea = Pe.define({
  map: es
});
function el(e) {
  let r = [];
  for (let {
    head
  } of e.state.selection.ranges) r.some(e => e.from <= head && e.to >= head) || r.push(e.lineBlockAt(head));
  return r;
}
let eu = sU.define({
  create: () => NZ.none,
  update(e, r) {
    for (let n of (e = e.map(r.changes), r.effects)) if (n.is(eo) && !eh(e, n.value.from, n.value.to)) {
      let {
        preparePlaceholder
      } = r.state.facet(em);
      let s = preparePlaceholder ? NZ.replace({
        widget: new eO(preparePlaceholder(r.state, n.value))
      }) : eb;
      e = e.update({
        add: [s.range(n.value.from, n.value.to)]
      });
    } else n.is(ea) && (e = e.update({
      filter: (e, r) => n.value.from != e || n.value.to != r,
      filterFrom: n.value.from,
      filterTo: n.value.to
    }));
    if (r.selection) {
      let n = !1;
      let {
        head
      } = r.selection.main;
      e.between(head, head, (e, r) => {
        e < head && r > head && (n = !0);
      });
      n && (e = e.update({
        filterFrom: head,
        filterTo: head,
        filter: (e, r) => r <= head || e >= head
      }));
    }
    return e;
  },
  provide: e => Lz.decorations.from(e),
  toJSON(e, r) {
    let n = [];
    e.between(0, r.doc.length, (e, r) => {
      n.push(e, r);
    });
    return n;
  },
  fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2) throw RangeError("Invalid JSON for fold state");
    let r = [];
    for (let n = 0; n < e.length;) {
      let i = e[n++];
      let s = e[n++];
      if ("number" != typeof i || "number" != typeof s) throw RangeError("Invalid JSON for fold state");
      r.push(eb.range(i, s));
    }
    return NZ.set(r, !0);
  }
});
function ec(e, r, n) {
  var i;
  let s = null;
  e.field(eu, !1)?.between(r, n, (e, r) => {
    (!s || s.from > e) && (s = {
      from: e,
      to: r
    });
  });
  return s;
}
function eh(e, r, n) {
  let i = !1;
  e.between(r, r, (e, s) => {
    e == r && s == n && (i = !0);
  });
  return i;
}
function ed(e, r) {
  return e.field(eu, !1) ? r : r.concat(Pe.appendConfig.of(ev()));
}
function ef(e, r, n = !0) {
  let i = e.state.doc.lineAt(r.from).number;
  let s = e.state.doc.lineAt(r.to).number;
  return Lz.announce.of(`${e.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${i} ${e.state.phrase("to")} ${s}.`);
}
let $$ep18 = [{
  key: "Ctrl-Shift-[",
  mac: "Cmd-Alt-[",
  run: e => {
    for (let r of el(e)) {
      let n = ei(e.state, r.from, r.to);
      if (n) {
        e.dispatch({
          effects: ed(e.state, [eo.of(n), ef(e, n)])
        });
        return !0;
      }
    }
    return !1;
  }
}, {
  key: "Ctrl-Shift-]",
  mac: "Cmd-Alt-]",
  run: e => {
    if (!e.state.field(eu, !1)) return !1;
    let r = [];
    for (let n of el(e)) {
      let i = ec(e.state, n.from, n.to);
      i && r.push(ea.of(i), ef(e, i, !1));
    }
    r.length && e.dispatch({
      effects: r
    });
    return r.length > 0;
  }
}, {
  key: "Ctrl-Alt-[",
  run: e => {
    let {
      state
    } = e;
    let n = [];
    for (let i = 0; i < state.doc.length;) {
      let s = e.lineBlockAt(i);
      let o = ei(state, s.from, s.to);
      o && n.push(eo.of(o));
      i = (o ? e.lineBlockAt(o.to) : s).to + 1;
    }
    n.length && e.dispatch({
      effects: ed(e.state, n)
    });
    return !!n.length;
  }
}, {
  key: "Ctrl-Alt-]",
  run: e => {
    let r = e.state.field(eu, !1);
    if (!r || !r.size) return !1;
    let n = [];
    r.between(0, e.state.doc.length, (e, r) => {
      n.push(ea.of({
        from: e,
        to: r
      }));
    });
    e.dispatch({
      effects: n
    });
    return !0;
  }
}];
let eg = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "\u2026"
};
let em = sj.define({
  combine: e => QR(e, eg)
});
function ev(e) {
  let r = [eu, e_];
  e && r.push(em.of(e));
  return r;
}
function ey(e, r) {
  let {
    state
  } = e;
  let i = state.facet(em);
  let s = r => {
    let n = e.lineBlockAt(e.posAtDOM(r.target));
    let i = ec(e.state, n.from, n.to);
    i && e.dispatch({
      effects: ea.of(i)
    });
    r.preventDefault();
  };
  if (i.placeholderDOM) return i.placeholderDOM(e, s, r);
  let o = document.createElement("span");
  o.textContent = i.placeholderText;
  o.setAttribute("aria-label", state.phrase("folded code"));
  o.title = state.phrase("unfold");
  o.className = "cm-foldPlaceholder";
  o.onclick = s;
  return o;
}
let eb = NZ.replace({
  widget: new class extends xO {
    toDOM(e) {
      return ey(e, null);
    }
  }()
});
class eO extends xO {
  constructor(e) {
    super();
    this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return ey(e, this.value);
  }
}
let ex = {
  openText: "\u2304",
  closedText: "\u203A",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class ew extends wJ {
  constructor(e, r) {
    super();
    this.config = e;
    this.open = r;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let r = document.createElement("span");
    r.textContent = this.open ? this.config.openText : this.config.closedText;
    r.title = e.state.phrase(this.open ? "Fold line" : "Unfold line");
    return r;
  }
}
export function $$ek3(e = {}) {
  let r = Object.assign(Object.assign({}, ex), e);
  let n = new ew(r, !0);
  let i = new ew(r, !1);
  let s = Z9.fromClass(class {
    constructor(e) {
      this.from = e.viewport.from;
      this.markers = this.buildMarkers(e);
    }
    update(e) {
      (e.docChanged || e.viewportChanged || e.startState.facet(T) != e.state.facet(T) || e.startState.field(eu, !1) != e.state.field(eu, !1) || $$O21(e.startState) != $$O21(e.state) || r.foldingChanged(e)) && (this.markers = this.buildMarkers(e.view));
    }
    buildMarkers(e) {
      let r = new vB();
      for (let s of e.viewportLineBlocks) {
        let o = ec(e.state, s.from, s.to) ? i : ei(e.state, s.from, s.to) ? n : null;
        o && r.add(s.from, s.from, o);
      }
      return r.finish();
    }
  });
  let {
    domEventHandlers
  } = r;
  return [s, cU({
    class: "cm-foldGutter",
    markers(e) {
      var r;
      return e.plugin(s)?.markers || om.empty;
    },
    initialSpacer: () => new ew(r, !1),
    domEventHandlers: Object.assign(Object.assign({}, domEventHandlers), {
      click: (e, r, n) => {
        if (domEventHandlers.click && domEventHandlers.click(e, r, n)) return !0;
        let i = ec(e.state, r.from, r.to);
        if (i) {
          e.dispatch({
            effects: ea.of(i)
          });
          return !0;
        }
        let s = ei(e.state, r.from, r.to);
        return !!s && (e.dispatch({
          effects: eo.of(s)
        }), !0);
      }
    })
  }), ev()];
}
let e_ = Lz.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
export class $$eS17 {
  constructor(e, r) {
    let n;
    function i(e) {
      let r = G.newName();
      (n || (n = Object.create(null)))["." + r] = e;
      return r;
    }
    this.specs = e;
    let s = "string" == typeof r.all ? r.all : r.all ? i(r.all) : void 0;
    let o = r.scope;
    this.scope = o instanceof $$v8 ? e => e.prop($$p19) == o.data : o ? e => e == o : void 0;
    this.style = az(e.map(e => ({
      tag: e.tag,
      class: e.$$class || i(Object.assign({}, e, {
        tag: null
      }))
    })), {
      all: s
    }).style;
    this.module = n ? new G(n) : null;
    this.themeType = r.themeType;
  }
  static define(e, r) {
    return new $$eS17(e, r || {});
  }
}
let eE = sj.define();
let eA = sj.define({
  combine: e => e.length ? [e[0]] : null
});
function eC(e) {
  let r = e.facet(eE);
  return r.length ? r : e.facet(eA);
}
export function $$eT28(e, r) {
  let n = [eP];
  let i;
  e instanceof $$eS17 && (e.module && n.push(Lz.styleModule.of(e.module)), i = e.themeType);
  r?.fallback ? n.push(eA.of(e)) : i ? n.push(eE.computeN([Lz.darkTheme], r => r.facet(Lz.darkTheme) == ("dark" == i) ? [e] : [])) : n.push(eE.of(e));
  return n;
}
class eI {
  constructor(e) {
    this.markCache = Object.create(null);
    this.tree = $$O21(e.state);
    this.decorations = this.buildDeco(e, eC(e.state));
    this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let r = $$O21(e.state);
    let n = eC(e.state);
    let i = n != eC(e.startState);
    let {
      viewport
    } = e.view;
    let o = e.changes.mapPos(this.decoratedTo, 1);
    r.length < viewport.to && !i && r.type == this.tree.type && o >= viewport.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (r != this.tree || e.viewportChanged || i) && (this.tree = r, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = viewport.to);
  }
  buildDeco(e, r) {
    if (!r || !this.tree.length) return NZ.none;
    let n = new vB();
    for (let {
      from,
      to
    } of e.visibleRanges) DM(this.tree, r, (e, r, i) => {
      n.add(e, r, this.markCache[i] || (this.markCache[i] = NZ.mark({
        class: i
      })));
    }, from, to);
    return n.finish();
  }
}
let eP = Nb.high(Z9.fromClass(eI, {
  decorations: e => e.decorations
}));
let $$eR12 = $$eS17.define([{
  tag: _A.meta,
  color: "#404740"
}, {
  tag: _A.link,
  textDecoration: "underline"
}, {
  tag: _A.heading,
  textDecoration: "underline",
  fontWeight: "bold"
}, {
  tag: _A.emphasis,
  fontStyle: "italic"
}, {
  tag: _A.strong,
  fontWeight: "bold"
}, {
  tag: _A.strikethrough,
  textDecoration: "line-through"
}, {
  tag: _A.keyword,
  color: "#708"
}, {
  tag: [_A.atom, _A.bool, _A.url, _A.contentSeparator, _A.labelName],
  color: "#219"
}, {
  tag: [_A.literal, _A.inserted],
  color: "#164"
}, {
  tag: [_A.string, _A.deleted],
  color: "#a11"
}, {
  tag: [_A.regexp, _A.escape, _A.special(_A.string)],
  color: "#e40"
}, {
  tag: _A.definition(_A.variableName),
  color: "#00f"
}, {
  tag: _A.local(_A.variableName),
  color: "#30a"
}, {
  tag: [_A.typeName, _A.namespace],
  color: "#085"
}, {
  tag: _A.className,
  color: "#167"
}, {
  tag: [_A.special(_A.variableName), _A.macroName],
  color: "#256"
}, {
  tag: _A.definition(_A.propertyName),
  color: "#00c"
}, {
  tag: _A.comment,
  color: "#940"
}, {
  tag: _A.invalid,
  color: "#f00"
}]);
let eM = Lz.baseTheme({
  "&.cm-focused .cm-matchingBracket": {
    backgroundColor: "#328c8252"
  },
  "&.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bb555544"
  }
});
let eD = 1e4;
let eN = "()[]{}";
let e$ = sj.define({
  combine: e => QR(e, {
    afterCursor: !0,
    brackets: eN,
    maxScanDistance: eD,
    renderMatch: ez
  })
});
let eL = NZ.mark({
  class: "cm-matchingBracket"
});
let ej = NZ.mark({
  class: "cm-nonmatchingBracket"
});
function ez(e) {
  let r = [];
  let n = e.matched ? eL : ej;
  r.push(n.range(e.start.from, e.start.to));
  e.end && r.push(n.range(e.end.from, e.end.to));
  return r;
}
let eZ = [sU.define({
  create: () => NZ.none,
  update(e, r) {
    if (!r.docChanged && !r.selection) return e;
    let n = [];
    let i = r.state.facet(e$);
    for (let e of r.state.selection.ranges) {
      if (!e.empty) continue;
      let s = $$eB20(r.state, e.head, -1, i) || e.head > 0 && $$eB20(r.state, e.head - 1, 1, i) || i.afterCursor && ($$eB20(r.state, e.head, 1, i) || e.head < r.state.doc.length && $$eB20(r.state, e.head + 1, -1, i));
      s && (n = n.concat(i.renderMatch(s, r.state)));
    }
    return NZ.set(n, !0);
  },
  provide: e => Lz.decorations.from(e)
}), eM];
export function $$eF7(e = {}) {
  return [e$.of(e), eZ];
}
export let $$eU6 = new uY();
function eQ(e, r, n) {
  let i = e.prop(r < 0 ? uY.openedBy : uY.closedBy);
  if (i) return i;
  if (1 == e.name.length) {
    let i = n.indexOf(e.name);
    if (i > -1 && i % 2 == (r < 0 ? 1 : 0)) return [n[i + r]];
  }
  return null;
}
function eV(e) {
  let r = e.type.prop($$eU6);
  return r ? r(e.node) : e;
}
export function $$eB20(e, r, n, i = {}) {
  let s = i.maxScanDistance || eD;
  let o = i.brackets || eN;
  let a = $$O21(e);
  let h = a.resolveInner(r, n);
  for (let i = h; i; i = i.parent) {
    let s = eQ(i.type, n, o);
    if (s && i.from < i.to) {
      let a = eV(i);
      if (a && (n > 0 ? r >= a.from && r < a.to : r > a.from && r <= a.to)) return eq(e, r, n, i, a, s, o);
    }
  }
  return eW(e, r, n, a, h.type, s, o);
}
function eq(e, r, n, i, s, o, a) {
  let h = i.parent;
  let d = {
    from: s.from,
    to: s.to
  };
  let p = 0;
  let g = h?.cursor();
  if (g && (n < 0 ? g.childBefore(i.from) : g.childAfter(i.to))) do if (n < 0 ? g.to <= i.from : g.from >= i.to) {
    if (0 == p && o.indexOf(g.type.name) > -1 && g.from < g.to) {
      let e = eV(g);
      return {
        start: d,
        end: e ? {
          from: e.from,
          to: e.to
        } : void 0,
        matched: !0
      };
    }
    if (eQ(g.type, n, a)) p++; else if (eQ(g.type, -n, a)) {
      if (0 == p) {
        let e = eV(g);
        return {
          start: d,
          end: e && e.from < e.to ? {
            from: e.from,
            to: e.to
          } : void 0,
          matched: !1
        };
      }
      p--;
    }
  } while (n < 0 ? g.prevSibling() : g.nextSibling());
  return {
    start: d,
    matched: !1
  };
}
function eW(e, r, n, i, s, o, a) {
  let h = n < 0 ? e.sliceDoc(r - 1, r) : e.sliceDoc(r, r + 1);
  let d = a.indexOf(h);
  if (d < 0 || d % 2 == 0 != n > 0) return null;
  let p = {
    from: n < 0 ? r - 1 : r,
    to: n > 0 ? r + 1 : r
  };
  let g = e.doc.iterRange(r, n > 0 ? e.doc.length : 0);
  let m = 0;
  for (let e = 0; !g.next().done && e <= o;) {
    let o = g.value;
    n < 0 && (e += o.length);
    let h = r + e * n;
    for (function() {
      let e = n > 0 ? 0 : o.length - 1;
      let r = n > 0 ? o.length : -1;
    }(); e != r; e += n) {
      let r = a.indexOf(o[e]);
      if (!(r < 0) && i.resolveInner(h + e, 1).type == s) {
        if (r % 2 == 0 == n > 0) m++; else {
          if (1 == m) return {
            start: p,
            end: {
              from: h + e,
              to: h + e + 1
            },
            matched: r >> 1 == d >> 1
          };
          m--;
        }
      }
    }
    n > 0 && (e += o.length);
  }
  return g.done ? {
    start: p,
    matched: !1
  } : null;
}
let eY = Object.create(null);
let eG = [Z6.none];
let eX = [];
let eH = Object.create(null);
let eK = Object.create(null);
for (let [e, r] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) eK[e] = e0(eY, r);
function eJ(e, r) {
  eX.indexOf(e) > -1 || (eX.push(e), console.warn(r));
}
function e0(e, r) {
  let n = [];
  for (let i of r.split(" ")) {
    let r = [];
    for (let n of i.split(".")) {
      let i = e[n] || _A[n];
      i ? "function" == typeof i ? r.length ? r = r.map(i) : eJ(n, `Modifier ${n} used at start of tag`) : r.length ? eJ(n, `Tag ${n} used as modifier`) : r = Array.isArray(i) ? i : [i] : eJ(n, `Unknown highlighting tag ${n}`);
    }
    for (let e of r) n.push(e);
  }
  if (!n.length) return 0;
  let i = r.replace(/ /g, "_");
  let o = i + " " + n.map(e => e.id);
  let a = eH[o];
  if (a) return a.id;
  let d = eH[o] = Z6.define({
    id: eG.length,
    name: i,
    props: [pn({
      [i]: n
    })]
  });
  eG.push(d);
  return d.id;
}
function e1(e) {
  return e.length <= 4096 && /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/.test(e);
}
function e2(e) {
  for (let r = e.iter(); !r.next().done;) if (e1(r.value)) return !0;
  return !1;
}
function e5(e, r) {
  let n = r.iter();
  let i = 0;
  let s = [];
  let o = null;
  for (let {
    from,
    to
  } of e) if (!o || !(o.to > from) || !((r = o.to) >= to)) for (i + n.value.length < from && (n.next(from - (i + n.value.length)), i = from); ;) {
    let e = i;
    let r = i + n.value.length;
    if (!n.lineBreak && e1(n.value) && (o && o.to > e - 10 ? o.to = Math.min(to, r) : s.push(o = {
      from: e,
      to: Math.min(to, r)
    })), r >= to) break;
    i = r;
    n.next();
  }
  return s;
}
let e3 = {
  rtl: NZ.mark({
    class: "cm-iso",
    inclusive: !0,
    attributes: {
      dir: "rtl"
    },
    bidiIsolate: OP.RTL
  }),
  ltr: NZ.mark({
    class: "cm-iso",
    inclusive: !0,
    attributes: {
      dir: "ltr"
    },
    bidiIsolate: OP.LTR
  }),
  auto: NZ.mark({
    class: "cm-iso",
    inclusive: !0,
    attributes: {
      dir: "auto"
    },
    bidiIsolate: null
  })
};
export const Ay = $$W0;
export const EI = $$N1;
export const KB = $$L2;
export const Lv = $$ek3;
export const Oh = $$j4;
export const Q0 = $$m5;
export const Q_ = $$eU6;
export const SG = $$eF7;
export const TM = $$v8;
export const WD = $$K9;
export const Xt = $$M10;
export const Yy = $$I11;
export const Zt = $$eR12;
export const _Y = $$G13;
export const _v = $$$14;
export const b_ = $$ee15;
export const bj = $$b16;
export const cr = $$eS17;
export const f7 = $$ep18;
export const iB = $$p19;
export const jU = $$eB20;
export const mv = $$O21;
export const mz = $$X22;
export const nq = $$k23;
export const p9 = $$g24;
export const t = $$J25;
export const t$ = $$P26;
export const tp = $$D27;
export const y9 = $$eT28;
export const yd = $$et29; 
