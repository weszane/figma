import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { k } from "../905/443820";
import { xk } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useWebLoggerTimer } from "../905/485103";
import { EH } from "../905/985374";
import { useSocialProofExpansionExperiment } from "../figma_app/297957";
import { TrackingProvider } from "../figma_app/831799";
import { isFullscreenView } from "../figma_app/976749";
import { getVisibleTheme } from "../905/640017";
import { ProductAccessTypeMap } from "../905/513035";
import { NT } from "../figma_app/579169";
import { FProductAccessType } from "../figma_app/191312";
import { setupResourceAtomHandler } from "../905/713695";
import { Y } from "../905/990807";
import { z } from "../905/114980";
import { Ki, Cx, B7 } from "../905/268793";
let I = {
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
  }
};
let S = {
  design: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-blue-900)" : "var(--ramp-pale-blue-100)"
  }],
  whiteboard: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-purple-900)" : "var(--ramp-pale-purple-100)"
  }],
  slides: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-persimmon-900)" : "var(--ramp-pale-persimmon-100)"
  }],
  sites: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-violet-900)" : "var(--ramp-pale-violet-100)"
  }],
  dev_mode: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-green-800)" : "var(--ramp-pale-green-100)"
  }],
  figmake: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-violet-900)" : "var(--ramp-pale-violet-100)"
  }],
  cooper: e => [{
    background: "x7m5jml",
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
    $$css: !0
  }, {
    "--background": "dark" === e ? "var(--ramp-pale-pink-900)" : "var(--ramp-pale-pink-100)"
  }]
};
export function $$v0(e) {
  let t = useAtomWithSubscription(NT);
  let r = useMemo(() => e.numAvatarsRequested ?? EH, [e.numAvatarsRequested]);
  let [a] = setupResourceAtomHandler(Ki({
    seatType: e.seatType,
    licenseType: e.licenseType,
    planParentId: e.planData.planParentId,
    planType: e.planData.planType
  }));
  return "loaded" === t.status && "loaded" === a.status && Cx({
    planType: e.planData.planType,
    planTier: e.planData.planTier,
    isOrgGuest: e.planData.isOrgGuest,
    totalActiveUsers: a.data.total_active_users,
    seatType: e.seatType
  }) ? jsx(A, {
    ...e,
    numAvatarsRequested: r,
    jobTitle: t.data ?? "",
    totalActiveUsers: a.data.total_active_users
  }) : null;
}
function A(e) {
  let t = getVisibleTheme();
  let r = isFullscreenView();
  let o = useSocialProofExpansionExperiment({
    licenseType: e.licenseType,
    entryPoint: e.entryPoint,
    isOrgGuest: e.planData.isOrgGuest,
    planParentId: e.planData.planParentId,
    planType: e.planData.planType
  });
  let [c] = setupResourceAtomHandler(B7({
    seatType: e.seatType,
    licenseType: e.licenseType,
    numAvatarsRequested: e.numAvatarsRequested,
    jobTitle: e.jobTitle,
    totalActiveUsers: e.totalActiveUsers,
    planData: e.planData
  }), {
    enabled: o
  });
  let g = useMemo(() => {
    var t;
    return e.licenseType ?? (t = e.seatType, ProductAccessTypeMap[t] ?? FProductAccessType.DESIGN);
  }, [e.licenseType, e.seatType]);
  if (useWebLoggerTimer(null != c.data, t => {
    analyticsEventManager.trackDefinedEvent("activation.time_to_load_social_proof", {
      loadTimeMS: t,
      planType: e.planData.planType,
      planParentId: e.planData.planParentId,
      planTier: e.planData.planTier,
      licenseType: e.licenseType ?? "",
      seatType: e.seatType ?? "",
      socialProofEntryPoint: e.entryPoint
    });
  }), "loading" === c.status) return jsx("div", {
    "data-testid": "social-proof",
    ...xk(I.container, S[g](t)),
    children: jsx(k, {})
  });
  if ("loaded" !== c.status || 0 === c.data.length) return null;
  let v = c.data;
  let A = {
    planType: e.planData.planType,
    planParentId: e.planData.planParentId,
    tier: e.planData.planTier,
    licenseType: e.licenseType,
    seatType: e.seatType,
    jobTitle: e.jobTitle,
    socialProofEntryPoint: e.entryPoint,
    socialProofTotalActiveUsers: e.totalActiveUsers,
    socialProofActiveUserAvatars: v.map(e => e.id).join(",")
  };
  return jsx(TrackingProvider, {
    name: "Social Proof",
    properties: A,
    children: jsxs("div", {
      "data-testid": "social-proof",
      ...xk(I.container, S[g](t), g === FProductAccessType.WHITEBOARD && r && S.whiteboard("light")),
      children: [jsx(Y, {
        users: v,
        maxShow: e.numAvatarsRequested,
        licenseType: g,
        isInFullScreen: r
      }), jsx(z, {
        firstUserName: v[0]?.name ?? "",
        totalActiveUsers: e.totalActiveUsers,
        licenseType: e.licenseType,
        seatType: e.seatType
      })]
    })
  });
}
export const w = $$v0;