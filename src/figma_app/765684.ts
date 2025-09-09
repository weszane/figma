import { jsx } from "react/jsx-runtime";
import { useContext, useCallback, useEffect, cloneElement } from "react";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import o from "classnames";
import { Uz } from "../905/63728";
import { useHandleMouseEvent } from "../figma_app/878298";
import { M3 } from "../figma_app/119475";
import { V } from "../figma_app/473391";
import { o as _$$o } from "../figma_app/915774";
import { X } from "../905/853613";
import { Ew } from "../figma_app/361662";
import { u as _$$u } from "../905/290607";
import { sS } from "../figma_app/516028";
import { dx } from "../figma_app/646357";
import { u2 } from "../figma_app/807786";
import { U } from "../905/966438";
import { T as _$$T } from "../905/714785";
import { JA } from "../figma_app/608944";
import { J } from "../figma_app/636279";
import { mZ } from "../figma_app/76115";
import { n as _$$n } from "../905/186638";
import { ZV } from "../figma_app/188908";
import { TG } from "../905/72677";
import { QT } from "../figma_app/645801";
import { fJ, ND, r6, HR } from "../905/545010";
var l = o;
export function $$O1({
  enableKeyboardNavigation: e,
  colIndex: t,
  rowIndex: r,
  isList: i,
  isTileSelected: a,
  renderedElement: s,
  shouldRefocusAfterKeyboardInsert: o
}) {
  return e ? jsx(R, {
    colIndex: t,
    rowIndex: r,
    isList: i,
    isTileSelected: a,
    renderedElement: s,
    shouldRefocusAfterKeyboardInsert: o
  }) : jsx(L, {
    enableKeyboardNavigation: e,
    isList: i,
    isTileSelected: a,
    renderedElement: s
  });
}
function R({
  colIndex: e,
  rowIndex: t,
  isList: r,
  isTileSelected: s,
  renderedElement: o,
  shouldRefocusAfterKeyboardInsert: l
}) {
  let d = useContext(U);
  let _ = useSelector(sS);
  let h = J(o.item, o.sectionPosition, o.sectionNameForTracking);
  let m = _$$n(o.item);
  let {
    isFlyoutOpen
  } = JA();
  let y = _$$u({
    canSwap: !0,
    openFileKey: _ ?? "",
    sourceForTracking: "Asset Panel",
    insertAsChildOfCanvas: !0
  });
  let T = useCallback(() => {
    isFlyoutOpen && !m && h();
  }, [isFlyoutOpen, m, h]);
  let v = useCallback(() => {
    isFlyoutOpen || d?.onOpenFlyout(o.item, o.sectionPosition, o.sectionNameForTracking);
  }, [isFlyoutOpen, d, o.item, o.sectionPosition, o.sectionNameForTracking]);
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement
  } = M3({
    path: [1, t],
    column: r ? null : e,
    id: V(o.item),
    onFocus: T
  });
  let C = $$P0({
    colIndex: e,
    rowIndex: t,
    isList: r,
    keyboardNavigationItem,
    onComponentInsertSwap: y,
    onOpenFlyout: v,
    ...o,
    shouldRefocusAfterKeyboardInsert: l
  });
  let w = useCallback(e => {
    (0 !== e.detail || e.nativeEvent.pointerType) && (keyboardNavigationItem?.focus(), v());
  }, [v, keyboardNavigationItem]);
  let O = `componentScrollContainerTile.${e}.${t}`;
  let R = useHandleMouseEvent(O, "click", w);
  return jsx(L, {
    enableKeyboardNavigation: !0,
    isList: r,
    isShownInFlyout: m,
    isTileSelected: s,
    onKeyDown: C,
    onClick: R,
    onSetKeyboardNavigationElement: setKeyboardNavigationElement,
    renderedElement: o
  });
}
function L({
  enableKeyboardNavigation: e,
  isList: t,
  isShownInFlyout: r,
  isTileSelected: a,
  onKeyDown: o,
  onClick: d,
  onSetKeyboardNavigationElement: c,
  renderedElement: u
}) {
  let p = useAtomWithSubscription(_$$T);
  let _ = a?.(u) ?? !1;
  useEffect(() => {
    t ? u.element = cloneElement(u.element, {}) : u.element = cloneElement(u.element, {
      selected: _
    });
  }, [t, _, u]);
  let h = {
    top: u.top,
    left: u.left,
    height: t ? u.height : void 0
  };
  let m = l()(t ? fJ : ND, {
    [QT]: !t,
    [r6]: t && r,
    [HR]: t && r && p
  });
  return e || o || d ? jsx("button", {
    style: h,
    className: m,
    onKeyDown: o,
    onClick: d,
    ref: c,
    children: u.element
  }, u.key) : jsx("div", {
    style: h,
    className: m,
    children: u.element
  }, u.key);
}
export function $$P0({
  onComponentInsertSwap: e,
  onOpenFlyout: t,
  keyboardNavigationItem: r,
  item: n,
  sectionNameForTracking: a,
  sectionPosition: o,
  shouldRefocusAfterKeyboardInsert: l,
  rowIndex: c,
  colIndex: u,
  isList: p,
  sourceForTracking: g
}) {
  let {
    closeFlyout
  } = JA();
  let b = useAtomWithSubscription(TG);
  let T = Ew({
    assetKey: u2(n),
    assetLibraryKey: n.library_key,
    assetType: n.type,
    isList: p,
    sectionNameforTracking: a,
    sectionPosition: o,
    sourceForTracking: g ?? mZ,
    aiScore: n.ai_score ?? void 0,
    lexicalScore: n.lexical_score ?? void 0,
    isExample: _$$o(n, b),
    partnerType: X(n.library_key)
  });
  let S = ZV(T);
  return useCallback(i => {
    if ((i.keyCode === Uz.ENTER || i.keyCode === Uz.SPACE) && dx(n)) {
      if (i.metaKey) {
        t();
        return;
      }
      if (e(i, n), S(i), l && !(0 === c && 0 === u)) {
        let e = p ? r?.getItemAbove() : r?.getItemToTheLeft();
        e?.focus();
      } else r?.blur();
      closeFlyout();
    }
  }, [closeFlyout, u, S, p, n, r, e, t, c, l]);
}
export const N = $$P0;
export const Q = $$O1;
