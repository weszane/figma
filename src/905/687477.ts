import { b5, Fo, Uz, wQ } from '../905/63728';
import { eb, IL, No, pP, xC } from '../905/392533';
import { debugState } from '../905/407919';
import { browserCapabilities } from '../905/409121';
import { trackEventAnalytics } from '../905/449184';
import { decodeBase64, encodeBase64 } from '../905/561685';
import { getFeatureFlags } from '../905/601108';
import { logWarning } from '../905/714362';
import { F2 } from '../905/826900';
import { isEventProcessed } from '../905/955878';
import { atomStoreManager } from '../figma_app/27355';
import { FEditorType } from '../figma_app/53721';
import { s0 } from '../figma_app/115923';
import { hH, Q_, qG } from '../figma_app/119420';
import { H as _$$H } from '../figma_app/358450';
import { fullscreenValue } from '../figma_app/455680';
import { v7 } from '../figma_app/475303';
import { gk, tj } from '../figma_app/540726';
import { isDebugSelectedFigmakeFullscreen } from '../figma_app/552876';
import { gP } from '../figma_app/594947';
import { I2 } from '../figma_app/603466';
import { wo } from '../figma_app/753501';
import { KeyboardLayout, EventTypeEnum, InsertErrorType, Fullscreen, PointerType, PanelType, DesignGraphElements, HTMLWindow, PageNavigation, ClipboardAction } from '../figma_app/763686';
import { isMobileUA } from '../figma_app/778880';
import { ty } from '../figma_app/844818';
import { desktopAPIInstance } from '../figma_app/876459';
import { BI, nB } from '../figma_app/896988';
import { escapeHtml } from '../figma_app/930338';
import { Wh, Yx } from '../figma_app/985200';
let R = {
  ALT: 256,
  META: 512,
  SHIFT: 1024,
  CONTROL: 2048
};
var N = (e => (e[e.MOUSE = 0] = 'MOUSE', e[e.TOUCH = 1] = 'TOUCH', e[e.STYLUS = 2] = 'STYLUS', e[e.TRACKPAD = 3] = 'TRACKPAD', e))(N || {});
function P(e) {
  switch (e.pointerType) {
    case 'mouse':
      return 0;
    case 'touch':
      return 1;
    case 'pen':
      return 2;
  }
  console.error('Unknown pointer type', e.pointerType);
  return 0;
}
let O = function (e, t) {
  return {
    x: t.x - e.x,
    y: t.y - e.y,
    magnification: Math.log(t.distance / e.distance) / Math.log(Fullscreen.pinchToZoomExponent())
  };
};
class D {
  constructor() {
    this._touches = [];
    this._maxTouchCount = 0;
  }
  handleEvent(e) {
    if (e.type === 'pointercancel') {
      this.reset();
      return;
    }
    this._touches = this._touches.filter(t => {
      return e.pointerId !== t.pointerId;
    });
    (e.type === 'pointerdown' || e.type === 'pointermove') && this._touches.push(e);
    this._maxTouchCount = Math.max(this._maxTouchCount, this._touches.length);
  }
  reset() {
    this._touches = [];
    this._maxTouchCount = 0;
  }
  get() {
    return this._touches;
  }
  maxTouchCount() {
    return this._maxTouchCount;
  }
}
class L {
  constructor() {
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.oldCount = 0;
  }
  getClickCount(e, t) {
    let i = Date.now();
    let n = 1;
    this.oldTime && i - this.oldTime < 500 && Math.abs(e - this.oldX) < 10 && Math.abs(t - this.oldY) < 10 && (n = this.oldCount + 1);
    this.oldX = e;
    this.oldY = t;
    this.oldCount = n;
    this.oldTime = i;
    return n;
  }
}
function F(e, t, i, n, a) {
  function s(t) {
    let i = t.type === EventTypeEnum.MOUSE_RELEASE;
    let n = t.type === EventTypeEnum.MOUSE_PRESS;
    let a = n || i;
    e(t.type, t.x, t.y, t.button || (a ? 0 : -1), t.buttons || (n ? 1 : 0), t.clickCount || (a ? 1 : 0), t.modifierKeys || 0, t.deltaX || 0, t.deltaY || 0, t.gestureValue || 0, t.pointerType, t.pointerId || -1, t.timeStamp, -1);
  }
  let o = new D();
  return n ? function () {
    let e = new D();
    let t = [];
    let i = !1;
    return {
      next(r) {
        return (e.handleEvent(r), t.push(r), e.maxTouchCount() > 2) ? null : (i || e.get().length !== 0 || e.maxTouchCount() !== 1 || (i = !0), i) ? n() : this;
      },
      allow(e) {
        return e ? n() : null;
      }
    };
    function n() {
      let e = u();
      t.forEach(t => {
        e = e ? e.next(t) : null;
      });
      return e;
    }
  }() : u();
  function l(e) {
    let i = e.pageX;
    let n = e.pageY;
    for (let r = t; r; r = r.offsetParent) {
      i -= r.offsetLeft;
      n -= r.offsetTop;
    }
    return {
      x: i,
      y: n
    };
  }
  function d(e) {
    return (e.altKey ? R.ALT : 0) | (e.metaKey ? R.META : 0) | (e.shiftKey ? R.SHIFT : 0) | (e.ctrlKey ? R.CONTROL : 0);
  }
  function c(e) {
    let t = 0;
    let i = 0;
    let n = 0;
    let r = 0;
    for (let r = 0; r < e.length; r++) {
      let a = l(e[r]);
      t += a.x;
      i += a.y;
      n++;
    }
    t /= n;
    i /= n;
    for (let n = 0; n < e.length; n++) {
      let a = l(e[n]);
      r += (a.x - t) * (a.x - t) + (a.y - i) * (a.y - i);
    }
    return {
      x: t,
      y: i,
      distance: r = Math.sqrt(r / n),
      count: n
    };
  }
  function u() {
    let e;
    let t = [];
    return {
      next(i) {
        if (e || (e = i), o.handleEvent(i), o.maxTouchCount() > 2) return null;
        let n = o.get().length;
        if (n === 0) {
          return i.type === 'pointercancel' ? null : i.timeStamp - e.timeStamp > 500 ? (!function (e) {
            if (!a) return;
            let t = l(e);
            let i = d(e);
            let n = P(e);
            let o = e.timeStamp;
            s({
              type: EventTypeEnum.MOUSE_ENTER,
              x: t.x,
              y: t.y,
              modifierKeys: i,
              pointerType: n,
              timeStamp: o
            });
            s({
              type: EventTypeEnum.MOUSE_PRESS,
              x: t.x,
              y: t.y,
              button: 2,
              buttons: 2,
              modifierKeys: i,
              pointerType: n,
              timeStamp: o
            });
            s({
              type: EventTypeEnum.MOUSE_RELEASE,
              x: t.x,
              y: t.y,
              button: 2,
              buttons: 0,
              modifierKeys: i,
              pointerType: n,
              timeStamp: o
            });
            s({
              type: EventTypeEnum.MOUSE_LEAVE,
              x: t.x,
              y: t.y,
              modifierKeys: i,
              pointerType: n,
              timeStamp: o
            });
          }(e), null) : p(e, []).next(i);
        }
        if (n === 2) {
          return function (e) {
            let t = e;
            let i = !1;
            return {
              next(n) {
                if (o.handleEvent(n), o.get().length === 0) {
                  i && s({
                    type: EventTypeEnum.MOUSE_SCALE_END,
                    x: t.x,
                    y: t.y,
                    pointerType: P(n),
                    timeStamp: n.timeStamp
                  });
                  return null;
                }
                let a = c(o.get());
                if (a.count === e.count) {
                  let o = O(e, a);
                  if (!i) {
                    let {
                      magnification
                    } = O(t, a);
                    !isNaN(magnification) && Math.abs(magnification) > 0.2 && (i = !0, o.magnification = magnification);
                  }
                  if (o.x || o.y) {
                    let {
                      x,
                      y
                    } = o;
                    let i = window.devicePixelRatio || 1;
                    e /= i;
                    t /= i;
                    s({
                      type: EventTypeEnum.MOUSE_WHEEL,
                      x: a.x,
                      y: a.y,
                      deltaX: x,
                      deltaY: y,
                      pointerType: P(n),
                      timeStamp: n.timeStamp
                    });
                  }
                  i && a.count > 1 && !isNaN(o.magnification) && s({
                    type: EventTypeEnum.MOUSE_SCALE,
                    x: a.x,
                    y: a.y,
                    gestureValue: o.magnification,
                    pointerType: P(n),
                    timeStamp: n.timeStamp
                  });
                }
                e = a;
                return this;
              }
            };
          }(c(o.get()));
        }
        let u = o.get()[0];
        let m = u.pageX - e.pageX;
        let h = u.pageY - e.pageY;
        return m * m + h * h > 25 ? p(e, t).next(i) : (t.push(i), this);
      }
    };
  }
  function p(e, t) {
    let n = l(e);
    let a = i.getClickCount(n.x, n.y);
    let c = P(e);
    let u = e.timeStamp;
    function p(t) {
      for (let i = 0; i < o.get().length; i++) {
        let a = o.get()[i];
        a.pointerId === e.pointerId && (n = l(a), u = t.timeStamp, s({
          type: EventTypeEnum.MOUSE_MOVE,
          x: n.x,
          y: n.y,
          modifierKeys: d(t),
          pointerType: P(t),
          timeStamp: u
        }));
      }
    }
    s({
      type: EventTypeEnum.MOUSE_ENTER,
      x: n.x,
      y: n.y,
      modifierKeys: d(e),
      pointerType: c,
      timeStamp: u
    });
    s({
      type: EventTypeEnum.MOUSE_PRESS,
      x: n.x,
      y: n.y,
      clickCount: a,
      modifierKeys: d(e),
      pointerType: c,
      timeStamp: u
    });
    t.forEach(p);
    return {
      next(e) {
        return (o.handleEvent(e), o.get().length === 0) ? (s({
          type: EventTypeEnum.MOUSE_RELEASE,
          x: n.x,
          y: n.y,
          clickCount: a,
          modifierKeys: d(e),
          pointerType: P(e),
          timeStamp: e.timeStamp
        }), s({
          type: EventTypeEnum.MOUSE_LEAVE,
          x: n.x,
          y: n.y,
          modifierKeys: d(e),
          pointerType: P(e),
          timeStamp: e.timeStamp
        }), null) : (p(e), this);
      }
    };
  }
}
let U = new Set(['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'week']);
function B(e) {
  let t = e.keyCode;
  return t === Uz.ENTER || t === Uz.SPACE;
}
export function $$V1() {
  let e = !document.hidden;
  HTMLWindow?.setIsActive(e);
}
function G(e) {
  return t => {
    if (z()) return e(t);
  };
}
function z() {
  let e = document.getElementById('fullscreen-root');
  return e != null && e.style.visibility !== 'hidden';
}
function H(e) {
  return t => {
    if (z() || isDebugSelectedFigmakeFullscreen()) return e(t);
  };
}
class W {
  constructor(e, t) {
    this.pendingViewHandle = null;
    this.lastViewHandleWithFocus = null;
    this.currentViewHandleWithFocus = null;
    this.canvasViewHandle = null;
    this.touchState = null;
    this.pointerState = null;
    this.lastGestureScale = 0;
    this.lastCompositionInputEvent = null;
    this.isComposing = !1;
    this.previousComposition = null;
    this.simulatedPreviousComposition = null;
    this.lastCompositionEndValue = null;
    this.isHandlingDoubleInputForMicrosoftIMEFix = !1;
    this.isHandlingBackspaceKeyForIPadKoreanInputFix = !1;
    this.lastKeydown = null;
    this.lastKeydownEventAccepted = !1;
    this.lastKeydownEventForwarded = !1;
    this.lastAltKeyWasRight = !1;
    this.lastMousedownButtonsForContextmenu = null;
    this.isLastKeydownUnreleased = !1;
    this.middleButtonPressedLast = !1;
    this.rightButtonPressedLast = !1;
    this.fullscreenExpectsMouseReleaseEvent = !1;
    this.onResize = () => {
      this.cppAPI.updateSize(this.viewElement.clientWidth, this.viewElement.clientHeight);
    };
    this.hasReportedTouchStart = !1;
    this.markKeydownEventForwarded = () => {
      this.lastKeydownEventForwarded = !0;
    };
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.oldCount = 1;
    this.clipboardDataTransfer = null;
    this.cppAPI = t;
    this.viewElement = e;
    this.rootElement = document.createElement('div');
    this.rootElement.id = 'fullscreen-root';
    this.rootElement.appendChild(e);
    this.rootElement.style.visibility = 'hidden';
    document.body.appendChild(this.rootElement);
    document.addEventListener('focus', e => {
      let t = e.target instanceof HTMLElement ? e.target : null;
      t && function (e) {
        return e && (e.getAttribute('data-fullscreen-intercept') || e.getAttribute('data-fullscreen-intercept-dangerously-include-tab'));
      }(t) && t.classList.add('focus-target');
    }, !0);
    e.addEventListener('dragenter', G(wo));
    e.addEventListener('dragover', G(wo));
    window.addEventListener('focus', G(() => {
      this.lastViewHandleWithFocus !== null && (getFeatureFlags().a11y_design_dom_mirror && this.cppAPI.focusEvent(EventTypeEnum.APP_FOCUS_GAINED, this.lastViewHandleWithFocus), this.focusView(this.lastViewHandleWithFocus, !0));
    }));
    window.addEventListener('blur', G(() => {
      getFeatureFlags().a11y_design_dom_mirror && this.lastViewHandleWithFocus !== null && this.cppAPI.focusEvent(EventTypeEnum.APP_FOCUS_LOST, this.lastViewHandleWithFocus);
    }));
    e.addEventListener('contextmenu', G(e => {
      if (er(e.target)) {
        this.fullscreenExpectsMouseReleaseEvent = !1;
        this.mouseEvent(e, EventTypeEnum.MOUSE_RELEASE);
        return;
      }
      e.preventDefault();
    }));
    window.addEventListener('contextmenu', G(e => {
      let t = e.target;
      let i = this.lastMousedownButtonsForContextmenu == null || this.lastMousedownButtonsForContextmenu <= 0;
      let n = this.isElementOwnedByFullscreen(t) || t && t instanceof HTMLElement && t.dataset && t.getAttribute('data-fullscreen-intercept-dangerously-include-tab');
      if (!i || !n) return;
      let a = Z(e, this.viewElement);
      let s = this.viewHandleFromElement(e.target);
      let o = performance.now();
      this.cppAPI.contextMenuEvent(EventTypeEnum.MOUSE_PRESS, s, a.x, a.y, a.preciseX, a.preciseY, 2, 2, 1, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, 1, o);
      this.cppAPI.contextMenuEvent(EventTypeEnum.MOUSE_RELEASE, s, a.x, a.y, a.preciseX, a.preciseY, 2, 0, 1, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, 1, o);
      this.fullscreenExpectsMouseReleaseEvent = !1;
      this.lastMousedownButtonsForContextmenu = null;
      e.preventDefault();
    }));
    document.addEventListener('keydown', H(e => {
      if (this.isHandlingDoubleInputForMicrosoftIMEFix = !1, this.lastKeydownEventAccepted = !1, this.lastKeydownEventForwarded = !1, isDebugSelectedFigmakeFullscreen()) {
        if (er(e.target)) return;
        let t = browserCapabilities.isMac();
        let i = (t ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'z' && !e.shiftKey;
        let n = (t ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'z' && e.shiftKey;
        if (i || n) {
          e.preventDefault();
          fullscreenValue.triggerAction(i ? 'undo' : 'redo');
          this.lastKeydownEventAccepted = !0;
          return;
        }
      }
      if (!F2.shouldInterceptKeyboardEvent(e) && ((ee(e) || et(e)) && e.preventDefault(), !this.shouldIgnoreKeyboardEvent(e))) {
        try {
          let t = this.modifierKeys(e);
          e.which === 18 && (this.lastAltKeyWasRight = e.location === 2);
          er(e.target) || e.which !== 8 || e.preventDefault();
          let i = er(e.target) && e.which === 9 && (!t || t === IL);
          let n = this.viewHandleFromElement(e.target);
          let a = e.repeat;
          this.lastKeydown = e.key;
          this.lastKeydownEventForwarded = !0;
          this.isLastKeydownUnreleased = !0;
          this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, n, e.which, t, a, e.code, ed(), v7()) ? (this.lastKeydownEventAccepted = !0, e.which === 8 && browserCapabilities.isIpad() ? this.isHandlingBackspaceKeyForIPadKoreanInputFix = !0 : e.preventDefault()) : i && (this.cppAPI.focusViewInTabOrder(n, e.shiftKey ? PageNavigation.PREVIOUS : PageNavigation.NEXT), this.lastKeydownEventAccepted = !0, e.preventDefault());
        } catch (t) {
          e.preventDefault();
        }
      }
    }), !0);
    document.addEventListener('keyup', G(e => {
      if (e.which === 8 && browserCapabilities.isIpad() && (this.isHandlingBackspaceKeyForIPadKoreanInputFix = !1), F2.shouldInterceptKeyboardEvent(e) || ((ee(e) || et(e)) && e.preventDefault(), !this.isLastKeydownUnreleased && this.shouldIgnoreKeyboardEvent(e))) return;
      e.isComposing || (this.lastKeydown = null);
      let t = this.viewHandleFromElement(e.target);
      this.isLastKeydownUnreleased = !1;
      this.cppAPI.keyboardEvent(EventTypeEnum.KEY_RELEASE, t, e.which, this.modifierKeys(e), !1, e.code, ed(), v7()) && e.preventDefault();
    }), !0);
    document.addEventListener('keydown', G(e => {
      if (!(el(e) || this.lastKeydownEventForwarded || this.isElementOwnedByFullscreen(e.target) || e.code === 'Tab' || !(e.target instanceof HTMLElement) || !e.target.closest('[data-fpl-component],[data-fullscreen-bubble-phase]') || function (e) {
        if (isEventProcessed(e)) return !1;
        if (e.keyCode === Uz.TAB) return !0;
        let t = e.target;
        if (!(t instanceof HTMLElement)) return !1;
        if (b5(e.keyCode)) {
          let e = t.closest('[data-fpl-scroll-y]');
          if (e && e.getAttribute('data-fpl-scroll-y') !== 'none') return !0;
        }
        if (t.isContentEditable) return BI(e);
        let i = t.tagName;
        switch (i) {
          case 'INPUT':
          case 'TEXTAREA':
            {
              if (t.readOnly) return Fo(e) && e.keyCode === Uz.A;
              if (i === 'TEXTAREA' || i === 'INPUT' && U.has(t.type)) return BI(e);
              let n = t.type;
              if (n === 'checkbox' || n === 'submit') return B(e);
              if (n === 'radio') return B(e) || wQ(e.keyCode);
              return !0;
            }
          case 'BUTTON':
          case 'SUMMARY':
            return B(e);
          case 'SELECT':
            return !0;
          case 'A':
            return !!t.href && e.keyCode === Uz.ENTER;
          default:
            return !1;
        }
      }(e))) {
        let t = this.viewHandleFromElement(e.target);
        this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, t, e.which, this.modifierKeys(e), e.repeat, e.code, ed(), v7()) && (this.lastKeydownEventAccepted = !0, e.preventDefault());
      }
    }));
    window.PointerEvent || trackEventAnalytics('No PointerEvent available');
    let i = 0;
    let n = 0;
    let s = 0;
    let l = 0;
    if (document.addEventListener('wheel', G(e => {
      if ((e.ctrlKey || e.metaKey) && e.preventDefault(), this.shouldIgnoreMouseEvent(e)) return;
      let t = e.deltaX;
      let a = e.deltaY;
      let o = e.deltaMode !== 0;
      if (!browserCapabilities.isMac() && e.shiftKey) {
        let e = a;
        a = t;
        t = e;
      }
      let d = 0;
      let c = 0;
      if ('wheelDeltaY' in e && (d = e.wheelDeltaX, c = e.wheelDeltaY, !browserCapabilities.isMac() && e.shiftKey)) {
        let e = c;
        c = d;
        d = e;
      }
      t = -t;
      a = -a;
      let u = !e.ctrlKey;
      let p = !Number.isInteger(t) || !Number.isInteger(a);
      browserCapabilities.isIpad() ? u = !0 : browserCapabilities.isSafari() || browserCapabilities.isChrome() ? u = !p : browserCapabilities.isFirefox() && (u = !p && a % 16 != 0, t !== 0 && t !== 0 && (u = !0));
      let m = window.devicePixelRatio;
      if (browserCapabilities.isChromePre118() && (t /= m, a /= m, d /= m, c /= m), browserCapabilities.isIpad() && (t /= m, a /= m), browserCapabilities.isChromeOS()) {
        e.ctrlKey && c % 120 == 0 && (a *= 5);
      } else if (browserCapabilities.isWindows() && (fullscreenValue.pinchZoomFixDisabled() || !p) && (browserCapabilities.isChrome() ? (t = d, a = c) : browserCapabilities.isFirefox() && o && (t *= 40, a *= 40), Math.abs(t) >= 99 || Math.abs(a) >= 99)) {
        t /= 120;
        a /= 120;
        let r = e.timeStamp / 1e3;
        let o = Math.sign(t);
        let d = Math.sign(a);
        let c = 8;
        r - n < 0.05 && o === s && d === l && (c = 2.5 * i);
        t *= c;
        a *= c;
        let u = e.ctrlKey ? 40 : 120;
        let p = t * t + a * a;
        p > u * u && (t *= u / Math.sqrt(p), a *= u / Math.sqrt(p));
        i = c;
        n = r;
        s = o;
        l = d;
      }
      let h = Z(e, this.viewElement);
      this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_WHEEL, h.x, h.y, e.button, e.buttons, 0, this.modifierKeys(e), t, a, 0, u ? PointerType.TRACKPAD : PointerType.MOUSE, -1, e.timeStamp, -1) && e.preventDefault();
    }), {
      passive: !1
    }), browserCapabilities.isIpadNative() && this.setupIPadSideChannelEvents(), $$eu0.usingMultiTouchPointerEvents()) {
      this.setupMultiTouchPointerEvents();
    } else if (browserCapabilities.isIpad()) {
      this.setupLowLevelPointerEvents();
    } else {
      let t = window.PointerEvent && getFeatureFlags().ce_il_pressure_sensitivity && !isMobileUA;
      let i = new L();
      let n = () => {
        let e = window.FigmaMobile;
        return F(this.cppAPI.mouseEvent, this.viewElement, i, !!e?.shouldAllowNativeGestures, ty());
      };
      e.addEventListener(t ? 'pointerdown' : 'mousedown', G(e => {
        this.middleButtonPressedLast = ea(e);
        this.rightButtonPressedLast = es(e);
        (this.middleButtonPressedLast || this.rightButtonPressedLast) && Q(!0);
        this.cppAPI.setIsUsingTouchEvents(!1);
        this.shouldIgnoreMouseEvent(e) || (this.fullscreenExpectsMouseReleaseEvent = !0, this.lastMousedownButtonsForContextmenu = e.buttons, this.mouseEvent(e, EventTypeEnum.MOUSE_PRESS, n));
      }));
      let s = (e, t) => {
        let i = Z(e, this.viewElement);
        this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_RELEASE, i.x, i.y, i.preciseX, i.preciseY, t, e.buttons, 1, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1) && e.preventDefault();
      };
      document.addEventListener(t ? 'pointerenter' : 'mouseenter', G(e => {
        browserCapabilities.isChrome() && !ea(e) && this.middleButtonPressedLast && s(e, 1);
        browserCapabilities.isChrome() && !es(e) && this.rightButtonPressedLast && s(e, 2);
      }));
      document.addEventListener(t ? 'pointermove' : 'mousemove', G(e => {
        this.cppAPI.setIsUsingTouchEvents(!1);
        this.shouldIgnoreMouseEvent(e) || this.mouseEvent(e, EventTypeEnum.MOUSE_MOVE);
      }), !0);
      this.viewElement.addEventListener(t ? 'pointerleave' : 'mouseout', G(e => {
        this.mouseEvent(e, EventTypeEnum.MOUSE_LEAVE);
      }));
      document.addEventListener(t ? 'pointerup' : 'mouseup', G(e => {
        (this.middleButtonPressedLast || this.rightButtonPressedLast) && Q(!1);
        this.middleButtonPressedLast = ea(e);
        this.rightButtonPressedLast = es(e);
        this.cppAPI.setIsUsingTouchEvents(!1);
        this.shouldIgnoreMouseEvent(e) || (this.fullscreenExpectsMouseReleaseEvent = !1, this.lastMousedownButtonsForContextmenu === 2 && e.button === 2 && e.buttons === 0 || (this.lastMousedownButtonsForContextmenu = null), this.mouseEvent(e, EventTypeEnum.MOUSE_RELEASE));
      }), !0);
      this.setupGestureEvents();
      this.viewElement.addEventListener('touchstart', G(e => {
        this.cppAPI.setIsUsingTouchEvents(!0);
        e.preventDefault();
        this.touchState = (this.touchState || this.createInitialTouchState()).next(e);
        this.reportTouchStart();
      }), {
        passive: !1
      });
      document.addEventListener('touchmove', G(e => {
        this.cppAPI.setIsUsingTouchEvents(!0);
        this.touchState && (e.preventDefault(), this.touchState = this.touchState.next(e));
      }), {
        passive: !1
      });
      document.addEventListener('touchend', G(e => {
        this.cppAPI.setIsUsingTouchEvents(!0);
        this.touchState && (e.preventDefault(), this.touchState = this.touchState.next(e));
      }), {
        passive: !1
      });
      document.addEventListener('touchcancel', G(e => {
        this.touchState && (this.touchState = this.touchState.next(e));
      }));
      fullscreenValue.cancelPendingGestures = () => {
        this.touchState = null;
        this.pointerState = null;
      };
    }
    this.setupClipboardAndDropEvents();
    window.addEventListener('resize', this.onResize);
    $$V1();
    document.addEventListener('visibilitychange', $$V1);
  }
  destroy() {
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', $$V1);
  }
  updateSizeAndPixelRatio() {
    this.cppAPI.updateSize(this.viewElement.clientWidth, this.viewElement.clientHeight);
    this.cppAPI.updateDevicePixelRatio(window.devicePixelRatio || 1);
  }
  setupIPadSideChannelEvents() {
    let e = {
      BEGAN: 0,
      MOVED: 1,
      ENDED: 2,
      CANCELLED: 3,
      MOVED_COALESCED: 4
    };
    let t = this.viewElement;
    fullscreenValue.takePencilSample = (i, n, a, s) => {
      if (!X()) return;
      let o = e => {
        for (let i = t; i !== null; i = i.offsetParent instanceof HTMLElement ? i.offsetParent : null) {
          n -= i.offsetLeft;
          a -= i.offsetTop;
        }
        let o = Math.round(n);
        let l = Math.round(a);
        let d = e === EventTypeEnum.MOUSE_PRESS;
        let c = e === EventTypeEnum.MOUSE_RELEASE;
        let u = d || c;
        let p = performance.now();
        this.cppAPI.preciseMouseEvent(e, o, l, n, a, u ? 0 : -1, d ? 1 : 0, u ? 1 : 0, s, 0, 0, 0, PointerType.STYLUS, -1, p, -1);
      };
      switch (i) {
        case e.BEGAN:
          this.cppAPI.setIsUsingTouchEvents(!1);
          o(EventTypeEnum.MOUSE_PRESS);
          break;
        case e.MOVED:
          this.cppAPI.setIsUsingTouchEvents(!1);
          o(EventTypeEnum.MOUSE_MOVE);
          break;
        case e.MOVED_COALESCED:
          this.cppAPI.setIsUsingTouchEvents(!1);
          o(EventTypeEnum.MOUSE_MOVE_COALESCED);
          break;
        case e.ENDED:
        case e.CANCELLED:
          this.cppAPI.setIsUsingTouchEvents(!1);
          o(EventTypeEnum.MOUSE_RELEASE);
      }
    };
    let i = {
      BEGAN: 0,
      MOVED: 1,
      ENDED: 2,
      CANCELLED: 3
    };
    fullscreenValue.takeIndirectPinchGesture = (e, t, n, a, s) => {
      let o = performance.now();
      let l = () => {
        let e = t - this.lastGestureScale;
        this.lastGestureScale = t;
        this.cppAPI.setIsUsingTouchEvents(!1);
        this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_SCALE, n, a, n, a, -1, 0, 0, s, 0, 0, e, PointerType.TRACKPAD, 1, o, -1);
      };
      switch (e) {
        case i.BEGAN:
          this.lastGestureScale = 1;
          l();
          break;
        case i.MOVED:
          l();
          break;
        case i.ENDED:
        case i.CANCELLED:
          this.cppAPI.setIsUsingTouchEvents(!1);
          this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_SCALE_END, n, a, n, a, -1, 0, 0, s, 0, 0, 0, PointerType.TRACKPAD, 1, o, -1);
      }
    };
  }
  setupLowLevelPointerEvents() {
    let e = e => {
      this.cppAPI.setIsUsingTouchEvents(!1);
      this.shouldIgnoreMouseEvent(e) || (this.fullscreenExpectsMouseReleaseEvent = !0, this.mouseEvent(e, EventTypeEnum.MOUSE_PRESS));
    };
    let t = e => {
      this.cppAPI.setIsUsingTouchEvents(!1);
      this.shouldIgnoreMouseEvent(e) || this.mouseEvent(e, EventTypeEnum.MOUSE_MOVE);
    };
    let i = e => {
      this.mouseEvent(e, EventTypeEnum.MOUSE_LEAVE);
    };
    let n = e => {
      this.cppAPI.setIsUsingTouchEvents(!1);
      this.shouldIgnoreMouseEvent(e) || (this.fullscreenExpectsMouseReleaseEvent = !1, this.mouseEvent(e, EventTypeEnum.MOUSE_RELEASE));
    };
    function a(e, t) {
      return function (i) {
        i.pointerType === 'mouse' ? e && e(i) : i.pointerType === 'pen' ? !X() && e && e(i) : t && t(i);
      };
    }
    window.PointerEvent ? (this.viewElement.addEventListener('pointerdown', G(a(e, e => {
      this.cppAPI.setIsUsingTouchEvents(!0);
      e.preventDefault();
      this.pointerState = (this.pointerState || o()).next(e);
      this.reportTouchStart();
    })), {
      passive: !1
    }), document.addEventListener('pointermove', G(a(t, e => {
      if (this.cppAPI.setIsUsingTouchEvents(!0), this.pointerState) {
        e.preventDefault();
        this.pointerState = this.pointerState.next(e);
      } else {
        if (this.shouldIgnoreEvent(e)) return;
        e.preventDefault();
        this.mouseEvent(e, EventTypeEnum.MOUSE_MOVE);
      }
    })), {
      passive: !1,
      capture: !0
    }), this.viewElement.addEventListener('pointerout', G(a(i, null)), {
      passive: !1
    }), document.addEventListener('pointerup', G(a(n, e => {
      this.cppAPI.setIsUsingTouchEvents(!0);
      this.pointerState && (e.preventDefault(), this.pointerState = this.pointerState.next(e));
    })), {
      passive: !1,
      capture: !0
    }), document.addEventListener('pointercancel', G(e => {
      this.pointerState && (this.pointerState = this.pointerState.next(e));
    })), browserCapabilities.isIpad() && (this.viewElement.addEventListener('touchmove', wo), this.viewElement.addEventListener('touchstart', wo, {
      passive: !1
    }))) : (this.viewElement.addEventListener('mousedown', G(e), {
      passive: !1
    }), document.addEventListener('mousemove', G(t), {
      passive: !1,
      capture: !0
    }), this.viewElement.addEventListener('mouseout', G(i), {
      passive: !1
    }), document.addEventListener('mouseup', G(n), {
      passive: !1,
      capture: !0
    }));
    browserCapabilities.isIpad() || this.setupGestureEvents();
    fullscreenValue.allowWebGestures = e => {
      this.pointerState && this.pointerState.allow && (this.pointerState = this.pointerState.allow(e));
    };
    fullscreenValue.cancelPendingGestures = () => {
      this.pointerState = null;
      this.touchState = null;
    };
    let s = new L();
    let o = () => {
      let e = window.FigmaMobile;
      return F(this.cppAPI.mouseEvent, this.viewElement, s, !!e?.shouldAllowNativeGestures, ty());
    };
  }
  setupMultiTouchPointerEvents() {
    let e = new Set();
    let t = (t, i, n) => {
      let a = t.pointerId;
      if (i === EventTypeEnum.MOUSE_PRESS && (this.shouldIgnoreEvent(t) || n === PointerType.STYLUS && X())) {
        e.add(a);
        return;
      }
      if (e.has(a)) {
        (i === EventTypeEnum.MOUSE_RELEASE || i === EventTypeEnum.MOUSE_CANCEL) && e.$$delete(a);
        return;
      }
      i === EventTypeEnum.MOUSE_PRESS ? this.viewElement.setPointerCapture(a) : (i === EventTypeEnum.MOUSE_RELEASE || i === EventTypeEnum.MOUSE_CANCEL) && this.viewElement.releasePointerCapture(a);
      (i === EventTypeEnum.MOUSE_PRESS || i === EventTypeEnum.MOUSE_MOVE || i === EventTypeEnum.MOUSE_RELEASE || i === EventTypeEnum.MOUSE_CANCEL) && this.cppAPI.setIsUsingTouchEvents(n === PointerType.TOUCH);
      let s = i === EventTypeEnum.MOUSE_PRESS || i === EventTypeEnum.MOUSE_RELEASE ? 1 : 0;
      let o = Z(t, this.viewElement);
      this.cppAPI.preciseMouseEvent(i, o.x, o.y, o.preciseX, o.preciseY, t.button, t.buttons, s, this.modifierKeys(t), 0, 0, 0, n, a, t.timeStamp, -1) && t.preventDefault();
    };
    let i = e => i => {
      let n = PointerType.MOUSE;
      i.pointerType === 'touch' ? n = PointerType.TOUCH : i.pointerType === 'pen' && (n = PointerType.STYLUS);
      t(i, e, n);
      n === PointerType.TOUCH && e === EventTypeEnum.MOUSE_PRESS && this.reportTouchStart();
    };
    this.viewElement.addEventListener('pointerdown', G(i(EventTypeEnum.MOUSE_PRESS)), {
      passive: !1
    });
    this.viewElement.addEventListener('pointermove', G(i(EventTypeEnum.MOUSE_MOVE)), {
      passive: !1
    });
    this.viewElement.addEventListener('pointerout', G(i(EventTypeEnum.MOUSE_LEAVE)), {
      passive: !1
    });
    this.viewElement.addEventListener('pointerup', G(i(EventTypeEnum.MOUSE_RELEASE)), {
      passive: !1
    });
    document.addEventListener('pointercancel', G(i(EventTypeEnum.MOUSE_CANCEL)), {
      passive: !1
    });
    this.viewElement.addEventListener('touchstart', e => {
      e.cancelable && e.preventDefault();
    }, {
      passive: !1
    });
    this.viewElement.addEventListener('touchmove', e => {
      e.cancelable && e.preventDefault();
    }, {
      passive: !1
    });
    this.viewElement.addEventListener('touchend', e => {
      e.cancelable && e.preventDefault();
    }, {
      passive: !1
    });
    this.viewElement.addEventListener('touchcancel', e => {
      e.cancelable && e.preventDefault();
    }, {
      passive: !1
    });
  }
  setupGestureEvents() {
    browserCapabilities.isSafari() && (document.addEventListener('gesturestart', G(e => {
      e.preventDefault();
      this.lastGestureScale = 1;
    })), document.addEventListener('gesturechange', G(e => {
      if (e.preventDefault(), !('scale' in e) || void 0 === e.scale || isNaN(e.scale) || this.touchState || this.pointerState) return;
      let t = e.scale - this.lastGestureScale;
      this.lastGestureScale = e.scale;
      let i = Z(e, this.viewElement);
      this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_SCALE, i.x, i.y, -1, 0, 0, this.modifierKeys(e), 0, 0, t, PointerType.MOUSE, -1, e.timeStamp, -1);
    })));
  }
  createInitialTouchState() {
    let e;
    let t = Date.now();
    let i = [];
    let n = this;
    return {
      next(r) {
        if (r.touches.length === 0) return r.type === 'touchcancel' ? null : Date.now() - t > 500 ? (n.simulateRightClick(e ?? r), null) : e ? n.createMouseDragTouchState(e, i).next(r) : null;
        if (r.touches.length > 1) return n.createPanZoomTouchState(n.summarizeTouches(r.touches));
        e || (e = r);
        let a = r.touches[0];
        let s = a.pageX - e.touches[0].pageX;
        let o = a.pageY - e.touches[0].pageY;
        return s * s + o * o > 25 ? n.createMouseDragTouchState(e, i).next(r) : (i.push(r), this);
      }
    };
  }
  simulateRightClick(e) {
    let t = Z(e.touches[0], this.viewElement);
    let i = this.modifierKeys(e);
    let n = e.timeStamp;
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_ENTER, t.x, t.y, -1, 0, 0, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_PRESS, t.x, t.y, 2, 2, 1, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_RELEASE, t.x, t.y, 2, 0, 1, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_LEAVE, t.x, t.y, -1, 0, 0, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
  }
  summarizeTouches(e) {
    let t = 0;
    let i = 0;
    let n = 0;
    let r = 0;
    for (let r = 0; r < e.length; r++) {
      let a = Z(e[r], this.viewElement);
      t += a.x;
      i += a.y;
      n++;
    }
    t /= n;
    i /= n;
    for (let n = 0; n < e.length; n++) {
      let a = Z(e[n], this.viewElement);
      r += (a.x - t) * (a.x - t) + (a.y - i) * (a.y - i);
    }
    return {
      x: t,
      y: i,
      distance: r = Math.sqrt(r / n),
      count: n
    };
  }
  createMouseDragTouchState(e, t) {
    let i = this.viewElement;
    let n = this.modifierKeys.bind(this);
    let a = Z(e.touches[0], i);
    let s = t => {
      for (let s = 0; s < t.touches.length; s++) {
        let o = t.touches[s];
        o.identifier === e.touches[0].identifier && (a = Z(o, i), this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_MOVE, a.x, a.y, -1, 0, 0, n(t), 0, 0, 0, PointerType.MOUSE, -1, t.timeStamp, -1));
      }
    };
    let o = this.simulatedClickCount(!0, a.x, a.y, 10);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_ENTER, a.x, a.y, -1, 0, 0, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_PRESS, a.x, a.y, 0, 1, o, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1);
    t.forEach(s);
    let l = this.cppAPI;
    return {
      next(e) {
        return e.touches.length === 0 ? (l.mouseEvent(EventTypeEnum.MOUSE_RELEASE, a.x, a.y, 0, 0, o, n(e), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1), l.mouseEvent(EventTypeEnum.MOUSE_LEAVE, a.x, a.y, -1, 0, 0, n(e), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1), null) : (s(e), this);
      }
    };
  }
  createPanZoomTouchState(e) {
    let t = this.summarizeTouches.bind(this);
    let i = this.cppAPI;
    return {
      next(n) {
        if (n.touches.length === 0) return null;
        let a = t(n.touches);
        if (a.count === e.count) {
          let t = a.distance / e.distance;
          let s = Fullscreen ? Math.log(t) / Math.log(Fullscreen.pinchToZoomExponent()) : NaN;
          let o = a.x - e.x;
          let l = a.y - e.y;
          let d = window.devicePixelRatio || 1;
          o /= d;
          l /= d;
          (o || l) && i.mouseEvent(EventTypeEnum.MOUSE_WHEEL, a.x, a.y, -1, 0, 0, 0, o, l, 0, PointerType.TOUCH, -1, n.timeStamp, -1);
          a.count > 1 && !isNaN(s) && i.mouseEvent(EventTypeEnum.MOUSE_SCALE, a.x, a.y, -1, 0, 0, 0, 0, 0, s, PointerType.TOUCH, -1, n.timeStamp, -1);
        }
        e = a;
        return this;
      }
    };
  }
  reportTouchStart() {
    this.hasReportedTouchStart || (this.hasReportedTouchStart = !0, trackEventAnalytics('Editor Canvas Touch'));
  }
  focusView(e, t) {
    this.lastViewHandleWithFocus = e;
    let i = document.activeElement;
    let n = e && i === document.body;
    if (this.currentViewHandleWithFocus === e && !n) return;
    let a = i instanceof HTMLElement && (i.tagName === 'INPUT' || i.tagName === 'TEXTAREA' || i.getAttribute('contenteditable') === 'true' || i.classList.contains('focus-target') && i.dataset && i.getAttribute('data-fullscreen-intercept-dangerously-include-tab'));
    if (t && document.hasFocus() && a) return;
    let s = this.currentViewHandleWithFocus;
    this.currentViewHandleWithFocus = null;
    this.cppAPI.focusEvent(EventTypeEnum.FOCUS_LOST, s);
    let o = $$eu0.maybeTemporarilyDisableFocusEvents();
    this.customFocusElementFor(e)?.focus({
      preventScroll: !0
    });
    $$eu0.focusEventBeingCalled = o;
    this.isComposing = !1;
    this.previousComposition = null;
    this.simulatedPreviousComposition = null;
    this.currentViewHandleWithFocus = e;
    this.cppAPI.focusEvent(EventTypeEnum.FOCUS_GAINED, e);
  }
  customFocusElementFor(e) {
    if ($$eu0.customFocusElementReadWrite === null) {
      let e;
      for (let t of (getFeatureFlags().ce_tv_contenteditable_focus_element ? (e = document.createElement('div')).contentEditable = 'plaintext-only' : e = document.createElement('textarea'), $$eu0.customFocusElementReadWrite = e, browserCapabilities.isChrome() && (e instanceof HTMLTextAreaElement ? e.value = en() : e.textContent = en()), e.tabIndex = -1, e instanceof HTMLTextAreaElement && (e.wrap = 'off'), e.ariaHidden = 'true', e.setAttribute('spellcheck', 'false'), e.setAttribute('autocorrect', 'off'), $$eu0.customFocusElementReadOnly = document.createElement('input'), $$eu0.customFocusElementReadOnly.readOnly = !0, $$eu0.customFocusElementReadOnly.tabIndex = -1, $$eu0.customFocusElementReadOnly.ariaHidden = 'true', $$eu0.customFocusElementReadOnly.role = 'application', $$eu0.customFocusElementReadOnly.style.top = '-200px', F2.setCustomFocusElement({
        addFocusChangedCallback(e) {
          $$eu0.customFocusElementReadWrite && ($$eu0.customFocusElementReadWrite.addEventListener('focus', () => {
            e(!0);
          }), $$eu0.customFocusElementReadWrite.addEventListener('blur', () => {
            e(!1);
          }));
          $$eu0.customFocusElementReadOnly && ($$eu0.customFocusElementReadOnly.addEventListener('focus', () => {
            e(!0);
          }), $$eu0.customFocusElementReadOnly.addEventListener('blur', () => {
            e(!1);
          }));
        },
        isFocusElement: e => $$eu0.customFocusElementReadWrite === e || $$eu0.customFocusElementReadOnly === e,
        focus: () => $$eu0.isExpectingTextInput() ? ($$eu0.customFocusElementReadWrite?.focus(), $$eu0.customFocusElementReadWrite) : ($$eu0.customFocusElementReadOnly?.focus(), $$eu0.customFocusElementReadOnly)
      }), $$eu0.customFocusElementReadWrite.addEventListener('focus', () => {
        $$eu0.customFocusElementReadWrite && ($$eu0.customFocusElementReadWrite.ariaHidden = 'false');
      }), $$eu0.customFocusElementReadWrite.addEventListener('blur', () => {
        $$eu0.customFocusElementReadWrite && ($$eu0.customFocusElementReadWrite.ariaHidden = 'true', $$eu0.customFocusElementReadWrite instanceof HTMLTextAreaElement ? $$eu0.customFocusElementReadWrite.value = browserCapabilities.isChrome() ? en() : '' : $$eu0.customFocusElementReadWrite.textContent = browserCapabilities.isChrome() ? en() : '');
      }), [$$eu0.customFocusElementReadWrite, $$eu0.customFocusElementReadOnly])) {
        t.addEventListener('keydown', G(e => {
          try {
            let t = this.shouldIgnoreKeyboardEvent(e);
            e.metaKey || e.ctrlKey || this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus) || t || e.preventDefault();
            (!1 !== e.ctrlKey || !1 !== e.metaKey) && (e.which === 88 || e.which === 67 ? $$eu0.setExpectingCopyCutEvent(!0) : e.which === 86 && $$eu0.setExpectingPasteEvent(!0));
          } catch (t) {
            e.preventDefault();
          }
        }));
        t.addEventListener('keyup', G(() => {
          $$eu0.setExpectingCopyCutEvent(!1);
          $$eu0.setExpectingPasteEvent(!1);
        }));
        t.addEventListener('focus', G(() => {
          let e = this.pendingViewHandle;
          e && (this.lastViewHandleWithFocus = e, this.currentViewHandleWithFocus = e, $$eu0.customFocusElementReadWrite && ($$eu0.customFocusElementReadWrite._pointer = e), $$eu0.customFocusElementReadOnly && ($$eu0.customFocusElementReadOnly._pointer = e), $$eu0.focusEventBeingCalled || this.cppAPI.focusEvent(EventTypeEnum.FOCUS_GAINED, e));
        }));
        t.addEventListener('blur', G(e => {
          let t = this.currentViewHandleWithFocus;
          if (!t) return;
          this.currentViewHandleWithFocus = null;
          $$eu0.customFocusElementReadWrite && ($$eu0.customFocusElementReadWrite._pointer = null);
          $$eu0.customFocusElementReadOnly && ($$eu0.customFocusElementReadOnly._pointer = null);
          let i = !!e.relatedTarget && e.relatedTarget instanceof HTMLElement && e.relatedTarget.getAttribute('data-fullscreen-intercept-dangerously-include-tab');
          $$eu0.focusEventBeingCalled || i || this.cppAPI.focusEvent(EventTypeEnum.FOCUS_LOST, t);
        }));
        let e = () => {
          this.previousComposition = '';
        };
        t.addEventListener('compositionstart', G(() => {
          this.lastCompositionInputEvent = 'compositionstart';
          this.isComposing = !0;
          this.isHandlingDoubleInputForMicrosoftIMEFix = !1;
          e();
        }));
        t.addEventListener('compositionupdate', G(() => {
          this.isHandlingDoubleInputForMicrosoftIMEFix = !1;
          this.lastCompositionInputEvent = 'compositionupdate';
        }));
        t.addEventListener('compositionend', G(() => {
          let t = this.lastCompositionInputEvent;
          this.lastCompositionInputEvent = 'compositionend';
          this.isComposing = !1;
          this.lastCompositionEndValue = this.previousComposition;
          this.isHandlingDoubleInputForMicrosoftIMEFix = browserCapabilities.isWindows() && !0 === getFeatureFlags().ce_microsoft_ime_fix;
          t === 'input' && e();
        }));
        t.addEventListener('beforeinput', G(e => {
          if (this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus) && (browserCapabilities.isMac() || browserCapabilities.isIpad() || browserCapabilities.isMeetDevice() || browserCapabilities.isiOS() || browserCapabilities.isWindows())) {
            let i;
            let n;
            let a = e.data;
            if (!a) {
              e.inputType === 'deleteContentBackward' && !this.isComposing && (browserCapabilities.isIpad() || browserCapabilities.isMeetDevice()) && !this.isHandlingBackspaceKeyForIPadKoreanInputFix && (t instanceof HTMLTextAreaElement ? this.simulatedPreviousComposition = t.value.slice(-1) : this.simulatedPreviousComposition = t.textContent?.slice(-1) ?? '');
              return;
            }
            if (this.isHandlingDoubleInputForMicrosoftIMEFix && (e.data === null && e.inputType === 'deleteContentBackward' || e.inputType === 'insertText')) {
              e.preventDefault();
              return;
            }
            let s = typeof a == 'string' ? a.charCodeAt(0) : 0;
            let o = this.lastKeydown != null ? this.lastKeydown.charCodeAt(0) : 49;
            let l = this.isComposing ? e.inputType === 'insertCompositionText' && !this.previousComposition : o >= 49 && o <= 57;
            if (t instanceof HTMLTextAreaElement) {
              let e = t.selectionStart ?? 0;
              let r = t.selectionEnd ?? 0;
              i = e < r;
              n = t.value.slice(e, r);
            } else {
              let e = document.getSelection();
              i = !!(e && e.type === 'Range' && (e.anchorNode === t || e.anchorNode === t.firstChild) && (e.focusNode === t || e.focusNode === t.firstChild) && e.anchorOffset <= e.focusOffset);
              n = e?.toString() ?? '';
            }
            if (this.lastKeydown !== a && a.length === 1 && l && s >= 192 && s <= 669) {
              let t = this.viewHandleFromElement(e.target);
              this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, t, 8, 0, !1, 'Backspace', ed(), v7());
            } else {
              browserCapabilities.isIpad() || browserCapabilities.isiOS() ? i && !this.isComposing && (this.simulatedPreviousComposition = n) : e.inputType === 'insertReplacementText' && browserCapabilities.isSafari() && browserCapabilities.isMac() && !browserCapabilities.isIpad() && !browserCapabilities.isIpadNative() && !browserCapabilities.isiOS() && i && !this.isComposing && (this.simulatedPreviousComposition = n);
            }
          }
        }));
        t.addEventListener('input', G(i => {
          if (i.data === null && i.inputType === 'deleteContentBackward' && browserCapabilities.isIpad() && this.isHandlingBackspaceKeyForIPadKoreanInputFix) {
            this.isHandlingBackspaceKeyForIPadKoreanInputFix = !1;
            return;
          }
          if (this.isHandlingDoubleInputForMicrosoftIMEFix) {
            if (i.data === null && i.inputType === 'deleteContentBackward') {
              i.preventDefault();
              return;
            }
            if (i.inputType === 'insertText') {
              this.isHandlingDoubleInputForMicrosoftIMEFix = !1;
              i.preventDefault();
              return;
            }
          }
          let n = this.lastCompositionInputEvent;
          this.lastCompositionInputEvent = 'input';
          let r = this.lastKeydown === 'Dead' || this.lastKeydown === 'Process';
          if (i.inputType === 'insertCompositionText' && r && !0 === this.lastKeydownEventAccepted) {
            if (this.isComposing = !1, e(), t instanceof HTMLTextAreaElement) {
              let e = t.selectionStart ?? 0;
              t.value = t.value.slice(0, e - 1) + t.value.slice(e);
            } else {
              let e = document.getSelection();
              if (e && e.anchorNode === t) {
                let i = e.getRangeAt(0).startOffset;
                let n = t.textContent;
                t.textContent = n ? n.slice(0, i - 1) + n.slice(i) : '';
              }
            }
            return;
          }
          if (this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus)) {
            let a = i.data;
            if (a != null && a.length === 1) {
              let s = a.charCodeAt(0);
              if (s >= 55296 && s <= 56319) return;
            }
            let t = this.isComposing;
            let r = this.previousComposition;
            n === 'compositionend' && i.inputType === 'insertCompositionText' && (t = !0, r = this.lastCompositionEndValue);
            this.simulatedPreviousComposition != null && (t || (t = !0, r = this.simulatedPreviousComposition), this.simulatedPreviousComposition = null);
            this.cppAPI.textEvent(this.currentViewHandleWithFocus, a ?? '', t, r ?? '', this.modifierKeys(i));
            n === 'compositionend' ? (this.previousComposition = a, e()) : this.isComposing ? this.previousComposition = a : e();
            i.preventDefault();
          }
        }));
        t.className = 'focus-target';
        this.rootElement.appendChild(t);
        $$eu0.updateCustomFocusType();
      }
      this.cppAPI.setFocusElementsRegistered(!0);
    }
    return (this.pendingViewHandle = e, $$eu0.isExpectingTextInput()) ? $$eu0.customFocusElementReadWrite : $$eu0.customFocusElementReadOnly;
  }
  viewHandleFromElement(e) {
    if (e === $$eu0.customFocusElementReadWrite || e === $$eu0.customFocusElementReadOnly) return this.currentViewHandleWithFocus;
    if (!(e instanceof HTMLElement)) return null;
    let t = e;
    for (; t;) {
      if ('_pointer' in t && t._pointer) return t._pointer;
      t = t.parentNode;
    }
    if (e && (e.getAttribute('data-fullscreen-intercept') || e.getAttribute('data-fullscreen-intercept-dangerously-include-tab'))) {
      if (this.lastViewHandleWithFocus) return this.lastViewHandleWithFocus;
      logWarning('viewHandleFromElement', 'No cached view handle on intercept element, passing null.');
    }
    return null;
  }
  modifierKeys(e) {
    if (!eo(e)) return 0;
    let t = e.altKey && (e.which === 18 && 'location' in e && e.location === 2 || e.which !== 18 && this.lastAltKeyWasRight);
    let i = !!browserCapabilities.isWindows() && 'getModifierState' in e && e.getModifierState('AltGraph') && !this.lastAltKeyWasRight;
    let n = e.altKey || i;
    let r = e.ctrlKey || i;
    return (n ? xC : 0) | (e.metaKey ? No : 0) | (e.shiftKey ? IL : 0) | (r ? pP : 0) | (t ? eb : 0);
  }
  shouldIgnoreKeyboardEvent(e) {
    return !!(this.cppAPI.shouldSendKeyboardEventToBrowser(e.which, e.code, ed(), v7()) || er(e.target) && !this.isElementOwnedByFullscreen(e.target) || this.isComposing || (e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'Enter') && e.which === 229 || e.target && !this.isElementOwnedByFullscreen(e.target) && !(e.target instanceof HTMLElement && e.target.getAttribute('data-fullscreen-intercept-dangerously-include-tab')) && e.code === 'Tab' || e.target && e.target instanceof HTMLElement && e.target.tagName === 'BUTTON' && !this.isElementOwnedByFullscreen(e.target) && e.code === 'Enter' || e.key === 'AudioVolumeMute' && browserCapabilities.isChromeOS() || el(e));
  }
  shouldIgnoreMouseEvent(e) {
    return !this.fullscreenExpectsMouseReleaseEvent && this.shouldIgnoreEvent(e);
  }
  shouldIgnoreEvent(e) {
    let t = e.target instanceof Element && e.target.nodeType === 1;
    return !!(t && ei(e) || t && (!getFeatureFlags().ce_input_scrollover || e.type !== 'wheel') && er(e.target) && !this.isElementOwnedByFullscreen(e.target));
  }
  mouseEvent(e, t, i = null) {
    let n = e.detail;
    let s = window.PointerEvent && e instanceof window.PointerEvent;
    (s || browserCapabilities.isIE() || browserCapabilities.isEdge()) && (t === EventTypeEnum.MOUSE_PRESS || t === EventTypeEnum.MOUSE_RELEASE) && (n = this.simulatedClickCount(t === EventTypeEnum.MOUSE_PRESS, e.pageX, e.pageY, 4));
    let o = e.button;
    let l = PointerType.MOUSE;
    let d = -1;
    if (s && e.pointerType === 'pen' ? l = PointerType.STYLUS : s && e.pointerType === 'touch' && !getFeatureFlags().ce_il_disable_touch_events && (l = PointerType.TOUCH, d = e.pointerId), (t === EventTypeEnum.MOUSE_PRESS || t === EventTypeEnum.MOUSE_MOVE || t === EventTypeEnum.MOUSE_RELEASE || t === EventTypeEnum.MOUSE_CANCEL) && this.cppAPI.setIsUsingTouchEvents(l === PointerType.TOUCH), l === PointerType.TOUCH) {
      if (t === EventTypeEnum.MOUSE_PRESS && i) {
        this.pointerState = (this.pointerState || i()).next(e);
        return;
      }
      if (t === EventTypeEnum.MOUSE_CANCEL || t === EventTypeEnum.MOUSE_RELEASE) {
        this.pointerState = null;
        return;
      }
      if (this.pointerState) {
        this.pointerState = this.pointerState.next(e);
        return;
      }
    }
    s || t === EventTypeEnum.MOUSE_PRESS || t === EventTypeEnum.MOUSE_RELEASE || (o = -1);
    let c = Z(e, this.viewElement);
    this.cppAPI.preciseMouseEvent(t, c.x, c.y, c.preciseX, c.preciseY, o, e.buttons, n, this.modifierKeys(e), 0, 0, 0, l, d, e.timeStamp, e instanceof PointerEvent ? e.pressure : -1) && e.preventDefault();
  }
  simulatedClickCount(e, t, i, n) {
    if (!e) return this.oldCount;
    let r = Date.now();
    let a = 1;
    this.oldTime && r - this.oldTime < 500 && Math.abs(t - this.oldX) < n && Math.abs(i - this.oldY) < n && (a = this.oldCount + 1);
    this.oldX = t;
    this.oldY = i;
    this.oldCount = a;
    this.oldTime = r;
    return a;
  }
  isElementOwnedByFullscreen(e) {
    return e instanceof Element && this.rootElement.contains(e);
  }
  setupClipboardAndDropEvents() {
    let e = (e, t) => {
      if (this.clipboardDataTransfer = e.clipboardData || window.clipboardData, !(F2.shouldInterceptClipboardEvent(e, t) || ei(e) && !isDebugSelectedFigmakeFullscreen()) && this.clipboardDataTransfer) {
        e.preventDefault();
        let i = e.target;
        i instanceof HTMLElement && i.tagName === 'BODY' && (i = document.activeElement);
        let n = isDebugSelectedFigmakeFullscreen() ? this.canvasViewHandle : this.viewHandleFromElement(i);
        this.cppAPI.clipboardEvent(n, t);
      }
    };
    function t() {
      let e = debugState.getState().selectedView;
      return e.view === 'fullscreen' && e.editorType === FEditorType.Sites && atomStoreManager.get(s0) === PanelType.CODE;
    }
    document.body.addEventListener('copy', G(i => {
      t() || e(i, ClipboardAction.COPY);
    }));
    document.body.addEventListener('cut', G(i => {
      t() || e(i, ClipboardAction.CUT);
    }));
    document.body.addEventListener('paste', H(i => {
      if (!t()) {
        if (isDebugSelectedFigmakeFullscreen()) {
          if (!(tj(i) || gk(i))) return;
          if (atomStoreManager.get(qG)) {
            hH(InsertErrorType.MAXIMUM_ATTACHMENTS_EXCEEDED);
            return;
          }
          {
            atomStoreManager.set(Q_);
            let e = gk(i) && i.clipboardData?.getData('text/html');
            getFeatureFlags().bake_large_paste_warning && e && e.length > gP('make_large_paste_threshold').get('sizeBytes', 25e4) && hH(InsertErrorType.INSERTED_NODES_TOO_LARGE);
          }
        }
        e(i, ClipboardAction.PASTE);
      }
    }));
    this.viewElement.addEventListener('drop', G(e => {
      if (e.preventDefault(), !I2(e)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(fullscreenValue && fullscreenValue.handleSketchImportEvent(e))) {
        if (e.dataTransfer?.items) {
          let t = [];
          let i = new Map();
          for (let i = 0; i < e.dataTransfer.items.length; i++) {
            let n = e.dataTransfer.items[i];
            if (n && n.webkitGetAsEntry) {
              let e = n.webkitGetAsEntry();
              e && e.isFile ? t.push(e) : n.kind === 'file' && t.push({
                file(e) {
                  e(n.getAsFile());
                }
              });
            }
          }
          let n = e.dataTransfer.getData('URL');
          if (n) {
            let i = e.dataTransfer.getData('filename');
            i === '' && (i = 'dropped-image.png');
            let r = function (e, t) {
              let i = 'data:image/png;base64,';
              if (e.indexOf(i) === 0) {
                let n = atob(e.slice(i.length));
                let r = [];
                for (let e = 0; e < n.length; e++) r.push(n.charCodeAt(e));
                return new File([new Blob([new Uint8Array(r)], {
                  type: 'image/png'
                })], t, {
                  type: 'image/png'
                });
              }
            }(n, i);
            r && t.push({
              file(e) {
                e(r);
              }
            });
          }
          let r = !1;
          for (let n = 0; n < e.dataTransfer.items.length; n++) {
            let a = e.dataTransfer.items[n];
            if (a && a.webkitGetAsEntry) {
              let n = a.webkitGetAsEntry();
              n && n.isDirectory && (r = !0, function (e, t, i) {
                return new Promise((n, r) => {
                  let a = 0;
                  let s = function (t) {
                    let o = e.get(t);
                    o || (a++, o = t.createReader(), e.set(t, o));
                    o.readEntries(r => {
                      r.length > 0 ? (r.forEach(e => {
                        e.isFile && i.push(e);
                      }), r.forEach(e => {
                        e.isDirectory && s(e);
                      }), s(t)) : (a--, e.$$delete(t), a === 0 && n(void 0));
                    }, r);
                  };
                  s(t);
                });
              }(i, n, t).then(() => {
                i.size === 0 && this.importEntries(e, t);
              }));
            }
          }
          r || this.importEntries(e, t);
        } else if (e.dataTransfer?.files) {
          if (!fullscreenValue.fileArrayToString) {
            logWarning('FileDrop', 'Unable to import files, fileArrayToString is not defined');
            return;
          }
          this.cppAPI.dropEvent(this.viewHandleFromElement(e.target), e.pageX, e.pageY, this.modifierKeys(e), fullscreenValue.fileArrayToString(e.dataTransfer.files));
        }
      }
    }));
  }
  importEntries(e, t) {
    let i = [];
    let n = this;
    t.forEach(r => {
      r.file(r => {
        if (i.push(r), i.length === t.length) {
          if (!fullscreenValue.fileArrayToString) {
            logWarning('FileDrop', 'Unable to import file entries, fileArrayToString is not defined');
            return;
          }
          n.cppAPI.dropEvent(n.viewHandleFromElement(e.target), e.pageX, e.pageY, n.modifierKeys(e), fullscreenValue.fileArrayToString(i));
        }
      });
    });
  }
}
var K = (e => (e[e.UNKNOWN = -1] = 'UNKNOWN', e[e.PRIMARY = 1] = 'PRIMARY', e))(K || {});
var Y = (e => (e[e.NONE = -1] = 'NONE', e[e.PRIMARY = 0] = 'PRIMARY', e[e.MIDDLE = 1] = 'MIDDLE', e[e.RIGHT = 2] = 'RIGHT', e))(Y || {});
var q = (e => (e[e.NONE = 0] = 'NONE', e[e.PRIMARY = 1] = 'PRIMARY', e[e.SECONDARY = 2] = 'SECONDARY', e[e.MIDDLE = 4] = 'MIDDLE', e[e.BACK = 8] = 'BACK', e[e.FORWARD = 16] = 'FORWARD', e))(q || {});
var $ = (e => (e[e.PIXEL = 0] = 'PIXEL', e[e.LINE = 1] = 'LINE', e[e.PAGE = 2] = 'PAGE', e))($ || {});
function Z(e, t) {
  let i = e.pageX;
  let n = e.pageY;
  for (let r = t; r !== null; r = r.offsetParent instanceof HTMLElement ? r.offsetParent : null) {
    i -= r.offsetLeft;
    n -= r.offsetTop;
  }
  let a = i;
  let s = n;
  window.PointerEvent && e instanceof window.PointerEvent && (i = Math.round(i), n = Math.round(n));
  return {
    x: i,
    y: n,
    preciseX: a,
    preciseY: s
  };
}
function X() {
  let e = window.FigmaMobile;
  let t = window.FigmaMobile;
  if (e?.suppliesPencilSamples) {
    let e = debugState.getState().mirror.appModel.currentTool;
    if (debugState.getState().mirror.appModel.isReadOnly) ;else if (t._auto_draw_with_pencil && e !== DesignGraphElements.MULTISELECT) return !0;else return _$$H.includes(e);
  }
  return !1;
}
function Q(e) {
  Yx.instance[Wh.INSPECT]?.updateState({
    stopPointerEvents: e
  });
  Yx.instance[Wh.MODAL]?.updateState({
    stopPointerEvents: e
  });
}
let J = [107, 187, 109, 173, 189];
function ee(e) {
  return (browserCapabilities.isMac() ? e.metaKey : e.ctrlKey) && !e.altKey && J.includes(e.which || e.keyCode);
}
function et(e) {
  let t = browserCapabilities.isMac() ? e.metaKey : e.ctrlKey;
  let i = !(desktopAPIInstance && desktopAPIInstance.getVersion() > 0);
  return t && i && e.key === 'o';
}
function ei(e) {
  let t = e.target;
  for (; t instanceof HTMLElement || t instanceof SVGElement;) {
    var i;
    var n;
    var r;
    var a;
    var s;
    if (e.type === 'wheel' && ((i = t).classList.contains('js-fullscreen-wheel-event-capture') || i.getAttribute('data-fullscreen-wheel-event-capture')) || e.type === 'wheel' && ((n = t).classList.contains('js-fullscreen-no-mod-wheel-event-capture') || n.getAttribute('data-fullscreen-no-mod-wheel-event-capture')) && !(eo(e) && (e.ctrlKey || e.metaKey)) || ((r = t).classList.contains('js-fullscreen-prevent-event-capture') || r.getAttribute('data-fullscreen-prevent-event-capture') || ec(t)) && !(e.type === 'wheel' && ((a = t).classList.contains('js-fullscreen-wheel-event-passthrough') || a.getAttribute('data-fullscreen-wheel-event-passthrough')))) return !0;
    if ((e.type === 'paste' || e.type === 'cut' || e.type === 'copy') && ((s = t).classList.contains('js-fullscreen-clipboard-event-passthrough') || s.getAttribute('data-fullscreen-clipboard-event-passthrough'))) break;
    t = t.parentElement;
  }
  return !1;
}
function en() {
  return String.fromCharCode(8296) + String.fromCharCode(8297);
}
function er(e) {
  return e instanceof HTMLElement && (e.tagName === 'INPUT' && e.type === 'text' || e.tagName === 'INPUT' && e.type === 'password' || e.tagName === 'TEXTAREA' && !e.readOnly);
}
function ea(e) {
  return !!(8 & e.buttons) || !!(16 & e.buttons) || !!(4 & e.buttons);
}
function es(e) {
  return !!(2 & e.buttons);
}
function eo(e) {
  return 'ctrlKey' in e && 'metaKey' in e;
}
function el(e) {
  let t = e.target;
  for (; t instanceof HTMLElement || t instanceof SVGElement;) {
    if (ec(t)) return !0;
    t = t.parentElement;
  }
  return !1;
}
function ed() {
  return v7() !== KeyboardLayout.UNKNOWN;
}
function ec(e) {
  return e.classList.contains('js-fullscreen-prevent-event-capture-keys') || e.getAttribute('data-fullscreen-prevent-event-capture-keys');
}
export let $$eu0 = new class {
  constructor() {
    this.globalWindowState = null;
    this.focusEventBeingCalled = !1;
    this.customFocusElementReadWrite = null;
    this.customFocusElementReadOnly = null;
    this.expectingTextInput = !1;
    this.expectingCopyCutEvent = !1;
    this.expectingPasteEvent = !1;
  }
  initializeGlobalWindowState(e) {
    if (this.globalWindowState != null) throw new Error('Global window state already initialized');
    if (void 0 === HTMLWindow) throw new Error('HTMLWindow cannot initialize without cpp module');
    let t = new W(e, HTMLWindow);
    this.globalWindowState = t;
    nB(t.markKeydownEventForwarded);
    return t;
  }
  windowSetupComplete() {
    this.globalWindowState?.updateSizeAndPixelRatio();
  }
  windowHandleBeforeTick() {
    this.globalWindowState?.updateSizeAndPixelRatio();
  }
  destroyWindow() {
    try {
      this.globalWindowState && this.globalWindowState.rootElement.parentNode && this.globalWindowState.rootElement.parentNode.removeChild(this.globalWindowState.rootElement);
    } catch (e) {
      e.name === 'NotFoundError' ? console.warn('Caught NotFoundError during removeChild', e) : console.error('Unexpected error:', e);
    }
    this.globalWindowState?.destroy();
  }
  setTitle(e) {
    document.title = e;
  }
  title() {
    return document.title;
  }
  alert(e, t) {
    alert(`${e}\n\n${t}`);
  }
  initPrefersReducedMotion() {
    let e = window.matchMedia('(prefers-reduced-motion: reduce)');
    HTMLWindow?.updatePrefersReducedMotion(e.matches);
    e.onchange = function (e) {
      HTMLWindow?.updatePrefersReducedMotion(e.matches);
    };
  }
  setTextCaretBounds(e, t, i) {
    let n = this.customFocusElementReadWrite;
    n && (document.body.getAttribute('data-visible-canvas-inputs') ? (n.style.left = '', n.style.top = '', n.style.height = '', n.style.fontSize = '') : (n.style.left = `${e}px`, n.style.top = `${t}px`, n.style.height = `${i}px`, n.style.fontSize = `${0.8 * i}px`));
  }
  setExpectingTextInput(e) {
    this.expectingTextInput !== e && (this.expectingTextInput = e, this.updateCustomFocusType());
  }
  setExpectingCopyCutEvent(e) {
    this.expectingCopyCutEvent !== e && (this.expectingCopyCutEvent = e, this.updateCustomFocusType());
  }
  setExpectingPasteEvent(e) {
    this.expectingPasteEvent !== e && (this.expectingPasteEvent = e, this.updateCustomFocusType());
  }
  updateCustomFocusType() {
    if (document.location.ancestorOrigins && document.location.ancestorOrigins.length > 1 && document.location.ancestorOrigins[1].startsWith('vscode')) return;
    let e = this.maybeTemporarilyDisableFocusEvents();
    this.expectingCopyCutEvent || !this.isExpectingTextInput() ? document.activeElement !== this.customFocusElementReadOnly && this.customFocusElementReadOnly && (this.customFocusElementReadOnly.focus(), this.customFocusElementReadOnly.value = browserCapabilities.isChrome() ? '' : en(), this.customFocusElementReadOnly.selectionStart = 0, this.customFocusElementReadOnly.selectionEnd = 1) : this.customFocusElementReadWrite && (browserCapabilities.isIpad() && (this.customFocusElementReadWrite.style.left = '0px', this.customFocusElementReadWrite.style.top = '0px'), document.activeElement !== this.customFocusElementReadWrite && this.customFocusElementReadWrite.focus());
    this.focusEventBeingCalled = e;
  }
  isExpectingTextInput() {
    return this.expectingTextInput || this.expectingCopyCutEvent || this.expectingPasteEvent;
  }
  maybeTemporarilyDisableFocusEvents() {
    let e = this.focusEventBeingCalled;
    (document.activeElement === this.customFocusElementReadOnly || document.activeElement === this.customFocusElementReadWrite) && (this.focusEventBeingCalled = !0);
    return e;
  }
  focusView(e) {
    this.globalWindowState?.focusView(e, !1);
  }
  viewWithFocus() {
    return this.globalWindowState?.currentViewHandleWithFocus ?? null;
  }
  setCanvasView(e) {
    this.globalWindowState && (this.globalWindowState.canvasViewHandle = e);
  }
  usingMultiTouchPointerEvents() {
    return !!browserCapabilities.isMeetDevice() || (browserCapabilities.isIpadNative() || browserCapabilities.isiOS() && browserCapabilities.isInNativeApp()) && window.FigmaMobile.shouldHandleMultiTouchInFullscreen;
  }
  execCommandCopy() {
    let e = this.expectingCopyCutEvent;
    this.setExpectingCopyCutEvent(!0);
    let t = !1;
    try {
      !(t = document.execCommand('copy')) && browserCapabilities.isEdge() && (t = !0);
    } catch (e) {
      console.warn(e);
    }
    this.setExpectingCopyCutEvent(e);
    return t;
  }
  readClipboardContents(e) {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      let t = this.globalWindowState.clipboardDataTransfer.getData(e);
      t.charCodeAt(0) === 65279 && (t = t.slice(1));
      t.charCodeAt(t.length - 1) === 0 && (t = t.slice(0, t.length - 1));
      return t;
    } catch (e) {}
    return null;
  }
  writeClipboardContents(e, t) {
    if (!this.globalWindowState?.clipboardDataTransfer) return !1;
    try {
      this.globalWindowState.clipboardDataTransfer.setData(e, t);
      return !0;
    } catch (e) {}
    return !1;
  }
  clearClipboardContents() {
    this.globalWindowState?.clipboardDataTransfer && this.globalWindowState.clipboardDataTransfer.clearData();
  }
  tryToReadFromClipboardAsBlobInHTML(e, t) {
    let i = this.tryToReadJSSubstringFromClipboard(e, t);
    return i === null ? null : decodeBase64(i);
  }
  tryToReadSubstringFromClipboard(e, t) {
    let i = this.tryToReadJSSubstringFromClipboard(e, t);
    return i === null ? null : decodeURIComponent(escape(atob(i)));
  }
  tryToReadJSSubstringFromClipboard(e, t) {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      let i = this.globalWindowState.clipboardDataTransfer.getData('text/html');
      let n = i.indexOf(e);
      let r = i.indexOf(t);
      if (n >= 0 && r >= 0 && n < r) return i.slice(n + e.length, r);
    } catch (e) {}
    return null;
  }
  tryToReadFilesFromClipboard() {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      let e = [];
      let t = this.globalWindowState.clipboardDataTransfer.items;
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (n && n.kind === 'file') {
          let t = n.getAsFile();
          t != null && t.size > 0 && e.push(t);
        }
      }
      if (e.length > 0) {
        if (!fullscreenValue.fileArrayToString) {
          logWarning('Clipboard', 'Unable to read files to clipboard. fileArrayToString is not defined');
          return null;
        }
        return fullscreenValue.fileArrayToString(e);
      }
    } catch (e) {}
    return null;
  }
  tryToDetectSpreadsheetDataOnClipboard() {
    if (!this.globalWindowState?.clipboardDataTransfer) return !1;
    try {
      let e = this.globalWindowState.clipboardDataTransfer.getData('text/html').trim();
      let t = '<table';
      let i = '</table>';
      let n = e.indexOf('<meta');
      let r = e.indexOf('>');
      let a = e.indexOf(t);
      let s = e.indexOf(i);
      if (a >= 0 && s >= 0 && a < s) {
        let o = e.includes('google-sheets-html-origin');
        let l = e.includes('content=Excel.Sheet');
        if (o || l) return !0;
        let d = !e.includes(t, a + 1);
        let c = (n === 0 && r + 1 === a || a === 0) && s === e.length - i.length;
        return d && c;
      }
    } catch (e) {}
    return !1;
  }
  tryToDetectLineDataOnClipboard() {
    if (!this.globalWindowState?.clipboardDataTransfer) return !1;
    try {
      let e = this.globalWindowState.clipboardDataTransfer.getData('text/html');
      let t = ' dir=';
      let i = e.indexOf('<p');
      let n = !1;
      if (i >= 0) {
        let r = e.indexOf(t, i);
        if (r === -1) return !1;
        for (; i >= 0;) {
          let a = e.indexOf('>', i);
          if (a === -1) return !1;
          if (r < a) {
            n = !0;
            break;
          }
          i = e.indexOf('<p', i + 1);
          r = e.indexOf(t, i);
        }
      }
      return n;
    } catch (e) {}
    return !1;
  }
  writeToClipboardAsBlobInHTML(e, t, i, r, s, o, l, d) {
    if (!this.globalWindowState?.clipboardDataTransfer) return !1;
    let c = `<span style="white-space:pre-wrap;">${escapeHtml(l).replace(/\n/g, '<br>')}</span>`;
    let u = `<meta charset="utf-8">${e}${btoa(unescape(encodeURIComponent(t)))}${i}${r}${encodeBase64(s)}${o}${getFeatureFlags().ce_rich_text_copy && d ? d : c}`;
    try {
      this.globalWindowState.clipboardDataTransfer.setData('text/html', u);
      return !0;
    } catch (e) {}
    return !1;
  }
}();
export const IM = $$eu0;
export const II = $$V1;