import { useCallback, useMemo } from "react";
import { deepEqual } from "../905/382883";
import { isValidValue, arrayOrMixed, isInvalidValue, MIXED_MARKER } from "../905/216495";
import { useSelectionPropertyValue } from "../905/275640";
import { Xb, f3, P6, ac } from "../figma_app/641313";
import { R1 } from "../figma_app/152690";
import { kF, om } from "../figma_app/395097";
export function $$c2() {
  let e = useSelectionPropertyValue("angle");
  let t = useSelectionPropertyValue("hasReflection");
  let i = useSelectionPropertyValue("borderTopWeight");
  let r = useSelectionPropertyValue("borderRightWeight");
  let l = useSelectionPropertyValue("borderBottomWeight");
  let c = useSelectionPropertyValue("borderLeftWeight");
  let u = useSelectionPropertyValue("borderStrokeWeightsIndependent");
  let p = useSelectionPropertyValue("strokeWeight");
  u || (i = p, r = p, l = p, c = p);
  return useCallback((n, s) => {
    let u = [{
      side: kF.TOP,
      value: i,
      property: "borderTopWeight",
      mixedMathHandler: Xb
    }, {
      side: kF.LEFT,
      value: c,
      property: "borderLeftWeight",
      mixedMathHandler: f3
    }, {
      side: kF.BOTTOM,
      value: l,
      property: "borderBottomWeight",
      mixedMathHandler: P6
    }, {
      side: kF.RIGHT,
      value: r,
      property: "borderRightWeight",
      mixedMathHandler: ac
    }];
    let p = u.findIndex(e => e.side === n);
    if (isValidValue(t) && t && (n === kF.TOP || n === kF.BOTTOM) && (p = (p + 2) % 4), void 0 !== e && isValidValue(e)) {
      let i = s || t ? -1 * e : e;
      Math.abs(i) >= 135 ? p += 2 : i >= 45 ? p += 3 : i <= -45 && (p += 1);
    }
    return u[p % 4];
  }, [e, l, c, r, i, t]);
}
let u = [kF.TOP, kF.BOTTOM, kF.LEFT, kF.RIGHT];
export function $$p3(e = !0) {
  let t = useSelectionPropertyValue("borderTopVisible");
  let i = useSelectionPropertyValue("borderBottomVisible");
  let r = useSelectionPropertyValue("borderLeftVisible");
  let o = useSelectionPropertyValue("borderRightVisible");
  let l = $$c2();
  return useMemo(() => {
    let n = arrayOrMixed([t, i, r, o]);
    if (isInvalidValue(n)) return MIXED_MARKER;
    let s = [];
    let c = t => {
      s.push(e ? l(t, !0).side : t);
    };
    t && c(kF.TOP);
    i && c(kF.BOTTOM);
    r && c(kF.LEFT);
    o && c(kF.RIGHT);
    s.sort((e, t) => u.indexOf(e) - u.indexOf(t));
    return s;
  }, [e, l, i, r, o, t]);
}
export function $$m4() {
  let e = $$p3(!1);
  let t = useSelectionPropertyValue("borderSharedWeight");
  let i = useSelectionPropertyValue("borderStrokeWeightsIndependent");
  if (isInvalidValue(e)) return om.MIXED;
  if (0 === e.length) return om.ALL;
  if (1 === e.length) return e[0];
  if (4 === e.length) {
    let e = isValidValue(t);
    if (!1 === i || e) return om.ALL;
  }
  return om.CUSTOM;
}
export function $$h1() {
  let {
    variableConsumptionMap,
    setVariableConsumptionMap
  } = R1();
  return {
    updateVariableConsumption: useCallback(i => {
      let n = ["BORDER_TOP_WEIGHT", "BORDER_BOTTOM_WEIGHT", "BORDER_LEFT_WEIGHT", "BORDER_RIGHT_WEIGHT"];
      let a = function (e) {
        if (0 === e.length) return null;
        if (4 === e.length) {
          for (let t = 1; t < e.length; t++) if (!deepEqual(e[t], e[0])) {
            let i = e[t];
            return i?.isMixed ? null : i;
          }
        }
        let t = e[0];
        return t?.isMixed ? null : t;
      }(n.map(t => variableConsumptionMap[t]).filter(e => void 0 !== e));
      if (!a || i === om.MIXED || i === om.CUSTOM) return;
      let s = {};
      i === om.ALL ? n.forEach(e => {
        s[e] = a;
      }) : $$g0(i) && (s[$$g0(i)] = a);
      setVariableConsumptionMap(s);
    }, [setVariableConsumptionMap, variableConsumptionMap])
  };
}
export function $$g0(e) {
  switch (e) {
    case om.TOP:
      return "BORDER_TOP_WEIGHT";
    case om.BOTTOM:
      return "BORDER_BOTTOM_WEIGHT";
    case om.LEFT:
      return "BORDER_LEFT_WEIGHT";
    case om.RIGHT:
      return "BORDER_RIGHT_WEIGHT";
    default:
      return;
  }
}
export const Gz = $$g0;
export const TV = $$h1;
export const XG = $$c2;
export const Yp = $$p3;
export const lF = $$m4;