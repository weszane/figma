import { Z_n } from "../figma_app/763686";
import { Q1 } from "../905/721592";
import { kz } from "../905/77776";
import { W4, P2 } from "../905/804867";
import { h as _$$h } from "../905/34040";
import { u as _$$u } from "../905/363827";
import { RU, lS } from "../905/235413";
import { A2 } from "../905/49095";
import { J3, KH, u_, HW } from "../905/139004";
import { B } from "../905/113996";
import { a as _$$a } from "../905/860779";
import { z } from "../905/897942";
import { jg } from "../905/707098";
let $$f3 = /\/\*SUGGESTED_VAR_START_(.*?)\*\//g;
let $$_7 = /\/\*SUGGESTED_VAR_END\*\//g;
export function $$A10(e, t) {
  if (e.boundVariables?.radius) {
    let i = e.boundVariables.radius.id;
    let n = t.nodeCache.variableResolver?.resolveVariable(i);
    return n ? {
      name: n.name,
      codeSyntax: n.codeSyntax,
      status: jg.Resolved,
      id: n.id
    } : {
      status: jg.NotResolved
    };
  }
  return {
    status: jg.NotFound
  };
}
export function $$y12(e, t, i) {
  if (e.boundVariables?.[t]) {
    let n = e.boundVariables[t].id;
    let r = i.nodeCache.variableResolver?.resolveVariable(n);
    return r ? {
      name: r.name,
      codeSyntax: r.codeSyntax,
      status: jg.Resolved,
      id: r.id
    } : {
      status: jg.NotResolved
    };
  }
  return {
    status: jg.NotFound
  };
}
export function $$b11(e, t, i, n) {
  if (e.boundVariables?.color) {
    let t = e.boundVariables.color.id;
    let i = n.nodeCache.variableResolver?.resolveVariable(t);
    return i ? {
      name: i.name,
      codeSyntax: i.codeSyntax,
      status: jg.Resolved,
      id: t
    } : {
      status: jg.NotResolved
    };
  }
  return {
    status: jg.NotFound
  };
}
export function $$v20(e, t, i) {
  let n = e.getVariableValue(t);
  let r = $$I13(n, {
    value: i
  });
  return {
    variable: n,
    hint: r
  };
}
export function $$I13(e, t, i) {
  switch (e?.status) {
    case jg.NotResolved:
      return A2.VariableNotResolved;
    case jg.NotFound:
      return i?.isColor ? A2.NoStyleForColor : void 0;
    default:
      return;
  }
}
export function $$E19(e, t, i, n, r) {
  if (t.variable?.value) {
    let i = t.variable.value;
    return new kz(i.name, e, r, {
      name: i.name,
      id: i.id,
      codeSyntax: i.codeSyntax
    });
  }
  return e;
}
export function $$x0(e, t, i, n, r) {
  let s = $$I13(t, e);
  return (s && (i[n] = s), t?.status === jg.Resolved) ? new kz(t.name, e, r, t.status === jg.Resolved ? t : void 0) : e;
}
function S({
  raw: e,
  styleField: t,
  suggestedVars: i,
  node: n,
  field: r,
  matchIndex: a,
  arrayIndex: s,
  preferences: o
}) {
  let d = C({
    node: n,
    field: r,
    matchIndex: a,
    arrayIndex: s,
    preferences: o
  });
  if (d) {
    let n = new _$$u(e, d.id);
    i.has(t) || i.set(t, {});
    let r = i.get(t);
    r[d.id] = d.matchingVars;
    i.set(t, r);
    return n;
  }
  return e;
}
export function $$w9(e) {
  let t = {};
  for (let i of e) if (i) for (let [e, n] of Object.entries(i)) t[e] = n;
  return Object.keys(t).length ? t : void 0;
}
function C({
  node: e,
  field: t,
  matchIndex: i = 0,
  arrayIndex: n = 0,
  preferences: r
}) {
  if (!r.generateForCodePanel) return;
  let a = $$j14(t, e);
  if (a && a[n]) return {
    id: `${i}`,
    matchingVars: a[n]
  };
}
export function $$T18(e, t, i) {
  if (!i.generateForCodePanel) return e;
  let n = void 0 !== t.status ? t.status === jg.Resolved ? t.id : void 0 : t.id;
  return n ? `/*BOUND_VAR_START_${n}*/${e}/*BOUND_VAR_END*/` : e;
}
export function $$k5({
  value: e,
  node: t,
  field: i,
  matchIndex: n,
  arrayIndex: r,
  preferences: a
}) {
  let s = C({
    node: t,
    field: i,
    matchIndex: n,
    arrayIndex: r,
    preferences: a
  });
  if (s) return {
    value: function ({
      value: e,
      id: t
    }) {
      return `/*SUGGESTED_VAR_START_${t}*/${e}/*SUGGESTED_VAR_END*/`;
    }({
      value: e,
      id: s.id
    }),
    matchingVars: {
      [s.id]: s.matchingVars
    }
  };
}
export function $$R17(e) {
  let {
    raw
  } = e;
  return raw instanceof RU ? S({
    ...e,
    raw
  }) : raw;
}
export function $$N15(e) {
  let {
    raw
  } = e;
  if (raw instanceof W4 && raw.isFromSolid) {
    let i = raw.colorStops.map(t => {
      let {
        color
      } = t;
      return color instanceof Q1 ? new P2(S({
        ...e,
        raw: color
      }), t.position) : t;
    });
    return raw.toNewWithColorStops(i);
  }
  return raw instanceof Q1 ? S({
    ...e,
    raw
  }) : raw;
}
export function $$P4(e) {
  let {
    raw
  } = e;
  return raw instanceof lS ? S({
    ...e,
    raw
  }) : raw;
}
export function $$O8(e) {
  let {
    raw
  } = e;
  return raw instanceof _$$h ? S({
    ...e,
    raw
  }) : raw;
}
export function $$D16(e) {
  return e.reduce((e, t, i) => {
    let {
      visible = !0
    } = t;
    visible && e.push({
      paint: t,
      index: i
    });
    return e;
  }, []);
}
export function $$L2(e) {
  return e.reduce((e, t, i) => {
    let {
      visible = !0
    } = t;
    if (visible) switch (t.type) {
      case "SOLID":
        e.push({
          paint: t,
          index: i
        });
        break;
      case "GRADIENT_ANGULAR":
      case "GRADIENT_DIAMOND":
      case "GRADIENT_LINEAR":
      case "GRADIENT_RADIAL":
        if (0 === t.gradientStops.length) break;
        let r = t.gradientStops[0].color;
        e.push({
          paint: {
            type: "SOLID",
            opacity: r.a,
            color: {
              r: r.r,
              g: r.g,
              b: r.b
            }
          },
          index: i,
          hint: A2.UnsupportedGradientPaint
        });
        break;
      default:
        e.push({
          paint: {
            type: "SOLID",
            color: {
              r: 0,
              g: 0,
              b: 0
            }
          },
          index: i,
          hint: A2.UnsupportedPaint
        });
    }
    return e;
  }, []);
}
export function $$F1(e, t, i) {
  if (!(t instanceof B) && !(t instanceof J3)) switch (e) {
    case "fills":
      if (t instanceof z) return t.textSegments[0]?.fills?.[i];
      return t.fills[i];
    case "strokes":
      if (t instanceof z) return;
      if (t instanceof _$$a) return t.strokes[i];
      return t.border.strokes[i];
    case "textDecorationColor":
      if (!KH(t) || !t.textSegments[0]) return;
      let n = t.textSegments[0].textDecorationColor.rawValue;
      if ("AUTO" === n.value) return;
      return n.value;
  }
}
export function $$M6(e, t) {
  if (!(t instanceof B) && !(t instanceof J3)) switch (e) {
    case "width":
      return t.layout.width;
    case "height":
      return t.layout.height;
    case "paddingTop":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.paddingTop;
    case "paddingRight":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.paddingRight;
    case "paddingBottom":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.paddingBottom;
    case "paddingLeft":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.paddingLeft;
    case "itemSpacing":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.itemSpacing;
    case "opacity":
      return t.opacity;
    case "minWidth":
      return t.layout.minWidth;
    case "maxWidth":
      return t.layout.maxWidth;
    case "minHeight":
      return t.layout.minHeight;
    case "maxHeight":
      return t.layout.maxHeight;
    case "counterAxisSpacing":
      if (!u_(t) || !t.isAutoLayout()) return;
      return t.autoLayout.counterAxisSpacing;
    case "gridRowGap":
      if (!u_(t) || !t.isGrid()) return;
      return t.gridLayout.gridRowGap;
    case "gridColumnGap":
      if (!u_(t) || !t.isGrid()) return;
      return t.gridLayout.gridColumnGap;
    case "strokeWeight":
      if (t instanceof _$$a) return t.strokeWeight.rawValue;
      if (!HW(t)) return;
      return t.border.strokeTopWeight.rawValue;
    case "strokeTopWeight":
      if (!HW(t)) return;
      return t.border.strokeTopWeight.rawValue;
    case "strokeRightWeight":
      if (!HW(t)) return;
      return t.border.strokeRightWeight.rawValue;
    case "strokeBottomWeight":
      if (!HW(t)) return;
      return t.border.strokeBottomWeight.rawValue;
    case "strokeLeftWeight":
      if (!HW(t)) return;
      return t.border.strokeLeftWeight.rawValue;
    case "topLeftRadius":
      if (!HW(t)) return;
      return t.border.topLeftRadius;
    case "topRightRadius":
      if (!HW(t)) return;
      return t.border.topRightRadius;
    case "bottomLeftRadius":
      if (!HW(t)) return;
      return t.border.bottomLeftRadius;
    case "bottomRightRadius":
      if (!HW(t)) return;
      return t.border.bottomRightRadius;
    case "fontSize":
      if (!KH(t)) return;
      return t.textSegments[0].fontSize.rawValue;
    case "lineHeight":
      if (!KH(t)) return;
      let i = t.textSegments[0].lineHeight.rawValue;
      if ("AUTO" === i.unit) return;
      return i.value;
  }
}
export function $$j14(e, t) {
  if (t instanceof B || t instanceof J3) return [];
  if ("fills" === e || "strokes" === e) {
    let i = t.inferredVariables[e];
    return i ? i.map((i, r) => {
      let a = $$F1(e, t, r);
      return a && "SOLID" === a.type && i && 0 !== i.length ? {
        ids: i.map(e => e.id),
        rawValue: {
          type: Z_n.COLOR,
          value: {
            ...a.color,
            a: a.opacity ?? 1
          }
        }
      } : null;
    }) : [];
  }
  if ("textDecorationColor" === e) {
    let i = t.inferredVariables[e];
    if (!i) return [];
    let r = $$F1(e, t, 0);
    return r && "SOLID" === r.type && i && 0 !== i.length ? [{
      ids: i.map(e => e.id),
      rawValue: {
        type: Z_n.COLOR,
        value: {
          ...r.color,
          a: r.opacity ?? 1
        }
      }
    }] : [null];
  }
  let i = t.inferredVariables[e];
  if (!i) return [];
  if ("fontFamily" === e) return KH(t) ? [{
    ids: i.map(e => e.id),
    rawValue: {
      type: Z_n.STRING,
      value: t.textSegments[0].fontName.family.rawValue
    }
  }] : [];
  let r = $$M6(e, t);
  return r ? [{
    ids: i.map(e => e.id),
    rawValue: {
      type: Z_n.FLOAT,
      value: r
    }
  }] : [];
}
export const DX = $$x0;
export const Eu = $$F1;
export const F$ = $$L2;
export const G6 = $$f3;
export const JT = $$P4;
export const Kp = $$k5;
export const LI = $$M6;
export const P1 = $$_7;
export const ZN = $$O8;
export const a3 = $$w9;
export const bE = $$A10;
export const hO = $$b11;
export const jX = $$y12;
export const mJ = $$I13;
export const nK = $$j14;
export const nb = $$N15;
export const oE = $$D16;
export const oy = $$R17;
export const pO = $$T18;
export const vV = $$E19;
export const zr = $$v20;