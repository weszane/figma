import { kiwiParserCodec } from "../905/294864";
import { KF } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { qN, kE } from "../figma_app/273493";
import { eVK, glU } from "../figma_app/763686";
import { s as _$$s } from "../905/583953";
import d from "../vendor/415955";
import { FN } from "../figma_app/191804";
import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { Ug } from "../905/706046";
import { gl } from "../905/216495";
var c = d;
let $$f16 = {
  r: 196 / 255,
  g: 196 / 255,
  b: 196 / 255,
  a: 1
};
let $$E1 = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
let y = [{
  position: 0,
  color: {
    r: 1,
    g: 1,
    b: 1,
    a: 1
  }
}, {
  position: 1,
  color: {
    r: 1,
    g: 1,
    b: 1,
    a: 0
  }
}];
let b = y.map(Ug);
let T = e => {
  let t = _$$s.identity();
  t.translate(.5, .5);
  e && ($$I18(e.leftEndCap) || $$I18(e.rightEndCap)) && (e.angle >= 90 || e.angle < -90) ? t.rotate(Math.PI) : !e || e.height > 0 && e.width / e.height <= 3 ? (t.rotate(-Math.PI / 2), e && (e.angle < -45 && e.angle >= -135 ? t.rotate(Math.PI / 2) : e.angle < -135 || e.angle > 135 ? t.rotate(Math.PI) : e.angle > 45 && e.angle <= 135 && t.rotate(-Math.PI / 2))) : (e.angle > 45 || e.angle < -135) && t.rotate(Math.PI);
  e && e.hasReflection && t.rotate(Math.PI);
  t.translate(-.5, -.5);
  return t.toFigMatrix();
};
export function $$I18(e) {
  if (!e) return !1;
  switch (e) {
    case "ARROW_LINES":
    case "ARROW_EQUILATERAL":
    case "TRIANGLE_FILLED":
    case "CIRCLE_FILLED":
    case "DIAMOND_FILLED":
      return !0;
    case "ROUND":
    case "SQUARE":
    case "NONE":
    case "HIGHLIGHT":
    case "WASHI_TAPE_1":
    case "WASHI_TAPE_2":
    case "WASHI_TAPE_3":
    case "WASHI_TAPE_4":
    case "WASHI_TAPE_5":
    case "WASHI_TAPE_6":
      return !1;
  }
}
let S = null;
export function $$v19(e) {
  if (!$$x11(e.type)) return null;
  if (0 === e.stops.length) {
    let t = debugState.getState();
    ds("zero_stop_gradient_detected", t.openFile?.key, t);
    e.stops.push({
      color: FN,
      position: 0
    });
  }
  return e;
}
export function $$A6(e) {
  return $$C17(e.type) ? e : null;
}
export function $$x11(e) {
  return null != e && -1 !== ["GRADIENT_LINEAR", "GRADIENT_RADIAL", "GRADIENT_ANGULAR", "GRADIENT_DIAMOND"].indexOf(e);
}
export function $$N0(e) {
  return null != e && -1 !== ["IMAGE", "VIDEO"].indexOf(e);
}
export function $$C17(e) {
  return null != e && "SOLID" === e;
}
export function $$w20(e) {
  return "IMAGE" !== e.type && "VIDEO" !== e.type ? null : e;
}
export function $$O4(e) {
  return !e || gl(e) ? null : e.map($$w20).filter(isNotNullish);
}
export function $$R15(e) {
  return Array.from(e.hash).map(e => (e < 16 ? "0" : "") + e.toString(16)).join("");
}
export function $$L8(e) {
  return "PATTERN" !== e.type ? null : e;
}
export function $$P9(e) {
  return "NOISE" !== e.type ? null : e;
}
export function $$D2(e) {
  return "CENTER" === e.horizontalAlignment && "CENTER" === e.verticalAlignment ? eVK.MIDDLE_CENTER : "START" === e.horizontalAlignment && "CENTER" === e.verticalAlignment ? eVK.MIDDLE_LEFT : "END" === e.horizontalAlignment && "CENTER" === e.verticalAlignment ? eVK.MIDDLE_RIGHT : "CENTER" === e.horizontalAlignment && "START" === e.verticalAlignment ? eVK.TOP_CENTER : "START" === e.horizontalAlignment && "START" === e.verticalAlignment ? eVK.TOP_LEFT : "END" === e.horizontalAlignment && "START" === e.verticalAlignment ? eVK.TOP_RIGHT : "CENTER" === e.horizontalAlignment && "END" === e.verticalAlignment ? eVK.BOTTOM_CENTER : "START" === e.horizontalAlignment && "END" === e.verticalAlignment ? eVK.BOTTOM_LEFT : "END" === e.horizontalAlignment && "END" === e.verticalAlignment ? eVK.BOTTOM_RIGHT : eVK.TOP_LEFT;
}
export function $$k5(e) {
  switch (e) {
    case eVK.TOP_LEFT:
      return {
        horizontalAlignment: "START",
        verticalAlignment: "START"
      };
    case eVK.TOP_CENTER:
      return {
        horizontalAlignment: "CENTER",
        verticalAlignment: "START"
      };
    case eVK.TOP_RIGHT:
      return {
        horizontalAlignment: "END",
        verticalAlignment: "START"
      };
    case eVK.MIDDLE_LEFT:
      return {
        horizontalAlignment: "START",
        verticalAlignment: "CENTER"
      };
    case eVK.MIDDLE_CENTER:
      return {
        horizontalAlignment: "CENTER",
        verticalAlignment: "CENTER"
      };
    case eVK.MIDDLE_RIGHT:
      return {
        horizontalAlignment: "END",
        verticalAlignment: "CENTER"
      };
    case eVK.BOTTOM_LEFT:
      return {
        horizontalAlignment: "START",
        verticalAlignment: "END"
      };
    case eVK.BOTTOM_CENTER:
      return {
        horizontalAlignment: "CENTER",
        verticalAlignment: "END"
      };
    case eVK.BOTTOM_RIGHT:
      return {
        horizontalAlignment: "END",
        verticalAlignment: "END"
      };
  }
}
let $$M7 = new class {
  constructor() {
    this.clearCache = e => {
      null != e ? delete this.cache[e] : this.cache = {};
    };
    this.getId = (e, t, r) => `${r}-${t}-${e}`;
    this.initPaint = (e, t, r, n, i, a) => this.initPaintWithDefaultImagePaint(e, t, r, n, S, a ?? !1, i);
    this.getPaintStopsAndStopsVar = (e, t, r, n) => {
      let i = n ? [{
        position: 0,
        color: r
      }, {
        position: 1,
        color: e
      }] : [{
        position: 0,
        color: e
      }, {
        position: 1,
        color: r
      }];
      let a = i.map(Ug);
      t && (a[n ? 1 : 0].colorVar = t);
      return {
        stops: i,
        stopsVar: a
      };
    };
    this.initPaintWithDefaultImagePaint = (e, t, r, n, i, a, s) => {
      let o = {
        type: e,
        opacity: 1,
        visible: !0,
        blendMode: "NORMAL"
      };
      if ("SOLID" === e ? o.color = t : $$x11(e) ? (o.stops = y, o.stopsVar = b, o.transform = T(s)) : $$N0(e) && i && ("VIDEO" === e ? this.transferVideoAttributes(i, o) : this.transferImageAttributes(i, o)), !r) return o;
      let l = this.cachePaint(r, n);
      if (this.transferGeneralAttributes(l, o), "SOLID" === e) l.color ? this.transferColorAttributes(l, o) : l.stops && l.stops.length && this.transferColorAttributes(l.stops[0], o);else if ($$x11(e)) {
        if (l.stops) this.transferGradientAttributes(l, o);else if (l.color) {
          let e = $$G12(l.color, a);
          let t = (s && $$I18(s.rightEndCap)) ?? !1;
          let {
            stops,
            stopsVar
          } = this.getPaintStopsAndStopsVar({
            ...l.color,
            a: 1
          }, l.colorVar, e, a ? !t : t);
          o.stops = stops;
          o.stopsVar = stopsVar;
        }
      } else "IMAGE" === e ? l.image && l.imageThumbnail && (this.transferImageAttributes(l, o), o.transform = l.imageTransform) : "VIDEO" === e && l.video && this.transferVideoAttributes(l, o);
      return o;
    };
    this.cachePaint = (e, t) => (this.cache[t] = this.cache[t] || c()(e), $$x11(e.type) ? this.transferGradientAttributes(e, this.cache[t]) : "SOLID" === e.type ? this.transferColorAttributes(e, this.cache[t]) : "IMAGE" === e.type ? (this.transferImageAttributes(e, this.cache[t]), this.cache[t].imageTransform = e.transform) : "VIDEO" === e.type && this.transferVideoAttributes(e, this.cache[t]), this.cache[t]);
    this.transferGeneralAttributes = (e, t) => {
      t.opacity = e.opacity;
      t.blendMode = e.blendMode;
      t.visible = e.visible;
    };
    this.transferColorAttributes = (e, t) => {
      t.color = e.color;
    };
    this.transferGradientAttributes = (e, t) => {
      t.stops = e.stops;
      t.stopsVar = e.stopsVar;
      t.transform = e.transform;
    };
    this.transferImageAttributes = (e, t) => {
      t.image = e.image;
      t.imageThumbnail = e.imageThumbnail;
      t.animatedImage = e.animatedImage;
      t.animationFrame = e.animationFrame;
      t.imageScaleMode = e.imageScaleMode;
      t.rotation = e.rotation;
      t.scale = e.scale;
      t.paintFilter = e.paintFilter;
      t.imageShouldColorManage = e.imageShouldColorManage;
      t.video = void 0;
    };
    this.transferVideoAttributes = (e, t) => {
      t.imageThumbnail = e.imageThumbnail;
      t.animationFrame = e.animationFrame;
      t.imageScaleMode = e.imageScaleMode;
      t.rotation = e.rotation;
      t.scale = e.scale;
      t.paintFilter = e.paintFilter;
      t.video = e.video;
      t.image = void 0;
    };
    this.clearCache();
  }
}();
let F = !1;
export function $$j14() {
  F || (F = !0, Y5.onReady().then(() => {
    let e = glU?.requestDefaultImageStyle();
    let t = e ? kiwiParserCodec.decodeMessage(e) : null;
    t && t.nodeChanges && t.nodeChanges.length > 0 && t.nodeChanges[0].fillPaints && (S = t.nodeChanges[0].fillPaints[0]);
  }));
}
export function $$U3(e, t) {
  let r = $$w20(e);
  if (!r) return e;
  if ("STRETCH" === r.imageScaleMode) {
    let e = _$$s.identity();
    e.translate(.5, .5);
    e.rotate(-(Math.PI / 180 * t));
    e.translate(-.5, -.5);
    e.multiply(_$$s.fromFigMatrix(r.transform));
    return {
      ...r,
      transform: e.toFigMatrix()
    };
  }
  return {
    ...r,
    rotation: r.rotation + t
  };
}
export function $$B13(e, t) {
  let r = $$v19(e);
  if (r) {
    let e = r.stops;
    return t.index < e.length ? e[t.index].color : r.stops[0].color;
  }
  {
    let t = $$A6(e);
    KF(!!t, "paint is neither a gradient nor a solid");
    return {
      ...t.color,
      a: t.opacity ?? 1
    };
  }
}
export function $$G12(e, t = !1) {
  var r = {
    ...e,
    a: 0
  };
  if (!t) {
    let t = qN(e);
    let n = t.v >= .5 ? t.v - .4 : t.v + .4;
    r = kE({
      ...t,
      v: n
    });
  }
  return r;
}
export const E3 = $$N0;
export const Em = $$E1;
export const JX = $$D2;
export const Lt = $$U3;
export const N9 = $$O4;
export const OO = $$k5;
export const Ou = $$A6;
export const Tm = $$M7;
export const XE = $$L8;
export const Z3 = $$P9;
export const aT = function e(t) {
  if (t.effects && t.effects.filter(e => e.visible).length > 0) return !0;
  for (let r of t.childrenNodes ?? []) if (e(r)) return !0;
  return !1;
};
export const bn = $$x11;
export const c4 = $$G12;
export const iC = $$B13;
export const n_ = $$j14;
export const qg = $$R15;
export const rC = $$f16;
export const sb = $$C17;
export const wQ = $$I18;
export const x$ = $$v19;
export const y7 = $$w20;