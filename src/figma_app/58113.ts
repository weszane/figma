import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { formatNumber } from "../figma_app/930338";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Cg, Gb, sw } from "../figma_app/534676";
import { Lt } from "../figma_app/808294";
import { hasFreemiumCode, isThirdPartyMonetized } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { A } from "../6828/6507";
import { A as _$$A } from "../5724/693499";
function _(e) {
  return jsx("div", {
    className: "detail_engagement_row--engagementItem--Kpp0Y",
    "data-tooltip": e["data-tooltip"],
    "data-tooltip-type": e["data-tooltip-type"],
    "data-tooltip-show-immediately": e["data-tooltip-show-immediately"],
    children: e.children
  });
}
function h() {
  return jsx("div", {
    className: "detail_engagement_row--engagementDivider--t0laO"
  });
}
export function $$m0({
  resource: e
}) {
  let t = e.unique_run_count ?? 0;
  let r = hasFreemiumCode(e);
  let m = isThirdPartyMonetized(e);
  let g = (() => {
    if (r) return jsx(Cg, {
      resource: e,
      textSize: "small"
    });
    if (m) return jsx(Gb, {
      textSize: "small"
    });
    let t = Lt({
      resource: e,
      payment: e.community_resource_payment
    });
    return e.monetized_resource_metadata && t ? jsx(sw, {
      metadata: e.monetized_resource_metadata,
      textSize: "small"
    }) : null;
  })();
  let f = formatNumber(t);
  let E = formatNumber(e.like_count);
  return jsxs("div", {
    className: "detail_engagement_row--detailEngagementRow--JLmtH",
    children: [jsxs(_, {
      "data-tooltip": getI18nString("community.try.people_like_this", {
        numPeople: e.like_count,
        numPeopleStr: E
      }),
      "data-tooltip-type": KindEnum.TEXT,
      children: [jsx(SvgComponent, {
        svg: _$$A
      }), E]
    }), jsx(h, {}), jsxs(_, {
      "data-tooltip": getI18nString("community.try.people_use_this", {
        numPeople: t,
        numPeopleStr: f
      }),
      "data-tooltip-type": KindEnum.TEXT,
      children: [jsx(SvgComponent, {
        svg: A
      }), f]
    }), !!g && jsxs(Fragment, {
      children: [jsx(h, {}), jsx(_, {
        children: g
      })]
    })]
  });
}
export const f = $$m0;