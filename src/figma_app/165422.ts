import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector } from "react-redux";
import { J } from "../905/614223";
import { UIVisibilitySetting } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { desktopAPIInstance } from "../figma_app/876459";
import { getInitialOptions } from "../figma_app/169182";
import { isMobileUA, BrowserInfo, isFigmaMobileApp } from "../figma_app/778880";
import { LargeLoadingSpinner } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { z4 } from "../905/37051";
import { _6 } from "../figma_app/386952";
import { aq } from "../figma_app/412189";
import { FFileType } from "../figma_app/191312";
import { ju } from "../905/187165";
import { mapEditorTypeToFileType } from "../figma_app/53721";
import { lF } from "../figma_app/915202";
import { $A } from "../905/782918";
import { uj0 } from "../figma_app/27776";
import { DT, A7, BT, cE, AV, Wn, ZT, dV, Dn, k1, Mf, mb, Dg, cu, oQ, pm, BL, pn, Ts, n1, xo, Ag, iI, OU, Uo, v0, uq, wn, hj, nR, Rp, CU, U0, A6, QT, WH, y6, Pd, fb, $8, Zu, _M, BM, On, pT } from "../905/32836";
import { A as _$$A } from "../1617/426430";
var c = d;
let C = !1;
let w = () => {
  if (C) return;
  C = !0;
  let e = "";
  let t = e => Math.atan(e);
  for (let r = 0; r < 200; r++) {
    let n = r / 200;
    let i = t(50 * n) / t(50);
    e += (100 * n).toFixed(3) + "%{transform:scaleX(" + i.toFixed(3) + ");}";
  }
  let r = "@-moz-keyframes progress-bar-animation {" + e + "}@-webkit-keyframes progress-bar-animation {" + e + "}";
  let n = document.createElement("style");
  n.nonce = getInitialOptions().csp_nonce;
  n.textContent = r;
  document.head.appendChild(n);
};
function O() {
  return getFeatureFlags().pride_inclusive_loading_bar ? DT : "";
}
export function $$R1() {
  let e = _6();
  if ("fullscreen" !== e.view) return null;
  let t = ju(e);
  return jsx(k, {
    editorType: mapEditorTypeToFileType(e.editorType),
    progressPaused: !0,
    editorTheme: t
  });
}
export function $$L2(e) {
  switch (e.progressBarMode) {
    case UIVisibilitySetting.KEEP_UI:
      return jsx(P, {
        progressBarType: e.progressBarType,
        left: e.left
      });
    case UIVisibilitySetting.HIDE_UI:
    case UIVisibilitySetting.ON_AND_LOCKED:
      return jsx(k, {
        editorType: e.editorType,
        isViewer: e.isViewer,
        shouldNotOverflow: e.shouldNotOverflow
      });
    case UIVisibilitySetting.OFF:
      return jsx(Fragment, {});
  }
}
function P(e) {
  let t = useSelector(e => $A(e.selectedView) ? 0 : parsePxNumber(uj0));
  return jsxs("div", {
    className: A7,
    children: [jsx("div", {
      className: BT
    }), jsx("div", {
      className: cE,
      style: {
        right: t
      }
    }), jsx(D, {
      progressBarType: e.progressBarType,
      left: e.left
    })]
  });
}
function D(e) {
  switch (e.progressBarType) {
    case lF.SPINNER:
      return jsx("div", {
        className: AV,
        children: jsx(LargeLoadingSpinner, {})
      });
    case lF.BAR:
    default:
      return jsx($$G0, {
        className: Wn,
        style: {
          left: `${e.left || 0}`
        }
      });
  }
}
function k(e) {
  let t = "whiteboard" === e.editorType ? FFileType.WHITEBOARD : e.isViewer ? "viewer" : FFileType.DESIGN;
  return jsx(J, {
    brand: e.editorTheme,
    children: jsxs("div", {
      className: c()(A7, e.shouldNotOverflow ? ZT : null),
      children: [jsx("div", {
        className: c()({
          [dV]: "whiteboard" === t,
          [Dn]: "design" === t && !isMobileUA,
          [k1]: "design" === t && isMobileUA,
          [Mf]: "viewer" === t && !isMobileUA,
          [mb]: "viewer" === t && isMobileUA
        })
      }), "whiteboard" !== t && jsx(F, {
        type: t,
        progressPaused: e.progressPaused
      }), "whiteboard" === t && jsx(M, {
        progressPaused: e.progressPaused
      })]
    })
  });
}
function M(e) {
  return jsxs("div", {
    className: c()(Dg, {
      [cu]: e.progressPaused
    }),
    children: [jsxs("div", {
      className: oQ,
      children: [jsx("div", {
        className: pm,
        children: jsx("div", {
          className: BL
        })
      }), jsxs("div", {
        className: pn,
        children: [jsx("div", {
          className: Ts
        }), jsx("div", {
          className: n1
        })]
      }), jsxs("div", {
        className: xo,
        children: [jsx("div", {
          className: Ag
        }), jsx("div", {})]
      })]
    }), jsx(B, {
      type: "whiteboard",
      progressPaused: e.progressPaused
    })]
  });
}
function F(e) {
  let [t, r] = useState(!1);
  let a = aq();
  return ((desktopAPIInstance ? desktopAPIInstance.getZoomFactor() : BrowserInfo.chrome || BrowserInfo.safari ? Promise.resolve(window.outerWidth / window.innerWidth) : Promise.resolve(void 0)).then(e => {
    e && (e < .95 || e > 1.05) && a() && !t && r(!0);
  }), t || isFigmaMobileApp() || z4.getIsExtension()) ? jsx(j, {
    type: e.type,
    progressPaused: e.progressPaused
  }) : jsx(U, {
    type: e.type,
    progressPaused: e.progressPaused
  });
}
function j(e) {
  let t = "design" === e.type;
  let r = "viewer" === e.type && isMobileUA;
  let i = "viewer" === e.type && !isMobileUA;
  return jsxs("div", {
    className: c()(Dg, {
      [iI]: e.progressPaused
    }),
    children: [jsx("div", {
      className: c()({
        [OU]: !0,
        [Uo]: r,
        [v0]: i,
        [uq]: t
      }),
      children: jsx(SvgComponent, {
        className: wn,
        svg: _$$A
      })
    }), jsx(B, {
      type: t ? "design" : r ? "mobile_viewer" : "desktop_viewer",
      progressPaused: e.progressPaused
    })]
  });
}
function U(e) {
  let t = "design" === e.type;
  let r = "viewer" === e.type && isMobileUA;
  let i = "viewer" === e.type && !isMobileUA;
  return jsxs("div", {
    className: c()(Dg, {
      [cu]: e.progressPaused
    }),
    children: [jsxs("div", {
      className: c()({
        [OU]: !0,
        [Uo]: r,
        [v0]: i
      }),
      children: [jsxs("div", {
        className: pm,
        children: [jsx("div", {
          className: `${hj} ${nR}`
        }), jsx("div", {
          className: `${Rp} ${nR}`
        }), jsx("div", {
          className: `${CU} ${nR}`
        }), jsx("div", {
          className: U0,
          children: jsx("div", {
            className: `${A6} ${nR}`
          })
        })]
      }), jsxs("div", {
        className: pn,
        children: [jsx("div", {
          className: `${Ts} ${nR}`
        }), jsx("div", {
          className: `${n1} ${nR}`
        })]
      }), jsxs("div", {
        className: xo,
        children: [jsx("div", {
          className: `${Ag} ${nR}`
        }), jsx("div", {})]
      })]
    }), jsx(B, {
      type: t ? "design" : r ? "mobile_viewer" : "desktop_viewer",
      progressPaused: e.progressPaused
    })]
  });
}
function B(e) {
  let {
    type,
    progressPaused
  } = e;
  let i = O();
  return jsx("div", {
    className: c()({
      [QT]: "design" === type,
      [WH]: "mobile_viewer" === type,
      [y6]: "desktop_viewer" === type,
      [Pd]: "whiteboard" === type
    }),
    children: jsx("div", {
      className: c()({
        [fb]: "design" === type,
        [$8]: "mobile_viewer" === type,
        [Zu]: "desktop_viewer" === type,
        [_M]: "whiteboard" === type,
        [BM]: !0 !== progressPaused,
        [i]: !0
      }),
      children: jsx("div", {
        className: On
      })
    })
  });
}
export function $$G0({
  className: e,
  style: t,
  seconds: r = 120
}) {
  let i = O();
  w();
  return jsx("div", {
    className: `${pT} ${e || ""} ${i}`,
    style: {
      MozAnimation: `progress-bar-animation ${r}s linear`,
      WebkitAnimation: `progress-bar-animation ${r}s linear`,
      ...t
    }
  });
}
$$G0.displayName = "ProgressBarRelative";
export const Dy = $$G0;
export const xZ = $$R1;
export const z2 = $$L2;