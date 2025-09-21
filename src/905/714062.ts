import { includesEqual } from "../905/382883";
import { atom } from "../figma_app/27355";
import { getFacetTypeLabel, getResourceTypeLabel, hasFacetType, MAX_TRUNCATE_LENGTH } from "../905/171315";
import { searchInputAtom, isSearchViewAtom } from "../905/61477";
import { nv } from "../905/182534";
import { CreatorResourceType, TeamSpaceType, FolderType } from "../figma_app/162807";
import { L8, zD, _4, J, P_, q$ } from "../905/124270";
var $$c4 = (e => (e.TYPE = "TYPE", e.TYPE_AND_VALUES = "TYPE_AND_VALUES", e))($$c4 || {});
let u = atom([]);
let $$p3 = atom(e => e(u), (e, t, i) => {
  t(u, i);
});
let $$m0 = atom(e => {
  let t = e(L8);
  let i = e(zD);
  let n = e(searchInputAtom);
  let r = e(isSearchViewAtom);
  let o = $$_2(t, i);
  if (n.length < 2 || 0 === o.length || r) return null;
  for (let e of o) {
    let t = y(getFacetTypeLabel(e) + ":");
    let i = y(n, !0).lastIndexOf(t);
    if (i >= 0) return {
      suggestionType: "TYPE",
      facetType: e,
      facetTypeIndex: i,
      valueToQuery: n.slice(i + t.length).trim()
    };
    let r = y(n).split(" ").pop();
    if (r && A(r, t)) return {
      suggestionType: "TYPE",
      facetType: e,
      facetTypeIndex: n.lastIndexOf(r),
      valueToQuery: null
    };
  }
  return null;
});
let h = atom(e => {
  let t = e($$m0);
  if (!t || null == t.valueToQuery) return null;
  let i = t.valueToQuery;
  if (t.facetType === CreatorResourceType.RESOURCE) {
    let n = e(_4);
    let r = n.map(getResourceTypeLabel);
    let s = [];
    return (n.forEach((e, t) => {
      A(i, r[t]) && s.push(e);
    }), 0 === s.length) ? null : {
      suggestionType: "TYPE_AND_VALUES",
      facetType: CreatorResourceType.RESOURCE,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: s.slice(0, 5)
    };
  }
  let r = e($$p3);
  if (0 === r.length) return null;
  if (t.facetType === CreatorResourceType.CREATOR) {
    let i = nv(r, TeamSpaceType.USERS);
    if (0 === i.length) return null;
    let a = e(J);
    let s = a?.value || [];
    let c = i.filter(e => !includesEqual(s, e)).slice(0, 5);
    if (0 === c.length) return null;
    let u = c.map(e => ({
      type: CreatorResourceType.CREATOR,
      value: e
    }));
    return {
      suggestionType: "TYPE_AND_VALUES",
      facetType: CreatorResourceType.CREATOR,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: u
    };
  }
  if (t.facetType === CreatorResourceType.SPACE) {
    let i = e(P_);
    let a = e(q$);
    let s = [];
    if (a.includes(FolderType.FOLDER)) {
      let e = i?.value?.folders || [];
      let t = nv(r, TeamSpaceType.PROJECTS).slice(0, 5).filter(t => !includesEqual(e, t)).map(e => ({
        type: CreatorResourceType.SPACE,
        spaceType: FolderType.FOLDER,
        value: e
      }));
      s.push(...t);
    }
    if (a.includes(FolderType.TEAM)) {
      let e = i?.value?.teams || [];
      let t = nv(r, TeamSpaceType.TEAMS).slice(0, 5).filter(t => !includesEqual(e, t)).map(e => ({
        type: CreatorResourceType.SPACE,
        spaceType: FolderType.TEAM,
        value: e
      }));
      s.push(...t);
    }
    if (a.includes(FolderType.ORG)) {
      let e = i?.value?.orgs || [];
      let t = nv(r, TeamSpaceType.ORGS).slice(0, 5).filter(t => !includesEqual(e, t)).map(e => ({
        type: CreatorResourceType.SPACE,
        spaceType: FolderType.ORG,
        value: e
      }));
      s.push(...t);
    }
    return 0 === s.length ? null : {
      suggestionType: "TYPE_AND_VALUES",
      facetType: CreatorResourceType.SPACE,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: s.slice(0, 5)
    };
  }
  return null;
});
let $$g1 = atom(e => {
  let t = e($$m0);
  return e(h) || t;
});
let $$f5 = atom(null);
export function $$_2(e, t) {
  let i = new Set(t);
  hasFacetType(CreatorResourceType.RESOURCE, e) && i.$$delete(CreatorResourceType.RESOURCE);
  let n = 0;
  let r = 0;
  for (let t of e) {
    t.type === CreatorResourceType.CREATOR && n++;
    t.type === CreatorResourceType.SPACE && r++;
  }
  n >= MAX_TRUNCATE_LENGTH && i.$$delete(CreatorResourceType.CREATOR);
  r >= MAX_TRUNCATE_LENGTH && i.$$delete(CreatorResourceType.SPACE);
  return Array.from(i);
}
let A = (e, t) => y(t).startsWith(y(e));
let y = (e, t) => t ? e.toLocaleLowerCase() : e.toLocaleLowerCase().trim().replace(/\s+/g, " ");
export const H9 = $$m0;
export const Hz = $$g1;
export const RF = $$_2;
export const Vp = $$p3;
export const aI = $$c4;
export const p2 = $$f5;