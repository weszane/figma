import { Scope, Attributor, ClassAttributor, StyleAttributor, EmbedBlot, BlockBlot } from "../vendor/73046";
import n from "../vendor/308080";
import { zo } from "../vendor/224828";
import { A as _$$A } from "../vendor/53968";
import { A as _$$A2 } from "../vendor/648916";
import { Ay as _$$Ay } from "../vendor/263336";
import { Ay as _$$Ay2 } from "../vendor/626418";
import { Xo } from "../vendor/554865";
let c = {
  scope: Scope.BLOCK,
  whitelist: ["right", "center", "justify"]
};
let u = new Attributor("align", "align", c);
new ClassAttributor("align", "ql-align", c);
let h = new StyleAttributor("align", "text-align", c);
class d extends StyleAttributor {
  value(t) {
    let e = super.value(t);
    if (!e.startsWith("rgb(")) return e;
    let r = (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")).split(",").map(t => `00${parseInt(t, 10).toString(16)}`.slice(-2)).join("");
    return `#${r}`;
  }
}
new ClassAttributor("color", "ql-color", {
  scope: Scope.INLINE
});
let f = new d("color", "color", {
  scope: Scope.INLINE
});
new ClassAttributor("background", "ql-bg", {
  scope: Scope.INLINE
});
let p = new d("background", "background-color", {
  scope: Scope.INLINE
});
let m = {
  scope: Scope.BLOCK,
  whitelist: ["rtl"]
};
let b = new Attributor("direction", "dir", m);
new ClassAttributor("direction", "ql-direction", m);
let y = new StyleAttributor("direction", "direction", m);
let v = {
  scope: Scope.INLINE,
  whitelist: ["serif", "monospace"]
};
new ClassAttributor("font", "ql-font", v);
class A extends StyleAttributor {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
let x = new A("font", "font-family", v);
new ClassAttributor("size", "ql-size", {
  scope: Scope.INLINE,
  whitelist: ["small", "large", "huge"]
});
let N = new StyleAttributor("size", "font-size", {
  scope: Scope.INLINE,
  whitelist: ["10px", "18px", "32px"]
});
let w = /font-weight:\s*normal/;
let k = ["P", "OL", "UL"];
let q = t => t && k.includes(t.tagName);
let _ = t => {
  Array.from(t.querySelectorAll("br")).filter(t => q(t.previousElementSibling) && q(t.nextElementSibling)).forEach(t => {
    t.parentNode?.removeChild(t);
  });
};
let L = t => {
  Array.from(t.querySelectorAll('b[style*="font-weight"]')).filter(t => t.getAttribute("style")?.match(w)).forEach(e => {
    let r = t.createDocumentFragment();
    r.append(...e.childNodes);
    e.parentNode?.replaceChild(r, e);
  });
};
let O = /\bmso-list:[^;]*ignore/i;
let S = /\bmso-list:[^;]*\bl(\d+)/i;
let T = /\bmso-list:[^;]*\blevel(\d+)/i;
let j = (t, e) => {
  let r = t.getAttribute("style");
  let i = r?.match(S);
  if (!i) return null;
  let n = Number(i[1]);
  let s = r?.match(T);
  let l = s ? Number(s[1]) : 1;
  let o = RegExp(`@list l${n}:level${l}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i");
  let a = e.match(o);
  return {
    id: n,
    indent: l,
    type: a && "bullet" === a[1] ? "bullet" : "ordered",
    element: t
  };
};
let C = t => {
  let e = Array.from(t.querySelectorAll("[style*=mso-list]"));
  let r = [];
  let i = [];
  e.forEach(t => {
    (t.getAttribute("style") || "").match(O) ? r.push(t) : i.push(t);
  });
  r.forEach(t => t.parentNode?.removeChild(t));
  let n = t.documentElement.innerHTML;
  let s = i.map(t => j(t, n)).filter(t => t);
  for (; s.length;) {
    let t = [];
    let e = s.shift();
    for (; e;) {
      t.push(e);
      e = s.length && s[0]?.element === e.element.nextElementSibling && s[0].id === e.id ? s.shift() : null;
    }
    let r = document.createElement("ul");
    t.forEach(t => {
      let e = document.createElement("li");
      e.setAttribute("data-list", t.type);
      t.indent > 1 && e.setAttribute("class", `ql-indent-${t.indent - 1}`);
      e.innerHTML = t.element.innerHTML;
      r.appendChild(e);
    });
    let i = t[0]?.element;
    let {
      parentNode
    } = i ?? {};
    i && parentNode?.replaceChild(r, i);
    t.slice(1).forEach(t => {
      let {
        element
      } = t;
      parentNode?.removeChild(element);
    });
  }
};
let R = [function (t) {
  "urn:schemas-microsoft-com:office:word" === t.documentElement.getAttribute("xmlns:w") && C(t);
}, function (t) {
  t.querySelector('[id^="docs-internal-guid-"]') && (L(t), _(t));
}];
let I = t => {
  t.documentElement && R.forEach(e => {
    e(t);
  });
};
let B = _$$A("quill:clipboard");
let M = [[Node.TEXT_NODE, function (t, e, r) {
  let i = t.data;
  if (t.parentElement?.tagName === "O:P") return e.insert(i.trim());
  if (!function t(e) {
    return null != e && (H.has(e) || ("PRE" === e.tagName ? H.set(e, !0) : H.set(e, t(e.parentNode))), H.get(e));
  }(t)) {
    if (0 === i.trim().length && i.includes("\n") && (!t.previousElementSibling || !t.nextElementSibling || $(t.previousElementSibling, r) || $(t.nextElementSibling, r))) return e;
    let n = (t, e) => {
      let r = e.replace(/[^\u00a0]/g, "");
      return r.length < 1 && t ? " " : r;
    };
    i = (i = i.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, n.bind(n, !0));
    (null == t.previousSibling && null != t.parentElement && $(t.parentElement, r) || t.previousSibling instanceof Element && $(t.previousSibling, r)) && (i = i.replace(/^\s+/, n.bind(n, !1)));
    (null == t.nextSibling && null != t.parentElement && $(t.parentElement, r) || t.nextSibling instanceof Element && $(t.nextSibling, r)) && (i = i.replace(/\s+$/, n.bind(n, !1)));
  }
  return e.insert(i);
}], [Node.TEXT_NODE, K], ["br", function (t, e) {
  F(e, "\n") || e.insert("\n");
  return e;
}], [Node.ELEMENT_NODE, K], [Node.ELEMENT_NODE, function (t, e, r) {
  let s = r.query(t);
  if (null == s) return e;
  if (s.prototype instanceof EmbedBlot) {
    let e = {};
    let i = s.value(t);
    if (null != i) {
      e[s.blotName] = i;
      return new n().insert(e, s.formats(t, r));
    }
  } else if (s.prototype instanceof BlockBlot && !F(e, "\n") && e.insert("\n"), "blotName" in s && "formats" in s && "function" == typeof s.formats) return z(e, s.blotName, s.formats(t, r), r);
  return e;
}], [Node.ELEMENT_NODE, function (t, e, r) {
  let n = Attributor.keys(t);
  let s = ClassAttributor.keys(t);
  let l = StyleAttributor.keys(t);
  let o = {};
  n.concat(s).concat(l).forEach(e => {
    let n = r.query(e, Scope.ATTRIBUTE);
    null != n && (o[n.attrName] = n.value(t), o[n.attrName]) || (null != (n = D[e]) && (n.attrName === e || n.keyName === e) && (o[n.attrName] = n.value(t) || void 0), null != (n = U[e]) && (n.attrName === e || n.keyName === e) && (o[(n = U[e]).attrName] = n.value(t) || void 0));
  });
  return Object.entries(o).reduce((t, e) => {
    let [i, n] = e;
    return z(t, i, n, r);
  }, e);
}], [Node.ELEMENT_NODE, function (t, e, r) {
  let i = {};
  let s = t.style || {};
  return ("italic" === s.fontStyle && (i.italic = !0), "underline" === s.textDecoration && (i.underline = !0), "line-through" === s.textDecoration && (i.strike = !0), (s.fontWeight?.startsWith("bold") || parseInt(s.fontWeight, 10) >= 700) && (i.bold = !0), e = Object.entries(i).reduce((t, e) => {
    let [i, n] = e;
    return z(t, i, n, r);
  }, e), parseFloat(s.textIndent || 0) > 0) ? new n().insert("	").concat(e) : e;
}], ["li", function (t, e, r) {
  let i = r.query(t);
  if (null == i || "list" !== i.blotName || !F(e, "\n")) return e;
  let s = -1;
  let l = t.parentNode;
  for (; null != l;) {
    ["OL", "UL"].includes(l.tagName) && (s += 1);
    l = l.parentNode;
  }
  return s <= 0 ? e : e.reduce((t, e) => e.insert ? e.attributes && "number" == typeof e.attributes.indent ? t.push(e) : t.insert(e.insert, {
    indent: s,
    ...(e.attributes || {})
  }) : t, new n());
}], ["ol, ul", function (t, e, r) {
  let i = "OL" === t.tagName ? "ordered" : "bullet";
  let n = t.getAttribute("data-checked");
  n && (i = "true" === n ? "checked" : "unchecked");
  return z(e, "list", i, r);
}], ["pre", function (t, e, r) {
  let i = r.query("code-block");
  return z(e, "code-block", !i || !("formats" in i) || "function" != typeof i.formats || i.formats(t, r), r);
}], ["tr", function (t, e, r) {
  let i = t.parentElement?.tagName === "TABLE" ? t.parentElement : t.parentElement?.parentElement;
  return null != i ? z(e, "table", Array.from(i.querySelectorAll("tr")).indexOf(t) + 1, r) : e;
}], ["b", V("bold")], ["i", V("italic")], ["strike", V("strike")], ["style", function () {
  return new n();
}]];
let D = [u, b].reduce((t, e) => (t[e.keyName] = e, t), {});
let U = [h, p, f, y, x, N].reduce((t, e) => (t[e.keyName] = e, t), {});
export class $$P0 extends _$$A2 {
  static DEFAULTS = {
    matchers: []
  };
  constructor(t, e) {
    super(t, e);
    this.quill.root.addEventListener("copy", t => this.onCaptureCopy(t, !1));
    this.quill.root.addEventListener("cut", t => this.onCaptureCopy(t, !0));
    this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this));
    this.matchers = [];
    M.concat(this.options.matchers ?? []).forEach(t => {
      let [e, r] = t;
      this.addMatcher(e, r);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html,
      text
    } = t;
    let i = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
    if (i[_$$Ay2.blotName]) return new n().insert(text || "", {
      [_$$Ay2.blotName]: i[_$$Ay2.blotName]
    });
    if (!html) return new n().insert(text || "", i);
    let s = this.convertHTML(html);
    return F(s, "\n") && (null == s.ops[s.ops.length - 1].attributes || i.table) ? s.compose(new n().retain(s.length() - 1).$$delete(1)) : s;
  }
  normalizeHTML(t) {
    I(t);
  }
  convertHTML(t) {
    let e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    let r = e.body;
    let i = new WeakMap();
    let [s, l] = this.prepareMatching(r, i);
    return function t(e, r, i, s, l) {
      return r.nodeType === r.TEXT_NODE ? s.reduce((t, i) => i(r, t, e), new n()) : r.nodeType === r.ELEMENT_NODE ? Array.from(r.childNodes || []).reduce((n, o) => {
        let a = t(e, o, i, s, l);
        o.nodeType === r.ELEMENT_NODE && (a = i.reduce((t, r) => r(o, t, e), a), a = (l.get(o) || []).reduce((t, r) => r(o, t, e), a));
        return n.concat(a);
      }, new n()) : new n();
    }(this.quill.scroll, r, s, l, i);
  }
  dangerouslyPasteHTML(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : _$$Ay.sources.API;
    if ("string" == typeof t) {
      let r = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(r, e);
      this.quill.setSelection(0, _$$Ay.sources.SILENT);
    } else {
      let i = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new n().retain(t).concat(i), r);
      this.quill.setSelection(t + i.length(), _$$Ay.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] && $$arguments[1];
    if (t.defaultPrevented) return;
    t.preventDefault();
    let [r] = this.quill.selection.getRange();
    if (null == r) return;
    let {
      html,
      text
    } = this.onCopy(r, e);
    t.clipboardData?.setData("text/plain", text);
    t.clipboardData?.setData("text/html", html);
    e && Xo({
      range: r,
      quill: this.quill
    });
  }
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter(t => "#" !== t[0]).join("\n");
  }
  onCapturePaste(t) {
    if (t.defaultPrevented || !this.quill.isEnabled()) return;
    t.preventDefault();
    let e = this.quill.getSelection(!0);
    if (null == e) return;
    let r = t.clipboardData?.getData("text/html");
    let i = t.clipboardData?.getData("text/plain");
    if (!r && !i) {
      let e = t.clipboardData?.getData("text/uri-list");
      e && (i = this.normalizeURIList(e));
    }
    let n = Array.from(t.clipboardData?.files || []);
    if (!r && n.length > 0) {
      this.quill.uploader.upload(e, n);
      return;
    }
    if (r && n.length > 0) {
      let t = new DOMParser().parseFromString(r, "text/html");
      if (1 === t.body.childElementCount && t.body.firstElementChild?.tagName === "IMG") {
        this.quill.uploader.upload(e, n);
        return;
      }
    }
    this.onPaste(e, {
      html: r,
      text: i
    });
  }
  onCopy(t) {
    let e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text,
      html
    } = e;
    let s = this.quill.getFormat(t.index);
    let l = this.convert({
      text,
      html
    }, s);
    B.log("onPaste", l, {
      text,
      html
    });
    let o = new n().retain(t.index).$$delete(t.length).concat(l);
    this.quill.updateContents(o, _$$Ay.sources.USER);
    this.quill.setSelection(o.length() - t.length, _$$Ay.sources.SILENT);
    this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    let r = [];
    let i = [];
    this.matchers.forEach(n => {
      let [s, l] = n;
      switch (s) {
        case Node.TEXT_NODE:
          i.push(l);
          break;
        case Node.ELEMENT_NODE:
          r.push(l);
          break;
        default:
          Array.from(t.querySelectorAll(s)).forEach(t => {
            if (e.has(t)) {
              let r = e.get(t);
              r?.push(l);
            } else e.set(t, [l]);
          });
      }
    });
    return [r, i];
  }
}
function z(t, e, r, i) {
  return i.query(e) ? t.reduce((t, i) => i.insert ? i.attributes && i.attributes[e] ? t.push(i) : t.insert(i.insert, {
    ...(r ? {
      [e]: r
    } : {}),
    ...i.attributes
  }) : t, new n()) : t;
}
function F(t, e) {
  let r = "";
  for (let i = t.ops.length - 1; i >= 0 && r.length < e.length; --i) {
    let e = t.ops[i];
    if ("string" != typeof e.insert) break;
    r = e.insert + r;
  }
  return r.slice(-1 * e.length) === e;
}
function $(t, e) {
  if (!(t instanceof Element)) return !1;
  let r = e.query(t);
  return (!r || !(r.prototype instanceof EmbedBlot)) && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase());
}
let H = new WeakMap();
function V(t) {
  return (e, r, i) => z(r, t, !0, i);
}
function K(t, e, r) {
  if (!F(e, "\n")) {
    if ($(t, r) && (t.childNodes.length > 0 || t instanceof HTMLParagraphElement)) return e.insert("\n");
    if (e.length() > 0 && t.nextSibling) {
      let i = t.nextSibling;
      for (; null != i;) {
        if ($(i, r)) return e.insert("\n");
        let t = r.query(i);
        if (t && t.prototype instanceof zo) return e.insert("\n");
        i = i.firstChild;
      }
    }
  }
  return e;
}
export const Ay = $$P0;