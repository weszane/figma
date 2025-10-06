import { o1, eg, LE } from "../vendor/13174";
import { un, gm, cX, Tc, bh } from "../vendor/707924";
import { TW, mD } from "../vendor/601638";
import { v as _$$v } from "../vendor/883011";
import { createContext, useContext, useState, useRef, useMemo, useEffect } from "react";
import { _ } from "../vendor/884297";
import { v as _$$v2 } from "../vendor/272995";
import { N } from "../vendor/791199";
import { A as _$$A } from "../vendor/412162";
import { J as _$$J } from "../vendor/578159";
import { sD, wt } from "../vendor/400554";
import { c as _$$c } from "../vendor/190472";
import { e as _$$e } from "../vendor/344038";
import { Y as _$$Y, P as _$$P } from "../vendor/832206";
let o = "default";
let l = "";
let s = new WeakMap();
function $$d(e) {
  if (un()) "disabled" === o && (o = "restoring", setTimeout(() => {
    _$$v(() => {
      if ("restoring" === o) {
        let t = TW(e);
        "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || "");
        l = "";
        o = "default";
      }
    });
  }, 300)); else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && s.has(e)) {
    let t = s.get(e);
    let a = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    "none" === e.style[a] && (e.style[a] = t);
    "" === e.getAttribute("style") && e.removeAttribute("style");
    s.$$delete(e);
  }
}
let m = createContext({
  register: () => { }
});
function h(e, t, a) {
  if (!t.has(e)) throw TypeError("attempted to " + a + "  field on non-instance");
  return t.get(e);
}
m.displayName = "PressResponderContext";
function f(e, t, a) {
  var u = h(e, t, "set");
  !function (e, t, a) {
    if (t.set) t.set.call(e, a); else {
      if (!t.writable) throw TypeError("attempted to set read only  field");
      t.value = a;
    }
  }(e, u, a);
  return a;
}
function x(e, t, a = !0) {
  var u;
  var r;
  let {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  } = t;
  gm() && (window.event || r.type?.startsWith("key")) && "_blank" === e.target && (cX() ? i = !0 : o = !0);
  let d = Tc() && cX() && !bh() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: !0,
    cancelable: !0
  });
  x.isOpening = a;
  _$$e(e);
  e.dispatchEvent(d);
  x.isOpening = !1;
}
x.isOpening = !1;
var w = new WeakMap();
class F {
  continuePropagation() {
    f(this, w, !1);
  }
  get shouldStopPropagation() {
    var e;
    return (e = h(this, w, "get")).get ? e.get.call(this) : e.value;
  }
  constructor(e, t, a, u) {
    var n;
    _(this, w, {
      writable: !0,
      value: void 0
    });
    f(this, w, !0);
    let r = null !== (n = u?.target) && void 0 !== n ? n : a.currentTarget;
    let i = r?.getBoundingClientRect();
    let o;
    let l = 0;
    let s;
    let d = null;
    null != a.clientX && null != a.clientY && (s = a.clientX, d = a.clientY);
    i && (null != s && null != d ? (o = s - i.left, l = d - i.top) : (o = i.width / 2, l = i.height / 2));
    this.type = e;
    this.pointerType = t;
    this.target = a.currentTarget;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.x = o;
    this.y = l;
  }
}
let k = Symbol("linkClicked");
let P = "react-aria-pressable-style";
let $ = "data-react-aria-pressable";
export function $$R0(e) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    onClick,
    isDisabled,
    isPressed,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    ref,
    ...O
  } = function (e) {
    var t;
    let a = useContext(m);
    if (a) {
      let {
        register,
        ...u
      } = a;
      e = _$$v2(u, e);
      register();
    }
    t = e.ref;
    N(() => {
      if (a && a.ref && t) {
        a.ref.current = t.current;
        return () => {
          a.ref && (a.ref.current = null);
        };
      }
    });
    return e;
  }(e);
  let [j, z] = useState(!1);
  let U = useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  });
  let {
    addGlobalListener,
    removeAllGlobalListeners
  } = _$$A();
  let _ = _$$J((e, t) => {
    let u = U.current;
    if (isDisabled || u.didFirePressStart) return !1;
    let n = !0;
    if (u.isTriggeringEvent = !0, onPressStart) {
      let a = new F("pressstart", t, e);
      onPressStart(a);
      n = a.shouldStopPropagation;
    }
    onPressChange && onPressChange(!0);
    u.isTriggeringEvent = !1;
    u.didFirePressStart = !0;
    z(!0);
    return n;
  });
  let W = _$$J((e, u, n = !0) => {
    let r = U.current;
    if (!r.didFirePressStart) return !1;
    r.didFirePressStart = !1;
    r.isTriggeringEvent = !0;
    let i = !0;
    if (onPressEnd) {
      let t = new F("pressend", u, e);
      onPressEnd(t);
      i = t.shouldStopPropagation;
    }
    if (onPressChange && onPressChange(!1), z(!1), onPress && n && !isDisabled) {
      let a = new F("press", u, e);
      onPress(a);
      i && (i = a.shouldStopPropagation);
    }
    r.isTriggeringEvent = !1;
    return i;
  });
  let J = _$$J((e, t) => {
    let a = U.current;
    if (isDisabled) return !1;
    if (onPressUp) {
      a.isTriggeringEvent = !0;
      let u = new F("pressup", t, e);
      onPressUp(u);
      a.isTriggeringEvent = !1;
      return u.shouldStopPropagation;
    }
    return !0;
  });
  let Y = _$$J(e => {
    let t = U.current;
    if (t.isPressed && t.target) {
      for (let a of (t.didFirePressStart && null != t.pointerType && W(T(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, removeAllGlobalListeners(), allowTextSelectionOnPress || $$d(t.target), t.disposables)) a();
      t.disposables = [];
    }
  });
  let G = _$$J(e => {
    shouldCancelOnPointerExit && Y(e);
  });
  let H = _$$J(e => {
    onClick?.(e);
  });
  let q = _$$J((e, t) => {
    if (onClick) {
      let a = new MouseEvent("click", e);
      o1(a, t);
      onClick(eg(a));
    }
  });
  let Q = useMemo(() => {
    let e = U.current;
    let t = {
      onKeyDown(t) {
        if (S(t.nativeEvent, t.currentTarget) && sD(t.currentTarget, wt(t.nativeEvent))) {
          var u;
          M(wt(t.nativeEvent), t.key) && t.preventDefault();
          let i = !0;
          if (!e.isPressed && !t.repeat) {
            e.target = t.currentTarget;
            e.isPressed = !0;
            e.pointerType = "keyboard";
            i = _(t, "keyboard");
            let u = t.currentTarget;
            addGlobalListener(TW(t.currentTarget), "keyup", _$$c(t => {
              S(t, u) && !t.repeat && sD(u, wt(t)) && e.target && J(T(e.target, t), "keyboard");
            }, a), !0);
          }
          i && t.stopPropagation();
          t.metaKey && cX() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
      },
      onClick(t) {
        if ((!t || sD(t.currentTarget, wt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !x.isOpening) {
          let a = !0;
          if (isDisabled && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || _$$Y(t.nativeEvent))) {
            let e = _(t, "virtual");
            let u = J(t, "virtual");
            let n = W(t, "virtual");
            H(t);
            a = e && u && n;
          } else if (e.isPressed && "keyboard" !== e.pointerType) {
            let u = e.pointerType || t.nativeEvent.pointerType || "virtual";
            let n = J(T(t.currentTarget, t), u);
            let r = W(T(t.currentTarget, t), u, !0);
            a = n && r;
            e.isOverTarget = !1;
            H(t);
            Y(t);
          }
          e.ignoreEmulatedMouseEvents = !1;
          a && t.stopPropagation();
        }
      }
    };
    let a = t => {
      var a;
      var u;
      var n;
      if (e.isPressed && e.target && S(t, e.target)) {
        M(wt(t), t.key) && t.preventDefault();
        let a = wt(t);
        let n = sD(e.target, wt(t));
        W(T(e.target, t), "keyboard", n);
        n && q(t, e.target);
        removeAllGlobalListeners();
        "Enter" !== t.key && A(e.target) && sD(e.target, a) && !t[k] && (t[k] = !0, x(e.target, t, !1));
        e.isPressed = !1;
        e.metaKeyEvents?.$$delete(t.key);
      } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
        let t = e.metaKeyEvents;
        for (let a of (e.metaKeyEvents = void 0, t.values())) e.target?.dispatchEvent(new KeyboardEvent("keyup", a));
      }
    };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !sD(t.currentTarget, wt(t.nativeEvent))) return;
        if (_$$P(t.nativeEvent)) {
          e.pointerType = "virtual";
          return;
        }
        e.pointerType = t.pointerType;
        let u = !0;
        if (!e.isPressed) {
          e.isPressed = !0;
          e.isOverTarget = !0;
          e.activePointerId = t.pointerId;
          e.target = t.currentTarget;
          allowTextSelectionOnPress || function (e) {
            if (un()) {
              if ("default" === o) {
                let t = TW(e);
                l = t.documentElement.style.webkitUserSelect;
                t.documentElement.style.webkitUserSelect = "none";
              }
              o = "disabled";
            } else if (e instanceof HTMLElement || e instanceof SVGElement) {
              let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
              s.set(e, e.style[t]);
              e.style[t] = "none";
            }
          }(e.target);
          u = _(t, e.pointerType);
          let d = wt(t.nativeEvent);
          "releasePointerCapture" in d && d.releasePointerCapture(t.pointerId);
          addGlobalListener(TW(t.currentTarget), "pointerup", a, !1);
          addGlobalListener(TW(t.currentTarget), "pointercancel", i, !1);
        }
        u && t.stopPropagation();
      };
      t.onMouseDown = t => {
        if (sD(t.currentTarget, wt(t.nativeEvent)) && 0 === t.button) {
          if (preventFocusOnPress) {
            let a = LE(t.target);
            a && e.disposables.push(a);
          }
          t.stopPropagation();
        }
      };
      t.onPointerUp = t => {
        sD(t.currentTarget, wt(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && !e.isPressed && J(t, e.pointerType || t.pointerType);
      };
      t.onPointerEnter = t => {
        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(T(e.target, t), e.pointerType));
      };
      t.onPointerLeave = t => {
        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, W(T(e.target, t), e.pointerType, !1), G(t));
      };
      let a = t => {
        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
          if (sD(e.target, wt(t)) && null != e.pointerType) {
            let a = !1;
            let u = setTimeout(() => {
              e.isPressed && e.target instanceof HTMLElement && (a ? Y(t) : (_$$e(e.target), e.target.click()));
            }, 80);
            addGlobalListener(t.currentTarget, "click", () => a = !0, !0);
            e.disposables.push(() => clearTimeout(u));
          } else Y(t);
          e.isOverTarget = !1;
        }
      };
      let i = e => {
        Y(e);
      };
      t.onDragStart = e => {
        sD(e.currentTarget, wt(e.nativeEvent)) && Y(e);
      };
    }
    return t;
  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners, allowTextSelectionOnPress, Y, G, W, _, J, H, q]);
  useEffect(() => {
    if (!ref) return;
    let e = TW(ref.current);
    if (!e || !e.head || e.getElementById(P)) return;
    let t = e.createElement("style");
    t.id = P;
    t.textContent = `
@layer {
  [${$}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
    e.head.prepend(t);
  }, [ref]);
  useEffect(() => {
    let e = U.current;
    return () => {
      var t;
      for (let a of (allowTextSelectionOnPress || $$d(null !== (t = e.target) && void 0 !== t ? t : void 0), e.disposables)) a();
      e.disposables = [];
    };
  }, [allowTextSelectionOnPress]);
  return {
    isPressed: isPressed || j,
    pressProps: _$$v2(O, Q, {
      [$]: !0
    })
  };
}
function A(e) {
  return "A" === e.tagName && e.hasAttribute("href");
}
function S(e, t) {
  let {
    key,
    code
  } = e;
  let n = t.getAttribute("role");
  return ("Enter" === key || " " === key || "Spacebar" === key || "Space" === code) && !(t instanceof mD(t).HTMLInputElement && !I(t, key) || t instanceof mD(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === n || !n && A(t)) && "Enter" !== key);
}
function T(e, t) {
  let a = t.clientX;
  let u = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: a,
    clientY: u
  };
}
function M(e, t) {
  return e instanceof HTMLInputElement ? !I(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !A(e));
}
let V = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function I(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : V.has(e.type);
}
export const d = $$R0;
