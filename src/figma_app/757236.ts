import { jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback } from "react";
import a, { ImageSourceType } from "../905/585727";
import { assertNotNullish, throwTypeError } from "../figma_app/465776";
import { noop } from 'lodash-es';
import { c as _$$c } from "../905/752260";
import { ComponentPropsAiCPPBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText } from "../905/303541";
import { cortexAPI } from "../figma_app/432652";
import { ErrorType } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { TooManyNodesError, NoDuplicateNodesError } from "../905/843553";
import { F1, LJ } from "../figma_app/757114";
import { c as _$$c2 } from "../905/932790";
import { getSelectedNodesWithinBreakpointFrame } from "../905/913055";
import { useSceneGraphSelection } from "../figma_app/722362";
import { JT, KL } from "../figma_app/632248";
import { useSelectionState, SelectionState } from "../905/286488";
import { RL, qy, B3, pP, z8 } from "../figma_app/862289";
import { useNavigationStack } from "../905/794154";
import { setupPromptHistory } from "../905/290931";
import { n as _$$n } from "../905/353086";
import { E as _$$E, f as _$$f } from "../905/690713";
import { A as _$$A } from "../905/721854";
import { A as _$$A2 } from "../905/296182";
import { F as _$$F } from "../905/382217";
import { i as _$$i, A as _$$A3 } from "../figma_app/690245";
import { bu, Hd, Vz, Jd } from "../figma_app/878113";
import { zA } from "../905/987149";
export function $$D0() {
  let [e, t] = useState(!1);
  let r = useSelectionState(JT.CONTENT_FILL);
  let a = RL(JT.CONTENT_FILL, _$$c2);
  let s = useSceneGraphSelection();
  let {
    aiTrackingContext,
    state
  } = a;
  let [u, _] = useState("");
  return (useEffect(() => {
    r.state === SelectionState.SELECTION_OK && state === qy.INITIAL ? t(!!(ComponentPropsAiCPPBindings && ComponentPropsAiCPPBindings.repeatedContentFillAvailableBindings())) : r.state !== SelectionState.SELECTION_OK && t(!1);
  }, [r.state, state, s]), r.state === SelectionState.SELECTION_OK || state !== qy.INITIAL) ? e ? jsx($$F, {
    prompt: u,
    onChangePrompt: _
  }) : jsx(M, {
    prompt: u,
    onChangePrompt: _
  }) : jsx(_$$A, {
    action: JT.CONTENT_FILL,
    actionIcon: jsx(_$$c, {}),
    actionLabel: renderI18nText("fullscreen_actions.ai_content_fill.replace_content"),
    onPerform: () => {
      r.confirmInitialSelection();
    },
    aiTrackingContext,
    instructionAction: {
      type: "learn_more",
      url: KL
    },
    getCustomDisabledTextFromSelectedNodes: e => bu(e, {
      onlyAllowSingular: !1,
      allowEmptyText: !0,
      onlyAllowSingleTLF: !0,
      instruction: renderI18nText("fullscreen_actions.ai_content_fill.select_items_with_text")
    }),
    children: renderI18nText("fullscreen_actions.ai_content_fill.select_items_with_text")
  });
}
function k({
  state: e,
  onRun: t,
  aiTrackingContext: r,
  targets: o,
  onMakeChanges: l,
  stop: d,
  prompt: _,
  onChangePrompt: h,
  onUndo: m
}) {
  let g = zA()[0];
  assertNotNullish(g);
  let {
    promptHistory,
    addPromptToHistory
  } = setupPromptHistory(_$$i, e => e);
  let I = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
  let [N, C] = useState(ImageSourceType.UNSPLASH);
  let L = RL(JT.IMAGE_FILL, F1);
  let D = useMemo(() => {
    if (getFeatureFlags().aip_content_fill_image && I) {
      let e = getSelectedNodesWithinBreakpointFrame();
      return LJ(e);
    }
    return [];
  }, [I]);
  let {
    close
  } = useNavigationStack();
  let M = () => {
    d();
    close();
  };
  let F = () => {
    let e = [];
    if (getFeatureFlags().aip_content_fill_image) {
      let t = getSelectedNodesWithinBreakpointFrame();
      e = LJ(t);
    }
    addPromptToHistory(_);
    h("");
    t({
      prompt: _
    }).then(() => {
      getFeatureFlags().aip_content_fill_image && (B3(JT.IMAGE_FILL), L.start({
        nodes: e,
        modelType: N
      }));
    });
  };
  let {
    state
  } = pP(JT.IMAGE_FILL);
  switch (e) {
    case qy.INITIAL:
      return jsx(_$$A2, {
        action: JT.CONTENT_FILL,
        aiTrackingContext: r,
        extraFooter: getFeatureFlags().aip_content_fill_image && D.length > 0 ? jsx(_$$n, {
          modelType: N,
          setModelType: C,
          action: JT.IMAGE_FILL
        }) : null,
        featureNameForInstrumentation: "content_fill",
        onChangePrompt: h,
        onRun: F,
        prompt: _,
        promptHistory,
        recordingKey: "contentFill.prompt",
        submitLabel: renderI18nText("fullscreen_actions.ai_content_fill.replace_content"),
        suggestion: g.content
      });
    case qy.RUNNING:
      return jsx(_$$F, {
        onCancel: M,
        aiTrackingContext: r,
        children: renderI18nText("ai.replacing")
      });
    case qy.DONE:
      if (getFeatureFlags().aip_content_fill_image) switch (state) {
        case qy.RUNNING:
          return jsx(_$$F, {
            onCancel: M,
            aiTrackingContext: r,
            children: renderI18nText("fullscreen_actions.ai_content_fill.replacing_images")
          });
        case qy.DONE:
      }
      return jsx(_$$A3, {
        action: JT.CONTENT_FILL,
        recordingKey: "regenerateText.done",
        targets: o,
        regenerateWithPrompt: e => {
          l();
          h("");
          t({
            prompt: e
          });
        },
        aiTrackingContext: r,
        onUndo: m
      });
    case qy.ERROR:
      return jsx(j, {
        onSubmit: F
      });
    case qy.CANCELLED:
      return null;
  }
}
function M({
  prompt: e,
  onChangePrompt: t
}) {
  let r = JT.CONTENT_FILL;
  let {
    longRunningAction,
    onRun,
    cancel,
    restoreSelection,
    resetText,
    lastRun
  } = Hd({
    makeCortexRequest: ({
      texts: e,
      parameters: t,
      authInfo: r,
      surroundingContext: n
    }) => {
      let i = {
        texts: e,
        action: {
          type: "CONTENT_FILL",
          prompt: t.prompt
        },
        jsonMode: e.length > 1,
        surroundingContext: n
      };
      new Blob([JSON.stringify(i)], {
        type: "application/json"
      }).size / 1048576 > 1 && (i.surroundingContext = void 0);
      return cortexAPI.shared.adjustText({
        ...i
      }, r);
    },
    featureType: r,
    allowEmptyTextNodes: !0
  });
  let {
    aiTrackingContext,
    state
  } = a;
  let {
    close
  } = useNavigationStack();
  let m = useCallback(e => onRun({
    prompt: e.prompt
  }), [onRun]);
  let g = useCallback(() => {
    resetText();
    B3(JT.CONTENT_FILL);
    close();
  }, [resetText, close]);
  let f = useMemo(() => state !== qy.DONE ? [] : lastRun?.targets.map(e => e.node.guid) || [], [state, lastRun]);
  return jsx(k, {
    aiTrackingContext,
    onChangePrompt: t,
    onMakeChanges: () => {
      restoreSelection();
    },
    onRun: m,
    onUndo: g,
    prompt: e,
    state,
    stop: cancel,
    targets: f
  });
}
function $$F({
  prompt: e,
  onChangePrompt: t
}) {
  let r = RL(JT.CONTENT_FILL, _$$c2);
  let {
    start,
    stop,
    aiTrackingContext,
    state
  } = r;
  let {
    close
  } = useNavigationStack();
  let u = useCallback(e => start({
    guids: [],
    numExampleRows: 1,
    source: "ACTIONS_MENU",
    userPrompt: e.prompt
  }), [start]);
  let p = useMemo(() => state !== qy.DONE ? [] : r.result.iterationParams.guids, [state, r]);
  let _ = useCallback(() => {
    state === qy.DONE && (r.result.reset(), close());
  }, [r, state, close]);
  return jsx(k, {
    aiTrackingContext,
    onChangePrompt: t,
    onMakeChanges: noop,
    onRun: u,
    onUndo: _,
    prompt: e,
    state,
    stop,
    targets: p
  });
}
function j(e) {
  let t;
  let r = RL(JT.CONTENT_FILL, _$$c2);
  let i = null;
  if (r.state !== qy.ERROR) return null;
  let {
    error,
    tasks,
    aiTrackingContext
  } = r;
  let l = tasks.length;
  let d = tasks.filter(e => e.state === z8.FAILED).length;
  return error instanceof Vz || error instanceof TooManyNodesError || sZ(error) === ErrorType.CONTENT_LENGTH_LIMIT ? jsx(_$$E, {
    error,
    aiTrackingContext: r.aiTrackingContext,
    customMessage: renderI18nText("ai.error.content_length_limit")
  }) : (error instanceof Jd && (t = renderI18nText("fullscreen_actions.ai_content_fill.missing_font")), error instanceof NoDuplicateNodesError) ? jsx(_$$E, {
    error,
    aiTrackingContext: r.aiTrackingContext,
    customMessage: renderI18nText("fullscreen_actions.ai_content_fill.no_duplicates_to_replace_error")
  }) : (l > 0 && d > 0 && d < l && (i = renderI18nText("fullscreen_actions.ai_content_fill.couldnt_count", {
    failed: d,
    total: l
  })), t) ? jsx(_$$E, {
    error,
    aiTrackingContext,
    customMessage: t,
    secondaryMessage: i
  }) : sZ(error) === ErrorType.UNSAFE_OR_HARMFUL_CONTENT ? jsx(_$$E, {
    error: r.error,
    secondaryMessage: i,
    aiTrackingContext
  }) : jsx(_$$E, {
    error: r.error,
    buttons: [{
      type: _$$f.TRY_AGAIN,
      callback: () => {
        e.onSubmit();
      }
    }],
    secondaryMessage: i,
    aiTrackingContext
  });
}
export function $$U1() {
  let e = RL(JT.CONTENT_FILL, _$$c2);
  let t = useSelectionState(JT.CONTENT_FILL);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = e;
  let {
    close
  } = useNavigationStack();
  switch (useEffect(() => {
    t.state === SelectionState.SELECTION_OK && state === qy.INITIAL && start({
      guids: [],
      numExampleRows: 1,
      source: "ACTIONS_MENU"
    });
  }, [t.state, start, state]), state) {
    case qy.INITIAL:
      return jsx(_$$A, {
        action: JT.CONTENT_FILL,
        actionIcon: jsx(_$$c, {}),
        actionLabel: renderI18nText("fullscreen_actions.ai_content_fill.replace_content"),
        onPerform: () => {
          ComponentPropsAiCPPBindings && ComponentPropsAiCPPBindings.repeatedContentFillAvailableBindings() && start({
            guids: [],
            numExampleRows: 1,
            source: "ACTIONS_MENU"
          });
        },
        aiTrackingContext,
        instructionAction: {
          type: "learn_more",
          url: KL
        },
        children: renderI18nText("fullscreen_actions.ai_content_fill.select_a_stack_of_repeating_frames")
      });
    case qy.RUNNING:
      return jsx(_$$F, {
        onCancel: () => {
          stop();
          close();
        },
        aiTrackingContext,
        children: renderI18nText("ai.replacing")
      });
    case qy.DONE:
      {
        let t = e.result.iterationParams;
        let i = e.result.reset;
        return jsx(_$$A3, {
          action: JT.CONTENT_FILL,
          regenerateWithPrompt: e => {
            start({
              ...t,
              userPrompt: e,
              nodesFromMagicHandle: []
            });
          },
          recordingKey: "regenerateText.done",
          aiTrackingContext,
          targets: t.guids,
          onUndo: () => {
            i();
            close();
          }
        });
      }
    case qy.ERROR:
      {
        let t = e.originalParams;
        return jsx(j, {
          onSubmit: () => start(t)
        });
      }
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(state);
  }
}
export const F = $$D0;
export const w = $$U1;