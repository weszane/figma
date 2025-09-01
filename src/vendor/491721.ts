import { ZB, Bt } from "../vendor/425002";
import { fG, I2, nY, pT, ff, gu, vJ } from "../vendor/408361";
let A = new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
export class $$o0 extends fG {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new $$o0(e.__url, {
      rel: e.__rel,
      target: e.__target,
      title: e.__title
    }, e.__key);
  }
  constructor(e, t = {}, n) {
    super(n);
    let {
      target = null,
      rel = null,
      title = null
    } = t;
    this.__url = e;
    this.__target = target;
    this.__rel = rel;
    this.__title = title;
  }
  createDOM(e) {
    let t = document.createElement("a");
    t.href = this.sanitizeUrl(this.__url);
    null !== this.__target && (t.target = this.__target);
    null !== this.__rel && (t.rel = this.__rel);
    null !== this.__title && (t.title = this.__title);
    ZB(t, e.theme.link);
    return t;
  }
  updateDOM(e, t, n) {
    if (t instanceof HTMLAnchorElement) {
      let n = this.__url;
      let r = this.__target;
      let i = this.__rel;
      let A = this.__title;
      n !== e.__url && (t.href = n);
      r !== e.__target && (r ? t.target = r : t.removeAttribute("target"));
      i !== e.__rel && (i ? t.rel = i : t.removeAttribute("rel"));
      A !== e.__title && (A ? t.title = A : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return {
      a: e => ({
        conversion: s,
        priority: 1
      })
    };
  }
  static importJSON(e) {
    let t = $$a5(e.url, {
      rel: e.rel,
      target: e.target,
      title: e.title
    });
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  sanitizeUrl(e) {
    try {
      let t = new URL(e);
      if (!A.has(t.protocol)) return "about:blank";
    } catch (e) {}
    return e;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      rel: this.getRel(),
      target: this.getTarget(),
      title: this.getTitle(),
      type: "link",
      url: this.getURL(),
      version: 1
    };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(e) {
    this.getWritable().__url = e;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(e) {
    this.getWritable().__target = e;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(e) {
    this.getWritable().__rel = e;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(e) {
    this.getWritable().__title = e;
  }
  insertNewAfter(e, t = !0) {
    let n = $$a5(this.__url, {
      rel: this.__rel,
      target: this.__target,
      title: this.__title
    });
    this.insertAfter(n, t);
    return n;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(e, t, n) {
    if (!I2(t)) return !1;
    let r = t.anchor.getNode();
    let A = t.focus.getNode();
    return this.isParentOf(r) && this.isParentOf(A) && t.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
}
function s(e) {
  let t = null;
  if (nY(e)) {
    let n = e.textContent;
    (null !== n && "" !== n || e.children.length > 0) && (t = $$a5(e.getAttribute("href") || "", {
      rel: e.getAttribute("rel"),
      target: e.getAttribute("target"),
      title: e.getAttribute("title")
    }));
  }
  return {
    node: t
  };
}
export function $$a5(e, t) {
  return pT(new $$o0(e, t));
}
export function $$l1(e) {
  return e instanceof $$o0;
}
export class $$u3 extends $$o0 {
  constructor(e, t = {}, n) {
    super(e, t, n);
    this.__isUnlinked = void 0 !== t.isUnlinked && null !== t.isUnlinked && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new $$u3(e.__url, {
      isUnlinked: e.__isUnlinked,
      rel: e.__rel,
      target: e.__target,
      title: e.__title
    }, e.__key);
  }
  getIsUnlinked() {
    return this.__isUnlinked;
  }
  setIsUnlinked(e) {
    let t = this.getWritable();
    t.__isUnlinked = e;
    return t;
  }
  createDOM(e) {
    return this.__isUnlinked ? document.createElement("span") : super.createDOM(e);
  }
  updateDOM(e, t, n) {
    return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
  }
  static importJSON(e) {
    let t = g(e.url, {
      isUnlinked: e.isUnlinked,
      rel: e.rel,
      target: e.target,
      title: e.title
    });
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  static importDOM() {
    return null;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      isUnlinked: this.__isUnlinked,
      type: "autolink",
      version: 1
    };
  }
  insertNewAfter(e, t = !0) {
    let n = this.getParentOrThrow().insertNewAfter(e, t);
    if (ff(n)) {
      let e = g(this.__url, {
        isUnlinked: this.__isUnlinked,
        rel: this.__rel,
        target: this.__target,
        title: this.__title
      });
      n.append(e);
      return e;
    }
    return null;
  }
}
function g(e, t) {
  return pT(new $$u3(e, t));
}
export let $$c4 = gu("TOGGLE_LINK_COMMAND");
export function $$f2(e, t = {}) {
  let {
    target,
    title
  } = t;
  let o = void 0 === t.rel ? "noreferrer" : t.rel;
  let s = vJ();
  if (!I2(s)) return;
  let g = s.extract();
  if (null === e) g.forEach(e => {
    let t = Bt(e, e => !(e instanceof $$u3) && $$l1(e));
    if (t) {
      let e = t.getChildren();
      for (let n = 0; n < e.length; n++) t.insertBefore(e[n]);
      t.remove();
    }
  });else {
    if (1 === g.length) {
      let t = function (e, t) {
        let n = e;
        for (; null !== n && null !== n.getParent() && !t(n);) n = n.getParentOrThrow();
        return t(n) ? n : null;
      }(g[0], $$l1);
      if (null !== t) {
        t.setURL(e);
        void 0 !== target && t.setTarget(target);
        null !== o && t.setRel(o);
        return void (void 0 !== title && t.setTitle(title));
      }
    }
    let t = null;
    let r = null;
    g.forEach(s => {
      let u = s.getParent();
      if (u !== r && null !== u && (!ff(s) || s.isInline())) {
        if ($$l1(u)) {
          r = u;
          u.setURL(e);
          void 0 !== target && u.setTarget(target);
          null !== o && r.setRel(o);
          return void (void 0 !== title && r.setTitle(title));
        }
        if (u.is(t) || (t = u, r = $$a5(e, {
          rel: o,
          target,
          title
        }), $$l1(u) ? null === s.getPreviousSibling() ? u.insertBefore(r) : u.insertAfter(r) : s.insertBefore(r)), $$l1(s)) {
          if (s.is(r)) return;
          if (null !== r) {
            let e = s.getChildren();
            for (let t = 0; t < e.length; t++) r.append(e[t]);
          }
          s.remove();
        } else null !== r && r.append(s);
      }
    });
  }
}
export const Db = $$o0;
export const FJ = $$l1;
export const hx = $$f2;
export const k_ = $$u3;
export const yW = $$c4;
export const zA = $$a5;