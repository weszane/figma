import { Uo } from "../vendor/187488";
import { K } from "../vendor/873234";
import { f } from "../vendor/647631";
import a, { k as _$$k } from "../vendor/549752";
import { I } from "../vendor/605155";
import { O as _$$O } from "../vendor/313656";
import { OH } from "../vendor/537916";
let d = "framerAppearId";
let p = "data-" + I(d);
export function $$v0(e, r, n = {}) {
  let i;
  if (e.notify("AnimationStart", r), Array.isArray(r)) i = Promise.all(r.map(r => y(e, r, n)));else if ("string" == typeof r) i = y(e, r, n);else {
    let o = "function" == typeof r ? K(e, r, n.custom) : r;
    i = b(e, o, n);
  }
  return i.then(() => e.notify("AnimationComplete", r));
}
function y(e, r, n = {}) {
  var i;
  let o = K(e, r, n.custom);
  let {
    transition = e.getDefaultTransition() || {}
  } = o || {};
  n.transitionOverride && (a = n.transitionOverride);
  let h = o ? () => b(e, o, n) : () => Promise.resolve();
  let d = e.variantChildren?.size ? (i = 0) => {
    let {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return O(e, r, delayChildren + i, staggerChildren, staggerDirection, n);
  } : () => Promise.resolve();
  let {
    when
  } = a;
  if (!when) return Promise.all([h(), d(n.delay)]);
  {
    let [e, r] = "beforeChildren" === when ? [h, d] : [d, h];
    return e().then(r);
  }
}
function b(e, r, {
  delay: n = 0,
  transitionOverride: s,
  type: h
} = {}) {
  var d;
  let {
    transition = e.getDefaultTransition(),
    transitionEnd,
    ...O
  } = e.makeTargetAnimatable(r);
  let x = e.getValue("willChange");
  s && (v = s);
  let w = [];
  let _ = h && e.animationState?.getState()[h];
  for (let r in O) {
    let i = e.getValue(r);
    let s = O[r];
    if (!i || void 0 === s || _ && k(_, r)) continue;
    let h = {
      delay: n,
      elapsed: 0,
      ...transition
    };
    if (window.HandoffAppearAnimations && !i.hasAnimated) {
      let n = e.getProps()[p];
      n && (h.elapsed = window.HandoffAppearAnimations(n, r, i, OH));
    }
    let d = i.start(_$$O(r, i, s, e.shouldReduceMotion && f.has(r) ? {
      type: !1
    } : h));
    _$$k(x) && (x.add(r), d = d.then(() => x.remove(r)));
    w.push(d);
  }
  return Promise.all(w).then(() => {
    transitionEnd && Uo(e, transitionEnd);
  });
}
function O(e, r, n = 0, i = 0, s = 1, o) {
  let a = [];
  let h = (e.variantChildren.size - 1) * i;
  let d = 1 === s ? (e = 0) => e * i : (e = 0) => h - e * i;
  Array.from(e.variantChildren).sort(w).forEach((e, i) => {
    e.notify("AnimationStart", r);
    a.push(y(e, r, {
      ...o,
      delay: n + d(i)
    }).then(() => e.notify("AnimationComplete", r)));
  });
  return Promise.all(a);
}
export function $$x1(e) {
  e.values.forEach(e => e.stop());
}
function w(e, r) {
  return e.sortNodePosition(r);
}
function k({
  protectedKeys: e,
  needsAnimating: r
}, n) {
  let i = e.hasOwnProperty(n) && !0 !== r[n];
  r[n] = !1;
  return i;
}
export const _0 = $$v0;
export const TV = $$x1;