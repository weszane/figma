import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { flatten, sortByPropertyWithOptions } from "../figma_app/656233";
import { assertNotNullish, isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import u from "../vendor/260986";
import { useSubscription, useSubscriptionAnalytics } from "../figma_app/288654";
import { gB, getResourceDataOrFallback } from "../905/723791";
import { isInteractionPathCheck } from "../figma_app/897289";
import { yy } from "../figma_app/543529";
import { n1 } from "../figma_app/657017";
import { matchesLibraryKey } from "../905/760074";
import { selectCurrentFile } from "../figma_app/516028";
import { LibraryPresetSubscriptionsV2, SubscribedLibrariesForFile, SubscribedLibrariesForFigJamFile, SubscribedLibrariesForSlidesFile, SubscribedLibrariesForBuzzFile } from "../figma_app/43951";
import { Nn } from "../figma_app/177636";
import { f as _$$f } from "../figma_app/252485";
import { getProviderConfigType } from "../figma_app/155411";
import { T9 } from "../figma_app/528509";
import { useCurrentPublicPlan, useIsProOrStudentPlan } from "../figma_app/465071";
var p = u;
var $$x1 = (e => (e.COMMUNITY = "community", e.ORGANIZATION = "organization", e.WORKSPACE = "workspace", e.TEAM = "team", e.FILE = "file", e.USER = "user", e))($$x1 || {});
let N = createContext(null);
let $$C4 = atom(void 0);
export function $$w6() {
  let {
    subscription,
    ensureSubscription
  } = assertNotNullish(useContext(N), "Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>");
  useEffect(() => {
    ensureSubscription();
  }, [ensureSubscription]);
  let r = useMemo(() => gB([]), []);
  return isInteractionPathCheck() ? r : subscription;
}
export function $$O8() {
  let e = $$w6();
  return useMemoStable(() => {
    let t = new Set();
    e.data?.forEach(e => t.add(e.fileKey));
    return t;
  }, [e.data]);
}
export function $$R9() {
  let e = $$w6();
  return useMemoStable(() => {
    let t = new Set();
    e.data?.forEach(e => t.add(e.libraryKey));
    return t;
  }, [e.data]);
}
export function $$L10() {
  let {
    untransformedSubscription,
    ensureSubscription
  } = assertNotNullish(useContext(N), "Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>");
  useEffect(() => {
    ensureSubscription();
  }, [ensureSubscription]);
  return untransformedSubscription;
}
export function $$P7() {
  let {
    untransformedSubscription
  } = assertNotNullish(useContext(N), "Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>");
  if ("loaded" !== untransformedSubscription.status) return {};
  let t = {};
  let {
    file
  } = untransformedSubscription.data;
  file?.libraryOrgSubscriptions.length && (t.org = file.libraryOrgSubscriptions.reduce((e, t) => {
    let r = t.library?.file?.libraryKey;
    r && e.add(_$$l(r));
    return e;
  }, new Set()));
  file?.libraryTeamSubscriptions.length && (t.team = file.libraryTeamSubscriptions.reduce((e, t) => {
    let r = t.library?.file?.libraryKey;
    r && e.add(_$$l(r));
    return e;
  }, new Set()));
  file?.libraryFileSubscriptions.length && (t.file = file.libraryFileSubscriptions.reduce((e, t) => {
    let r = t.library?.file?.libraryKey;
    r && e.add(_$$l(r));
    return e;
  }, new Set()));
  file?.libraryUserSubscriptions.length && (t.user = file.libraryUserSubscriptions.reduce((e, t) => {
    let r = t.library?.file?.libraryKey;
    r && e.add(_$$l(r));
    return e;
  }, new Set()));
  return t;
}
export function $$D0({
  children: e
}) {
  let t = selectCurrentFile();
  let r = !!t?.teamId;
  let a = T9(t?.project);
  useAtomWithSubscription(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType()
  }));
  Nn();
  let [s, o] = useState(!1);
  let c = t?.key;
  let u = t?.teamId;
  let p = t?.team?.workspaceId;
  let m = t?.parentOrgId;
  let E = _$$f(t?.editorType ?? null);
  let x = t?.editorType === "cooper" && !!getFeatureFlags().buzz_library_subscriptions;
  let w = useMemo(() => E ? "slides" : x ? "cooper" : t?.editorType === "whiteboard" ? "whiteboard" : "design", [x, E, t?.editorType]);
  let O = useMemo(() => ({
    fileKey: c || "",
    teamId: u ?? "-1",
    workspaceId: p || null,
    orgId: m || null,
    group: getProviderConfigType() ?? null
  }), [c, u, p, m]);
  let R = useSubscription(SubscribedLibrariesForFile, O, {
    enabled: !!t && s && "design" === w
  });
  let L = useSubscription(SubscribedLibrariesForFigJamFile, O, {
    enabled: !!t && s && "whiteboard" === w
  });
  let P = useSubscription(SubscribedLibrariesForSlidesFile, O, {
    enabled: !!t && s && "slides" === w
  });
  let D = useSubscription(SubscribedLibrariesForBuzzFile, O, {
    enabled: !!t && s && "cooper" === w
  });
  let F = useMemo(() => {
    switch (w) {
      case "design":
        return R;
      case "whiteboard":
        return function (e) {
          if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
          let t = e.data.file;
          return t ? gB({
            file: function (e) {
              var t;
              let r = {
                ...e,
                currentUser: (t = e.currentUser) ? {
                  ...t,
                  orgAwareTeamRoles: t.orgAwareTeamRoles.map(e => {
                    let t = getResourceDataOrFallback(e.team?.libraryTeamSubscriptionsForFigJam);
                    return {
                      ...e,
                      team: e.team && t ? {
                        ...e.team,
                        libraryTeamSubscriptions: t
                      } : null
                    };
                  })
                } : null,
                libraryOrgSubscriptions: "loaded" === e.libraryOrgSubscriptionsForFigJam.status ? e.libraryOrgSubscriptionsForFigJam.data : [],
                libraryTeamSubscriptions: "loaded" === e.libraryTeamSubscriptionsForFigJam.status ? e.libraryTeamSubscriptionsForFigJam.data : [],
                libraryUserSubscriptions: "loaded" === e.libraryUserSubscriptionsForFigJam.status ? e.libraryUserSubscriptionsForFigJam.data : []
              };
              r.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(e => {
                e.isSubscribed = e.figJamSubscribed ?? !1;
              });
              return r;
            }(t),
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          }) : gB({
            file: null,
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          });
        }(L);
      case "slides":
        return function (e) {
          if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
          let t = e.data.file;
          return t ? gB({
            file: function (e) {
              var t;
              let r = {
                ...e,
                currentUser: (t = e.currentUser) ? {
                  ...t,
                  orgAwareTeamRoles: t.orgAwareTeamRoles.map(e => {
                    let t = getResourceDataOrFallback(e.team?.libraryTeamSubscriptionsForSlides);
                    return {
                      ...e,
                      team: e.team && t ? {
                        ...e.team,
                        libraryTeamSubscriptions: t
                      } : null
                    };
                  })
                } : null,
                libraryOrgSubscriptions: "loaded" === e.libraryOrgSubscriptionsForSlides.status ? e.libraryOrgSubscriptionsForSlides.data : [],
                libraryTeamSubscriptions: "loaded" === e.libraryTeamSubscriptionsForSlides.status ? e.libraryTeamSubscriptionsForSlides.data : [],
                libraryUserSubscriptions: "loaded" === e.libraryUserSubscriptionsForSlides.status ? e.libraryUserSubscriptionsForSlides.data : []
              };
              r.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(e => {
                e.isSubscribed = e.slidesSubscribed ?? !1;
              });
              return r;
            }(t),
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          }) : gB({
            file: null,
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          });
        }(P);
      case "cooper":
        return function (e) {
          if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
          let t = e.data.file;
          return t ? gB({
            file: function (e) {
              var t;
              let r = {
                ...e,
                currentUser: (t = e.currentUser) ? {
                  ...t,
                  orgAwareTeamRoles: t.orgAwareTeamRoles.map(e => {
                    let t = getResourceDataOrFallback(e.team?.libraryTeamSubscriptionsForBuzz);
                    return {
                      ...e,
                      team: e.team && t ? {
                        ...e.team,
                        libraryTeamSubscriptions: t
                      } : null
                    };
                  })
                } : null,
                libraryOrgSubscriptions: "loaded" === e.libraryOrgSubscriptionsForBuzz.status ? e.libraryOrgSubscriptionsForBuzz.data : [],
                libraryTeamSubscriptions: "loaded" === e.libraryTeamSubscriptionsForBuzz.status ? e.libraryTeamSubscriptionsForBuzz.data : [],
                libraryUserSubscriptions: "loaded" === e.libraryUserSubscriptionsForBuzz.status ? e.libraryUserSubscriptionsForBuzz.data : []
              };
              r.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(e => {
                e.isSubscribed = "loaded" === e.buzzSubscribed.status && e.buzzSubscribed.data || !1;
              });
              return r;
            }(t),
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          }) : gB({
            file: null,
            libraryPresetSubscriptionsV2: e.data.libraryPresetSubscriptionsV2
          });
        }(D);
    }
  }, [w, R, L, P, D]);
  let j = function (e, t, r) {
    let n = n1();
    let a = yy()?.id;
    let s = useCurrentPublicPlan("useTransformSubscription");
    let o = useIsProOrStudentPlan(s).unwrapOr(!1);
    return useMemo(() => $$M5(e, t, r, n, a ?? null, o), [e, t, r, n, a, o]);
  }(F, r, a);
  let U = useMemo(() => ({
    subscription: j,
    ensureSubscription: () => o(!0),
    untransformedSubscription: F
  }), [F, j]);
  let B = Xr($$C4);
  useEffect(() => {
    "loaded" === j.status && B(j.data);
  }, [j, B]);
  return jsxs(Fragment, {
    children: [jsx(N.Provider, {
      value: U,
      children: e
    }), s && jsx(k, {
      subscription: j
    })]
  });
}
function k({
  subscription: e
}) {
  useSubscriptionAnalytics(e, "Subscribed Libraries Subscription Load Time", {
    numLibraries: "loaded" === e.status ? e.data.length : 0
  });
  return null;
}
export function $$M5(e, t, r, n, i, o) {
  if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
  let l = e.data.file;
  if (null == l) return gB([]);
  let d = e.data.libraryPresetSubscriptionsV2;
  let c = l.libraryOrgSubscriptions;
  let u = l.computedWorkspacePublicInfo?.workspace?.librarySubscriptions;
  let _ = l.libraryTeamSubscriptions;
  let m = l.libraryUserSubscriptions;
  let g = l.libraryFileSubscriptions;
  let f = [...c.filter(e => n || !e.communityLibrary).filter(e => r ? null == (e.libraryFileSubscriptionOverride || e.libraryUserSubscriptionOverride) : null == (e.libraryFileSubscriptionOverride || e.libraryWorkspaceSubscriptionOverride || e.libraryTeamSubscriptionOverride)).map(e => $$F2(e, "organization")), ...g.filter(e => n || !e.communityLibrary).map(e => $$F2(e, "file"))];
  if (!i && !o && n) {
    let e = (d ?? []).filter(e => {
      let t = e.default_subscribed;
      return (r ? !(l?.parentOrgId && null != e.libraryOrgSubscriptionOverride || l?.teamId && null != e.libraryTeamSubscriptionOverride) && null == (e.libraryFileSubscriptionOverride || e.libraryUserSubscriptionOverride) : null == (e.libraryOrgSubscriptionOverride || e.libraryWorkspaceSubscriptionOverride || e.libraryTeamSubscriptionOverride || e.libraryFileSubscriptionOverride)) && t;
    }).map(e => j(e, "community"));
    f.push(...e);
  }
  if (r) {
    let e = m.filter(e => n || !e.communityLibrary).filter(e => e.communityLibrary ? null == e.libraryFileSubscriptionOverride : null == e.libraryFileSubscriptionOverride && e.library?.file?.parentOrgId === i).map(e => $$F2(e, "user"));
    f.push(...e);
  }
  if (t) {
    let e = _.filter(e => n || !e.communityLibrary).filter(U).map(e => $$F2(e, "team"));
    let t = (u || []).filter(e => n || !e.communityLibrary).filter(e => null == (e.libraryFileSubscriptionOverride || e.libraryTeamSubscriptionOverride)).filter(e => e.isSubscribed).map(e => $$F2(e, "workspace"));
    f.push(...e);
    f.push(...t);
  } else {
    let e = function (e) {
      let t = e?.teamId;
      return t ? e?.currentUser?.orgAwareTeamRoles?.filter(e => e.team?.id === t).map(e => e.team?.libraryTeamSubscriptions).filter(isNotNullish) : e?.currentUser?.orgAwareTeamRoles?.map(e => e.team?.libraryTeamSubscriptions).filter(isNotNullish);
    }(l)?.map(e => e.filter(e => n || !e.communityLibrary).filter(B).map(e => $$F2(e, "team"))) ?? [];
    f.push(...flatten(e));
  }
  let y = p()(f.filter(isNotNullish), e => e.libraryKey).filter(e => !matchesLibraryKey(l, e.libraryKey));
  sortByPropertyWithOptions(y, "name");
  return gB(y);
}
export function $$F2(e, t) {
  let r = e.communityLibrary;
  return r ? j({
    communityLibrary: r,
    id: e.id
  }, t) : e.library && e.library && e.library.file ? {
    fileKey: e.library.file.key,
    libraryKey: _$$l(e.library.file.libraryKey),
    id: e.id,
    name: e.library.file.name,
    numComponents: e.library.numComponents ?? 0,
    numStateGroups: e.library.numStateGroups ?? 0,
    numStyles: e.library.numStyles ?? 0,
    numStylesFill: e.library.numStylesFill ?? 0,
    numStylesText: e.library.numStylesText ?? 0,
    numStylesEffect: e.library.numStylesEffect ?? 0,
    numStylesGrid: e.library.numStylesGrid ?? 0,
    numVariables: e.library.numVariables ?? 0,
    numVariablesBoolean: e.library.numVariablesBoolean ?? 0,
    numVariablesFloat: e.library.numVariablesFloat ?? 0,
    numVariablesColor: e.library.numVariablesColor ?? 0,
    numVariablesString: e.library.numVariablesString ?? 0,
    numModuleAssets: e.library.numModuleAssets ?? 0,
    parentOrgId: e.library.file.parentOrgId,
    subscriptionType: t,
    thumbnailUrl: e.library.file.thumbnailUrl,
    thumbnailUrlOverride: e.library.file.thumbnailUrlOverride,
    thumbnailGuid: e.library.file.thumbnailGuid,
    libraryType: "team"
  } : null;
}
function j(e, t) {
  return e?.communityLibrary ? {
    fileKey: e.communityLibrary.hubFileId,
    libraryKey: _$$l(e.communityLibrary.hubFile.libraryKey),
    id: e.id,
    name: e.communityLibrary.name,
    numComponents: e.communityLibrary.numComponents ?? 0,
    numStateGroups: e.communityLibrary.numStateGroups ?? 0,
    numStyles: e.communityLibrary.numStyles ?? 0,
    numStylesFill: e.communityLibrary.numStylesFill ?? 0,
    numStylesText: e.communityLibrary.numStylesText ?? 0,
    numStylesEffect: e.communityLibrary.numStylesEffect ?? 0,
    numStylesGrid: e.communityLibrary.numStylesGrid ?? 0,
    numVariables: e.communityLibrary.numVariables ?? 0,
    numVariablesBoolean: e.communityLibrary.numVariablesBoolean ?? 0,
    numVariablesFloat: e.communityLibrary.numVariablesFloat ?? 0,
    numVariablesColor: e.communityLibrary.numVariablesColor ?? 0,
    numVariablesString: e.communityLibrary.numVariablesString ?? 0,
    numModuleAssets: e.communityLibrary.numModuleAssets ?? 0,
    parentOrgId: null,
    subscriptionType: t,
    thumbnailUrl: e.communityLibrary.hubFile.thumbnailUrl,
    thumbnailUrlOverride: null,
    thumbnailGuid: null,
    libraryType: "community"
  } : null;
}
function U(e) {
  return null == e.libraryFileSubscriptionOverride;
}
function B(e) {
  return null == (e.libraryFileSubscriptionOverride || e.libraryUserSubscriptionOverride);
}
export function $$G3(e, t) {
  switch (t) {
    case "FILL":
      return e.numStylesFill;
    case "TEXT":
      return e.numStylesText;
    case "EFFECT":
      return e.numStylesEffect;
    case "GRID":
      return e.numStylesGrid;
    default:
      return 0;
  }
}
export const zN = $$D0;
export const Qh = $$x1;
export const m1 = $$F2;
export const Sp = $$G3;
export const $p = $$C4;
export const gM = $$M5;
export const je = $$w6;
export const Ly = $$P7;
export const l6 = $$O8;
export const He = $$R9;
export const fi = $$L10;