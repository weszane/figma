import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { E as _$$E } from "../905/632989";
import { T as _$$T } from "../905/745591";
import r from "classnames";
import { colorToString } from "../905/436288";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { ol, H0, GL } from "../figma_app/191804";
import { Hd } from "../figma_app/583114";
import { wY } from "../figma_app/708845";
import { Xb } from "../figma_app/778880";
import { Pt } from "../figma_app/806412";
import { GG } from "../905/511649";
import { B as _$$B } from "../905/714743";
import { t } from "../905/303541";
import { m as _$$m } from "../905/99004";
import { xb } from "../figma_app/465776";
import { d as _$$d } from "../vendor/456530";
import { G } from "../vendor/697048";
import { Bn, BI, Uj, Gy, kS } from "../3276/256210";
import { A as _$$A } from "../svg/25493";
import { A as _$$A2 } from "../svg/194200";
import { E as _$$E2 } from "../vendor/45699";
import { A as _$$A3 } from "../vendor/90566";
import { A as _$$A4 } from "../svg/821527";
var l = r;
function I(e) {
  let t = "left" === e.side ? _$$A : _$$A2;
  let n = "left" === e.side ? `6px 0 0 ${e.color}` : `-6px 0 0 ${e.color}`;
  return jsx(_$$P.div, {
    style: {
      opacity: e.opacity,
      position: "relative",
      top: e.offset,
      zIndex: 1
    },
    children: jsx("div", {
      style: {
        boxShadow: n,
        transition: `box-shadow ${Bn}s linear`
      },
      children: jsx(_$$B, {
        svg: t,
        style: {
          fill: e.color,
          transition: `fill ${Bn}s linear`
        }
      })
    })
  });
}
function T(e) {
  let {
    opacity,
    offset,
    color,
    children
  } = e;
  return jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    },
    children: [jsx(I, {
      side: "left",
      opacity,
      offset,
      color
    }), jsx("span", {
      style: {
        zIndex: 2
      },
      children
    }), jsx(I, {
      side: "right",
      opacity,
      offset,
      color
    })]
  });
}
function M(e) {
  return jsx("div", {
    style: {
      borderRadius: "6px",
      overflow: "hidden"
    },
    children: e.children
  });
}
function E(e) {
  let {
    color,
    docked,
    dockedStyle,
    dockedOffset,
    children
  } = e;
  let r = _$$d(1);
  let l = _$$d(0);
  let d = !0 === docked ? r : !1 === docked ? l : docked;
  let c = G(d, [0, 1], [0, 1]);
  let u = G(d, [0, 1], ["0px", `${dockedOffset}px`]);
  let p = G(d, [0, 1], ["6px", "0px"]);
  switch (dockedStyle) {
    case "straight":
      return jsx(_$$P.div, {
        style: {
          borderTopLeftRadius: p,
          borderTopRightRadius: p,
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          backgroundColor: color,
          overflow: "hidden"
        },
        children
      });
    case "inverted":
      return jsx(T, {
        opacity: c,
        offset: u,
        color,
        children: jsx(M, {
          children
        })
      });
    default:
      xb(dockedStyle);
  }
}
let D = ({
  enabled: e
}) => {
  let [t, n] = useState(0);
  let o = useCallback(() => {
    n(Date.now());
  }, []);
  useEffect(() => (e && document.addEventListener("mousemove", o), () => {
    document.removeEventListener("mousemove", o);
  }), [o, e]);
  return t;
};
function A({
  enabled: e,
  children: t
}) {
  let n = D({
    enabled: e
  });
  let i = _$$E2();
  let s = useCallback(() => {
    i.start({
      opacity: 1,
      transition: {
        duration: 0
      }
    });
  }, [i]);
  let r = useCallback(() => {
    i.start({
      opacity: 0,
      transition: {
        duration: .5
      }
    });
  }, [i]);
  let l = _$$A3(r, 5e3);
  useEffect(() => {
    s();
    e ? l() : l.isPending() && l.cancel();
  }, [e, n, l, s]);
  return jsx(_$$P.div, {
    animate: i,
    children: t
  });
}
let L = "multiplayer_bell--buttonContainer--4rypl";
export function $$O0(e) {
  let {
    color,
    useSecondaryColor,
    message,
    renderKey,
    progressBar,
    progressBarDurationMs,
    autoHide,
    button,
    showCloseButton,
    onCloseCallback,
    docked,
    dockedBorderInfo,
    isTabAccessible
  } = e;
  let [S, D] = useState(!1);
  let O = Xb ? "multiplayer_bell--buttonMobile--Z5j0F multiplayer_bell--button--QWm4n multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd multiplayer_bell--multiplayerTextMobile--4qVD- multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd text--fontPos14--OL9Hp text--_fontBase--QdLsd" : "multiplayer_bell--button--QWm4n multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd";
  let B = Xb ? "multiplayer_bell--messageMobile--Z1sCx multiplayer_bell--message--POM9v multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd multiplayer_bell--multiplayerTextMobile--4qVD- multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd text--fontPos14--OL9Hp text--_fontBase--QdLsd" : "multiplayer_bell--message--POM9v multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd";
  let U = Xb ? "multiplayer_bell--closeButtonMobile--s-kHx multiplayer_bell--closeButton--5Pbdu multiplayer_bell--multiplayerTextMobile--4qVD- multiplayer_bell--multiplayerText--b-7-0 text--fontPos11--2LvXf text--_fontBase--QdLsd text--fontPos14--OL9Hp text--_fontBase--QdLsd" : "multiplayer_bell--closeButton--5Pbdu";
  let H = color ?? ol.MULTIPLAYER_GRAY;
  let V = useMemo(() => {
    if ("brand" === color) return {
      "--multiplayerBellBackgroundColor": useSecondaryColor ? "var(--color-bg-brand-hover)" : "var(--color-bg-brand)",
      "--multiplayerBellTextColor": "var(--color-text-onbrand)",
      "--multiplayerBellButtonBackgroundColor": "var(--color-bg-menu)",
      "--multiplayerBellButtonTextColor": "var(--color-text-menu)",
      "--multiplayerBellButtonHoverColor": "var(--color-bg-menu-secondary)",
      "--multiplayerBellProgressBackgroundColor": "var(--color-bg-brand-hover)"
    };
    {
      let e = H0(H);
      let t = Hd(e, -.15);
      let o = Hd(e, -.55);
      let a = Hd(e, -.8);
      let i = e && GL(e);
      let s = o && GL(o);
      return {
        "--multiplayerBellBackgroundColor": useSecondaryColor && t ? colorToString(t) : H,
        "--multiplayerBellTextColor": i,
        "--multiplayerBellButtonBackgroundColor": o ? colorToString(o) : void 0,
        "--multiplayerBellButtonTextColor": s,
        "--multiplayerBellButtonHoverColor": a ? colorToString(a) : void 0,
        "--multiplayerBellProgressBackgroundColor": t ? colorToString(t) : void 0
      };
    }
  }, [H, color, useSecondaryColor]);
  let q = useRef(null);
  let z = useRef(null);
  let Z = wY(q);
  let $ = wY(z);
  let K = Z && $ ? Z.width + $.width : "auto";
  if (S) return null;
  let W = progressBarDurationMs >= BI ? "multiplayer_bell--progressBarAnimationSlow--Rfp9s" : "multiplayer_bell--progressBarAnimationQuick--aBXRY";
  return jsx(A, {
    enabled: autoHide,
    children: jsx(E, {
      color: V["--multiplayerBellBackgroundColor"],
      docked: docked || !1,
      dockedStyle: 0 === (dockedBorderInfo?.width || 0) ? "straight" : "inverted",
      dockedOffset: dockedBorderInfo?.width || 0,
      children: jsx(F, {
        isTabAccessible,
        children: jsx(_$$N, {
          initial: !1,
          children: jsxs("div", {
            className: "multiplayer_bell--multiplayerBell--MJNGX",
            style: {
              ...V,
              transition: `background-color ${Bn}s linear`
            },
            children: [progressBar && jsx("div", {
              className: "multiplayer_bell--progressBarContainer--6yfl6",
              children: jsx("div", {
                className: l()("multiplayer_bell--progressBarFill--McozJ", W),
                style: {
                  animationDuration: `${progressBarDurationMs}ms`
                }
              })
            }), jsx("div", {
              className: "multiplayer_bell--messageAndButtonsContainer--SRFq4",
              children: jsxs(_$$P.div, {
                animate: {
                  width: K
                },
                className: "multiplayer_bell--messageAndButtonsVariableWidthContainer--6tqVI",
                transition: {
                  duration: Uj,
                  type: "easeOut"
                },
                children: [jsx("div", {
                  style: {
                    width: "fit-content"
                  },
                  ref: q,
                  "aria-live": "polite",
                  children: message.onClick ? jsx(_$$E, {
                    className: l()(B),
                    recordingKey: Pt(e, "message"),
                    onClick: message.onClick,
                    children: jsx(_$$T, {
                      children: message.text
                    })
                  }) : jsx(_$$T, {
                    className: l()(B),
                    children: message.text
                  })
                }), jsx("div", {
                  style: {
                    width: "fit-content"
                  },
                  ref: z,
                  children: jsxs("div", {
                    className: "multiplayer_bell--buttonsContainer--9CCwH",
                    children: [button && jsx(_$$P.div, {
                      className: L,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        duration: Gy,
                        delay: kS
                      },
                      children: jsx(_$$E, {
                        className: l()(O),
                        recordingKey: Pt(e, "button"),
                        onClick: button.onClick,
                        children: button.text
                      })
                    }), showCloseButton && jsx("div", {
                      className: L,
                      children: jsx(GG, {
                        className: l()(U),
                        recordingKey: Pt(e, "closeButton"),
                        onClick: () => {
                          onCloseCallback && onCloseCallback();
                          D(!0);
                        },
                        "aria-label": t("collaboration.spotlight.bell.dismiss"),
                        children: jsx(_$$B, {
                          svg: _$$A4
                        })
                      })
                    })]
                  })
                })]
              })
            })]
          }, renderKey)
        })
      })
    })
  });
}
function F({
  isTabAccessible: e,
  children: t
}) {
  return e ? jsx(Fragment, {
    children: t
  }) : jsx(_$$m, {
    role: "region",
    children: t
  });
}
export const m = $$O0;