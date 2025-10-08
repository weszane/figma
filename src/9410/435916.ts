import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback, useEffect, useState, createElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { SettingsAction, Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import c from "classnames";
import { useSingleEffect } from "../905/791079";
import { isAnyMobile, isIOSUA } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { e as _$$e } from "../905/621515";
import { A as _$$A } from "../905/956262";
import { Fy, g5, NT } from "../figma_app/579169";
import { userFlagExistsAtomFamily, userFlagAtomFamily } from "../figma_app/545877";
import { fullscreenValue } from "../figma_app/455680";
import { EditorPreferencesApi } from "../figma_app/740163";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { N as _$$N } from "../figma_app/268271";
import { U as _$$U } from "../905/455766";
import { isAllowedToSeeNux } from "../905/14910";
import { w as _$$w, tX } from "../figma_app/728657";
import { useIsCanvasEditDisabled } from "../905/595131";
import { selectWithShallowEqual } from "../905/103090";
import { hideDropdownAction, updateDropdownSelectionAction, showDropdownThunk } from "../905/929976";
import { useFullscreenReady } from "../905/924253";
import { useDropdownState } from "../905/848862";
import { TY, pi } from "../figma_app/357047";
import { OnboardingModal } from "../905/425180";
import { ArrowPosition } from "../905/748636";
import { oi } from "../figma_app/598952";
import { FigJamPanZoomOnboardingDLTBannerOverlay } from "../figma_app/6204";
import { p as _$$p } from "../9410/505291";
var u = c;
function M({
  dismissModal: e,
  targetKey: t = oi.ZOOM
}) {
  let i = useDispatch();
  let s = selectWithShallowEqual(({
    mirror: {
      appModel: e
    }
  }) => e.showUi);
  let l = useDropdownState();
  let d = useRef(!1);
  let c = useFullscreenReady();
  let u = useCallback(() => {
    e();
    i(hideDropdownAction());
  }, [e, i]);
  useEffect(() => {
    d.current && !TY(l) && e();
  }, [e, l]);
  useEffect(() => {
    if (c && !d.current) {
      if (TY(l)) i(updateDropdownSelectionAction({
        type: pi,
        data: {
          selectionToUpdate: SettingsAction.PREFERENCES
        }
      }));else {
        let e = s ? 42 : 0;
        i(showDropdownThunk({
          type: pi,
          data: {
            targetRect: {
              top: 0,
              right: e,
              bottom: e,
              left: 0,
              width: e,
              height: e
            },
            togglePreferences: !0
          },
          hasOwnEscKeyHandler: !0
        }));
      }
      d.current = !0;
    }
  }, [i, l, c, s]);
  return jsx(OnboardingModal, {
    isShowing: !0,
    trackingContextName: "new_user_pan_zoom_pref_tooltip",
    onClose: u,
    targetKey: t,
    emphasized: !0,
    title: renderI18nText("mouse_controls_modal.new_user.title"),
    description: renderI18nText("mouse_controls_modal.new_user.description"),
    arrowPosition: ArrowPosition.LEFT_TITLE
  });
}
function B() {
  return jsxs("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.80079 15.0786V10.2857H5.80079V15.0786L6.94724 13.9322L7.65434 14.6393L5.30079 16.9928L2.94724 14.6393L3.65434 13.9322L4.80079 15.0786Z",
      fill: "#8638E5"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.80077 20.2071V25H4.80077V20.2071L3.65433 21.3536L2.94722 20.6464L5.30077 18.2929L7.65433 20.6464L6.94722 21.3536L5.80077 20.2071Z",
      fill: "#8638E5"
    }), jsx("path", {
      d: "M8.22183 11.7644C7.44078 10.9834 7.44078 9.71705 8.22183 8.93601C9.00288 8.15496 10.2692 8.15496 11.0503 8.93601L18.8284 16.7142L16 19.5426L8.22183 11.7644Z",
      fill: "white"
    }), jsx("path", {
      d: "M8.57538 11.4109C7.9896 10.8251 7.9896 9.87535 8.57538 9.28956C9.16117 8.70377 10.1109 8.70377 10.6967 9.28956L18.1213 16.7142L16 18.8355L8.57538 11.4109Z",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("path", {
      d: "M13.171 12.4716C12.39 11.6905 12.39 10.4242 13.171 9.64316C13.9521 8.86211 15.2184 8.86211 15.9995 9.64316L20.9492 14.5929L18.1208 17.4213L13.171 12.4716Z",
      fill: "white"
    }), jsx("path", {
      d: "M13.5246 12.118C12.9388 11.5322 12.9388 10.5825 13.5246 9.99671C14.1104 9.41093 15.0601 9.41093 15.6459 9.99671L20.2421 14.5929L18.1208 16.7142L13.5246 12.118Z",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("path", {
      d: "M15.9992 11.0574C15.2181 10.2764 15.2181 9.01002 15.9992 8.22897C16.7802 7.44793 18.0466 7.44793 18.8276 8.22897L23.0702 12.4716L20.2418 15.3L15.9992 11.0574Z",
      fill: "white"
    }), jsx("path", {
      d: "M16.3527 10.7038C15.7669 10.1181 15.7669 9.16831 16.3527 8.58253C16.9385 7.99674 17.8883 7.99674 18.474 8.58253L22.3631 12.4716L20.2418 14.5929L16.3527 10.7038Z",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("path", {
      d: "M19.5353 10.3502C18.7543 9.5692 18.7543 8.30287 19.5353 7.52182C20.3164 6.74077 21.5827 6.74077 22.3637 7.52182L25.1922 10.3502L22.3637 13.1787L19.5353 10.3502Z",
      fill: "white"
    }), jsx("path", {
      d: "M19.8889 9.9967C19.3031 9.41091 19.3031 8.46116 19.8889 7.87538C20.4746 7.28959 21.4244 7.28959 22.0102 7.87538L24.4851 10.3502L22.3637 12.4716L19.8889 9.9967Z",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.9665 21.544C9.78861 21.9888 10.0272 22.4908 10.4843 22.6337L16.5493 24.5303C19.3396 25.4028 22.3727 25.0002 24.8389 23.43L25.2536 23.0152L25.256 23.0144L25.8992 22.3711C29.0234 19.2469 29.0234 14.1816 25.8992 11.0574L25.1921 10.3502L16 19.5423L16.3172 19.8596C16.4619 20.0043 16.3217 20.2472 16.124 20.1942L13.8709 19.5897C12.2623 19.1581 10.585 19.9977 9.9665 21.544Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.9665 21.544C9.78861 21.9888 10.0272 22.4908 10.4843 22.6337L16.5493 24.5303C19.3396 25.4028 22.3727 25.0002 24.8389 23.43L25.2536 23.0152L25.256 23.0143L28.0205 20.2498C29.9732 18.2972 29.9732 15.1313 28.0205 13.1787L25.1921 10.3502L16 19.5423L16.3172 19.8596C16.4619 20.0043 16.3217 20.2472 16.124 20.1942L13.8709 19.5897C12.2623 19.1581 10.585 19.9977 9.9665 21.544Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.8709 19.5897C12.2623 19.1581 10.585 19.9977 9.9665 21.544C9.78861 21.9888 10.0272 22.4908 10.4843 22.6337L16.5493 24.5303C19.3396 25.4028 22.3727 25.0002 24.8389 23.43L25.2536 23.0152L25.256 23.0143L28.0205 20.2498C29.9732 18.2972 29.9732 15.1313 28.0205 13.1787L25.1921 10.3502L16 19.5423L16.3172 19.8596C16.462 20.0043 16.3217 20.2472 16.124 20.1942L13.8709 19.5897ZM17.3246 19.6318L25.1921 11.7644L27.3134 13.8858C28.8755 15.4479 28.8755 17.9806 27.3134 19.5427L24.7125 22.1436L24.7101 22.1445L24.2113 22.6433C22.0103 24.008 19.3228 24.3498 16.8477 23.5758L10.9742 21.7391C11.4561 20.7767 12.5552 20.2721 13.6117 20.5555L15.8649 21.16C16.8504 21.4244 17.5982 20.4627 17.3246 19.6318Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("rect", {
      x: "15.292",
      y: "17.4214",
      width: "2",
      height: "4",
      transform: "rotate(-45 15.292 17.4214)",
      fill: "white"
    }), jsx("path", {
      d: "M16.2617 18.3853C16.7382 18.8834 17.3334 19.5012 17.3555 19.7388L17.7643 19.562L16.2617 18.3853Z",
      fill: "white"
    }), jsx("rect", {
      x: "17.4141",
      y: "15.3",
      width: "2",
      height: "4",
      transform: "rotate(-45 17.4141 15.3)",
      fill: "white"
    }), jsx("rect", {
      x: "19.5352",
      y: "13.1787",
      width: "2",
      height: "4",
      transform: "rotate(-45 19.5352 13.1787)",
      fill: "white"
    }), jsx("rect", {
      x: "23.0703",
      y: "13.8859",
      width: "2",
      height: "4",
      transform: "rotate(-45 23.0703 13.8859)",
      fill: "white"
    }), jsx("rect", {
      x: "21.6562",
      y: "11.0574",
      width: "2",
      height: "4",
      transform: "rotate(-45 21.6562 11.0574)",
      fill: "white"
    }), jsx("path", {
      d: "M20.9492 20.2498L28.0203 13.1787V13.1787C29.9729 15.1313 29.9729 18.2971 28.0203 20.2498L25 23.27L24.5 23.5L20.9492 20.2498Z",
      fill: "white"
    }), jsx("path", {
      d: "M27.3137 13.8858C27.509 14.0811 27.8256 14.0811 28.0208 13.8858C28.2161 13.6906 28.2161 13.374 28.0208 13.1787L27.3137 13.8858ZM24.4853 11.0574L27.3137 13.8858L28.0208 13.1787L25.1924 10.3503L24.4853 11.0574Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.8514 23.4906L24.0517 23.882L23.6121 22.9839L24.4118 22.5924L24.8514 23.4906Z",
      fill: "white"
    }), jsx("path", {
      d: "M24.8516 23.4907C25.0996 23.3693 25.2022 23.0698 25.0808 22.8218C24.9594 22.5738 24.6599 22.4711 24.4119 22.5926L24.8516 23.4907ZM24.0519 23.8822L24.8516 23.4907L24.4119 22.5926L23.6122 22.984L24.0519 23.8822Z",
      fill: "black",
      fillOpacity: "0.9"
    })]
  });
}
function U() {
  return jsxs("svg", {
    width: "17",
    height: "24",
    viewBox: "0 0 17 24",
    fill: "none",
    children: [jsx("rect", {
      width: "16.8",
      height: "24",
      rx: "8.4",
      fill: "white"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "15.8",
      height: "23",
      rx: "7.9",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("rect", {
      x: "6",
      y: "4.80005",
      width: "4.8",
      height: "8.4",
      rx: "2.4",
      fill: "#9747FF"
    }), jsx("rect", {
      x: "6.5",
      y: "5.30005",
      width: "3.8",
      height: "7.4",
      rx: "1.9",
      stroke: "black",
      strokeOpacity: "0.9"
    })]
  });
}
function G() {
  return jsxs("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    children: [jsx("rect", {
      width: "16.8007",
      height: "24",
      rx: "8.40036",
      transform: "matrix(-0.965926 -0.258819 -0.258795 0.965932 25.2197 6.58252)",
      fill: "white"
    }), jsx("rect", {
      x: "-0.61236",
      y: "0.353557",
      width: "15.8007",
      height: "23",
      rx: "7.90036",
      transform: "matrix(-0.965926 -0.258819 -0.258795 0.965932 24.1074 6.43607)",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("path", {
      d: "M14.0391 15.7617L21.5291 17.7686L23.2014 14.0238L22.377 9.61005L19.7149 6.10149L16.8341 5.32959L14.0391 15.7617Z",
      fill: "#9747FF"
    }), jsx("rect", {
      x: "-0.61236",
      y: "0.353557",
      width: "15.8007",
      height: "23",
      rx: "7.90036",
      transform: "matrix(-0.965926 -0.258819 -0.258795 0.965932 24.1074 6.43607)",
      stroke: "black",
      strokeOpacity: "0.9"
    }), jsx("rect", {
      width: "4.8002",
      height: "8.4",
      rx: "2.4001",
      transform: "matrix(-0.965926 -0.258819 -0.258795 0.965932 18.1826 9.66602)",
      fill: "white"
    }), jsx("rect", {
      x: "-0.61236",
      y: "0.353557",
      width: "3.8002",
      height: "7.4",
      rx: "1.9001",
      transform: "matrix(-0.965926 -0.258819 -0.258795 0.965932 17.0703 9.51957)",
      stroke: "black",
      strokeOpacity: "0.9"
    })]
  });
}
function K() {
  return jsxs("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.3535 6.50001H19V7.50001H21.3535L20.2071 8.64645L20.9142 9.35356L23.2677 7.00001L20.9142 4.64645L20.2071 5.35356L21.3535 6.50001Z",
      fill: "#8638E5"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.64649 6.50001H10V7.50001H7.64649L8.79293 8.64645L8.08583 9.35356L5.73227 7.00001L8.08583 4.64645L8.79293 5.35356L7.64649 6.50001Z",
      fill: "#8638E5"
    }), jsx("path", {
      d: "M11 8C11 6.89543 11.8954 6 13 6V6C14.1046 6 15 6.89543 15 8V19H11V8Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 18V8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8V18H14ZM13 6C11.8954 6 11 6.89543 11 8V19H15V8C15 6.89543 14.1046 6 13 6Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M8 13.8C8 13.3582 8.35817 13 8.8 13C10.5673 13 12 14.4327 12 16.2V27H10L8.71523 23.7881C8.24275 22.6069 8 21.3464 8 20.0742V13.8Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 26V16.2C11 15.0524 10.1213 14.11 9 14.009V20.0742C9 21.2192 9.21848 22.3536 9.64371 23.4167L10.677 26H11ZM10 27L8.71523 23.7881C8.24275 22.6069 8 21.3464 8 20.0742V13.8C8 13.3582 8.35817 13 8.8 13C10.5673 13 12 14.4327 12 16.2V27H10Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M14 6C14 4.89543 14.8954 4 16 4V4C17.1046 4 18 4.89543 18 6V19H14V6Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 18V6C17 5.44772 16.5523 5 16 5C15.4477 5 15 5.44772 15 6V18H17ZM16 4C14.8954 4 14 4.89543 14 6V19H18V6C18 4.89543 17.1046 4 16 4Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M17 13C17 11.8954 17.8954 11 19 11V11C20.1046 11 21 11.8954 21 13V19H17V13Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 18V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V18H20ZM19 11C17.8954 11 17 11.8954 17 13V19H21V13C21 11.8954 20.1046 11 19 11Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M20 15C20 13.8954 20.8954 13 22 13V13C23.1046 13 24 13.8954 24 15V19H20V15Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23 18V15C23 14.4477 22.5523 14 22 14C21.4477 14 21 14.4477 21 15V18H23ZM22 13C20.8954 13 20 13.8954 20 15V19H24V15C24 13.8954 23.1046 13 22 13Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M11 19H24V21.7689C24 22.5866 23.8997 23.4011 23.7014 24.1943L23 27H11V19Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23 20H12V26H22.2192L22.7313 23.9518C22.9098 23.2379 23 22.5048 23 21.7689V20ZM23 27H11V19H24V21.7689C24 22.5866 23.8997 23.4011 23.7014 24.1943L23 27Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M11 19H22V27H11V19Z",
      fill: "white"
    }), jsx("path", {
      d: "M15 17C15 17.2761 14.7761 17.5 14.5 17.5C14.2239 17.5 14 17.2761 14 17C14 16.7239 14.2239 16.5 14.5 16.5C14.7761 16.5 15 16.7239 15 17Z",
      fill: "white"
    }), jsx("path", {
      d: "M12 19C12 19.2761 11.7761 19.5 11.5 19.5C11.2239 19.5 11 19.2761 11 19C11 18.7239 11.2239 18.5 11.5 18.5C11.7761 18.5 12 18.7239 12 19Z",
      fill: "white"
    }), jsx("path", {
      d: "M18 17C18 17.2761 17.7761 17.5 17.5 17.5C17.2239 17.5 17 17.2761 17 17C17 16.7239 17.2239 16.5 17.5 16.5C17.7761 16.5 18 16.7239 18 17Z",
      fill: "white"
    }), jsx("path", {
      d: "M21 18C21 18.2761 20.7761 18.5 20.5 18.5C20.2239 18.5 20 18.2761 20 18C20 17.7239 20.2239 17.5 20.5 17.5C20.7761 17.5 21 17.7239 21 18Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5 17.5C14.7761 17.5 15 17.2761 15 17C15 16.7239 14.7761 16.5 14.5 16.5C14.2239 16.5 14 16.7239 14 17C14 17.2761 14.2239 17.5 14.5 17.5Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.5 19.5C11.7761 19.5 12 19.2761 12 19C12 18.7239 11.7761 18.5 11.5 18.5C11.2239 18.5 11 18.7239 11 19C11 19.2761 11.2239 19.5 11.5 19.5Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.5 17.5C17.7761 17.5 18 17.2761 18 17C18 16.7239 17.7761 16.5 17.5 16.5C17.2239 16.5 17 16.7239 17 17C17 17.2761 17.2239 17.5 17.5 17.5Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.5 18.5C20.7761 18.5 21 18.2761 21 18C21 17.7239 20.7761 17.5 20.5 17.5C20.2239 17.5 20 17.7239 20 18C20 18.2761 20.2239 18.5 20.5 18.5Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M10 26H23V26.6C23 26.8209 22.8209 27 22.6 27H10.4C10.1791 27 10 26.8209 10 26.6V26Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.6941 24.8912C9.95025 24.788 10.2415 24.9121 10.3447 25.1682L10.84 26.3984C10.9431 26.6545 10.8191 26.9458 10.5629 27.049C10.3068 27.1521 10.0155 27.0281 9.91238 26.7719L9.41704 25.5417C9.3139 25.2856 9.43794 24.9943 9.6941 24.8912Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.0231 24.8459C22.7554 24.7781 22.4835 24.9402 22.4157 25.2079L22.0949 26.4752C22.0271 26.7429 22.1892 27.0148 22.4569 27.0826C22.7246 27.1503 22.9965 26.9883 23.0643 26.7206L23.3851 25.4533C23.4529 25.1856 23.2908 24.9136 23.0231 24.8459Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.6941 24.8912C9.95025 24.788 10.2415 24.9121 10.3447 25.1682L10.84 26.3984C10.9431 26.6545 10.8191 26.9458 10.5629 27.049C10.3068 27.1521 10.0155 27.0281 9.91238 26.7719L9.41704 25.5417C9.3139 25.2856 9.43794 24.9943 9.6941 24.8912Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.0231 24.8459C22.7554 24.7781 22.4835 24.9402 22.4157 25.2079L22.0949 26.4752C22.0271 26.7429 22.1892 27.0148 22.4569 27.0826C22.7246 27.1503 22.9965 26.9883 23.0643 26.7206L23.3851 25.4533C23.4529 25.1856 23.2908 24.9136 23.0231 24.8459Z",
      fill: "black",
      fillOpacity: "0.9"
    }), jsx("path", {
      d: "M20 18H23V21H20V18Z",
      fill: "white"
    }), jsx("path", {
      d: "M12 17H15V21H12V17Z",
      fill: "white"
    }), jsx("path", {
      d: "M16 17H19V21H16V17Z",
      fill: "white"
    }), jsx("path", {
      d: "M21 16H23V21H21V16Z",
      fill: "white"
    }), jsx("path", {
      d: "M18 16H20V26H18V16Z",
      fill: "white"
    }), jsx("path", {
      d: "M15 16H17V26H15V16Z",
      fill: "white"
    }), jsx("path", {
      d: "M12 16H14V26H12V16Z",
      fill: "white"
    })]
  });
}
let H = "figjam_pan_zoom_onboarding--icon--TaGJG";
let z = "figjam_pan_zoom_onboarding--bannerContainer--CsV0q";
let V = {
  NEW_USER_PAN: "figjam_seen_new_user_dlt_pan",
  NEW_USER_ZOOM: "figjam_seen_new_user_dlt_zoom"
};
function W({
  children: e
}) {
  return jsx("span", {
    className: "figjam_pan_zoom_onboarding--boldedBannerText--Zx-EN",
    children: e
  });
}
function Y(e) {
  let {
    onNext,
    onManualDismiss
  } = e;
  let s = useDispatch();
  let l = useCallback(() => {
    s(postUserFlag({
      [V.NEW_USER_ZOOM]: !0
    }));
  }, [s]);
  let d = useCallback(() => {
    l();
    onManualDismiss();
  }, [l, onManualDismiss]);
  let c = useCallback(() => {
    l();
    onNext();
  }, [l, onNext]);
  useEffect(() => (Fullscreen?.setUsedZoomAction(!1), fullscreenValue.fromFullscreen.on("zoomActionMessageForOnboarding", c), () => {
    fullscreenValue.fromFullscreen.removeListener("zoomActionMessageForOnboarding", c);
  }), [s, c]);
  return jsx(_$$p, {
    trackingContext: "FigJam New User Zoom Banner",
    content: jsx("div", {
      className: z,
      children: renderI18nText("rcs.figjam_zoom.to_zoom_pinch_your_trackpad_or_hold_and_scroll", {
        boldTextPinch: jsxs(Fragment, {
          children: [jsx("span", {
            className: u()("figjam_pan_zoom_onboarding--zoomIcon--efDh8", H),
            children: jsx(B, {})
          }), jsx(W, {
            children: renderI18nText("rcs.figjam_zoom.to_zoom_pinch_your_trackpad_or_hold_and_scroll_bold_text_pinch")
          })]
        }),
        boldTextScroll: jsxs(Fragment, {
          children: [jsx("span", {
            className: H,
            children: jsx(U, {})
          }), jsx(W, {
            children: renderI18nText("rcs.figjam_zoom.to_zoom_pinch_your_trackpad_or_hold_and_scroll_bold_text_scroll")
          })]
        })
      })
    }),
    rightContent: jsx(q, {
      onChangePreferences: e.onChangePreferences
    }),
    onClose: d
  });
}
function J(e) {
  let {
    onManualDismiss
  } = e;
  let [i, s] = useState(!1);
  let l = useDispatch();
  useSingleEffect(() => {
    setTimeout(() => {
      s(!0);
    }, 1e3);
  });
  let d = useCallback(() => {
    l(postUserFlag({
      [V.NEW_USER_PAN]: !0
    }));
  }, [l]);
  let c = useCallback(() => {
    d();
    onManualDismiss();
  }, [d, onManualDismiss]);
  return (useEffect(() => {
    if (i) {
      Fullscreen?.setUsedPanAction(!1);
      fullscreenValue.fromFullscreen.on("panActionMessageForOnboarding", c);
      return () => {
        fullscreenValue.fromFullscreen.removeListener("panActionMessageForOnboarding", c);
      };
    }
  }, [l, i, c]), i) ? jsx(_$$p, {
    trackingContext: "FigJam New User Pan Banner",
    content: jsx("div", {
      className: z,
      children: renderI18nText("rcs.figjam_pan.move_instructions", {
        boldTextSwipe: jsxs(Fragment, {
          children: [jsx("span", {
            className: H,
            children: jsx(K, {})
          }), jsx(W, {
            children: renderI18nText("rcs.figjam_pan.move_instructions_bold_text_swipe")
          })]
        }),
        boldTextRightClick: jsxs(Fragment, {
          children: [jsx("span", {
            className: H,
            children: jsx(G, {})
          }), jsx(W, {
            children: renderI18nText("rcs.figjam_pan.hold_right_click")
          })]
        })
      })
    }),
    rightContent: jsx(q, {
      onChangePreferences: e.onChangePreferences
    }),
    onClose: c
  }) : null;
}
function q({
  onChangePreferences: e
}) {
  return jsx("button", {
    onClick: e,
    className: "figjam_pan_zoom_onboarding--changePreferencesButton--0z5Xs text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: renderI18nText("rcs.figjam_pan_zoom_change_prefs")
  });
}
export function $$$$X0() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = useIsCanvasEditDisabled();
  let i = useSelector(e => e.isMakeSomethingV2Active);
  return t || e || i ? null : jsx(et, {});
}
let Z = userFlagExistsAtomFamily(V.NEW_USER_PAN);
let Q = userFlagExistsAtomFamily(V.NEW_USER_ZOOM);
let $ = userFlagAtomFamily("figjam_editor_onboarded");
let ee = [function (e) {
  let {
    isOverlayShowing,
    next,
    complete,
    onChangePreferences
  } = e;
  return isOverlayShowing ? jsx(Y, {
    onNext: next,
    onManualDismiss: complete,
    onChangePreferences
  }) : null;
}, function (e) {
  let {
    isOverlayShowing,
    complete,
    onChangePreferences
  } = e;
  return isOverlayShowing ? jsx(J, {
    onNext: complete,
    onManualDismiss: complete,
    onChangePreferences
  }) : null;
}];
function et() {
  let e = useAtomWithSubscription(Z);
  let t = useAtomWithSubscription(Q);
  let i = useAtomWithSubscription($);
  let a = useAtomWithSubscription(Fy);
  let o = useAtomWithSubscription(g5);
  let l = useAtomWithSubscription(NT);
  let c = useAtomWithSubscription(_$$w);
  let [u, p] = useState(!1);
  let m = _$$A({
    numSteps: ee.length,
    onComplete: noop
  });
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: FigJamPanZoomOnboardingDLTBannerOverlay,
    priority: _$$N.DEFAULT_MODAL
  }, [e, t, i, a, o, l]);
  useEffect(() => {
    let e = [tX.NOT_STARTED, tX.COMPLETED].includes(c);
    let t = m.currentStep === ee.length - 1;
    isShowing || !e || t || show({
      canShow: (e, t, i, r, n, a) => {
        let s = !isAnyMobile && !isIOSUA;
        let o = isAllowedToSeeNux({
          emailValidatedAt: n,
          jobTitle: a
        });
        return ![tX.USE_CASE_STEPS, tX.MODAL_SHOWING].includes(c) && (!!i || o) && !r && !e && !t && s;
      }
    });
  }, [isShowing, c, show, m.currentStep]);
  let C = useCallback(() => {
    p(!0);
  }, [p]);
  let v = useCallback(() => {
    p(!1);
  }, [p]);
  return isShowing ? jsxs(Fragment, {
    children: [jsx(_$$U, {
      currentStep: m.currentStep,
      children: ee.map((e, t) => createElement(e, {
        isOverlayShowing: m.currentStep === t,
        next: m.next,
        complete,
        onChangePreferences: C
      })),
      isShowing: !0
    }), u ? jsx(M, {
      dismissModal: v,
      targetKey: 1 === m.currentStep ? oi.PAN : oi.ZOOM
    }) : null]
  }) : null;
}
export function $$ei1() {
  return getFeatureFlags().figjam_nav_new_user_onboarding && EditorPreferencesApi().scrollWheelZoom.getCopy() && EditorPreferencesApi().rightClickPan.getCopy();
}
export const X = $$$$X0;
export const O = $$ei1;