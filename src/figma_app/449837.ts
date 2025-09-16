import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, createContext, useMemo, useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { clamp } from "../figma_app/492908";
import { assertNotNullish } from "../figma_app/95419";
import { k } from "../905/443820";
import { IconButton } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { O as _$$O } from "../905/487602";
import { H } from "../905/404982";
import { z } from "../905/653569";
import { s as _$$s } from "../905/583953";
import { atom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import m from "classnames";
import { wY, cU } from "../figma_app/708845";
import { h as _$$h } from "../905/207101";
import { KeyCodes } from "../905/63728";
import { Point } from "../905/736624";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Q1 } from "../905/619652";
import { Z } from "../905/823863";
import { A as _$$A } from "../2854/952200";
import { A as _$$A2 } from "../1617/954184";
var g = m;
let A = "zoom_pan--zoomSelectorContainer--GvvA8";
let x = "zoom_pan--zoomSelectorButtonContainer--jVp1Q";
let w = e => assertNotNullish(useContext(O), `Cannot use ${e} component outside of a ZoomPanContext!`);
let O = createContext(null);
let $$R5 = atom(void 0);
function L(e, t) {
  let r = Number.MAX_VALUE;
  for (let n of e) {
    let {
      containerDimensions,
      paddingPixels,
      imageWidth,
      imageHeight
    } = n;
    let o = t ? t.width : imageWidth;
    let l = t ? t.height : imageHeight;
    if (o <= 0 || l <= 0) continue;
    let d = containerDimensions.width - 2 * paddingPixels;
    let c = containerDimensions.height - 2 * paddingPixels;
    d <= 0 || c <= 0 || (r = Math.min(r, 100 * Math.min(d / o, c / l)));
  }
  return r;
}
function P(e, t) {
  return clamp(e, t[0] || 10, t[t.length - 1] || 400);
}
function D(e, t, r) {
  return e ? P(t, r) : Math.min(t, 100);
}
export function $$k3(e) {
  let {
    zoomOnMousePointer,
    canFitZoomExceed100 = !1
  } = e;
  let s = useMemo(() => e.zoomPercentageOptions.sort((e, t) => e - t), [e.zoomPercentageOptions]);
  let o = e.initialZoomPercentage ?? 100;
  let l = {
    x: e.initialX ?? 0,
    y: e.initialY ?? 0
  };
  let [d, c] = useState(!0);
  let [u, p] = useState(!0);
  let [_, m] = useState({
    zoomPercentage: o,
    position: l
  });
  let {
    zoomPercentage,
    position
  } = _;
  let y = useCallback(e => {
    m(t => ({
      ...t,
      zoomPercentage: e
    }));
  }, []);
  let b = useCallback(e => {
    m(t => ({
      ...t,
      position: e
    }));
  }, []);
  let T = useAtomWithSubscription($$R5);
  let [I, S] = useState(!1);
  let [A, x] = useState(null);
  let [N, C] = useState(new Set());
  let [w, k] = useState(!1);
  useEffect(() => {
    if (w && (!d || 0 === N.size || T)) {
      p(!1);
      return;
    }
    let e = L(N);
    e < Number.MAX_VALUE && (y(D(canFitZoomExceed100, e, s)), k(!0), p(!1));
  }, [d, N, w, T, y, u, s, canFitZoomExceed100]);
  useEffect(() => {
    if (!T) return;
    let e = D(canFitZoomExceed100, L(N, T), s);
    b({
      x: -(T.x + T.width / 2),
      y: -(T.y + T.height / 2)
    });
    c(!1);
    y(e);
  }, [T, N, y, b, s, canFitZoomExceed100]);
  useLayoutEffect(() => {
    p(!0);
    T || (c(!0), y(o), b(l));
  }, [e.resetStateOnChangeValue, y]);
  let M = useCallback(e => {
    let r;
    let n;
    let i;
    let a;
    for (let {
      containerDimensions,
      imageWidth,
      imageHeight
    } of (r = n = Number.MIN_SAFE_INTEGER, i = a = Number.MAX_SAFE_INTEGER, N)) {
      if (imageWidth <= 0 && imageHeight <= 0) continue;
      let d = (containerDimensions.width + imageWidth * e / 100 - 10) / 2;
      let c = (containerDimensions.height + imageHeight * e / 100 - 10) / 2;
      zoomOnMousePointer ? (r = Math.max(Number.MIN_SAFE_INTEGER, r !== Number.MIN_SAFE_INTEGER ? Math.min(r, -d) : -d), n = Math.max(Number.MIN_SAFE_INTEGER, n !== Number.MIN_SAFE_INTEGER ? Math.min(n, -c) : -c), i = Math.min(Number.MAX_SAFE_INTEGER, i !== Number.MAX_SAFE_INTEGER ? Math.max(i, d) : d), a = Math.min(Number.MAX_SAFE_INTEGER, a !== Number.MAX_SAFE_INTEGER ? Math.max(a, c) : c)) : (r = Math.max(r, -d), n = Math.max(n, -c), i = Math.min(i, d), a = Math.min(a, c));
    }
    return {
      xmin: r,
      ymin: n,
      xmax: i,
      ymax: a
    };
  }, [N, zoomOnMousePointer]);
  useEffect(() => {
    let {
      xmin,
      ymin,
      xmax,
      ymax
    } = M(zoomPercentage);
    m(i => ({
      ...i,
      position: {
        x: clamp(i.position.x, xmin, xmax),
        y: clamp(i.position.y, ymin, ymax)
      }
    }));
  }, [zoomPercentage, M]);
  let [F, j] = useState(!1);
  let U = e => {
    j(e.ctrlKey);
  };
  _$$h(() => (document.addEventListener("keydown", U), document.addEventListener("keyup", U), () => {
    document.removeEventListener("keyup", U);
    document.removeEventListener("keydown", U);
  }));
  let B = e => {
    e.preventDefault();
    S(!1);
    x(null);
  };
  let G = useCallback(e => {
    if (e.stopPropagation(), e.preventDefault(), e.ctrlKey || e.metaKey) {
      c(!1);
      m(({
        position: r,
        zoomPercentage: n
      }) => {
        let i = P(n / 100 * Z(e, F) * 100, s);
        if (zoomOnMousePointer) {
          let t = Array.from(N).find(t => t.containerPosition.x < e.clientX && t.containerPosition.y < e.clientY && t.containerPosition.x + t.containerDimensions.width > e.clientX && t.containerPosition.y + t.containerDimensions.height > e.clientY);
          if (t) {
            let s = e.clientX - t.containerPosition.x - t.containerDimensions.width / 2;
            let o = e.clientY - t.containerPosition.y - t.containerDimensions.height / 2;
            let l = (s - r.x) * (1 - i / n);
            let d = (o - r.y) * (1 - i / n);
            let {
              xmin,
              ymin,
              xmax,
              ymax
            } = M(i);
            return {
              zoomPercentage: i,
              position: {
                x: clamp(r.x + l, xmin, xmax),
                y: clamp(r.y + d, ymin, ymax)
              }
            };
          }
        }
        return {
          zoomPercentage: i,
          position: r
        };
      });
      return !1;
    }
    m(({
      position: t,
      zoomPercentage: r
    }) => {
      let {
        xmin,
        ymin,
        xmax,
        ymax
      } = M(r);
      return {
        zoomPercentage: r,
        position: {
          x: clamp(t.x - e.deltaX, xmin, xmax),
          y: clamp(t.y - e.deltaY, ymin, ymax)
        }
      };
    });
  }, [N, s, M, F, zoomOnMousePointer]);
  useEffect(() => (document.addEventListener("mouseup", B), () => {
    document.removeEventListener("mouseup", B);
  }));
  let V = useRef(null);
  useEffect(() => {
    let e = V.current;
    if (e) {
      e.addEventListener("wheel", G, {
        capture: !0,
        passive: !1
      });
      return () => e.removeEventListener("wheel", G, {
        capture: !0
      });
    }
  }, [G]);
  return jsx("div", {
    ref: V,
    role: "figure",
    onMouseUp: B,
    className: e.className,
    children: jsx(O.Provider, {
      value: {
        zoomPercentageOptions: s,
        zoomPercentage,
        position,
        containers: N,
        isFitZoom: d,
        isLoading: u,
        setZoomPercentage: y,
        setPosition: b,
        setContainers: C,
        setIsFitZoom: c,
        setIsLoading: p,
        initialZoomPercentage: o,
        handleMouseDown: e => {
          e.preventDefault();
          S(!0);
          x({
            x: e.clientX - position.x,
            y: e.clientY - position.y
          });
        },
        handleMouseUp: B,
        handleMouseMove: e => {
          if (I && null !== A) {
            e.stopPropagation();
            let {
              xmin,
              ymin,
              xmax,
              ymax
            } = M(zoomPercentage);
            b({
              x: clamp(e.clientX - A.x, xmin, xmax),
              y: clamp(e.clientY - A.y, ymin, ymax)
            });
          }
        }
      },
      children: e.children
    })
  });
}
function M({
  canvasRef: e,
  containerRef: t,
  containerStyle: r,
  containerClassName: i,
  canvasClassName: a,
  handleMouseMove: s,
  handleMouseDown: l,
  isDrawn: d,
  customLoadingIndicator: c,
  children: u
}) {
  return jsxs("div", {
    className: g()(i, "zoom_pan--zoomPanCanvasContainer--jmggV"),
    style: r,
    ref: t,
    onMouseDown: l,
    onMouseMove: s,
    children: [!d && (c ?? jsx("div", {
      className: "zoom_pan--loading--4jFeo",
      children: jsx(k, {
        size: "sm"
      })
    })), jsx("canvas", {
      ref: e,
      className: g()(a, "zoom_pan--zoomPanCanvasCanvas--Oue5T")
    }), u && jsx("div", {
      style: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        overflow: "clip"
      },
      children: u
    })]
  });
}
export function $$F1(e) {
  let {
    Overlay
  } = e;
  let {
    data,
    width,
    height,
    scale
  } = e.image;
  let {
    data: _data
  } = e.differenceImage ?? {
    data: null
  };
  let d = useRef(null);
  let c = wY(d) ?? cU;
  let u = useRef(null);
  let p = 24 * scale;
  let {
    zoomPercentage,
    position,
    setContainers,
    handleMouseDown,
    handleMouseMove,
    isLoading
  } = w("ZoomPanCanvasContainer");
  let [I, v] = useState(!1);
  useEffect(() => {
    let t = d.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0
    };
    let r = {
      containerPosition: {
        x: t.x,
        y: t.y
      },
      containerDimensions: c,
      imageNode: u.current,
      imageHeight: height / scale,
      imageWidth: width / scale,
      paddingPixels: e.paddingPixels ?? 10
    };
    setContainers(e => new Set([...e, r]));
    return () => {
      setContainers(e => (e.$$delete(r), e));
    };
  }, [setContainers, height, width, scale, c, e.paddingPixels]);
  let A = useMemo(() => data instanceof Uint8Array ? Q1(data, new Point(width, height)) : null, [data, width, height]);
  let x = Math.floor(width * zoomPercentage / 100);
  let N = Math.floor(height * zoomPercentage / 100);
  let C = useMemo(() => {
    let e = document.createElement("canvas");
    e.width = Math.floor(width * zoomPercentage / 100) + 2 * p;
    e.height = Math.floor(height * zoomPercentage / 100) + 2 * p;
    let t = e.getContext("2d");
    if (100 !== zoomPercentage && 200 !== zoomPercentage ? (t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "medium") : t.imageSmoothingEnabled = !1, t.clearRect(0, 0, e.width, e.height), data instanceof HTMLImageElement) {
      let e = window.devicePixelRatio || 1;
      t.scale(e, e);
      t.drawImage(data, p / e, p / e, x / e, N / e);
      _data instanceof HTMLImageElement && t.drawImage(_data, p / e, p / e, x / e, N / e);
    } else A && t.drawImage(A, p, p, x, N);
    return e;
  }, [data, _data, A, zoomPercentage, p, width, height, x, N]);
  let O = useCallback((e, t) => [e / 2 - width / 2 * zoomPercentage / 100, t / 2 - height / 2 * zoomPercentage / 100], [width, height, zoomPercentage]);
  let [R, L] = useState(void 0);
  useEffect(() => {
    if (!d.current || 0 === C.width || 0 === C.height || !c || isLoading) return;
    let e = c.width;
    let r = c.height;
    let n = u.current;
    let i = n.getContext("2d");
    let l = window.devicePixelRatio || 1;
    let h = l * scale;
    let g = e * h;
    let f = r * h;
    n.width !== g || n.height !== f ? (n.width = g, n.height = f, n.style.width = e + "px", n.style.height = r + "px", i.scale(l, l)) : i.clearRect(0, 0, g, f);
    let [E, y] = O(e * scale, r * scale);
    let b = Math.floor(E + position.x * scale) - p;
    let S = Math.floor(y + position.y * scale) - p;
    if (i.drawImage(C, b, S), Overlay) {
      let e = x / width;
      let t = N / height;
      let r = _$$s.identity();
      r.translate((b + p) / scale, (S + p) / scale);
      r.scale(e, t);
      L(r);
    }
    I || v(!0);
  }, [position.x, position.y, C, O, d, p, scale, isLoading, c, I, zoomPercentage, x, N, width, height, Overlay]);
  return jsx(M, {
    canvasRef: u,
    containerRef: d,
    containerStyle: e.style,
    containerClassName: e.className,
    canvasClassName: e.canvasClassName,
    handleMouseDown,
    handleMouseMove,
    isDrawn: I,
    children: Overlay && R && jsx(Overlay, {
      transform: R
    })
  });
}
let j = (e, {
  sx: t,
  sy: r,
  sw: n,
  sh: i,
  dh: a,
  dw: s,
  dx: o,
  dy: l,
  scale: d,
  canvas: c
}) => {
  e.drawImage(c, t * d, r * d, n * d, i * d, o, l, s, a);
};
export function $$U2(e) {
  let {
    image,
    Overlay
  } = e;
  let a = useRef(null);
  let s = wY(a) ?? cU;
  let o = useRef(null);
  let l = window.devicePixelRatio || 0;
  let d = useMemo(() => s !== cU ? function (e, t, r = 1) {
    let {
      width,
      height
    } = e.nodeBounds;
    let a = Math.min(t.width / width, t.height / height) * r;
    return e.getImage({
      scale: a
    });
  }(image, s, l) : void 0, [image, s, l]);
  useEffect(() => {
    null === d && image.showError();
  }, [d, image]);
  let [c, u] = useState(null);
  let {
    zoomPercentage,
    position,
    setContainers,
    handleMouseDown,
    handleMouseMove,
    isLoading
  } = w("ZoomPanCanvasContainer");
  let [T, I] = useState(!1);
  useEffect(() => {
    let r = a.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0
    };
    let n = {
      containerPosition: {
        x: r.x,
        y: r.y
      },
      containerDimensions: s,
      imageNode: o.current,
      imageWidth: image.nodeBounds.width,
      imageHeight: image.nodeBounds.height,
      paddingPixels: e.paddingPixels ?? 10
    };
    setContainers(e => new Set([...e, n]));
    return () => {
      setContainers(e => (e.$$delete(n), e));
    };
  }, [setContainers, image, s, e.paddingPixels]);
  let v = useMemo(() => d && d.data.length > 0 ? {
    canvasSpaceBounds: d.canvasSpaceBounds,
    scale: d.scale,
    canvas: Q1(d.data, new Point(d.width, d.height))
  } : null, [d]);
  let A = useMemo(() => c && c.data.length > 0 ? {
    canvasSpaceBounds: c.canvasSpaceBounds,
    scale: c.scale,
    canvas: Q1(c.data, new Point(c.width, c.height))
  } : null, [c]);
  let x = useMemo(() => {
    if (!a.current || isLoading || !s) return null;
    let e = s.width;
    let r = s.height;
    let n = zoomPercentage / 100;
    let i = image.nodeBounds;
    return {
      canvasWidth: e,
      canvasHeight: r,
      zoomFactor: n,
      createImageSpec: ({
        canvasSpaceBounds: t,
        canvas: a,
        scale: s
      }, o) => {
        let l = e / 2 - i.width * n / 2 + (t.x - i.x) * n;
        let d = r / 2 - i.height * n / 2 + (t.y - i.y) * n;
        let c = Math.floor(l + o.x);
        let u = Math.floor(d + o.y);
        let p = Math.max(0, c);
        let _ = Math.max(0, u);
        let h = Math.max(-c / n, 0);
        let m = Math.max(-u / n, 0);
        let g = Math.min(t.width - h, e / n);
        let f = Math.min(t.height - m, r / n);
        return {
          x: c,
          y: u,
          scale: s,
          sx: h,
          sy: m,
          sw: g,
          sh: f,
          dx: p,
          dy: _,
          dw: g * n,
          dh: f * n,
          canvas: a
        };
      }
    };
  }, [isLoading, s, zoomPercentage, image.nodeBounds]);
  let N = useMemo(() => x && v && x.createImageSpec(v, position), [x, v, position]);
  let C = useMemo(() => x && A && x.createImageSpec(A, position), [x, A, position]);
  useEffect(() => {
    if (!N || !x?.canvasHeight || !x?.canvasWidth) return;
    let {
      canvasHeight,
      canvasWidth
    } = x;
    let r = requestAnimationFrame(() => {
      let r = o.current;
      let n = r.getContext("2d");
      r.width !== canvasWidth || r.height !== canvasHeight ? (r.width = canvasWidth * l, r.height = canvasHeight * l, r.style.width = canvasWidth + "px", r.style.height = canvasHeight + "px", n.scale(l, l)) : n.clearRect(0, 0, canvasWidth, canvasHeight);
      j(n, N);
      C && j(n, C);
      T || I(!0);
    });
    return () => cancelAnimationFrame(r);
  }, [a, isLoading, s, T, x, d, Overlay, N, C, zoomPercentage, l]);
  let O = useMemo(() => {
    if (!Overlay || !N?.x || !N?.y || !x?.zoomFactor) return;
    let e = _$$s.identity();
    e.translate(N.x, N.y);
    e.scale(x.zoomFactor, x.zoomFactor);
    return e;
  }, [N?.x, N?.y, x?.zoomFactor, Overlay]);
  useEffect(() => {
    if (!N || x?.zoomFactor === void 0) return;
    let e = {
      x: N.sx,
      y: N.sy,
      width: N.sw,
      height: N.sh
    };
    let r = setTimeout(() => {
      u(image.getImage({
        scale: x.zoomFactor * l,
        clipRect: e
      }));
    }, 200);
    return () => clearTimeout(r);
  }, [N, x?.zoomFactor, image, l]);
  return jsx(M, {
    canvasRef: o,
    containerRef: a,
    containerStyle: e.style,
    containerClassName: e.className,
    handleMouseDown,
    handleMouseMove,
    isDrawn: T,
    customLoadingIndicator: e.customLoadingIndicator,
    children: Overlay && O && jsx(Overlay, {
      transform: O
    })
  });
}
export function $$B4(e) {
  let {
    zoomPercentage,
    setZoomPercentage,
    isFitZoom,
    setIsFitZoom,
    setPosition,
    zoomPercentageOptions
  } = w("ZoomSelectorToolbar");
  let p = useAtomValueAndSetter($$R5)[1];
  useEffect(() => {
    if (!e.keyboardShortcutsEnabled) return;
    let t = e => {
      if (!e.metaKey && !e.ctrlKey) return;
      let t = !0;
      switch (e.keyCode) {
        case KeyCodes.DASH:
          E();
          break;
        case KeyCodes.EQUALS:
          f();
          break;
        default:
          t = !1;
      }
      t && (e.preventDefault(), e.stopPropagation());
    };
    document.addEventListener("keydown", t);
    return () => document.removeEventListener("keydown", t);
  });
  let _ = e => {
    let r = 0;
    let n = zoomPercentageOptions.length - 1;
    for (; r <= n;) {
      let e = Math.floor((r + n) / 2);
      if (zoomPercentageOptions[e] === zoomPercentage) return e;
      zoomPercentageOptions[e] > zoomPercentage ? n = e - 1 : r = e + 1;
    }
    return e ? n : r;
  };
  let m = zoomPercentage >= zoomPercentageOptions[zoomPercentageOptions.length - 1];
  let g = zoomPercentage <= zoomPercentageOptions[0];
  let f = () => {
    m || (setIsFitZoom(!1), setZoomPercentage(zoomPercentageOptions[_(!0) + 1]));
  };
  let E = () => {
    g || (setIsFitZoom(!1), setZoomPercentage(zoomPercentageOptions[_(!1) - 1]));
  };
  let b = (e, t, r, i, a) => a ? jsx("div", {
    className: x,
    children: jsx(IconButton, {
      "aria-label": "ZOOM_IN" === t ? getI18nString("collaboration.branching.zoom_in") : getI18nString("collaboration.branching.zoom_out"),
      disabled: i,
      onClick: r,
      children: "ZOOM_IN" === t ? jsx(_$$e, {}) : jsx(_$$O, {})
    })
  }) : jsx("button", {
    "aria-label": "ZOOM_IN" === t ? getI18nString("collaboration.branching.zoom_in") : getI18nString("collaboration.branching.zoom_out"),
    className: i ? "zoom_pan--zoomSelectorButtonDisabled--MWZWz" : "zoom_pan--zoomSelectorButtonEnabled--ILrv-",
    onClick: r,
    children: jsx(SvgComponent, {
      svg: e,
      useOriginalSrcFills_DEPRECATED: !0
    })
  });
  return jsx("div", {
    className: e.className,
    children: jsxs("div", {
      className: A,
      children: [b(_$$A, "ZOOM_OUT", E, g, !0), jsx("button", {
        onClick: () => {
          p(void 0);
          isFitZoom ? setZoomPercentage(100) : setPosition({
            x: 0,
            y: 0
          });
          setIsFitZoom(!isFitZoom);
        },
        className: "zoom_pan--zoomSelectorValue--sKFmC",
        children: isFitZoom ? getI18nString("collaboration.branching.fit") : `${Math.round(zoomPercentage)}%`
      }), b(_$$A2, "ZOOM_IN", f, m, !0)]
    })
  });
}
export function $$G0() {
  let {
    isLoading,
    zoomPercentage,
    setZoomPercentage,
    isFitZoom,
    setIsFitZoom,
    position,
    setPosition
  } = w("SimpleZoomSelectorToolbar");
  if (isLoading) return null;
  let d = isFitZoom && 0 === position.x && 0 === position.y;
  let c = 100 === zoomPercentage;
  return jsxs("div", {
    className: A,
    children: [jsx("div", {
      className: x,
      children: jsx(IconButton, {
        onClick: () => {
          setPosition({
            x: 0,
            y: 0
          });
          setIsFitZoom(!0);
        },
        disabled: d,
        "aria-label": d ? getI18nString("collaboration.branching.zoom_to_fit_disabled") : getI18nString("collaboration.branching.zoom_to_fit"),
        children: jsx(H, {})
      })
    }), jsx("div", {
      className: "zoom_pan--simpleZoomSelectorValue--aKkrn",
      children: `${Math.round(zoomPercentage)}%`
    }), jsx("div", {
      className: x,
      children: jsx(IconButton, {
        onClick: () => {
          setZoomPercentage(100);
          setIsFitZoom(!1);
        },
        disabled: c,
        "aria-label": c ? getI18nString("collaboration.branching.zoom_to_default_disabled", {
          defaultPercentage: 100
        }) : getI18nString("collaboration.branching.zoom_to_default", {
          defaultPercentage: 100
        }),
        children: jsx(z, {})
      })
    })]
  });
}
export const UN = $$G0;
export const ec = $$F1;
export const Nf = $$U2;
export const Yz = $$k3;
export const _5 = $$B4;
export const w1 = $$R5;