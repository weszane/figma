let i = "\u037C";
let s = "undefined" == typeof Symbol ? "__" + i : Symbol.$$for(i);
let o = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet");
let a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
export class $$h0 {
  constructor(e, r) {
    this.rules = [];
    let {
      finish
    } = r || {};
    function i(e) {
      return /^@/.test(e) ? [e] : e.split(/,\s*/);
    }
    function s(e, r, o, a) {
      let h = [];
      let d = /^@(\w+)\b/.exec(e[0]);
      let p = d && "keyframes" == d[1];
      if (d && null == r) return o.push(e[0] + ";");
      for (let n in r) {
        let a = r[n];
        if (/&/.test(n)) s(n.split(/,\s*/).map(r => e.map(e => r.replace(/&/, e))).reduce((e, r) => e.concat(r)), a, o);else if (a && "object" == typeof a) {
          if (!d) throw RangeError("The value of a property (" + n + ") should be a primitive value.");
          s(i(n), a, h, p);
        } else null != a && h.push(n.replace(/_.*/, "").replace(/[A-Z]/g, e => "-" + e.toLowerCase()) + ": " + a + ";");
      }
      (h.length || p) && o.push((!finish || d || a ? e : e.map(finish)).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let r in e) s(i(r), e[r], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let e = a[s] || 1;
    a[s] = e + 1;
    return i + e.toString(36);
  }
  static mount(e, r, n) {
    let i = e[o];
    let s = n && n.nonce;
    i ? s && i.setNonce(s) : i = new p(e, s);
    i.mount(Array.isArray(r) ? r : [r], e);
  }
}
let d = new Map();
class p {
  constructor(e, r) {
    let n = e.ownerDocument || e;
    let i = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && i.CSSStyleSheet) {
      let r = d.get(n);
      if (r) return e[o] = r;
      this.sheet = new i.CSSStyleSheet();
      d.set(n, this);
    } else {
      this.styleTag = n.createElement("style");
      r && this.styleTag.setAttribute("nonce", r);
    }
    this.modules = [];
    e[o] = this;
  }
  mount(e, r) {
    let n = this.sheet;
    let i = 0;
    let s = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      let a = this.modules.indexOf(o);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), -1 == a) {
        if (this.modules.splice(s++, 0, o), n) for (let e = 0; e < o.rules.length; e++) n.insertRule(o.rules[e], i++);
      } else {
        for (; s < a;) i += this.modules[s++].rules.length;
        i += o.rules.length;
        s++;
      }
    }
    if (n) 0 > r.adoptedStyleSheets.indexOf(this.sheet) && (r.adoptedStyleSheets = [this.sheet, ...r.adoptedStyleSheets]);else {
      let e = "";
      for (let r = 0; r < this.modules.length; r++) e += this.modules[r].getRules() + "\n";
      this.styleTag.textContent = e;
      let n = r.head || r;
      this.styleTag.parentNode != n && n.insertBefore(this.styleTag, n.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
export const G = $$h0;