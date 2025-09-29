import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { stylex } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import l from "classnames";
import { getI18nString } from "../905/303541";
import { getVisibleTheme } from "../905/640017";
import { $B } from "../figma_app/545877";
import { FFileType } from "../figma_app/191312";
import { TE } from "../7021/724859";
import { E as _$$E } from "../9864/653721";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { selectCurrentUser } from "../905/372672";
import { bk, T$, Nz, ZE, VQ, $l, YH, VN, Q7, aV, uN, PG } from "../905/98947";
import { pu } from "../7037/430062";
import { K2, R6, q2, pV } from "../7021/970540";
import { languageCodes, defaultLanguage } from "../905/816253";
import { buildUploadUrl } from "../figma_app/169182";
import { WAFImage } from "../905/675859";
import { getI18nState } from "../figma_app/363242";
import { useSelector } from "react-redux";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AvatarSize } from "../905/590952";
import { TeamAvatar } from "../figma_app/537817";
import { e as _$$e } from "../905/579755";
import { A as _$$A } from "../svg/842087";
import { A as _$$A2 } from "../5724/240681";
var n = l;
function $$m() {
  return jsxs("svg", {
    width: "51",
    height: "45",
    viewBox: "0 0 51 45",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_d_2705_11182)",
      children: [jsx("path", {
        d: "M11.5443 8.52143C11.5849 7.59712 12.7498 7.20601 13.3322 7.92495L17.9231 13.5926C18.6738 14.5193 20.0635 14.5873 20.901 13.7383L26.8427 7.71534C27.3985 7.15187 28.3576 7.42689 28.5304 8.19931L30.3775 16.4557C30.6379 17.6195 31.8525 18.2983 32.9802 17.9102L39.8769 15.5365C40.7517 15.2354 41.5324 16.1844 41.077 16.9898C37.9528 22.5153 35.943 26.6785 34.0878 32.8275C33.903 33.4399 33.2018 33.7344 32.6345 33.4387C25.3003 29.6158 18.2329 27.5893 9.98741 26.9447C9.3496 26.8949 8.91096 26.2736 9.07881 25.6562C10.7639 19.4585 11.2658 14.8629 11.5443 8.52143Z",
        fill: "white"
      }), jsx("path", {
        d: "M14.2064 7.21684C12.9608 5.67909 10.5057 6.53144 10.4204 8.47207C10.1442 14.7615 9.64965 19.2689 7.99322 25.3611C7.63986 26.6607 8.56036 27.9616 9.89973 28.0663C17.9943 28.6991 24.9146 30.6834 32.1145 34.4363C33.3058 35.0573 34.7759 34.4418 35.1649 33.1524C36.9885 27.1082 38.9577 23.0236 42.0563 17.5435C43.0124 15.8526 41.382 13.8287 39.5108 14.4728L32.6141 16.8464C32.1207 17.0162 31.5893 16.7193 31.4754 16.2101L29.6283 7.95369C29.2611 6.31231 27.223 5.72789 26.0418 6.92527L20.1001 12.9483C19.7337 13.3197 19.1257 13.29 18.7973 12.8845L14.2064 7.21684Z",
        stroke: "white",
        strokeWidth: "2.25"
      })]
    }), jsx("path", {
      d: "M10.1966 25.8328C11.8575 19.6895 12.3727 15.0745 12.6546 8.87578L17.0489 14.3007C18.2218 15.7487 20.3932 15.855 21.7019 14.5284L27.4826 8.66856L29.2797 16.7013C29.6865 18.5198 31.5843 19.5804 33.3463 18.9739L39.9477 16.7019C36.902 22.1081 34.8932 26.2949 33.0464 32.3848C25.6524 28.547 18.5007 26.4963 10.1966 25.8328Z",
      fill: "#FFE2E0",
      stroke: "#F24822",
      strokeWidth: "2.25"
    }), jsx("defs", {
      children: jsxs("filter", {
        id: "filter0_d_2705_11182",
        x: "0.0410156",
        y: "0.665161",
        width: "50.1738",
        height: "44.1403",
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
          dy: "2.25"
        }), jsx("feGaussianBlur", {
          stdDeviation: "3.375"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_2705_11182"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_2705_11182",
          result: "shape"
        })]
      })
    })]
  });
}
function E(e) {
  return jsxs("svg", {
    width: "72",
    height: "76",
    viewBox: "0 0 72 76",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_d_986_58355)",
      children: [jsx("path", {
        d: "M41.625 65.25L36 36L60.75 50.625L48.375 54L41.625 65.25Z",
        fill: e.color
      }), jsx("path", {
        d: "M40.5202 65.4625L41.0759 68.3518L42.5897 65.8288L49.1071 54.9664L61.046 51.7104L63.6133 51.0102L61.3223 49.6565L36.5723 35.0315L34.424 33.762L34.8952 36.2125L40.5202 65.4625Z",
        stroke: "white",
        strokeWidth: "2.25",
        strokeLinecap: "square"
      })]
    }), jsx("defs", {
      children: jsxs("filter", {
        id: "filter0_d_986_58355",
        x: "29.8477",
        y: "29.5234",
        width: "39.6289",
        height: "45.9297",
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
          dy: "1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_986_58355"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_986_58355",
          result: "shape"
        })]
      })
    })]
  });
}
function b() {
  return jsxs("svg", {
    width: "39",
    height: "48",
    viewBox: "0 0 39 48",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_d_2495_14946)",
      children: [jsxs("mask", {
        id: "path-1-outside-1_2495_14946",
        maskUnits: "userSpaceOnUse",
        x: "2.36248",
        y: "1.9262",
        width: "32.5008",
        height: "38.6627",
        fill: "black",
        children: [jsx("rect", {
          fill: "white",
          x: "2.36248",
          y: "1.9262",
          width: "32.5008",
          height: "38.6627"
        }), jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.7759 30.2688C22.2229 28.166 23.8573 26.5717 25.5591 25.258C27.3699 23.8602 28.7131 21.837 29.226 19.4241C30.3743 14.0219 26.9258 8.71176 21.5237 7.56349C16.1215 6.41523 10.8113 9.86369 9.66307 15.2659C9.15356 17.6629 9.5491 20.0418 10.6188 22.0471C11.623 23.9297 12.4521 26.0363 12.0085 28.1234L11.0397 32.6812C10.8101 33.7617 11.4998 34.8237 12.5802 35.0534L18.4491 36.3008C19.5295 36.5305 20.5915 35.8408 20.8212 34.7604L21.7759 30.2688Z"
        })]
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.7759 30.2688C22.2229 28.166 23.8573 26.5717 25.5591 25.258C27.3699 23.8602 28.7131 21.837 29.226 19.4241C30.3743 14.0219 26.9258 8.71176 21.5237 7.56349C16.1215 6.41523 10.8113 9.86369 9.66307 15.2659C9.15356 17.6629 9.5491 20.0418 10.6188 22.0471C11.623 23.9297 12.4521 26.0363 12.0085 28.1234L11.0397 32.6812C10.8101 33.7617 11.4998 34.8237 12.5802 35.0534L18.4491 36.3008C19.5295 36.5305 20.5915 35.8408 20.8212 34.7604L21.7759 30.2688Z",
        fill: "#FFE2E0"
      }), jsx("path", {
        d: "M20.8212 34.7604L23.022 35.2282L20.8212 34.7604ZM21.7759 30.2688L19.5751 29.801L21.7759 30.2688ZM27.0252 18.9563C26.6273 20.8281 25.5887 22.3928 24.1842 23.4769L26.934 27.0391C29.1512 25.3275 30.799 22.8459 31.4269 19.8919L27.0252 18.9563ZM21.0559 9.76432C25.2425 10.6542 27.9151 14.7696 27.0252 18.9563L31.4269 19.8919C32.8335 13.2742 28.6091 6.76928 21.9915 5.36266L21.0559 9.76432ZM11.8639 15.7337C12.7538 11.547 16.8692 8.87442 21.0559 9.76432L21.9915 5.36266C15.3738 3.95604 8.86886 8.1804 7.46224 14.798L11.8639 15.7337ZM12.604 20.9881C11.7744 19.433 11.4686 17.5932 11.8639 15.7337L7.46224 14.798C6.83848 17.7326 7.32376 20.6507 8.63356 23.1061L12.604 20.9881ZM13.2406 33.149L14.2093 28.5912L9.80768 27.6556L8.83889 32.2134L13.2406 33.149ZM13.048 32.8525C13.183 32.8812 13.2693 33.014 13.2406 33.149L8.83889 32.2134C8.35088 34.5094 9.81647 36.7662 12.1124 37.2542L13.048 32.8525ZM18.9169 34.1L13.048 32.8525L12.1124 37.2542L17.9813 38.5017L18.9169 34.1ZM18.6204 34.2926C18.6491 34.1575 18.7818 34.0713 18.9169 34.1L17.9813 38.5017C20.2772 38.9897 22.534 37.5241 23.022 35.2282L18.6204 34.2926ZM19.5751 29.801L18.6204 34.2926L23.022 35.2282L23.9767 30.7366L19.5751 29.801ZM8.63356 23.1061C9.60687 24.9307 10.0728 26.4085 9.80768 27.6556L14.2093 28.5912C14.8315 25.6641 13.6392 22.9287 12.604 20.9881L8.63356 23.1061ZM24.1842 23.4769C22.431 24.8303 20.2019 26.8519 19.5751 29.801L23.9767 30.7366C24.2438 29.48 25.2835 28.3131 26.934 27.0391L24.1842 23.4769Z",
        fill: "white",
        mask: "url(#path-1-outside-1_2495_14946)"
      }), jsx("mask", {
        id: "path-3-inside-2_2495_14946",
        fill: "white",
        children: jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.7759 30.2688C22.2229 28.166 23.8573 26.5717 25.5591 25.258C27.3699 23.8602 28.7131 21.837 29.226 19.4241C30.3743 14.0219 26.9258 8.71176 21.5237 7.56349C16.1215 6.41523 10.8113 9.86369 9.66307 15.2659C9.15356 17.6629 9.5491 20.0418 10.6188 22.0471C11.623 23.9297 12.4521 26.0363 12.0085 28.1234L11.0397 32.6812C10.8101 33.7617 11.4998 34.8237 12.5802 35.0534L18.4491 36.3008C19.5295 36.5305 20.5915 35.8408 20.8212 34.7604L21.7759 30.2688Z"
        })
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.7759 30.2688C22.2229 28.166 23.8573 26.5717 25.5591 25.258C27.3699 23.8602 28.7131 21.837 29.226 19.4241C30.3743 14.0219 26.9258 8.71176 21.5237 7.56349C16.1215 6.41523 10.8113 9.86369 9.66307 15.2659C9.15356 17.6629 9.5491 20.0418 10.6188 22.0471C11.623 23.9297 12.4521 26.0363 12.0085 28.1234L11.0397 32.6812C10.8101 33.7617 11.4998 34.8237 12.5802 35.0534L18.4491 36.3008C19.5295 36.5305 20.5915 35.8408 20.8212 34.7604L21.7759 30.2688Z",
        fill: "#FFE2E0"
      }), jsx("path", {
        d: "M20.8212 34.7604L22.7775 35.1762L20.8212 34.7604ZM21.7759 30.2688L19.8196 29.853L21.7759 30.2688ZM27.2697 19.0083C26.8591 20.9402 25.7866 22.5559 24.337 23.6748L26.7812 26.8412C28.9533 25.1645 30.5672 22.7338 31.1823 19.8399L27.2697 19.0083ZM21.1078 9.51979C25.4296 10.4384 28.1883 14.6865 27.2697 19.0083L31.1823 19.8399C32.5602 13.3573 28.4221 6.98511 21.9395 5.6072L21.1078 9.51979ZM11.6194 15.6817C12.538 11.3599 16.7861 8.60118 21.1078 9.51979L21.9395 5.6072C15.4569 4.22928 9.08469 8.36744 7.70678 14.85L11.6194 15.6817ZM12.3834 21.1058C11.5272 19.5007 11.2114 17.6009 11.6194 15.6817L7.70678 14.85C7.09571 17.7249 7.57102 20.583 8.85414 22.9884L12.3834 21.1058ZM12.996 33.0971L13.9648 28.5392L10.0522 27.7076L9.08342 32.2654L12.996 33.0971ZM12.996 33.0971L9.08342 32.2654C8.62412 34.4263 10.0035 36.5504 12.1644 37.0097L12.996 33.0971ZM18.8649 34.3445L12.996 33.0971L12.1644 37.0097L18.0333 38.2571L18.8649 34.3445ZM18.8649 34.3445L18.8649 34.3445L18.0333 38.2571C20.1941 38.7164 22.3182 37.337 22.7775 35.1762L18.8649 34.3445ZM19.8196 29.853L18.8649 34.3445L22.7775 35.1762L23.7322 30.6847L19.8196 29.853ZM8.85414 22.9884C9.83088 24.8195 10.3371 26.3672 10.0522 27.7076L13.9648 28.5392C14.5671 25.7055 13.4151 23.04 12.3834 21.1058L8.85414 22.9884ZM24.337 23.6748C22.5895 25.0238 20.4265 26.9979 19.8196 29.853L23.7322 30.6847C24.0193 29.334 25.1251 28.1196 26.7812 26.8412L24.337 23.6748Z",
        fill: "#F24822",
        mask: "url(#path-3-inside-2_2495_14946)"
      }), jsx("mask", {
        id: "path-5-inside-3_2495_14946",
        fill: "white",
        children: jsx("path", {
          d: "M12.7031 24.8574L22.4846 26.9365C22.2549 28.017 21.1929 28.7067 20.1125 28.477L14.2436 27.2295C13.1632 26.9999 12.4735 25.9379 12.7031 24.8574Z"
        })
      }), jsx("path", {
        d: "M12.7031 24.8574L22.4846 26.9365C22.2549 28.017 21.1929 28.7067 20.1125 28.477L14.2436 27.2295C13.1632 26.9999 12.4735 25.9379 12.7031 24.8574Z",
        fill: "#FFE2E0"
      }), jsx("path", {
        d: "M12.7031 24.8574L13.1189 22.9011L11.1627 22.4853L10.7468 24.4416L12.7031 24.8574ZM12.2873 26.8137L22.0688 28.8928L22.9004 24.9802L13.1189 22.9011L12.2873 26.8137ZM20.5283 26.5207L14.6594 25.2732L13.8278 29.1858L19.6967 30.4333L20.5283 26.5207ZM14.6594 25.2732L14.6594 25.2732L10.7468 24.4416C10.2875 26.6025 11.6669 28.7265 13.8278 29.1858L14.6594 25.2732ZM20.5283 26.5207L20.5283 26.5207L19.6967 30.4333C21.8575 30.8926 23.9816 29.5132 24.4409 27.3524L20.5283 26.5207Z",
        fill: "#F24822",
        mask: "url(#path-5-inside-3_2495_14946)"
      }), jsx("mask", {
        id: "path-7-inside-4_2495_14946",
        fill: "white",
        children: jsx("path", {
          d: "M11.8711 28.7695L21.6526 30.8486C21.4229 31.9291 20.3609 32.6188 19.2805 32.3891L13.4116 31.1416C12.3311 30.912 11.6414 29.85 11.8711 28.7695Z"
        })
      }), jsx("path", {
        d: "M11.8711 28.7695L21.6526 30.8486C21.4229 31.9291 20.3609 32.6188 19.2805 32.3891L13.4116 31.1416C12.3311 30.912 11.6414 29.85 11.8711 28.7695Z",
        fill: "#FFE2E0"
      }), jsx("path", {
        d: "M11.8711 28.7695L12.2869 26.8132L10.3306 26.3974L9.9148 28.3537L11.8711 28.7695ZM11.4553 30.7258L21.2367 32.8049L22.0684 28.8924L12.2869 26.8132L11.4553 30.7258ZM19.6963 30.4328L13.8274 29.1854L12.9957 33.0979L18.8646 34.3454L19.6963 30.4328ZM13.8274 29.1854L13.8274 29.1854L9.9148 28.3537C9.45549 30.5146 10.8349 32.6386 12.9957 33.0979L13.8274 29.1854ZM19.6963 30.4328L19.6963 30.4328L18.8646 34.3454C21.0255 34.8047 23.1496 33.4253 23.6089 31.2645L19.6963 30.4328Z",
        fill: "#F24822",
        mask: "url(#path-7-inside-4_2495_14946)"
      }), jsx("rect", {
        x: "11.3086",
        y: "26.6055",
        width: "12",
        height: "2",
        transform: "rotate(12 11.3086 26.6055)",
        fill: "white"
      }), jsx("rect", {
        x: "10.4766",
        y: "30.5176",
        width: "12",
        height: "2",
        transform: "rotate(12 10.4766 30.5176)",
        fill: "white"
      }), jsx("path", {
        d: "M23.7403 20.5587C25.0174 19.026 26.3525 15.2505 21.4772 12.4101",
        stroke: "#F24822",
        strokeWidth: "2"
      })]
    }), jsx("defs", {
      children: jsxs("filter", {
        id: "filter0_d_2495_14946",
        x: "0.441406",
        y: "0.591797",
        width: "38.0039",
        height: "47.0039",
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
          dy: "2.25"
        }), jsx("feGaussianBlur", {
          stdDeviation: "3.375"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_2495_14946"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_2495_14946",
          result: "shape"
        })]
      })
    })]
  });
}
let j = "cursor--isCursorChat--4ki-L";
var C = (e => (e.RED = "RED", e.GREEN = "GREEN", e.PURPLE = "PURPLE", e.PINK = "PINK", e.YELLOW = "YELLOW", e.GREY = "GREY", e.BLUE = "BLUE", e.GEN_1_YELLOW = "GEN_1_YELLOW", e.GEN_1_GREEN = "GEN_1_GREEN", e.GEN_1_PURPLE = "GEN_1_PURPLE", e.GEN_1_PINK = "GEN_1_PINK", e.YELLOW_2 = "YELLOW_2", e.GREY_2 = "GREY_2", e.BLUE_2 = "BLUE_2", e.FADED_PURPLE = "FADED_PURPLE", e.FADED_BLUE = "FADED_BLUE", e.FADED_YELLOW = "FADED_YELLOW", e.FADED_GREY = "FADED_GREY", e.FADED_GREEN = "FADED_GREEN", e.FADED_GREEN_2 = "FADED_GREEN_2", e.FADED_BLUE_2 = "FADED_BLUE_2", e.FADED_RED = "FADED_RED", e))(C || {});
let L = {
  red: "var(--color-multiplayerred, #f24822)",
  green: "var(--color-multiplayergreen, #14ae5c)",
  purple: "var(--color-multiplayerpurple, #9747ff)",
  pink: "var(--color-multiplayerpink, #ff24bd)",
  yellow: "var(--color-multiplayeryellow, #ffcd29)",
  grey: "var(--color-multiplayergrey, #679)",
  blue: "var(--color-multiplayerblue, #007be5)"
};
let v = {
  RED: {
    color: L.red,
    className: "cursor--cursorRed--FFMZm"
  },
  GREEN: {
    color: L.green,
    className: "cursor--cursorGreen--wo8l2"
  },
  PURPLE: {
    color: L.purple,
    className: "cursor--cursorPurple--L5rev"
  },
  PINK: {
    color: L.pink,
    className: "cursor--cursorPink--MIUs-"
  },
  YELLOW: {
    color: L.yellow,
    className: "cursor--cursorYellow--7Ku0-"
  },
  YELLOW_2: {
    color: L.yellow,
    className: "cursor--cursorYellow2--aiOSl"
  },
  GREY: {
    color: L.grey,
    className: "cursor--cursorGrey--t-KFd"
  },
  GREY_2: {
    color: L.grey,
    className: "cursor--cursorGrey2--GHyKH"
  },
  BLUE: {
    color: L.blue,
    className: "cursor--cursorBlue--07xDX"
  },
  BLUE_2: {
    color: L.blue,
    className: "cursor--cursorBlue2---NfeW"
  },
  GEN_1_YELLOW: {
    color: L.yellow,
    className: "cursor--cursorYellowGen1--CzsZI"
  },
  GEN_1_GREEN: {
    color: L.green,
    className: "cursor--cursorGreenGen1--tb7Y6"
  },
  GEN_1_PURPLE: {
    color: L.purple,
    className: "cursor--cursorPurpleGen1--eoxBa"
  },
  GEN_1_PINK: {
    color: L.pink,
    className: "cursor--cursorPinkGen1--uGaBD"
  },
  FADED_PURPLE: {
    color: L.purple,
    className: "cursor--cursorFadedPurple--JEioD"
  },
  FADED_BLUE: {
    color: L.blue,
    className: "cursor--cursorFadedBlue--RSGqP"
  },
  FADED_BLUE_2: {
    color: L.blue,
    className: "cursor--cursorFadedBlue2--QG5Pg"
  },
  FADED_YELLOW: {
    color: L.yellow,
    className: "cursor--cursorFadedYellow--H7Oyx"
  },
  FADED_GREY: {
    color: L.grey,
    className: "cursor--cursorFadedGrey--gtTns"
  },
  FADED_GREEN: {
    color: L.green,
    className: "cursor--cursorFadedGreen--ob1WO"
  },
  FADED_GREEN_2: {
    color: L.green,
    className: "cursor--cursorFadedGreen2--odSsn"
  },
  FADED_RED: {
    color: L.red,
    className: "cursor--cursorFadedRed--1tIGg"
  }
};
function w(e) {
  let {
    isUserCursor,
    isPlaceholderName,
    isCursorChat,
    cursorText,
    isInModal
  } = e;
  let [d, u] = useState("");
  let x = useAtomWithSubscription(bk);
  let h = useAtomWithSubscription(T$);
  let p = useAtomWithSubscription($B);
  let C = useRef(null);
  let L = v.RED;
  e.color && (L = v[e.color]);
  let w = useCallback((e, r) => {
    e > r.length || (C.current && clearTimeout(C.current), u(r.slice(0, e)), C.current = setTimeout(() => {
      w(e + 1, r);
    }, Math.max(34 - e, 25)));
  }, [u]);
  useEffect(() => (isCursorChat && cursorText && w(1, cursorText), () => {
    C.current && clearTimeout(C.current);
  }), [isCursorChat, cursorText, w]);
  let y = x === pu.NAME_SELF && isUserCursor;
  return jsxs("div", {
    className: n()({
      "cursor--cursorContainer--fUI-U": !0,
      [L.className]: !0,
      "cursor--isUserCursor--4fpG1": isUserCursor,
      "cursor--userCursorFlyIn--yeyYj": y,
      "cursor--collaboratorCursorFlyIn--MX0o5": !isUserCursor,
      "cursor--isGen1--BWHgm": !!p.data,
      "cursor--modalCursor--SxzOh": !!isInModal
    }),
    "data-testid": "whiteboard-cursor",
    children: [jsx(E, {
      color: L.color
    }), jsxs("div", {
      className: n()({
        "cursor--cursorTextContainer--yG1U8": !0,
        [j]: isCursorChat,
        "cursor--isFigJamCursorChat--Xtqa4": e.hasFigJamIntent
      }),
      style: {
        backgroundColor: L.color
      },
      children: [jsx("div", {
        className: n()({
          "cursor--cursorText--dw1jO": !0,
          "cursor--isEmpty--Qu0dr": !cursorText,
          "cursor--isPlaceholderName--O882W": isPlaceholderName,
          [j]: isCursorChat,
          "cursor--isFigJamCursorText--s03Le": e.hasFigJamIntent
        }),
        children: isCursorChat ? d : cursorText
      }), (() => {
        if (!isUserCursor || x !== pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE && x !== pu.HAVE_USED_WHITEBOARDS_BEFORE) return null;
        let e = "yes_many_times" === h;
        let t = "no_first_time" === h;
        return jsxs("div", {
          className: n()({
            "cursor--cursorSecondaryIcon--I2njb": !0,
            "cursor--lightbulbIcon--VV9HL": t,
            "cursor--crownIcon--gpK-0": e
          }),
          children: [e && jsx($$m, {}), t && jsx(b, {})]
        }, `${e}-${t}`);
      })()]
    })]
  });
}
let S = [C.GREEN, C.PURPLE, C.PINK, C.YELLOW, C.GREY, C.BLUE];
let k = [C.GEN_1_YELLOW, C.GEN_1_GREEN, C.GEN_1_PURPLE, C.GEN_1_PINK];
let O = [{
  cursorColor: C.GREEN
}, {
  cursorColor: C.PURPLE
}, {
  cursorColor: C.PINK
}, {
  cursorColor: C.YELLOW_2
}, {
  cursorColor: C.GREY_2
}, {
  cursorColor: C.BLUE_2
}, {
  cursorColor: C.FADED_PURPLE
}, {
  cursorColor: C.FADED_BLUE
}, {
  cursorColor: C.FADED_BLUE_2
}, {
  cursorColor: C.FADED_YELLOW
}, {
  cursorColor: C.FADED_GREY
}, {
  cursorColor: C.FADED_GREEN
}, {
  cursorColor: C.FADED_GREEN_2
}, {
  cursorColor: C.FADED_RED
}];
let N = e => {
  switch (e) {
    case "brainstorms":
      return getI18nString("new_user_experience.what_will_you_use_figjam_for.cursor_chat.brainstorms");
    case "diagramming":
      return getI18nString("new_user_experience.what_will_you_use_figjam_for.cursor_chat.diagramming");
    case "learning":
      return getI18nString("new_user_experience.what_will_you_use_figjam_for.cursor_chat.learning");
    case "meetings":
      return getI18nString("new_user_experience.what_will_you_use_figjam_for.cursor_chat.meetings");
    case "projects":
      return getI18nString("new_user_experience.what_will_you_use_figjam_for.cursor_chat.projects");
  }
};
let T = e => {
  switch (e) {
    case "developer":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.developer");
    case "designer":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.designer");
    case "product_manager":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.product_manager");
    case "research":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.user_researcher");
    case "marketer":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.marketer");
    case "student":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.student");
    case "educator":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.student_or_educator");
    case "ux_writing":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.ux_writing");
    case "data_analytics":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.data_analytics");
    case "something_else":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.other");
    default:
      return "";
  }
};
function R(e) {
  let r = useAtomWithSubscription(Nz);
  let t = useAtomWithSubscription(bk);
  let s = K2();
  let l = Array.from(r)[r.size - 1];
  let [n] = useAtomWithSubscription(ZE);
  let a = function (e) {
    let r = R6();
    let t = selectCurrentUser();
    let i = useAtomWithSubscription(bk);
    let [s] = useAtomWithSubscription(VQ);
    let l = useAtomWithSubscription($l);
    if (e && (r?.resourceType === q2.TEAM || r?.resourceType === q2.PROJECT)) {
      let e = r.members?.filter(e => e.user_id !== t?.id && !e.pending && e.user.handle.length < 12 && e.user.handle).map(e => !e.pending && e.user.handle) || [];
      return k.slice(0, e.length ? e.length : k.length).map((r, t) => ({
        cursorColor: r,
        text: e[t] || ""
      }));
    }
    if (i === pu.INVITE_COLLABORATORS) {
      let e = l.filter(e => "" !== e.trim()).map(e => e.split("@")[0]);
      for (; e.length < 3;) e.push("");
      return e.map((r, t) => {
        let i = S[t];
        let s = "" === e[t];
        return {
          cursorColor: i,
          text: s ? YH[t] : r,
          isPlaceholderName: s
        };
      });
    }
    if (i === pu.HOW_MANY_PEOPLE_WORK_IN_ORGANIZATION) switch (s) {
      case "2-100":
        return O.slice(0, 1);
      case "101-500":
        return O.slice(0, 3);
      case "501-5000":
        return O.slice(0, 6);
      case "over_5000":
        return O;
    }
    return [];
  }(e.alwaysShowCollaborators);
  let d = useMemo(() => {
    switch (t) {
      case pu.WHAT_DO_YOU_DO:
      case pu.WHAT_DO_YOU_DO_V2:
        if (!e.hasFigJamIntent && n && e.hasStaticBackground) return T(n);
        break;
      case pu.WHAT_WILL_YOU_USE_FIGJAM_FOR:
        if (l) return N(l);
    }
    return "";
  }, [t, n, l, e.hasStaticBackground, e.hasFigJamIntent]);
  return jsxs("div", {
    className: "cursor--cursorHandler--xiqnA",
    children: [jsx(w, {
      cursorText: d || s,
      isCursorChat: !!d,
      isUserCursor: !0,
      hasFigJamIntent: e.hasFigJamIntent,
      isInModal: e.isInModal
    }), a.map(r => jsx(w, {
      color: r.cursorColor,
      cursorText: r.text,
      isPlaceholderName: r.isPlaceholderName,
      isInModal: e.isInModal
    }, r.cursorColor))]
  });
}
let F = [languageCodes.EN, languageCodes.JA, languageCodes.ES_ES, languageCodes.ES_LA, languageCodes.KO_KR, languageCodes.PT_BR];
function B({
  editorType: e,
  mode: r
}) {
  let t = function ({
    editorType: e,
    mode: r
  }) {
    let t = getI18nState()?.getPrimaryLocale(!1) || defaultLanguage;
    let i = function (e) {
      switch (e) {
        case FFileType.DESIGN:
          return {
            light: {
              [languageCodes.EN]: "38c0ed412f41cdf0544b90637746b985d25e9bf0",
              [languageCodes.JA]: "5a4a81b7e19ff1e969b5c77186ab4f9d5798d42e",
              [languageCodes.ES_ES]: "c8c33aef4d9f8dad736e5ac04aee069bfb6c253b",
              [languageCodes.ES_LA]: "1efb3fc1c373fc688b619e3cf62a159595acccad",
              [languageCodes.KO_KR]: "99471a605fd0fd89232a41dd6e397efbfb35b297",
              [languageCodes.PT_BR]: "1958e791dcc4e4e1d81f4dbdc9c54daa4918cc7e"
            },
            dark: {
              [languageCodes.EN]: "1706c20bd3eb6088e5443c3f02da0878c5a7d2ea",
              [languageCodes.JA]: "ed44c8602dcee44087e316d256fb03b17ebbf22a",
              [languageCodes.ES_ES]: "7adcfdd8259cdfe89f0c8416862dacf6cab8cd08",
              [languageCodes.ES_LA]: "6415ac7340a38d186261dc65bd82795e9095eee6",
              [languageCodes.KO_KR]: "d6f62ac31e6c22bc1028e99cf99263d3b4f13a01",
              [languageCodes.PT_BR]: "315add9a58c81cd123b4070e42144963a3f189a8"
            }
          };
        case FFileType.WHITEBOARD:
          let r = {
            [languageCodes.EN]: "9796ec68246bd4faf17e3075b91a959c2610335c",
            [languageCodes.JA]: "21bb4faa3628c6e38e543d8c94d0d8e60dd5e015",
            [languageCodes.ES_ES]: "bb93bf5b547bbc4e11232ad9e0d4150a3361746a",
            [languageCodes.ES_LA]: "c3cdb8f5b54e06f9e29c1e134e7e9786f2016396",
            [languageCodes.KO_KR]: "7df5de673dd970b0e0e9def92cce44dde6f3c734",
            [languageCodes.PT_BR]: "98131a3aeb8fe111daa6841c9b6bbf55c9b4bcc9"
          };
          return {
            light: r,
            dark: r
          };
        case FFileType.SLIDES:
          return {
            light: {
              [languageCodes.EN]: "c5cde8052ad6ae19520781e2271be3921b74b76b",
              [languageCodes.JA]: "5447d2917d7f3a15ee3cb53b6ce9a1fb68467c41",
              [languageCodes.ES_ES]: "d9ce087b3bedc12ef28b546de89b8a5be8016c50",
              [languageCodes.ES_LA]: "e0fdc4d5ec7b758294db75f08547080ecf26e46d",
              [languageCodes.KO_KR]: "287e6d04ec376c8f282b28ab921b455d0b4759e3",
              [languageCodes.PT_BR]: "6ba74bb26c695bd4629738985e2f4b68baad102e"
            },
            dark: {
              [languageCodes.EN]: "7bb663deeedcb0ac04786e505b09ca23b511f5e4",
              [languageCodes.JA]: "1ffc81586703039adea1ad55c70cf7cb3469c309",
              [languageCodes.ES_ES]: "d7d4976974fa3bdffbd796e79d6c2b97e108c4f1",
              [languageCodes.ES_LA]: "65b4a81b52779102803fe48f743959d1bfb2adf7",
              [languageCodes.KO_KR]: "0bfa74078968b68b001b3749d2fcd844e3f5ac98",
              [languageCodes.PT_BR]: "0b574d910e650674abcee6b984295bfb1ade959a"
            }
          };
        case FFileType.COOPER:
          return {
            light: {
              [languageCodes.EN]: "87064abb3f13813232c80850ff53ff04d8e912da",
              [languageCodes.JA]: "ad702424a2f165d2e24caeb1e6aa71a6e398a410",
              [languageCodes.ES_ES]: "689cf7e281d8f6321d1f318946eb964aa78dff99",
              [languageCodes.ES_LA]: "5232aae592ce5e6a717442695718d657ac64eb56",
              [languageCodes.KO_KR]: "51f86aff807617e549d7b83b7d454b987f32b504",
              [languageCodes.PT_BR]: "60bbb387e713bc0b2527ba6295fed146d5536128"
            },
            dark: {
              [languageCodes.EN]: "d86346ac582481851f9fe099abfff029b5318486",
              [languageCodes.JA]: "5df06f716b43418e8bc4ec4b1a6f098ef0e171f8",
              [languageCodes.ES_ES]: "0547fa8017d6f74470a940530c31e4a8d816d9bd",
              [languageCodes.ES_LA]: "3737c1ab9d2a4a3c764af54db6d8e9a14541dc26",
              [languageCodes.KO_KR]: "9700c44ed0559716aece40571459c06e6b107169",
              [languageCodes.PT_BR]: "15fb3b2e32e8edb73f04ad9b6ac0879e6806a94a"
            }
          };
        case FFileType.SITES:
          return {
            light: {
              [languageCodes.EN]: "88ec92777b44bcb29e1c638660b0c596349f0351",
              [languageCodes.JA]: "94404b3ae88d0f395da4d8351e07e9cdbff39d01",
              [languageCodes.ES_ES]: "69062a6c99334138a59ed52df45f82c17ccfd3db",
              [languageCodes.ES_LA]: "189e0cc7d4c16c6c4e8442e52517ee8cf05af933",
              [languageCodes.KO_KR]: "fa5f6ba138703484ead9f9701a20a6c00e86ad21",
              [languageCodes.PT_BR]: "c1eb199b42a52c4b68e2057892b13c1ca6e28b19"
            },
            dark: {
              [languageCodes.EN]: "8c931f89651a4b72f2edace00a1ed569af45c348",
              [languageCodes.JA]: "ba587c406354a87fb767dd47a7c4e2737fc39d29",
              [languageCodes.ES_ES]: "6435fc660b28dff492532fb23cacc099896695cf",
              [languageCodes.ES_LA]: "e7fcee7b7b159309fc648d006ad64f5db11cc2c9",
              [languageCodes.KO_KR]: "d90db6b2bcfbf2fb48a654f2fffdb671b2ca45fd",
              [languageCodes.PT_BR]: "8bceeefd6f7bd3d462a364d6da1543b1921bab27"
            }
          };
        case FFileType.FIGMAKE:
          return {
            light: {
              [languageCodes.EN]: "c14b5fcaa59f3772a84a72fde7cb02b2da1298e5",
              [languageCodes.JA]: "cf20543cee0486ac0bac49c9f90615b5b453d409",
              [languageCodes.ES_ES]: "64fbba58b1f8591e4d3ee0d36e76e77c1f872aed",
              [languageCodes.ES_LA]: "912f9e2f2cca3ea52c4301368c2f97f33e3450aa",
              [languageCodes.KO_KR]: "6adb2721a837cc55b9845f5b932b68bc00a1664a",
              [languageCodes.PT_BR]: "bde5c53acca0297a37f6b7c33759bd27863fff5f"
            },
            dark: {
              [languageCodes.EN]: "8c030eaac8efaa388071e3bdaea7d67b2ded0791",
              [languageCodes.JA]: "9da5cb2e9ffd0a4763d12c1e8937b4c8d2881abf",
              [languageCodes.ES_ES]: "3ee9d6486ea7ab7b11669499190344e0eeed352c",
              [languageCodes.ES_LA]: "107c8c09a3d6c236dfbcb6ff615ae572af912b3c",
              [languageCodes.KO_KR]: "015cb395cff9ea595d36bd9244675d82278d98ca",
              [languageCodes.PT_BR]: "201abc9ac2baa3e37070b447ecdac90a4698ec30"
            }
          };
      }
    }(e);
    return F.includes(t) ? i[r][t] : i[r][defaultLanguage];
  }({
    editorType: e,
    mode: r
  });
  return jsx(WAFImage, {
    src: buildUploadUrl(t),
    className: "xh8yej3 x5yr21d"
  });
}
function q() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5 15C14.5 16.0435 15.0328 16.9625 15.8411 17.5C15.0328 18.0375 14.5 18.9565 14.5 20C14.5 21.0435 15.0328 21.9625 15.8411 22.5C15.0328 23.0375 14.5 23.9565 14.5 25C14.5 26.6569 15.8431 28 17.5 28C19.1569 28 20.5 26.6569 20.5 25V23V22.5V22.2361C21.0308 22.7111 21.7316 23 22.5 23C24.1569 23 25.5 21.6569 25.5 20C25.5 18.9565 24.9672 18.0375 24.1589 17.5C24.9672 16.9625 25.5 16.0435 25.5 15C25.5 13.3431 24.1569 12 22.5 12H20.5H20H19.5H17.5C15.8431 12 14.5 13.3431 14.5 15ZM22.5 17C23.6046 17 24.5 16.1046 24.5 15C24.5 13.8954 23.6046 13 22.5 13H20.5V17H22.5ZM20.5 20C20.5 21.1046 21.3954 22 22.5 22C23.6046 22 24.5 21.1046 24.5 20C24.5 18.8954 23.6046 18 22.5 18C21.3954 18 20.5 18.8954 20.5 20ZM19.5 22H17.5C16.3954 22 15.5 21.1046 15.5 20C15.5 18.8954 16.3954 18 17.5 18H19.5V20V22ZM17.5 23H19.5V25C19.5 26.1046 18.6046 27 17.5 27C16.3954 27 15.5 26.1046 15.5 25C15.5 23.8954 16.3954 23 17.5 23ZM19.5 17H17.5C16.3954 17 15.5 16.1046 15.5 15C15.5 13.8954 16.3954 13 17.5 13H19.5V17Z",
      fill: "var(--color-icon, black)",
      fillOpacity: "0.9"
    })
  });
}
let U = "whiteboard--whiteboardContainerFigjam--JhWoW";
let $ = "whiteboard--whiteboardFileHeader--qi8cN";
let z = "whiteboard--whiteboardContainerDesignBg--UMCM0";
let Y = "whiteboard--whiteboardHeader--fgNtd";
let K = "whiteboard--whiteboardFileBadge--JHXAT";
let Q = "whiteboard--whiteboardAvatarContainer--ZNpIl";
let X = "whiteboard--whiteboardAvatar--qpfIy";
let er = e => e === VN.STARTER ? jsx("div", {
  className: n()(K, "whiteboard--whiteboardFileBadgeStarter--iGwlC"),
  children: getI18nString("new_user_experience.choose_plan_selected.free")
}) : e === VN.PROFESSIONAL ? jsx("div", {
  className: n()(K, "whiteboard--whiteboardFileBadgePro--LwpS-"),
  children: getI18nString("new_user_experience.choose_plan_selected.pro")
}) : null;
function et({
  file: e,
  hasFigJamIntent: r
}) {
  let t = useAtomWithSubscription(Q7);
  let s = selectCurrentUser();
  let l = useAtomWithSubscription(aV);
  let n = useAtomWithSubscription(uN);
  let [d] = useAtomWithSubscription(PG);
  let c = function (e) {
    switch (e) {
      case "work":
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.work_project");
      case "school":
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.assignment");
      case "personal_project":
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.big_idea");
      case "learning_design":
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.messy_sandbox");
      case "something_else":
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.first_file");
      default:
        return getI18nString("new_user_experience.user_onboarding_signals.whiteboard.title.new_file");
    }
  }(d);
  let x = t || s?.email?.split("@")[0];
  let h = s ? s.id : "";
  return n === FFileType.SLIDES || r ? null : jsxs("div", {
    className: Y,
    children: [jsx(q, {}), jsxs("div", {
      className: $,
      children: [jsx("span", {
        children: e?.name || function ({
          userWhiteboardName: e,
          fileType: r
        }) {
          return e && e.length < 20 ? r ? getI18nString("new_user_experience.username_file_type", {
            userName: e,
            type: r
          }) : getI18nString("new_user_experience.first_file_username", {
            userName: e
          }) : r ? getI18nString("new_user_experience.first_file_type", {
            type: r
          }) : getI18nString("new_user_experience.my_first_file");
        }({
          userWhiteboardName: x,
          fileType: c
        })
      }), er(l)]
    }), jsx("div", {
      className: Q,
      children: jsx(_$$e, {
        entity: {
          id: h,
          name: x
        },
        size: 24,
        adtlClassName: X
      })
    })]
  });
}
function ei() {
  let e = useAtomWithSubscription(Q7);
  let r = selectCurrentUser();
  let t = e || r?.email?.split("@")[0];
  let s = r ? r.id : "";
  let l = t && t.length < 20 ? getI18nString("new_user_experience.file_username", {
    userName: t
  }) : getI18nString("new_user_experience.my_file");
  return jsxs("div", {
    className: Y,
    children: [jsx(q, {}), jsx("div", {
      className: $,
      children: jsx("span", {
        children: l
      })
    }), jsx("div", {
      className: Q,
      children: jsx(_$$e, {
        entity: {
          id: s,
          name: t
        },
        size: 24,
        adtlClassName: X
      })
    })]
  });
}
function es({
  team: e
}) {
  let r = useSelector(r => r.roles.byTeamId[e.id]) ?? {};
  return jsxs("div", {
    className: n()(Y, "whiteboard--teamHeader--L87B-"),
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.gap16.itemsCenter.$,
      children: [jsx(TeamAvatar, {
        team: e,
        size: AvatarSize.LARGE40,
        avatarSvg: _$$A2
      }), jsx("span", {
        className: "xlyipyv xb3r6kr xuxw1ft x1va8c73 xu7hf8f xew4c2t x1dgvubu",
        children: e.name
      })]
    }), jsxs("div", {
      className: "whiteboard--teamSizeContainer--bRiCY",
      children: [jsx(SvgComponent, {
        svg: _$$A,
        style: {
          alignSelf: "center",
          paddingRight: "5px"
        }
      }), jsx("div", {
        children: Object.keys(r).length
      })]
    })]
  });
}
function eo({
  project: e
}) {
  return jsx("div", {
    className: n()(Y, "whiteboard--projectHeader--oafjc"),
    children: jsx("span", {
      children: e.name
    })
  });
}
function el({
  isGen1: e,
  resource: r,
  hasFigJamIntent: t,
  isInModal: s
}) {
  if (s) return jsx(ei, {});
  if (e) switch (r?.resourceType) {
    case q2.FILE:
      return jsx(et, {
        file: r.resource,
        hasFigJamIntent: t
      });
    case q2.PROJECT:
      return jsx(eo, {
        project: r.resource
      });
    case q2.TEAM:
      return jsx(es, {
        team: r.resource
      });
  }
  return jsx(et, {
    hasFigJamIntent: t
  });
}
let en = {
  illustrationContainer: {
    height: "x5yr21d",
    borderRadius: "x4pepcl",
    whiteSpace: "xuxw1ft",
    position: "x1n2onr6",
    overflow: "xb3r6kr",
    boxShadow: "x1wu5q8a",
    $$css: !0
  },
  illustrationBackground: {
    background: "x16v0e3u",
    $$css: !0
  }
};
function ea({
  currentQuestion: e,
  selectedProduct: r,
  isDarkMode: t,
  hasFigJamIntent: s
}) {
  let o;
  if ((!r || e !== pu.CHOOSE_PRODUCT) && !s) return null;
  let l = t ? "dark" : "light";
  s ? o = jsx(B, {
    mode: l,
    editorType: FFileType.WHITEBOARD
  }) : [FFileType.DESIGN, FFileType.SITES, FFileType.FIGMAKE, FFileType.SLIDES, FFileType.COOPER, FFileType.WHITEBOARD].includes(r) && (o = jsx(B, {
    mode: l,
    editorType: r
  }));
  return jsx("div", {
    className: "xamitd3 x10l6tqk x13vifvy xh8yej3",
    children: o
  });
}
export function $$ed0({
  hasFigJamIntent: e,
  isInModal: r = !1
}) {
  let t;
  let l = useAtomWithSubscription(bk);
  let _ = useAtomWithSubscription(uN);
  let p = pV(_, e);
  let m = _$$E();
  let E = e ? {
    "data-preferred-theme": "light"
  } : {};
  let b = R6();
  let j = useAtomWithSubscription($B);
  let C = "dark" === getVisibleTheme();
  let L = l === pu.CHOOSE_PRODUCT && !!_;
  let v = _ === FFileType.DESIGN;
  let w = _ === FFileType.WHITEBOARD;
  let S = _ === FFileType.SLIDES;
  let k = !1;
  if (!r) {
    if (b?.resourceType === q2.FILE && j.data) {
      var O;
      b.resource.editor_type === FFileType.WHITEBOARD ? w = !0 : b.resource.editor_type === FFileType.SLIDES ? S = !0 : v = !0;
      t = (O = b.resource.editor_type) === FFileType.SLIDES ? "slides" : O === FFileType.WHITEBOARD ? "whiteboard" : "design";
    } else b && j.data && (t = "none", k = !0);
  }
  let N = {
    "whiteboard--whiteboardContainer--9gy8r": !0,
    "whiteboard--jobTitleRepromptWhiteboardContainer--EyiWN": r
  };
  L ? N = {
    ...N,
    "whiteboard--whiteboardContainerProductStep--aqpPM": !0,
    [U]: w
  } : j.data ? N = {
    ...N,
    [z]: v || S,
    [U]: w
  } : e && (N = {
    ...N,
    [z]: !0,
    [U]: !0
  });
  return jsx("div", {
    role: "img",
    "aria-label": getI18nString("user_onboarding_signals.dynamic_preview.description"),
    className: n()(N),
    ...p,
    ...E,
    children: jsxs("div", {
      className: "whiteboard--whiteboardScaleAnimationContainer--NbHD-",
      children: [jsxs("div", {
        ...stylex.props(en.illustrationContainer, !L && en.illustrationBackground),
        children: [jsx(ea, {
          currentQuestion: l,
          selectedProduct: _,
          isDarkMode: C,
          hasFigJamIntent: e
        }), !L && jsxs(Fragment, {
          children: [jsx(el, {
            isGen1: !!j.data,
            resource: b,
            hasFigJamIntent: !!e,
            isInModal: !!r
          }), jsx("div", {
            className: "whiteboard--animationContainer--21Rop",
            children: jsx(TE, {
              staticBackgroundType: t,
              hasFigjamIntent: e,
              isInModal: r
            })
          }), jsx("div", {
            className: "whiteboard--cursorContainer--jzGh7",
            children: jsx(R, {
              hasStaticBackground: !!t,
              alwaysShowCollaborators: k,
              hasFigJamIntent: e,
              isInModal: r
            })
          })]
        })]
      }), jsx("span", {
        className: "x78zum5 xdt5ytf x3960tq x2b8uid x1quhyk7 x17hqfcz xemv814 x1j61x8r x1ma9mv9 xyny9ap xr8fz4w",
        children: m
      })]
    }, _)
  });
}
export const m = $$ed0;
