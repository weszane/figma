import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useState, useRef, useCallback } from "react";
import { ServiceCategories } from "../905/165054";
import { createHeadlessEditor } from "../vendor/24766";
import { UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, STRIKETHROUGH, ITALIC_STAR, ITALIC_UNDERSCORE, CODE, HEADING, INLINE_CODE } from "../vendor/693164";
import { x as _$$x } from "../vendor/952653";
import { n as _$$n } from "../vendor/110313";
import { a as _$$a } from "../vendor/683966";
import { A as _$$A } from "../vendor/211731";
import { G as _$$G } from "../vendor/947080";
import { W as _$$W } from "../vendor/491600";
import { Q } from "../vendor/898216";
import { E as _$$E } from "../vendor/464923";
import { D as _$$D2 } from "../vendor/212109";
import { $ } from "../vendor/909072";
import { getFeatureFlags } from "../905/601108";
import y from "classnames";
import { zN } from "../905/182598";
import { reportError } from "../905/11";
import { lexicalNodes, generateSanitizedHtmlFromLexicalEditor, sanitizeAndNormalizeHtmlToDocument } from "../figma_app/9619";
import { convertHtmlToEditorState, HtmlToLexicalEffect } from "../905/122084";
import { D as _$$D4 } from "../905/819578";
import { A as _$$A2 } from "../905/751427";
import { A as _$$A3 } from "../905/751612";
import { A as _$$A4 } from "../905/388815";
import { ToolbarPlugin } from "../905/6199";
import O, { link, linkReadOnly, listItem, listOl, listUl, textBold, textItalic, textStrikethrough, inlineCode, paragraph, heading, codeBlock, lexicalHtmlOnly } from "../figma_app/227510";
var b = y;
let R = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
export function $$L0({
  value: e,
  valueFormat: t,
  onSave: r,
  themeOverride: E,
  lexicalContentClassName: y,
  namespace: b,
  placeholder: T,
  innerRef: L,
  plugins: P = [],
  hasToolbar: D = !1,
  isEditable: k = !0,
  anchorElemOverride: M,
  autoFocus: F = !0,
  ariaLabelledBy: j
}) {
  let U = {
    link: k ? link : linkReadOnly,
    list: {
      listitem: listItem,
      ol: listOl,
      ul: listUl
    },
    text: {
      bold: textBold,
      italic: textItalic,
      strikethrough: textStrikethrough,
      code: inlineCode
    },
    paragraph: paragraph,
    heading: {
      h1: heading,
      h2: heading
    },
    code: codeBlock,
    ...E
  };
  let B = useMemo(() => {
    if ("lexical" === t || !e) return R;
    let r = createHeadlessEditor({
      nodes: lexicalNodes,
      onError: t => {
        console.error(t);
        reportError(ServiceCategories.EXTENSIBILITY, t, {
          extra: {
            htmlString: e
          }
        });
      }
    });
    return convertHtmlToEditorState(e, r, "json");
  }, [t, e]);
  let G = {
    namespace: b,
    onError(r) {
      console.error(r);
      reportError(ServiceCategories.EXTENSIBILITY, r, {
        extra: {
          namespace: b,
          editorInput: "lexical" === t ? e || R : B,
          valueFormat: t
        }
      });
    },
    theme: U,
    nodes: lexicalNodes,
    editorState: "lexical" === t ? e || R : B,
    editable: k
  };
  let [V, H] = useState(!1);
  let z = useRef(null);
  let W = useRef(null);
  let K = useCallback(e => {
    null !== e && (L && (L.current = e), W.current = e);
  }, [L]);
  let Y = M || z.current;
  return jsxs(_$$n, {
    initialConfig: G,
    children: [jsxs("div", {
      ref: z,
      className: "x1n2onr6",
      children: [jsx($, {
        contentEditable: jsx(_$$a, {
          className: y,
          ref: K,
          ariaLabelledBy: j
        }),
        placeholder: T,
        ErrorBoundary: _$$A
      }), D && jsx(ToolbarPlugin, {
        setIsLinkEditMode: H
      }), k && Y && W.current && jsx(_$$A3, {
        anchorElem: Y,
        contentElem: W.current,
        isLinkEditMode: V,
        setIsLinkEditMode: H
      })]
    }), jsx(_$$G, {}), jsx(Q, {}), jsx(_$$E, {
      transformers: [UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, STRIKETHROUGH, ITALIC_STAR, ITALIC_UNDERSCORE, CODE, HEADING, INLINE_CODE]
    }), "lexical" === t && jsx(_$$D4, {
      value: e
    }), !k && "html" === t && jsx(HtmlToLexicalEffect, {
      htmlString: e
    }), r && jsx(_$$D2, {
      onChange: (e, t, n) => {
        n.has("focus") || e.read(() => {
          r({
            html: generateSanitizedHtmlFromLexicalEditor(t),
            lexical: JSON.stringify(e.toJSON())
          });
        });
      },
      ignoreSelectionChange: !0
    }), jsx(_$$A2, {}), F && jsx(_$$x, {}), jsx(_$$W, {}), jsx(_$$A4, {}), ...P]
  });
}
function P({
  value: e,
  themeOverride: t,
  lexicalContentClassName: r,
  innerRef: a
}) {
  let s = useMemo(() => {
    let r = sanitizeAndNormalizeHtmlToDocument(e);
    r.querySelectorAll("p, h1, h2, code, a, ul, ol, li, strong, em, s, pre").forEach(e => {
      let r = function (e, t) {
        let r = {
          ...O,
          ...t
        };
        switch (e) {
          case "H1":
            return t?.heading?.h1 || heading;
          case "H2":
            return t?.heading?.h2 || heading;
          case "P":
            return r.paragraph;
          case "CODE":
            return r.inlineCode;
          case "A":
            return r.linkReadOnly;
          case "UL":
            return r.listUl;
          case "OL":
            return r.listOl;
          case "LI":
            return r.listItem;
          case "STRONG":
            return r.textBold;
          case "EM":
            return r.textItalic;
          case "S":
            return r.textStrikethrough;
          case "PRE":
            return r.codeBlock;
          default:
            return "";
        }
      }(e.tagName, t);
      r && e.classList.add(r);
    });
    return r.body.innerHTML;
  }, [e, t]);
  return jsx("div", {
    className: b()(r, lexicalHtmlOnly),
    ref: a,
    dangerouslySetInnerHTML: {
      __html: s
    }
  });
}
export function $$D1({
  value: e,
  valueFormat: t,
  themeOverride: r,
  lexicalContentClassName: i,
  namespace: a,
  innerRef: s,
  renderHtmlOnly: o
}) {
  let l = zN(r);
  return "html" === t && o && getFeatureFlags().ext_lexical_read_only_in_html ? jsx(P, {
    value: e,
    themeOverride: l,
    lexicalContentClassName: i,
    innerRef: s
  }) : jsx($$L0, {
    value: e,
    valueFormat: t,
    isEditable: !1,
    lexicalContentClassName: i,
    themeOverride: l,
    namespace: a,
    innerRef: s
  });
}
export const A = $$L0;
export const C = $$D1;
