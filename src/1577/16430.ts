import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { kc } from "../figma_app/835219";
import { RE } from "../figma_app/471982";
import { Om, tv } from "../figma_app/979714";
import { e as _$$e } from "../figma_app/661119";
import { TrackedLink } from "../figma_app/831799";
import { e as _$$e2 } from "../905/579755";
import { C2 } from "../figma_app/699310";
import { AG } from "../figma_app/999312";
let m = "resource_page_header--resourceHeaderAvatar--FI-3x";
let f = "resource_page_header--resourceHeaderAvatarWrapper--nn-w8";
let p = "resource_page_header--resourceHeaderFigmaPartnerBadge--cgvkO";
export function $$h0({
  publishers: e,
  size: t = 32,
  showFigmaPartnerBadge: i,
  openInNewTab: o = !1
}) {
  let h = AG();
  let b = Om() ?? void 0;
  let x = tv() ?? void 0;
  let k = h ? 2 : 3;
  return e.length < 5 ? jsx(Fragment, {
    children: e.map((e, n) => {
      let l = RE(e.profile_handle, h, b, x);
      return jsxs("div", {
        className: f,
        "data-testid": "resource-header-avatar-" + n,
        children: [jsx(TrackedLink, {
          to: l.to,
          trackingEventName: "resource_creator_click",
          trackingProperties: {
            profileId: e.id,
            target: "avatar"
          },
          target: o ? "_blank" : "_self",
          children: jsx(_$$e2, {
            entity: e,
            size: t,
            style: {
              zIndex: k - n
            },
            adtlClassName: m
          })
        }, e.id), i && jsx("div", {
          className: p,
          style: {
            zIndex: k - n
          },
          children: C2(e, !0)
        })]
      }, e.id);
    })
  }) : jsxs(Fragment, {
    children: [e.slice(0, 3).map((e, t) => {
      let o = RE(e.profile_handle, h, b, x);
      return jsxs("div", {
        className: f,
        "data-testid": "resource-header-avatar-" + t,
        children: [jsx(Link, {
          to: o.to,
          onClick: e => e.stopPropagation(),
          children: jsx(_$$e2, {
            entity: e,
            style: {
              zIndex: 3 - t
            },
            adtlClassName: m
          })
        }, e.id), i && jsx("div", {
          className: p,
          style: {
            zIndex: 3 - t
          },
          children: C2(e, !0)
        })]
      }, e.id);
    }), jsx("div", {
      className: "resource_page_header--resourceHeaderAvatarWrapperExtraProfiles--P5q2P resource_page_header--resourceHeaderAvatarWrapper--nn-w8",
      children: jsx(_$$e, {
        type: "Letter",
        size: "Large",
        letter: (e.length - 3).toString()
      })
    })]
  });
}
export function $$b1({
  publishers: e,
  useSmallWidth: t = !1,
  removeByLabel: i = !1,
  openInNewTab: n = !1
}) {
  return jsx("span", {
    className: e.length > 2 ? "resource_page_header--author--k2bGY" : "resource_page_header--authorHiddenOverflow--hoVA5",
    children: kc(e, t, i, n)
  });
}
export const L = $$h0;
export const I = $$b1;