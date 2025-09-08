import { d as _$$d } from "../905/758967";
import { subscribeObservable } from "../figma_app/84367";
import { jsx } from "react/jsx-runtime";
import { Vm, ks } from "../figma_app/838407";
function a(e) {
  return function (t) {
    return t < .5 ? (t / 2 ** (e - 1)) ** (1 / e) : 1 - (2 - 2 * t) ** (1 / e) / 2;
  };
}
function s(e) {
  return function (t) {
    return t ** (1 / e);
  };
}
function o(e) {
  return function (t) {
    return 1 - (1 - t) ** (1 / e);
  };
}
let l = {
  easeInSine: e => 2 * Math.acos(1 - e) / Math.PI,
  easeOutSine: e => 2 * Math.asin(e) / Math.PI,
  easeInOutSine: e => Math.acos(-2 * e + 1) / Math.PI,
  easeInQuad: s(2),
  easeOutQuad: o(2),
  easeInOutQuad: a(2),
  easeInCubic: s(3),
  easeOutCubic: o(3),
  easeInOutCubic: a(3),
  easeInQuart: s(4),
  easeOutQuart: o(4),
  easeInOutQuart: a(4),
  easeInQuint: s(5),
  easeOutQuint: o(5),
  easeInOutQuint: a(5),
  easeInExpo: e => 0 === e ? 0 : (Math.log2(e) + 10) / 10,
  easeOutExpo: e => 1 === e ? 1 : -Math.log2(1 - e) / 10,
  easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? (Math.log2(2 * e) + 10) / 20 : (10 - Math.log2(2 - 2 * e)) / 20,
  easeInCirc: e => Math.sqrt(1 - (1 - e) ** 2),
  easeOutCirc: e => 1 - Math.sqrt(1 - e ** 2),
  easeInOutCirc: e => e < .5 ? Math.sqrt(1 - (1 - 2 * e) ** 2) / 2 : (2 - Math.sqrt(1 - (2 * e - 1) ** 2)) / 2
};
let d = {
  in: {
    sine: l.easeInSine,
    quad: l.easeInQuad,
    cubic: l.easeInCubic,
    quart: l.easeInQuart,
    quint: l.easeInQuint,
    expo: l.easeInExpo,
    circ: l.easeInCirc
  },
  out: {
    sine: l.easeOutSine,
    quad: l.easeOutQuad,
    cubic: l.easeOutCubic,
    quart: l.easeOutQuart,
    quint: l.easeOutQuint,
    expo: l.easeOutExpo,
    circ: l.easeOutCirc
  },
  inOut: {
    sine: l.easeInOutSine,
    quad: l.easeInOutQuad,
    cubic: l.easeInOutCubic,
    quart: l.easeInOutQuart,
    quint: l.easeInOutQuint,
    expo: l.easeInOutExpo,
    circ: l.easeInOutCirc
  }
};
function p() {
  return jsx("div", {
    className: "msal_animation--overlay--nWZ4r"
  });
}
class m {
  constructor({
    rootNodes: e,
    msalFrames: t,
    order: i,
    timing: n,
    isSticky: r,
    duration: a,
    ease: s
  }) {
    this.addOverlay = e => {
      if (e.removed) {
        this.cancel();
        return;
      }
      this.activeOverlays.add(e.id);
      Vm(e.id, jsx(p, {}));
    };
    this.removeOverlay = e => {
      if (e.removed) {
        this.cancel();
        return;
      }
      this.isSticky || (this.activeOverlays.$$delete(e.id), ks(e.id));
    };
    this.removeAllOverlays = () => {
      Array.from(this.activeOverlays).forEach(ks);
    };
    this.shouldSkipNode = e => !this.msalFrames.has(e.id);
    this.activeOverlays = new Set();
    this.rootNodes = e;
    this.msalFrames = new Set(t.map(e => e.id));
    this.rootNodes.forEach(e => this.msalFrames.add(e.id));
    this.isCanceled = !1;
    this.cancelFunctions = [];
    this.order = i;
    this.timing = n;
    this.isSticky = r;
    this.duration = a;
    this.ease = s;
    this.animateIn = this.animateIn.bind(this);
    this.animateOut = this.animateOut.bind(this);
    this.cancel = this.cancel.bind(this);
    this.resolve = () => {};
    this.promise = new Promise(e => this.resolve = e);
  }
  animateIn(e) {
    return {
      type: "ANIMATION",
      duration: 1,
      exec: () => {
        this.addOverlay(e);
      },
      start: 0,
      data: {
        addNode: e.id
      }
    };
  }
  animateOut(e) {
    return {
      type: "ANIMATION",
      duration: 0,
      exec: () => {
        this.removeOverlay(e);
      },
      start: 0,
      data: {
        removeNode: e.id
      }
    };
  }
  animate() {
    Promise.all(this.rootNodes.map(e => {
      let {
        cancel,
        animationFinish
      } = function (e) {
        let t = Array.from(e.keys());
        let i = [];
        let n = !1;
        for (let r = 0; r < t.length; r++) {
          let a = t[r];
          let s = t[r + 1];
          let o = e.get(a) ?? [];
          let l = void 0 !== s ? s - a : o.reduce((e, t) => Math.max(e, t.duration), 0);
          let d = () => Promise.all([new Promise(e => setTimeout(e, l)), ...o.map(e => {
            n || e.exec();
          })]).then(() => {});
          i.push(d);
        }
        async function r() {
          let e = i.shift();
          e && (await e(), await r());
        }
        return {
          animationFinish: r(),
          cancel: function () {
            n = !0;
            i = [];
          }
        };
      }(function (e, t, i) {
        let n = new Map();
        let r = Array.from(e.keys());
        let a = r[r.length - 1];
        let s = e.get(a) ?? [];
        let o = a + s.reduce((e, t) => Math.max(e, t.duration), 0);
        let l = e => t(e / o) * i;
        e.forEach((e, t) => {
          let i = l(t);
          n.set(i, e.map(e => {
            let n = l(t + e.duration);
            return {
              ...e,
              duration: n - i
            };
          }));
        });
        return n;
      }(function e(t, i = new Map()) {
        let {
          animations,
          timing
        } = t;
        let a = t.start;
        for (let t of animations) (function (t) {
          if (t.start = a, "ANIMATION_STACK" === t.type) e(t, i);else {
            let e = i.get(t.start) ?? [];
            i.set(t.start, e);
            e.push(t);
          }
          "SERIES" === timing && (a += t.duration);
        })(t);
        return i;
      }(function e({
        node: t,
        order: i,
        timing: n,
        shouldSkipNode: r,
        animateIn: a,
        animateOut: s
      }) {
        let o = ("children" in t ? t.children : []).map(t => e({
          node: t,
          order: i,
          timing: n,
          shouldSkipNode: r,
          animateIn: a,
          animateOut: s
        }));
        let l = o.reduce((e, t) => "PARALLEL" === n ? Math.max(e, t.duration) : e + t.duration, 0);
        let d = {
          animations: o,
          timing: n,
          type: "ANIMATION_STACK",
          duration: l,
          start: 0
        };
        if (r(t)) return d;
        let c = "SERIES" === n ? o : [d];
        let u = a(t);
        let p = s(t);
        switch (i) {
          case "PREFIX":
            c.push(u);
            c.push(p);
            break;
          case "INFIX":
            c.unshift(u);
            c.push(p);
            break;
          case "POSTFIX":
            c.unshift(p);
            c.unshift(u);
        }
        return {
          animations: c,
          timing: "SERIES",
          type: "ANIMATION_STACK",
          duration: l + u.duration + p.duration,
          start: 0
        };
      }({
        node: e,
        order: this.order,
        timing: this.timing,
        shouldSkipNode: this.shouldSkipNode,
        animateIn: this.animateIn,
        animateOut: this.animateOut
      })), this.ease, this.duration));
      this.cancelFunctions.push(cancel);
      return animationFinish;
    })).then(this.resolve).catch(this.resolve);
    return this.promise;
  }
  cancel() {
    this.cancelFunctions.forEach(e => e());
    this.cancelFunctions = [];
    this.removeAllOverlays();
    this.resolve();
  }
}
let h = ["mousedown", "keydown"];
export function $$g0(e, t) {
  let i = new m({
    rootNodes: e,
    msalFrames: t,
    order: "PREFIX",
    timing: "SERIES",
    isSticky: !0,
    duration: 750,
    ease: d.inOut.sine
  });
  function a() {
    h.forEach(e => {
      document.removeEventListener(e, a, {
        capture: !0
      });
    });
    i.cancel();
  }
  subscribeObservable(_$$d().activeCanvasCurrentZoom, {
    onChangeImmediate: i.cancel
  });
  h.forEach(e => {
    document.addEventListener(e, a, {
      once: !0,
      capture: !0
    });
  });
  return i.animate();
}
export const z = $$g0;