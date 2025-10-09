import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assertNotNullish } from "../figma_app/95419";
import { EventShield } from "../905/821217";
import { Link } from "../905/438674";
import { useAtomWithSubscription } from "../figma_app/27355";
import c from "classnames";
import { useKeyboardNavigationItem } from "../figma_app/119475";
import { HighlightedText } from "../905/287602";
import { S as _$$S } from "../905/417453";
import { searchInputAtom } from "../905/61477";
import { updateRecentSearchesWithSortThunk } from "../905/977218";
import { SearchAnalytics } from "../905/574958";
var u = c;
let A = "faceted_search_preview_row_base--fauxFocus--4pg6O";
export var $$y4 = (e => (e.PREVIEW = "PREVIEW", e.DROPDOWN = "DROPDOWN", e))($$y4 || {});
export let $$b3 = createContext("PREVIEW");
var $$v2 = (e => (e.BRAND = "BRAND", e.BRAND_HOVER = "BRAND_HOVER", e.CHECKBOX = "CHECKBOX", e))($$v2 || {});
var $$I1 = (e => (e.SHORT = "SHORT", e))($$I1 || {});
export function $$E0({
  href: e,
  icon: t,
  id: i,
  path: c,
  text: y,
  breadcrumbElement: v,
  disableRecentSearchOnClick: I,
  onClickCallback: E,
  onContextMenuCallback: x,
  onKeyEnterCallback: S,
  sideElement: w,
  sideElementAlwaysVisible: C,
  rowStyle: T,
  rowHeight: k,
  textToHighlight: R,
  trackInteraction: N,
  elementBesideName: P
}) {
  let O = assertNotNullish(useContext($$b3), "Must use `FacetedSearchPreviewRowBase` inside `<SearchRowContext.Provider>");
  let D = useDispatch<AppDispatch>();
  let L = useAtomWithSubscription(searchInputAtom);
  let F = useSelector(e => e.currentUserOrgId);
  let M = _$$S(F)?.searches;
  let {
    setKeyboardNavigationElement,
    isFauxFocused
  } = useKeyboardNavigationItem({
    id: i,
    path: c
  });
  let B = useCallback(() => {
    L && !I && D(updateRecentSearchesWithSortThunk({
      searchQuery: L,
      previousSearches: M
    }));
    N?.(SearchAnalytics.Query.ClickAction.CLICK);
  }, [I, D, M, L, N]);
  let V = useCallback(e => {
    B();
    E?.(e);
  }, [B, E]);
  let G = useCallback(e => {
    1 === e.button && (B(), E?.(e));
  }, [B, E]);
  let z = useCallback(e => {
    "Enter" === e.key && (N?.(SearchAnalytics.Query.ClickAction.ENTER), S?.(e));
  }, [S, N]);
  let H = useCallback(e => {
    x?.(e);
  }, [x]);
  return jsx(EventShield, {
    eventListeners: ["onClick", "onMouseDown"],
    children: jsx(Link, {
      href: e ?? "",
      htmlAttributes: {
        onContextMenu: H,
        onKeyDown: z,
        onAuxClick: G,
        tabIndex: 0
      },
      onClick: V,
      ref: setKeyboardNavigationElement,
      children: jsxs("div", {
        className: u()("faceted_search_preview_row_base--row--60lCv", {
          "faceted_search_preview_row_base--rowBrand--dOa8m": "BRAND" === T,
          "faceted_search_preview_row_base--rowBrandHover--SZJpq": "BRAND_HOVER" === T,
          "faceted_search_preview_row_base--rowShort--7M20y": "SHORT" === k,
          [A]: isFauxFocused
        }),
        children: [jsxs("div", {
          className: "faceted_search_preview_row_base--rowFocusWrapper--BiSEc",
          tabIndex: -1,
          children: [t && jsx("div", {
            className: u()("faceted_search_preview_row_base--icon--YV7Ho", {
              "faceted_search_preview_row_base--iconCheckboxRow--CpMYL": "CHECKBOX" === T
            }),
            children: t
          }), jsxs("div", {
            className: u()("faceted_search_preview_row_base--textContainer--6mJ2z", {
              "faceted_search_preview_row_base--textNoIcon--hb8zV": !t,
              "faceted_search_preview_row_base--textBrand--gwUyi": "BRAND" === T || "BRAND_HOVER" === T,
              "faceted_search_preview_row_base--textNarrow--IHgC3": "DROPDOWN" === O,
              "faceted_search_preview_row_base--textWithCheckbox--U1kW3": "CHECKBOX" === T
            }),
            children: [jsxs("div", {
              className: "faceted_search_preview_row_base--textContainerFlexRow--cw3Fo",
              children: [jsx("div", {
                className: "faceted_search_preview_row_base--textContainerInner--VeKYT",
                children: R ? jsx(HighlightedText, {
                  text: y,
                  query: R
                }) : jsx(Fragment, {
                  children: y
                })
              }), !!P && P]
            }), !!v && jsx("div", {
              className: "faceted_search_preview_row_base--breadcrumb--3Rk0Y",
              children: v
            })]
          })]
        }), !!w && jsx("div", {
          className: u()({
            "faceted_search_preview_row_base--sideElement--exiLF": !C,
            "faceted_search_preview_row_base--sideElementAlwaysVisible--RJFAl": C,
            "faceted_search_preview_row_base--rowCheckbox--AC9bl": "CHECKBOX" === T,
            [A]: isFauxFocused
          }),
          tabIndex: -1,
          children: w
        })]
      })
    })
  });
}
export const cr = $$E0;
export const CO = $$I1;
export const yY = $$v2;
export const a3 = $$b3;
export const Vm = $$y4;
