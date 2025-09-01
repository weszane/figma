import { A } from "../vendor/783177";
import { A as _$$A } from "../vendor/503807";
import s, { AttributeMap } from "../vendor/308080";
import { TextBlot, Scope, EmbedBlot } from "../vendor/73046";
import { Ay as _$$Ay } from "../vendor/263336";
import { A as _$$A2 } from "../vendor/53968";
import { A as _$$A3 } from "../vendor/648916";
let u = _$$A2("quill:keyboard");
let h = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
export class $$d0 extends _$$A3 {
  static match(t, e) {
    return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(r => !!e[r] !== t[r] && null !== e[r]) && (e.key === t.key || e.key === t.which);
  }
  constructor(t, e) {
    super(t, e);
    this.bindings = {};
    Object.keys(this.options.bindings).forEach(t => {
      this.options.bindings[t] && this.addBinding(this.options.bindings[t]);
    });
    this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter);
    this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {});
    /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete));
    this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange);
    this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange);
    this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace);
    this.listen();
  }
  addBinding(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    let i = function (t) {
      if ("string" == typeof t || "number" == typeof t) t = {
        key: t
      };else {
        if ("object" != typeof t) return null;
        t = _$$A(t);
      }
      t.shortKey && (t[h] = t.shortKey, delete t.shortKey);
      return t;
    }(t);
    if (null == i) {
      u.warn("Attempted to add invalid keyboard binding", i);
      return;
    }
    "function" == typeof e && (e = {
      handler: e
    });
    "function" == typeof r && (r = {
      handler: r
    });
    (Array.isArray(i.key) ? i.key : [i.key]).forEach(t => {
      let n = {
        ...i,
        key: t,
        ...e,
        ...r
      };
      this.bindings[n.key] = this.bindings[n.key] || [];
      this.bindings[n.key].push(n);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", t => {
      if (t.defaultPrevented || t.isComposing || 229 === t.keyCode && ("Enter" === t.key || "Backspace" === t.key)) return;
      let e = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter(e => $$d0.match(t, e));
      if (0 === e.length) return;
      let r = _$$Ay.find(t.target, !0);
      if (r && r.scroll !== this.quill.scroll) return;
      let n = this.quill.getSelection();
      if (null == n || !this.quill.hasFocus()) return;
      let [s, a] = this.quill.getLine(n.index);
      let [c, u] = this.quill.getLeaf(n.index);
      let [h, f] = 0 === n.length ? [c, u] : this.quill.getLeaf(n.index + n.length);
      let p = c instanceof TextBlot ? c.value().slice(0, u) : "";
      let g = h instanceof TextBlot ? h.value().slice(f) : "";
      let m = {
        collapsed: 0 === n.length,
        empty: 0 === n.length && 1 >= s.length(),
        format: this.quill.getFormat(n),
        line: s,
        offset: a,
        prefix: p,
        suffix: g,
        event: t
      };
      e.some(t => {
        if (null != t.collapsed && t.collapsed !== m.collapsed || null != t.empty && t.empty !== m.empty || null != t.offset && t.offset !== m.offset) return !1;
        if (Array.isArray(t.format)) {
          if (t.format.every(t => null == m.format[t])) return !1;
        } else if ("object" == typeof t.format && !Object.keys(t.format).every(e => !0 === t.format[e] ? null != m.format[e] : !1 === t.format[e] ? null == m.format[e] : A(t.format[e], m.format[e]))) return !1;
        return !!((null == t.prefix || t.prefix.test(m.prefix)) && (null == t.suffix || t.suffix.test(m.suffix))) && !0 !== t.handler.call(this, n, m, t);
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    let r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (0 === t.index || 1 >= this.quill.getLength()) return;
    let i = {};
    let [n] = this.quill.getLine(t.index);
    let l = new s().retain(t.index - r).$$delete(r);
    if (0 === e.offset) {
      let [e] = this.quill.getLine(t.index - 1);
      if (e && !("block" === e.statics.blotName && 1 >= e.length())) {
        let e = n.formats();
        let r = this.quill.getFormat(t.index - 1, 1);
        if (Object.keys(i = AttributeMap.diff(e, r) || {}).length > 0) {
          let e = new s().retain(t.index + n.length() - 2).retain(1, i);
          l = l.compose(e);
        }
      }
    }
    this.quill.updateContents(l, _$$Ay.sources.USER);
    this.quill.focus();
  }
  handleDelete(t, e) {
    let r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - r) return;
    let i = {};
    let [n] = this.quill.getLine(t.index);
    let l = new s().retain(t.index).$$delete(r);
    if (e.offset >= n.length() - 1) {
      let [e] = this.quill.getLine(t.index + 1);
      if (e) {
        let r = n.formats();
        let o = this.quill.getFormat(t.index, 1);
        Object.keys(i = AttributeMap.diff(r, o) || {}).length > 0 && (l = l.retain(e.length() - 1).retain(1, i));
      }
    }
    this.quill.updateContents(l, _$$Ay.sources.USER);
    this.quill.focus();
  }
  handleDeleteRange(t) {
    $$y1({
      range: t,
      quill: this.quill
    });
    this.quill.focus();
  }
  handleEnter(t, e) {
    let r = Object.keys(e.format).reduce((t, r) => (this.quill.scroll.query(r, Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]), t), {});
    let i = new s().retain(t.index).$$delete(t.length).insert("\n", r);
    this.quill.updateContents(i, _$$Ay.sources.USER);
    this.quill.setSelection(t.index + 1, _$$Ay.sources.SILENT);
    this.quill.focus();
  }
}
let f = {
  bindings: {
    bold: m("bold"),
    italic: m("italic"),
    underline: m("underline"),
    indent: {
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(t, e) {
        return !!e.collapsed && 0 !== e.offset || (this.quill.format("indent", "+1", _$$Ay.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      handler(t, e) {
        return !!e.collapsed && 0 !== e.offset || (this.quill.format("indent", "-1", _$$Ay.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(t, e) {
        null != e.format.indent ? this.quill.format("indent", "-1", _$$Ay.sources.USER) : null != e.format.list && this.quill.format("list", !1, _$$Ay.sources.USER);
      }
    },
    "indent code-block": p(!0),
    "outdent code-block": p(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(t) {
        this.quill.deleteText(t.index - 1, 1, _$$Ay.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(t, e) {
        if (e.format.table) return !0;
        this.quill.history.cutoff();
        let r = new s().retain(t.index).$$delete(t.length).insert("	");
        this.quill.updateContents(r, _$$Ay.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(t.index + 1, _$$Ay.sources.SILENT);
        return !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, _$$Ay.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(t, e) {
        let r = {
          list: !1
        };
        e.format.indent && (r.indent = !1);
        this.quill.formatLine(t.index, t.length, r, _$$Ay.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(t) {
        let [e, r] = this.quill.getLine(t.index);
        let i = {
          ...e.formats(),
          list: "checked"
        };
        let n = new s().retain(t.index).insert("\n", i).retain(e.length() - r - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(n, _$$Ay.sources.USER);
        this.quill.setSelection(t.index + 1, _$$Ay.sources.SILENT);
        this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(t, e) {
        let [r, i] = this.quill.getLine(t.index);
        let n = new s().retain(t.index).insert("\n", e.format).retain(r.length() - i - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(n, _$$Ay.sources.USER);
        this.quill.setSelection(t.index + 1, _$$Ay.sources.SILENT);
        this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {}
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {}
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(t) {
        let e = this.quill.getModule("table");
        if (e) {
          let [r, i, n, l] = e.getTable(t);
          let a = null == i.prev && null == i.next ? null == n.prev && null == n.next ? 0 === l ? -1 : 1 : null == n.prev ? -1 : 1 : null == i.prev ? -1 : null == i.next ? 1 : null;
          if (null == a) return;
          let c = r.offset();
          if (a < 0) {
            let e = new s().retain(c).insert("\n");
            this.quill.updateContents(e, _$$Ay.sources.USER);
            this.quill.setSelection(t.index + 1, t.length, _$$Ay.sources.SILENT);
          } else if (a > 0) {
            c += r.length();
            let t = new s().retain(c).insert("\n");
            this.quill.updateContents(t, _$$Ay.sources.USER);
            this.quill.setSelection(c, _$$Ay.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(t, e) {
        let {
          event,
          line
        } = e;
        let n = line.offset(this.quill.scroll);
        event.shiftKey ? this.quill.setSelection(n - 1, _$$Ay.sources.USER) : this.quill.setSelection(n + line.length(), _$$Ay.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(t, e) {
        let r;
        if (null == this.quill.scroll.query("list")) return !0;
        let {
          length
        } = e.prefix;
        let [n, l] = this.quill.getLine(t.index);
        if (l > length) return !0;
        switch (e.prefix.trim()) {
          case "[]":
          case "[ ]":
            r = "unchecked";
            break;
          case "[x]":
            r = "checked";
            break;
          case "-":
          case "*":
            r = "bullet";
            break;
          default:
            r = "ordered";
        }
        this.quill.insertText(t.index, " ", _$$Ay.sources.USER);
        this.quill.history.cutoff();
        let a = new s().retain(t.index - l).$$delete(length + 1).retain(n.length() - 2 - l).retain(1, {
          list: r
        });
        this.quill.updateContents(a, _$$Ay.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(t.index - length, _$$Ay.sources.SILENT);
        return !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(t) {
        let [e, r] = this.quill.getLine(t.index);
        let i = 2;
        let n = e;
        for (; null != n && 1 >= n.length() && n.formats()["code-block"];) if (n = n.prev, (i -= 1) <= 0) {
          let i = new s().retain(t.index + e.length() - r - 2).retain(1, {
            "code-block": null
          }).$$delete(1);
          this.quill.updateContents(i, _$$Ay.sources.USER);
          this.quill.setSelection(t.index - 1, _$$Ay.sources.SILENT);
          return !1;
        }
        return !0;
      }
    },
    "embed left": g("ArrowLeft", !1),
    "embed left shift": g("ArrowLeft", !0),
    "embed right": g("ArrowRight", !1),
    "embed right shift": g("ArrowRight", !0),
    "table down": b(!1),
    "table up": b(!0)
  }
};
function p(t) {
  return {
    key: "Tab",
    shiftKey: !t,
    format: {
      "code-block": !0
    },
    handler(e, r) {
      let {
        event
      } = r;
      let {
        TAB
      } = this.quill.scroll.query("code-block");
      if (0 === e.length && !event.shiftKey) {
        this.quill.insertText(e.index, TAB, _$$Ay.sources.USER);
        this.quill.setSelection(e.index + TAB.length, _$$Ay.sources.SILENT);
        return;
      }
      let s = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
      let {
        index,
        length
      } = e;
      s.forEach((e, r) => {
        t ? (e.insertAt(0, TAB), 0 === r ? l += TAB.length : a += TAB.length) : e.domNode.textContent.startsWith(TAB) && (e.deleteAt(0, TAB.length), 0 === r ? l -= TAB.length : a -= TAB.length);
      });
      this.quill.update(_$$Ay.sources.USER);
      this.quill.setSelection(index, length, _$$Ay.sources.SILENT);
    }
  };
}
function g(t, e) {
  return {
    key: t,
    shiftKey: e,
    altKey: null,
    ["ArrowLeft" === t ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index
      } = r;
      "ArrowRight" === t && (i += r.length + 1);
      let [n] = this.quill.getLeaf(index);
      return !(n instanceof EmbedBlot) || ("ArrowLeft" === t ? e ? this.quill.setSelection(r.index - 1, r.length + 1, _$$Ay.sources.USER) : this.quill.setSelection(r.index - 1, _$$Ay.sources.USER) : e ? this.quill.setSelection(r.index, r.length + 1, _$$Ay.sources.USER) : this.quill.setSelection(r.index + r.length + 1, _$$Ay.sources.USER), !1);
    }
  };
}
function m(t) {
  return {
    key: t[0],
    shortKey: !0,
    handler(e, r) {
      this.quill.format(t, !r.format[t], _$$Ay.sources.USER);
    }
  };
}
function b(t) {
  return {
    key: t ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(e, r) {
      let i = t ? "prev" : "next";
      let n = r.line;
      let s = n.parent[i];
      if (null != s) {
        if ("table-row" === s.statics.blotName) {
          let t = s.children.head;
          let e = n;
          for (; null != e.prev;) {
            e = e.prev;
            t = t.next;
          }
          let i = t.offset(this.quill.scroll) + Math.min(r.offset, t.length() - 1);
          this.quill.setSelection(i, 0, _$$Ay.sources.USER);
        }
      } else {
        let e = n.table()[i];
        null != e && (t ? this.quill.setSelection(e.offset(this.quill.scroll) + e.length() - 1, 0, _$$Ay.sources.USER) : this.quill.setSelection(e.offset(this.quill.scroll), 0, _$$Ay.sources.USER));
      }
      return !1;
    }
  };
}
export function $$y1(t) {
  let {
    quill,
    range
  } = t;
  let i = quill.getLines(range);
  let n = {};
  if (i.length > 1) {
    let t = i[0].formats();
    let e = i[i.length - 1].formats();
    n = AttributeMap.diff(e, t) || {};
  }
  quill.deleteText(range, _$$Ay.sources.USER);
  Object.keys(n).length > 0 && quill.formatLine(range.index, 1, n, _$$Ay.sources.USER);
  quill.setSelection(range.index, _$$Ay.sources.SILENT);
}
$$d0.DEFAULTS = f;
export const Ay = $$d0;
export const Xo = $$y1;