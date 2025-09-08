import { CurveType, AnimationBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
var $$n1;
(e => {
  function t(e, t, i) {
    return {
      type: CurveType.SPRING,
      mass: e,
      stiffness: t,
      damping: i
    };
  }
  e.forLinear = function (e) {
    return {
      type: CurveType.LINEAR,
      duration: e
    };
  };
  e.forBezier = function (e, t) {
    return {
      type: CurveType.BEZIER,
      easingType: e,
      duration: t
    };
  };
  e.forOpacityOscillation = function (e, t, i, n) {
    return {
      type: CurveType.OSCILLATION,
      numOscillations: e,
      lowValue: t,
      hiValue: i,
      duration: n
    };
  };
  e.forTransformOscillation = function (e, t, i, n) {
    return {
      type: CurveType.OSCILLATION,
      numOscillations: e,
      lowValueTransform: t,
      hiValueTransform: i,
      duration: n
    };
  };
  e.forSpring = t;
  e.forSpringBounciness = function (e, t) {
    return {
      type: CurveType.SPRING,
      bounciness: e,
      duration: t
    };
  };
  e.forGentleSpring = function () {
    return t(1, 100, 15);
  };
  e.forQuickSpring = function () {
    return t(1, 300, 20);
  };
  e.forBouncySpring = function () {
    return t(1, 600, 15);
  };
  e.forSlowSpring = function () {
    return t(1, 80, 20);
  };
})($$n1 || ($$n1 = {}));
let s = 0;
export function $$o2(e) {
  getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => {
    s = t.setRelativeTransformWithAnimation({
      m00: 1,
      m01: 0,
      m02: t.relativeTransform.m02 + 300,
      m10: 0,
      m11: 1,
      m12: t.relativeTransform.m12 + 300
    }, e, "transform-debug-menu");
  });
}
export function $$l0() {
  getSingletonSceneGraph().getDirectlySelectedNodes().forEach(e => {
    let t = {
      ...e.relativeTransform,
      m02: e.relativeTransform.m02 + 100,
      m12: e.relativeTransform.m12 + 100
    };
    let i = {
      ...e.relativeTransform,
      m02: e.relativeTransform.m02 - 100,
      m12: e.relativeTransform.m12 - 100
    };
    s = e.setRelativeTransformWithAnimation(e.relativeTransform, $$n1.forTransformOscillation(3, i, t, 2), "jiggle-debug-menu");
  });
}
export function $$d3(e) {
  getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => {
    s = t.setOpacityWithAnimation(.25, e, "opacity-debug-menu");
  });
}
export function $$c4() {
  0 !== s && (AnimationBindings.cancelAnimation(s.toString()), s = 0);
}
export const Oo = $$l0;
export const _E = $$n1;
export const aZ = $$o2;
export const lE = $$d3;
export const vt = $$c4;