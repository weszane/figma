import { jsx } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { throwTypeError } from "../figma_app/465776";
import { T as _$$T } from "../905/2124";
import { useAtomWithSubscription, useAtomValueAndSetter, createLocalStorageAtom } from "../figma_app/27355";
import { renderI18nText, getI18nString } from "../905/303541";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { ow } from "../figma_app/976749";
import { Ay } from "../figma_app/432652";
import { B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { JT, pY } from "../figma_app/632248";
import { s as _$$s, w as _$$w } from "../905/286488";
import { z8, qy, B3 } from "../figma_app/862289";
import { cq } from "../905/794154";
import { a as _$$a } from "../905/290931";
import { U } from "../figma_app/441035";
import { $J } from "../905/278499";
import { f as _$$f, E as _$$E } from "../905/690713";
import { A as _$$A } from "../905/721854";
import { Oq, is } from "../905/904596";
import { A as _$$A2 } from "../905/296182";
import { F } from "../905/382217";
import { l3, DX } from "../figma_app/798540";
import { Tm, mD, cR, Ne } from "../figma_app/955528";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { jD } from "../figma_app/322845";
import { qM, qU } from "../figma_app/913518";
import { Hd, bu, Vz, Jd } from "../figma_app/878113";
function L() {
  let e = useDispatch();
  let t = useAtomWithSubscription(Tm);
  let [r, a] = useAtomValueAndSetter(qM);
  let s = qU();
  let d = useCallback(() => {
    t || mD(e, {
      source: "rewrite_action"
    });
    r || (a(!0), s());
    jD(e, null, {
      forceClose: !1
    });
  }, [e, t, s, r, a]);
  return jsx(Button, {
    variant: "secondary",
    onClick: d,
    recordingKey: "adjust-tone-button",
    children: renderI18nText("ai_text_tools.rewrite.tone.label")
  });
}
let D = "rewrite-view";
let k = createLocalStorageAtom("rewrite_this_prompt_history", []);
export function $$M0() {
  let e = [{
    content: getI18nString("ai_text_tools.rewrite.placeholder.marketing")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.shorter")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.bullet_points")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.email_boss")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.sing_songy")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.softer_tone")
  }, {
    content: getI18nString("ai_text_tools.rewrite.placeholder.pop_song"),
    weight: .001
  }];
  let t = U(e);
  let [r, o] = useState("");
  let C = JT.REWRITE_TEXT;
  let w = useIsSelectedViewFullscreenCooper();
  let {
    close
  } = cq();
  let {
    promptHistory,
    addPromptToHistory
  } = _$$a(k, e => e);
  let {
    shiftAllNodesOutOfSlideMargins,
    resetShiftedNodes,
    resetNodePositionMap
  } = l3(D);
  let {
    slidesTextResizeCallback
  } = DX(JT.REWRITE_TEXT, D);
  let {
    saveOriginalNodeInfos,
    resetOriginalNodeInfos,
    resetAllNodesToOriginalTextStyles
  } = cR(D);
  let z = useCallback(e => {
    let {
      eventType,
      node
    } = e;
    switch (eventType) {
      case "BEFORE_STREAM_START":
        shiftAllNodesOutOfSlideMargins();
        return;
      case "AFTER_STREAM_CHUNK":
        slidesTextResizeCallback(node);
        return;
    }
  }, [slidesTextResizeCallback, shiftAllNodesOutOfSlideMargins]);
  let W = ow();
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
      targetMap: r,
      authInfo: n,
      surroundingContext: i
    }) => (saveOriginalNodeInfos(r.values()), Ay.shared.adjustText({
      texts: e,
      action: {
        type: "REWRITE_TEXT",
        prompt: t.prompt
      },
      jsonMode: e.length > 1,
      surroundingContext: i
    }, n)),
    featureType: C,
    allowEmptyTextNodes: !W,
    onNodeStreamEvent: z
  });
  let {
    state,
    aiTrackingContext,
    tasks
  } = K;
  let et = Ne();
  let er = _$$s(JT.REWRITE_TEXT);
  let en = tasks.length;
  let ei = tasks.filter(e => e.state === z8.FAILED).length;
  switch (state) {
    case qy.RUNNING:
      return jsx(F, {
        onCancel: () => {
          cancel();
          close();
        },
        aiTrackingContext,
        children: renderI18nText("ai.rewriting")
      });
    case qy.INITIAL:
      switch (er.state) {
        case _$$w.NEEDS_INITIAL_SELECTION:
        case _$$w.SELECTION_LOST:
          return jsx(_$$A, {
            action: JT.REWRITE_TEXT,
            actionLabel: renderI18nText("fullscreen_actions.quick_actions.rewrite-this"),
            actionIcon: jsx(_$$T, {}),
            onPerform: er.confirmInitialSelection,
            aiTrackingContext,
            getCustomDisabledTextFromSelectedNodes: e => bu(e, {
              allowEmptyText: !W
            }),
            instructionAction: {
              type: "learn_more",
              url: pY
            },
            children: renderI18nText("ai_text_tools.selection_instruction")
          });
        case _$$w.SELECTION_OK:
          return jsx(_$$A2, {
            action: JT.REWRITE_TEXT,
            aiTrackingContext,
            "data-testid": "rewrite-text-prompt",
            extraFooter: et && jsx(L, {}),
            featureNameForInstrumentation: "rewrite_text",
            onChangePrompt: o,
            onRun: () => {
              resetNodePositionMap();
              addPromptToHistory(r);
              onRun({
                prompt: r
              });
            },
            prompt: r,
            promptHistory,
            recordingKey: "rewriteText.prompt",
            submitLabel: renderI18nText("ai.rewrite"),
            suggestion: t,
            suggestionPills: [{
              label: getI18nString("ai_text_tools.rewrite.shorter.label"),
              prompt: getI18nString("ai_text_tools.rewrite.shorter.prompt")
            }, {
              label: getI18nString("ai_text_tools.rewrite.casual.label"),
              prompt: getI18nString("ai_text_tools.rewrite.casual.prompt")
            }, {
              label: getI18nString("ai_text_tools.rewrite.replace.label"),
              prompt: getI18nString("ai_text_tools.rewrite.replace.prompt")
            }],
            useClose: w
          });
        default:
          throwTypeError(er.state);
      }
    case qy.ERROR:
      let ea;
      let {
        error
      } = K;
      let eo = null;
      let el = [{
        type: _$$f.TRY_AGAIN,
        callback: () => {
          onRun({
            prompt: r
          });
        }
      }];
      (error instanceof Vz || sZ(error) === B.CONTENT_LENGTH_LIMIT) && (ea = renderI18nText("ai.error.content_length_limit"), el = []);
      error instanceof Jd && (ea = renderI18nText("ai_text_tools.missing_fonts"), el = []);
      sZ(error) === B.UNSAFE_OR_HARMFUL_CONTENT && (el = []);
      en > 0 && ei > 0 && ei < en && (eo = renderI18nText("ai_text_tools.rewrite.couldnt_count", {
        failed: ei,
        total: en
      }));
      return jsx(_$$E, {
        error: longRunningAction.error,
        buttons: el,
        aiTrackingContext,
        customMessage: ea,
        secondaryMessage: eo
      });
    case qy.DONE:
      return jsx(Oq, {
        iterateOptions: [{
          type: is.UNDO,
          callback: () => {
            resetText();
            resetAllNodesToOriginalTextStyles();
            resetShiftedNodes();
            B3(JT.REWRITE_TEXT);
            resetOriginalNodeInfos();
            close();
          }
        }, {
          type: is.MAKE_CHANGES,
          callback: () => {
            restoreSelection();
            resetNodePositionMap();
            B3(JT.REWRITE_TEXT);
            resetOriginalNodeInfos();
            o("");
          }
        }],
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.SUCCESS_WITH_ITERATION
        },
        recordingKey: "rewriteText",
        targets: lastRun ? lastRun.targets.map(e => e.node.guid) : void 0
      });
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(state);
  }
}
export const w = $$M0;