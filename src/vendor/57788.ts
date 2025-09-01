import { TW } from "../vendor/601638";
import { A, t as _$$t } from "../vendor/254850";
import { sD, bq } from "../vendor/400554";
import { Nf } from "../vendor/790637";
import { ME } from "../vendor/49330";
import { v } from "../vendor/883011";
import { e as _$$e } from "../vendor/344038";
class o {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(e) {
    if (!sD(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
    let t = [];
    let a = e;
    let u = e;
    for (this._currentNode = e; a && a !== this.root;) if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      let e = a;
      let n = this._doc.createTreeWalker(e, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      t.push(n);
      n.currentNode = u;
      this._currentSetFor.add(n);
      a = u = e.host;
    } else a = a.parentNode;
    let n = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    t.push(n);
    n.currentNode = u;
    this._currentSetFor.add(n);
    this._walkerStack = t;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let e = this.currentNode;
    let t = this.nextNode();
    return sD(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
  }
  lastChild() {
    let e = this._walkerStack[0].lastChild();
    e && (this.currentNode = e);
    return e;
  }
  nextNode() {
    let e = this._walkerStack[0].nextNode();
    if (e) {
      if (e.shadowRoot) {
        var t;
        let a;
        if ("function" == typeof this.filter ? a = this.filter(e) : this.filter?.acceptNode && (a = this.filter.acceptNode(e)), a === NodeFilter.FILTER_ACCEPT) {
          this.currentNode = e;
          return e;
        }
        let u = this.nextNode();
        u && (this.currentNode = u);
        return u;
      }
      e && (this.currentNode = e);
      return e;
    }
    if (!(this._walkerStack.length > 1)) return null;
    {
      this._walkerStack.shift();
      let e = this.nextNode();
      e && (this.currentNode = e);
      return e;
    }
  }
  previousNode() {
    let e = this._walkerStack[0];
    if (e.currentNode === e.root) {
      if (this._currentSetFor.has(e) && (this._currentSetFor.$$delete(e), this._walkerStack.length > 1)) {
        this._walkerStack.shift();
        let e = this.previousNode();
        e && (this.currentNode = e);
        return e;
      }
      return null;
    }
    let t = e.previousNode();
    if (t) {
      if (t.shadowRoot) {
        var a;
        let e;
        if ("function" == typeof this.filter ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) {
          t && (this.currentNode = t);
          return t;
        }
        let u = this.lastChild();
        u && (this.currentNode = u);
        return u;
      }
      t && (this.currentNode = t);
      return t;
    }
    if (!(this._walkerStack.length > 1)) return null;
    {
      this._walkerStack.shift();
      let e = this.previousNode();
      e && (this.currentNode = e);
      return e;
    }
  }
  nextSibling() {
    return null;
  }
  previousSibling() {
    return null;
  }
  parentNode() {
    return null;
  }
  constructor(e, t, a, u) {
    this._walkerStack = [];
    this._currentSetFor = new Set();
    this._acceptNode = e => {
      if (e.nodeType === Node.ELEMENT_NODE) {
        var t;
        let a = e.shadowRoot;
        if (a) {
          let e = this._doc.createTreeWalker(a, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          this._walkerStack.unshift(e);
          return NodeFilter.FILTER_ACCEPT;
        }
        if ("function" == typeof this.filter) return this.filter(e);
        if (this.filter?.acceptNode) return this.filter.acceptNode(e);
        if (null === this.filter) return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    };
    this._doc = e;
    this.root = t;
    this.filter = null != u ? u : null;
    this.whatToShow = null != a ? a : NodeFilter.SHOW_ALL;
    this._currentNode = t;
    this._walkerStack.unshift(e.createTreeWalker(t, a, this._acceptNode));
    let n = t.shadowRoot;
    if (n) {
      let e = this._doc.createTreeWalker(n, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(e);
    }
  }
}
function c(e, t) {
  return !!e && !!t && t.some(t => t.contains(e));
}
function m(e, t = !1) {
  if (null == e || t) {
    if (null != e) try {
      e.focus();
    } catch {}
  } else try {
    !function (e) {
      let t = TW(e);
      let a = bq(t);
      "virtual" === ME() ? v(() => {
        bq(t) === a && e.isConnected && _$$e(e);
      }) : _$$e(e);
    }(e);
  } catch {}
}
export function $$h1(e, t, a) {
  var r;
  var l;
  var s;
  let d = t?.tabbable ? A : _$$t;
  let m = e?.nodeType === Node.ELEMENT_NODE ? e : null;
  let h = TW(m);
  r = e || h;
  l = NodeFilter.SHOW_ELEMENT;
  s = {
    acceptNode(e) {
      var n;
      return t?.from?.contains(e) || t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (!function (e) {
        if (e.checked) return !0;
        let t = [];
        if (e.form) {
          var a;
          var n;
          let u = e.form || n.elements?.namedItem(e.name);
          t = [...(null != u ? u : [])];
        } else t = [...TW(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
        return !!t && !t.some(e => e.checked);
      }(e) || "INPUT" === D.currentNode.tagName && "radio" === D.currentNode.type && D.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : d(e) && (!a || c(e, a)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  };
  let D = Nf() ? new o(h, r, l, s) : h.createTreeWalker(r, l, s);
  t?.from && (D.currentNode = t.from);
  return D;
}
export function $$D0(e, t = {}) {
  return {
    focusNext(a = {}) {
      let n = e.current;
      if (!n) return null;
      let {
        from,
        tabbable = t.tabbable,
        wrap = t.wrap,
        accept = t.accept
      } = a;
      let d = from || bq(TW(n));
      let c = $$h1(n, {
        tabbable,
        accept
      });
      n.contains(d) && (c.currentNode = d);
      let D = c.nextNode();
      !D && wrap && (c.currentNode = n, D = c.nextNode());
      D && m(D, !0);
      return D;
    },
    focusPrevious(a = t) {
      let n = e.current;
      if (!n) return null;
      let {
        from,
        tabbable = t.tabbable,
        wrap = t.wrap,
        accept = t.accept
      } = a;
      let d = from || bq(TW(n));
      let c = $$h1(n, {
        tabbable,
        accept
      });
      if (n.contains(d)) c.currentNode = d;else {
        let e = f(c);
        e && m(e, !0);
        return null != e ? e : null;
      }
      let D = c.previousNode();
      if (!D && wrap) {
        c.currentNode = n;
        let e = f(c);
        if (!e) return null;
        D = e;
      }
      D && m(D, !0);
      return null != D ? D : null;
    },
    focusFirst(a = t) {
      let u = e.current;
      if (!u) return null;
      let {
        tabbable = t.tabbable,
        accept = t.accept
      } = a;
      let i = $$h1(u, {
        tabbable,
        accept
      }).nextNode();
      i && m(i, !0);
      return i;
    },
    focusLast(a = t) {
      let u = e.current;
      if (!u) return null;
      let {
        tabbable = t.tabbable,
        accept = t.accept
      } = a;
      let i = f($$h1(u, {
        tabbable,
        accept
      }));
      i && m(i, !0);
      return null != i ? i : null;
    }
  };
}
function f(e) {
  let t;
  let a;
  do (t = e.lastChild()) && (a = t); while (t);
  return a;
}
class p {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(e) {
    return this.fastMap.get(e);
  }
  addTreeNode(e, t, a) {
    let u = this.fastMap.get(null != t ? t : null);
    if (!u) return;
    let n = new y({
      scopeRef: e
    });
    u.addChild(n);
    n.parent = u;
    this.fastMap.set(e, n);
    a && (n.nodeToRestore = a);
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e);
  }
  removeTreeNode(e) {
    if (null === e) return;
    let t = this.fastMap.get(e);
    if (!t) return;
    let a = t.parent;
    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && c(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
    let u = t.children;
    a && (a.removeChild(t), u.size > 0 && u.forEach(e => a && a.addChild(e)));
    this.fastMap.$$delete(t.scopeRef);
  }
  *traverse(e = this.root) {
    if (null != e.scopeRef && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
  }
  clone() {
    var e;
    var t;
    let a = new p();
    for (let u of this.traverse()) a.addTreeNode(u.scopeRef, null !== (t = u.parent?.scopeRef) && void 0 !== t ? t : null, u.nodeToRestore);
    return a;
  }
  constructor() {
    this.fastMap = new Map();
    this.root = new y({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
}
class y {
  addChild(e) {
    this.children.add(e);
    e.parent = this;
  }
  removeChild(e) {
    this.children.$$delete(e);
    e.parent = void 0;
  }
  constructor(e) {
    this.children = new Set();
    this.contain = !1;
    this.scopeRef = e.scopeRef;
  }
}
new p();
export const C7 = $$D0;
export const N$ = $$h1;