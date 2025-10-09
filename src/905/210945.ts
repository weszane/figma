import { jsx } from "react/jsx-runtime";
import { memo, useState, useEffect, useMemo, useCallback } from "react";
import { i } from "../905/969773";
import { Z } from "../905/124614";
import { b } from "../905/462537";
import { V } from "../905/261687";
import { q } from "../905/347574";
import { s as _$$s } from "../905/504529";
import { convertKiwiToVariableIdString } from "../905/805904";
import m from "../vendor/805353";
import { getVariableById } from "../figma_app/852050";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { h as _$$h } from "../905/65944";
import { WT } from "../905/824449";
import { M as _$$M } from "../905/968248";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm1 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-6-2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M9 8.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"
    })
  });
});
var h = m;
let $$b2 = 100;
let $$v1 = 100;
let I = () => ({
  blendMode: "NORMAL",
  color: M.shadow,
  offset: {
    x: 0,
    y: 4
  },
  radius: 4,
  spread: 0,
  type: "DROP_SHADOW",
  visible: !0,
  showShadowBehindNode: !1
});
export function $$E4(e) {
  if (!e.type) throw Error("unknown effect type");
  return {
    ...I(),
    ...e
  };
}
export function $$x3(e) {
  switch (e) {
    case "REPEAT":
      return {
        ...I(),
        repeatType: "LINEAR",
        axis: "X",
        count: 2,
        order: "FORWARD",
        unitType: "RELATIVE",
        offset: {
          x: 1,
          y: 0
        },
        type: "REPEAT"
      };
    case "NOISE":
      return {
        ...I(),
        type: e,
        color: M.shadow,
        opacity: .25
      };
    case "DROP_SHADOW":
    case "INNER_SHADOW":
    case "FOREGROUND_BLUR":
    case "BACKGROUND_BLUR":
    case "GRAIN":
    case "SYMMETRY":
      return {
        ...I(),
        type: e
      };
    case "GLASS":
      return {
        ...I(),
        type: "GLASS",
        refractionIntensity: F,
        refractionRadius: N,
        specularIntensity: O,
        specularAngle: P,
        bevelSize: D,
        chromaticAberration: L,
        secondaryColor: M.glass
      };
  }
}
function S() {
  return Math.floor(1e4 * Math.random());
}
let w = {
  x: .5,
  y: .5
};
let C = {
  x: 4,
  y: 4
};
let T = {
  r: 1,
  g: 1,
  b: 1,
  a: .25
};
let k = {
  x: .5,
  y: 0
};
let R = {
  x: .5,
  y: 1
};
let N = 20;
let P = -45;
let O = .8;
let D = 1;
let L = .5;
let F = .8;
let M = {
  shadow: {
    r: 0,
    g: 0,
    b: 0,
    a: .25
  },
  glass: {
    r: 1,
    g: 1,
    b: 1,
    a: 0
  }
};
export function $$j6(e, t, i) {
  let n = {};
  "GRAIN" === t ? (e.noiseSize || (n.noiseSize = C), e.clipToShape || (n.clipToShape = !1), e.seed || (n.seed = S())) : "NOISE" === t ? (e.noiseType || (n.noiseType = "MONOTONE"), e.noiseSize || (n.noiseSize = w), e.opacity || (n.opacity = .15), e.density || (n.density = 1), e.secondaryColor || (n.secondaryColor = T), e.seed || (n.seed = S())) : "GLASS" === t ? (e.refractionRadius || (n.refractionRadius = N), e.specularAngle || (n.specularAngle = P), e.specularIntensity || (n.specularIntensity = O), e.bevelSize || (n.bevelSize = D), e.chromaticAberration || (n.chromaticAberration = L), e.reflectionDistance || (n.reflectionDistance = 0), e.refractionIntensity || (n.refractionIntensity = F), e.secondaryColor || (n.secondaryColor = M.glass)) : ("FOREGROUND_BLUR" === t || "BACKGROUND_BLUR" === t) && "PROGRESSIVE" === i && (n.radius = Math.min(e.radius ?? 0, $$b2), n.startRadius = Math.min(e.startRadius ?? 0, $$b2), n.startOffset = e.startOffset ?? k, n.endOffset = e.endOffset ?? R);
  return n;
}
export function $$U5(e) {
  let t = `${Math.sign(e.offset.x)}${Math.sign(e.offset.y)}`;
  switch (e.type) {
    case "INNER_SHADOW":
      return WT.INNER_SHADOW[t] ?? jsx(i, {});
    case "DROP_SHADOW":
      return WT.DROP_SHADOW[t] ?? jsx(Z, {});
    case "FOREGROUND_BLUR":
      if ("PROGRESSIVE" === e.blurOpType) return jsx(b, {});
      return jsx(V, {});
    case "BACKGROUND_BLUR":
      if ("PROGRESSIVE" === e.blurOpType) return jsx(d, {});
      return jsx(q, {});
    case "REPEAT":
    case "SYMMETRY":
    case "GRAIN":
    case "NOISE":
      return _$$M(e.type, e.repeatType);
    case "GLASS":
      return jsx(_$$s, {});
  }
}
export function $$B0({
  initialPosition: e,
  color: t,
  onChange: i,
  onClose: a,
  recordingKey: s,
  onVariableChange: o,
  variableData: l,
  variableScopes: d
}) {
  let c = getVariableById(l?.dataType === "ALIAS" && l.value?.alias ? convertKiwiToVariableIdString(l.value.alias) : void 0);
  let [u, m] = function (e, t) {
    let [i, n] = useState(e);
    useEffect(() => {
      e !== i && n(e);
    }, [i, e]);
    let a = useMemo(() => h()(t, 10, {
      trailing: !0
    }), [t]);
    return [i, useCallback(e => {
      a(e);
      n(e);
    }, [a])];
  }(t, e => {
    i(e, yesNoTrackingEnum.YES);
  });
  return jsx(_$$h, {
    boundVariable: c,
    color: u,
    disabledVariableIds: new Set(),
    initialPosition: e,
    isVariableCreationEnabled: !1,
    onChange: m,
    onClose: a,
    onVariableChange: o,
    recordingKey: s,
    variableScopes: d
  });
}
export const gA = $$B0;
export const ml = $$v1;
export const aO = $$b2;
export const IK = $$x3;
export const qq = $$E4;
export const vG = $$U5;
export const UF = $$j6;