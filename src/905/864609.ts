var $$n5;
var $$r8;
var $$a7;
var $$s2;
var $$o4;
var $$l6;
let $$d0;
let c;
let u;
function p(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class m {
  constructor(e) {
    p(this, "handle", void 0);
    this.handle = e;
  }
}
class h extends m {
  getCopy() {
    return c.getCopy(this.handle);
  }
  subscribeFromJs(e) {
    return c.subscribeFromJs(this.handle, e);
  }
  unsubscribeFromJs(e) {
    c.unsubscribeFromJs(this.handle, e);
  }
  constructor(e) {
    super(e);
    p(this, "handle", void 0);
    this.handle = e;
  }
}
class g {
  constructor(e) {
    p(this, "handle", void 0);
    this.handle = e;
  }
}
export class $$f9 extends g {
  getCopy() {
    return u.getCopy(this.handle);
  }
  set(e) {
    u.set(this.handle, e);
  }
  subscribeFromJs(e) {
    return u.subscribeFromJs(this.handle, e);
  }
  unsubscribeFromJs(e) {
    u.unsubscribeFromJs(this.handle, e);
  }
  constructor(e) {
    super(e);
    p(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$_3(e) {
  $$d0 = e.ColorManagementStateJs;
  c = e.ObservableValue_DocumentColorProfile__Internal;
  globalThis.ObservableValue_DocumentColorProfile_ = m;
  globalThis.MutableObservableValue_DocumentColorProfile_ = h;
  u = e.WritableObservableValue_ColorFormat__Internal;
  globalThis.WritableObservableValue_ColorFormat_ = g;
  globalThis.MutableWritableObservableValue_ColorFormat_ = $$f9;
}
export function $$A1() {
  return {
    colorManagementStateJs: $$d0,
    observableValue_DocumentColorProfile__Internal: c,
    writableObservableValue_ColorFormat__Internal: u
  };
}
!function (e) {
  e[e.SRGB = 0] = "SRGB";
  e[e.DISPLAY_P3 = 1] = "DISPLAY_P3";
}($$n5 || ($$n5 = {}));
(function (e) {
  e[e.LEGACY = 0] = "LEGACY";
  e[e.SRGB = 1] = "SRGB";
  e[e.DISPLAY_P3 = 2] = "DISPLAY_P3";
})($$r8 || ($$r8 = {}));
(function (e) {
  e[e.DOCUMENT = 0] = "DOCUMENT";
  e[e.SRGB = 1] = "SRGB";
  e[e.DISPLAY_P3_V4 = 2] = "DISPLAY_P3_V4";
  e[e.CMYK = 3] = "CMYK";
})($$a7 || ($$a7 = {}));
(function (e) {
  e[e.NO_CONVERSION = 0] = "NO_CONVERSION";
  e[e.SRGB_TO_DISPLAY_P3 = 1] = "SRGB_TO_DISPLAY_P3";
  e[e.DISPLAY_P3_TO_SRGB = 2] = "DISPLAY_P3_TO_SRGB";
})($$s2 || ($$s2 = {}));
(function (e) {
  e[e.HEX = 0] = "HEX";
  e[e.RGB = 1] = "RGB";
  e[e.CSS = 2] = "CSS";
  e[e.HSL = 3] = "HSL";
  e[e.HSB = 4] = "HSB";
  e[e.UIColor = 5] = "UIColor";
})($$o4 || ($$o4 = {}));
(function (e) {
  e[e.NO = 0] = "NO";
  e[e.YES = 1] = "YES";
})($$l6 || ($$l6 = {}));
export const H4 = $$d0;
export const KO = $$A1;
export const KX = $$s2;
export const LQ = $$_3;
export const NV = $$o4;
export const RY = $$n5;
export const UF = $$l6;
export const hz = $$a7;
export const yw = $$r8;
export const zc = $$f9;