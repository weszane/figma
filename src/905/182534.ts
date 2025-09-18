import { appendNavigationContext, appendUserIdToUrl, compareValues, navigateToFile } from "../905/508367";
import { debugState } from "../905/407919";
import { selectFolderView, selectTeamView } from "../figma_app/976345";
import { selectViewAction } from "../905/929976";
import { filePutAction } from "../figma_app/78808";
import { Pj, Ns, PI } from "../905/977218";
import { Tq } from "../905/697795";
import { buildFileUrl } from "../905/612685";
import { PublicModelType, L0, SearchTypeMode } from "../figma_app/162807";
import { isIncludedView, isOrgView } from "../figma_app/707808";
import { InterProfileType } from "../905/895626";
export function $$h1(e) {
  return !!e.search_model_type;
}
export function $$g6(e, t, i) {
  return t ? `/files/${t}/search?model_type=${i}&q=${e}` : `/files/search?model_type=${i}&q=${e}`;
}
export function $$f4(e, t) {
  let i = e?.currentUser.recentSearches;
  let n = i?.length ? i[0].searches ?? [] : [];
  let r = new Date().getTime();
  return n.filter(e => parseInt(e.timestamp) > r - 864e5 * t);
}
export function $$_0(e, t, i, r, a) {
  let s = buildFileUrl({
    file: e
  });
  return appendNavigationContext(appendUserIdToUrl(s, t), i, r, a);
}
export function $$A14(e) {
  return `/files/project/${e.id}`;
}
export function $$y7(e) {
  return `/files/team/${e.id}`;
}
export function $$b10(e, t) {
  return t ? `/files/${t}/user/${e.id}` : `/files/user/${e.id}`;
}
export function $$v12(e) {
  return $$h1(e) ? e.search_model_type === PublicModelType.FILES ? e.model.key : e.model.id : e.key;
}
export function $$I13(e, t) {
  if (!e) return [];
  for (let i of e) if (i.search_model_type === t) return i.results.map(e => e.model);
  return [];
}
export function $$E11() {
  let e = debugState.getState().selectedView;
  return isIncludedView(e) ? "search" === e.view ? L0.FULL_PAGE : L0.PREVIEW : null;
}
export function $$x8(e, t, i, n, r, a) {
  e(selectViewAction({
    view: "search",
    entryPoint: "file_browser",
    previousView: t && (isIncludedView(t) || isOrgView(t)) ? t : void 0
  }));
  e(Pj({
    category: a ? void 0 : r
  }));
  e(Ns({
    searchModelType: r
  }));
  e(PI({
    query: i,
    searchScope: n,
    searchModelType: r,
    debounce: !0,
    forceRefreshSearchResults: !0,
    searchTypeBehavior: SearchTypeMode.ALL_TYPES_BLOCKING
  }));
}
export function $$S2(e, t, i, r, a) {
  e(filePutAction({
    file: t
  }));
  compareValues(i, t.parent_org_id, r, t.team_id) ? navigateToFile({
    file: {
      key: t.key,
      editorType: t.editor_type || void 0
    }
  }, {
    user: a,
    teamId: r,
    orgId: i
  }) : Tq(e, {
    editorType: t.editor_type,
    key: t.key
  }, i || void 0, r || void 0);
}
export function $$w5(e, t) {
  e(selectFolderView(t.id));
}
export function $$C9(e, t) {
  e(selectTeamView(t.id));
}
export function $$T3(e, t) {
  e(selectViewAction({
    view: "user",
    userId: t.id,
    userViewTab: InterProfileType.INTERNAL_PROFILE,
    orgId: t.org_id
  }));
}
export const AR = $$_0;
export const EN = $$h1;
export const K4 = $$S2;
export const KL = $$T3;
export const L8 = $$f4;
export const NE = $$w5;
export const XW = $$g6;
export const Xx = $$y7;
export const Yb = $$x8;
export const e_ = $$C9;
export const hl = $$b10;
export const li = $$E11;
export const mv = $$v12;
export const nv = $$I13;
export const uF = $$A14;