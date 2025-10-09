import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arraysEqual } from "../figma_app/656233";
import { throwTypeError } from "../figma_app/465776";
import { sha1HexFromBytes } from "../905/125019";
import { ServiceCategories } from "../905/165054";
import { DesignGraphElements, Fullscreen, AppStateTsApi, ImageCppBindings } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import _ from "../vendor/73823";
import { useDebouncedCallback } from "use-debounce";
import { useSingleEffect } from "../905/791079";
import { useLatestRef } from "../figma_app/922077";
import { F as _$$F } from "../figma_app/954027";
import { reportError } from "../905/11";
import { base64ToUint8Array, uint8ArrayToBase64 } from "../figma_app/930338";
import { vectorPencilStyleAtom, highlighterStyleAtom, toolStylesAtom } from "../905/125333";
import { closeUniversalInsertModal, setUniversalInsertModalOpen, updateSourceRect } from "../905/116101";
import { colorCSSManipulatorInstance } from "../905/989956";
import { Ii } from "../figma_app/644079";
import { emojiWheelManagerInstance } from "../figma_app/442259";
import { l as _$$l } from "../905/831968";
import { useUpdateSelectionProperty } from "../905/275640";
import { useIsProgressBarHiddenOrLocked, useCurrentTool } from "../figma_app/722362";
import { Ef, se, HS, yx } from "../figma_app/546509";
import { WC, T$, wi } from "../figma_app/792783";
import { getObservableValue } from "../figma_app/84367";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { PinningState } from "../905/192333";
import { Yh } from "../figma_app/357047";
import { b as _$$b } from "../905/635568";
import { JI, Vq, pf, pc, xH, $$in, sg, Ud } from "../figma_app/942553";
import { KT, AO } from "../figma_app/325158";
import { noop } from "../figma_app/628249";
import { qW, Jc } from "../figma_app/27927";
import { Qc, Iw, M8, gC } from "../figma_app/368611";
import { B as _$$B } from "../figma_app/371825";
import { j5 } from "../figma_app/844818";
import { neutralDarkColor3, redApricotColor2 } from "../figma_app/728075";
import { bE, LK, T5, xp, MC, FC, zD, p6, U9, X4, k as _$$k, E5, tj } from "../figma_app/340893";
import { I as _$$I } from "../figma_app/688563";
import { buildUploadUrl } from "../figma_app/169182";
import { getI18nString } from "../905/303541";
var h = _;
let z = window.devicePixelRatio;
function W({
  color: e = neutralDarkColor3
}) {
  return jsxs("svg", {
    width: 88 * z,
    height: 128 * z,
    viewBox: "-5 1 88 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [jsx("g", {
      clipPath: "url(#clip0_3625_33331)",
      children: jsxs("g", {
        filter: "url(#filter0_ddd_3625_33331)",
        children: [jsx("mask", {
          id: "mask0_3625_33331",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "18",
          y: "29",
          width: "40",
          height: "100",
          children: jsx("path", {
            d: "M31 29H46L57.5 129H18.5L31 29Z",
            fill: "#C4C4C4"
          })
        }), jsx("g", {
          mask: "url(#mask0_3625_33331)",
          children: jsx("g", {
            filter: "url(#filter1_f_3625_33331)",
            children: jsx("rect", {
              x: "32.5",
              y: "31",
              width: "12",
              height: "102",
              fill: e
            })
          })
        }), jsxs("g", {
          filter: "url(#filter2_i_3625_33331)",
          children: [jsx("path", {
            d: "M34.4415 27C32.5094 27 30.8177 28.3242 30.3156 30.2296L16.7858 79.4873C15.9325 82.5938 15.5001 85.8008 15.5001 89.0223L15.5 130H62.5V89.039C62.5 85.8066 62.0647 82.589 61.2058 79.4729L47.6498 30.2922C47.1697 28.356 45.4636 27 43.5079 27H34.4415Z",
            fill: "white",
            fillOpacity: "0.66"
          }), jsx("path", {
            d: "M34.4415 27C32.5094 27 30.8177 28.3242 30.3156 30.2296L16.7858 79.4873C15.9325 82.5938 15.5001 85.8008 15.5001 89.0223L15.5 130H62.5V89.039C62.5 85.8066 62.0647 82.589 61.2058 79.4729L47.6498 30.2922C47.1697 28.356 45.4636 27 43.5079 27H34.4415Z",
            fill: "url(#paint0_linear_3625_33331)"
          })]
        }), jsxs("g", {
          filter: "url(#filter3_i_3625_33331)",
          children: [jsx("path", {
            d: "M34.3445 27C32.3713 27 30.6436 28.3242 30.1308 30.2296L16.338 79.3986C15.4502 82.5634 15.0001 85.8349 15.0001 89.1218L15 130H63V89.1388C63 85.8408 62.5468 82.5585 61.6532 79.384L47.8339 30.2922C47.3435 28.356 45.6011 27 43.6038 27H34.3445Z",
            fill: "white",
            fillOpacity: "0.3"
          }), jsx("path", {
            d: "M34.3445 27C32.3713 27 30.6436 28.3242 30.1308 30.2296L16.338 79.3986C15.4502 82.5634 15.0001 85.8349 15.0001 89.1218L15 130H63V89.1388C63 85.8408 62.5468 82.5585 61.6532 79.384L47.8339 30.2922C47.3435 28.356 45.6011 27 43.6038 27H34.3445Z",
            fill: "url(#paint1_linear_3625_33331)"
          })]
        }), jsx("path", {
          d: "M30.3715 30.2972L30.3716 30.2972L30.3722 30.2946C30.8557 28.4983 32.4844 27.25 34.3445 27.25H43.6038C45.4867 27.25 47.1292 28.5284 47.5915 30.3536L47.5915 30.3536L47.5932 30.3599L61.4125 79.4517C62.3 82.6042 62.75 85.8638 62.75 89.1388V129.75H15.25L15.2501 89.1218C15.2501 85.8577 15.6971 82.6089 16.5787 79.4661L30.3715 30.2972Z",
          stroke: "#989898",
          strokeWidth: "0.5"
        }), jsx("path", {
          d: "M37.5019 11.1184C37.6985 10.4549 38.308 9.99976 39 9.99976V9.99976C39.692 9.99976 40.3015 10.4549 40.4981 11.1184L45.5 27.9998H32.5L37.5019 11.1184Z",
          fill: e
        }), jsx("path", {
          d: "M40.2584 11.1894L45.1652 27.7498H32.8348L37.7416 11.1894C37.9067 10.6321 38.4187 10.2498 39 10.2498C39.5813 10.2498 40.0933 10.6321 40.2584 11.1894Z",
          stroke: "#B8B8B8",
          strokeWidth: "0.5"
        })]
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_ddd_3625_33331",
        x: "-9",
        y: "-19.0002",
        width: "96",
        height: "168",
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
          stdDeviation: "2"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3625_33331"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-2"
        }), jsx("feGaussianBlur", {
          stdDeviation: "5"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_3625_33331",
          result: "effect2_dropShadow_3625_33331"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-5"
        }), jsx("feGaussianBlur", {
          stdDeviation: "12"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect2_dropShadow_3625_33331",
          result: "effect3_dropShadow_3625_33331"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect3_dropShadow_3625_33331",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_f_3625_33331",
        x: "26.5",
        y: "25",
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
          result: "effect1_foregroundBlur_3625_33331"
        })]
      }), jsxs("filter", {
        id: "filter2_i_3625_33331",
        x: "15.5",
        y: "27",
        width: "47",
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
          result: "effect1_innerShadow_3625_33331"
        })]
      }), jsxs("filter", {
        id: "filter3_i_3625_33331",
        x: "15",
        y: "27",
        width: "48",
        height: "105.182",
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
          dy: "4.36364"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.09091"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.67 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_3625_33331"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_3625_33331",
        x1: "15.5",
        y1: "145",
        x2: "62.4948",
        y2: "144.504",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.18"
        }), jsx("stop", {
          offset: "0.314097",
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.705075",
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.18"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_3625_33331",
        x1: "15",
        y1: "144.857",
        x2: "63.0021",
        y2: "145.054",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.188089",
          stopColor: "white"
        }), jsx("stop", {
          offset: "0.410617",
          stopColor: "white",
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "0.596847",
          stopColor: "white",
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "0.814202",
          stopColor: "white"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsx("clipPath", {
        id: "clip0_3625_33331",
        children: jsx("rect", {
          width: "78",
          height: "130",
          fill: "white",
          transform: "translate(0 -0.000244141)"
        })
      })]
    })]
  });
}
function K({
  color: e = redApricotColor2
}) {
  return jsxs("svg", {
    width: 88 * z,
    height: 128 * z,
    viewBox: "-5 -4 88 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [jsx("g", {
      clipPath: "url(#clip0_3625_33342)",
      children: jsxs("g", {
        filter: "url(#filter0_dddd_3625_33342)",
        children: [jsx("mask", {
          id: "mask0_3625_33342",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "13",
          y: "24",
          width: "52",
          height: "102",
          children: jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M39 24.8572H32.21C30.3188 24.8572 28.7857 26.3903 28.7857 28.2815V34.8427C28.7857 46.9138 23.9794 58.4883 15.4286 67.0087C13.8739 68.5578 13 70.6623 13 72.857V78.6925V126H39L65 126V78.6927V72.8572C65 70.6625 64.1261 68.558 62.5714 67.0089C54.0206 58.4885 49.2143 46.914 49.2143 34.8429V28.2817C49.2143 26.3905 47.6812 24.8574 45.79 24.8574H39V24.8572Z",
            fill: "white"
          })
        }), jsxs("g", {
          mask: "url(#mask0_3625_33342)",
          children: [jsx("mask", {
            id: "path-2-inside-1_3625_33342",
            fill: "white",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M39 24.8572H32.21C30.3188 24.8572 28.7857 26.3903 28.7857 28.2815V34.8427C28.7857 46.9138 23.9794 58.4883 15.4286 67.0087C13.8739 68.5578 13 70.6623 13 72.857V78.6925V121.429H39V121.429H65V78.6927V72.8572C65 70.6625 64.1261 68.558 62.5714 67.0089C54.0206 58.4885 49.2143 46.914 49.2143 34.8429V28.2817C49.2143 26.3905 47.6812 24.8574 45.79 24.8574H39V24.8572Z"
            })
          }), jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M39 24.8572H32.21C30.3188 24.8572 28.7857 26.3903 28.7857 28.2815V34.8427C28.7857 46.9138 23.9794 58.4883 15.4286 67.0087C13.8739 68.5578 13 70.6623 13 72.857V78.6925V121.429H39V121.429H65V78.6927V72.8572C65 70.6625 64.1261 68.558 62.5714 67.0089C54.0206 58.4885 49.2143 46.914 49.2143 34.8429V28.2817C49.2143 26.3905 47.6812 24.8574 45.79 24.8574H39V24.8572Z",
            fill: "#FDFDFD"
          }), jsx("path", {
            d: "M39 24.8572H39.5V24.3572H39V24.8572ZM15.4286 67.0087L15.7815 67.3628H15.7815L15.4286 67.0087ZM13 121.429H12.5V121.929H13V121.429ZM39 121.429H39.5V120.929H39V121.429ZM39 121.429H38.5V121.929H39V121.429ZM65 121.429V121.929H65.5V121.429H65ZM62.5714 67.0089L62.9244 66.6547L62.5714 67.0089ZM39 24.8574H38.5V25.3574H39V24.8574ZM32.21 25.3572H39V24.3572H32.21V25.3572ZM29.2857 28.2815C29.2857 26.6664 30.595 25.3572 32.21 25.3572V24.3572C30.0427 24.3572 28.2857 26.1141 28.2857 28.2815H29.2857ZM29.2857 34.8427V28.2815H28.2857V34.8427H29.2857ZM15.7815 67.3628C24.4264 58.7486 29.2857 47.0468 29.2857 34.8427H28.2857C28.2857 46.7809 23.5323 58.2279 15.0756 66.6545L15.7815 67.3628ZM13.5 72.857C13.5 70.7952 14.321 68.8182 15.7815 67.3628L15.0756 66.6545C13.4268 68.2975 12.5 70.5294 12.5 72.857H13.5ZM13.5 78.6925V72.857H12.5V78.6925H13.5ZM13.5 121.429V78.6925H12.5V121.429H13.5ZM39 120.929H13V121.929H39V120.929ZM38.5 121.429V121.429H39.5V121.429H38.5ZM39 121.929H65V120.929H39V121.929ZM65.5 121.429V78.6927H64.5V121.429H65.5ZM65.5 78.6927V72.8572H64.5V78.6927H65.5ZM65.5 72.8572C65.5 70.5296 64.5732 68.2977 62.9244 66.6547L62.2185 67.363C63.679 68.8184 64.5 70.7954 64.5 72.8572H65.5ZM62.9244 66.6547C54.4677 58.2281 49.7143 46.7811 49.7143 34.8429H48.7143C48.7143 47.047 53.5736 58.7488 62.2185 67.363L62.9244 66.6547ZM49.7143 34.8429V28.2817H48.7143V34.8429H49.7143ZM49.7143 28.2817C49.7143 26.1143 47.9573 24.3574 45.79 24.3574V25.3574C47.405 25.3574 48.7143 26.6666 48.7143 28.2817H49.7143ZM45.79 24.3574H39V25.3574H45.79V24.3574ZM38.5 24.8572V24.8574H39.5V24.8572H38.5Z",
            fill: "#B2B2B2",
            mask: "url(#path-2-inside-1_3625_33342)"
          }), jsxs("g", {
            filter: "url(#filter1_f_3625_33342)",
            children: [jsx("mask", {
              id: "path-4-inside-2_3625_33342",
              fill: "white",
              children: jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M39 24.8572H32.21C30.3188 24.8572 28.7857 26.3903 28.7857 28.2815V34.8427C28.7857 46.9138 23.9794 58.4883 15.4286 67.0087C13.8739 68.5578 13 70.6623 13 72.857V78.6925V121.429H39V121.429H65V78.6927V72.8572C65 70.6625 64.1261 68.558 62.5714 67.0089C54.0206 58.4885 49.2143 46.914 49.2143 34.8429V28.2817C49.2143 26.3905 47.6812 24.8574 45.79 24.8574H39V24.8572Z"
              })
            }), jsx("path", {
              d: "M39 24.8572H41.1429V22.7143H39V24.8572ZM15.4286 67.0087L16.9411 68.5266L16.9411 68.5266L15.4286 67.0087ZM13 121.429H10.8571V123.571H13V121.429ZM39 121.429H41.1429V119.286H39V121.429ZM39 121.429H36.8571V123.572H39V121.429ZM65 121.429V123.572H67.1429V121.429H65ZM62.5714 67.0089L64.084 65.4909L62.5714 67.0089ZM39 24.8574H36.8571V27.0002H39V24.8574ZM32.21 27H39V22.7143H32.21V27ZM30.9286 28.2815C30.9286 27.5738 31.5023 27 32.21 27V22.7143C29.1354 22.7143 26.6429 25.2068 26.6429 28.2815H30.9286ZM30.9286 34.8427V28.2815H26.6429V34.8427H30.9286ZM16.9411 68.5266C25.8954 59.6041 30.9286 47.4835 30.9286 34.8427H26.6429C26.6429 46.3442 22.0633 57.3724 13.916 65.4907L16.9411 68.5266ZM15.1429 72.857C15.1429 71.2319 15.7899 69.6737 16.9411 68.5266L13.916 65.4907C11.9578 67.442 10.8571 70.0926 10.8571 72.857H15.1429ZM15.1429 78.6925V72.857H10.8571V78.6925H15.1429ZM15.1429 121.429V78.6925H10.8571V121.429H15.1429ZM39 119.286H13V123.571H39V119.286ZM36.8571 121.429V121.429H41.1429V121.429H36.8571ZM39 123.572H65V119.286H39V123.572ZM67.1429 121.429V78.6927H62.8571V121.429H67.1429ZM67.1429 78.6927V72.8572H62.8571V78.6927H67.1429ZM67.1429 72.8572C67.1429 70.0928 66.0422 67.4422 64.084 65.4909L61.0589 68.5268C62.2101 69.6739 62.8571 71.2321 62.8571 72.8572H67.1429ZM64.084 65.4909C55.9367 57.3726 51.3571 46.3444 51.3571 34.8429H47.0714C47.0714 47.4837 52.1046 59.6043 61.0589 68.5268L64.084 65.4909ZM51.3571 34.8429V28.2817H47.0714V34.8429H51.3571ZM51.3571 28.2817C51.3571 25.207 48.8647 22.7145 45.79 22.7145V27.0002C46.4977 27.0002 47.0714 27.574 47.0714 28.2817H51.3571ZM45.79 22.7145H39V27.0002H45.79V22.7145ZM36.8571 24.8572V24.8574H41.1429V24.8572H36.8571Z",
              fill: "#BFBFBF",
              mask: "url(#path-4-inside-2_3625_33342)"
            })]
          }), jsxs("g", {
            filter: "url(#filter2_f_3625_33342)",
            children: [jsx("mask", {
              id: "path-6-inside-3_3625_33342",
              fill: "white",
              children: jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M39 24.8572H32.21C30.3188 24.8572 28.7857 26.3903 28.7857 28.2815V34.8427C28.7857 46.9138 23.9794 58.4883 15.4286 67.0087C13.8739 68.5578 13 70.6623 13 72.857V78.6925V121.429H39V121.429H65V78.6927V72.8572C65 70.6625 64.1261 68.558 62.5714 67.0089C54.0206 58.4885 49.2143 46.914 49.2143 34.8429V28.2817C49.2143 26.3905 47.6812 24.8574 45.79 24.8574H39V24.8572Z"
              })
            }), jsx("path", {
              d: "M39 24.8572H39.71V24.1472H39V24.8572ZM15.4286 67.0087L15.9297 67.5116H15.9297L15.4286 67.0087ZM13 121.429H12.29V122.139H13V121.429ZM39 121.429H39.71V120.719H39V121.429ZM39 121.429H38.29V122.139H39V121.429ZM65 121.429V122.139H65.71V121.429H65ZM62.5714 67.0089L63.0726 66.5059L62.5714 67.0089ZM39 24.8574H38.29V25.5674H39V24.8574ZM32.21 25.5672H39V24.1472H32.21V25.5672ZM29.4957 28.2815C29.4957 26.7824 30.7109 25.5672 32.21 25.5672V24.1472C29.9267 24.1472 28.0757 25.9982 28.0757 28.2815H29.4957ZM29.4957 34.8427V28.2815H28.0757V34.8427H29.4957ZM15.9297 67.5116C24.6142 58.858 29.4957 47.1026 29.4957 34.8427H28.0757C28.0757 46.7251 23.3445 58.1185 14.9274 66.5057L15.9297 67.5116ZM13.71 72.857C13.71 70.851 14.5087 68.9275 15.9297 67.5116L14.9274 66.5057C13.239 68.1881 12.29 70.4735 12.29 72.857H13.71ZM13.71 78.6925V72.857H12.29V78.6925H13.71ZM13.71 121.429V78.6925H12.29V121.429H13.71ZM39 120.719H13V122.139H39V120.719ZM38.29 121.429V121.429H39.71V121.429H38.29ZM39 122.139H65V120.719H39V122.139ZM65.71 121.429V78.6927H64.29V121.429H65.71ZM65.71 78.6927V72.8572H64.29V78.6927H65.71ZM65.71 72.8572C65.71 70.4737 64.761 68.1883 63.0726 66.5059L62.0703 67.5118C63.4913 68.9277 64.29 70.8512 64.29 72.8572H65.71ZM63.0726 66.5059C54.6555 58.1187 49.9243 46.7253 49.9243 34.8429H48.5043C48.5043 47.1028 53.3858 58.8582 62.0703 67.5118L63.0726 66.5059ZM49.9243 34.8429V28.2817H48.5043V34.8429H49.9243ZM49.9243 28.2817C49.9243 25.9984 48.0733 24.1474 45.79 24.1474V25.5674C47.2891 25.5674 48.5043 26.7826 48.5043 28.2817H49.9243ZM45.79 24.1474H39V25.5674H45.79V24.1474ZM38.29 24.8572V24.8574H39.71V24.8572H38.29Z",
              fill: "#999999",
              mask: "url(#path-6-inside-3_3625_33342)"
            })]
          }), jsx("g", {
            filter: "url(#filter3_f_3625_33342)",
            children: jsx("path", {
              d: "M38.7094 24.8574C36.8183 24.8574 34.3566 26.3905 34.3566 28.2817V34.8429C34.3566 46.9141 33.2645 58.4885 24.7137 67.0089C23.159 68.5581 22.2852 70.6625 22.2852 72.8573V121.429H55.7137V72.8573C55.7137 70.6625 54.8398 68.5581 53.2852 67.0089C44.7344 58.4885 43.6423 46.9141 43.6423 34.8429V28.2817C43.6423 26.3905 41.1806 24.8574 39.2894 24.8574H38.7094Z",
              fill: "white"
            })
          }), jsx("path", {
            d: "M13 76.2996H65V126.143H13V76.2996Z",
            fill: e
          }), jsx("path", {
            d: "M13 76H65V125.7H13V76Z",
            fill: "url(#paint0_linear_3625_33342)"
          }), jsx("path", {
            d: "M13 76H65V125.7H13V76Z",
            fill: "url(#paint1_linear_3625_33342)"
          }), jsx("path", {
            d: "M13.25 76.25H64.75V125.45H13.25V76.25Z",
            stroke: "#9B9B9B",
            strokeWidth: "0.5"
          })]
        }), jsx("path", {
          d: "M31.5713 16.0664C31.5713 15.7687 31.756 15.5022 32.0348 15.3976L45.4633 10.3619C45.9303 10.1868 46.4284 10.532 46.4284 11.0307V25.6H31.5713V16.0664Z",
          fill: e
        }), jsx("path", {
          d: "M31.8213 16.0664C31.8213 15.8729 31.9413 15.6997 32.1226 15.6317L45.5511 10.596C45.8546 10.4822 46.1784 10.7065 46.1784 11.0307V25.35H31.8213V16.0664Z",
          stroke: "#989898",
          strokeWidth: "0.5"
        })]
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_dddd_3625_33342",
        x: "0.142858",
        y: "-8.25575",
        width: "77.7143",
        height: "141.399",
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
          result: "effect1_dropShadow_3625_33342"
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
          in2: "effect1_dropShadow_3625_33342",
          result: "effect2_dropShadow_3625_33342"
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
          in2: "effect2_dropShadow_3625_33342",
          result: "effect3_dropShadow_3625_33342"
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
          in2: "effect3_dropShadow_3625_33342",
          result: "effect4_dropShadow_3625_33342"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect4_dropShadow_3625_33342",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_f_3625_33342",
        x: "5.85714",
        y: "17.7143",
        width: "66.2857",
        height: "110.857",
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
          result: "effect1_foregroundBlur_3625_33342"
        })]
      }), jsxs("filter", {
        id: "filter2_f_3625_33342",
        x: "8.71429",
        y: "20.5715",
        width: "60.5714",
        height: "105.143",
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
          result: "effect1_foregroundBlur_3625_33342"
        })]
      }), jsxs("filter", {
        id: "filter3_f_3625_33342",
        x: "17.9994",
        y: "20.5717",
        width: "42.0001",
        height: "105.143",
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
          result: "effect1_foregroundBlur_3625_33342"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_3625_33342",
        x1: "65",
        y1: "101.844",
        x2: "13",
        y2: "101.844",
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
        id: "paint1_linear_3625_33342",
        x1: "13",
        y1: "98.9387",
        x2: "65",
        y2: "98.9387",
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
        id: "clip0_3625_33342",
        children: jsx("rect", {
          width: "78",
          height: "126",
          fill: "white"
        })
      })]
    })]
  });
}
function Y(e) {
  return jsxs("svg", {
    width: 88 * z,
    height: 128 * z,
    viewBox: "-5 -3 88 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [jsxs("g", {
      clipPath: "url(#clip0_3625_33376)",
      children: [jsx("g", {
        filter: "url(#filter0_ddd_3625_33376)",
        children: jsx("path", {
          d: "M11 21.6311C11 18.3174 13.6863 15.6311 17 15.6311H61C64.3137 15.6311 67 18.3174 67 21.6311V65.1068V123C67 124.657 65.6569 126 64 126H14C12.3431 126 11 124.657 11 123V65.1068V21.6311Z",
          fill: "white"
        })
      }), jsx("mask", {
        id: "mask0_3625_33376",
        style: {
          maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "11",
        y: "15",
        width: "56",
        height: "111",
        children: jsx("path", {
          d: "M11 20.6311C11 17.8697 13.2386 15.6311 16 15.6311H62C64.7614 15.6311 67 17.8697 67 20.6311V65.1068V126H11V65.1068V20.6311Z",
          fill: "#C4C4C4"
        })
      }), jsxs("g", {
        mask: "url(#mask0_3625_33376)",
        children: [jsx("g", {
          filter: "url(#filter1_i_3625_33376)",
          children: jsx("path", {
            d: "M11 20.6311C11 17.8697 13.2386 15.6311 16 15.6311H62C64.7614 15.6311 67 17.8697 67 20.6311V65.1068V126H11V65.1068V20.6311Z",
            fill: "white"
          })
        }), jsx("path", {
          d: "M11.25 20.6311C11.25 18.0078 13.3766 15.8811 16 15.8811H62C64.6233 15.8811 66.75 18.0078 66.75 20.6311V65.1068V125.75H11.25V65.1068V20.6311Z",
          stroke: "#989898",
          strokeWidth: "0.5"
        }), jsx("g", {
          filter: "url(#filter2_f_3625_33376)",
          children: jsx("rect", {
            x: "7",
            y: "29.1458",
            width: "64",
            height: "18.0194",
            fill: "#E0E0E0"
          })
        }), jsx("rect", {
          x: "17",
          y: "51.6699",
          width: "44",
          height: "66.4466",
          rx: "6",
          fill: "#666666"
        })]
      }), jsx("g", {
        filter: "url(#filter3_f_3625_33376)",
        children: jsx("path", {
          d: "M61 83.2039C61 101.242 57.436 115.864 39 115.864C20.564 115.864 17 101.242 17 83.2039C17 65.1662 20.564 50.5437 39 50.5437C57.436 50.5437 61 65.1662 61 83.2039Z",
          fill: "#969696"
        })
      }), jsx("mask", {
        id: "path-8-inside-1_3625_33376",
        fill: "white",
        children: jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 10V15.6311V15.8494V111.739V111.864C19 114.073 20.7909 115.864 23 115.864H55C57.2091 115.864 59 114.073 59 111.864V111.739V15.8494V15.6311V10L54 15.6311L49 10L44 15.6311L39 10L34 15.6311L29 10L24 15.6311L19 10Z"
        })
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 10V15.6311V15.8494V111.739V111.864C19 114.073 20.7909 115.864 23 115.864H55C57.2091 115.864 59 114.073 59 111.864V111.739V15.8494V15.6311V10L54 15.6311L49 10L44 15.6311L39 10L34 15.6311L29 10L24 15.6311L19 10Z",
        fill: "url(#pattern0)"
      }), jsx("path", {
        d: "M19 10L19.3739 9.66802L18.5 8.68384V10H19ZM59 10H59.5V8.68384L58.6261 9.66802L59 10ZM54 15.6311L53.6261 15.963L54 16.3841L54.3739 15.963L54 15.6311ZM49 10L49.3739 9.66802L49 9.24695L48.6261 9.66802L49 10ZM44 15.6311L43.6261 15.963L44 16.3841L44.3739 15.963L44 15.6311ZM39 10L39.3739 9.66802L39 9.24695L38.6261 9.66802L39 10ZM34 15.6311L33.6261 15.963L34 16.3841L34.3739 15.963L34 15.6311ZM29 10L29.3739 9.66802L29 9.24695L28.6261 9.66802L29 10ZM24 15.6311L23.6261 15.963L24 16.3841L24.3739 15.963L24 15.6311ZM19.5 15.6311V10H18.5V15.6311H19.5ZM19.5 15.8494V15.6311H18.5V15.8494H19.5ZM19.5 111.739V15.8494H18.5V111.739H19.5ZM19.5 111.864V111.739H18.5V111.864H19.5ZM23 115.364C21.067 115.364 19.5 113.797 19.5 111.864H18.5C18.5 114.349 20.5147 116.364 23 116.364V115.364ZM55 115.364H23V116.364H55V115.364ZM58.5 111.864C58.5 113.797 56.933 115.364 55 115.364V116.364C57.4853 116.364 59.5 114.349 59.5 111.864H58.5ZM58.5 111.739V111.864H59.5V111.739H58.5ZM58.5 15.8494V111.739H59.5V15.8494H58.5ZM58.5 15.6311V15.8494H59.5V15.6311H58.5ZM58.5 10V15.6311H59.5V10H58.5ZM54.3739 15.963L59.3739 10.332L58.6261 9.66802L53.6261 15.2991L54.3739 15.963ZM48.6261 10.332L53.6261 15.963L54.3739 15.2991L49.3739 9.66802L48.6261 10.332ZM44.3739 15.963L49.3739 10.332L48.6261 9.66802L43.6261 15.2991L44.3739 15.963ZM38.6261 10.332L43.6261 15.963L44.3739 15.2991L39.3739 9.66802L38.6261 10.332ZM34.3739 15.963L39.3739 10.332L38.6261 9.66802L33.6261 15.2991L34.3739 15.963ZM28.6261 10.332L33.6261 15.963L34.3739 15.2991L29.3739 9.66802L28.6261 10.332ZM24.3739 15.963L29.3739 10.332L28.6261 9.66802L23.6261 15.2991L24.3739 15.963ZM18.6261 10.332L23.6261 15.963L24.3739 15.2991L19.3739 9.66802L18.6261 10.332Z",
        fill: "#B2B2B2",
        mask: "url(#path-8-inside-1_3625_33376)"
      }), jsx("path", {
        d: "M19 55.6699C19 53.4608 20.7909 51.6699 23 51.6699H55C57.2091 51.6699 59 53.4608 59 55.6699V113.864C59 114.969 58.1046 115.864 57 115.864H21C19.8954 115.864 19 114.969 19 113.864V55.6699Z",
        fill: "url(#paint0_linear_3625_33376)"
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_ddd_3625_33376",
        x: "-6.1875",
        y: "-5.13713",
        width: "90.375",
        height: "144.744",
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
          dy: "-0.716146"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.43229"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3625_33376"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-1.43229"
        }), jsx("feGaussianBlur", {
          stdDeviation: "3.58073"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_3625_33376",
          result: "effect2_dropShadow_3625_33376"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "-3.58073"
        }), jsx("feGaussianBlur", {
          stdDeviation: "8.59375"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect2_dropShadow_3625_33376",
          result: "effect3_dropShadow_3625_33376"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect3_dropShadow_3625_33376",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_i_3625_33376",
        x: "11",
        y: "15.6311",
        width: "56",
        height: "111.744",
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
          dy: "4.125"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.6875"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_3625_33376"
        })]
      }), jsxs("filter", {
        id: "filter2_f_3625_33376",
        x: "1",
        y: "23.1458",
        width: "76",
        height: "30.0195",
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
          result: "effect1_foregroundBlur_3625_33376"
        })]
      }), jsxs("filter", {
        id: "filter3_f_3625_33376",
        x: "11",
        y: "44.5437",
        width: "56",
        height: "77.3203",
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
          result: "effect1_foregroundBlur_3625_33376"
        })]
      }), jsx("pattern", {
        id: "pattern0",
        x: "19",
        y: "19",
        width: e.imageWidth / e.imageHeight * 40,
        height: 40,
        patternUnits: "userSpaceOnUse",
        patternTransform: "rotate(-90) translate(40)",
        children: jsx("image", {
          id: "image0_2799_15249",
          width: e.imageWidth / e.imageHeight * 40,
          height: 40,
          xlinkHref: e.imageURL
        })
      }), jsxs("linearGradient", {
        id: "paint0_linear_3625_33376",
        x1: "39",
        y1: "51.6699",
        x2: "39",
        y2: "115.864",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.350624",
          stopColor: "white",
          stopOpacity: "0.7"
        }), jsx("stop", {
          offset: "0.442982",
          stopColor: "white",
          stopOpacity: "0.8"
        }), jsx("stop", {
          offset: "0.543827",
          stopColor: "white",
          stopOpacity: "0.7"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsx("clipPath", {
        id: "clip0_3625_33376",
        children: jsx("rect", {
          width: "78",
          height: "126",
          fill: "white"
        })
      })]
    })]
  });
}
let Z = [{
  itemStringType: "palette",
  identifier: "palettePencil",
  rowMaxSize: 0,
  swatches: bE(LK("PENCIL"), !0, "base")
}, {
  itemStringType: "divider",
  identifier: "DIVIDER_PENCIL_1",
  padding: JI.none,
  axis: Vq.vertical
}, {
  itemStringType: "iconAction",
  identifier: "markerDrawingOptions",
  iconImageURL: buildUploadUrl("e138358eb8b3a07efda73c406e4c61cc3d9fe6d3"),
  flashesOnPress: !1,
  submenu: {
    position: pf.secondarySideEdge,
    rowMaxSize: 0,
    items: T5,
    pages: [{
      rowMaxSize: 0,
      items: T5
    }]
  }
}, {
  itemStringType: "iconAction",
  identifier: "straightLine",
  iconImageURL: buildUploadUrl("15f58390d8f4345f1414b57ebd81d11cc95d114d"),
  flashesOnPress: !1
}];
let Q = [{
  itemStringType: "palette",
  identifier: "paletteHighlighter",
  rowMaxSize: 0,
  swatches: bE(LK("HIGHLIGHTER"), !1, "highlight")
}, {
  itemStringType: "divider",
  identifier: "DIVIDER_HIGHLIGHTER_1",
  padding: JI.none,
  axis: Vq.vertical
}, {
  itemStringType: "iconAction",
  identifier: "highlighterDrawingOptions",
  iconImageURL: buildUploadUrl("c1837ca930ad93b0f6cc7e262e425757c34bca44"),
  flashesOnPress: !1,
  submenu: {
    position: pf.secondarySideEdge,
    rowMaxSize: 0,
    items: xp,
    pages: [{
      rowMaxSize: 0,
      items: xp
    }]
  }
}, {
  itemStringType: "iconAction",
  identifier: "straightLine",
  iconImageURL: buildUploadUrl("15f58390d8f4345f1414b57ebd81d11cc95d114d"),
  flashesOnPress: !1
}];
let ee = [{
  itemStringType: "palette",
  identifier: "paletteTape",
  rowMaxSize: 0,
  swatches: MC(FC, !0)
}];
let et = [{
  itemStringType: "iconAction",
  identifier: "ELBOWED",
  iconImageURL: buildUploadUrl("b2ed461201ea92ddea96eec7dbd2581472b90982"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "STRAIGHT",
  iconImageURL: buildUploadUrl("24fdae52d3a619a1f057011d4cc78d70b1d6134e"),
  flashesOnPress: !1
}];
let er = () => {
  let e = Ef();
  if (e && e.nativeToolbarSupportedVersions) {
    let t = e.nativeToolbarSupportedVersions.min;
    let r = e.nativeToolbarSupportedVersions.max;
    let n = pc.MIN;
    let i = pc.MAX;
    if (n <= r && t <= i) return Math.min(r, i);
  }
};
let en = () => {
  let e = se();
  return !!e && !!e.supportsCombinedHandSelect;
};
let ei = () => en() ? "set-tool-default" : "set-tool-hand";
export function $$ea2(e) {
  return e === DesignGraphElements.CONNECTOR_ELBOWED || e === DesignGraphElements.CONNECTOR_STRAIGHT ? "CONNECTOR" : qW(e) ? "SHAPE" : e === DesignGraphElements.VECTOR_PENCIL ? "PENCIL" : e === DesignGraphElements.WASHI_TAPE ? "TAPE" : e === DesignGraphElements.HAND_SELECT ? "HANDSELECT" : e === DesignGraphElements.MULTISELECT ? "MULTISELECT" : DesignGraphElements[e];
}
export let $$es3 = new Map([["SELECT", "set-tool-default"], ["HAND", "set-tool-hand"], ["HANDSELECT", "set-tool-default"], ["MULTISELECT", "set-tool-multiselect"], ["PENCIL", "set-tool-pencil"], ["HIGHLIGHTER", "set-tool-highlighter"], ["ERASER", "set-tool-eraser"], ["TAPE", "set-tool-washi-tape"], ["LASSO", "set-tool-lasso"]]);
export function $$eo1(e) {
  return ["PENCIL", "HIGHLIGHTER", "TAPE", "ERASER", "LASSO"].includes(e);
}
export function $$el4(e) {
  Fullscreen.triggerActionInUserEditScope(e, {
    source: "figma_mobile"
  });
}
let ed = scopeAwareFunction.user("ios-native-toolbar", e => {
  Fullscreen.nativeToolbarInsertItemOntoCanvas(e);
});
function ec(e) {
  if (void 0 !== e) switch (e) {
    case pc.V3:
      return function (e) {
        let t = [{
          itemStringType: "tool",
          identifier: "PENCIL",
          iconImageURL: buildUploadUrl("95407cf40a9b4e6961940a82ce9f58fd2da90e1f"),
          submenu: {
            position: pf.sideEdge,
            rowMaxSize: 0,
            items: Z,
            pages: [{
              rowMaxSize: 0,
              items: Z
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "HIGHLIGHTER",
          iconImageURL: buildUploadUrl("3d3b3635536c8b5134ab706267f05276bd93c8f3"),
          submenu: {
            position: pf.sideEdge,
            rowMaxSize: 0,
            items: Q,
            pages: [{
              rowMaxSize: 0,
              items: Q
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "TAPE",
          iconImageURL: buildUploadUrl("afcc32e60935f3760c53ac2165c6d9b60bb16b29"),
          submenu: {
            position: pf.sideEdge,
            rowMaxSize: 0,
            items: ee,
            pages: [{
              rowMaxSize: 0,
              items: ee
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "ERASER",
          iconImageURL: buildUploadUrl("76cba36d23a5bc4ca181a3f9485e12e1fa9835f1"),
          buttonType: xH.drawing
        }];
        e && t.push({
          itemStringType: "tool",
          identifier: "LASSO",
          iconImageURL: buildUploadUrl("edee04c23dd725946377d3bb6f13a95b54637599"),
          inactiveIconImageURL: buildUploadUrl("c4ca8c9633fa3369ab54c847741f72a2ab7c51b1"),
          buttonType: xH.drawing
        });
        let r = [{
          itemStringType: "drawingToolGroup",
          identifier: "DRAWING",
          padding: e ? JI.leading : JI.none,
          tools: t
        }, {
          itemStringType: "divider",
          identifier: "DIVIDER_2",
          padding: JI.both
        }, {
          itemStringType: "overflowingToolGroup",
          identifier: "PRIMARY_OVERFLOWING_TOOL_GROUP",
          iconImageURL: buildUploadUrl("6deaa95dc38b36ee8f961dde17bf26e5b793eb18"),
          tools: [{
            identifier: "SHAPE",
            iconImageURL: buildUploadUrl("a2733e2faaf29eb36c4295c338335913b175633c"),
            submenu: {
              position: pf.hoveringAboveBar,
              items: zD,
              rowMaxSize: 4,
              pages: p6
            },
            overflowTitle: getI18nString("mobile_toolbars.shape"),
            overflowIconImageURL: buildUploadUrl("0be9510a23488137a678f01ac5cd896772a80296"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "STICKY",
            iconImageURL: buildUploadUrl("b6b1bc0a50bc77eb596d759b04f361f562e728c7"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-sticky"),
            overflowIconImageURL: buildUploadUrl("7a2d4171ef94d6eaea103c1c9bffdb06b8ec8287"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "TYPE",
            iconImageURL: buildUploadUrl("51937510898a125b0ca175f5d7d02c605c48ed2d"),
            renderIconInColor: !0,
            overflowTitle: getI18nString("fullscreen_actions.set-tool-type"),
            overflowIconImageURL: buildUploadUrl("c074b4868bc9231628c7b9e6a1614a754143175c"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "TABLE",
            iconImageURL: buildUploadUrl("22b12dc561adb16ad97d99c02d49345f9def11ee"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-table"),
            overflowIconImageURL: buildUploadUrl("eca2a1f86871da1c1d3cdb81c1a8b23c47aea144"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "SECTION",
            iconImageURL: buildUploadUrl("24fff4c1aaa1d8b2a6770272e9125f6eb3a3beba"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-section"),
            overflowIconImageURL: buildUploadUrl("a78ea67aa20314d68d6d39ac98cec99151cd7be1"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "STAMP",
            iconImageURL: buildUploadUrl("3616f0c148716b9d60607811623d629f4305e662"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-stamp"),
            overflowIconImageURL: buildUploadUrl("8529d36b4879c096a333662e64ea2ea1bab4613f"),
            webWantsSourceRect: !0,
            flashesOnPress: !1
          }, {
            identifier: "CONNECTOR",
            iconImageURL: buildUploadUrl("cc0f6a01d9436a685b384d3a71382ebf5162131a"),
            selectedIconImageURL: buildUploadUrl("3a3405ca06b1ae40f4e7e35c950e602c8c19b016"),
            renderIconInColor: !0,
            submenu: {
              position: pf.hoveringAboveBar,
              rowMaxSize: 0,
              items: et,
              pages: [{
                rowMaxSize: 0,
                items: et
              }]
            },
            overflowTitle: getI18nString("mobile_toolbars.connector"),
            overflowIconImageURL: buildUploadUrl("a85d1067323794696bcb38964add37587a0f3518"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "INSERT",
            iconImageURL: buildUploadUrl("e2bdbb0b1823d382e51f72211ac291757a6b5c7d"),
            highlightedIconImageURL: buildUploadUrl("5b71e7229996334b6afb133d26f10b4f3bc3279e"),
            selectedIconImageURL: buildUploadUrl("ca5002d6c2b8fb319fa945819ebaf3a5eb703900"),
            overflowTitle: getI18nString("mobile_toolbars.universal_insert"),
            overflowIconImageURL: buildUploadUrl("d8e8e439b0de3f0790a248cf1de5c58dd1e7eab0"),
            webWantsSourceRect: !0,
            flashesOnPress: !1,
            menuPosition: $$in.last
          }]
        }];
        if (!e) {
          let e = {
            itemStringType: "tool",
            identifier: "SELECT",
            iconImageURL: buildUploadUrl("9cd5627bc7c9002caec32417933fb336962c7e00"),
            buttonType: xH.utility
          };
          let t = {
            itemStringType: "tool",
            identifier: "HAND",
            iconImageURL: buildUploadUrl("b999f3725564d8196d79083d0d01437932f4f88a"),
            buttonType: xH.utility
          };
          let n = {
            itemStringType: "divider",
            identifier: "DIVIDER_1",
            padding: JI.trailing
          };
          r.unshift({
            itemStringType: "stack",
            identifier: "STACK_SELECT_HAND",
            items: [e, t]
          }, n);
        }
        return {
          version: pc.V3,
          fileType: sg.Whiteboard,
          identifier: "PRIMARY",
          items: r
        };
      }(en());
    case pc.V4:
      return function () {
        let e = [{
          itemStringType: "tool",
          identifier: "PENCIL",
          iconImageURL: buildUploadUrl("95407cf40a9b4e6961940a82ce9f58fd2da90e1f"),
          submenu: {
            position: pf.sideEdge,
            pages: [{
              rowMaxSize: 0,
              items: [{
                itemStringType: "palette",
                identifier: "palettePencil",
                rowMaxSize: 0,
                swatches: bE(LK("PENCIL"), !0, "base")
              }, {
                itemStringType: "divider",
                identifier: "DIVIDER_PENCIL_1",
                padding: JI.none,
                axis: Vq.vertical
              }, {
                itemStringType: "iconAction",
                identifier: "markerDrawingOptions",
                iconImageURL: buildUploadUrl("e138358eb8b3a07efda73c406e4c61cc3d9fe6d3"),
                flashesOnPress: !1,
                submenu: {
                  position: pf.secondarySideEdge,
                  pages: [{
                    rowMaxSize: 0,
                    items: T5
                  }]
                }
              }, {
                itemStringType: "iconAction",
                identifier: "straightLine",
                iconImageURL: buildUploadUrl("15f58390d8f4345f1414b57ebd81d11cc95d114d"),
                flashesOnPress: !1
              }]
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "HIGHLIGHTER",
          iconImageURL: buildUploadUrl("3d3b3635536c8b5134ab706267f05276bd93c8f3"),
          submenu: {
            position: pf.sideEdge,
            pages: [{
              rowMaxSize: 0,
              items: [{
                itemStringType: "palette",
                identifier: "paletteHighlighter",
                rowMaxSize: 0,
                swatches: bE(LK("HIGHLIGHTER"), !1, "highlight")
              }, {
                itemStringType: "divider",
                identifier: "DIVIDER_HIGHLIGHTER_1",
                padding: JI.none,
                axis: Vq.vertical
              }, {
                itemStringType: "iconAction",
                identifier: "highlighterDrawingOptions",
                iconImageURL: buildUploadUrl("c1837ca930ad93b0f6cc7e262e425757c34bca44"),
                flashesOnPress: !1,
                submenu: {
                  position: pf.secondarySideEdge,
                  pages: [{
                    rowMaxSize: 0,
                    items: xp
                  }]
                }
              }, {
                itemStringType: "iconAction",
                identifier: "straightLine",
                iconImageURL: buildUploadUrl("15f58390d8f4345f1414b57ebd81d11cc95d114d"),
                flashesOnPress: !1
              }]
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "TAPE",
          iconImageURL: buildUploadUrl("afcc32e60935f3760c53ac2165c6d9b60bb16b29"),
          submenu: {
            position: pf.sideEdge,
            pages: [{
              rowMaxSize: 0,
              items: [{
                itemStringType: "palette",
                identifier: "paletteTape",
                rowMaxSize: 0,
                swatches: MC(FC, !0)
              }]
            }]
          },
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "ERASER",
          iconImageURL: buildUploadUrl("76cba36d23a5bc4ca181a3f9485e12e1fa9835f1"),
          buttonType: xH.drawing
        }, {
          itemStringType: "tool",
          identifier: "LASSO",
          iconImageURL: buildUploadUrl("edee04c23dd725946377d3bb6f13a95b54637599"),
          inactiveIconImageURL: buildUploadUrl("c4ca8c9633fa3369ab54c847741f72a2ab7c51b1"),
          buttonType: xH.drawing
        }];
        let t = [{
          itemStringType: "drawingToolGroup",
          identifier: "DRAWING",
          padding: JI.leading,
          tools: e
        }, {
          itemStringType: "divider",
          identifier: "DIVIDER_2",
          padding: JI.both
        }, {
          itemStringType: "overflowingToolGroup",
          identifier: "PRIMARY_OVERFLOWING_TOOL_GROUP",
          iconImageURL: buildUploadUrl("6deaa95dc38b36ee8f961dde17bf26e5b793eb18"),
          tools: [{
            identifier: "SHAPE",
            iconImageURL: buildUploadUrl("a2733e2faaf29eb36c4295c338335913b175633c"),
            submenu: {
              position: pf.hoveringAboveBar,
              pages: p6
            },
            overflowTitle: getI18nString("mobile_toolbars.shape"),
            overflowIconImageURL: buildUploadUrl("0be9510a23488137a678f01ac5cd896772a80296"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "STICKY",
            iconImageURL: buildUploadUrl("b6b1bc0a50bc77eb596d759b04f361f562e728c7"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-sticky"),
            overflowIconImageURL: buildUploadUrl("7a2d4171ef94d6eaea103c1c9bffdb06b8ec8287"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "TYPE",
            iconImageURL: buildUploadUrl("51937510898a125b0ca175f5d7d02c605c48ed2d"),
            renderIconInColor: !0,
            overflowTitle: getI18nString("fullscreen_actions.set-tool-type"),
            overflowIconImageURL: buildUploadUrl("c074b4868bc9231628c7b9e6a1614a754143175c"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "TABLE",
            iconImageURL: buildUploadUrl("22b12dc561adb16ad97d99c02d49345f9def11ee"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-table"),
            overflowIconImageURL: buildUploadUrl("eca2a1f86871da1c1d3cdb81c1a8b23c47aea144"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "SECTION",
            iconImageURL: buildUploadUrl("24fff4c1aaa1d8b2a6770272e9125f6eb3a3beba"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-section"),
            overflowIconImageURL: buildUploadUrl("a78ea67aa20314d68d6d39ac98cec99151cd7be1"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "STAMP",
            iconImageURL: buildUploadUrl("3616f0c148716b9d60607811623d629f4305e662"),
            overflowTitle: getI18nString("fullscreen_actions.set-tool-stamp"),
            overflowIconImageURL: buildUploadUrl("8529d36b4879c096a333662e64ea2ea1bab4613f"),
            webWantsSourceRect: !0,
            flashesOnPress: !1
          }, {
            identifier: "CONNECTOR",
            iconImageURL: buildUploadUrl("cc0f6a01d9436a685b384d3a71382ebf5162131a"),
            selectedIconImageURL: buildUploadUrl("3a3405ca06b1ae40f4e7e35c950e602c8c19b016"),
            renderIconInColor: !0,
            submenu: {
              position: pf.hoveringAboveBar,
              pages: [{
                rowMaxSize: 0,
                items: [{
                  itemStringType: "iconAction",
                  identifier: "ELBOWED",
                  iconImageURL: buildUploadUrl("b2ed461201ea92ddea96eec7dbd2581472b90982"),
                  flashesOnPress: !1
                }, {
                  itemStringType: "iconAction",
                  identifier: "STRAIGHT",
                  iconImageURL: buildUploadUrl("24fdae52d3a619a1f057011d4cc78d70b1d6134e"),
                  flashesOnPress: !1
                }]
              }]
            },
            overflowTitle: getI18nString("mobile_toolbars.connector"),
            overflowIconImageURL: buildUploadUrl("a85d1067323794696bcb38964add37587a0f3518"),
            webWantsSourceRect: !1,
            flashesOnPress: !1
          }, {
            identifier: "INSERT",
            iconImageURL: buildUploadUrl("e2bdbb0b1823d382e51f72211ac291757a6b5c7d"),
            highlightedIconImageURL: buildUploadUrl("5b71e7229996334b6afb133d26f10b4f3bc3279e"),
            selectedIconImageURL: buildUploadUrl("ca5002d6c2b8fb319fa945819ebaf3a5eb703900"),
            overflowTitle: getI18nString("mobile_toolbars.universal_insert"),
            overflowIconImageURL: buildUploadUrl("d8e8e439b0de3f0790a248cf1de5c58dd1e7eab0"),
            webWantsSourceRect: !0,
            flashesOnPress: !1,
            menuPosition: $$in.last
          }]
        }];
        return {
          version: pc.V4,
          fileType: sg.Whiteboard,
          identifier: "PRIMARY",
          items: t
        };
      }();
    default:
      throwTypeError(e);
  }
}
function eu(e, t) {
  let r = e => {
    let r = [{
      type: "SOLID",
      color: t
    }];
    return e === vectorPencilStyleAtom ? atomStoreManager.set(vectorPencilStyleAtom, e => ({
      ...e,
      paints: r
    })) : atomStoreManager.set(highlighterStyleAtom, e => ({
      ...e,
      paints: r
    }));
  };
  switch (e) {
    case "PENCIL":
      r(vectorPencilStyleAtom);
      break;
    case "HIGHLIGHTER":
      r(highlighterStyleAtom);
  }
}
function ep(e, t, r) {
  let n = e.find(([e, r]) => colorCSSManipulatorInstance.format(t) === colorCSSManipulatorInstance.format(e));
  return n ? {
    settingsType: Ud.presetColor,
    presetIdentifier: n[1],
    color: t,
    toolImageURL: r
  } : {
    settingsType: Ud.customColor,
    color: t,
    toolImageURL: r
  };
}
let e_ = () => {
  useEffect(() => {
    Qc(_$$B);
  }, []);
  let e = useSelector(e => e.mirror?.appModel.isReadOnly);
  let {
    washiTapePaint
  } = useAtomWithSubscription(toolStylesAtom);
  let r = washiTapePaint?.image?.hash && sha1HexFromBytes(washiTapePaint?.image?.hash);
  useEffect(() => {
    e || r || Iw(M8(_$$B[0]));
  }, [r, e]);
};
export function $$eh5() {
  return void 0 !== er();
}
export function $$em6() {
  let e = er();
  let t = Ef();
  let r = void 0 !== e;
  let n = HS();
  let a = yx();
  let s = useUpdateSelectionProperty("opacity");
  let [o, l] = useState(!1);
  useEffect(() => {
    let r = ec(e);
    if (r) {
      if (n) {
        let t = setTimeout(() => {
          window.FigmaMobile.nativeToolbarSupportedVersions = void 0;
          n._native_toolbar_confirm_configuration = () => {};
          reportError(ServiceCategories.FIGJAM, Error(`Native toolbar did not confirm configuration before timeout, version ${e}`));
        }, 2e3);
        n._native_toolbar_confirm_configuration = () => {
          clearTimeout(t);
          l(!0);
          en() && AppStateTsApi?.makeDefaultToolHandSelect();
        };
      }
      t?.nativeToolbarAcceptConfiguration?.(r);
    } else t?.nativeToolbarRejected?.();
  }, [e, t, n]);
  let u = _$$b();
  useEffect(() => {
    r && n && (n._native_toolbar_perform_action = e => {
      u();
      $$el4(e);
    });
  }, [r, n, u]);
  let _ = noop();
  useEffect(() => {
    r && n && (_$$I(a), n._native_toolbar_set_tool_color = eu, n._native_toolbar_set_tool_preset = (e, t) => {
      switch (e) {
        case "PENCIL":
        case "HIGHLIGHTER":
          let r = LK(e).find(([e, r]) => r === t);
          r && eu(e, r[0]);
          break;
        case "TAPE":
          let n = FC.find(e => e.name === t);
          n && Iw(M8(n));
      }
    }, n._native_toolbar_set_slider_value = (e, t) => {
      switch (t) {
        case "PRIMARY_PENCIL_OPACITY":
          atomStoreManager.set(vectorPencilStyleAtom, t => ({
            ...t,
            strokeOpacity: e
          }));
          break;
        case "CONTEXTUAL_PENCIL_OPACITY":
          s(e);
          break;
        case "imageCropSlider":
          if (!_) return;
          let {
            paint,
            onChange
          } = _;
          let i = KT(paint);
          let a = AO(paint, i, e);
          if (!a) return;
          onChange({
            ...paint,
            transform: a
          }, yesNoTrackingEnum.NO);
          break;
        default:
          console.error(`_native_toolbar_set_slider_value: tool ${t} not recognized`);
      }
    }, n._native_toolbar_set_tool_image_data = (e, t, r) => {
      if ("TAPE" === e) {
        let e = base64ToUint8Array(r);
        Fullscreen.setCustomWashiTapeImageFromFile(e);
      }
    }, n._native_toolbar_activate_submenu_item = e => {
      var t = e;
      switch (U9.includes(e) ? t = "SHAPE_NAME" : X4.includes(e) ? t = "STROKE_WIDTH" : _$$k.includes(e) && (t = "HIGHLIGHTER_WIDTH"), t) {
        case "STROKE_WIDTH":
          let r = E5.get(e);
          r && atomStoreManager.set(vectorPencilStyleAtom, e => ({
            ...e,
            strokeWeight: r
          }));
          break;
        case "HIGHLIGHTER_WIDTH":
          let n = tj.get(e);
          n && atomStoreManager.set(highlighterStyleAtom, e => ({
            ...e,
            strokeWeight: n
          }));
          break;
        case "straightLine":
          $$el4("toggle-straight-pencil");
          break;
        case "ELBOWED":
          ed(DesignGraphElements.CONNECTOR_ELBOWED);
          break;
        case "STRAIGHT":
          ed(DesignGraphElements.CONNECTOR_STRAIGHT);
          break;
        case "SHAPE_NAME":
          let i = Jc.get(e);
          i && ed(i);
      }
    });
  }, [r, _, n, a, s]);
  return useMemo(() => [r, o], [r, o]);
}
let eg = (e, t = 0) => new Promise((r, n) => {
  Promise.resolve().then(() => {
    try {
      let i = _$$F(e);
      let a = `data:image/svg+xml,${encodeURIComponent(i)}`;
      let s = new Image();
      s.decoding = "sync";
      s.src = a;
      s.onload = () => {
        setTimeout(() => {
          let e = document.createElement("canvas");
          e.width = s.width;
          e.height = s.height;
          let t = e.getContext("2d");
          t ? t.drawImage(s, 0, 0) : r(void 0);
          let n = e.toDataURL();
          r(n);
        }, t);
      };
      s.onerror = () => n();
    } catch (e) {
      console.error(e);
      n();
    }
  });
});
let ef = async e => {
  let t;
  let r = _$$B.find(t => t.image === e);
  if (!(t = r ? await gC(r) : ImageCppBindings.getCompressedImage(e))) return Promise.resolve(null);
  {
    let e = "data:image/png;base64," + uint8ArrayToBase64(t);
    let r = new Image();
    r.src = e;
    await r.decode();
    return Promise.resolve({
      washiTapeImageURL: e,
      imageWidth: r.width,
      imageHeight: r.height
    });
  }
};
export function $$eE0() {
  let e = Ef();
  let t = useDebouncedCallback(t => {
    e?.nativeToolbarUpdateVisible?.(t);
  }, 250);
  let r = !WC();
  useEffect(() => {
    t(r);
    r || t.flush();
  }, [t, r]);
  useEffect(() => () => {
    t(!1);
    t.flush();
  }, [t]);
  e_();
  let o = useIsProgressBarHiddenOrLocked();
  useEffect(() => {
    e?.nativeToolbarUpdateEnabled?.(!o);
  }, [o, e]);
  let d = er();
  let u = useMemo(() => {
    let e = ec(d);
    return e ? function (e) {
      let t = h()(e.items, e => function e(t) {
        switch (t.itemStringType) {
          case "action":
          case "tool":
          case "divider":
          case "overflowingToolGroup":
          case "paletteSelector":
          case "menu":
          case "imageSelector":
          case "actionSelector":
            return [t];
          case "drawingToolGroup":
            return [t].concat(h()(t.tools, t => e(t)));
          case "stack":
            return [t].concat(h()(t.items, t => e(t)));
          case "itemGroupWithFallbacks":
            let r = h()(t.options, e => e);
            return [t].concat(h()(r, t => e(t)));
        }
      }(e));
      return h()(t, e => "action" === e.itemStringType ? e.identifier : []);
    }(e) : [];
  }, [d]);
  let _ = useSelector(e => {
    let t = e.mirror.appModel;
    return u.filter(e => Yh(t, e));
  });
  let E = useLatestRef(_);
  useEffect(() => {
    !_ || E && arraysEqual(E, _) || e?.nativeToolbarUpdateEnabledActions?.(_);
  }, [e, _, E]);
  let y = $$ea2(useCurrentTool());
  useSingleEffect(() => {
    y && (e?.nativeToolbarUpdateActiveTool?.(y), e?.nativeToolbarUpdateMultiselectActive?.("MULTISELECT" === y));
  });
  let b = getObservableValue(AppStateTsApi?.editorState().selectionEmpty, !0);
  let N = useMemo(() => LK("PENCIL"), []);
  let L = useAtomWithSubscription(vectorPencilStyleAtom);
  useEffect(() => {
    let t = L.paints?.[0]?.color;
    if (t) {
      let r = void 0 !== L.strokeOpacity ? {
        r: t.r,
        g: t.g,
        b: t.b,
        a: L.strokeOpacity
      } : t;
      eg(jsx(W, {
        color: colorCSSManipulatorInstance.format(r)
      })).then(r => {
        r && (e?.nativeToolbarUpdateToolSettings?.("PENCIL", ep(N, t, r)), e?.nativeToolbarUpdateToolSettings?.("PRIMARY_PENCIL_OPACITY", ep(N, t, r)));
      }).catch(console.error);
    }
  }, [e, L, N]);
  let F = useMemo(() => LK("HIGHLIGHTER"), []);
  let j = useAtomWithSubscription(highlighterStyleAtom);
  useEffect(() => {
    let t = j.paints?.[0]?.color;
    t && eg(jsx(K, {
      color: colorCSSManipulatorInstance.format(t)
    })).then(r => {
      r && e?.nativeToolbarUpdateToolSettings?.("HIGHLIGHTER", ep(F, t, r));
    }).catch(console.error);
  }, [e, j, F]);
  let U = useAtomWithSubscription(toolStylesAtom);
  let B = U.washiTapePaint?.image;
  useEffect(() => {
    let t = B?.hash;
    if (t) {
      let r = sha1HexFromBytes(t);
      let i = FC.find(e => e.image === r);
      ef(r).then(t => {
        t && eg(jsx(Y, {
          imageURL: t.washiTapeImageURL,
          imageWidth: t.imageWidth,
          imageHeight: t.imageHeight
        }), 50).then(t => {
          if (t) {
            let n;
            n = i ? {
              settingsType: Ud.presetImage,
              presetIdentifier: i.name,
              toolImageURL: t,
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            } : {
              settingsType: Ud.customImage,
              imageIdentifier: r,
              toolImageURL: t,
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            };
            e?.nativeToolbarUpdateToolSettings?.("TAPE", n);
          }
        });
      });
    }
  }, [e, B]);
  let G = getObservableValue(AppStateTsApi?.editorState().pencilStraightLine, !1);
  let H = getObservableValue(AppStateTsApi?.editorState().shiftStraightLine, !1);
  let z = useMemo(() => {
    let e = [];
    E5.forEach((t, r) => {
      t === L.strokeWeight && e.push(r);
    });
    tj.forEach((t, r) => {
      t === j.strokeWeight && e.push(r);
    });
    (G || H) && e.push("straightLine");
    return e;
  }, [L.strokeWeight, j.strokeWeight, G, H]);
  function X(e) {
    return {
      viewportX: e.x + e.width / 2,
      viewportY: e.y - (_$$l + 2 + 20)
    };
  }
  useEffect(() => {
    e?.nativeToolbarUpdateSelectedSubmenuItems?.(z);
  }, [e, z]);
  let q = T$();
  let J = useSelector(e => {
    let t = e.multiplayerEmoji;
    return "REACTING_OR_CHATTING" === t.type && !!t.imageUrl;
  });
  let Z = useCallback(e => {
    if (q) emojiWheelManagerInstance.closeWheel();else {
      let {
        viewportX,
        viewportY
      } = X(e);
      emojiWheelManagerInstance.handleShortcutPressWithType({
        viewportX,
        viewportY,
        source: "figma_mobile",
        openedViaHover: !1,
        wheelType: "STAMP"
      });
      emojiWheelManagerInstance.handleShortcutRelease(viewportX, viewportY);
    }
  }, [q]);
  let Q = useCallback(e => {
    if (q) {
      let {
        viewportX,
        viewportY
      } = X(e);
      emojiWheelManagerInstance.updateEmojiWheelPosition(viewportX, viewportY);
    }
  }, [q]);
  let ee = wi();
  let et = useSelector(e => e.universalInsertModal.pinned === PinningState.NOT_PINNED);
  let en = useDispatch<AppDispatch>();
  let eu = useCallback(e => {
    ee ? (et && $$el4("set-tool-default"), en(closeUniversalInsertModal())) : ($$el4("clear-tool"), en(setUniversalInsertModalOpen({
      initialX: 0,
      initialY: 0,
      sourceRect: e
    })));
  }, [en, ee, et]);
  let eh = useSelector(e => !!e.universalInsertModal.sourceRect);
  let em = useCallback(e => {
    eh && en(updateSourceRect({
      sourceRect: e
    }));
  }, [en, eh]);
  useEffect(() => {
    let t = [];
    (q || J) && t.push("STAMP");
    ee && t.push("INSERT");
    e?.nativeToolbarUpdateToolsShowingSubmenus?.(t);
  }, [e, q, J, ee]);
  let eE = HS();
  let ey = Ii();
  let eb = _$$b();
  useEffect(() => {
    function e(e) {
      return e - ey + j5();
    }
    eE && (eE._native_toolbar_activate_tool = e => {
      let t;
      eb();
      (t = e === y && $$eo1(y) ? ei() : $$es3.get(e)) && $$el4(t);
    }, eE._native_toolbar_activate_overflowing_tool = (t, r) => {
      switch (r.y = e(r.y), "INSERT" !== t && et && en(closeUniversalInsertModal()), "STAMP" !== t && q && emojiWheelManagerInstance.closeWheel(), t) {
        case "SHAPE":
        case "CONNECTOR":
          break;
        case "STICKY":
          ed(DesignGraphElements.STICKY);
          break;
        case "TYPE":
          ed(DesignGraphElements.TYPE);
          break;
        case "SECTION":
          b ? ed(DesignGraphElements.SECTION) : (Fullscreen.triggerActionInUserEditScope("create-section-from-selection", {
            source: "figma_mobile"
          }), $$el4("set-tool-default"));
          break;
        case "TABLE":
          ed(DesignGraphElements.TABLE);
          break;
        case "STAMP":
          Z(r);
          break;
        case "INSERT":
          eu(r);
      }
    }, eE._native_toolbar_update_tool_source_rect = (t, r) => {
      setTimeout(() => {
        switch (r.y = e(r.y), t) {
          case "STAMP":
            Q(r);
            break;
          case "INSERT":
            em(r);
        }
      }, 200);
    });
  }, [eE, ey, eb, Z, eu, Q, em, q, y, b, et, en]);
  return null;
}
export const vW = $$eE0;
export const S0 = $$eo1;
export const pK = $$ea2;
export const Jh = $$es3;
export const Jm = $$el4;
export const W6 = $$eh5;
export const H_ = $$em6;
