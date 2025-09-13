import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { TOGGLE_LINK_COMMAND, $isLinkNode } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister, $findMatchingParent } from "../vendor/425002";
import { createCommand, $getSelection, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW, $setSelection, KEY_MODIFIER_COMMAND, $isRangeSelection, COMMAND_PRIORITY_HIGH, COMMAND_PRIORITY_CRITICAL, CLICK_COMMAND } from "lexical";
import { RK } from "../figma_app/815170";
import { lQ } from "../905/934246";
import { Point } from "../905/736624";
import { c as _$$c } from "../905/196462";
import { normalizeUrl, getRelevantSelectionRange, getRelativePosition, isSelectionWithinLink, getSelectionLinkUrl, getRelevantSelectionNode } from "../905/999278";
import { LinkPrimitive } from "../figma_app/496441";
import { ButtonPrimitive } from "../905/632989";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { ln, bl, Ae } from "../figma_app/12182";
import { A as _$$A } from "../svg/690738";
function I({
  url: e,
  onEditButtonClick: t
}) {
  let i = useMemo(() => {
    try {
      let t = new URL(e);
      let i = t.host.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/, "");
      let r = t.pathname + t.search + t.hash;
      return jsxs(Fragment, {
        children: [jsxs("span", {
          className: ln,
          children: [getI18nString("hyperlink.prefix.open"), " "]
        }), jsx("div", {
          className: bl,
          children: i
        }), r && "/" !== r && jsx("div", {
          className: Ae,
          children: r
        })]
      });
    } catch (t) {
      return jsx(Fragment, {
        children: jsxs("span", {
          className: ln,
          children: [getI18nString("hyperlink.prefix.open"), " ", e]
        })
      });
    }
  }, [e]);
  return jsx("div", {
    className: "x10l6tqk xqtp20y x8v75bx",
    children: jsxs("div", {
      className: "xon4yw5 xgpcbez x1n2onr6 xn3vecc x1toy1gi x1fgtraw x19y5rnk x78zum5 x1cpjm7i x1hmns74 xgdch9p x16l0ur4 xy5mcqj xqoihek xrvkz08 x1rzapy9 x1s928wv x1j6awrg x16v8oms xrr4ghg x1ox9k1u x73fhqi x1fbm2o4",
      children: [jsx(SvgComponent, {
        svg: _$$A,
        className: "xamitd3 x1hdptxu xd8780z x15yihhk"
      }), jsx(LinkPrimitive, {
        newTab: !0,
        href: normalizeUrl(e),
        className: "xc26acl x1ypdohk x1iyjqo2 xuxw1ft",
        children: i
      }), jsx(ButtonPrimitive, {
        onClick: t,
        className: "x18tqr4w xet2fuk x11ajrs9 x6xwguf xt0e3qv x19y5rnk x1kax57l xezivpi",
        children: renderI18nText("hyperlink.edit")
      })]
    })
  });
}
let E = createCommand();
function x({
  editor: e,
  isLink: t,
  setIsLink: i,
  anchorElem: a,
  contentElem: s,
  isLinkEditMode: l,
  setIsLinkEditMode: u
}) {
  let f = useRef(null);
  let _ = useRef(null);
  let A = useRef(null);
  let [y, b] = useState("");
  let [v, x] = useState("");
  let S = useCallback(() => {
    if (!f.current || !e.isEditable()) return;
    let t = getRelevantSelectionRange(e, _.current);
    if (!t) return;
    _.current = t.cloneRange();
    let {
      x,
      y,
      offScreen
    } = getRelativePosition(t, a);
    offScreen ? f.current.style.visibility = "hidden" : f.current.style.visibility = "visible";
    f.current.style.left = `${x}px`;
    f.current.style.top = `${y}px`;
  }, [a, e]);
  let w = useCallback(t => {
    x("");
    b("");
    u(!1);
    i(!1);
    e.dispatchCommand(E, {
      selection: t,
      url: null
    });
  }, [e, x, i, u, b]);
  let C = useCallback(t => {
    if (!v) {
      w(t);
      return;
    }
    let i = normalizeUrl(v);
    e.dispatchCommand(E, {
      selection: t,
      url: i
    });
    u(!1);
    b(i);
  }, [e, v, u, w]);
  let T = useCallback(() => {
    let e = $getSelection();
    let t = A.current;
    if (l && t && !t.is(e) && C(t), !isSelectionWithinLink(e)) {
      b("");
      x("");
      u(!1);
      A.current = e;
      return;
    }
    let i = getSelectionLinkUrl(e);
    b(i);
    l && !e?.is(t) && (u(!1), x(i));
    A.current = e;
    S();
    return !0;
  }, [l, u, C, S]);
  useEffect(() => (e.getEditorState().read(() => {
    T();
  }), mergeRegister(e.registerCommand(SELECTION_CHANGE_COMMAND, () => (T(), !0), COMMAND_PRIORITY_LOW), e.registerCommand(E, ({
    selection: t,
    url: i
  }) => {
    let n = i ? {
      url: i,
      target: "_blank",
      rel: "noreferrer noopener nofollow ugc"
    } : null;
    t ? e.update(() => {
      let i = $getSelection();
      $setSelection(t.clone());
      e.dispatchCommand(TOGGLE_LINK_COMMAND, n);
      $setSelection(i?.clone() || null);
    }) : e.dispatchCommand(TOGGLE_LINK_COMMAND, n);
    return !0;
  }, COMMAND_PRIORITY_LOW), e.registerCommand(KEY_MODIFIER_COMMAND, t => {
    if (t.metaKey && t.shiftKey && "u" === t.key) {
      let t = $getSelection();
      let n = t?.getTextContent();
      if ($isRangeSelection(t) && n) {
        i(!0);
        u(!0);
        e.dispatchCommand(E, {
          selection: t,
          url: normalizeUrl(n)
        });
        A.current = t;
        return !0;
      }
    }
    return !1;
  }, COMMAND_PRIORITY_HIGH))), [e, T, i, t, u]);
  useLayoutEffect(() => {
    t && S();
  }, [t, S]);
  useEffect(() => (s.addEventListener("scroll", S), () => {
    s.removeEventListener("scroll", S);
  }), [s, S]);
  useEffect(() => (a.addEventListener("scroll", S), () => {
    a.removeEventListener("scroll", S);
  }), [a, S]);
  let k = useCallback(e => {
    "Enter" === e.key ? (e.preventDefault(), C()) : "Escape" === e.key && (e.preventDefault(), u(!1));
  }, [C, u]);
  return t ? jsx("div", {
    ref: f,
    className: "x10l6tqk",
    children: l ? jsx(_$$c, {
      url: v,
      location: new Point(0, 0),
      onInputKeyDown: k,
      onInputChange: e => {
        x(e.target.value);
      },
      onBlur: lQ,
      onClickTrash: () => {
        w();
      }
    }) : jsx(I, {
      url: y,
      onEditButtonClick: () => {
        x(y);
        u(!0);
      }
    })
  }) : jsx(Fragment, {});
}
export function $$S0({
  anchorElem: e,
  contentElem: t,
  isLinkEditMode: i,
  setIsLinkEditMode: p
}) {
  let [m] = useLexicalComposerContext();
  return function (e, t, i, l, p) {
    let m = useDispatch();
    let [h, f] = useState(!1);
    useEffect(() => mergeRegister(e.registerCommand(SELECTION_CHANGE_COMMAND, () => {
      let e = $getSelection();
      f(isSelectionWithinLink(e));
      return !1;
    }, COMMAND_PRIORITY_CRITICAL), e.registerCommand(CLICK_COMMAND, e => {
      let t = $getSelection();
      if ($isRangeSelection(t)) {
        let i = getRelevantSelectionNode(t);
        let n = $findMatchingParent(i, $isLinkNode);
        if (n && (e.metaKey || e.ctrlKey)) {
          let e = n.getURL();
          m(RK({
            rawInput: e
          }));
          return !0;
        }
      }
      return !1;
    }, COMMAND_PRIORITY_LOW)), [e, m, l]);
    return createPortal(jsx(x, {
      editor: e,
      isLink: h,
      anchorElem: t,
      contentElem: i,
      setIsLink: f,
      isLinkEditMode: l,
      setIsLinkEditMode: p
    }), t);
  }(m, e, t, i, p);
}
export const A = $$S0;