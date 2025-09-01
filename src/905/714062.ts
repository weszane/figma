import { Jj } from "../905/382883";
import { eU } from "../figma_app/27355";
import { qM, S2, sd, hp } from "../905/171315";
import { Q8, BA } from "../905/61477";
import { nv } from "../905/182534";
import { WY, dC, qy } from "../figma_app/162807";
import { L8, zD, _4, J, P_, q$ } from "../905/124270";
var $$c4 = (e => (e.TYPE = "TYPE", e.TYPE_AND_VALUES = "TYPE_AND_VALUES", e))($$c4 || {});
let u = eU([]);
let $$p3 = eU(e => e(u), (e, t, i) => {
  t(u, i);
});
let $$m0 = eU(e => {
  let t = e(L8);
  let i = e(zD);
  let n = e(Q8);
  let r = e(BA);
  let o = $$_2(t, i);
  if (n.length < 2 || 0 === o.length || r) return null;
  for (let e of o) {
    let t = y(qM(e) + ":");
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
let h = eU(e => {
  let t = e($$m0);
  if (!t || null == t.valueToQuery) return null;
  let i = t.valueToQuery;
  if (t.facetType === WY.RESOURCE) {
    let n = e(_4);
    let r = n.map(S2);
    let s = [];
    return (n.forEach((e, t) => {
      A(i, r[t]) && s.push(e);
    }), 0 === s.length) ? null : {
      suggestionType: "TYPE_AND_VALUES",
      facetType: WY.RESOURCE,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: s.slice(0, 5)
    };
  }
  let r = e($$p3);
  if (0 === r.length) return null;
  if (t.facetType === WY.CREATOR) {
    let i = nv(r, dC.USERS);
    if (0 === i.length) return null;
    let a = e(J);
    let s = a?.value || [];
    let c = i.filter(e => !Jj(s, e)).slice(0, 5);
    if (0 === c.length) return null;
    let u = c.map(e => ({
      type: WY.CREATOR,
      value: e
    }));
    return {
      suggestionType: "TYPE_AND_VALUES",
      facetType: WY.CREATOR,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: u
    };
  }
  if (t.facetType === WY.SPACE) {
    let i = e(P_);
    let a = e(q$);
    let s = [];
    if (a.includes(qy.FOLDER)) {
      let e = i?.value?.folders || [];
      let t = nv(r, dC.PROJECTS).slice(0, 5).filter(t => !Jj(e, t)).map(e => ({
        type: WY.SPACE,
        spaceType: qy.FOLDER,
        value: e
      }));
      s.push(...t);
    }
    if (a.includes(qy.TEAM)) {
      let e = i?.value?.teams || [];
      let t = nv(r, dC.TEAMS).slice(0, 5).filter(t => !Jj(e, t)).map(e => ({
        type: WY.SPACE,
        spaceType: qy.TEAM,
        value: e
      }));
      s.push(...t);
    }
    if (a.includes(qy.ORG)) {
      let e = i?.value?.orgs || [];
      let t = nv(r, dC.ORGS).slice(0, 5).filter(t => !Jj(e, t)).map(e => ({
        type: WY.SPACE,
        spaceType: qy.ORG,
        value: e
      }));
      s.push(...t);
    }
    return 0 === s.length ? null : {
      suggestionType: "TYPE_AND_VALUES",
      facetType: WY.SPACE,
      facetTypeIndex: t.facetTypeIndex,
      facetValues: s.slice(0, 5)
    };
  }
  return null;
});
let $$g1 = eU(e => {
  let t = e($$m0);
  return e(h) || t;
});
let $$f5 = eU(null);
export function $$_2(e, t) {
  let i = new Set(t);
  sd(WY.RESOURCE, e) && i.$$delete(WY.RESOURCE);
  let n = 0;
  let r = 0;
  for (let t of e) {
    t.type === WY.CREATOR && n++;
    t.type === WY.SPACE && r++;
  }
  n >= hp && i.$$delete(WY.CREATOR);
  r >= hp && i.$$delete(WY.SPACE);
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