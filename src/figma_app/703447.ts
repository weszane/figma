import { pr } from '../905/16438';
import { T as _$$T } from '../905/38485';
import { aT } from '../905/55191';
import { z } from '../905/179410';
import { r } from '../905/216032';
import { l, t } from '../905/375476';
import { Mi } from '../905/609505';
import { D } from '../905/889391';
import { AnimationTriggerType } from '../905/927405';
let a = {
  m00: 1,
  m01: 0,
  m02: 0,
  m10: 0,
  m11: 1,
  m12: 0
};
function s(e, t, r = 1) {
  return {
    m00: r,
    m01: 0,
    m02: e,
    m10: 0,
    m11: r,
    m12: t
  };
}
let $$o3 = {
  FADE_IN: {
    opacity: 0,
    transform: a
  },
  SCALE_IN: {
    opacity: 0,
    transform: s(0, 0, 0.5)
  },
  SCALE_IN_BOTTOM: {
    opacity: 0,
    transform: s(0, 50, 0.5)
  },
  SLIDE_IN_TOP: {
    opacity: 0,
    transform: s(0, -150)
  },
  SLIDE_IN_BOTTOM: {
    opacity: 0,
    transform: s(0, 150)
  },
  SLIDE_IN_LEFT: {
    opacity: 0,
    transform: s(-150, 0)
  },
  SLIDE_IN_RIGHT: {
    opacity: 0,
    transform: s(150, 0)
  },
  NONE: {
    opacity: 1,
    transform: a
  }
};
let $$l2 = 0.75;
let $$d1 = {
  IN_CUBIC: [0.55, 0.055, 0.675, 0.19],
  OUT_CUBIC: [0.215, 0.61, 0.355, 1],
  INOUT_CUBIC: [0.645, 0.045, 0.355, 1],
  LINEAR: [0, 0, 1, 1],
  IN_BACK_CUBIC: [0.3, -0.05, 0.7, -0.5],
  OUT_BACK_CUBIC: [0.45, 1.45, 0.8, 1],
  INOUT_BACK_CUBIC: [0.7, -0.4, 0.4, 1.4],
  GENTLE_SPRING: [1, 100, 15, 0],
  SPRING_PRESET_ONE: [1, 300, 20, 0],
  SPRING_PRESET_TWO: [1, 600, 15, 0],
  SPRING_PRESET_THREE: [1, 80, 20, 0]
};
let $$c4 = {
  easingType: 'OUT_CUBIC',
  easingFunction: $$d1.OUT_CUBIC,
  transitionDuration: 0.3
};
let $$u0 = {
  ...$$c4,
  transitionDuration: 0.6
};
let $$p8 = 50;
class E {
  static kEpsilon = 1e-6;
  static kEpsilonSqr = this.kEpsilon * this.kEpsilon;
  m00;
  m01;
  m02;
  m10;
  m11;
  m12;
  constructor() {
    this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = 0;
  }
  static identity() {
    return this.fromNumbers(1, 0, 0, 0, 1, 0);
  }
  static fromNumbers(e, t, r, n, i, a) {
    let s = new E();
    s.m00 = e;
    s.m01 = t;
    s.m02 = r;
    s.m10 = n;
    s.m11 = i;
    s.m12 = a;
    return s;
  }
  static copy(e) {
    let t = new E();
    t.m00 = e.m00;
    t.m01 = e.m01;
    t.m02 = e.m02;
    t.m10 = e.m10;
    t.m11 = e.m11;
    t.m12 = e.m12;
    return t;
  }
  static fromArray(e) {
    let t = new E();
    t.m00 = e[0][0];
    t.m01 = e[0][1];
    t.m02 = e[0][2];
    t.m10 = e[1][0];
    t.m11 = e[1][1];
    t.m12 = e[1][2];
    return t;
  }
  static fromVectors(e, t, r) {
    let n = new E();
    n.m00 = t.x;
    n.m01 = r.x;
    n.m02 = e.x;
    n.m10 = t.y;
    n.m11 = r.y;
    n.m12 = e.y;
    return n;
  }
  axisX() {
    return new Mi(this.m00, this.m10);
  }
  axisY() {
    return new Mi(this.m01, this.m11);
  }
  offset() {
    return new Mi(this.m02, this.m12);
  }
  toDegrees() {
    return 180 * Math.atan2(this.m10, this.m00) / Math.PI;
  }
  toScale() {
    let {
      m00,
      m01,
      m10,
      m11
    } = this;
    return new Mi(Math.sqrt(m00 * m00 + m10 * m10), Math.sqrt(m01 * m01 + m11 * m11));
  }
  hasNaN() {
    return this.m00 != this.m00 && this.m01 != this.m01 && this.m02 != this.m02 && this.m10 != this.m10 && this.m11 != this.m11 && this.m12 != this.m12;
  }
  translate(e, t) {
    this.m02 = e * this.m00 + t * this.m01 + this.m02;
    this.m12 = e * this.m10 + t * this.m11 + this.m12;
  }
  rotate(e) {
    if (e === 0) return;
    let t = Math.sin(e);
    let r = Math.cos(e);
    let n = r * this.m00 + t * this.m01;
    let i = r * this.m01 - t * this.m00;
    let a = r * this.m10 + t * this.m11;
    let s = r * this.m11 - t * this.m10;
    this.m00 = n;
    this.m01 = i;
    this.m10 = a;
    this.m11 = s;
  }
  scale(e, t) {
    this.m00 *= e;
    this.m01 *= t;
    this.m10 *= e;
    this.m11 *= t;
  }
  multiply(e) {
    let t = this.m00 * e.m00 + this.m01 * e.m10;
    let r = this.m00 * e.m01 + this.m01 * e.m11;
    let n = this.m00 * e.m02 + this.m01 * e.m12 + this.m02;
    let i = this.m10 * e.m00 + this.m11 * e.m10;
    let a = this.m10 * e.m01 + this.m11 * e.m11;
    let s = this.m10 * e.m02 + this.m11 * e.m12 + this.m12;
    this.m00 = t;
    this.m01 = r;
    this.m02 = n;
    this.m10 = i;
    this.m11 = a;
    this.m12 = s;
  }
  determinant() {
    return this.m00 * this.m11 - this.m01 * this.m10;
  }
  invert() {
    let e = 1 / this.determinant();
    if (!isFinite(e)) return !1;
    let t = E.fromNumbers(this.m11 * e, -this.m01 * e, (this.m01 * this.m12 - this.m11 * this.m02) * e, -this.m10 * e, this.m00 * e, (this.m10 * this.m02 - this.m00 * this.m12) * e);
    return !t.hasNaN() && (this.m00 = t.m00, this.m01 = t.m01, this.m02 = t.m02, this.m10 = t.m10, this.m11 = t.m11, this.m12 = t.m12, !0);
  }
  transformRect(e) {
    if (e.isInvalid()) return e;
    if (this.axisX().y === 0 && this.axisY().x === 0) return r.computeBounds(this.transformPoint(e.topLeft()), this.transformPoint(e.bottomRight()));
    let t = [this.transformPoint(e.topLeft()), this.transformPoint(e.topRight()), this.transformPoint(e.bottomLeft()), this.transformPoint(e.bottomRight())];
    return r.computeBoundsFromPointArray(t);
  }
  transformPoint(e) {
    return new Mi(this.m00 * e.x + this.m01 * e.y + this.m02, this.m10 * e.x + this.m11 * e.y + this.m12);
  }
  toSvgTransform() {
    return `matrix(${aT(this.m00)} ${aT(this.m10)} ${aT(this.m01)} ${aT(this.m11)} ${aT(this.m02)} ${aT(this.m12)})`;
  }
  toMatrix() {
    return [[this.m00, this.m01, this.m02], [this.m10, this.m11, this.m12]];
  }
  transformDirection(e) {
    return new Mi(this.m00 * e.x + this.m01 * e.y, this.m10 * e.x + this.m11 * e.y);
  }
  inverseTransformPoint(e) {
    let t = 1 / this.determinant();
    if (!isFinite(t)) return Mi.invalid();
    let r = new Mi((this.m11 * e.x - this.m01 * e.y + this.m01 * this.m12 - this.m11 * this.m02) * t, (this.m00 * e.y - this.m10 * e.x + this.m10 * this.m02 - this.m00 * this.m12) * t);
    return r.hasNaN() ? Mi.invalid() : r;
  }
  static fromTransform(e) {
    return E.fromNumbers(e[0][0], e[0][1], e[0][2], e[1][0], e[1][1], e[1][2]);
  }
  toTransform() {
    return [[this.m00, this.m01, this.m02], [this.m10, this.m11, this.m12]];
  }
}
function y(e) {
  return e ? `${0 | e.sessionID}:${0 | e.localID}` : null;
}
function T(e, t) {
  throw new pr(t ?? `Uncaught type ${JSON.stringify(e)}`);
}
function I(e, t) {
  let r;
  if (!e) return {};
  let n = t.transform ? E.fromTransform(t.transform) : E.identity();
  n.multiply(Array.isArray(r = e.transform) ? E.fromNumbers(r[0][0], r[0][1], r[0][2], r[1][0], r[1][1], r[1][2]) : typeof r == 'object' ? E.fromNumbers(r.m00, r.m01, r.m02, r.m10, r.m11, r.m12) : E.identity());
  let i = n.toScale();
  let a = n.offset();
  let s = n.toDegrees();
  return {
    opacity: e.opacity ?? t.opacity ?? 1,
    scaleX: i?.x ?? 1,
    scaleY: i?.y ?? 1,
    translateX: a?.x ?? 0,
    translateY: a?.y ?? 0,
    rotate: s ?? 0
  };
}
export function $$S12(e, t, r, i) {
  let a = {
    key: void 0,
    hasBehaviors: !1,
    variants: {
      visible: {}
    },
    initial: 'visible',
    appearBehaviorOtherLayer: void 0,
    scrollTransformOtherLayer: void 0,
    hasAppearLoadBehavior: !1,
    hasAppearScrollIntoViewBehavior: !1,
    hasAppearScrollDirectionBehavior: !1,
    hasHoverBehavior: !1,
    hasPressBehavior: !1,
    hasFocusBehavior: !1,
    hasScrollSpeedBehavior: !1,
    hasCursorBehavior: !1,
    transitionToVisible: void 0,
    transitionToExit: void 0,
    transitionToAndFromHover: void 0,
    transitionToAndFromPress: void 0,
    transitionToAndFromFocus: void 0,
    transitionBasedOnScrollDirection: void 0,
    scrollParallaxSpeed: 1,
    replayAppearBehavior: !0,
    hasScrollTransformOnScrollBehavior: !1,
    hasScrollTransformIntoViewBehavior: !1,
    scrollTransformTransition: void 0,
    replayScrollTransformBehavior: !0,
    cursorBehaviorInfo: void 0,
    hasEnterAnimation: !0,
    hasExitAnimation: !0
  };
  if (e.length === 0) return a;
  for (let s of (a.hasBehaviors = !0, a.variants = {
    visible: I({}, t)
  }, e)) {
    let e = s.behaviorType;
    let o = !1;
    switch (e) {
      case AnimationTriggerType.Appear:
        {
          if (!s || r?.[AnimationTriggerType.Appear]) break;
          let e = s.trigger;
          switch (e) {
            case 'PAGE_LOAD':
              a.hasAppearLoadBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.enterState, t);
              a.transitionToVisible = v(s.enterTransition);
              break;
            case 'THIS_LAYER_IN_VIEW':
              a.hasAppearScrollIntoViewBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.enterState, t);
              a.variants.exit = I(s.exitState ?? s.enterState, t);
              a.transitionToVisible = v(s.enterTransition);
              a.transitionToExit = v(s.exitTransition);
              a.replayAppearBehavior = !s.playsOnce;
              break;
            case 'OTHER_LAYER_IN_VIEW':
              a.hasAppearScrollIntoViewBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.enterState, t);
              a.variants.exit = I(s.exitState ?? s.enterState, t);
              a.appearBehaviorOtherLayer = y(s.otherLayer);
              a.transitionToVisible = v(s.enterTransition);
              a.transitionToExit = v(s.exitTransition);
              a.replayAppearBehavior = !s.playsOnce;
              break;
            case 'SCROLL_DIRECTION':
              a.hasAppearScrollDirectionBehavior = !0;
              a.variants.scrollDirection = I(s.enterState, t);
              a.transitionBasedOnScrollDirection = v(s.enterTransition);
              a.replayAppearBehavior = !s.playsOnce;
              break;
            default:
              T(e);
          }
          break;
        }
      case AnimationTriggerType.ScrollTransform:
        {
          if (!s || r?.[AnimationTriggerType.ScrollTransform]) break;
          o = s.fromState.opacity !== s.toState.opacity;
          let e = s.trigger;
          switch (e) {
            case 'PAGE_HEIGHT':
              a.hasScrollTransformOnScrollBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.fromState, t);
              a.variants.exit = I(s.toState, t);
              a.scrollTransformTransition = v(s.transition);
              break;
            case 'THIS_LAYER_IN_VIEW':
              a.hasScrollTransformIntoViewBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.fromState, t);
              a.variants.exit = I(s.toState, t);
              a.scrollTransformTransition = v(s.transition);
              a.replayScrollTransformBehavior = !s.playsOnce;
              break;
            case 'OTHER_LAYER_IN_VIEW':
              a.hasScrollTransformIntoViewBehavior = !0;
              a.initial = 'initial';
              a.variants.initial = I(s.fromState, t);
              a.variants.exit = I(s.toState, t);
              a.scrollTransformTransition = v(s.transition);
              a.scrollTransformOtherLayer = y(s.otherLayer);
              a.replayScrollTransformBehavior = !s.playsOnce;
              break;
            default:
              T(e);
          }
          break;
        }
      case AnimationTriggerType.Hover:
        a.hasHoverBehavior = !r?.[AnimationTriggerType.Hover];
        a.variants.hover = I(s.state, t);
        a.transitionToAndFromHover = v(s.transition);
        break;
      case AnimationTriggerType.Press:
        a.hasPressBehavior = !r?.[AnimationTriggerType.Press];
        a.variants.press = I(s.state, t);
        a.transitionToAndFromPress = v(s.transition);
        break;
      case AnimationTriggerType.Focus:
        a.hasFocusBehavior = !r?.[AnimationTriggerType.Focus];
        a.variants.focus = I(s.state, t);
        a.transitionToAndFromFocus = v(s.transition);
        break;
      case AnimationTriggerType.ScrollParallax:
        a.hasScrollSpeedBehavior = !r?.[AnimationTriggerType.ScrollParallax];
        a.scrollParallaxSpeed = s.speed;
        break;
      case AnimationTriggerType.Cursor:
        a.hasCursorBehavior = !r?.[AnimationTriggerType.Cursor];
        a.cursorBehaviorInfo = {
          cursorGuid: y(s.cursorGuid),
          cursorImage: i,
          cursorHotspot: {
            x: s.hotspotX,
            y: s.hotspotY
          }
        };
        break;
      case AnimationTriggerType.Marquee:
      case AnimationTriggerType.Code:
        break;
      default:
        T(e);
    }
    o && a.scrollTransformTransition && (a.scrollTransformTransition.repeatDelay = 1);
  }
  a.key = JSON.stringify(a);
  return a;
}
function v(e) {
  if (e) {
    switch (e.easingType) {
      case 'IN_CUBIC':
        return {
          ease: 'easeIn',
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'OUT_CUBIC':
        return {
          ease: 'easeOut',
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'INOUT_CUBIC':
        return {
          ease: 'easeInOut',
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'LINEAR':
        return {
          ease: 'linear',
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'IN_BACK_CUBIC':
        return {
          ease: $$d1.IN_BACK_CUBIC,
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'OUT_BACK_CUBIC':
        return {
          ease: $$d1.OUT_BACK_CUBIC,
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'INOUT_BACK_CUBIC':
        return {
          ease: $$d1.INOUT_BACK_CUBIC,
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'CUSTOM_CUBIC':
        return {
          ease: e.easingFunction,
          duration: e.transitionDuration,
          delay: e.delay
        };
      case 'GENTLE_SPRING':
      case 'SPRING_PRESET_ONE':
      case 'SPRING_PRESET_TWO':
      case 'SPRING_PRESET_THREE':
        return {
          type: 'spring',
          stiffness: $$d1[e.easingType][1],
          damping: $$d1[e.easingType][2],
          mass: $$d1[e.easingType][0],
          delay: e.delay
        };
      case 'CUSTOM_SPRING':
        {
          let t = e.easingFunction ?? $$d1.GENTLE_SPRING;
          return {
            type: 'spring',
            stiffness: t[1],
            damping: t[2],
            mass: t[0],
            delay: e.delay
          };
        }
      default:
        !function (e, t = '') {}(e.easingType, `Invalid easing type ${e.easingType}`);
        return {
          ease: 'easeOut',
          duration: e.transitionDuration
        };
    }
  }
}
export const gq = $$u0;
export const oM = $$d1;
export const B8 = $$l2;
export const Eu = $$o3;
export const LU = $$c4;
export const z8 = z;
export const DV = D;
export const JQ = $$p8;
export const Tl = _$$T;
export const tb = t;
export const lY = l;
export const $X = $$S12;
export { Xc } from '../905/927405';