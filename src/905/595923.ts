import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import s, { k as _$$k } from "../905/443820";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { Xf } from "../figma_app/153916";
import { Rs } from "../figma_app/288654";
import { b as _$$b } from "../figma_app/246400";
import { $z } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Y as _$$Y } from "../905/830372";
import { B as _$$B } from "../905/261906";
import { JT, tI } from "../figma_app/847597";
import { k as _$$k2 } from "../figma_app/618031";
import { N as _$$N } from "../figma_app/28806";
import { un, kI } from "../figma_app/457899";
import { hY } from "../figma_app/80683";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { m0 } from "../figma_app/976749";
import { Gu } from "../905/513035";
import { i as _$$i } from "../figma_app/127401";
import { Ye } from "../905/332483";
import { h as _$$h } from "../figma_app/603561";
import { wR } from "../figma_app/765689";
import { F2 } from "../905/389382";
import { O as _$$O } from "../figma_app/710329";
import { P as _$$P } from "../905/842406";
import { FProductAccessType, FOrganizationLevelType } from "../figma_app/191312";
import { oe } from "../figma_app/43951";
import { vr } from "../figma_app/514043";
import { Ef } from "../figma_app/428858";
import { E as _$$E } from "../figma_app/126651";
import { e0 } from "../905/696396";
import { j as _$$j } from "../figma_app/617663";
import { h as _$$h2 } from "../figma_app/124713";
import { B as _$$B2 } from "../figma_app/395012";
import { L as _$$L } from "../figma_app/288254";
import { k as _$$k3 } from "../figma_app/121990";
import { E4 } from "../905/144598";
import { WZ, ix } from "../figma_app/538002";
export let $$W0 = atom(null);
export function $$K1(e) {
  let t = useAtomWithSubscription($$W0);
  let i = m0() ? FProductAccessType.DEV_MODE : wR(e.editorType);
  let a = F2(i);
  let s = !!e.org;
  let d = s ? {
    parentId: e.org?.id || "",
    type: FOrganizationLevelType.ORG
  } : {
    parentId: e.team?.id || "",
    type: FOrganizationLevelType.TEAM
  };
  let c = _$$k2();
  let u = _$$h({
    planType: d.type,
    planParentId: d.parentId
  });
  let p = Xf(d.parentId, s);
  let m = useSelector(e => e.teamBilling);
  let h = s ? p?.data?.currency : m.summary.currency;
  let g = h ? new vr(h) : void 0;
  return e.editorType && a && d.parentId && t ? t.pending ? jsx(Y, {
    pendingRole: t,
    planKey: d,
    planProperties: {
      isProrationEnabled: c,
      isElaResult: u
    },
    neededSeatType: a,
    licenseType: i,
    localizeCurrency: g
  }) : jsx(q, {
    confirmedRole: t,
    planKey: d,
    planProperties: {
      isProrationEnabled: c,
      isElaResult: u
    },
    neededSeatType: a,
    licenseType: i,
    localizeCurrency: g
  }) : jsx(Fragment, {});
}
function Y(e) {
  let {
    pendingRole,
    planKey,
    planProperties,
    neededSeatType,
    localizeCurrency
  } = e;
  let {
    isProrationEnabled,
    isElaResult
  } = s;
  let u = un({
    planKey,
    currentSeatType: Gu.VIEW,
    currentSeatBillingInterval: void 0,
    enabled: isProrationEnabled && !isElaResult.data && !!localizeCurrency
  });
  let p = localizeCurrency && u.data && isNotNullish(u.data[neededSeatType]) ? localizeCurrency.formatMoney(u.data[neededSeatType].amount, {
    showCents: !1
  }) : void 0;
  let m = useDispatch();
  let h = async () => {
    if (pendingRole.invite?.id) try {
      await _$$j.updateInviteBillableProductKey({
        inviteId: pendingRole.invite.id,
        billableProductKey: neededSeatType
      });
      X(m, neededSeatType);
    } catch (e) {
      Q(m);
    }
  };
  return jsx($, {
    ...e,
    loading: "loading" === u.status || "loading" === isElaResult.status,
    fileRole: pendingRole,
    priceString: p,
    onConfirmClick: h
  });
}
function q(e) {
  let {
    confirmedRole,
    planKey,
    planProperties,
    neededSeatType,
    localizeCurrency
  } = e;
  let {
    isProrationEnabled,
    isElaResult
  } = s;
  let p = e.confirmedRole.user_id;
  let m = e.planKey.type === FOrganizationLevelType.ORG ? e.confirmedRole.org_user?.id : e.confirmedRole.team_user?.id;
  let h = Rs(oe, {
    planType: planKey.type,
    targetPlanUserId: m || "",
    targetUserId: p
  }, {
    enabled: !!m
  });
  let g = h.data?.planUserById ?? {
    currentSeat: null
  };
  let f = g.currentSeat?.billableProductKey ?? Gu.VIEW;
  let _ = g.currentSeat?.billingInterval ?? null;
  let v = un({
    planKey,
    currentSeatType: f,
    currentSeatBillingInterval: _,
    enabled: isProrationEnabled && !isElaResult.data && !!e.localizeCurrency
  });
  let I = useDispatch();
  let E = _$$N({
    planId: planKey.parentId,
    ...Ef(planKey.type, {
      team: {
        entryPoint: _$$B2.FILE_PERMISSIONS_MODAL
      },
      org: {
        entryPoint: _$$h2.FILE_PERMISSIONS_MODAL
      }
    }),
    onSuccess: () => X(I, neededSeatType),
    onFailure: () => Q(I)
  });
  let S = hY(planKey.parentId, planKey.type);
  let C = "loaded" === S.status ? Ye.dict(e => S.data[e]?.available ?? 0) : Ye.dict(() => 0);
  let T = isNotNullish(C[neededSeatType]) && C[neededSeatType] > 0;
  if (!m) return jsx(Fragment, {});
  let k = kI({
    prices: v.data,
    currentSeatType: f,
    nextSeatType: neededSeatType,
    nextSeatAvailable: T,
    failedToLoadPrices: "errors" === v.status
  });
  let R = localizeCurrency && v.data && isNotNullish(v.data[neededSeatType]) ? localizeCurrency.formatMoney(v.data[neededSeatType].amount, {
    showCents: !1
  }) : void 0;
  return jsx($, {
    ...e,
    loading: "loading" === h.status || "loading" === v.status || "loading" === isElaResult.status,
    currentSeatType: f,
    fileRole: e.confirmedRole,
    priceString: R,
    onConfirmClick: () => {
      E({
        users: [{
          userId: p,
          planUserId: m
        }],
        seatTypeOption: neededSeatType,
        lastUpdateTimestampOverride: confirmedRole.org_user ? confirmedRole.org_user.updated_at : void 0,
        seatSwapIntended: isProrationEnabled && k
      });
    }
  });
}
function $(e) {
  let {
    fileRole,
    onConfirmClick,
    loading,
    currentSeatType,
    neededSeatType,
    licenseType,
    priceString
  } = e;
  let d = _$$P();
  let c = _$$L();
  let m = E4(fileRole, d);
  let h = currentSeatType ? renderI18nText("file_permissions_modal.update_seat_tab.user_currently_has_a_current_seat_you_can_upgrade", {
    user: jsx("span", {
      className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
      children: m
    }),
    currentSeat: JT(currentSeatType),
    seatType: JT(neededSeatType),
    product: _$$E(licenseType)
  }) : renderI18nText("file_permissions_modal.update_seat_tab.user_needs_a_bundle_seat", {
    user: jsx("span", {
      className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
      children: m
    }),
    seat_type: JT(neededSeatType),
    product: _$$E(licenseType)
  });
  return jsxs(fu, {
    name: e0.SHARE_MODAL_UPDATE_SEAT_TAB,
    children: [jsxs("div", {
      className: "x78zum5 xk0qfmw xdt5ytf x1pulhmw xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5",
      children: [jsx("div", {
        children: h
      }), jsx(Z, {
        seatType: neededSeatType,
        priceString,
        loading
      }), jsx(_$$k3, {
        seatType: neededSeatType,
        userInfo: m,
        priceString
      })]
    }), jsx("div", {
      className: WZ,
      children: jsx("div", {
        className: ix,
        children: jsx($z, {
          variant: "primary",
          onClick: () => {
            c();
            onConfirmClick();
          },
          trackingProperties: {
            trackingDescriptor: _$$c.CONFIRM
          },
          children: getI18nString("file_permissions_modal.update_seat_tab.confirm")
        })
      })
    })]
  });
}
function Z({
  seatType: e,
  priceString: t,
  loading: i
}) {
  return jsx("div", {
    className: "x1bamp8i x19y5rnk",
    children: jsxs(_$$Y, {
      direction: "horizontal",
      verticalAlignItems: "center",
      padding: 16,
      spacing: "auto",
      children: [jsxs(_$$Y, {
        direction: "horizontal",
        spacing: 8,
        children: [jsx(_$$B, {
          type: e,
          size: "24"
        }), jsx(_$$b, {
          type: "listbox",
          text: jsx("span", {
            className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
            children: tI(e)
          }),
          popoverContent: jsxs("div", {
            className: "x78zum5 xdt5ytf x1nfngrj x1n0bwc9 xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5",
            children: [jsx("div", {
              className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659 x1kax57l",
              children: _$$O(e)
            }), jsx(_$$i, {
              seatType: e,
              spacing: 8,
              forceDarkThemeForFigmakeIcon: !0
            })]
          })
        })]
      }), !!i && jsx(_$$k, {}), !!t && !i && jsx("div", {
        children: getI18nString("file_permissions_modal.update_seat_tab.per_month", {
          priceString: t
        })
      })]
    })
  });
}
function X(e, t) {
  e(_$$F.enqueue({
    message: getI18nString("file_permissions_modal.update_seat_tab.seat_assigned", {
      seatType: _$$O(t)
    }),
    type: "update-seat-success"
  }));
}
function Q(e) {
  e(_$$F.enqueue({
    message: getI18nString("file_permissions_modal.update_seat_tab.seat_update_error"),
    error: !0,
    type: "update-seat-error"
  }));
}
export const G = $$W0;
export const g = $$K1;