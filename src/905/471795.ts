import { useMemo, useCallback } from "react";
import { Bq, mapFilter } from "../figma_app/656233";
import { Z_n } from "../figma_app/763686";
import { k9 } from "../905/19536";
import o from "../vendor/728460";
import { F_ } from "../figma_app/191804";
import { hg } from "../figma_app/852050";
import { GI, U$ } from "../figma_app/633080";
import { gX, uC } from "../905/831801";
import { Ex, rN } from "../905/782020";
var l = o;
var $$h2 = (e => (e.filterApplied = "filter-applied", e.queryApplied = "query-applied", e.noVariableSet = "no-variable-set", e.noVariables = "no-variables", e))($$h2 || {});
export function $$g1({
  variableGroupList: e,
  selectedGroupNames: t,
  filterState: i,
  currentVariableSet: o
}) {
  let u = useMemo(() => function (e, t) {
    let i = Ex(e, t);
    let n = Bq(e.map(e => i.includes(e.name) && e.variables.length > 0 ? [{
      type: "group",
      name: e.name
    }, ...e.variables.map(e => ({
      type: "variable",
      variable: e
    }))] : []));
    1 === t.length && n[0] && "group" === n[0].type && n[0].name === t[0] && n.shift();
    return n;
  }(e, t), [e, t]);
  let h = useMemo(() => function (e) {
    let t = new Set();
    e.filter(e => "variable" === e.type).forEach(e => {
      Object.values(e.variable.modeValues).filter(e => e.type === Z_n.ALIAS).forEach(e => t.add(e.value));
    });
    return Array.from(t);
  }(u), [u]);
  let g = l()(h, hg(h));
  let f = k9(() => g, [g]);
  let _ = useCallback((e, t, i, n) => {
    let r = function (e, t, i) {
      let {
        query
      } = e;
      let r = query.toLowerCase().trim();
      let s = e => e.name.toLowerCase().includes(r);
      let o = e => {
        let n = "";
        for (let s of t) {
          let t = e.modeValues[s.id];
          switch (t?.type) {
            case Z_n.STRING:
              n = t.value;
              break;
            case Z_n.BOOLEAN:
            case Z_n.FLOAT:
              n = String(t.value);
              break;
            case Z_n.COLOR:
              n = F_(t.value);
              break;
            case Z_n.ALIAS:
              let o = i[t.value];
              o && (n = o.name);
          }
          if (n.toLowerCase().includes(r)) return !0;
        }
        return !1;
      };
      return {
        string: e => s(e) || o(e),
        type: i => {
          let {
            typeFilters
          } = e.filters;
          if (typeFilters.includes("ALL")) return !0;
          let r = t[0];
          if (!r) return !0;
          let a = i.modeValues[r.id];
          return typeFilters.some(e => a?.resolvedType === gX[e].type);
        }
      };
    }(e, i, n);
    let s = t.filter(e => "variable" !== e.type || r.string(e.variable) && r.type(e.variable));
    return s.filter((e, t) => "group" !== e.type || t !== s.length - 1 && "group" !== s[t + 1].type);
  }, []);
  return useMemo(() => {
    if (!o) return {
      tableRowItems: [],
      tableRowItemsEmptyReason: "no-variable-set",
      unfilteredTableRowCount: 0,
      filteredTableRowCount: 0
    };
    let e = u.length;
    if (0 === u.length) return {
      tableRowItems: [],
      tableRowItemsEmptyReason: "no-variables",
      unfilteredTableRowCount: e,
      filteredTableRowCount: 0
    };
    if (i && uC(i)) {
      let t;
      let n = _(i, u, o.modes, f);
      0 === n.length && i.query ? t = "query-applied" : 0 === n.length && (t = "filter-applied");
      return {
        tableRowItems: n,
        tableRowItemsEmptyReason: t,
        unfilteredTableRowCount: e,
        filteredTableRowCount: n.length
      };
    }
    return {
      tableRowItems: u,
      unfilteredTableRowCount: e,
      filteredTableRowCount: 0
    };
  }, [o, u, i, _, f]);
}
export function $$f7(e, t) {
  return mapFilter(t, t => {
    let i = e[t];
    return i?.type === "variable" ? i.variable.node_id : null;
  });
}
export function $$_0(e, t) {
  return t.map(t => e.findIndex(e => "variable" === e.type && e.variable.node_id === t));
}
export function $$A3(e, t) {
  let i = e.find(e => "group" !== e.type && e.variable.node_id === t);
  if (i?.type === "variable") return i.variable;
}
export function $$y6(e, t) {
  let i = e[t];
  if ("group" !== i.type) return i.variable;
}
export function $$b5(e, t, i, n) {
  let r = GI(e);
  let a = t.variableSetId === e.node_id;
  let s = r && !a;
  return r => {
    if (!U$(e)) return null;
    let a = rN(e => i?.(t.node_id, r, e) ?? !1, !!i);
    let o = rN(i => n?.(e.node_id, t.node_id, r, i) ?? !1, !!n);
    return s ? o : a;
  };
}
export function $$v4(e, t, i, n) {
  if (t === i || !e.includes(t) || !e.includes(i)) return e;
  let r = e.filter(e => e !== t);
  let a = r.indexOf(i);
  "after" === n && (a += 1);
  r.splice(a, 0, t);
  return r;
}
export const Hf = $$_0;
export const Hk = $$g1;
export const I9 = $$h2;
export const Kh = $$A3;
export const O4 = $$v4;
export const OM = $$b5;
export const Vm = $$y6;
export const zg = $$f7;