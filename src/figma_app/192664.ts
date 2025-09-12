import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { Label } from "../905/270045";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { s as _$$s2 } from "../cssbuilder/589278";
import { handleAtomEvent } from "../905/502364";
import { Ph } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { In } from "../905/672640";
import { E as _$$E } from "../905/984674";
import { showModalHandler } from "../905/156213";
import { fu } from "../figma_app/831799";
import { Av } from "../figma_app/622881";
import { jK, it } from "../figma_app/829197";
import { M } from "../905/366117";
import { registerModal } from "../905/102752";
import { s as _$$s3 } from "../905/445054";
import { jH, yF, cd } from "../905/187370";
let x = (e, t) => {
  switch (e) {
    case M.SRGB:
      return {
        text: getI18nString("fullscreen.color_management.user_color_profile_modal.info.srgb_supported"),
        type: "info"
      };
    case M.DISPLAY_P3:
      switch (t.status) {
        case "SupportedNatively":
        case "SupportedWithPolyfill":
          return {
            text: getI18nString("fullscreen.color_management.user_color_profile_modal.info.display_p3_supported"),
            type: "info"
          };
        case "ClientNotSupported":
          let r = t.diagnostics && "client" in t.diagnostics && "desktop-app" === t.diagnostics.client ? getI18nString("fullscreen.color_management.user_color_profile_modal.client_type.desktop_app") : getI18nString("fullscreen.color_management.user_color_profile_modal.client_type.browser");
          if (t.diagnostics && "shouldRestartDesktopAppInManagedColorSpace" in t.diagnostics && t.diagnostics.shouldRestartDesktopAppInManagedColorSpace) return {
            text: getI18nString("fullscreen.color_management.beta.warning.desktop_unmanaged"),
            type: "warning"
          };
          return {
            text: getI18nString("fullscreen.color_management.user_color_profile_modal.warning.display_p3_not_supported.client", {
              client: r
            }),
            type: "warning"
          };
        case "MonitorNotSupported":
          if (t.diagnostics && "alternativeMonitorName" in t.diagnostics && t.diagnostics.alternativeMonitorName) return {
            text: getI18nString("fullscreen.color_management.user_color_profile_modal.warning.display_p3_not_supported.alternative_display", {
              displayName: t.diagnostics.alternativeMonitorName
            }),
            type: "warning"
          };
          return {
            text: getI18nString("fullscreen.color_management.user_color_profile_modal.warning.display_p3_not_supported.display"),
            type: "warning"
          };
      }
  }
};
let N = "user-color-profile";
let C = {
  srgbOption: `${N}-srgb-option`,
  p3Option: `${N}-p3-option`,
  supportDetailsWarningIcon: `${N}-warning-icon`,
  supportDetailsInfoIcon: `${N}-info-icon`
};
let $$w2 = atom(!1);
let $$O0 = "user_color_profile_modal_closed";
let R = registerModal(function (e) {
  let t = jK();
  let r = function (e) {
    switch (e) {
      case M.DEFAULT:
      case M.SRGB:
        return M.SRGB;
      case M.DISPLAY_P3:
        return M.DISPLAY_P3;
    }
  }(t.colorProfilePreference);
  let E = x(r, Av());
  let S = function (e) {
    switch (e) {
      case M.SRGB:
        return getI18nString("fullscreen.color_management.user_color_profile_modal.options.srgb.description");
      case M.DISPLAY_P3:
        return getI18nString("fullscreen.color_management.user_color_profile_modal.options.display_p3.description");
    }
  }(r);
  let [N, R] = useAtomValueAndSetter($$w2);
  useEffect(() => (N || R(!0), () => {
    N && (handleAtomEvent({
      id: $$O0
    }), R(!1));
  }), [R, N]);
  let L = useModalManager(e);
  return jsx(fu, {
    name: "color_management_user_color_profile_modal",
    children: jsx(bL, {
      manager: L,
      width: "md",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("fullscreen.color_management.user_color_profile_modal.title")
          })
        }), jsxs(nB, {
          children: [jsx("form", {
            children: jsx(_$$b, {
              legend: jsx(_$$s, {
                children: renderI18nText("fullscreen.color_management.user_color_profile_modal.options.label")
              }),
              value: r,
              onChange: e => {
                it({
                  colorProfilePreference: e,
                  id: t.id
                });
              },
              children: jsxs("div", {
                className: _$$s2.flex.flexRow.gap20.mb12.$,
                children: [jsx(_$$c, {
                  value: M.SRGB,
                  label: jsx(Label, {
                    children: getI18nString("fullscreen.color_management.user_color_profile_modal.options.srgb.value")
                  }),
                  htmlAttributes: {
                    "data-testid": C.srgbOption
                  }
                }), jsx(_$$c, {
                  value: M.DISPLAY_P3,
                  label: jsx(Label, {
                    children: getI18nString("fullscreen.color_management.user_color_profile_modal.options.display_p3.value")
                  }),
                  htmlAttributes: {
                    "data-testid": C.p3Option
                  }
                })]
              })
            })
          }), jsx(_$$E, {
            color: "secondary",
            children: S
          }), jsx("div", {
            className: jH
          }), jsx(_$$E, {
            color: "secondary",
            children: renderI18nText("fullscreen.color_management.user_color_profile_modal.descriptions.affected_files")
          }), jsx("span", {
            style: {
              whiteSpace: "pre"
            },
            children: " "
          }), jsx(Ph, {
            newTab: !0,
            trusted: !0,
            href: _$$s3,
            children: renderI18nText("rcs.rcs_shared.learn_more")
          }), jsx("div", {
            className: jH
          }), jsx("div", {
            className: yF
          }), jsxs("div", {
            className: cd,
            children: [jsx(In, {
              icon: "warning" === E.type ? "warning-32" : "info-32",
              dataTestId: "warning" === E.type ? C.supportDetailsWarningIcon : C.supportDetailsInfoIcon
            }), jsxs("span", {
              children: [E.text, "warning" === E.type && jsxs(Fragment, {
                children: [jsx("span", {
                  style: {
                    whiteSpace: "pre"
                  },
                  children: " "
                }), jsx(Ph, {
                  newTab: !0,
                  trusted: !0,
                  href: _$$s3,
                  children: renderI18nText("rcs.rcs_shared.learn_more")
                })]
              })]
            })]
          })]
        })]
      })
    })
  });
}, "user_color_profile_modal");
export function $$L1() {
  return {
    name: "user-color-profile-menu-option",
    displayForQuickCommand: "user-color-profile-quick-action",
    callback: (e, t, r) => {
      r(showModalHandler({
        type: R
      }));
    }
  };
}
export const E1 = $$O0;
export const WB = $$L1;
export const n$ = $$w2;