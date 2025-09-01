import i from "../vendor/308080";
import { EmbedBlot, Scope } from "../vendor/73046";
import { Ay } from "../vendor/263336";
import { A as _$$A } from "../vendor/53968";
import { A as _$$A2 } from "../vendor/648916";
let a = _$$A("quill:toolbar");
export class $$c0 extends _$$A2 {
  constructor(t, e) {
    if (super(t, e), Array.isArray(this.options.container)) {
      let e = document.createElement("div");
      e.setAttribute("role", "toolbar");
      (function (t, e) {
        Array.isArray(e[0]) || (e = [e]);
        e.forEach(e => {
          let r = document.createElement("span");
          r.classList.add("ql-formats");
          e.forEach(t => {
            if ("string" == typeof t) u(r, t);else {
              let e = Object.keys(t)[0];
              let i = t[e];
              Array.isArray(i) ? function (t, e, r) {
                let i = document.createElement("select");
                i.classList.add(`ql-${e}`);
                r.forEach(t => {
                  let e = document.createElement("option");
                  !1 !== t ? e.setAttribute("value", String(t)) : e.setAttribute("selected", "selected");
                  i.appendChild(e);
                });
                t.appendChild(i);
              }(r, e, i) : u(r, e, i);
            }
          });
          t.appendChild(r);
        });
      })(e, this.options.container);
      t.container?.parentNode?.insertBefore(e, t.container);
      this.container = e;
    } else "string" == typeof this.options.container ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      a.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar");
    this.controls = [];
    this.handlers = {};
    this.options.handlers && Object.keys(this.options.handlers).forEach(t => {
      let e = this.options.handlers?.[t];
      e && this.addHandler(t, e);
    });
    Array.from(this.container.querySelectorAll("button, select")).forEach(t => {
      this.attach(t);
    });
    this.quill.on(Ay.events.EDITOR_CHANGE, () => {
      let [t] = this.quill.selection.getRange();
      this.update(t);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find(t => 0 === t.indexOf("ql-"));
    if (!e) return;
    if (e = e.slice(3), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[e] && null == this.quill.scroll.query(e)) {
      a.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    let r = "SELECT" === t.tagName ? "change" : "click";
    t.addEventListener(r, r => {
      let l;
      if ("SELECT" === t.tagName) {
        if (t.selectedIndex < 0) return;
        let e = t.options[t.selectedIndex];
        l = !e.hasAttribute("selected") && (e.value || !1);
      } else {
        l = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value"));
        r.preventDefault();
      }
      this.quill.focus();
      let [o] = this.quill.selection.getRange();
      if (null != this.handlers[e]) this.handlers[e].call(this, l);else if (this.quill.scroll.query(e).prototype instanceof EmbedBlot) {
        if (!(l = prompt(`Enter ${e}`))) return;
        this.quill.updateContents(new i().retain(o.index).$$delete(o.length).insert({
          [e]: l
        }), Ay.sources.USER);
      } else this.quill.format(e, l, Ay.sources.USER);
      this.update(o);
    });
    this.controls.push([e, t]);
  }
  update(t) {
    let e = null == t ? {} : this.quill.getFormat(t);
    this.controls.forEach(r => {
      let [i, n] = r;
      if ("SELECT" === n.tagName) {
        let r = null;
        if (null == t) r = null;else if (null == e[i]) r = n.querySelector("option[selected]");else if (!Array.isArray(e[i])) {
          let t = e[i];
          "string" == typeof t && (t = t.replace(/"/g, '\\"'));
          r = n.querySelector(`option[value="${t}"]`);
        }
        null == r ? (n.value = "", n.selectedIndex = -1) : r.selected = !0;
      } else if (null == t) {
        n.classList.remove("ql-active");
        n.setAttribute("aria-pressed", "false");
      } else if (n.hasAttribute("value")) {
        let t = e[i];
        let r = t === n.getAttribute("value") || null != t && t.toString() === n.getAttribute("value") || null == t && !n.getAttribute("value");
        n.classList.toggle("ql-active", r);
        n.setAttribute("aria-pressed", r.toString());
      } else {
        let t = null != e[i];
        n.classList.toggle("ql-active", t);
        n.setAttribute("aria-pressed", t.toString());
      }
    });
  }
}
function u(t, e, r) {
  let i = document.createElement("button");
  i.setAttribute("type", "button");
  i.classList.add(`ql-${e}`);
  i.setAttribute("aria-pressed", "false");
  null != r ? (i.value = r, i.setAttribute("aria-label", `${e}: ${r}`)) : i.setAttribute("aria-label", e);
  t.appendChild(i);
}
$$c0.DEFAULTS = {};
$$c0.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      let t = this.quill.getSelection();
      null != t && (0 === t.length ? Object.keys(this.quill.getFormat()).forEach(t => {
        null != this.quill.scroll.query(t, Scope.INLINE) && this.quill.format(t, !1, Ay.sources.USER);
      }) : this.quill.removeFormat(t.index, t.length, Ay.sources.USER));
    },
    direction(t) {
      let {
        align
      } = this.quill.getFormat();
      "rtl" === t && null == align ? this.quill.format("align", "right", Ay.sources.USER) : t || "right" !== align || this.quill.format("align", !1, Ay.sources.USER);
      this.quill.format("direction", t, Ay.sources.USER);
    },
    indent(t) {
      let e = this.quill.getSelection();
      let r = this.quill.getFormat(e);
      let i = parseInt(r.indent || 0, 10);
      if ("+1" === t || "-1" === t) {
        let e = "+1" === t ? 1 : -1;
        "rtl" === r.direction && (e *= -1);
        this.quill.format("indent", i + e, Ay.sources.USER);
      }
    },
    link(t) {
      !0 === t && (t = prompt("Enter link URL:"));
      this.quill.format("link", t, Ay.sources.USER);
    },
    list(t) {
      let e = this.quill.getSelection();
      let r = this.quill.getFormat(e);
      "check" === t ? "checked" === r.list || "unchecked" === r.list ? this.quill.format("list", !1, Ay.sources.USER) : this.quill.format("list", "unchecked", Ay.sources.USER) : this.quill.format("list", t, Ay.sources.USER);
    }
  }
};
export const A = $$c0;