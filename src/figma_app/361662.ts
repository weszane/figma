import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { pi } from "../figma_app/314264";
import { q5, _G } from "../figma_app/516028";
import { I as _$$I } from "../905/342732";
import { Cn, oA, Rn } from "../905/225265";
import { Ly, He } from "../figma_app/155728";
import { PW } from "../figma_app/633080";
import { U } from "../905/966438";
import { M as _$$M, k as _$$k } from "../905/540025";
import { MA } from "../figma_app/134428";
export function $$m0({
  assetKey: e,
  assetLibraryKey: t,
  assetType: r,
  isList: i,
  sectionNameforTracking: c,
  sectionPosition: m,
  sourceForTracking: b,
  sectionDepth: T,
  aiScore: I,
  lexicalScore: S,
  isExample: v,
  partnerType: A
}) {
  let x = q5();
  let {
    searchSessionId
  } = $$E2();
  let C = $$y4(b);
  let w = useContext(U);
  let O = w?.assetTypeDropdownSelection;
  let {
    query
  } = _$$I(Cn.AssetsPanel);
  let L = $$f3(t);
  let P = $$g1(t, L);
  let D = _$$M();
  let k = function () {
    let [e] = MA();
    return e;
  }();
  let M = D ? k : i ? "LIST" : "GRID";
  let F = _$$k();
  return useMemo(() => ({
    assetKey: e,
    assetLibraryKey: t,
    assetTypeDropdownSelection: O,
    libraryType: L,
    viewMode: M,
    searchQuery: query,
    searchSessionId: searchSessionId ?? void 0,
    source: b,
    sourceSection: c,
    type: function (e) {
      if ("embed" === e) return "embed";
      switch (e) {
        case PW.COMPONENT:
          return "component";
        case PW.STATE_GROUP:
          return "state_group";
        case PW.MODULE:
          return "module";
        case PW.RESPONSIVE_SET:
          return "responsive_set";
        case PW.CODE_COMPONENT:
          return "code_component";
        case PW.CODE_LIBRARY:
        case PW.CODE_FILE:
        case PW.STYLE:
        case PW.VARIABLE:
        case PW.VARIABLE_OVERRIDE:
        case PW.VARIABLE_SET:
        case PW.CONSTRAINED_TEMPLATE:
        case PW.MANAGED_STRING:
          return;
        default:
          throwTypeError(e, "Can't get asset type for logging");
      }
    }(r),
    sectionPosition: m,
    subscriptionLevel: P,
    sectionDepth: T,
    assetsPanelVersion: F,
    fileKey: x?.key,
    fileTeamId: x?.teamId ?? void 0,
    fileOrgId: x?.parentOrgId ?? void 0,
    scoreAi: I,
    scoreLexical: S,
    isExample: v,
    partnerType: A,
    productType: pi({
      editorType: x?.editorType
    }),
    queryId: C ?? void 0
  }), [e, t, O, L, M, query, searchSessionId, b, c, r, m, P, T, F, x?.key, x?.teamId, x?.parentOrgId, x?.editorType, I, S, v, A, C]);
}
export function $$g1(e, t) {
  let r = Ly();
  return useMemo(() => r.file?.has(e) ? "file" : r.user?.has(e) ? "user" : r.team?.has(e) ? "team" : r.org?.has(e) ? "org" : "SUBSCRIBED" === t ? "other" : "", [e, r, t]);
}
export function $$f3(e) {
  let t = _G();
  let r = He();
  return t === e ? "LOCAL" : r.has(e) ? "SUBSCRIBED" : "UNSUBSCRIBED";
}
export function $$E2() {
  let e = oA();
  let t = useSelector(t => e ? t.search.lastLoadedQuery?.sessionId ?? t.search.sessionId : null);
  return {
    query: e,
    searchSessionId: t
  };
}
export function $$y4(e) {
  let t = useSelector(e => e.search.queryId);
  return Rn(e) ?? t;
}
export const Ew = $$m0;
export const GZ = $$g1;
export const Gq = $$E2;
export const Hu = $$f3;
export const tM = $$y4;
