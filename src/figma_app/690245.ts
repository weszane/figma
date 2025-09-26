import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { eJ } from "../vendor/352483";
import { createLocalStorageAtom } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { setupPromptHistory } from "../905/290931";
import { AIActionIterationResult } from "../905/278499";
import { Oq, is } from "../905/904596";
import { A as _$$A } from "../905/296182";
export let $$_1 = createLocalStorageAtom("content_fill_prompt_history", []);
export function $$h0({
  action: e,
  regenerateWithPrompt: t,
  recordingKey: r,
  aiTrackingContext: s,
  targets: h,
  onUndo: m
}) {
  let [g, f] = useState(!1);
  let [E, y] = useState("");
  let {
    promptHistory,
    addPromptToHistory
  } = setupPromptHistory($$_1, e => e);
  return g ? jsx(_$$A, {
    action: e,
    aiTrackingContext: s,
    disableAutoComplete: !0,
    onChangePrompt: y,
    onRun: () => {
      t(E);
      addPromptToHistory(E);
    },
    prompt: E,
    promptHistory,
    recordingKey: generateRecordingKey(r, "prompt"),
    submitLabel: renderI18nText("fullscreen_actions.ai_content_fill.update_content"),
    suggestion: getI18nString("fullscreen_actions.ai_content_fill.prompt_suggestion")
  }) : jsx(Oq, {
    iterateOptions: [{
      type: is.UNDO,
      callback: m
    }, {
      type: is.MAKE_CHANGES,
      callback: () => {
        f(!0);
        s.clientLifecycleId = eJ();
      }
    }],
    recordingKey: generateRecordingKey(r, "iterate"),
    targets: h,
    aiTrackingContext: {
      ...s,
      iteration_view_type: AIActionIterationResult.SUCCESS_WITH_ITERATION
    }
  });
}
export const A = $$h0;
export const i = $$_1;