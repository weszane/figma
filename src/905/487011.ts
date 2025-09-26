import { useRef, useMemo } from "react";
import { ServiceCategories } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { generateUUIDv4 } from "../905/871474";
import { getProductType } from "../figma_app/314264";
import { dd } from "../figma_app/604494";
import { F1 } from "../figma_app/171177";
import { n as _$$n } from "../905/347702";
import { AI_ACTION_STARTED, AI_ACTION_ENDED, AI_ACTION_PROMPT_INTERACTION, AI_ACTION_INSTRUCTION_INTERACTION, AI_ACTION_PROGRESS_INTERACTION, AI_ACTION_ITERATION_INTERACTION, AI_ACTION_SENTIMENT_FEEDBACK, AI_ACTION_ADDITIONAL_FEEDBACK, AIActionIterationTrigger, AIActionProgressTrigger, AIActionPromptTrigger, AIActionInstructionTrigger } from "../905/278499";
import { zF } from "../figma_app/297822";
let _ = _$$n((e, t, i) => {
  trackEventAnalytics(e, t, i);
});
let A = (e, t, i) => {
  let n = ["action", "clientLifecycleId", "file_key", "product_type", "quick_actions_session_id"].filter(e => !i[e] || "invalid" === i[e]);
  n.length > 0 && (e += ` | Invalid or empty fields: ${n.join(", ")}`);
  reportError(ServiceCategories.AI_FOR_PRODUCTION, Error(e), {
    extra: {
      event: t,
      properties: i
    }
  });
};
let y = e => ["action", "clientLifecycleId", "file_key", "product_type", "quick_actions_session_id"].every(t => {
  let i = e[t];
  return "invalid" === i || null == i;
});
export function $$b0(e) {
  y(e) && A("Invalid tracking context", AI_ACTION_STARTED, e);
  _(AI_ACTION_STARTED, e, {
    mlEvent: !0
  });
}
export function $$v8(e) {
  y(e) && A("Invalid tracking context", AI_ACTION_ENDED, e);
  _(AI_ACTION_ENDED, e, {
    mlEvent: !0
  });
}
export function $$I4(e) {
  _(AI_ACTION_PROMPT_INTERACTION, e);
}
export function $$E1(e) {
  trackEventAnalytics(AI_ACTION_INSTRUCTION_INTERACTION, e);
}
export function $$x11(e) {
  _(AI_ACTION_PROGRESS_INTERACTION, e);
}
export function $$S9(e) {
  _(AI_ACTION_ITERATION_INTERACTION, e, {
    mlEvent: !0
  });
}
export function $$w10(e) {
  _(AI_ACTION_SENTIMENT_FEEDBACK, e, {
    mlEvent: !0
  });
}
export function $$C12(e) {
  _(AI_ACTION_ADDITIONAL_FEEDBACK, e, {
    mlEvent: !0
  });
}
function T(e) {
  let t = getSingletonSceneGraph().get(e);
  return t?.depthFromTopLevelFrame;
}
export function $$k5(e, t) {
  let i = atomStoreManager.get(zF);
  let n = atomStoreManager.get(dd);
  let r = debugState.getState();
  let a = Object.keys(r.mirror.sceneGraphSelection);
  let o = a.map(T);
  return {
    action: e,
    source: i,
    clientLifecycleId: generateUUIDv4(),
    quick_actions_session_id: n,
    file_key: r.openFile?.key ?? null,
    product_type: getProductType(r.selectedView, null),
    selected_node_ids: a.length > 0 ? a : void 0,
    selected_node_depths: o.length > 0 ? o : void 0,
    ...t
  };
}
export function $$R6({
  action: e,
  clientLifecycleId: t
}) {
  let i = useRef(generateUUIDv4());
  let r = useAtomWithSubscription(zF);
  let a = useAtomWithSubscription(dd);
  let o = debugState.getState();
  let d = o.openFile?.key ?? null;
  let m = getProductType(o.selectedView, null);
  return useMemo(() => ({
    action: e,
    source: r,
    clientLifecycleId: t ?? i.current,
    quick_actions_session_id: a,
    file_key: d,
    product_type: m
  }), [e, t, d, m, a, r]);
}
export function $$N13(e) {
  return e.shortcut ? {
    interaction_type: AIActionIterationTrigger.KEYBOARD_SHORTCUT,
    keyboard_shortcut: F1(e.shortcut)
  } : {
    interaction_type: AIActionIterationTrigger.BUTTON_CLICK
  };
}
export function $$P2(e) {
  return e.shortcut ? {
    interaction_type: AIActionProgressTrigger.KEYBOARD_SHORTCUT,
    keyboard_shortcut: F1(e.shortcut)
  } : {
    interaction_type: AIActionProgressTrigger.BUTTON_CLICK
  };
}
export function $$O3(e) {
  return e.shortcut ? {
    interaction_type: AIActionPromptTrigger.KEYBOARD_SHORTCUT,
    keyboard_shortcut: F1(e.shortcut)
  } : {
    interaction_type: AIActionPromptTrigger.BUTTON_CLICK
  };
}
export function $$D7(e) {
  return e.shortcut ? {
    interaction_type: AIActionInstructionTrigger.KEYBOARD_SHORTCUT,
    keyboard_shortcut: F1(e.shortcut)
  } : {
    interaction_type: AIActionInstructionTrigger.BUTTON_CLICK
  };
}
export const Dl = $$b0;
export const ID = $$E1;
export const LU = $$P2;
export const Q0 = $$O3;
export const SX = $$I4;
export const Uu = $$k5;
export const _M = $$R6;
export const aK = $$D7;
export const as = $$v8;
export const hm = $$S9;
export const i9 = $$w10;
export const nP = $$x11;
export const uZ = $$C12;
export const zQ = $$N13;