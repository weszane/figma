import { createContext } from "react";
import { fullscreenValue } from "../figma_app/455680";
export let $$a0 = createContext(new class {
  constructor() {
    this.singleTapTouchStartListeners = {};
    this.singleTapTouchMoveListeners = {};
    this.singleTapTouchEndListeners = {};
    this.singleTapMouseDownListeners = {};
    this.singleTapMouseUpListeners = {};
    this.tapCallback = null;
    this.multiTapTouchStartListeners = {};
    this.multiTapTouchEndListeners = {};
    this.multiTapMouseDownListeners = {};
    this.multiTapMouseUpListeners = {};
    this.multiTapCallbacks = {};
    this.multiTouchLongPressTouchStartListeners = {};
    this.multiTouchLongPressTouchMoveListeners = {};
    this.multiTouchLongPressTouchEndListeners = {};
    this.multiTouchLongPressTouchCancelListeners = {};
    this.multiTouchLongPressPointerDownListeners = {};
    this.multiTouchLongPressPointerMoveListeners = {};
    this.multiTouchLongPressPointerUpListeners = {};
    this.multiTouchLongPressPointerCancelListeners = {};
    this.multiTouchLongPressCallbacks = new Map();
  }
  installTapGestureRecognizer(e, t) {
    let r;
    let n;
    this.tapCallback = t;
    let i = e => {
      n = Date.now();
      r = e;
    };
    let a = () => {
      n = void 0;
      r = void 0;
    };
    let s = e => {
      r && n && Date.now() - n < 500 && (this.tapCallback?.(r, e), a());
    };
    this.replaceEventListener(e, "touchstart", e => {
      1 === e.touches.length && i({
        x: e.touches[0].screenX,
        y: e.touches[0].screenY
      });
    }, this.singleTapTouchStartListeners, 1);
    this.replaceEventListener(e, "touchmove", e => {
      if (1 === e.touches.length && r) {
        let t = e.touches[0];
        this.didMoveTooMuch([{
          identifier: 0,
          screenX: t.screenX,
          screenY: t.screenY
        }], {
          0: {
            screenX: r.x,
            screenY: r.y
          }
        }, 10) && a();
      } else a();
    }, this.singleTapTouchMoveListeners, 1);
    this.replaceEventListener(e, "touchend", e => s(e), this.singleTapTouchEndListeners, 1);
    this.replaceEventListener(e, "mousedown", e => {
      i({
        x: e.screenX,
        y: e.screenY
      });
    }, this.singleTapMouseDownListeners, 1);
    this.replaceEventListener(e, "mouseup", e => s(e), this.singleTapMouseUpListeners, 1);
  }
  updateTapGestureRecognizer(e, t) {
    this.tapCallback ? this.tapCallback = t : this.installTapGestureRecognizer(e, t);
  }
  uninstallTapGestureRecognizer(e) {
    this.tapCallback && (this.tapCallback = null, e.removeEventListener("touchstart", this.singleTapTouchStartListeners[1], !0), e.removeEventListener("touchmove", this.singleTapTouchMoveListeners[1], !0), e.removeEventListener("touchend", this.singleTapTouchEndListeners[1], !0), e.removeEventListener("mousedown", this.singleTapMouseDownListeners[1], !0), e.removeEventListener("mouseup", this.singleTapMouseUpListeners[1], !0));
  }
  numTapsInRecencyThreshold(e, t) {
    let r = Date.now();
    let n = 0;
    for (let i = e.length - 1; i >= 0; i--) if (Math.abs(e[i] - r) < t) n++;else break;
    return n;
  }
  installMultiTapGestureRecognizer(e, t, r) {
    this.multiTapCallbacks[t.numTaps] = r;
    let n = [];
    let i = !1;
    let a = () => {
      let e = Date.now();
      if (n.push(e), i = this.numTapsInRecencyThreshold(n, 500) === t.numTaps) n = [];else for (; n.length > t.numTaps;) n.shift();
    };
    let s = () => {
      i && (this.multiTapCallbacks[t.numTaps]?.(), i = !1);
    };
    this.replaceEventListener(e, "touchstart", e => {
      1 === e.touches.length && a();
    }, this.multiTapTouchStartListeners, t.numTaps);
    this.replaceEventListener(e, "touchend", s, this.multiTapTouchEndListeners, t.numTaps);
    this.replaceEventListener(e, "mousedown", a, this.multiTapMouseDownListeners, t.numTaps);
    this.replaceEventListener(e, "mouseup", s, this.multiTapMouseUpListeners, t.numTaps);
  }
  updateMultiTapGestureRecognizer(e, t, r) {
    this.multiTapCallbacks[t.numTaps] ? this.multiTapCallbacks[t.numTaps] = r : this.installMultiTapGestureRecognizer(e, t, r);
  }
  installMultiTouchLongPressGestureRecognizer(e, t, r) {
    this.multiTouchLongPressCallbacks.set(r, t);
    let n = null;
    let a = null;
    let s = e => {
      if (null == a) {
        for (let t of (a = {}, e)) a[t.identifier] = {
          screenX: t.screenX,
          screenY: t.screenY
        };
        n = setTimeout(() => {
          let t;
          1 === e.length && (t = {
            x: e[0].screenX,
            y: e[0].screenY
          });
          this.multiTouchLongPressCallbacks.get(r)?.(t);
          fullscreenValue && fullscreenValue.cancelPendingGestures && fullscreenValue.cancelPendingGestures();
        }, 500);
      }
    };
    let o = () => {
      null != n && (clearTimeout(n), n = null, a = null);
    };
    let l = e => {
      e.length === r && a ? this.didMoveTooMuch(e, a, 10) && o() : o();
    };
    this.replaceEventListener(e, "touchstart", e => {
      e.touches.length === r ? s(e.touches) : o();
    }, this.multiTouchLongPressTouchStartListeners, r);
    this.replaceEventListener(e, "touchmove", e => l(e.touches), this.multiTouchLongPressTouchMoveListeners, r);
    this.replaceEventListener(e, "touchend", o, this.multiTouchLongPressTouchEndListeners, r);
    this.replaceEventListener(e, "touchcancel", o, this.multiTouchLongPressTouchCancelListeners, r);
    this.replaceEventListener(e, "pointerdown", e => {
      1 === r && "touch" !== e.pointerType ? s([{
        identifier: e.pointerId,
        screenX: e.screenX,
        screenY: e.screenY
      }]) : o();
    }, this.multiTouchLongPressPointerDownListeners, r);
    this.replaceEventListener(e, "pointermove", e => {
      "touch" !== e.pointerType && l([{
        identifier: e.pointerId,
        screenX: e.screenX,
        screenY: e.screenY
      }]);
    }, this.multiTouchLongPressPointerMoveListeners, r);
    this.replaceEventListener(e, "pointerup", o, this.multiTouchLongPressPointerUpListeners, r);
    this.replaceEventListener(e, "pointercancel", o, this.multiTouchLongPressPointerCancelListeners, r);
  }
  updateMultiTouchLongPressGestureRecognizer(e, t, r) {
    this.multiTouchLongPressCallbacks.has(r) ? this.multiTouchLongPressCallbacks.set(r, t) : this.installMultiTouchLongPressGestureRecognizer(e, t, r);
  }
  uninstallMultiTouchLongPressGestureRecognizer(e, t) {
    this.multiTouchLongPressCallbacks.has(t) && (this.multiTouchLongPressCallbacks.$$delete(t), e.removeEventListener("touchstart", this.multiTouchLongPressTouchStartListeners[t], !0), e.removeEventListener("touchmove", this.multiTouchLongPressTouchMoveListeners[t], !0), e.removeEventListener("touchend", this.multiTouchLongPressTouchEndListeners[t], !0), e.removeEventListener("touchcancel", this.multiTouchLongPressTouchCancelListeners[t], !0), e.removeEventListener("pointerdown", this.multiTouchLongPressPointerDownListeners[t], !0), e.removeEventListener("pointermove", this.multiTouchLongPressPointerMoveListeners[t], !0), e.removeEventListener("pointerup", this.multiTouchLongPressPointerUpListeners[t], !0), e.removeEventListener("pointercancel", this.multiTouchLongPressPointerCancelListeners[t], !0));
  }
  replaceEventListener(e, t, r, n, i) {
    n[i] && e.removeEventListener(t, n[i], !0);
    n[i] = r;
    e.addEventListener(t, n[i], !0);
  }
  didMoveTooMuch(e, t, r) {
    for (let n of e) {
      let e = t[n.identifier];
      if (void 0 === e || Math.hypot(e.screenX - n.screenX, e.screenY - n.screenY) > r) return !0;
    }
    return !1;
  }
}());
export const W = $$a0;