import i, { uY } from "../vendor/579039";
let s = 0;
export class $$o4 {
  constructor(e, r, n, i) {
    this.name = e;
    this.set = r;
    this.base = n;
    this.modified = i;
    this.id = s++;
  }
  toString() {
    let {
      name
    } = this;
    for (let r of this.modified) r.name && (e = `${r.name}(${name})`);
    return name;
  }
  static define(e, r) {
    let n = "string" == typeof e ? e : "?";
    if (e instanceof $$o4 && (r = e), r?.base) throw Error("Can not derive from a modified tag");
    let i = new $$o4(n, [], null, []);
    if (i.set.push(i), r) for (let e of r.set) i.set.push(e);
    return i;
  }
  static defineModifier(e) {
    let r = new h(e);
    return e => e.modified.indexOf(r) > -1 ? e : h.get(e.base || e, e.modified.concat(r).sort((e, r) => e.id - r.id));
  }
}
let a = 0;
class h {
  constructor(e) {
    this.name = e;
    this.instances = [];
    this.id = a++;
  }
  static get(e, r) {
    if (!r.length) return e;
    let n = r[0].instances.find(n => n.base == e && d(r, n.modified));
    if (n) return n;
    let i = [];
    let s = new $$o4(e.name, i, e, r);
    for (let e of r) e.instances.push(s);
    let a = p(r);
    for (let r of e.set) if (!r.modified.length) for (let e of a) i.push(h.get(r, e));
    return s;
  }
}
function d(e, r) {
  return e.length == r.length && e.every((e, n) => e == r[n]);
}
function p(e) {
  let r = [[]];
  for (let n = 0; n < e.length; n++) for (function () {
    let i = 0;
    let s = r.length;
  }(); i < s; i++) r.push(r[i].concat(e[n]));
  return r.sort((e, r) => r.length - e.length);
}
export function $$g3(e) {
  let r = Object.create(null);
  for (let n in e) {
    let i = e[n];
    for (let e of (Array.isArray(i) || (i = [i]), n.split(" "))) if (e) {
      let n = [];
      let s = 2;
      let o = e;
      for (let r = 0;;) {
        if ("..." == o && r > 0 && r + 3 == e.length) {
          s = 1;
          break;
        }
        let i = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);
        if (!i) throw RangeError("Invalid path: " + e);
        if (n.push("*" == i[0] ? "" : '"' == i[0][0] ? JSON.parse(i[0]) : i[0]), (r += i[0].length) == e.length) break;
        let a = e[r++];
        if (r == e.length && "!" == a) {
          s = 0;
          break;
        }
        if ("/" != a) throw RangeError("Invalid path: " + e);
        o = e.slice(r);
      }
      let a = n.length - 1;
      let h = n[a];
      if (!h) throw RangeError("Invalid path: " + e);
      let d = new v(i, s, a > 0 ? n.slice(0, a) : null);
      r[h] = d.sort(r[h]);
    }
  }
  return m.add(r);
}
let m = new uY();
class v {
  constructor(e, r, n, i) {
    this.tags = e;
    this.mode = r;
    this.context = n;
    this.next = i;
  }
  get opaque() {
    return 0 == this.mode;
  }
  get inherit() {
    return 1 == this.mode;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
export function $$y2(e, r) {
  let n = Object.create(null);
  for (let r of e) if (Array.isArray(r.tag)) for (let e of r.tag) n[e.id] = r.$$class;else n[r.tag.id] = r.$$class;
  let {
    scope,
    all = null
  } = r || {};
  return {
    style: e => {
      let r = all;
      for (let i of e) for (let e of i.set) {
        let i = n[e.id];
        if (i) {
          r = r ? r + " " + i : i;
          break;
        }
      }
      return r;
    },
    scope
  };
}
function b(e, r) {
  let n = null;
  for (let i of e) {
    let e = i.style(r);
    e && (n = n ? n + " " + e : e);
  }
  return n;
}
export function $$O0(e, r, n, i = 0, s = e.length) {
  let o = new x(i, Array.isArray(r) ? r : [r], n);
  o.highlightRange(e.cursor(), i, s, "", o.highlighters);
  o.flush(s);
}
v.empty = new v([], 2, null);
class x {
  constructor(e, r, n) {
    this.at = e;
    this.highlighters = r;
    this.span = n;
    this.$$class = "";
  }
  startSpan(e, r) {
    r != this.$$class && (this.flush(e), e > this.at && (this.at = e), this.$$class = r);
  }
  flush(e) {
    e > this.at && this.$$class && this.span(this.at, e, this.$$class);
  }
  highlightRange(e, r, n, s, o) {
    let {
      type,
      from,
      to
    } = e;
    if (from >= n || to <= r) return;
    type.isTop && (o = this.highlighters.filter(e => !e.scope || e.scope(type)));
    let p = s;
    let g = w(e) || v.empty;
    let m = b(o, g.tags);
    if (m && (p && (p += " "), p += m, 1 == g.mode && (s += (s ? " " : "") + m)), this.startSpan(Math.max(r, from), p), g.opaque) return;
    let y = e.tree && e.tree.prop(uY.mounted);
    if (y && y.overlay) {
      let i = e.node.enter(y.overlay[0].from + from, 1);
      let a = this.highlighters.filter(e => !e.scope || e.scope(y.tree.type));
      let g = e.firstChild();
      for (function () {
        let m = 0;
        let v = from;
      }();; m++) {
        let b = m < y.overlay.length ? y.overlay[m] : null;
        let O = b ? b.from + from : to;
        let x = Math.max(r, v);
        let w = Math.min(n, O);
        if (x < w && g) for (; e.from < w && (this.highlightRange(e, x, w, s, o), this.startSpan(Math.min(w, e.to), p), !(e.to >= O) && e.nextSibling()););
        if (!b || O > n) break;
        (v = b.to + from) > r && (this.highlightRange(i.cursor(), Math.max(r, b.from + from), Math.min(n, v), "", a), this.startSpan(Math.min(n, v), p));
      }
      g && e.parent();
    } else if (e.firstChild()) {
      y && (s = "");
      do {
        if (e.to <= r) continue;
        if (e.from >= n) break;
        this.highlightRange(e, r, n, s, o);
        this.startSpan(Math.min(n, e.to), p);
      } while (e.nextSibling());
      e.parent();
    }
  }
}
function w(e) {
  let r = e.type.prop(m);
  for (; r && r.context && !e.matchContext(r.context);) r = r.next;
  return r || null;
}
let k = $$o4.define;
let _ = k();
let S = k();
let E = k(S);
let A = k(S);
let C = k();
let T = k(C);
let I = k(C);
let P = k();
let R = k(P);
let M = k();
let D = k();
let N = k();
let $ = k(N);
let L = k();
let $$j1 = {
  comment: _,
  lineComment: k(_),
  blockComment: k(_),
  docComment: k(_),
  name: S,
  variableName: k(S),
  typeName: E,
  tagName: k(E),
  propertyName: A,
  attributeName: k(A),
  className: k(S),
  labelName: k(S),
  namespace: k(S),
  macroName: k(S),
  literal: C,
  string: T,
  docString: k(T),
  character: k(T),
  attributeValue: k(T),
  number: I,
  integer: k(I),
  float: k(I),
  bool: k(C),
  regexp: k(C),
  escape: k(C),
  color: k(C),
  url: k(C),
  keyword: M,
  self: k(M),
  null: k(M),
  atom: k(M),
  unit: k(M),
  modifier: k(M),
  operatorKeyword: k(M),
  controlKeyword: k(M),
  definitionKeyword: k(M),
  moduleKeyword: k(M),
  operator: D,
  derefOperator: k(D),
  arithmeticOperator: k(D),
  logicOperator: k(D),
  bitwiseOperator: k(D),
  compareOperator: k(D),
  updateOperator: k(D),
  definitionOperator: k(D),
  typeOperator: k(D),
  controlOperator: k(D),
  punctuation: N,
  separator: k(N),
  bracket: $,
  angleBracket: k($),
  squareBracket: k($),
  paren: k($),
  brace: k($),
  content: P,
  heading: R,
  heading1: k(R),
  heading2: k(R),
  heading3: k(R),
  heading4: k(R),
  heading5: k(R),
  heading6: k(R),
  contentSeparator: k(P),
  list: k(P),
  quote: k(P),
  emphasis: k(P),
  strong: k(P),
  link: k(P),
  monospace: k(P),
  strikethrough: k(P),
  inserted: k(),
  deleted: k(),
  changed: k(),
  invalid: k(),
  meta: L,
  documentMeta: k(L),
  annotation: k(L),
  processingInstruction: k(L),
  definition: $$o4.defineModifier("definition"),
  constant: $$o4.defineModifier("constant"),
  function: $$o4.defineModifier("function"),
  standard: $$o4.defineModifier("standard"),
  local: $$o4.defineModifier("local"),
  special: $$o4.defineModifier("special")
};
for (let e in $$j1) {
  let r = $$j1[e];
  r instanceof $$o4 && (r.name = e);
}
$$y2([{
  tag: $$j1.link,
  class: "tok-link"
}, {
  tag: $$j1.heading,
  class: "tok-heading"
}, {
  tag: $$j1.emphasis,
  class: "tok-emphasis"
}, {
  tag: $$j1.strong,
  class: "tok-strong"
}, {
  tag: $$j1.keyword,
  class: "tok-keyword"
}, {
  tag: $$j1.atom,
  class: "tok-atom"
}, {
  tag: $$j1.bool,
  class: "tok-bool"
}, {
  tag: $$j1.url,
  class: "tok-url"
}, {
  tag: $$j1.labelName,
  class: "tok-labelName"
}, {
  tag: $$j1.inserted,
  class: "tok-inserted"
}, {
  tag: $$j1.deleted,
  class: "tok-deleted"
}, {
  tag: $$j1.literal,
  class: "tok-literal"
}, {
  tag: $$j1.string,
  class: "tok-string"
}, {
  tag: $$j1.number,
  class: "tok-number"
}, {
  tag: [$$j1.regexp, $$j1.escape, $$j1.special($$j1.string)],
  class: "tok-string2"
}, {
  tag: $$j1.variableName,
  class: "tok-variableName"
}, {
  tag: $$j1.local($$j1.variableName),
  class: "tok-variableName tok-local"
}, {
  tag: $$j1.definition($$j1.variableName),
  class: "tok-variableName tok-definition"
}, {
  tag: $$j1.special($$j1.variableName),
  class: "tok-variableName2"
}, {
  tag: $$j1.definition($$j1.propertyName),
  class: "tok-propertyName tok-definition"
}, {
  tag: $$j1.typeName,
  class: "tok-typeName"
}, {
  tag: $$j1.namespace,
  class: "tok-namespace"
}, {
  tag: $$j1.className,
  class: "tok-className"
}, {
  tag: $$j1.macroName,
  class: "tok-macroName"
}, {
  tag: $$j1.propertyName,
  class: "tok-propertyName"
}, {
  tag: $$j1.operator,
  class: "tok-operator"
}, {
  tag: $$j1.comment,
  class: "tok-comment"
}, {
  tag: $$j1.meta,
  class: "tok-meta"
}, {
  tag: $$j1.invalid,
  class: "tok-invalid"
}, {
  tag: $$j1.punctuation,
  class: "tok-punctuation"
}]);
export const DM = $$O0;
export const _A = $$j1;
export const az = $$y2;
export const pn = $$g3;
export const vw = $$o4;