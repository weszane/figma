import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { h as _$$h } from "../905/994594";
import { A as _$$A } from "../905/251970";
import { useAtomValueAndSetter, useAtomWithSubscription, Xr } from "../figma_app/27355";
import c from "../vendor/197638";
import { h as _$$h2 } from "../905/207101";
import { M3 } from "../figma_app/119475";
import { LazyInputForwardRef } from "../905/408237";
import { getI18nString } from "../905/303541";
import { hO } from "../figma_app/545293";
import { selectViewAction } from "../905/929976";
import { popModalStack } from "../905/156213";
import { _z, W0 } from "../905/977218";
import { getSelectedView } from "../figma_app/386952";
import { InputType } from "../figma_app/162807";
import { isSearchView } from "../figma_app/707808";
import { KindEnum } from "../905/129884";
import { oT, L8, rG, z5, q4 } from "../905/124270";
import { K as _$$K2 } from "../905/328468";
import { A as _$$A2 } from "../905/484713";
import { Vp, H9 } from "../905/714062";
import { F as _$$F } from "../905/801537";
import { y as _$$y } from "../905/713563";
import { v as _$$v } from "../905/281500";
import { Q8, BA, sC } from "../905/61477";
var u = c;
export function $$P0({
  hideSearchPreview: e
}) {
  let t = useDispatch();
  let i = getSelectedView();
  let [c, P] = useState(!1);
  let O = useRef(null);
  let D = useRef(null);
  let [L, F] = useAtomValueAndSetter(Q8);
  let M = useAtomWithSubscription(BA);
  let j = useAtomWithSubscription(sC);
  let U = useAtomWithSubscription(oT);
  let B = useAtomWithSubscription(L8);
  let [V, G] = useAtomValueAndSetter(rG);
  let [z, H] = useAtomValueAndSetter(z5);
  let W = Xr(q4);
  let K = useAtomWithSubscription(hO.isFragmentSearchAtom);
  let Y = _$$y(K ? "fragment_search_modal" : "file_browser", j, !0);
  let q = _$$v(V);
  let $ = _$$A2();
  !function () {
    let e = Xr(Vp);
    let t = useAtomWithSubscription(H9);
    let i = t?.facetType;
    let n = t?.valueToQuery ?? null;
    let a = _$$F(n, i);
    useEffect(() => {
      "loading" !== a.status && e(a.data ? a.data : []);
    }, [a, e]);
  }();
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFocused,
    isFauxFocused
  } = M3({
    id: "faceted-search-bar",
    path: [0]
  });
  _$$h2(() => {
    O.current && setKeyboardNavigationElement?.(O.current);
  });
  let ee = useCallback(() => {
    D.current?.scrollTo({
      left: D.current.scrollWidth
    });
  }, []);
  useEffect(() => {
    let e = e => {
      e.metaKey && "/" === e.key && (keyboardNavigationItem?.focus(), keyboardNavigationItem?.fauxFocus(), ee());
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [keyboardNavigationItem, ee]);
  let et = useCallback(t => {
    F(t.target.value);
    e || Y(t.target.value, M, !1, !1);
  }, [M, Y, F, e]);
  let ei = useCallback(e => {
    if (c) return;
    let {
      selectionStart,
      selectionEnd
    } = e.currentTarget;
    let r = 0 === selectionStart && 0 === selectionEnd;
    "Enter" === e.key && isFauxFocused && (Y(L, M, !0, !0), K && t(popModalStack()));
    !M && (("Backspace" === e.key || "Delete" === e.key) && r && (V ? q() : G(U)), "ArrowLeft" === e.key && r && G(U));
  }, [isFauxFocused, c, V, M, U, Y, L, q, G, K, t]);
  let en = useCallback(() => {
    F("");
    t(_z({}));
    W();
    M && isSearchView(i) && t(selectViewAction(i.previousView ?? {
      view: "recentsAndSharing"
    }));
  }, [W, t, i, M, F]);
  let er = useCallback(e => {
    if (e.stopPropagation(), e.preventDefault(), keyboardNavigationItem?.focus(), keyboardNavigationItem?.fauxFocus(), O.current) {
      let e = O.current.value.length;
      O.current.setSelectionRange(e, e);
    }
    V && G(null);
  }, [V, keyboardNavigationItem, G]);
  let ea = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);
  useEffect(() => {
    isFocused && (keyboardNavigationItem?.focus(), keyboardNavigationItem?.fauxFocus(), ee(), t(W0({
      entryPoint: K ? "fragment_search_modal" : "file_browser"
    })));
  }, [t, isFocused, keyboardNavigationItem, ee, K]);
  useEffect(() => {
    isFocused && z && (H(null), $(InputType.DROPDOWN, z));
  }, [L, z]);
  useEffect(() => {
    V || M || (keyboardNavigationItem?.focus(), keyboardNavigationItem?.fauxFocus());
  }, [V, B, keyboardNavigationItem, L, M]);
  let es = 0 !== B.length;
  let eo = 0 === L.length && (!es || M);
  useLayoutEffect(() => {
    if (!O || !O.current) return;
    if (eo) {
      O.current.style.width = "calc(100% - 10px)";
      return;
    }
    var e = document.createElement("span");
    e.innerHTML = u().sanitize(L.replace(/<|>/, "W"));
    e.style.font = "11px Inter";
    document.body.appendChild(e);
    let t = e.getBoundingClientRect().width + 8;
    O.current.style.width = `${t}px`;
    document.body.removeChild(e);
    ee();
  }, [L, ee, O, eo]);
  return jsxs("div", {
    className: "faceted_search_bar--searchBar--hab2B search--searchContainerSidebarWithSelection--I54MO search--_expandingSearchBoxSidebarContainerBase--Mj7Ol search--searchContainerSidebar--JLCAb",
    onMouseDown: er,
    onClick: ea,
    role: "button",
    tabIndex: 0,
    children: [jsx("div", {
      className: "faceted_search_bar--rightFadeContainer--O7WxS faceted_search_bar--_fadeContainer--DiQLS",
      children: jsx(_$$h, {
        className: "faceted_search_bar--iconWrapper--BpUGT"
      })
    }), jsxs("div", {
      className: "faceted_search_bar--clipContainer--RB40P",
      ref: D,
      children: [!M && jsx(_$$K2, {}), jsx(LazyInputForwardRef, {
        ref: O,
        autoFocus: !0,
        className: "faceted_search_bar--input--V5ksZ",
        "data-testid": "facetedSearchInput",
        onChange: et,
        onCompositionEnd: () => P(!1),
        onCompositionStart: () => P(!0),
        onKeyDown: ei,
        onMouseDown: e => e.stopPropagation(),
        placeholder: eo ? getI18nString("search.search_bar.placeholder") : void 0,
        spellCheck: "false",
        value: L
      })]
    }), (!!L || es) && jsx("div", {
      className: "faceted_search_bar--leftFadeContainer--r39DL faceted_search_bar--_fadeContainer--DiQLS",
      "data-testid": "facetedSearchClear",
      children: jsx(IconButton, {
        "aria-label": getI18nString("search.search_bar.clear"),
        onClick: en,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("search.search_bar.clear")
        },
        children: jsx(_$$A, {})
      })
    })]
  });
}
export const Y = $$P0;