import { isHTMLElement, ElementNode, $createParagraphNode, $isTextNode, $isTabNode, $createTabNode, $createLineBreakNode, $applyNodeReplacement, TextNode } from "../vendor/408361";
import { addClassNamesToElement, removeClassNamesFromElement } from "../vendor/425002";
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var o = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let a = globalThis.Prism || window.Prism;
let h = e => {
  try {
    return !!e && a.languages.hasOwnProperty(e);
  } catch (e) {
    return !1;
  }
};
function d(e, r) {
  for (let n of e.childNodes) {
    if (isHTMLElement(n) && n.tagName === r) return !0;
    d(n, r);
  }
  return !1;
}
let p = "data-language";
let g = "data-highlight-language";
export class CodeNode extends ElementNode {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new CodeNode(e.__language, e.__key);
  }
  constructor(e, r) {
    super(r);
    this.__language = e;
    this.__isSyntaxHighlightSupported = h(e);
  }
  createDOM(e) {
    let r = document.createElement("code");
    addClassNamesToElement(r, e.theme.code);
    r.setAttribute("spellcheck", "false");
    let n = this.getLanguage();
    n && (r.setAttribute(p, n), this.getIsSyntaxHighlightSupported() && r.setAttribute(g, n));
    return r;
  }
  updateDOM(e, r, n) {
    let i = this.__language;
    let s = e.__language;
    i ? i !== s && (r.setAttribute(p, i), this.__isSyntaxHighlightSupported && r.setAttribute(g, i)) : s && (r.removeAttribute(p), e.__isSyntaxHighlightSupported && r.removeAttribute(g));
    return !1;
  }
  exportDOM(e) {
    let r = document.createElement("pre");
    addClassNamesToElement(r, e._config.theme.code);
    r.setAttribute("spellcheck", "false");
    let n = this.getLanguage();
    n && (r.setAttribute(p, n), this.getIsSyntaxHighlightSupported() && r.setAttribute(g, n));
    return {
      element: r
    };
  }
  static importDOM() {
    return {
      code: e => null != e.textContent && (/\r?\n/.test(e.textContent) || d(e, "BR")) ? {
        conversion: b,
        priority: 1
      } : null,
      div: () => ({
        conversion: O,
        priority: 1
      }),
      pre: () => ({
        conversion: b,
        priority: 0
      }),
      table: e => _(e) ? {
        conversion: x,
        priority: 3
      } : null,
      td: e => {
        let r = e;
        let n = r.closest("table");
        return r.classList.contains("js-file-line") || n && _(n) ? {
          conversion: w,
          priority: 3
        } : null;
      },
      tr: e => {
        let r = e.closest("table");
        return r && _(r) ? {
          conversion: w,
          priority: 3
        } : null;
      }
    };
  }
  static importJSON(e) {
    let r = $createCodeNode(e.language);
    r.setFormat(e.format);
    r.setIndent(e.indent);
    r.setDirection(e.direction);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      language: this.getLanguage(),
      type: "code",
      version: 1
    };
  }
  insertNewAfter(e, r = !0) {
    let n = this.getChildren();
    let s = n.length;
    if (s >= 2 && "\n" === n[s - 1].getTextContent() && "\n" === n[s - 2].getTextContent() && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === s) {
      n[s - 1].remove();
      n[s - 2].remove();
      let e = $createParagraphNode();
      this.insertAfter(e, r);
      return e;
    }
    let {
      anchor,
      focus
    } = e;
    let h = (anchor.isBefore(focus) ? anchor : focus).getNode();
    if ($isTextNode(h)) {
      let e = T(h);
      let r = [];
      for (;;) if ($isTabNode(e)) {
        r.push($createTabNode());
        e = e.getNextSibling();
      } else {
        if (!C(e)) break;
        {
          let n = 0;
          let i = e.getTextContent();
          let s = e.getTextContentSize();
          for (; n < s && " " === i[n];) n++;
          if (0 !== n && r.push(A(" ".repeat(n))), n !== s) break;
          e = e.getNextSibling();
        }
      }
      let n = h.splitText(anchor.offset)[0];
      let s = 0 === anchor.offset ? 0 : 1;
      let a = n.getIndexWithinParent() + s;
      let d = h.getParentOrThrow();
      let p = [$createLineBreakNode(), ...r];
      d.splice(a, 0, p);
      let g = r[r.length - 1];
      g ? g.select() : 0 === anchor.offset ? n.selectPrevious() : n.getNextSibling().selectNext(0, 0);
    }
    if ($isCodeNode(h)) {
      let {
        offset
      } = e.anchor;
      h.splice(offset, 0, [$createLineBreakNode()]);
      h.select(offset + 1, offset + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    let e = $createParagraphNode();
    this.getChildren().forEach(r => e.append(r));
    this.replace(e);
    return !0;
  }
  setLanguage(e) {
    let r = this.getWritable();
    r.__language = e;
    r.__isSyntaxHighlightSupported = h(e);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
}
export function $createCodeNode(e) {
  return $applyNodeReplacement(new CodeNode(e));
}
export function $isCodeNode(e) {
  return e instanceof CodeNode;
}
function b(e) {
  return {
    node: $createCodeNode(e.getAttribute(p))
  };
}
function O(e) {
  let r = e;
  let n = k(r);
  return n || function (e) {
    let r = e.parentElement;
    for (; null !== r;) {
      if (k(r)) return !0;
      r = r.parentElement;
    }
    return !1;
  }(r) ? {
    node: n ? $createCodeNode() : null
  } : {
    node: null
  };
}
function x() {
  return {
    node: $createCodeNode()
  };
}
function w() {
  return {
    node: null
  };
}
function k(e) {
  return null !== e.style.fontFamily.match("monospace");
}
function _(e) {
  return e.classList.contains("js-file-line-container");
}
class S extends TextNode {
  constructor(e, r, n) {
    super(e, n);
    this.__highlightType = r;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new S(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    let r = super.createDOM(e);
    let n = E(e.theme, this.__highlightType);
    addClassNamesToElement(r, n);
    return r;
  }
  updateDOM(e, r, n) {
    let i = super.updateDOM(e, r, n);
    let o = E(n.theme, e.__highlightType);
    let a = E(n.theme, this.__highlightType);
    o !== a && (o && removeClassNamesFromElement(r, o), a && addClassNamesToElement(r, a));
    return i;
  }
  static importJSON(e) {
    let r = A(e.text, e.highlightType);
    r.setFormat(e.format);
    r.setDetail(e.detail);
    r.setMode(e.mode);
    r.setStyle(e.style);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      highlightType: this.getHighlightType(),
      type: "code-highlight",
      version: 1
    };
  }
  setFormat(e) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return $createCodeNode();
  }
}
function E(e, r) {
  return r && e && e.codeHighlight && e.codeHighlight[r];
}
function A(e, r) {
  return $applyNodeReplacement(new S(e, r));
}
function C(e) {
  return e instanceof S;
}
function T(e) {
  let r = e;
  let n = e;
  for (; C(n) || $isTabNode(n);) {
    r = n;
    n = n.getPreviousSibling();
  }
  return r;
}
function I(e) {
  let r = e;
  let n = e;
  for (; C(n) || l(n);) {
    r = n;
    n = n.getNextSibling();
  }
  return r;
}
let P = new Set();
function R(e, r) {
  let n = [];
  for (let i of e) if ("string" == typeof i) {
    let e = i.split(/(\n|\t)/);
    let s = e.length;
    for (let i = 0; i < s; i++) {
      let s = e[i];
      "\n" === s || "\r\n" === s ? n.push(c()) : "	" === s ? n.push(ExpiringCache()) : s.length > 0 && n.push(A(s, r));
    }
  } else {
    let {
      content
    } = i;
    "string" == typeof content ? n.push(...R([content], i.type)) : Array.isArray(content) && n.push(...R(content, i.type));
  }
  return n;
}
function M(e, r) {
  return C(e) && C(r) && e.__text === r.__text && e.__highlightType === r.__highlightType || l(e) && l(r) || f(e) && f(r);
}
export const QC = $createCodeNode;
export const a5 = $isCodeNode;
export const iK = CodeNode;