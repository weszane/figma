import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { g as _$$g } from "../9410/995605";
import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { tx } from "../905/303541";
import { on } from "../figma_app/456871";
import { Ay } from "../figma_app/432652";
import { B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { i2 } from "../905/913055";
import { JT, pY } from "../figma_app/632248";
import { B3, z8, qy } from "../figma_app/862289";
import { cq } from "../905/794154";
import { $J } from "../905/278499";
import { DZ, F3, Q8 } from "../figma_app/604494";
import { f as _$$f, E as _$$E } from "../905/690713";
import { A } from "../905/721854";
import { Oq, is } from "../905/904596";
import { F } from "../905/382217";
import { GD, Hd, bu, Vz, Jd } from "../figma_app/878113";
let w = ({
  texts: e,
  authInfo: t,
  surroundingContext: i
}) => Ay.shared.adjustText({
  texts: e,
  action: {
    type: "SHORTEN"
  },
  jsonMode: e.length > 1,
  surroundingContext: i
}, t);
let $$S0 = async ({
  params: e,
  abortController: t,
  onTasksUpdate: i,
  clientLifecycleId: r
}) => {
  let {
    featureType
  } = e;
  let a = i2();
  let s = {
    targets: on(a, {
      allowEmpty: !1,
      excludeDigitsAndSpecialChar: !1,
      excludeLockedNodes: !0
    }),
    parameters: null,
    selection: UN().getCurrentPage()?.directlySelectedNodes ?? [],
    activeNodes: a
  };
  zl.set(DZ, null);
  zl.set(F3, s);
  zl.set(Q8, "");
  await GD({
    params: {
      clientLifecycleId: r,
      state: s,
      makeCortexRequest: w,
      featureType,
      excludeDigitsAndSpecialChar: !1,
      editScopeLabel: "adjust-text"
    },
    abortController: t,
    onTasksUpdate: i
  });
};
export function $$j1() {
  let {
    close
  } = cq();
  let {
    longRunningAction,
    lastParameters,
    onRun,
    cancel,
    resetText,
    lastRun
  } = Hd({
    makeCortexRequest: w,
    featureType: JT.SHORTEN_TEXT
  });
  let {
    state,
    aiTrackingContext,
    tasks
  } = t;
  let j = useCallback(() => {
    resetText();
    B3(JT.SHORTEN_TEXT);
    close();
  }, [resetText, close]);
  let I = tasks.length;
  let k = tasks.filter(e => e.state === z8.FAILED).length;
  switch (state) {
    case qy.INITIAL:
      return jsx(A, {
        action: JT.SHORTEN_TEXT,
        actionIcon: jsx(_$$g, {}),
        actionLabel: tx("fullscreen_actions.quick_actions.shorten-text"),
        onPerform: () => {
          onRun(null);
        },
        aiTrackingContext,
        getCustomDisabledTextFromSelectedNodes: e => bu(e, {
          onlyAllowSingular: !0,
          instruction: tx("ai_text_tools.select_text_singular")
        }),
        instructionAction: {
          type: "learn_more",
          url: pY
        },
        children: tx("ai_text_tools.select_text_singular")
      });
    case qy.RUNNING:
      return jsx(F, {
        onCancel: () => {
          cancel();
          close();
        },
        aiTrackingContext,
        children: tx("ai_text_tools.shorten.running")
      });
    case qy.ERROR:
      let N;
      let {
        error
      } = t;
      let O = [{
        type: _$$f.TRY_AGAIN,
        callback: () => onRun(lastParameters)
      }];
      let L = null;
      (error instanceof Vz || sZ(error) === B.CONTENT_LENGTH_LIMIT) && (N = tx("ai.error.content_length_limit"), O = []);
      error instanceof Jd && (N = tx("ai_text_tools.missing_fonts"), O = []);
      sZ(error) === B.UNSAFE_OR_HARMFUL_CONTENT && (O = []);
      I > 0 && k > 0 && k < I && (L = tx("ai_text_tools.shorten.couldnt_count", {
        failed: k,
        total: I
      }));
      return jsx(_$$E, {
        buttons: O,
        error: longRunningAction.error,
        aiTrackingContext,
        customMessage: N,
        secondaryMessage: L
      });
    case qy.DONE:
      return jsx(Oq, {
        recordingKey: "shortenText",
        iterateOptions: [{
          type: is.UNDO,
          callback: j
        }, {
          type: is.TRY_AGAIN,
          callback: () => {
            onRun(lastParameters);
          }
        }],
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.SUCCESS_WITH_ITERATION
        },
        targets: lastRun ? lastRun.targets.map(e => e.node.guid) : void 0
      });
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(state);
  }
}
export const $ = $$S0;
export const J = $$j1;