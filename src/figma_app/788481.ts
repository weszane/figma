import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { QB, y_, bL, Rz, rA, y$, ke } from "../905/174266";
import { E as _$$E } from "../905/172252";
import { g as _$$g } from "../905/125190";
import { g as _$$g2 } from "../905/757007";
import { W } from "../905/569454";
import { r } from "../905/571838";
import { E as _$$E2 } from "../905/730894";
import { w as _$$w } from "../905/433065";
import { w as _$$w2 } from "../905/763623";
import { v as _$$v } from "../905/343590";
import { C as _$$C } from "../905/504203";
import { G as _$$G } from "../905/117393";
import { g as _$$g3 } from "../905/687226";
import { V as _$$V } from "../905/900932";
import { o as _$$o } from "../905/298519";
import { e as _$$e } from "../905/483726";
import { V as _$$V2 } from "../905/751103";
import { P as _$$P } from "../905/175083";
import { J } from "../905/614223";
import { nc } from "../905/189185";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { az } from "../905/449184";
import { R as _$$R } from "../905/103090";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { F as _$$F } from "../905/302958";
import { zC, hB, OT } from "../905/70369";
import { WX, zX } from "../905/576487";
import { L as _$$L } from "../905/22352";
import { H as _$$H } from "../905/861007";
let M = {
  offscreen: {
    position: "x10l6tqk",
    clipPath: "x1nj6f5o",
    $$css: !0
  },
  displayContents: {
    display: "xjp7ctv",
    $$css: !0
  }
};
let F = {
  root: "visual-bell-root",
  button: "visual-bell-button",
  secondaryButton: "visual-bell-secondary-button",
  dismissButton: "visual-bell-dismiss-button",
  message: "visual-bell-message"
};
function j({
  children: e,
  testId: t,
  hidden: r
}) {
  return jsx("span", {
    ...Ay.props(r ? M.offscreen : M.displayContents),
    children: jsx(QB, {
      htmlAttributes: {
        "data-testid": t
      },
      children: e
    })
  });
}
function U({
  offscreen: e,
  srOnly: t,
  children: r
}) {
  return t ? jsx(_$$E, {
    children: r
  }) : jsx("span", {
    ...Ay.props(e && M.offscreen),
    children: r
  });
}
export function $$B0(e) {
  let {
    positioner = U
  } = e;
  let r = useDispatch();
  let {
    bell,
    queueDepth
  } = _$$R(e => ({
    bell: e.visualBell[0],
    queueDepth: e.visualBell.length
  }));
  let c = function (e) {
    let t = useMemo(() => {
      let e = [1, 2, 3];
      return () => (e.push(e.shift()), e);
    }, []);
    return useMemo(t, [t, e]);
  }(bell);
  let [u, p] = conditionalFeatureFlag("fpl_canvas_keyboard_controls", c, [void 0, void 0]);
  let _ = bell?.onDequeue;
  let h = bell?.onDismiss;
  let m = useRef(!1);
  useEffect(() => () => {
    _ && !m.current && _(WX.DISMISS);
    m.current = !1;
  }, [_]);
  let g = useCallback(e => {
    "dismiss" === e && h?.();
    !m.current && _ && (m.current = !0, _?.(function (e) {
      switch (e) {
        case "dismiss":
          return WX.DISMISS;
        case "timeout":
          return WX.TIMEOUT;
        case "action":
          return WX.ACTION_BUTTON_CLICKED;
      }
    }(e)));
    r(_$$F.dequeue({}));
  }, [r, _, h]);
  let f = useSelector(e => bell?.progressKey ? e.progress[bell.progressKey] : void 0);
  let E = bell ? zC(bell, f) : null;
  let y = bell && "nonVisualMessage" in bell ? bell.nonVisualMessage : void 0;
  let b = bell?.count ? jsx(y_, {
    children: bell.count
  }) : null;
  let [T, I] = hB(bell || null);
  let S = function (e, t) {
    let r = performance.now();
    let n = useMemo(() => r, [e]);
    return useMemo(() => e ? _$$L(e, t) : 1 / 0, [e, t]) - (r - n);
  }(bell, queueDepth);
  let A = function (e, t) {
    let r = useRef(void 0);
    let n = !!e && !e.delay;
    let [a, s] = useState(n);
    return (useEffect(() => {
      if (e?.delay) {
        let r = setTimeout(() => s(!0), e.delay);
        t || e.button || az.trackDefinedMetric("fpl.missing_toast_message", {
          bellId: e?.id,
          bellType: e.type,
          description: "delay exists but no message was included",
          visualBellInstance: "fpl_visual_bell"
        });
        return () => clearTimeout(r);
      }
    }, [e, t]), e !== r.current) ? (r.current = e, s(n), t || e?.button || az.trackDefinedMetric("fpl.missing_toast_message", {
      bellId: e?.id,
      bellType: e?.type,
      description: "Remembered bell current does not match but no message exists",
      visualBellInstance: "deprecated_fpl_visual_bell"
    }), n) : a;
  }(bell, E);
  let x = !!bell?.role;
  let k = jsx(J, {
    mode: "dark",
    children: jsxs(bL, {
      timeout: S,
      onClose: g,
      variant: bell?.error ? "danger" : void 0,
      htmlAttributes: {
        "data-testid": F.root
      },
      children: [bell?.icon && jsx(V, {
        error: bell.error,
        iconShape: bell.iconShape,
        iconURL: bell.iconURL,
        progress: f,
        icon: bell.icon
      }), jsxs(j, {
        testId: F.message,
        children: [jsx("span", {
          children: E
        }), y && jsx(_$$E, {
          children: y
        }), jsx("span", {
          children: b
        })]
      }, u), jsx(j, {
        hidden: !0
      }, p), T && jsx(G, {
        bellId: bell.id,
        "data-testid": F.button,
        ...T
      }, `${bell.id}-primary`), I && jsx(G, {
        bellId: bell.id,
        "data-testid": F.secondaryButton,
        ...I
      }, `${bell.id}-secondary`), (bell?.onDismiss || bell?.error) && jsx(Rz, {
        htmlAttributes: {
          "data-testid": F.dismissButton
        }
      })]
    })
  });
  let M = !A || !E && !b && !bell?.button;
  let B = getFeatureFlags().fpl_hide_missing_alert ? M : !A;
  useEffect(() => {
    bell && !B && az.trackDefinedEvent("fpl.visual_bell_shown", {
      bellId: bell.id,
      bellType: bell.type,
      bellMessage: bell.messageComponentKey ? bell.messageComponentKey : bell.i18n ? `VisualBellTxMessageType.${bell.i18n.id}` : bell.message ? bell.message : "[unknown]"
    });
  }, [bell, B]);
  return jsx(positioner, {
    offscreen: B,
    srOnly: x,
    shouldRequestMobileNativeBottomOffset: !!bell,
    children: k
  });
}
function G({
  bellId: e,
  editScope: t,
  text: r,
  action: a,
  Initialize: o,
  ...l
}) {
  let d = o?.();
  let c = useMemo(() => {
    let r = t => a(t, e, d);
    t && (r = nc.user(t, r));
    return r;
  }, [a, e, t, d]);
  return jsx(rA, {
    ...l,
    action: c,
    children: r
  });
}
function V(e) {
  return e.icon !== zX.FROM_URL ? jsx(H, {
    icon: e.icon,
    progress: e.progress
  }) : jsx(_$$H, {
    ...e
  });
}
function H({
  icon: e,
  progress: t
}) {
  switch (e) {
    case zX.CHECK:
      return jsx(_$$g, {});
    case zX.GREEN_CHECK:
      return jsx(_$$g2, {
        style: {
          "--color-icon": "var(--color-icon-success)"
        }
      });
    case zX.CHECK_WITH_CIRCLE:
      return jsx(W, {});
    case zX.EXCLAMATION:
      return jsx(r, {});
    case zX.UNDO:
    case zX.RETURN_TO_INSTANCE:
      return jsx(_$$E2, {});
    case zX.SPINNER:
    case zX.IMAGE_BACKED_SPINNER:
      return jsx(y$, {});
    case zX.PROGRESS:
      return jsx(ke, {
        progressFraction: OT(t)
      });
    case zX.FROM_URL:
      return jsx(_$$w, {});
    case zX.NOTES_ON_RECTANGLE:
      return jsx(_$$w2, {});
    case zX.STACK_SELECTION:
      return jsx(_$$v, {});
    case zX.CLOSE_FILLED:
      return jsx(_$$C, {
        style: {
          "--color-icon": "var(--color-icon-danger)"
        }
      });
    case zX.EYEDROPPER:
      return jsx(_$$G, {});
    case zX.BRUSH:
      return jsx(_$$g3, {});
    case zX.SPARKLE:
      return jsx(_$$V, {});
    case zX.PICK:
      return jsx(_$$o, {});
    case zX.WARNING_EXCLAMATION_WITH_TRIANGLE:
      return jsx(_$$e, {});
    case zX.OFFLINE:
      return jsx(_$$V2, {});
    case zX.DESIGN_MODE:
      return jsx(_$$P, {});
    case zX.NONE:
    case void 0:
      return jsx(Fragment, {});
  }
}
export const Z = $$B0;