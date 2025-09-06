import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useRef, forwardRef } from "react";
import { E as _$$E } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { dI } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import u from "../vendor/241899";
import { v_, aH, Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { oW } from "../905/675859";
import { renderI18nText, getI18nString } from "../905/303541";
import { Yl, j4, W3 } from "../905/232641";
import { DP } from "../905/640017";
import { E7, gl, hS } from "../905/216495";
import { KH } from "../figma_app/722362";
import { vE, W as _$$W, UH, Lk } from "../figma_app/156285";
import { h as _$$h } from "../905/207101";
import { c as _$$c } from "../905/370443";
import { e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { SAW } from "../figma_app/6204";
import { yl } from "../figma_app/947348";
import { bL } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { glU, plo } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { A as _$$A } from "../vendor/90566";
import { parsePxNumber } from "../figma_app/783094";
import { P as _$$P } from "../905/347284";
import { Y5 } from "../figma_app/455680";
import { zk } from "../figma_app/198712";
import { b as _$$b, bL as _$$bL, mc, q7 } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { A as _$$A2 } from "../905/215698";
import { l as _$$l } from "../905/479687";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Ib } from "../905/129884";
import { ks } from "../figma_app/626177";
import { mc as _$$mc, RW, wH, pe, vs, pi, nO, Tg, Dq, iT, xT, n$, g5, gW, _J, i$, S3, ri, zH, Gy, FH } from "../figma_app/412796";
var c = d;
var p = u;
function R() {
  let {
    show,
    isShowing,
    complete
  } = e({
    overlay: SAW,
    priority: _$$N.DEFAULT_MODAL
  });
  let r = getFeatureFlags().ce_il_scatter_onboarding ?? !1;
  _$$h(() => {
    show({
      canShow: () => r
    });
  });
  let a = {
    type: "button",
    label: renderI18nText("draw.onboarding.dismiss_button"),
    onClick: complete,
    ctaTrackingDescriptor: _$$c.GOT_IT
  };
  let s = {
    type: "link",
    label: renderI18nText("draw.onboarding.first_time.learn_more"),
    href: "https://help.figma.com/hc/articles/31440438150935",
    ctaTrackingDescriptor: _$$c.LEARN_MORE
  };
  return jsx(rq, {
    arrowPadding: 8,
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText("draw.onboarding.scatter_brushes.description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: a,
    secondaryCta: s,
    targetKey: yl,
    title: renderI18nText("draw.onboarding.scatter_brushes.title"),
    trackingContextName: "draw_onboarding",
    userFlagOnShow: "seen_draw_scatter_brush_onboarding"
  });
}
function $(e) {
  let {
    brush,
    isRenaming,
    stopRenaming
  } = e;
  let [s, o] = useState(brush.name);
  let l = useCallback(() => {
    stopRenaming();
    s !== brush.name && "" !== s && (l7.user("rename-brush", () => glU.renameNode(brush.guid, s)), Y5.triggerAction("commit"));
  }, [brush.guid, brush.name, s, stopRenaming]);
  let d = v_(e.recordingKey, "keydown", e => {
    if ("Tab" === e.key || "Enter" === e.key) l();else {
      if ("Escape" !== e.key) return aH;
      stopRenaming();
      e.stopPropagation();
      e.preventDefault();
      o(brush.name);
    }
  });
  let c = useCallback(e => {
    setTimeout(() => e?.focus());
  }, []);
  return jsxs(Fragment, {
    children: [isRenaming && jsx(ks, {
      autoCapitalize: "off",
      autoCorrect: "off",
      innerRef: c,
      name: "brushName",
      onBlur: l,
      onChange: e => {
        o(e.target.value);
      },
      onFocus: e => (e.stopPropagation(), e.target.select(), o(e.target.value), aH),
      onKeyDown: d,
      recordingKey: Pt(e.recordingKey, "brushName"),
      spellCheck: !1,
      value: s
    }), !isRenaming && jsx("div", {
      className: _$$mc,
      children: brush.name
    })]
  });
}
function Z(e) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  return jsxs(_$$bL, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": getI18nString("fullscreen.properties_panel.edit_brush"),
      htmlAttributes: {
        "data-tooltip": getI18nString("fullscreen.properties_panel.edit_brush"),
        "data-tooltip-type": Ib.TEXT
      },
      ...getTriggerProps(),
      children: jsx(_$$A2, {})
    }), jsxs(mc, {
      children: [jsx(q7, {
        onClick: e.onStartRenamingBrush,
        children: jsx(Fragment, {
          children: getI18nString("fullscreen.properties_panel.rename_brush")
        })
      }), jsx(q7, {
        onClick: e.onDeleteBrush,
        children: jsx(Fragment, {
          children: getI18nString("fullscreen.properties_panel.delete_brush")
        })
      })]
    })]
  });
}
function X(e) {
  let {
    brush,
    onBrushClick,
    selected
  } = e;
  let s = KH();
  let o = useAtomWithSubscription(vE);
  let l = _$$W(brush.guid);
  return jsxs("div", {
    className: c()(RW, {
      [wH]: selected
    }),
    children: [jsx(_$$E, {
      className: pe,
      htmlAttributes: {
        onMouseEnter: () => {
          e.onPreview(brush);
        }
      },
      recordingKey: e.recordingKey,
      onClick: e => {
        e.target?.tagName?.toLowerCase() !== "input" && (onBrushClick(brush), e.stopPropagation(), UH(brush, Object.keys(s)));
      },
      children: jsxs("div", {
        className: vs,
        children: [jsx("div", {
          className: pi
        }), jsx("div", {
          className: nO,
          children: l && jsx(oW, {
            src: l,
            alt: brush.name
          })
        })]
      })
    }), jsxs("div", {
      className: Tg,
      children: [jsxs("div", {
        className: Dq,
        children: [jsx("div", {
          className: iT,
          children: selected && jsx(_$$l, {})
        }), jsx($, {
          brush,
          recordingKey: Pt(e.recordingKey, "rename"),
          stopRenaming: e.stopRenaming,
          startRenaming: e.startRenaming,
          isRenaming: e.isRenaming
        })]
      }), !o.includes(brush.guid) && !e.isRenaming && jsx(Z, {
        onDeleteBrush: e.onDeleteBrush,
        onStartRenamingBrush: e.startRenaming
      })]
    })]
  });
}
let Q = parsePxNumber(xT);
let J = parsePxNumber(n$);
function ee(e) {
  let {
    brushes,
    onChange,
    selectedBrush,
    previewEnabled,
    positioningProps,
    onClose,
    recordingKey
  } = e;
  let {
    stretchBrushes,
    scatterBrushes
  } = useMemo(() => brushes.reduce((e, t) => (t.type === plo.SCATTER ? e.scatterBrushes.push(t) : e.stretchBrushes.push(t), e), {
    stretchBrushes: [],
    scatterBrushes: []
  }), [brushes]);
  let [g, y] = useState(selectedBrush);
  let b = useMemo(() => {
    let e = (g.type === plo.SCATTER ? scatterBrushes : stretchBrushes).findIndex(e => e.guid === g?.guid);
    -1 === e && (e = 0);
    return e;
  }, [scatterBrushes, stretchBrushes, g]);
  let I = useCallback((e, t) => {
    onChange(e, t);
  }, [onChange]);
  let E = _$$A(t => {
    previewEnabled && t.guid !== e.selectedBrush?.guid && I(t, zk.NO);
  }, 100);
  let x = useCallback(() => {
    previewEnabled && (E.cancel(), I(g, zk.NO));
  }, [previewEnabled, E, g, I]);
  let S = useCallback(e => {
    x();
    y(e);
    I(e, zk.YES);
  }, [x, y, I]);
  let w = useCallback(e => {
    l7.user("delete-brush", () => {
      let t = getSingletonSceneGraph().get(e.guid);
      t && (x(), t.guid === g.guid ? S(Lk) : t.guid === selectedBrush.guid && I(g, zk.NO), t.removeSelfAndChildren(), Y5.commit());
    });
  }, [g, x, I, selectedBrush, S]);
  let [C, T] = useState(null);
  let k = "dark" === DP();
  let R = useCallback(e => jsx(X, {
    brush: e,
    isRenaming: e.guid === C,
    onBrushClick: e => {
      S(e);
      onClose();
    },
    onDeleteBrush: () => w(e),
    onPreview: E,
    recordingKey: Pt(recordingKey, "brushRow", e.name),
    selected: g.guid === e.guid,
    startRenaming: () => {
      x();
      T(e.guid);
    },
    stopRenaming: () => {
      x();
      T(null);
    }
  }, e.guid), [x, C, w, E, g, onClose, recordingKey, S]);
  let M = useMemo(() => {
    let e = (g.type === plo.SCATTER ? stretchBrushes.length + b : b) * Q;
    return getFeatureFlags().ce_il_scatter ? e + (g.type === plo.STRETCH ? 1 : 2) * J - (0 === b ? J : 0) - 30 : e - 30;
  }, [stretchBrushes, g, b]);
  let [V, G] = useState(null);
  let [z, H] = useState(0);
  return jsx(bL, {
    width: 240,
    maxHeight: 510,
    onClose: () => {
      e.onClose();
      x();
    },
    htmlAttributes: {
      onMouseLeave: x
    },
    defaultPosition: Yl({
      ...positioningProps,
      modalWidth: 240
    }),
    children: jsxs(vo, {
      className: c()(g5, {
        [gW]: k
      }),
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("fullscreen.properties_panel.brushes")
        })
      }), jsx(nB, {
        scrolling: "none",
        padding: 0,
        children: jsx("div", {
          className: _J,
          children: jsxs(_$$P, {
            hideScrollbar: !0,
            disableScrollbarBorder: !0,
            initialScrollTop: M,
            onScroll: () => H(V?.getScrollTop() ?? 0),
            ref: G,
            children: [getFeatureFlags().ce_il_scatter && jsx("div", {
              className: c()(i$, S3, {
                [ri]: z > 0
              }),
              children: getI18nString("fullscreen.properties_panel.brushes.stretch")
            }), stretchBrushes.map(R), getFeatureFlags().ce_il_scatter && jsx("div", {
              className: c()(i$, {
                [ri]: z > Q * stretchBrushes.length + J
              }),
              children: getI18nString("fullscreen.properties_panel.brushes.scatter")
            }), scatterBrushes.map(R)]
          })
        })
      })]
    })
  });
}
export function $$et0(e) {
  let {
    brushList,
    value,
    onChange,
    brushInputClassName,
    positioningProps,
    onboardingKey
  } = e;
  let c = E7(value);
  let u = useMemo(() => brushList.filter(e => !e.isSoftDeleted || e.guid === dI(c)), [brushList, c]);
  let g = useRef(null);
  let f = !function () {
    let e = KH();
    return useMemo(() => 0 === Object.keys(e).length, [e]);
  }();
  let A = useMemo(() => u.find(e => e.guid === dI(c)) ?? Lk, [u, c]);
  let [I, E] = useState(!1);
  let x = useRef(new Point(0, 0));
  let S = useCallback(() => {
    let e = g.current ? p()(g.current.getBoundingClientRect(), ["top", "left", "bottom", "right"]) : {
      left: 0,
      top: 0,
      bottom: 510,
      right: 240
    };
    x.current = j4({
      referenceBoundingBox: e,
      align: {
        x: W3.CENTER,
        y: W3.BEFORE
      },
      modalSize: {
        height: 518,
        width: 240
      }
    });
    E(e => !e);
  }, []);
  return jsxs(Fragment, {
    children: [jsx(ei, {
      brush: A,
      onClick: S,
      ref: g,
      isDropdownOpen: I,
      className: brushInputClassName,
      recordingKey: e.recordingKey,
      isMixed: gl(value),
      onboardingKey
    }), I && jsx(ee, {
      brushes: u,
      onChange,
      positioningProps,
      onClose: () => E(!1),
      selectedBrush: A,
      previewEnabled: f && hS(value),
      recordingKey: Pt(e.recordingKey, "brushList")
    })]
  });
}
let ei = forwardRef((e, t) => {
  let {
    brush
  } = e;
  let r = "dark" === DP();
  let o = _$$W(brush.guid);
  return jsxs(Fragment, {
    children: [getFeatureFlags().ce_il_scatter_onboarding && e.onboardingKey && jsx(R, {}), jsx("div", {
      className: c()(e.className, {
        [gW]: r
      }),
      ref: t,
      children: jsxs(_$$E, {
        onClick: e.onClick,
        className: c()(zH, {
          [Gy]: e.isDropdownOpen
        }),
        recordingKey: e.recordingKey,
        "aria-label": getI18nString("fullscreen.properties_panel.brush"),
        "data-tooltip": getI18nString("fullscreen.properties_panel.brush"),
        "data-tooltip-type": "text",
        "data-onboarding-key": e.onboardingKey,
        children: [jsx("div", {
          className: nO,
          children: e.isMixed ? jsx("div", {
            children: renderI18nText("common.mixed")
          }) : o && jsx(oW, {
            style: {
              width: "100%"
            },
            src: o,
            alt: brush.name
          })
        }), jsx("div", {
          className: FH,
          children: jsx(_$$r, {})
        })]
      })
    })]
  });
});
export const i = $$et0;