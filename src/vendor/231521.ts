import { HE, ZB, Sd, eu } from "../vendor/425002";
import { vJ, I2, Iq, ff, jG, fG, lJ, bS, pT, sb, sT, gu, Ac, XK } from "../vendor/408361";
var A = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let t = new URLSearchParams();
  t.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) t.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
export function $$o5(e) {
  let t = 1;
  let n = e.getParent();
  for (; null != n;) {
    if ($$m2(n)) {
      let e = n.getParent();
      if ($$v1(e)) {
        t++;
        n = e.getParent();
        continue;
      }
      A(40);
    }
    break;
  }
  return t;
}
function s(e) {
  let t = e.getParent();
  $$v1(t) || A(40);
  let n = t;
  for (; null !== n;) $$v1(n = n.getParent()) && (t = n);
  return t;
}
function a(e) {
  return $$m2(e) && $$v1(e.getFirstChild());
}
function l(e) {
  return $$B6().append(e);
}
function u(e, t) {
  return $$m2(e) && (0 === t.length || 1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize());
}
function g(e, t) {
  e.update(() => {
    let e = vJ();
    if (null !== e) {
      let n = e.getNodes();
      if (I2(e)) {
        let r = e.getStartEndPoints();
        null === r && A(143);
        let [o] = r;
        let s = o.getNode();
        let a = s.getParent();
        if (u(s, n)) {
          let e = $$b0(t);
          if (Iq(a)) {
            s.replace(e);
            let t = $$B6();
            ff(s) && (t.setFormat(s.getFormatType()), t.setIndent(s.getIndent()));
            e.append(t);
          } else if ($$m2(s)) {
            let t = s.getParentOrThrow();
            c(e, t.getChildren());
            t.replace(e);
          }
          return;
        }
      }
      let r = new Set();
      for (let e = 0; e < n.length; e++) {
        let A = n[e];
        if (!ff(A) || !A.isEmpty() || $$m2(A) || r.has(A.getKey())) {
          if (jG(A)) {
            let e = A.getParent();
            for (; null != e;) {
              let n = e.getKey();
              if ($$v1(e)) {
                if (!r.has(n)) {
                  let i = $$b0(t);
                  c(i, e.getChildren());
                  e.replace(i);
                  r.add(n);
                }
                break;
              }
              {
                let A = e.getParent();
                if (Iq(A) && !r.has(n)) {
                  r.add(n);
                  f(e, t);
                  break;
                }
                e = A;
              }
            }
          }
        } else f(A, t);
      }
    }
  });
}
function c(e, t) {
  e.splice(e.getChildrenSize(), 0, t);
}
function f(e, t) {
  if ($$v1(e)) return e;
  let n = e.getPreviousSibling();
  let r = e.getNextSibling();
  let i = $$B6();
  if (i.setFormat(e.getFormatType()), i.setIndent(e.getIndent()), c(i, e.getChildren()), $$v1(n) && t === n.getListType()) {
    n.append(i);
    e.remove();
    $$v1(r) && t === r.getListType() && (c(n, r.getChildren()), r.remove());
    return n;
  }
  if ($$v1(r) && t === r.getListType()) {
    r.getFirstChildOrThrow().insertBefore(i);
    e.remove();
    return r;
  }
  {
    let n = $$b0(t);
    n.append(i);
    e.replace(n);
    return n;
  }
}
function d(e, t) {
  let n = e.getLastChild();
  let r = t.getFirstChild();
  n && r && a(n) && a(r) && (d(n.getFirstChild(), r.getFirstChild()), r.remove());
  let i = t.getChildren();
  i.length > 0 && e.append(...i);
  t.remove();
}
function h(...e) {
  let t = [];
  for (let n of e) if (n && "string" == typeof n) for (let [e] of n.matchAll(/\S+/g)) t.push(e);
  return t;
}
export class $$p3 extends fG {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new $$p3(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, n) {
    super(n);
    this.__value = void 0 === e ? 1 : e;
    this.__checked = t;
  }
  createDOM(e) {
    let t = document.createElement("li");
    let n = this.getParent();
    $$v1(n) && "check" === n.getListType() && I(t, this, null);
    t.value = this.__value;
    C(t, e.theme, this);
    return t;
  }
  updateDOM(e, t, n) {
    let r = this.getParent();
    $$v1(r) && "check" === r.getListType() && I(t, this, e);
    t.value = this.__value;
    C(t, n.theme, this);
    return !1;
  }
  static transform() {
    return e => {
      if ($$m2(e) || A(144), null == e.__checked) return;
      let t = e.getParent();
      $$v1(t) && "check" !== t.getListType() && null != e.getChecked() && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return {
      li: () => ({
        conversion: E,
        priority: 0
      })
    };
  }
  static importJSON(e) {
    let t = $$B6();
    t.setChecked(e.checked);
    t.setValue(e.value);
    t.setFormat(e.format);
    t.setDirection(e.direction);
    return t;
  }
  exportDOM(e) {
    let t = this.createDOM(e._config);
    t.style.textAlign = this.getFormatType();
    return {
      element: t
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      checked: this.getChecked(),
      type: "listitem",
      value: this.getValue(),
      version: 1
    };
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      if (ff(n) && this.canMergeWith(n)) {
        let e = n.getChildren();
        this.append(...e);
        n.remove();
      } else super.append(n);
    }
    return this;
  }
  replace(e, t) {
    if ($$m2(e)) return super.replace(e);
    this.setIndent(0);
    let n = this.getParentOrThrow();
    if (!$$v1(n)) return e;
    if (n.__first === this.getKey()) n.insertBefore(e);else if (n.__last === this.getKey()) n.insertAfter(e);else {
      let t = $$b0(n.getListType());
      let r = this.getNextSibling();
      for (; r;) {
        let e = r;
        r = r.getNextSibling();
        t.append(e);
      }
      n.insertAfter(e);
      e.insertAfter(t);
    }
    t && (ff(e) || A(139), this.getChildren().forEach(t => {
      e.append(t);
    }));
    this.remove();
    0 === n.getChildrenSize() && n.remove();
    return e;
  }
  insertAfter(e, t = !0) {
    let n = this.getParentOrThrow();
    if ($$v1(n) || A(39), $$m2(e)) return super.insertAfter(e, t);
    let r = this.getNextSiblings();
    if (n.insertAfter(e, t), 0 !== r.length) {
      let i = $$b0(n.getListType());
      r.forEach(e => i.append(e));
      e.insertAfter(i, t);
    }
    return e;
  }
  remove(e) {
    let t = this.getPreviousSibling();
    let n = this.getNextSibling();
    super.remove(e);
    t && n && a(t) && a(n) && (d(t.getFirstChild(), n.getFirstChild()), n.remove());
  }
  insertNewAfter(e, t = !0) {
    let n = $$B6(null == this.__checked && void 0);
    this.insertAfter(n, t);
    return n;
  }
  collapseAtStart(e) {
    let t = lJ();
    this.getChildren().forEach(e => t.append(e));
    let n = this.getParentOrThrow();
    let r = n.getParentOrThrow();
    let A = $$m2(r);
    if (1 === n.getChildrenSize()) {
      if (A) {
        n.remove();
        r.select();
      } else {
        n.insertBefore(t);
        n.remove();
        let r = e.anchor;
        let i = e.focus;
        let A = t.getKey();
        "element" === r.type && r.getNode().is(this) && r.set(A, r.offset, "element");
        "element" === i.type && i.getNode().is(this) && i.set(A, i.offset, "element");
      }
    } else {
      n.insertBefore(t);
      this.remove();
    }
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(e) {
    this.getWritable().__value = e;
  }
  getChecked() {
    let e;
    let t = this.getLatest();
    let n = this.getParent();
    $$v1(n) && (e = n.getListType());
    return "check" === e ? !!t.__checked : void 0;
  }
  setChecked(e) {
    this.getWritable().__checked = e;
  }
  toggleChecked() {
    this.setChecked(!this.__checked);
  }
  getIndent() {
    let e = this.getParent();
    if (null === e) return this.getLatest().__indent;
    let t = e.getParentOrThrow();
    let n = 0;
    for (; $$m2(t);) {
      t = t.getParentOrThrow().getParentOrThrow();
      n++;
    }
    return n;
  }
  setIndent(e) {
    "number" != typeof e && A(117);
    (e = Math.floor(e)) >= 0 || A(199);
    let t = this.getIndent();
    for (; t !== e;) t < e ? (function (e) {
      let t = new Set();
      if (a(e) || t.has(e.getKey())) return;
      let n = e.getParent();
      let r = e.getNextSibling();
      let i = e.getPreviousSibling();
      if (a(r) && a(i)) {
        let n = i.getFirstChild();
        if ($$v1(n)) {
          n.append(e);
          let i = r.getFirstChild();
          $$v1(i) && (c(n, i.getChildren()), r.remove(), t.add(r.getKey()));
        }
      } else if (a(r)) {
        let t = r.getFirstChild();
        if ($$v1(t)) {
          let n = t.getFirstChild();
          null !== n && n.insertBefore(e);
        }
      } else if (a(i)) {
        let t = i.getFirstChild();
        $$v1(t) && t.append(e);
      } else if ($$v1(n)) {
        let t = $$B6();
        let A = $$b0(n.getListType());
        t.append(A);
        A.append(e);
        i ? i.insertAfter(t) : r ? r.insertBefore(t) : n.append(t);
      }
    }(this), t++) : (function (e) {
      if (a(e)) return;
      let t = e.getParent();
      let n = t ? t.getParent() : void 0;
      if ($$v1(n ? n.getParent() : void 0) && $$m2(n) && $$v1(t)) {
        let r = t ? t.getFirstChild() : void 0;
        let i = t ? t.getLastChild() : void 0;
        if (e.is(r)) {
          n.insertBefore(e);
          t.isEmpty() && n.remove();
        } else if (e.is(i)) {
          n.insertAfter(e);
          t.isEmpty() && n.remove();
        } else {
          let r = t.getListType();
          let i = $$B6();
          let A = $$b0(r);
          i.append(A);
          e.getPreviousSiblings().forEach(e => A.append(e));
          let o = $$B6();
          let s = $$b0(r);
          o.append(s);
          c(s, e.getNextSiblings());
          n.insertBefore(i);
          n.insertAfter(o);
          n.replace(e);
        }
      }
    }(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return $$m2(e);
  }
  canReplaceWith(e) {
    return $$m2(e);
  }
  canMergeWith(e) {
    return bS(e) || $$m2(e);
  }
  extractWithChild(e, t) {
    if (!I2(t)) return !1;
    let n = t.anchor.getNode();
    let r = t.focus.getNode();
    return this.isParentOf(n) && this.isParentOf(r) && this.getTextContent().length === t.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return $$b0("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function C(e, t, n) {
  let i;
  let A = [];
  let o = [];
  let s = t.list;
  let a = s ? s.listitem : void 0;
  if (s && s.nested && (i = s.nested.listitem), void 0 !== a && A.push(...h(a)), s) {
    let e = n.getParent();
    let t = $$v1(e) && "check" === e.getListType();
    let r = n.getChecked();
    t && !r || o.push(s.listitemUnchecked);
    t && r || o.push(s.listitemChecked);
    t && A.push(r ? s.listitemChecked : s.listitemUnchecked);
  }
  if (void 0 !== i) {
    let e = h(i);
    n.getChildren().some(e => $$v1(e)) ? A.push(...e) : o.push(...e);
  }
  o.length > 0 && HE(e, ...o);
  A.length > 0 && ZB(e, ...A);
}
function I(e, t, n, r) {
  $$v1(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false"));
}
function E(e) {
  if (e.classList.contains("task-list-item")) {
    for (let t of e.children) if ("INPUT" === t.tagName) return "checkbox" !== t.getAttribute("type") ? {
      node: null
    } : {
      node: $$B6(t.hasAttribute("checked"))
    };
  }
  let t = e.getAttribute("aria-checked");
  return {
    node: $$B6("true" === t || "false" !== t && void 0)
  };
}
export function $$B6(e) {
  return pT(new $$p3(void 0, e));
}
export function $$m2(e) {
  return e instanceof $$p3;
}
export class $$y8 extends fG {
  static getType() {
    return "list";
  }
  static clone(e) {
    return new $$y8(e.__listType || w[e.__tag], e.__start, e.__key);
  }
  constructor(e, t, n) {
    super(n);
    let r = w[e] || e;
    this.__listType = r;
    this.__tag = "number" === r ? "ol" : "ul";
    this.__start = t;
  }
  getTag() {
    return this.__tag;
  }
  setListType(e) {
    let t = this.getWritable();
    t.__listType = e;
    t.__tag = "number" === e ? "ol" : "ul";
  }
  getListType() {
    return this.__listType;
  }
  getStart() {
    return this.__start;
  }
  createDOM(e, t) {
    let n = this.__tag;
    let r = document.createElement(n);
    1 !== this.__start && r.setAttribute("start", String(this.__start));
    r.__lexicalListType = this.__listType;
    _(r, e.theme, this);
    return r;
  }
  updateDOM(e, t, n) {
    return e.__tag !== this.__tag || (_(t, n.theme, this), !1);
  }
  static transform() {
    return e => {
      $$v1(e) || A(163);
      (function (e) {
        let t = e.getNextSibling();
        $$v1(t) && e.getListType() === t.getListType() && d(e, t);
      })(e);
      (function (e) {
        let t = "check" !== e.getListType();
        let n = e.getStart();
        for (let r of e.getChildren()) $$m2(r) && (r.getValue() !== n && r.setValue(n), t && null != r.getLatest().__checked && r.setChecked(void 0), $$v1(r.getFirstChild()) || n++);
      })(e);
    };
  }
  static importDOM() {
    return {
      ol: () => ({
        conversion: D,
        priority: 0
      }),
      ul: () => ({
        conversion: D,
        priority: 0
      })
    };
  }
  static importJSON(e) {
    let t = $$b0(e.listType, e.start);
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    element && sb(element) && (1 !== this.__start && element.setAttribute("start", String(this.__start)), "check" === this.__listType && element.setAttribute("__lexicalListType", "check"));
    return {
      element
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      listType: this.getListType(),
      start: this.getStart(),
      tag: this.getTag(),
      type: "list",
      version: 1
    };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      if ($$m2(n)) super.append(n);else {
        let e = $$B6();
        if ($$v1(n)) e.append(n);else if (ff(n)) {
          let t = sT(n.getTextContent());
          e.append(t);
        } else e.append(n);
        super.append(e);
      }
    }
    return this;
  }
  extractWithChild(e) {
    return $$m2(e);
  }
}
function _(e, t, n) {
  let i = [];
  let A = [];
  let s = t.list;
  if (void 0 !== s) {
    let e;
    let t = s[`${n.__tag}Depth`] || [];
    let r = $$o5(n) - 1;
    let a = r % t.length;
    let l = t[a];
    let u = s[n.__tag];
    let g = s.nested;
    let c = s.checklist;
    if (void 0 !== g && g.list && (e = g.list), void 0 !== u && i.push(u), void 0 !== c && "check" === n.__listType && i.push(c), void 0 !== l) {
      i.push(...h(l));
      for (let e = 0; e < t.length; e++) e !== a && A.push(n.__tag + e);
    }
    if (void 0 !== e) {
      let t = h(e);
      r > 1 ? i.push(...t) : A.push(...t);
    }
  }
  A.length > 0 && HE(e, ...A);
  i.length > 0 && ZB(e, ...i);
}
function Q(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if ($$m2(r)) {
      t.push(r);
      let e = r.getChildren();
      e.length > 1 && e.forEach(e => {
        $$v1(e) && t.push(l(e));
      });
    } else t.push(l(r));
  }
  return t;
}
function D(e) {
  let t = e.nodeName.toLowerCase();
  let n = null;
  "ol" === t ? n = $$b0("number", e.start) : "ul" === t && (n = !function (e) {
    if ("check" === e.getAttribute("__lexicallisttype") || e.classList.contains("contains-task-list")) return !0;
    for (let t of e.childNodes) if (sb(t) && t.hasAttribute("aria-checked")) return !0;
    return !1;
  }(e) ? $$b0("bullet") : $$b0("check"));
  return {
    after: Q,
    node: n
  };
}
let w = {
  ol: "number",
  ul: "bullet"
};
export function $$b0(e, t = 1) {
  return pT(new $$y8(e, t));
}
export function $$v1(e) {
  return e instanceof $$y8;
}
let $$k7 = gu("INSERT_UNORDERED_LIST_COMMAND");
let $$$$x9 = gu("INSERT_ORDERED_LIST_COMMAND");
gu("INSERT_CHECK_LIST_COMMAND");
let S = gu("REMOVE_LIST_COMMAND");
export function $$F4(e) {
  return Sd(e.registerCommand($$$$x9, () => (g(e, "number"), !0), Ac), e.registerCommand($$k7, () => (g(e, "bullet"), !0), Ac), e.registerCommand(S, () => (function (e) {
    e.update(() => {
      let e = vJ();
      if (I2(e)) {
        let t = new Set();
        let n = e.getNodes();
        let A = e.anchor.getNode();
        if (u(A, n)) t.add(s(A));else for (let e = 0; e < n.length; e++) {
          let A = n[e];
          if (jG(A)) {
            let e = eu(A, $$p3);
            null != e && t.add(s(e));
          }
        }
        for (let n of t) {
          let t = n;
          for (let r of function e(t) {
            let n = [];
            let r = t.getChildren().filter($$m2);
            for (let t = 0; t < r.length; t++) {
              let i = r[t];
              let A = i.getFirstChild();
              $$v1(A) ? n = n.concat(e(A)) : n.push(i);
            }
            return n;
          }(n)) {
            let n = lJ();
            c(n, r.getChildren());
            t.insertAfter(n);
            t = n;
            r.__key === e.anchor.key && e.anchor.set(n.getKey(), 0, "element");
            r.__key === e.focus.key && e.focus.set(n.getKey(), 0, "element");
            r.remove();
          }
          n.remove();
        }
      }
    });
  }(e), !0), Ac), e.registerCommand(XK, () => !!function () {
    let e;
    let t = vJ();
    if (!I2(t) || !t.isCollapsed()) return !1;
    let n = t.anchor.getNode();
    if (!$$m2(n) || 0 !== n.getChildrenSize()) return !1;
    let r = s(n);
    let o = n.getParent();
    $$v1(o) || A(40);
    let a = o.getParent();
    if (Iq(a)) {
      e = lJ();
      r.insertAfter(e);
    } else {
      if (!$$m2(a)) return !1;
      e = $$B6();
      a.insertAfter(e);
    }
    e.select();
    let l = n.getNextSiblings();
    if (l.length > 0) {
      let t = $$b0(o.getListType());
      if (bS(e)) e.insertAfter(t);else {
        let n = $$B6();
        n.append(t);
        e.insertAfter(n);
      }
      l.forEach(e => {
        e.remove();
        t.append(e);
      });
    }
    (function (e) {
      let t = e;
      for (; null == t.getNextSibling() && null == t.getPreviousSibling();) {
        let e = t.getParent();
        if (null == e || !$$m2(t) && !$$v1(t)) break;
        t = e;
      }
      t.remove();
    })(n);
    return !0;
  }(), Ac));
}
export const DE = $$b0;
export const HY = $$v1;
export const Mz = $$m2;
export const YW = $$p3;
export const cz = $$F4;
export const g2 = $$o5;
export const i = $$B6;
export const q7 = $$k7;
export const v5 = $$y8;
export const x = $$$$x9;