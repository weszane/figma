import { jsx, jsxs } from "react/jsx-runtime";
import { N_ } from "../vendor/956898";
import a from "classnames";
import { formatNumber } from "../figma_app/930338";
import { B } from "../905/714743";
import { useSelector } from "react-redux";
import { renderI18nText } from "../905/303541";
import { bV, QQ } from "../figma_app/808294";
import { cs } from "../figma_app/740025";
import { PM, m3, zF } from "../figma_app/45218";
import { t as _$$t } from "../905/344937";
import { W, B as _$$B } from "../905/841666";
import { Jm } from "../figma_app/387599";
import { EU } from "../figma_app/835219";
import { VJ, qD, ss, _t } from "../figma_app/471982";
import { cB, mk } from "../figma_app/777551";
import { ws, Vm } from "../figma_app/427318";
import { xn } from "../905/934145";
import { r5 } from "../figma_app/947784";
import { So } from "../figma_app/209680";
import { Yr, Vh, aS, dv, Au, LF, _W, UN, rn, DD, Tl, pV, cy, v8, o1 } from "../905/105487";
import { A as _$$A } from "../6828/379561";
var s = a;
function d() {
  return jsx("svg", {
    width: "11",
    height: "10",
    viewBox: "0 0 11 10",
    fill: "none",
    children: jsx("path", {
      d: "M4.88381 1.53137L5.50046 2.033L6.11711 1.53137C7.0677 0.759431 8.43916 0.836533 9.30009 1.71066C10.2333 2.65817 10.2333 4.19463 9.30009 5.14214L5.50046 9L1.69991 5.14214C0.766697 4.19463 0.766697 2.65817 1.69991 1.71066C2.56176 0.836533 3.9323 0.759431 4.88381 1.53137Z",
      stroke: "var(--color-icon-secondary, rgba(0, 0, 0, 0.5))"
    })
  });
}
let f = "monetization_labels--monetizationLabel--IHaDi text--fontPos11--2LvXf text--_fontBase--QdLsd";
function _({
  resource: e
}) {
  let t = bV(e.monetized_resource_metadata);
  return jsx("span", {
    className: f,
    children: t
  });
}
function A() {
  return jsx("span", {
    className: "monetization_labels--purchasedLabel--RGbrF text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: renderI18nText("community.buyer.purchased")
  });
}
function y() {
  return jsx("span", {
    className: f,
    children: renderI18nText("community.resource_tiles.paid")
  });
}
function b() {
  return jsx("span", {
    className: f,
    children: renderI18nText("community.resource_tiles.free")
  });
}
function v({
  resource: e
}) {
  let t = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  return e ? !(t && cs(t)) && _$$t(e) && e.community_resource_payment && QQ(e.community_resource_payment) ? jsx(A, {}) : PM(e) ? jsx(y, {}) : m3(e) ? jsx(_, {
    resource: e
  }) : zF(e) ? jsx(y, {}) : jsx(b, {}) : null;
}
export function $$O1({
  likeCount: e,
  currentUserLiked: t,
  inPluginRow: i,
  disableFontStyling: r
}) {
  let a = r ? void 0 : i ? Yr : Vh;
  return jsxs("div", {
    className: s()(t ? aS : dv, a),
    children: [jsx(d, {}), formatNumber(e)]
  });
}
export function $$D2({
  usageCount: e,
  inPluginRow: t,
  disableFontStyling: i
}) {
  let r = i ? void 0 : t ? Yr : Vh;
  return jsxs("div", {
    className: s()(Au, r),
    children: [jsx(B, {
      svg: _$$A
    }), formatNumber(e)]
  });
}
export function $$L0(e) {
  let t;
  let i;
  let a;
  let {
    resource
  } = e;
  ws(resource) ? (t = resource.name, i = resource.resource_type, a = VJ({
    resource
  }) || new URL(resource.rdp_url).pathname) : (t = qD(resource).name, i = ss(resource), a = _t({
    resource
  }));
  let l = W(resource.id, Vm(resource), !ws(resource)).data?.[0];
  let d = _$$B(resource.id, ws(resource)).data?.[0];
  let c = Jm();
  let u = resource.community_publishers.accepted;
  let p = u[0];
  let m = u.length > 1;
  let h = EU(resource);
  if (!p) return null;
  let g = m ? jsx(So, {
    className: s()(LF, _W),
    preview: jsx(r5, {
      authors: u
    }),
    children: h
  }) : jsx("span", {
    className: _W,
    children: h
  });
  return jsxs("div", {
    className: UN,
    children: [jsxs("div", {
      className: rn,
      children: [jsx(N_, {
        to: a,
        onClick: e => {
          cB(i, resource.id, void 0, c);
        },
        className: DD,
        children: t
      }), jsxs("div", {
        className: Tl,
        children: [jsx(N_, {
          className: m ? pV : cy,
          to: new xn({
            profileHandle: p.profile_handle
          }).to,
          children: g
        }), jsxs("span", {
          className: v8,
          children: ["\xa0\xa0\u2022\xa0\xa0", jsx(v, {
            resource
          })]
        })]
      })]
    }), jsxs("div", {
      className: o1,
      children: [jsx($$O1, {
        currentUserLiked: ws(resource) ? d : l,
        likeCount: resource.like_count
      }), jsx($$D2, {
        usageCount: mk(resource)
      })]
    })]
  });
}
export const my = $$L0;
export const cz = $$O1;
export const i8 = $$D2;