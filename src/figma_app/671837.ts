import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { sha1HexFromBytes } from "../905/125019";
import { useAtomWithSubscription } from "../figma_app/27355";
import o from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { Point } from "../905/736624";
import { GI, IZ, SK } from "../905/125333";
import { SvgComponent } from "../905/714743";
import { F } from "../905/989956";
import { jS, Pv } from "../905/619652";
import { R as _$$R } from "../figma_app/640506";
import { uM, Iz } from "../905/888175";
import { B as _$$B } from "../figma_app/371825";
import { bY, cf, jU, cq, Kb, Zu, yk, v5, kV, iI } from "../figma_app/731560";
import { jR, wO } from "../figma_app/728075";
import { A as _$$A } from "../svg/70771";
var l = o;
function y({
  width: e,
  height: t,
  offsetX: r,
  offsetY: i,
  imageSrc: a,
  imageWidth: s,
  imageHeight: o
}) {
  return jsx("div", {
    className: bY,
    style: {
      width: e,
      height: t,
      background: `url(${a})`,
      backgroundPosition: `${-r}px ${-i}px`,
      backgroundSize: `${s}px ${o}px`
    }
  });
}
export let $$I0 = 72;
export function $$S1({
  action: e
}) {
  let t = useAtomWithSubscription(GI);
  let r = useAtomWithSubscription(IZ);
  let i = F.format(t.paints?.[0]?.color);
  let a = F.format(r.paints?.[0]?.color);
  return "set-tool-eraser" === e ? jsx($$N2, {
    type: "Eraser",
    size: "Big"
  }) : "set-tool-highlighter" === e ? jsx($$N2, {
    type: "Highlighter",
    size: "Big",
    color: a
  }) : "set-tool-pencil" === e ? jsx($$N2, {
    type: "Pencil",
    size: "Big",
    color: i
  }) : "set-tool-washi-tape" === e ? jsx($$N2, {
    type: "Washi tape",
    size: "Big"
  }) : null;
}
export function $$v3({
  action: e
}) {
  let t = "set-tool-eraser" === e ? "Eraser" : "set-tool-highlighter" === e ? "Highlighter" : "set-tool-pencil" === e ? "Pencil" : "set-tool-washi-tape" === e ? "Washi tape" : null;
  return t && jsx($$N2, {
    type: t,
    size: "Big",
    isPlaceholder: !0
  });
}
let A = {
  imageSrc: buildUploadUrl("73db92005c6f44c51579c75c42abbba8b471b4af"),
  imageWidth: 356,
  imageHeight: 136
};
let x = {
  EraserBig: {
    offsetX: 4,
    offsetY: 0,
    width: 68,
    height: 136,
    ...A
  },
  EraserSmall: {
    offsetX: 82,
    offsetY: 40,
    width: 64,
    height: 96,
    ...A
  },
  EraserBigPlaceholder: {
    offsetX: 152,
    offsetY: 0,
    width: 68,
    height: 136,
    ...A
  },
  PencilBigPlaceholder: {
    offsetX: 220,
    offsetY: 0,
    width: 68,
    height: 136,
    ...A
  },
  HighlighterBigPlaceholder: {
    offsetX: 288,
    offsetY: 0,
    width: 68,
    height: 136,
    ...A
  }
};
export function $$N2({
  type: e,
  size: t,
  color: r,
  isPlaceholder: i = !1
}) {
  let a = useAtomWithSubscription(GI);
  let o = useAtomWithSubscription(IZ);
  let l = a.strokeWeight === uM;
  let d = o.strokeWeight === Iz;
  if (i) switch (e) {
    case "Washi tape":
      return jsx(SvgComponent, {
        svg: _$$A,
        className: cf
      });
    case "Eraser":
    case "Highlighter":
    case "Pencil":
      let c = x[`${e}${t}Placeholder`];
      return jsx(_$$R, {
        isThick: "Pencil" === e && l || "Highlighter" === e && d,
        placeholderToolType: i ? e : void 0,
        children: y(c)
      });
  } else switch (e) {
    case "Eraser":
      return y(x["Big" === t ? "EraserBig" : "EraserSmall"]);
    case "Highlighter":
      let _ = "Big" === t ? jsx(O, {
        color: r
      }) : jsx(R, {
        color: r
      });
      return jsx(_$$R, {
        isThick: d,
        children: _
      });
    case "Pencil":
      let h = "Big" === t ? jsx(C, {
        color: r
      }) : jsx(w, {
        color: r
      });
      return jsx(_$$R, {
        isThick: l,
        children: h
      });
    case "Washi tape":
      return jsx(D, {
        size: t
      });
  }
}
function C({
  color: e = jR
}) {
  return jsxs("svg", {
    className: l()(jU, cq),
    width: "48",
    height: "136",
    viewBox: "20 0 48 136",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_5757_63520)",
      children: [jsxs("g", {
        filter: "url(#filter0_i_5757_63520)",
        children: [jsx("path", {
          d: "M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z",
          fill: "white"
        }), jsx("path", {
          d: "M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z",
          fill: "url(#paint0_linear_5757_63520)"
        })]
      }), jsx("g", {
        opacity: "0.36",
        filter: "url(#filter1_f_5757_63520)",
        children: jsx("rect", {
          x: "39",
          y: "34",
          width: "12",
          height: "102",
          fill: e,
          className: cq
        })
      }), jsx("path", {
        d: "M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z",
        fill: "white",
        fillOpacity: "0.3"
      }), jsx("path", {
        d: "M35.3715 36.2972L35.3716 36.2972L35.3722 36.2946C35.8557 34.4983 37.4844 33.25 39.3445 33.25H48.6038C50.4867 33.25 52.1292 34.5284 52.5915 36.3536L52.5915 36.3536L52.5932 36.3599L66.4125 85.4517C67.3 88.6042 67.75 91.8638 67.75 95.1388V135.75H20.25L20.2501 95.1218C20.2501 91.8577 20.6971 88.6089 21.5787 85.4661L35.3715 36.2972Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      }), jsx("path", {
        d: "M42.5019 17.1186C42.6985 16.4551 43.308 16 44 16V16C44.692 16 45.3015 16.4551 45.4981 17.1186L50.5 34H37.5L42.5019 17.1186Z",
        fill: e,
        className: cq
      }), jsx("path", {
        d: "M45.2584 17.1896L50.1652 33.75H37.8348L42.7416 17.1896C42.9067 16.6323 43.4187 16.25 44 16.25C44.5813 16.25 45.0933 16.6323 45.2584 17.1896Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_i_5757_63520",
        x: "20",
        y: "33",
        width: "48",
        height: "104.091",
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
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "3.27273"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.545455"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.54 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_5757_63520"
        })]
      }), jsxs("filter", {
        id: "filter1_f_5757_63520",
        x: "32",
        y: "28",
        width: "24",
        height: "114",
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
          stdDeviation: "3",
          result: "effect1_foregroundBlur_5757_63520"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_5757_63520",
        x1: "20",
        y1: "151",
        x2: "67.9944",
        y2: "150.483",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "0.262579",
          stopColor: "white",
          stopOpacity: "0.0823736"
        }), jsx("stop", {
          offset: "0.743368",
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.2"
        })]
      }), jsx("clipPath", {
        id: "clip0_5757_63520",
        children: jsx("rect", {
          width: "88",
          height: "136",
          fill: "white"
        })
      })]
    })]
  });
}
function w({
  color: e = jR
}) {
  return jsxs("svg", {
    className: Kb,
    width: "64",
    height: "96",
    viewBox: "0 0 64 96",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_i_5757_63551)",
      children: [jsx("path", {
        d: "M28.8964 23.3333C27.5809 23.3333 26.4291 24.2161 26.0872 25.4863L16.892 58.2656C16.3002 60.3755 16 62.5565 16 64.7478L16 92H48V64.7591C48 62.5605 47.6979 60.3723 47.1021 58.2559L37.8893 25.5281C37.5623 24.2373 36.4008 23.3333 35.0692 23.3333H28.8964Z",
        fill: "white"
      }), jsx("path", {
        d: "M28.8964 23.3333C27.5809 23.3333 26.4291 24.2161 26.0872 25.4863L16.892 58.2656C16.3002 60.3755 16 62.5565 16 64.7478L16 92H48V64.7591C48 62.5605 47.6979 60.3723 47.1021 58.2559L37.8893 25.5281C37.5623 24.2373 36.4008 23.3333 35.0692 23.3333H28.8964Z",
        fill: "url(#paint0_linear_5757_63551)"
      })]
    }), jsx("g", {
      opacity: "0.36",
      filter: "url(#filter1_f_5757_63551)",
      children: jsx("rect", {
        x: "28",
        y: "24",
        width: "8",
        height: "68",
        fill: e,
        className: cq
      })
    }), jsx("path", {
      d: "M28.8964 23.3333C27.5809 23.3333 26.4291 24.2161 26.0872 25.4863L16.892 58.2656C16.3002 60.3755 16 62.5565 16 64.7478L16 92H48V64.7591C48 62.5605 47.6979 60.3723 47.1021 58.2559L37.8893 25.5281C37.5623 24.2373 36.4008 23.3333 35.0692 23.3333H28.8964Z",
      fill: "white",
      fillOpacity: "0.3"
    }), jsx("path", {
      d: "M26.3279 25.5539L26.3279 25.5539L26.3286 25.5513C26.6411 24.3902 27.6939 23.5833 28.8964 23.5833H35.0692C36.2863 23.5833 37.3481 24.4096 37.6469 25.5894L37.6468 25.5895L37.6486 25.5958L46.8615 58.3236C47.451 60.418 47.75 62.5834 47.75 64.7591V91.75H16.25L16.25 64.7478C16.25 62.5793 16.547 60.421 17.1327 58.3331L26.3279 25.5539Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("path", {
      d: "M31.0016 12.7457C31.1326 12.3034 31.539 12 32.0003 12V12C32.4616 12 32.868 12.3034 32.9991 12.7457L36.3337 24H27.667L31.0016 12.7457Z",
      fill: e,
      className: cq
    }), jsx("path", {
      d: "M32.7594 12.8168L35.9988 23.75H28.0018L31.2413 12.8168C31.3409 12.4806 31.6497 12.25 32.0003 12.25C32.3509 12.25 32.6598 12.4806 32.7594 12.8168Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_i_5757_63551",
        x: "16",
        y: "23.3333",
        width: "32",
        height: "69.394",
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
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "2.18182"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.363636"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.54 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_5757_63551"
        })]
      }), jsxs("filter", {
        id: "filter1_f_5757_63551",
        x: "24",
        y: "20",
        width: "16",
        height: "76",
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
          stdDeviation: "2",
          result: "effect1_foregroundBlur_5757_63551"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_5757_63551",
        x1: "16",
        y1: "102",
        x2: "47.9963",
        y2: "101.655",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "0.262579",
          stopColor: "white",
          stopOpacity: "0.0823736"
        }), jsx("stop", {
          offset: "0.743368",
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.2"
        })]
      })]
    })]
  });
}
function O({
  color: e = wO
}) {
  return jsxs("svg", {
    width: $$I0,
    height: "136",
    viewBox: "8 10 76 136",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_dddd_5186_59156)",
      children: [jsx("mask", {
        id: "mask0_5186_59156",
        style: {
          maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "18",
        y: "42",
        width: "56",
        height: "104",
        children: jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46 42H38.6877C36.651 42 35 43.651 35 45.6877V52.7536C35 65.7533 29.8239 78.2181 20.6154 87.3939C18.9411 89.0622 18 91.3286 18 93.6921V99.9765V146H46H74V99.9765V93.6921C74 91.3286 73.0589 89.0622 71.3846 87.3939C62.1761 78.2181 57 65.7533 57 52.7536V45.6877C57 43.651 55.349 42 53.3123 42H46Z",
          fill: "white"
        })
      }), jsxs("g", {
        mask: "url(#mask0_5186_59156)",
        children: [jsx("mask", {
          id: "path-2-inside-1_5186_59156",
          fill: "white",
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M46 42H38.6877C36.651 42 35 43.651 35 45.6877V52.7536C35 65.7533 29.8239 78.2181 20.6154 87.3939C18.9411 89.0622 18 91.3286 18 93.6921V99.9765V146H46H74V99.9765V93.6921C74 91.3286 73.0589 89.0622 71.3846 87.3939C62.1761 78.2181 57 65.7533 57 52.7536V45.6877C57 43.651 55.349 42 53.3123 42H46Z"
          })
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M46 42H38.6877C36.651 42 35 43.651 35 45.6877V52.7536C35 65.7533 29.8239 78.2181 20.6154 87.3939C18.9411 89.0622 18 91.3286 18 93.6921V99.9765V146H46H74V99.9765V93.6921C74 91.3286 73.0589 89.0622 71.3846 87.3939C62.1761 78.2181 57 65.7533 57 52.7536V45.6877C57 43.651 55.349 42 53.3123 42H46Z",
          fill: "#FDFDFD"
        }), jsx("path", {
          d: "M20.6154 87.3939L20.9683 87.7481H20.9683L20.6154 87.3939ZM18 146H17.5V146.5H18V146ZM74 146V146.5H74.5V146H74ZM71.3846 87.3939L71.0317 87.7481L71.3846 87.3939ZM38.6877 42.5H46V41.5H38.6877V42.5ZM35.5 45.6877C35.5 43.9272 36.9272 42.5 38.6877 42.5V41.5C36.3749 41.5 34.5 43.3749 34.5 45.6877H35.5ZM35.5 52.7536V45.6877H34.5V52.7536H35.5ZM20.9683 87.7481C30.271 78.4784 35.5 65.8863 35.5 52.7536H34.5C34.5 65.6204 29.3769 77.9577 20.2625 87.0397L20.9683 87.7481ZM18.5 93.6921C18.5 91.4615 19.3882 89.3226 20.9683 87.7481L20.2625 87.0397C18.494 88.8019 17.5 91.1956 17.5 93.6921H18.5ZM18.5 99.9765V93.6921H17.5V99.9765H18.5ZM18.5 146V99.9765H17.5V146H18.5ZM46 145.5H18V146.5H46V145.5ZM46 146.5H74V145.5H46V146.5ZM74.5 146V99.9765H73.5V146H74.5ZM74.5 99.9765V93.6921H73.5V99.9765H74.5ZM74.5 93.6921C74.5 91.1956 73.506 88.8019 71.7375 87.0397L71.0317 87.7481C72.6118 89.3226 73.5 91.4615 73.5 93.6921H74.5ZM71.7375 87.0397C62.6231 77.9577 57.5 65.6204 57.5 52.7536H56.5C56.5 65.8863 61.729 78.4784 71.0317 87.7481L71.7375 87.0397ZM57.5 52.7536V45.6877H56.5V52.7536H57.5ZM57.5 45.6877C57.5 43.3749 55.6251 41.5 53.3123 41.5V42.5C55.0728 42.5 56.5 43.9272 56.5 45.6877H57.5ZM53.3123 41.5H46V42.5H53.3123V41.5Z",
          fill: "black",
          fillOpacity: "0.25",
          mask: "url(#path-2-inside-1_5186_59156)"
        }), jsxs("g", {
          filter: "url(#filter1_f_5186_59156)",
          children: [jsx("mask", {
            id: "path-4-inside-2_5186_59156",
            fill: "white",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M46 42H38.6877C36.651 42 35 43.651 35 45.6877V52.7536C35 65.7533 29.8239 78.2181 20.6154 87.3939C18.9411 89.0622 18 91.3286 18 93.6921V99.9765V146H46H74V99.9765V93.6921C74 91.3286 73.0589 89.0622 71.3846 87.3939C62.1761 78.2181 57 65.7533 57 52.7536V45.6877C57 43.651 55.349 42 53.3123 42H46Z"
            })
          }), jsx("path", {
            d: "M20.6154 87.3939L22.7329 89.519L22.7329 89.519L20.6154 87.3939ZM18 146H15V149H18V146ZM74 146V149H77V146H74ZM71.3846 87.3939L69.2671 89.519L69.2671 89.519L71.3846 87.3939ZM38.6877 45H46V39H38.6877V45ZM38 45.6877C38 45.3079 38.3079 45 38.6877 45V39C34.9942 39 32 41.9942 32 45.6877H38ZM38 52.7536V45.6877H32V52.7536H38ZM22.7329 89.519C32.5064 79.7803 38 66.5508 38 52.7536H32C32 64.9558 27.1415 76.6559 18.4978 85.2688L22.7329 89.519ZM21 93.6921C21 92.1261 21.6236 90.6244 22.7329 89.519L18.4978 85.2688C16.2586 87.5001 15 90.5311 15 93.6921H21ZM21 99.9765V93.6921H15V99.9765H21ZM21 146V99.9765H15V146H21ZM46 143H18V149H46V143ZM46 149H74V143H46V149ZM77 146V99.9765H71V146H77ZM77 99.9765V93.6921H71V99.9765H77ZM77 93.6921C77 90.5311 75.7414 87.5001 73.5022 85.2688L69.2671 89.519C70.3764 90.6244 71 92.1261 71 93.6921H77ZM73.5022 85.2688C64.8585 76.6559 60 64.9558 60 52.7536H54C54 66.5508 59.4936 79.7803 69.2671 89.519L73.5022 85.2688ZM60 52.7536V45.6877H54V52.7536H60ZM60 45.6877C60 41.9942 57.0058 39 53.3123 39V45C53.6921 45 54 45.3079 54 45.6877H60ZM53.3123 39H46V45H53.3123V39Z",
            fill: "black",
            fillOpacity: "0.2",
            mask: "url(#path-4-inside-2_5186_59156)"
          })]
        }), jsxs("g", {
          filter: "url(#filter2_f_5186_59156)",
          children: [jsx("mask", {
            id: "path-6-inside-3_5186_59156",
            fill: "white",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M46 42H38.6877C36.651 42 35 43.651 35 45.6877V52.7536C35 65.7533 29.8239 78.2181 20.6154 87.3939C18.9411 89.0622 18 91.3286 18 93.6921V99.9765V146H46H74V99.9765V93.6921C74 91.3286 73.0589 89.0622 71.3846 87.3939C62.1761 78.2181 57 65.7533 57 52.7536V45.6877C57 43.651 55.349 42 53.3123 42H46Z"
            })
          }), jsx("path", {
            d: "M20.6154 87.3939L21.3212 88.1023L21.3212 88.1023L20.6154 87.3939ZM18 146H17V147H18V146ZM74 146V147H75V146H74ZM71.3846 87.3939L70.6788 88.1023L70.6788 88.1023L71.3846 87.3939ZM38.6877 43H46V41H38.6877V43ZM36 45.6877C36 44.2033 37.2033 43 38.6877 43V41C36.0988 41 34 43.0988 34 45.6877H36ZM36 52.7536V45.6877H34V52.7536H36ZM21.3212 88.1023C30.7181 78.7388 36 66.0192 36 52.7536H34C34 65.4875 28.9298 77.6973 19.9095 86.6855L21.3212 88.1023ZM19 93.6921C19 91.5944 19.8353 89.583 21.3212 88.1023L19.9095 86.6855C18.0469 88.5415 17 91.0627 17 93.6921H19ZM19 99.9765V93.6921H17V99.9765H19ZM19 146V99.9765H17V146H19ZM46 145H18V147H46V145ZM46 147H74V145H46V147ZM75 146V99.9765H73V146H75ZM75 99.9765V93.6921H73V99.9765H75ZM75 93.6921C75 91.0627 73.9531 88.5415 72.0905 86.6855L70.6788 88.1023C72.1647 89.583 73 91.5944 73 93.6921H75ZM72.0905 86.6855C63.0702 77.6973 58 65.4875 58 52.7536H56C56 66.0192 61.2819 78.7388 70.6788 88.1023L72.0905 86.6855ZM58 52.7536V45.6877H56V52.7536H58ZM58 45.6877C58 43.0988 55.9012 41 53.3123 41V43C54.7967 43 56 44.2033 56 45.6877H58ZM53.3123 41H46V43H53.3123V41Z",
            fill: "black",
            fillOpacity: "0.4",
            mask: "url(#path-6-inside-3_5186_59156)"
          })]
        }), jsx("g", {
          filter: "url(#filter3_f_5186_59156)",
          children: jsx("path", {
            d: "M45.6877 42C43.651 42 41 43.651 41 45.6877V52.7536C41 65.7533 39.8239 78.2181 30.6154 87.3939C28.9411 89.0622 28 91.3286 28 93.6921V146H64V93.6921C64 91.3286 63.0589 89.0622 61.3846 87.3939C52.1761 78.2181 51 65.7533 51 52.7536V45.6877C51 43.651 48.349 42 46.3123 42H45.6877Z",
            fill: "white"
          })
        }), jsx("rect", {
          x: "18",
          y: "98",
          width: "56",
          height: "52",
          fill: e,
          className: cq
        }), jsx("rect", {
          x: "18",
          y: "98",
          width: "56",
          height: "52",
          fill: "url(#paint0_linear_5186_59156)"
        }), jsx("rect", {
          x: "18",
          y: "98",
          width: "56",
          height: "52",
          fill: "url(#paint1_linear_5186_59156)"
        }), jsx("rect", {
          x: "18.25",
          y: "98.25",
          width: "55.5",
          height: "51.5",
          stroke: "black",
          strokeOpacity: "0.3",
          strokeWidth: "0.5"
        })]
      }), jsx("path", {
        d: "M38 32.693C38 32.2762 38.2586 31.903 38.6489 31.7567L52.6489 26.5067C53.3026 26.2615 54 26.7448 54 27.443V42.5H38V32.693Z",
        fill: e,
        className: cq
      }), jsx("path", {
        d: "M38.7367 31.9908L52.7367 26.7408C53.227 26.5569 53.75 26.9193 53.75 27.443V42.25H38.25V32.693C38.25 32.3804 38.4439 32.1005 38.7367 31.9908Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_dddd_5186_59156",
        x: "0",
        y: "0.442139",
        width: "92",
        height: "155.558",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.520312"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.026 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_5186_59156"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "1.4625"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_5186_59156",
          result: "effect2_dropShadow_5186_59156"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "3.92344"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.054 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect2_dropShadow_5186_59156",
          result: "effect3_dropShadow_5186_59156"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-8"
        }), jsx("feGaussianBlur", {
          stdDeviation: "9"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect3_dropShadow_5186_59156",
          result: "effect4_dropShadow_5186_59156"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect4_dropShadow_5186_59156",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_f_5186_59156",
        x: "8",
        y: "32",
        width: "76",
        height: "124",
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
          stdDeviation: "5",
          result: "effect1_foregroundBlur_5186_59156"
        })]
      }), jsxs("filter", {
        id: "filter2_f_5186_59156",
        x: "12",
        y: "36",
        width: "68",
        height: "116",
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
          stdDeviation: "3",
          result: "effect1_foregroundBlur_5186_59156"
        })]
      }), jsxs("filter", {
        id: "filter3_f_5186_59156",
        x: "22",
        y: "36",
        width: "48",
        height: "116",
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
          stdDeviation: "3",
          result: "effect1_foregroundBlur_5186_59156"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_5186_59156",
        x1: "74",
        y1: "125.04",
        x2: "18",
        y2: "125.04",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.166394",
          stopColor: "white",
          stopOpacity: "0.08"
        }), jsx("stop", {
          offset: "0.516647",
          stopColor: "white",
          stopOpacity: "0.16"
        }), jsx("stop", {
          offset: "0.824577",
          stopColor: "white",
          stopOpacity: "0.08"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_5186_59156",
        x1: "18",
        y1: "122",
        x2: "74",
        y2: "122",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.12"
        }), jsx("stop", {
          offset: "0.173337",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.831435",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.12"
        })]
      })]
    })]
  });
}
function R({
  color: e = wO
}) {
  return jsxs("svg", {
    width: "64",
    height: "96",
    viewBox: "0 0 64 96",
    fill: "none",
    children: [jsx("g", {
      clipPath: "url(#clip0_5186_59372)",
      children: jsxs("g", {
        filter: "url(#filter0_dddd_5186_59372)",
        children: [jsx("mask", {
          id: "mask0_5186_59372",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "12",
          y: "23",
          width: "40",
          height: "75",
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32 23.4285H26.7769C25.3222 23.4285 24.1429 24.6078 24.1429 26.0625V31.1096C24.1429 40.3951 20.4457 49.2985 13.8681 55.8527C12.6722 57.0444 12 58.6632 12 60.3514V64.8403V97.7142H32L52 97.7142V64.8403V60.3515C52 58.6632 51.3278 57.0444 50.1318 55.8527C43.5543 49.2985 39.8571 40.3952 39.8571 31.1096V26.0626C39.8571 24.6078 38.6778 23.4285 37.223 23.4285H32V23.4285Z",
            fill: "white"
          })
        }), jsxs("g", {
          mask: "url(#mask0_5186_59372)",
          children: [jsx("mask", {
            id: "path-2-inside-1_5186_59372",
            fill: "white",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M32 23.4285H26.7769C25.3222 23.4285 24.1429 24.6078 24.1429 26.0625V31.1096C24.1429 40.3951 20.4457 49.2985 13.8681 55.8527C12.6722 57.0444 12 58.6632 12 60.3514V64.8403V97.7142H32L52 97.7142V64.8403V60.3515C52 58.6632 51.3278 57.0444 50.1318 55.8527C43.5543 49.2985 39.8571 40.3952 39.8571 31.1096V26.0626C39.8571 24.6078 38.6778 23.4285 37.223 23.4285H32V23.4285Z"
            })
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32 23.4285H26.7769C25.3222 23.4285 24.1429 24.6078 24.1429 26.0625V31.1096C24.1429 40.3951 20.4457 49.2985 13.8681 55.8527C12.6722 57.0444 12 58.6632 12 60.3514V64.8403V97.7142H32L52 97.7142V64.8403V60.3515C52 58.6632 51.3278 57.0444 50.1318 55.8527C43.5543 49.2985 39.8571 40.3952 39.8571 31.1096V26.0626C39.8571 24.6078 38.6778 23.4285 37.223 23.4285H32V23.4285Z",
            fill: "#FDFDFD"
          }), jsx("path", {
            d: "M32 23.4285H32.5V22.9285H32V23.4285ZM13.8681 55.8527L14.2211 56.2069H14.2211L13.8681 55.8527ZM12 97.7142H11.5V98.2142H12V97.7142ZM32 97.7142V97.2142V97.7142ZM52 97.7142V98.2142H52.5V97.7142H52ZM50.1318 55.8527L49.7789 56.2069L50.1318 55.8527ZM32 23.4285H31.5V23.9285H32V23.4285ZM26.7769 23.9285H32V22.9285H26.7769V23.9285ZM24.6429 26.0625C24.6429 24.8839 25.5983 23.9285 26.7769 23.9285V22.9285C25.046 22.9285 23.6429 24.3316 23.6429 26.0625H24.6429ZM24.6429 31.1096V26.0625H23.6429V31.1096H24.6429ZM14.2211 56.2069C20.8927 49.5589 24.6429 40.528 24.6429 31.1096H23.6429C23.6429 40.2622 19.9986 49.0382 13.5152 55.4985L14.2211 56.2069ZM12.5 60.3514C12.5 58.7961 13.1193 57.3047 14.2211 56.2069L13.5152 55.4985C12.2251 56.784 11.5 58.5302 11.5 60.3514H12.5ZM12.5 64.8403V60.3514H11.5V64.8403H12.5ZM12.5 97.7142V64.8403H11.5V97.7142H12.5ZM32 97.2142H12V98.2142H32V97.2142ZM32 98.2142L52 98.2142V97.2142L32 97.2142V98.2142ZM52.5 97.7142V64.8403H51.5V97.7142H52.5ZM52.5 64.8403V60.3515H51.5V64.8403H52.5ZM52.5 60.3515C52.5 58.5303 51.7748 56.784 50.4848 55.4985L49.7789 56.2069C50.8807 57.3047 51.5 58.7961 51.5 60.3515H52.5ZM50.4848 55.4985C44.0014 49.0382 40.3571 40.2622 40.3571 31.1096H39.3571C39.3571 40.5281 43.1072 49.5589 49.7789 56.2069L50.4848 55.4985ZM40.3571 31.1096V26.0626H39.3571V31.1096H40.3571ZM40.3571 26.0626C40.3571 24.3317 38.9539 22.9285 37.223 22.9285V23.9285C38.4017 23.9285 39.3571 24.8839 39.3571 26.0626H40.3571ZM37.223 22.9285H32V23.9285H37.223V22.9285ZM31.5 23.4285V23.4285H32.5V23.4285H31.5Z",
            fill: "black",
            fillOpacity: "0.3",
            mask: "url(#path-2-inside-1_5186_59372)"
          }), jsxs("g", {
            filter: "url(#filter1_f_5186_59372)",
            children: [jsx("mask", {
              id: "path-4-inside-2_5186_59372",
              fill: "white",
              children: jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 23.4285H26.7769C25.3222 23.4285 24.1429 24.6078 24.1429 26.0625V31.1096C24.1429 40.3951 20.4457 49.2985 13.8681 55.8527C12.6722 57.0444 12 58.6632 12 60.3514V64.8403V97.7142H32L52 97.7142V64.8403V60.3515C52 58.6632 51.3278 57.0444 50.1318 55.8527C43.5543 49.2985 39.8571 40.3952 39.8571 31.1096V26.0626C39.8571 24.6078 38.6778 23.4285 37.223 23.4285H32V23.4285Z"
              })
            }), jsx("path", {
              d: "M32 23.4285H34.1429V21.2856H32V23.4285ZM13.8681 55.8527L15.3807 57.3706L15.3807 57.3706L13.8681 55.8527ZM12 97.7142H9.85714V99.857H12V97.7142ZM32 97.7142L32 95.5713H32V97.7142ZM52 97.7142L52 99.8571H54.1428V97.7142H52ZM50.1318 55.8527L48.6193 57.3706L48.6193 57.3706L50.1318 55.8527ZM32 23.4285H29.8571V25.5714H32V23.4285ZM26.7769 25.5713H32V21.2856H26.7769V25.5713ZM26.2857 26.0625C26.2857 25.7912 26.5056 25.5713 26.7769 25.5713V21.2856C24.1387 21.2856 22 23.4243 22 26.0625H26.2857ZM26.2857 31.1096V26.0625H22V31.1096H26.2857ZM15.3807 57.3706C22.3617 50.4144 26.2857 40.9648 26.2857 31.1096H22C22 39.8255 18.5296 48.1827 12.3556 54.3348L15.3807 57.3706ZM14.1429 60.3514C14.1429 59.2328 14.5883 58.1602 15.3807 57.3706L12.3556 54.3348C10.7562 55.9285 9.85714 58.0935 9.85714 60.3514H14.1429ZM14.1429 64.8403V60.3514H9.85714V64.8403H14.1429ZM14.1429 97.7142V64.8403H9.85714V97.7142H14.1429ZM32 95.5713H12V99.857H32V95.5713ZM32 99.857L52 99.8571L52 95.5714L32 95.5713L32 99.857ZM54.1428 97.7142V64.8403H49.8571V97.7142H54.1428ZM54.1428 64.8403V60.3515H49.8571V64.8403H54.1428ZM54.1428 60.3515C54.1428 58.0935 53.2438 55.9285 51.6444 54.3348L48.6193 57.3706C49.4117 58.1602 49.8571 59.2328 49.8571 60.3515H54.1428ZM51.6444 54.3348C45.4703 48.1827 42 39.8255 42 31.1096H37.7143C37.7143 40.9648 41.6383 50.4144 48.6193 57.3706L51.6444 54.3348ZM42 31.1096V26.0626H37.7143V31.1096H42ZM42 26.0626C42 23.4243 39.8613 21.2856 37.223 21.2856V25.5714C37.4943 25.5714 37.7143 25.7913 37.7143 26.0626H42ZM37.223 21.2856H32V25.5714H37.223V21.2856ZM29.8571 23.4285V23.4285H34.1429V23.4285H29.8571Z",
              fill: "black",
              fillOpacity: "0.25",
              mask: "url(#path-4-inside-2_5186_59372)"
            })]
          }), jsxs("g", {
            filter: "url(#filter2_f_5186_59372)",
            children: [jsx("mask", {
              id: "path-6-inside-3_5186_59372",
              fill: "white",
              children: jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 23.4285H26.7769C25.3222 23.4285 24.1429 24.6078 24.1429 26.0625V31.1096C24.1429 40.3951 20.4457 49.2985 13.8681 55.8527C12.6722 57.0444 12 58.6632 12 60.3514V64.8403V97.7142H32L52 97.7142V64.8403V60.3515C52 58.6632 51.3278 57.0444 50.1318 55.8527C43.5543 49.2985 39.8571 40.3952 39.8571 31.1096V26.0626C39.8571 24.6078 38.6778 23.4285 37.223 23.4285H32V23.4285Z"
              })
            }), jsx("path", {
              d: "M32 23.4285H32.71V22.7185H32V23.4285ZM13.8681 55.8527L14.3693 56.3556L13.8681 55.8527ZM12 97.7142H11.29V98.4242H12V97.7142ZM32 97.7142L32 97.0042H32V97.7142ZM52 97.7142V98.4242H52.71V97.7142H52ZM50.1318 55.8527L49.6307 56.3557V56.3557L50.1318 55.8527ZM32 23.4285H31.29V24.1385H32V23.4285ZM26.7769 24.1385H32V22.7185H26.7769V24.1385ZM24.8529 26.0625C24.8529 24.9999 25.7143 24.1385 26.7769 24.1385V22.7185C24.93 22.7185 23.4329 24.2157 23.4329 26.0625H24.8529ZM24.8529 31.1096V26.0625H23.4329V31.1096H24.8529ZM14.3693 56.3556C21.0805 49.6682 24.8529 40.5839 24.8529 31.1096H23.4329C23.4329 40.2064 19.8108 48.9288 13.367 55.3497L14.3693 56.3556ZM12.71 60.3514C12.71 58.8519 13.3071 57.4141 14.3693 56.3556L13.367 55.3497C12.0374 56.6746 11.29 58.4744 11.29 60.3514H12.71ZM12.71 64.8403V60.3514H11.29V64.8403H12.71ZM12.71 97.7142V64.8403H11.29V97.7142H12.71ZM32 97.0042H12V98.4242H32V97.0042ZM32 98.4242L52 98.4242V97.0042L32 97.0042L32 98.4242ZM52.71 97.7142V64.8403H51.29V97.7142H52.71ZM52.71 64.8403V60.3515H51.29V64.8403H52.71ZM52.71 60.3515C52.71 58.4744 51.9626 56.6747 50.633 55.3498L49.6307 56.3557C50.6929 57.4141 51.29 58.8519 51.29 60.3515H52.71ZM50.633 55.3498C44.1891 48.9288 40.5671 40.2064 40.5671 31.1096H39.1471C39.1471 40.5839 42.9194 49.6683 49.6307 56.3557L50.633 55.3498ZM40.5671 31.1096V26.0626H39.1471V31.1096H40.5671ZM40.5671 26.0626C40.5671 24.2157 39.0699 22.7185 37.223 22.7185V24.1385C38.2857 24.1385 39.1471 24.9999 39.1471 26.0626H40.5671ZM37.223 22.7185H32V24.1385H37.223V22.7185ZM31.29 23.4285V23.4285H32.71V23.4285H31.29Z",
              fill: "black",
              fillOpacity: "0.4",
              mask: "url(#path-6-inside-3_5186_59372)"
            })]
          }), jsx("g", {
            filter: "url(#filter3_f_5186_59372)",
            children: jsx("path", {
              d: "M31.7766 23.4285C30.3219 23.4285 28.4283 24.6078 28.4283 26.0625V31.1096C28.4283 40.3951 27.5882 49.2985 21.0107 55.8527C19.8148 57.0444 19.1426 58.6632 19.1426 60.3514V97.7142H44.8569V60.3514C44.8569 58.6632 44.1846 57.0444 42.9887 55.8527C36.4112 49.2985 35.5711 40.3951 35.5711 31.1096V26.0625C35.5711 24.6078 33.6775 23.4285 32.2228 23.4285H31.7766Z",
              fill: "white"
            })
          }), jsx("path", {
            d: "M12 63H52V100.572H12V63Z",
            fill: e,
            className: cq
          }), jsx("path", {
            d: "M12 63H52V100.572H12V63Z",
            fill: "url(#paint0_linear_5186_59372)"
          }), jsx("path", {
            d: "M12 63H52V100.572H12V63Z",
            fill: "url(#paint1_linear_5186_59372)"
          }), jsx("path", {
            d: "M12.25 63.25H51.75V100.322H12.25V63.25Z",
            stroke: "black",
            strokeOpacity: "0.3",
            strokeWidth: "0.5"
          })]
        }), jsx("path", {
          d: "M26.2856 16.7807C26.2856 16.483 26.4703 16.2165 26.7491 16.1119L36.7491 12.3619C37.2161 12.1868 37.7142 12.532 37.7142 13.0307V24H26.2856V16.7807Z",
          fill: e,
          className: cq
        }), jsx("path", {
          d: "M26.5356 16.7807C26.5356 16.5872 26.6557 16.4139 26.8369 16.346L36.8369 12.596C37.1404 12.4822 37.4642 12.7065 37.4642 13.0307V23.75H26.5356V16.7807Z",
          stroke: "black",
          strokeOpacity: "0.3",
          strokeWidth: "0.5"
        })]
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_dddd_5186_59372",
        x: "-0.857142",
        y: "-6.25575",
        width: "65.7143",
        height: "111.113",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-0.714286"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.371652"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.026 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_5186_59372"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {}), jsx("feGaussianBlur", {
          stdDeviation: "1.04464"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_5186_59372",
          result: "effect2_dropShadow_5186_59372"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-0.714286"
        }), jsx("feGaussianBlur", {
          stdDeviation: "2.80246"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.054 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect2_dropShadow_5186_59372",
          result: "effect3_dropShadow_5186_59372"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-5.71429"
        }), jsx("feGaussianBlur", {
          stdDeviation: "6.42857"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect3_dropShadow_5186_59372",
          result: "effect4_dropShadow_5186_59372"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect4_dropShadow_5186_59372",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_f_5186_59372",
        x: "4.85714",
        y: "16.2856",
        width: "54.2857",
        height: "88.5714",
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
          stdDeviation: "3.57143",
          result: "effect1_foregroundBlur_5186_59372"
        })]
      }), jsxs("filter", {
        id: "filter2_f_5186_59372",
        x: "7.71429",
        y: "19.1428",
        width: "48.5714",
        height: "82.8571",
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
          stdDeviation: "2.14286",
          result: "effect1_foregroundBlur_5186_59372"
        })]
      }), jsxs("filter", {
        id: "filter3_f_5186_59372",
        x: "14.8569",
        y: "19.1428",
        width: "34.2858",
        height: "82.8571",
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
          stdDeviation: "2.14286",
          result: "effect1_foregroundBlur_5186_59372"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_5186_59372",
        x1: "52",
        y1: "82.5372",
        x2: "12",
        y2: "82.5372",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.166394",
          stopColor: "white",
          stopOpacity: "0.08"
        }), jsx("stop", {
          offset: "0.516647",
          stopColor: "white",
          stopOpacity: "0.16"
        }), jsx("stop", {
          offset: "0.824577",
          stopColor: "white",
          stopOpacity: "0.08"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_5186_59372",
        x1: "12",
        y1: "80.3407",
        x2: "52",
        y2: "80.3407",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.12"
        }), jsx("stop", {
          offset: "0.173337",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.831435",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.12"
        })]
      }), jsx("clipPath", {
        id: "clip0_5186_59372",
        children: jsx("rect", {
          width: "64",
          height: "96",
          fill: "white"
        })
      })]
    })]
  });
}
let L = buildUploadUrl("e2dd4aa8eeda3e94a8c86ff697f1538c0ac4985c");
let P = buildUploadUrl("01cc9e62d5f9bfd4c8b72723f3a2c52b7d681a76");
function D({
  size: e
}) {
  let {
    washiTapePaint
  } = useAtomWithSubscription(SK);
  let r = washiTapePaint?.image?.hash && sha1HexFromBytes(washiTapePaint?.image?.hash);
  let i = r && buildUploadUrl(r);
  let o = r && !_$$B.map(e => e.image).includes(r);
  let c = buildUploadUrl("Big" === e ? "218aca2f646a55ac66806bd9a9d3d5465e4fc4d8" : "8fd9146eb6fddeb39bb39af0939f723729251625");
  let p = buildUploadUrl("Big" === e ? "2ce284f5f27469ce9212c138010daacca8e58558" : "8ab86efd5632d61a014831faf1ed01df72ee88c4");
  return jsxs("div", {
    className: l()({
      [Zu]: "Big" === e,
      [yk]: "Small" === e
    }),
    style: {
      backgroundImage: `url(${p})`
    },
    children: [o ? jsx(k, {
      size: e
    }) : jsx("div", {
      className: l()({
        [v5]: "Big" === e,
        [kV]: "Small" === e
      }),
      style: {
        backgroundImage: `url(${i})`,
        maskImage: `url(${c})`
      }
    }), jsx("img", {
      src: "Big" === e ? L : P,
      className: iI,
      alt: ""
    })]
  });
}
function k({
  size: e
}) {
  let {
    washiTapePaint
  } = useAtomWithSubscription(SK);
  let [r, a] = useState();
  let o = useCallback(e => {
    let t = jS(e, new Point((e.originalImageWidth || 244) / (e.originalImageHeight || 244) * 244, 244), {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    });
    t && t.pixels && t.pixelSize && a(Pv(t.pixels, t.pixelSize));
  }, []);
  useEffect(() => {
    washiTapePaint && o(washiTapePaint);
  }, [washiTapePaint, o]);
  let p = buildUploadUrl("Big" === e ? "218aca2f646a55ac66806bd9a9d3d5465e4fc4d8" : "8fd9146eb6fddeb39bb39af0939f723729251625");
  return jsx("div", {
    className: l()({
      [v5]: "Big" === e,
      [kV]: "Small" === e
    }),
    style: {
      backgroundImage: `url(${r})`,
      maskImage: p
    }
  });
}
export const bm = $$I0;
export const eq = $$S1;
export const oE = $$N2;
export const vp = $$v3;