import { vk, mc, N7, QV } from "../905/508367";
import { debugState } from "../905/407919";
import { gN, dm } from "../figma_app/976345";
import { sf } from "../905/929976";
import { yJ } from "../figma_app/78808";
import { Pj, Ns, PI } from "../905/977218";
import { Tq } from "../905/697795";
import { jN } from "../905/612685";
import { uH, L0, Rr } from "../figma_app/162807";
import { QB, bN } from "../figma_app/707808";
import { o as _$$o } from "../905/895626";
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
  return n.filter((e) => parseInt(e.timestamp) > r - 864e5 * t);
}
export function $$_0(e, t, i, r, a) {
  let s = jN({
    file: e
  });
  return vk(mc(s, t), i, r, a);
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
  return $$h1(e) ? e.search_model_type === uH.FILES ? e.model.key : e.model.id : e.key;
}
export function $$I13(e, t) {
  if (!e) return [];
  for (let i of e) if (i.search_model_type === t) return i.results.map((e) => e.model);
  return [];
}
export function $$E11() {
  let e = debugState.getState().selectedView;
  return QB(e) ? "search" === e.view ? L0.FULL_PAGE : L0.PREVIEW : null;
}
export function $$x8(e, t, i, n, r, a) {
  e(sf({
    view: "search",
    entryPoint: "file_browser",
    previousView: t && (QB(t) || bN(t)) ? t : void 0
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
    searchTypeBehavior: Rr.ALL_TYPES_BLOCKING
  }));
}
export function $$S2(e, t, i, r, a) {
  e(yJ({
    file: t
  }));
  N7(i, t.parent_org_id, r, t.team_id) ? QV({
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
  e(gN(t.id));
}
export function $$C9(e, t) {
  e(dm(t.id));
}
export function $$T3(e, t) {
  e(sf({
    view: "user",
    userId: t.id,
    userViewTab: _$$o.INTERNAL_PROFILE,
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