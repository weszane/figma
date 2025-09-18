import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { rgbToNormalized, normalizedToRgb } from "../figma_app/273493";
import { DesignGraphElements, BorderStyle, WhiteboardTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import d from "classnames";
import { BrowserInfo } from "../figma_app/778880";
import { lC, U9 } from "../905/125333";
import { s as _$$s } from "../cssbuilder/589278";
import { colorCSSManipulatorInstance } from "../905/989956";
import { k as _$$k2 } from "../905/545760";
import { Sk, gz, eB, ID, xI, t3, iD, ZJ, B4, i0, BE, rh, uh, WX, SN, Wq, cq, BN, cP, dP, $d } from "../figma_app/731560";
var c = d;
export function $$f55() {
  return jsx("svg", {
    width: "44",
    height: "40",
    viewBox: "0 0 44 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.2793 13.98L29.4852 21.9631L23.1384 23.6856L19.4364 29.2787L16.2793 13.98ZM17.7214 16.0203L19.9298 26.7215L22.5126 22.8193L26.9682 21.6101L17.7214 16.0203Z",
      fill: "rgba(0,0,0,0.8)"
    })
  });
}
export function $$E41() {
  return jsx("svg", {
    width: "44",
    height: "40",
    viewBox: "0 0 44 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.3953 11C20.3953 9.89543 21.2907 9 22.3953 9C23.2677 9 24.0096 9.55857 24.283 10.3376C24.601 10.1244 24.9836 10 25.3953 10C26.4998 10 27.3953 10.8954 27.3953 12V13.2676C27.6894 13.0974 28.031 13 28.3953 13C29.4998 13 30.3953 13.8954 30.3953 15L30.3953 23C30.3953 26.3137 27.709 29 24.3953 29H23.3953C21.5653 29 19.9262 28.1797 18.8271 26.8902C18.7996 26.8662 18.7724 26.8416 18.7455 26.8164L13.7406 22.1104C12.839 21.2628 12.7481 19.8444 13.5367 18.8895C14.309 17.9542 15.6644 17.7838 16.6422 18.5062L17.3953 19.0626V13C17.3953 11.8954 18.2907 11 19.3953 11C19.7596 11 20.1011 11.0974 20.3953 11.2676V11ZM21.3953 11C21.3953 10.4477 21.843 10 22.3953 10C22.9476 10 23.3953 10.4477 23.3953 11V18H24.3953V12C24.3953 11.9993 24.3953 11.9987 24.3953 11.998C24.3963 11.4466 24.8436 11 25.3953 11C25.9475 11 26.3953 11.4477 26.3953 12V18H27.3953V15C27.3953 14.4477 27.843 14 28.3953 14C28.9475 14 29.3953 14.4477 29.3953 15L29.3953 23C29.3953 25.7614 27.1567 28 24.3953 28H23.3953C21.842 28 20.4541 27.2917 19.5371 26.1805C19.5009 26.1514 19.4653 26.1205 19.4305 26.0878L14.4256 21.3819C13.9076 20.8949 13.8555 20.0739 14.3077 19.5262C14.7432 18.9989 15.4993 18.9052 16.0479 19.3105L18.3953 21.0448V13C18.3953 12.4477 18.843 12 19.3953 12C19.9475 12 20.3953 12.4477 20.3953 13V18H21.3953V11Z",
      fill: "rgba(0,0,0,0.8)"
    })
  });
}
export function $$y36() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.4464 18.1536C12.3526 18.0598 12.3 17.9326 12.3 17.8C12.3 17.6674 12.3526 17.5402 12.4464 17.4465L18.0464 11.8465L18.4 11.4929L19.1071 12.2L18.7535 12.5536L14.0071 17.3H21.2C24.7898 17.3 27.7 20.2102 27.7 23.8V27.4H26.7V23.8C26.7 20.7625 24.2375 18.3 21.2 18.3H14.0071L18.7535 23.0465L19.1071 23.4L18.4 24.1071L18.0464 23.7536L12.4464 18.1536ZM13.6 17.7071V17.8929L13.5071 17.8L13.6 17.7071Z",
      fill: "rgba(0,0,0,0.8)"
    })
  });
}
export function $$b21() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27.5536 18.085C27.6474 17.9912 27.7001 17.864 27.7001 17.7314C27.7001 17.5988 27.6474 17.4716 27.5536 17.3779L21.9536 11.7779L21.6001 11.4243L20.8929 12.1314L21.2465 12.485L25.9929 17.2314H18.8C15.2102 17.2314 12.3 20.1415 12.3 23.7314V27.3314H13.3V23.7314C13.3 20.6938 15.7625 18.2314 18.8 18.2314H25.993L21.2465 22.9779L20.8929 23.3314L21.6001 24.0385L21.9536 23.685L27.5536 18.085ZM26.4 17.6385V17.8243L26.4929 17.7314L26.4 17.6385Z",
      fill: "rgba(0,0,0,0.8)"
    })
  });
}
export function $$T12() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.117 8.1464C25.3123 7.9512 25.6289 7.9512 25.8242 8.1464L31.481 13.8033C31.6763 13.9986 31.6763 14.3151 31.481 14.5104L14.5104 31.481C14.3152 31.6762 13.9986 31.6762 13.8033 31.481L8.14645 25.8241C7.95119 25.6289 7.95119 25.3123 8.14645 25.117L25.117 8.1464ZM25.4706 9.2071L9.2071 25.4706L14.1569 30.4203L30.4203 14.1569L25.4706 9.2071Z",
      fill: "rgba(0,0,0,0.8)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.1171 14.5103L27.9455 17.3387L27.2384 18.0459L24.41 15.2174L25.1171 14.5103Z",
      fill: "rgba(0,0,0,0.8)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.7532 20.8743L21.5816 23.7027L20.8745 24.4098L18.0461 21.5814L18.7532 20.8743Z",
      fill: "rgba(0,0,0,0.8)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.9954 18.7529L25.1167 20.8743L24.4096 21.5814L22.2883 19.46L22.9954 18.7529Z",
      fill: "rgba(0,0,0,0.8)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6317 25.1169L18.7531 27.2382L18.0459 27.9453L15.9246 25.824L16.6317 25.1169Z",
      fill: "rgba(0,0,0,0.8)"
    })]
  });
}
let $$I53 = 84;
let $$S20 = forwardRef(({
  color: e,
  toolbarIconScale: t = 1,
  toolOrder: r = 1,
  shouldAnimate: i = !0,
  stickyAnimationState: a = _$$k2.DEFAULT
}, s) => {
  let o = !i || a === _$$k2.DRAG_RETURN_TO_DLT;
  let l = a === _$$k2.DRAG_ON_CANVAS;
  let d = 4 === r;
  let u = a === _$$k2.DRAG_RETURN_TO_DLT;
  let p = a === _$$k2.DRAG_ON_CANVAS;
  let _ = 16;
  let h = 25;
  t < 1 && (d ? (_ = 24, h = 32) : _ = 32);
  let f = {
    [Sk]: 1 === r,
    [gz]: 2 === r,
    [eB]: 3 === r,
    [ID]: d
  };
  return jsx("div", {
    className: c()({
      [xI]: 2 === r,
      [t3]: 3 === r,
      [iD]: d
    }),
    style: {
      width: 116 * t,
      height: 116 * t
    },
    children: jsx("div", {
      className: c()(f, ZJ, {
        [B4]: o && 1 === r || l && 2 === r,
        [i0]: p,
        [BE]: u,
        [rh]: !u && !i && 2 === r
      }),
      style: {
        top: _ * t,
        left: h * t,
        width: 104 * t,
        height: 104 * t
      },
      ref: s,
      children: jsx("div", {
        className: c()(uh, WX),
        children: jsxs("svg", {
          className: SN,
          width: 104 * t,
          height: 104 * t,
          viewBox: "-20 -20 104 104",
          fill: "none",
          children: [jsxs("g", {
            children: [jsx("path", {
              className: c()(Wq, cq),
              style: {
                clipPath: `url(#stickyMaskV3-${r})`
              },
              d: "M0.459717 0.680176L104.46 0.680243V104.68H0.459717V2.09514V0.680176Z",
              fill: e
            }), jsxs("g", {
              className: BN,
              children: [jsx("mask", {
                id: `stickyCurlMaskV3-${r}`,
                style: {
                  maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: $$I53,
                height: $$I53,
                children: jsx("path", {
                  d: "M31.9819 3.8766C34.7398 1.38156 38.3262 7.51147e-07 42.0452 2.10768e-06L104 2.47061e-05V104H3.61353e-05L3.37915e-06 39.4677C1.22757e-06 35.2289 1.7934 31.188 4.9367 28.3443L31.9819 3.8766Z",
                  fill: "white"
                })
              }), jsxs("g", {
                mask: `url(#stickyCurlMaskV3-${r})`,
                children: [jsx("path", {
                  d: "M104 6.74129e-05L54.8928 48.5492L0 104V0L104 6.74129e-05Z",
                  fill: e,
                  className: cq
                }), jsx("g", {
                  filter: "url(#stickyCurlBlurFilter)",
                  children: jsx("rect", {
                    x: "-26",
                    y: "50.6831",
                    width: "96.831",
                    height: "16.7797",
                    transform: "rotate(-41.9127 -26 50.6831)",
                    fill: "black",
                    fillOpacity: "0.3"
                  })
                }), jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M31.526 4.26953L3.2583 29.8513C10.3683 23.4168 26.3782 24.6229 26.3782 24.6229C26.3782 24.6229 25.0586 10.1224 31.526 4.26953Z",
                  fill: e,
                  className: cq
                }), jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M31.5262 4.26953L3.25854 29.8513C10.3686 23.4168 26.3784 24.6229 26.3784 24.6229C26.3784 24.6229 25.0588 10.1224 31.5262 4.26953Z",
                  fill: "url(#paint0_linear_221_5067)"
                })]
              })]
            })]
          }), jsxs("defs", {
            children: [jsxs("clipPath", {
              id: `stickyMaskV3-${r}`,
              children: [jsx("path", {
                className: cP,
                d: "M50.9701 6.74129e-05L104.97 0V104H0.970459V46.9909L50.9701 6.74129e-05Z",
                fill: "#C20000"
              }), jsx("path", {
                className: dP,
                d: "M32.2236 3.8766C34.9815 1.38156 38.5679 7.51147e-07 42.2869 2.10768e-06L104.242 2.47061e-05V104H0.241735L0.241703 39.4677C0.2417 35.2289 2.0351 31.188 5.1784 28.3443L32.2236 3.8766Z",
                fill: "#2400FF"
              }), jsx("rect", {
                x: "250",
                y: "520",
                width: "1",
                height: "1"
              })]
            }), jsxs("filter", {
              xmlns: "http://www.w3.org/2000/svg",
              id: `sticky_shadow-${r}`,
              x: "0",
              y: "0",
              width: "200%",
              height: "200%",
              colorInterpolationFilters: "sRGB",
              children: [jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
              }), jsx("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              }), jsx("feOffset", {}), jsx("feGaussianBlur", {
                stdDeviation: "1.5"
              }), jsx("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              }), jsx("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_276_2240"
              }), jsx("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              }), jsx("feOffset", {}), jsx("feGaussianBlur", {
                stdDeviation: "4"
              }), jsx("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
              }), jsx("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_276_2240",
                result: "effect2_dropShadow_276_2240"
              }), jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_276_2240",
                result: "shape"
              })]
            }), jsxs("filter", {
              id: "stickyCurlBlurFilter",
              x: "-58",
              y: "-45.9995",
              width: "147.267",
              height: "141.169",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
              }), jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
              }), jsx("feGaussianBlur", {
                stdDeviation: "16",
                result: "effect1_foregroundBlur_221_5067"
              })]
            }), jsxs("linearGradient", {
              id: "paint0_linear_221_5067",
              x1: "18.1477",
              y1: "15.5989",
              x2: "25.7005",
              y2: "25.3824",
              gradientUnits: "userSpaceOnUse",
              children: [jsx("stop", {
                stopColor: "white",
                stopOpacity: "0.5"
              }), jsx("stop", {
                offset: "0.319642",
                stopColor: "white",
                stopOpacity: "0.2"
              }), jsx("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0.2"
              })]
            })]
          })]
        })
      })
    })
  });
});
let v = "#699BF7";
function A({
  toolbarIconScale: e,
  children: t,
  isBeingDraggedForPlacement: r
}) {
  let i = BrowserInfo.safari && r;
  return jsx("svg", {
    fill: "none",
    height: 144 * e,
    width: 144 * e,
    viewBox: "0 0 144 144",
    className: c()({
      [WX]: !i,
      [$d]: !0
    }),
    children: t
  });
}
let x = new Map([[DesignGraphElements.SHAPE_WHITEBOARD_TRIANGLE_UP, 104], [DesignGraphElements.SHAPE_WHITEBOARD_ELLIPSE, 128], [DesignGraphElements.SHAPE_WHITEBOARD_SQUARE, 112]]);
let N = 2 / 38;
let C = .5 / 38;
let w = 8 / 38;
function O() {
  let e = useAtomWithSubscription(lC);
  let t = useAtomWithSubscription(U9);
  return useMemo(() => R(e, t), [t, e]);
}
let R = (e, t) => t === BorderStyle.NONE ? "#000000" : colorCSSManipulatorInstance.format(e);
function L(e) {
  let t = colorCSSManipulatorInstance.parse(e);
  let r = WhiteboardTsApi?.getShapeWithTextStrokeColorForFill(rgbToNormalized(t));
  return r ? colorCSSManipulatorInstance.format(normalizedToRgb(r)) : "#757575";
}
function P(e) {
  return useMemo(() => L(e), [e]);
}
function D(e, t) {
  if (!t) return {};
  let {
    styleType,
    isDragging
  } = t;
  let i = function (e) {
    let t = x.get(e);
    return void 0 === t ? 112 : t;
  }(e);
  return {
    strokeWidth: styleType === BorderStyle.NONE ? i * C : i * N,
    strokeOpacity: styleType === BorderStyle.NONE ? .2 : 1,
    strokeDasharray: styleType === BorderStyle.DASHED ? `${i * w} ${i * w}` : "",
    strokeLinecap: "round",
    className: _$$s.$$if(isDragging, _$$s.hidden).$
  };
}
function k(e, t) {
  if (!t) return {};
  let {
    styleType,
    svgToCanvasScale,
    isDragging
  } = t;
  return t ? {
    stroke: getFeatureFlags().figjam_track_stroke_color ? R(atomStoreManager.get(lC), atomStoreManager.get(U9)) : L(e),
    strokeWidth: function (e, t, r = !1) {
      return r && (e === BorderStyle.SOLID || e === BorderStyle.DASHED) ? 4 * t : 0;
    }(styleType, svgToCanvasScale, isDragging),
    strokeDasharray: function (e, t, r = !1) {
      return r && e === BorderStyle.DASHED ? `${16 * t} ${10 * t}` : "";
    }(styleType, svgToCanvasScale, isDragging),
    strokeLinecap: "round"
  } : {};
}
function M(e) {
  return !!e && e.styleType === BorderStyle.NONE;
}
let $$F46 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M109.821 18.253A3 3 0 00106.916 16H11.87a3 3 0 00-2.906 3.747l25.215 98.001A3 3 0 0037.084 120h95.046a3 3 0 002.906-3.748l-25.215-98z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$j24 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M34.179 18.253A3 3 0 0137.084 16h95.046a3 3 0 012.906 3.747l-25.215 98.001a3 3 0 01-2.905 2.252H11.87a3 3 0 01-2.906-3.748l25.215-98z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$U31 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M68.787 118.279c1.324 2.295 5.102 2.295 6.426 0l56.403-97.77c1.195-2.072-.542-4.509-3.213-4.509H15.597c-2.67 0-4.408 2.437-3.213 4.508l56.403 97.771z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$B40 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => {
  let l = O();
  let d = P(e);
  let c = getFeatureFlags().figjam_track_stroke_color ? l : d;
  return jsxs(A, {
    toolbarIconScale: t,
    isBeingDraggedForPlacement: !!i,
    children: [jsx("path", {
      d: "M68.787 17.721c1.324-2.295 5.102-2.295 6.426 0l56.403 97.771c1.195 2.071-.542 4.508-3.213 4.508H15.597c-2.67 0-4.408-2.437-3.213-4.508l56.403-97.77z",
      fill: e,
      className: cq,
      ref: a,
      ...k(e, r)
    }), jsx("path", {
      d: "M130.75 115.992L130.75 115.992C131.134 116.658 131.057 117.364 130.645 117.942C130.223 118.534 129.432 119 128.403 119H15.5971C14.5693 119 13.7776 118.534 13.3555 117.942C12.9431 117.364 12.8659 116.658 13.2503 115.992L13.2503 115.992L69.6533 18.221C70.0992 17.4482 70.9999 17 72.0001 17C73.0004 17 73.9011 17.4482 74.347 18.221L130.75 115.992Z",
      stroke: c,
      ...D(DesignGraphElements.SHAPE_WHITEBOARD_TRIANGLE_UP, r)
    })]
  });
});
let $$G38 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => {
  let l = O();
  let d = P(e);
  let c = getFeatureFlags().figjam_track_stroke_color ? l : d;
  return jsxs(A, {
    toolbarIconScale: t,
    isBeingDraggedForPlacement: !!i,
    children: [jsx("circle", {
      cx: "72",
      cy: "72",
      r: "64",
      fill: e,
      className: cq,
      ref: a,
      ...k(e, r)
    }), jsx("circle", {
      cx: "72",
      cy: "72",
      r: "62",
      fill: "none",
      stroke: c,
      ...D(DesignGraphElements.SHAPE_WHITEBOARD_ELLIPSE, r)
    })]
  });
});
let $$V8 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("rect", {
    x: "8",
    y: "20",
    width: "128",
    height: "104",
    rx: "40",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$H3 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("rect", {
    width: "79.374",
    height: "79.374",
    x: "15.874",
    y: "71.874",
    rx: "3.175",
    transform: "rotate(-45 15.874 71.874)",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$z10 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => {
  let l = O();
  let d = P(e);
  let c = getFeatureFlags().figjam_track_stroke_color ? l : d;
  return jsxs(A, {
    toolbarIconScale: t,
    isBeingDraggedForPlacement: !!i,
    children: [jsx("rect", {
      x: "16",
      y: "16",
      width: "112",
      height: "112",
      rx: "3.23077",
      fill: e,
      className: cq,
      ref: a,
      ...k(e, r)
    }), jsx("rect", {
      x: "16",
      y: "16",
      width: "110",
      height: "110",
      fill: "none",
      rx: "3.23077",
      stroke: c,
      ...D(DesignGraphElements.SHAPE_WHITEBOARD_SQUARE, r)
    })]
  });
});
let $$W39 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M16.1763 30.5665C16.1763 28.9381 17.4061 27.1478 20.2318 25.336C23.0129 23.5529 27.1015 21.9106 32.2405 20.517C42.5046 17.7335 56.7388 16 72.5 16C88.2612 16 102.495 17.7335 112.759 20.517C117.898 21.9106 121.987 23.5529 124.768 25.336C127.594 27.1478 128.824 28.9381 128.824 30.5665C128.824 32.1949 127.594 33.9852 124.768 35.7969C121.987 37.5801 117.898 39.2224 112.759 40.616C102.495 43.3995 88.2612 45.1329 72.5 45.1329C56.7388 45.1329 42.5046 43.3995 32.2405 40.616C27.1015 39.2224 23.0129 37.5801 20.2318 35.7969C17.4061 33.9852 16.1763 32.1949 16.1763 30.5665Z M125.816 37.4319C126.996 36.6756 128.019 35.8576 128.824 34.9796V113.434C128.824 115.062 127.594 116.852 124.768 118.664C121.987 120.447 117.898 122.089 112.759 123.483C102.495 126.267 88.2612 128 72.5 128C56.7388 128 42.5046 126.267 32.2405 123.483C27.1015 122.089 23.0129 120.447 20.2318 118.664C17.4061 116.852 16.1763 115.062 16.1763 113.434V34.9796C16.981 35.8576 18.0038 36.6756 19.1835 37.4319C22.201 39.3666 26.5029 41.0724 31.7322 42.4905C42.2047 45.3305 56.6179 47.0751 72.5 47.0751C88.3821 47.0751 102.795 45.3305 113.268 42.4905C118.497 41.0724 122.799 39.3666 125.816 37.4319Z" : "M15.5289 30.5664C15.5289 21.9851 41.0355 15.0288 72.5 15.0288C103.964 15.0288 129.471 21.9851 129.471 30.5664V113.433C129.471 122.015 103.964 128.971 72.5 128.971C41.0355 128.971 15.5289 122.015 15.5289 113.433V30.5664Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M129.471 30.5664C129.471 39.1477 103.964 46.104 72.5 46.104C41.0355 46.104 15.5289 39.1477 15.5289 30.5664M129.471 30.5664C129.471 21.9851 103.964 15.0288 72.5 15.0288C41.0355 15.0288 15.5289 21.9851 15.5289 30.5664M129.471 30.5664V113.433C129.471 122.015 103.964 128.971 72.5 128.971C41.0355 128.971 15.5289 122.015 15.5289 113.433V30.5664",
    ...k(e, r)
  })]
}));
let $$K33 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M22.1503 121H117.979C117.215 120.301 116.503 119.415 115.844 118.393C114.15 115.767 112.657 112.023 111.417 107.473C108.931 98.3601 107.405 85.8189 107.405 72C107.405 58.1811 108.931 45.6399 111.417 36.5273C112.657 31.9771 114.15 28.2333 115.844 25.6072C116.503 24.5851 117.215 23.6986 117.979 23H22.1503C20.7231 23 19.1567 24.0712 17.5724 26.5282C16.0127 28.9471 14.5759 32.5037 13.3566 36.9744C10.9214 45.9038 9.40463 58.2875 9.40463 72C9.40463 85.7125 10.9214 98.0962 13.3566 107.026C14.5759 111.496 16.0127 115.053 17.5724 117.472C19.1567 119.929 20.7231 121 22.1503 121Z M117.272 26.5282C118.856 24.0712 120.423 23 121.85 23C123.277 23 124.843 24.0712 126.428 26.5282C127.987 28.9471 129.424 32.5037 130.643 36.9744C133.079 45.9038 134.595 58.2875 134.595 72C134.595 85.7125 133.079 98.0962 130.643 107.026C129.424 111.496 127.987 115.053 126.428 117.472C124.843 119.929 123.277 121 121.85 121C120.423 121 118.856 119.929 117.272 117.472C115.712 115.053 114.275 111.496 113.056 107.026C110.621 98.0962 109.104 85.7125 109.104 72C109.104 58.2875 110.621 45.9038 113.056 36.9744C114.275 32.5037 115.712 28.9471 117.272 26.5282Z" : "M122.229 22.1504C129.738 22.1504 135.824 44.4687 135.824 72.0001C135.824 99.5315 129.738 121.85 122.229 121.85H22.5295C15.0209 121.85 8.93413 99.5315 8.93413 72.0001C8.93413 44.4687 15.0209 22.1504 22.5295 22.1504H122.229Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M121.85 121.85C114.341 121.85 108.254 99.5315 108.254 72.0001C108.254 44.4687 114.341 22.1504 121.85 22.1504M121.85 121.85C129.358 121.85 135.445 99.5315 135.445 72.0001C135.445 44.4687 129.358 22.1504 121.85 22.1504M121.85 121.85H22.1503C14.6417 121.85 8.55492 99.5315 8.55492 72.0001C8.55492 44.4687 14.6417 22.1504 22.1503 22.1504H121.85",
    ...k(e, r)
  })]
}));
let $$Y13 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M10.3815 22.7052C10.3815 21.211 11.5925 20 13.0867 20H103.561V46.1503C103.561 48.3081 105.31 50.0578 107.468 50.0578H133.618V121.295C133.618 122.789 132.407 124 130.913 124H13.0867C11.5925 124 10.3815 122.789 10.3815 121.295V22.7052Z M132.343 48.2543L105.364 21.2752V46.1503C105.364 47.3121 106.306 48.2543 107.468 48.2543H132.343Z" : "M9.47974 121.295V22.7051C9.47974 20.7128 11.0944 19.0981 13.0867 19.0981H104.462L134.52 49.1559V121.295C134.52 123.287 132.905 124.902 130.913 124.902H13.0867C11.0944 124.902 9.47974 123.287 9.47974 121.295Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M104.462 19.0981H13.0867C11.0944 19.0981 9.47974 20.7128 9.47974 22.7051V121.295C9.47974 123.287 11.0944 124.902 13.0867 124.902H130.913C132.905 124.902 134.52 123.287 134.52 121.295V49.1559M104.462 19.0981L134.52 49.1559M104.462 19.0981V46.1502C104.462 47.81 105.808 49.1559 107.468 49.1559H134.52",
    ...k(e, r)
  })]
}));
let $$$22 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M20.2185 21.6806C20.6341 20.6642 21.6236 20 22.7221 20H66.5728C67.6712 20 68.6608 20.6642 69.0763 21.6806L78.4719 44.6474H10.823L20.2185 21.6806Z M10.3815 46.4509H130.913C132.408 46.4509 133.619 47.6618 133.619 49.1561V121.295C133.619 122.789 132.408 124 130.913 124H13.0867C11.5925 124 10.3815 122.789 10.3815 121.295V46.4509Z" : "M9.4798 121.295V45.549L19.3838 21.3393C19.9381 19.9836 21.2576 19.0981 22.7221 19.0981H66.5728C68.0372 19.0981 69.3567 19.9836 69.911 21.3393L79.815 45.549H130.913C132.906 45.549 134.52 47.1637 134.52 49.1559V121.295C134.52 123.287 132.906 124.902 130.913 124.902H13.0867C11.0945 124.902 9.4798 123.287 9.4798 121.295Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M9.4798 45.549V121.295C9.4798 123.287 11.0945 124.902 13.0867 124.902H130.913C132.906 124.902 134.52 123.287 134.52 121.295V49.1559C134.52 47.1637 132.906 45.549 130.913 45.549H79.815M9.4798 45.549L19.3838 21.3393C19.9381 19.9836 21.2576 19.0981 22.7221 19.0981H66.5728C68.0372 19.0981 69.3567 19.9836 69.911 21.3393L79.815 45.549M9.4798 45.549H79.815",
    ...k(e, r)
  })]
}));
let $$X29 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M132.825 31H11.1751C9.11354 31 7.59918 32.9715 8.0945 35.0106L27.3025 110.463C27.653 111.906 28.924 112.92 30.3831 112.92H113.617C115.076 112.92 116.347 111.906 116.698 110.463L135.906 35.0106C136.401 32.9715 134.886 31 132.825 31Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$q26 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M93.2603 48.8289L74.8382 18.1385C73.7284 16.4493 71.2511 16.4493 70.1413 18.1385L51.7195 48.8289C51.3354 49.4134 50.7472 49.8337 50.0698 50.0076L14.5248 57.5829C12.5231 58.0968 11.7423 60.523 13.0688 62.1078L37.2107 88.5999C37.6704 89.1492 37.903 89.8531 37.8609 90.5682L34.3002 125.894C34.1806 127.929 36.2 129.41 38.1052 128.685L71.4895 114.399C72.1339 114.154 72.8457 114.154 73.49 114.399L106.874 128.685C108.779 129.41 110.799 127.929 110.679 125.894L107.118 90.5682C107.077 89.8531 107.309 89.1492 107.769 88.5999L131.911 62.1078C133.237 60.523 132.457 58.0968 130.455 57.5829L94.9096 50.0076C94.2325 49.8337 93.6443 49.4134 93.2603 48.8289Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$J52 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M120.45 27H23.55C22.1417 27 21 28.1454 21 29.5583V86.4924C21 87.408 21.4877 88.2538 22.2789 88.7102L70.7289 116.66C71.5159 117.113 72.4841 117.114 73.2711 116.66L121.721 88.7102C122.512 88.2538 123 87.408 123 86.4924V29.5583C123 28.1454 121.858 27 120.45 27Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$Z11 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M8.24869 71.3645L24.1079 34.3397C24.6034 33.1629 25.7559 32.3976 27.0328 32.3976H116.967C118.244 32.3976 119.397 33.1629 119.892 34.3397L135.751 71.3645C136.083 72.152 136.083 73.04 135.751 73.8275L119.892 110.852C119.397 112.029 118.244 112.794 116.967 112.794H27.0328C25.7559 112.794 24.6034 112.029 24.1079 110.852L8.24869 73.8275C7.9171 73.04 7.9171 72.152 8.24869 71.3645Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$Q0 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M129.24 59.4647L74.475 16.7477C73.1969 15.7508 71.4046 15.7508 70.1265 16.7477L15.3612 59.4647C14.1752 60.3897 13.7044 61.9638 14.1876 63.388L34.9562 124.601C35.4429 126.035 36.7893 127 38.304 127H106.298C107.812 127 109.159 126.035 109.645 124.601L130.414 63.388C130.897 61.9638 130.426 60.3897 129.24 59.4647Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$ee54 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M94.8699 16H49.1301C48.3125 16 47.5284 16.3248 46.9503 16.9029L16.9029 46.9503C16.3248 47.5284 16 48.3125 16 49.1301V94.8699C16 95.6875 16.3248 96.4716 16.9029 97.0497L46.9503 127.097C47.5284 127.675 48.3125 128 49.1301 128H94.8699C95.6875 128 96.4716 127.675 97.0497 127.097L127.097 97.0497C127.675 96.4716 128 95.6875 128 94.8699V49.1301C128 48.3125 127.675 47.5284 127.097 46.9503L97.0497 16.9029C96.4716 16.3248 95.6875 16 94.8699 16Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$et23 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M47.1111 47.1099V18.8718C47.1111 17.2857 48.3969 16 49.9829 16H94.0171C95.6031 16 96.8889 17.2857 96.8889 18.8718V46.632C96.8889 46.6325 96.8896 46.6325 96.8901 46.6325H125.128C126.714 46.6325 128 47.9182 128 49.5043V94.0171C128 95.6031 126.714 96.8889 125.128 96.8889H96.8894C96.8889 96.8889 96.8889 96.8896 96.8889 96.8901V125.128C96.8889 126.714 95.6031 128 94.0171 128H49.9829C48.3969 128 47.1111 126.714 47.1111 125.128V96.8894C47.1111 96.8889 47.1104 96.8889 47.1099 96.8889H18.8718C17.2857 96.8889 16 95.6031 16 94.0171V49.9829C16 48.3969 17.2857 47.1111 18.8718 47.1111H47.1106C47.1111 47.1111 47.1111 47.1104 47.1111 47.1099Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$er2 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: M(r) ? "M8.28613 31.5551C8.28613 30.119 9.45004 28.9551 10.8862 28.9551H16.664V115.045H10.8862C9.45004 115.045 8.28613 113.881 8.28613 112.445V31.5551Z M18.3974 115.045V28.9551H127.021V115.045H18.3974Z M128.754 115.045V28.9551H134.532C135.968 28.9551 137.132 30.119 137.132 31.5551V112.445C137.132 113.881 135.968 115.045 134.532 115.045H128.754Z" : "M7.68134 31.5551C7.68134 29.6403 9.23327 28.0884 11.148 28.0884H17.7926H128.15H134.794C136.709 28.0884 138.261 29.6403 138.261 31.5551V112.445C138.261 114.36 136.709 115.912 134.794 115.912H128.15H17.7926H11.148C9.23327 115.912 7.68134 114.36 7.68134 112.445V31.5551Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M17.7926 28.0884H11.148C9.23327 28.0884 7.68134 29.6403 7.68134 31.5551V112.445C7.68134 114.36 9.23327 115.912 11.148 115.912H17.7926M17.7926 28.0884V115.912M17.7926 28.0884H128.15M17.7926 115.912H128.15M128.15 28.0884V115.912M128.15 28.0884H134.794C136.709 28.0884 138.261 29.6403 138.261 31.5551V112.445C138.261 114.36 136.709 115.912 134.794 115.912H128.15",
    ...k(e, r)
  })]
}));
let $$en16 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M3 31.9044C3 28.2578 6.22596 25.4544 9.83687 25.963L136.837 43.8517C139.798 44.2688 142 46.8027 142 49.793V112C142 115.314 139.314 118 136 118H9C5.68629 118 3 115.314 3 112V31.9044Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$ei18 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M27.8014 70.724L8.31687 37.526C7.36024 35.695 8.68491 33.5 10.7466 33.5H112.245C113.225 33.5 114.13 34.0241 114.62 34.8749L135.632 70.6249C136.122 71.4758 136.122 72.5242 135.632 73.3751L114.62 109.125C114.13 109.976 113.225 110.5 112.245 110.5H10.7466C8.68491 110.5 7.36024 108.305 8.31687 106.474L27.8014 73.276C28.219 72.4768 28.219 71.5232 27.8014 70.724Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$ea57 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M8 24.41C8 23.0789 9.07886 22 10.41 22H133.59C134.921 22 136 23.0789 136 24.4095V109.272C136 110.813 134.515 111.919 133.037 111.477L117.877 106.938C101.942 102.167 84.7341 104.324 70.4706 112.88C55.667 121.76 37.6577 123.527 21.4094 117.693L9.33252 113.356C8.53306 113.069 8 112.312 8 111.462V24.41Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$es43 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M8.00262 23.8137C8.00262 22.5661 9.01375 21.5549 10.2614 21.5549H124.704C125.951 21.5549 126.962 22.5661 126.962 23.8137V28.0802H18.2924C16.2163 28.0802 14.5278 29.7638 14.5278 31.8442V105.774L9.51934 104.138L9.49978 104.132C8.61172 103.869 8.00262 103.052 8.00262 102.126V23.8137Z M18.2924 29.586H133.739C134.986 29.586 135.997 30.5972 135.997 31.8442V111.379C135.997 112.823 134.605 113.86 133.221 113.445L119.012 109.191C104.078 104.72 87.9501 106.742 74.5822 114.761C60.7079 123.083 43.8294 124.739 28.6012 119.271L17.2825 115.207C16.5333 114.937 16.0337 114.227 16.0337 113.432V31.8442C16.0337 30.5967 17.0466 29.586 18.2924 29.586Z" : "M7.24973 23.8136C7.24973 22.1502 8.59794 20.802 10.2614 20.802H124.704C126.367 20.802 127.715 22.1502 127.715 23.8136V28.833H133.739C135.402 28.833 136.75 30.1813 136.75 31.8442V111.379C136.75 113.328 134.872 114.726 133.005 114.166L118.796 109.912C104.064 105.502 88.1559 107.496 74.9695 115.406C60.9016 123.845 43.7874 125.524 28.3468 119.979L17.028 115.915C15.98 115.539 15.2808 114.545 15.2808 113.432V106.812L9.28559 104.854C8.07793 104.495 7.24973 103.386 7.24973 102.126V23.8136Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M127.715 28.833V23.8136C127.715 22.1502 126.367 20.802 124.704 20.802H10.2614C8.59794 20.802 7.24973 22.1502 7.24973 23.8136V102.126C7.24973 103.386 8.07793 104.495 9.28559 104.854L15.2808 106.812M127.715 28.833H18.2924C16.6315 28.833 15.2808 30.1803 15.2808 31.8442V106.812M127.715 28.833H133.739C135.402 28.833 136.75 30.1813 136.75 31.8442V111.379C136.75 113.328 134.872 114.726 133.005 114.166L118.796 109.912C104.064 105.502 88.1559 107.496 74.9695 115.406C60.9016 123.845 43.7874 125.524 28.3468 119.979L17.028 115.915C15.98 115.539 15.2808 114.545 15.2808 113.432V106.812",
    ...k(e, r)
  })]
}));
let $$eo9 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M8.94141 70.0367L59.3021 28.0736C60.95 26.7503 63.3967 27.9234 63.3967 30.037V50.1764C63.3967 50.1765 63.3968 50.1767 63.3969 50.1769V50.1769C63.3971 50.177 63.3973 50.1771 63.3974 50.1771H133.482C134.873 50.1771 136 51.3044 136 52.6951V91.3049C136 92.6956 134.873 93.823 133.482 93.823H63.3974C63.3973 93.823 63.3971 93.8231 63.3969 93.8232V93.8232C63.3968 93.8233 63.3967 93.8235 63.3967 93.8237V113.963C63.3967 116.077 60.95 117.25 59.3021 115.926L8.9414 73.9634C7.6862 72.9554 7.6862 71.0446 8.94141 70.0367Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$el15 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M135.059 73.9634L84.6979 115.926C83.05 117.25 80.6033 116.077 80.6033 113.963V93.8237C80.6033 93.8235 80.6032 93.8233 80.6031 93.8232V93.8232C80.6029 93.8231 80.6028 93.823 80.6026 93.823H10.518C9.12736 93.823 8 92.6956 8 91.3049V52.6951C8 51.3044 9.12736 50.1771 10.518 50.1771H80.6026C80.6027 50.1771 80.6029 50.177 80.6031 50.1769V50.1769C80.6032 50.1767 80.6033 50.1765 80.6033 50.1764V30.037C80.6033 27.9234 83.05 26.7503 84.6979 28.0736L135.059 70.0367C136.314 71.0446 136.314 72.9554 135.059 73.9634Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$ed30 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M24.029 72C24.029 59.2726 28.9314 47.6903 36.951 39.0383L70.4029 72.4902L37.4306 105.472C29.1273 96.7676 24.029 84.9792 24.029 72Z M72.5239 70.3686L39.0571 36.9017C47.7613 28.5984 59.5497 23.5 72.529 23.5C85.5032 23.5 97.2876 28.5945 105.991 36.8921L72.5239 70.3686Z M74.6452 72.4899L108.098 39.0281C116.123 47.6811 121.029 59.2676 121.029 72C121.029 84.9793 115.931 96.7677 107.627 105.472L74.6452 72.4899Z M72.5242 74.6115L105.491 107.578C96.8387 115.598 85.2564 120.5 72.529 120.5C59.8015 120.5 48.2191 115.598 39.5671 107.578L72.5242 74.6115Z" : "M72.529 122C100.143 122 122.529 99.6142 122.529 72C122.529 58.3137 117.03 45.9117 108.121 36.883C99.0547 27.6948 86.4569 22 72.529 22C44.9148 22 22.529 44.3858 22.529 72C22.529 99.6142 44.9148 122 72.529 122Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M108.121 36.883C99.0547 27.6948 86.4569 22 72.529 22C44.9148 22 22.529 44.3858 22.529 72C22.529 99.6142 44.9148 122 72.529 122C100.143 122 122.529 99.6142 122.529 72C122.529 58.3137 117.03 45.9117 108.121 36.883ZM108.121 36.883L72.524 72.49M108.121 36.883L108.129 36.875M36.929 36.895L72.524 72.49M72.524 72.49L107.634 107.6M72.524 72.49L37.424 107.6",
    ...k(e, r)
  })]
}));
let $$ec42 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M71.058 70.5H24.0807C24.8582 44.9063 45.4643 24.3002 71.058 23.5227V70.5Z M74.058 70.5V23.5227C99.6516 24.3002 120.258 44.9063 121.035 70.5H74.058Z M74.058 73.5H121.035C120.258 99.0936 99.6516 119.7 74.058 120.477V73.5Z M71.058 73.5V120.477C45.4643 119.7 24.8582 99.0936 24.0807 73.5H71.058Z" : "M122.558 72C122.558 99.6142 100.172 122 72.558 122C44.9437 122 22.558 99.6142 22.558 72C22.558 44.3858 44.9437 22 72.558 22C100.172 22 122.558 44.3858 122.558 72Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M122.558 72C122.558 99.6142 100.172 122 72.558 122M122.558 72C122.558 44.3858 100.172 22 72.558 22M122.558 72H72.558M72.558 122C44.9437 122 22.558 99.6142 22.558 72M72.558 122V72M22.558 72C22.558 44.3858 44.9437 22 72.558 22M22.558 72H72.558M72.558 22V72",
    ...k(e, r)
  })]
}));
let $$eu6 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsx(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: jsx("path", {
    d: "M8 43.5V84.2344C8 98.0415 19.1929 109.234 33 109.234H33.4992C33.4994 109.234 33.4996 109.235 33.4997 109.235V109.235C33.4999 109.235 33.5 109.235 33.5 109.235V121.505C33.5 124.734 37.147 126.624 39.7975 124.769L61.9993 109.235V109.235C62.0001 109.235 62.001 109.234 62.002 109.234H111C124.807 109.234 136 98.0415 136 84.2344V43.5C136 29.6929 124.807 18.5 111 18.5H33C19.1929 18.5 8 29.6929 8 43.5Z",
    fill: e,
    className: cq,
    ref: a,
    ...k(e, r)
  })
}));
let $$ep19 = forwardRef(({
  color: e = v,
  toolbarIconScale: t = 1,
  shapeStrokeProps: r,
  isBeingDraggedForPlacement: i
}, a) => jsxs(A, {
  toolbarIconScale: t,
  isBeingDraggedForPlacement: !!i,
  children: [jsx("path", {
    d: M(r) ? "M8.00348 31.8228C8.00348 30.3962 9.15968 29.24 10.5863 29.24H15.465V36.7015H8.00348V31.8228Z M17.1868 36.7015V29.24H133.414C134.84 29.24 135.997 30.3962 135.997 31.8228V36.7015H17.1868Z M17.1868 38.4233H135.997V112.177C135.997 113.604 134.84 114.76 133.414 114.76H17.1868V38.4233Z M15.465 38.4233V114.76H10.5863C9.15968 114.76 8.00348 113.604 8.00348 112.177V38.4233H15.465Z" : "M7.64255 31.8229C7.64255 29.9208 9.1842 28.3792 11.0863 28.3792H16.8259H133.914C135.816 28.3792 137.357 29.9208 137.357 31.8229V37.5625V112.177C137.357 114.079 135.816 115.621 133.914 115.621H16.8259H11.0863C9.1842 115.621 7.64255 114.079 7.64255 112.177V37.5625V31.8229Z",
    fill: e,
    className: cq,
    ref: a
  }), jsx("path", {
    d: "M7.64255 37.5625V31.8229C7.64255 29.9208 9.1842 28.3792 11.0863 28.3792H16.8259M7.64255 37.5625V112.177C7.64255 114.079 9.1842 115.621 11.0863 115.621H16.8259M7.64255 37.5625H16.8259M16.8259 115.621H133.914C135.816 115.621 137.357 114.079 137.357 112.177V37.5625M16.8259 115.621V37.5625M137.357 37.5625V31.8229C137.357 29.9208 135.816 28.3792 133.914 28.3792H16.8259M137.357 37.5625H16.8259M16.8259 28.3792V37.5625",
    ...k(e, r)
  })]
}));
export function $$e_4() {
  return jsxs("svg", {
    width: "48",
    height: "40",
    viewBox: "0 0 48 40",
    fill: "none",
    children: [jsx("rect", {
      x: "4",
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "1",
      y: "17",
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0.9",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("rect", {
      x: "41",
      y: "17",
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0.9",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M4.5 16V8.5C4.5 4.08172 7.49218 0.5 11.8 0.5H36.2C40.5078 0.5 43.5 4.08172 43.5 8.5V16",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M4.5 24V31.5C4.5 35.9183 7.49218 39.5 11.8 39.5H36.2C40.5078 39.5 43.5 35.9183 43.5 31.5V24",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33 9H15V11H23V31H25V11H33V9Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$eh7() {
  return jsxs("svg", {
    width: "48",
    height: "40",
    viewBox: "0 0 48 40",
    fill: "none",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 8C4 3.58172 7.58172 0 12 0H36C40.4183 0 44 3.58172 44 8V16H40V24H44V32C44 36.4183 40.4183 40 36 40H12C7.58172 40 4 36.4183 4 32V24H8V16H4V8Z",
      fill: "#F5F5F5"
    }), jsx("rect", {
      x: "1",
      y: "17",
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0.9",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("rect", {
      x: "41",
      y: "17",
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0.9",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M4.5 16V8.5C4.5 4.08172 7.49218 0.5 11.8 0.5H36.2C40.5078 0.5 43.5 4.08172 43.5 8.5V16",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M4.5 24V31.5C4.5 35.9183 7.49218 39.5 11.8 39.5H36.2C40.5078 39.5 43.5 35.9183 43.5 31.5V24",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33 9H15V11H23V31H25V11H33V9Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$em49() {
  return jsxs("svg", {
    width: "48",
    height: "40",
    viewBox: "0 0 48 40",
    fill: "none",
    children: [jsx("rect", {
      x: "1",
      y: "17",
      width: "6",
      height: "6",
      fill: "#9747FF",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("rect", {
      x: "41",
      y: "17",
      width: "6",
      height: "6",
      fill: "#9747FF",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 8C4 3.58172 7.58172 0 12 0H36C40.4183 0 44 3.58172 44 8V16H40V24H44V32C44 36.4183 40.4183 40 36 40H12C7.58172 40 4 36.4183 4 32V24H8V16H4V8Z",
      fill: "#9747FF"
    }), jsx("mask", {
      id: "path-4-inside-1_1014310_50946",
      fill: "white",
      children: jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M33 9H15V11H23V31H25V11H33V9Z"
      })
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33 9H15V11H23V31H25V11H33V9Z",
      fill: "white"
    }), jsx("path", {
      d: "M15 9V8H14V9H15ZM33 9H34V8H33V9ZM15 11H14V12H15V11ZM23 11H24V10H23V11ZM23 31H22V32H23V31ZM25 31V32H26V31H25ZM25 11V10H24V11H25ZM33 11V12H34V11H33ZM15 10H33V8H15V10ZM16 11V9H14V11H16ZM23 10H15V12H23V10ZM24 31V11H22V31H24ZM25 30H23V32H25V30ZM24 11V31H26V11H24ZM33 10H25V12H33V10ZM32 9V11H34V9H32Z",
      fill: "white",
      mask: "url(#path-4-inside-1_1014310_50946)"
    })]
  });
}
export function $$eg51() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24 12C24 13.8382 22.7125 15.3937 21.0234 15.862L21.0844 16.1232L22.2429 21.1436H17.7571L18.5638 17.6477L18.9817 15.862C17.2926 15.3937 16 13.8382 16 12C16 9.79086 17.7909 8 20 8C22.2091 8 24 9.79086 24 12ZM16.6622 16.9936C15.0544 15.9178 14 14.0828 14 12C14 8.68629 16.6863 6 20 6C23.3137 6 26 8.68629 26 12C26 14.0841 24.9465 15.92 23.3383 16.9955L24.3326 21.3042L28.2169 22.1674L29 22.3414V23.1436V28.1436V29.1436H28H12H11V28.1436V23.1436V22.3414L11.7831 22.1674L15.6674 21.3042L16.6622 16.9936ZM27 23.9457L23.3902 23.1436H16.6098L13 23.9457V27.1436H27V23.9457ZM12 34.1436V32.1436H28V34.1436H12Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$ef45() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#F5F5F5"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24 12C24 13.8382 22.7125 15.3937 21.0234 15.862L21.0844 16.1232L22.2429 21.1436H17.7571L18.5638 17.6477L18.9817 15.862C17.2926 15.3937 16 13.8382 16 12C16 9.79086 17.7909 8 20 8C22.2091 8 24 9.79086 24 12ZM16.6622 16.9936C15.0544 15.9178 14 14.0828 14 12C14 8.68629 16.6863 6 20 6C23.3137 6 26 8.68629 26 12C26 14.0841 24.9465 15.92 23.3383 16.9955L24.3326 21.3042L28.2169 22.1674L29 22.3414V23.1436V28.1436V29.1436H28H12H11V28.1436V23.1436V22.3414L11.7831 22.1674L15.6674 21.3042L16.6622 16.9936ZM27 23.9457L23.3902 23.1436H16.6098L13 23.9457V27.1436H27V23.9457ZM12 34.1436V32.1436H28V34.1436H12Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$eE35() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#9747FF"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24 12C24 13.8382 22.7125 15.3937 21.0234 15.862L21.0844 16.1232L22.2429 21.1436H17.7571L18.5638 17.6477L18.9817 15.862C17.2926 15.3937 16 13.8382 16 12C16 9.79086 17.7909 8 20 8C22.2091 8 24 9.79086 24 12ZM16.6622 16.9936C15.0544 15.9178 14 14.0828 14 12C14 8.68629 16.6863 6 20 6C23.3137 6 26 8.68629 26 12C26 14.0841 24.9465 15.92 23.3383 16.9955L24.3326 21.3042L28.2169 22.1674L29 22.3414V23.1436V28.1436V29.1436H28H12H11V28.1436V23.1436V22.3414L11.7831 22.1674L15.6674 21.3042L16.6622 16.9936ZM27 23.9457L23.3902 23.1436H16.6098L13 23.9457V27.1436H27V23.9457ZM12 34.1436V32.1436H28V34.1436H12Z",
      fill: "white"
    })]
  });
}
export function $$ey44() {
  return jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "8",
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("mask", {
      id: "path-3-inside-1_1019679_55716",
      fill: "white",
      children: jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M33.3576 13.6424L32 11L30.6424 13.6424L28 15L30.6424 16.3576L32 19L33.3576 16.3576L36 15L33.3576 13.6424ZM39.1682 26H41H42V27V38C42 40.2091 40.2091 42 38 42H18C15.7909 42 14 40.2091 14 38V27V26H15H28.1837C28.2225 25.3193 28.3893 24.6345 28.6965 23.9794C29.9863 21.2293 33.2613 20.0454 36.0114 21.3352C37.9039 22.2227 39.0547 24.0503 39.1682 26ZM37.1625 26C37.0532 24.8026 36.3294 23.6933 35.1622 23.146C33.4121 22.3252 31.3281 23.0786 30.5073 24.8287C30.329 25.2088 30.225 25.6047 30.1893 26H37.1625ZM25.8981 19.4218L22.4218 15.828L18.828 19.3044L22.3044 22.8981L25.8981 19.4218ZM23.8593 14.4375L22.4688 13L21.0312 14.3905L17.4375 17.8669L16 19.2574L17.3905 20.6949L20.8669 24.2887L22.2574 25.7262L23.6949 24.3356L27.2887 20.8593L28.7262 19.4688L27.3356 18.0313L23.8593 14.4375ZM16 38V28H40V38C40 39.1046 39.1046 40 38 40H18C16.8954 40 16 39.1046 16 38Z"
      })
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33.3576 13.6424L32 11L30.6424 13.6424L28 15L30.6424 16.3576L32 19L33.3576 16.3576L36 15L33.3576 13.6424ZM39.1682 26H41H42V27V38C42 40.2091 40.2091 42 38 42H18C15.7909 42 14 40.2091 14 38V27V26H15H28.1837C28.2225 25.3193 28.3893 24.6345 28.6965 23.9794C29.9863 21.2293 33.2613 20.0454 36.0114 21.3352C37.9039 22.2227 39.0547 24.0503 39.1682 26ZM37.1625 26C37.0532 24.8026 36.3294 23.6933 35.1622 23.146C33.4121 22.3252 31.3281 23.0786 30.5073 24.8287C30.329 25.2088 30.225 25.6047 30.1893 26H37.1625ZM25.8981 19.4218L22.4218 15.828L18.828 19.3044L22.3044 22.8981L25.8981 19.4218ZM23.8593 14.4375L22.4688 13L21.0312 14.3905L17.4375 17.8669L16 19.2574L17.3905 20.6949L20.8669 24.2887L22.2574 25.7262L23.6949 24.3356L27.2887 20.8593L28.7262 19.4688L27.3356 18.0313L23.8593 14.4375ZM16 38V28H40V38C40 39.1046 39.1046 40 38 40H18C16.8954 40 16 39.1046 16 38Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M32 11L33.7789 10.086L32 6.6237L30.2211 10.086L32 11ZM33.3576 13.6424L31.5787 14.5564L31.8723 15.1277L32.4436 15.4213L33.3576 13.6424ZM30.6424 13.6424L31.5564 15.4213L32.1277 15.1277L32.4213 14.5564L30.6424 13.6424ZM28 15L27.086 13.2211L23.6237 15L27.086 16.7789L28 15ZM30.6424 16.3576L32.4213 15.4436L32.1277 14.8723L31.5564 14.5787L30.6424 16.3576ZM32 19L30.2211 19.914L32 23.3763L33.7789 19.914L32 19ZM33.3576 16.3576L32.4436 14.5787L31.8723 14.8723L31.5787 15.4436L33.3576 16.3576ZM36 15L36.914 16.7789L40.3763 15L36.914 13.2211L36 15ZM39.1682 26L37.1715 26.1162L37.2812 28H39.1682V26ZM42 26H44V24H42V26ZM14 26V24H12V26H14ZM28.1837 26V28H30.0729L30.1804 26.1138L28.1837 26ZM28.6965 23.9794L26.8858 23.1302V23.1302L28.6965 23.9794ZM36.0114 21.3352L35.1622 23.146V23.146L36.0114 21.3352ZM37.1625 26V28H39.3533L39.1542 25.8183L37.1625 26ZM35.1622 23.146L34.313 24.9567V24.9567L35.1622 23.146ZM30.5073 24.8287L28.6965 23.9794L28.6965 23.9794L30.5073 24.8287ZM30.1893 26L28.1974 25.8203L28.0008 28H30.1893V26ZM22.4218 15.828L23.8593 14.4375L22.4688 13L21.0312 14.3905L22.4218 15.828ZM25.8981 19.4218L27.2887 20.8593L28.7262 19.4688L27.3356 18.0313L25.8981 19.4218ZM18.828 19.3044L17.4375 17.8669L16 19.2574L17.3905 20.6949L18.828 19.3044ZM22.3044 22.8981L20.8669 24.2887L22.2574 25.7262L23.6949 24.3356L22.3044 22.8981ZM22.4688 13L23.9063 11.6095L22.5157 10.172L21.0782 11.5625L22.4688 13ZM23.8593 14.4375L22.4218 15.828L22.4218 15.828L23.8593 14.4375ZM21.0312 14.3905L22.4218 15.828L22.4218 15.828L21.0312 14.3905ZM17.4375 17.8669L16.047 16.4294H16.047L17.4375 17.8669ZM16 19.2574L14.6095 17.8199L13.172 19.2104L14.5625 20.6479L16 19.2574ZM17.3905 20.6949L18.828 19.3044L18.828 19.3044L17.3905 20.6949ZM20.8669 24.2887L22.3044 22.8981H22.3044L20.8669 24.2887ZM22.2574 25.7262L20.8199 27.1167L22.2104 28.5542L23.6479 27.1637L22.2574 25.7262ZM23.6949 24.3356L22.3044 22.8981V22.8981L23.6949 24.3356ZM27.2887 20.8593L28.6792 22.2968V22.2968L27.2887 20.8593ZM28.7262 19.4688L30.1167 20.9063L31.5542 19.5157L30.1637 18.0782L28.7262 19.4688ZM27.3356 18.0313L28.7731 16.6407L28.7731 16.6407L27.3356 18.0313ZM16 28V26H14V28H16ZM40 28H42V26H40V28ZM30.2211 11.914L31.5787 14.5564L35.1366 12.7283L33.7789 10.086L30.2211 11.914ZM32.4213 14.5564L33.7789 11.914L30.2211 10.086L28.8634 12.7283L32.4213 14.5564ZM28.914 16.7789L31.5564 15.4213L29.7283 11.8634L27.086 13.2211L28.914 16.7789ZM31.5564 14.5787L28.914 13.2211L27.086 16.7789L29.7283 18.1366L31.5564 14.5787ZM33.7789 18.086L32.4213 15.4436L28.8634 17.2717L30.2211 19.914L33.7789 18.086ZM31.5787 15.4436L30.2211 18.086L33.7789 19.914L35.1366 17.2717L31.5787 15.4436ZM35.086 13.2211L32.4436 14.5787L34.2717 18.1366L36.914 16.7789L35.086 13.2211ZM32.4436 15.4213L35.086 16.7789L36.914 13.2211L34.2717 11.8634L32.4436 15.4213ZM39.1682 28H41V24H39.1682V28ZM41 28H42V24H41V28ZM40 26V27H44V26H40ZM40 27V38H44V27H40ZM40 38C40 39.1046 39.1046 40 38 40V44C41.3137 44 44 41.3137 44 38H40ZM38 40H18V44H38V40ZM18 40C16.8954 40 16 39.1046 16 38H12C12 41.3137 14.6863 44 18 44V40ZM16 38V27H12V38H16ZM16 27V26H12V27H16ZM14 28H15V24H14V28ZM15 28H28.1837V24H15V28ZM30.1804 26.1138C30.2049 25.6836 30.3102 25.2488 30.5073 24.8287L26.8858 23.1302C26.4684 24.0201 26.24 24.955 26.1869 25.8862L30.1804 26.1138ZM30.5073 24.8287C31.3281 23.0786 33.4121 22.3252 35.1622 23.146L36.8607 19.5244C33.1105 17.7657 28.6446 19.38 26.8858 23.1302L30.5073 24.8287ZM35.1622 23.146C36.3641 23.7096 37.099 24.8697 37.1715 26.1162L41.1648 25.8838C41.0104 23.2309 39.4437 20.7359 36.8607 19.5244L35.1622 23.146ZM39.1542 25.8183C38.9831 23.9427 37.8478 22.1964 36.0114 21.3352L34.313 24.9567C34.811 25.1903 35.1234 25.6625 35.1708 26.1817L39.1542 25.8183ZM36.0114 21.3352C33.2613 20.0454 29.9863 21.2293 28.6965 23.9794L32.318 25.6779C32.6698 24.9278 33.563 24.605 34.313 24.9567L36.0114 21.3352ZM28.6965 23.9794C28.4179 24.5735 28.2537 25.1964 28.1974 25.8203L32.1812 26.1797C32.1963 26.013 32.2401 25.8441 32.318 25.6779L28.6965 23.9794ZM30.1893 28H37.1625V24H30.1893V28ZM20.9843 17.2186L24.4606 20.8123L27.3356 18.0313L23.8593 14.4375L20.9843 17.2186ZM20.2186 20.7419L23.8123 17.2655L21.0312 14.3905L17.4375 17.8669L20.2186 20.7419ZM23.7419 21.5076L20.2655 17.9138L17.3905 20.6949L20.8669 24.2887L23.7419 21.5076ZM24.5076 17.9843L20.9138 21.4606L23.6949 24.3356L27.2887 20.8593L24.5076 17.9843ZM21.0312 14.3905L22.4218 15.828L25.2968 13.047L23.9063 11.6095L21.0312 14.3905ZM22.4218 15.828L23.8593 14.4375L21.0782 11.5625L19.6407 12.953L22.4218 15.828ZM18.828 19.3044L22.4218 15.828L19.6407 12.953L16.047 16.4294L18.828 19.3044ZM17.3905 20.6949L18.828 19.3044L16.047 16.4294L14.6095 17.8199L17.3905 20.6949ZM18.828 19.3044L17.4375 17.8669L14.5625 20.6479L15.953 22.0854L18.828 19.3044ZM22.3044 22.8981L18.828 19.3044L15.953 22.0854L19.4294 25.6792L22.3044 22.8981ZM23.6949 24.3356L22.3044 22.8981L19.4294 25.6792L20.8199 27.1167L23.6949 24.3356ZM22.3044 22.8981L20.8669 24.2887L23.6479 27.1637L25.0854 25.7731L22.3044 22.8981ZM25.8981 19.4218L22.3044 22.8981L25.0854 25.7731L28.6792 22.2968L25.8981 19.4218ZM27.3356 18.0313L25.8981 19.4218L28.6792 22.2968L30.1167 20.9063L27.3356 18.0313ZM25.8981 19.4218L27.2887 20.8593L30.1637 18.0782L28.7731 16.6407L25.8981 19.4218ZM22.4218 15.828L25.8981 19.4218L28.7731 16.6407L25.2968 13.047L22.4218 15.828ZM14 28V38H18V28H14ZM40 26H16V30H40V26ZM42 38V28H38V38H42ZM38 42C40.2091 42 42 40.2091 42 38H38V42ZM18 42H38V38H18V42ZM14 38C14 40.2091 15.7909 42 18 42V38H18H14Z",
      fill: "black",
      fillOpacity: "0.9",
      mask: "url(#path-3-inside-1_1019679_55716)"
    }), jsx("rect", {
      x: "8.5",
      y: "8.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    })]
  });
}
export function $$eb1() {
  return jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "8",
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "8.5",
      y: "8.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M11.5269 4L22.3945 9.08856L17.306 19.9562L6.4383 14.8677L11.5269 4Z",
      fill: "#FF8577"
    }), jsx("path", {
      d: "M51.3739 20.2821C49.7324 23.7823 45.5642 25.2891 42.064 23.6475C38.5639 22.006 37.0571 17.8378 38.6986 14.3376C40.3402 10.8375 44.5084 9.33072 48.0085 10.9723C51.5087 12.6138 53.0155 16.782 51.3739 20.2821Z",
      fill: "#C7B9FF"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.377 23.8507L25.8165 22.6624L27.3151 27.0003H28.4367L30.6793 20.0203L27.2397 21.2085L25.16 15.1885L22.377 23.8507Z",
      fill: "#FFC700"
    }), jsx("mask", {
      id: "path-6-inside-1_1019679_55739",
      fill: "white",
      children: jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M38.0275 4.97265L36.5002 2L34.9728 4.97265L32.0002 6.5L34.9728 8.02735L36.5002 11L38.0275 8.02735L41.0002 6.5L38.0275 4.97265ZM33.3487 11.6515L32.5002 10L31.6517 11.6515L30.0002 12.5L31.6517 13.3485L32.5002 15L33.3487 13.3485L35.0002 12.5L33.3487 11.6515ZM19.7353 10.0517L12.4902 6.65937L9.09785 13.9045L16.343 17.2969L19.7353 10.0517ZM11.527 4L6.43848 14.8677L17.3062 19.9562L22.3947 9.08856L11.527 4ZM49.5634 19.4329C48.3908 21.9331 45.4136 23.0093 42.9134 21.8368C40.4133 20.6643 39.3371 17.687 40.5096 15.1869C41.6821 12.6867 44.6594 11.6105 47.1595 12.783C49.6596 13.9555 50.7359 16.9328 49.5634 19.4329ZM51.3741 20.2821C49.7326 23.7823 45.5644 25.2891 42.0642 23.6475C38.564 22.006 37.0573 17.8378 38.6988 14.3376C40.3404 10.8375 44.5085 9.33072 48.0087 10.9723C51.5089 12.6138 53.0156 16.782 51.3741 20.2821ZM25.1601 15.1882L22.377 23.8504L25.8166 22.6621L26.9697 26H28.758L30.6794 20.02L27.2398 21.2082L25.1601 15.1882ZM30.8587 26L32.5835 20.6318C32.8152 19.9105 32.6196 19.1203 32.0781 18.5905C31.5367 18.0607 30.7423 17.8823 30.0263 18.1296L28.4771 18.6648L27.0505 14.5352C26.7694 13.7215 25.9992 13.179 25.1384 13.1883C24.2776 13.1977 23.5193 13.7568 23.256 14.5764L20.4729 23.2386C20.2412 23.9598 20.4368 24.7501 20.9783 25.2799C21.5197 25.8097 22.3141 25.9881 23.0301 25.7408L24.5793 25.2056L24.8537 26H15H14V27V38C14 40.2091 15.7909 42 18 42H38C40.2091 42 42 40.2091 42 38V27V26H41H30.8587ZM16 38V28H40V38C40 39.1046 39.1046 40 38 40H18C16.8954 40 16 39.1046 16 38Z"
      })
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M38.0275 4.97265L36.5002 2L34.9728 4.97265L32.0002 6.5L34.9728 8.02735L36.5002 11L38.0275 8.02735L41.0002 6.5L38.0275 4.97265ZM33.3487 11.6515L32.5002 10L31.6517 11.6515L30.0002 12.5L31.6517 13.3485L32.5002 15L33.3487 13.3485L35.0002 12.5L33.3487 11.6515ZM19.7353 10.0517L12.4902 6.65937L9.09785 13.9045L16.343 17.2969L19.7353 10.0517ZM11.527 4L6.43848 14.8677L17.3062 19.9562L22.3947 9.08856L11.527 4ZM49.5634 19.4329C48.3908 21.9331 45.4136 23.0093 42.9134 21.8368C40.4133 20.6643 39.3371 17.687 40.5096 15.1869C41.6821 12.6867 44.6594 11.6105 47.1595 12.783C49.6596 13.9555 50.7359 16.9328 49.5634 19.4329ZM51.3741 20.2821C49.7326 23.7823 45.5644 25.2891 42.0642 23.6475C38.564 22.006 37.0573 17.8378 38.6988 14.3376C40.3404 10.8375 44.5085 9.33072 48.0087 10.9723C51.5089 12.6138 53.0156 16.782 51.3741 20.2821ZM25.1601 15.1882L22.377 23.8504L25.8166 22.6621L26.9697 26H28.758L30.6794 20.02L27.2398 21.2082L25.1601 15.1882ZM30.8587 26L32.5835 20.6318C32.8152 19.9105 32.6196 19.1203 32.0781 18.5905C31.5367 18.0607 30.7423 17.8823 30.0263 18.1296L28.4771 18.6648L27.0505 14.5352C26.7694 13.7215 25.9992 13.179 25.1384 13.1883C24.2776 13.1977 23.5193 13.7568 23.256 14.5764L20.4729 23.2386C20.2412 23.9598 20.4368 24.7501 20.9783 25.2799C21.5197 25.8097 22.3141 25.9881 23.0301 25.7408L24.5793 25.2056L24.8537 26H15H14V27V38C14 40.2091 15.7909 42 18 42H38C40.2091 42 42 40.2091 42 38V27V26H41H30.8587ZM16 38V28H40V38C40 39.1046 39.1046 40 38 40H18C16.8954 40 16 39.1046 16 38Z",
      fill: "white"
    }), jsx("path", {
      d: "M36.5002 2L38.2791 1.08599L36.5002 -2.3763L34.7213 1.08599L36.5002 2ZM38.0275 4.97265L36.2486 5.88666L36.5422 6.45801L37.1135 6.75158L38.0275 4.97265ZM34.9728 4.97265L35.8868 6.75158L36.4582 6.45801L36.7518 5.88666L34.9728 4.97265ZM32.0002 6.5L31.0862 4.72107L27.6239 6.5L31.0862 8.27893L32.0002 6.5ZM34.9728 8.02735L36.7518 7.11334L36.4582 6.54199L35.8868 6.24842L34.9728 8.02735ZM36.5002 11L34.7213 11.914L36.5002 15.3763L38.2791 11.914L36.5002 11ZM38.0275 8.02735L37.1135 6.24842L36.5422 6.54199L36.2486 7.11334L38.0275 8.02735ZM41.0002 6.5L41.9142 8.27893L45.3765 6.5L41.9142 4.72107L41.0002 6.5ZM32.5002 10L34.2791 9.08599L32.5002 5.6237L30.7213 9.08599L32.5002 10ZM33.3487 11.6515L31.5698 12.5655L31.8633 13.1368L32.4347 13.4304L33.3487 11.6515ZM31.6517 11.6515L32.5657 13.4304L33.137 13.1368L33.4306 12.5655L31.6517 11.6515ZM30.0002 12.5L29.0862 10.7211L25.6239 12.5L29.0862 14.2789L30.0002 12.5ZM31.6517 13.3485L33.4306 12.4345L33.137 11.8632L32.5657 11.5696L31.6517 13.3485ZM32.5002 15L30.7213 15.914L32.5002 19.3763L34.2791 15.914L32.5002 15ZM33.3487 13.3485L32.4347 11.5696L31.8633 11.8632L31.5698 12.4345L33.3487 13.3485ZM35.0002 12.5L35.9142 14.2789L39.3765 12.5L35.9142 10.7211L35.0002 12.5ZM12.4902 6.65937L13.3383 4.84809L11.527 4L10.6789 5.81128L12.4902 6.65937ZM19.7353 10.0517L21.5466 10.8998L22.3947 9.08856L20.5834 8.24047L19.7353 10.0517ZM9.09785 13.9045L7.28657 13.0564L6.43848 14.8677L8.24976 15.7158L9.09785 13.9045ZM16.343 17.2969L15.4949 19.1082L17.3062 19.9562L18.1543 18.145L16.343 17.2969ZM6.43848 14.8677L4.6272 14.0196L3.7791 15.8309L5.59038 16.679L6.43848 14.8677ZM11.527 4L12.3751 2.18872L10.5638 1.34063L9.71575 3.15191L11.527 4ZM17.3062 19.9562L16.4581 21.7675L18.2693 22.6156L19.1174 20.8043L17.3062 19.9562ZM22.3947 9.08856L24.206 9.93665L25.0541 8.12537L23.2428 7.27728L22.3947 9.08856ZM42.9134 21.8368L43.7626 20.026L42.9134 21.8368ZM49.5634 19.4329L47.7526 18.5837L49.5634 19.4329ZM40.5096 15.1869L38.6988 14.3376V14.3376L40.5096 15.1869ZM47.1595 12.783L48.0087 10.9723L47.1595 12.783ZM42.0642 23.6475L41.215 25.4583H41.215L42.0642 23.6475ZM51.3741 20.2821L49.5634 19.4329L51.3741 20.2821ZM38.6988 14.3376L36.8881 13.4884V13.4884L38.6988 14.3376ZM48.0087 10.9723L47.1595 12.783L47.1595 12.783L48.0087 10.9723ZM22.377 23.8504L20.4729 23.2386L19.2493 27.0469L23.0301 25.7408L22.377 23.8504ZM25.1601 15.1882L27.0505 14.5352L25.0913 8.86403L23.256 14.5764L25.1601 15.1882ZM25.8166 22.6621L27.707 22.0091L27.0539 20.1187L25.1635 20.7718L25.8166 22.6621ZM26.9697 26L25.0793 26.6531L25.5446 28H26.9697V26ZM28.758 26V28H30.2161L30.6622 26.6118L28.758 26ZM30.6794 20.02L32.5835 20.6318L33.8071 16.8235L30.0263 18.1296L30.6794 20.02ZM27.2398 21.2082L25.3494 21.8613L26.0025 23.7517L27.8929 23.0986L27.2398 21.2082ZM30.8587 26L28.9546 25.3882L28.1155 28H30.8587V26ZM32.5835 20.6318L34.4876 21.2436V21.2436L32.5835 20.6318ZM30.0263 18.1296L30.6794 20.02H30.6794L30.0263 18.1296ZM28.4771 18.6648L26.5868 19.3179L27.2398 21.2082L29.1302 20.5552L28.4771 18.6648ZM27.0505 14.5352L28.9409 13.8821L27.0505 14.5352ZM25.1384 13.1883L25.1601 15.1882L25.1384 13.1883ZM23.256 14.5764L21.3519 13.9646L23.256 14.5764ZM20.4729 23.2386L22.377 23.8504H22.377L20.4729 23.2386ZM23.0301 25.7408L23.6831 27.6311L23.6831 27.6311L23.0301 25.7408ZM24.5793 25.2056L26.4696 24.5525L25.8166 22.6621L23.9262 23.3152L24.5793 25.2056ZM24.8537 26V28H27.6606L26.7441 25.3469L24.8537 26ZM14 26V24H12V26H14ZM42 26H44V24H42V26ZM16 28V26H14V28H16ZM40 28H42V26H40V28ZM34.7213 2.91401L36.2486 5.88666L39.8065 4.05864L38.2791 1.08599L34.7213 2.91401ZM36.7518 5.88666L38.2791 2.91401L34.7213 1.08599L33.1939 4.05863L36.7518 5.88666ZM32.9142 8.27893L35.8868 6.75158L34.0588 3.19372L31.0862 4.72107L32.9142 8.27893ZM35.8868 6.24842L32.9142 4.72107L31.0862 8.27893L34.0588 9.80628L35.8868 6.24842ZM38.2791 10.086L36.7518 7.11334L33.1939 8.94136L34.7213 11.914L38.2791 10.086ZM36.2486 7.11334L34.7213 10.086L38.2791 11.914L39.8065 8.94136L36.2486 7.11334ZM40.0862 4.72107L37.1135 6.24842L38.9415 9.80628L41.9142 8.27893L40.0862 4.72107ZM37.1135 6.75158L40.0862 8.27893L41.9142 4.72107L38.9415 3.19372L37.1135 6.75158ZM30.7213 10.914L31.5698 12.5655L35.1276 10.7375L34.2791 9.08599L30.7213 10.914ZM33.4306 12.5655L34.2791 10.914L30.7213 9.08599L29.8727 10.7375L33.4306 12.5655ZM30.9142 14.2789L32.5657 13.4304L30.7376 9.87255L29.0862 10.7211L30.9142 14.2789ZM32.5657 11.5696L30.9142 10.7211L29.0862 14.2789L30.7376 15.1275L32.5657 11.5696ZM34.2791 14.086L33.4306 12.4345L29.8727 14.2625L30.7213 15.914L34.2791 14.086ZM31.5698 12.4345L30.7213 14.086L34.2791 15.914L35.1276 14.2625L31.5698 12.4345ZM34.0862 10.7211L32.4347 11.5696L34.2627 15.1275L35.9142 14.2789L34.0862 10.7211ZM32.4347 13.4304L34.0862 14.2789L35.9142 10.7211L34.2627 9.87255L32.4347 13.4304ZM11.6421 8.47065L18.8873 11.863L20.5834 8.24047L13.3383 4.84809L11.6421 8.47065ZM10.9091 14.7526L14.3015 7.50747L10.6789 5.81128L7.28657 13.0564L10.9091 14.7526ZM17.1911 15.4856L9.94594 12.0932L8.24976 15.7158L15.4949 19.1082L17.1911 15.4856ZM17.9241 9.20365L14.5317 16.4488L18.1543 18.145L21.5466 10.8998L17.9241 9.20365ZM8.24976 15.7158L13.3383 4.84809L9.71575 3.15191L4.6272 14.0196L8.24976 15.7158ZM18.1543 18.145L7.28657 13.0564L5.59038 16.679L16.4581 21.7675L18.1543 18.145ZM20.5834 8.24047L15.4949 19.1081L19.1174 20.8043L24.206 9.93665L20.5834 8.24047ZM10.6789 5.81128L21.5466 10.8998L23.2428 7.27728L12.3751 2.18872L10.6789 5.81128ZM42.0642 23.6475C45.5644 25.2891 49.7326 23.7823 51.3741 20.2821L47.7526 18.5837C47.0491 20.0838 45.2627 20.7295 43.7626 20.026L42.0642 23.6475ZM38.6988 14.3376C37.0573 17.8378 38.564 22.006 42.0642 23.6475L43.7626 20.026C42.2626 19.3225 41.6168 17.5362 42.3203 16.0361L38.6988 14.3376ZM48.0087 10.9723C44.5085 9.33072 40.3404 10.8375 38.6988 14.3376L42.3203 16.0361C43.0238 14.536 44.8102 13.8902 46.3103 14.5938L48.0087 10.9723ZM51.3741 20.2821C53.0156 16.782 51.5089 12.6138 48.0087 10.9723L46.3103 14.5938C47.8104 15.2973 48.4561 17.0836 47.7526 18.5837L51.3741 20.2821ZM41.215 25.4583C45.7152 27.5688 51.0743 25.6316 53.1849 21.1314L49.5634 19.4329C48.3908 21.9331 45.4136 23.0093 42.9134 21.8368L41.215 25.4583ZM36.8881 13.4884C34.7775 17.9887 36.7148 23.3478 41.215 25.4583L42.9134 21.8368C40.4133 20.6643 39.3371 17.687 40.5096 15.1869L36.8881 13.4884ZM48.8579 9.1615C44.3577 7.05096 38.9986 8.98819 36.8881 13.4884L40.5096 15.1869C41.6821 12.6867 44.6594 11.6105 47.1595 12.783L48.8579 9.1615ZM53.1849 21.1314C55.2954 16.6311 53.3582 11.272 48.8579 9.1615L47.1595 12.783C49.6596 13.9555 50.7359 16.9328 49.5634 19.4329L53.1849 21.1314ZM24.2812 24.4622L27.0643 15.8L23.256 14.5764L20.4729 23.2386L24.2812 24.4622ZM25.1635 20.7718L21.724 21.96L23.0301 25.7408L26.4696 24.5525L25.1635 20.7718ZM28.8601 25.3469L27.707 22.0091L23.9262 23.3152L25.0793 26.6531L28.8601 25.3469ZM26.9697 28H28.758V24H26.9697V28ZM28.7752 19.4082L26.8539 25.3882L30.6622 26.6118L32.5835 20.6318L28.7752 19.4082ZM27.8929 23.0986L31.3324 21.9104L30.0263 18.1296L26.5868 19.3179L27.8929 23.0986ZM23.2698 15.8413L25.3494 21.8613L29.1302 20.5552L27.0505 14.5352L23.2698 15.8413ZM32.7629 26.6118L34.4876 21.2436L30.6794 20.02L28.9546 25.3882L32.7629 26.6118ZM34.4876 21.2436C34.9511 19.8011 34.5598 18.2206 33.4769 17.161L30.6794 20.02V20.02L34.4876 21.2436ZM33.4769 17.161C32.394 16.1014 30.8053 15.7445 29.3733 16.2392L30.6794 20.02L30.6794 20.02L33.4769 17.161ZM29.3733 16.2392L27.8241 16.7744L29.1302 20.5552L30.6794 20.02L29.3733 16.2392ZM30.3675 18.0117L28.9409 13.8821L25.1601 15.1882L26.5868 19.3179L30.3675 18.0117ZM28.9409 13.8821C28.3787 12.2548 26.8382 11.1697 25.1166 11.1884L25.1601 15.1882H25.1601L28.9409 13.8821ZM25.1166 11.1884C23.395 11.2072 21.8785 12.3254 21.3519 13.9646L25.1601 15.1882H25.1601L25.1166 11.1884ZM21.3519 13.9646L18.5688 22.6268L22.377 23.8504L25.1601 15.1882L21.3519 13.9646ZM18.5688 22.6268C18.1053 24.0693 18.4966 25.6498 19.5795 26.7094L22.377 23.8504L22.377 23.8504L18.5688 22.6268ZM19.5795 26.7094C20.6625 27.769 22.2511 28.1258 23.6831 27.6311L22.377 23.8504L22.377 23.8504L19.5795 26.7094ZM23.6831 27.6311L25.2323 27.096L23.9262 23.3152L22.377 23.8504L23.6831 27.6311ZM22.6889 25.8586L22.9633 26.6531L26.7441 25.3469L26.4696 24.5525L22.6889 25.8586ZM15 28H24.8537V24H15V28ZM14 28H15V24H14V28ZM16 27V26H12V27H16ZM16 38V27H12V38H16ZM18 40C16.8954 40 16 39.1046 16 38H12C12 41.3137 14.6863 44 18 44V40ZM38 40H18V44H38V40ZM40 38C40 39.1046 39.1046 40 38 40V44C41.3137 44 44 41.3137 44 38H40ZM40 27V38H44V27H40ZM40 26V27H44V26H40ZM41 28H42V24H41V28ZM30.8587 28H41V24H30.8587V28ZM14 28V38H18V28H14ZM40 26H16V30H40V26ZM42 38V28H38V38H42ZM38 42C40.2091 42 42 40.2091 42 38H38V42ZM18 42H38V38H18V42ZM14 38C14 40.2091 15.7909 42 18 42V38H18H14Z",
      fill: "black",
      fillOpacity: "0.9",
      mask: "url(#path-6-inside-1_1019679_55739)"
    })]
  });
}
export function $$eT32() {
  return jsxs("svg", {
    width: "56",
    height: "62",
    viewBox: "0 0 56 62",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "11",
      width: "40",
      height: "40",
      rx: "8",
      fill: "#9747FF"
    }), jsx("path", {
      d: "M11.9511 6.09433L11.0454 5.67028L10.6214 6.57592L5.53284 17.4436L5.10879 18.3492L6.01443 18.7733L16.8821 23.8619L17.7878 24.2859L18.2118 23.3803L23.3004 12.5126L23.7244 11.6069L22.8188 11.1829L11.9511 6.09433Z",
      fill: "#9747FF",
      stroke: "#9747FF",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M41.6394 27.5529C45.6396 29.4289 50.4033 27.7069 52.2793 23.7067C54.1553 19.7065 52.4334 14.9429 48.4331 13.0668C44.4329 11.1908 39.6693 12.9128 37.7933 16.913C35.9172 20.9132 37.6392 25.6769 41.6394 27.5529Z",
      fill: "#9747FF",
      stroke: "#9747FF",
      strokeWidth: "2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.3772 26.8504L25.8167 25.6621L27.3153 30H28.4369L30.6795 23.02L27.2399 24.2082L25.1602 18.1882L22.3772 26.8504Z",
      fill: "#9747FF"
    }), jsx("path", {
      d: "M15 30H41V41C41 42.6569 39.6569 44 38 44H18C16.3431 44 15 42.6569 15 41V30Z",
      stroke: "white",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M37.3897 4.54299L36.5002 2.81185L35.6108 4.54299L34.2302 7.22997L31.5432 8.61054L29.8121 9.5L31.5432 10.3895L34.2302 11.77L35.6108 14.457L36.5002 16.1881L37.3897 14.457L38.7703 11.77L41.4573 10.3895L43.1884 9.5L41.4573 8.61054L38.7703 7.22997L37.3897 4.54299Z",
      fill: "white",
      stroke: "#9747FF",
      strokeWidth: "2"
    }), jsx("path", {
      d: "M32.5002 13L33.3488 14.6515L35.0002 15.5L33.3488 16.3485L32.5002 18L31.6517 16.3485L30.0002 15.5L31.6517 14.6515L32.5002 13Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.7354 13.0517L12.4903 9.65937L9.09791 16.9045L16.343 20.2969L19.7354 13.0517ZM11.5271 7L6.43854 17.8677L17.3062 22.9562L22.3948 12.0886L11.5271 7Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M42.9135 24.8368C45.4136 26.0093 48.3909 24.9331 49.5634 22.4329C50.7359 19.9328 49.6597 16.9555 47.1596 15.783C44.6594 14.6105 41.6822 15.6867 40.5096 18.1869C39.3371 20.687 40.4134 23.6643 42.9135 24.8368ZM42.0643 26.6475C45.5645 28.2891 49.7327 26.7823 51.3742 23.2821C53.0157 19.782 51.509 15.6138 48.0088 13.9723C44.5086 12.3307 40.3404 13.8375 38.6989 17.3376C37.0574 20.8378 38.5641 25.006 42.0643 26.6475Z",
      fill: "white"
    }), jsx("mask", {
      id: "path-10-inside-1_1_174",
      fill: "white",
      children: jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M25.1598 18.1883L22.3767 26.8505L25.8163 25.6623L26.9693 29.0001H24.8534L24.5789 28.2057L23.0297 28.7409C22.3137 28.9883 21.5194 28.8098 20.9779 28.28C20.4365 27.7502 20.2408 26.96 20.4726 26.2387L23.2557 17.5766C23.519 16.757 24.2772 16.1978 25.138 16.1885C25.9988 16.1791 26.7691 16.7216 27.0502 17.5353L28.4768 21.6649L30.026 21.1297C30.742 20.8824 31.5363 21.0608 32.0778 21.5906C32.6192 22.1204 32.8149 22.9107 32.5832 23.6319L30.8584 29.0001H28.7577L30.679 23.0201L27.2395 24.2084L25.1598 18.1883Z"
      })
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.1598 18.1883L22.3767 26.8505L25.8163 25.6623L26.9693 29.0001H24.8534L24.5789 28.2057L23.0297 28.7409C22.3137 28.9883 21.5194 28.8098 20.9779 28.28C20.4365 27.7502 20.2408 26.96 20.4726 26.2387L23.2557 17.5766C23.519 16.757 24.2772 16.1978 25.138 16.1885C25.9988 16.1791 26.7691 16.7216 27.0502 17.5353L28.4768 21.6649L30.026 21.1297C30.742 20.8824 31.5363 21.0608 32.0778 21.5906C32.6192 22.1204 32.8149 22.9107 32.5832 23.6319L30.8584 29.0001H28.7577L30.679 23.0201L27.2395 24.2084L25.1598 18.1883Z",
      fill: "white"
    }), jsx("path", {
      d: "M22.3767 26.8505L20.4726 26.2387L19.249 30.047L23.0297 28.7409L22.3767 26.8505ZM25.1598 18.1883L27.0502 17.5353L25.091 11.8642L23.2557 17.5766L25.1598 18.1883ZM25.8163 25.6623L27.7066 25.0092L27.0536 23.1189L25.1632 23.7719L25.8163 25.6623ZM26.9693 29.0001V31.0001H29.7763L28.8597 28.3471L26.9693 29.0001ZM24.8534 29.0001L22.963 29.6532L23.4283 31.0001H24.8534V29.0001ZM24.5789 28.2057L26.4693 27.5527L25.8163 25.6623L23.9259 26.3153L24.5789 28.2057ZM23.0297 28.7409L22.3767 26.8505L22.3767 26.8505L23.0297 28.7409ZM20.9779 28.28L22.3767 26.8505L22.3767 26.8505L20.9779 28.28ZM20.4726 26.2387L22.3767 26.8505L22.3767 26.8505L20.4726 26.2387ZM23.2557 17.5766L21.3515 16.9648L21.3515 16.9648L23.2557 17.5766ZM25.138 16.1885L25.1598 18.1883L25.138 16.1885ZM27.0502 17.5353L28.9405 16.8822L28.9405 16.8822L27.0502 17.5353ZM28.4768 21.6649L26.5864 22.318L27.2395 24.2084L29.1298 23.5553L28.4768 21.6649ZM30.026 21.1297L30.679 23.0201L30.679 23.0201L30.026 21.1297ZM32.0778 21.5906L30.679 23.0201L30.679 23.0201L32.0778 21.5906ZM32.5832 23.6319L34.4873 24.2437L34.4873 24.2437L32.5832 23.6319ZM30.8584 29.0001V31.0001H32.3165L32.7625 29.6119L30.8584 29.0001ZM28.7577 29.0001L26.8536 28.3883L26.0144 31.0001H28.7577V29.0001ZM30.679 23.0201L32.5832 23.6319L33.8067 19.8236L30.026 21.1297L30.679 23.0201ZM27.2395 24.2084L25.3491 24.8614L26.0021 26.7518L27.8925 26.0987L27.2395 24.2084ZM24.2808 27.4623L27.0639 18.8001L23.2557 17.5766L20.4726 26.2387L24.2808 27.4623ZM25.1632 23.7719L21.7236 24.9601L23.0297 28.7409L26.4693 27.5527L25.1632 23.7719ZM28.8597 28.3471L27.7066 25.0092L23.9259 26.3153L25.079 29.6532L28.8597 28.3471ZM24.8534 31.0001H26.9693V27.0001H24.8534V31.0001ZM26.7437 28.3471L26.4693 27.5527L22.6885 28.8588L22.963 29.6532L26.7437 28.3471ZM23.9259 26.3153L22.3767 26.8505L23.6828 30.6313L25.232 30.0961L23.9259 26.3153ZM22.3767 26.8505L22.3767 26.8505L19.5792 29.7095C20.6621 30.7692 22.2508 31.126 23.6828 30.6313L22.3767 26.8505ZM22.3767 26.8505L22.3767 26.8505L18.5684 25.6269C18.105 27.0694 18.4963 28.6499 19.5792 29.7095L22.3767 26.8505ZM22.3767 26.8505L25.1598 18.1883L21.3515 16.9648L18.5684 25.6269L22.3767 26.8505ZM25.1598 18.1883L25.1598 18.1883L25.1163 14.1886C23.3947 14.2073 21.8782 15.3256 21.3515 16.9648L25.1598 18.1883ZM25.1598 18.1883L25.1598 18.1883L28.9405 16.8822C28.3783 15.2549 26.8379 14.1699 25.1163 14.1886L25.1598 18.1883ZM25.1598 18.1883L26.5864 22.318L30.3672 21.0119L28.9405 16.8822L25.1598 18.1883ZM29.1298 23.5553L30.679 23.0201L29.3729 19.2394L27.8237 19.7746L29.1298 23.5553ZM30.679 23.0201L30.679 23.0201L33.4765 20.1611C32.3936 19.1015 30.805 18.7447 29.3729 19.2394L30.679 23.0201ZM30.679 23.0201L30.679 23.0201L34.4873 24.2437C34.9507 22.8012 34.5594 21.2207 33.4765 20.1611L30.679 23.0201ZM30.679 23.0201L28.9543 28.3883L32.7625 29.6119L34.4873 24.2437L30.679 23.0201ZM28.7577 31.0001H30.8584V27.0001H28.7577V31.0001ZM28.7749 22.4083L26.8536 28.3883L30.6618 29.6119L32.5832 23.6319L28.7749 22.4083ZM27.8925 26.0987L31.3321 24.9105L30.026 21.1297L26.5864 22.318L27.8925 26.0987ZM23.2694 18.8414L25.3491 24.8614L29.1298 23.5553L27.0502 17.5353L23.2694 18.8414Z",
      fill: "white",
      mask: "url(#path-10-inside-1_1_174)"
    })]
  });
}
export function $$eI28() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M7 18V30C7 31.6569 8.34315 33 10 33H30C31.6569 33 33 31.6569 33 30V10C33 8.34315 31.6569 7 30 7H26",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2",
      strokeLinecap: "square"
    }), jsx("rect", {
      x: "7",
      y: "7",
      width: "14",
      height: "6",
      rx: "1",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2"
    })]
  });
}
export function $$eS56() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#F5F5F5"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M7 18V30C7 31.6569 8.34315 33 10 33H30C31.6569 33 33 31.6569 33 30V10C33 8.34315 31.6569 7 30 7H26",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2",
      strokeLinecap: "square"
    }), jsx("rect", {
      x: "7",
      y: "7",
      width: "14",
      height: "6",
      rx: "1",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2"
    })]
  });
}
export function $$ev25() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#9747FF"
    }), jsx("path", {
      d: "M7 18V30C7 31.6569 8.34315 33 10 33H30C31.6569 33 33 31.6569 33 30V10C33 8.34315 31.6569 7 30 7H26",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "square"
    }), jsx("rect", {
      x: "7",
      y: "7",
      width: "14",
      height: "6",
      rx: "1",
      stroke: "white",
      strokeWidth: "2"
    })]
  });
}
export function $$eA14() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 6C7.79086 6 6 7.79086 6 10V30C6 32.2091 7.79086 34 10 34H30C32.2091 34 34 32.2091 34 30V10C34 7.79086 32.2091 6 30 6H10ZM8 10C8 8.89543 8.89543 8 10 8H14V15H8V10ZM14 17H8V23H14V17ZM16 23V17H32V23H16ZM14 25H8V30C8 31.1046 8.89543 32 10 32H14V25ZM16 32V25H32V30C32 31.1046 31.1046 32 30 32H16ZM16 15V8H30C31.1046 8 32 8.89543 32 10V15H16Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$ex48() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#F5F5F5"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 6C7.79086 6 6 7.79086 6 10V30C6 32.2091 7.79086 34 10 34H30C32.2091 34 34 32.2091 34 30V10C34 7.79086 32.2091 6 30 6H10ZM8 10C8 8.89543 8.89543 8 10 8H14V15H8V10ZM14 17H8V23H14V17ZM16 23V17H32V23H16ZM14 25H8V30C8 31.1046 8.89543 32 10 32H14V25ZM16 32V25H32V30C32 31.1046 31.1046 32 30 32H16ZM16 15V8H30C31.1046 8 32 8.89543 32 10V15H16Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$eN50() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "#9747FF"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 6C7.79086 6 6 7.79086 6 10V30C6 32.2091 7.79086 34 10 34H30C32.2091 34 34 32.2091 34 30V10C34 7.79086 32.2091 6 30 6H10ZM8 10C8 8.89543 8.89543 8 10 8H14V15H8V10ZM14 17H8V23H14V17ZM16 23V17H32V23H16ZM14 25H8V30C8 31.1046 8.89543 32 10 32H14V25ZM16 32V25H32V30C32 31.1046 31.1046 32 30 32H16ZM16 15V8H30C31.1046 8 32 8.89543 32 10V15H16Z",
      fill: "white"
    })]
  });
}
export function $$eC17() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("rect", {
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M8.58334 19.75C8.58334 13.5828 13.5828 8.58333 19.75 8.58333C25.9172 8.58333 30.9167 13.5828 30.9167 19.75C30.9167 25.9172 25.9172 30.9167 19.75 30.9167H12.45C11.5818 30.9167 10.9907 30.9159 10.5337 30.8785C10.0883 30.8422 9.85896 30.7761 9.69811 30.6941C9.31394 30.4984 9.00161 30.1861 8.80586 29.8019C8.7239 29.641 8.65784 29.4117 8.62145 28.9663C8.58411 28.5093 8.58334 27.9182 8.58334 27.05V19.75Z",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2"
    })]
  });
}
export function $$ew37() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("path", {
      d: "M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z",
      fill: "#F5F5F5"
    }), jsx("path", {
      d: "M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      d: "M8.58334 19.75C8.58334 13.5828 13.5828 8.58333 19.75 8.58333C25.9172 8.58333 30.9167 13.5828 30.9167 19.75C30.9167 25.9172 25.9172 30.9167 19.75 30.9167H12.45C11.5818 30.9167 10.9907 30.9159 10.5337 30.8785C10.0883 30.8422 9.85896 30.7761 9.69811 30.6941C9.31394 30.4984 9.00161 30.1861 8.80586 29.8019C8.7239 29.641 8.65784 29.4117 8.62145 28.9663C8.58411 28.5093 8.58334 27.9182 8.58334 27.05V19.75Z",
      stroke: "black",
      strokeOpacity: "0.9",
      strokeWidth: "2"
    })]
  });
}
export function $$eO5() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("path", {
      d: "M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z",
      fill: "#8A38F5"
    }), jsx("path", {
      d: "M8.58333 19.75C8.58333 13.5828 13.5828 8.58333 19.75 8.58333C25.9172 8.58333 30.9167 13.5828 30.9167 19.75C30.9167 25.9172 25.9172 30.9167 19.75 30.9167H12.45C11.5818 30.9167 10.9907 30.9159 10.5337 30.8785C10.0883 30.8422 9.85896 30.7761 9.6981 30.6941C9.31394 30.4984 9.0016 30.1861 8.80586 29.8019C8.7239 29.641 8.65784 29.4117 8.62145 28.9663C8.58411 28.5093 8.58333 27.9182 8.58333 27.05V19.75Z",
      stroke: "white",
      strokeWidth: "2"
    })]
  });
}
export function $$eR47() {
  return jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "8",
      width: "40",
      height: "40",
      rx: "8",
      fill: "white"
    }), jsx("rect", {
      x: "8.5",
      y: "8.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27 27V19H29V27H37V29H29V37H27V29H19V27H27Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$eL27() {
  return jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "8",
      width: "40",
      height: "40",
      rx: "8",
      fill: "#F5F5F5"
    }), jsx("rect", {
      x: "8.5",
      y: "8.5",
      width: "39",
      height: "39",
      rx: "7.5",
      stroke: "black",
      strokeOpacity: "0.2"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27 27V19H29V27H37V29H29V37H27V29H19V27H27Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
export function $$eP34() {
  return jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    children: [jsx("rect", {
      x: "8",
      y: "8",
      width: "40",
      height: "40",
      rx: "8",
      fill: "#9747FF"
    }), jsx("rect", {
      width: "32",
      height: "32",
      transform: "translate(12 12)",
      fill: "#9747FF"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27 27V19H29V27H37V29H29V37H27V29H19V27H27Z",
      fill: "white"
    })]
  });
}
export const $W = $$Q0;
export const AZ = $$eb1;
export const Ad = $$er2;
export const BK = $$H3;
export const Ch = $$e_4;
export const EB = $$eO5;
export const FJ = $$eu6;
export const Gb = $$eh7;
export const H9 = $$V8;
export const Jo = $$eo9;
export const KB = $$z10;
export const Nm = $$Z11;
export const OS = $$T12;
export const P6 = $$Y13;
export const PW = $$eA14;
export const QF = $$el15;
export const RB = $$en16;
export const Rz = $$eC17;
export const S2 = $$ei18;
export const Ty = $$ep19;
export const UJ = $$S20;
export const Uf = $$b21;
export const VC = $$$22;
export const Vx = $$et23;
export const Wm = $$j24;
export const XU = $$ev25;
export const Z3 = $$q26;
export const ZH = $$eL27;
export const aO = $$eI28;
export const b1 = $$X29;
export const bE = $$ed30;
export const bp = $$U31;
export const cN = $$eT32;
export const cc = $$K33;
export const cs = $$eP34;
export const dF = $$eE35;
export const ej = $$y36;
export const hM = $$ew37;
export const hP = $$G38;
export const iB = $$W39;
export const il = $$B40;
export const jN = $$E41;
export const kd = $$ec42;
export const kf = $$es43;
export const lV = $$ey44;
export const mS = $$ef45;
export const nF = $$F46;
export const nX = $$eR47;
export const nb = $$ex48;
export const nl = $$em49;
export const oN = $$eN50;
export const oV = $$eg51;
export const qO = $$J52;
export const rX = $$I53;
export const sb = $$ee54;
export const wB = $$f55;
export const wv = $$eS56;
export const y8 = $$ea57;