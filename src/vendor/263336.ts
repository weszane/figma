import { A as _$$A } from "../vendor/666498";
import n, { ParentBlot, LeafBlot, Scope, EmbedBlot, Registry, ScrollBlot } from "../vendor/73046";
import s, { Op, AttributeMap } from "../vendor/308080";
import { A as _$$A2 } from "../vendor/503807";
import { A as _$$A3 } from "../vendor/783177";
import { zo, Ji, Ay as _$$Ay } from "../vendor/224828";
import { A as _$$A4 } from "../vendor/39298";
import { A as _$$A5 } from "../vendor/658255";
import { A as _$$A6, X } from "../vendor/909290";
import { Q, A as _$$A7 } from "../vendor/60116";
import { A as _$$A8 } from "../vendor/505982";
import { A as _$$A9 } from "../vendor/241794";
import { A as _$$A0 } from "../vendor/53968";
import { A as _$$A1 } from "../vendor/648916";
import { A as _$$A10 } from "../vendor/596260";
import { A as _$$A11 } from "../vendor/731507";
let f = /^[ -~]*$/;
function p(t, e, r) {
  let i = $$arguments.length > 3 && void 0 !== $$arguments[3] && $$arguments[3];
  if ("html" in t && "function" == typeof t.html) return t.html(e, r);
  if (t instanceof _$$A6) return X(t.value().slice(e, e + r));
  if (t instanceof ParentBlot) {
    if ("list-container" === t.statics.blotName) {
      let i = [];
      t.children.forEachAt(e, r, (t, e, r) => {
        let n = "formats" in t && "function" == typeof t.formats ? t.formats() : {};
        i.push({
          child: t,
          offset: e,
          length: r,
          indent: n.indent || 0,
          type: n.list
        });
      });
      return function t(e, r, i) {
        if (0 === e.length) {
          let [e] = g(i.pop());
          return r <= 0 ? `</li></${e}>` : `</li></${e}>${t([], r - 1, i)}`;
        }
        let [{
          child: n,
          offset: s,
          length: l,
          indent: o,
          type: a
        }, ...c] = e;
        let [u, h] = g(a);
        if (o > r) return (i.push(a), o === r + 1) ? `<${u}><li${h}>${p(n, s, l)}${t(c, o, i)}` : `<${u}><li>${t(e, r + 1, i)}`;
        let d = i[i.length - 1];
        if (o === r && a === d) return `</li><li${h}>${p(n, s, l)}${t(c, o, i)}`;
        let [f] = g(i.pop());
        return `</li></${f}>${t(e, r - 1, i)}`;
      }(i, -1, []);
    }
    let n = [];
    if (t.children.forEachAt(e, r, (t, e, r) => {
      n.push(p(t, e, r));
    }), i || "list" === t.statics.blotName) return n.join("");
    let {
      outerHTML,
      innerHTML
    } = t.domNode;
    let [o, a] = outerHTML.split(`>${innerHTML}<`);
    return "<table" === o ? `<table style="border: 1px solid #000;">${n.join("")}<${a}` : `${o}>${n.join("")}<${a}`;
  }
  return t.domNode instanceof Element ? t.domNode.outerHTML : "";
}
function g(t) {
  let e = "ordered" === t ? "ol" : "ul";
  switch (t) {
    case "checked":
      return [e, ' data-list="checked"'];
    case "unchecked":
      return [e, ' data-list="unchecked"'];
    default:
      return [e, ""];
  }
}
function m(t) {
  return t.reduce((t, e) => {
    if ("string" == typeof e.insert) {
      let r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return t.insert(r, e.attributes);
    }
    return t.push(e);
  }, new s());
}
function b(t, e) {
  let {
    index,
    length
  } = t;
  return new Q(index + e, length);
}
let y = class {
  constructor(t) {
    this.scroll = t;
    this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    let r = m(t);
    let l = new s();
    (function (t) {
      let e = [];
      t.forEach(t => {
        "string" == typeof t.insert ? t.insert.split("\n").forEach((r, i) => {
          i && e.push({
            insert: "\n",
            attributes: t.attributes
          });
          r && e.push({
            insert: r,
            attributes: t.attributes
          });
        }) : e.push(t);
      });
      return e;
    })(r.ops.slice()).reduce((t, r) => {
      let o = Op.length(r);
      let c = r.attributes || {};
      let u = !1;
      let d = !1;
      if (null != r.insert) {
        if (l.retain(o), "string" == typeof r.insert) {
          let l = r.insert;
          d = !l.endsWith("\n") && (e <= t || !!this.scroll.descendant(zo, t)[0]);
          this.scroll.insertAt(t, l);
          let [o, u] = this.scroll.line(t);
          let h = _$$A({}, Ji(o));
          if (o instanceof _$$Ay) {
            let [t] = o.descendant(LeafBlot, u);
            t && (h = _$$A(h, Ji(t)));
          }
          c = AttributeMap.diff(h, c) || {};
        } else if ("object" == typeof r.insert) {
          let l = Object.keys(r.insert)[0];
          if (null == l) return t;
          let o = null != this.scroll.query(l, Scope.INLINE);
          if (o) (e <= t || this.scroll.descendant(zo, t)[0]) && (d = !0);else if (t > 0) {
            let [e, r] = this.scroll.descendant(LeafBlot, t - 1);
            e instanceof _$$A6 ? "\n" !== e.value()[r] && (u = !0) : e instanceof EmbedBlot && e.statics.scope === Scope.INLINE_BLOT && (u = !0);
          }
          if (this.scroll.insertAt(t, l, r.insert[l]), o) {
            let [e] = this.scroll.descendant(LeafBlot, t);
            if (e) {
              let t = _$$A({}, Ji(e));
              c = AttributeMap.diff(t, c) || {};
            }
          }
        }
        e += o;
      } else if (l.push(r), null !== r.retain && "object" == typeof r.retain) {
        let e = Object.keys(r.retain)[0];
        if (null == e) return t;
        this.scroll.updateEmbedAt(t, e, r.retain[e]);
      }
      Object.keys(c).forEach(e => {
        this.scroll.formatAt(t, o, e, c[e]);
      });
      let f = u ? 1 : 0;
      let p = d ? 1 : 0;
      e += f + p;
      l.retain(f);
      l.$$delete(p);
      return t + o + f + p;
    }, 0);
    l.reduce((t, e) => "number" == typeof e.$$delete ? (this.scroll.deleteAt(t, e.$$delete), t) : t + Op.length(e), 0);
    this.scroll.batchEnd();
    this.scroll.optimize();
    return this.update(r);
  }
  deleteText(t, e) {
    this.scroll.deleteAt(t, e);
    return this.update(new s().retain(t).$$delete(e));
  }
  formatLine(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    this.scroll.update();
    Object.keys(r).forEach(i => {
      this.scroll.lines(t, Math.max(e, 1)).forEach(t => {
        t.format(i, r[i]);
      });
    });
    this.scroll.optimize();
    let i = new s().retain(t).retain(e, _$$A2(r));
    return this.update(i);
  }
  formatText(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    Object.keys(r).forEach(i => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    let i = new s().retain(t).retain(e, _$$A2(r));
    return this.update(i);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new s());
  }
  getFormat(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
    let r = [];
    let i = [];
    0 === e ? this.scroll.path(t).forEach(t => {
      let [e] = t;
      e instanceof _$$Ay ? r.push(e) : e instanceof LeafBlot && i.push(e);
    }) : (r = this.scroll.lines(t, e), i = this.scroll.descendants(LeafBlot, t, e));
    let [s, l] = [r, i].map(t => {
      let e = t.shift();
      if (null == e) return {};
      let r = Ji(e);
      for (; Object.keys(r).length > 0;) {
        let e = t.shift();
        if (null == e) break;
        r = function (t, e) {
          return Object.keys(e).reduce((r, i) => {
            if (null == t[i]) return r;
            let n = e[i];
            n === t[i] ? r[i] = n : Array.isArray(n) ? 0 > n.indexOf(t[i]) ? r[i] = n.concat([t[i]]) : r[i] = n : r[i] = [n, t[i]];
            return r;
          }, {});
        }(Ji(e), r);
      }
      return r;
    });
    return {
      ...s,
      ...l
    };
  }
  getHTML(t, e) {
    let [r, i] = this.scroll.line(t);
    if (r) {
      let n = r.length();
      return r.length() >= i + e && !(0 === i && e === n) ? p(r, i, e, !0) : p(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter(t => "string" == typeof t.insert).map(t => t.insert).join("");
  }
  insertContents(t, e) {
    let r = m(e);
    let i = new s().retain(t).concat(r);
    this.scroll.insertContents(t, r);
    return this.update(i);
  }
  insertEmbed(t, e, r) {
    this.scroll.insertAt(t, e, r);
    return this.update(new s().retain(t).insert({
      [e]: r
    }));
  }
  insertText(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    this.scroll.insertAt(t, e);
    Object.keys(r).forEach(i => {
      this.scroll.formatAt(t, e.length, i, r[i]);
    });
    return this.update(new s().retain(t).insert(e, _$$A2(r)));
  }
  isBlank() {
    if (0 === this.scroll.children.length) return !0;
    if (this.scroll.children.length > 1) return !1;
    let t = this.scroll.children.head;
    return t?.statics.blotName === _$$Ay.blotName && !(t.children.length > 1) && t.children.head instanceof _$$A4;
  }
  removeFormat(t, e) {
    let r = this.getText(t, e);
    let [i, n] = this.scroll.line(t + e);
    let l = 0;
    let o = new s();
    null != i && (l = i.length() - n, o = i.delta().slice(n, n + l - 1).insert("\n"));
    let a = this.getContents(t, e + l).diff(new s().insert(r).concat(o));
    let c = new s().retain(t).concat(a);
    return this.applyDelta(c);
  }
  update(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : [];
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : void 0;
    let i = this.delta;
    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(f) && this.scroll.find(e[0].target)) {
      let n = this.scroll.find(e[0].target);
      let l = Ji(n);
      let o = n.offset(this.scroll);
      let c = e[0].oldValue.replace(_$$A5.CONTENTS, "");
      let h = new s().insert(c);
      let d = new s().insert(n.value());
      let f = r && {
        oldRange: b(r.oldRange, -o),
        newRange: b(r.newRange, -o)
      };
      t = new s().retain(o).concat(h.diff(d, f)).reduce((t, e) => e.insert ? t.insert(e.insert, l) : t.push(e), new s());
      this.delta = i.compose(t);
    } else {
      this.delta = this.getDelta();
      t && _$$A3(i.compose(t), this.delta) || (t = i.diff(this.delta, r));
    }
    return t;
  }
};
let w = class {
  isComposing = !1;
  constructor(t, e) {
    this.scroll = t;
    this.emitter = e;
    this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", t => {
      this.isComposing || this.handleCompositionStart(t);
    });
    this.scroll.domNode.addEventListener("compositionend", t => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    let e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    !e || e instanceof _$$A10 || (this.emitter.emit(_$$A8.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(_$$A8.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(_$$A8.events.COMPOSITION_BEFORE_END, t);
    this.scroll.batchEnd();
    this.emitter.emit(_$$A8.events.COMPOSITION_END, t);
    this.isComposing = !1;
  }
};
let q = t => t.parentElement || t.getRootNode().host || null;
let _ = t => {
  let e = t.getBoundingClientRect();
  let r = "offsetWidth" in t && Math.abs(e.width) / t.offsetWidth || 1;
  let i = "offsetHeight" in t && Math.abs(e.height) / t.offsetHeight || 1;
  return {
    top: e.top,
    right: e.left + t.clientWidth * r,
    bottom: e.top + t.clientHeight * i,
    left: e.left
  };
};
let L = t => {
  let e = parseInt(t, 10);
  return Number.isNaN(e) ? 0 : e;
};
let O = (t, e, r, i, n, s) => t < r && e > i ? 0 : t < r ? -(r - t + n) : e > i ? e - t > i - r ? t + n - r : e - i + s : 0;
let S = (t, e) => {
  let r = t.ownerDocument;
  let i = e;
  let n = t;
  for (; n;) {
    let t = n === r.body;
    let e = t ? {
      top: 0,
      right: window.visualViewport?.width ?? r.documentElement.clientWidth,
      bottom: window.visualViewport?.height ?? r.documentElement.clientHeight,
      left: 0
    } : _(n);
    let s = getComputedStyle(n);
    let l = O(i.left, i.right, e.left, e.right, L(s.scrollPaddingLeft), L(s.scrollPaddingRight));
    let o = O(i.top, i.bottom, e.top, e.bottom, L(s.scrollPaddingTop), L(s.scrollPaddingBottom));
    if (l || o) {
      if (t) r.defaultView?.scrollBy(l, o);else {
        let {
          scrollLeft,
          scrollTop
        } = n;
        o && (n.scrollTop += o);
        l && (n.scrollLeft += l);
        let r = n.scrollLeft - scrollLeft;
        let s = n.scrollTop - scrollTop;
        i = {
          left: i.left - r,
          top: i.top - s,
          right: i.right - r,
          bottom: i.bottom - s
        };
      }
    }
    n = t || "fixed" === s.position ? null : q(n);
  }
};
let T = ["block", "break", "cursor", "inline", "scroll", "text"];
let j = (t, e, r) => {
  let i = new Registry();
  T.forEach(t => {
    let r = e.query(t);
    r && i.register(r);
  });
  t.forEach(t => {
    let n = e.query(t);
    n || r.error(`Cannot register "${t}" specified in "formats" config. Are you sure it was registered?`);
    let s = 0;
    for (; n;) if (i.register(n), n = "blotName" in n ? n.requiredContainer ?? null : null, (s += 1) > 100) {
      r.error(`Cycle detected in registering blot requiredContainer: "${t}"`);
      break;
    }
  });
  return i;
};
let C = _$$A0("quill");
let R = new Registry();
ParentBlot.uiClass = "ql-ui";
export class $$I0 {
  static DEFAULTS = {
    bounds: null,
    modules: {
      clipboard: !0,
      keyboard: !0,
      history: !0,
      uploader: !0
    },
    placeholder: "",
    readOnly: !1,
    registry: R,
    theme: "default"
  };
  static events = _$$A8.events;
  static sources = _$$A8.sources;
  static version = "2.0.2";
  static imports = {
    delta: s,
    parchment: n,
    "core/module": _$$A1,
    "core/theme": _$$A11
  };
  static debug(t) {
    !0 === t && (t = "log");
    _$$A0.level(t);
  }
  static find(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] && $$arguments[1];
    return _$$A9.get(t) || R.find(t, e);
  }
  static import(t) {
    null == this.imports[t] && C.error(`Cannot import ${t}. Are you sure it was registered?`);
    return this.imports[t];
  }
  static register() {
    if ("string" != typeof ($$arguments.length <= 0 ? void 0 : $$arguments[0])) {
      let t = $$arguments.length <= 0 ? void 0 : $$arguments[0];
      let e = !!($$arguments.length <= 1 ? void 0 : $$arguments[1]);
      let r = "attrName" in t ? t.attrName : t.blotName;
      "string" == typeof r ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach(r => {
        this.register(r, t[r], e);
      });
    } else {
      let t = $$arguments.length <= 0 ? void 0 : $$arguments[0];
      let e = $$arguments.length <= 1 ? void 0 : $$arguments[1];
      let r = !!($$arguments.length <= 2 ? void 0 : $$arguments[2]);
      null == this.imports[t] || r || C.warn(`Overwriting ${t} with`, e);
      this.imports[t] = e;
      (t.startsWith("blots/") || t.startsWith("formats/")) && e && "boolean" != typeof e && "abstract" !== e.blotName && R.register(e);
      "function" == typeof e.register && e.register(R);
    }
  }
  constructor(t) {
    this.scroll = new o(this.options.registry, this.root, {
      emitter: this.emitter
    });
    this.editor = new y(this.scroll);
    this.selection = new _$$A7(this.scroll, this.emitter);
    this.composition = new w(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule("keyboard");
    this.clipboard = this.theme.addModule("clipboard");
    this.history = this.theme.addModule("history");
    this.uploader = this.theme.addModule("uploader");
    this.options = function (t, e) {
      let r = B(t);
      if (!r) throw Error("Invalid Quill container");
      let n = e.theme && e.theme !== $$I0.DEFAULTS.theme ? $$I0.$$import(`themes/${e.theme}`) : _$$A11;
      if (!n) throw Error(`Invalid theme ${e.theme}. Did you register it?`);
      let {
        modules,
        ...l
      } = $$I0.DEFAULTS;
      let {
        modules: _modules,
        ...a
      } = n.DEFAULTS;
      let c = M(e.modules);
      null != c && c.toolbar && c.toolbar.constructor !== Object && (c = {
        ...c,
        toolbar: {
          container: c.toolbar
        }
      });
      let u = _$$A({}, M(modules), M(_modules), c);
      let h = {
        ...l,
        ...D(a),
        ...D(e)
      };
      let d = e.registry;
      d ? e.formats && C.warn('Ignoring "formats" option because "registry" is specified') : d = e.formats ? j(e.formats, h.registry, C) : h.registry;
      return {
        ...h,
        registry: d,
        container: r,
        theme: n,
        modules: Object.entries(u).reduce((t, e) => {
          let [r, n] = e;
          if (!n) return t;
          let s = $$I0.$$import(`modules/${r}`);
          return null == s ? (C.error(`Cannot load ${r} module. Are you sure you registered it?`), t) : {
            ...t,
            [r]: _$$A({}, s.DEFAULTS || {}, n)
          };
        }, {}),
        bounds: B(h.bounds)
      };
    }(t, e);
    this.container = this.options.container;
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
    if (null == this.container) {
      C.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && $$I0.debug(this.options.debug);
    let r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container");
    this.container.innerHTML = "";
    _$$A9.set(this.container, this);
    this.root = this.addContainer("ql-editor");
    this.root.classList.add("ql-blank");
    this.emitter = new _$$A8();
    let l = ScrollBlot.blotName;
    let o = this.options.registry.query(l);
    if (!o || !("blotName" in o)) throw Error(`Cannot initialize Quill without "${l}" blot`);
    if (this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(_$$A8.events.EDITOR_CHANGE, t => {
      t === _$$A8.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(_$$A8.events.SCROLL_UPDATE, (t, e) => {
      let r = this.selection.lastRange;
      let [i] = this.selection.getRange();
      let n = r && i ? {
        oldRange: r,
        newRange: i
      } : void 0;
      U.call(this, () => this.editor.update(null, e, n), t);
    }), this.emitter.on(_$$A8.events.SCROLL_EMBED_UPDATE, (t, e) => {
      let r = this.selection.lastRange;
      let [i] = this.selection.getRange();
      let n = r && i ? {
        oldRange: r,
        newRange: i
      } : void 0;
      U.call(this, () => {
        let r = new s().retain(t.offset(this)).retain({
          [t.statics.blotName]: e
        });
        return this.editor.update(r, [], n);
      }, $$I0.sources.USER);
    }), r) {
      let t = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: "\n"
      });
      this.setContents(t);
    }
    this.history.clear();
    this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder);
    this.options.readOnly && this.disable();
    this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : null;
    if ("string" == typeof t) {
      let e = t;
      (t = document.createElement("div")).classList.add(e);
    }
    this.container.insertBefore(t, e);
    return t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, r) {
    [t, e,, r] = P(t, e, r);
    return U.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    let e = t();
    this.allowReadOnlyEdits = !1;
    return e;
  }
  enable() {
    let t = !($$arguments.length > 0) || void 0 === $$arguments[0] || $$arguments[0];
    this.scroll.enable(t);
    this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : {};
    this.selection.focus();
    t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : _$$A8.sources.API;
    return U.call(this, () => {
      let r = this.getSelection(!0);
      let i = new s();
      if (null == r) return i;
      if (this.scroll.query(t, Scope.BLOCK)) i = this.editor.formatLine(r.index, r.length, {
        [t]: e
      });else {
        if (0 === r.length) {
          this.selection.format(t, e);
          return i;
        }
        i = this.editor.formatText(r.index, r.length, {
          [t]: e
        });
      }
      this.setSelection(r, _$$A8.sources.SILENT);
      return i;
    }, r);
  }
  formatLine(t, e, r, i, n) {
    let s;
    [t, e, s, n] = P(t, e, r, i, n);
    return U.call(this, () => this.editor.formatLine(t, e, s), n, t, 0);
  }
  formatText(t, e, r, i, n) {
    let s;
    [t, e, s, n] = P(t, e, r, i, n);
    return U.call(this, () => this.editor.formatText(t, e, s), n, t, 0);
  }
  getBounds(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
    let r = null;
    if (!(r = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length))) return null;
    let i = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - i.top,
      height: r.height,
      left: r.left - i.left,
      right: r.right - i.left,
      top: r.top - i.top,
      width: r.width
    };
  }
  getContents() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : 0;
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : this.getLength() - t;
    [t, e] = P(t, e);
    return this.editor.getContents(t, e);
  }
  getFormat() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : this.getSelection(!0);
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
    return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : 0;
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : Number.MAX_VALUE;
    return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] && $$arguments[0];
    t && this.focus();
    this.update();
    return this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : 0;
    let e = $$arguments.length > 1 ? $$arguments[1] : void 0;
    "number" == typeof t && (e = e ?? this.getLength() - t);
    [t, e] = P(t, e);
    return this.editor.getHTML(t, e);
  }
  getText() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : 0;
    let e = $$arguments.length > 1 ? $$arguments[1] : void 0;
    "number" == typeof t && (e = e ?? this.getLength() - t);
    [t, e] = P(t, e);
    return this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let i = $$arguments.length > 3 && void 0 !== $$arguments[3] ? $$arguments[3] : $$I0.sources.API;
    return U.call(this, () => this.editor.insertEmbed(t, e, r), i, t);
  }
  insertText(t, e, r, i, n) {
    let s;
    [t,, s, n] = P(t, 0, r, i, n);
    return U.call(this, () => this.editor.insertText(t, e, s), n, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, r) {
    [t, e,, r] = P(t, e, r);
    return U.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    S(this.root, t);
  }
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.");
    this.scrollSelectionIntoView();
  }
  scrollSelectionIntoView() {
    let t = this.selection.lastRange;
    let e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : _$$A8.sources.API;
    return U.call(this, () => {
      t = new s(t);
      let e = this.getLength();
      let r = this.editor.deleteText(0, e);
      let i = this.editor.insertContents(0, t);
      let n = this.editor.deleteText(this.getLength() - 1, 1);
      return r.compose(i).compose(n);
    }, e);
  }
  setSelection(t, e, r) {
    null == t ? this.selection.setRange(null, e || $$I0.sources.API) : ([t, e,, r] = P(t, e, r), this.selection.setRange(new Q(Math.max(0, t), e), r), r !== _$$A8.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : _$$A8.sources.API;
    let r = new s().insert(t);
    return this.setContents(r, e);
  }
  update() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : _$$A8.sources.USER;
    let e = this.scroll.update(t);
    this.selection.update(t);
    return e;
  }
  updateContents(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : _$$A8.sources.API;
    return U.call(this, () => (t = new s(t), this.editor.applyDelta(t)), e, !0);
  }
}
function B(t) {
  return "string" == typeof t ? document.querySelector(t) : t;
}
function M(t) {
  return Object.entries(t ?? {}).reduce((t, e) => {
    let [r, i] = e;
    return {
      ...t,
      [r]: !0 === i ? {} : i
    };
  }, {});
}
function D(t) {
  return Object.fromEntries(Object.entries(t).filter(t => void 0 !== t[1]));
}
function U(t, e, r, i) {
  if (!this.isEnabled() && e === _$$A8.sources.USER && !this.allowReadOnlyEdits) return new s();
  let n = null == r ? null : this.getSelection();
  let l = this.editor.delta;
  let o = t();
  if (null != n && (!0 === r && (r = n.index), null == i ? n = z(n, o, e) : 0 !== i && (n = z(n, r, i, e)), this.setSelection(n, _$$A8.sources.SILENT)), o.length() > 0) {
    let t = [_$$A8.events.TEXT_CHANGE, o, l, e];
    this.emitter.emit(_$$A8.events.EDITOR_CHANGE, ...t);
    e !== _$$A8.sources.SILENT && this.emitter.emit(...t);
  }
  return o;
}
function P(t, e, r, i, n) {
  let s = {};
  "number" == typeof t.index && "number" == typeof t.length ? ("number" != typeof e && (n = i, i = r, r = e), e = t.length, t = t.index) : "number" != typeof e && (n = i, i = r, r = e, e = 0);
  "object" == typeof r ? (s = r, n = i) : "string" == typeof r && (null != i ? s[r] = i : n = r);
  return [t, e, s, n = n || _$$A8.sources.API];
}
function z(t, e, r, i) {
  let n;
  let s;
  let l = "number" == typeof r ? r : 0;
  return null == t ? null : (e && "function" == typeof e.transformPosition ? [n, s] = [t.index, t.index + t.length].map(t => e.transformPosition(t, i !== _$$A8.sources.USER)) : [n, s] = [t.index, t.index + t.length].map(t => t < e || t === e && i === _$$A8.sources.USER ? t : l >= 0 ? t + l : Math.max(e, t + l)), new Q(n, s - n));
}
export const Ay = $$I0;