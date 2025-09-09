import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { getStorage } from "../905/657224";
import { trackEventAnalytics } from "../905/449184";
import { logger } from "../905/651849";
import { debugState } from "../905/407919";
import { customHistory } from "../905/612521";
import { Ts } from "../905/194276";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { I as _$$I } from "../figma_app/4253";
import { Dl } from "../figma_app/471982";
import { QQ, V4, UO, WJ } from "../figma_app/808294";
import { AC } from "../figma_app/777551";
import { v as _$$v } from "../905/581647";
import { showModal, showModalHandler } from "../905/156213";
import { fR } from "../figma_app/147952";
import { cW, ZT } from "../figma_app/844435";
import { G } from "../905/11536";
import { I0, xQ, m3, PM, U, zF } from "../figma_app/45218";
import { G3 } from "../905/272080";
import { isMigratingPlugin, manifestContainsWidget } from "../figma_app/155287";
import { x as _$$x } from "../905/749159";
import { h as _$$h } from "../905/193918";
import { P as _$$P, V } from "../905/837980";
import { I as _$$I2 } from "../905/750915";
import { n as _$$n } from "../905/347702";
import { selectCurrentUser } from "../905/372672";
import { getPluginVersion, getPluginMetadata } from "../figma_app/300692";
function P(e, t, r, n) {
  return i => {
    i(showModal({
      type: _$$h.type,
      data: {
        userId: e.id,
        resource: t,
        onSuccess: () => {
          i(r => {
            (I0(t) || xQ(t)) && r(fR(t, e.id));
          });
          r && r();
        },
        onCancel: n
      }
    }));
  };
}
export let $$D12 = _$$n((e, t, r, n, i, s) => {
  let o = getFeatureFlags().community_hub_admin && r && AC(r);
  return new Promise(a => {
    let d = () => {
      if (t) {
        if (n || o) {
          var i;
          e((i = () => {
            $$$4({
              type: "PAID"
            });
            a();
          }, e => {
            e(showModal({
              type: _$$h.type,
              data: {
                userId: t.id,
                resource: r,
                localResource: n,
                onSuccess: i,
                onCancel: a,
                noInteractionMode: !0
              }
            }));
          }));
          return;
        }
        m3(r) ? e(P(t, r, () => a(), () => a())) : logger.error("Can only initiate checkout for a monetized or local resource.");
      } else {
        e(e => {
          e(Ts({
            origin: "freemium_checkout_modal_in_open_session",
            redirectUrl: customHistory.location.pathname,
            signedUpFromOpenSession: !0
          }));
          e(showModalHandler({
            type: _$$x,
            data: {
              headerText: getI18nString("fullscreen.toolbar.log_in_to_do_more_with_figjam")
            }
          }));
        });
        return;
      }
    };
    s === _$$P.SKIP ? d() : e(showModal({
      type: V.type,
      data: {
        type: t ? s || _$$P.PAID_FEATURE : _$$P.LOGGED_OUT,
        onContinue: d,
        onClose: a,
        plugin: r && getPluginVersion(r) || n || i,
        monetizedResourceMetadata: r?.monetized_resource_metadata
      }
    }));
  });
});
export function $$k10(e) {
  let t = useDispatch();
  let r = useSelector(e => e.authedActiveCommunityProfile);
  let a = useSelector(e => e.authedUsers);
  let s = _$$I(e);
  return useCallback(() => {
    if (!e) return;
    let n = QQ(s);
    let i = m3(e);
    if (trackEventAnalytics("cmty_resource_usage_action", {
      resourceType: Dl(e),
      resourceId: e.id,
      profileId: r?.id,
      hasActiveCommunityResourcePayment: n,
      isMonetizedResource: i
    }), !i || n || !1 === $$M8(r, a, e)) return;
    let l = G({
      authedActiveCommunityProfile: r,
      authedUsers: a
    });
    let {
      usersCanPurchase,
      publishers
    } = V4(l, e);
    if (trackEventAnalytics("Checkout Flow Entered", {
      resourceType: Dl(e),
      resourceId: e.id,
      numLoggedInAssociatedUsersThatCanPurchase: usersCanPurchase.length,
      numLoggedInAssociatedPublishers: publishers.length
    }), 1 === usersCanPurchase.length && 0 === publishers.length) {
      t(P(usersCanPurchase[0], e));
      return;
    }
    t(showModalHandler({
      type: _$$I2,
      data: {
        onUserSelect: r => {
          trackEventAnalytics("Pre Purchase User Selector Modal - User Selected", {
            resourceType: Dl(e),
            resourceId: e.id,
            userIdForPurchase: r.id
          });
          t(P(r, e));
        },
        resource: e
      }
    }));
  }, [e, s, r, a, t]);
}
export function $$M8(e, t, r) {
  if (!m3(r)) return !1;
  let n = G({
    authedActiveCommunityProfile: e,
    authedUsers: t
  });
  let {
    usersCanPurchase,
    publishers
  } = V4(n, r);
  return (0 !== usersCanPurchase.length || 0 !== publishers.length) && (0 !== usersCanPurchase.length || 0 === publishers.length);
}
export function $$F5(e) {
  let t = useDispatch();
  let r = _$$I(e);
  return useCallback(() => {
    e && QQ(r) && (t(_$$s.flash(getI18nString("community.buyer.redirecting_to_stripe"))), t(_$$v({})));
  }, [e, r, t]);
}
export function $$j16(e, t) {
  let r = t?.[e.monetized_resource_metadata.id] || e.community_resource_payment;
  return QQ(r);
}
export function $$U17(e, t) {
  let {
    publishers
  } = V4([t], e);
  return publishers.length > 0;
}
function B(e, t, r) {
  return !(!e || !m3(e) || PM(e) || !U(e) && (isMigratingPlugin(e) || zF(e)) || r && $$U17(e, r)) && !($$j16(e, t) && !function (e, t) {
    let r = t?.[e.monetized_resource_metadata.id] || e.community_resource_payment;
    return r && UO(r);
  }(e, t));
}
export function $$G1() {
  return useSelector(e => e.communityPayments);
}
export function $$V0(e) {
  return B(e, $$G1(), selectCurrentUser() || void 0);
}
export function $$H3(e) {
  let t = $$G1();
  return m3(e) && $$j16(e, t);
}
export function $$z6(e) {
  return B(e, debugState && debugState.getState().communityPayments, debugState && debugState.getState().user || void 0);
}
let W = "local-resource-payment";
export var $$K20 = (e => (e.PAID = "PAID", e.UNPAID = "UNPAID", e.NOT_SUPPORTED = "NOT_SUPPORTED", e))($$K20 || {});
export function $$Y19() {
  return getStorage().get(W);
}
export function $$$4(e) {
  getStorage().set(W, e);
}
function X(e, t) {
  if (t && m3(t)) return e?.[t.monetized_resource_metadata.id] || t.community_resource_payment;
}
export function $$q13(e) {
  return X($$G1(), e);
}
export function $$J18(e) {
  let t = useSelector(t => getPluginMetadata(e, t.publishedPlugins));
  let r = $$q13(t);
  return useMemo(() => t ? {
    ...t,
    community_resource_payment: r
  } : t, [r, t]);
}
export function $$Z7({
  extension: e,
  publishedPlugins: t,
  publishedWidgets: r,
  communityPaymentsState: n
}) {
  let i = (manifestContainsWidget(e) ? r : t)[e.plugin_id];
  if (!i) return;
  let a = X(n, i);
  return {
    ...i,
    community_resource_payment: a
  };
}
export function $$Q15(e) {
  let t = cW()[e];
  let r = $$q13(t);
  return useMemo(() => t ? {
    ...t,
    community_resource_payment: r
  } : t, [r, t]);
}
export function $$ee9(e) {
  let t = useSelector(t => t.publishedWidgets[e]);
  let r = $$q13(t);
  return useMemo(() => t ? {
    ...t,
    community_resource_payment: r
  } : t, [r, t]);
}
export function $$et2(e) {
  let t = ZT()[e];
  let r = $$q13(t);
  return useMemo(() => t ? {
    ...t,
    community_resource_payment: r
  } : t, [r, t]);
}
export function $$er11(e) {
  let t = $$q13(e);
  return !!t && UO(t);
}
export function $$en14(e) {
  let t = $$q13(e);
  return !!t && WJ(t, G3.PENDING);
}
export const EO = $$V0;
export const FP = $$G1;
export const J$ = $$et2;
export const OY = $$H3;
export const Qj = $$$4;
export const R$ = $$F5;
export const Rm = $$z6;
export const Y8 = $$Z7;
export const Zk = $$M8;
export const aQ = $$ee9;
export const ej = $$k10;
export const gn = $$er11;
export const kA = $$D12;
export const lt = $$q13;
export const tw = $$en14;
export const ul = $$Q15;
export const vT = $$j16;
export const vl = $$U17;
export const xp = $$J18;
export const y1 = $$Y19;
export const zH = $$K20;