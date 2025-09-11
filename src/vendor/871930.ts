import { $generateNodesFromDOM, $generateHtmlFromNodes } from "../vendor/797080";
import { $wrapNodes, $addNodeStyle, $moveCaretSelection, $moveCharacter } from "../vendor/850527";
import { objectKlassEquals, addClassNamesToElement, $findMatchingParent, mergeRegister, $getNearestBlockElementAncestorOrThrow } from "../vendor/425002";
import { $isRangeSelection, $getSelection, $createTabNode, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, $isElementNode, $copyNode, $isTextNode, $getRoot, $parseSerializedNode, COPY_COMMAND, COMMAND_PRIORITY_CRITICAL, isSelectionWithinEditor, $getEditor, createCommand, ElementNode, isHTMLElement, $createParagraphNode, $applyNodeReplacement, $getNearestNodeFromDOMNode, $isDecoratorNode, CLICK_COMMAND, $isNodeSelection, DELETE_CHARACTER_COMMAND, COMMAND_PRIORITY_EDITOR, DELETE_WORD_COMMAND, DELETE_LINE_COMMAND, CONTROLLED_TEXT_INSERTION_COMMAND, REMOVE_TEXT_COMMAND, FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, INSERT_LINE_BREAK_COMMAND, INSERT_PARAGRAPH_COMMAND, INSERT_TAB_COMMAND, $insertNodes, INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND, KEY_ARROW_UP_COMMAND, $getAdjacentNode, KEY_ARROW_DOWN_COMMAND, KEY_ARROW_LEFT_COMMAND, KEY_ARROW_RIGHT_COMMAND, KEY_BACKSPACE_COMMAND, $isRootNode, KEY_DELETE_COMMAND, $$if, KEY_ESCAPE_COMMAND, DROP_COMMAND, $createRangeSelection, $normalizeSelection, $setSelection, DRAGSTART_COMMAND, DRAGOVER_COMMAND, SELECT_ALL_COMMAND, $selectAll, CUT_COMMAND, PASTE_COMMAND, isSelectionCapturedInDecoratorInput } from "../vendor/408361";
var h = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let d = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let p = e => d ? (e || window).getSelection() : null;
function g(e, r, n) {
  let s = e.getData("application/x-lexical-editor");
  if (s) try {
    let e = JSON.parse(s);
    if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) return m(n, b(e.nodes), r);
  } catch (e) {}
  let o = e.getData("text/html");
  if (o) try {
    let e = new DOMParser().parseFromString(o, "text/html");
    return m(n, $generateNodesFromDOM(n, e), r);
  } catch (e) {}
  let h = e.getData("text/plain") || e.getData("text/uri-list");
  if (null != h) {
    if ($isRangeSelection(r)) {
      let e = h.split(/(\r?\n|\t)/);
      "" === e[e.length - 1] && e.pop();
      for (let r = 0; r < e.length; r++) {
        let n = $getSelection();
        if ($isRangeSelection(n)) {
          let i = e[r];
          "\n" === i || "\r\n" === i ? n.insertParagraph() : "	" === i ? n.insertNodes([$createTabNode()]) : n.insertText(i);
        }
      }
    } else r.insertRawText(h);
  }
}
function m(e, r, n) {
  e.dispatchCommand(SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
    nodes: r,
    selection: n
  }) || n.insertNodes(r);
}
function v(e, r, n, i = []) {
  let o = null === r || n.isSelected(r);
  let d = $isElementNode(n) && n.excludeFromCopy("html");
  let p = n;
  if (null !== r) {
    let e = $copyNode(n);
    p = e = $isTextNode(e) && null !== r ? $wrapNodes(r, e) : e;
  }
  let g = $isElementNode(p) ? p.getChildren() : [];
  let m = function (e) {
    let r = e.exportJSON();
    let n = e.constructor;
    r.type !== n.getType() && h(58, n.name);
    $isElementNode(e) && (Array.isArray(r.children) || h(59, n.name));
    return r;
  }(p);
  if ($isTextNode(p)) {
    let e = p.__text;
    e.length > 0 ? m.text = e : o = !1;
  }
  for (let i = 0; i < g.length; i++) {
    let s = g[i];
    let h = v(e, r, s, m.children);
    !o && $isElementNode(n) && h && n.extractWithChild(s, r, "clone") && (o = !0);
  }
  if (o && !d) i.push(m);else if (Array.isArray(m.children)) for (let e = 0; e < m.children.length; e++) {
    let r = m.children[e];
    i.push(r);
  }
  return o;
}
function y(e, r) {
  let n = [];
  let i = $getRoot().getChildren();
  for (let s = 0; s < i.length; s++) v(e, r, i[s], n);
  return {
    namespace: e._config.namespace,
    nodes: n
  };
}
function b(e) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    let o = $parseSerializedNode(i);
    $isTextNode(o) && $addNodeStyle(o);
    r.push(o);
  }
  return r;
}
let O = null;
async function x(e, r, n) {
  if (null !== O) return !1;
  if (null !== r) return new Promise((i, s) => {
    e.update(() => {
      i(w(e, r, n));
    });
  });
  let i = e.getRootElement();
  let s = e._window?.document;
  let h = p(e._window);
  if (null === i || null === h) return !1;
  let d = s.createElement("span");
  d.style.cssText = "position: fixed; top: -1000px;";
  d.append(s.createTextNode("#"));
  i.append(d);
  let g = new Range();
  g.setStart(d, 0);
  g.setEnd(d, 1);
  h.removeAllRanges();
  h.addRange(g);
  return new Promise((r, i) => {
    let h = e.registerCommand(COPY_COMMAND, i => (objectKlassEquals(i, ClipboardEvent) && (h(), null !== O && (window.clearTimeout(O), O = null), r(w(e, i, n))), !0), COMMAND_PRIORITY_CRITICAL);
    O = window.setTimeout(() => {
      h();
      O = null;
      r(!1);
    }, 50);
    s.execCommand("copy");
    d.remove();
  });
}
function w(e, r, n) {
  if (void 0 === n) {
    let r = p(e._window);
    if (!r) return !1;
    let i = r.anchorNode;
    let s = r.focusNode;
    if (null !== i && null !== s && !isSelectionWithinEditor(e, i, s)) return !1;
    let o = $getSelection();
    if (null === o) return !1;
    n = _(o);
  }
  r.preventDefault();
  let i = r.clipboardData;
  return null !== i && (S(i, n), !0);
}
let k = [["text/html", function (e, r = $getSelection()) {
  null == r && h(166);
  return $isRangeSelection(r) && r.isCollapsed() || 0 === r.getNodes().length ? "" : $generateHtmlFromNodes(e, r);
}], ["application/x-lexical-editor", function (e, r = $getSelection()) {
  null == r && h(166);
  return $isRangeSelection(r) && r.isCollapsed() || 0 === r.getNodes().length ? null : JSON.stringify(y(e, r));
}]];
function _(e = $getSelection()) {
  let r = {
    "text/plain": e ? e.getTextContent() : ""
  };
  if (e) {
    let n = $getEditor();
    for (let [i, s] of k) {
      let o = s(n, e);
      null !== o && (r[i] = o);
    }
  }
  return r;
}
function S(e, r) {
  for (let n in r) {
    let i = r[n];
    void 0 !== i && e.setData(n, i);
  }
}
function E(e, r) {
  if (void 0 !== document.caretRangeFromPoint) {
    let n = document.caretRangeFromPoint(e, r);
    return null === n ? null : {
      node: n.startContainer,
      offset: n.startOffset
    };
  }
  if ("undefined" !== document.caretPositionFromPoint) {
    let n = document.caretPositionFromPoint(e, r);
    return null === n ? null : {
      node: n.offsetNode,
      offset: n.offset
    };
  }
  return null;
}
let A = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let C = A && "documentMode" in document ? document.documentMode : null;
let T = !(!A || !("InputEvent" in window) || C) && "getTargetRanges" in new window.InputEvent("input");
let I = A && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let P = A && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let R = A && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let M = A && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !R;
let D = createCommand("DRAG_DROP_PASTE_FILE");
export class QuoteNode extends ElementNode {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new QuoteNode(e.__key);
  }
  constructor(e) {
    super(e);
  }
  createDOM(e) {
    let r = document.createElement("blockquote");
    addClassNamesToElement(r, e.theme.quote);
    return r;
  }
  updateDOM(e, r) {
    return !1;
  }
  static importDOM() {
    return {
      blockquote: e => ({
        conversion: F,
        priority: 0
      })
    };
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    if (element && isHTMLElement(element)) {
      this.isEmpty() && element.append(document.createElement("br"));
      let e = this.getFormatType();
      element.style.textAlign = e;
      let n = this.getDirection();
      n && (element.dir = n);
    }
    return {
      element
    };
  }
  static importJSON(e) {
    let r = $createQuoteNode();
    r.setFormat(e.format);
    r.setIndent(e.indent);
    r.setDirection(e.direction);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "quote"
    };
  }
  insertNewAfter(e, r) {
    let n = $createParagraphNode();
    let i = this.getDirection();
    n.setDirection(i);
    this.insertAfter(n, r);
    return n;
  }
  collapseAtStart() {
    let e = $createParagraphNode();
    this.getChildren().forEach(r => e.append(r));
    this.replace(e);
    return !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
export function $createQuoteNode() {
  return $applyNodeReplacement(new QuoteNode());
}
export function $isQuoteNode(e) {
  return e instanceof QuoteNode;
}
export class HeadingNode extends ElementNode {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new HeadingNode(e.__tag, e.__key);
  }
  constructor(e, r) {
    super(r);
    this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  createDOM(e) {
    let r = this.__tag;
    let n = document.createElement(r);
    let i = e.theme.heading;
    if (void 0 !== i) {
      let e = i[r];
      addClassNamesToElement(n, e);
    }
    return n;
  }
  updateDOM(e, r) {
    return !1;
  }
  static importDOM() {
    return {
      h1: e => ({
        conversion: Z,
        priority: 0
      }),
      h2: e => ({
        conversion: Z,
        priority: 0
      }),
      h3: e => ({
        conversion: Z,
        priority: 0
      }),
      h4: e => ({
        conversion: Z,
        priority: 0
      }),
      h5: e => ({
        conversion: Z,
        priority: 0
      }),
      h6: e => ({
        conversion: Z,
        priority: 0
      }),
      p: e => {
        let r = e.firstChild;
        return null !== r && z(r) ? {
          conversion: () => ({
            node: null
          }),
          priority: 3
        } : null;
      },
      span: e => z(e) ? {
        conversion: e => ({
          node: $createHeadingNode("h1")
        }),
        priority: 3
      } : null
    };
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    if (element && isHTMLElement(element)) {
      this.isEmpty() && element.append(document.createElement("br"));
      let e = this.getFormatType();
      element.style.textAlign = e;
      let n = this.getDirection();
      n && (element.dir = n);
    }
    return {
      element
    };
  }
  static importJSON(e) {
    let r = $createHeadingNode(e.tag);
    r.setFormat(e.format);
    r.setIndent(e.indent);
    r.setDirection(e.direction);
    return r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      tag: this.getTag(),
      type: "heading",
      version: 1
    };
  }
  insertNewAfter(e, r = !0) {
    let n = e ? e.anchor.offset : 0;
    let i = this.getLastDescendant();
    let s = i && (!e || e.anchor.key !== i.getKey() || n !== i.getTextContentSize()) && e ? $createHeadingNode(this.getTag()) : $createParagraphNode();
    let o = this.getDirection();
    if (s.setDirection(o), this.insertAfter(s, r), 0 === n && !this.isEmpty() && e) {
      let e = $createParagraphNode();
      e.select();
      this.replace(e, !0);
    }
    return s;
  }
  collapseAtStart() {
    let e = this.isEmpty() ? $createParagraphNode() : $createHeadingNode(this.getTag());
    this.getChildren().forEach(r => e.append(r));
    this.replace(e);
    return !0;
  }
  extractWithChild() {
    return !0;
  }
}
function z(e) {
  return "span" === e.nodeName.toLowerCase() && "26pt" === e.style.fontSize;
}
function Z(e) {
  let r = e.nodeName.toLowerCase();
  let n = null;
  "h1" !== r && "h2" !== r && "h3" !== r && "h4" !== r && "h5" !== r && "h6" !== r || (n = $createHeadingNode(r), null !== e.style && n.setFormat(e.style.textAlign));
  return {
    node: n
  };
}
function F(e) {
  let r = $createQuoteNode();
  null !== e.style && r.setFormat(e.style.textAlign);
  return {
    node: r
  };
}
export function $createHeadingNode(e) {
  return $applyNodeReplacement(new HeadingNode(e));
}
export function $isHeadingNode(e) {
  return e instanceof HeadingNode;
}
function V(e) {
  let r = null;
  if (objectKlassEquals(e, DragEvent) ? r = e.dataTransfer : objectKlassEquals(e, ClipboardEvent) && (r = e.clipboardData), null === r) return [!1, [], !1];
  let n = r.types;
  let i = n.includes("Files");
  let s = n.includes("text/html") || n.includes("text/plain");
  return [i, Array.from(r.files), s];
}
function B(e) {
  let r = $getSelection();
  if (!$isRangeSelection(r)) return !1;
  let n = new Set();
  let i = r.getNodes();
  for (let r = 0; r < i.length; r++) {
    let s = i[r];
    let h = s.getKey();
    if (n.has(h)) continue;
    let d = $findMatchingParent(s, e => $isElementNode(e) && !e.isInline());
    if (null === d) continue;
    let p = d.getKey();
    d.canIndent() && !n.has(p) && (n.add(p), e(d));
  }
  return n.size > 0;
}
function q(e) {
  let r = $getNearestNodeFromDOMNode(e);
  return $isDecoratorNode(r);
}
export function registerRichText(e) {
  return mergeRegister(e.registerCommand(CLICK_COMMAND, e => {
    let r = $getSelection();
    return !!$isNodeSelection(r) && (r.clear(), !0);
  }, 0), e.registerCommand(DELETE_CHARACTER_COMMAND, e => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (r.deleteCharacter(e), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(DELETE_WORD_COMMAND, e => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (r.deleteWord(e), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(DELETE_LINE_COMMAND, e => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (r.deleteLine(e), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, r => {
    let n = $getSelection();
    if ("string" == typeof r) null !== n && n.insertText(r);else {
      if (null === n) return !1;
      let i = r.dataTransfer;
      if (null != i) g(i, n, e);else if ($isRangeSelection(n)) {
        let e = r.data;
        e && n.insertText(e);
        return !0;
      }
    }
    return !0;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(REMOVE_TEXT_COMMAND, () => {
    let e = $getSelection();
    return !!$isRangeSelection(e) && (e.removeText(), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(FORMAT_TEXT_COMMAND, e => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (r.formatText(e), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(FORMAT_ELEMENT_COMMAND, e => {
    let r = $getSelection();
    if (!$isRangeSelection(r) && !$isNodeSelection(r)) return !1;
    for (let n of r.getNodes()) {
      let r = $findMatchingParent(n, e => $isElementNode(e) && !e.isInline());
      null !== r && r.setFormat(e);
    }
    return !0;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(INSERT_LINE_BREAK_COMMAND, e => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (r.insertLineBreak(e), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(INSERT_PARAGRAPH_COMMAND, () => {
    let e = $getSelection();
    return !!$isRangeSelection(e) && (e.insertParagraph(), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(INSERT_TAB_COMMAND, () => ($insertNodes([$createTabNode()]), !0), COMMAND_PRIORITY_EDITOR), e.registerCommand(INDENT_CONTENT_COMMAND, () => B(e => {
    let r = e.getIndent();
    e.setIndent(r + 1);
  }), COMMAND_PRIORITY_EDITOR), e.registerCommand(OUTDENT_CONTENT_COMMAND, () => B(e => {
    let r = e.getIndent();
    r > 0 && e.setIndent(r - 1);
  }), COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_ARROW_UP_COMMAND, e => {
    let r = $getSelection();
    if ($isNodeSelection(r) && !q(e.target)) {
      let e = r.getNodes();
      if (e.length > 0) {
        e[0].selectPrevious();
        return !0;
      }
    } else if ($isRangeSelection(r)) {
      let n = $getAdjacentNode(r.focus, !0);
      if (!e.shiftKey && $isDecoratorNode(n) && !n.isIsolated() && !n.isInline()) {
        n.selectPrevious();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_ARROW_DOWN_COMMAND, e => {
    let r = $getSelection();
    if ($isNodeSelection(r)) {
      let e = r.getNodes();
      if (e.length > 0) {
        e[0].selectNext(0, 0);
        return !0;
      }
    } else if ($isRangeSelection(r)) {
      if (function (e) {
        let r = e.focus;
        return "root" === r.key && r.offset === $getRoot().getChildrenSize();
      }(r)) {
        e.preventDefault();
        return !0;
      }
      let n = $getAdjacentNode(r.focus, !1);
      if (!e.shiftKey && $isDecoratorNode(n) && !n.isIsolated() && !n.isInline()) {
        n.selectNext();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_ARROW_LEFT_COMMAND, e => {
    let r = $getSelection();
    if ($isNodeSelection(r)) {
      let n = r.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectPrevious();
        return !0;
      }
    }
    if (!$isRangeSelection(r)) return !1;
    if ($moveCaretSelection(r, !0)) {
      let n = e.shiftKey;
      e.preventDefault();
      $moveCharacter(r, n, !0);
      return !0;
    }
    return !1;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_ARROW_RIGHT_COMMAND, e => {
    let r = $getSelection();
    if ($isNodeSelection(r) && !q(e.target)) {
      let n = r.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectNext(0, 0);
        return !0;
      }
    }
    if (!$isRangeSelection(r)) return !1;
    let n = e.shiftKey;
    return !!$moveCaretSelection(r, !1) && (e.preventDefault(), $moveCharacter(r, n, !1), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_BACKSPACE_COMMAND, r => {
    if (q(r.target)) return !1;
    let n = $getSelection();
    if (!$isRangeSelection(n)) return !1;
    r.preventDefault();
    let {
      anchor
    } = n;
    let s = anchor.getNode();
    return n.isCollapsed() && 0 === anchor.offset && !$isRootNode(s) && $getNearestBlockElementAncestorOrThrow(s).getIndent() > 0 ? e.dispatchCommand(OUTDENT_CONTENT_COMMAND, void 0) : e.dispatchCommand(DELETE_CHARACTER_COMMAND, !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_DELETE_COMMAND, r => {
    if (q(r.target)) return !1;
    let n = $getSelection();
    return !!$isRangeSelection(n) && (r.preventDefault(), e.dispatchCommand(DELETE_CHARACTER_COMMAND, !1));
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand($$if, r => {
    let n = $getSelection();
    if (!$isRangeSelection(n)) return !1;
    if (null !== r) {
      if ((P || I || M) && T) return !1;
      if (r.preventDefault(), r.shiftKey) return e.dispatchCommand(INSERT_LINE_BREAK_COMMAND, !1);
    }
    return e.dispatchCommand(INSERT_PARAGRAPH_COMMAND, void 0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(KEY_ESCAPE_COMMAND, () => {
    let r = $getSelection();
    return !!$isRangeSelection(r) && (e.blur(), !0);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(DROP_COMMAND, r => {
    let [, n] = V(r);
    if (n.length > 0) {
      let i = E(r.clientX, r.clientY);
      if (null !== i) {
        let {
          offset,
          node
        } = i;
        let o = $getNearestNodeFromDOMNode(node);
        if (null !== o) {
          let e = $createRangeSelection();
          if ($isTextNode(o)) {
            e.anchor.set(o.getKey(), offset, "text");
            e.focus.set(o.getKey(), offset, "text");
          } else {
            let r = o.getParentOrThrow().getKey();
            let n = o.getIndexWithinParent() + 1;
            e.anchor.set(r, n, "element");
            e.focus.set(r, n, "element");
          }
          let n = $normalizeSelection(e);
          $setSelection(n);
        }
        e.dispatchCommand(D, n);
      }
      r.preventDefault();
      return !0;
    }
    let i = $getSelection();
    return !!$isRangeSelection(i);
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(DRAGSTART_COMMAND, e => {
    let [r] = V(e);
    let n = $getSelection();
    return !(r && !$isRangeSelection(n));
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(DRAGOVER_COMMAND, e => {
    let [r] = V(e);
    let n = $getSelection();
    if (r && !$isRangeSelection(n)) return !1;
    let i = E(e.clientX, e.clientY);
    if (null !== i) {
      let r = $getNearestNodeFromDOMNode(i.node);
      $isDecoratorNode(r) && e.preventDefault();
    }
    return !0;
  }, COMMAND_PRIORITY_EDITOR), e.registerCommand(SELECT_ALL_COMMAND, () => ($selectAll(), !0), COMMAND_PRIORITY_EDITOR), e.registerCommand(COPY_COMMAND, r => (x(e, objectKlassEquals(r, ClipboardEvent) ? r : null), !0), COMMAND_PRIORITY_EDITOR), e.registerCommand(CUT_COMMAND, r => (async function (e, r) {
    await x(r, objectKlassEquals(e, ClipboardEvent) ? e : null);
    r.update(() => {
      let e = $getSelection();
      $isRangeSelection(e) ? e.removeText() : $isNodeSelection(e) && e.getNodes().forEach(e => e.remove());
    });
  }(r, e), !0), COMMAND_PRIORITY_EDITOR), e.registerCommand(PASTE_COMMAND, r => {
    let [, n, i] = V(r);
    return n.length > 0 && !i ? (e.dispatchCommand(D, n), !0) : !isSelectionCapturedInDecoratorInput(r.target) && null !== $getSelection() && (function (e, r) {
      e.preventDefault();
      r.update(() => {
        let n = $getSelection();
        let i = objectKlassEquals(e, InputEvent) || objectKlassEquals(e, KeyboardEvent) ? null : e.clipboardData;
        null != i && null !== n && g(i, n, r);
      }, {
        tag: "paste"
      });
    }(r, e), !0);
  }, COMMAND_PRIORITY_EDITOR));
}
export const fi = $createHeadingNode;
export const xi = $createQuoteNode;
export const Pi = $isHeadingNode;
export const jd = $isQuoteNode;
export const jL = HeadingNode;
export const dJ = QuoteNode;
export const ZI = registerRichText;