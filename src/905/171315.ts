import { c2, Jj } from "../905/382883";
import { truncate } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { isCooperFeatureEnabled } from "../figma_app/828186";
import { qy, WY, $L, uH, Zr, Xr } from "../figma_app/162807";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { isSitesFeatureEnabled } from "../905/561485";
let $$c15 = 5;
let $$u19 = {
  [qy.FOLDER]: [],
  [qy.TEAM]: [],
  [qy.ORG]: []
};
export function $$p21(e) {
  return {
    [WY.RESOURCE]: getI18nString("search.facets.resource"),
    [WY.CREATOR]: getI18nString("search.facets.creator"),
    [WY.SPACE]: getI18nString("search.facets.in")
  }[e];
}
export function $$m14(e) {
  return $$p21(e) + ": ";
}
export function $$h25(e) {
  return e.type === WY.RESOURCE ? $$g11(e.value) : e.type === WY.CREATOR ? function (e) {
    let t = e.value.length;
    if (0 === t) return "";
    if (1 === t) {
      let t = e.value[0];
      return truncate(t.name || t.handle, 15);
    }
    return getI18nString("search.facets.multiple_creators", {
      numCreators: t
    });
  }(e) : e.type === WY.SPACE ? function (e) {
    let t = Object.values(e.value).reduce((e, t) => e + t.length, 0);
    return getI18nString("search.facets.multiple_spaces", {
      numSpaces: t
    });
  }(e) : "";
}
export function $$g11(e) {
  return {
    [$L.DESIGN_FILES]: getI18nString("search.facets.design_files"),
    [$L.FIGJAM_FILES]: getI18nString("search.facets.figjam_boards"),
    [$L.SLIDES]: getI18nString("search.facets.slides"),
    [$L.SITES]: getI18nString("search.facets.sites"),
    [$L.BUZZ]: getI18nString("search.facets.buzz_files"),
    [$L.MAKE]: getI18nString("search.facets.make_files"),
    [$L.USERS]: getI18nString("search.facets.people"),
    [$L.PROJECTS]: getI18nString("search.facets.projects"),
    [$L.TEAMS]: getI18nString("search.facets.teams"),
    [$L.ALL_FILES]: getI18nString("search.preview_section.all_files"),
    [$L.PLUGINS]: "",
    [$L.WIDGETS]: ""
  }[e];
}
export function $$f3() {
  let e = [$L.DESIGN_FILES, $L.FIGJAM_FILES, $L.SLIDES];
  isCooperFeatureEnabled() && e.push($L.BUZZ);
  isSitesFeatureEnabled() && e.push($L.SITES);
  isFigmakeSitesEnabled() && e.push($L.MAKE);
  return e;
}
export function $$_0(e) {
  return c2(e, $$f3());
}
export function $$A23(e, t) {
  for (let i of t) if (i.type === e) return !0;
  return !1;
}
export function $$y9(e, t) {
  for (let [i, n] of t.entries()) if (n.type === e) return i;
  return -1;
}
export function $$b4(e, t) {
  if (!e) return "";
  switch (e.type) {
    case WY.RESOURCE:
      var i;
      i = e.value;
      return {
        [$L.DESIGN_FILES]: getI18nString("search.facets.design"),
        [$L.FIGJAM_FILES]: getI18nString("search.facets.figjam"),
        [$L.SLIDES]: getI18nString("search.facets.slides"),
        [$L.SITES]: getI18nString("search.facets.sites"),
        [$L.BUZZ]: getI18nString("search.facets.buzz"),
        [$L.MAKE]: getI18nString("search.facets.make"),
        [$L.USERS]: getI18nString("search.facets.people"),
        [$L.PROJECTS]: getI18nString("search.facets.projects"),
        [$L.TEAMS]: getI18nString("search.facets.teams"),
        [$L.ALL_FILES]: "",
        [$L.PLUGINS]: "",
        [$L.WIDGETS]: ""
      }[i];
    case WY.CREATOR:
      return function (e, t) {
        let i = e.name || e.handle;
        return t && e.id === t ? getI18nString("search.facets.name_and_you", {
          name: i
        }) : i;
      }(e.value, t);
    case WY.SPACE:
      return e.value.name;
    default:
      return "";
  }
}
export function $$v12(e, t) {
  switch (e) {
    case qy.FOLDER:
      return {
        folderId: t.id
      };
    case qy.TEAM:
      return {
        teamId: t.id
      };
    case qy.ORG:
      return {
        orgId: t.id
      };
  }
}
export function $$I18(e) {
  switch (e.type) {
    case WY.RESOURCE:
      return {
        resourceType: e.value
      };
    case WY.CREATOR:
      return {
        creatorId: e.value.id
      };
    case WY.SPACE:
      return $$v12(e.spaceType, e.value);
  }
}
export function $$E13(e, t, i, n, r) {
  let a = !e.value || $$x6(e);
  return e.type === WY.RESOURCE ? $$R17(a ? null : e, i, n, r) : e.type === WY.CREATOR ? $$R17(t, a ? null : e, n, r) : e.type === WY.SPACE ? $$R17(t, i, a ? null : e, r) : null;
}
export function $$x6(e) {
  return e.type === WY.CREATOR ? 0 === e.value.length : e.type === WY.SPACE && $$w24(e.value);
}
export function $$S7(e, t) {
  return e === qy.FOLDER || e === qy.TEAM || e === qy.ORG ? {
    type: WY.SPACE,
    spaceType: e,
    value: t
  } : null;
}
export function $$w24(e) {
  for (let t of Object.values(e)) if (0 !== t.length) return !1;
  return !0;
}
export function $$C16(e) {
  return e ? {
    type: WY.RESOURCE,
    value: e
  } : null;
}
export function $$T10(e) {
  return e ? {
    type: WY.CREATOR,
    value: e
  } : null;
}
export function $$k1(e) {
  return e ? {
    type: WY.SPACE,
    value: e
  } : null;
}
export function $$R17(e, t, i, n) {
  let r = i && !$$x6(i) ? i.value : null;
  let a = r ? r[qy.FOLDER].map(e => e.id) : [];
  let s = r ? r[qy.TEAM].map(e => e.id) : [];
  let l = r ? r[qy.ORG].map(e => e.id) : [];
  if (t && !$$x6(t)) return {
    searchModelType: uH.FILES,
    editorType: Zr(e),
    creatorIds: t.value.map(e => e.id),
    folderIds: a,
    teamIds: s,
    orgIds: l
  };
  if (n ?? e) switch (n ?? Xr(e)) {
    case uH.FILES:
      return {
        searchModelType: uH.FILES,
        editorType: Zr(e),
        folderIds: a,
        teamIds: s,
        orgIds: l
      };
    case uH.USERS:
      return {
        searchModelType: uH.USERS,
        orgIds: l
      };
    case uH.PROJECTS:
      return {
        searchModelType: uH.PROJECTS,
        teamIds: s,
        orgIds: l
      };
    case uH.TEAMS:
      return {
        searchModelType: uH.TEAMS,
        orgIds: l
      };
    case uH.PRIVATE_PLUGINS:
      return {
        searchModelType: uH.PRIVATE_PLUGINS,
        orgIds: l
      };
    case uH.PRIVATE_WIDGETS:
      return {
        searchModelType: uH.PRIVATE_WIDGETS,
        orgIds: l
      };
    default:
      return null;
  }
  return r ? {
    searchModelType: null,
    folderIds: a,
    teamIds: s,
    orgIds: l
  } : null;
}
export var $$N8 = (e => (e[e.REMOVE_FROM_GROUP = 0] = "REMOVE_FROM_GROUP", e[e.ADD_TO_GROUP = 1] = "ADD_TO_GROUP", e))($$N8 || {});
export function $$P2(e, t, i) {
  let r = i ? i.value : [];
  let a = [];
  1 !== t || Jj(r, e.value) ? 0 === t && (a = r.filter(t => !c2(t, e.value))) : a = [...r, e.value];
  return $$T10(a);
}
export function $$O20(e, t, i) {
  let r;
  let a = i ? i.value : $$u19;
  let s = a[e.spaceType];
  1 !== t || Jj(s, e.value) ? 0 === t && (r = s.flatMap(t => c2(t, e.value) ? [] : [t])) : r = [...s, e.value];
  return $$k1({
    ...a,
    [e.spaceType]: r
  });
}
export function $$D5(e) {
  return !!e && e.length > 50;
}
export function $$L22(e) {
  switch (e) {
    case uH.FILES:
      return [WY.RESOURCE, WY.CREATOR, WY.SPACE];
    case uH.PROJECTS:
    case uH.TEAMS:
    case uH.USERS:
      return [WY.SPACE];
    default:
      return [];
  }
}
export const Aj = $$_0;
export const Bu = $$k1;
export const C8 = $$P2;
export const ES = $$f3;
export const FR = $$b4;
export const GX = $$D5;
export const II = $$x6;
export const KI = $$S7;
export const M2 = $$N8;
export const Nz = $$y9;
export const Rj = $$T10;
export const S2 = $$g11;
export const dd = $$v12;
export const gh = $$E13;
export const gl = $$m14;
export const hp = $$c15;
export const jN = $$C16;
export const nX = $$R17;
export const oM = $$I18;
export const og = $$u19;
export const q1 = $$O20;
export const qM = $$p21;
export const r4 = $$L22;
export const sd = $$A23;
export const wG = $$w24;
export const yA = $$h25;