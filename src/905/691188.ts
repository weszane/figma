import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { c2 } from "../905/382883";
import { g as _$$g } from "../905/125190";
import { xae } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { X as _$$X } from "../905/376628";
import { FP } from "../figma_app/91703";
import { nE, fR, am } from "../figma_app/430563";
import { fu } from "../figma_app/831799";
import { K as _$$K } from "../905/135526";
import { Ho, Ck } from "../figma_app/236178";
import { zK, Lr, XM, pD, GO, Nn } from "../905/561897";
import { o3 } from "../figma_app/255679";
import { $N, fc, Mj, w3, wn, T4, Bt } from "../figma_app/646357";
import { B as _$$B } from "../905/506188";
import { QB } from "../905/921418";
import { T as _$$T } from "../905/486858";
import { FPlanNameType, FOrganizationRoleType } from "../figma_app/191312";
import { D6, X$, j_ } from "../figma_app/465071";
import { Qh } from "../figma_app/155728";
import { ol } from "../figma_app/598018";
import { M } from "../905/540025";
import { l6, sK, c$ } from "../905/794875";
let O = "subscription_toggle--subscriptionToggleAddedButton_v2--iAiH0 subscription_toggle--subscriptionToggleButton_v2--QLPZH subscription_toggle--subscriptionToggleButton--5TqX3";
let D = "subscription_toggle--subscriptionToggleAddToFileButtonSecondary_v2--PZUj- subscription_toggle--subscriptionToggleButton_v2--QLPZH subscription_toggle--subscriptionToggleButton--5TqX3";
export var $$L0 = (e => (e.CLASSIC = "CLASSIC", e.PRIMARY = "PRIMARY", e.SECONDARY = "SECONDARY", e))($$L0 || {});
function F() {
  return {
    searchSessionId: useSelector(e => e.search.sessionId || void 0)
  };
}
export function $$M3(e, t) {
  let i = useAtomWithSubscription(zK).data;
  let n = useAtomWithSubscription(Lr(e)).data;
  let a = useAtomWithSubscription(XM).data;
  let s = useAtomWithSubscription(pD(e)).data;
  let o = useAtomWithSubscription(GO).data;
  let l = Nn();
  return useCallback(r => {
    if (e) return n?.[r] ? {
      ...n[r],
      subscriptionType: Qh.TEAM
    } : s?.[r] ? {
      ...s[r],
      subscriptionType: Qh.WORKSPACE
    } : o?.[r] ? {
      ...o[r],
      subscriptionType: Qh.ORGANIZATION
    } : l?.[r] ? {
      ...l[r],
      subscriptionType: Qh.COMMUNITY
    } : {
      design: null,
      figjam: null,
      slides: null,
      buzz: null,
      subscriptionType: null
    };
    if (t) return i?.[r] ? {
      ...i[r],
      subscriptionType: Qh.USER
    } : a?.[r] ? {
      ...a[r],
      subscriptionType: null
    } : o?.[r] ? {
      ...o[r],
      subscriptionType: Qh.ORGANIZATION
    } : l?.[r] ? {
      ...l[r],
      subscriptionType: Qh.COMMUNITY
    } : {
      design: null,
      figjam: null,
      slides: null,
      buzz: null,
      subscriptionType: null
    };
  }, [e, t, i, n, s, o, a, l]);
}
function j({
  data: e,
  designSubscribed: t,
  figjamSubscribed: i,
  slidesSubscribed: n,
  buzzSubscribed: r,
  fileSubscribedLibraryKeys: a,
  subscriptionTrackingProps: s = {},
  existingSubscription: o
}) {
  if (e.showingDefaultSubscriptionsForTeamId) !function (e, t, i, n, r, a) {
    e.dispatch(nE({
      libraryTeamSubscription: {
        team_id: e.showingDefaultSubscriptionsForTeamId,
        library_key: e.libraryKey,
        subscriptions: {
          design: t,
          figjam: i,
          slides: n,
          buzz: r
        }
      },
      userInitiated: !0,
      existingSubscription: a
    }));
    let s = t ? "Enabled" : "Disabled";
    trackEventAnalytics("Team Library File " + s);
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle", {
      designSubscribed: t,
      figjamSubscribed: i,
      slidesSubscribed: n,
      buzzSubscribed: r,
      subscriptionType: "team"
    });
  }(e, t, i ?? !1, n ?? !1, r ?? !1, o);else if (e.showingDefaultSubscriptionsForUser) {
    var d;
    var c;
    var p;
    d = i ?? !1;
    c = n ?? !1;
    p = r ?? !1;
    e.dispatch(fR({
      libraryUserSubscription: {
        library_key: e.libraryKey,
        subscriptions: {
          design: t,
          figjam: d,
          slides: c,
          buzz: p
        }
      },
      userInitiated: !0,
      existingSubscription: o
    }));
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle", {
      designSubscribed: t,
      figjamSubscribed: d,
      slidesSubscribed: c,
      buzzSubscribed: p,
      subscriptionType: "user"
    });
  } else !function (e, t, i, n) {
    let r = e.openFile;
    if (r) {
      if (e.dispatch(am({
        libraryFileSubscription: {
          file_key: r.key,
          library_key: e.libraryKey,
          is_subscribed: t
        },
        userInitiated: !0,
        fileSubscribedLibraryKeys: n
      })), t) {
        trackEventAnalytics("Library File Enabled", {
          fileKey: r.key,
          fileTeamId: r.team_id,
          fileOrgId: r.parent_org_id,
          libraryKey: e.libraryKey,
          entryPoint: "library_preferences_modal",
          ...i
        }, {
          forwardToDatadog: !0
        });
        let t = e.libraryKey;
        $N(e.library.publishedByLibraryKey.components, t).length > 0 && e.dispatch(FP({
          tab: xae.ASSETS
        }));
      } else trackEventAnalytics("Library File Disabled", {
        fileKey: r.key,
        fileTeamId: r.team_id,
        fileOrgId: r.parent_org_id,
        libraryKey: e.libraryKey,
        entryPoint: "library_preferences_modal",
        ...i
      }, {
        forwardToDatadog: !0
      });
    }
  }(e, t, s, a);
}
export function $$U2({
  disabled: e,
  libraryKey: t,
  showingDefaultSubscriptionsForTeamId: i,
  showingDefaultSubscriptionsForUser: s,
  buttonStyleType: l = "CLASSIC"
}) {
  let d = useDispatch();
  let {
    library,
    openFile
  } = selectWithShallowEqual(H);
  let g = M();
  let f = _$$B(t).data ?? "";
  let _ = useMemo(() => ({
    libraryKey: t,
    showingDefaultSubscriptionsForTeamId: i,
    showingDefaultSubscriptionsForUser: s,
    library,
    openFile: openFile ? {
      key: openFile.key,
      name: openFile.name,
      team_id: openFile.teamId,
      parent_org_id: openFile.parentOrgId,
      org_browsable: openFile.orgBrowsable,
      link_access: openFile.linkAccess
    } : null,
    dispatch: d
  }), [t, i, s, library, openFile, d]);
  let [b, v] = useState(!1);
  let I = useCallback(() => {
    i && d(_$$F.enqueue({
      message: getI18nString("design_systems.libraries_modal.contact_a_team_admin")
    }));
  }, [d, i]);
  let C = F();
  let T = _$$T();
  let k = K(t, i, s);
  let R = useCallback(e => {
    j({
      data: _,
      designSubscribed: e,
      subscriptionTrackingProps: C,
      fileSubscribedLibraryKeys: T,
      existingSubscription: k
    });
    d(QB({
      ignoreLoadingState: g
    }));
  }, [d, C, _, g, T, k]);
  let P = useCallback((t, i) => {
    if (i.stopPropagation(), e) {
      I();
      return;
    }
    R(t);
  }, [e, R, I]);
  let L = fc();
  let U = $$M3(i, s);
  let B = useMemo(() => {
    let e = U(t);
    return void 0 === e ? !!L(t) : !!e.design;
  }, [t, L, U]);
  let V = B ? b ? getI18nString("design_systems.libraries_modal.remove") : getI18nString("design_systems.libraries_modal.added") : getI18nString("design_systems.libraries_modal.add_to_file");
  let G = B ? b ? getI18nString("design_systems.libraries_modal.remove_aria_label", {
    libraryName: f
  }) : "" : getI18nString("design_systems.libraries_modal.add_to_file_aria_label", {
    libraryName: f
  });
  let z = function (e, t, i) {
    switch (e) {
      case "CLASSIC":
        return t && i ? "subscription_toggle--subscriptionToggleRemoveButton--7YMH6 subscription_toggle--subscriptionToggleButton--5TqX3" : "subscription_toggle--subscriptionToggleButton--5TqX3";
      case "PRIMARY":
        if (!t) return "subscription_toggle--subscriptionToggleAddToFileButtonPrimary_v2--LR5Yh subscription_toggle--subscriptionToggleButton_v2--QLPZH subscription_toggle--subscriptionToggleButton--5TqX3";
        return i ? D : O;
      case "SECONDARY":
        if (!t || i) return D;
        return O;
    }
  }(l, B, b);
  return jsx(fu, {
    name: "Library Subscription Toggle",
    trackingTargets: _$$K.RCS,
    children: jsxs("button", {
      disabled: e,
      className: z,
      onClick: e => P(!B, e),
      onMouseDown: e => e.stopPropagation(),
      onKeyDown: e => {
        "Enter" === e.key && P(!B, e);
      },
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      tabIndex: 0,
      "aria-label": G,
      children: [B && !b && jsx("div", {
        className: "CLASSIC" === l ? "subscription_toggle--check--PEBrC" : "subscription_toggle--check_v2--kUNRM",
        children: jsx(_$$g, {})
      }), V]
    })
  });
}
let B = {
  Off: {
    designSubscribed: !1,
    figjamSubscribed: !1,
    slidesSubscribed: !1,
    buzzSubscribed: !1
  },
  Design: {
    designSubscribed: !0
  },
  FigJam: {
    figjamSubscribed: !0
  },
  Slides: {
    slidesSubscribed: !0
  },
  Buzz: {
    buzzSubscribed: !0
  },
  AllFiles: {
    designSubscribed: !0,
    figjamSubscribed: !0,
    slidesSubscribed: !0,
    buzzSubscribed: !0
  }
};
export function $$V1({
  label: e,
  disabled: t,
  libraryKey: i,
  showingDefaultSubscriptionsForTeamId: o,
  showingDefaultSubscriptionsForUser: l,
  confirmCalloutShowing: c,
  setConfirmCalloutShowing: u
}) {
  let m;
  let h = useDispatch();
  let [f, _] = useState(null);
  let {
    library,
    dropdownShown,
    openFile
  } = selectWithShallowEqual(H);
  let x = $$M3(o, l);
  let S = useMemo(() => x(i), [x, i]);
  let C = useMemo(() => void 0 === S ? [B.Off] : function (e) {
    let t = [];
    let i = getFeatureFlags().buzz_library_subscriptions;
    let n = !!e?.buzz;
    return e?.design || e?.figjam || e?.slides || i && n ? (e?.design && e?.figjam && e?.slides && (!i || n) && t.push(B.AllFiles), e?.design && t.push(B.Design), e?.figjam && t.push(B.FigJam), e?.slides && t.push(B.Slides), i && e?.buzz && t.push(B.Buzz), t) : [B.Off];
  }(S), [S]);
  let T = useMemo(() => ({
    libraryKey: i,
    showingDefaultSubscriptionsForTeamId: o,
    showingDefaultSubscriptionsForUser: l,
    library,
    openFile: openFile ? {
      key: openFile.key,
      name: openFile.name,
      team_id: openFile.teamId,
      parent_org_id: openFile.parentOrgId,
      org_browsable: openFile.orgBrowsable,
      link_access: openFile.linkAccess
    } : null,
    dispatch: h
  }), [i, o, l, library, openFile, h]);
  let k = F();
  let R = _$$T();
  let N = K(i, o, l);
  let O = useCallback(e => {
    j({
      data: T,
      designSubscribed: !!e.designSubscribed,
      figjamSubscribed: !!e.figjamSubscribed,
      slidesSubscribed: !!e.slidesSubscribed,
      buzzSubscribed: !!e.buzzSubscribed,
      subscriptionTrackingProps: k,
      fileSubscribedLibraryKeys: R,
      existingSubscription: N
    });
  }, [T, k, R, N]);
  let D = W(i, !!u, o);
  let L = useCallback(e => {
    let t = {};
    for (let e of C) {
      void 0 !== e.designSubscribed && (t.designSubscribed = e.designSubscribed);
      void 0 !== e.figjamSubscribed && (t.figjamSubscribed = e.figjamSubscribed);
      void 0 !== e.slidesSubscribed && (t.slidesSubscribed = e.slidesSubscribed);
      void 0 !== e.buzzSubscribed && (t.buzzSubscribed = e.buzzSubscribed);
    }
    c2(e, B.Off) || c2(e, B.AllFiles) ? t = e : e.designSubscribed ? t.designSubscribed = !t.designSubscribed : e.figjamSubscribed ? t.figjamSubscribed = !t.figjamSubscribed : e.slidesSubscribed ? t.slidesSubscribed = !t.slidesSubscribed : e.buzzSubscribed && (t.buzzSubscribed = !t.buzzSubscribed);
    D(t) ? (_(t), u(!0)) : O(t);
  }, [D, C, u, O]);
  let U = `subscription-dropdown-container-${e ? "subflow" : "mainflow"}-${i}`;
  let V = o3(i);
  let Y = getFeatureFlags().buzz_library_subscriptions;
  m = V ? ["Design", "Off"] : ["Off", "AllFiles", "Divider", "Design", "FigJam", "Slides", ...(Y ? ["Buzz"] : [])];
  let q = G(V, !!Y);
  let $ = z(V, !!Y);
  let Z = {
    id: `subscription-dropdown-${e}-${i}`,
    ariaLabel: e,
    property: C[0],
    multipleSelections: C,
    dispatch: h,
    disabled: t || c,
    dropdownShown,
    onChange: L,
    keepDropdownOpenOnSubmit: !0,
    formatter: q,
    dropdownOverride: $?.format(S),
    dropdownWidth: 150,
    dataOnboardingKey: U
  };
  let X = jsx(l6, {
    ...Z,
    children: m.map(e => "Divider" === e ? jsx(sK, {}, "divider") : jsx(c$, {
      value: B[e]
    }, e))
  });
  return jsxs(Fragment, {
    children: [jsx(fu, {
      name: "Library Subscription Toggle",
      trackingTargets: _$$K.RCS,
      children: jsxs("div", {
        className: "subscription_toggle--subscriptionToggleContainer--70894",
        children: [e && jsx("span", {
          className: "subscription_toggle--subscribeLabelForDropdown--FGl-h",
          children: e
        }), X]
      })
    }), u && jsx(_$$X, {
      isShowing: !!c,
      onCancel: () => u(!1),
      onConfirm: () => {
        f && (O(f), u(!1));
      },
      targetKey: U,
      libraryKey: i
    })]
  });
}
let G = (e, t) => e ? {
  format: e => e.designSubscribed ? getI18nString("design_systems.libraries_modal.on") : getI18nString("design_systems.libraries_modal.off")
} : {
  format: e => e.designSubscribed && e.figjamSubscribed && e.slidesSubscribed && (!t || e.buzzSubscribed) ? getI18nString("design_systems.libraries_modal.all_files") : e.designSubscribed ? getI18nString("design_systems.libraries_modal.design") : e.figjamSubscribed ? getI18nString("design_systems.libraries_modal.fig_jam") : e.slidesSubscribed ? getI18nString("design_systems.libraries_modal.slides") : t && e.buzzSubscribed ? getI18nString("design_systems.libraries_modal.buzz") : getI18nString("design_systems.libraries_modal.off")
};
let z = (e, t) => {
  if (!e) return {
    format: e => {
      if (e.design && e.figjam && e.slides && (!t || e.buzz)) return getI18nString("design_systems.libraries_modal.all_files");
      if (!e.design && !e.figjam && !e.slides && (!t || !e.buzz)) return getI18nString("design_systems.libraries_modal.off");
      let i = [];
      e.design && i.push(getI18nString("design_systems.libraries_modal.design"));
      e.figjam && i.push(getI18nString("design_systems.libraries_modal.fig_jam"));
      e.slides && i.push(getI18nString("design_systems.libraries_modal.slides"));
      t && e.buzz && i.push(getI18nString("design_systems.libraries_modal.buzz"));
      return i.join(", ");
    }
  };
};
let H = e => ({
  dropdownShown: e.dropdownShown,
  library: e.library,
  openFile: e.openFile
});
let W = (e, t, i) => {
  let n = ol();
  let a = n?.id;
  let s = D6("useWillWarnTeamAdminAboutOverride");
  let o = X$("useWillWarnTeamAdminAboutOverride");
  let l = o.unwrapOr(null)?.tier === FPlanNameType.ENTERPRISE;
  let d = j_(s).unwrapOr(!1);
  let c = Ho(e);
  let u = Ck(e);
  let p = n?.workspace_id?.toString();
  let m = !!(p && s.unwrapOr(null)?.fromOrgUser?.workspaceUsers?.find(e => e.workspaceId === p && e.permission === FOrganizationRoleType.ADMIN));
  let h = Mj(e).data;
  let g = w3(e, i).data;
  let f = wn(e, a ?? null).data;
  return useCallback(e => {
    if (!l || !t || !i || !c && !u || d || !c && m) return !1;
    let n = g || h;
    if (!n || null === n.design && null === n.figjam && null === n.slides && null === n.buzz || e.figjamSubscribed === n.figjam && e.designSubscribed === n.design && e.slidesSubscribed === n.slides && e.buzzSubscribed === n.buzz) return !1;
    let r = a ? f : null;
    let s = {
      designSubscribed: !!e.designSubscribed,
      figjamSubscribed: !!e.figjamSubscribed,
      slidesSubscribed: !!e.slidesSubscribed,
      buzzSubscribed: !!e.buzzSubscribed
    };
    return T4(r || n, s);
  }, [l, t, i, c, u, d, m, a, h, g, f]);
};
function K(e, t, i) {
  let n = wn(e, t).data;
  let a = Bt(e).data;
  return useMemo(() => i && a ? a : t && n ? n : {
    design: null,
    figjam: null,
    slides: null,
    buzz: null,
    subscriptionType: null
  }, [i, t, n, a]);
}
export const d_ = $$L0;
export const tq = $$V1;
export const kz = $$U2;
export const ZO = $$M3;