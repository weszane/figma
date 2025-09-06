import { glU } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { getI18nString } from "../905/303541";
import { RK } from "../figma_app/815170";
import { LI, ci, ic, ZT, Ff, _E, H5, jD, HG, tW, K4, $9, Rr, jU, dK, j3, k$, k1, vK, g$, RN, Ao } from "../905/676397";
import { getFeatureFlags } from "../905/601108";
import { ds } from "../figma_app/314264";
import { d1 } from "../905/766303";
import { vO, Ci, yc } from "../figma_app/671547";
import { L as _$$L } from "../905/694400";
import { H } from "../905/88863";
import { De, Vm } from "../figma_app/728075";
function $$g({
  figma: e
}) {
  let {
    widget
  } = e;
  let {
    Frame,
    AutoLayout,
    SVG,
    Text
  } = t;
  let _ = widget.useWidgetId();
  let [A] = widget.useSyncedState("embedType", "standard");
  let {
    width,
    height
  } = (() => {
    let [e] = widget.useSyncedState("width", LI);
    let [i] = widget.useSyncedState("height", ci);
    if (e <= ic && i <= ZT) return {
      width: e,
      height: i
    };
    let n = ic / e;
    let r = ZT / i;
    return n < r ? {
      width: e * n,
      height: i * n
    } : {
      width: e * r,
      height: i * r
    };
  })();
  let v = H(widget, "title", {
    name: "Inter Medium",
    size: 18,
    lineHeight: 22
  }, width - 48, 2, !1);
  let I = H(widget, "description", {
    name: "Inter",
    size: 13,
    lineHeight: 20
  }, width - 48, 2, !1);
  let [E] = widget.useSyncedState("url", null);
  let x = null != E ? decodeURIComponent(E) : null;
  let [S] = widget.useSyncedState("srcUrl", null);
  let w = null != S ? decodeURIComponent(S) : null;
  let C = x ? new URL(x).host : w ? new URL(w).host : "Embed";
  let [T] = widget.useSyncedState("provider", C);
  let k = decodeURIComponent(T);
  let [R] = widget.useSyncedState("thumbnailImageHash", null);
  let [N] = widget.useSyncedState("faviconImageHash", null);
  let [P, O] = widget.useSyncedState("resolvedThumbnailImageHash", null);
  let [D, L] = widget.useSyncedState("resolvedFaviconImageHash", null);
  widget.useEffect(() => {
    if (R && !P) {
      let t = _$$L(R);
      t && O(e.createImage(t).hash);
    }
  });
  widget.useEffect(() => {
    if (N && !D) {
      let t = _$$L(N);
      t && L(e.createImage(t).hash);
    }
  });
  widget.useEffect(() => {
    widget.waitForTask(new Promise(e => {
      getFeatureFlags().figjam_embed_auto_activate && glU?.setActiveEmbed(_);
      e();
    }));
  });
  let F = {
    fontFamily: "Inter",
    horizontalAlignText: "left",
    verticalAlignText: "bottom",
    fill: {
      type: "solid",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: .8
      },
      blendMode: "normal"
    }
  };
  let M = e => {
    let t = d1(debugState.getState())?.key ?? "";
    ds(e, t, debugState.getState(), {
      domain: null != x ? vO(x) : k,
      linkRenderType: Ci.EMBED,
      userId: debugState.getState().user?.id
    });
  };
  return ((...t) => e.widget.h(AutoLayout, {
    name: "embed",
    direction: "vertical",
    horizontalAlignItems: "start",
    verticalAlignItems: "center",
    width: "hug-contents",
    height: "hug-contents",
    padding: 8,
    fill: "#fff",
    cornerRadius: Ff,
    spacing: 4,
    effect: _E,
    stroke: {
      type: "solid",
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: .2
      },
      blendMode: "normal"
    }
  }, ...t))(((...t) => e.widget.h(AutoLayout, {
    name: "header-container",
    direction: "horizontal",
    horizontalAlignItems: "start",
    verticalAlignItems: "center",
    width: "fill-parent",
    height: "hug-contents",
    spacing: "auto",
    padding: {
      left: 8,
      right: 0,
      bottom: 0,
      top: 0
    }
  }, ...t))(((...t) => e.widget.h(AutoLayout, {
    name: "provider-container",
    direction: "horizontal",
    horizontalAlignItems: "start",
    verticalAlignItems: "center",
    spacing: 8
  }, ...t))("figma" === A ? "FigJam" === k ? e.widget.h(SVG, {
    name: "favicon",
    width: 16,
    height: 16,
    src: H5
  }) : e.widget.h(SVG, {
    name: "favicon",
    width: 16,
    height: 16,
    src: jD
  }) : D ? e.widget.h(Frame, {
    name: "favicon",
    width: 16,
    height: 16,
    fill: {
      type: "image",
      imageHash: D,
      scaleMode: "fill"
    },
    cornerRadius: 3
  }) : e.widget.h(SVG, {
    src: HG,
    width: 16,
    height: 16
  }), e.widget.h(Text, {
    ...F,
    fontSize: 12,
    fontWeight: 500,
    fill: {
      type: "solid",
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: .8
      },
      blendMode: "normal"
    }
  }, k)), e.widget.h(AutoLayout, {
    name: "tooltip-frame",
    width: 32,
    height: 32,
    horizontalAlignItems: "center",
    verticalAlignItems: "center"
  }, e.widget.h(SVG, {
    name: "tooltip",
    width: 16,
    height: 16,
    src: tW
  }))), ((t, ...n) => e.widget.h(Frame, {
    name: "thumbnail-container",
    width: Number(width),
    height: Number(height),
    fill: t ? {
      type: "image",
      imageHash: t,
      scaleMode: "fill"
    } : De,
    cornerRadius: K4
  }, ...n))(P, ((...t) => e.widget.h(AutoLayout, {
    name: "text-container",
    direction: "vertical",
    horizontalAlignItems: "start",
    verticalAlignItems: "end",
    width: Number(width),
    height: Number(height),
    fill: $9,
    padding: 16
  }, ...t))((t => {
    if (t) return e.widget.h(Text, {
      width: "fill-parent",
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "-0.9%",
      lineHeight: 22,
      ...F
    }, t);
  })(v), (t => {
    if (t) return e.widget.h(Text, {
      width: "fill-parent",
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: "-0.25%",
      lineHeight: 20,
      ...F
    }, t);
  })(I)), e.widget.h(AutoLayout, {
    name: "button-container",
    horizontalAlignItems: "center",
    verticalAlignItems: "center",
    width: Number(width),
    height: Number(height)
  }, "autoplayable_video" === A || "autoplayable_audio" === A ? e.widget.h(SVG, {
    name: "play-button",
    src: Rr,
    onClick: () => {
      M(yc.EMBED_CLICK);
      glU?.setActiveEmbed(_);
    }
  }) : e.widget.h(AutoLayout, {
    name: "view-button",
    direction: "horizontal",
    horizontalAlignItems: "center",
    verticalAlignItems: "center",
    width: 200,
    height: 38,
    cornerRadius: 6,
    fill: "#fff",
    onClick: () => {
      M(yc.EMBED_CLICK);
      glU?.setActiveEmbed(_);
    }
  }, e.widget.h(Text, {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Inter",
    fill: "#000"
  }, getI18nString("whiteboard.embeds.view_button"))))));
}
export var $$f0 = (e => (e.OPEN = "open", e.CONVERT_TO_TEXT = "convert_to_text", e))($$f0 || {});
export function $$_1({
  figma: e
}) {
  let {
    widget
  } = e;
  let {
    Frame,
    AutoLayout
  } = t;
  let _ = t => {
    switch (t) {
      case jU.EMBED_VERSION_ID_V0:
        return $$g({
          figma: e
        });
      case jU.EMBED_VERSION_ID_V1:
        return function ({
          figma: e
        }) {
          let {
            widget: _widget
          } = e;
          let {
            Frame: _Frame,
            AutoLayout: _AutoLayout,
            SVG,
            Text
          } = t;
          let A = _widget.useWidgetId();
          let [y] = _widget.useSyncedState("embedType", "standard");
          let {
            width,
            height
          } = (() => {
            let [e] = _widget.useSyncedState("width", LI);
            let [i] = _widget.useSyncedState("height", ci);
            if (e <= ic && i <= ZT) return {
              width: e,
              height: i
            };
            let n = ic / e;
            let r = ZT / i;
            return n < r ? {
              width: e * n,
              height: i * n
            } : {
              width: e * r,
              height: i * r
            };
          })();
          let I = H(_widget, "title", {
            name: "Inter Medium",
            size: 16,
            lineHeight: 24
          }, width - 96, 1, !1);
          let E = H(_widget, "description", {
            name: "Inter",
            size: 13,
            lineHeight: 24
          }, width - 96, 1, !1);
          let x = !!I;
          let S = !!E;
          let [w] = _widget.useSyncedState("url", null);
          let C = null != w ? decodeURIComponent(w) : null;
          let [T] = _widget.useSyncedState("srcUrl", null);
          let k = null != T ? decodeURIComponent(T) : null;
          let R = C ? new URL(C).host : k ? new URL(k).host : "Embed";
          let [N] = _widget.useSyncedState("provider", R);
          let P = decodeURIComponent(N);
          let [O] = _widget.useSyncedState("thumbnailImageHash", null);
          let [D] = _widget.useSyncedState("faviconImageHash", null);
          let [L, F] = _widget.useSyncedState("resolvedThumbnailImageHash", null);
          let [M, j] = _widget.useSyncedState("resolvedFaviconImageHash", null);
          let U = H(_widget, "srcUrl", {
            name: "Inter Medium",
            size: 16,
            lineHeight: 24
          }, width - 96, 1, !0, !0);
          _widget.useEffect(() => {
            if (O && !L) {
              let t = _$$L(O);
              t && F(e.createImage(t).hash);
            }
          });
          _widget.useEffect(() => {
            if (D && !M) {
              let t = _$$L(D);
              t && j(e.createImage(t).hash);
            }
          });
          _widget.useEffect(() => {
            _widget.waitForTask(new Promise(e => {
              getFeatureFlags().figjam_embed_auto_activate && glU?.setActiveEmbed(A);
              e();
            }));
          });
          let B = {
            fontFamily: "Inter",
            horizontalAlignText: "left",
            verticalAlignText: "bottom",
            fill: {
              type: "solid",
              color: {
                r: 1,
                g: 1,
                b: 1,
                a: .8
              },
              blendMode: "normal"
            }
          };
          let V = (...t) => e.widget.h(_AutoLayout, {
            name: "text-container",
            direction: "vertical",
            horizontalAlignItems: "start",
            verticalAlignItems: "end",
            width: Number(width - 84)
          }, ...t);
          let G = t => {
            if (t) return e.widget.h(Text, {
              width: "fill-parent",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "-0.9%",
              lineHeight: 24,
              ...B,
              fill: {
                type: "solid",
                color: {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: .8
                },
                blendMode: "normal"
              }
            }, t);
          };
          let z = e => {
            let t = d1(debugState.getState())?.key ?? "";
            ds(e, t, debugState.getState(), {
              domain: null != C ? vO(C) : P,
              linkRenderType: Ci.EMBED,
              userId: debugState.getState().user?.id
            });
          };
          return ((...t) => e.widget.h(_AutoLayout, {
            name: "embed",
            direction: "vertical",
            horizontalAlignItems: "start",
            verticalAlignItems: "center",
            width: "hug-contents",
            height: "hug-contents",
            padding: 8,
            fill: Vm,
            cornerRadius: Ff,
            spacing: 4,
            effect: _E,
            stroke: {
              type: "solid",
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: .2
              },
              blendMode: "normal"
            }
          }, ...t))(((t, ...n) => e.widget.h(_Frame, {
            name: "thumbnail-container",
            width: Number(width),
            height: Number(height),
            fill: t ? {
              type: "image",
              imageHash: t,
              scaleMode: "fill"
            } : De,
            cornerRadius: K4,
            stroke: {
              type: "solid",
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: .2
              },
              blendMode: "normal",
              width: 1
            }
          }, ...n))(L, e.widget.h(_AutoLayout, {
            name: "thumbnail-overlay",
            direction: "vertical",
            horizontalAlignItems: "start",
            verticalAlignItems: "end",
            width: Number(width),
            height: Number(height),
            fill: $9,
            padding: 16
          }), e.widget.h(_AutoLayout, {
            name: "button-container",
            horizontalAlignItems: "center",
            verticalAlignItems: "center",
            width: Number(width),
            height: Number(height)
          }, "autoplayable_video" === y || "autoplayable_audio" === y ? e.widget.h(SVG, {
            name: "play-button",
            src: Rr,
            onClick: () => {
              z(yc.EMBED_CLICK);
              glU?.setActiveEmbed(A);
            }
          }) : e.widget.h(_AutoLayout, {
            name: "view-button",
            direction: "horizontal",
            horizontalAlignItems: "center",
            verticalAlignItems: "center",
            width: 200,
            height: 38,
            cornerRadius: 6,
            fill: Vm,
            onClick: () => {
              let e = C || k || null;
              "figma" === y && e && debugState.dispatch(RK({
                rawInput: e
              }));
              z(yc.EMBED_CLICK);
              glU?.setActiveEmbed(A);
            }
          }, e.widget.h(Text, {
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Inter",
            fill: "#000"
          }, getI18nString("whiteboard.embeds.view_button"))))), ((...t) => e.widget.h(_AutoLayout, {
            name: "footer-container",
            direction: "horizontal",
            horizontalAlignItems: "start",
            verticalAlignItems: "center",
            width: "fill-parent",
            height: 105,
            spacing: "auto",
            padding: {
              left: 8,
              right: 0,
              bottom: 0,
              top: 0
            }
          }, ...t))(((...t) => e.widget.h(_AutoLayout, {
            name: "provider-container",
            direction: "vertical",
            horizontalAlignItems: "start",
            verticalAlignItems: "center",
            spacing: 8,
            padding: {
              top: 8,
              left: 8,
              right: 8,
              bottom: 8
            }
          }, ...t))(x || S ? V(G(I), (t => {
            if (t) return e.widget.h(Text, {
              width: "fill-parent",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "-0.25%",
              lineHeight: 24,
              ...B,
              fill: {
                type: "solid",
                color: {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: .5
                },
                blendMode: "normal"
              }
            }, t);
          })(E)) : V(G(U)), ((...t) => e.widget.h(_AutoLayout, {
            name: "provider-container",
            direction: "horizontal",
            horizontalAlignItems: "start",
            verticalAlignItems: "center",
            spacing: 8
          }, ...t))(((t, n) => {
            if ("figma" === t) return "FigJam" === P ? e.widget.h(SVG, {
              name: "favicon",
              width: 16,
              height: 16,
              src: H5
            }) : "Slides" === P ? e.widget.h(SVG, {
              name: "favicon",
              width: 16,
              height: 16,
              src: dK
            }) : "Sites" === P ? e.widget.h(SVG, {
              name: "favicon",
              width: 16,
              height: 16,
              src: j3
            }) : "Buzz" === P ? e.widget.h(SVG, {
              name: "favicon",
              width: 16,
              height: 16,
              src: k$
            }) : e.widget.h(SVG, {
              name: "favicon",
              width: 16,
              height: 16,
              src: jD
            });
            return n ? e.widget.h(_Frame, {
              name: "favicon",
              width: 16,
              height: 16,
              fill: {
                type: "image",
                imageHash: n,
                scaleMode: "fill"
              },
              cornerRadius: 3
            }) : e.widget.h(SVG, {
              src: HG,
              width: 16,
              height: 16
            });
          })(y, M), e.widget.h(Text, {
            ...B,
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 13,
            fill: {
              type: "solid",
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: .5
              },
              blendMode: "normal"
            }
          }, P))), e.widget.h(_AutoLayout, {
            name: "tooltip-frame",
            width: 50,
            height: 32,
            horizontalAlignItems: "center",
            verticalAlignItems: "center",
            padding: {
              right: 20
            }
          }, e.widget.h(SVG, {
            name: "tooltip",
            width: 16,
            height: 16,
            src: tW
          }))));
        }({
          figma: e
        });
      default:
        return $$g({
          figma: e
        });
    }
  };
  widget.register(function () {
    let [l] = widget.useSyncedState("resolved", !1);
    let [d] = widget.useSyncedState("embedVersionId", jU.EMBED_VERSION_ID_V0);
    return l ? _(d) : function () {
      let l = widget.useWidgetId();
      let [d] = widget.useSyncedState("url", null);
      let c = d ? decodeURIComponent(d) : "null";
      let [u] = widget.useSyncedState("originalText", null);
      let p = u ? decodeURIComponent(u) : "null";
      widget.usePropertyMenu([{
        itemType: "action",
        propertyName: "open",
        tooltip: getI18nString("whiteboard.embeds.inline_menu.open_link"),
        icon: k1
      }, {
        itemType: "separator"
      }, {
        itemType: "action",
        propertyName: "convert_to_text",
        tooltip: getI18nString("whiteboard.embeds.inline_menu.change_back_to_text"),
        icon: vK
      }], ({
        propertyName: e
      }) => {
        switch (e) {
          case "open":
            debugState.dispatch(RK({
              rawInput: c
            }));
            break;
          case "convert_to_text":
            glU?.replaceNodeWithText(l, p);
            break;
          default:
            console.error("Unhandled property name for Embed widget: %s", e);
        }
      });
      let m = t => e.widget.h(Frame, {
        name: "loading-text",
        width: t,
        height: 22,
        cornerRadius: 3,
        fill: {
          type: "solid",
          color: De
        }
      });
      return ((...t) => e.widget.h(AutoLayout, {
        name: "loading-embed",
        direction: "vertical",
        horizontalAlignItems: "start",
        verticalAlignItems: "center",
        width: g$,
        height: RN,
        fill: Vm,
        cornerRadius: Ff,
        effect: _E,
        stroke: {
          type: "solid",
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: .2
          },
          blendMode: "normal"
        }
      }, ...t))(e.widget.h(Frame, {
        name: "loading-thumbnail",
        width: g$,
        height: Ao,
        fill: De
      }), ((...t) => e.widget.h(AutoLayout, {
        name: "loading-text-container",
        direction: "vertical",
        horizontalAlignItems: "start",
        verticalAlignItems: "center",
        width: g$,
        height: "fill-parent",
        padding: 16,
        spacing: 8
      }, ...t))(m(166), m(256), m(208)));
    }();
  });
}
export const w = $$f0;
export const g = $$_1;