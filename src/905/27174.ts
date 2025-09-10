import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef, useCallback } from "react";
import a from "classnames";
import { useLatestRef } from "../figma_app/922077";
import { M3, yn, lv } from "../figma_app/119475";
import { AutoLayout } from "../905/470281";
import { gp } from "../905/154591";
import { G } from "../905/153787";
var s = a;
let p = "tree_row--expansionToggle--mYjsb";
export function $$m0({
  children: e,
  changeType: t,
  isExpanded: i,
  isLeaf: a,
  isPinned: m,
  isSelected: f,
  isSelectedSecondary: _,
  isChanging: A,
  indent: y,
  style: b,
  keyboardNavigationPath: v,
  toggleExpanded: I,
  togglePinned: E,
  select: x,
  onContextMenu: S,
  onMouseEnter: w,
  onMouseLeave: C
}) {
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFocused
  } = M3({
    path: v
  });
  let N = useContext(G);
  let P = useLatestRef(f);
  useEffect(() => {
    !P && f && !isFocused && N() && keyboardNavigationItem?.focus();
  }, [isFocused, P, f, keyboardNavigationItem, N]);
  let O = useRef(!1);
  let D = useCallback(e => e.target instanceof Element && "BUTTON" === e.target.tagName, []);
  let L = useCallback(e => !!(e.target instanceof Element && (e.target.classList.contains(p) || e.target.parentElement?.classList.contains(p))), []);
  return jsx("button", {
    ref: setKeyboardNavigationElement,
    className: s()("tree_row--treeItem--6gIYH", {
      "tree_row--selectedSecondary--8QYCx": _ && !(f || isFocused),
      "tree_row--selected--url1U": f || isFocused,
      "tree_row--changing--E9CSm": A
    }),
    onClick: e => {
      O.current ? O.current = !1 : I(e.metaKey || e.altKey);
      e.currentTarget.focus();
    },
    onContextMenu: S,
    onDoubleClick: e => {
      L(e) || I(e.metaKey);
    },
    onFocus: x,
    onKeyDown: e => {
      (i && yn(e.code, !0) || !i && lv(e.code, !0)) && I(e.metaKey);
    },
    onMouseDown: e => {
      (D(e) || L(e)) && e.detail > 1 && e.preventDefault();
      L(e) ? O.current = e.detail > 1 : O.current = !0;
    },
    onMouseEnter: w,
    onMouseLeave: C,
    style: b,
    children: jsxs(AutoLayout, {
      children: [jsx(h, {
        indent: y,
        isLeaf: a,
        isExpanded: i
      }), e, E && jsx(g, {
        isPinned: !!m,
        togglePinned: E
      }), t && jsx(gp, {
        type: t
      })]
    })
  });
}
function h({
  indent: e,
  isLeaf: t,
  isExpanded: i
}) {
  return jsx("div", {
    className: s()(p, !t && "tree_row--clickable--ttIc9"),
    style: {
      paddingLeft: 14 * e,
      width: 14,
      minHeight: 14
    },
    children: jsx("span", {
      children: t ? "" : i ? "\u25BC" : "\u25B6"
    })
  });
}
function g({
  isPinned: e,
  togglePinned: t
}) {
  return jsx("span", {
    onClick: t,
    className: e ? "tree_row--unpinToggle--CU4-x tree_row--_pinToggleBase--W1djM" : "tree_row--pinToggle--wbULT tree_row--_pinToggleBase--W1djM",
    children: e ? "Unpin" : "Pin"
  });
}
export const Z = $$m0;