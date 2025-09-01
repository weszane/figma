import _require2 from "../vendor/804148";
import _require from "../vendor/59696";
let i;
for (s = _require, o = _require2, a = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, h = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, d = "undefined" != typeof navigator && /Mac/.test(navigator.platform), p = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), g = 0, void 0; g < 10; g++) {
  var s;
  var o;
  var a;
  var h;
  var d;
  var p;
  var g;
  a[48 + g] = a[96 + g] = String(g);
}
for (var g = 1; g <= 24; g++) a[g + 111] = "F" + g;
for (var g = 65; g <= 90; g++) {
  a[g] = String.fromCharCode(g + 32);
  h[g] = String.fromCharCode(g);
}
for (var m in a) h.hasOwnProperty(m) || (h[m] = a[m]);
function v(e) {
  var r = !(d && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || p && e.shiftKey && e.key && 1 == e.key.length || "Unidentified" == e.key) && e.key || (e.shiftKey ? h : a)[e.keyCode] || e.key || "Unidentified";
  "Esc" == r && (r = "Escape");
  "Del" == r && (r = "Delete");
  "Left" == r && (r = "ArrowLeft");
  "Up" == r && (r = "ArrowUp");
  "Right" == r && (r = "ArrowRight");
  "Down" == r && (r = "ArrowDown");
  return r;
}
function y(e) {
  let r;
  return (r = 11 == e.nodeType ? e.getSelection ? e : e.ownerDocument : e).getSelection();
}
function b(e, r) {
  return !!r && (e == r || e.contains(1 != r.nodeType ? r.parentNode : r));
}
function O(e, r) {
  if (!r.anchorNode) return !1;
  try {
    return b(e, r.anchorNode);
  } catch (e) {
    return !1;
  }
}
function x(e) {
  return 3 == e.nodeType ? N(e, 0, e.nodeValue.length).getClientRects() : 1 == e.nodeType ? e.getClientRects() : [];
}
function w(e, r, n, i) {
  return !!n && (S(e, r, n, i, -1) || S(e, r, n, i, 1));
}
function k(e) {
  for (var r = 0;; r++) if (!(e = e.previousSibling)) return r;
}
function _(e) {
  return 1 == e.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName);
}
function S(e, r, n, i, s) {
  for (;;) {
    if (e == n && r == i) return !0;
    if (r == (s < 0 ? 0 : E(e))) {
      if ("DIV" == e.nodeName) return !1;
      let n = e.parentNode;
      if (!n || 1 != n.nodeType) return !1;
      r = k(e) + (s < 0 ? 0 : 1);
      e = n;
    } else {
      if (1 != e.nodeType || 1 == (e = e.childNodes[r + (s < 0 ? -1 : 0)]).nodeType && "false" == e.contentEditable) return !1;
      r = s < 0 ? E(e) : 0;
    }
  }
}
function E(e) {
  return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
}
function $$A(e, r) {
  let n = r ? e.left : e.right;
  return {
    left: n,
    right: n,
    top: e.top,
    bottom: e.bottom
  };
}
function C(e) {
  let r = e.visualViewport;
  return r ? {
    left: 0,
    right: r.width,
    top: 0,
    bottom: r.height
  } : {
    left: 0,
    right: e.innerWidth,
    top: 0,
    bottom: e.innerHeight
  };
}
function T(e, r) {
  let n = r.width / e.offsetWidth;
  let i = r.height / e.offsetHeight;
  (n > .995 && n < 1.005 || !isFinite(n) || 1 > Math.abs(r.width - e.offsetWidth)) && (n = 1);
  (i > .995 && i < 1.005 || !isFinite(i) || 1 > Math.abs(r.height - e.offsetHeight)) && (i = 1);
  return {
    scaleX: n,
    scaleY: i
  };
}
function I(e, r, n, i, s, o, a, h) {
  let d = e.ownerDocument;
  let p = d.defaultView || window;
  for (function () {
    let g = e;
    let m = !1;
  }(); g && !m;) if (1 == g.nodeType) {
    let e;
    let v = g == d.body;
    let y = 1;
    let b = 1;
    if (v) e = C(p);else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(g).position) && (m = !0), g.scrollHeight <= g.clientHeight && g.scrollWidth <= g.clientWidth) {
        g = g.assignedSlot || g.parentNode;
        continue;
      }
      let r = g.getBoundingClientRect();
      ({
        scaleX: y,
        scaleY: b
      } = T(g, r));
      e = {
        left: r.left,
        right: r.left + g.clientWidth * y,
        top: r.top,
        bottom: r.top + g.clientHeight * b
      };
    }
    let O = 0;
    let x = 0;
    if ("nearest" == s) r.top < e.top ? (x = -(e.top - r.top + a), n > 0 && r.bottom > e.bottom + x && (x = r.bottom - e.bottom + x + a)) : r.bottom > e.bottom && (x = r.bottom - e.bottom + a, n < 0 && r.top - x < e.top && (x = -(e.top + x - r.top + a)));else {
      let i = r.bottom - r.top;
      let o = e.bottom - e.top;
      x = ("center" == s && i <= o ? r.top + i / 2 - o / 2 : "start" == s || "center" == s && n < 0 ? r.top - a : r.bottom - o + a) - e.top;
    }
    if ("nearest" == i ? r.left < e.left ? (O = -(e.left - r.left + o), n > 0 && r.right > e.right + O && (O = r.right - e.right + O + o)) : r.right > e.right && (O = r.right - e.right + o, n < 0 && r.left < e.left + O && (O = -(e.left + O - r.left + o))) : O = ("center" == i ? r.left + (r.right - r.left) / 2 - (e.right - e.left) / 2 : "start" == i == h ? r.left - o : r.right - (e.right - e.left) + o) - e.left, O || x) {
      if (v) p.scrollBy(O, x);else {
        let e = 0;
        let n = 0;
        if (x) {
          let e = g.scrollTop;
          g.scrollTop += x / b;
          n = (g.scrollTop - e) * b;
        }
        if (O) {
          let r = g.scrollLeft;
          g.scrollLeft += O / y;
          e = (g.scrollLeft - r) * y;
        }
        r = {
          left: r.left - e,
          top: r.top - n,
          right: r.right - e,
          bottom: r.bottom - n
        };
        e && 1 > Math.abs(e - O) && (i = "nearest");
        n && 1 > Math.abs(n - x) && (s = "nearest");
      }
    }
    if (v) break;
    g = g.assignedSlot || g.parentNode;
  } else if (11 == g.nodeType) g = g.host;else break;
}
function P(e) {
  let r = e.ownerDocument;
  let n;
  let i;
  for (let s = e.parentNode; s && s != r.body && (!n || !i);) if (1 == s.nodeType) {
    !i && s.scrollHeight > s.clientHeight && (i = s);
    !n && s.scrollWidth > s.clientWidth && (n = s);
    s = s.assignedSlot || s.parentNode;
  } else if (11 == s.nodeType) s = s.host;else break;
  return {
    x: n,
    y: i
  };
}
class R {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let {
      anchorNode,
      focusNode
    } = e;
    this.set(anchorNode, Math.min(e.anchorOffset, anchorNode ? E(anchorNode) : 0), focusNode, Math.min(e.focusOffset, focusNode ? E(focusNode) : 0));
  }
  set(e, r, n, i) {
    this.anchorNode = e;
    this.anchorOffset = r;
    this.focusNode = n;
    this.focusOffset = i;
  }
}
let M = null;
function D(e) {
  if (e.setActive) return e.setActive();
  if (M) return e.focus(M);
  let r = [];
  for (let n = e; n && (r.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode);
  if (e.focus(null == M ? {
    get preventScroll() {
      M = {
        preventScroll: !0
      };
      return !0;
    }
  } : void 0), !M) {
    M = !1;
    for (let e = 0; e < r.length;) {
      let n = r[e++];
      let i = r[e++];
      let s = r[e++];
      n.scrollTop != i && (n.scrollTop = i);
      n.scrollLeft != s && (n.scrollLeft = s);
    }
  }
}
function N(e, r, n = r) {
  let s = i || (i = document.createRange());
  s.setEnd(e, n);
  s.setStart(e, r);
  return s;
}
function $(e, r, n, i) {
  let s = {
    key: r,
    code: r,
    keyCode: n,
    which: n,
    cancelable: !0
  };
  i && ({
    altKey: s.altKey,
    ctrlKey: s.ctrlKey,
    shiftKey: s.shiftKey,
    metaKey: s.metaKey
  } = i);
  let o = new KeyboardEvent("keydown", s);
  o.synthetic = !0;
  e.dispatchEvent(o);
  let a = new KeyboardEvent("keyup", s);
  a.synthetic = !0;
  e.dispatchEvent(a);
  return o.defaultPrevented || a.defaultPrevented;
}
function L(e) {
  for (; e;) {
    if (e && (9 == e.nodeType || 11 == e.nodeType && e.host)) return e;
    e = e.assignedSlot || e.parentNode;
  }
  return null;
}
function j(e) {
  for (; e.attributes.length;) e.removeAttributeNode(e.attributes[0]);
}
function z(e, r) {
  let n = r.focusNode;
  let i = r.focusOffset;
  if (!n || r.anchorNode != n || r.anchorOffset != i) return !1;
  for (i = Math.min(i, E(n));;) if (i) {
    if (1 != n.nodeType) return !1;
    let e = n.childNodes[i - 1];
    "false" == e.contentEditable ? i-- : i = E(n = e);
  } else {
    if (n == e) return !0;
    i = k(n);
    n = n.parentNode;
  }
}
function Z(e) {
  return e.scrollTop > Math.max(1, e.scrollHeight - e.clientHeight - 4);
}
function F(e, r) {
  for (function () {
    let n = e;
    let i = r;
  }();;) {
    if (3 == n.nodeType && i > 0) return {
      node: n,
      offset: i
    };
    if (1 == n.nodeType && i > 0) {
      if ("false" == n.contentEditable) return null;
      i = E(n = n.childNodes[i - 1]);
    } else {
      if (!n.parentNode || _(n)) return null;
      i = k(n);
      n = n.parentNode;
    }
  }
}
function U(e, r) {
  for (function () {
    let n = e;
    let i = r;
  }();;) {
    if (3 == n.nodeType && i < n.nodeValue.length) return {
      node: n,
      offset: i
    };
    if (1 == n.nodeType && i < n.childNodes.length) {
      if ("false" == n.contentEditable) return null;
      n = n.childNodes[i];
      i = 0;
    } else {
      if (!n.parentNode || _(n)) return null;
      i = k(n) + 1;
      n = n.parentNode;
    }
  }
}
class Q {
  constructor(e, r, n = !0) {
    this.node = e;
    this.offset = r;
    this.precise = n;
  }
  static before(e, r) {
    return new Q(e.parentNode, k(e), r);
  }
  static after(e, r) {
    return new Q(e.parentNode, k(e) + 1, r);
  }
}
let V = [];
class B {
  constructor() {
    this.parent = null;
    this.dom = null;
    this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let r = this.posAtStart;
    for (let n of this.children) {
      if (n == e) return r;
      r += n.length + n.breakAfter;
    }
    throw RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, r) {
    if (2 & this.flags) {
      let n = this.dom;
      let i = null;
      let s;
      for (let o of this.children) {
        if (7 & o.flags) {
          if (!o.dom && (s = i ? i.nextSibling : n.firstChild)) {
            let e = B.get(s);
            (!e || !e.parent && e.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, r);
          o.flags &= -8;
        }
        if (s = i ? i.nextSibling : n.firstChild, r && !r.written && r.node == n && s != o.dom && (r.written = !0), o.dom.parentNode == n) for (; s && s != o.dom;) s = q(s);else n.insertBefore(o.dom, s);
        i = o.dom;
      }
      for ((s = i ? i.nextSibling : n.firstChild) && r && r.node == n && (r.written = !0); s;) s = q(s);
    } else if (1 & this.flags) for (let n of this.children) 7 & n.flags && (n.sync(e, r), n.flags &= -8);
  }
  reuseDOM(e) {}
  localPosFromDOM(e, r) {
    let n;
    if (e == this.dom) n = this.dom.childNodes[r];else {
      let i = 0 == E(e) ? 0 : 0 == r ? -1 : 1;
      for (;;) {
        let r = e.parentNode;
        if (r == this.dom) break;
        0 == i && r.firstChild != r.lastChild && (i = e == r.firstChild ? -1 : 1);
        e = r;
      }
      n = i < 0 ? e : e.nextSibling;
    }
    if (n == this.dom.firstChild) return 0;
    for (; n && !B.get(n);) n = n.nextSibling;
    if (!n) return this.length;
    for (function () {
      let e = 0;
      let r = 0;
    }();; e++) {
      let i = this.children[e];
      if (i.dom == n) return r;
      r += i.length + i.breakAfter;
    }
  }
  domBoundsAround(e, r, n = 0) {
    let i = -1;
    let s = -1;
    let o = -1;
    let a = -1;
    for (function () {
      let h = 0;
      let d = n;
      let p = n;
    }(); h < this.children.length; h++) {
      let n = this.children[h];
      let g = d + n.length;
      if (d < e && g > r) return n.domBoundsAround(e, r, d);
      if (g >= e && -1 == i && (i = h, s = d), d > r && n.dom.parentNode == this.dom) {
        o = h;
        a = p;
        break;
      }
      p = g;
      d = g + n.breakAfter;
    }
    return {
      from: s,
      to: a < 0 ? n + this.length : a,
      startDOM: (i ? this.children[i - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2;
    this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let r = this.parent; r; r = r.parent) {
      if (e && (r.flags |= 2), 1 & r.flags) return;
      r.flags |= 1;
      e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, 7 & this.flags && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this;;) {
      let r = e.parent;
      if (!r) return e;
      e = r;
    }
  }
  replaceChildren(e, r, n = V) {
    this.markDirty();
    for (let i = e; i < r; i++) {
      let e = this.children[i];
      e.parent == this && 0 > n.indexOf(e) && e.destroy();
    }
    n.length < 250 ? this.children.splice(e, r - e, ...n) : this.children = [].concat(this.children.slice(0, e), n, this.children.slice(r));
    for (let e = 0; e < n.length; e++) n[e].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new W(this.children, e, this.children.length);
  }
  childPos(e, r = 1) {
    return this.childCursor().findPos(e, r);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == e ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, r, n, i, s, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
function q(e) {
  let r = e.nextSibling;
  e.parentNode.removeChild(e);
  return r;
}
B.prototype.breakAfter = 0;
class W {
  constructor(e, r, n) {
    this.children = e;
    this.pos = r;
    this.i = n;
    this.off = 0;
  }
  findPos(e, r = 1) {
    for (;;) {
      if (e > this.pos || e == this.pos && (r > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) {
        this.off = e - this.pos;
        return this;
      }
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function Y(e, r, n, i, s, o, a, h, d) {
  let {
    children
  } = e;
  let g = children.length ? children[r] : null;
  let m = o.length ? o[o.length - 1] : null;
  let v = m ? m.breakAfter : a;
  if (!(r == i && g && !a && !v && o.length < 2 && g.merge(n, s, o.length ? m : null, 0 == n, h, d))) {
    if (i < children.length) {
      let e = children[i];
      e && (s < e.length || e.breakAfter && m?.breakAfter) ? (r == i && (e = e.split(s), s = 0), !v && m && e.merge(0, s, m, !0, 0, d) ? o[o.length - 1] = e : ((s || e.children.length && !e.children[0].length) && e.merge(0, s, null, !1, 0, d), o.push(e))) : e?.breakAfter && (m ? m.breakAfter = 1 : a = 1);
      i++;
    }
    for (g && (g.breakAfter = a, n > 0 && (!a && o.length && g.merge(n, g.length, o[0], !1, h, 0) ? g.breakAfter = o.shift().breakAfter : (n < g.length || g.children.length && 0 == g.children[g.children.length - 1].length) && g.merge(n, g.length, null, !1, h, 0), r++)); r < i && o.length;) if (children[i - 1].become(o[o.length - 1])) {
      i--;
      o.pop();
      d = o.length ? 0 : h;
    } else if (children[r].become(o[0])) {
      r++;
      o.shift();
      h = o.length ? 0 : d;
    } else break;
    !o.length && r && i < children.length && !children[r - 1].breakAfter && children[i].merge(0, 0, children[r - 1], !1, h, d) && r--;
    (r < i || o.length) && e.replaceChildren(r, i, o);
  }
}
function G(e, r, n, i, s, o) {
  let a = e.childCursor();
  let {
    i: _i,
    off
  } = a.findPos(n, 1);
  let {
    i: _i2,
    off: _off
  } = a.findPos(r, -1);
  let m = r - n;
  for (let e of i) m += e.length;
  e.length += m;
  Y(e, _i2, _off, _i, off, i, 0, s, o);
}
let X = "undefined" != typeof navigator ? navigator : {
  userAgent: "",
  vendor: "",
  platform: ""
};
let H = "undefined" != typeof document ? document : {
  documentElement: {
    style: {}
  }
};
let K = /Edge\/(\d+)/.exec(X.userAgent);
let J = /MSIE \d/.test(X.userAgent);
let ee = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(X.userAgent);
let et = !!(J || ee || K);
let er = !et && /gecko\/(\d+)/i.test(X.userAgent);
let en = !et && /Chrome\/(\d+)/.exec(X.userAgent);
let ei = "webkitFontSmoothing" in H.documentElement.style;
let es = !et && /Apple Computer/.test(X.vendor);
let eo = es && (/Mobile\/\w+/.test(X.userAgent) || X.maxTouchPoints > 2);
var ea = {
  mac: eo || /Mac/.test(X.platform),
  windows: /Win/.test(X.platform),
  linux: /Linux|X11/.test(X.platform),
  ie: et,
  ie_version: J ? H.documentMode || 6 : ee ? +ee[1] : K ? +K[1] : 0,
  gecko: er,
  gecko_version: er ? +(/Firefox\/(\d+)/.exec(X.userAgent) || [0, 0])[1] : 0,
  chrome: !!en,
  chrome_version: en ? +en[1] : 0,
  ios: eo,
  android: /Android\b/.test(X.userAgent),
  webkit: ei,
  safari: es,
  webkit_version: ei ? +(/\bAppleWebKit\/(\d+)/.exec(X.userAgent) || [0, 0])[1] : 0,
  tabSize: null != H.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
};
let el = 256;
class eu extends B {
  constructor(e) {
    super();
    this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, r) {
    this.dom || this.createDOM();
    this.dom.nodeValue != this.text && (r && r.node == this.dom && (r.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    3 == e.nodeType && this.createDOM(e);
  }
  merge(e, r, n) {
    return !(8 & this.flags) && (!n || n instanceof eu && !(this.length - (r - e) + n.length > el) && !(8 & n.flags)) && (this.text = this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(r), this.markDirty(), !0);
  }
  split(e) {
    let r = new eu(this.text.slice(e));
    this.text = this.text.slice(0, e);
    this.markDirty();
    r.flags |= 8 & this.flags;
    return r;
  }
  localPosFromDOM(e, r) {
    return e == this.dom ? r : r ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Q(this.dom, e);
  }
  domBoundsAround(e, r, n) {
    return {
      from: n,
      to: n + this.length,
      startDOM: this.dom,
      endDOM: this.dom.nextSibling
    };
  }
  coordsAt(e, r) {
    return eh(this.dom, e, r);
  }
}
class ec extends B {
  constructor(e, r = [], n = 0) {
    for (let i of (super(), this.mark = e, this.children = r, this.length = n, r)) i.setParent(this);
  }
  setAttrs(e) {
    if (j(e), this.mark.$$class && (e.className = this.mark.$$class), this.mark.attrs) for (let r in this.mark.attrs) e.setAttribute(r, this.mark.attrs[r]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, r) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName)));
    super.sync(e, r);
  }
  merge(e, r, n, i, s, o) {
    return (!n || !!(n instanceof ec && n.mark.eq(this.mark)) && (!e || !(s <= 0)) && (!(r < this.length) || !(o <= 0))) && (G(this, e, r, n ? n.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let r = [];
    let n = 0;
    let i = -1;
    let s = 0;
    for (let o of this.children) {
      let a = n + o.length;
      a > e && r.push(n < e ? o.split(e - n) : o);
      i < 0 && n >= e && (i = s);
      n = a;
      s++;
    }
    let o = this.length - e;
    this.length = e;
    i > -1 && (this.children.length = i, this.markDirty());
    return new ec(this.mark, r, o);
  }
  domAtPos(e) {
    return ep(this, e);
  }
  coordsAt(e, r) {
    return em(this, e, r);
  }
}
function eh(e, r, n) {
  let i = e.nodeValue.length;
  r > i && (r = i);
  let s = r;
  let o = r;
  let a = 0;
  0 == r && n < 0 || r == i && n >= 0 ? !(ea.chrome || ea.gecko) && (r ? (s--, a = 1) : o < i && (o++, a = -1)) : n < 0 ? s-- : o < i && o++;
  let h = N(e, s, o).getClientRects();
  if (!h.length) return null;
  let d = h[(a ? a < 0 : n >= 0) ? 0 : h.length - 1];
  ea.safari && !a && 0 == d.width && (d = Array.prototype.find.call(h, e => e.width) || d);
  return a ? $$A(d, a < 0) : d || null;
}
class ed extends B {
  static create(e, r, n) {
    return new ed(e, r, n);
  }
  constructor(e, r, n) {
    super();
    this.widget = e;
    this.length = r;
    this.side = n;
    this.prevWidget = null;
  }
  split(e) {
    let r = ed.create(this.widget, this.length - e, this.side);
    this.length -= e;
    return r;
  }
  sync(e) {
    this.dom && this.widget.updateDOM(this.dom, e) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, r, n, i, s, o) {
    return (!n || n instanceof ed && !!this.widget.compare(n.widget) && (!(e > 0) || !(s <= 0)) && (!(r < this.length) || !(o <= 0))) && (this.length = e + (n ? n.length : 0) + (this.length - r), !0);
  }
  become(e) {
    return e instanceof ed && e.side == this.side && this.widget.constructor == e.widget.constructor && (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0);
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (0 == this.length) return s.EY.empty;
    let e = this;
    for (; e.parent;) e = e.parent;
    let {
      view
    } = e;
    let n = view && view.state.doc;
    let i = this.posAtStart;
    return n ? n.slice(i, i + this.length) : s.EY.empty;
  }
  domAtPos(e) {
    return (this.length ? 0 == e : this.side > 0) ? Q.before(this.dom) : Q.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, r) {
    let n = this.widget.coordsAt(this.dom, e, r);
    if (n) return n;
    let i = this.dom.getClientRects();
    let s = null;
    if (!i.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let r = o ? i.length - 1 : 0; s = i[r], e > 0 ? 0 != r : r != i.length - 1 && !(s.top < s.bottom); r += o ? -1 : 1);
    return $$A(s, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy();
    this.dom && this.widget.destroy(this.dom);
  }
}
class ef extends B {
  constructor(e) {
    super();
    this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof ef && e.side == this.side;
  }
  split() {
    return new ef(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer";
      e.setAttribute("aria-hidden", "true");
      this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? Q.before(this.dom) : Q.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return s.EY.empty;
  }
  get isHidden() {
    return !0;
  }
}
function ep(e, r) {
  let n = e.dom;
  let {
    children
  } = e;
  let s = 0;
  for (let e = 0; s < children.length; s++) {
    let o = children[s];
    let a = e + o.length;
    if (!(a == e && 0 >= o.getSide())) {
      if (r > e && r < a && o.dom.parentNode == n) return o.domAtPos(r - e);
      if (r <= e) break;
      e = a;
    }
  }
  for (let e = s; e > 0; e--) {
    let r = children[e - 1];
    if (r.dom.parentNode == n) return r.domAtPos(r.length);
  }
  for (let e = s; e < children.length; e++) {
    let r = children[e];
    if (r.dom.parentNode == n) return r.domAtPos(0);
  }
  return new Q(n, 0);
}
function eg(e, r, n) {
  let i;
  let {
    children
  } = e;
  n > 0 && r instanceof ec && children.length && (i = children[children.length - 1]) instanceof ec && i.mark.eq(r.mark) ? eg(i, r.children[0], n - 1) : (children.push(r), r.setParent(e));
  e.length += r.length;
}
function em(e, r, n) {
  let i = null;
  let s = -1;
  let o = null;
  let a = -1;
  function h(e, r) {
    for (function () {
      let d = 0;
      let p = 0;
    }(); d < e.children.length && p <= r; d++) {
      let g = e.children[d];
      let m = p + g.length;
      m >= r && (g.children.length ? h(g, r - p) : (!o || o.isHidden && n > 0) && (m > r || p == m && g.getSide() > 0) ? (o = g, a = r - p) : (p < r || p == m && 0 > g.getSide() && !g.isHidden) && (i = g, s = r - p));
      p = m;
    }
  }
  h(e, r);
  let d = (n < 0 ? i : o) || i || o;
  return d ? d.coordsAt(Math.max(0, d == i ? s : a), n) : ev(e);
}
function ev(e) {
  let r = e.dom.lastChild;
  if (!r) return e.dom.getBoundingClientRect();
  let n = x(r);
  return n[n.length - 1] || null;
}
function ey(e, r) {
  for (let n in e) "class" == n && r.$$class ? r.$$class += " " + e.$$class : "style" == n && r.style ? r.style += ";" + e.style : r[n] = e[n];
  return r;
}
eu.prototype.children = ed.prototype.children = ef.prototype.children = V;
let eb = Object.create(null);
function eO(e, r, n) {
  if (e == r) return !0;
  e || (e = eb);
  r || (r = eb);
  let i = Object.keys(e);
  let s = Object.keys(r);
  if (i.length - (n && i.indexOf(n) > -1 ? 1 : 0) != s.length - (n && s.indexOf(n) > -1 ? 1 : 0)) return !1;
  for (let o of i) if (o != n && (-1 == s.indexOf(o) || e[o] !== r[o])) return !1;
  return !0;
}
function ex(e, r, n) {
  let i = !1;
  if (r) for (let s in r) n && s in n || (i = !0, "style" == s ? e.style.cssText = "" : e.removeAttribute(s));
  if (n) for (let s in n) r && r[s] == n[s] || (i = !0, "style" == s ? e.style.cssText = n[s] : e.setAttribute(s, n[s]));
  return i;
}
function ew(e) {
  let r = Object.create(null);
  for (let n = 0; n < e.attributes.length; n++) {
    let i = e.attributes[n];
    r[i.name] = i.value;
  }
  return r;
}
export class $$ek6 {
  eq(e) {
    return !1;
  }
  updateDOM(e, r) {
    return !1;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, r, n) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {}
}
var e_ = function (e) {
  e[e.Text = 0] = "Text";
  e[e.WidgetBefore = 1] = "WidgetBefore";
  e[e.WidgetAfter = 2] = "WidgetAfter";
  e[e.WidgetRange = 3] = "WidgetRange";
  return e;
}(e_ || (e_ = {}));
export class $$eS0 extends s.FB {
  constructor(e, r, n, i) {
    super();
    this.startSide = e;
    this.endSide = r;
    this.widget = n;
    this.spec = i;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new eE(e);
  }
  static widget(e) {
    let r = Math.max(-1e4, Math.min(1e4, e.side || 0));
    let n = !!e.block;
    r += n && !e.inlineOrder ? r > 0 ? 3e8 : -4e8 : r > 0 ? 1e8 : -1e8;
    return new eC(e, r, r, n, e.widget || null, !1);
  }
  static replace(e) {
    let r = !!e.block;
    let n;
    let i;
    if (e.isBlockGap) {
      n = -5e8;
      i = 4e8;
    } else {
      let {
        start,
        end
      } = eT(e, r);
      n = (start ? r ? -3e8 : -1 : 5e8) - 1;
      i = (end ? r ? 2e8 : 1 : -6e8) + 1;
    }
    return new eC(e, n, i, r, e.widget || null, !0);
  }
  static line(e) {
    return new eA(e);
  }
  static set(e, r = !1) {
    return s.om.of(e, r);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
}
$$eS0.none = s.om.empty;
class eE extends $$eS0 {
  constructor(e) {
    let {
      start,
      end
    } = eT(e);
    super(start ? -1 : 5e8, end ? 1 : -6e8, null, e);
    this.tagName = e.tagName || "span";
    this.$$class = e.$$class || "";
    this.attrs = e.attributes || null;
  }
  eq(e) {
    var r;
    var n;
    return this == e || e instanceof eE && this.tagName == e.tagName && (this.$$class || this.attrs?.$$class) == (e.$$class || e.attrs?.$$class) && eO(this.attrs, e.attrs, "class");
  }
  range(e, r = e) {
    if (e >= r) throw RangeError("Mark decorations may not be empty");
    return super.range(e, r);
  }
}
eE.prototype.point = !1;
class eA extends $$eS0 {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof eA && this.spec.$$class == e.spec.$$class && eO(this.spec.attributes, e.spec.attributes);
  }
  range(e, r = e) {
    if (r != e) throw RangeError("Line decoration ranges must be zero-length");
    return super.range(e, r);
  }
}
eA.prototype.mapMode = s.iR.TrackBefore;
eA.prototype.point = !0;
class eC extends $$eS0 {
  constructor(e, r, n, i, o, a) {
    super(r, n, o, e);
    this.block = i;
    this.isReplace = a;
    this.mapMode = i ? r <= 0 ? s.iR.TrackBefore : s.iR.TrackAfter : s.iR.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? e_.WidgetRange : this.startSide <= 0 ? e_.WidgetBefore : e_.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof eC && eI(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, r = e) {
    if (this.isReplace && (e > r || e == r && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && r != e) throw RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, r);
  }
}
function eT(e, r = !1) {
  let {
    inclusiveStart,
    inclusiveEnd
  } = e;
  null == inclusiveStart && (n = e.inclusive);
  null == inclusiveEnd && (i = e.inclusive);
  return {
    start: null != inclusiveStart ? inclusiveStart : r,
    end: null != inclusiveEnd ? inclusiveEnd : r
  };
}
function eI(e, r) {
  return e == r || !!(e && r && e.compare(r));
}
function eP(e, r, n, i = 0) {
  let s = n.length - 1;
  s >= 0 && n[s] + i >= e ? n[s] = Math.max(n[s], r) : n.push(e, r);
}
eC.prototype.point = !0;
class eR extends B {
  constructor() {
    super(...arguments);
    this.children = [];
    this.length = 0;
    this.prevAttrs = void 0;
    this.attrs = null;
    this.breakAfter = 0;
  }
  merge(e, r, n, i, s, o) {
    if (n) {
      if (!(n instanceof eR)) return !1;
      this.dom || n.transferDOM(this);
    }
    i && this.setDeco(n ? n.attrs : null);
    G(this, e, r, n ? n.children.slice() : [], s, o);
    return !0;
  }
  split(e) {
    let r = new eR();
    if (r.breakAfter = this.breakAfter, 0 == this.length) return r;
    let {
      i: _i3,
      off
    } = this.childPos(e);
    off && (r.append(this.children[_i3].split(off), 0), this.children[_i3].merge(off, this.children[_i3].length, null, !1, 0, 0), _i3++);
    for (let e = _i3; e < this.children.length; e++) r.append(this.children[e], 0);
    for (; _i3 > 0 && 0 == this.children[_i3 - 1].length;) this.children[--_i3].destroy();
    this.children.length = _i3;
    this.markDirty();
    this.length = e;
    return r;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    eO(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, r) {
    eg(this, e, r);
  }
  addLineDeco(e) {
    let r = e.spec.attributes;
    let n = e.spec.$$class;
    r && (this.attrs = ey(r, this.attrs || {}));
    n && (this.attrs = ey({
      class: n
    }, this.attrs || {}));
  }
  domAtPos(e) {
    return ep(this, e);
  }
  reuseDOM(e) {
    "DIV" == e.nodeName && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, r) {
    var n;
    this.dom ? 4 & this.flags && (j(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0);
    void 0 !== this.prevAttrs && (ex(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0);
    super.sync(e, r);
    let i = this.dom.lastChild;
    for (; i && B.get(i) instanceof ec;) i = i.lastChild;
    if (!i || !this.length || "BR" != i.nodeName && B.get(i)?.isEditable == !1 && (!ea.ios || !this.children.some(e => e instanceof eu))) {
      let e = document.createElement("BR");
      e.cmIgnore = !0;
      this.dom.appendChild(e);
    }
  }
  measureTextSize() {
    if (0 == this.children.length || this.length > 20) return null;
    let e = 0;
    let r;
    for (let n of this.children) {
      if (!(n instanceof eu) || /[^ -~]/.test(n.text)) return null;
      let i = x(n.dom);
      if (1 != i.length) return null;
      e += i[0].width;
      r = i[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: r
    } : null;
  }
  coordsAt(e, r) {
    let n = em(this, e, r);
    if (!this.children.length && n && this.parent) {
      let {
        heightOracle
      } = this.parent.view.viewState;
      let r = n.bottom - n.top;
      if (2 > Math.abs(r - heightOracle.lineHeight) && heightOracle.textHeight < r) {
        let i = (r - heightOracle.textHeight) / 2;
        return {
          top: n.top + i,
          bottom: n.bottom - i,
          left: n.left,
          right: n.left
        };
      }
    }
    return n;
  }
  become(e) {
    return e instanceof eR && 0 == this.children.length && 0 == e.children.length && eO(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, r) {
    for (function () {
      let n = 0;
      let i = 0;
    }(); n < e.children.length; n++) {
      let s = e.children[n];
      let o = i + s.length;
      if (o >= r) {
        if (s instanceof eR) return s;
        if (o > r) break;
      }
      i = o + s.breakAfter;
    }
    return null;
  }
}
class eM extends B {
  constructor(e, r, n) {
    super();
    this.widget = e;
    this.length = r;
    this.deco = n;
    this.breakAfter = 0;
    this.prevWidget = null;
  }
  merge(e, r, n, i, s, o) {
    return (!n || n instanceof eM && !!this.widget.compare(n.widget) && (!(e > 0) || !(s <= 0)) && (!(r < this.length) || !(o <= 0))) && (this.length = e + (n ? n.length : 0) + (this.length - r), !0);
  }
  domAtPos(e) {
    return 0 == e ? Q.before(this.dom) : Q.after(this.dom, e == this.length);
  }
  split(e) {
    let r = this.length - e;
    this.length = e;
    let n = new eM(this.widget, r, this.deco);
    n.breakAfter = this.breakAfter;
    return n;
  }
  get children() {
    return V;
  }
  sync(e) {
    this.dom && this.widget.updateDOM(this.dom, e) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.EY.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof eM && e.widget.constructor == this.widget.constructor && (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0);
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, r) {
    return this.widget.coordsAt(this.dom, e, r) || (this.widget instanceof eD ? null : $$A(this.dom.getBoundingClientRect(), this.length ? 0 == e : r <= 0));
  }
  destroy() {
    super.destroy();
    this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let {
      startSide,
      endSide
    } = this.deco;
    return startSide != endSide && (e < 0 ? startSide < 0 : endSide > 0);
  }
}
class eD extends $$ek6 {
  constructor(e) {
    super();
    this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    e.className = "cm-gap";
    this.updateDOM(e);
    return e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    e.style.height = this.height + "px";
    return !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class eN {
  constructor(e, r, n, i) {
    this.doc = e;
    this.pos = r;
    this.end = n;
    this.disallowBlockEffectsFor = i;
    this.content = [];
    this.curLine = null;
    this.breakAtStart = 0;
    this.pendingBuffer = 0;
    this.bufferMarks = [];
    this.atCursorPos = !0;
    this.openStart = -1;
    this.openEnd = -1;
    this.text = "";
    this.textOff = 0;
    this.cursor = e.iter();
    this.skip = r;
  }
  posCovered() {
    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof eM && e.deco.endSide < 0);
  }
  getLine() {
    this.curLine || (this.content.push(this.curLine = new eR()), this.atCursorPos = !0);
    return this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(e$(new ef(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer();
    this.curLine = null;
    this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0;
    this.posCovered() || e && this.content.length && this.content[this.content.length - 1] instanceof eM || this.getLine();
  }
  buildText(e, r, n) {
    for (; e > 0;) {
      if (this.textOff == this.text.length) {
        let {
          value,
          lineBreak,
          done
        } = this.cursor.next(this.skip);
        if (this.skip = 0, done) throw Error("Ran out of text content when drawing inline views");
        if (lineBreak) {
          this.posCovered() || this.getLine();
          this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1;
          this.flushBuffer();
          this.curLine = null;
          this.atCursorPos = !0;
          e--;
          continue;
        }
        this.text = value;
        this.textOff = 0;
      }
      let i = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(r.slice(r.length - n));
      this.getLine().append(e$(new eu(this.text.slice(this.textOff, this.textOff + i)), r), n);
      this.atCursorPos = !0;
      this.textOff += i;
      e -= i;
      n = 0;
    }
  }
  span(e, r, n, i) {
    this.buildText(r - e, n, i);
    this.pos = r;
    this.openStart < 0 && (this.openStart = i);
  }
  point(e, r, n, i, s, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof eC) {
      if (n.block) throw RangeError("Block decorations may not be specified via plugins");
      if (r > this.doc.lineAt(this.pos).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let a = r - e;
    if (n instanceof eC) {
      if (n.block) {
        n.startSide > 0 && !this.posCovered() && this.getLine();
        this.addBlockWidget(new eM(n.widget || eL.block, a, n));
      } else {
        let o = ed.create(n.widget || eL.inline, a, a ? 0 : n.startSide);
        let h = this.atCursorPos && !o.isEditable && s <= i.length && (e < r || n.startSide > 0);
        let d = !o.isEditable && (e < r || s > i.length || n.startSide <= 0);
        let p = this.getLine();
        2 != this.pendingBuffer || h || o.isEditable || (this.pendingBuffer = 0);
        this.flushBuffer(i);
        h && (p.append(e$(new ef(1), i), s), s = i.length + Math.max(0, s - i.length));
        p.append(e$(o, i), s);
        this.atCursorPos = d;
        this.pendingBuffer = d ? e < r || s > i.length ? 1 : 2 : 0;
        this.pendingBuffer && (this.bufferMarks = i.slice());
      }
    } else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    a && (this.textOff + a <= this.text.length ? this.textOff += a : (this.skip += a - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = r);
    this.openStart < 0 && (this.openStart = s);
  }
  static build(e, r, n, i, o) {
    let a = new eN(e, r, n, o);
    a.openEnd = s.om.spans(i, r, n, a);
    a.openStart < 0 && (a.openStart = a.openEnd);
    a.finish(a.openEnd);
    return a;
  }
}
function e$(e, r) {
  for (let n of r) e = new ec(n, [e], e.length);
  return e;
}
class eL extends $$ek6 {
  constructor(e) {
    super();
    this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
eL.inline = new eL("span");
eL.block = new eL("div");
export var $$ej1 = function (e) {
  e[e.LTR = 0] = "LTR";
  e[e.RTL = 1] = "RTL";
  return e;
}($$ej1 || ($$ej1 = {}));
let ez = $$ej1.LTR;
let eZ = $$ej1.RTL;
function eF(e) {
  let r = [];
  for (let n = 0; n < e.length; n++) r.push(1 << +e[n]);
  return r;
}
let eU = eF("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
let eQ = eF("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
let eV = Object.create(null);
let eB = [];
for (let e of ["()", "[]", "{}"]) {
  let r = e.charCodeAt(0);
  let n = e.charCodeAt(1);
  eV[r] = n;
  eV[n] = -r;
}
function eq(e) {
  return e <= 247 ? eU[e] : 1424 <= e && e <= 1524 ? 2 : 1536 <= e && e <= 1785 ? eQ[e - 1536] : 1774 <= e && e <= 2220 ? 4 : 8192 <= e && e <= 8204 ? 256 : 64336 <= e && e <= 65023 ? 4 : 1;
}
let eW = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class eY {
  get dir() {
    return this.level % 2 ? eZ : ez;
  }
  constructor(e, r, n) {
    this.from = e;
    this.to = r;
    this.level = n;
  }
  side(e, r) {
    return this.dir == r == e ? this.to : this.from;
  }
  forward(e, r) {
    return e == (this.dir == r);
  }
  static find(e, r, n, i) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let a = e[o];
      if (a.from <= r && a.to >= r) {
        if (a.level == n) return o;
        (s < 0 || (0 != i ? i < 0 ? a.from < r : a.to > r : e[s].level > a.level)) && (s = o);
      }
    }
    if (s < 0) throw RangeError("Index out of range");
    return s;
  }
}
function eG(e, r) {
  if (e.length != r.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    let s = r[n];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !eG(i.inner, s.inner)) return !1;
  }
  return !0;
}
let eX = [];
function eH(e, r, n, i, s) {
  for (let o = 0; o <= i.length; o++) {
    let a = o ? i[o - 1].to : r;
    let h = o < i.length ? i[o].from : n;
    let d = o ? 256 : s;
    for (function () {
      let r = a;
      let n = d;
      let i = d;
    }(); r < h; r++) {
      let s = eq(e.charCodeAt(r));
      512 == s ? s = n : 8 == s && 4 == i && (s = 16);
      eX[r] = 4 == s ? 2 : s;
      7 & s && (i = s);
      n = s;
    }
    for (function () {
      let e = a;
      let r = d;
      let i = d;
    }(); e < h; e++) {
      let s = eX[e];
      if (128 == s) e < h - 1 && r == eX[e + 1] && 24 & r ? s = eX[e] = r : eX[e] = 256;else if (64 == s) {
        let s = e + 1;
        for (; s < h && 64 == eX[s];) s++;
        let o = e && 8 == r || s < n && 8 == eX[s] ? 1 == i ? 1 : 8 : 256;
        for (let r = e; r < s; r++) eX[r] = o;
        e = s - 1;
      } else 8 == s && 1 == i && (eX[e] = 1);
      r = s;
      7 & s && (i = s);
    }
  }
}
function eK(e, r, n, i, s) {
  let o = 1 == s ? 2 : 1;
  for (function () {
    let a = 0;
    let h = 0;
    let d = 0;
  }(); a <= i.length; a++) {
    let p = a ? i[a - 1].to : r;
    let g = a < i.length ? i[a].from : n;
    for (function () {
      let r = p;
      let n;
      let i;
      let a;
    }(); r < g; r++) if (i = eV[n = e.charCodeAt(r)]) {
      if (i < 0) {
        for (let e = h - 3; e >= 0; e -= 3) if (eB[e + 1] == -i) {
          let n = eB[e + 2];
          let i = 2 & n ? s : 4 & n ? 1 & n ? o : s : 0;
          i && (eX[r] = eX[eB[e]] = i);
          h = e;
          break;
        }
      } else if (189 == eB.length) break;else {
        eB[h++] = r;
        eB[h++] = n;
        eB[h++] = d;
      }
    } else if (2 == (a = eX[r]) || 1 == a) {
      let e = a == s;
      d = e ? 0 : 1;
      for (let r = h - 3; r >= 0; r -= 3) {
        let n = eB[r + 2];
        if (2 & n) break;
        if (e) eB[r + 2] |= 2;else {
          if (4 & n) break;
          eB[r + 2] |= 4;
        }
      }
    }
  }
}
function eJ(e, r, n, i) {
  for (function () {
    let s = 0;
    let o = i;
  }(); s <= n.length; s++) {
    let a = s ? n[s - 1].to : e;
    let h = s < n.length ? n[s].from : r;
    for (let d = a; d < h;) {
      let a = eX[d];
      if (256 == a) {
        let a = d + 1;
        for (;;) if (a == h) {
          if (s == n.length) break;
          a = n[s++].to;
          h = s < n.length ? n[s].from : r;
        } else if (256 == eX[a]) a++;else break;
        let p = 1 == o;
        let g = p == ((a < r ? eX[a] : i) == 1) ? p ? 1 : 2 : i;
        for (function () {
          let r = a;
          let i = s;
          let o = i ? n[i - 1].to : e;
        }(); r > d;) {
          r == o && (r = n[--i].from, o = i ? n[i - 1].to : e);
          eX[--r] = g;
        }
        d = a;
      } else {
        o = a;
        d++;
      }
    }
  }
}
function e0(e, r, n, i, s, o, a) {
  let h = i % 2 ? 2 : 1;
  if (i % 2 == s % 2) for (function () {
    let d = r;
    let p = 0;
  }(); d < n;) {
    let r = !0;
    let g = !1;
    if (p == o.length || d < o[p].from) {
      let e = eX[d];
      e != h && (r = !1, g = 16 == e);
    }
    let m = r || 1 != h ? null : [];
    let v = r ? i : i + 1;
    let y = d;
    o: for (;;) if (p < o.length && y == o[p].from) {
      if (g) break;
      let b = o[p];
      if (!r) for (function () {
        let e = b.to;
        let r = p + 1;
      }();;) {
        if (e == n) break o;
        if (r < o.length && o[r].from == e) e = o[r++].to;else if (eX[e] == h) break o;else break;
      }
      p++;
      m ? m.push(b) : (b.from > d && a.push(new eY(d, b.from, v)), e1(e, b.direction == ez != !(v % 2) ? i + 1 : i, s, b.inner, b.from, b.to, a), d = b.to);
      y = b.to;
    } else if (y == n || (r ? eX[y] != h : eX[y] == h)) break;else y++;
    m ? e0(e, d, y, i + 1, s, m, a) : d < y && a.push(new eY(d, y, v));
    d = y;
  } else for (function () {
    let d = n;
    let p = o.length;
  }(); d > r;) {
    let n = !0;
    let g = !1;
    if (!p || d > o[p - 1].to) {
      let e = eX[d - 1];
      e != h && (n = !1, g = 16 == e);
    }
    let m = n || 1 != h ? null : [];
    let v = n ? i : i + 1;
    let y = d;
    o: for (;;) if (p && y == o[p - 1].to) {
      if (g) break;
      let b = o[--p];
      if (!n) for (function () {
        let e = b.from;
        let n = p;
      }();;) {
        if (e == r) break o;
        if (n && o[n - 1].to == e) e = o[--n].from;else if (eX[e - 1] == h) break o;else break;
      }
      m ? m.push(b) : (b.to < d && a.push(new eY(b.to, d, v)), e1(e, b.direction == ez != !(v % 2) ? i + 1 : i, s, b.inner, b.from, b.to, a), d = b.from);
      y = b.from;
    } else if (y == r || (n ? eX[y - 1] != h : eX[y - 1] == h)) break;else y--;
    m ? e0(e, y, d, i + 1, s, m, a) : y < d && a.push(new eY(y, d, v));
    d = y;
  }
}
function e1(e, r, n, i, s, o, a) {
  let h = r % 2 ? 2 : 1;
  eH(e, s, o, i, h);
  eK(e, s, o, i, h);
  eJ(s, o, i, h);
  e0(e, s, o, r, n, i, a);
}
function e2(e, r, n) {
  if (!e) return [new eY(0, 0, r == eZ ? 1 : 0)];
  if (r == ez && !n.length && !eW.test(e)) return e5(e.length);
  if (n.length) for (; e.length > eX.length;) eX[eX.length] = 256;
  let i = [];
  let s = r == ez ? 0 : 1;
  e1(e, s, s, n, 0, e.length, i);
  return i;
}
function e5(e) {
  return [new eY(0, e, 0)];
}
let e3 = "";
function e6(e, r, n, i, o) {
  var a;
  let h = i.head - e.from;
  let d = eY.find(r, h, null !== (a = i.bidiLevel) && void 0 !== a ? a : -1, i.assoc);
  let p = r[d];
  let g = p.side(o, n);
  if (h == g) {
    let e = d += o ? 1 : -1;
    if (e < 0 || e >= r.length) return null;
    h = (p = r[d = e]).side(!o, n);
    g = p.side(o, n);
  }
  let m = s.zK(e.text, h, p.forward(o, n));
  (m < p.from || m > p.to) && (m = g);
  e3 = e.text.slice(Math.min(h, m), Math.max(h, m));
  let v = d == (o ? r.length - 1 : 0) ? null : r[d + (o ? 1 : -1)];
  return v && m == g && v.level + (o ? 0 : 1) < p.level ? s.OF.cursor(v.side(!o, n) + e.from, v.forward(o, n) ? 1 : -1, v.level) : s.OF.cursor(m + e.from, p.forward(o, n) ? -1 : 1, p.level);
}
function e4(e, r, n) {
  for (let i = r; i < n; i++) {
    let r = eq(e.charCodeAt(i));
    if (1 == r) break;
    if (2 == r || 4 == r) return eZ;
  }
  return ez;
}
let e8 = s.sj.define();
let e7 = s.sj.define();
let e9 = s.sj.define();
let te = s.sj.define();
let tt = s.sj.define();
let tr = s.sj.define();
let tn = s.sj.define();
let ti = s.sj.define();
let ts = s.sj.define();
let to = s.sj.define({
  combine: e => e.some(e => e)
});
let ta = s.sj.define({
  combine: e => e.some(e => e)
});
let tl = s.sj.define();
class tu {
  constructor(e, r = "nearest", n = "nearest", i = 5, s = 5, o = !1) {
    this.range = e;
    this.y = r;
    this.x = n;
    this.yMargin = i;
    this.xMargin = s;
    this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new tu(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new tu(s.OF.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
let tc = s.Pe.define({
  map: (e, r) => e.map(r)
});
let th = s.Pe.define();
export function $$td19(e, r, n) {
  let i = e.facet(te);
  i.length ? i[0](r) : window.onerror ? window.onerror(String(r), n, void 0, void 0, r) : n ? console.error(n + ":", r) : console.error(r);
}
let tf = s.sj.define({
  combine: e => !e.length || e[0]
});
let tp = 0;
let tg = s.sj.define();
export class $$tm5 {
  constructor(e, r, n, i, s) {
    this.id = e;
    this.create = r;
    this.domEventHandlers = n;
    this.domEventObservers = i;
    this.extension = s(this);
  }
  static define(e, r) {
    let {
      eventHandlers,
      eventObservers,
      provide,
      decorations
    } = r || {};
    return new $$tm5(tp++, e, eventHandlers, eventObservers, e => {
      let r = [tg.of(e)];
      decorations && r.push(tO.of(r => {
        let n = r.plugin(e);
        return n ? decorations(n) : $$eS0.none;
      }));
      provide && r.push(provide(e));
      return r;
    });
  }
  static fromClass(e, r) {
    return $$tm5.define(r => new e(r), r);
  }
}
class tv {
  constructor(e) {
    this.spec = e;
    this.mustUpdate = null;
    this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(e);
        } catch (r) {
          if ($$td19(e.state, r, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch (e) {}
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.create(e);
    } catch (r) {
      $$td19(e.state, r, "CodeMirror plugin crashed");
      this.deactivate();
    }
    return this;
  }
  destroy(e) {
    var r;
    if (this.value?.destroy) try {
      this.value.destroy();
    } catch (r) {
      $$td19(e.state, r, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
let ty = s.sj.define();
let tb = s.sj.define();
let tO = s.sj.define();
let tx = s.sj.define();
let tw = s.sj.define();
let tk = s.sj.define();
function t_(e, r) {
  let n = e.state.facet(tk);
  if (!n.length) return n;
  let i = n.map(r => r instanceof Function ? r(e) : r);
  let o = [];
  s.om.spans(i, r.from, r.to, {
    point() {},
    span(e, n, i, s) {
      let a = e - r.from;
      let h = n - r.from;
      let d = o;
      for (let e = i.length - 1; e >= 0; e--, s--) {
        let n = i[e].spec.bidiIsolate;
        let o;
        if (null == n && (n = e4(r.text, a, h)), s > 0 && d.length && (o = d[d.length - 1]).to == a && o.direction == n) {
          o.to = h;
          d = o.inner;
        } else {
          let e = {
            from: a,
            to: h,
            direction: n,
            inner: []
          };
          d.push(e);
          d = e.inner;
        }
      }
    }
  });
  return o;
}
let tS = s.sj.define();
function tE(e) {
  let r = 0;
  let n = 0;
  let i = 0;
  let s = 0;
  for (let o of e.state.facet(tS)) {
    let a = o(e);
    a && (null != a.left && (r = Math.max(r, a.left)), null != a.right && (n = Math.max(n, a.right)), null != a.top && (i = Math.max(i, a.top)), null != a.bottom && (s = Math.max(s, a.bottom)));
  }
  return {
    left: r,
    right: n,
    top: i,
    bottom: s
  };
}
let tA = s.sj.define();
class tC {
  constructor(e, r, n, i) {
    this.fromA = e;
    this.toA = r;
    this.fromB = n;
    this.toB = i;
  }
  join(e) {
    return new tC(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let r = e.length;
    let n = this;
    for (; r > 0; r--) {
      let i = e[r - 1];
      if (!(i.fromA > n.toA)) {
        if (i.toA < n.fromA) break;
        n = n.join(i);
        e.splice(r - 1, 1);
      }
    }
    e.splice(r, 0, n);
    return e;
  }
  static extendWithRanges(e, r) {
    if (0 == r.length) return e;
    let n = [];
    for (function () {
      let i = 0;
      let s = 0;
      let o = 0;
      let a = 0;
    }();; i++) {
      let h = i == e.length ? null : e[i];
      let d = o - a;
      let p = h ? h.fromB : 1e9;
      for (; s < r.length && r[s] < p;) {
        let e = r[s];
        let i = r[s + 1];
        let o = Math.max(a, e);
        let h = Math.min(p, i);
        if (o <= h && new tC(o + d, h + d, o, h).addToSet(n), i > p) break;
        s += 2;
      }
      if (!h) return n;
      new tC(h.fromA, h.toA, h.fromB, h.toB).addToSet(n);
      o = h.toA;
      a = h.toB;
    }
  }
}
class tT {
  constructor(e, r, n) {
    for (let i of (this.view = e, this.state = r, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = s.VR.empty(this.startState.doc.length), n)) this.changes = this.changes.compose(i.changes);
    let i = [];
    this.changes.iterChangedRanges((e, r, n, s) => i.push(new tC(e, r, n, s)));
    this.changedRanges = i;
  }
  static create(e, r, n) {
    return new tT(e, r, n);
  }
  get viewportChanged() {
    return (4 & this.flags) > 0;
  }
  get viewportMoved() {
    return (8 & this.flags) > 0;
  }
  get heightChanged() {
    return (2 & this.flags) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (18 & this.flags) > 0;
  }
  get focusChanged() {
    return (1 & this.flags) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some(e => e.selection);
  }
  get empty() {
    return 0 == this.flags && 0 == this.transactions.length;
  }
}
class tI extends B {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super();
    this.view = e;
    this.decorations = [];
    this.dynamicDecorationMap = [!1];
    this.domChanged = null;
    this.hasComposition = null;
    this.markedForComposition = new Set();
    this.editContextFormatting = $$eS0.none;
    this.lastCompositionAfterCursor = !1;
    this.minWidth = 0;
    this.minWidthFrom = 0;
    this.minWidthTo = 0;
    this.impreciseAnchor = null;
    this.impreciseHead = null;
    this.forceSelection = !1;
    this.lastUpdate = Date.now();
    this.setDOM(e.contentDOM);
    this.children = [new eR()];
    this.children[0].setParent(this);
    this.updateDeco();
    this.updateInner([new tC(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var r;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({
      fromA: e,
      toA: r
    }) => r < this.minWidthFrom || e > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    this.updateEditContextFormatting(e);
    let i = -1;
    !(this.view.inputState.composing >= 0) || this.view.observer.editContext || (this.domChanged?.newSel ? i = this.domChanged.newSel.head : tj(e.changes, this.hasComposition) || e.selectionSet || (i = e.state.selection.main.head));
    let s = i > -1 ? tM(this.view, e.changes, i) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let {
        from,
        to
      } = this.hasComposition;
      n = new tC(from, to, e.changes.mapPos(from, -1), e.changes.mapPos(to, 1)).addToSet(n.slice());
    }
    this.hasComposition = s ? {
      from: s.range.fromB,
      to: s.range.toB
    } : null;
    (ea.ie || ea.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = t$(this.decorations, this.updateDeco(), e.changes);
    n = tC.extendWithRanges(n, o);
    return (!!(7 & this.flags) || 0 != n.length) && (this.updateInner(n, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, r, n) {
    this.view.viewState.mustMeasureContent = !0;
    this.updateChildren(e, r, n);
    let {
      observer
    } = this.view;
    observer.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px";
      this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let e = ea.chrome || ea.ios ? {
        node: observer.selectionRange.focusNode,
        written: !1
      } : void 0;
      this.sync(this.view, e);
      this.flags &= -8;
      e && (e.written || observer.selectionRange.focusNode != e.node) && (this.forceSelection = !0);
      this.dom.style.height = "";
    });
    this.markedForComposition.forEach(e => e.flags &= -9);
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let e of this.children) e instanceof eM && e.widget instanceof eD && s.push(e.dom);
    observer.updateGaps(s);
  }
  updateChildren(e, r, n) {
    let i = n ? n.range.addToSet(e.slice()) : e;
    let s = this.childCursor(r);
    for (let e = i.length - 1;; e--) {
      let r = e >= 0 ? i[e] : null;
      if (!r) break;
      let {
        fromA,
        toA,
        fromB,
        toB
      } = r;
      let p;
      let g;
      let m;
      let v;
      if (n && n.range.fromB < toB && n.range.toB > fromB) {
        let e = eN.build(this.view.state.doc, fromB, n.range.fromB, this.decorations, this.dynamicDecorationMap);
        let r = eN.build(this.view.state.doc, n.range.toB, toB, this.decorations, this.dynamicDecorationMap);
        g = e.breakAtStart;
        m = e.openStart;
        v = r.openEnd;
        let i = this.compositionView(n);
        r.breakAtStart ? i.breakAfter = 1 : r.content.length && i.merge(i.length, i.length, r.content[0], !1, r.openStart, 0) && (i.breakAfter = r.content[0].breakAfter, r.content.shift());
        e.content.length && i.merge(0, 0, e.content[e.content.length - 1], !0, 0, e.openEnd) && e.content.pop();
        p = e.content.concat(i).concat(r.content);
      } else ({
        content: p,
        breakAtStart: g,
        openStart: m,
        openEnd: v
      } = eN.build(this.view.state.doc, fromB, toB, this.decorations, this.dynamicDecorationMap));
      let {
        i,
        off
      } = s.findPos(toA, 1);
      let {
        i: _i4,
        off: _off2
      } = s.findPos(fromA, -1);
      Y(this, _i4, _off2, i, off, p, g, m, v);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    for (let r of (this.editContextFormatting = this.editContextFormatting.map(e.changes), e.transactions)) for (let e of r.effects) e.is(th) && (this.editContextFormatting = e.value);
  }
  compositionView(e) {
    let r = new eu(e.text.nodeValue);
    for (let {
      deco
    } of (r.flags |= 8, e.marks)) r = new ec(deco, [r], r.length);
    let n = new eR();
    n.append(r, 0);
    return n;
  }
  fixCompositionDOM(e) {
    let r = (e, r) => {
      r.flags |= 8 | (r.children.some(e => 7 & e.flags) ? 1 : 0);
      this.markedForComposition.add(r);
      let n = B.get(e);
      n && n != r && (n.dom = null);
      r.setDOM(e);
    };
    let n = this.childPos(e.range.fromB, 1);
    let i = this.children[n.i];
    r(e.line, i);
    for (let s = e.marks.length - 1; s >= -1; s--) {
      n = i.childPos(n.off, 1);
      i = i.children[n.i];
      r(s >= 0 ? e.marks[s].node : e.text, i);
    }
  }
  updateSelection(e = !1, r = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement;
    let i = n == this.dom;
    let s = !i && !(this.view.state.facet(tf) || this.dom.tabIndex > -1) && O(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(i || r || s)) return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main;
    let h = this.moveToLine(this.domAtPos(a.anchor));
    let d = a.empty ? h : this.moveToLine(this.domAtPos(a.head));
    if (ea.gecko && a.empty && !this.hasComposition && tP(h)) {
      let e = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(e, h.node.childNodes[h.offset] || null));
      h = d = new Q(e, 0);
      o = !0;
    }
    let p = this.view.observer.selectionRange;
    !o && p.focusNode && (w(h.node, h.offset, p.anchorNode, p.anchorOffset) && w(d.node, d.offset, p.focusNode, p.focusOffset) || this.suppressWidgetCursorChange(p, a)) || (this.view.observer.ignore(() => {
      ea.android && ea.chrome && this.dom.contains(p.focusNode) && tL(p.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
        preventScroll: !0
      }));
      let e = y(this.view.root);
      if (e) {
        if (a.empty) {
          if (ea.gecko) {
            let e = tD(h.node, h.offset);
            if (e && 3 != e) {
              let r = (1 == e ? F : U)(h.node, h.offset);
              r && (h = new Q(r.node, r.offset));
            }
          }
          e.collapse(h.node, h.offset);
          null != a.bidiLevel && void 0 !== e.caretBidiLevel && (e.caretBidiLevel = a.bidiLevel);
        } else if (e.extend) {
          e.collapse(h.node, h.offset);
          try {
            e.extend(d.node, d.offset);
          } catch (e) {}
        } else {
          let r = document.createRange();
          a.anchor > a.head && ([h, d] = [d, h]);
          r.setEnd(d.node, d.offset);
          r.setStart(h.node, h.offset);
          e.removeAllRanges();
          e.addRange(r);
        }
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, d));
    this.impreciseAnchor = h.precise ? null : new Q(p.anchorNode, p.anchorOffset);
    this.impreciseHead = d.precise ? null : new Q(p.focusNode, p.focusOffset);
  }
  suppressWidgetCursorChange(e, r) {
    return this.hasComposition && r.empty && w(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == r.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let {
      view
    } = this;
    let r = view.state.selection.main;
    let n = y(view.root);
    let {
      anchorNode,
      anchorOffset
    } = view.observer.selectionRange;
    if (!n || !r.empty || !r.assoc || !n.modify) return;
    let o = eR.find(this, r.head);
    if (!o) return;
    let a = o.posAtStart;
    if (r.head == a || r.head == a + o.length) return;
    let h = this.coordsAt(r.head, -1);
    let d = this.coordsAt(r.head, 1);
    if (!h || !d || h.bottom > d.top) return;
    let p = this.domAtPos(r.head + r.assoc);
    n.collapse(p.node, p.offset);
    n.modify("move", r.assoc < 0 ? "forward" : "backward", "lineboundary");
    view.observer.readSelectionRange();
    let g = view.observer.selectionRange;
    view.docView.posFromDOM(g.anchorNode, g.anchorOffset) != r.from && n.collapse(anchorNode, anchorOffset);
  }
  moveToLine(e) {
    let r = this.dom;
    let n;
    if (e.node != r) return e;
    for (let i = e.offset; !n && i < r.childNodes.length; i++) {
      let e = B.get(r.childNodes[i]);
      e instanceof eR && (n = e.domAtPos(0));
    }
    for (let i = e.offset - 1; !n && i >= 0; i--) {
      let e = B.get(r.childNodes[i]);
      e instanceof eR && (n = e.domAtPos(e.length));
    }
    return n ? new Q(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let r = e; r;) {
      let e = B.get(r);
      if (e && e.rootView == this) return e;
      r = r.parentNode;
    }
    return null;
  }
  posFromDOM(e, r) {
    let n = this.nearest(e);
    if (!n) throw RangeError("Trying to find position for a DOM position outside of the document");
    return n.localPosFromDOM(e, r) + n.posAtStart;
  }
  domAtPos(e) {
    let {
      i,
      off
    } = this.childCursor().findPos(e, -1);
    for (; i < this.children.length - 1;) {
      let e = this.children[i];
      if (off < e.length || e instanceof eR) break;
      i++;
      n = 0;
    }
    return this.children[i].domAtPos(off);
  }
  coordsAt(e, r) {
    var _this = this;
    let n = null;
    let i = 0;
    for (function () {
      let s = _this.length;
      let o = _this.children.length - 1;
    }(); o >= 0; o--) {
      let a = this.children[o];
      let h = s - a.breakAfter;
      let d = h - a.length;
      if (h < e) break;
      if (d <= e && (d < e || a.covers(-1)) && (h > e || a.covers(1)) && (!n || a instanceof eR && !(n instanceof eR && r >= 0))) {
        n = a;
        i = d;
      } else if (n && d == e && h == e && a instanceof eM && 2 > Math.abs(r)) {
        if (a.deco.startSide < 0) break;
        o && (n = null);
      }
      s = d;
    }
    return n ? n.coordsAt(e - i, r) : null;
  }
  coordsForChar(e) {
    let {
      i: _i5,
      off
    } = this.childPos(e, 1);
    let i = this.children[_i5];
    if (!(i instanceof eR)) return null;
    for (; i.children.length;) {
      let {
        i,
        off
      } = i.childPos(off, 1);
      for (;; i++) {
        if (i == i.children.length) return null;
        if ((i = i.children[i]).length) break;
      }
      n = off;
    }
    if (!(i instanceof eu)) return null;
    let o = s.zK(i.text, off);
    if (o == off) return null;
    let a = N(i.dom, off, o).getClientRects();
    for (let e = 0; e < a.length; e++) {
      let r = a[e];
      if (e == a.length - 1 || r.top < r.bottom && r.left < r.right) return r;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let r = [];
    let {
      from,
      to
    } = e;
    let s = this.view.contentDOM.clientWidth;
    let o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
    let a = -1;
    let h = this.view.textDirection == $$ej1.LTR;
    for (function () {
      let e = 0;
      let d = 0;
    }(); d < this.children.length; d++) {
      let p = this.children[d];
      let g = e + p.length;
      if (g > to) break;
      if (e >= from) {
        let n = p.dom.getBoundingClientRect();
        if (r.push(n.height), o) {
          let r = p.dom.lastChild;
          let i = r ? x(r) : [];
          if (i.length) {
            let r = i[i.length - 1];
            let o = h ? r.right - n.left : n.right - r.left;
            o > a && (a = o, this.minWidth = s, this.minWidthFrom = e, this.minWidthTo = g);
          }
        }
      }
      e = g + p.breakAfter;
    }
    return r;
  }
  textDirectionAt(e) {
    let {
      i
    } = this.childPos(e, 1);
    return "rtl" == getComputedStyle(this.children[i].dom).direction ? $$ej1.RTL : $$ej1.LTR;
  }
  measureTextSize() {
    for (let e of this.children) if (e instanceof eR) {
      let r = e.measureTextSize();
      if (r) return r;
    }
    let e = document.createElement("div");
    let r;
    let n;
    let i;
    e.className = "cm-line";
    e.style.width = "99999px";
    e.style.position = "absolute";
    e.textContent = "abc def ghi jkl mno pqr stu";
    this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = x(e.firstChild)[0];
      r = e.getBoundingClientRect().height;
      n = s ? s.width / 27 : 7;
      i = s ? s.height : r;
      e.remove();
    });
    return {
      lineHeight: r,
      charWidth: n,
      textHeight: i
    };
  }
  childCursor(e = this.length) {
    let r = this.children.length;
    r && (e -= this.children[--r].length);
    return new W(this.children, e, r);
  }
  computeBlockGapDeco() {
    let e = [];
    let r = this.view.viewState;
    for (function () {
      let n = 0;
      let i = 0;
    }();; i++) {
      let s = i == r.viewports.length ? null : r.viewports[i];
      let o = s ? s.from - 1 : this.length;
      if (o > n) {
        let i = (r.lineBlockAt(o).bottom - r.lineBlockAt(n).top) / this.view.scaleY;
        e.push($$eS0.replace({
          widget: new eD(i),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!s) break;
      n = s.to + 1;
    }
    return $$eS0.set(e);
  }
  updateDeco() {
    let e = 1;
    let r = this.view.state.facet(tO).map(r => (this.dynamicDecorationMap[e++] = "function" == typeof r) ? r(this.view) : r);
    let n = !1;
    let i = this.view.state.facet(tx).map((e, r) => {
      let i = "function" == typeof e;
      i && (n = !0);
      return i ? e(this.view) : e;
    });
    for (i.length && (this.dynamicDecorationMap[e++] = n, r.push(s.om.join(i))), this.decorations = [this.editContextFormatting, ...r, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length;) this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let r = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = r.top - e.yMargin;
      this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let r of this.view.state.facet(tl)) try {
      if (r(this.view, e.range, e)) return !0;
    } catch (e) {
      $$td19(this.view.state, e, "scroll handler");
    }
    let {
      range
    } = e;
    let n = this.coordsAt(range.head, range.empty ? range.assoc : range.head > range.anchor ? -1 : 1);
    let i;
    if (!n) return;
    !range.empty && (i = this.coordsAt(range.anchor, range.anchor > range.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, i.left),
      top: Math.min(n.top, i.top),
      right: Math.max(n.right, i.right),
      bottom: Math.max(n.bottom, i.bottom)
    });
    let s = tE(this.view);
    let o = {
      left: n.left - s.left,
      top: n.top - s.top,
      right: n.right + s.right,
      bottom: n.bottom + s.bottom
    };
    let {
      offsetWidth,
      offsetHeight
    } = this.view.scrollDOM;
    I(this.view.scrollDOM, o, range.head < range.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, offsetWidth), -offsetWidth), Math.max(Math.min(e.yMargin, offsetHeight), -offsetHeight), this.view.textDirection == $$ej1.LTR);
  }
}
function tP(e) {
  return 1 == e.node.nodeType && e.node.firstChild && (0 == e.offset || "false" == e.node.childNodes[e.offset - 1].contentEditable) && (e.offset == e.node.childNodes.length || "false" == e.node.childNodes[e.offset].contentEditable);
}
function tR(e, r) {
  let n = e.observer.selectionRange;
  if (!n.focusNode) return null;
  let i = F(n.focusNode, n.focusOffset);
  let s = U(n.focusNode, n.focusOffset);
  let o = i || s;
  if (s && i && s.node != i.node) {
    let r = B.get(s.node);
    if (!r || r instanceof eu && r.text != s.node.nodeValue) o = s;else if (e.docView.lastCompositionAfterCursor) {
      let e = B.get(i.node);
      !e || e instanceof eu && e.text != i.node.nodeValue || (o = s);
    }
  }
  if (e.docView.lastCompositionAfterCursor = o != i, !o) return null;
  let a = r - o.offset;
  return {
    from: a,
    to: a + o.node.nodeValue.length,
    node: o.node
  };
}
function tM(e, r, n) {
  let i = tR(e, n);
  if (!i) return null;
  let {
    node,
    from,
    to
  } = i;
  let h = node.nodeValue;
  if (/[\n\r]/.test(h) || e.state.doc.sliceString(i.from, i.to) != h) return null;
  let d = r.invertedDesc;
  let p = new tC(d.mapPos(from), d.mapPos(to), from, to);
  let g = [];
  for (let r = node.parentNode;; r = r.parentNode) {
    let n = B.get(r);
    if (n instanceof ec) g.push({
      node: r,
      deco: n.mark
    });else {
      if (n instanceof eR || "DIV" == r.nodeName && r.parentNode == e.contentDOM) return {
        range: p,
        text: node,
        marks: g,
        line: r
      };
      if (r == e.contentDOM) return null;
      g.push({
        node: r,
        deco: new eE({
          inclusive: !0,
          attributes: ew(r),
          tagName: r.tagName.toLowerCase()
        })
      });
    }
  }
}
function tD(e, r) {
  return 1 != e.nodeType ? 0 : (r && "false" == e.childNodes[r - 1].contentEditable ? 1 : 0) | (r < e.childNodes.length && "false" == e.childNodes[r].contentEditable ? 2 : 0);
}
let tN = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, r) {
    eP(e, r, this.changes);
  }
  comparePoint(e, r) {
    eP(e, r, this.changes);
  }
  boundChange(e) {
    eP(e, e, this.changes);
  }
};
function t$(e, r, n) {
  let i = new tN();
  s.om.compare(e, r, n, i);
  return i.changes;
}
function tL(e, r) {
  for (let n = e; n && n != r; n = n.assignedSlot || n.parentNode) if (1 == n.nodeType && "false" == n.contentEditable) return !0;
  return !1;
}
function tj(e, r) {
  let n = !1;
  r && e.iterChangedRanges((e, i) => {
    e < r.to && i > r.from && (n = !0);
  });
  return n;
}
function tz(e, r, n = 1) {
  let i = e.charCategorizer(r);
  let o = e.doc.lineAt(r);
  let a = r - o.from;
  if (0 == o.length) return s.OF.cursor(r);
  0 == a ? n = 1 : a == o.length && (n = -1);
  let h = a;
  let d = a;
  n < 0 ? h = s.zK(o.text, a, !1) : d = s.zK(o.text, a);
  let p = i(o.text.slice(h, d));
  for (; h > 0;) {
    let e = s.zK(o.text, h, !1);
    if (i(o.text.slice(e, h)) != p) break;
    h = e;
  }
  for (; d < o.length;) {
    let e = s.zK(o.text, d);
    if (i(o.text.slice(d, e)) != p) break;
    d = e;
  }
  return s.OF.range(h + o.from, d + o.from);
}
function tZ(e, r) {
  return r.left > e ? r.left - e : Math.max(0, e - r.right);
}
function tF(e, r) {
  return r.top > e ? r.top - e : Math.max(0, e - r.bottom);
}
function tU(e, r) {
  return e.top < r.bottom - 1 && e.bottom > r.top + 1;
}
function tQ(e, r) {
  return r < e.top ? {
    top: r,
    left: e.left,
    right: e.right,
    bottom: e.bottom
  } : e;
}
function tV(e, r) {
  return r > e.bottom ? {
    top: e.top,
    left: e.left,
    right: e.right,
    bottom: r
  } : e;
}
function tB(e, r, n) {
  let i;
  let s;
  let o;
  let a;
  let h;
  let d;
  let p;
  let g;
  let m = !1;
  for (let v = e.firstChild; v; v = v.nextSibling) {
    let e = x(v);
    for (let y = 0; y < e.length; y++) {
      let b = e[y];
      d && tU(d, b) && (b = tQ(tV(b, d.bottom), d.top));
      let O = tZ(r, b);
      let x = tF(n, b);
      if (0 == O && 0 == x) return 3 == v.nodeType ? tq(v, r, n) : tB(v, r, n);
      if (!h || g > x || g == x && p > O) {
        h = v;
        d = b;
        p = O;
        g = x;
        let i = x ? n < b.top ? -1 : 1 : O ? r < b.left ? -1 : 1 : 0;
        m = !i || (i > 0 ? y < e.length - 1 : y > 0);
      }
      0 == O ? n > b.bottom && (!o || o.bottom < b.bottom) ? (i = v, o = b) : n < b.top && (!a || a.top > b.top) && (s = v, a = b) : o && tU(o, b) ? o = tV(o, b.bottom) : a && tU(a, b) && (a = tQ(a, b.top));
    }
  }
  if (o && o.bottom >= n ? (h = i, d = o) : a && a.top <= n && (h = s, d = a), !h) return {
    node: e,
    offset: 0
  };
  let v = Math.max(d.left, Math.min(d.right, r));
  if (3 == h.nodeType) return tq(h, v, n);
  if (m && "false" != h.contentEditable) return tB(h, v, n);
  let y = Array.prototype.indexOf.call(e.childNodes, h) + (r >= (d.left + d.right) / 2 ? 1 : 0);
  return {
    node: e,
    offset: y
  };
}
function tq(e, r, n) {
  let i = e.nodeValue.length;
  let s = -1;
  let o = 1e9;
  let a = 0;
  for (let h = 0; h < i; h++) {
    let i = N(e, h, h + 1).getClientRects();
    for (let d = 0; d < i.length; d++) {
      let p = i[d];
      if (p.top == p.bottom) continue;
      a || (a = r - p.left);
      let g = (p.top > n ? p.top - n : n - p.bottom) - 1;
      if (p.left - 1 <= r && p.right + 1 >= r && g < o) {
        let n = r >= (p.left + p.right) / 2;
        let i = n;
        if ((ea.chrome || ea.gecko) && N(e, h).getBoundingClientRect().left == p.right && (i = !n), g <= 0) return {
          node: e,
          offset: h + (i ? 1 : 0)
        };
        s = h + (i ? 1 : 0);
        o = g;
      }
    }
  }
  return {
    node: e,
    offset: s > -1 ? s : a > 0 ? e.nodeValue.length : 0
  };
}
function tW(e, r, n, i = -1) {
  var s;
  var o;
  let a = e.contentDOM.getBoundingClientRect();
  let h = a.top + e.viewState.paddingTop;
  let d;
  let {
    docHeight
  } = e.viewState;
  let {
    x: _x,
    y: _y
  } = r;
  let v = _y - h;
  if (v < 0) return 0;
  if (v > docHeight) return e.state.doc.length;
  for (function () {
    let r = e.viewState.heightOracle.textHeight / 2;
    let s = !1;
  }(); (d = e.elementAtHeight(v)).type != e_.Text;) for (; !((v = i > 0 ? d.bottom + r : d.top - r) >= 0) || !(v <= docHeight);) {
    if (s) return n ? null : 0;
    s = !0;
    i = -i;
  }
  m = h + v;
  let y = d.from;
  if (y < e.viewport.from) return 0 == e.viewport.from ? 0 : n ? null : tY(e, a, d, _x, _y);
  if (y > e.viewport.to) return e.viewport.to == e.state.doc.length ? e.state.doc.length : n ? null : tY(e, a, d, _x, _y);
  let b = e.dom.ownerDocument;
  let O = e.root.elementFromPoint ? e.root : b;
  let x = O.elementFromPoint(_x, _y);
  x && !e.contentDOM.contains(x) && (x = null);
  !x && (g = Math.max(a.left + 1, Math.min(a.right - 1, _x)), (x = O.elementFromPoint(_x, _y)) && !e.contentDOM.contains(x) && (x = null));
  let w;
  let k = -1;
  if (x && e.docView.nearest(x)?.isEditable != !1) {
    if (b.caretPositionFromPoint) {
      let e = b.caretPositionFromPoint(_x, _y);
      e && ({
        offsetNode: w,
        offset: k
      } = e);
    } else if (b.caretRangeFromPoint) {
      let r = b.caretRangeFromPoint(_x, _y);
      r && ({
        startContainer: w,
        startOffset: k
      } = r, (!e.contentDOM.contains(w) || ea.safari && tG(w, k, _x) || ea.chrome && tX(w, k, _x)) && (w = void 0));
    }
    w && (k = Math.min(E(w), k));
  }
  if (!w || !e.docView.dom.contains(w)) {
    let r = eR.find(e.docView, y);
    if (!r) return v > d.top + d.height / 2 ? d.to : d.from;
    ({
      node: w,
      offset: k
    } = tB(r.dom, _x, _y));
  }
  let _ = e.docView.nearest(w);
  if (!_) return null;
  if (!_.isWidget || _.dom?.nodeType != 1) return _.localPosFromDOM(w, k) + _.posAtStart;
  {
    let e = _.dom.getBoundingClientRect();
    return r.y < e.top || r.y <= e.bottom && r.x <= (e.left + e.right) / 2 ? _.posAtStart : _.posAtEnd;
  }
}
function tY(e, r, n, i, o) {
  let a = Math.round((i - r.left) * e.defaultCharacterWidth);
  if (e.lineWrapping && n.height > 1.5 * e.defaultLineHeight) {
    let r = e.viewState.heightOracle.textHeight;
    a += Math.floor((o - n.top - (e.defaultLineHeight - r) * .5) / r) * e.viewState.heightOracle.lineLength;
  }
  let h = e.state.sliceDoc(n.from, n.to);
  return n.from + s.kn(h, a, e.state.tabSize);
}
function tG(e, r, n) {
  let i;
  if (3 != e.nodeType || r != (i = e.nodeValue.length)) return !1;
  for (let r = e.nextSibling; r; r = r.nextSibling) if (1 != r.nodeType || "BR" != r.nodeName) return !1;
  return N(e, i - 1, i).getBoundingClientRect().left > n;
}
function tX(e, r, n) {
  if (0 != r) return !1;
  for (let r = e;;) {
    let e = r.parentNode;
    if (!e || 1 != e.nodeType || e.firstChild != r) return !1;
    if (e.classList.contains("cm-line")) break;
    r = e;
  }
  return n - (1 == e.nodeType ? e.getBoundingClientRect() : N(e, 0, Math.max(e.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
}
function tH(e, r) {
  let n = e.lineBlockAt(r);
  if (Array.isArray(n.type)) {
    for (let e of n.type) if (e.to > r || e.to == r && (e.to == n.to || e.type == e_.Text)) return e;
  }
  return n;
}
function tK(e, r, n, i) {
  let o = tH(e, r.head);
  let a = i && o.type == e_.Text && (e.lineWrapping || o.widgetLineBreaks) ? e.coordsAtPos(r.assoc < 0 && r.head > o.from ? r.head - 1 : r.head) : null;
  if (a) {
    let r = e.dom.getBoundingClientRect();
    let i = e.textDirectionAt(o.from);
    let h = e.posAtCoords({
      x: n == (i == $$ej1.LTR) ? r.right - 1 : r.left + 1,
      y: (a.top + a.bottom) / 2
    });
    if (null != h) return s.OF.cursor(h, n ? -1 : 1);
  }
  return s.OF.cursor(n ? o.to : o.from, n ? -1 : 1);
}
function tJ(e, r, n, i) {
  let s = e.state.doc.lineAt(r.head);
  let o = e.bidiSpans(s);
  let a = e.textDirectionAt(s.from);
  for (function () {
    let h = r;
    let d = null;
  }();;) {
    let r = e6(s, o, a, h, n);
    let p = e3;
    if (!r) {
      if (s.number == (n ? e.state.doc.lines : 1)) return h;
      p = "\n";
      s = e.state.doc.line(s.number + (n ? 1 : -1));
      o = e.bidiSpans(s);
      r = e.visualLineSide(s, !n);
    }
    if (d) {
      if (!d(p)) return h;
    } else {
      if (!i) return r;
      d = i(p);
    }
    h = r;
  }
}
function t0(e, r, n) {
  let i = e.state.charCategorizer(r);
  let o = i(n);
  return e => {
    let r = i(e);
    o == s.Je.Space && (o = r);
    return o == r;
  };
}
function t1(e, r, n, i) {
  let o = r.head;
  let a = n ? 1 : -1;
  if (o == (n ? e.state.doc.length : 0)) return s.OF.cursor(o, r.assoc);
  let h = r.goalColumn;
  let d;
  let p = e.contentDOM.getBoundingClientRect();
  let g = e.coordsAtPos(o, r.assoc || -1);
  let m = e.documentTop;
  if (g) {
    null == h && (h = g.left - p.left);
    d = a < 0 ? g.top : g.bottom;
  } else {
    let r = e.viewState.lineBlockAt(o);
    null == h && (h = Math.min(p.right - p.left, e.defaultCharacterWidth * (o - r.from)));
    d = (a < 0 ? r.top : r.bottom) + m;
  }
  let v = p.left + h;
  let y = null != i ? i : e.viewState.heightOracle.textHeight >> 1;
  for (let r = 0;; r += 10) {
    let n = d + (y + r) * a;
    let i = tW(e, {
      x: v,
      y: n
    }, !1, a);
    if (n < p.top || n > p.bottom || (a < 0 ? i < o : i > o)) {
      let r = e.docView.coordsForChar(i);
      let o = !r || n < r.top ? -1 : 1;
      return s.OF.cursor(i, o, void 0, h);
    }
  }
}
function t2(e, r, n) {
  for (;;) {
    let i = 0;
    for (let s of e) s.between(r - 1, r + 1, (e, s, o) => {
      if (r > e && r < s) {
        let o = i || n || (r - e < s - r ? -1 : 1);
        r = o < 0 ? e : s;
        i = o;
      }
    });
    if (!i) return r;
  }
}
function t5(e, r, n) {
  let i = t2(e.state.facet(tw).map(r => r(e)), n.from, r.head > n.from ? -1 : 1);
  return i == n.from ? n : s.OF.cursor(i, i < n.from ? 1 : -1);
}
let t3 = "\uFFFF";
class t6 {
  constructor(e, r) {
    this.points = e;
    this.text = "";
    this.lineSeparator = r.facet(s.$t.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += t3;
  }
  readRange(e, r) {
    if (!e) return this;
    let n = e.parentNode;
    for (let i = e;;) {
      this.findPointBefore(n, i);
      let e = this.text.length;
      this.readNode(i);
      let s = i.nextSibling;
      if (s == r) break;
      let o = B.get(i);
      let a = B.get(s);
      (o && a ? o.breakAfter : (o ? o.breakAfter : _(i)) || _(s) && ("BR" != i.nodeName || i.cmIgnore) && this.text.length > e) && this.lineBreak();
      i = s;
    }
    this.findPointBefore(n, r);
    return this;
  }
  readTextNode(e) {
    var _this2 = this;
    let r = e.nodeValue;
    for (let n of this.points) n.node == e && (n.pos = this.text.length + Math.min(n.offset, r.length));
    for (function () {
      let n = 0;
      let i = _this2.lineSeparator ? null : /\r\n?|\n/g;
    }();;) {
      let s = -1;
      let o = 1;
      let a;
      if (this.lineSeparator ? (s = r.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (a = i.exec(r)) && (s = a.index, o = a[0].length), this.append(r.slice(n, s < 0 ? r.length : s)), s < 0) break;
      if (this.lineBreak(), o > 1) for (let r of this.points) r.node == e && r.pos > this.text.length && (r.pos -= o - 1);
      n = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let r = B.get(e);
    let n = r && r.overrideDOMText;
    if (null != n) {
      this.findPointInside(e, n.length);
      for (let e = n.iter(); !e.next().done;) e.lineBreak ? this.lineBreak() : this.append(e.value);
    } else 3 == e.nodeType ? this.readTextNode(e) : "BR" == e.nodeName ? e.nextSibling && this.lineBreak() : 1 == e.nodeType && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, r) {
    for (let n of this.points) n.node == e && e.childNodes[n.offset] == r && (n.pos = this.text.length);
  }
  findPointInside(e, r) {
    for (let n of this.points) (3 == e.nodeType ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (t4(e, n.node, n.offset) ? r : 0));
  }
}
function t4(e, r, n) {
  for (;;) {
    if (!r || n < E(r)) return !1;
    if (r == e) return !0;
    n = k(r) + 1;
    r = r.parentNode;
  }
}
class t8 {
  constructor(e, r) {
    this.node = e;
    this.offset = r;
    this.pos = -1;
  }
}
class t7 {
  constructor(e, r, n, i) {
    this.typeOver = i;
    this.bounds = null;
    this.text = "";
    this.domChanged = r > -1;
    let {
      impreciseHead,
      impreciseAnchor
    } = e.docView;
    if (e.state.readOnly && r > -1) this.newSel = null;else if (r > -1 && (this.bounds = e.docView.domBoundsAround(r, n, 0))) {
      let r = impreciseHead || impreciseAnchor ? [] : rn(e);
      let n = new t6(r, e.state);
      n.readRange(this.bounds.startDOM, this.bounds.endDOM);
      this.text = n.text;
      this.newSel = ri(r, this.bounds.from);
    } else {
      let r = e.observer.selectionRange;
      let n = impreciseHead && impreciseHead.node == r.focusNode && impreciseHead.offset == r.focusOffset || !b(e.contentDOM, r.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(r.focusNode, r.focusOffset);
      let i = impreciseAnchor && impreciseAnchor.node == r.anchorNode && impreciseAnchor.offset == r.anchorOffset || !b(e.contentDOM, r.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(r.anchorNode, r.anchorOffset);
      let h = e.viewport;
      if ((ea.ios || ea.chrome) && e.state.selection.main.empty && n != i && (h.from > 0 || h.to < e.state.doc.length)) {
        let r = Math.min(n, i);
        let s = Math.max(n, i);
        let o = h.from - r;
        let a = h.to - s;
        (0 == o || 1 == o || 0 == r) && (0 == a || -1 == a || s == e.state.doc.length) && (n = 0, i = e.state.doc.length);
      }
      this.newSel = s.OF.single(i, n);
    }
  }
}
function t9(e, r) {
  let n;
  let {
    newSel
  } = r;
  let o = e.state.selection.main;
  let a = e.inputState.lastKeyTime > Date.now() - 100 ? e.inputState.lastKeyCode : -1;
  if (r.bounds) {
    let {
      from,
      to
    } = r.bounds;
    let d = o.from;
    let p = null;
    (8 === a || ea.android && r.text.length < to - from) && (d = o.to, p = "end");
    let g = rr(e.state.doc.sliceString(from, to, t3), r.text, d - from, p);
    g && (ea.chrome && 13 == a && g.toB == g.from + 2 && r.text.slice(g.from, g.toB) == t3 + t3 && g.toB--, n = {
      from: from + g.from,
      to: from + g.toA,
      insert: s.EY.of(r.text.slice(g.from, g.toB).split(t3))
    });
  } else newSel && (!e.hasFocus && e.state.facet(tf) || newSel.main.eq(o)) && (i = null);
  if (!n && !newSel) return !1;
  if (!n && r.typeOver && !o.empty && newSel && newSel.main.empty ? n = {
    from: o.from,
    to: o.to,
    insert: e.state.doc.slice(o.from, o.to)
  } : (ea.mac || ea.android) && n && n.from == n.to && n.from == o.head - 1 && /^\. ?$/.test(n.insert.toString()) && "off" == e.contentDOM.getAttribute("autocorrect") ? (newSel && 2 == n.insert.length && (i = s.OF.single(newSel.main.anchor - 1, newSel.main.head - 1)), n = {
    from: n.from,
    to: n.to,
    insert: s.EY.of([n.insert.toString().replace(".", " ")])
  }) : n && n.from >= o.from && n.to <= o.to && (n.from != o.from || n.to != o.to) && o.to - o.from - (n.to - n.from) <= 4 ? n = {
    from: o.from,
    to: o.to,
    insert: e.state.doc.slice(o.from, n.from).append(n.insert).append(e.state.doc.slice(n.to, o.to))
  } : ea.chrome && n && n.from == n.to && n.from == o.head && "\n " == n.insert.toString() && e.lineWrapping && (newSel && (i = s.OF.single(newSel.main.anchor - 1, newSel.main.head - 1)), n = {
    from: o.from,
    to: o.to,
    insert: s.EY.of([" "])
  }), n) return re(e, n, newSel, a);
  if (!newSel || newSel.main.eq(o)) return !1;
  {
    let r = !1;
    let n = "select";
    e.inputState.lastSelectionTime > Date.now() - 50 && ("select" == e.inputState.lastSelectionOrigin && (r = !0), n = e.inputState.lastSelectionOrigin);
    e.dispatch({
      selection: newSel,
      scrollIntoView: r,
      userEvent: n
    });
    return !0;
  }
}
function re(e, r, n, i = -1) {
  let s;
  if (ea.ios && e.inputState.flushIOSKey(r)) return !0;
  let o = e.state.selection.main;
  if (ea.android && (r.to == o.to && (r.from == o.from || r.from == o.from - 1 && " " == e.state.sliceDoc(r.from, o.from)) && 1 == r.insert.length && 2 == r.insert.lines && $(e.contentDOM, "Enter", 13) || (r.from == o.from - 1 && r.to == o.to && 0 == r.insert.length || 8 == i && r.insert.length < r.to - r.from && r.to > o.head) && $(e.contentDOM, "Backspace", 8) || r.from == o.from && r.to == o.to + 1 && 0 == r.insert.length && $(e.contentDOM, "Delete", 46))) return !0;
  let a = r.insert.toString();
  e.inputState.composing >= 0 && e.inputState.composing++;
  let h = () => s || (s = rt(e, r, n));
  e.state.facet(tr).some(n => n(e, r.from, r.to, a, h)) || e.dispatch(h());
  return !0;
}
function rt(e, r, n) {
  let i;
  let o = e.state;
  let a = o.selection.main;
  if (r.from >= a.from && r.to <= a.to && r.to - r.from >= (a.to - a.from) / 3 && (!n || n.main.empty && n.main.from == r.from + r.insert.length) && e.inputState.composing < 0) {
    let n = a.from < r.from ? o.sliceDoc(a.from, r.from) : "";
    let s = a.to > r.to ? o.sliceDoc(r.to, a.to) : "";
    i = o.replaceSelection(e.state.toText(n + r.insert.sliceString(0, void 0, e.state.lineBreak) + s));
  } else {
    let h = o.changes(r);
    let d = n && n.main.to <= h.newLength ? n.main : void 0;
    if (o.selection.ranges.length > 1 && e.inputState.composing >= 0 && r.to <= a.to && r.to >= a.to - 10) {
      let p = e.state.sliceDoc(r.from, r.to);
      let g;
      let m = n && tR(e, n.main.head);
      if (m) {
        let e = r.insert.length - (r.to - r.from);
        g = {
          from: m.from,
          to: m.to - e
        };
      } else g = e.state.doc.lineAt(a.head);
      let v = a.to - r.to;
      let y = a.to - a.from;
      i = o.changeByRange(n => {
        if (n.from == a.from && n.to == a.to) return {
          changes: h,
          range: d || n.map(h)
        };
        let i = n.to - v;
        let m = i - p.length;
        if (n.to - n.from != y || e.state.sliceDoc(m, i) != p || n.to >= g.from && n.from <= g.to) return {
          range: n
        };
        let b = o.changes({
          from: m,
          to: i,
          insert: r.insert
        });
        let O = n.to - a.to;
        return {
          changes: b,
          range: d ? s.OF.range(Math.max(0, d.anchor + O), Math.max(0, d.head + O)) : n.map(b)
        };
      });
    } else i = {
      changes: h,
      selection: d && o.selection.replaceRange(d)
    };
  }
  let h = "input.type";
  (e.composing || e.inputState.compositionPendingChange && e.inputState.compositionEndedAt > Date.now() - 50) && (e.inputState.compositionPendingChange = !1, h += ".compose", e.inputState.compositionFirstChange && (h += ".start", e.inputState.compositionFirstChange = !1));
  return o.update(i, {
    userEvent: h,
    scrollIntoView: !0
  });
}
function rr(e, r, n, i) {
  let s = Math.min(e.length, r.length);
  let o = 0;
  for (; o < s && e.charCodeAt(o) == r.charCodeAt(o);) o++;
  if (o == s && e.length == r.length) return null;
  let a = e.length;
  let h = r.length;
  for (; a > 0 && h > 0 && e.charCodeAt(a - 1) == r.charCodeAt(h - 1);) {
    a--;
    h--;
  }
  if ("end" == i) {
    let e = Math.max(0, o - Math.min(a, h));
    n -= a + e - o;
  }
  if (a < o && e.length < r.length) {
    let e = n <= o && n >= a ? o - n : 0;
    o -= e;
    h = o + (h - a);
    a = o;
  } else if (h < o) {
    let e = n <= o && n >= h ? o - n : 0;
    o -= e;
    a = o + (a - h);
    h = o;
  }
  return {
    from: o,
    toA: a,
    toB: h
  };
}
function rn(e) {
  let r = [];
  if (e.root.activeElement != e.contentDOM) return r;
  let {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  } = e.observer.selectionRange;
  anchorNode && (r.push(new t8(anchorNode, anchorOffset)), (focusNode != anchorNode || focusOffset != anchorOffset) && r.push(new t8(focusNode, focusOffset)));
  return r;
}
function ri(e, r) {
  if (0 == e.length) return null;
  let n = e[0].pos;
  let i = 2 == e.length ? e[1].pos : n;
  return n > -1 && i > -1 ? s.OF.single(n + r, i + r) : null;
}
class rs {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e;
    this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e;
    this.lastKeyCode = 0;
    this.lastKeyTime = 0;
    this.lastTouchTime = 0;
    this.lastFocusTime = 0;
    this.lastScrollTop = 0;
    this.lastScrollLeft = 0;
    this.pendingIOSKey = void 0;
    this.tabFocusMode = -1;
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastContextMenu = 0;
    this.scrollHandlers = [];
    this.handlers = Object.create(null);
    this.composing = -1;
    this.compositionFirstChange = null;
    this.compositionEndedAt = 0;
    this.compositionPendingKey = !1;
    this.compositionPendingChange = !1;
    this.mouseSelection = null;
    this.draggedContent = null;
    this.handleEvent = this.handleEvent.bind(this);
    this.notifiedFocused = e.hasFocus;
    ea.safari && e.contentDOM.addEventListener("input", () => null);
    ea.gecko && rV(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !(!ry(this.view, e) || this.ignoreDuringComposition(e)) && ("keydown" == e.type && this.keydown(e) || this.runHandlers(e.type, e));
  }
  runHandlers(e, r) {
    let n = this.handlers[e];
    if (n) {
      for (let e of n.observers) e(this.view, r);
      for (let e of n.handlers) {
        if (r.defaultPrevented) break;
        if (e(this.view, r)) {
          r.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let r = ra(e);
    let n = this.handlers;
    let i = this.view.contentDOM;
    for (let e in r) if ("scroll" != e) {
      let s = !r[e].handlers.length;
      let o = n[e];
      o && !o.handlers.length != s && (i.removeEventListener(e, this.handleEvent), o = null);
      o || i.addEventListener(e, this.handleEvent, {
        passive: s
      });
    }
    for (let e in n) "scroll" == e || r[e] || i.removeEventListener(e, this.handleEvent);
    this.handlers = r;
  }
  keydown(e) {
    let r;
    this.lastKeyCode = e.keyCode;
    this.lastKeyTime = Date.now();
    return !!(9 == e.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) || ((this.tabFocusMode > 0 && 27 != e.keyCode && 0 > rc.indexOf(e.keyCode) && (this.tabFocusMode = -1), ea.android && ea.chrome && !e.synthetic && (13 == e.keyCode || 8 == e.keyCode)) ? (this.view.observer.delayAndroidKey(e.key, e.keyCode), !0) : ea.ios && !e.synthetic && !e.altKey && !e.metaKey && ((r = rl.find(r => r.keyCode == e.keyCode)) && !e.ctrlKey || ru.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = r || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (229 != e.keyCode && this.view.observer.forceFlush(), !1));
  }
  flushIOSKey(e) {
    let r = this.pendingIOSKey;
    return !(!r || "Enter" == r.key && e && e.from < e.to && /^\S+$/.test(e.insert.toString())) && (this.pendingIOSKey = void 0, $(this.view.contentDOM, r.key, r.keyCode, r instanceof KeyboardEvent ? r : void 0));
  }
  ignoreDuringComposition(e) {
    return !!/^key/.test(e.type) && (this.composing > 0 || !!(ea.safari && !ea.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0));
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy();
    this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e);
    this.mouseSelection && this.mouseSelection.update(e);
    this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes));
    e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function ro(e, r) {
  return (n, i) => {
    try {
      return r.call(e, i, n);
    } catch (e) {
      $$td19(n.state, e);
    }
  };
}
function ra(e) {
  let r = Object.create(null);
  function n(e) {
    return r[e] || (r[e] = {
      observers: [],
      handlers: []
    });
  }
  for (let r of e) {
    let e = r.spec;
    if (e && e.domEventHandlers) for (let i in e.domEventHandlers) {
      let s = e.domEventHandlers[i];
      s && n(i).handlers.push(ro(r.value, s));
    }
    if (e && e.domEventObservers) for (let i in e.domEventObservers) {
      let s = e.domEventObservers[i];
      s && n(i).observers.push(ro(r.value, s));
    }
  }
  for (let e in rb) n(e).handlers.push(rb[e]);
  for (let e in rO) n(e).observers.push(rO[e]);
  return r;
}
let rl = [{
  key: "Backspace",
  keyCode: 8,
  inputType: "deleteContentBackward"
}, {
  key: "Enter",
  keyCode: 13,
  inputType: "insertParagraph"
}, {
  key: "Enter",
  keyCode: 13,
  inputType: "insertLineBreak"
}, {
  key: "Delete",
  keyCode: 46,
  inputType: "deleteContentForward"
}];
let ru = "dthko";
let rc = [16, 17, 18, 20, 91, 92, 224, 225];
let rh = 6;
function rd(e) {
  return .7 * Math.max(0, e) + 8;
}
function rf(e, r) {
  return Math.max(Math.abs(e.clientX - r.clientX), Math.abs(e.clientY - r.clientY));
}
class rp {
  constructor(e, r, n, i) {
    this.view = e;
    this.startEvent = r;
    this.style = n;
    this.mustSelect = i;
    this.scrollSpeed = {
      x: 0,
      y: 0
    };
    this.scrolling = -1;
    this.lastEvent = r;
    this.scrollParents = P(e.contentDOM);
    this.atoms = e.state.facet(tw).map(r => r(e));
    let o = e.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this));
    o.addEventListener("mouseup", this.up = this.up.bind(this));
    this.extend = r.shiftKey;
    this.multiple = e.state.facet(s.$t.allowMultipleSelections) && rg(e, r);
    this.dragging = !!rv(e, r) && 1 == rM(r) && null;
  }
  start(e) {
    !1 === this.dragging && this.select(e);
  }
  move(e) {
    if (0 == e.buttons) return this.destroy();
    if (this.dragging || null == this.dragging && 10 > rf(this.startEvent, e)) return;
    this.select(this.lastEvent = e);
    let r = 0;
    let n = 0;
    let i = 0;
    let s = 0;
    let o = this.view.win.innerWidth;
    let a = this.view.win.innerHeight;
    this.scrollParents.x && ({
      left: i,
      right: o
    } = this.scrollParents.x.getBoundingClientRect());
    this.scrollParents.y && ({
      top: s,
      bottom: a
    } = this.scrollParents.y.getBoundingClientRect());
    let h = tE(this.view);
    e.clientX - h.left <= i + rh ? r = -rd(i - e.clientX) : e.clientX + h.right >= o - rh && (r = rd(e.clientX - o));
    e.clientY - h.top <= s + rh ? n = -rd(s - e.clientY) : e.clientY + h.bottom >= a - rh && (n = rd(e.clientY - a));
    this.setScrollSpeed(r, n);
  }
  up(e) {
    null == this.dragging && this.select(this.lastEvent);
    this.dragging || e.preventDefault();
    this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move);
    e.removeEventListener("mouseup", this.up);
    this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, r) {
    this.scrollSpeed = {
      x: e,
      y: r
    };
    e || r ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let {
      x,
      y
    } = this.scrollSpeed;
    x && this.scrollParents.x && (this.scrollParents.x.scrollLeft += x, e = 0);
    y && this.scrollParents.y && (this.scrollParents.y.scrollTop += y, r = 0);
    (x || y) && this.view.win.scrollBy(x, y);
    !1 === this.dragging && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let r = null;
    for (let n = 0; n < e.ranges.length; n++) {
      let i = e.ranges[n];
      let o = null;
      if (i.empty) {
        let e = t2(this.atoms, i.from, 0);
        e != i.from && (o = s.OF.cursor(e, -1));
      } else {
        let e = t2(this.atoms, i.from, -1);
        let r = t2(this.atoms, i.to, 1);
        (e != i.from || r != i.to) && (o = s.OF.range(i.from == i.anchor ? e : r, i.from == i.head ? e : r));
      }
      o && (r || (r = e.ranges.slice()), r[n] = o);
    }
    return r ? s.OF.create(r, e.mainIndex) : e;
  }
  select(e) {
    let {
      view
    } = this;
    let n = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(view.state.selection, !1 === this.dragging)) && this.view.dispatch({
      selection: n,
      userEvent: "select.pointer"
    });
    this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some(e => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function rg(e, r) {
  let n = e.state.facet(e8);
  return n.length ? n[0](r) : ea.mac ? r.metaKey : r.ctrlKey;
}
function rm(e, r) {
  let n = e.state.facet(e7);
  return n.length ? n[0](r) : ea.mac ? !r.altKey : !r.ctrlKey;
}
function rv(e, r) {
  let {
    main
  } = e.state.selection;
  if (main.empty) return !1;
  let i = y(e.root);
  if (!i || 0 == i.rangeCount) return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let e = 0; e < s.length; e++) {
    let n = s[e];
    if (n.left <= r.clientX && n.right >= r.clientX && n.top <= r.clientY && n.bottom >= r.clientY) return !0;
  }
  return !1;
}
function ry(e, r) {
  if (!r.bubbles) return !0;
  for (function () {
    let n = r.target;
    let i;
  }(); n != e.contentDOM; n = n.parentNode) if (!n || 11 == n.nodeType || (i = B.get(n)) && i.ignoreEvent(r)) return !1;
  return !0;
}
let rb = Object.create(null);
let rO = Object.create(null);
let rx = ea.ie && ea.ie_version < 15 || ea.ios && ea.webkit_version < 604;
function rw(e) {
  let r = e.dom.parentNode;
  if (!r) return;
  let n = r.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  n.focus();
  setTimeout(() => {
    e.focus();
    n.remove();
    r_(e, n.value);
  }, 50);
}
function rk(e, r, n) {
  for (let i of e.facet(r)) n = i(n, e);
  return n;
}
function r_(e, r) {
  r = rk(e.state, ti, r);
  let {
    state
  } = e;
  let i;
  let o = 1;
  let a = state.toText(r);
  let h = a.lines == state.selection.ranges.length;
  if (null != rz && state.selection.ranges.every(e => e.empty) && rz == a.toString()) {
    let e = -1;
    i = state.changeByRange(i => {
      let d = state.doc.lineAt(i.from);
      if (d.from == e) return {
        range: i
      };
      e = d.from;
      let p = state.toText((h ? a.line(o++).text : r) + state.lineBreak);
      return {
        changes: {
          from: d.from,
          insert: p
        },
        range: s.OF.cursor(i.from + p.length)
      };
    });
  } else i = h ? state.changeByRange(e => {
    let r = a.line(o++);
    return {
      changes: {
        from: e.from,
        to: e.to,
        insert: r.text
      },
      range: s.OF.cursor(e.from + r.length)
    };
  }) : state.replaceSelection(a);
  e.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
function rS(e, r, n, i) {
  if (1 == i) return s.OF.cursor(r, n);
  if (2 == i) return tz(e.state, r, n);
  {
    let n = eR.find(e.docView, r);
    let i = e.state.doc.lineAt(n ? n.posAtEnd : r);
    let o = n ? n.posAtStart : i.from;
    let a = n ? n.posAtEnd : i.to;
    a < e.state.doc.length && a == i.to && a++;
    return s.OF.range(o, a);
  }
}
rO.scroll = e => {
  e.inputState.lastScrollTop = e.scrollDOM.scrollTop;
  e.inputState.lastScrollLeft = e.scrollDOM.scrollLeft;
};
rb.keydown = (e, r) => (e.inputState.setSelectionOrigin("select"), 27 == r.keyCode && 0 != e.inputState.tabFocusMode && (e.inputState.tabFocusMode = Date.now() + 2e3), !1);
rO.touchstart = (e, r) => {
  e.inputState.lastTouchTime = Date.now();
  e.inputState.setSelectionOrigin("select.pointer");
};
rO.touchmove = e => {
  e.inputState.setSelectionOrigin("select.pointer");
};
rb.mousedown = (e, r) => {
  if (e.observer.flush(), e.inputState.lastTouchTime > Date.now() - 2e3) return !1;
  let n = null;
  for (let i of e.state.facet(e9)) if (n = i(e, r)) break;
  if (n || 0 != r.button || (n = rD(e, r)), n) {
    let i = !e.hasFocus;
    e.inputState.startMouseSelection(new rp(e, r, n, i));
    i && e.observer.ignore(() => {
      D(e.contentDOM);
      let r = e.root.activeElement;
      r && !r.contains(e.contentDOM) && r.blur();
    });
    let s = e.inputState.mouseSelection;
    if (s) {
      s.start(r);
      return !1 === s.dragging;
    }
  }
  return !1;
};
let rE = (e, r, n) => r >= n.top && r <= n.bottom && e >= n.left && e <= n.right;
function rA(e, r, n, i) {
  let s = eR.find(e.docView, r);
  if (!s) return 1;
  let o = r - s.posAtStart;
  if (0 == o) return 1;
  if (o == s.length) return -1;
  let a = s.coordsAt(o, -1);
  if (a && rE(n, i, a)) return -1;
  let h = s.coordsAt(o, 1);
  return h && rE(n, i, h) ? 1 : a && a.bottom >= i ? -1 : 1;
}
function rC(e, r) {
  let n = e.posAtCoords({
    x: r.clientX,
    y: r.clientY
  }, !1);
  return {
    pos: n,
    bias: rA(e, n, r.clientX, r.clientY)
  };
}
let rT = ea.ie && ea.ie_version <= 11;
let rI = null;
let rP = 0;
let rR = 0;
function rM(e) {
  if (!rT) return e.detail;
  let r = rI;
  let n = rR;
  rI = e;
  rR = Date.now();
  return rP = !r || n > Date.now() - 400 && 2 > Math.abs(r.clientX - e.clientX) && 2 > Math.abs(r.clientY - e.clientY) ? (rP + 1) % 3 : 1;
}
function rD(e, r) {
  let n = rC(e, r);
  let i = rM(r);
  let o = e.state.selection;
  return {
    update(e) {
      e.docChanged && (n.pos = e.changes.mapPos(n.pos), o = o.map(e.changes));
    },
    get(r, a, h) {
      let d = rC(e, r);
      let p;
      let g = rS(e, d.pos, d.bias, i);
      if (n.pos != d.pos && !a) {
        let r = rS(e, n.pos, n.bias, i);
        let o = Math.min(r.from, g.from);
        let a = Math.max(r.to, g.to);
        g = o < g.from ? s.OF.range(o, a) : s.OF.range(a, o);
      }
      return a ? o.replaceRange(o.main.extend(g.from, g.to)) : h && 1 == i && o.ranges.length > 1 && (p = rN(o, d.pos)) ? p : h ? o.addRange(g) : s.OF.create([g]);
    }
  };
}
function rN(e, r) {
  for (let n = 0; n < e.ranges.length; n++) {
    let {
      from,
      to
    } = e.ranges[n];
    if (from <= r && to >= r) return s.OF.create(e.ranges.slice(0, n).concat(e.ranges.slice(n + 1)), e.mainIndex == n ? 0 : e.mainIndex - (e.mainIndex > n ? 1 : 0));
  }
  return null;
}
function r$(e, r, n, i) {
  if (!(n = rk(e.state, ti, n))) return;
  let s = e.posAtCoords({
    x: r.clientX,
    y: r.clientY
  }, !1);
  let {
    draggedContent
  } = e.inputState;
  let a = i && draggedContent && rm(e, r) ? {
    from: draggedContent.from,
    to: draggedContent.to
  } : null;
  let h = {
    from: s,
    insert: n
  };
  let d = e.state.changes(a ? [a, h] : h);
  e.focus();
  e.dispatch({
    changes: d,
    selection: {
      anchor: d.mapPos(s, -1),
      head: d.mapPos(s, 1)
    },
    userEvent: a ? "move.drop" : "input.drop"
  });
  e.inputState.draggedContent = null;
}
function rL(e, r) {
  let n = e.dom.parentNode;
  if (!n) return;
  let i = n.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px";
  i.value = r;
  i.focus();
  i.selectionEnd = r.length;
  i.selectionStart = 0;
  setTimeout(() => {
    i.remove();
    e.focus();
  }, 50);
}
function rj(e) {
  let r = [];
  let n = [];
  let i = !1;
  for (let i of e.selection.ranges) i.empty || (r.push(e.sliceDoc(i.from, i.to)), n.push(i));
  if (!r.length) {
    let s = -1;
    for (let {
      from
    } of e.selection.ranges) {
      let o = e.doc.lineAt(from);
      o.number > s && (r.push(o.text), n.push({
        from: o.from,
        to: Math.min(e.doc.length, o.to + 1)
      }));
      s = o.number;
    }
    i = !0;
  }
  return {
    text: rk(e, ts, r.join(e.lineBreak)),
    ranges: n,
    linewise: i
  };
}
rb.dragstart = (e, r) => {
  let {
    selection: {
      main
    }
  } = e.state;
  if (r.target.draggable) {
    let i = e.docView.nearest(r.target);
    if (i && i.isWidget) {
      let e = i.posAtStart;
      let r = e + i.length;
      (e >= main.to || r <= main.from) && (n = s.OF.range(e, r));
    }
  }
  let {
    inputState
  } = e;
  inputState.mouseSelection && (inputState.mouseSelection.dragging = !0);
  inputState.draggedContent = main;
  r.dataTransfer && (r.dataTransfer.setData("Text", rk(e.state, ts, e.state.sliceDoc(main.from, main.to))), r.dataTransfer.effectAllowed = "copyMove");
  return !1;
};
rb.dragend = e => (e.inputState.draggedContent = null, !1);
rb.drop = (e, r) => {
  if (!r.dataTransfer) return !1;
  if (e.state.readOnly) return !0;
  let n = r.dataTransfer.files;
  if (n && n.length) {
    let i = Array(n.length);
    let s = 0;
    let o = () => {
      ++s == n.length && r$(e, r, i.filter(e => null != e).join(e.state.lineBreak), !1);
    };
    for (let e = 0; e < n.length; e++) {
      let r = new FileReader();
      r.onerror = o;
      r.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(r.result) || (i[e] = r.result);
        o();
      };
      r.readAsText(n[e]);
    }
    return !0;
  }
  {
    let n = r.dataTransfer.getData("Text");
    if (n) {
      r$(e, r, n, !0);
      return !0;
    }
  }
  return !1;
};
rb.paste = (e, r) => {
  if (e.state.readOnly) return !0;
  e.observer.flush();
  let n = rx ? null : r.clipboardData;
  return n ? (r_(e, n.getData("text/plain") || n.getData("text/uri-list")), !0) : (rw(e), !1);
};
let rz = null;
rb.copy = rb.cut = (e, r) => {
  let {
    text,
    ranges,
    linewise
  } = rj(e.state);
  if (!text && !linewise) return !1;
  rz = linewise ? text : null;
  "cut" != r.type || e.state.readOnly || e.dispatch({
    changes: ranges,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let o = rx ? null : r.clipboardData;
  return o ? (o.clearData(), o.setData("text/plain", text), !0) : (rL(e, text), !1);
};
let rZ = s.YH.define();
function rF(e, r) {
  let n = [];
  for (let i of e.facet(tn)) {
    let s = i(e, r);
    s && n.push(s);
  }
  return n ? e.update({
    effects: n,
    annotations: rZ.of(!0)
  }) : null;
}
function rU(e) {
  setTimeout(() => {
    let r = e.hasFocus;
    if (r != e.inputState.notifiedFocused) {
      let n = rF(e.state, r);
      n ? e.dispatch(n) : e.update([]);
    }
  }, 10);
}
rO.focus = e => {
  e.inputState.lastFocusTime = Date.now();
  !e.scrollDOM.scrollTop && (e.inputState.lastScrollTop || e.inputState.lastScrollLeft) && (e.scrollDOM.scrollTop = e.inputState.lastScrollTop, e.scrollDOM.scrollLeft = e.inputState.lastScrollLeft);
  rU(e);
};
rO.blur = e => {
  e.observer.clearSelectionRange();
  rU(e);
};
rO.compositionstart = rO.compositionupdate = e => {
  !e.observer.editContext && (null == e.inputState.compositionFirstChange && (e.inputState.compositionFirstChange = !0), e.inputState.composing < 0 && (e.inputState.composing = 0));
};
rO.compositionend = e => {
  e.observer.editContext || (e.inputState.composing = -1, e.inputState.compositionEndedAt = Date.now(), e.inputState.compositionPendingKey = !0, e.inputState.compositionPendingChange = e.observer.pendingRecords().length > 0, e.inputState.compositionFirstChange = null, ea.chrome && ea.android ? e.observer.flushSoon() : e.inputState.compositionPendingChange ? Promise.resolve().then(() => e.observer.flush()) : setTimeout(() => {
    e.inputState.composing < 0 && e.docView.hasComposition && e.update([]);
  }, 50));
};
rO.contextmenu = e => {
  e.inputState.lastContextMenu = Date.now();
};
rb.beforeinput = (e, r) => {
  var n;
  var i;
  let s;
  if ("insertReplacementText" == r.inputType && e.observer.editContext) {
    let i = r.dataTransfer?.getData("text/plain");
    let s = r.getTargetRanges();
    if (i && s.length) {
      let r = s[0];
      let n = e.posAtDOM(r.startContainer, r.startOffset);
      let o = e.posAtDOM(r.endContainer, r.endOffset);
      re(e, {
        from: n,
        to: o,
        insert: e.state.toText(i)
      }, null);
      return !0;
    }
  }
  if (ea.chrome && ea.android && (s = rl.find(e => e.inputType == r.inputType)) && (e.observer.delayAndroidKey(s.key, s.keyCode), "Backspace" == s.key || "Delete" == s.key)) {
    let r = window.visualViewport?.height || 0;
    setTimeout(() => {
      var n;
      (window.visualViewport?.height || 0) > r + 10 && e.hasFocus && (e.contentDOM.blur(), e.focus());
    }, 100);
  }
  ea.ios && "deleteContentForward" == r.inputType && e.observer.flushSoon();
  ea.safari && "insertText" == r.inputType && e.inputState.composing >= 0 && setTimeout(() => rO.compositionend(e, r), 20);
  return !1;
};
let rQ = new Set();
function rV(e) {
  rQ.has(e) || (rQ.add(e), e.addEventListener("copy", () => {}), e.addEventListener("cut", () => {}));
}
let rB = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let rq = !1;
function rW() {
  rq = !1;
}
class rY {
  constructor(e) {
    this.lineWrapping = e;
    this.doc = s.EY.empty;
    this.heightSamples = {};
    this.lineHeight = 14;
    this.charWidth = 7;
    this.textHeight = 14;
    this.lineLength = 30;
  }
  heightForGap(e, r) {
    let n = this.doc.lineAt(r).number - this.doc.lineAt(e).number + 1;
    this.lineWrapping && (n += Math.max(0, Math.ceil((r - e - n * this.lineLength * .5) / this.lineLength)));
    return this.lineHeight * n;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    this.doc = e;
    return this;
  }
  mustRefreshForWrapping(e) {
    return rB.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let r = !1;
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      i < 0 ? n++ : this.heightSamples[Math.floor(10 * i)] || (r = !0, this.heightSamples[Math.floor(10 * i)] = !0);
    }
    return r;
  }
  refresh(e, r, n, i, s, o) {
    let a = rB.indexOf(e) > -1;
    let h = Math.round(r) != Math.round(this.lineHeight) || this.lineWrapping != a;
    if (this.lineWrapping = a, this.lineHeight = r, this.charWidth = n, this.textHeight = i, this.lineLength = s, h) {
      this.heightSamples = {};
      for (let e = 0; e < o.length; e++) {
        let r = o[e];
        r < 0 ? e++ : this.heightSamples[Math.floor(10 * r)] = !0;
      }
    }
    return h;
  }
}
class rG {
  constructor(e, r) {
    this.from = e;
    this.heights = r;
    this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class rX {
  constructor(e, r, n, i, s) {
    this.from = e;
    this.length = r;
    this.top = n;
    this.height = i;
    this._content = s;
  }
  get type() {
    return "number" == typeof this._content ? e_.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof eC ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return "number" == typeof this._content ? this._content : 0;
  }
  join(e) {
    let r = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new rX(this.from, this.length + e.length, this.top, this.height + e.height, r);
  }
}
var rH = function (e) {
  e[e.ByPos = 0] = "ByPos";
  e[e.ByHeight = 1] = "ByHeight";
  e[e.ByPosNoHeight = 2] = "ByPosNoHeight";
  return e;
}(rH || (rH = {}));
let rK = .001;
class rJ {
  constructor(e, r, n = 2) {
    this.length = e;
    this.height = r;
    this.flags = n;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | -3 & this.flags;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > rK && (rq = !0), this.height = e);
  }
  replace(e, r, n) {
    return rJ.of(n);
  }
  decomposeLeft(e, r) {
    r.push(this);
  }
  decomposeRight(e, r) {
    r.push(this);
  }
  applyChanges(e, r, n, i) {
    let s = this;
    let o = n.doc;
    for (let a = i.length - 1; a >= 0; a--) {
      let {
        fromA,
        toA,
        fromB,
        toB
      } = i[a];
      let m = s.lineAt(fromA, rH.ByPosNoHeight, n.setDoc(r), 0, 0);
      let v = m.to >= toA ? m : s.lineAt(toA, rH.ByPosNoHeight, n, 0, 0);
      for (g += v.to - toA, d = v.to; a > 0 && m.from <= i[a - 1].toA;) {
        h = i[a - 1].fromA;
        p = i[a - 1].fromB;
        a--;
        fromA < m.from && (m = s.lineAt(fromA, rH.ByPosNoHeight, n, 0, 0));
      }
      p += m.from - fromA;
      h = m.from;
      let y = r8.build(n.setDoc(o), e, fromB, toB);
      s = r0(s, s.replace(fromA, toA, y));
    }
    return s.updateHeight(n, 0);
  }
  static empty() {
    return new r2(0, 0);
  }
  static of(e) {
    if (1 == e.length) return e[0];
    let r = 0;
    let n = e.length;
    let i = 0;
    let s = 0;
    for (;;) if (r == n) {
      if (i > 2 * s) {
        let s = e[r - 1];
        s.$$break ? e.splice(--r, 1, s.left, null, s.right) : e.splice(--r, 1, s.left, s.right);
        n += 1 + s.$$break;
        i -= s.size;
      } else if (s > 2 * i) {
        let r = e[n];
        r.$$break ? e.splice(n, 1, r.left, null, r.right) : e.splice(n, 1, r.left, r.right);
        n += 2 + r.$$break;
        s -= r.size;
      } else break;
    } else if (i < s) {
      let n = e[r++];
      n && (i += n.size);
    } else {
      let r = e[--n];
      r && (s += r.size);
    }
    let o = 0;
    null == e[r - 1] ? (o = 1, r--) : null == e[r] && (o = 1, n++);
    return new r3(rJ.of(e.slice(0, r)), o, rJ.of(e.slice(n)));
  }
}
function r0(e, r) {
  return e == r ? e : (e.constructor != r.constructor && (rq = !0), r);
}
rJ.prototype.size = 1;
class r1 extends rJ {
  constructor(e, r, n) {
    super(e, r);
    this.deco = n;
  }
  blockAt(e, r, n, i) {
    return new rX(i, this.length, n, this.height, this.deco || 0);
  }
  lineAt(e, r, n, i, s) {
    return this.blockAt(0, n, i, s);
  }
  forEachLine(e, r, n, i, s, o) {
    e <= s + this.length && r >= s && o(this.blockAt(0, n, i, s));
  }
  updateHeight(e, r = 0, n = !1, i) {
    i && i.from <= r && i.more && this.setHeight(i.heights[i.index++]);
    this.outdated = !1;
    return this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class r2 extends r1 {
  constructor(e, r) {
    super(e, r, null);
    this.collapsed = 0;
    this.widgetHeight = 0;
    this.breaks = 0;
  }
  blockAt(e, r, n, i) {
    return new rX(i, this.length, n, this.height, this.breaks);
  }
  replace(e, r, n) {
    let i = n[0];
    return 1 == n.length && (i instanceof r2 || i instanceof r5 && 4 & i.flags) && 10 > Math.abs(this.length - i.length) ? (i instanceof r5 ? i = new r2(i.length, this.height) : i.height = this.height, this.outdated || (i.outdated = !1), i) : rJ.of(n);
  }
  updateHeight(e, r = 0, n = !1, i) {
    i && i.from <= r && i.more ? this.setHeight(i.heights[i.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight);
    this.outdated = !1;
    return this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class r5 extends rJ {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, r) {
    let n = e.doc.lineAt(r).number;
    let i = e.doc.lineAt(r + this.length).number;
    let s = i - n + 1;
    let o;
    let a = 0;
    if (e.lineWrapping) {
      let r = Math.min(this.height, e.lineHeight * s);
      o = r / s;
      this.length > s + 1 && (a = (this.height - r) / (this.length - s - 1));
    } else o = this.height / s;
    return {
      firstLine: n,
      lastLine: i,
      perLine: o,
      perChar: a
    };
  }
  blockAt(e, r, n, i) {
    let {
      firstLine,
      lastLine,
      perLine,
      perChar
    } = this.heightMetrics(r, i);
    if (r.lineWrapping) {
      let s = i + (e < r.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length));
      let o = r.doc.lineAt(s);
      let d = perLine + o.length * perChar;
      let p = Math.max(n, e - d / 2);
      return new rX(o.from, o.length, p, d, 0);
    }
    {
      let i = Math.max(0, Math.min(lastLine - firstLine, Math.floor((e - n) / perLine)));
      let {
        from,
        length
      } = r.doc.line(firstLine + i);
      return new rX(from, length, n + perLine * i, perLine, 0);
    }
  }
  lineAt(e, r, n, i, s) {
    if (r == rH.ByHeight) return this.blockAt(e, n, i, s);
    if (r == rH.ByPosNoHeight) {
      let {
        from,
        to
      } = n.doc.lineAt(e);
      return new rX(from, to - from, 0, 0, 0);
    }
    let {
      firstLine,
      perLine,
      perChar
    } = this.heightMetrics(n, s);
    let d = n.doc.lineAt(e);
    let p = perLine + d.length * perChar;
    let g = d.number - firstLine;
    let m = i + perLine * g + perChar * (d.from - s - g);
    return new rX(d.from, d.length, Math.max(i, Math.min(m, i + this.height - p)), p, 0);
  }
  forEachLine(e, r, n, i, s, o) {
    e = Math.max(e, s);
    r = Math.min(r, s + this.length);
    let {
      firstLine,
      perLine,
      perChar
    } = this.heightMetrics(n, s);
    for (function () {
      let p = e;
      let g = i;
    }(); p <= r;) {
      let r = n.doc.lineAt(p);
      if (p == e) {
        let n = r.number - firstLine;
        g += perLine * n + perChar * (e - s - n);
      }
      let i = perLine + perChar * r.length;
      o(new rX(r.from, r.length, g, i, 0));
      g += i;
      p = r.to + 1;
    }
  }
  replace(e, r, n) {
    let i = this.length - r;
    if (i > 0) {
      let e = n[n.length - 1];
      e instanceof r5 ? n[n.length - 1] = new r5(e.length + i) : n.push(null, new r5(i - 1));
    }
    if (e > 0) {
      let r = n[0];
      r instanceof r5 ? n[0] = new r5(e + r.length) : n.unshift(new r5(e - 1), null);
    }
    return rJ.of(n);
  }
  decomposeLeft(e, r) {
    r.push(new r5(e - 1), null);
  }
  decomposeRight(e, r) {
    r.push(null, new r5(this.length - e - 1));
  }
  updateHeight(e, r = 0, n = !1, i) {
    let s = r + this.length;
    if (i && i.from <= r + this.length && i.more) {
      let n = [];
      let o = Math.max(r, i.from);
      let a = -1;
      for (i.from > r && n.push(new r5(i.from - r - 1).updateHeight(e, r)); o <= s && i.more;) {
        let r = e.doc.lineAt(o).length;
        n.length && n.push(null);
        let s = i.heights[i.index++];
        -1 == a ? a = s : Math.abs(s - a) >= rK && (a = -2);
        let h = new r2(r, s);
        h.outdated = !1;
        n.push(h);
        o += r + 1;
      }
      o <= s && n.push(null, new r5(s - o).updateHeight(e, o));
      let h = rJ.of(n);
      (a < 0 || Math.abs(h.height - this.height) >= rK || Math.abs(a - this.heightMetrics(e, r).perLine) >= rK) && (rq = !0);
      return r0(this, h);
    }
    (n || this.outdated) && (this.setHeight(e.heightForGap(r, r + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class r3 extends rJ {
  constructor(e, r, n) {
    super(e.length + r + n.length, e.height + n.height, r | (e.outdated || n.outdated ? 2 : 0));
    this.left = e;
    this.right = n;
    this.size = e.size + n.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(e, r, n, i) {
    let s = n + this.left.height;
    return e < s ? this.left.blockAt(e, r, n, i) : this.right.blockAt(e, r, s, i + this.left.length + this.$$break);
  }
  lineAt(e, r, n, i, s) {
    let o = i + this.left.height;
    let a = s + this.left.length + this.$$break;
    let h = r == rH.ByHeight ? e < o : e < a;
    let d = h ? this.left.lineAt(e, r, n, i, s) : this.right.lineAt(e, r, n, o, a);
    if (this.$$break || (h ? d.to < a : d.from > a)) return d;
    let p = r == rH.ByPosNoHeight ? rH.ByPosNoHeight : rH.ByPos;
    return h ? d.join(this.right.lineAt(a, p, n, o, a)) : this.left.lineAt(a, p, n, i, s).join(d);
  }
  forEachLine(e, r, n, i, s, o) {
    let a = i + this.left.height;
    let h = s + this.left.length + this.$$break;
    if (this.$$break) {
      e < h && this.left.forEachLine(e, r, n, i, s, o);
      r >= h && this.right.forEachLine(e, r, n, a, h, o);
    } else {
      let d = this.lineAt(h, rH.ByPos, n, i, s);
      e < d.from && this.left.forEachLine(e, d.from - 1, n, i, s, o);
      d.to >= e && d.from <= r && o(d);
      r > d.to && this.right.forEachLine(d.to + 1, r, n, a, h, o);
    }
  }
  replace(e, r, n) {
    let i = this.left.length + this.$$break;
    if (r < i) return this.balanced(this.left.replace(e, r, n), this.right);
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - i, r - i, n));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let e of n) s.push(e);
    if (e > 0 && r6(s, o - 1), r < this.length) {
      let e = s.length;
      this.decomposeRight(r, s);
      r6(s, e);
    }
    return rJ.of(s);
  }
  decomposeLeft(e, r) {
    let n = this.left.length;
    if (e <= n) return this.left.decomposeLeft(e, r);
    r.push(this.left);
    this.$$break && e >= ++n && r.push(null);
    e > n && this.right.decomposeLeft(e - n, r);
  }
  decomposeRight(e, r) {
    let n = this.left.length;
    let i = n + this.$$break;
    if (e >= i) return this.right.decomposeRight(e - i, r);
    e < n && this.left.decomposeRight(e, r);
    this.$$break && e < i && r.push(null);
    r.push(this.right);
  }
  balanced(e, r) {
    return e.size > 2 * r.size || r.size > 2 * e.size ? rJ.of(this.$$break ? [e, null, r] : [e, r]) : (this.left = r0(this.left, e), this.right = r0(this.right, r), this.setHeight(e.height + r.height), this.outdated = e.outdated || r.outdated, this.size = e.size + r.size, this.length = e.length + this.$$break + r.length, this);
  }
  updateHeight(e, r = 0, n = !1, i) {
    let {
      left,
      right
    } = this;
    let a = r + left.length + this.$$break;
    let h = null;
    return (i && i.from <= r + left.length && i.more ? h = s = left.updateHeight(e, r, n, i) : left.updateHeight(e, r, n), i && i.from <= a + right.length && i.more ? h = o = right.updateHeight(e, a, n, i) : right.updateHeight(e, a, n), h) ? this.balanced(left, right) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.$$break ? " " : "-") + this.right;
  }
}
function r6(e, r) {
  let n;
  let i;
  null == e[r] && (n = e[r - 1]) instanceof r5 && (i = e[r + 1]) instanceof r5 && e.splice(r - 1, 3, new r5(n.length + 1 + i.length));
}
let r4 = 5;
class r8 {
  constructor(e, r) {
    this.pos = e;
    this.oracle = r;
    this.nodes = [];
    this.lineStart = -1;
    this.lineEnd = -1;
    this.covering = null;
    this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, r) {
    if (this.lineStart > -1) {
      let e = Math.min(r, this.lineEnd);
      let n = this.nodes[this.nodes.length - 1];
      n instanceof r2 ? n.length += e - this.pos : (e > this.pos || !this.isCovered) && this.nodes.push(new r2(e - this.pos, -1));
      this.writtenTo = e;
      r > e && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = r;
  }
  point(e, r, n) {
    if (e < r || n.heightRelevant) {
      let i = n.widget ? n.widget.estimatedHeight : 0;
      let s = n.widget ? n.widget.lineBreaks : 0;
      i < 0 && (i = this.oracle.lineHeight);
      let o = r - e;
      n.block ? this.addBlock(new r1(o, i, n)) : (o || s || i >= r4) && this.addLineDeco(i, s, o);
    } else r > e && this.span(e, r);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let {
      from,
      to
    } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = from;
    this.lineEnd = to;
    this.writtenTo < from && ((this.writtenTo < from - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, from - 1)), this.nodes.push(null));
    this.pos > from && this.nodes.push(new r2(this.pos - from, -1));
    this.writtenTo = this.pos;
  }
  blankContent(e, r) {
    let n = new r5(r - e);
    this.oracle.doc.lineAt(e).to == r && (n.flags |= 4);
    return n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof r2) return e;
    let r = new r2(0, -1);
    this.nodes.push(r);
    return r;
  }
  addBlock(e) {
    this.enterLine();
    let r = e.deco;
    r && r.startSide > 0 && !this.isCovered && this.ensureLine();
    this.nodes.push(e);
    this.writtenTo = this.pos = this.pos + e.length;
    r && r.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, r, n) {
    let i = this.ensureLine();
    i.length += n;
    i.collapsed += n;
    i.widgetHeight = Math.max(i.widgetHeight, e);
    i.breaks += r;
    this.writtenTo = this.pos = this.pos + n;
  }
  finish(e) {
    let r = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || r instanceof r2 || this.isCovered ? (this.writtenTo < this.pos || null == r) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new r2(0, -1));
    let n = e;
    for (let e of this.nodes) {
      e instanceof r2 && e.updateHeight(this.oracle, n);
      n += e ? e.length : 1;
    }
    return this.nodes;
  }
  static build(e, r, n, i) {
    let o = new r8(n, e);
    s.om.spans(r, n, i, o, 0);
    return o.finish(n);
  }
}
function r7(e, r, n) {
  let i = new r9();
  s.om.compare(e, r, n, i, 0);
  return i.changes;
}
class r9 {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, r, n, i) {
    (e < r || n && n.heightRelevant || i && i.heightRelevant) && eP(e, r, this.changes, 5);
  }
}
function ne(e, r) {
  let n = e.getBoundingClientRect();
  let i = e.ownerDocument;
  let s = i.defaultView || window;
  let o = Math.max(0, n.left);
  let a = Math.min(s.innerWidth, n.right);
  let h = Math.max(0, n.top);
  let d = Math.min(s.innerHeight, n.bottom);
  for (let r = e.parentNode; r && r != i.body;) if (1 == r.nodeType) {
    let n = r;
    let i = window.getComputedStyle(n);
    if ((n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth) && "visible" != i.overflow) {
      let i = n.getBoundingClientRect();
      o = Math.max(o, i.left);
      a = Math.min(a, i.right);
      h = Math.max(h, i.top);
      d = Math.min(r == e.parentNode ? s.innerHeight : d, i.bottom);
    }
    r = "absolute" == i.position || "fixed" == i.position ? n.offsetParent : n.parentNode;
  } else if (11 == r.nodeType) r = r.host;else break;
  return {
    left: o - n.left,
    right: Math.max(o, a) - n.left,
    top: h - (n.top + r),
    bottom: Math.max(h, d) - (n.top + r)
  };
}
function nt(e) {
  let r = e.getBoundingClientRect();
  let n = e.ownerDocument.defaultView || window;
  return r.left < n.innerWidth && r.right > 0 && r.top < n.innerHeight && r.bottom > 0;
}
function nr(e, r) {
  let n = e.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: r,
    bottom: n.bottom - (n.top + r)
  };
}
class nn {
  constructor(e, r, n, i) {
    this.from = e;
    this.to = r;
    this.size = n;
    this.displaySize = i;
  }
  static same(e, r) {
    if (e.length != r.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      let s = r[n];
      if (i.from != s.from || i.to != s.to || i.size != s.size) return !1;
    }
    return !0;
  }
  draw(e, r) {
    return $$eS0.replace({
      widget: new ni(this.displaySize * (r ? e.scaleY : e.scaleX), r)
    }).range(this.from, this.to);
  }
}
class ni extends $$ek6 {
  constructor(e, r) {
    super();
    this.size = e;
    this.vertical = r;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block");
    return e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class ns {
  constructor(e) {
    this.state = e;
    this.pixelViewport = {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: 0
    };
    this.inView = !0;
    this.paddingTop = 0;
    this.paddingBottom = 0;
    this.contentDOMWidth = 0;
    this.contentDOMHeight = 0;
    this.editorHeight = 0;
    this.editorWidth = 0;
    this.scrollTop = 0;
    this.scrolledToBottom = !1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scrollAnchorPos = 0;
    this.scrollAnchorHeight = -1;
    this.scaler = nh;
    this.scrollTarget = null;
    this.printing = !1;
    this.mustMeasureContent = !0;
    this.defaultTextDirection = $$ej1.LTR;
    this.visibleRanges = [];
    this.mustEnforceCursorAssoc = !1;
    let r = e.facet(tb).some(e => "function" != typeof e && "cm-lineWrapping" == e.$$class);
    this.heightOracle = new rY(r);
    this.stateDeco = e.facet(tO).filter(e => "function" != typeof e);
    this.heightMap = rJ.empty().applyChanges(this.stateDeco, s.EY.empty, this.heightOracle.setDoc(e.doc), [new tC(0, 0, 0, e.doc.length)]);
    for (let e = 0; e < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); e++);
    this.updateViewportLines();
    this.lineGaps = this.ensureLineGaps([]);
    this.lineGapDeco = $$eS0.set(this.lineGaps.map(e => e.draw(this, !1)));
    this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport];
    let {
      main
    } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let i = n ? main.head : main.anchor;
      if (!e.some(({
        from: e,
        to: r
      }) => i >= e && i <= r)) {
        let {
          from,
          to
        } = this.lineBlockAt(i);
        e.push(new no(from, to));
      }
    }
    this.viewports = e.sort((e, r) => e.from - r.from);
    return this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    this.scaler = this.heightMap.height <= 7e6 ? nh : new nd(this.heightOracle, this.heightMap, this.viewports);
    return e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [];
    this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, e => {
      this.viewportLines.push(nf(e, this.scaler));
    });
  }
  update(e, r = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(tO).filter(e => "function" != typeof e);
    let i = e.changedRanges;
    let o = tC.extendWithRanges(i, r7(n, this.stateDeco, e ? e.changes : s.VR.empty(this.state.doc.length)));
    let a = this.heightMap.height;
    let h = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    rW();
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), o);
    (this.heightMap.height != a || rq) && (e.flags |= 2);
    h ? (this.scrollAnchorPos = e.changes.mapPos(h.from, -1), this.scrollAnchorHeight = h.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let d = o.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (r && (r.range.head < d.from || r.range.head > d.to) || !this.viewportIsAppropriate(d)) && (d = this.getViewport(0, r));
    let p = d.from != this.viewport.from || d.to != this.viewport.to;
    this.viewport = d;
    e.flags |= this.updateForViewport();
    (p || !e.changes.empty || 2 & e.flags) && this.updateViewportLines();
    (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes)));
    e.flags |= this.computeVisibleRanges(e.changes);
    r && (this.scrollTarget = r);
    !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(ta) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let r = e.contentDOM;
    let n = window.getComputedStyle(r);
    let i = this.heightOracle;
    let o = n.whiteSpace;
    this.defaultTextDirection = "rtl" == n.direction ? $$ej1.RTL : $$ej1.LTR;
    let a = this.heightOracle.mustRefreshForWrapping(o);
    let h = r.getBoundingClientRect();
    let d = a || this.mustMeasureContent || this.contentDOMHeight != h.height;
    this.contentDOMHeight = h.height;
    this.mustMeasureContent = !1;
    let p = 0;
    let g = 0;
    if (h.width && h.height) {
      let {
        scaleX,
        scaleY
      } = T(r, h);
      (scaleX > .005 && Math.abs(this.scaleX - scaleX) > .005 || scaleY > .005 && Math.abs(this.scaleY - scaleY) > .005) && (this.scaleX = scaleX, this.scaleY = scaleY, p |= 16, a = d = !0);
    }
    let m = (parseInt(n.paddingTop) || 0) * this.scaleY;
    let v = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != m || this.paddingBottom != v) && (this.paddingTop = m, this.paddingBottom = v, p |= 18);
    this.editorWidth != e.scrollDOM.clientWidth && (i.lineWrapping && (d = !0), this.editorWidth = e.scrollDOM.clientWidth, p |= 16);
    let y = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != y && (this.scrollAnchorHeight = -1, this.scrollTop = y);
    this.scrolledToBottom = Z(e.scrollDOM);
    let b = (this.printing ? nr : ne)(r, this.paddingTop);
    let O = b.top - this.pixelViewport.top;
    let x = b.bottom - this.pixelViewport.bottom;
    this.pixelViewport = b;
    let w = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (w != this.inView && (this.inView = w, w && (d = !0)), !this.inView && !this.scrollTarget && !nt(e.dom)) return 0;
    let k = h.width;
    if ((this.contentDOMWidth != k || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = h.width, this.editorHeight = e.scrollDOM.clientHeight, p |= 16), d) {
      let r = e.docView.measureVisibleLineHeights(this.viewport);
      if (i.mustRefreshForHeights(r) && (a = !0), a || i.lineWrapping && Math.abs(k - this.contentDOMWidth) > i.charWidth) {
        let {
          lineHeight,
          charWidth,
          textHeight
        } = e.docView.measureTextSize();
        (a = lineHeight > 0 && i.refresh(o, lineHeight, charWidth, textHeight, k / charWidth, r)) && (e.docView.minWidth = 0, p |= 16);
      }
      for (let n of (O > 0 && x > 0 ? g = Math.max(O, x) : O < 0 && x < 0 && (g = Math.min(O, x)), rW(), this.viewports)) {
        let o = n.from == this.viewport.from ? r : e.docView.measureVisibleLineHeights(n);
        this.heightMap = (a ? rJ.empty().applyChanges(this.stateDeco, s.EY.empty, this.heightOracle, [new tC(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(i, 0, a, new rG(n.from, o));
      }
      rq && (p |= 2);
    }
    let _ = !this.viewportIsAppropriate(this.viewport, g) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    _ && (2 & p && (p |= this.updateScaler()), this.viewport = this.getViewport(g, this.scrollTarget), p |= this.updateForViewport());
    (2 & p || _) && this.updateViewportLines();
    (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps, e));
    p |= this.computeVisibleRanges();
    this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc());
    return p;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, r) {
    let n = .5 - Math.max(-.5, Math.min(.5, e / 1e3 / 2));
    let i = this.heightMap;
    let s = this.heightOracle;
    let {
      visibleTop,
      visibleBottom
    } = this;
    let h = new no(i.lineAt(visibleTop - 1e3 * n, rH.ByHeight, s, 0, 0).from, i.lineAt(visibleBottom + (1 - n) * 1e3, rH.ByHeight, s, 0, 0).to);
    if (r) {
      let {
        head
      } = r.range;
      if (head < h.from || head > h.to) {
        let n = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
        let o = i.lineAt(head, rH.ByPos, s, 0, 0);
        let a;
        a = "center" == r.y ? (o.top + o.bottom) / 2 - n / 2 : "start" == r.y || "nearest" == r.y && head < h.from ? o.top : o.bottom - n;
        h = new no(i.lineAt(a - 500, rH.ByHeight, s, 0, 0).from, i.lineAt(a + n + 500, rH.ByHeight, s, 0, 0).to);
      }
    }
    return h;
  }
  mapViewport(e, r) {
    let n = r.mapPos(e.from, -1);
    let i = r.mapPos(e.to, 1);
    return new no(this.heightMap.lineAt(n, rH.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(i, rH.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({
    from: e,
    to: r
  }, n = 0) {
    if (!this.inView) return !0;
    let {
      top
    } = this.heightMap.lineAt(e, rH.ByPos, this.heightOracle, 0, 0);
    let {
      bottom
    } = this.heightMap.lineAt(r, rH.ByPos, this.heightOracle, 0, 0);
    let {
      visibleTop,
      visibleBottom
    } = this;
    return (0 == e || top <= visibleTop - Math.max(10, Math.min(-n, 250))) && (r == this.state.doc.length || bottom >= visibleBottom + Math.max(10, Math.min(n, 250))) && top > visibleTop - 2e3 && bottom < visibleBottom + 2e3;
  }
  mapLineGaps(e, r) {
    if (!e.length || r.empty) return e;
    let n = [];
    for (let i of e) r.touchesRange(i.from, i.to) || n.push(new nn(r.mapPos(i.from), r.mapPos(i.to), i.size, i.displaySize));
    return n;
  }
  ensureLineGaps(e, r) {
    let n = this.heightOracle.lineWrapping;
    let i = n ? 1e4 : 2e3;
    let o = i >> 1;
    let a = i << 1;
    if (this.defaultTextDirection != $$ej1.LTR && !n) return [];
    let h = [];
    let d = (i, a, p, g) => {
      if (a - i < o) return;
      let m = this.state.selection.main;
      let v = [m.from];
      for (let e of (m.empty || v.push(m.to), v)) if (e > i && e < a) {
        d(i, e - 10, p, g);
        d(e + 10, a, p, g);
        return;
      }
      let y = nc(e, e => e.from >= p.from && e.to <= p.to && Math.abs(e.from - i) < o && Math.abs(e.to - a) < o && !v.some(r => e.from < r && e.to > r));
      if (!y) {
        if (a < p.to && r && n && r.visibleRanges.some(e => e.from <= a && e.to >= a)) {
          let e = r.moveToLineBoundary(s.OF.cursor(a), !1, !0).head;
          e > i && (a = e);
        }
        let e = this.gapSize(p, i, a, g);
        let o = n || e < 2e6 ? e : 2e6;
        y = new nn(i, a, e, o);
      }
      h.push(y);
    };
    let p = r => {
      let s;
      let o;
      if (r.length < a || r.type != e_.Text) return;
      let h = na(r.from, r.to, this.stateDeco);
      if (h.total < a) return;
      let p = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (n) {
        let e;
        let n;
        let a = i / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (null != p) {
          let i = nu(h, p);
          let s = ((this.visibleBottom - this.visibleTop) / 2 + a) / r.height;
          e = i - s;
          n = i + s;
        } else {
          e = (this.visibleTop - r.top - a) / r.height;
          n = (this.visibleBottom - r.top + a) / r.height;
        }
        s = nl(h, e);
        o = nl(h, n);
      } else {
        let n;
        let a;
        let d = h.total * this.heightOracle.charWidth;
        let g = i * this.heightOracle.charWidth;
        let m = 0;
        if (d > 2e6) for (let n of e) n.from >= r.from && n.from < r.to && n.size != n.displaySize && n.from * this.heightOracle.charWidth + m < this.pixelViewport.left && (m = n.size - n.displaySize);
        let v = this.pixelViewport.left + m;
        let y = this.pixelViewport.right + m;
        if (null != p) {
          let e = nu(h, p);
          let r = ((y - v) / 2 + g) / d;
          n = e - r;
          a = e + r;
        } else {
          n = (v - g) / d;
          a = (y + g) / d;
        }
        s = nl(h, n);
        o = nl(h, a);
      }
      s > r.from && d(r.from, s, r, h);
      o < r.to && d(o, r.to, r, h);
    };
    for (let e of this.viewportLines) Array.isArray(e.type) ? e.type.forEach(p) : p(e);
    return h;
  }
  gapSize(e, r, n, i) {
    let s = nu(i, n) - nu(i, r);
    return this.heightOracle.lineWrapping ? e.height * s : i.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    nn.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = $$eS0.set(e.map(e => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let r = this.stateDeco;
    this.lineGaps.length && (r = r.concat(this.lineGapDeco));
    let n = [];
    s.om.spans(r, this.viewport.from, this.viewport.to, {
      span(e, r) {
        n.push({
          from: e,
          to: r
        });
      },
      point() {}
    }, 20);
    let i = 0;
    if (n.length != this.visibleRanges.length) i = 12;else for (let r = 0; r < n.length && !(8 & i); r++) {
      let s = this.visibleRanges[r];
      let o = n[r];
      s.from == o.from && s.to == o.to || (i |= 4, e && e.mapPos(s.from, -1) == o.from && e.mapPos(s.to, 1) == o.to || (i |= 8));
    }
    this.visibleRanges = n;
    return i;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find(r => r.from <= e && r.to >= e) || nf(this.heightMap.lineAt(e, rH.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find(r => r.top <= e && r.bottom >= e) || nf(this.heightMap.lineAt(this.scaler.fromDOM(e), rH.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let r = this.lineBlockAtHeight(e + 8);
    return r.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? r : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return nf(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class no {
  constructor(e, r) {
    this.from = e;
    this.to = r;
  }
}
function na(e, r, n) {
  let i = [];
  let o = e;
  let a = 0;
  s.om.spans(n, e, r, {
    span() {},
    point(e, r) {
      e > o && (i.push({
        from: o,
        to: e
      }), a += e - o);
      o = r;
    }
  }, 20);
  o < r && (i.push({
    from: o,
    to: r
  }), a += r - o);
  return {
    total: a,
    ranges: i
  };
}
function nl({
  total: e,
  ranges: r
}, n) {
  if (n <= 0) return r[0].from;
  if (n >= 1) return r[r.length - 1].to;
  let i = Math.floor(e * n);
  for (let e = 0;; e++) {
    let {
      from,
      to
    } = r[e];
    let o = to - from;
    if (i <= o) return from + i;
    i -= o;
  }
}
function nu(e, r) {
  let n = 0;
  for (let {
    from,
    to
  } of e.ranges) {
    if (r <= to) {
      n += r - from;
      break;
    }
    n += to - from;
  }
  return n / e.total;
}
function nc(e, r) {
  for (let n of e) if (r(n)) return n;
}
let nh = {
  toDOM: e => e,
  fromDOM: e => e,
  scale: 1,
  eq(e) {
    return e == this;
  }
};
class nd {
  constructor(e, r, n) {
    let i = 0;
    let s = 0;
    let o = 0;
    for (let a of (this.viewports = n.map(({
      from: n,
      to: s
    }) => {
      let o = r.lineAt(n, rH.ByPos, e, 0, 0).top;
      let a = r.lineAt(s, rH.ByPos, e, 0, 0).bottom;
      i += a - o;
      return {
        from: n,
        to: s,
        top: o,
        bottom: a,
        domTop: 0,
        domBottom: 0
      };
    }), this.scale = (7e6 - i) / (r.height - i), this.viewports)) {
      a.domTop = o + (a.top - s) * this.scale;
      o = a.domBottom = a.domTop + (a.bottom - a.top);
      s = a.bottom;
    }
  }
  toDOM(e) {
    for (function () {
      let r = 0;
      let n = 0;
      let i = 0;
    }();; r++) {
      let s = r < this.viewports.length ? this.viewports[r] : null;
      if (!s || e < s.top) return i + (e - n) * this.scale;
      if (e <= s.bottom) return s.domTop + (e - s.top);
      n = s.bottom;
      i = s.domBottom;
    }
  }
  fromDOM(e) {
    for (function () {
      let r = 0;
      let n = 0;
      let i = 0;
    }();; r++) {
      let s = r < this.viewports.length ? this.viewports[r] : null;
      if (!s || e < s.domTop) return n + (e - i) / this.scale;
      if (e <= s.domBottom) return s.top + (e - s.domTop);
      n = s.bottom;
      i = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof nd && this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((r, n) => r.from == e.viewports[n].from && r.to == e.viewports[n].to);
  }
}
function nf(e, r) {
  if (1 == r.scale) return e;
  let n = r.toDOM(e.top);
  let i = r.toDOM(e.bottom);
  return new rX(e.from, e.length, n, i - n, Array.isArray(e._content) ? e._content.map(e => nf(e, r)) : e._content);
}
let np = s.sj.define({
  combine: e => e.join(" ")
});
let ng = s.sj.define({
  combine: e => e.indexOf(!0) > -1
});
let nm = o.G.newName();
let nv = o.G.newName();
let ny = o.G.newName();
let nb = {
  "&light": "." + nv,
  "&dark": "." + ny
};
function nO(e, r, n) {
  return new o.G(r, {
    finish: r => /&/.test(r) ? r.replace(/&\w*/, r => {
      if ("&" == r) return e;
      if (!n || !n[r]) throw RangeError(`Unsupported selector: ${r}`);
      return n[r];
    }) : e + " " + r
  });
}
let nx = nO("." + nm, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": {
    caretColor: "black"
  },
  "&dark .cm-content": {
    caretColor: "white"
  },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": {
    "0%": {},
    "50%": {
      opacity: 0
    },
    "100%": {}
  },
  "@keyframes cm-blink2": {
    "0%": {},
    "50%": {
      opacity: 0
    },
    "100%": {}
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": {
      display: "none"
    }
  },
  "&light .cm-activeLine": {
    backgroundColor: "#cceeff44"
  },
  "&dark .cm-activeLine": {
    backgroundColor: "#99eeff33"
  },
  "&light .cm-specialChar": {
    color: "red"
  },
  "&dark .cm-specialChar": {
    color: "#f78"
  },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, nb);
let nw = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
};
let nk = ea.ie && ea.ie_version <= 11;
class n_ {
  constructor(e) {
    this.view = e;
    this.active = !1;
    this.editContext = null;
    this.selectionRange = new R();
    this.selectionChanged = !1;
    this.delayedFlush = -1;
    this.resizeTimeout = -1;
    this.queue = [];
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
    this.lastChange = 0;
    this.scrollTargets = [];
    this.intersection = null;
    this.resizeScroll = null;
    this.intersecting = !1;
    this.gapIntersection = null;
    this.gaps = [];
    this.printQuery = null;
    this.parentCheck = -1;
    this.dom = e.contentDOM;
    this.observer = new MutationObserver(r => {
      for (let e of r) this.queue.push(e);
      (ea.ie && ea.ie_version <= 11 || ea.ios && e.composing) && r.some(e => "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush();
    });
    window.EditContext && !1 !== e.constructor.EDIT_CONTEXT && !(ea.chrome && ea.chrome_version < 126) && (this.editContext = new nC(e), e.state.facet(tf) && (e.contentDOM.editContext = this.editContext.editContext));
    nk && (this.onCharData = e => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      });
      this.flushSoon();
    });
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onPrint = this.onPrint.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.matchMedia && (this.printQuery = window.matchMedia("print"));
    "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      this.view.docView?.lastUpdate < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM));
    this.addWindowListeners(this.win = e.win);
    this.start();
    "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver(e => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3));
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, {
      threshold: [0, .001]
    }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver(e => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {}));
    this.listenForScroll();
    this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e);
    this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1);
    this.editContext && this.view.requestMeasure(this.editContext.measureReq);
    this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1;
      this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    ("change" != e.type && e.type || e.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1;
      this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((r, n) => r != e[n]))) {
      for (let r of (this.gapIntersection.disconnect(), e)) this.gapIntersection.observe(r);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let r = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let {
      view
    } = this;
    let i = this.selectionRange;
    if (view.state.facet(tf) ? view.root.activeElement != this.dom : !O(this.dom, i)) return;
    let s = i.anchorNode && view.docView.nearest(i.anchorNode);
    if (s && s.ignoreEvent(e)) {
      r || (this.selectionChanged = !1);
      return;
    }
    (ea.ie && ea.ie_version <= 11 || ea.android && ea.chrome) && !view.state.selection.main.empty && i.focusNode && w(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let {
      view
    } = this;
    let r = y(view.root);
    if (!r) return !1;
    let n = ea.safari && 11 == view.root.nodeType && view.root.activeElement == this.dom && nA(this.view, r) || r;
    if (!n || this.selectionRange.eq(n)) return !1;
    let i = O(this.dom, n);
    return i && !this.selectionChanged && view.inputState.lastFocusTime > Date.now() - 200 && view.inputState.lastTouchTime < Date.now() - 300 && z(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, view.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), i && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, r) {
    this.selectionRange.set(e.node, e.offset, r.node, r.offset);
    this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0;
    let r = null;
    for (let n = this.dom; n;) if (1 == n.nodeType) {
      !r && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : r || (r = this.scrollTargets.slice(0, e));
      r && r.push(n);
      n = n.assignedSlot || n.parentNode;
    } else if (11 == n.nodeType) n = n.host;else break;
    if (e < this.scrollTargets.length && !r && (r = this.scrollTargets.slice(0, e)), r) {
      for (let e of this.scrollTargets) e.removeEventListener("scroll", this.onScroll);
      for (let e of this.scrollTargets = r) e.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      this.stop();
      return e();
    } finally {
      this.start();
      this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, nw), nk && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), nk && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords();
    this.queue.length = 0;
    this.selectionChanged = !1;
  }
  delayAndroidKey(e, r) {
    var n;
    if (!this.delayedAndroidKey) {
      let e = () => {
        let e = this.delayedAndroidKey;
        e && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = e.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && e.force && $(this.dom, e.key, e.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(e);
    }
    this.delayedAndroidKey && "Enter" != e || (this.delayedAndroidKey = {
      key: e,
      keyCode: r,
      force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1;
      this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1);
    this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let r = -1;
    let n = -1;
    let i = !1;
    for (let s of e) {
      let e = this.readMutation(s);
      e && (e.typeOver && (i = !0), -1 == r ? {
        from: r,
        to: n
      } = e : (r = Math.min(e.from, r), n = Math.max(e.to, n)));
    }
    return {
      from: r,
      to: n,
      typeOver: i
    };
  }
  readChange() {
    let {
      from,
      to,
      typeOver
    } = this.processRecords();
    let i = this.selectionChanged && O(this.dom, this.selectionRange);
    if (from < 0 && !i) return null;
    from > -1 && (this.lastChange = Date.now());
    this.view.inputState.lastFocusTime = 0;
    this.selectionChanged = !1;
    let s = new t7(this.view, from, to, typeOver);
    this.view.docView.domChanged = {
      newSel: s.newSel ? s.newSel.main : null
    };
    return s;
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
    e && this.readSelectionRange();
    let r = this.readChange();
    if (!r) {
      this.view.requestMeasure();
      return !1;
    }
    let n = this.view.state;
    let i = t9(this.view, r);
    this.view.state == n && (r.domChanged || r.newSel && !r.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]);
    return i;
  }
  readMutation(e) {
    let r = this.view.docView.nearest(e.target);
    if (!r || r.ignoreMutation(e)) return null;
    if (r.markDirty("attributes" == e.type), "attributes" == e.type && (r.flags |= 4), "childList" == e.type) {
      let n = nS(r, e.previousSibling || e.target.previousSibling, -1);
      let i = nS(r, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? r.posAfter(n) : r.posAtStart,
        to: i ? r.posBefore(i) : r.posAtEnd,
        typeOver: !1
      };
    }
    return "characterData" == e.type ? {
      from: r.posAtStart,
      to: r.posAtEnd,
      typeOver: e.target.nodeValue == e.oldValue
    } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize);
    this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint);
    e.addEventListener("scroll", this.onScroll);
    e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll);
    e.removeEventListener("resize", this.onResize);
    this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint);
    e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(tf) != e.state.facet(tf) && (e.view.contentDOM.editContext = e.state.facet(tf) ? this.editContext.editContext : null));
  }
  destroy() {
    var e;
    var r;
    var n;
    for (let i of (this.stop(), null === (e = this.intersection) || void 0 === e || e.disconnect(), null === (r = this.gapIntersection) || void 0 === r || r.disconnect(), null === (n = this.resizeScroll) || void 0 === n || n.disconnect(), this.scrollTargets)) i.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win);
    clearTimeout(this.parentCheck);
    clearTimeout(this.resizeTimeout);
    this.win.cancelAnimationFrame(this.delayedFlush);
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
    this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function nS(e, r, n) {
  for (; r;) {
    let i = B.get(r);
    if (i && i.parent == e) return i;
    let s = r.parentNode;
    r = s != e.dom ? s : n > 0 ? r.nextSibling : r.previousSibling;
  }
  return null;
}
function nE(e, r) {
  let n = r.startContainer;
  let i = r.startOffset;
  let s = r.endContainer;
  let o = r.endOffset;
  let a = e.docView.domAtPos(e.state.selection.main.anchor);
  w(a.node, a.offset, s, o) && ([n, i, s, o] = [s, o, n, i]);
  return {
    anchorNode: n,
    anchorOffset: i,
    focusNode: s,
    focusOffset: o
  };
}
function nA(e, r) {
  if (r.getComposedRanges) {
    let n = r.getComposedRanges(e.root)[0];
    if (n) return nE(e, n);
  }
  let n = null;
  function i(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    n = e.getTargetRanges()[0];
  }
  e.contentDOM.addEventListener("beforeinput", i, !0);
  e.dom.ownerDocument.execCommand("indent");
  e.contentDOM.removeEventListener("beforeinput", i, !0);
  return n ? nE(e, n) : null;
}
class nC {
  constructor(e) {
    var _this3 = this;
    this.from = 0;
    this.to = 0;
    this.pendingContextChange = null;
    this.handlers = Object.create(null);
    this.composing = null;
    this.resetRange(e.state);
    let r = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    for (let n in this.handlers.textupdate = r => {
      let n = e.state.selection.main;
      let {
        anchor,
        head
      } = n;
      let a = this.toEditorPos(r.updateRangeStart);
      let h = this.toEditorPos(r.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = {
        contextBase: r.updateRangeStart,
        editorBase: a,
        drifted: !1
      });
      let d = {
        from: a,
        to: h,
        insert: s.EY.of(r.text.split("\n"))
      };
      if (d.from == this.from && anchor < this.from ? d.from = anchor : d.to == this.to && anchor > this.to && (d.to = anchor), d.from == d.to && !d.insert.length) {
        let i = s.OF.single(this.toEditorPos(r.selectionStart), this.toEditorPos(r.selectionEnd));
        i.main.eq(n) || e.dispatch({
          selection: i,
          userEvent: "select"
        });
        return;
      }
      if ((ea.mac || ea.android) && d.from == head - 1 && /^\. ?$/.test(r.text) && "off" == e.contentDOM.getAttribute("autocorrect") && (d = {
        from: a,
        to: h,
        insert: s.EY.of([r.text.replace(".", " ")])
      }), this.pendingContextChange = d, !e.state.readOnly) {
        let n = this.to - this.from + (d.to - d.from + d.insert.length);
        re(e, d, s.OF.single(this.toEditorPos(r.selectionStart, n), this.toEditorPos(r.selectionEnd, n)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = n => {
      let i = [];
      let s = null;
      for (function () {
        let r = _this3.toEditorPos(n.rangeStart);
        let o = _this3.toEditorPos(n.rangeEnd);
      }(); r < o; r++) {
        let n = e.coordsForChar(r);
        s = n && new DOMRect(n.left, n.top, n.right - n.left, n.bottom - n.top) || s || new DOMRect();
        i.push(s);
      }
      r.updateCharacterBounds(n.rangeStart, i);
    }, this.handlers.textformatupdate = r => {
      let n = [];
      for (let e of r.getTextFormats()) {
        let r = e.underlineStyle;
        let i = e.underlineThickness;
        if ("None" != r && "None" != i) {
          let s = this.toEditorPos(e.rangeStart);
          let o = this.toEditorPos(e.rangeEnd);
          if (s < o) {
            let e = `text-decoration: underline ${"Dashed" == r ? "dashed " : "Squiggle" == r ? "wavy " : ""}${"Thin" == i ? 1 : 2}px`;
            n.push($$eS0.mark({
              attributes: {
                style: e
              }
            }).range(s, o));
          }
        }
      }
      e.dispatch({
        effects: th.of($$eS0.set(n))
      });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let {
          drifted
        } = this.composing;
        this.composing = null;
        drifted && this.reset(e.state);
      }
    }, this.handlers) r.addEventListener(n, this.handlers[n]);
    this.measureReq = {
      read: e => {
        this.editContext.updateControlBounds(e.contentDOM.getBoundingClientRect());
        let r = y(e.root);
        r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
      }
    };
  }
  applyEdits(e) {
    let r = 0;
    let n = !1;
    let i = this.pendingContextChange;
    e.changes.iterChanges((s, o, a, h, d) => {
      if (n) return;
      let p = d.length - (o - s);
      if (i && o >= i.to) {
        if (i.from == s && i.to == o && i.insert.eq(d)) {
          i = this.pendingContextChange = null;
          r += p;
          this.to += p;
          return;
        }
        i = null;
        this.revertPending(e.state);
      }
      if (s += r, (o += r) <= this.from) {
        this.from += p;
        this.to += p;
      } else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + d.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), d.toString());
        this.to += p;
      }
      r += p;
    });
    i && !n && this.revertPending(e.state);
    return !n;
  }
  update(e) {
    let r = this.pendingContextChange;
    this.composing && (this.composing.drifted || e.transactions.some(e => !e.isUserEvent("input.type") && e.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : this.applyEdits(e) && this.rangeIsValid(e.state) ? (e.docChanged || e.selectionSet || r) && this.setSelection(e.state) : (this.pendingContextChange = null, this.reset(e.state));
    (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let {
      head
    } = e.selection.main;
    this.from = Math.max(0, head - 1e4);
    this.to = Math.min(e.doc.length, head + 1e4);
  }
  reset(e) {
    this.resetRange(e);
    this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to));
    this.setSelection(e);
  }
  revertPending(e) {
    let r = this.pendingContextChange;
    this.pendingContextChange = null;
    this.editContext.updateText(this.toContextPos(r.from), this.toContextPos(r.from + r.insert.length), e.doc.sliceString(r.from, r.to));
  }
  setSelection(e) {
    let {
      main
    } = e.selection;
    let n = this.toContextPos(Math.max(this.from, Math.min(this.to, main.anchor)));
    let i = this.toContextPos(main.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != i) && this.editContext.updateSelection(n, i);
  }
  rangeIsValid(e) {
    let {
      head
    } = e.selection.main;
    return !(this.from > 0 && head - this.from < 500 || this.to < e.doc.length && this.to - head < 500 || this.to - this.from > 3e4);
  }
  toEditorPos(e, r = this.to - this.from) {
    e = Math.min(e, r);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let r = this.composing;
    return r && r.drifted ? r.contextBase + (e - r.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
export class $$nT2 {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var r;
    this.plugins = [];
    this.pluginMap = new Map();
    this.editorAttrs = {};
    this.contentAttrs = {};
    this.bidiCache = [];
    this.destroyed = !1;
    this.updateState = 2;
    this.measureScheduled = -1;
    this.measureRequests = [];
    this.contentDOM = document.createElement("div");
    this.scrollDOM = document.createElement("div");
    this.scrollDOM.tabIndex = -1;
    this.scrollDOM.className = "cm-scroller";
    this.scrollDOM.appendChild(this.contentDOM);
    this.announceDOM = document.createElement("div");
    this.announceDOM.className = "cm-announced";
    this.announceDOM.setAttribute("aria-live", "polite");
    this.dom = document.createElement("div");
    this.dom.appendChild(this.announceDOM);
    this.dom.appendChild(this.scrollDOM);
    e.parent && e.parent.appendChild(this.dom);
    let {
      dispatch
    } = e;
    for (let r of (this.dispatchTransactions = e.dispatchTransactions || dispatch && (e => e.forEach(e => dispatch(e, this))) || (e => this.update(e)), this.dispatch = this.dispatch.bind(this), this._root = e.root || L(e.parent) || document, this.viewState = new ns(e.state || s.$t.create(e)), e.scrollTo && e.scrollTo.is(tc) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(tg).map(e => new tv(e)), this.plugins)) r.update(this);
    this.observer = new n_(this);
    this.inputState = new rs(this);
    this.inputState.ensureHandlers(this.plugins);
    this.docView = new tI(this);
    this.mountStyles();
    this.updateAttrs();
    this.updateState = 0;
    this.requestMeasure();
    document.fonts?.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let r = 1 == e.length && e[0] instanceof s.ZX ? e : 1 == e.length && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(r, this);
  }
  update(e) {
    if (0 != this.updateState) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
    let r = !1;
    let n = !1;
    let i;
    let o = this.state;
    for (let r of e) {
      if (r.startState != o) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = r.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let a = this.hasFocus;
    let h = 0;
    let d = null;
    e.some(e => e.annotation(rZ)) ? (this.inputState.notifiedFocused = a, h = 1) : a == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = a, (d = rF(o, a)) || (h = 1));
    let p = this.observer.delayedAndroidKey;
    let g = null;
    if (p ? (this.observer.clearDelayedAndroidKey(), ((g = this.observer.readChange()) && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (g = null)) : this.observer.clear(), o.facet(s.$t.phrases) != this.state.facet(s.$t.phrases)) return this.setState(o);
    i = tT.create(this, o, e);
    i.flags |= h;
    let m = this.viewState.scrollTarget;
    try {
      for (let r of (this.updateState = 2, e)) {
        if (m && (m = m.map(r.changes)), r.scrollIntoView) {
          let {
            main
          } = r.state.selection;
          m = new tu(main.empty ? main : s.OF.cursor(main.head, main.head > main.anchor ? -1 : 1));
        }
        for (let e of r.effects) e.is(tc) && (m = e.value.clip(this.state));
      }
      this.viewState.update(i, m);
      this.bidiCache = nR.update(this.bidiCache, i.changes);
      i.empty || (this.updatePlugins(i), this.inputState.update(i));
      r = this.docView.update(i);
      this.state.facet(tA) != this.styleModules && this.mountStyles();
      n = this.updateAttrs();
      this.showAnnouncements(e);
      this.docView.updateSelection(r, e.some(e => e.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (i.startState.facet(np) != i.state.facet(np) && (this.viewState.mustMeasureContent = !0), (r || n || m || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), r && this.docViewUpdate(), !i.empty) for (let e of this.state.facet(tt)) try {
      e(i);
    } catch (e) {
      $$td19(this.state, e, "update listener");
    }
    (d || g) && Promise.resolve().then(() => {
      d && this.state == d.startState && this.dispatch(d);
      g && !t9(this, g) && p.force && $(this.contentDOM, p.key, p.keyCode);
    });
  }
  setState(e) {
    if (0 != this.updateState) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let r = this.hasFocus;
    try {
      for (let e of this.plugins) e.destroy(this);
      for (let r of (this.viewState = new ns(e), this.plugins = e.facet(tg).map(e => new tv(e)), this.pluginMap.clear(), this.plugins)) r.update(this);
      this.docView.destroy();
      this.docView = new tI(this);
      this.inputState.ensureHandlers(this.plugins);
      this.mountStyles();
      this.updateAttrs();
      this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    r && this.focus();
    this.requestMeasure();
  }
  updatePlugins(e) {
    let r = e.startState.facet(tg);
    let n = e.state.facet(tg);
    if (r != n) {
      let i = [];
      for (let s of n) {
        let n = r.indexOf(s);
        if (n < 0) i.push(new tv(s));else {
          let r = this.plugins[n];
          r.mustUpdate = e;
          i.push(r);
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
      this.plugins = i;
      this.pluginMap.clear();
    } else for (let r of this.plugins) r.mustUpdate = e;
    for (let e = 0; e < this.plugins.length; e++) this.plugins[e].update(this);
    r != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let r = e.value;
      if (r && r.docViewUpdate) try {
        r.docViewUpdate(this);
      } catch (e) {
        $$td19(this.state, e, "doc view update listener");
      }
    }
  }
  measure(e = !0) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1;
      this.requestMeasure();
      return;
    }
    this.measureScheduled = 0;
    e && this.observer.forceFlush();
    let r = null;
    let n = this.scrollDOM;
    let i = n.scrollTop * this.scaleY;
    let {
      scrollAnchorPos,
      scrollAnchorHeight
    } = this.viewState;
    Math.abs(i - this.viewState.scrollTop) > 1 && (o = -1);
    this.viewState.scrollAnchorHeight = -1;
    try {
      for (let e = 0;; e++) {
        if (scrollAnchorHeight < 0) {
          if (Z(n)) {
            s = -1;
            o = this.viewState.heightMap.height;
          } else {
            let e = this.viewState.scrollAnchorAt(i);
            s = e.from;
            o = e.top;
          }
        }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
        if (e > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        4 & a || ([this.measureRequests, h] = [h, this.measureRequests]);
        let d = h.map(e => {
          try {
            return e.read(this);
          } catch (e) {
            $$td19(this.state, e);
            return nP;
          }
        });
        let p = tT.create(this, this.state, []);
        let g = !1;
        p.flags |= a;
        r ? r.flags |= a : r = p;
        this.updateState = 2;
        !p.empty && (this.updatePlugins(p), this.inputState.update(p), this.updateAttrs(), (g = this.docView.update(p)) && this.docViewUpdate());
        for (let e = 0; e < h.length; e++) if (d[e] != nP) try {
          let r = h[e];
          r.write && r.write(d[e], this);
        } catch (e) {
          $$td19(this.state, e);
        }
        if (g && this.docView.updateSelection(!0), !p.viewportChanged && 0 == this.measureRequests.length) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget);
              this.viewState.scrollTarget = null;
              o = -1;
              continue;
            }
            {
              let e = (scrollAnchorPos < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(scrollAnchorPos).top) - scrollAnchorHeight;
              if (e > 1 || e < -1) {
                i += e;
                n.scrollTop = i / this.scaleY;
                o = -1;
                continue;
              }
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0;
      this.measureScheduled = -1;
    }
    if (r && !r.empty) for (let e of this.state.facet(tt)) e(r);
  }
  get themeClasses() {
    return nm + " " + (this.state.facet(ng) ? ny : nv) + " " + this.state.facet(np);
  }
  updateAttrs() {
    let e = nM(this, ty, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    });
    let r = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(tf) ? "true" : "false",
      class: "cm-content",
      style: `${ea.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (r["aria-readonly"] = "true");
    nM(this, tb, r);
    let n = this.observer.ignore(() => {
      let n = ex(this.contentDOM, this.contentAttrs, r);
      let i = ex(this.dom, this.editorAttrs, e);
      return n || i;
    });
    this.editorAttrs = e;
    this.contentAttrs = r;
    return n;
  }
  showAnnouncements(e) {
    let r = !0;
    for (let n of e) for (let e of n.effects) e.is($$nT2.announce) && (r && (this.announceDOM.textContent = ""), r = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = e.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(tA);
    let e = this.state.facet($$nT2.cspNonce);
    o.G.mount(this.root, this.styleModules.concat(nx).reverse(), e ? {
      nonce: e
    } : void 0);
  }
  readMeasured() {
    if (2 == this.updateState) throw Error("Reading the editor layout isn't allowed during an update");
    0 == this.updateState && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e && !(this.measureRequests.indexOf(e) > -1)) {
      if (null != e.key) {
        for (let r = 0; r < this.measureRequests.length; r++) if (this.measureRequests[r].key === e.key) {
          this.measureRequests[r] = e;
          return;
        }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let r = this.pluginMap.get(e);
    (void 0 === r || r && r.spec != e) && this.pluginMap.set(e, r = this.plugins.find(r => r.spec == e) || null);
    return r && r.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom
    };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    this.readMeasured();
    return this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    this.readMeasured();
    return this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, r, n) {
    return t5(this, e, tJ(this, e, r, n));
  }
  moveByGroup(e, r) {
    return t5(this, e, tJ(this, e, r, r => t0(this, e.head, r)));
  }
  visualLineSide(e, r) {
    let n = this.bidiSpans(e);
    let i = this.textDirectionAt(e.from);
    let o = n[r ? n.length - 1 : 0];
    return s.OF.cursor(o.side(r, i) + e.from, o.forward(!r, i) ? 1 : -1);
  }
  moveToLineBoundary(e, r, n = !0) {
    return tK(this, e, r, n);
  }
  moveVertically(e, r, n) {
    return t5(this, e, t1(this, e, r, n));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, r = 0) {
    return this.docView.posFromDOM(e, r);
  }
  posAtCoords(e, r = !0) {
    this.readMeasured();
    return tW(this, e, r);
  }
  coordsAtPos(e, r = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, r);
    if (!n || n.left == n.right) return n;
    let i = this.state.doc.lineAt(e);
    let s = this.bidiSpans(i);
    return $$A(n, s[eY.find(s, e - i.from, -1, r)].dir == $$ej1.LTR == r > 0);
  }
  coordsForChar(e) {
    this.readMeasured();
    return this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(to) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > nI) return e5(e.length);
    let r = this.textDirectionAt(e.from);
    let n;
    for (let i of this.bidiCache) if (i.from == e.from && i.dir == r && (i.fresh || eG(i.isolates, n = t_(this, e)))) return i.order;
    n || (n = t_(this, e));
    let i = e2(e.text, r, n);
    this.bidiCache.push(new nR(e.from, e.to, r, n, !0, i));
    return i;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || ea.safari && this.inputState?.lastContextMenu > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      D(this.contentDOM);
      this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((9 == e.nodeType ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let e of (this.root.activeElement == this.contentDOM && this.contentDOM.blur(), this.plugins)) e.destroy(this);
    this.plugins = [];
    this.inputState.destroy();
    this.docView.destroy();
    this.dom.remove();
    this.observer.destroy();
    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled);
    this.destroyed = !0;
  }
  static scrollIntoView(e, r = {}) {
    return tc.of(new tu("number" == typeof e ? s.OF.cursor(e) : e, r.y, r.x, r.yMargin, r.xMargin));
  }
  scrollSnapshot() {
    let {
      scrollTop,
      scrollLeft
    } = this.scrollDOM;
    let n = this.viewState.scrollAnchorAt(scrollTop);
    return tc.of(new tu(s.OF.cursor(n.from), "start", "start", n.top - scrollTop, scrollLeft, !0));
  }
  setTabFocusMode(e) {
    null == e ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof e ? this.inputState.tabFocusMode = e ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return $$tm5.define(() => ({}), {
      eventHandlers: e
    });
  }
  static domEventObservers(e) {
    return $$tm5.define(() => ({}), {
      eventObservers: e
    });
  }
  static theme(e, r) {
    let n = o.G.newName();
    let i = [np.of(n), tA.of(nO(`.${n}`, e))];
    r && r.dark && i.push(ng.of(!0));
    return i;
  }
  static baseTheme(e) {
    return s.Nb.lowest(tA.of(nO("." + nm, e, nb)));
  }
  static findFromDOM(e) {
    var r;
    let n = e.querySelector(".cm-content");
    let i = n && B.get(n) || B.get(e);
    return i?.rootView?.view || null;
  }
}
$$nT2.styleModule = tA;
$$nT2.inputHandler = tr;
$$nT2.clipboardInputFilter = ti;
$$nT2.clipboardOutputFilter = ts;
$$nT2.scrollHandler = tl;
$$nT2.focusChangeEffect = tn;
$$nT2.perLineTextDirection = to;
$$nT2.exceptionSink = te;
$$nT2.updateListener = tt;
$$nT2.editable = tf;
$$nT2.mouseSelectionStyle = e9;
$$nT2.dragMovesSelection = e7;
$$nT2.clickAddsSelectionRange = e8;
$$nT2.decorations = tO;
$$nT2.outerDecorations = tx;
$$nT2.atomicRanges = tw;
$$nT2.bidiIsolatedRanges = tk;
$$nT2.scrollMargins = tS;
$$nT2.darkTheme = ng;
$$nT2.cspNonce = s.sj.define({
  combine: e => e.length ? e[0] : ""
});
$$nT2.contentAttributes = tb;
$$nT2.editorAttributes = ty;
$$nT2.lineWrapping = $$nT2.contentAttributes.of({
  class: "cm-lineWrapping"
});
$$nT2.announce = s.Pe.define();
let nI = 4096;
let nP = {};
class nR {
  constructor(e, r, n, i, s, o) {
    this.from = e;
    this.to = r;
    this.dir = n;
    this.isolates = i;
    this.fresh = s;
    this.order = o;
  }
  static update(e, r) {
    if (r.empty && !e.some(e => e.fresh)) return e;
    let n = [];
    let i = e.length ? e[e.length - 1].dir : $$ej1.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir != i || r.touchesRange(o.from, o.to) || n.push(new nR(r.mapPos(o.from, 1), r.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function nM(e, r, n) {
  for (function () {
    let i = e.state.facet(r);
    let s = i.length - 1;
  }(); s >= 0; s--) {
    let r = i[s];
    let o = "function" == typeof r ? r(e) : r;
    o && ey(o, n);
  }
  return n;
}
let nD = ea.mac ? "mac" : ea.windows ? "win" : ea.linux ? "linux" : "key";
function nN(e, r) {
  let n;
  let i;
  let s;
  let o;
  let a = e.split(/-(?!$)/);
  let h = a[a.length - 1];
  "Space" == h && (h = " ");
  for (let e = 0; e < a.length - 1; ++e) {
    let h = a[e];
    if (/^(cmd|meta|m)$/i.test(h)) o = !0;else if (/^a(lt)?$/i.test(h)) n = !0;else if (/^(c|ctrl|control)$/i.test(h)) i = !0;else if (/^s(hift)?$/i.test(h)) s = !0;else if (/^mod$/i.test(h)) "mac" == r ? o = !0 : i = !0;else throw Error("Unrecognized modifier name: " + h);
  }
  n && (h = "Alt-" + h);
  i && (h = "Ctrl-" + h);
  o && (h = "Meta-" + h);
  s && (h = "Shift-" + h);
  return h;
}
function n$(e, r, n) {
  r.altKey && (e = "Alt-" + e);
  r.ctrlKey && (e = "Ctrl-" + e);
  r.metaKey && (e = "Meta-" + e);
  !1 !== n && r.shiftKey && (e = "Shift-" + e);
  return e;
}
let nL = s.Nb.$$default($$nT2.domEventHandlers({
  keydown: (e, r) => nq(nZ(r.state), e, r, "editor")
}));
let $$nj17 = s.sj.define({
  enables: nL
});
let nz = new WeakMap();
function nZ(e) {
  let r = e.facet($$nj17);
  let n = nz.get(r);
  n || nz.set(r, n = nV(r.reduce((e, r) => e.concat(r), [])));
  return n;
}
export function $$nF22(e, r, n) {
  return nq(nZ(e.state), r, e, n);
}
let nU = null;
let nQ = 4e3;
function nV(e, r = nD) {
  let n = Object.create(null);
  let i = Object.create(null);
  let s = (e, r) => {
    let n = i[e];
    if (null == n) i[e] = r;else if (n != r) throw Error("Key binding " + e + " is used both as a regular binding and as a multi-stroke prefix");
  };
  let o = (e, i, o, a, h) => {
    var d;
    var p;
    let g = n[e] || (n[e] = Object.create(null));
    let m = i.split(/ (?!$)/).map(e => nN(e, r));
    for (let r = 1; r < m.length; r++) {
      let n = m.slice(0, r).join(" ");
      s(n, !0);
      g[n] || (g[n] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [r => {
          let i = nU = {
            view: r,
            prefix: n,
            scope: e
          };
          setTimeout(() => {
            nU == i && (nU = null);
          }, nQ);
          return !0;
        }]
      });
    }
    let v = m.join(" ");
    s(v, !1);
    let y = g[v] || (g[v] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: g._any?.run?.slice() || []
    });
    o && y.run.push(o);
    a && (y.preventDefault = !0);
    h && (y.stopPropagation = !0);
  };
  for (let i of e) {
    let e = i.scope ? i.scope.split(" ") : ["editor"];
    if (i.any) for (let r of e) {
      let e = n[r] || (n[r] = Object.create(null));
      e._any || (e._any = {
        preventDefault: !1,
        stopPropagation: !1,
        run: []
      });
      let {
        any
      } = i;
      for (let r in e) e[r].run.push(e => any(e, nB));
    }
    let s = i[r] || i.key;
    if (s) for (let r of e) {
      o(r, s, i.run, i.preventDefault, i.stopPropagation);
      i.shift && o(r, "Shift-" + s, i.shift, i.preventDefault, i.stopPropagation);
    }
  }
  return n;
}
let nB = null;
function nq(e, r, n, i) {
  nB = r;
  let o = v(r);
  let d = s.vS(o, 0);
  let p = s.Fh(d) == o.length && " " != o;
  let g = "";
  let m = !1;
  let y = !1;
  let b = !1;
  nU && nU.view == n && nU.scope == i && (g = nU.prefix + " ", 0 > rc.indexOf(r.keyCode) && (y = !0, nU = null));
  let O = new Set();
  let x = e => {
    if (e) {
      for (let r of e.run) if (!O.has(r) && (O.add(r), r(n))) {
        e.stopPropagation && (b = !0);
        return !0;
      }
      e.preventDefault && (e.stopPropagation && (b = !0), y = !0);
    }
    return !1;
  };
  let w = e[i];
  let k;
  let _;
  w && (x(w[g + n$(o, r, !p)]) ? m = !0 : p && (r.altKey || r.metaKey || r.ctrlKey) && !(ea.windows && r.ctrlKey && r.altKey) && (k = a[r.keyCode]) && k != o ? x(w[g + n$(k, r, !0)]) ? m = !0 : r.shiftKey && (_ = h[r.keyCode]) != o && _ != k && x(w[g + n$(_, r, !1)]) && (m = !0) : p && r.shiftKey && x(w[g + n$(o, r, !0)]) && (m = !0), !m && x(w._any) && (m = !0));
  y && (m = !0);
  m && b && r.stopPropagation();
  nB = null;
  return m;
}
class nW {
  constructor(e, r, n, i, s) {
    this.className = e;
    this.left = r;
    this.top = n;
    this.width = i;
    this.height = s;
  }
  draw() {
    let e = document.createElement("div");
    e.className = this.className;
    this.adjust(e);
    return e;
  }
  update(e, r) {
    return r.className == this.className && (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px";
    e.style.top = this.top + "px";
    null != this.width && (e.style.width = this.width + "px");
    e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, r, n) {
    if (!n.empty) return nX(e, r, n);
    {
      let i = e.coordsAtPos(n.head, n.assoc || 1);
      if (!i) return [];
      let s = nY(e);
      return [new nW(r, i.left - s.left, i.top - s.top, null, i.bottom - i.top)];
    }
  }
}
function nY(e) {
  let r = e.scrollDOM.getBoundingClientRect();
  return {
    left: (e.textDirection == $$ej1.LTR ? r.left : r.right - e.scrollDOM.clientWidth * e.scaleX) - e.scrollDOM.scrollLeft * e.scaleX,
    top: r.top - e.scrollDOM.scrollTop * e.scaleY
  };
}
function nG(e, r, n, i) {
  let s = e.coordsAtPos(r, 2 * n);
  if (!s) return i;
  let o = e.dom.getBoundingClientRect();
  let a = (s.top + s.bottom) / 2;
  let h = e.posAtCoords({
    x: o.left + 1,
    y: a
  });
  let d = e.posAtCoords({
    x: o.right - 1,
    y: a
  });
  return null == h || null == d ? i : {
    from: Math.max(i.from, Math.min(h, d)),
    to: Math.min(i.to, Math.max(h, d))
  };
}
function nX(e, r, n) {
  if (n.to <= e.viewport.from || n.from >= e.viewport.to) return [];
  let i = Math.max(n.from, e.viewport.from);
  let s = Math.min(n.to, e.viewport.to);
  let o = e.textDirection == $$ej1.LTR;
  let a = e.contentDOM;
  let h = a.getBoundingClientRect();
  let d = nY(e);
  let p = a.querySelector(".cm-line");
  let g = p && window.getComputedStyle(p);
  let m = h.left + (g ? parseInt(g.paddingLeft) + Math.min(0, parseInt(g.textIndent)) : 0);
  let v = h.right - (g ? parseInt(g.paddingRight) : 0);
  let y = tH(e, i);
  let b = tH(e, s);
  let O = y.type == e_.Text ? y : null;
  let x = b.type == e_.Text ? b : null;
  if (O && (e.lineWrapping || y.widgetLineBreaks) && (O = nG(e, i, 1, O)), x && (e.lineWrapping || b.widgetLineBreaks) && (x = nG(e, s, -1, x)), O && x && O.from == x.from && O.to == x.to) return k(_(n.from, n.to, O));
  {
    let r = O ? _(n.from, null, O) : S(y, !1);
    let i = x ? _(null, n.to, x) : S(b, !0);
    let s = [];
    (O || y).to < (x || b).from - (O && x ? 1 : 0) || y.widgetLineBreaks > 1 && r.bottom + e.defaultLineHeight / 2 < i.top ? s.push(w(m, r.bottom, v, i.top)) : r.bottom < i.top && e.elementAtHeight((r.bottom + i.top) / 2).type == e_.Text && (r.bottom = i.top = (r.bottom + i.top) / 2);
    return k(r).concat(s).concat(k(i));
  }
  function w(e, n, i, s) {
    return new nW(r, e - d.left, n - d.top, i - e, s - n);
  }
  function k({
    top: e,
    bottom: r,
    horizontal: n
  }) {
    let i = [];
    for (let s = 0; s < n.length; s += 2) i.push(w(n[s], e, n[s + 1], r));
    return i;
  }
  function _(r, n, i) {
    let s = 1e9;
    let a = -1e9;
    let h = [];
    function d(r, n, d, p, g) {
      let y = e.coordsAtPos(r, r == i.to ? -2 : 2);
      let b = e.coordsAtPos(d, d == i.from ? 2 : -2);
      y && b && (s = Math.min(y.top, b.top, s), a = Math.max(y.bottom, b.bottom, a), g == $$ej1.LTR ? h.push(o && n ? m : y.left, o && p ? v : b.right) : h.push(!o && p ? m : b.left, !o && n ? v : y.right));
    }
    let p = null != r ? r : i.from;
    let g = null != n ? n : i.to;
    for (let i of e.visibleRanges) if (i.to > p && i.from < g) for (function () {
      let s = Math.max(i.from, p);
      let o = Math.min(i.to, g);
    }();;) {
      let i = e.state.doc.lineAt(s);
      for (let a of e.bidiSpans(i)) {
        let e = a.from + i.from;
        let h = a.to + i.from;
        if (e >= o) break;
        h > s && d(Math.max(e, s), null == r && e <= p, Math.min(h, o), null == n && h >= g, a.dir);
      }
      if ((s = i.to + 1) >= o) break;
    }
    0 == h.length && d(p, null == r, g, null == n, e.textDirection);
    return {
      top: s,
      bottom: a,
      horizontal: h
    };
  }
  function S(e, r) {
    let n = h.top + (r ? e.top : e.bottom);
    return {
      top: n,
      bottom: n,
      horizontal: []
    };
  }
}
function nH(e, r) {
  return e.constructor == r.constructor && e.eq(r);
}
class nK {
  constructor(e, r) {
    this.view = e;
    this.layer = r;
    this.drawn = [];
    this.scaleX = 1;
    this.scaleY = 1;
    this.measureReq = {
      read: this.measure.bind(this),
      write: this.draw.bind(this)
    };
    this.dom = e.scrollDOM.appendChild(document.createElement("div"));
    this.dom.classList.add("cm-layer");
    r.above && this.dom.classList.add("cm-layer-above");
    r.$$class && this.dom.classList.add(r.$$class);
    this.scale();
    this.dom.setAttribute("aria-hidden", "true");
    this.setOrder(e.state);
    e.requestMeasure(this.measureReq);
    r.mount && r.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(nJ) != e.state.facet(nJ) && this.setOrder(e.state);
    (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    !1 !== this.layer.updateOnDocViewUpdate && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let r = 0;
    let n = e.facet(nJ);
    for (; r < n.length && n[r] != this.layer;) r++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - r);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let {
      scaleX,
      scaleY
    } = this.view;
    (scaleX != this.scaleX || scaleY != this.scaleY) && (this.scaleX = scaleX, this.scaleY = scaleY, this.dom.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((e, r) => !nH(e, this.drawn[r]))) {
      let r = this.dom.firstChild;
      let n = 0;
      for (let i of e) i.update && r && i.constructor && this.drawn[n].constructor && i.update(r, this.drawn[n]) ? (r = r.nextSibling, n++) : this.dom.insertBefore(i.draw(), r);
      for (; r;) {
        let e = r.nextSibling;
        r.remove();
        r = e;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view);
    this.dom.remove();
  }
}
let nJ = s.sj.define();
function n0(e) {
  return [$$tm5.define(r => new nK(r, e)), nJ.of(e)];
}
let n1 = !(ea.ios && ea.webkit && ea.webkit_version < 534);
let n2 = s.sj.define({
  combine: e => s.QR(e, {
    cursorBlinkRate: 1200,
    drawRangeCursor: !0
  }, {
    cursorBlinkRate: (e, r) => Math.min(e, r),
    drawRangeCursor: (e, r) => e || r
  })
});
export function $$n58(e = {}) {
  return [n2.of(e), n6, n8, n9, ta.of(!0)];
}
function n3(e) {
  return e.startState.facet(n2) != e.state.facet(n2);
}
let n6 = n0({
  above: !0,
  markers(e) {
    let {
      state
    } = e;
    let n = state.facet(n2);
    let i = [];
    for (let o of state.selection.ranges) {
      let a = o == state.selection.main;
      if (o.empty ? !a || n1 : n.drawRangeCursor) {
        let r = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary";
        let n = o.empty ? o : s.OF.cursor(o.head, o.head > o.anchor ? -1 : 1);
        for (let s of nW.forRange(e, r, n)) i.push(s);
      }
    }
    return i;
  },
  update(e, r) {
    e.transactions.some(e => e.selection) && (r.style.animationName = "cm-blink" == r.style.animationName ? "cm-blink2" : "cm-blink");
    let n = n3(e);
    n && n4(e.state, r);
    return e.docChanged || e.selectionSet || n;
  },
  mount(e, r) {
    n4(r.state, e);
  },
  class: "cm-cursorLayer"
});
function n4(e, r) {
  r.style.animationDuration = e.facet(n2).cursorBlinkRate + "ms";
}
let n8 = n0({
  above: !1,
  markers: e => e.state.selection.ranges.map(r => r.empty ? [] : nW.forRange(e, "cm-selectionBackground", r)).reduce((e, r) => e.concat(r)),
  update: (e, r) => e.docChanged || e.selectionSet || e.viewportChanged || n3(e),
  class: "cm-selectionLayer"
});
let n7 = {
  ".cm-line": {
    "& ::selection, &::selection": {
      backgroundColor: "transparent !important"
    }
  },
  ".cm-content": {
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
};
n1 && (n7[".cm-line"].caretColor = n7[".cm-content"].caretColor = "transparent !important");
let n9 = s.Nb.highest($$nT2.theme(n7));
let ie = s.Pe.define({
  map: (e, r) => null == e ? null : r.mapPos(e)
});
let it = s.sU.define({
  create: () => null,
  update: (e, r) => (null != e && (e = r.changes.mapPos(e)), r.effects.reduce((e, r) => r.is(ie) ? r.value : e, e))
});
let ir = $$tm5.fromClass(class {
  constructor(e) {
    this.view = e;
    this.cursor = null;
    this.measureReq = {
      read: this.readPos.bind(this),
      write: this.drawCursor.bind(this)
    };
  }
  update(e) {
    var r;
    let n = e.state.field(it);
    null == n ? null != this.cursor && (null === (r = this.cursor) || void 0 === r || r.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (e.startState.field(it) != n || e.docChanged || e.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let {
      view
    } = this;
    let r = view.state.field(it);
    let n = null != r && view.coordsAtPos(r);
    if (!n) return null;
    let i = view.scrollDOM.getBoundingClientRect();
    return {
      left: n.left - i.left + view.scrollDOM.scrollLeft * view.scaleX,
      top: n.top - i.top + view.scrollDOM.scrollTop * view.scaleY,
      height: n.bottom - n.top
    };
  }
  drawCursor(e) {
    if (this.cursor) {
      let {
        scaleX,
        scaleY
      } = this.view;
      e ? (this.cursor.style.left = e.left / scaleX + "px", this.cursor.style.top = e.top / scaleY + "px", this.cursor.style.height = e.height / scaleY + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(e) {
    this.view.state.field(it) != e && this.view.dispatch({
      effects: ie.of(e)
    });
  }
}, {
  eventObservers: {
    dragover(e) {
      this.setDropPos(this.view.posAtCoords({
        x: e.clientX,
        y: e.clientY
      }));
    },
    dragleave(e) {
      e.target != this.view.contentDOM && this.view.contentDOM.contains(e.relatedTarget) || this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
export function $$ii9() {
  return [it, ir];
}
function is(e, r, n, i, s) {
  r.lastIndex = 0;
  for (function () {
    let o = e.iterRange(n, i);
    let a = n;
    let h;
  }(); !o.next().done; a += o.value.length) if (!o.lineBreak) for (; h = r.exec(o.value);) s(a + h.index, h);
}
function io(e, r) {
  let n = e.visibleRanges;
  if (1 == n.length && n[0].from == e.viewport.from && n[0].to == e.viewport.to) return n;
  let i = [];
  for (let {
    from,
    to
  } of n) {
    s = Math.max(e.state.doc.lineAt(from).from, from - r);
    o = Math.min(e.state.doc.lineAt(to).to, to + r);
    i.length && i[i.length - 1].to >= from ? i[i.length - 1].to = to : i.push({
      from,
      to
    });
  }
  return i;
}
export class $$ia4 {
  constructor(e) {
    this.regexp = regexp;
    let {
      regexp,
      decoration,
      decorate,
      boundary,
      maxLength = 1e3
    } = e;
    if (!regexp.global) throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (decorate) this.addMatch = (e, r, n, s) => decorate(s, n, n + e[0].length, e, r);else if ("function" == typeof decoration) this.addMatch = (e, r, i, s) => {
      let o = decoration(e, r, i);
      o && s(i, i + e[0].length, o);
    };else if (decoration) this.addMatch = (e, r, i, s) => s(i, i + e[0].length, decoration);else throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = boundary;
    this.maxLength = maxLength;
  }
  createDeco(e) {
    let r = new s.vB();
    let n = r.add.bind(r);
    for (let {
      from,
      to
    } of io(e, this.maxLength)) is(e.state.doc, this.regexp, from, to, (r, i) => this.addMatch(i, e, r, n));
    return r.finish();
  }
  updateDeco(e, r) {
    let n = 1e9;
    let i = -1;
    return (e.docChanged && e.changes.iterChanges((r, s, o, a) => {
      a >= e.view.viewport.from && o <= e.view.viewport.to && (n = Math.min(o, n), i = Math.max(a, i));
    }), e.viewportMoved || i - n > 1e3) ? this.createDeco(e.view) : i > -1 ? this.updateRange(e.view, r.map(e.changes), n, i) : r;
  }
  updateRange(e, r, n, i) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, n);
      let a = Math.min(s.to, i);
      if (a > o) {
        let n = e.state.doc.lineAt(o);
        let i = n.to < a ? e.state.doc.lineAt(a) : n;
        let h = Math.max(s.from, n.from);
        let d = Math.min(s.to, i.to);
        if (this.boundary) {
          for (; o > n.from; o--) if (this.boundary.test(n.text[o - 1 - n.from])) {
            h = o;
            break;
          }
          for (; a < i.to; a++) if (this.boundary.test(i.text[a - i.from])) {
            d = a;
            break;
          }
        }
        let p = [];
        let g;
        let m = (e, r, n) => p.push(n.range(e, r));
        if (n == i) for (this.regexp.lastIndex = h - n.from; (g = this.regexp.exec(n.text)) && g.index < d - n.from;) this.addMatch(g, e, g.index + n.from, m);else is(e.state.doc, this.regexp, h, d, (r, n) => this.addMatch(n, e, r, m));
        r = r.update({
          filterFrom: h,
          filterTo: d,
          filter: (e, r) => e < h || r > d,
          add: p
        });
      }
    }
    return r;
  }
}
let il = null != /x/.unicode ? "gu" : "g";
let iu = RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]", il);
let ic = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let ih = null;
function id() {
  var e;
  if (null == ih && "undefined" != typeof document && document.body) {
    let r = document.body.style;
    ih = (null !== (e = r.tabSize) && void 0 !== e ? e : r.MozTabSize) != null;
  }
  return ih || !1;
}
let ip = s.sj.define({
  combine(e) {
    let r = s.QR(e, {
      render: null,
      specialChars: iu,
      addSpecialChars: null
    });
    (r.replaceTabs = !id()) && (r.specialChars = RegExp("	|" + r.specialChars.source, il));
    r.addSpecialChars && (r.specialChars = RegExp(r.specialChars.source + "|" + r.addSpecialChars.source, il));
    return r;
  }
});
export function $$ig15(e = {}) {
  return [ip.of(e), iv()];
}
let im = null;
function iv() {
  return im || (im = $$tm5.fromClass(class {
    constructor(e) {
      this.view = e;
      this.decorations = $$eS0.none;
      this.decorationCache = Object.create(null);
      this.decorator = this.makeDecorator(e.state.facet(ip));
      this.decorations = this.decorator.createDeco(e);
    }
    makeDecorator(e) {
      return new $$ia4({
        regexp: e.specialChars,
        decoration: (r, n, i) => {
          let {
            doc
          } = n.state;
          let a = s.vS(r[0], 0);
          if (9 == a) {
            let e = doc.lineAt(i);
            let r = n.state.tabSize;
            let a = s.y$(e.text, r, i - e.from);
            return $$eS0.replace({
              widget: new ix((r - a % r) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[a] || (this.decorationCache[a] = $$eS0.replace({
            widget: new iO(e, a)
          }));
        },
        boundary: e.replaceTabs ? void 0 : /[^]/
      });
    }
    update(e) {
      let r = e.state.facet(ip);
      e.startState.facet(ip) != r ? (this.decorator = this.makeDecorator(r), this.decorations = this.decorator.createDeco(e.view)) : this.decorations = this.decorator.updateDeco(e, this.decorations);
    }
  }, {
    decorations: e => e.decorations
  }));
}
let iy = "\u2022";
function ib(e) {
  return e >= 32 ? iy : 10 == e ? "\u2424" : String.fromCharCode(9216 + e);
}
class iO extends $$ek6 {
  constructor(e, r) {
    super();
    this.options = e;
    this.code = r;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let r = ib(this.code);
    let n = e.state.phrase("Control character") + " " + (ic[this.code] || "0x" + this.code.toString(16));
    let i = this.options.render && this.options.render(this.code, n, r);
    if (i) return i;
    let s = document.createElement("span");
    s.textContent = r;
    s.title = n;
    s.setAttribute("aria-label", n);
    s.className = "cm-specialChar";
    return s;
  }
  ignoreEvent() {
    return !1;
  }
}
class ix extends $$ek6 {
  constructor(e) {
    super();
    this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    e.textContent = "	";
    e.className = "cm-tab";
    e.style.width = this.width + "px";
    return e;
  }
  ignoreEvent() {
    return !1;
  }
}
export function $$iw13() {
  return i_;
}
let ik = $$eS0.line({
  class: "cm-activeLine"
});
let i_ = $$tm5.fromClass(class {
  constructor(e) {
    this.decorations = this.getDeco(e);
  }
  update(e) {
    (e.docChanged || e.selectionSet) && (this.decorations = this.getDeco(e.view));
  }
  getDeco(e) {
    let r = -1;
    let n = [];
    for (let i of e.state.selection.ranges) {
      let s = e.lineBlockAt(i.head);
      s.from > r && (n.push(ik.range(s.from)), r = s.from);
    }
    return $$eS0.set(n);
  }
}, {
  decorations: e => e.decorations
});
class iS extends $$ek6 {
  constructor(e) {
    super();
    this.content = e;
  }
  toDOM(e) {
    let r = document.createElement("span");
    r.className = "cm-placeholder";
    r.style.pointerEvents = "none";
    r.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(e) : this.content.cloneNode(!0));
    "string" == typeof this.content ? r.setAttribute("aria-label", "placeholder " + this.content) : r.setAttribute("aria-hidden", "true");
    return r;
  }
  coordsAt(e) {
    let r = e.firstChild ? x(e.firstChild) : [];
    if (!r.length) return null;
    let n = window.getComputedStyle(e.parentNode);
    let i = $$A(r[0], "rtl" != n.direction);
    let s = parseInt(n.lineHeight);
    return i.bottom - i.top > 1.5 * s ? {
      left: i.left,
      right: i.right,
      top: i.top,
      bottom: i.top + s
    } : i;
  }
  ignoreEvent() {
    return !1;
  }
}
export function $$iE20(e) {
  return $$tm5.fromClass(class {
    constructor(r) {
      this.view = r;
      this.placeholder = e ? $$eS0.set([$$eS0.widget({
        widget: new iS(e),
        side: 1
      }).range(0)]) : $$eS0.none;
    }
    get decorations() {
      return this.view.state.doc.length ? $$eS0.none : this.placeholder;
    }
  }, {
    decorations: e => e.decorations
  });
}
let iA = 2e3;
function iC(e, r, n) {
  let i = Math.min(r.line, n.line);
  let o = Math.max(r.line, n.line);
  let a = [];
  if (r.off > iA || n.off > iA || r.col < 0 || n.col < 0) {
    let h = Math.min(r.off, n.off);
    let d = Math.max(r.off, n.off);
    for (let r = i; r <= o; r++) {
      let n = e.doc.line(r);
      n.length <= d && a.push(s.OF.range(n.from + h, n.to + d));
    }
  } else {
    let h = Math.min(r.col, n.col);
    let d = Math.max(r.col, n.col);
    for (let r = i; r <= o; r++) {
      let n = e.doc.line(r);
      let i = s.kn(n.text, h, e.tabSize, !0);
      if (i < 0) a.push(s.OF.cursor(n.to));else {
        let r = s.kn(n.text, d, e.tabSize);
        a.push(s.OF.range(n.from + i, n.from + r));
      }
    }
  }
  return a;
}
function iT(e, r) {
  let n = e.coordsAtPos(e.viewport.from);
  return n ? Math.round(Math.abs((n.left - r) / e.defaultCharacterWidth)) : -1;
}
function iI(e, r) {
  let n = e.posAtCoords({
    x: r.clientX,
    y: r.clientY
  }, !1);
  let i = e.state.doc.lineAt(n);
  let o = n - i.from;
  let a = o > iA ? -1 : o == i.length ? iT(e, r.clientX) : s.y$(i.text, e.state.tabSize, n - i.from);
  return {
    line: i.number,
    col: a,
    off: o
  };
}
function iP(e, r) {
  let n = iI(e, r);
  let i = e.state.selection;
  return n ? {
    update(e) {
      if (e.docChanged) {
        let r = e.changes.mapPos(e.startState.doc.line(n.line).from);
        let s = e.state.doc.lineAt(r);
        n = {
          line: s.number,
          col: n.col,
          off: Math.min(n.off, s.length)
        };
        i = i.map(e.changes);
      }
    },
    get(r, o, a) {
      let h = iI(e, r);
      if (!h) return i;
      let d = iC(e.state, n, h);
      return d.length ? a ? s.OF.create(d.concat(i.ranges)) : s.OF.create(d) : i;
    }
  } : null;
}
export function $$iR21(e) {
  let r = e?.eventFilter || (e => e.altKey && 0 == e.button);
  return $$nT2.mouseSelectionStyle.of((e, n) => r(n) ? iP(e, n) : null);
}
let iM = {
  Alt: [18, e => !!e.altKey],
  Control: [17, e => !!e.ctrlKey],
  Shift: [16, e => !!e.shiftKey],
  Meta: [91, e => !!e.metaKey]
};
let iD = {
  style: "cursor: crosshair"
};
export function $$iN7(e = {}) {
  let [r, n] = iM[e.key || "Alt"];
  let i = $$tm5.fromClass(class {
    constructor(e) {
      this.view = e;
      this.isDown = !1;
    }
    set(e) {
      this.isDown != e && (this.isDown = e, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(e) {
        this.set(e.keyCode == r || n(e));
      },
      keyup(e) {
        e.keyCode != r && n(e) || this.set(!1);
      },
      mousemove(e) {
        this.set(n(e));
      }
    }
  });
  return [i, $$nT2.contentAttributes.of(e => {
    var r;
    return e.plugin(i)?.isDown ? iD : null;
  })];
}
let i$ = "-10000px";
class iL {
  constructor(e, r, n, i) {
    this.facet = r;
    this.createTooltipView = n;
    this.removeTooltipView = i;
    this.input = e.state.facet(r);
    this.tooltips = this.input.filter(e => e);
    let s = null;
    this.tooltipViews = this.tooltips.map(e => s = n(e, s));
  }
  update(e, r) {
    var n;
    let i = e.state.facet(this.facet);
    let s = i.filter(e => e);
    if (i === this.input) {
      for (let r of this.tooltipViews) r.update && r.update(e);
      return !1;
    }
    let o = [];
    let a = r ? [] : null;
    for (let n = 0; n < s.length; n++) {
      let i = s[n];
      let h = -1;
      if (i) {
        for (let e = 0; e < this.tooltips.length; e++) {
          let r = this.tooltips[e];
          r && r.create == i.create && (h = e);
        }
        if (h < 0) {
          o[n] = this.createTooltipView(i, n ? o[n - 1] : null);
          a && (a[n] = !!i.above);
        } else {
          let i = o[n] = this.tooltipViews[h];
          a && (a[n] = r[h]);
          i.update && i.update(e);
        }
      }
    }
    for (let e of this.tooltipViews) 0 > o.indexOf(e) && (this.removeTooltipView(e), e.destroy?.call(e));
    r && (a.forEach((e, n) => r[n] = e), r.length = a.length);
    this.input = i;
    this.tooltips = s;
    this.tooltipViews = o;
    return !0;
  }
}
export function $$ij25(e = {}) {
  return iZ.of(e);
}
function iz(e) {
  let {
    win
  } = e;
  return {
    top: 0,
    left: 0,
    bottom: win.innerHeight,
    right: win.innerWidth
  };
}
let iZ = s.sj.define({
  combine: e => {
    var r;
    var n;
    var i;
    return {
      position: ea.ios ? "absolute" : e.find(e => e.position)?.position || "fixed",
      parent: e.find(e => e.parent)?.parent || null,
      tooltipSpace: e.find(e => e.tooltipSpace)?.tooltipSpace || iz
    };
  }
});
let iF = new WeakMap();
let iU = $$tm5.fromClass(class {
  constructor(e) {
    this.view = e;
    this.above = [];
    this.inView = !0;
    this.madeAbsolute = !1;
    this.lastTransaction = 0;
    this.measureTimeout = -1;
    let r = e.state.facet(iZ);
    this.position = r.position;
    this.parent = r.parent;
    this.classes = e.themeClasses;
    this.createContainer();
    this.measureReq = {
      read: this.readMeasure.bind(this),
      write: this.writeMeasure.bind(this),
      key: this
    };
    this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver(() => this.measureSoon()) : null;
    this.manager = new iL(e, $$iq24, (e, r) => this.createTooltip(e, r), e => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom);
      e.dom.remove();
    });
    this.above = this.manager.tooltips.map(e => !!e.above);
    this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver(e => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, {
      threshold: [1]
    }) : null;
    this.observeIntersection();
    e.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
    this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) for (let e of (this.intersectionObserver.disconnect(), this.manager.tooltipViews)) this.intersectionObserver.observe(e.dom);
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1;
      this.maybeMeasure();
    }, 50));
  }
  update(e) {
    e.transactions.length && (this.lastTransaction = Date.now());
    let r = this.manager.update(e, this.above);
    r && this.observeIntersection();
    let n = r || e.geometryChanged;
    let i = e.state.facet(iZ);
    if (i.position != this.position && !this.madeAbsolute) {
      for (let e of (this.position = i.position, this.manager.tooltipViews)) e.dom.style.position = this.position;
      n = !0;
    }
    if (i.parent != this.parent) {
      for (let e of (this.parent && this.container.remove(), this.parent = i.parent, this.createContainer(), this.manager.tooltipViews)) this.container.appendChild(e.dom);
      n = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    n && this.maybeMeasure();
  }
  createTooltip(e, r) {
    let n = e.create(this.view);
    let i = r ? r.dom : null;
    if (n.dom.classList.add("cm-tooltip"), e.arrow && !n.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let e = document.createElement("div");
      e.className = "cm-tooltip-arrow";
      n.dom.appendChild(e);
    }
    n.dom.style.position = this.position;
    n.dom.style.top = i$;
    n.dom.style.left = "0px";
    this.container.insertBefore(n.dom, i);
    n.mount && n.mount(this.view);
    this.resizeObserver && this.resizeObserver.observe(n.dom);
    return n;
  }
  destroy() {
    var e;
    var r;
    var n;
    for (let r of (this.view.win.removeEventListener("resize", this.measureSoon), this.manager.tooltipViews)) {
      r.dom.remove();
      r.destroy?.call(r);
    }
    this.parent && this.container.remove();
    null === (r = this.resizeObserver) || void 0 === r || r.disconnect();
    null === (n = this.intersectionObserver) || void 0 === n || n.disconnect();
    clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let e = 1;
    let r = 1;
    let n = !1;
    if ("fixed" == this.position && this.manager.tooltipViews.length) {
      let {
        dom
      } = this.manager.tooltipViews[0];
      if (ea.gecko) n = dom.offsetParent != this.container.ownerDocument.body;else if (dom.style.top == i$ && "0px" == dom.style.left) {
        let r = dom.getBoundingClientRect();
        n = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
      }
    }
    if (n || "absolute" == this.position) {
      if (this.parent) {
        let n = this.parent.getBoundingClientRect();
        n.width && n.height && (e = n.width / this.parent.offsetWidth, r = n.height / this.parent.offsetHeight);
      } else ({
        scaleX: e,
        scaleY: r
      } = this.view.viewState);
    }
    let i = this.view.scrollDOM.getBoundingClientRect();
    let s = tE(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((e, r) => {
        let n = this.manager.tooltipViews[r];
        return n.getCoords ? n.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
      }),
      size: this.manager.tooltipViews.map(({
        dom: e
      }) => e.getBoundingClientRect()),
      space: this.view.state.facet(iZ).tooltipSpace(this.view),
      scaleX: e,
      scaleY: r,
      makeAbsolute: n
    };
  }
  writeMeasure(e) {
    var r;
    if (e.makeAbsolute) for (let e of (this.madeAbsolute = !0, this.position = "absolute", this.manager.tooltipViews)) e.dom.style.position = "absolute";
    let {
      visible,
      space,
      scaleX,
      scaleY
    } = e;
    let a = [];
    for (let h = 0; h < this.manager.tooltips.length; h++) {
      let d = this.manager.tooltips[h];
      let p = this.manager.tooltipViews[h];
      let {
        dom
      } = p;
      let m = e.pos[h];
      let v = e.size[h];
      if (!m || !1 !== d.clip && (m.bottom <= Math.max(visible.top, space.top) || m.top >= Math.min(visible.bottom, space.bottom) || m.right < Math.max(visible.left, space.left) - .1 || m.left > Math.min(visible.right, space.right) + .1)) {
        dom.style.top = i$;
        continue;
      }
      let y = d.arrow ? p.dom.querySelector(".cm-tooltip-arrow") : null;
      let b = y ? 7 : 0;
      let O = v.right - v.left;
      let x = null !== (r = iF.get(p)) && void 0 !== r ? r : v.bottom - v.top;
      let w = p.offset || iB;
      let k = this.view.textDirection == $$ej1.LTR;
      let _ = v.width > space.right - space.left ? k ? space.left : space.right - v.width : k ? Math.max(space.left, Math.min(m.left - (y ? 14 : 0) + w.x, space.right - O)) : Math.min(Math.max(space.left, m.left - O + (y ? 14 : 0) - w.x), space.right - O);
      let S = this.above[h];
      !d.strictSide && (S ? m.top - x - b - w.y < space.top : m.bottom + x + b + w.y > space.bottom) && S == space.bottom - m.bottom > m.top - space.top && (S = this.above[h] = !S);
      let E = (S ? m.top - space.top : space.bottom - m.bottom) - b;
      if (E < x && !1 !== p.resize) {
        if (E < this.view.defaultLineHeight) {
          dom.style.top = i$;
          continue;
        }
        iF.set(p, x);
        dom.style.height = (x = E) / scaleY + "px";
      } else dom.style.height && (dom.style.height = "");
      let A = S ? m.top - x - b - w.y : m.bottom + b + w.y;
      let C = _ + O;
      if (!0 !== p.overlap) for (let e of a) e.left < C && e.right > _ && e.top < A + x && e.bottom > A && (A = S ? e.top - x - 2 - b : e.bottom + b + 2);
      if ("absolute" == this.position ? (dom.style.top = (A - e.parent.top) / scaleY + "px", iQ(dom, (_ - e.parent.left) / scaleX)) : (dom.style.top = A / scaleY + "px", iQ(dom, _ / scaleX)), y) {
        let e = m.left + (k ? w.x : -w.x) - (_ + 14 - 7);
        y.style.left = e / scaleX + "px";
      }
      !0 !== p.overlap && a.push({
        left: _,
        top: A,
        right: C,
        bottom: A + x
      });
      dom.classList.toggle("cm-tooltip-above", S);
      dom.classList.toggle("cm-tooltip-below", !S);
      p.positioned && p.positioned(e.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let e of this.manager.tooltipViews) e.dom.style.top = i$;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function iQ(e, r) {
  let n = parseInt(e.style.left, 10);
  (isNaN(n) || Math.abs(r - n) > 1) && (e.style.left = r + "px");
}
let iV = $$nT2.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
});
let iB = {
  x: 0,
  y: 0
};
let $$iq24 = s.sj.define({
  enables: [iU, iV]
});
let iW = s.sj.define({
  combine: e => e.reduce((e, r) => e.concat(r), [])
});
class iY {
  static create(e) {
    return new iY(e);
  }
  constructor(e) {
    this.view = e;
    this.mounted = !1;
    this.dom = document.createElement("div");
    this.dom.classList.add("cm-tooltip-hover");
    this.manager = new iL(e, iW, (e, r) => this.createHostedView(e, r), e => e.dom.remove());
  }
  createHostedView(e, r) {
    let n = e.create(this.view);
    n.dom.classList.add("cm-tooltip-section");
    this.dom.insertBefore(n.dom, r ? r.dom.nextSibling : this.dom.firstChild);
    this.mounted && n.mount && n.mount(this.view);
    return n;
  }
  mount(e) {
    for (let r of this.manager.tooltipViews) r.mount && r.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let r of this.manager.tooltipViews) r.positioned && r.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let r of this.manager.tooltipViews) r.destroy?.call(r);
  }
  passProp(e) {
    let r;
    for (let n of this.manager.tooltipViews) {
      let i = n[e];
      if (void 0 !== i) {
        if (void 0 === r) r = i;else if (r !== i) return;
      }
    }
    return r;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
let iG = $$iq24.compute([iW], e => {
  let r = e.facet(iW);
  return 0 === r.length ? null : {
    pos: Math.min(...r.map(e => e.pos)),
    end: Math.max(...r.map(e => {
      var r;
      return null !== (r = e.end) && void 0 !== r ? r : e.pos;
    })),
    create: iY.create,
    above: r[0].above,
    arrow: r.some(e => e.arrow)
  };
});
class iX {
  constructor(e, r, n, i, s) {
    this.view = e;
    this.source = r;
    this.field = n;
    this.setHover = i;
    this.hoverTime = s;
    this.hoverTimeout = -1;
    this.restartTimeout = -1;
    this.pending = null;
    this.lastMove = {
      x: 0,
      y: 0,
      target: e.dom,
      time: 0
    };
    this.checkHover = this.checkHover.bind(this);
    e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
    e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let {
      view,
      lastMove
    } = this;
    let n = view.docView.nearest(lastMove.target);
    if (!n) return;
    let i;
    let s = 1;
    if (n instanceof ed) i = n.posAtStart;else {
      if (null == (i = view.posAtCoords(lastMove))) return;
      let n = view.coordsAtPos(i);
      if (!n || lastMove.y < n.top || lastMove.y > n.bottom || lastMove.x < n.left - view.defaultCharacterWidth || lastMove.x > n.right + view.defaultCharacterWidth) return;
      let o = view.bidiSpans(view.state.doc.lineAt(i)).find(e => e.from <= i && e.to >= i);
      let a = o && o.dir == $$ej1.RTL ? -1 : 1;
      s = lastMove.x < n.left ? -a : a;
    }
    let o = this.source(view, i, s);
    if (o?.then) {
      let r = this.pending = {
        pos: i
      };
      o.then(n => {
        this.pending == r && (this.pending = null, n && !(Array.isArray(n) && !n.length) && view.dispatch({
          effects: this.setHover.of(Array.isArray(n) ? n : [n])
        }));
      }, r => $$td19(view.state, r, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && view.dispatch({
      effects: this.setHover.of(Array.isArray(o) ? o : [o])
    });
  }
  get tooltip() {
    let e = this.view.plugin(iU);
    let r = e ? e.manager.tooltips.findIndex(e => e.create == iY.create) : -1;
    return r > -1 ? e.manager.tooltipViews[r] : null;
  }
  mousemove(e) {
    var r;
    var n;
    this.lastMove = {
      x: e.clientX,
      y: e.clientY,
      target: e.target,
      time: Date.now()
    };
    this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let {
      active,
      tooltip
    } = this;
    if (active.length && tooltip && !iK(tooltip.dom, e) || this.pending) {
      let {
        pos
      } = active[0] || this.pending;
      let o = null !== (n = active[0]?.end) && void 0 !== n ? n : pos;
      (pos == o ? this.view.posAtCoords(this.lastMove) == pos : iJ(this.view, pos, o, e.clientX, e.clientY)) || (this.view.dispatch({
        effects: this.setHover.of([])
      }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = -1;
    let {
      active
    } = this;
    if (active.length) {
      let {
        tooltip
      } = this;
      tooltip && tooltip.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(tooltip.dom) : this.view.dispatch({
        effects: this.setHover.of([])
      });
    }
  }
  watchTooltipLeave(e) {
    let r = n => {
      e.removeEventListener("mouseleave", r);
      this.active.length && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({
        effects: this.setHover.of([])
      });
    };
    e.addEventListener("mouseleave", r);
  }
  destroy() {
    clearTimeout(this.hoverTimeout);
    this.view.dom.removeEventListener("mouseleave", this.mouseleave);
    this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
let iH = 4;
function iK(e, r) {
  let {
    left,
    right,
    top,
    bottom
  } = e.getBoundingClientRect();
  let a;
  if (a = e.querySelector(".cm-tooltip-arrow")) {
    let e = a.getBoundingClientRect();
    s = Math.min(e.top, top);
    o = Math.max(e.bottom, bottom);
  }
  return r.clientX >= left - iH && r.clientX <= right + iH && r.clientY >= top - iH && r.clientY <= bottom + iH;
}
function iJ(e, r, n, i, s, o) {
  let a = e.scrollDOM.getBoundingClientRect();
  let h = e.documentTop + e.documentPadding.top + e.contentHeight;
  if (a.left > i || a.right < i || a.top > s || Math.min(a.bottom, h) < s) return !1;
  let d = e.posAtCoords({
    x: i,
    y: s
  }, !1);
  return d >= r && d <= n;
}
export function $$i016(e, r = {}) {
  let n = s.Pe.define();
  let i = s.sU.define({
    create: () => [],
    update(e, i) {
      if (e.length && (r.hideOnChange && (i.docChanged || i.selection) ? e = [] : r.hideOn && (e = e.filter(e => !r.hideOn(i, e))), i.docChanged)) {
        let r = [];
        for (let n of e) {
          let e = i.changes.mapPos(n.pos, -1, s.iR.TrackDel);
          if (null != e) {
            let s = Object.assign(Object.create(null), n);
            s.pos = e;
            null != s.end && (s.end = i.changes.mapPos(s.end));
            r.push(s);
          }
        }
        e = r;
      }
      for (let r of i.effects) {
        r.is(n) && (e = r.value);
        r.is(i2) && (e = []);
      }
      return e;
    },
    provide: e => iW.from(e)
  });
  return {
    active: i,
    extension: [i, $$tm5.define(s => new iX(s, e, i, n, r.hoverTime || 300)), iG]
  };
}
export function $$i111(e, r) {
  let n = e.plugin(iU);
  if (!n) return null;
  let i = n.manager.tooltips.indexOf(r);
  return i < 0 ? null : n.manager.tooltipViews[i];
}
let i2 = s.Pe.define();
let i5 = s.sj.define({
  combine(e) {
    let r;
    let n;
    for (let i of e) {
      r = r || i.topContainer;
      n = n || i.bottomContainer;
    }
    return {
      topContainer: r,
      bottomContainer: n
    };
  }
});
export function $$i310(e, r) {
  let n = e.plugin(i6);
  let i = n ? n.specs.indexOf(r) : -1;
  return i > -1 ? n.panels[i] : null;
}
let i6 = $$tm5.fromClass(class {
  constructor(e) {
    this.input = e.state.facet($$i723);
    this.specs = this.input.filter(e => e);
    this.panels = this.specs.map(r => r(e));
    let r = e.state.facet(i5);
    for (let n of (this.top = new i4(e, !0, r.topContainer), this.bottom = new i4(e, !1, r.bottomContainer), this.top.sync(this.panels.filter(e => e.top)), this.bottom.sync(this.panels.filter(e => !e.top)), this.panels)) {
      n.dom.classList.add("cm-panel");
      n.mount && n.mount();
    }
  }
  update(e) {
    let r = e.state.facet(i5);
    this.top.container != r.topContainer && (this.top.sync([]), this.top = new i4(e.view, !0, r.topContainer));
    this.bottom.container != r.bottomContainer && (this.bottom.sync([]), this.bottom = new i4(e.view, !1, r.bottomContainer));
    this.top.syncClasses();
    this.bottom.syncClasses();
    let n = e.state.facet($$i723);
    if (n != this.input) {
      let r = n.filter(e => e);
      let i = [];
      let s = [];
      let o = [];
      let a = [];
      for (let n of r) {
        let r = this.specs.indexOf(n);
        let h;
        r < 0 ? (h = n(e.view), a.push(h)) : (h = this.panels[r]).update && h.update(e);
        i.push(h);
        (h.top ? s : o).push(h);
      }
      for (let e of (this.specs = r, this.panels = i, this.top.sync(s), this.bottom.sync(o), a)) {
        e.dom.classList.add("cm-panel");
        e.mount && e.mount();
      }
    } else for (let r of this.panels) r.update && r.update(e);
  }
  destroy() {
    this.top.sync([]);
    this.bottom.sync([]);
  }
}, {
  provide: e => $$nT2.scrollMargins.of(r => {
    let n = r.plugin(e);
    return n && {
      top: n.top.scrollMargin(),
      bottom: n.bottom.scrollMargin()
    };
  })
});
class i4 {
  constructor(e, r, n) {
    this.view = e;
    this.top = r;
    this.container = n;
    this.dom = void 0;
    this.classes = "";
    this.panels = [];
    this.syncClasses();
  }
  sync(e) {
    for (let r of this.panels) r.destroy && 0 > e.indexOf(r) && r.destroy();
    this.panels = e;
    this.syncDOM();
  }
  syncDOM() {
    if (0 == this.panels.length) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div");
      this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
      this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let r of this.panels) if (r.dom.parentNode == this.dom) {
      for (; e != r.dom;) e = i8(e);
      e = e.nextSibling;
    } else this.dom.insertBefore(r.dom, e);
    for (; e;) e = i8(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (this.container && this.classes != this.view.themeClasses) {
      for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" ")) e && this.container.classList.add(e);
    }
  }
}
function i8(e) {
  let r = e.nextSibling;
  e.remove();
  return r;
}
export let $$i723 = s.sj.define({
  enables: i6
});
export class $$i93 extends s.FB {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
$$i93.prototype.elementClass = "";
$$i93.prototype.toDOM = void 0;
$$i93.prototype.mapMode = s.iR.TrackBefore;
$$i93.prototype.startSide = $$i93.prototype.endSide = -1;
$$i93.prototype.point = !0;
let se = s.sj.define();
let st = s.sj.define();
let sr = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => s.om.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
};
let sn = s.sj.define();
export function $$si12(e) {
  return [so(), sn.of(Object.assign(Object.assign({}, sr), e))];
}
let ss = s.sj.define({
  combine: e => e.some(e => e)
});
function so(e) {
  let r = [sa];
  e && !1 === e.fixed && r.push(ss.of(!0));
  return r;
}
let sa = $$tm5.fromClass(class {
  constructor(e) {
    for (let r of (this.view = e, this.prevViewport = e.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = e.state.facet(sn).map(r => new sh(e, r)), this.gutters)) this.dom.appendChild(r.dom);
    this.fixed = !e.state.facet(ss);
    this.fixed && (this.dom.style.position = "sticky");
    this.syncGutters(!1);
    e.scrollDOM.insertBefore(this.dom, e.contentDOM);
  }
  update(e) {
    if (this.updateGutters(e)) {
      let r = this.prevViewport;
      let n = e.view.viewport;
      let i = Math.min(r.to, n.to) - Math.max(r.from, n.from);
      this.syncGutters(i < (n.to - n.from) * .8);
    }
    e.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px");
    this.view.state.facet(ss) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "");
    this.prevViewport = e.view.viewport;
  }
  syncGutters(e) {
    let r = this.dom.nextSibling;
    e && this.dom.remove();
    let n = s.om.iter(this.view.state.facet(se), this.view.viewport.from);
    let i = [];
    let o = this.gutters.map(e => new sc(e, this.view.viewport, -this.view.documentPadding.top));
    for (let e of this.view.viewportLineBlocks) if (i.length && (i = []), Array.isArray(e.type)) {
      let r = !0;
      for (let s of e.type) if (s.type == e_.Text && r) {
        for (let e of (su(n, i, s.from), o)) e.line(this.view, s, i);
        r = !1;
      } else if (s.widget) for (let e of o) e.widget(this.view, s);
    } else if (e.type == e_.Text) for (let r of (su(n, i, e.from), o)) r.line(this.view, e, i);else if (e.widget) for (let r of o) r.widget(this.view, e);
    for (let e of o) e.finish();
    e && this.view.scrollDOM.insertBefore(this.dom, r);
  }
  updateGutters(e) {
    let r = e.startState.facet(sn);
    let n = e.state.facet(sn);
    let i = e.docChanged || e.heightChanged || e.viewportChanged || !s.om.eq(e.startState.facet(se), e.state.facet(se), e.view.viewport.from, e.view.viewport.to);
    if (r == n) for (let r of this.gutters) r.update(e) && (i = !0);else {
      i = !0;
      let s = [];
      for (let i of n) {
        let n = r.indexOf(i);
        n < 0 ? s.push(new sh(this.view, i)) : (this.gutters[n].update(e), s.push(this.gutters[n]));
      }
      for (let e of this.gutters) {
        e.dom.remove();
        0 > s.indexOf(e) && e.destroy();
      }
      for (let e of s) this.dom.appendChild(e.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let e of this.gutters) e.destroy();
    this.dom.remove();
  }
}, {
  provide: e => $$nT2.scrollMargins.of(r => {
    let n = r.plugin(e);
    return n && 0 != n.gutters.length && n.fixed ? r.textDirection == $$ej1.LTR ? {
      left: n.dom.offsetWidth * r.scaleX
    } : {
      right: n.dom.offsetWidth * r.scaleX
    } : null;
  })
});
function sl(e) {
  return Array.isArray(e) ? e : [e];
}
function su(e, r, n) {
  for (; e.value && e.from <= n;) {
    e.from == n && r.push(e.value);
    e.next();
  }
}
class sc {
  constructor(e, r, n) {
    this.gutter = e;
    this.height = n;
    this.i = 0;
    this.cursor = s.om.iter(e.markers, r.from);
  }
  addElement(e, r, n) {
    let {
      gutter
    } = this;
    let s = (r.top - this.height) / e.scaleY;
    let o = r.height / e.scaleY;
    if (this.i == gutter.elements.length) {
      let r = new sd(e, o, s, n);
      gutter.elements.push(r);
      gutter.dom.appendChild(r.dom);
    } else gutter.elements[this.i].update(e, o, s, n);
    this.height = r.bottom;
    this.i++;
  }
  line(e, r, n) {
    let i = [];
    su(this.cursor, i, r.from);
    n.length && (i = i.concat(n));
    let s = this.gutter.config.lineMarker(e, r, i);
    s && i.unshift(s);
    let o = this.gutter;
    (0 != i.length || o.config.renderEmptyElements) && this.addElement(e, r, i);
  }
  widget(e, r) {
    let n = this.gutter.config.widgetMarker(e, r.widget, r);
    let i = n ? [n] : null;
    for (let n of e.state.facet(st)) {
      let s = n(e, r.widget, r);
      s && (i || (i = [])).push(s);
    }
    i && this.addElement(e, r, i);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i;) {
      let r = e.elements.pop();
      e.dom.removeChild(r.dom);
      r.destroy();
    }
  }
}
class sh {
  constructor(e, r) {
    for (let n in this.view = e, this.config = r, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.$$class ? " " + this.config.$$class : ""), r.domEventHandlers) this.dom.addEventListener(n, i => {
      let s = i.target;
      let o;
      if (s != this.dom && this.dom.contains(s)) {
        for (; s.parentNode != this.dom;) s = s.parentNode;
        let e = s.getBoundingClientRect();
        o = (e.top + e.bottom) / 2;
      } else o = i.clientY;
      let a = e.lineBlockAtHeight(o - e.documentTop);
      r.domEventHandlers[n](e, a, i) && i.preventDefault();
    });
    this.markers = sl(r.markers(e));
    r.initialSpacer && (this.spacer = new sd(e, 0, 0, [r.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let r = this.markers;
    if (this.markers = sl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let n = e.view.viewport;
    return !s.om.eq(this.markers, r, n.from, n.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(e);
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class sd {
  constructor(e, r, n, i) {
    this.height = -1;
    this.above = 0;
    this.markers = [];
    this.dom = document.createElement("div");
    this.dom.className = "cm-gutterElement";
    this.update(e, r, n, i);
  }
  update(e, r, n, i) {
    this.height != r && (this.height = r, this.dom.style.height = r + "px");
    this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : "");
    sf(this.markers, i) || this.setMarkers(e, i);
  }
  setMarkers(e, r) {
    let n = "cm-gutterElement";
    let i = this.dom.firstChild;
    for (function () {
      let s = 0;
      let o = 0;
    }();;) {
      let a = o;
      let h = s < r.length ? r[s++] : null;
      let d = !1;
      if (h) {
        let e = h.elementClass;
        e && (n += " " + e);
        for (let e = o; e < this.markers.length; e++) if (this.markers[e].compare(h)) {
          a = e;
          d = !0;
          break;
        }
      } else a = this.markers.length;
      for (; o < a;) {
        let e = this.markers[o++];
        if (e.toDOM) {
          e.destroy(i);
          let r = i.nextSibling;
          i.remove();
          i = r;
        }
      }
      if (!h) break;
      h.toDOM && (d ? i = i.nextSibling : this.dom.insertBefore(h.toDOM(e), i));
      d && o++;
    }
    this.dom.className = n;
    this.markers = r;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function sf(e, r) {
  if (e.length != r.length) return !1;
  for (let n = 0; n < e.length; n++) if (!e[n].compare(r[n])) return !1;
  return !0;
}
let sp = s.sj.define();
let sg = s.sj.define();
let sm = s.sj.define({
  combine: e => s.QR(e, {
    formatNumber: String,
    domEventHandlers: {}
  }, {
    domEventHandlers(e, r) {
      let n = Object.assign({}, e);
      for (let e in r) {
        let i = n[e];
        let s = r[e];
        n[e] = i ? (e, r, n) => i(e, r, n) || s(e, r, n) : s;
      }
      return n;
    }
  })
});
class sv extends $$i93 {
  constructor(e) {
    super();
    this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function sy(e, r) {
  return e.state.facet(sm).formatNumber(r, e.state);
}
let sb = sn.compute([sm], e => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers: e => e.state.facet(sp),
  lineMarker: (e, r, n) => n.some(e => e.toDOM) ? null : new sv(sy(e, e.state.doc.lineAt(r.from).number)),
  widgetMarker: (e, r, n) => {
    for (let i of e.state.facet(sg)) {
      let s = i(e, r, n);
      if (s) return s;
    }
    return null;
  },
  lineMarkerChange: e => e.startState.facet(sm) != e.state.facet(sm),
  initialSpacer: e => new sv(sy(e, sx(e.state.doc.lines))),
  updateSpacer(e, r) {
    let n = sy(r.view, sx(r.view.state.doc.lines));
    return n == e.number ? e : new sv(n);
  },
  domEventHandlers: e.facet(sm).domEventHandlers
}));
export function $$sO18(e = {}) {
  return [sm.of(e), so(), sb];
}
function sx(e) {
  let r = 9;
  for (; r < e;) r = 10 * r + 9;
  return r;
}
let sw = new class extends $$i93 {
  constructor() {
    super(...arguments);
    this.elementClass = "cm-activeLineGutter";
  }
}();
let sk = se.compute(["selection"], e => {
  let r = [];
  let n = -1;
  for (let i of e.selection.ranges) {
    let s = e.doc.lineAt(i.head).from;
    s > n && (n = s, r.push(sw.range(s)));
  }
  return s.om.of(r);
});
export function $$s_14() {
  return sk;
}
export const NZ = $$eS0;
export const OP = $$ej1;
export const Lz = $$nT2;
export const wJ = $$i93;
export const dT = $$ia4;
export const Z9 = $$tm5;
export const xO = $$ek6;
export const HJ = $$iN7;
export const VH = $$n58;
export const A = $$ii9;
export const ld = $$i310;
export const Eg = $$i111;
export const cU = $$si12;
export const dz = $$iw13;
export const Wu = $$s_14;
export const N$ = $$ig15;
export const Ux = $$i016;
export const w4 = $$nj17;
export const $K = $$sO18;
export const c_ = $$td19;
export const qf = $$iE20;
export const D4 = $$iR21;
export const TS = $$nF22;
export const S7 = $$i723;
export const DK = $$iq24;
export const vX = $$ij25;