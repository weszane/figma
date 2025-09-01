import { useRef, useEffect, useState } from "react";
import { YQ } from "../905/502364";
import { D } from "../905/347702";
import { P7, gm, my } from "../905/383548";
export function $$o1({
  location: e,
  onTargetLost: t,
  targetKey: r,
  targetType: a
}) {
  let s = useRef(null);
  let o = useRef(null);
  let l = useRef(!1);
  useEffect(() => {
    !l.current && e && (l.current = !0);
  }, [l, e]);
  useEffect(() => {
    e ? (s.current = e, o.current = r) : o.current === r && (YQ({
      id: "Lost DOM Target"
    }), t?.(l.current, a));
  }, [e, t, r, a]);
}
export function $$l2(e) {
  let t;
  try {
    t = document.querySelectorAll(`[data-onboarding-key=${e}]`);
  } catch (e) {
    return null;
  }
  if (0 === t.length) return null;
  for (let e = 0; e < t.length; e++) if (function (e) {
    if (!e || "function" == typeof e.checkVisibility && !e.checkVisibility({
      visibilityProperty: !0
    })) return !1;
    let t = e.getBoundingClientRect();
    return !(0 === t.left && 0 === t.right && 0 === t.height && 0 === t.width);
  }(t[e])) return t[e];
  return null;
}
export let $$d0 = D(e => {
  let t = P7(e.pointerType || gm.arrow);
  e.pointerOffsetOverride && (t.standardPointerOffset = e.pointerOffsetOverride);
  let r = e.topPadding || -t.pointerTargetOverlap;
  let i = n => {
    let i = $$l2(e.targetKey);
    if (null != i) {
      let a = my({
        width: e.width,
        height: e.height,
        targetRect: i.getBoundingClientRect(),
        positioningConstants: t,
        alignPointerToLeft: e.alignPointerToLeft,
        alignPointerToTop: e.alignPointerToTop,
        shouldCenterArrow: e.shouldCenterArrow,
        topPadding: r,
        targetType: "dom",
        arrowPosition: e.arrowPosition
      });
      return null == n || a.top !== n.top || a.left !== n.left ? {
        type: "CHANGED",
        location: a
      } : {
        type: "UNCHANGED"
      };
    }
    return {
      type: "NOT_FOUND"
    };
  };
  let a = null;
  let [d, c] = useState(() => {
    let e = i(null);
    "CHANGED" === e.type && (a = e.location);
    return a;
  });
  let [u, p] = useState(null);
  useEffect(() => {
    let t = i(d);
    if ("CHANGED" === t.type ? a = t.location : "UNCHANGED" === t.type && (a = d), void 0 !== t && c(a), p(e.targetKey), e.shouldScrollTargetIntoView) {
      let t = $$l2(e.targetKey);
      t?.scrollIntoView();
    }
  }, [e.targetKey]);
  let _ = useRef();
  function h() {
    let e = i(d);
    "CHANGED" === e.type ? c(e.location) : "NOT_FOUND" === e.type && c(null);
  }
  return (useEffect(() => {
    _.current = h;
  }), useEffect(() => {
    let e = setInterval(function () {
      _.current();
    }, 50);
    return () => clearInterval(e);
  }, []), $$o1({
    location: d,
    onTargetLost: e.onTargetLost,
    targetKey: e.targetKey,
    targetType: "dom"
  }), u !== e.targetKey) ? a : d;
});
export const eP = $$d0;
export const pc = $$o1;
export const xT = $$l2;