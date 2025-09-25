import { w as _$$w } from "../5430/495667";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { formatNumber } from "../figma_app/930338";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { getCommunityHubLikeStatus, getCommunityHubLikeStatusByResourceId } from "../905/841666";
import { getResourceUserCount, getResourceTypeDisplayText } from "../figma_app/777551";
import { getResourceType, hasContent } from "../figma_app/427318";
import { If, M1, lp, E7 } from "../5430/14019";
import { A as _$$A } from "../6828/379561";
if (443 == require.j) {}
export function $$m0({
  resource: e,
  resourceContent: t,
  viewContext: m,
  disableLikeButton: h = !1,
  hideResourceType: x = !1,
  ctaDisabledMessage: f
}) {
  let y = e.like_count > 0;
  let g = getResourceUserCount(e) > 0;
  let v = getCommunityHubLikeStatus(t.id, getResourceType(t), !hasContent(e));
  let b = getCommunityHubLikeStatusByResourceId(e.id, hasContent(e));
  let j = hasContent(e) ? b.data?.[0] : v.data?.[0];
  let w = hasContent(e) ? b.data?.[1] : v.data?.[1];
  let C = _$$w(e, !!j, w || null, m || "")();
  let L = jsx("div", {
    className: If,
    children: renderI18nText("community.detail_view.bullet_point")
  });
  return jsxs("div", {
    className: M1,
    "data-testid": "resource-header-stats",
    children: [!x && jsx("div", {
      children: getResourceTypeDisplayText(e)
    }), y && jsxs(Fragment, {
      children: [!x && L, jsx("button", {
        onClick: e => {
          h || C(e);
        },
        children: j ? p : _
      }), jsx("div", {
        className: lp,
        children: formatNumber(e.like_count)
      })]
    }), g && jsxs(Fragment, {
      children: [L, jsx(SvgComponent, {
        dataTestId: "usage-icon",
        svg: _$$A
      }), jsx("div", {
        className: lp,
        children: renderI18nText("community.detail_view.number_of_users", {
          numberOfUsers: formatNumber(getResourceUserCount(e))
        })
      })]
    }), !!f && jsxs(Fragment, {
      children: [(!x || y || g) && L, jsx("div", {
        className: E7,
        children: f
      })]
    })]
  });
}
let _ = jsx("svg", {
  "data-testid": "like-icon",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.99988 4.5L7.3254 3.96042C6.28613 3.129 4.78791 3.21198 3.84681 4.15308C2.82678 5.17311 2.82678 6.8269 3.84681 7.84693L7.99988 12L12.153 7.84693C13.173 6.8269 13.173 5.17311 12.153 4.15308C11.2119 3.21198 9.71364 3.129 8.67437 3.96042L7.99988 4.5ZM7.99988 10.5858L11.4459 7.13982C12.0754 6.51032 12.0754 5.48969 11.4459 4.86018C10.8651 4.27939 9.94044 4.22818 9.29906 4.74129L7.99988 5.78063L6.70071 4.74128C6.05933 4.22818 5.13471 4.27939 4.55391 4.86018C3.92441 5.48969 3.92441 6.51032 4.55392 7.13982L7.99988 10.5858Z",
    fill: "black"
  })
});
let p = jsxs("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: [jsx("rect", {
    width: "16",
    height: "16",
    fill: "var(--color-background)"
  }), jsx("path", {
    d: "M3.84693 7.84693L8 12L12.1531 7.84692C13.1731 6.8269 13.1731 5.1731 12.1531 4.15308C11.212 3.21198 9.71375 3.129 8.67448 3.96041L8 4.5L7.32552 3.96041C6.28625 3.129 4.78802 3.21198 3.84692 4.15308C2.8269 5.1731 2.8269 6.8269 3.84693 7.84693Z",
    fill: "#F24822"
  })]
});
export const A = $$m0;