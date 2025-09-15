import { jsx } from "react/jsx-runtime";
import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { postUserFlag } from "../905/985254";
import { E as _$$E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { NT, g5 } from "../figma_app/579169";
import { selectCurrentFile, useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { Lh, D8, WO } from "../figma_app/242339";
import { N as _$$N } from "../figma_app/268271";
import { WD4 } from "../figma_app/6204";
import { renderI18nText } from "../905/303541";
import { uM } from "../905/738636";
import { c as _$$c } from "../905/370443";
import { getNewFileConfig } from "../905/766303";
import { oe, RJ, I7 } from "../figma_app/630951";
import { aV } from "../figma_app/722362";
import { FFileType } from "../figma_app/191312";
import { ai, f6 } from "../figma_app/915202";
import { VF, uY, TG } from "../figma_app/989514";
import { K as _$$K } from "../figma_app/605682";
import { J as _$$J } from "../figma_app/553179";
import { e as _$$e2 } from "../figma_app/278289";
import { P as _$$P, B as _$$B } from "../figma_app/846647";
import { Fullscreen, UserInterfaceElements } from "../figma_app/763686";
import { FP } from "../figma_app/91703";
import { clearSelection } from "../figma_app/741237";
import { F_, EL } from "../905/858282";
import { en as _$$en, aD, wy, eN, zU, nt, l7, d4 as _$$d } from "../figma_app/202626";
import { getSingletonSceneGraph } from "../905/700578";
import { Vr } from "../figma_app/151869";
import { Z as _$$Z } from "../figma_app/731770";
import { iF } from "../figma_app/511910";
import { alwaysFalseCallback2 } from "../figma_app/275462";
import { h as _$$h } from "../905/207101";
import { Z as _$$Z2 } from "../905/104740";
import { F_ as _$$F_ } from "../905/748636";
import { e as _$$e3 } from "../5132/291975";
import { aE } from "../figma_app/433401";
function R(e) {
  useEffect(() => {
    Fullscreen.triggerAction("set-tool-type", null);
  }, []);
  return jsx(VF, {
    dismissModal: e.onClose,
    disableHighlight: !0,
    targetKey: "tool-type-onboarding",
    title: renderI18nText("tooltips_plus_onboarding.text_step.title"),
    trackingContextName: "Tooltips+ Text Step",
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps,
      useLoadingBar: e.useLoadingBar
    }),
    onPrimaryCtaClick: () => {
      Fullscreen.triggerActionInUserEditScope("set-tool-default", null);
      e.onNext();
    },
    onSecondaryCtaClick: e.onPrevious,
    pointsTo: "toolbar",
    children: renderI18nText("tooltips_plus_onboarding.text_step.description")
  });
}
function k(e) {
  let t = useDispatch();
  let r = renderI18nText("tooltips_plus_onboarding.ui_kits_ending_step.title");
  let s = renderI18nText("tooltips_plus_onboarding.ui_kits_ending_step.description");
  let o = "UI Kits";
  e.forStartingPoints && (r = renderI18nText("starting_points_onboarding.assets_step.title"), s = renderI18nText("starting_points_onboarding.assets_step.description", {
    strongAssets: jsx("strong", {
      style: {
        display: "contents"
      },
      children: renderI18nText("design_systems.assets_panel.assets")
    })
  }));
  oe() && (r = renderI18nText("tooltips_plus_onboarding.assets_ending_step.title"), s = renderI18nText("tooltips_plus_onboarding.assets_ending_step.description", {
    strongAssets: jsx("strong", {
      style: {
        display: "contents"
      },
      children: renderI18nText("design_systems.assets_panel.assets")
    })
  }), o = "Assets");
  useEffect(() => {
    clearSelection();
    t(FP({
      tab: UserInterfaceElements.ASSETS
    }));
  }, [t]);
  return jsx(VF, {
    arrowPosition: F_.LEFT_TITLE,
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps,
      useLoadingBar: e.useLoadingBar
    }),
    onPrimaryCtaClick: e.onPrimaryCtaClick,
    onSecondaryCtaClick: () => {
      t(FP({
        tab: UserInterfaceElements.LAYERS
      }));
      e.onSecondaryCtaClick();
    },
    pointsTo: "leftPanel",
    primaryCtaProps: e.primaryCtaProps,
    targetKey: RJ,
    title: r,
    trackingContextName: e.forStartingPoints ? "Starting Points Assets Step" : `Tooltips+ ${o} Ending Step`,
    children: s
  });
}
let F = {
  NAV: "figma_basics_tooltips_nav_step",
  FRAME: "figma_basics_tooltips_frame_step",
  TEXT: "figma_basics_tooltips_text_step",
  FORMAT_TEXT: "figma_basics_tooltips_format_text_step",
  DESIGN_PANEL: "figma_basics_tooltips_design_panel_step",
  PRESETS_ENDING: "figma_basics_tooltips_presets_ending_step",
  UI_KITS_ENDING: "figma_basics_tooltips_ui_kits_ending_step"
};
function j({
  completeOverlay: e
}) {
  let t = useDispatch();
  let r = useStore();
  let s = _$$f("figma_basics_tooltips_onboarding");
  let l = _$$f(F.FRAME);
  let d = _$$f(F.TEXT);
  let c = _$$f(F.FORMAT_TEXT);
  let u = _$$f(F.DESIGN_PANEL);
  let p = _$$f(F.UI_KITS_ENDING);
  let h = !!_$$f("started_figma_basics_onboarding");
  let m = aV();
  let [g, O] = useState(_$$en.FORWARD);
  let L = useSelector(e => e.mirror.sceneGraph);
  let {
    hasAnyUiKit
  } = I7();
  let D = hasAnyUiKit && !p;
  let j = [D].reduce((e, t) => t ? e + 1 : e, 4);
  let U = (e, r = _$$en.FORWARD) => {
    O(r);
    t(postUserFlag({
      [e]: !0
    }));
  };
  let B = (e, r = _$$en.BACKWARD) => {
    O(r);
    t(postUserFlag({
      [e]: !1
    }));
  };
  let G = () => {
    e();
    t(postUserFlag({
      figma_basics_tooltips_onboarding: !0
    }));
  };
  return (useEffect(() => {
    s || m || h || t(postUserFlag({
      started_figma_basics_onboarding: !0
    }));
  }, [m, s, t, h]), s || m) ? null : l ? d ? c ? u ? D ? jsx(k, {
    onPrimaryCtaClick: () => U(hasAnyUiKit ? F.UI_KITS_ENDING : F.PRESETS_ENDING),
    onSecondaryCtaClick: () => B(F.DESIGN_PANEL),
    onClose: G,
    currentStepNum: 5,
    totalNumSteps: j,
    primaryCtaProps: {
      ctaText: renderI18nText("tooltips_plus_onboarding.done"),
      ctaTrackingDescriptor: _$$c.DONE
    }
  }) : jsx(_$$J, {
    onPrimaryCtaClick: () => {
      let e = getNewFileConfig({
        state: r.getState(),
        openNewFileIn: ai.NEW_TAB,
        folderOverride: "drafts",
        trackingInfo: {
          from: f6.DESIGN_TOOLTIPS_PLUS_OUTRO_MODAL,
          selectedView: r.getState().selectedView
        },
        editorType: FFileType.DESIGN
      });
      t(uM(e));
      G();
    },
    onSecondaryCtaClick: G,
    onClose: G
  }) : jsx(_$$K, {
    onNext: () => U(F.DESIGN_PANEL),
    onPrevious: () => B(F.FORMAT_TEXT),
    onClose: G,
    currentStepNum: 4,
    totalNumSteps: j,
    getNodeToSelect: () => aD(L),
    flowDirection: g
  }) : jsx(_$$P, {
    onPrimaryCtaClick: () => U(F.FORMAT_TEXT),
    onSecondaryCtaClick: () => B(F.TEXT),
    onClose: G,
    lowerLeftText: jsx(uY, {
      currentStepNum: 3,
      totalNumSteps: j
    }),
    skip: () => {
      g === _$$en.FORWARD ? U(F.FORMAT_TEXT) : B(F.TEXT);
    },
    getNodeToSelect: () => wy(L)
  }) : jsx(R, {
    onNext: () => U(F.TEXT),
    onPrevious: () => B(F.FRAME),
    onClose: G,
    currentStepNum: 2,
    totalNumSteps: j
  }) : jsx(_$$e2, {
    onPrimaryCtaClick: () => U(F.FRAME),
    onClose: G,
    currentStepNum: 1,
    hideCloseButton: !0,
    totalNumStep: j
  });
}
function z(e) {
  let t = useDispatch();
  let r = alwaysFalseCallback2()() ? renderI18nText("tooltips_plus_onboarding.ui_kits_and_icon_packs_step.title") : renderI18nText("tooltips_plus_onboarding.ui_kits_step.title");
  let s = renderI18nText("tooltips_plus_onboarding.ui_kits_step.description");
  let o = "UI Kits";
  oe() && (r = renderI18nText("tooltips_plus_onboarding.assets_step.title"), s = renderI18nText("tooltips_plus_onboarding.assets_step.description"), o = "Assets");
  useEffect(() => {
    t(FP({
      tab: UserInterfaceElements.ASSETS
    }));
  }, [t]);
  return jsx(VF, {
    dismissModal: e.onClose,
    disableHighlight: !0,
    targetKey: RJ,
    title: r,
    trackingContextName: `Tooltips+ ${o} Step`,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps,
      useLoadingBar: e.useLoadingBar
    }),
    onPrimaryCtaClick: () => {
      t(FP({
        tab: UserInterfaceElements.LAYERS
      }));
      e.onNext();
    },
    arrowPosition: F_.LEFT_TITLE,
    pointsTo: "leftPanel",
    children: s
  });
}
let W = {
  FRAME: "no_figma_basics_tooltips_frame_step",
  TEXT: "no_figma_basics_tooltips_text_step",
  FORMAT_TEXT: "no_figma_basics_tooltips_format_text_step",
  DESIGN_PANEL: "no_figma_basics_tooltips_design_panel_step",
  PRESETS: "no_figma_basics_tooltips_presets_step",
  PRESETS_ENDING: "no_figma_basics_tooltips_presets_ending_step",
  UI_KITS: "no_figma_basics_tooltips_ui_kits_step",
  UI_KITS_ENDING: "no_figma_basics_tooltips_ui_kits_ending_step",
  PANNING_AND_ZOOMING_GLOW_OVERLAY: "no_figma_basics_panning_and_zooming_overlay",
  PANNING_AND_ZOOMING_TOOLTIP: "dismissed_no_figma_basics_panning_and_zooming_tooltip"
};
function K({
  completeOverlay: e
}) {
  let t = useDispatch();
  let r = _$$f("no_figma_basics_tooltips_onboarding");
  let s = aV();
  let [l, d] = useState(_$$en.FORWARD);
  let c = _$$f(W.FRAME);
  let u = _$$f(W.TEXT);
  let p = _$$f(W.FORMAT_TEXT);
  let h = _$$f(W.DESIGN_PANEL);
  let m = _$$f(W.UI_KITS);
  let g = _$$f(W.UI_KITS_ENDING);
  let {
    hasAnyUiKit,
    status
  } = I7();
  let S = hasAnyUiKit && !m;
  let v = hasAnyUiKit && !g;
  let x = [hasAnyUiKit].reduce((e, t) => t ? e + 1 : e, 4);
  let N = Vr();
  let O = () => eN(getSingletonSceneGraph(), "TEXT", N);
  let L = (e, r = _$$en.FORWARD) => {
    d(r);
    t(postUserFlag({
      [e]: !0
    }));
  };
  let P = (e, r = _$$en.BACKWARD) => {
    d(r);
    t(postUserFlag({
      [e]: !1
    }));
  };
  let D = (e, t) => {
    l === _$$en.FORWARD ? L(t) : P(e);
  };
  let F = useCallback(() => {
    e();
    t(postUserFlag({
      no_figma_basics_tooltips_onboarding: !0
    }));
  }, [e, t]);
  return r || s || "loading" === status ? null : jsx("div", {
    "data-testid": "no-figma-basics-step",
    children: (() => {
      if (S) return jsx(z, {
        onNext: () => L(hasAnyUiKit ? W.UI_KITS : W.PRESETS),
        onClose: F,
        currentStepNum: 1,
        totalNumSteps: x,
        useLoadingBar: !0
      });
      if (c) {
        if (!h) return jsx(_$$Z, {
          onPrimaryCtaClick: () => L(W.DESIGN_PANEL),
          onSecondaryCtaClick: () => P(W.FRAME),
          onClose: F,
          skip: () => D(W.FRAME, W.DESIGN_PANEL)
        });
        if (!u) return jsx(R, {
          onNext: () => L(W.TEXT),
          onPrevious: () => P(W.DESIGN_PANEL),
          onClose: F,
          currentStepNum: 3,
          totalNumSteps: x,
          useLoadingBar: !0
        });
        if (!p) return jsx(_$$P, {
          onPrimaryCtaClick: () => L(W.FORMAT_TEXT),
          onSecondaryCtaClick: () => P(W.TEXT),
          onClose: F,
          lowerLeftText: jsx(uY, {
            currentStepNum: 4,
            totalNumSteps: x,
            useLoadingBar: !0
          }),
          skip: () => {
            l === _$$en.FORWARD ? L(W.FORMAT_TEXT) : P(W.TEXT);
          },
          getNodeToSelect: O
        });else if (v) return jsx(k, {
          onPrimaryCtaClick: () => L(hasAnyUiKit ? W.UI_KITS_ENDING : W.PRESETS_ENDING),
          onSecondaryCtaClick: () => P(W.FORMAT_TEXT),
          onClose: F,
          currentStepNum: 5,
          totalNumSteps: x,
          useLoadingBar: !0,
          primaryCtaProps: {
            ctaText: renderI18nText("tooltips_plus_onboarding.done"),
            ctaTrackingDescriptor: _$$c.DONE
          }
        });else return jsx(iF, {
          markComplete: F
        });
      }
      {
        let e = hasAnyUiKit ? () => P(W.UI_KITS) : void 0;
        return jsx(_$$e2, {
          currentStepNum: 1,
          totalNumStep: x,
          onPrimaryCtaClick: () => L(W.FRAME),
          onSecondaryCtaClick: e,
          onClose: F,
          skip: () => {
            D(W.PRESETS, W.FRAME);
          },
          useLoadingBar: !0,
          hasUiKits: hasAnyUiKit
        });
      }
    })()
  });
}
function X(e) {
  let [t, r] = useState(!1);
  let a = _$$Z2();
  let s = useRef(null);
  let o = e.getNodeForViewportFocus?.();
  let l = e.getNodeToSelect();
  _$$h(() => {
    queueMicrotask(async function () {
      l && null === s.current ? (await zU({
        navigate: a,
        guidToFocus: o?.guid,
        guidToSelect: l.guid
      }), r(!0), s.current = l) : l || s.current || e.onNext();
    });
  });
  return jsx(TG, {
    arrowPosition: F_.LEFT_TITLE,
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps
    }),
    onPrimaryCtaClick: e.onNext,
    pointsTo: "leftPanel",
    targetKey: s.current ? s.current.guid : _$$B,
    title: renderI18nText("starting_points_onboarding.edit_text_step.title"),
    trackingContextName: "Starting Points Tooltips Edit Text Step",
    visible: t,
    children: renderI18nText("starting_points_onboarding.edit_text_step.description")
  });
}
function q(e) {
  let t = Lh(D8.PAINT_PANEL_ROW, "paint-1-0");
  return jsx(VF, {
    arrowPosition: F_.RIGHT_BODY,
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps
    }),
    onPrimaryCtaClick: e.onNext,
    onSecondaryCtaClick: e.onPrevious,
    pointsTo: "designPanel",
    targetKey: t,
    title: renderI18nText("starting_points_onboarding.fills_step.title"),
    trackingContextName: "Starting Points Fills Step",
    children: renderI18nText("starting_points_onboarding.fills_step.description")
  });
}
function Z(e) {
  let [t, r] = useState(!1);
  let a = _$$Z2();
  return (_$$h(() => {
    queueMicrotask(async function () {
      let t = e.getNodeForViewportFocus?.();
      let n = e.getNodeToSelect();
      n && "FRAME" === n.type ? (await zU({
        navigate: a,
        guidToFocus: t?.guid,
        guidToSelect: n.guid
      }), r(!0)) : e.flowDirection === _$$en.FORWARD ? e.onNext() : e.onPrevious();
    });
  }), t) ? jsx(VF, {
    arrowPosition: _$$F_.RIGHT_BODY,
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps
    }),
    onPrimaryCtaClick: e.onNext,
    onSecondaryCtaClick: e.onPrevious,
    pointsTo: "designPanel",
    targetKey: "design-panel-container",
    title: renderI18nText("starting_points_onboarding.properties_step.title"),
    trackingContextName: "Starting Points Properties Step",
    children: renderI18nText("starting_points_onboarding.properties_step.description")
  }) : null;
}
function et(e) {
  return jsx(VF, {
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx(uY, {
      currentStepNum: e.currentStepNum,
      totalNumSteps: e.totalNumSteps
    }),
    onPrimaryCtaClick: e.onNext,
    onSecondaryCtaClick: e.onPrevious,
    pointsTo: "toolbar",
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: aE,
    title: renderI18nText("starting_points_onboarding.toolbar_step.title"),
    trackingContextName: "Tooltips+ Text Step",
    children: renderI18nText("starting_points_onboarding.toolbar_step.description", {
      actionsSvg: jsx("span", {
        style: {
          display: "inline-block",
          height: "16px",
          width: "21px"
        },
        children: jsx(_$$e3, {})
      }),
      strongActions: jsx("strong", {
        children: renderI18nText("qa.extensions.tooltip_actions")
      })
    })
  });
}
let er = {
  EDIT_TEXT: "starting_points_tooltips_edit_text_step",
  PROPERTIES: "starting_points_tooltips_properties_step",
  FILLS: "starting_points_tooltips_fills_step",
  TOOLBAR: "starting_points_tooltips_toolbar_step",
  ASSETS: "starting_points_tooltips_assets_step"
};
function en({
  completeOverlay: e
}) {
  let t = useDispatch();
  let r = _$$f("seen_starting_points_tooltips_onboarding");
  let s = _$$f(er.EDIT_TEXT);
  let l = _$$f(er.PROPERTIES);
  let d = _$$f(er.FILLS);
  let c = _$$f(er.TOOLBAR);
  let u = _$$f(er.ASSETS);
  let p = !!_$$f("started_figma_basics_onboarding");
  let h = aV();
  let [m, g] = useState(_$$en.FORWARD);
  let E = useSelector(e => e.mirror.sceneGraph);
  let b = (e, r = _$$en.FORWARD) => {
    g(r);
    t(postUserFlag({
      [e]: !0
    }));
  };
  let T = (e, r = _$$en.BACKWARD) => {
    g(r);
    t(postUserFlag({
      [e]: !1
    }));
  };
  let S = () => {
    e();
    t(postUserFlag({
      seen_starting_points_tooltips_onboarding: !0
    }));
  };
  return (useEffect(() => {
    r || h || p || t(postUserFlag({
      started_figma_basics_onboarding: !0
    }));
  }, [h, r, t, p]), r || h) ? null : jsx("div", {
    children: s ? l ? d ? c ? u ? void 0 : jsx(k, {
      onPrimaryCtaClick: () => b(er.ASSETS),
      onSecondaryCtaClick: () => T(er.TOOLBAR),
      onClose: S,
      currentStepNum: 5,
      totalNumSteps: 5,
      primaryCtaProps: {
        ctaText: renderI18nText("tooltips_plus_onboarding.done"),
        ctaTrackingDescriptor: _$$c.DONE
      },
      forStartingPoints: !0
    }) : jsx(et, {
      onNext: () => b(er.TOOLBAR),
      onPrevious: () => T(er.FILLS),
      onClose: S,
      currentStepNum: 4,
      totalNumSteps: 5
    }) : jsx(q, {
      onNext: () => b(er.FILLS),
      onPrevious: () => T(er.PROPERTIES),
      onClose: S,
      currentStepNum: 3,
      totalNumSteps: 5
    }) : jsx(Z, {
      onNext: () => b(er.PROPERTIES),
      onPrevious: () => T(er.EDIT_TEXT),
      onClose: S,
      currentStepNum: 2,
      totalNumSteps: 5,
      getNodeToSelect: () => nt(E),
      flowDirection: m
    }) : jsx(X, {
      onNext: () => b(er.EDIT_TEXT),
      onClose: S,
      currentStepNum: 1,
      totalNumSteps: 5,
      getNodeToSelect: () => l7(E)
    })
  });
}
export let $$ei0 = "tooltips_plus_onboarding_reset_onboarding";
export function $$ea1() {
  let e = useDispatch();
  let t = selectCurrentUser();
  let r = selectCurrentFile()?.canEditCanvas;
  let f = useAtomWithSubscription(NT);
  let E = useAtomWithSubscription(g5);
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e({
    overlay: WD4,
    priority: _$$N.OVERRIDING_MODAL
  }, [E, f]);
  let S = !!_$$f("editor_onboarded");
  let v = !!_$$f("figma_basics_tooltips_onboarding");
  let A = !!_$$f("no_figma_basics_tooltips_onboarding");
  let x = !!_$$f("seen_starting_points_tooltips_onboarding");
  let N = !!_$$f("started_figma_basics_onboarding");
  let C = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  let w = WO(t?.id, C, [_$$d]);
  let [O, R] = useState(!1);
  let [L, P] = useState(!1);
  _$$E(uniqueId, ["Reset Onboarding", $$ei0], () => {
    if (!t || !C) return;
    let r = w ? {
      figma_basics_tooltips_onboarding: !1,
      [F.NAV]: !1,
      [F.FRAME]: !1,
      [F.TEXT]: !1,
      [F.FORMAT_TEXT]: !1,
      [F.DESIGN_PANEL]: !1,
      [F.PRESETS_ENDING]: !1,
      [F.UI_KITS_ENDING]: !1
    } : {
      no_figma_basics_tooltips_onboarding: !1,
      [W.FRAME]: !1,
      [W.TEXT]: !1,
      [W.FORMAT_TEXT]: !1,
      [W.DESIGN_PANEL]: !1,
      [W.PRESETS]: !1,
      [W.PRESETS_ENDING]: !1,
      [W.VISUAL_ASSETS]: !1,
      [W.UI_KITS]: !1,
      [W.UI_KITS_ENDING]: !1,
      [W.PANNING_AND_ZOOMING_GLOW_OVERLAY]: !1,
      [W.PANNING_AND_ZOOMING_TOOLTIP]: !1,
      design_panel_step_shown: !1,
      format_text_step_shown: !1,
      started_figma_basics_onboarding: !1
    };
    e(postUserFlag(r));
  });
  _$$E(uniqueId, "starting_points_template_inserted", () => {
    R(!0);
  });
  _$$E(uniqueId, "starting_points_basics_template_inserted", () => {
    P(!0);
  });
  let D = useCallback(() => {
    t && C && r && !v && (w || !N && !A && !x && !S) && (isShowing || show());
  }, [t, C, r, v, S, w, isShowing, x, show, N, A]);
  return (useEffect(() => {
    D();
  }, [D]), isShowing) ? w || L ? jsx("div", {
    "data-testid": "figma-basics-tooltips-onboarding",
    children: jsx(j, {
      completeOverlay: complete
    })
  }) : O ? jsx("div", {
    "data-testid": "starting-points-tooltips-onboarding",
    children: jsx(en, {
      completeOverlay: complete
    })
  }) : jsx("div", {
    "data-testid": "no-basics-file-tooltips-onboarding",
    children: jsx(K, {
      completeOverlay: complete
    })
  }) : null;
}
export const v = $$ei0;
export const e = $$ea1;