import { d as _$$d, g as _$$g } from "../vendor/797080";
import { SD, Xg, Cb, Rk } from "../vendor/850527";
import { xj, ZB, Bt, Sd, mB } from "../vendor/425002";
import { I2, vJ, ev, oq, ff, BE, kF, Ni, GM, u5, d as _$$d2, LY, i0, gu, fG, sb, lJ, pT, xL, Cy, d8, RT, Wu, jZ, hi, vi, bM, $e, mB as _$$mB, fU, FE, XK, YW, H2, Pi as _$$Pi, si, UD, B$, bb, AX, JM, gC, hV, w$, $$if, Q$, Sr, uT, C as _$$C, n1, Tg, ri, HY, e1, VS, w as _$$w, Z$ } from "../vendor/408361";
var h = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let d = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let p = e => d ? (e || window).getSelection() : null;
function g(e, r, n) {
  let s = e.getData("application/x-lexical-editor");
  if (s) try {
    let e = JSON.parse(s);
    if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) return m(n, b(e.nodes), r);
  } catch (e) {}
  let o = e.getData("text/html");
  if (o) try {
    let e = new DOMParser().parseFromString(o, "text/html");
    return m(n, _$$d(n, e), r);
  } catch (e) {}
  let h = e.getData("text/plain") || e.getData("text/uri-list");
  if (null != h) {
    if (I2(r)) {
      let e = h.split(/(\r?\n|\t)/);
      "" === e[e.length - 1] && e.pop();
      for (let r = 0; r < e.length; r++) {
        let n = vJ();
        if (I2(n)) {
          let i = e[r];
          "\n" === i || "\r\n" === i ? n.insertParagraph() : "	" === i ? n.insertNodes([ev()]) : n.insertText(i);
        }
      }
    } else r.insertRawText(h);
  }
}
function m(e, r, n) {
  e.dispatchCommand(oq, {
    nodes: r,
    selection: n
  }) || n.insertNodes(r);
}
function v(e, r, n, i = []) {
  let o = null === r || n.isSelected(r);
  let d = ff(n) && n.excludeFromCopy("html");
  let p = n;
  if (null !== r) {
    let e = BE(n);
    p = e = kF(e) && null !== r ? SD(r, e) : e;
  }
  let g = ff(p) ? p.getChildren() : [];
  let m = function (e) {
    let r = e.exportJSON();
    let n = e.constructor;
    r.type !== n.getType() && h(58, n.name);
    ff(e) && (Array.isArray(r.children) || h(59, n.name));
    return r;
  }(p);
  if (kF(p)) {
    let e = p.__text;
    e.length > 0 ? m.text = e : o = !1;
  }
  for (let i = 0; i < g.length; i++) {
    let s = g[i];
    let h = v(e, r, s, m.children);
    !o && ff(n) && h && n.extractWithChild(s, r, "clone") && (o = !0);
  }
  if (o && !d) i.push(m);else if (Array.isArray(m.children)) for (let e = 0; e < m.children.length; e++) {
    let r = m.children[e];
    i.push(r);
  }
  return o;
}
function y(e, r) {
  let n = [];
  let i = Ni().getChildren();
  for (let s = 0; s < i.length; s++) v(e, r, i[s], n);
  return {
    namespace: e._config.namespace,
    nodes: n
  };
}
function b(e) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    let o = GM(i);
    kF(o) && Xg(o);
    r.push(o);
  }
  return r;
}
let O = null;
async function x(e, r, n) {
  if (null !== O) return !1;
  if (null !== r) return new Promise((i, s) => {
    e.update(() => {
      i(w(e, r, n));
    });
  });
  let i = e.getRootElement();
  let s = e._window?.document;
  let h = p(e._window);
  if (null === i || null === h) return !1;
  let d = s.createElement("span");
  d.style.cssText = "position: fixed; top: -1000px;";
  d.append(s.createTextNode("#"));
  i.append(d);
  let g = new Range();
  g.setStart(d, 0);
  g.setEnd(d, 1);
  h.removeAllRanges();
  h.addRange(g);
  return new Promise((r, i) => {
    let h = e.registerCommand(u5, i => (xj(i, ClipboardEvent) && (h(), null !== O && (window.clearTimeout(O), O = null), r(w(e, i, n))), !0), _$$d2);
    O = window.setTimeout(() => {
      h();
      O = null;
      r(!1);
    }, 50);
    s.execCommand("copy");
    d.remove();
  });
}
function w(e, r, n) {
  if (void 0 === n) {
    let r = p(e._window);
    if (!r) return !1;
    let i = r.anchorNode;
    let s = r.focusNode;
    if (null !== i && null !== s && !LY(e, i, s)) return !1;
    let o = vJ();
    if (null === o) return !1;
    n = _(o);
  }
  r.preventDefault();
  let i = r.clipboardData;
  return null !== i && (S(i, n), !0);
}
let k = [["text/html", function (e, r = vJ()) {
  null == r && h(166);
  return I2(r) && r.isCollapsed() || 0 === r.getNodes().length ? "" : _$$g(e, r);
}], ["application/x-lexical-editor", function (e, r = vJ()) {
  null == r && h(166);
  return I2(r) && r.isCollapsed() || 0 === r.getNodes().length ? null : JSON.stringify(y(e, r));
}]];
function _(e = vJ()) {
  let r = {
    "text/plain": e ? e.getTextContent() : ""
  };
  if (e) {
    let n = i0();
    for (let [i, s] of k) {
      let o = s(n, e);
      null !== o && (r[i] = o);
    }
  }
  return r;
}
function S(e, r) {
  for (let n in r) {
    let i = r[n];
    void 0 !== i && e.setData(n, i);
  }
}
function E(e, r) {
  if (void 0 !== document.caretRangeFromPoint) {
    let n = document.caretRangeFromPoint(e, r);
    return null === n ? null : {
      node: n.startContainer,
      offset: n.startOffset
    };
  }
  if ("undefined" !== document.caretPositionFromPoint) {
    let n = document.caretPositionFromPoint(e, r);
    return null === n ? null : {
      node: n.offsetNode,
      offset: n.offset
    };
  }
  return null;
}
let A = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let C = A && "documentMode" in document ? document.documentMode : null;
let T = !(!A || !("InputEvent" in window) || C) && "getTargetRanges" in new window.InputEvent("input");
let I = A && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let P = A && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let R = A && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let M = A && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !R;
let D = gu("DRAG_DROP_PASTE_FILE");
export class $$N5 extends fG {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new $$N5(e.__key);
  }
  constructor(e) {
    super(e);
  }
  createDOM(e) {
    let r = document.createElement("blockquote");
    ZB(r, e.theme.quote);
    return r;
  }
  updateDOM(e, r) {
    return !1;
  }
  static importDOM() {
    return {
      blockquote: e => ({
        conversion: F,
        priority: 0
      })
    };
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    if (element && sb(element)) {
      this.isEmpty() && element.append(document.createElement("br"));
      let e = this.getFormatType();
      element.style.textAlign = e;
      let n = this.getDirection();
      n && (element.dir = n);
    }
    return {
      element
    };
  }
  static importJSON(e) {
    let r = $$$1();
    r.setFormat(e.format);
    r.setIndent(e.indent);
    r.setDirection(e.direction);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "quote"
    };
  }
  insertNewAfter(e, r) {
    let n = lJ();
    let i = this.getDirection();
    n.setDirection(i);
    this.insertAfter(n, r);
    return n;
  }
  collapseAtStart() {
    let e = lJ();
    this.getChildren().forEach(r => e.append(r));
    this.replace(e);
    return !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
export function $$$1() {
  return pT(new $$N5());
}
export function $$L3(e) {
  return e instanceof $$N5;
}
export class $$j4 extends fG {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new $$j4(e.__tag, e.__key);
  }
  constructor(e, r) {
    super(r);
    this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  createDOM(e) {
    let r = this.__tag;
    let n = document.createElement(r);
    let i = e.theme.heading;
    if (void 0 !== i) {
      let e = i[r];
      ZB(n, e);
    }
    return n;
  }
  updateDOM(e, r) {
    return !1;
  }
  static importDOM() {
    return {
      h1: e => ({
        conversion: Z,
        priority: 0
      }),
      h2: e => ({
        conversion: Z,
        priority: 0
      }),
      h3: e => ({
        conversion: Z,
        priority: 0
      }),
      h4: e => ({
        conversion: Z,
        priority: 0
      }),
      h5: e => ({
        conversion: Z,
        priority: 0
      }),
      h6: e => ({
        conversion: Z,
        priority: 0
      }),
      p: e => {
        let r = e.firstChild;
        return null !== r && z(r) ? {
          conversion: () => ({
            node: null
          }),
          priority: 3
        } : null;
      },
      span: e => z(e) ? {
        conversion: e => ({
          node: $$U0("h1")
        }),
        priority: 3
      } : null
    };
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    if (element && sb(element)) {
      this.isEmpty() && element.append(document.createElement("br"));
      let e = this.getFormatType();
      element.style.textAlign = e;
      let n = this.getDirection();
      n && (element.dir = n);
    }
    return {
      element
    };
  }
  static importJSON(e) {
    let r = $$U0(e.tag);
    r.setFormat(e.format);
    r.setIndent(e.indent);
    r.setDirection(e.direction);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      tag: this.getTag(),
      type: "heading",
      version: 1
    };
  }
  insertNewAfter(e, r = !0) {
    let n = e ? e.anchor.offset : 0;
    let i = this.getLastDescendant();
    let s = i && (!e || e.anchor.key !== i.getKey() || n !== i.getTextContentSize()) && e ? $$U0(this.getTag()) : lJ();
    let o = this.getDirection();
    if (s.setDirection(o), this.insertAfter(s, r), 0 === n && !this.isEmpty() && e) {
      let e = lJ();
      e.select();
      this.replace(e, !0);
    }
    return s;
  }
  collapseAtStart() {
    let e = this.isEmpty() ? lJ() : $$U0(this.getTag());
    this.getChildren().forEach(r => e.append(r));
    this.replace(e);
    return !0;
  }
  extractWithChild() {
    return !0;
  }
}
function z(e) {
  return "span" === e.nodeName.toLowerCase() && "26pt" === e.style.fontSize;
}
function Z(e) {
  let r = e.nodeName.toLowerCase();
  let n = null;
  "h1" !== r && "h2" !== r && "h3" !== r && "h4" !== r && "h5" !== r && "h6" !== r || (n = $$U0(r), null !== e.style && n.setFormat(e.style.textAlign));
  return {
    node: n
  };
}
function F(e) {
  let r = $$$1();
  null !== e.style && r.setFormat(e.style.textAlign);
  return {
    node: r
  };
}
export function $$U0(e) {
  return pT(new $$j4(e));
}
export function $$Q2(e) {
  return e instanceof $$j4;
}
function V(e) {
  let r = null;
  if (xj(e, DragEvent) ? r = e.dataTransfer : xj(e, ClipboardEvent) && (r = e.clipboardData), null === r) return [!1, [], !1];
  let n = r.types;
  let i = n.includes("Files");
  let s = n.includes("text/html") || n.includes("text/plain");
  return [i, Array.from(r.files), s];
}
function B(e) {
  let r = vJ();
  if (!I2(r)) return !1;
  let n = new Set();
  let i = r.getNodes();
  for (let r = 0; r < i.length; r++) {
    let s = i[r];
    let h = s.getKey();
    if (n.has(h)) continue;
    let d = Bt(s, e => ff(e) && !e.isInline());
    if (null === d) continue;
    let p = d.getKey();
    d.canIndent() && !n.has(p) && (n.add(p), e(d));
  }
  return n.size > 0;
}
function q(e) {
  let r = xL(e);
  return Cy(r);
}
export function $$W6(e) {
  return Sd(e.registerCommand(d8, e => {
    let r = vJ();
    return !!RT(r) && (r.clear(), !0);
  }, 0), e.registerCommand(Wu, e => {
    let r = vJ();
    return !!I2(r) && (r.deleteCharacter(e), !0);
  }, jZ), e.registerCommand(hi, e => {
    let r = vJ();
    return !!I2(r) && (r.deleteWord(e), !0);
  }, jZ), e.registerCommand(vi, e => {
    let r = vJ();
    return !!I2(r) && (r.deleteLine(e), !0);
  }, jZ), e.registerCommand(bM, r => {
    let n = vJ();
    if ("string" == typeof r) null !== n && n.insertText(r);else {
      if (null === n) return !1;
      let i = r.dataTransfer;
      if (null != i) g(i, n, e);else if (I2(n)) {
        let e = r.data;
        e && n.insertText(e);
        return !0;
      }
    }
    return !0;
  }, jZ), e.registerCommand($e, () => {
    let e = vJ();
    return !!I2(e) && (e.removeText(), !0);
  }, jZ), e.registerCommand(_$$mB, e => {
    let r = vJ();
    return !!I2(r) && (r.formatText(e), !0);
  }, jZ), e.registerCommand(fU, e => {
    let r = vJ();
    if (!I2(r) && !RT(r)) return !1;
    for (let n of r.getNodes()) {
      let r = Bt(n, e => ff(e) && !e.isInline());
      null !== r && r.setFormat(e);
    }
    return !0;
  }, jZ), e.registerCommand(FE, e => {
    let r = vJ();
    return !!I2(r) && (r.insertLineBreak(e), !0);
  }, jZ), e.registerCommand(XK, () => {
    let e = vJ();
    return !!I2(e) && (e.insertParagraph(), !0);
  }, jZ), e.registerCommand(YW, () => (H2([ev()]), !0), jZ), e.registerCommand(_$$Pi, () => B(e => {
    let r = e.getIndent();
    e.setIndent(r + 1);
  }), jZ), e.registerCommand(si, () => B(e => {
    let r = e.getIndent();
    r > 0 && e.setIndent(r - 1);
  }), jZ), e.registerCommand(UD, e => {
    let r = vJ();
    if (RT(r) && !q(e.target)) {
      let e = r.getNodes();
      if (e.length > 0) {
        e[0].selectPrevious();
        return !0;
      }
    } else if (I2(r)) {
      let n = B$(r.focus, !0);
      if (!e.shiftKey && Cy(n) && !n.isIsolated() && !n.isInline()) {
        n.selectPrevious();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, jZ), e.registerCommand(bb, e => {
    let r = vJ();
    if (RT(r)) {
      let e = r.getNodes();
      if (e.length > 0) {
        e[0].selectNext(0, 0);
        return !0;
      }
    } else if (I2(r)) {
      if (function (e) {
        let r = e.focus;
        return "root" === r.key && r.offset === Ni().getChildrenSize();
      }(r)) {
        e.preventDefault();
        return !0;
      }
      let n = B$(r.focus, !1);
      if (!e.shiftKey && Cy(n) && !n.isIsolated() && !n.isInline()) {
        n.selectNext();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, jZ), e.registerCommand(AX, e => {
    let r = vJ();
    if (RT(r)) {
      let n = r.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectPrevious();
        return !0;
      }
    }
    if (!I2(r)) return !1;
    if (Cb(r, !0)) {
      let n = e.shiftKey;
      e.preventDefault();
      Rk(r, n, !0);
      return !0;
    }
    return !1;
  }, jZ), e.registerCommand(JM, e => {
    let r = vJ();
    if (RT(r) && !q(e.target)) {
      let n = r.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectNext(0, 0);
        return !0;
      }
    }
    if (!I2(r)) return !1;
    let n = e.shiftKey;
    return !!Cb(r, !1) && (e.preventDefault(), Rk(r, n, !1), !0);
  }, jZ), e.registerCommand(gC, r => {
    if (q(r.target)) return !1;
    let n = vJ();
    if (!I2(n)) return !1;
    r.preventDefault();
    let {
      anchor
    } = n;
    let s = anchor.getNode();
    return n.isCollapsed() && 0 === anchor.offset && !hV(s) && mB(s).getIndent() > 0 ? e.dispatchCommand(si, void 0) : e.dispatchCommand(Wu, !0);
  }, jZ), e.registerCommand(w$, r => {
    if (q(r.target)) return !1;
    let n = vJ();
    return !!I2(n) && (r.preventDefault(), e.dispatchCommand(Wu, !1));
  }, jZ), e.registerCommand($$if, r => {
    let n = vJ();
    if (!I2(n)) return !1;
    if (null !== r) {
      if ((P || I || M) && T) return !1;
      if (r.preventDefault(), r.shiftKey) return e.dispatchCommand(FE, !1);
    }
    return e.dispatchCommand(XK, void 0);
  }, jZ), e.registerCommand(Q$, () => {
    let r = vJ();
    return !!I2(r) && (e.blur(), !0);
  }, jZ), e.registerCommand(Sr, r => {
    let [, n] = V(r);
    if (n.length > 0) {
      let i = E(r.clientX, r.clientY);
      if (null !== i) {
        let {
          offset,
          node
        } = i;
        let o = xL(node);
        if (null !== o) {
          let e = uT();
          if (kF(o)) {
            e.anchor.set(o.getKey(), offset, "text");
            e.focus.set(o.getKey(), offset, "text");
          } else {
            let r = o.getParentOrThrow().getKey();
            let n = o.getIndexWithinParent() + 1;
            e.anchor.set(r, n, "element");
            e.focus.set(r, n, "element");
          }
          let n = _$$C(e);
          n1(n);
        }
        e.dispatchCommand(D, n);
      }
      r.preventDefault();
      return !0;
    }
    let i = vJ();
    return !!I2(i);
  }, jZ), e.registerCommand(Tg, e => {
    let [r] = V(e);
    let n = vJ();
    return !(r && !I2(n));
  }, jZ), e.registerCommand(ri, e => {
    let [r] = V(e);
    let n = vJ();
    if (r && !I2(n)) return !1;
    let i = E(e.clientX, e.clientY);
    if (null !== i) {
      let r = xL(i.node);
      Cy(r) && e.preventDefault();
    }
    return !0;
  }, jZ), e.registerCommand(HY, () => (e1(), !0), jZ), e.registerCommand(u5, r => (x(e, xj(r, ClipboardEvent) ? r : null), !0), jZ), e.registerCommand(VS, r => (async function (e, r) {
    await x(r, xj(e, ClipboardEvent) ? e : null);
    r.update(() => {
      let e = vJ();
      I2(e) ? e.removeText() : RT(e) && e.getNodes().forEach(e => e.remove());
    });
  }(r, e), !0), jZ), e.registerCommand(_$$w, r => {
    let [, n, i] = V(r);
    return n.length > 0 && !i ? (e.dispatchCommand(D, n), !0) : !Z$(r.target) && null !== vJ() && (function (e, r) {
      e.preventDefault();
      r.update(() => {
        let n = vJ();
        let i = xj(e, InputEvent) || xj(e, KeyboardEvent) ? null : e.clipboardData;
        null != i && null !== n && g(i, n, r);
      }, {
        tag: "paste"
      });
    }(r, e), !0);
  }, jZ));
}
export const fi = $$U0;
export const xi = $$$1;
export const Pi = $$Q2;
export const jd = $$L3;
export const jL = $$j4;
export const dJ = $$N5;
export const ZI = $$W6;