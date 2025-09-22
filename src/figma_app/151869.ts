import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSExportHelpers } from "../figma_app/763686";
import { convertKiwiToVariableIdString } from "../905/805904";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { v4, xv as _$$xv } from "../figma_app/655139";
import { WEB } from "../905/359509";
import { t as _$$t2 } from "../905/241707";
import { sQ } from "../905/191741";
import { isCodegenSupportedForLanguage, getScaledValueWithUnit } from "../figma_app/120227";
import { v as _$$v } from "../905/50227";
import { OX } from "../905/232489";
import { lW } from "../figma_app/11182";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { getColorFormat } from "../figma_app/740163";
import { isValidValue } from "../905/216495";
import { kl } from "../905/275640";
import { u as _$$u, hg } from "../figma_app/852050";
import { useDeepEqualSceneValue, useSingleSceneValue, useMultipleSceneValues, useSimpleSceneValue } from "../figma_app/167249";
import { OE } from "../figma_app/155647";
import { q } from "../905/296913";
import { NX } from "../figma_app/394327";
var $$n3;
export function $$N11() {
  let e = useSelector(e => e.mirror.selectionProperties?.numSelected === 1);
  let t = useSelector(e => e.mirror.sceneGraphSelection);
  return e && Object.keys(t).find(e => e) || null;
}
export function $$C4() {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  return useMemo(() => {
    let t = Object.keys(e);
    return 0 === t.length ? null : t;
  }, [e]);
}
export function $$w13() {
  let e = useSelector(e => e.mirror.selectionProperties?.numSelected === 1);
  let t = useSelector(e => e.mirror.sceneGraphSelection);
  let r = kl("primaryBreakpointFrameGuid") ?? null;
  return e ? Object.keys(t).find(e => e) || null : r && isValidValue(r) ? r : null;
}
export function $$O10() {
  let e = $$N11();
  return useDeepEqualSceneValue((e, t) => t ? e.get(t)?.type : void 0, e);
}
export function $$R6(e = 0) {
  return Number(e).toLocaleString("en", {
    maximumFractionDigits: 2,
    useGrouping: !1
  });
}
export function $$L5() {
  let e = $$N11();
  let t = useSingleSceneValue(e);
  if (null != e && null != t) return t;
}
export function $$P2() {
  let e = $$C4();
  let t = useMultipleSceneValues(e ?? []);
  if (e) return t;
}
export function $$D7() {
  let e = useSelector(e => e.mirror.objectsPanelRowRebuildCounter);
  return useSimpleSceneValue((e, t) => e, e);
}
export function $$k9(e) {
  return useSelector(t => {
    let r = e(t);
    if (null != r && isValidValue(r)) return r;
  });
}
export function $$M1(e, t) {
  let r = useDispatch();
  let n = useCallback(() => {
    if (!e) return null;
    r(lW({
      stringToCopy: e.toString(),
      ignoreLineBreaks: !1
    }));
    t && t();
  }, [t, e, r]);
  return e ? n : void 0;
}
export function $$F0(e) {
  let t = isDevHandoffEditorType();
  let r = v4();
  let n = _$$u(e ?? void 0);
  let i = isDevHandoffEditorType();
  let a = useAtomWithSubscription(_$$v);
  if (!n) return;
  if (!i || !a) return n.name;
  let s = t && "first-party" === r.type ? r.id : WEB;
  return _$$xv(n, s) ?? n.name;
}
export function $$j12(e) {
  let t = isDevHandoffEditorType();
  let r = v4();
  let n = sQ();
  let i = useAtomWithSubscription(_$$v);
  if (e) return t && (i || n) ? _$$xv(e, r.id) ?? e.name ?? getI18nString("variables.missing_name") : e.name;
}
(e => {
  let t = {
    prefix: "",
    suffix: "",
    delimiter: ": ",
    quoted: !1
  };
  function r(e, r) {
    let n = "";
    let i = {
      ...t,
      ...r
    };
    e.forEach(e => {
      if (e[1]) {
        let {
          prefix,
          suffix,
          delimiter,
          quoted
        } = e.length > 2 ? {
          ...i,
          ...e[2]
        } : i;
        let o = quoted ? `"${e[1]}"` : e[1];
        n += `${prefix}${e[0]}${delimiter}${o}${suffix}
`;
      }
    });
    return n;
  }
  e.copyPairs = r;
  let n = ["true", "false", "nil", "null"];
  function l(e, t) {
    return `var(--${OX(t)}, ${e})`;
  }
  e.unquoteEnumerableValues = function (e) {
    return e.map(e => {
      let [t, r] = e;
      return "string" == typeof r && n.includes(r.toLowerCase()) ? [t, r, {
        quoted: !1
      }] : e;
    });
  };
  let d = (e, t, r) => {
    let {
      paint
    } = e;
    let {
      variable
    } = e.variable ?? {};
    switch (paint.type) {
      case "SOLID":
        if (1 === r) {
          let t = e.valueFormatter(e.colors[0], {
            hexCSSValue: !0
          });
          return variable ? l(t, variable.name) : t;
        }
        return function (e, t) {
          let r = CSSExportHelpers.convertGradientPaintToCSS(e.encodedPaint);
          return (t ? r.replace(/(#[a-f0-9]{6})|(rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d\.\d{1,2})/gi, e => l(e, t.name)) : null) ?? r;
        }(e, variable);
      case "GRADIENT_LINEAR":
      case "GRADIENT_RADIAL":
      case "GRADIENT_DIAMOND":
      case "GRADIENT_ANGULAR":
        return CSSExportHelpers.convertGradientPaintToCSS(e.encodedPaint);
    }
  };
  function c(e, t) {
    return e?.map(r => d(r, t, e?.length || 0))?.join(",\n");
  }
  e.copyColors = c;
  let u = {
    MULTIPLY: "multiply",
    SCREEN: "screen",
    OVERLAY: "overlay",
    DARKEN: "darken",
    LIGHTEN: "lighten",
    COLOR_DODGE: "color-dodge",
    SATURATION: "saturation",
    COLOR: "color",
    LUMINOSITY: "luminosity"
  };
  let _ = (e = []) => e.flatMap(e => e.type === q.STYLE ? e.paints : e);
  let h = "background";
  e.useCopyAllColors = function (e, t) {
    let n = useSelector(e => e.mirror.selectionProperties.numSelected) || 0;
    let s = _(e);
    let o = useCallback(() => {
      if (1 === n && s) {
        let e = new Set();
        if (s.forEach(t => {
          t.paint.blendMode && e.add(t.paint.blendMode);
        }), e.size <= 1) {
          let n = c(s, t);
          let i = [];
          n && i.push([h, n]);
          let a = [...e];
          let o = a[0] ? u[a[0]] : void 0;
          o && i.push(["background-blend-mode", o]);
          return r(i, {
            suffix: ";"
          });
        }
      }
      return r(s.reduce((e, r) => {
        let n = r.paint.blendMode;
        let i = n ? u[n] : void 0;
        i && e.push(["background-blend-mode", i]);
        let a = d(r, t, 1);
        let s = a ? [h, a] : void 0;
        s && e.push(s);
        return e;
      }, []).filter(e => e).map(e => e), {
        suffix: ";"
      });
    }, [s, n, t]);
    return s ? o : void 0;
  };
  let m = (t, n, i, a) => {
    let s = n.includes(" ");
    let o = _(i);
    let l = o.length > 1 || 1 === o.length && "SOLID" !== o[0].paint.type;
    let d = e.copyColors(o, t);
    if (!l && !s) return `${a ?? "border"}: ${n} solid ${d}`;
    let c = s ? [["border-width", n], ["border-style", "solid"]] : [[`${a ?? "border"}`, `${n} solid`]];
    d && c.push(l ? ["border-image-source", d] : ["border-color", d]);
    return r(c, {
      suffix: ";\n"
    });
  };
  function f(e) {
    return e.map(e => void 0 === e ? "" : "string" == typeof e ? e : `${$$R6(e)}px`);
  }
  e.useStrokeCopyValue = function (e, t, r) {
    let n = getColorFormat();
    let a = _(t);
    return useMemo(() => m(n, e, a, r), [n, e, a, r]);
  };
  e.useCopyAllStrokes = function (e) {
    let t = getColorFormat();
    return useMemo(() => e.map(e => m(t, e.strokeWeight, e.strokeColors, e.borderCSSKey)).join("\n"), [t, e]);
  };
  e.withPixels = f;
  let E = (t, n, i, a) => {
    if ("FOREGROUND_BLUR" === t.type || "BACKGROUND_BLUR" === t.type) return r([["backdrop-filter", `blur(${t.radius}px)`]]);
    let s = e.copyColors(n, i);
    if (!t.offset) return;
    let [o, l, d, c, u] = a && 5 === a.length ? a : [null, null, null, null, null];
    return r([["box-shadow", [f([NX({
      variable: o
    }) || t.offset?.x, NX({
      variable: l
    }) || t.offset?.y, NX({
      variable: d
    }) || t.radius, NX({
      variable: c
    }) || t.spread]).join(" "), NX({
      variable: u
    }) || s, "INNER_SHADOW" === t.type ? "inset" : void 0].filter(_$$t2).join(" ")]], {
      suffix: ";"
    });
  };
  e.useCopyAllShadows = function (e) {
    let t = getColorFormat();
    let r = OE(e, e => e.color);
    let n = e.flatMap(e => [e.xVar, e.yVar, e.radiusVar, e.spreadVar, e.colorVar]).map(e => e?.value?.alias ? convertKiwiToVariableIdString(e.value.alias) : void 0);
    let a = hg(n ?? []);
    return useCallback(() => r.filter(e => e.color).map((e, r) => E(e.value, [e.color], t, [a?.[5 * r], a?.[5 * r + 1], a?.[5 * r + 2], a?.[5 * r + 3], a?.[5 * r + 4]])).join("\n"), [r, t, a]);
  };
  let b = (e, t, r) => {
    switch (e) {
      case "Linear":
        return "linear";
      case "Ease in":
        return "ease-in";
      case "Ease out":
        return "ease-out";
      case "Ease in and out":
        return "ease-in-out";
      case "Ease in back":
        return "cubic-bezier(0.3, -0.05, 0.7, -0.5)";
      case "Ease out back":
        return "cubic-bezier(0.45, 1.45, 0.8, 1)";
      case "Ease in and out back":
        return "cubic-bezier(0.7, -0.4, 0.4, 1.4)";
      default:
        if (void 0 == e) return;
        if (t) {
          if (r) return `{ mass: ${r[0]}, stiffness: ${r[1]}, damping: ${r[2]} }`;
          return e;
        }
        return `cubic-bezier(${e})`;
    }
  };
  let T = e => `${function (e, t) {
    return e && Number(e).toLocaleString("en", {
      maximumFractionDigits: 2,
      useGrouping: !1
    });
  }(1e3 * e, 0)}ms`;
  let S = t => {
    let r = `// ${t.event}
`;
    let n = t.action;
    let i = [];
    t.delay && i.push(["animation-delay", T(t.delay)]);
    t.action && (i.push([`// ${n?.action}`, `"${n?.value ?? ""}"`]), n?.hasAnimation && (i.push(["// Animate", n?.animation ?? ""]), n?.isSpringTransition ? i.push(["// Spring", b(n?.curve, n?.isSpringTransition, n?.curveFunction)]) : (i.push(["animation-timing-function", b(n?.curve)]), i.push(["animation-duration", T(n.duration ?? 0)]))));
    return r + e.copyPairs(i, {
      suffix: ";"
    });
  };
  e.useCopyAllInteractions = function (e) {
    return useCallback(() => e.map(e => S(e)).join("\n"), [e]);
  };
})($$n3 || ($$n3 = {}));
let U = e => e.toLocaleString("en", {
  maximumFractionDigits: 4,
  useGrouping: !1
});
export function $$B8({
  value: e,
  isTextProperty: t
}) {
  let r = isDevHandoffEditorType();
  let n = v4();
  let i = isCodegenSupportedForLanguage();
  let a = "number" == typeof e ? e : 0;
  let s = getScaledValueWithUnit(n, a, U, {
    isTextProperty: t
  });
  return r && i && 0 !== a ? s : void 0;
}
export const As = $$F0;
export const Cj = $$M1;
export const I9 = $$P2;
export const T4 = $$n3;
export const Tv = $$C4;
export const Vr = $$L5;
export const Wf = $$R6;
export const jY = $$D7;
export const n4 = $$B8;
export const pF = $$k9;
export const rb = $$O10;
export const uQ = $$N11;
export const uV = $$j12;
export const xv = $$w13;