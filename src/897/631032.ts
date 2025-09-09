import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useState, useLayoutEffect, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { n as _$$n } from "../897/929006";
import { cJ } from "../figma_app/976749";
import { _P } from "../figma_app/2590";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { $j } from "../figma_app/178475";
import { nA } from "../905/203369";
import { y as _$$y } from "../897/572017";
import { A as _$$A } from "../897/590880";
import { $2, BG } from "../897/961984";
import { TN } from "../figma_app/334459";
import { parsePxNumber } from "../figma_app/783094";
import { Point } from "../905/736624";
import { yM } from "../905/640017";
import { Rk } from "../figma_app/483189";
import { PN, Vm, c7 } from "../figma_app/728075";
import { clamp } from "../figma_app/492908";
import { o as _$$o } from "../905/821217";
import O from "classnames";
import { _J, my, kM, im, xX, wH, F4 } from "../897/564585";
import { Y1, Zp, hD, J5 } from "../897/602108";
let N = "prototype_easing_editor--springInput--PEy5a";
let y = memo(function (e) {
  var t = parsePxNumber("208px");
  e.isNarrowPanel && (t = parsePxNumber("184px"));
  let n = (t - 100) / 2;
  let a = new Point(n, n + 100);
  let s = new Point(n + 100, n);
  let l = yM();
  let c = l?.colorIcon || PN;
  let p = l?.colorBg || Vm;
  let u = l?.colorIconTertiary || c7;
  let _ = l.colorIconBrand;
  let {
    tempBezierValues,
    setTempBezierValues,
    updateSelectionProperties
  } = e;
  let S = useRef(null);
  let [N, y] = useState(null);
  useLayoutEffect(() => {
    if (null !== N) {
      document.addEventListener("mousemove", R, !0);
      document.addEventListener("mouseup", C, !0);
      return () => {
        document.removeEventListener("mousemove", R, !0);
        document.removeEventListener("mouseup", C, !0);
      };
    }
  });
  useLayoutEffect(() => {
    S.current && L(S.current);
  });
  let R = e => {
    if (e.stopPropagation(), null === N || !S.current) return;
    let t = 1 === N.index ? new Point(0, 0) : new Point(1, 1);
    let i = f(P(new Point(e.clientX, e.clientY)), N.mouseDownT, t, n, 100);
    1 === N.index ? setTempBezierValues([i.x, i.y, tempBezierValues[2], tempBezierValues[3]]) : 2 === N.index && setTempBezierValues([tempBezierValues[0], tempBezierValues[1], i.x, i.y]);
  };
  let C = useHandleMouseEvent(e.recordingKey, "mouseup", e => {
    if (e.stopPropagation(), null === N || !S.current) return;
    let t = 1 === N.index ? new Point(0, 0) : new Point(1, 1);
    let i = f(P(new Point(e.clientX, e.clientY)), N.mouseDownT, t, n, 100);
    1 === N.index ? updateSelectionProperties({
      easingFunction: [i.x, i.y, tempBezierValues[2], tempBezierValues[3]]
    }) : 2 === N.index && updateSelectionProperties({
      easingFunction: [tempBezierValues[0], tempBezierValues[1], i.x, i.y]
    });
    y(null);
    $2.trigger("activateBezierAnimation");
  }, {
    recordMetadata: e => {
      let t = P(new Point(e.clientX, e.clientY));
      return {
        left: t.x,
        top: t.y
      };
    },
    playbackMetadata: e => {
      let t = D(new Point(e.left, e.top));
      return {
        clientX: t.x,
        clientY: t.y
      };
    }
  });
  let O = useHandleMouseEvent(e.recordingKey, "mousedown", e => {
    e.stopPropagation();
    let t = P(new Point(e.clientX, e.clientY));
    let i = x(new Point(tempBezierValues[0], tempBezierValues[1]), n, 100);
    let r = x(new Point(tempBezierValues[2], tempBezierValues[3]), n, 100);
    if (5 > Point.distance(t, i)) {
      y({
        index: 1,
        mouseDownT: 1
      });
      $2.trigger("resetBezierAnimation");
      return;
    }
    if (5 > Point.distance(t, r)) {
      y({
        index: 2,
        mouseDownT: 1
      });
      $2.trigger("resetBezierAnimation");
      return;
    }
    if (b(t, a, 10)) {
      updateSelectionProperties({
        easingFunction: [0, 0, tempBezierValues[2], tempBezierValues[3]]
      });
      return;
    }
    if (b(t, s, 10)) {
      updateSelectionProperties({
        easingFunction: [tempBezierValues[0], tempBezierValues[1], 1, 1]
      });
      return;
    }
    let [o, l] = M(t, a, i);
    if (o < 5) {
      y({
        index: 1,
        mouseDownT: l
      });
      $2.trigger("resetBezierAnimation");
      return;
    }
    let [c, p] = M(t, s, r);
    if (c < 5) {
      y({
        index: 2,
        mouseDownT: p
      });
      $2.trigger("resetBezierAnimation");
      return;
    }
    if (function (e, t, n, i) {
      let [r] = M(e, n, i);
      return r < 5;
    }(t, 0, a, s)) {
      updateSelectionProperties({
        easingFunction: [0, 0, 1, 1]
      });
      return;
    }
  }, {
    recordMetadata: e => {
      let t = P(new Point(e.clientX, e.clientY));
      return {
        left: t.x,
        top: t.y
      };
    },
    playbackMetadata: e => {
      let t = D(new Point(e.left, e.top));
      return {
        clientX: t.x,
        clientY: t.y
      };
    }
  });
  function D(e) {
    let t = S.current.getBoundingClientRect();
    return new Point(t.left + e.x, t.top + e.y);
  }
  function P(e) {
    let t = S.current.getBoundingClientRect();
    return new Point(e.x - t.left, e.y - t.top);
  }
  let L = e => {
    let i = e.getContext("2d");
    if (!i) return;
    let r = window.devicePixelRatio || 1;
    e.width = r * t;
    e.height = r * t;
    e.style.width = t + "px";
    e.style.height = t + "px";
    i.scale(r, r);
    let o = new Point(a.x, s.y);
    let l = new Point(s.x, a.y);
    let h = x(new Point(tempBezierValues[0], tempBezierValues[1]), n, 100);
    let m = x(new Point(tempBezierValues[2], tempBezierValues[3]), n, 100);
    i.lineWidth = 1;
    i.clearRect(0, 0, t, t);
    i.strokeStyle = u;
    i.beginPath();
    i.moveTo(o.x, o.y);
    i.lineTo(a.x, a.y);
    i.lineTo(l.x, l.y);
    i.stroke();
    i.beginPath();
    i.moveTo(a.x, a.y);
    i.lineTo(s.x, s.y);
    i.stroke();
    i.setLineDash([13, 6]);
    i.lineDashOffset = 6;
    i.beginPath();
    i.moveTo(o.x, o.y);
    i.lineTo(s.x, s.y);
    i.lineTo(l.x, l.y);
    i.stroke();
    i.fillStyle = c;
    i.beginPath();
    i.arc(a.x, a.y, 2, 0, 2 * Math.PI, !1);
    i.fill();
    i.beginPath();
    i.arc(s.x, s.y, 2, 0, 2 * Math.PI, !1);
    i.fill();
    i.strokeStyle = c;
    i.setLineDash([]);
    i.beginPath();
    i.moveTo(a.x, a.y);
    i.lineTo(h.x, h.y);
    i.stroke();
    i.beginPath();
    i.moveTo(s.x, s.y);
    i.lineTo(m.x, m.y);
    i.stroke();
    i.beginPath();
    i.moveTo(a.x, a.y);
    i.bezierCurveTo(h.x, h.y, m.x, m.y, s.x, s.y);
    i.stroke();
    let S = (e, t) => {
      switch (null !== N && e === N.index ? "SELECTED" : 1 === e ? 0 === tempBezierValues[0] && 0 === tempBezierValues[1] ? "RESET" : "NORMAL" : 1 === tempBezierValues[2] && 1 === tempBezierValues[3] ? "RESET" : "NORMAL") {
        case "RESET":
          i.strokeStyle = c;
          i.fillStyle = p;
          break;
        case "NORMAL":
          i.strokeStyle = p;
          i.fillStyle = c;
          break;
        case "SELECTED":
          i.strokeStyle = p;
          i.fillStyle = _;
      }
      i.lineWidth = 1;
      i.beginPath();
      i.arc(t.x, t.y, 4.5, 0, 2 * Math.PI);
      i.fill();
      i.stroke();
    };
    S(1, h);
    S(2, m);
  };
  let F = jsx("div", {
    className: e.isNarrowPanel ? "prototype_easing_editor--bezierCurveContainerNarrow--3m-Op prototype_easing_editor--bezierCurveContainer--Myl0y" : "prototype_easing_editor--bezierCurveContainer--Myl0y",
    children: jsx("canvas", {
      ref: S,
      onMouseDown: O
    })
  });
  return jsx(TN, {
    appendedClassName: Rk,
    children: F
  });
});
function f(e, t, n, i, r) {
  let a = new Point((e.x - i) / r, (i + r - e.y) / r);
  t = Math.max(.01, t);
  let o = a.subtract(n).divide(new Point(t, t)).add(n);
  return new Point(Math.max(Math.min(o.x, 1), 0), o.y);
}
function x(e, t, n) {
  return new Point(t + n * e.x, t + n * (1 - e.y));
}
function b(e, t, n) {
  return Point.distance(e, t) < n / 2;
}
function M(e, t, n) {
  let i = Point.dot(Point.subtract(e, t), Point.subtract(n, t)) / Point.distance(t, n) ** 2;
  i = Math.min(Math.max(i, 0), 1);
  let r = Point.add(t, Point.scale(i, Point.subtract(n, t)));
  return [Point.distance(e, r), i];
}
var D = O;
class P {
  constructor(e = 1, t = 0) {
    this.m00 = e;
    this.m10 = t;
  }
  translate(e) {
    this.m10 += e;
    return this;
  }
  scale(e) {
    this.m00 *= e;
    this.m10 *= e;
    return this;
  }
  static fromRangeMapping(e, t, n, i) {
    return new P().translate(-e).scale((i - n) / (t - e)).translate(n);
  }
  static fromConstant(e) {
    return new P().scale(0).translate(e);
  }
  static invert(e) {
    return new P(1 / e.m00, -e.m10 / e.m00);
  }
  transformValue(e) {
    return e * this.m00 + this.m10;
  }
  transformDirection(e) {
    return e * this.m00;
  }
}
class L {
  constructor(e, t) {
    this.transform1 = e;
    this.transform2 = t;
  }
  transformValue(e) {
    return this.transform2.transformValue(this.transform1.transformValue(e));
  }
}
class F {
  constructor({
    hardLimit: e,
    threshold: t,
    initialValue: n,
    slowFunction: i,
    slowFunctionInverse: r
  }) {
    this.slowFunction = i;
    this.slowFunctionInverse = r;
    this.mapToSlowSpace = P.fromRangeMapping(t, e, 0, -1);
    this.mapToSlowSpaceInverse = P.invert(this.mapToSlowSpace);
    this.initialValueInSlowSpace = this.mapToSlowSpace.transformValue(n);
  }
  transformValue(e) {
    let t = this.mapToSlowSpace.transformValue(e);
    t > this.initialValueInSlowSpace && (this.initialValueInSlowSpace = t);
    let n = this.slowFunctionInverse(this.initialValueInSlowSpace) - this.initialValueInSlowSpace;
    return this.mapToSlowSpaceInverse.transformValue(this.slowFunction(t + n));
  }
}
function U(e) {
  return e >= 0 ? e : 1 / (1 - e) - 1;
}
function j(e) {
  return e >= 0 ? e : 1 - 1 / (e + 1);
}
class B extends F {
  constructor({
    hardLimit: e,
    threshold: t,
    initialValue: n
  }) {
    super({
      hardLimit: e,
      threshold: t,
      initialValue: n,
      slowFunction: U,
      slowFunctionInverse: j
    });
  }
}
let K = "prototype_easing_spring_curve--springvisHandle--0mFVz";
let W = "prototype_easing_spring_curve--springvisHandleActive--5RaLT";
function k(e) {
  return {
    x: clamp(e.x, 0, 1),
    y: clamp(e.y, 0, 2)
  };
}
function z(e, t) {
  return _J(my(k(e), t), kM);
}
function H(e) {
  return {
    handle: e,
    offset: null
  };
}
function $(e) {
  let [t, n] = useState({
    width: e.isNarrowPanel ? 182 : 215,
    height: e.isNarrowPanel ? 114 : 128
  });
  let o = t.width;
  let s = t.height;
  let l = useRef(null);
  useEffect(() => {
    let e = new ResizeObserver(e => {
      for (let t of e) {
        let {
          width,
          height
        } = t.contentRect;
        n({
          width,
          height
        });
      }
    });
    l.current && e.observe(l.current);
    return () => {
      e.disconnect();
    };
  }, []);
  let c = P.fromRangeMapping(0, 1, 8, o - 8);
  let p = P.fromRangeMapping(2, 0, 8, s - 8);
  let u = P.invert(c);
  let _ = P.invert(p);
  let d = u.transformDirection(1);
  let [h, m] = useState(null);
  let S = useDispatch();
  let I = useCallback(e => {
    let t = l.current.getBoundingClientRect();
    return {
      x: u.transformValue(e.clientX - t.left),
      y: _.transformValue(e.clientY - t.top)
    };
  }, [u, _]);
  let w = e.value;
  let v = Y1(w);
  let A = v && k(im(w));
  let E = v && xX(w);
  useEffect(() => {
    if (!h) return;
    let t = t => {
      t.stopPropagation();
      let n = I(t);
      if (A) {
        if (h.offset) e.onInput(z({
          x: h.offset.x.transformValue(n.x),
          y: h.offset.y.transformValue(n.y)
        }, w)); else if ("SPRING_HANDLE" === h.handle) {
          let e = {
            x: new P().translate(A.x - n.x),
            y: new P().translate(A.y - n.y)
          };
          m({
            ...h,
            offset: {
              x: new L(e.x, new B({
                hardLimit: 0,
                threshold: .15,
                initialValue: A.x
              })),
              y: new L(e.y, new B({
                hardLimit: 2,
                threshold: 1.8,
                initialValue: A.y
              }))
            }
          });
        } else if ("SCALE_BACKGROUND" === h.handle) {
          let e = n.x > A.x ? {
            x: new P().scale(A.x / n.x),
            y: P.fromConstant(A.y)
          } : {
            x: new P().translate(A.x - n.x),
            y: P.fromConstant(A.y)
          };
          m({
            ...h,
            offset: {
              x: new L(e.x, new B({
                hardLimit: 0,
                threshold: .08,
                initialValue: A.x
              })),
              y: e.y
            }
          });
        } else if ("DURATION_HANDLE" === h.handle && E) {
          let e = {
            x: new P().translate(E - n.x).scale(A.x / E),
            y: P.fromConstant(A.y)
          };
          m({
            ...h,
            offset: {
              x: new L(e.x, new B({
                hardLimit: 0,
                threshold: .08,
                initialValue: A.x
              })),
              y: e.y
            }
          });
        }
      } else {
        e.onInput(z(n, w));
        m({
          ...h,
          handle: "SPRING_HANDLE"
        });
      }
    };
    let n = t => {
      t.stopPropagation();
      m(null);
      Y1(w) && e.onChange(w, h.handle);
    };
    let i = e => {
      e.stopPropagation();
    };
    let r = e => {
      e.stopPropagation();
    };
    document.addEventListener("pointermove", t);
    document.addEventListener("pointerup", n);
    document.addEventListener("mousemove", r, !0);
    document.addEventListener("mouseup", i, !0);
    return () => {
      document.removeEventListener("pointermove", t);
      document.removeEventListener("pointerup", n);
      document.removeEventListener("mousemove", r, !0);
      document.removeEventListener("mouseup", i, !0);
    };
  }, [h, w, A, E, e, S, I]);
  let g = useCallback(t => {
    let n = z(I(t), w);
    e.onChange(n, "DOUBLE_CLICK");
  }, [e, w, I]);
  let N = {
    cursor: "ew-resize"
  };
  return jsx(_$$o, {
    eventListeners: ["onMouseDown"],
    display: "contents",
    children: jsx("div", {
      className: "prototype_easing_spring_curve--springvisContainer--6iDnn",
      ref: l,
      children: jsxs("svg", {
        width: o,
        height: s,
        viewBox: `0 0 ${o} ${s}`,
        onDoubleClick: g,
        children: [jsx("line", {
          className: "prototype_easing_spring_curve--springvisGuideline--aYSpJ",
          x1: c.transformValue(0),
          y1: p.transformValue(1),
          x2: c.transformValue(1),
          y2: p.transformValue(1)
        }), v && A && E && jsxs(Fragment, {
          children: [jsx("path", {
            className: "prototype_easing_spring_curve--springvisSpringCurve--aOLEK",
            fill: "none",
            style: {
              transition: "none"
            },
            d: function (e, t, n, i) {
              let r = `M ${t.transformValue(0)},${n.transformValue(0)}`;
              for (let a = 0; a <= 1; a += i) {
                let i = Zp(e, a);
                if (isNaN(i)) return "";
                r += `L ${t.transformValue(a)},${n.transformValue(i)}`;
              }
              return r;
            }(w, c, p, d)
          }), jsx("rect", {
            className: D()(K, h && ("DURATION_HANDLE" === h.handle || "SCALE_BACKGROUND" === h.handle) && W),
            x: c.transformValue(E) - 2.5,
            y: p.transformValue(1) - 7.5,
            width: 5,
            height: 15,
            rx: 2.5,
            ry: 2.5
          }), jsx("circle", {
            className: D()(K, h && "SPRING_HANDLE" === h.handle && W),
            cx: c.transformValue(A.x),
            cy: p.transformValue(A.y),
            r: 5
          })]
        }), jsx("rect", {
          x: 0,
          y: 0,
          width: o,
          height: s,
          fill: "transparent",
          style: N,
          onPointerDown: () => {
            m(H("SCALE_BACKGROUND"));
            BG.trigger("resetSpringAnimation");
          }
        }), E && jsx(Fragment, {
          children: jsx("circle", {
            cx: c.transformValue(E),
            cy: p.transformValue(1),
            r: 20,
            fill: "transparent",
            style: N,
            onPointerDown: () => {
              m(H("DURATION_HANDLE"));
              BG.trigger("resetSpringAnimation");
            }
          })
        }), A && jsx(Fragment, {
          children: jsx("circle", {
            cx: c.transformValue(A.x),
            cy: p.transformValue(A.y),
            r: 20,
            fill: "transparent",
            onPointerDown: () => {
              m(H("SPRING_HANDLE"));
              BG.trigger("resetSpringAnimation");
            }
          })
        })]
      })
    })
  });
}
function X(e) {
  if (!Y1(e)) {
    let t = e[hD.STIFFNESS];
    let n = e[hD.DAMPING];
    e[hD.MASS] > 0 || (e[hD.MASS] = 1);
    t > 0 || (e[hD.STIFFNESS] = wH.MIN_STIFFNESS);
    n > 0 || (e[hD.DAMPING] = wH.MIN_DAMPING);
  }
  return e;
}
export let $$Y0 = memo(function (e) {
  let t = useDispatch();
  let n = cJ();
  let r = t => {
    e.updateSelectionProperties({
      easingFunction: t
    });
    $2.trigger("activateBezierAnimation");
  };
  let w = (n, i, r) => {
    let a = J5(n);
    e.updateSelectionProperties({
      easingFunction: n,
      transitionDuration: a
    });
    BG.trigger("restartSpringAnimation");
    r === yesNoTrackingEnum.YES && t(_P({
      name: "Prototype Spring Animations Set Custom Value",
      params: {
        editedValue: i,
        ...F4(n)
      }
    }));
  };
  let v = (t, n) => {
    let r = jsx($, {
      value: t,
      onInput: n,
      onChange: (e, t) => {
        w(e, t, yesNoTrackingEnum.YES);
      },
      recordingKey: generateRecordingKey(e, "springCurve"),
      isNarrowPanel: e.isNarrowPanel
    });
    return jsx(TN, {
      appendedClassName: Rk,
      children: r
    });
  };
  let A = n => {
    let r = jsx($j, {
      bigNudgeAmount: 10,
      className: N,
      "data-tooltip": getI18nString("proto.easing_editor.spring_stiffness"),
      "data-tooltip-type": Ib.TEXT,
      dispatch: t,
      id: "easing-editor-spring-stiffness-input",
      max: wH.MAX_STIFFNESS,
      min: wH.MIN_STIFFNESS,
      onValueChange: (e, t) => {
        let i = X(n.slice());
        i[hD.STIFFNESS] = e;
        w(i, "STIFFNESS", t);
      },
      recordingKey: generateRecordingKey(e, "springStiffnessInput"),
      smallNudgeAmount: 1,
      tooltipForScreenReadersOnly: !0,
      value: n[hD.STIFFNESS]
    });
    return jsx(_$$A, {
      label: getI18nString("proto.easing_editor.spring_stiffness"),
      input: r
    });
  };
  let g = n => {
    let r = jsx($j, {
      bigNudgeAmount: 10,
      className: N,
      "data-tooltip": getI18nString("proto.easing_editor.spring_damping"),
      "data-tooltip-type": Ib.TEXT,
      dispatch: t,
      id: "easing-editor-spring-damping-input",
      max: wH.MAX_DAMPING,
      min: wH.MIN_DAMPING,
      onValueChange: (e, t) => {
        let i = X(n.slice());
        i[hD.DAMPING] = e;
        w(i, "DAMPING", t);
      },
      recordingKey: generateRecordingKey(e, "springDampingInput"),
      smallNudgeAmount: 1,
      tooltipForScreenReadersOnly: !0,
      value: n[hD.DAMPING]
    });
    return jsx(_$$A, {
      label: getI18nString("proto.easing_editor.spring_damping"),
      input: r
    });
  };
  let f = n => {
    let r = jsx($j, {
      bigNudgeAmount: 10,
      className: N,
      "data-tooltip": getI18nString("proto.easing_editor.spring_mass"),
      "data-tooltip-type": Ib.TEXT,
      dispatch: t,
      id: "easing-editor-spring-mass-input",
      max: wH.MAX_MASS,
      min: wH.MIN_MASS,
      onValueChange: (e, t) => {
        let i = X(n.slice());
        i[hD.MASS] = e;
        w(i, "MASS", t);
      },
      recordingKey: generateRecordingKey(e, "springMassInput"),
      smallNudgeAmount: 1,
      tooltipForScreenReadersOnly: !0,
      value: n[hD.MASS]
    });
    return jsx(_$$A, {
      label: getI18nString("proto.easing_editor.spring_mass"),
      input: r
    });
  };
  let x = t => {
    let n = jsx(nA, {
      className: "prototype_easing_editor--input--2fhlq",
      formatter: _$$n,
      property: t,
      onChange: r,
      recordingKey: generateRecordingKey(e, "cubicBezierFunctionInput")
    });
    return jsx(_$$A, {
      label: getI18nString("proto.easing_behavior.bezier"),
      input: n
    });
  };
  let b = (t, n) => jsx(y, {
    tempBezierValues: t,
    setTempBezierValues: n,
    updateSelectionProperties: e.updateSelectionProperties,
    recordingKey: generateRecordingKey(e, "cubicBezierCurve"),
    isNarrowPanel: e.isNarrowPanel
  });
  return jsx(_$$y.Consumer, {
    children: ([t, r]) => jsx("div", {
      children: "CUSTOM_BEZIER" === e.easingType ? n ? jsxs(Fragment, {
        children: [x(t), b(t, r)]
      }) : jsxs(Fragment, {
        children: [b(t, r), x(t)]
      }) : "CUSTOM_SPRING" === e.easingType ? n ? jsxs(Fragment, {
        children: [A(t), g(t), f(t), v(t, r)]
      }) : jsxs(Fragment, {
        children: [v(t, r), A(t), g(t), f(t)]
      }) : null
    })
  });
});
export const R = $$Y0;
