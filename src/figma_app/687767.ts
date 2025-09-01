import { useMemo, useCallback } from "react";
import { xN } from "../figma_app/492908";
import { isNotNullish } from "../figma_app/95419";
import { gr } from "../figma_app/243058";
import { oB } from "../figma_app/273493";
import { CWU, Ez5, rXF, Z_n, HS4 } from "../figma_app/763686";
import { sH } from "../905/871411";
import { md } from "../figma_app/27355";
import { DA } from "../figma_app/191804";
import { Ez } from "../figma_app/766708";
import { bt } from "../905/270322";
import { ti } from "../figma_app/646357";
import { UV } from "../905/438367";
import { Cg } from "../figma_app/216057";
import { ay } from "../905/886545";
import { X_ } from "../figma_app/634146";
import { i1 } from "../figma_app/177697";
export function $$b3(e) {
  let t = i1(e);
  let {
    data
  } = md(t);
  return !data;
}
let T = bt(e => e.library.local.styles);
export function $$I1(e) {
  let t = md(T);
  let r = i1(e);
  let {
    data
  } = md(r);
  return useMemo(() => {
    if (!e) return [];
    if (!X_(e)) {
      console.warn("Expected local theme", e);
      return [];
    }
    if (!data) {
      console.warn("Theme no longer exists in the theme map", e);
      return [];
    }
    let r = new Set(data?.styleGUIDs || []);
    return r.size > 0 ? ti(t, "TEXT").filter(e => r.has(e.node_id)).sort((e, t) => Ez(t.sort_position || "", e.sort_position || "")) : [];
  }, [e, data, t]);
}
function S(e) {
  let t = md(Cg);
  let r = i1(e);
  let {
    data
  } = md(r);
  return e ? X_(e) ? data ? (data.variableIDs || []).map(e => t[e]) || [] : (console.warn("Theme no longer exists in the theme map", e), []) : (console.warn("Expected local theme", e), []) : [];
}
export function $$v0(e) {
  let t = i1(e);
  let {
    data
  } = md(t);
  let i = data?.variableSetID || "";
  return useMemo(() => gr.isValid(i) ? CWU?.getVariableSetDefaultMode(i) ?? "" : "", [i]);
}
function A(e, t) {
  if (!e.color || !t.color) return 0;
  let r = {
    ...oB(e.color),
    a: e.opacity ?? e.color.a
  };
  let n = {
    ...oB(t.color),
    a: t.opacity ?? t.color.a
  };
  let i = (e, t, r) => {
    for (let n of r) if (e[n] !== t[n]) return e[n] - t[n];
    return 0;
  };
  return r.s < .05 && n.s < .05 ? r.l !== n.l ? -(r.l - n.l) : i(r, n, ["s", "h", "a"]) : r.s < .05 ? 1 : n.s < .05 ? -1 : i(r, n, ["h", "l", "s", "a"]);
}
export function $$x5(e) {
  let t = UV();
  let r = $$N4(e);
  return useMemo(() => {
    let e = r.map(e => e.paint);
    return t.map(e => {
      if ("paint" === e.type && e.stylePaint.paint.color) return e.stylePaint.paint;
    }).filter(isNotNullish).filter(t => !e.some(e => t.color && e.color && DA({
      ...t.color,
      a: 1
    }, {
      ...e.color,
      a: 1
    }) && xN(t.opacity || t.color.a, e.color.a))).sort(A);
  }, [t, r]);
}
export function $$N4(e) {
  let t = function (e) {
    let t = S(e);
    return useMemo(() => {
      let r = Ez5?.slideThemeLibBindings().getBlackColorVariableId(e);
      let n = Ez5?.slideThemeLibBindings().getWhiteColorVariableId(e);
      return t.filter(e => e && e.resolvedType === rXF.COLOR).sort((e, t) => {
        for (let i of [r, n]) {
          if (e.node_id === i) return -1;
          if (t.node_id === i) return 1;
        }
        return e.sortPosition < t.sortPosition ? -1 : 1;
      }).map(e => e.node_id);
    }, [e, t]);
  }(e);
  let r = $$v0(e);
  let i = X_(e);
  return t.map(e => {
    if (!e || 0 === e.length) return;
    let t = i ? CWU?.getLocalVariableInfo(e) : CWU?.getSubscribedVariableInfo(e);
    if (t && t.modeValues && t.modeValues[r] && t.modeValues[r].type === Z_n.COLOR && t.modeValues[r].value) {
      let n = {
        color: t.modeValues[r].value,
        colorVar: {
          dataType: "ALIAS",
          resolvedDataType: "COLOR",
          value: {
            alias: {
              guid: sH(e.replace("VariableID:", "")) || void 0
            }
          }
        }
      };
      return {
        variableId: e,
        variableName: t.name,
        paint: n
      };
    }
  }).filter(isNotNullish);
}
export function $$C2(e) {
  let t = i1(e);
  let {
    data
  } = md(t);
  let i = data?.variableSetID || "";
  let a = $$v0(e);
  let s = S(e);
  let o = ay();
  return useCallback(e => {
    if (i) {
      let t = o(i, s, rXF.COLOR, "", HS4.SLIDES_THEME);
      t && CWU?.setVariableValueForMode(t, a, {
        type: Z_n.COLOR,
        resolvedType: rXF.COLOR,
        value: e
      });
      return t;
    }
    return null;
  }, [o, i, a, s]);
}
export const UZ = $$v0;
export const Xo = $$I1;
export const k1 = $$C2;
export const kO = $$b3;
export const lK = $$N4;
export const nE = $$x5;