import { V as _$$V, $ as _$$$ } from "../vendor/524215";
import { f } from "../vendor/87558";
import { OH, eO as _$$eO } from "../vendor/537916";
import { V as _$$V2 } from "../vendor/591494";
import { G as _$$G } from "../vendor/459467";
import { G as _$$G2 } from "../vendor/635351";
import { A as _$$A } from "../vendor/454088";
import { l } from "../vendor/155802";
import { po, tn, yT } from "../vendor/807427";
import { q as _$$q } from "../vendor/82231";
import { f as _$$f } from "../vendor/535794";
import { c } from "../vendor/937967";
import { u } from "../vendor/600452";
import { f as _$$f2 } from "../vendor/615177";
import { J as _$$J } from "../vendor/38229";
import { be, RL, rU, D2 } from "../vendor/47013";
let o = {
  current: !1
};
let p = e => e * e;
let g = _$$G(p);
let m = _$$V2(p);
let x = _$$A(.33, 1.53, .69, .99);
let w = _$$G(x);
let k = _$$V2(w);
let _ = e => (e *= 2) < 1 ? .5 * w(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
let S = {
  linear: l,
  easeIn: p,
  easeInOut: m,
  easeOut: g,
  circIn: po,
  circInOut: tn,
  circOut: yT,
  backIn: w,
  backInOut: k,
  backOut: x,
  anticipate: _
};
let E = e => {
  if (Array.isArray(e)) {
    _$$V(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
    let [r, n, s, o] = e;
    return _$$A(r, n, s, o);
  }
  return "string" == typeof e ? (_$$V(void 0 !== S[e], `Invalid easing type '${e}'`), S[e]) : e;
};
let A = e => Array.isArray(e) && "number" != typeof e[0];
function C(e, r) {
  return e.map(() => r || m).splice(0, e.length - 1);
}
function T(e) {
  let r = e.length;
  return e.map((e, n) => 0 !== n ? n / (r - 1) : 0);
}
function I(e, r) {
  return e.map(e => e * r);
}
function P({
  keyframes: e,
  ease: r = m,
  times: n,
  duration: i = 300
}) {
  e = [...e];
  let s = A(r) ? r.map(E) : E(r);
  let o = {
    done: !1,
    value: e[0]
  };
  let a = I(n && n.length === e.length ? n : T(e), i);
  function h() {
    return _$$G2(a, e, {
      ease: Array.isArray(s) ? s : C(e, s)
    });
  }
  let d = h();
  return {
    next: e => (o.value = d(e), o.done = e >= i, o),
    flipTarget: () => {
      e.reverse();
      d = h();
    }
  };
}
let M = .001;
let D = .01;
let N = 10;
let $ = .05;
let L = 1;
function j({
  duration: e = 800,
  bounce: r = .25,
  velocity: n = 0,
  mass: s = 1
}) {
  let o;
  let a;
  _$$$(e <= 1e3 * N, "Spring duration must be 10 seconds or less");
  let h = 1 - r;
  h = _$$q($, L, h);
  e = _$$q(D, N, e / 1e3);
  h < 1 ? (o = r => {
    let i = r * h;
    let s = i * e;
    return M - (i - n) / F(r, h) * Math.exp(-s);
  }, a = r => {
    let i = r * h * e;
    let s = i * n + n;
    let a = Math.pow(h, 2) * Math.pow(r, 2) * e;
    let d = Math.exp(-i);
    let p = F(Math.pow(r, 2), h);
    return (s - a) * d * (-o(r) + M > 0 ? -1 : 1) / p;
  }) : (o = r => -M + Math.exp(-r * e) * ((r - n) * e + 1), a = r => e * e * (n - r) * Math.exp(-r * e));
  let d = Z(o, a, 5 / e);
  if (e *= 1e3, isNaN(d)) return {
    stiffness: 100,
    damping: 10,
    duration: e
  };
  {
    let r = Math.pow(d, 2) * s;
    return {
      stiffness: r,
      damping: 2 * h * Math.sqrt(s * r),
      duration: e
    };
  }
}
let z = 12;
function Z(e, r, n) {
  let i = n;
  for (let n = 1; n < z; n++) i -= e(i) / r(i);
  return i;
}
function F(e, r) {
  return e * Math.sqrt(1 - r * r);
}
let Q = ["duration", "bounce"];
let V = ["stiffness", "damping", "mass"];
function B(e, r) {
  return r.some(r => void 0 !== e[r]);
}
function q(e) {
  let r = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!B(e, V) && B(e, Q)) {
    let n = j(e);
    (r = {
      ...r,
      ...n,
      velocity: 0,
      mass: 1
    }).isResolvedFromDuration = !0;
  }
  return r;
}
let W = 5;
function Y({
  keyframes: e,
  restDelta: r,
  restSpeed: n,
  ...i
}) {
  let s = e[0];
  let o = e[e.length - 1];
  let a = {
    done: !1,
    value: s
  };
  let {
    stiffness,
    damping,
    mass,
    velocity,
    duration,
    isResolvedFromDuration
  } = q(i);
  let y = G;
  let b = velocity ? -(velocity / 1e3) : 0;
  let O = damping / (2 * Math.sqrt(stiffness * mass));
  function x() {
    let e = o - s;
    let i = Math.sqrt(stiffness / mass) / 1e3;
    let a = 5 > Math.abs(e);
    if (n || (n = a ? .01 : 2), r || (r = a ? .005 : .5), O < 1) {
      let r = F(i, O);
      y = n => o - Math.exp(-O * i * n) * ((b + O * i * e) / r * Math.sin(r * n) + e * Math.cos(r * n));
    } else if (1 === O) y = r => o - Math.exp(-i * r) * (e + (b + i * e) * r);else {
      let r = i * Math.sqrt(O * O - 1);
      y = n => {
        let s = Math.exp(-O * i * n);
        let a = Math.min(r * n, 300);
        return o - s * ((b + O * i * e) * Math.sinh(a) + r * e * Math.cosh(a)) / r;
      };
    }
  }
  x();
  return {
    next: e => {
      let i = y(e);
      if (isResolvedFromDuration) a.done = e >= duration;else {
        let s = b;
        if (0 !== e) {
          if (O < 1) {
            let r = Math.max(0, e - W);
            s = _$$f(i - y(r), e - r);
          } else s = 0;
        }
        let h = Math.abs(s) <= n;
        let d = Math.abs(o - i) <= r;
        a.done = h && d;
      }
      a.value = a.done ? o : i;
      return a;
    },
    flipTarget: () => {
      b = -b;
      [s, o] = [o, s];
      x();
    }
  };
}
Y.needsInterpolation = (e, r) => "string" == typeof e || "string" == typeof r;
let G = e => 0;
let X = {
  decay: function ({
    keyframes: e = [0],
    velocity: r = 0,
    power: n = .8,
    timeConstant: i = 350,
    restDelta: s = .5,
    modifyTarget: o
  }) {
    let a = e[0];
    let h = {
      done: !1,
      value: a
    };
    let d = n * r;
    let p = a + d;
    let g = void 0 === o ? p : o(p);
    g !== p && (d = g - a);
    return {
      next: e => {
        let r = -d * Math.exp(-e / i);
        h.done = !(r > s || r < -s);
        h.value = h.done ? g : g + r;
        return h;
      },
      flipTarget: () => {}
    };
  },
  keyframes: P,
  tween: P,
  spring: Y
};
function H(e, r, n = 0) {
  return e - r - n;
}
function K(e, r = 0, n = 0, i = !0) {
  return i ? H(r + -e, r, n) : r - (e - r) + n;
}
function J(e, r, n, i) {
  return i ? e >= r + n : e <= -n;
}
let ee = e => {
  let r = ({
    delta: r
  }) => e(r);
  return {
    start: () => OH.update(r, !0),
    stop: () => _$$eO.update(r)
  };
};
function et({
  duration: e,
  driver: r = ee,
  elapsed: n = 0,
  repeat: i = 0,
  repeatType: s = "loop",
  repeatDelay: o = 0,
  keyframes: a,
  autoplay: h = !0,
  onPlay: d,
  onStop: p,
  onComplete: g,
  onRepeat: m,
  onUpdate: y,
  type: b = "keyframes",
  ...O
}) {
  var x;
  var w;
  let k;
  let _;
  let S = n;
  let E = 0;
  let A = e;
  let C = !1;
  let T = !0;
  let I = X[a.length > 2 ? "keyframes" : b] || P;
  let R = a[0];
  let M = a[a.length - 1];
  let D = {
    done: !1,
    value: R
  };
  (x = I).needsInterpolation?.call(x, R, M) && (_ = _$$G2([0, 100], [R, M], {
    clamp: !1
  }), a = [0, 100]);
  let N = I({
    ...O,
    duration: e,
    keyframes: a
  });
  function $() {
    E++;
    "reverse" === s ? n = K(n, A, o, T = E % 2 == 0) : (n = H(n, A, o), "mirror" === s && N.flipTarget());
    C = !1;
    m && m();
  }
  function L() {
    k && k.stop();
    g && g();
  }
  function j(e) {
    T || (e = -e);
    n += e;
    C || (D = N.next(Math.max(0, n)), _ && (D.value = _(D.value)), C = T ? D.done : n <= 0);
    y && y(D.value);
    C && (0 === E && (A = void 0 !== A ? A : n), E < i ? J(n, A, o, T) && $() : L());
  }
  function z() {
    d && d();
    (k = r(j)).start();
  }
  h && z();
  return {
    stop: () => {
      p && p();
      k && k.stop();
    },
    set currentTime(t) {
      n = S;
      j(t);
    },
    sample: r => {
      n = S;
      let i = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50;
      let s = 0;
      for (j(0); s <= r;) {
        j(Math.min(r - s, i));
        s += i;
      }
      return D;
    }
  };
}
function er(e) {
  return !e || Array.isArray(e) || "string" == typeof e && ei[e];
}
let en = ([e, r, n, i]) => `cubic-bezier(${e}, ${r}, ${n}, ${i})`;
let ei = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: en([0, .65, .55, 1]),
  circOut: en([.55, 0, 1, .45]),
  backIn: en([.31, .01, .66, -.59]),
  backOut: en([.33, 1.53, .69, .99])
};
function es(e) {
  if (e) return Array.isArray(e) ? en(e) : ei[e];
}
function eo(e, r, n, {
  delay: i = 0,
  duration: s,
  repeat: o = 0,
  repeatType: a = "loop",
  ease: h,
  times: d
} = {}) {
  return e.animate({
    [r]: n,
    offset: d
  }, {
    delay: i,
    duration: s,
    easing: es(h),
    fill: "both",
    iterations: o + 1,
    direction: "reverse" === a ? "alternate" : "normal"
  });
}
let ea = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
};
let el = {};
let eu = {};
for (let e in ea) eu[e] = () => (void 0 === el[e] && (el[e] = ea[e]()), el[e]);
function ec(e, {
  repeat: r,
  repeatType: n = "loop"
}) {
  let i = r && "loop" !== n && r % 2 == 1 ? 0 : e.length - 1;
  return e[i];
}
let eh = new Set(["opacity"]);
let ed = 10;
function ef(e, r, {
  onUpdate: n,
  onComplete: i,
  ...s
}) {
  if (!(eu.waapi() && eh.has(r) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping)) return !1;
  let {
    keyframes,
    duration = 300,
    elapsed = 0,
    ease
  } = s;
  if ("spring" === s.type || !er(s.ease)) {
    if (s.repeat === 1 / 0) return;
    let e = et({
      ...s,
      elapsed: 0
    });
    let r = {
      done: !1,
      value: keyframes[0]
    };
    let n = [];
    let i = 0;
    for (; !r.done && i < 2e4;) {
      r = e.sample(i);
      n.push(r.value);
      i += ed;
    }
    o = n;
    h = i - ed;
    p = "linear";
  }
  let g = eo(e.owner.current, r, keyframes, {
    ...s,
    delay: -elapsed,
    duration,
    ease
  });
  g.onfinish = () => {
    e.set(ec(keyframes, s));
    OH.update(() => g.cancel());
    i && i();
  };
  return {
    get currentTime() {
      return g.currentTime || 0;
    },
    set currentTime(t) {
      g.currentTime = t;
    },
    stop: () => {
      let {
        currentTime
      } = g;
      if (currentTime) {
        let n = et({
          ...s,
          autoplay: !1
        });
        e.setWithVelocity(n.sample(currentTime - ed).value, n.sample(currentTime).value, ed);
      }
      OH.update(() => g.cancel());
    }
  };
}
function eg({
  keyframes: e,
  elapsed: r,
  onUpdate: n,
  onComplete: i
}) {
  let s = () => {
    n && n(e[e.length - 1]);
    i && i();
  };
  return r ? {
    stop: c(s, -r)
  } : s();
}
function ev({
  keyframes: e,
  velocity: r = 0,
  min: n,
  max: i,
  power: s = .8,
  timeConstant: o = 750,
  bounceStiffness: a = 500,
  bounceDamping: h = 10,
  restDelta: d = 1,
  modifyTarget: p,
  driver: g,
  onUpdate: m,
  onComplete: v,
  onStop: y
}) {
  let b;
  let O = e[0];
  function x(e) {
    return void 0 !== n && e < n || void 0 !== i && e > i;
  }
  function w(e) {
    return void 0 === n ? i : void 0 === i ? n : Math.abs(n - e) < Math.abs(i - e) ? n : i;
  }
  function k(e) {
    b?.stop();
    b = et({
      keyframes: [0, 1],
      velocity: 0,
      ...e,
      driver: g,
      onUpdate: r => {
        var n;
        m?.(r);
        e.onUpdate?.call(e, r);
      },
      onComplete: v,
      onStop: y
    });
  }
  function _(e) {
    k({
      type: "spring",
      stiffness: a,
      damping: h,
      restDelta: d,
      ...e
    });
  }
  if (x(O)) _({
    velocity: r,
    keyframes: [O, w(O)]
  });else {
    let e;
    let i;
    let a = s * r + O;
    void 0 !== p && (a = p(a));
    let h = w(a);
    let g = h === n ? -1 : 1;
    let m = n => {
      e = i;
      i = n;
      r = _$$f(n - e, u.delta);
      (1 === g && n > h || -1 === g && n < h) && _({
        keyframes: [n, h],
        velocity: r
      });
    };
    k({
      type: "decay",
      keyframes: [O, 0],
      velocity: r,
      timeConstant: o,
      power: s,
      restDelta: d,
      modifyTarget: p,
      onUpdate: x(a) ? m : void 0
    });
  }
  return {
    stop: () => b?.stop()
  };
}
let ey = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
});
let eb = e => ({
  type: "spring",
  stiffness: 550,
  damping: 0 === e ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
let eO = () => ({
  type: "keyframes",
  ease: "linear",
  duration: .3
});
let ex = {
  type: "keyframes",
  duration: .8
};
let ew = {
  x: ey,
  y: ey,
  z: ey,
  rotate: ey,
  rotateX: ey,
  rotateY: ey,
  rotateZ: ey,
  scaleX: eb,
  scaleY: eb,
  scale: eb,
  opacity: eO,
  backgroundColor: eO,
  color: eO,
  default: eb
};
let ek = (e, {
  keyframes: r
}) => r.length > 2 ? ex : (ew[e] || ew.$$default)(r[1]);
let eS = (e, r) => "zIndex" !== e && !!("number" == typeof r || Array.isArray(r) || "string" == typeof r && _$$f2.test(r) && !r.startsWith("url("));
function eC(e, r, n, i) {
  let s = eS(r, n);
  let o = void 0 !== i.from ? i.from : e.get();
  return ("none" === o && s && "string" == typeof n ? o = _$$J(r, n) : be(o) && "string" == typeof n ? o = RL(n) : !Array.isArray(n) && be(n) && "string" == typeof o && (n = RL(o)), Array.isArray(n)) ? (null === n[0] && (n[0] = o), n) : [o, n];
}
export let $$eT0 = (e, r, n, a = {}) => h => {
  let d = rU(a, e) || {};
  let p = d.delay || a.delay || 0;
  let {
    elapsed = 0
  } = a;
  g -= f(p);
  let m = eC(r, e, n, d);
  let v = m[0];
  let y = m[m.length - 1];
  let b = eS(e, v);
  let O = eS(e, y);
  _$$$(b === O, `You are trying to animate ${e} from "${v}" to "${y}". ${v} is not an animatable value - to enable this animation set ${v} to a value animatable to ${y} via the \`style\` property.`);
  let x = {
    keyframes: m,
    velocity: r.getVelocity(),
    ...d,
    elapsed,
    onUpdate: e => {
      r.set(e);
      d.onUpdate && d.onUpdate(e);
    },
    onComplete: () => {
      h();
      d.onComplete && d.onComplete();
    }
  };
  if (!b || !O || o.current || !1 === d.type) return eg(x);
  if ("inertia" === d.type) return ev(x);
  D2(d) || (x = {
    ...x,
    ...ek(e, x)
  });
  x.duration && (x.duration = f(x.duration));
  x.repeatDelay && (x.repeatDelay = f(x.repeatDelay));
  let w = r.owner;
  let k = w && w.current;
  if (w && k instanceof HTMLElement && !w?.getProps().onUpdate) {
    let n = ef(r, e, x);
    if (n) return n;
  }
  return et(x);
};
export const O = $$eT0;