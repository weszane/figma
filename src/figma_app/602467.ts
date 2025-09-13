import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useContext, useRef, useMemo, memo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { U1 } from "../figma_app/343967";
import { K as _$$K } from "../905/443068";
import { bL } from "../905/911410";
import { vo, Y9, hE, jk, nB } from "../figma_app/272243";
import { L as _$$L } from "../905/704296";
import { T as _$$T } from "../905/2124";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription, AY } from "../figma_app/27355";
import h from "classnames";
import { useLatestRef } from "../figma_app/922077";
import { generateRecordingKey } from "../figma_app/878298";
import { Point } from "../905/736624";
import { linkWithTracking } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { In } from "../905/672640";
import { fullscreenValue } from "../figma_app/455680";
import { F as _$$F } from "../figma_app/482495";
import { KindEnum } from "../905/129884";
import { Yh } from "../figma_app/357047";
import { PE } from "../figma_app/251115";
import { JT } from "../figma_app/632248";
import { B3, qy, wj } from "../figma_app/862289";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { iV, YH } from "../figma_app/604494";
import { w as _$$w } from "../figma_app/588564";
import { v as _$$v } from "../figma_app/759243";
import { nG } from "../figma_app/967857";
import { qM } from "../figma_app/913518";
import { Zz, o2, fG } from "../figma_app/667212";
import { u as _$$u } from "../figma_app/913494";
import { G as _$$G } from "../figma_app/682672";
import { DX, l3, FT } from "../figma_app/798540";
import { ButtonPrimitive } from "../905/632989";
import { m as _$$m } from "../905/886380";
import { getLocaleFallbacks } from "../figma_app/169182";
import { fp, fm, uG, Ib as _$$Ib, cR, JU, h$, Os, PF, xf, Jp, p$, Cw, cx, o$ } from "../figma_app/955528";
import { SO, Ff } from "../figma_app/15042";
var m = h;
function x(e, t) {
  let {
    numCols,
    wrapType
  } = t;
  let a = useCallback((e, t) => {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
    let i = Array.from(t.children);
    let a = i.findIndex(e => e === document.activeElement);
    if (-1 === a) return;
    let s = Math.ceil(i.length / numCols);
    let o = i[function (e, t, r, n, i) {
      let a = Math.floor(t / n);
      let s = t % n;
      switch (e) {
        case "ArrowUp":
          -1 == --a && "sameRowOrCol" === i && (a = r - 1);
          break;
        case "ArrowDown":
          ++a === r && "sameRowOrCol" === i && (a = 0);
          break;
        case "ArrowRight":
          ++s === n && ("sameRowOrCol" === i ? s = 0 : "nextRow" === i && (s = 0, ++a === r && (a = 0)));
          break;
        case "ArrowLeft":
          -1 == --s && ("sameRowOrCol" === i ? s = n - 1 : "nextRow" === i && (s = n - 1, -1 == --a && (a = r - 1)));
      }
      a = Math.max(0, Math.min(r - 1, a));
      s = Math.max(0, Math.min(n - 1, s));
      return a * n + s;
    }(e.key, a, s, numCols, wrapType)];
    o instanceof HTMLElement && o.focus();
  }, [numCols, wrapType]);
  useEffect(() => {
    let t = e.current;
    if (!t) return;
    let r = e => a(e, t);
    t.addEventListener("keydown", r);
    return () => t.removeEventListener("keydown", r);
  }, [e, a]);
}
function W(e) {
  let {
    onClick,
    toggled,
    recordingKey,
    children
  } = e;
  return jsx(ButtonPrimitive, {
    className: m()("slides_rewrite_toggle_button--presetButton--5vrax", {
      "slides_rewrite_toggle_button--toggled--HPAli": toggled
    }),
    onClick,
    recordingKey,
    children
  });
}
let X = "slides_rewrite_tone_dial--grid--BdFH2";
let q = "slides_rewrite_tone_dial--layerOverlay--of9-9";
function J({
  autoFocus: e = !1
}) {
  return jsxs("div", {
    className: "slides_rewrite_tone_dial--container--exlMg",
    children: [jsx(Z, {
      autoFocus: e
    }), jsx(et, {}), jsx(er, {})]
  });
}
function Z({
  autoFocus: e = !1
}) {
  let {
    setPositionAndRun
  } = useContext(_$$u);
  let r = useRef(null);
  x(r, {
    numCols: 3
  });
  let a = useCallback((e, n) => {
    if (!r.current) return;
    let {
      clientX,
      clientY
    } = e;
    setPositionAndRun(clientX && clientY ? fp(clientX, clientY, r.current.getBoundingClientRect()) : n, {
      source: "grid_click"
    });
  }, [setPositionAndRun]);
  let s = useMemo(() => [{
    pos: [-1, 1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_professional_concise")
  }, {
    pos: [0, 1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_professional")
  }, {
    pos: [1, 1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_professional_expanded")
  }, {
    pos: [-1, 0],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_concise")
  }, {
    pos: [0, 0],
    label: getI18nString("slides.properties_panel.rewrite_text.reset")
  }, {
    pos: [1, 0],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_expanded")
  }, {
    pos: [-1, -1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_casual_concise")
  }, {
    pos: [0, -1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_casual")
  }, {
    pos: [1, -1],
    label: getI18nString("slides.properties_panel.rewrite_text.tone_casual_expanded")
  }].map(({
    pos: [e, t],
    label: r
  }) => {
    let i = `(${e},${t})`;
    let s = [e * Zz, t * Zz];
    let o = 0 === e && 0 === t ? Q : ee;
    return jsx(o, {
      onClick: e => a(e, s),
      ariaLabel: r
    }, i);
  }), [a]);
  useEffect(() => {
    e && r.current?.focus();
  }, [e]);
  return jsx("div", {
    className: m()(X, "slides_rewrite_tone_dial--gridLayer--mhWQF"),
    ref: r,
    tabIndex: -1,
    "aria-label": getI18nString("slides.properties_panel.rewrite_text.tone_grid"),
    role: "group",
    children: s
  });
}
function Q(e) {
  let {
    tonePosition,
    canResetTone
  } = useContext(_$$u);
  let [a, s] = t;
  let o = Math.abs(a) < fm && Math.abs(s) < fm;
  let l = canResetTone && {
    "aria-label": getI18nString("slides.properties_panel.rewrite_text.reset"),
    "data-tooltip": getI18nString("slides.properties_panel.rewrite_text.reset"),
    "data-tooltip-type": "text",
    "data-tooltip-offset-y": 20,
    "data-tooltip-show-above": !0
  };
  return jsx(ee, {
    ...e,
    ...l,
    children: jsx(_$$m, {
      className: m()("slides_rewrite_tone_dial--resetIcon--RMSRg", {
        "slides_rewrite_tone_dial--hovering---Zuqf": o,
        "slides_rewrite_tone_dial--visible--oHQ3n": canResetTone
      })
    })
  });
}
function ee(e) {
  let {
    ariaLabel,
    ...r
  } = e;
  return jsx("button", {
    className: "slides_rewrite_tone_dial--gridCell--NBFxs",
    "aria-label": ariaLabel,
    ...r
  });
}
function et() {
  let {
    tonePosition
  } = useContext(_$$u);
  let [t, r] = e;
  let a = "ja" === getLocaleFallbacks()[0];
  let s = r > fm;
  let o = t > fm;
  let l = r < -fm;
  let d = t < -fm;
  let c = (e, t, r) => m()("slides_rewrite_tone_dial--label--7p8gg", e, {
    "slides_rewrite_tone_dial--highlighted--2uaO1": t,
    "slides_rewrite_tone_dial--japaneseLeftLabel--9UVf2": r
  });
  return jsxs("div", {
    className: m()(X, q),
    "aria-hidden": !0,
    children: [jsx("div", {
      className: c("slides_rewrite_tone_dial--top--Gmg5H", s),
      children: renderI18nText("slides.properties_panel.rewrite_text.tone_professional")
    }), jsx("div", {
      className: c("slides_rewrite_tone_dial--right--mSpd2", o),
      children: renderI18nText("slides.properties_panel.rewrite_text.tone_expanded")
    }), jsx("div", {
      className: c("slides_rewrite_tone_dial--bottom--ST24k", l),
      children: renderI18nText("slides.properties_panel.rewrite_text.tone_casual")
    }), jsx("div", {
      className: c("slides_rewrite_tone_dial--left--rkVeC", d, a),
      children: renderI18nText("slides.properties_panel.rewrite_text.tone_concise")
    })]
  });
}
function er() {
  let {
    tonePosition
  } = useContext(_$$u);
  let t = useRef(null);
  let {
    onMouseDown,
    isDragging
  } = uG(t);
  let s = useMemo(() => {
    let [t, r] = tonePosition.map(e => (e + 1) / 2).map(e => `${100 * e}%`);
    return {
      left: t,
      bottom: r
    };
  }, [tonePosition]);
  return jsx("div", {
    className: q,
    ref: t,
    "aria-hidden": !0,
    children: jsx("button", {
      className: m()("slides_rewrite_tone_dial--dial--o-ejL", {
        "slides_rewrite_tone_dial--dragging--N345O": isDragging
      }),
      style: s,
      onMouseDown,
      tabIndex: -1
    })
  });
}
let $$ei0 = memo(function () {
  let e = Xr(qM);
  let t = useSelector(e => e.mirror.appModel.showUi);
  let r = useSelector(e => Yh(e.mirror.appModel, JT.SLIDES_REWRITE_TEXT));
  let l = U1();
  return (useEffect(() => (B3(JT.SLIDES_REWRITE_TEXT), () => {
    B3(JT.SLIDES_REWRITE_TEXT);
  }), []), t && r) ? jsxs("div", {
    className: SO,
    ref: l,
    "data-testid": "figjam-tone-dial",
    children: [jsxs("div", {
      className: _$$s.flex.gap8.itemsCenter.p8.pl16.bb1.bSolid.colorBorder.$,
      children: [jsx("div", {
        className: _$$s.textBodyMediumStrong.flex1.$,
        children: renderI18nText("slides.properties_panel.rewrite_text.adjust_tone")
      }), jsx(_$$v, {
        location: "SLIDES_REWRITE_MODAL"
      }), jsx(_$$K, {
        "aria-label": getI18nString("common.close"),
        onClick: () => {
          e(!1);
        },
        children: jsx(_$$L, {})
      })]
    }), jsx(_$$P, {
      className: Ff,
      children: jsx("div", {
        className: _$$s.p16.$,
        children: jsx(es, {
          recordingKey: "figjamToneDial"
        })
      })
    })]
  }) : null;
});
let $$ea1 = memo(function ({
  onClose: e
}) {
  let t = useAtomWithSubscription(_$$F);
  let r = new Point(t?.initialX, t?.initialY);
  useEffect(() => (B3(JT.SLIDES_REWRITE_TEXT), () => {
    B3(JT.SLIDES_REWRITE_TEXT);
  }), []);
  return jsx(bL, {
    defaultPosition: r,
    width: 240,
    onClose: e,
    draggable: "header",
    children: jsxs(vo, {
      children: [jsxs(Y9, {
        children: [jsx(hE, {
          children: renderI18nText("slides.properties_panel.rewrite_text.adjust_tone")
        }), jsx(jk, {
          children: jsx(_$$v, {
            location: "SLIDES_REWRITE_MODAL"
          })
        })]
      }), jsx(nB, {
        children: jsx(es, {
          recordingKey: "slidesToneDial"
        })
      })]
    })
  });
});
let es = memo(function ({
  recordingKey: e
}) {
  let {
    tonePosition,
    setTonePosition
  } = _$$Ib();
  let [a, s] = useState(() => tonePosition);
  let {
    originalNodeInfos,
    saveOriginalNodeInfos,
    resetOriginalNodeInfos,
    revertNodeToOriginalNodeInfo
  } = cR(o2);
  let {
    slidesTextResizeCallback
  } = DX(JT.SLIDES_REWRITE_TEXT, o2);
  let {
    shiftAllNodesOutOfSlideMargins,
    resetShiftedNodes,
    resetNodePositionMap
  } = l3(o2);
  let m = FT(revertNodeToOriginalNodeInfo, shiftAllNodesOutOfSlideMargins, slidesTextResizeCallback);
  let f = useCallback(() => {
    setTonePosition(a);
  }, [a, setTonePosition]);
  let E = useCallback(({
    tones: e
  }) => {
    s(JU(e));
  }, []);
  let {
    enqueueRun,
    lastParameters,
    longRunningAction,
    cancel
  } = h$(saveOriginalNodeInfos, m, f, E);
  let v = useCallback(() => {
    lastParameters && "tones" in lastParameters && (setTonePosition(JU(lastParameters.tones)), enqueueRun(lastParameters));
  }, [enqueueRun, lastParameters, setTonePosition]);
  Os(v);
  PF(longRunningAction.state, () => {
    resetOriginalNodeInfos();
    resetNodePositionMap();
    setTonePosition([0, 0]);
    s([0, 0]);
    B3(JT.SLIDES_REWRITE_TEXT);
  });
  xf(tonePosition, () => {
    resetOriginalNodeInfos();
    resetNodePositionMap();
    s([0, 0]);
    B3(JT.SLIDES_REWRITE_TEXT);
  });
  Jp(longRunningAction.state);
  let x = useCallback((e, t) => {
    setTonePosition(e);
    let n = p$(e);
    if (longRunningAction.state === qy.RUNNING && cancel(), !n?.length) {
      Cw(originalNodeInfos, revertNodeToOriginalNodeInfo);
      resetShiftedNodes();
      resetNodePositionMap();
      setTonePosition([0, 0]);
      s([0, 0]);
      B3(JT.SLIDES_REWRITE_TEXT);
      _$$G({
        eventName: "reset",
        source: t.source
      });
      fullscreenValue.commit();
      return;
    }
    enqueueRun({
      tones: n
    });
    _$$G({
      eventName: "ran_rewrite",
      tones: n.map(e => e.tone).join(", "),
      source: t.source,
      preset: t.preset
    });
  }, [cancel, enqueueRun, longRunningAction.state, originalNodeInfos, resetNodePositionMap, resetShiftedNodes, revertNodeToOriginalNodeInfo, setTonePosition]);
  let [N, C] = useState(!1);
  let {
    state
  } = wj(JT.SLIDES_REWRITE_TEXT);
  let O = useLatestRef(state);
  useEffect(() => {
    state === qy.INITIAL ? C(!1) : O === qy.RUNNING && state !== qy.RUNNING && C(!0);
  }, [O, state]);
  let P = useMemo(() => ({
    tonePosition,
    canResetTone: N,
    setTonePosition,
    setPositionAndRun: x
  }), [x, tonePosition, setTonePosition, N]);
  return jsx("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    children: jsxs(_$$u.Provider, {
      value: P,
      children: [jsx(J, {}), jsx(eo, {
        recordingKey: e
      }), jsx(el, {})]
    })
  });
});
function eo({
  recordingKey: e
}) {
  let {
    tonePosition,
    setPositionAndRun
  } = useContext(_$$u);
  let s = useAtomWithSubscription(iV(Sn.REWRITE));
  let l = useDispatch();
  let d = useRef(null);
  x(d, {
    numCols: 2
  });
  let c = AY(YH);
  let h = i => {
    let {
      localizedText,
      position,
      trackingText
    } = fG[i];
    let d = cx(position);
    let c = shallowEqual(tonePosition, d);
    return jsx(W, {
      toggled: c,
      onClick: () => setPositionAndRun(d, {
        source: "preset",
        preset: trackingText
      }),
      recordingKey: generateRecordingKey(e, "presets", trackingText),
      children: localizedText
    });
  };
  let m = PE();
  let g = getFeatureFlags().qa_text_features && m;
  return jsxs("div", {
    children: [jsxs("div", {
      className: _$$s.flex.justifyBetween.itemsCenter.mb16.textBodyMedium.colorTextSecondary.$,
      children: [g ? renderI18nText("slides.properties_panel.rewrite_text.or_pick_a_preset_or_rewrite") : renderI18nText("slides.properties_panel.rewrite_text.or_pick_a_preset"), g && jsx(_$$K, {
        "aria-label": getI18nString("slides.properties_panel.rewrite_text.rewrite_redirect"),
        onClick: () => {
          s || (c(), $I({
            moduleToOpen: {
              type: "custom",
              module: jsx(_$$w, {}),
              name: Sn.REWRITE,
              beforeModuleOpen: () => {
                B3(JT.REWRITE_TEXT);
              }
            },
            trackingData: {
              source: "slides_adjust_tone_rewrite_view"
            }
          }));
          o$(l);
        },
        htmlAttributes: {
          "data-tooltip": getI18nString("slides.properties_panel.rewrite_text.rewrite_redirect"),
          "data-tooltip-type": "text",
          "data-tooltip-show-above": !0,
          "data-testid": "rewrite-this-transition-button"
        },
        children: jsx(_$$T, {})
      })]
    }), jsxs("div", {
      ref: d,
      className: _$$s.grid.gap8.gridTemplateColumns2.gridTemplateRows2.$,
      "aria-label": getI18nString("slides.properties_panel.rewrite_text.tone_presets"),
      role: "group",
      children: [h("executive"), h("technical"), h("basic"), h("educational")]
    })]
  });
}
function el() {
  return jsxs("div", {
    className: _$$s.textBodySmall.colorTextSecondary.fontNormal.overflowBreakWord.$,
    children: [renderI18nText("whiteboard.ai_modal.disclaimer"), jsx(linkWithTracking, {
      trusted: !0,
      href: nG,
      className: m()(_$$s.inlineBlock.cursorDefault.$, "slides_rewrite_modal--disclaimerLink--a2jK5"),
      style: sx.add({
        verticalAlign: "bottom"
      }).$,
      target: "_blank",
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("whiteboard.ai_modal.learn_more"),
      "aria-label": getI18nString("whiteboard.ai_modal.learn_more"),
      innerText: "learn more",
      children: jsx(In, {
        icon: "info-16",
        fill: "secondary"
      })
    })]
  });
}
export const vB = $$ei0;
export const _B = $$ea1;