import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { renderI18nText, getI18nString } from "../905/303541";
import { fM, Uj, mG } from "../figma_app/15924";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { _ as _$$_ } from "../figma_app/496441";
import { E as _$$E } from "../905/632989";
import { J } from "../905/341359";
import { l as _$$l } from "../905/745972";
import { hideModalHandler, showModalHandler } from "../905/156213";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { Rj, RR, jJ, b_, _s, HE, Y1 } from "../905/820658";
import { A as _$$A } from "../5132/237216";
import { V4 } from "../figma_app/808294";
import { Pg, lT } from "../figma_app/777551";
import { cs } from "../figma_app/740025";
import { ej } from "../figma_app/86989";
import { G } from "../905/11536";
import { TA } from "../905/372672";
import { m3, zF, U as _$$U } from "../figma_app/45218";
var j = (e => (e.PATREON = "Patreon", e.GUMROAD = "Gumroad", e.UI8 = "UI8", e.LEMONSQUEEZY = "Lemon Squeezy", e))(j || {});
let w = {
  "patreon.com/": "Patreon",
  "gumroad.com/": "Gumroad",
  "ui8.net/": "UI8",
  "lemonsqueezy.com/": "Lemon Squeezy"
};
let v = registerModal(function (e) {
  let t = useDispatch();
  let n = () => {
    t(hideModalHandler());
  };
  let s = hS({
    ...e,
    onClose: n
  });
  let x = _$$l();
  let j = x.windowInnerWidth && x.windowInnerWidth < 550 ? "md" : 440;
  return jsx(J, {
    children: jsx(fu, {
      name: e0.COMMUNITY_REDIRECT_PURCHASE_MODAL,
      children: jsx(bL, {
        manager: s,
        width: j,
        children: jsx(vo, {
          children: jsx(nB, {
            children: jsxs("div", {
              className: Rj,
              children: [jsx("div", {
                className: RR,
                children: renderI18nText("community.detail_view.redirect_to_third_party_service")
              }), jsx("div", {
                className: jJ,
                children: renderI18nText("community.detail_view.you_ll_pay_to_use_this_resource_outside_of_figma")
              }), jsx(_$$_, {
                href: e.thirdPartyM10nUrl || "#",
                newTab: !0,
                className: b_,
                children: jsx("span", {
                  className: _s,
                  children: renderI18nText("community.detail_view.continue_to_external_service", {
                    externalService: function (e) {
                      for (let [t, n] of Object.entries(w)) if (e?.includes(t)) return n;
                      return renderI18nText("community.detail_view.external_site");
                    }(e.thirdPartyM10nUrl)
                  })
                })
              }), jsx(_$$E, {
                className: HE,
                onClick: n,
                children: jsx("span", {
                  className: Y1,
                  children: renderI18nText("community.detail_view.go_back")
                })
              })]
            })
          })
        })
      })
    })
  });
});
export function $$P0({
  resource: e,
  context: t,
  payment: n,
  enableWideButtonForStickyFooter: o,
  enableCondensedWideButtonForStickyFooter: a,
  thirdPartyM10nUrl: c
}) {
  let u;
  let _ = useSelector(e => e.authedActiveCommunityProfile);
  let d = TA();
  let m = useSelector(e => e.authedUsers);
  let y = ej(e);
  let b = _$$A(e, !0);
  let x = useDispatch();
  if (!m3(e) && !zF(e)) return null;
  let f = !1;
  if (cs(_) && !zF(e)) {
    f = !0;
    u = getI18nString("community.buyer.cannot_make_purchase_on_behalf_of_team_or_org");
  } else {
    let t = G({
      authedActiveCommunityProfile: _,
      authedUsers: m
    });
    if (m3(e)) {
      let {
        usersCanPurchase,
        publishers
      } = V4(t, e);
      0 === usersCanPurchase.length && 0 !== publishers.length && (f = !0, u = getI18nString("community.buyer.no_you_cannot_buy_your_own_resource"));
    }
    Pg(e) && (f = !0, u = getI18nString("community.resource.delisted_title"));
    lT(e) && (f = !0, u = getI18nString("community.resource.admin_blocked_resource_banner.this_resource_is_blocked"));
  }
  let j = () => {
    x(showModalHandler({
      type: v,
      data: {
        thirdPartyM10nUrl: c
      }
    }));
  };
  return jsx(fM, {
    resource: e,
    context: t,
    onClick: () => {
      zF(e) && _$$U(e) ? (Uj(e, t, d, _?.id), j()) : (mG(e, t, d, _?.id), y());
    },
    onGetFreePreview: b,
    disabled: f,
    tooltipText: u,
    payment: n,
    enableWideButtonForStickyFooter: o,
    enableCondensedWideButtonForStickyFooter: a
  });
}
export const _$$default = $$P0;