import { jsxs, jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { Zr } from "../figma_app/930338";
import { DP } from "../905/158740";
import p from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { lR, e6 } from "../figma_app/617427";
import { sx } from "../905/941192";
import { DP as _$$DP } from "../905/640017";
import { J } from "../905/273120";
import { UD, Jm, zr } from "../3674/371829";
import { W as _$$W } from "../905/200727";
import { renderI18nText } from "../905/303541";
import { fu } from "../figma_app/831799";
import { Y } from "../905/830372";
import { Pf, H8 } from "../905/590952";
import { Wi, JR } from "../figma_app/162641";
import { useState, useEffect } from "react";
import { FPlanNameType, FOrganizationLevelType, FUserTypeClassification, FMemberRoleType, FProductAccessType } from "../figma_app/191312";
import { X$, D6, S2, px, Ty } from "../figma_app/465071";
import { vh, td } from "../figma_app/181241";
import { sZ } from "../905/845253";
import { ud } from "../905/513035";
import { w as _$$w } from "../figma_app/171404";
var h = p;
function y({
  imgSrc: e,
  imgWidth: t = 328,
  imgHeight: n = 150,
  hideImgBorder: i = !1,
  content: o,
  primaryButtonLabel: l,
  primaryButtonOnClick: s,
  primaryButtonTrackingProperties: r,
  secondaryButtonLabel: d,
  secondaryButtonOnClick: c,
  secondaryButtonTrackingProperties: p
}) {
  let g = "light" === _$$DP();
  let y = "ui3" === DP().version;
  return jsxs("div", {
    className: _$$s.py24.px16.cursorDefault.selectNone.flex.flexColumn.gap24.$,
    "data-testid": "paywall-modal",
    children: [jsx("div", {
      className: _$$s.bRadius4.overflowHidden.$$if(g && !i, _$$s.b1.colorBorder).$,
      style: sx.add({
        height: `${n}px`
      }).$,
      children: jsx(J, {
        src: e,
        alt: "",
        width: t
      })
    }), jsx("div", {
      className: _$$s.flex.flexColumn.gap6.$,
      children: o
    }), jsxs("div", {
      className: h()(_$$s.flex.flexColumn.gap8.$, UD),
      children: [l && s && jsx(b, {
        label: l,
        onClick: s,
        trackingProperties: r
      }), d && c && jsx(j, {
        label: d,
        onClick: c,
        trackingProperties: p,
        isUI3: y
      })]
    })]
  });
}
function b({
  label: e,
  onClick: t,
  trackingProperties: n = {}
}) {
  return jsx("span", {
    className: _$$s.cursorPointer.$,
    children: jsx(lR, {
      variant: "primary",
      onClick: t,
      trackingProperties: n,
      htmlAttributes: {
        "data-testid": "primary-button"
      },
      children: jsx("span", {
        className: Jm,
        "data-testid": "primary-button-label",
        children: e
      })
    })
  });
}
function j({
  label: e,
  isUI3: t,
  onClick: n,
  trackingProperties: i = {}
}) {
  return t ? jsx("div", {
    className: zr,
    children: jsx(lR, {
      variant: "secondary",
      onClick: n,
      trackingProperties: i,
      htmlAttributes: {
        "data-testid": "secondary-button"
      },
      children: jsx("span", {
        className: Jm,
        "data-testid": "secondary-button-label",
        children: e
      })
    })
  }) : jsx(e6, {
    className: h()(_$$s.flex.justifyCenter.alignCenter.py8.px32.h40.maxWFull.cursorPointer.$, zr),
    onClick: n,
    htmlAttributes: {
      "data-testid": "secondary-button"
    },
    trackingProperties: i,
    children: jsx("div", {
      className: Jm,
      "data-testid": "secondary-button-label",
      children: e
    })
  });
}
let $$E = {
  avatar: {
    boxSizing: "x9f619",
    position: "x1n2onr6",
    borderRadius: "x16rqkct",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  avatarBorderDark: {
    border: "xt90n8w",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  avatarBorderLight: {
    border: "x5hafjq",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  avatarZIndex: e => [{
    zIndex: "xbgtp72",
    $$css: !0
  }, {
    "--zIndex": 900 - e
  }],
  marginRight: {
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  avatarTooltipBorder: {
    border: "x1j7q7xk",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  tooltipNumOtherUsersAvatar: {
    background: "x14ocvy",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    width: "xgd8bvy",
    height: "x1fgtraw",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    $$css: !0
  },
  cursorDefault: {
    cursor: "xt0e3qv",
    $$css: !0
  }
};
function C({
  users: e,
  size: t = Pf.MEDIUM,
  maxShow: n = 3,
  isTooltip: i
}) {
  let o = _$$DP();
  let l = e.slice(0, n);
  let s = i ? "avatarTooltipBorder" : "dark" === o ? "avatarBorderDark" : "avatarBorderLight";
  return jsx(Y, {
    verticalAlignItems: "center",
    spacing: "-8px",
    horizontalAlignItems: "start",
    width: "hug-contents",
    children: l.map((e, n) => jsx("div", {
      ...xk($$E.avatarZIndex(i ? -n : n), !i && n === l.length - 1 && $$E.marginRight),
      children: jsx("div", {
        ...xk($$E.avatar, $$E[s]),
        children: jsx(H8, {
          user: e,
          size: t
        })
      })
    }, `${e.id}${n}`))
  });
}
let S = "dev_mode_social_proof_skeletons--avatarSkeleton--EFbYe";
function P() {
  return jsxs(Y, {
    verticalAlignItems: "center",
    spacing: "-8px",
    horizontalAlignItems: "start",
    width: "hug-contents",
    children: [jsx("div", {
      style: sx.add({
        zIndex: 900
      }).$,
      children: jsx("div", {
        className: S
      })
    }), jsx("div", {
      style: sx.add({
        zIndex: 899
      }).$,
      children: jsx("div", {
        className: S
      })
    }), jsx("div", {
      style: sx.add({
        zIndex: 898
      }).$,
      children: jsx("div", {
        className: S
      })
    })]
  });
}
function L() {
  return jsx(Wi, {
    className: h()(_$$s.h12.wFull.inlineBlock.$, "dev_mode_social_proof_skeletons--textSkeleton--Vjugs"),
    animationType: JR.NO_SHIMMER
  });
}
let B = new class {
  constructor() {
    this.TotalActiveDevModeUsersSchemaValidator = vh();
    this.ActiveDevModeUserAvatarsSchemaValidator = vh();
  }
  getTotalActiveDevModeUsers(e) {
    return this.TotalActiveDevModeUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/dev_handoff/social_proof/total_active_users", {
      team_id: e.teamId,
      org_id: e.orgId
    }));
  }
  getActiveDevModeUserAvatars(e) {
    return this.ActiveDevModeUserAvatarsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/dev_handoff/social_proof/active_user_avatars", td.toAPIParameters(e)));
  }
}();
let z = {
  isShowing: !1,
  totalActiveDevModeUsers: 0
};
let V = {
  container: {
    borderRadius: "x1mxnbhz",
    boxShadow: "x1wu5q8a",
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    padding: "xtdwleo",
    minHeight: "x1wxaq2x",
    $$css: !0
  },
  backgroundLight: {
    background: "xnyijpa",
    $$css: !0
  },
  backgroundDark: {
    background: "xgnke1b",
    $$css: !0
  }
};
function H(e) {
  let {
    isShowing,
    totalActiveDevModeUsers
  } = function () {
    let e = X$("useShowDevModeSocialProof").unwrapOr(null);
    let t = D6("useShowDevModeSocialProof").unwrapOr(null);
    let n = e?.tier === FPlanNameType.PRO;
    let a = e?.key.type === FOrganizationLevelType.ORG;
    let i = t?.key.type === FUserTypeClassification.ORG_USER && t?.permission === FMemberRoleType.GUEST;
    let o = sZ();
    let {
      isLoading,
      isSuccess,
      totalActiveDevModeUsers: _totalActiveDevModeUsers
    } = function () {
      let [e, t] = useState(!0);
      let [n, a] = useState(!1);
      let [i, o] = useState(!1);
      let [l, s] = useState(0);
      let [r, d] = useState(null);
      let c = X$("useTotalActiveDevModeUsers").unwrapOr(null);
      let u = c?.key.parentId;
      let p = c?.key.type;
      useEffect(() => {
        u && B.getTotalActiveDevModeUsers({
          teamId: p === FOrganizationLevelType.TEAM ? u : void 0,
          orgId: p === FOrganizationLevelType.ORG ? u : void 0
        }).then(({
          data: e
        }) => {
          s(e.meta.count);
          o(!0);
        }).catch(e => {
          d(e);
          a(!0);
        }).$$finally(() => {
          t(!1);
        });
      }, [u, p]);
      return {
        isLoading: e,
        isError: n,
        isSuccess: i,
        error: r,
        totalActiveDevModeUsers: l
      };
    }();
    return isLoading || !isSuccess || !a && !n || a && i || o?.k12_google_org || a && _totalActiveDevModeUsers < 5 || n && _totalActiveDevModeUsers < 3 ? z : {
      isShowing: !0,
      totalActiveDevModeUsers: _totalActiveDevModeUsers
    };
  }();
  return isShowing ? jsx(W, {
    totalActiveDevModeUsers,
    ...e
  }) : null;
}
function W({
  totalActiveDevModeUsers: e,
  numAvatars: t
}) {
  let n = _$$DP();
  let {
    isLoading,
    isError,
    users
  } = function (e = 3) {
    let [t, n] = useState(!0);
    let [a, i] = useState(!1);
    let [o, l] = useState(!1);
    let [s, r] = useState([]);
    let [d, c] = useState(null);
    let u = X$("useActiveDevModeUserAvatars").unwrapOr(null);
    let p = u?.key.parentId;
    let h = u?.key.type;
    useEffect(() => {
      p && B.getActiveDevModeUserAvatars({
        teamId: h === FOrganizationLevelType.TEAM ? p : void 0,
        orgId: h === FOrganizationLevelType.ORG ? p : void 0,
        numAvatars: e
      }).then(({
        data: e
      }) => {
        r(e.meta.users);
        l(!0);
      }).catch(e => {
        c(e);
        i(!0);
      }).$$finally(() => {
        n(!1);
      });
    }, [p, h, e]);
    return {
      isLoading: t,
      isError: a,
      isSuccess: o,
      error: d,
      users: s
    };
  }(t);
  if (isLoading) return jsxs("div", {
    ...xk(V.container, "dark" === n ? V.backgroundDark : V.backgroundLight),
    children: [jsx(P, {}), jsx(L, {})]
  });
  if (isError) return null;
  let s = users.map(e => e.id).join(",");
  let d = users[0]?.name ?? "";
  return jsx(fu, {
    name: "Dev Mode Social Proof",
    properties: {
      devModeSocialProofAvatarUserIds: s,
      devModeSocialProofNameShown: d,
      devModeSocialProofTotalActiveDevModeUsers: e
    },
    children: jsxs("div", {
      ...xk(V.container, "dark" === n ? V.backgroundDark : V.backgroundLight),
      children: [jsx(C, {
        users,
        maxShow: 3
      }), jsx("span", {
        className: "x1yn0g08",
        children: renderI18nText("dev_handoff.social_proof.how_many_other_people_are_using_dev_mode", {
          userName: d,
          totalActiveDevModeUsers: e - 1
        })
      })]
    })
  });
}
export function $$K1({
  imgSrc: e,
  imgWidth: t = 328,
  imgHeight: n = 150,
  hideImgBorder: i = !1,
  content: o,
  modalType: l,
  primaryButtonProps: s,
  secondaryButtonProps: r
}) {
  let d = _$$W();
  let c = {
    type: l,
    text: s?.type,
    trackingDescriptor: s?.trackingDescriptor,
    ...d
  };
  let u = {
    type: l,
    text: r?.type,
    trackingDescriptor: r?.trackingDescriptor,
    ...d
  };
  return jsx(y, {
    content: o,
    hideImgBorder: i,
    imgHeight: n,
    imgSrc: e,
    imgWidth: t,
    primaryButtonLabel: s?.label,
    primaryButtonOnClick: s?.onClick,
    primaryButtonTrackingProperties: c,
    secondaryButtonLabel: r?.label,
    secondaryButtonOnClick: r?.onClick,
    secondaryButtonTrackingProperties: u
  });
}
export function $$X0({
  imgSrc: e,
  imgWidth: t,
  imgHeight: n,
  hideImgBorder: r,
  content: u,
  modalType: p,
  primaryButtonProps: h,
  secondaryButtonProps: f
}) {
  let g = _$$W();
  let x = hS({
    open: !0,
    onClose: lQ,
    preventUserClose: !0,
    recordingKey: "dev-mode-paywall-modal"
  });
  let m = function () {
    let e = S2();
    let t = px();
    return "loaded" !== e.status || "loaded" !== t.status ? null : {
      planParentId: e.data.key.parentId,
      planType: e.data.key.type,
      planTier: e.data.tier,
      isOrgGuest: Ty(t.data)
    };
  }();
  let _ = "blocking modal" === p;
  return jsx(fu, {
    name: Zr(p),
    properties: {
      ...g,
      primaryCtaTrackingDescriptor: h?.trackingDescriptor,
      secondaryCtaTrackingDescriptor: f?.trackingDescriptor
    },
    enabled: g?.gracePeriod !== void 0,
    children: jsxs(bL, {
      width: 392,
      manager: x,
      children: [jsx(vo, {
        children: jsx(nB, {
          children: jsx($$K1, {
            content: u,
            hideImgBorder: r,
            imgHeight: n,
            imgSrc: e,
            imgWidth: t,
            modalType: p,
            primaryButtonProps: h,
            secondaryButtonProps: f
          })
        })
      }), _ && jsx(vo, {
        className: "x1xmf6yo xh8yej3",
        children: jsx(nB, {
          padding: 0,
          children: getFeatureFlags().is_extended_social_proof_enabled ? null !== m ? jsx(_$$w, {
            seatType: ud.DEVELOPER,
            licenseType: FProductAccessType.DEV_MODE,
            entryPoint: "dev-mode-blocking-modal",
            planData: m
          }) : null : jsx(H, {})
        })
      })]
    })
  });
}
export const I = $$X0;
export const E = $$K1;