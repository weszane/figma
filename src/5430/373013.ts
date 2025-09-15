import { jsx, jsxs } from "react/jsx-runtime";
import { xk } from "@stylexjs/stylex";
import { trackEventAnalytics } from "../905/449184";
import { N as _$$N } from "../figma_app/469468";
import { getI18nString, renderI18nText } from "../905/303541";
import { Jm } from "../figma_app/387599";
import { C as _$$C } from "../905/237873";
import { gM } from "../5430/823351";
import { Ay } from "../905/506641";
import { e as _$$e } from "../figma_app/324237";
import { Z } from "../905/942203";
import { ResourceTypes } from "../905/178090";
import { MF, OU } from "../figma_app/773663";
import { A5 } from "../figma_app/209680";
import { Yf, AV } from "../5430/297093";
import { km, u9, hs, R6 } from "../5430/184698";
import { F } from "../5430/993414";
import { g5 } from "../5430/903660";
import { Y } from "../5430/173892";
import w from "classnames";
import { _C6, glm, ltq } from "../figma_app/27776";
function g({
  onUpdate: e,
  value: t,
  isSearch: r
}) {
  return jsx(A5, {
    name: getI18nString("community.landing_page.dropdown_filter__creators"),
    onUpdate: ([t]) => {
      e(t);
    },
    options: [Yf(!!r)],
    initialValues: [t],
    adtlClassName: km
  });
}
var C = w;
function L({
  onUpdate: e,
  value: t,
  isSearch: r,
  price: i,
  size: n
}) {
  return jsx(A5, {
    name: getI18nString("community.curated_page.sort"),
    onUpdate: ([t]) => e(t),
    initialValues: [t],
    options: [AV(r, i)],
    adtlClassName: C()(km, "sm" === n && u9)
  });
}
export function $$I0({
  filterState: e,
  onUpdate: t,
  containerRef: r,
  context: x,
  allowedEditorTypes: f,
  size: w = "md"
}) {
  let {
    resourceType,
    editorType = MF(resourceType),
    price,
    sortBy,
    creators = Z.ALL
  } = e;
  let k = _$$N(`(max-width: ${_C6})`);
  let A = Jm();
  return ("search" !== x && (A = void 0), x === gM.SEARCH && "profiles" === resourceType) ? null : jsxs("div", {
    className: hs,
    "data-resource-type": resourceType,
    ref: r,
    "data-feed-filter-context": x,
    children: [jsxs("div", {
      className: R6,
      children: [[gM.CATEGORY, gM.PLUGINS, gM.RESOURCE_LANDING_PAGE, gM.PROFILE].includes(x) && jsx("div", {
        ...xk("md" === w ? N.flex_itemsCenter_font13_fontMedium : N.flex_itemsCenter_font11_fontMedium),
        children: renderI18nText("categories.filter_by")
      }), jsx(Ay, {
        mediaQuery: `(min-width: ${glm})`,
        children: resourceType !== ResourceTypes.SearchResourceTypes.PROFILES && jsx(F, {
          onUpdate: e => {
            let r = [{
              key: "editorType",
              value: e
            }];
            let s = OU(e, resourceType, {
              anchorOn: "editorType"
            }).resourceType;
            s !== resourceType && r.push({
              key: "resourceType",
              value: s
            });
            t(r);
            trackEventAnalytics("editor_type_filter_changed", {
              editor_type: e,
              from: editorType,
              search_session_id: A
            });
          },
          editorType,
          resourceType,
          allowedEditorTypes: f,
          size: w
        })
      }), ([gM.HOMEPAGE, gM.CATEGORY, gM.PROFILE].includes(x) || k) && ![gM.PLUGINS, gM.RESOURCE_LANDING_PAGE].includes(x) && jsx(Y, {
        onUpdate: e => {
          let r = [{
            key: "resourceType",
            value: e
          }];
          let s = OU(editorType, e, {
            anchorOn: "resourceType"
          }).editorType;
          s !== editorType && r.push({
            key: "editorType",
            value: s
          });
          t(r);
          trackEventAnalytics("resource_type_filter_changed", {
            resource_type: e,
            from: resourceType,
            search_session_id: A
          });
        },
        resourceType,
        editorType,
        size: w
      }), x !== gM.PROFILE && jsx(g5, {
        onUpdate: e => {
          let r = [{
            key: "price",
            value: e
          }];
          e === _$$C.FREE && (sortBy === _$$e.Search.PRICE_ASC || sortBy === _$$e.Search.PRICE_DESC) && r.push({
            key: "sortBy",
            value: _$$e.Shared.POPULAR
          });
          t(r);
          trackEventAnalytics("price_filter_changed", {
            price: e,
            from: price,
            search_session_id: A
          });
        },
        value: price,
        size: w
      }), x === gM.SEARCH && jsx(Ay, {
        mediaQuery: `(min-width: ${ltq})`,
        children: jsx(g, {
          onUpdate: e => {
            t([{
              key: "creators",
              value: e
            }]);
            trackEventAnalytics("creators_filter_changed", {
              creators: e,
              from: creators,
              search_session_id: A
            });
          },
          value: creators,
          isSearch: x === gM.SEARCH
        })
      })]
    }), x !== gM.CATEGORY && x !== gM.PROFILE && "profiles" !== resourceType && jsx(L, {
      onUpdate: e => {
        t([{
          key: "sortBy",
          value: e
        }]);
        trackEventAnalytics("ranking_type_filter_changed", {
          ranking_type: e,
          search_session_id: A
        });
      },
      value: sortBy,
      isSearch: x === gM.SEARCH,
      price,
      size: w
    })]
  });
}
let N = {
  flex_itemsCenter_font13_fontMedium: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    fontSize: "x4z9k3i",
    fontWeight: "xk50ysn",
    $$css: !0
  },
  flex_itemsCenter_font11_fontMedium: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    fontSize: "x1j6dyjg",
    fontWeight: "xk50ysn",
    $$css: !0
  }
};
export const T = $$I0;