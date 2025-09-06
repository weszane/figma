import { oB, In } from "../figma_app/273493";
import { dI } from "../905/805904";
import { AW, sN, F_, X9 } from "../figma_app/191804";
import { JG, zq } from "../figma_app/583114";
import { f } from "../905/24905";
import { logWarning } from "../905/714362";
import { lH, Pu, Yx, lg, bh, Dk } from "../figma_app/18582";
export function $$c4(e, t) {
  let r = e.filter(e => e.visible).map(e => "SOLID" === e.type && e.opacity && e.color ? {
    ...e,
    color: {
      ...e.color,
      a: e.opacity
    }
  } : e);
  let n = AW(r);
  return n && n.a < 1 && t ? sN(t, n) : n || t || void 0;
}
function u(e, t) {
  return t === lH.LIGHT ? Math.min(e, .8) : Math.max(e, .2);
}
export function $$p6(e, t) {
  let r = oB(e);
  let i = u(r.l, t);
  return In({
    ...r,
    l: i
  });
}
export function $$_8(e, t) {
  return u(e, t) === e;
}
export function $$h3(e) {
  return 0 === e || 1 === e;
}
export function $$m1(e, t) {
  let r = oB(e);
  let i = {
    ...r
  };
  let {
    role,
    mode
  } = t;
  let l = t.modeChanged ? mode === lH.LIGHT ? lH.DARK : lH.LIGHT : mode;
  let c = t.brandColor ? oB(t.brandColor) : null;
  let u = Pu(r, role, l, mode, t.isGradientStop);
  let p = u?.s ?? t.originalSL?.s ?? r.s;
  if (t.isGradientStop && t.modeChanged && !u && Pu(r, role, mode, mode, !0) && (t.modeChanged = !1), c) {
    if (i.h = c.h, i.s = Math.min(c.s, p), !t.currentBrandHex && 1 === r.a && Yx(r.l, role)) {
      i.s = c.s;
      i.l = c.l;
      return In(i);
    }
    if (t.currentBrandHex) {
      let o = F_(e) === t.currentBrandHex;
      if (o && role === lg.BG && 1 === r.a) {
        i.s = c.s;
        i.l = c.l;
        return In(i);
      }
      if (0 === i.s && c.s > 0) {
        let {
          darkSpec,
          lightSpec
        } = bh(role);
        i.l = Math.max(darkSpec.l, Math.min(r.l, lightSpec.l));
        i.l === darkSpec.l || i.l < .2 ? i.s = darkSpec.s : i.l === lightSpec.l || i.l > .8 ? i.s = lightSpec.s : i.s = c.s;
      } else if (o) {
        Yx(r.l, role) && 1 === r.a && (i.l = c.l);
        return In(i);
      }
    }
  }
  t.modeChanged && (u ? (i.l = u.l, i.a = t.isGradientStop ? r.a : u.a) : i.l = 1 - i.l);
  return In(i);
}
function g(e) {
  return {
    ...e,
    colorVar: {
      value: {
        colorValue: e.color
      },
      dataType: "COLOR",
      resolvedDataType: "COLOR"
    }
  };
}
export function $$f7(e, t) {
  let r = JG;
  let i = f(e, t);
  if (i >= r) return null;
  let c = oB(e);
  if (!Yx(c.l, lg.CONTENT)) {
    let r = function (e) {
      let t = oB(e);
      return In({
        ...t,
        l: 1 - t.l
      });
    }(e);
    f(r, t) > i && (e = r);
  }
  let {
    adjustedColor,
    contrastMet
  } = zq(e, {
    contrastMinimum: r,
    colorForContrastCheck: t
  });
  contrastMet || logWarning("first-draft", `Failed to meet minimum contrast of ${r}. Using ${F_(adjustedColor)} on ${F_(t)} with contrast ${Math.abs(f(adjustedColor, t))}.`);
  let _ = oB(adjustedColor);
  return In({
    ...c,
    l: _.l
  });
}
function E(e, t) {
  if (e.some(e => "SOLID" !== e.type)) return e;
  let r = $$c4(e);
  if (r) {
    let e = $$f7(r, t);
    if (e) return [{
      type: "SOLID",
      color: e,
      visible: !0,
      opacity: r.a,
      blendMode: "NORMAL"
    }];
  }
  return e;
}
function y(e, t, r, n) {
  return e.filter(e => e.visible).map(e => {
    switch (e.type) {
      case "SOLID":
        if (!e.color) return e;
        let a = e.colorVar?.value?.alias ? dI(e.colorVar.value.alias) : void 0;
        if (n && !a) return e;
        let s = {
          ...e.color,
          a: e.opacity ?? e.color.a
        };
        let o = t(s, {
          ...r,
          varId: a,
          isGradientStop: !1
        }) ?? s;
        n && a && (n[a] = o);
        let {
          colorVar,
          ...d
        } = e;
        return {
          ...d,
          color: o,
          opacity: o.a
        };
      case "GRADIENT_ANGULAR":
      case "GRADIENT_DIAMOND":
      case "GRADIENT_LINEAR":
      case "GRADIENT_RADIAL":
        if (!e.stops || "LUMINOSITY" === e.blendMode) return e;
        let c = [];
        let u = [];
        for (let a = 0; a < e.stops.length; a++) {
          let s = e.stops[a];
          let o = e.stopsVar && e.stopsVar.length > a ? e.stopsVar[a] : void 0;
          let l = o?.colorVar?.value?.alias ? dI(o.colorVar.value.alias) : void 0;
          let d = o?.color ?? s.color;
          let p = t(d, {
            ...r,
            varId: l,
            isGradientStop: !0
          });
          let _ = p ?? d;
          if (n && l && (n[l] = _), p || r.modeChanged) {
            let e = {
              ...s,
              color: _
            };
            c.push(e);
            u.push(g(e));
          } else {
            c.push(s);
            u.push(o ?? g(s));
          }
        }
        return {
          ...e,
          stops: c,
          stopsVar: u
        };
      default:
        return e;
    }
  });
}
export function $$b5(e) {
  let {
    node,
    getNewColor,
    options,
    variableOverrideMap
  } = e;
  let a = node.strokePaints.data;
  let s = node.fillsOrMixed;
  let o = "mixed" === s ? [] : s;
  if (a.length > 0) {
    let e = options.role === lg.CONTENT && 0 === o.length ? options.role : lg.BORDER;
    let a = y(node.strokePaints.data, getNewColor, {
      ...options,
      role: e
    }, variableOverrideMap);
    let s = options.parentFillColor && options.role === lg.CONTENT ? E(a, options.parentFillColor) : a;
    node.strokePaints = {
      data: s.map(e => e),
      blobs: []
    };
  }
  let l = a.length > 0 || node.effects.length > 0;
  if (o.length > 0) {
    let e = y(o, getNewColor, options, variableOverrideMap);
    let a = !l && options.parentFillColor && options.role === lg.CONTENT ? E(e, options.parentFillColor) : e;
    node.fills = a;
    "TEXT" === node.type && node.characters.length > 0 && node.setRangeFillPaints(0, node.characters.length, {
      data: a,
      blobs: []
    });
  }
}
export function $$T2(e) {
  let t = [e];
  for (; t.length > 0;) {
    let e = t.pop();
    if (e) {
      if ("fills" in e) {
        let t = e.fills.filter(e => "SOLID" === e.type);
        for (let e = t.length - 1; e >= 0; e--) {
          let r = t[e];
          if (r.color && r.visible) return r.color;
        }
      }
      "childrenNodes" in e && t.push(...e.childrenNodes);
    }
  }
}
function I(e, t) {
  let r = [];
  for (let n of e) if (n.visible) switch (n.type) {
    case "SOLID":
      if (!n.color) continue;
      let e = t || void 0 === n.opacity ? 1 : n.opacity;
      let i = X9(n.color, e);
      r.push(F_(i));
      break;
    case "GRADIENT_ANGULAR":
    case "GRADIENT_DIAMOND":
    case "GRADIENT_LINEAR":
    case "GRADIENT_RADIAL":
      if (!n.stops) continue;
      for (let e of n.stops) r.push(F_(t ? X9(e.color, 1) : e.color));
  }
  return r;
}
export const JZ = function e(t, r, n) {
  if (!t.visible) return;
  let i = I(t.fills, n);
  switch (Dk(t)) {
    case lg.BG:
      r.bg.push(...i);
      break;
    case lg.CONTENT:
      r.content.push(...i);
      break;
    case lg.BORDER:
      r.border.push(...i);
  }
  let a = I(t.strokePaints.data, n);
  r.border.push(...a);
  "childrenNodes" in t && "BOOLEAN_OPERATION" !== t.type && !t.fills.some(e => "IMAGE" === e.type) && t.childrenNodes.forEach(t => {
    e(t, r, n);
  });
};
export const Jv = $$m1;
export const X6 = $$T2;
export const c4 = $$h3;
export const gU = $$c4;
export const oR = $$b5;
export const qO = $$p6;
export const re = $$f7;
export const x = $$_8;