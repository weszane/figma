import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useRef, forwardRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import u from "../vendor/241899";
import { useHandleKeyboardEvent, SKIP_RECORDING, generateRecordingKey } from "../figma_app/878298";
import { Point } from "../905/736624";
import { WAFImage } from "../905/675859";
import { renderI18nText, getI18nString } from "../905/303541";
import { Yl, j4, W3 } from "../905/232641";
import { getVisibleTheme } from "../905/640017";
import { normalizeValue, isInvalidValue, isValidValue } from "../905/216495";
import { useSceneGraphSelection } from "../figma_app/722362";
import { vE, W as _$$W, UH, Lk } from "../figma_app/156285";
import { useSingleEffect } from "../905/791079";
import { UpgradeAction } from "../905/370443";
import { e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { SAW } from "../figma_app/6204";
import { yl } from "../figma_app/947348";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Fullscreen, DistributionType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { useDebouncedCallback } from "use-debounce";
import { parsePxNumber } from "../figma_app/783094";
import { P as _$$P } from "../905/347284";
import { fullscreenValue } from "../figma_app/455680";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { A as _$$A2 } from "../905/215698";
import { l as _$$l } from "../905/479687";
import { useAtomWithSubscription } from "../figma_app/27355";
import { KindEnum } from "../905/129884";
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
  useSingleEffect(() => {
    show({
      canShow: () => r
    });
  });
  let a = {
    type: "button",
    label: renderI18nText("draw.onboarding.dismiss_button"),
    onClick: complete,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  };
  let s = {
    type: "link",
    label: renderI18nText("draw.onboarding.first_time.learn_more"),
    href: "https://help.figma.com/hc/articles/31440438150935",
    ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
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
    s !== brush.name && "" !== s && (permissionScopeHandler.user("rename-brush", () => Fullscreen.renameNode(brush.guid, s)), fullscreenValue.triggerAction("commit"));
  }, [brush.guid, brush.name, s, stopRenaming]);
  let d = useHandleKeyboardEvent(e.recordingKey, "keydown", e => {
    if ("Tab" === e.key || "Enter" === e.key) l();else {
      if ("Escape" !== e.key) return SKIP_RECORDING;
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
      onFocus: e => (e.stopPropagation(), e.target.select(), o(e.target.value), SKIP_RECORDING),
      onKeyDown: d,
      recordingKey: generateRecordingKey(e.recordingKey, "brushName"),
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
  } = setupMenu();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": getI18nString("fullscreen.properties_panel.edit_brush"),
      htmlAttributes: {
        "data-tooltip": getI18nString("fullscreen.properties_panel.edit_brush"),
        "data-tooltip-type": KindEnum.TEXT
      },
      ...getTriggerProps(),
      children: jsx(_$$A2, {})
    }), jsxs(MenuContainerComp, {
      children: [jsx(MenuItemComp, {
        onClick: e.onStartRenamingBrush,
        children: jsx(Fragment, {
          children: getI18nString("fullscreen.properties_panel.rename_brush")
        })
      }), jsx(MenuItemComp, {
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
  let s = useSceneGraphSelection();
  let o = useAtomWithSubscription(vE);
  let l = _$$W(brush.guid);
  return jsxs("div", {
    className: c()(RW, {
      [wH]: selected
    }),
    children: [jsx(ButtonPrimitive, {
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
          children: l && jsx(WAFImage, {
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
          recordingKey: generateRecordingKey(e.recordingKey, "rename"),
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
  } = useMemo(() => brushes.reduce((e, t) => (t.type === DistributionType.SCATTER ? e.scatterBrushes.push(t) : e.stretchBrushes.push(t), e), {
    stretchBrushes: [],
    scatterBrushes: []
  }), [brushes]);
  let [g, y] = useState(selectedBrush);
  let b = useMemo(() => {
    let e = (g.type === DistributionType.SCATTER ? scatterBrushes : stretchBrushes).findIndex(e => e.guid === g?.guid);
    -1 === e && (e = 0);
    return e;
  }, [scatterBrushes, stretchBrushes, g]);
  let I = useCallback((e, t) => {
    onChange(e, t);
  }, [onChange]);
  let E = useDebouncedCallback(t => {
    previewEnabled && t.guid !== e.selectedBrush?.guid && I(t, yesNoTrackingEnum.NO);
  }, 100);
  let x = useCallback(() => {
    previewEnabled && (E.cancel(), I(g, yesNoTrackingEnum.NO));
  }, [previewEnabled, E, g, I]);
  let S = useCallback(e => {
    x();
    y(e);
    I(e, yesNoTrackingEnum.YES);
  }, [x, y, I]);
  let w = useCallback(e => {
    permissionScopeHandler.user("delete-brush", () => {
      let t = getSingletonSceneGraph().get(e.guid);
      t && (x(), t.guid === g.guid ? S(Lk) : t.guid === selectedBrush.guid && I(g, yesNoTrackingEnum.NO), t.removeSelfAndChildren(), fullscreenValue.commit());
    });
  }, [g, x, I, selectedBrush, S]);
  let [C, T] = useState(null);
  let k = "dark" === getVisibleTheme();
  let R = useCallback(e => jsx(X, {
    brush: e,
    isRenaming: e.guid === C,
    onBrushClick: e => {
      S(e);
      onClose();
    },
    onDeleteBrush: () => w(e),
    onPreview: E,
    recordingKey: generateRecordingKey(recordingKey, "brushRow", e.name),
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
    let e = (g.type === DistributionType.SCATTER ? stretchBrushes.length + b : b) * Q;
    return getFeatureFlags().ce_il_scatter ? e + (g.type === DistributionType.STRETCH ? 1 : 2) * J - (0 === b ? J : 0) - 30 : e - 30;
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
    children: jsxs(DialogContents, {
      className: c()(g5, {
        [gW]: k
      }),
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("fullscreen.properties_panel.brushes")
        })
      }), jsx(DialogBody, {
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
  let c = normalizeValue(value);
  let u = useMemo(() => brushList.filter(e => !e.isSoftDeleted || e.guid === sessionLocalIDToString(c)), [brushList, c]);
  let g = useRef(null);
  let f = !function () {
    let e = useSceneGraphSelection();
    return useMemo(() => 0 === Object.keys(e).length, [e]);
  }();
  let A = useMemo(() => u.find(e => e.guid === sessionLocalIDToString(c)) ?? Lk, [u, c]);
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
      isMixed: isInvalidValue(value),
      onboardingKey
    }), I && jsx(ee, {
      brushes: u,
      onChange,
      positioningProps,
      onClose: () => E(!1),
      selectedBrush: A,
      previewEnabled: f && isValidValue(value),
      recordingKey: generateRecordingKey(e.recordingKey, "brushList")
    })]
  });
}
let ei = forwardRef((e, t) => {
  let {
    brush
  } = e;
  let r = "dark" === getVisibleTheme();
  let o = _$$W(brush.guid);
  return jsxs(Fragment, {
    children: [getFeatureFlags().ce_il_scatter_onboarding && e.onboardingKey && jsx(R, {}), jsx("div", {
      className: c()(e.className, {
        [gW]: r
      }),
      ref: t,
      children: jsxs(ButtonPrimitive, {
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
          }) : o && jsx(WAFImage, {
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