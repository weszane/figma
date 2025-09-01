import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import i from "classnames";
import { Ay } from "../figma_app/778880";
import { tx, t as _$$t } from "../905/303541";
import { r5 } from "../figma_app/947784";
import { So } from "../figma_app/209680";
import { y } from "../905/158417";
import { o3 } from "../figma_app/831799";
import { sA, cy, Zz, tF } from "../905/105487";
import { u1 } from "../905/847552";
var a = i;
let _ = "resource_header_creators--authorLabelContainer--bKsON text--fontPos13--xW8hS text--_fontBase--QdLsd";
function m({
  profile: e,
  openInNewTab: t
}) {
  let r = y(e.profile_handle);
  return jsx(o3, {
    className: "resource_header_creators--authorNameOverflow--b2EnA",
    to: r.to,
    target: t ? "_blank" : "_self",
    trackingEventName: "resource_creator_click",
    trackingProperties: {
      profileId: e.id,
      target: "username"
    },
    children: e.name
  });
}
export function $$g1(e, t = !1, r = !1, i = !1) {
  let c = e => jsx(m, {
    profile: e,
    openInNewTab: i
  });
  if (Ay.mobile) {
    let t = 1 === e.length ? c(e[0]) : jsx("span", {
      className: "resource_header_creators--otherAuthorsLabel--E-8MS dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: tx("community.resource.multiple_creators")
    });
    return jsx("div", {
      className: _,
      children: tx("community.resource.by_creator", {
        spaceChar: jsx(Fragment, {
          children: "\xa0"
        }),
        creator: t
      })
    });
  }
  return jsxs("div", {
    className: a()(_, {
      "resource_header_creators--authorContainerSmallWidth--PFZaH": t
    }),
    children: [1 === e.length && (r ? tx("community.resource.creator", {
      creator: c(e[0])
    }) : tx("community.resource.by_creator", {
      spaceChar: jsx(Fragment, {
        children: "\xa0"
      }),
      creator: c(e[0])
    })), 2 === e.length && tx(r ? "community.resource.2_creators" : "community.resource.by_2_creators", {
      spaceChar: jsx(Fragment, {
        children: "\xa0"
      }),
      creator1: c(e[0]),
      creator2: c(e[1])
    }), e.length > 2 && jsx(So, {
      verticalPosition: "below",
      preview: jsx(r5, {
        authors: e
      }),
      className: "resource_header_creators--otherAuthorsDropdownLabel--jxCHO resource_header_creators--otherAuthorsLabel--E-8MS dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: tx(r ? "community.resource.more_than_2_creators" : "community.resource.by_more_than_2_creators", {
        spaceChar: jsx(Fragment, {
          children: "\xa0"
        }),
        creator1: e[0].name,
        others: tx("community.resource.by_others")
      })
    })]
  });
}
export function $$f2(e) {
  let t = e.community_publishers.accepted;
  return 0 === t.length ? "" : 1 === e.community_publishers.accepted.length ? t[0].name : _$$t("community.publisher_with_suffix", {
    publisherName: t[0].name,
    publishersSuffix: _$$t("community.cards.pluralize_num_other_publishers", {
      numOtherPublishers: t.length - 1
    })
  });
}
export function $$E3(e) {
  let t = e.community_publishers.accepted;
  if (0 === t.length) return "";
  let r = t.length > 1;
  let i = jsx("span", {
    className: r ? sA : cy,
    children: t[0].name
  });
  let a = jsx("span", {
    className: Zz,
    children: _$$t("community.cards.pluralize_num_other_publishers", {
      numOtherPublishers: t.length - 1
    })
  });
  let s = tx("community.publisher_with_suffix", {
    publisherName: i,
    publishersSuffix: a
  });
  return jsx("span", {
    className: r ? tF : cy,
    children: tx("community.resource_tiles.by_author", {
      author: r ? s : i
    })
  });
}
export function $$y0() {
  return jsx("svg", {
    className: u1,
    viewBox: "0 0 50 50",
    children: jsx("circle", {
      className: "path",
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      strokeWidth: "5"
    })
  });
}
export const y$ = $$y0;
export const kc = $$g1;
export const Lj = $$f2;
export const EU = $$E3;