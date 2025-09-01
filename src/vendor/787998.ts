import { A as _$$A } from "../vendor/666498";
import { A as _$$A2 } from "../vendor/505982";
import { A as _$$A3 } from "../vendor/731507";
import { A as _$$A4 } from "../vendor/269467";
import { Q } from "../vendor/60116";
import { A as _$$A5 } from "../vendor/706709";
import { Ay } from "../vendor/263336";
let l = 0;
function o(t, e) {
  t.setAttribute(e, `${"true" !== t.getAttribute(e)}`);
}
let a = class {
  constructor(t) {
    this.select = t;
    this.container = document.createElement("span");
    this.buildPicker();
    this.select.style.display = "none";
    this.select.parentNode.insertBefore(this.container, this.select);
    this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    });
    this.label.addEventListener("keydown", t => {
      switch (t.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape();
          t.preventDefault();
      }
    });
    this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded");
    o(this.label, "aria-expanded");
    o(this.options, "aria-hidden");
  }
  buildItem(t) {
    let e = document.createElement("span");
    e.tabIndex = "0";
    e.setAttribute("role", "button");
    e.classList.add("ql-picker-item");
    let r = t.getAttribute("value");
    r && e.setAttribute("data-value", r);
    t.textContent && e.setAttribute("data-label", t.textContent);
    e.addEventListener("click", () => {
      this.selectItem(e, !0);
    });
    e.addEventListener("keydown", t => {
      switch (t.key) {
        case "Enter":
          this.selectItem(e, !0);
          t.preventDefault();
          break;
        case "Escape":
          this.escape();
          t.preventDefault();
      }
    });
    return e;
  }
  buildLabel() {
    let t = document.createElement("span");
    t.classList.add("ql-picker-label");
    t.innerHTML = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
    t.tabIndex = "0";
    t.setAttribute("role", "button");
    t.setAttribute("aria-expanded", "false");
    this.container.appendChild(t);
    return t;
  }
  buildOptions() {
    let t = document.createElement("span");
    t.classList.add("ql-picker-options");
    t.setAttribute("aria-hidden", "true");
    t.tabIndex = "-1";
    t.id = `ql-picker-options-${l}`;
    l += 1;
    this.label.setAttribute("aria-controls", t.id);
    this.options = t;
    Array.from(this.select.options).forEach(e => {
      let r = this.buildItem(e);
      t.appendChild(r);
      !0 === e.selected && this.selectItem(r);
    });
    this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach(t => {
      this.container.setAttribute(t.name, t.value);
    });
    this.container.classList.add("ql-picker");
    this.label = this.buildLabel();
    this.buildOptions();
  }
  escape() {
    this.close();
    setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded");
    this.label.setAttribute("aria-expanded", "false");
    this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] && $$arguments[1];
    let r = this.container.querySelector(".ql-selected");
    t !== r && (null != r && r.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      let e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
      t = this.select.options[this.select.selectedIndex];
      this.selectItem(e);
    } else this.selectItem(null);
    let e = null != t && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
};
let c = class extends a {
  constructor(t, e) {
    super(t);
    this.label.innerHTML = e;
    this.container.classList.add("ql-color-picker");
    Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach(t => {
      t.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    let e = super.buildItem(t);
    e.style.backgroundColor = t.getAttribute("value") || "";
    return e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    let r = this.label.querySelector(".ql-color-label");
    let i = t && t.getAttribute("data-value") || "";
    r && ("line" === r.tagName ? r.style.stroke = i : r.style.fill = i);
  }
};
let u = class extends a {
  constructor(t, e) {
    super(t);
    this.container.classList.add("ql-icon-picker");
    Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach(t => {
      t.innerHTML = e[t.getAttribute("data-value") || ""];
    });
    this.defaultItem = this.container.querySelector(".ql-selected");
    this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    let r = t || this.defaultItem;
    if (null != r) {
      if (this.label.innerHTML === r.innerHTML) return;
      this.label.innerHTML = r.innerHTML;
    }
  }
};
let h = t => {
  let {
    overflowY
  } = getComputedStyle(t, null);
  return "visible" !== overflowY && "clip" !== overflowY;
};
let d = class {
  constructor(t, e) {
    this.quill = t;
    this.boundsContainer = e || document.body;
    this.root = t.addContainer("ql-tooltip");
    this.root.innerHTML = this.constructor.TEMPLATE;
    h(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    });
    this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    let e = t.left + t.width / 2 - this.root.offsetWidth / 2;
    let r = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`;
    this.root.style.top = `${r}px`;
    this.root.classList.remove("ql-flip");
    let i = this.boundsContainer.getBoundingClientRect();
    let n = this.root.getBoundingClientRect();
    let s = 0;
    if (n.right > i.right && (s = i.right - n.right, this.root.style.left = `${e + s}px`), n.left < i.left && (s = i.left - n.left, this.root.style.left = `${e + s}px`), n.bottom > i.bottom) {
      let e = n.bottom - n.top;
      let i = t.bottom - t.top + e;
      this.root.style.top = `${r - i}px`;
      this.root.classList.add("ql-flip");
    }
    return s;
  }
  show() {
    this.root.classList.remove("ql-editing");
    this.root.classList.remove("ql-hidden");
  }
};
let f = [!1, "center", "right", "justify"];
let p = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
let g = [!1, "serif", "monospace"];
let m = ["1", "2", "3", !1];
let b = ["small", !1, "large", "huge"];
class y extends _$$A3 {
  constructor(t, e) {
    super(t, e);
    let r = e => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      null == this.tooltip || this.tooltip.root.contains(e.target) || document.activeElement === this.tooltip.textbox || this.quill.hasFocus() || this.tooltip.hide();
      null != this.pickers && this.pickers.forEach(t => {
        t.container.contains(e.target) || t.close();
      });
    };
    t.emitter.listenDOM("click", document.body, r);
  }
  addModule(t) {
    let e = super.addModule(t);
    "toolbar" === t && this.extendToolbar(e);
    return e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach(t => {
      (t.getAttribute("class") || "").split(/\s+/).forEach(r => {
        if (r.startsWith("ql-") && null != e[r = r.slice(3)]) {
          if ("direction" === r) t.innerHTML = e[r][""] + e[r].rtl;else if ("string" == typeof e[r]) t.innerHTML = e[r];else {
            let i = t.value || "";
            null != i && e[r][i] && (t.innerHTML = e[r][i]);
          }
        }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map(t => {
      if (t.classList.contains("ql-align") && (null == t.querySelector("option") && $$A(t, f), "object" == typeof e.align)) return new u(t, e.align);
      if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
        let r = t.classList.contains("ql-background") ? "background" : "color";
        null == t.querySelector("option") && $$A(t, p, "background" === r ? "#ffffff" : "#000000");
        return new c(t, e[r]);
      }
      null == t.querySelector("option") && (t.classList.contains("ql-font") ? $$A(t, g) : t.classList.contains("ql-header") ? $$A(t, m) : t.classList.contains("ql-size") && $$A(t, b));
      return new a(t);
    });
    this.quill.on(_$$A2.events.EDITOR_CHANGE, () => {
      this.pickers.forEach(t => {
        t.update();
      });
    });
  }
}
y.DEFAULTS = _$$A({}, _$$A3.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let t = this.container.querySelector("input.ql-image[type=file]");
          null == t && ((t = document.createElement("input")).setAttribute("type", "file"), t.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), t.classList.add("ql-image"), t.addEventListener("change", () => {
            let e = this.quill.getSelection(!0);
            this.quill.uploader.upload(e, t.files);
            t.value = "";
          }), this.container.appendChild(t));
          t.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class v extends d {
  constructor(t, e) {
    super(t, e);
    this.textbox = this.root.querySelector('input[type="text"]');
    this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", t => {
      "Enter" === t.key ? (this.save(), t.preventDefault()) : "Escape" === t.key && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide();
    this.restoreFocus();
  }
  edit() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : "link";
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null == this.textbox) return;
    null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    let r = this.quill.getBounds(this.quill.selection.savedRange);
    null != r && this.position(r);
    this.textbox.select();
    this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || "");
    this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link":
        {
          let {
            scrollTop
          } = this.quill.root;
          this.linkRange ? (this.quill.formatText(this.linkRange, "link", value, _$$A2.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", value, _$$A2.sources.USER));
          this.quill.root.scrollTop = scrollTop;
          break;
        }
      case "video":
        var e;
        let r;
        t = (r = (e = value).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/)) ? `${r[1] || "https"}://www.youtube.com/embed/${r[2]}?showinfo=0` : (r = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${r[1] || "https"}://player.vimeo.com/video/${r[2]}/` : e;
      case "formula":
        {
          if (!value) break;
          let e = this.quill.getSelection(!0);
          if (null != e) {
            let r = e.index + e.length;
            this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), value, _$$A2.sources.USER);
            "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", _$$A2.sources.USER);
            this.quill.setSelection(r + 2, _$$A2.sources.USER);
          }
        }
    }
    this.textbox.value = "";
    this.hide();
  }
}
function $$A(t, e) {
  let r = $$arguments.length > 2 && void 0 !== $$arguments[2] && $$arguments[2];
  e.forEach(e => {
    let i = document.createElement("option");
    e === r ? i.setAttribute("selected", "selected") : i.setAttribute("value", String(e));
    t.appendChild(i);
  });
}
let k = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class q extends v {
  static TEMPLATE = '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a>';
  preview = this.root.querySelector("a.ql-preview");
  listen() {
    super.listen();
    this.root.querySelector("a.ql-action").addEventListener("click", t => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent);
      t.preventDefault();
    });
    this.root.querySelector("a.ql-remove").addEventListener("click", t => {
      if (null != this.linkRange) {
        let t = this.linkRange;
        this.restoreFocus();
        this.quill.formatText(t, "link", !1, _$$A2.sources.USER);
        delete this.linkRange;
      }
      t.preventDefault();
      this.hide();
    });
    this.quill.on(_$$A2.events.SELECTION_CHANGE, (t, e, r) => {
      if (null != t) {
        if (0 === t.length && r === _$$A2.sources.USER) {
          let [e, r] = this.quill.scroll.descendant(_$$A4, t.index);
          if (null != e) {
            this.linkRange = new Q(t.index - r, e.length());
            let i = _$$A4.formats(e.domNode);
            this.preview.textContent = i;
            this.preview.setAttribute("href", i);
            this.show();
            let n = this.quill.getBounds(this.linkRange);
            null != n && this.position(n);
            return;
          }
        } else delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show();
    this.root.removeAttribute("data-mode");
  }
}
class _ extends y {
  constructor(t, e) {
    null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = k);
    super(t, e);
    this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    null != t.container && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), _$$A5), this.buildPickers(t.container.querySelectorAll("select"), _$$A5), this.tooltip = new q(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
_.DEFAULTS = _$$A({}, y.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(t) {
          if (t) {
            let t = this.quill.getSelection();
            if (null == t || 0 === t.length) return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && 0 !== e.indexOf("mailto:") && (e = `mailto:${e}`);
            let {
              tooltip
            } = this.quill.theme;
            tooltip.edit("link", e);
          } else this.quill.format("link", !1, Ay.sources.USER);
        }
      }
    }
  }
});
export let $$L0 = _;
export const A = $$L0;