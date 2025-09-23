import n from "../vendor/656470";
import { analyticsEventManager } from "../905/449184";
import { mergeIntersectingMaps } from "../figma_app/476572";
import { L } from "../905/950339";
import { L as _$$L } from "../905/161832";
import { B, R } from "../905/846153";
var i = n;
export class $$c0 {
  constructor() {
    this.indices = Object.entries(L).map(([e, t]) => new _$$L({
      property: e,
      aliases: t
    }));
  }
  indexObject(e) {
    for (let t of this.indices) t.indexObject(e);
  }
  indexObjects(e) {
    for (let t of this.indices) for (let r of e) t.indexObject(r);
  }
  searchWithText(e) {
    return this.search(B(e));
  }
  searchWithProperties(e) {
    return this.search(R(e));
  }
  search(e) {
    let t;
    for (let r of (analyticsEventManager.trackDefinedEvent("figmascope.search", {
      used_operators: e.length > 1 || e[0]?.property != null
    }), e)) {
      let e = new Map();
      for (let t of this.getIndicesToSearchForToken(r)) for (let n of t.search(r)) {
        let {
          object,
          ...r
        } = n;
        e.has(object) ? e.get(object).matches.push(r) : e.set(object, {
          object,
          matches: [r]
        });
      }
      t = t ? mergeIntersectingMaps(t, e, (e, t, r) => ({
        object: e,
        matches: t.matches.concat(r.matches)
      })) : e;
    }
    return t ? i()(Array.from(t.values())).sort(p) : [];
  }
  getIndicesToSearchForToken({
    property: e
  }) {
    return null == e ? this.indices.filter(e => "parentGuid" !== e.property) : (e = e.toLowerCase(), this.indices.filter(t => {
      if (t.property.toLowerCase() === e) return !0;
      for (let r of t.aliases) if (r.toLowerCase() === e) return !0;
      return !1;
    }));
  }
}
export class $$u1 {
  constructor(e) {
    this.dbs = e;
  }
  searchWithText(e) {
    return i()(this.dbs.map(t => t.searchWithText(e))).sort(p);
  }
  searchWithProperties(e) {
    return i()(this.dbs.map(t => t.searchWithProperties(e))).sort(p);
  }
}
function p(e, t) {
  let r = e.matches.filter(e => e.isExact).length;
  return t.matches.filter(e => e.isExact).length - r || t.matches.length - e.matches.length;
}
export const H = $$c0;
export const U = $$u1;