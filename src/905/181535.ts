import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, createContext, PureComponent, createRef } from "react";
import { JA } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import d from "../vendor/879378";
import { H } from "../figma_app/147959";
import { Ay } from "../figma_app/778880";
import { H as _$$H } from "react-dom";
import { R7 } from "../905/508367";
import { B } from "../905/877503";
import { Uz } from "../905/63728";
import { F } from "../905/302958";
import { ql } from "../905/668764";
import { Y5 } from "../figma_app/455680";
import { gl } from "../905/216495";
import { Lh, D8 } from "../figma_app/242339";
import { zk } from "../figma_app/198712";
import { En } from "../figma_app/613182";
import { _o, UV, mh, r9, kL, xn, dc, NJ } from "../figma_app/779179";
var l = o;
var c = d;
let _ = "devicePixelRatio" in window ? e => function (e, t) {
  return Math.floor(e * t + .5) / t;
}(e, window.devicePixelRatio) : e => Math.round(e);
class A {
  constructor(e, t, i = !1, n = {
    x: 0,
    y: 0
  }, r = {
    x: 0,
    y: 0
  }, a = !1, s = !1) {
    this.target = e;
    this.sourceEvent = t;
    this.canceled = i;
    this.distance = n;
    this.delta = r;
    this.isBigIncrement = a;
    this.isUnbounded = s;
  }
}
class y {
  constructor(e, t) {
    switch (this.trackedEl = e, this.ctx = t, this.distance = {
      x: 0,
      y: 0
    }, this.batchTimer = null, this.didChange = !1, this.ended = !1, this.onBatchTimeout = () => {
      this.batchTimer = null;
      this.end(null);
    }, this.multiplier = function (e) {
      let t = {
        x: 1,
        y: 1
      };
      e && ("number" == typeof e ? t.x = t.y = e : (void 0 !== e.x && (t.x = e.x), void 0 !== e.y && (t.y = e.y)));
      return t;
    }(t.wheelMultiplier), t.wheelSingleAxis || !1) {
      case "x":
        this.deltaMutator = e => {
          Math.abs(e.y) > Math.abs(e.x) && (e.x = e.y);
          e.x *= this.multiplier.x;
          e.y = 0;
        };
        break;
      case "y":
        this.deltaMutator = e => {
          Math.abs(e.x) > Math.abs(e.y) && (e.y = e.x);
          e.x = 0;
          e.y *= this.multiplier.y;
        };
    }
  }
  onWheelDelta(e, t, i) {
    this.deltaMutator(t);
    let n = this.ctx;
    let r = this.trackedEl;
    if (null === this.batchTimer) {
      if (n.onBegin) {
        let t = new A(e.target || r, e, !1, void 0, void 0, i, !0);
        if (!1 === n.onBegin(t)) return !1;
      }
      this.distance.x = t.x;
      this.distance.y = t.y;
      this.ended = !1;
    } else {
      clearTimeout(this.batchTimer);
      this.distance.x += t.x;
      this.distance.y += t.y;
    }
    this.batchTimer = setTimeout(this.onBatchTimeout, 200);
    this.didChange = !0;
    n.onChange(new A(r, e, !1, this.distance, t, i, !0));
    return !0;
  }
  end(e) {
    !this.ended && (this.ended = !0, null !== this.batchTimer && (clearTimeout(this.batchTimer), this.batchTimer = null), this.ctx.onEnd && this.didChange && this.ctx.onEnd(new A(this.trackedEl, e, !1, this.distance, void 0, !1, !0)));
  }
  deltaMutator(e) {
    e.x *= this.multiplier.x;
    e.y *= this.multiplier.y;
  }
}
let $$b = "ScrubManager--cursor--Y10GT";
function v(e) {
  return e?.cursorStyle !== void 0 ? e.cursorStyle : "all-scroll";
}
let I = {
  x: 24,
  y: 24
};
class E {
  constructor(e, t) {
    this.ctx = e;
    this.startPosition = t;
    this.activeCursorElement = null;
    this.activeCursorOffset = {
      x: 0,
      y: 0
    };
    this.activeCursorSize = {
      x: 0,
      y: 0
    };
    this.activeCustomCursorRender = null;
    this.activeCursorReactRoot = null;
  }
  create() {
    (this.ctx.renderCursor || null !== this.ctx.cursorStyle) && (this.activeCursorElement = document.createElement("div"), this.activeCursorElement.className = $$b, this.activeCursorElement.style.display = "none", this.activeCursorSize = this.ctx.cursorSize ? {
      x: _(this.ctx.cursorSize.x),
      y: _(this.ctx.cursorSize.y)
    } : I, this.activeCursorElement.style.width = this.activeCursorSize.x + "px", this.activeCursorElement.style.height = this.activeCursorSize.y + "px", this.activeCursorOffset.x = _(this.activeCursorSize.x / 2), this.activeCursorOffset.y = _(this.activeCursorSize.y / 2), this.activeCursorElement.className = this.ctx.renderCursor ? $$b : "ScrubManager--defaultCursor--7GEP1 ScrubManager--cursor--Y10GT", this.update({
      x: 0,
      y: 0
    }), document.body.appendChild(this.activeCursorElement), this.ctx.renderCursor && (this.activeCursorReactRoot = _$$H(this.activeCursorElement), this.activeCustomCursorRender = e => {
      let t = this.ctx.renderCursor({
        distance: e
      });
      this.activeCursorReactRoot.render(t);
    }, this.activeCustomCursorRender({
      x: 0,
      y: 0
    })), this.activeCursorElement.style.display = "");
  }
  update(e) {
    var t;
    var i;
    let n = this.startPosition.x + e.x - this.activeCursorOffset.x;
    let r = this.startPosition.y + e.y - this.activeCursorOffset.y;
    let a = this.activeCursorOffset.x;
    let s = this.activeCursorOffset.y;
    n = ((n + a) % (t = window.innerWidth) + t) % t - a;
    r = ((r + s) % (i = window.innerHeight) + i) % i - s;
    this.activeCursorElement.style.transform = `translate3d(${n}px, ${r}px, 0)`;
    this.activeCustomCursorRender?.(e);
  }
  remove() {
    this.activeCursorElement?.remove();
    this.activeCustomCursorRender = null;
    this.activeCursorReactRoot = null;
  }
}
function w({
  width: e,
  height: t,
  arrowWidth: i,
  ...a
}) {
  let s = ((e = e || 12) - i) / 2;
  let o = ((t = t || 13) - 11) / 2;
  let l = useMemo(() => "M " + (3.5 + s) + " " + (2.5 + o) + "L " + (3.5 + s) + " " + (0 + o) + "L " + (0 + s) + " " + (3.5 + o) + "L " + (3.5 + s) + " " + (7 + o) + "L " + (3.5 + s) + " " + (4.5 + o) + "L " + (i - 3.5 + s) + " " + (4.5 + o) + "L " + (i - 3.5 + s) + " " + (7 + o) + "L " + (i + s) + " " + (3.5 + o) + "L " + (i - 3.5 + s) + " " + (0 + o) + "L " + (i - 3.5 + s) + " " + (2.5 + o) + "Z", [i, s, o]);
  return jsx("svg", {
    width: e,
    height: t,
    ...a,
    children: jsxs("g", {
      transform: "translate(2 3)",
      children: [jsx("path", {
        className: "resizable_arrow--background---BLOg",
        strokeWidth: 2,
        fillRule: "evenodd",
        d: l
      }), jsx("path", {
        className: "resizable_arrow--foreground--edhhW",
        fillRule: "evenodd",
        d: l
      })]
    })
  });
}
let O = new class {
  constructor(e = {}) {
    this.options = e;
    this.trackedElements = new Map();
    this.styleOverrideElements = new Set();
    this.startPosition = {
      x: 0,
      y: 0
    };
    this.activeDistance = {
      x: 0,
      y: 0
    };
    this.activeElement = null;
    this.activeContext = null;
    this.activeBigIncrementMultiplier = 10;
    this.activeCapturedPointerId = null;
    this.pointerInTrackedElement = null;
    this.isTracking = !1;
    this.isTrackingMovement = !1;
    this.isAltKeyPressed = !1;
    this.isShiftKeyPressed = !1;
    this.wheelCaptureContext = null;
    this.customCursorContext = null;
    this.altKeyListeners = [];
    this.pointerDownTimeout = null;
    this.pointerEventerEvent = null;
    this._onPointerDown = e => {
      let t = e.target;
      let i = this.trackedElements.get(t);
      if (i) {
        this.onPointerDown(t, t, e, i);
        e.preventDefault();
        e.stopPropagation();
      } else if (function (e) {
        return !!(e.buttons && 4 & e.buttons);
      }(e)) {
        let [i, n] = this.findTrackedElement(t);
        i && (this.onPointerDown(t, i, e, n), e.preventDefault(), e.stopPropagation());
      }
    };
    this.onClick = e => {
      this.trackedElements.has(e.target) && (e.stopPropagation(), e.preventDefault());
    };
    this.onWheelForTracked = e => {
      let t = {
        x: -e.deltaX,
        y: e.deltaY
      };
      switch (e.deltaMode) {
        case WheelEvent.DOM_DELTA_LINE:
          t.x *= 10;
          t.y *= 10;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          t.x *= 100;
          t.y *= 100;
        case WheelEvent.DOM_DELTA_PIXEL:
      }
      e.shiftKey && (t.x *= this.activeBigIncrementMultiplier, t.y *= this.activeBigIncrementMultiplier);
      this.wheelCaptureContext.onWheelDelta(e, t, e.shiftKey) && (e.preventDefault(), e.stopPropagation());
    };
    this.onPointerEnterTracked = e => {
      this.pointerEventerEvent = e;
      let t = this.findTrackedElement(e.target)[0];
      this.pointerInTrackedElement = t;
      this.updateCaptureWheelEvents(e);
      this.isAltKeyPressed && t && this.enableStyleOverridesForTracked(t);
    };
    this.onPointerLeaveTracked = e => {
      this.pointerInTrackedElement = null;
      this.updateCaptureWheelEvents(e);
    };
    this.onKeyDown = e => {
      this.isAltKeyPressed !== e.altKey && (this.isAltKeyPressed = e.altKey, this.onAltKeyChange(e));
      this.isShiftKeyPressed !== e.shiftKey && (this.isShiftKeyPressed = e.shiftKey, this.onShiftKeyChange(e));
      e.keyCode === Uz.ESCAPE && this.activeContext && (e.preventDefault(), e.stopPropagation());
    };
    this.onKeyUp = e => {
      this.isAltKeyPressed !== e.altKey && (this.isAltKeyPressed = e.altKey, this.onAltKeyChange(e));
      this.isShiftKeyPressed !== e.shiftKey && (this.isShiftKeyPressed = e.shiftKey, this.onShiftKeyChange(e));
      e.keyCode === Uz.ESCAPE && this.activeContext && (this.stopTracking(e, !0), e.preventDefault(), e.stopPropagation());
    };
    this.onPointerMove = e => {
      let t;
      if (R7.pointerLock) t = {
        x: e.movementX,
        y: e.movementY
      };else {
        let i = {
          x: e.clientX - this.startPosition.x,
          y: e.clientY - this.startPosition.y
        };
        t = {
          x: i.x - this.activeDistance.x,
          y: i.y - this.activeDistance.y
        };
      }
      if (Math.abs(t.x) > 200 || Math.abs(t.y) > 200) return;
      this.activeDistance.x += t.x;
      this.activeDistance.y += t.y;
      let i = this.activeDistance;
      if (e.shiftKey) {
        let e = this.activeBigIncrementMultiplier;
        i = {
          x: i.x * e,
          y: i.y * e
        };
        t.x *= e;
        t.y *= e;
      }
      this.activeContext && (this.activeContext.onChange(new A(this.activeElement, e, !1, i, t, this.isShiftKeyPressed)), this.customCursorContext?.update(this.activeDistance));
    };
    this.onPointerUp = e => {
      this.cancelPointerDownTimeout();
      this.stopTracking(e, !1);
    };
    this.onPointerCancel = e => {
      this.cancelPointerDownTimeout();
      this.stopTracking(e, !0);
    };
    this.onPointerLockFailure = () => {
      this.customCursorContext?.remove();
      this.customCursorContext = null;
      this.startTracking();
    };
    this.onPointerLockChange = e => {
      this.activeContext && (document.pointerLockElement === this.activeElement ? this.startTracking() : this.stopTracking(e, !0));
    };
    this.onWindowBlur = e => {
      this.isAltKeyPressed = !1;
      this.onAltKeyChange(null);
      this.isShiftKeyPressed = !1;
      this.onShiftKeyChange(null);
      this.stopTracking(e, !1);
    };
  }
  addTracking(e, t) {
    this.trackedElements.set(e, t);
    this.isTracking || (this.isTracking = !0, this.enable());
    e.setAttribute("data-temporary-fpl-no-drag", "");
    e.addEventListener("pointerenter", this.onPointerEnterTracked);
    e.addEventListener("pointerleave", this.onPointerLeaveTracked);
    e.addEventListener("pointercancel", this.onPointerLeaveTracked);
    e.addEventListener("touchstart", this.cancelTouchIfNonInteractive);
  }
  removeTracking(e) {
    this.trackedElements.$$delete(e) && (e.removeAttribute("data-temporary-fpl-no-drag"), e.removeEventListener("pointerenter", this.onPointerEnterTracked), e.removeEventListener("pointerleave", this.onPointerLeaveTracked), e.removeEventListener("pointercancel", this.onPointerLeaveTracked), e.removeEventListener("touchstart", this.cancelTouchIfNonInteractive), e === this.pointerInTrackedElement && (this.disableStyleOverridesForTracked(this.pointerInTrackedElement), this.pointerInTrackedElement = null, this.updateCaptureWheelEvents(null)), e === this.activeElement && (this.activeElement = null), this.isTracking && 0 === this.trackedElements.size && (this.disable(), this.isTracking = !1), this.pointerEventerEvent && this.onPointerEnterTracked(this.pointerEventerEvent));
  }
  cancelTouchIfNonInteractive(e) {
    let t = e.target;
    for (; t !== e.currentTarget;) {
      if (B(t)) return;
      t = t.parentElement;
    }
    e.preventDefault();
  }
  enable() {
    window.addEventListener("blur", this.onWindowBlur);
    document.addEventListener("click", this.onClick);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    document.addEventListener("pointerdown", this._onPointerDown);
    document.addEventListener("pointerup", this.onPointerUp);
    document.addEventListener("pointercancel", this.onPointerCancel);
    R7.pointerLock && (document.addEventListener("pointerlockchange", this.onPointerLockChange), document.addEventListener("pointerlockerror", this.onPointerLockFailure));
  }
  disable() {
    window.removeEventListener("blur", this.onWindowBlur);
    document.removeEventListener("click", this.onClick);
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
    document.removeEventListener("pointerdown", this._onPointerDown);
    document.removeEventListener("pointerup", this.onPointerUp);
    document.removeEventListener("pointercancel", this.onPointerCancel);
    R7.pointerLock && (document.removeEventListener("pointerlockchange", this.onPointerLockChange), document.removeEventListener("pointerlockerror", this.onPointerLockFailure));
  }
  findTrackedElement(e) {
    let t = e;
    for (; t;) {
      let e = this.trackedElements.get(t);
      if (e) return [t, e];
      t = t.parentElement;
    }
    return [null, null];
  }
  updateCaptureWheelEvents(e) {
    if (this.wheelCaptureContext) {
      let t = this.wheelCaptureContext.trackedEl;
      this.isAltKeyPressed && t === this.pointerInTrackedElement || (t.removeEventListener("wheel", this.onWheelForTracked, !0), (0 !== this.activeDistance.x || 0 !== this.activeDistance.y) && this.wheelCaptureContext.end(e), this.wheelCaptureContext = null);
    }
    if (this.isAltKeyPressed) {
      let e = this.pointerInTrackedElement;
      if (e && !this.wheelCaptureContext) {
        let t = this.trackedElements.get(e);
        this.wheelCaptureContext = new y(e, t);
        e.addEventListener("wheel", this.onWheelForTracked, !0);
      }
    }
  }
  _setStyleOverridesForTracked(e, t) {
    let i = this.trackedElements.get(e);
    let n = t ? "none" : null;
    let r = t && i ? v(i) : null;
    e.style.cursor = r || "";
    for (function () {
      let t = 0;
      let i = e.children.length;
    }(); t < i; ++t) {
      let i = e.children[t].style;
      i.pointerEvents = n;
      i.cursor = r || "";
    }
  }
  enableStyleOverridesForTracked(e) {
    this.styleOverrideElements.has(e) || (this._setStyleOverridesForTracked(e, !0), this.styleOverrideElements.add(e));
  }
  disableStyleOverridesForTracked(e) {
    this.styleOverrideElements.$$delete(e) && this._setStyleOverridesForTracked(e, !1);
  }
  disableAllStyleOverrides() {
    this.styleOverrideElements.forEach(e => {
      this._setStyleOverridesForTracked(e, !1);
    });
    this.styleOverrideElements.clear();
  }
  registerAltKeyListener(e) {
    this.altKeyListeners.push(e);
  }
  unregeisterAltKeyListener(e) {
    let t = this.altKeyListeners.indexOf(e);
    -1 !== t && this.altKeyListeners.splice(t, 1);
  }
  onAltKeyChange(e) {
    let t = this.pointerInTrackedElement;
    t && (this.isAltKeyPressed && this.enableStyleOverridesForTracked(t), this.updateCaptureWheelEvents(e));
    this.isAltKeyPressed || this.disableAllStyleOverrides();
    this.altKeyListeners.forEach(e => e(this.isAltKeyPressed));
  }
  onShiftKeyChange(e) {
    if (this.activeContext && !this.wheelCaptureContext) {
      let t = this.activeDistance;
      if (this.isShiftKeyPressed) {
        let e = this.activeBigIncrementMultiplier;
        t = {
          x: t.x * e,
          y: t.y * e
        };
      }
      this.activeContext.onChange(new A(this.activeElement, e, !1, t, void 0, this.isShiftKeyPressed));
    }
  }
  startTracking() {
    if (this.isTrackingMovement) return;
    this.isTrackingMovement = !0;
    document.addEventListener("pointermove", this.onPointerMove);
    document.body.style.pointerEvents = "none";
    document.documentElement.style.userSelect = "none";
    let e = v(this.activeContext);
    e && (document.documentElement.style.cursor = e);
  }
  stopTracking(e, t) {
    R7.pointerLock && document.exitPointerLock();
    null !== this.activeCapturedPointerId && this.activeElement && this.activeElement.releasePointerCapture(this.activeCapturedPointerId);
    this.customCursorContext?.remove();
    this.customCursorContext = null;
    this.isTrackingMovement && (document.removeEventListener("pointermove", this.onPointerMove), document.body.style.pointerEvents = null, document.documentElement.style.userSelect = "", document.documentElement.style.cursor = "", this.isTrackingMovement = !1);
    this.activeContext && (this.activeContext.onEnd?.(new A(this.activeElement, e, t, this.activeDistance)), this.activeContext = null);
    this.activeElement = null;
  }
  onPointerDown(e, t, i, n) {
    if (this.startPosition.x = i.clientX, this.startPosition.y = i.clientY, !1 === n.onBegin?.(new A(e, i))) return;
    this.activeDistance.x = 0;
    this.activeDistance.y = 0;
    this.activeContext = n;
    this.activeElement = t;
    this.activeBigIncrementMultiplier = n.bigIncrementMultiplier || 10;
    this.activeCapturedPointerId = i.pointerId;
    try {
      this.activeElement.setPointerCapture(i.pointerId);
    } catch (e) {}
    let r = () => {
      this.cancelPointerDownTimeout();
      this.customCursorContext = new E(n, this.startPosition);
      this.customCursorContext.create();
      !this.options.disablePointerLock && R7.pointerLock ? this.activeElement.requestPointerLock()?.catch(() => {}) : this.onPointerLockFailure();
    };
    n.scrubStartDelay ? this.pointerDownTimeout = setTimeout(r, n.scrubStartDelay) : r();
  }
  cancelPointerDownTimeout() {
    this.pointerDownTimeout && (clearTimeout(this.pointerDownTimeout), this.pointerDownTimeout = null);
  }
}({
  disablePointerLock: Ay.safari
});
let D = {
  left: "-15.5px"
};
let $$L1 = createContext({
  setScrubbableElement: () => {}
});
export class $$F0 extends PureComponent {
  constructor(e) {
    super(e);
    this.labelRef = createRef();
    this.nonAltScrubElement = null;
    this.currentScrubElement = null;
    this.currentScrubScale = 0;
    this.currentArrowWidth = 0;
    this.isMixedScrub = !1;
    this.preScrubMixedMathValue = null;
    this.didJustScrub = !1;
    this.onToggleAlt = e => {
      this.labelRef.current && this.nonAltScrubElement && (e ? this.setScrubbableElement(this.labelRef.current) : (O.addTracking(this.labelRef.current, {
        ...this.scrubContext,
        onBegin: () => !1
      }), this.setScrubbableElement(this.nonAltScrubElement)));
    };
    this.setScrubbableElement = e => {
      e !== this.labelRef.current && (this.nonAltScrubElement = e);
      this.currentScrubElement !== e && (this.currentScrubElement && this.currentScrubElement !== this.labelRef.current && O.removeTracking(this.currentScrubElement), e && !this.props.scrubbingDisabled && O.addTracking(e, this.scrubContext), e && e !== this.labelRef.current ? (this.props.scrubbingDisabled || (e.style.cursor = "ew-resize", e.style.pointerEvents = "auto"), this.setState({
        isAlternateScrubbable: !0
      })) : this.setState({
        isAlternateScrubbable: !1
      }), this.currentScrubElement = e);
    };
    this.onScrubBegin = e => {
      if (this.props.scrubbingDisabled) return !1;
      if (null == this.props.value) this.preScrubValue = this.props.scrubStartValue ?? 0;else if (gl(this.props.value)) {
        if (!this.props.mixedMathHandler) return !1;
        this.isMixedScrub = !0;
        this.preScrubMixedMathValue = this.props.mixedMathHandler.getValue();
      } else this.preScrubValue = this.props.value;
      this.currentScrubScale = 0;
      Y5.commit();
      this.props.onScrubBegin?.(e);
      this.setState({
        inLiveScrub: !0
      });
    };
    this.onScrubChange = e => {
      if (!this.props.formatter.incrementBy) return;
      this.didJustScrub = !0;
      let t = t => {
        let i = (this.props.scrubMultiplier ?? 1) * (this.props.postScrubMultiplier ?? .5);
        let n = function (e) {
          if (e.isUnbounded) return 1;
          let t = j(M(e.distance.y));
          return t > 0 ? t : -(1 / t);
        }(e) * i;
        let r = e.distance.x * n;
        return ql(this.props.formatter, t, r, {
          snap: !0,
          snapResolution: this.props.resolution,
          coarse: e.isBigIncrement
        });
      };
      if (this.isMixedScrub && this.props.mixedMathHandler) {
        let e = this.preScrubMixedMathValue;
        null != e && this.props.mixedMathHandler.onChange(e, t, zk.NO);
      } else {
        let e = t(this.preScrubValue);
        this.props.onValueChange?.(e, zk.NO);
        this.currentValue !== e && this.throttledHaptics();
        this.currentValue = e;
      }
    };
    this.onScrubEnd = e => {
      if (this.didJustScrub || this.props.onScrubClick?.(), this.didJustScrub = !1, this.isMixedScrub = !1, Y5.commit(), this.currentValue) {
        let e = this.currentValue !== this.preScrubValue ? zk.YES_FORCE_TRACKING_AS_EDIT : zk.YES;
        this.props.onValueChange(this.currentValue, e);
        this.currentValue = void 0;
      }
      this.props.onScrubEnd?.(e);
      this.setState({
        inLiveScrub: !1
      });
    };
    this.renderScrubCursor = e => {
      let t = j(M(e.distance.y));
      if (this.currentScrubScale !== t) {
        let e = this.currentScrubScale;
        this.currentScrubScale = t;
        this.currentArrowWidth = Math.round(Math.max(10, (8 + t) / 16 * 40));
        0 !== e && this.props.dispatch(F.enqueue({
          message: `Scrubbing at ${t <= -8 ? "1/8" : t <= -4 ? "1/4" : t <= -2 ? "1/2" : t >= 8 ? "8x" : t >= 4 ? "4x" : t >= 2 ? "2x" : "1x"}`,
          type: "scrub-scale"
        }));
      }
      return jsx(w, {
        className: _o,
        width: 46,
        height: 15,
        style: D,
        arrowWidth: this.currentArrowWidth
      });
    };
    this.scrubContext = {
      cursorStyle: "ew-resize",
      wheelSingleAxis: "x",
      cursorSize: {
        x: 15,
        y: 15
      },
      onBegin: this.onScrubBegin,
      onChange: this.onScrubChange,
      onEnd: this.onScrubEnd,
      renderCursor: this.renderScrubCursor
    };
    this.state = {
      inLiveScrub: !1,
      isAlternateScrubbable: !1
    };
    this.updateScrubContext();
    this.throttledHaptics = c()(() => {
      getFeatureFlags().desktop_haptics_experimental && H.trigger(JA.LEVEL);
    }, 128, {
      leading: !0
    });
  }
  UNSAFE_componentWillUpdate() {
    this.updateScrubContext();
  }
  componentDidMount() {
    O.registerAltKeyListener(this.onToggleAlt);
    this.labelRef.current && this.setScrubbableElement(this.labelRef.current);
  }
  componentWillUnmount() {
    this.currentScrubElement && (this.labelRef.current && O.removeTracking(this.labelRef.current), this.nonAltScrubElement && O.removeTracking(this.nonAltScrubElement), O.removeTracking(this.currentScrubElement));
    O.unregeisterAltKeyListener(this.onToggleAlt);
  }
  updateScrubContext() {
    let e = this.props.bigNudgeAmount * (this.props.postBigNudgeAmount ?? .5);
    let t = null == this.props.wheelMultiplier ? void 0 : this.props.wheelMultiplier * (this.props.postWheelMultiplier ?? .2);
    let i = this.scrubContext;
    i.wheelMultiplier = t;
    i.bigIncrementMultiplier = e;
    i.scrubStartDelay = this.props.onScrubClick ? 250 : void 0;
  }
  render() {
    let e = {
      setScrubbableElement: this.setScrubbableElement
    };
    return jsx($$L1.Provider, {
      value: e,
      children: jsx("label", {
        ref: this.labelRef,
        "aria-label": En(this.props),
        className: l()(this.props.className, {
          [UV]: this.state.inLiveScrub && !this.props.noBorderOnScrub,
          [mh]: this.props.scrubbingDisabled,
          [r9]: this.props.disabled || this.props.softDisabled,
          [kL]: this.props.noBorderOnFocus,
          [xn]: !this.props.noBorderOnFocus,
          [dc]: this.props.noBorderOnHover,
          [NJ]: !!this.props.onScrubClick || this.state.isAlternateScrubbable
        }),
        "data-onboarding-key": Lh(D8.SCRUBBABLE_CONTROL, this.props["data-tooltip"]),
        "data-tooltip": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip"],
        "data-tooltip-max-width": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip-max-width"],
        "data-tooltip-proxy-element-id": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip-proxy-element-id"],
        "data-tooltip-show-above": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip-show-above"],
        "data-tooltip-show-on-target-only": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip-show-on-target-only"],
        "data-tooltip-type": this.props.tooltipForScreenReadersOnly ? null : this.props["data-tooltip-type"],
        onClick: this.props.scrubbingDisabled ? this.props.onScrubClick : void 0,
        onMouseDown: this.props.onMouseDown,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        style: this.props.labelWidth ? {
          width: this.props.labelWidth
        } : void 0,
        children: this.props.children
      })
    });
  }
}
function M(e) {
  let t = e / (window.screen ? window.screen.height : 768);
  return t < -1 ? -1 : t > 1 ? 1 : t;
}
function j(e) {
  return e < -.5 ? 8 : e < -.25 ? 4 : e < -.125 ? 2 : e > .5 ? -8 : e > .25 ? -4 : e > .125 ? -2 : 1;
}
$$F0.displayName = "ScrubbableControl";
export const b = $$F0;
export const s = $$L1;