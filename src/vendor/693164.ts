import { $isParagraphNode, $isTextNode, $isLineBreakNode, $isElementNode, $isDecoratorNode, $isRootOrShadowRoot, $getSelection, $createRangeSelection, $setSelection, $isRangeSelection, $createLineBreakNode, $createTextNode, $getRoot, $createParagraphNode } from "../vendor/408361";
import { $createListItemNode, $isListNode, $createListNode, $isListItemNode, ListNode, ListItemNode } from "../vendor/231521";
import { HeadingNode, $isHeadingNode, $createHeadingNode, QuoteNode, $isQuoteNode, $createQuoteNode } from "../vendor/871930";
import { $findMatchingParent } from "../vendor/425002";
import { $isCodeNode, CodeNode, $createCodeNode } from "../vendor/858260";
import { LinkNode, $isLinkNode, $createLinkNode } from "../vendor/491721";
function l(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r);
    e && (n[e] ? n[e].push(r) : n[e] = [r]);
  }
  return n;
}
function u(e) {
  let t = l(e, e => e.type);
  return {
    element: t.element || [],
    multilineElement: t["multiline-element"] || [],
    textFormat: t["text-format"] || [],
    textMatch: t["text-match"] || []
  };
}
let g = /[!-/:-@[-`{-~\s]/;
let c = /^\s{0,3}$/;
function f(e) {
  if (!$isParagraphNode(e)) return !1;
  let t = e.getFirstChild();
  return null == t || 1 === e.getChildrenSize() && $isTextNode(t) && c.test(t.getTextContent());
}
function d(e, t, n) {
  let i = [];
  let A = e.getChildren();
  t: for (let e of A) {
    for (let r of n) {
      if (!r.$$export) continue;
      let A = r.$$export(e, e => d(e, t, n), (e, n) => h(e, n, t));
      if (null != A) {
        i.push(A);
        continue t;
      }
    }
    $isLineBreakNode(e) ? i.push("\n") : $isTextNode(e) ? i.push(h(e, e.getTextContent(), t)) : $isElementNode(e) ? i.push(d(e, t, n)) : $isDecoratorNode(e) && i.push(e.getTextContent());
  }
  return i.join("");
}
function h(e, t, n) {
  let r = t.trim();
  let i = r;
  let A = new Set();
  for (let t of n) {
    let n = t.format[0];
    let r = t.tag;
    C(e, n) && !A.has(n) && (A.add(n), C(p(e, !0), n) || (i = r + i), C(p(e, !1), n) || (i += r));
  }
  return t.replace(r, () => i);
}
function p(e, t) {
  let n = t ? e.getPreviousSibling() : e.getNextSibling();
  if (!n) {
    let r = e.getParentOrThrow();
    r.isInline() && (n = t ? r.getPreviousSibling() : r.getNextSibling());
  }
  for (; n;) {
    if ($isElementNode(n)) {
      if (!n.isInline()) break;
      let e = t ? n.getLastDescendant() : n.getFirstDescendant();
      if ($isTextNode(e)) return e;
      n = t ? n.getPreviousSibling() : n.getNextSibling();
    }
    if ($isTextNode(n)) return n;
    if (!$isElementNode(n)) break;
  }
  return null;
}
function C(e, t) {
  return $isTextNode(e) && e.hasFormat(t);
}
let I = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let E = I && "documentMode" in document ? document.documentMode : null;
I && "InputEvent" in window && !E && new window.InputEvent("input");
let B = I && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let m = I && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let y = I && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let _ = I && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !y;
var Q = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let t = new URLSearchParams();
  t.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) t.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function D(e, t, n) {
  let r = n.length;
  for (let i = t; i >= r; i--) {
    let t = i - r;
    if (w(e, t, n, 0, r) && " " !== e[t + r]) return t;
  }
  return -1;
}
function w(e, t, n, r, i) {
  for (let A = 0; A < i; A++) if (e[t + A] !== n[r + A]) return !1;
  return !0;
}
export function registerMarkdownShortcuts(e, t = TRANSFORMERS) {
  let n = u(t);
  let i = l(n.textFormat, ({
    tag: e
  }) => e[e.length - 1]);
  let A = l(n.textMatch, ({
    trigger: e
  }) => e);
  for (let n of t) {
    let t = n.type;
    if ("element" === t || "text-match" === t || "multiline-element" === t) for (let t of n.dependencies) e.hasNode(t) || Q(173, t.getType());
  }
  let o = (e, t, o) => {
    (function (e, t, n, i) {
      let A = e.getParent();
      if (!$isRootOrShadowRoot(A) || e.getFirstChild() !== t) return !1;
      let o = t.getTextContent();
      if (" " !== o[n - 1]) return !1;
      for (let {
        regExp,
        replace
      } of i) {
        let i = o.match(regExp);
        if (i && i[0].length === (i[0].endsWith(" ") ? n : n - 1)) {
          let r = t.getNextSiblings();
          let [o, s] = t.splitText(n);
          if (o.remove(), !1 !== replace(e, s ? [s, ...r] : r, i, !1)) return !0;
        }
      }
      return !1;
    })(e, t, o, n.element) || function (e, t, n, i) {
      let A = e.getParent();
      if (!$isRootOrShadowRoot(A) || e.getFirstChild() !== t) return !1;
      let o = t.getTextContent();
      if (" " !== o[n - 1]) return !1;
      for (let {
        regExpStart,
        replace,
        regExpEnd
      } of i) {
        if (regExpEnd && !("optional" in regExpEnd) || regExpEnd && "optional" in regExpEnd && !regExpEnd.optional) continue;
        let i = o.match(regExpStart);
        if (i && i[0].length === (i[0].endsWith(" ") ? n : n - 1)) {
          let r = t.getNextSiblings();
          let [o, s] = t.splitText(n);
          if (o.remove(), !1 !== replace(e, s ? [s, ...r] : r, i, null, null, !1)) return !0;
        }
      }
      return !1;
    }(e, t, o, n.multilineElement) || function (e, t, n) {
      let r = e.getTextContent();
      let i = n[r[t - 1]];
      if (null == i) return !1;
      for (let n of (t < r.length && (r = r.slice(0, t)), i)) {
        let t;
        if (!n.replace || !n.regExp) continue;
        let i = r.match(n.regExp);
        if (null === i) continue;
        let A = i.index || 0;
        let o = A + i[0].length;
        0 === A ? [t] = e.splitText(o) : [, t] = e.splitText(A, o);
        t.selectNext(0, 0);
        n.replace(t, i);
        return !0;
      }
      return !1;
    }(t, o, A) || function (e, t, n) {
      let i = e.getTextContent();
      let A = t - 1;
      let o = i[A];
      let s = n[o];
      if (s) for (let t of s) {
        let {
          tag
        } = t;
        let s = tag.length;
        let a = A - s + 1;
        if (s > 1 && !w(i, a, tag, 0, s) || " " === i[a - 1]) continue;
        let l = i[A + 1];
        if (!1 === t.intraword && l && !g.test(l)) continue;
        let u = e;
        let c = D(i, a, tag);
        let f = u;
        for (; c < 0 && (f = f.getPreviousSibling()) && !$isLineBreakNode(f);) if ($isTextNode(f)) {
          let e = f.getTextContent();
          u = f;
          c = D(e, e.length, tag);
        }
        if (c < 0 || u === e && c + s === a) continue;
        let d = u.getTextContent();
        if (c > 0 && d[c - 1] === o) continue;
        let h = d[c - 1];
        if (!1 === t.intraword && h && !g.test(h)) continue;
        let p = e.getTextContent();
        let C = p.slice(0, a) + p.slice(A + 1);
        e.setTextContent(C);
        let I = u === e ? C : d;
        u.setTextContent(I.slice(0, c) + I.slice(c + s));
        let E = $getSelection();
        let B = $createRangeSelection();
        $setSelection(B);
        let m = A - s * (u === e ? 2 : 1) + 1;
        for (let n of (B.anchor.set(u.__key, c, "text"), B.focus.set(e.__key, m, "text"), t.format)) B.hasFormat(n) || B.formatText(n);
        for (let e of (B.anchor.set(B.focus.key, B.focus.offset, B.focus.type), t.format)) B.hasFormat(e) && B.toggleFormat(e);
        $isRangeSelection(E) && (B.format = E.format);
        return !0;
      }
    }(t, o, i);
  };
  return e.registerUpdateListener(({
    tags: t,
    dirtyLeaves: n,
    editorState: i,
    prevEditorState: A
  }) => {
    if (t.has("collaboration") || t.has("historic") || e.isComposing()) return;
    let a = i.read($getSelection);
    let l = A.read($getSelection);
    if (!$isRangeSelection(l) || !$isRangeSelection(a) || !a.isCollapsed()) return;
    let u = a.anchor.key;
    let g = a.anchor.offset;
    let c = i._nodeMap.get(u);
    $isTextNode(c) && n.has(u) && (1 === g || !(g > l.anchor.offset + 1)) && e.update(() => {
      if (c.hasFormat("code")) return;
      let e = c.getParent();
      null === e || $isCodeNode(e) || o(e, c, a.anchor.offset);
    });
  });
}
let v = /^(\s*)(\d{1,})\.\s/;
let k = /^(\s*)[-*+]\s/;
let x = /^(\s*)(?:-\s)?\s?(\[(\s|x)?\])\s/i;
let S = /^(#{1,6})\s/;
let F = /^>\s/;
let N = /^[ \t]*```(\w+)?/;
let T = /[ \t]*```$/;
let L = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/;
let R = /^(?:\|)(.+)(?:\|)\s?$/;
let M = /^(\| ?:?-*:? ?)+\|\s?$/;
let O = e => (t, n, r) => {
  let i = e(r);
  i.append(...n);
  t.replace(i);
  i.select(0, 0);
};
let G = e => (t, n, r) => {
  let A = t.getPreviousSibling();
  let o = t.getNextSibling();
  let s = $createListItemNode("check" === e ? "x" === r[3] : void 0);
  if ($isListNode(o) && o.getListType() === e) {
    let e = o.getFirstChild();
    null !== e ? e.insertBefore(s) : o.append(s);
    t.remove();
  } else if ($isListNode(A) && A.getListType() === e) {
    A.append(s);
    t.remove();
  } else {
    let n = $createListNode(e, "number" === e ? Number(r[2]) : void 0);
    n.append(s);
    t.replace(n);
  }
  s.append(...n);
  s.select(0, 0);
  let a = function (e) {
    let t = e.match(/\t/g);
    let n = e.match(/ /g);
    let r = 0;
    t && (r += t.length);
    n && (r += Math.floor(n.length / 4));
    return r;
  }(r[1]);
  a && s.setIndent(a);
};
let P = (e, t, n) => {
  let r = [];
  let A = e.getChildren();
  let o = 0;
  for (let s of A) if ($isListItemNode(s)) {
    if (1 === s.getChildrenSize()) {
      let e = s.getFirstChild();
      if ($isListNode(e)) {
        r.push(P(e, t, n + 1));
        continue;
      }
    }
    let A = " ".repeat(4 * n);
    let a = e.getListType();
    let l = "number" === a ? `${e.getStart() + o}. ` : "check" === a ? `- [${s.getChecked() ? "x" : " "}] ` : "- ";
    r.push(A + l + t(s));
    o++;
  }
  return r.join("\n");
};
let HEADING = {
  dependencies: [HeadingNode],
  export: (e, t) => {
    if (!$isHeadingNode(e)) return null;
    let n = Number(e.getTag().slice(1));
    return "#".repeat(n) + " " + t(e);
  },
  regExp: S,
  replace: O(e => {
    let t = "h" + e[1].length;
    return $createHeadingNode(t);
  }),
  type: "element"
};
let QUOTE = {
  dependencies: [QuoteNode],
  export: (e, t) => {
    if (!$isQuoteNode(e)) return null;
    let n = t(e).split("\n");
    let r = [];
    for (let e of n) r.push("> " + e);
    return r.join("\n");
  },
  regExp: F,
  replace: (e, t, n, i) => {
    if (i) {
      let n = e.getPreviousSibling();
      if ($isQuoteNode(n)) {
        n.splice(n.getChildrenSize(), 0, [$createLineBreakNode(), ...t]);
        n.select(0, 0);
        return void e.remove();
      }
    }
    let o = $createQuoteNode();
    o.append(...t);
    e.replace(o);
    o.select(0, 0);
  },
  type: "element"
};
let CODE = {
  dependencies: [CodeNode],
  export: e => {
    if (!$isCodeNode(e)) return null;
    let t = e.getTextContent();
    return "```" + (e.getLanguage() || "") + (t ? "\n" + t : "") + "\n```";
  },
  regExpEnd: {
    optional: !0,
    regExp: T
  },
  regExpStart: N,
  replace: (e, t, n, i, A, o) => {
    let a;
    let l;
    if (!t && A) {
      if (1 === A.length) i ? (a = $createCodeNode(), l = n[1] + A[0]) : (a = $createCodeNode(n[1]), l = A[0].startsWith(" ") ? A[0].slice(1) : A[0]);else {
        if (a = $createCodeNode(n[1]), 0 === A[0].trim().length) for (; A.length > 0 && !A[0].length;) A.shift();else A[0] = A[0].startsWith(" ") ? A[0].slice(1) : A[0];
        for (; A.length > 0 && !A[A.length - 1].length;) A.pop();
        l = A.join("\n");
      }
      let t = $createTextNode(l);
      a.append(t);
      e.append(a);
    } else t && O(e => $createCodeNode(e ? e[1] : void 0))(e, t, n, o);
  },
  type: "multiline-element"
};
let UNORDERED_LIST = {
  dependencies: [ListNode, ListItemNode],
  export: (e, t) => $isListNode(e) ? P(e, t, 0) : null,
  regExp: k,
  replace: G("bullet"),
  type: "element"
};
ListNode;
ListItemNode;
G("check");
let ORDERED_LIST = {
  dependencies: [ListNode, ListItemNode],
  export: (e, t) => $isListNode(e) ? P(e, t, 0) : null,
  regExp: v,
  replace: G("number"),
  type: "element"
};
let INLINE_CODE = {
  format: ["code"],
  tag: "`",
  type: "text-format"
};
let BOLD_ITALIC_STAR = {
  format: ["bold", "italic"],
  tag: "***",
  type: "text-format"
};
let BOLD_ITALIC_UNDERSCORE = {
  format: ["bold", "italic"],
  intraword: !1,
  tag: "___",
  type: "text-format"
};
let BOLD_STAR = {
  format: ["bold"],
  tag: "**",
  type: "text-format"
};
let BOLD_UNDERSCORE = {
  format: ["bold"],
  intraword: !1,
  tag: "__",
  type: "text-format"
};
let STRIKETHROUGH = {
  format: ["strikethrough"],
  tag: "~~",
  type: "text-format"
};
let ITALIC_STAR = {
  format: ["italic"],
  tag: "*",
  type: "text-format"
};
let ITALIC_UNDERSCORE = {
  format: ["italic"],
  intraword: !1,
  tag: "_",
  type: "text-format"
};
let LINK = {
  dependencies: [LinkNode],
  export: (e, t, n) => {
    if (!$isLinkNode(e)) return null;
    let i = e.getTitle();
    let A = i ? `[${e.getTextContent()}](${e.getURL()} "${i}")` : `[${e.getTextContent()}](${e.getURL()})`;
    let o = e.getFirstChild();
    return 1 === e.getChildrenSize() && $isTextNode(o) ? n(o, A) : A;
  },
  importRegExp: /(?:\[([^[]+)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/,
  regExp: /(?:\[([^[]+)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/,
  replace: (e, t) => {
    let [, n, i, A] = t;
    let o = $createLinkNode(i, {
      title: A
    });
    let s = $createTextNode(n);
    s.setFormat(e.getFormat());
    o.append(s);
    e.replace(o);
  },
  trigger: ")",
  type: "text-match"
};
let TRANSFORMERS = [HEADING, QUOTE, UNORDERED_LIST, ORDERED_LIST, CODE, INLINE_CODE, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, {
  format: ["highlight"],
  tag: "==",
  type: "text-format"
}, ITALIC_STAR, ITALIC_UNDERSCORE, STRIKETHROUGH, LINK];
export function $convertFromMarkdownString(e, t = TRANSFORMERS, n, s = !1, a = !1) {
  let l = s ? e : function (e, t = !1) {
    let n = e.split("\n");
    let r = !1;
    let i = [];
    for (let e = 0; e < n.length; e++) {
      let A = n[e];
      let o = i[i.length - 1];
      L.test(A) ? i.push(A) : N.test(A) || T.test(A) ? (r = !r, i.push(A)) : r || "" === A || "" === o || !o || S.test(o) || S.test(A) || F.test(A) || v.test(A) || k.test(A) || x.test(A) || R.test(A) || M.test(A) || !t ? i.push(A) : i[i.length - 1] = o + A;
    }
    return i.join("\n");
  }(e, a);
  return function (e, t = !1) {
    let n = u(e);
    let s = function (e) {
      let t = {};
      let n = {};
      let r = [];
      for (let i of e) {
        let {
          tag
        } = i;
        t[tag] = i;
        let A = tag.replace(/(\*|\^|\+)/g, "\\$1");
        r.push(A);
        n[tag] = B || m || _ ? RegExp(`(${A})(?![${A}\\s])(.*?[^${A}\\s])${A}(?!${A})`) : RegExp(`(?<![\\\\${A}])(${A})((\\\\${A})?.*?[^${A}\\s](\\\\${A})?)((?<!\\\\)|(?<=\\\\\\\\))(${A})(?![\\\\${A}])`);
      }
      return {
        fullMatchRegExpByTag: n,
        openTagsRegExp: RegExp((B || m || _ ? "" : "(?<![\\\\])") + "(" + r.join("|") + ")", "g"),
        transformersByTag: t
      };
    }(n.textFormat);
    return (e, a) => {
      let l = e.split("\n");
      let u = l.length;
      let c = a || $getRoot();
      c.clear();
      for (let e = 0; e < u; e++) {
        let t = l[e];
        let [a, u] = function (e, t, n, r) {
          for (let {
            regExpStart,
            regExpEnd,
            replace
          } of n) {
            let n = e[t].match(regExpStart);
            if (!n) continue;
            let s = "object" == typeof regExpEnd && "regExp" in regExpEnd ? regExpEnd.regExp : regExpEnd;
            let a = regExpEnd && "object" == typeof regExpEnd && "optional" in regExpEnd ? regExpEnd.optional : !regExpEnd;
            let l = t;
            let u = e.length;
            for (; l < u;) {
              let i = s ? e[l].match(s) : null;
              if (!i && (!a || a && l < u - 1) || i && t === l && i.index === n.index) {
                l++;
                continue;
              }
              let A = [];
              if (i && t === l) A.push(e[t].slice(n[0].length, -i[0].length));else for (let r = t; r <= l; r++) if (r === t) {
                let t = e[r].slice(n[0].length);
                A.push(t);
              } else if (r === l && i) {
                let t = e[r].slice(0, -i[0].length);
                A.push(t);
              } else A.push(e[r]);
              if (!1 !== replace(r, null, n, i, A, !0)) return [!0, l];
              break;
            }
          }
          return [!1, t];
        }(l, e, n.multilineElement, c);
        a ? e = u : function (e, t, n, s, a) {
          let l = $createTextNode(e);
          let u = $createParagraphNode();
          for (let {
            regExp,
            replace
          } of (u.append(l), t.append(u), n)) {
            let t = e.match(regExp);
            if (t && (l.setTextContent(e.slice(t[0].length)), !1 !== replace(u, [l], t, !0))) break;
          }
          if (function e(t, n, r) {
            let i;
            let A;
            let o;
            let s = t.getTextContent();
            let a = function (e, t) {
              let n = e.match(t.openTagsRegExp);
              if (null == n) return null;
              for (let r of n) {
                let n = r.replace(/^\s/, "");
                let i = t.fullMatchRegExpByTag[n];
                if (null == i) continue;
                let A = e.match(i);
                let o = t.transformersByTag[n];
                if (null != A && null != o) {
                  if (!1 !== o.intraword) return A;
                  let {
                    index = 0
                  } = A;
                  let n = e[index - 1];
                  let r = e[index + A[0].length];
                  if ((!n || g.test(n)) && (!r || g.test(r))) return A;
                }
              }
              return null;
            }(s, n);
            if (!a) return void function e(t, n) {
              let r = t;
              t: for (; r;) {
                for (let t of n) {
                  let i;
                  let A;
                  if (!t.replace || !t.importRegExp) continue;
                  let o = r.getTextContent().match(t.importRegExp);
                  if (!o) continue;
                  let s = o.index || 0;
                  let a = s + o[0].length;
                  0 === s ? [i, r] = r.splitText(a) : [, i, A] = r.splitText(s, a);
                  A && e(A, n);
                  t.replace(i, o);
                  continue t;
                }
                break;
              }
            }(t, r);
            if (a[0] === s) i = t;else {
              let e = a.index || 0;
              let n = e + a[0].length;
              0 === e ? [i, A] = t.splitText(n) : [o, i, A] = t.splitText(e, n);
            }
            i.setTextContent(a[2]);
            let l = n.transformersByTag[a[1]];
            if (l) for (let e of l.format) i.hasFormat(e) || i.toggleFormat(e);
            i.hasFormat("code") || e(i, n, r);
            o && e(o, n, r);
            A && e(A, n, r);
          }(l, s, a), u.isAttached() && e.length > 0) {
            let e = u.getPreviousSibling();
            if ($isParagraphNode(e) || $isQuoteNode(e) || $isListNode(e)) {
              let t = e;
              if ($isListNode(e)) {
                let n = e.getLastDescendant();
                t = null == n ? null : $findMatchingParent(n, $isListItemNode);
              }
              null != t && t.getTextContentSize() > 0 && (t.splice(t.getChildrenSize(), 0, [$createLineBreakNode(), ...u.getChildren()]), u.remove());
            }
          }
        }(t, c, n.element, s, n.textMatch);
      }
      for (let e of c.getChildren()) !t && f(e) && c.getChildrenSize() > 1 && e.remove();
      null !== $getSelection() && c.selectStart();
    };
  }(t, s)(l, n);
}
export function $convertToMarkdownString(e = TRANSFORMERS, t, n = !1) {
  return function (e, t = !1) {
    let n = u(e);
    let i = [...n.multilineElement, ...n.element];
    let A = !t;
    let o = n.textFormat.filter(e => 1 === e.format.length);
    return e => {
      let t = [];
      let s = (e || $getRoot()).getChildren();
      for (let e = 0; e < s.length; e++) {
        let a = s[e];
        let l = function (e, t, n, i) {
          for (let r of t) {
            if (!r.$$export) continue;
            let t = r.$$export(e, e => d(e, n, i));
            if (null != t) return t;
          }
          return $isElementNode(e) ? d(e, n, i) : $isDecoratorNode(e) ? e.getTextContent() : null;
        }(a, i, o, n.textMatch);
        null != l && t.push(A && e > 0 && !f(a) && !f(s[e - 1]) ? "\n".concat(l) : l);
      }
      return t.join("\n");
    };
  }(e, n)(t);
}
export const Eg = ITALIC_STAR;
export const NB = ORDERED_LIST;
export const Pi = BOLD_UNDERSCORE;
export const Rm = TRANSFORMERS;
export const Sq = CODE;
export const TB = HEADING;
export const Up = INLINE_CODE;
export const WY = STRIKETHROUGH;
export const Wn = $convertFromMarkdownString;
export const bk = $convertToMarkdownString;
export const d7 = BOLD_STAR;
export const eA = BOLD_ITALIC_STAR;
export const gW = ITALIC_UNDERSCORE;
export const gb = BOLD_ITALIC_UNDERSCORE;
export const iM = registerMarkdownShortcuts;
export const jA = QUOTE;
export const mK = UNORDERED_LIST;
export const ps = LINK;