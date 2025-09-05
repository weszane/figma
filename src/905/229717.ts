var $$n1;
var $$r5;
let s;
function o(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class l {
  constructor(e) {
    o(this, "handle", void 0);
    this.handle = e;
  }
}
export class $$d0 extends l {
  getCopy() {
    return s.getCopy(this.handle);
  }
  set(e) {
    s.set(this.handle, e);
  }
  subscribeFromJs(e) {
    return s.subscribeFromJs(this.handle, e);
  }
  unsubscribeFromJs(e) {
    s.unsubscribeFromJs(this.handle, e);
  }
  constructor(e) {
    super(e);
    o(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$c3(e) {
  s = e.WritableObservableValue_VectorF__Internal;
  globalThis.WritableObservableValue_VectorF_ = l;
  globalThis.MutableWritableObservableValue_VectorF_ = $$d0;
}
export function $$u2() {
  return {
    writableObservableValue_VectorF__Internal: s
  };
}
!function (e) {
  e[e.LEFT = 0] = "LEFT";
  e[e.CENTER = 1] = "CENTER";
  e[e.RIGHT = 2] = "RIGHT";
  e[e.JUSTIFIED = 3] = "JUSTIFIED";
}($$n1 || ($$n1 = {}));
(function (e) {
  e[e.TOP = 0] = "TOP";
  e[e.CENTER = 1] = "CENTER";
  e[e.BOTTOM = 2] = "BOTTOM";
})($$r5 || ($$r5 = {}));
export enum Axis {
  X = 0
  Y = 1
}
export const Ae = $$d0;
export const GP = $$n1;
export const KO = $$u2;
export const LQ = $$c3;
export const _0 = Axis;
export const zb = $$r5;
