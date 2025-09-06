import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useRef, useState, useCallback, useEffect, useLayoutEffect, forwardRef } from "react";
import { useSelector } from "../vendor/514228";
import { K as _$$K } from "../905/443068";
import { wY } from "../figma_app/708845";
import { Pt } from "../figma_app/806412";
import { E as _$$E } from "../905/277716";
import { k as _$$k } from "../905/582200";
import { getI18nString } from "../905/303541";
import { A as _$$A } from "../905/482208";
import { Y5 } from "../figma_app/455680";
import { _W } from "../905/216495";
import { vm, yU, Zr } from "../figma_app/678782";
import { kl } from "../905/275640";
import { BK } from "../905/848862";
import { Xo } from "../figma_app/482495";
import { Ib } from "../905/129884";
import { c1 } from "../figma_app/357047";
import { a1 } from "../figma_app/23780";
import { Cf } from "../905/504727";
import { zi } from "../figma_app/626177";
import { Q } from "../905/384324";
import { O as _$$O } from "../905/410575";
import { u as _$$u } from "../905/486140";
import { K as _$$K2 } from "../905/107582";
import { E as _$$E2 } from "../905/737393";
import { F as _$$F } from "../905/544329";
import { A as _$$A2 } from "../905/295481";
import { e } from "../905/318479";
import { H as _$$H } from "../905/222445";
import { j as _$$j } from "../figma_app/63338";
import { V as _$$V } from "../figma_app/525321";
import { H as _$$H2 } from "../figma_app/580834";
import { X as _$$X } from "../figma_app/668792";
import { d as _$$d } from "../figma_app/577559";
import { s as _$$s } from "../figma_app/481199";
let P = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M8.75 16a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 8.75 8h.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75zm3 0a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75zm2.25-.75c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M6.5 6h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5z",
      clipRule: "evenodd"
    })]
  });
});
let D = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M7.103 15.005A1 1 0 0 1 8 16v1l-.005.102a1 1 0 0 1-.892.893L7 18H6l-.103-.005a1 1 0 0 1-.892-.893L5 17v-1a1 1 0 0 1 .897-.995L6 15h1zm5 0A1 1 0 0 1 13 16v1l-.005.102a1 1 0 0 1-.893.893L12 18h-1l-.102-.005a1 1 0 0 1-.893-.893L10 17v-1a1 1 0 0 1 .898-.995L11 15h1zm5 0A1 1 0 0 1 18 16v1l-.005.102a1 1 0 0 1-.893.893L17 18h-1l-.102-.005a1 1 0 0 1-.893-.893L15 17v-1a1 1 0 0 1 .898-.995L16 15h1zM11 17h1v-1h-1zm-5 0h1v-1H6zm10 0h1v-1h-1zm-8.897-6.995A1 1 0 0 1 8 11v1l-.005.102a1 1 0 0 1-.892.893L7 13H6l-.103-.005a1 1 0 0 1-.892-.893L5 12v-1a1 1 0 0 1 .897-.995L6 10h1zm5 0A1 1 0 0 1 13 11v1l-.005.102a1 1 0 0 1-.893.893L12 13h-1l-.102-.005a1 1 0 0 1-.893-.893L10 12v-1a1 1 0 0 1 .898-.995L11 10h1zm5 0A1 1 0 0 1 18 11v1l-.005.102a1 1 0 0 1-.893.893L17 13h-1l-.102-.005a1 1 0 0 1-.893-.893L15 12v-1a1 1 0 0 1 .898-.995L16 10h1zM6 12h1v-1H6zm5 0h1v-1h-1zm5 0h1v-1h-1zM7.103 5.005A1 1 0 0 1 8 6v1l-.005.103a1 1 0 0 1-.892.892L7 8H6l-.103-.005a1 1 0 0 1-.892-.892L5 7V6a1 1 0 0 1 .897-.995L6 5h1zm5 0A1 1 0 0 1 13 6v1l-.005.103a1 1 0 0 1-.893.892L12 8h-1l-.102-.005a1 1 0 0 1-.893-.892L10 7V6a1 1 0 0 1 .898-.995L11 5h1zm5 0A1 1 0 0 1 18 6v1l-.005.103a1 1 0 0 1-.893.892L17 8h-1l-.102-.005a1 1 0 0 1-.893-.892L15 7V6a1 1 0 0 1 .898-.995L16 5h1zM6 7h1V6H6zm5 0h1V6h-1zm5 0h1V6h-1z"
    })
  });
});
let G = {
  "align-top": Q,
  "align-vertical-center": _$$O,
  "align-bottom": _$$u,
  "align-left": _$$K2,
  "align-horizontal-center": _$$E2,
  "align-right": _$$F,
  "distribute-horizontal-spacing": _$$A2,
  "distribute-vertical-spacing": e,
  "arrange-as-list-Y": _$$H,
  "arrange-as-list-X": P,
  "arrange-as-grid": D,
  "align-top-as-group": _$$j,
  "align-vertical-center-as-group": _$$V,
  "align-bottom-as-group": _$$H2,
  "align-left-as-group": _$$X,
  "align-horizontal-center-as-group": _$$d,
  "align-right-as-group": _$$s
};
let V = parseInt("6px");
let H = ["align-left", "align-horizontal-center", "align-right", "align-top", "align-vertical-center", "align-bottom"];
let $$z1 = ["align-left-as-group", "align-horizontal-center-as-group", "align-right-as-group", "align-top-as-group", "align-vertical-center-as-group", "align-bottom-as-group"];
let $$W2 = ["tidy-up", "distribute-vertical-spacing", "distribute-horizontal-spacing"];
memo(function (e) {
  let t = useRef(null);
  let [r, a] = useState(!1);
  let [s, l] = $$Q3();
  let d = useCallback(e => {
    a(e.altKey || e.shiftKey);
  }, []);
  useEffect(() => {
    function e() {
      a(!1);
    }
    document.addEventListener("keydown", d);
    document.addEventListener("keyup", d);
    window.addEventListener("blur", e);
    return () => {
      document.removeEventListener("keydown", d);
      document.removeEventListener("keyup", d);
      window.removeEventListener("blur", e);
    };
  }, [d]);
  let u = vm($$z1);
  let p = function (e) {
    let [t, r] = useState(0);
    useLayoutEffect(() => {
      r(ee(e.current));
    }, [e]);
    wY(e, useCallback(() => {
      r(ee(e.current));
    }, [e]));
    return t;
  }(t);
  let _ = Math.floor(p / (24 + V));
  _ * (24 + V) + 24 <= p && ++_;
  let [h, g] = function ({
    visibleActionCount: e,
    renderGroupAlignButtons: t
  }) {
    let r = [];
    let n = [];
    let i = [...(t ? $$z1 : H), ...$$W2];
    i.length > e ? (r = i.slice(0, e - 1), n = i.slice(e - 1)) : r = i;
    return [r, n];
  }({
    visibleActionCount: _,
    renderGroupAlignButtons: r && s && u
  });
  return jsx(_$$k, {
    name: "align_panel",
    children: jsx(zi, {
      className: "align_panel--panel--hOaKr",
      onMouseMove: e => d(e.nativeEvent),
      "data-test-id": "alignPanel",
      ...l,
      children: jsxs(K, {
        ref: t,
        children: [h.map(t => jsx(J, {
          action: t,
          recordingKey: e.recordingKey
        }, t)), g.length > 0 && jsx($$Y0, {
          actions: g,
          recordingKey: e.recordingKey
        })]
      })
    })
  });
});
let K = forwardRef(function (e, t) {
  return jsx("div", {
    ref: t,
    className: "align_panel--flexibleRow--5gjUF",
    children: e.children
  });
});
export function $$Y0(e) {
  let t = BK("FULLSCREEN_DISTRIBUTE_DROPDOWN");
  let r = useRef(null);
  yU(e.actions);
  let a = getI18nString("fullscreen.properties_panel.tooltip_moreActions");
  return jsxs(Fragment, {
    children: [jsx(_$$E, {
      name: "toggle_align_options_button",
      children: jsx(_$$K, {
        ref: r,
        actionOnPointerDown: t.showing,
        "aria-label": a,
        onClick: () => {
          t.toggle({
            data: {
              targetRect: r.current.getBoundingClientRect()
            }
          });
        },
        disabled: e.disabled || !1,
        recordingKey: Pt(e, "distributeDropdown"),
        htmlAttributes: {
          "data-tooltip": a,
          "data-tooltip-type": Ib.TEXT
        },
        children: jsx(Z, {})
      })
    }), t.showing && jsx(_$$E, {
      name: "dropdown",
      children: jsx(Cf, {
        targetRect: t.data.targetRect,
        propagateCloseClick: !0,
        children: e.actions.map(t => jsx($, {
          action: t,
          recordingKey: e.recordingKey
        }, t))
      })
    })]
  });
}
function $(e) {
  let {
    action
  } = e;
  let r = Zr(action);
  let i = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  return jsx(a1, {
    text: _$$A(action),
    isEnabled: r,
    hideCheck: !0,
    isChecked: !1,
    onClick: () => {
      Y5.triggerActionInUserEditScope(action, "tidy-up" === action ? {
        source: "panel"
      } : null);
    },
    shortcut: c1(i, action),
    recordingKey: Pt(e, "distributeDropdown", action),
    children: jsx(X, {
      action
    })
  }, action);
}
function X({
  action: e
}) {
  if ("tidy-up" === e) return jsx(q, {});
  let t = G[e];
  return t && jsx(t, {});
}
function q() {
  let e = kl("detectableListAxis");
  let t = G[Zr("arrange-as-grid") ? "arrange-as-grid" : `arrange-as-list-${_W(e, "Y")}`];
  return t && jsx(t, {});
}
function J(e) {
  let t = Zr(e.action);
  let r = Xo();
  return jsx(_$$E, {
    name: "align_button",
    alsoTrack: () => ({
      alignButtonAction: e.action
    }),
    children: jsx(_$$K, {
      disabled: !t,
      onClick: () => {
        Y5.triggerActionInUserEditScope(e.action);
      },
      recordingKey: Pt(e, "alignButton", e.action),
      "aria-label": e.action,
      htmlAttributes: {
        onMouseDown: e => {
          r?.id.startsWith("paint") && e.stopPropagation();
        },
        "data-tooltip": e.action,
        "data-tooltip-type": Ib.LOOKUP,
        "data-tooltip-max-width": 200
      },
      children: jsx(X, {
        action: e.action
      })
    }, e.action)
  });
}
function Z() {
  let e = Zr("tidy-up");
  return jsx(X, {
    action: e ? "tidy-up" : "distribute-vertical-spacing"
  });
}
export function $$Q3() {
  let [e, t] = useState(!1);
  return [e, {
    onMouseEnter: () => t(!0),
    onMouseLeave: () => t(!1)
  }];
}
function ee(e) {
  let t = getComputedStyle(e);
  return parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight);
}
export const gf = $$Y0;
export const oW = $$z1;
export const Rg = $$W2;
export const Xw = $$Q3;