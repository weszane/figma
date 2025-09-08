import { MatchCriteria, CanvasSearchHelpers, NodeType } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { CN } from "../905/81982";
export let $$l3 = {
  includeMatches: !0,
  shouldSort: !1,
  findAllMatches: !1,
  ignoreLocation: !0
};
export function $$d2(e) {
  return e.replace(/[\u201D\u201C\"\u2019\u2018]/g, "'");
}
function c(e) {
  e.textContent && (e.textContent = $$d2(e.textContent));
  return e;
}
export function $$u1(e, t, r) {
  let i = [];
  for (let a of e.indices) {
    let s = a[0];
    let o = a[1] + 1;
    let l = e.value;
    r.matchCase && l.substring(s, o) !== t || r.wholeWords && (s > 0 && p(l[s - 1]) || o < e.value.length && p(l[o])) || i.push({
      start: s,
      end: o,
      matchType: MatchCriteria.TEXT_MATCH
    });
  }
  return i;
}
function p(e) {
  return /[\p{L}\p{N}\p{Pc}\p{M}]/u.test(e);
}
export let $$_0 = new class {
  constructor() {
    this.searchLibrary = new CN({
      keys: ["textContent", "name", "type", "annotationTextContent"],
      exactMatch: !0,
      ...$$l3
    });
  }
  initializeIndex() {
    let e = performance.now();
    let t = CanvasSearchHelpers.getSearchableNodes(!0).map(c);
    let r = debugState.getState();
    this.searchLibrary.set(t);
    ds("canvas_search_index_create", r.openFile?.key, r, {
      timeElapsedMs: Math.round(performance.now() - e),
      numberOfNodes: t.length
    });
  }
  destroyIndex() {
    this.searchLibrary.set([]);
  }
  addNode(e) {
    this.searchLibrary.add(e);
  }
  removeNode(e) {
    this.searchLibrary.remove("guid", e);
  }
  async search(e, t = {}) {
    let r;
    this.updateIndex();
    let i = performance.now();
    let a = `'"${$$d2(e)}"`;
    let s = [{
      textContent: a
    }];
    if (t.searchLayerNames && s.push({
      name: a
    }), t.searchAnnotationTextContent && s.push({
      annotationTextContent: a
    }), t.layerTypes) {
      let e = [];
      t.layerTypes.forEach(t => {
        e.push({
          type: t
        });
      });
      r = {
        $and: [{
          $or: s
        }, {
          $or: e
        }]
      };
    } else r = {
      $or: s
    };
    let o = await this.searchLibrary.search(r);
    let l = {};
    let c = 0;
    let p = 0;
    for (let r of o) {
      let i = [];
      for (let a of r.matches) {
        let s = $$u1(a, e, t);
        if ("textContent" !== a.key && s.length) {
          let e = s[0];
          e.matchType = r.item.type === NodeType.CANVAS ? MatchCriteria.PAGE_MATCH : MatchCriteria.LAYER_MATCH;
          i = [e, ...i];
        } else i.push(...s);
      }
      if (i.length) {
        c += i.length;
        p++;
        let e = r.item.pageGuid;
        let t = {
          guid: r.item.guid,
          textMatches: i
        };
        l[e] ? l[e].push(t) : l[e] = [t];
      }
    }
    return {
      resultsByPage: l,
      metrics: {
        queryLength: e.length,
        numMatchingNodes: p,
        numMatches: c,
        queryTimeMs: Math.round(performance.now() - i)
      }
    };
  }
  logIndex() {
    this.updateIndex();
    this.searchLibrary.logIndex();
  }
  updateIndex() {
    let e = performance.now();
    let t = CanvasSearchHelpers.getSearchableNodes(!1).map(c);
    if (t.length > 2e3) {
      this.initializeIndex();
      return;
    }
    let r = [];
    let a = [];
    for (let e of t) {
      r.push(e.guid);
      (e.name || e.textContent) && a.push(e);
    }
    t.length && this.searchLibrary.updateEntries("guid", r, a);
    t.length > 0 && trackEventAnalytics("canvas_search_index_update", {
      timeElapsedMs: Math.round(performance.now() - e),
      numberOfNodes: t.length
    });
  }
}();
export const H1 = $$_0;
export const X0 = $$u1;
export const XJ = $$d2;
export const z = $$l3;