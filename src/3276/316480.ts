import { useMemo } from "react";
import { d4 } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import s from "../vendor/223926";
import l from "../vendor/239910";
import c from "../vendor/946678";
import u from "../vendor/260986";
import { q8 } from "../figma_app/459490";
import { op, qr } from "../figma_app/844435";
import { eE } from "../figma_app/106207";
import { gp } from "../figma_app/973927";
import { g5 } from "../figma_app/178752";
import { s as _$$s } from "../905/506024";
import { M4, IT } from "../905/713695";
import { uF } from "../figma_app/300692";
import { Ph, T0 } from "../figma_app/455620";
import { X2 } from "../figma_app/190980";
import { n as _$$n } from "../905/79930";
import { $A } from "../905/862883";
import { mk } from "../figma_app/920333";
import { qK } from "../9410/353422";
import { o as _$$o } from "../905/808775";
import { d as _$$d } from "../905/751443";
var r = s;
var d = l;
var m = c;
var p = u;
let E = M4.Query({
  fetch: async e => (await _$$d.getDefaultCollageItems({
    orgId: e
  })).data.meta
});
export var $$N0 = (e => (e[e.LIBRARY_ITEM = 0] = "LIBRARY_ITEM", e[e.WIDGET = 1] = "WIDGET", e[e.PLUGIN = 2] = "PLUGIN", e[e.TEMPLATE = 3] = "TEMPLATE", e[e.FACE_STAMP = 4] = "FACE_STAMP", e[e.WHITEBOARD_TOOL = 5] = "WHITEBOARD_TOOL", e))($$N0 || {});
let S = new Set([Ph, T0]);
export function $$D1() {
  let e = function () {
    let {
      productComponents
    } = g5($A.FigJam);
    let t = op();
    let n = eE($A.FigJam);
    let i = qr();
    let s = qK();
    let l = function () {
      let e = d4(e => e.recentlyUsed.whiteboardTools);
      let t = _$$o();
      return useMemo(() => t ? e.figjam.map(e => e.id) : [], [t, e]);
    }();
    let c = d4(_$$s);
    let u = d4(e => e.recentlyUsed);
    return useMemo(() => function (e, t, n, o, a, i, s, l) {
      let c = t.templates.figjam.reduce((e, t) => (e[X2(t)] = t, e), {});
      let u = {
        ...d()(t.libraryItems.figjam, "key"),
        ...d()(t.plugins.figjam, "id"),
        ...c,
        ...d()(t.widgets.figjam, "id"),
        ...d()(t.faceStamps.figjam, "user.id"),
        ...d()(t.whiteboardTools?.figjam, "id")
      };
      let p = [...n.map(t => ({
        type: 0,
        item: t,
        id: t.id,
        lastAddedAt: u["component" === t.type ? t.component_key : t.key]?.last_added_at_by_user_id?.[e]
      })), ...o.map(t => ({
        type: 2,
        item: t,
        id: t.plugin_id,
        lastAddedAt: u[t.plugin_id]?.last_added_at_by_user_id?.[e]
      })), ...a.map(t => {
        let n = gp(t);
        return {
          type: 3,
          item: t,
          id: t.template.id,
          lastAddedAt: u[n]?.last_added_at_by_user_id?.[e]
        };
      }), ...i.map(t => ({
        type: 1,
        item: t,
        id: t.plugin_id,
        lastAddedAt: u[t.plugin_id]?.last_added_at_by_user_id?.[e]
      })), ...s.map(t => ({
        type: 4,
        item: t,
        id: t.id,
        lastAddedAt: u[t.id]?.last_added_at_by_user_id?.[e]
      })), ...l.map(t => ({
        type: 5,
        item: t,
        id: t,
        lastAddedAt: u[t]?.last_added_at_by_user_id?.[e]
      }))];
      let [h, f] = m()(p, e => !!e.lastAddedAt);
      return [...h.sort((e, t) => (t.lastAddedAt || 0) - (e.lastAddedAt || 0)), ...function (e) {
        let t = {
          1: 0,
          0: 1,
          3: 2,
          2: 3,
          4: 4,
          5: 5
        };
        return function (e) {
          let t = [];
          let n = Math.max(...e.map(e => e.length));
          for (let o = 0; o < n; o++) e.forEach(e => {
            o < e.length && t.push(e[o]);
          });
          return t;
        }(Object.entries(r()(e, "type")).sort(([e], [n]) => (t[e] ?? 100) - (t[n] ?? 100)).map(([, e]) => e));
      }(f)].slice(0, 4);
    }(c, u, productComponents, t, n, i, s, l), [c, u, productComponents, t, n, i, s, l]);
  }();
  let t = function () {
    let e = q8();
    let t = d4(e => e.currentUserOrgId);
    let [n] = IT(E(t));
    return useMemo(() => "loaded" !== n.status ? [] : function (e) {
      let t = [];
      e.plugins.forEach(e => {
        let n = uF(e);
        t.push({
          type: 2,
          item: n,
          id: n.plugin_id
        });
      });
      e.widgets.forEach(e => {
        let n = uF(e);
        t.push({
          type: 1,
          item: n,
          id: n.plugin_id
        });
      });
      e.components.forEach(e => {
        t.push({
          type: 0,
          item: e,
          id: e.id
        });
      });
      e.templates.forEach(e => {
        t.push({
          type: 3,
          item: {
            type: _$$n.HubFile,
            template: e
          },
          id: e.id
        });
      });
      return t;
    }(n.data), [n]).filter(t => !!getFeatureFlags().jamgpt_recents_pin && !e || t.id && !S.has(t.id));
  }();
  let n = function (e) {
    let t = q8();
    if (!getFeatureFlags().jamgpt_recents_pin || t) return null;
    for (let t of e) if (t.id && S.has(t.id)) return t;
    return null;
  }(t);
  let s = q8();
  return useMemo(() => {
    let o = [];
    n ? (o.push(n), e.forEach(e => {
      e.id !== n.id && o.push(e);
    })) : o = e;
    s && (o = o.filter(e => !(s && S.has(e.id || ""))));
    let a = [...o, ...t].filter(e => e.id);
    return p()(a, "id").slice(0, 4);
  }, [t, n, e, s]);
}
export function $$A2(e) {
  return mk(e, []);
}
export const HD = $$N0;
export const NT = $$D1;
export const ws = $$A2;