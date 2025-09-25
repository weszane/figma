import { jsx } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { parsePxNumber } from "../figma_app/783094";
import { useSelectionPropertyValue } from "../905/275640";
import { h as _$$h } from "../figma_app/648675";
let d = parsePxNumber("24px");
let c = parsePxNumber("8px");
let u = parsePxNumber("5px");
let p = parsePxNumber("6px");
let _ = e => (.01 > Math.abs(e) ? 0 : +e.toPrecision(4)).toString();
let h = {
  inputHeight: d,
  borderRadius: u,
  connectorHeight: p,
  distanceBetweenInputs: c,
  formatter: _
};
function m(e, t) {
  let r = [e[0]];
  let n = [e[e.length - 1]];
  let i = [];
  for (; e.length > 1;) {
    for (let a = 0; a < e.length - 1; a++) {
      let s = function (e, t, r) {
        var n;
        var i;
        return [(n = e[0]) + (t[0] - n) * r, (i = e[1]) + (t[1] - i) * r];
      }(e[a], e[a + 1], t);
      i.push(s);
      0 === a && r.push(s);
      a === e.length - 2 && n.unshift(s);
    }
    e = i;
    i = [];
  }
  return [r, n];
}
function g(e, t) {
  let r = e.shift();
  return `q ${e.map(([e, n]) => [t(e - r[0]), t(n - r[1])].join(" ")).join(" ")}`;
}
function f({
  inputHeight: e,
  borderRadius: t,
  distanceBetweenInputs: r,
  connectorHeight: n,
  formatter: i,
  t: a
}) {
  let s = Math.min(t, t * a);
  let o = r * a;
  let l = {
    x: s,
    y: t - Math.sqrt(t ** 2 - s ** 2)
  };
  let d = {
    x: Math.sqrt(t ** 2 - s ** 2),
    y: s
  };
  let c = ((e - (e + (n - e) * a)) / 2 - l.y) / d.y;
  d.x *= c;
  d.y *= c;
  let u = d.x > o / 4;
  if (u) {
    let e = o / 2 / d.x;
    d.x *= e;
    d.y *= e;
  }
  d.y < 0 && (d.y *= -1, d.x *= -1);
  let [p, _] = m([[0, 0], [o / 2, d.y], [o, 0]], .5);
  let [h, f] = m([[0, 0], [-o / 2, -d.y], [-o, 0]], .5);
  let E = g(p, i) + g(_, i);
  let y = g(h, i) + g(f, i);
  let b = `q ${i(d.x)} ${i(d.y)} ${i(o / 2)} ${i(d.y)} q ${i(o / 2 - d.x)} 0 ${i(o / 2)} ${i(-d.y)}`;
  let T = `q ${i(-d.x)} ${i(-d.y)} ${i(-o / 2)} ${i(-d.y)} q ${i(d.x - o / 2)} 0 ${i(-o / 2)} ${i(d.y)}`;
  let I = (r + 2 * t - 2 * l.x - o) / 2 + 0;
  let S = "q 0 0 0 0 q 0 0 0 0";
  return `M 0 0h ${i(I)}a ${i(t)} ${i(t)} 0 0 1 ${i(l.x)} ${i(l.y)}` + (0 === a ? S : u ? E : b) + `a ${i(t)} ${i(t)} 0 0 1 ${i(l.x)} ${i(-l.y)}h ${i(I)}v ${e - 0}h ${i(-I)}a ${i(t)} ${i(t)} 0 0 1 ${i(-l.x)} ${i(-l.y)}` + (0 === a ? S : u ? y : T) + `a ${i(t)} ${i(t)} 0 0 1 ${i(-l.x)} ${i(l.y)}h ${i(-I)}z`;
}
let {
  distanceBetweenInputs,
  borderRadius,
  inputHeight
} = h;
let T = borderRadius - inputHeight / 2;
let I = -distanceBetweenInputs / 2 - borderRadius;
let S = (-I - Math.sqrt(I ** 2 - 4 * T * (distanceBetweenInputs / 2))) / (2 * T);
function v({
  inputHeight: e,
  borderRadius: t,
  distanceBetweenInputs: r,
  formatter: n,
  forceSeparation: i,
  t: a
}) {
  let s = t - 0 + (e / 2 - t + 0) * a;
  let o = r + ((r - 2 * s) / 2 - r) * a;
  let l = r + t - s - o + 0;
  if (!(!i && o < r / 2)) return `M 0 0h ${n(l)}a ${n(s)} ${n(s)} 0 0 1 ${n(s)} ${n(s)}v ${n(e - 2 * s - 0)}a ${n(s)} ${n(s)} 0 0 1 ${n(-s)} ${n(s)}h ${n(-l)}zM ${r + 2 * t + 0} 0h ${n(-l)}a ${n(s)} ${n(s)} 0 0 0 ${n(-s)} ${n(s)}v ${n(e - 2 * s - 0)}a ${n(s)} ${n(s)} 0 0 0 ${n(s)} ${n(s)}h ${n(l)}z`;
  let d = r / 2 - o;
  let c = s - d;
  let u = {
    x: c,
    y: s - Math.sqrt(s ** 2 - c ** 2)
  };
  let p = {
    x: Math.sqrt(s ** 2 - c ** 2),
    y: c
  };
  let _ = d / 2 / p.x;
  p.x *= _;
  p.y *= _;
  1 === a && (u.x = 0, u.y = 0, p.x = 0, p.y = 0);
  let h = 2 * u.x + d;
  let m = `a ${n(s)} ${n(s)} 0 0 1 ${n(u.x)} ${n(u.y)}q ${n(d / 2)} ${n(p.y)} ${n(d)} 0a ${n(s)} ${n(s)} 0 0 1 ${n(u.x)} ${n(-u.y)}`;
  let g = `a ${n(s)} ${n(s)} 0 0 1 ${n(-u.x)} ${n(-u.y)}q ${n(-d / 2)} ${n(-p.y)} ${n(-d)} 0a ${n(s)} ${n(s)} 0 0 1 ${n(-u.x)} ${n(u.y)}`;
  let f = (r + 2 * t - h) / 2 + 0;
  return `M 0 0h ${n(f)}` + m + `h ${n(f)}v ${n(e - 0)}h ${n(-f)}` + g + `h ${n(-f)}z`;
}
function A(e) {
  return Math.sin(e * Math.PI / 2);
}
function x(e) {
  return 1 === e ? 1 : 1 - 2 ** (-10 * e);
}
A.inverse = function (e) {
  return 2 * Math.asin(e) / Math.PI;
};
x.inverse = function (e) {
  return 1 === e ? 1 : -(Math.log(1 - e) / Math.log(2) * 1) / 10;
};
let N = {
  path: e => f({
    ...h,
    t: e
  }),
  duration: .4,
  ease: function (e) {
    let t = 2 * Math.PI / 3;
    return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -14 * e) * Math.sin((6 * e - .75) * t) + 1;
  }
};
let C = {
  path: e => f({
    ...h,
    t: 1 - e
  }),
  duration: .2,
  ease: A
};
let w = {
  path: e => v({
    ...h,
    t: e
  }),
  duration: .2,
  ease: A,
  extraFrames: [{
    time: A.inverse(S),
    frame: v({
      ...h,
      t: S,
      forceSeparation: !0
    })
  }, {
    time: A.inverse(S),
    frame: v({
      ...h,
      t: S
    })
  }]
};
let O = {
  path: e => v({
    ...h,
    t: 1 - e
  }),
  duration: .2,
  ease: x,
  extraFrames: [{
    time: x.inverse(1 - S),
    frame: v({
      ...h,
      t: S
    })
  }, {
    time: x.inverse(1 - S),
    frame: v({
      ...h,
      t: S,
      forceSeparation: !0
    })
  }]
};
function R(e) {
  let {
    animations,
    f,
    shouldAnimateIn
  } = e;
  let {
    currentTime,
    keyFrames,
    keyTimes
  } = useMemo(() => {
    let e = [];
    let r = [];
    let n = 0;
    animations.forEach(t => {
      let {
        ease,
        duration,
        path,
        extraFrames
      } = t;
      let l = function (e) {
        let t = [];
        for (let e = 0; e < 11; e++) t.push(.1 * e);
        return t;
      }(0);
      ease.inverse && (l = l.map(ease.inverse));
      l.forEach(t => {
        for (; extraFrames?.length && extraFrames[0].time < t;) {
          let t = extraFrames.shift();
          e.push(t.time * duration + n);
          r.push(t.frame);
        }
        e.push(t * duration + n);
        r.push(path(ease(t)));
      });
      n += duration;
    });
    return {
      currentTime: n,
      animations,
      keyFrames: r,
      keyTimes: e
    };
  }, [animations]);
  return jsx("svg", {
    viewBox: `0 0 ${c + 2 * u} ${d}`,
    style: {
      height: `${d}px`
    },
    children: jsx("path", {
      className: "arl_input_connector--svgConnector--CbRbk",
      strokeWidth: 0,
      d: shouldAnimateIn ? animations[0].path(0) : animations[animations.length - 1].path(1),
      children: shouldAnimateIn && jsx("animate", {
        attributeName: "d",
        values: keyFrames.join(";"),
        dur: `${currentTime}s`,
        keyTimes: keyTimes.map(e => f(e / currentTime)).join(";"),
        fill: "freeze"
      })
    })
  });
}
function L({
  shouldAnimateIn: e
}) {
  return jsx(R, {
    animations: useMemo(() => [w, N], []),
    f: _,
    shouldAnimateIn: e
  }, "in");
}
function P({
  shouldAnimateIn: e
}) {
  return jsx(R, {
    animations: useMemo(() => [C, O], []),
    f: _,
    shouldAnimateIn: e
  }, "out");
}
export function $$D0({
  shouldAnimateIn: e = !0
}) {
  let t = _$$h();
  let r = useSelectionPropertyValue("aspectRatioLockToggled");
  let i = useSelector(e => e.mirror.sceneGraphSelection);
  let s = k(i);
  let d = k(r);
  let c = !!(e && d !== r && s === i);
  return jsx("div", {
    className: "arl_input_connector--svgContainer--9epjn",
    children: t ? jsx(L, {
      shouldAnimateIn: c
    }) : jsx(P, {
      shouldAnimateIn: c
    })
  });
}
function k(e) {
  let t = useRef(e);
  let r = t.current;
  t.current = e;
  return r;
}
export const W = $$D0;