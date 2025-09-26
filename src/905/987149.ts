import { R } from "../905/531474";
import { ComponentPropsAiCPPBindings } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { getMatchingNodesToUpdateForQuery } from "../905/913055";
import { hm } from "../905/487011";
import { AIActionIterationResult, AIActionIterationStatus, AIActionIterationAction, AIActionIterationTrigger } from "../905/278499";
export function $$d2(e) {
  e && hm({
    ...e,
    iteration_view_type: AIActionIterationResult.DEFAULT_SUCCESS,
    status: AIActionIterationStatus.COMPLETED,
    interaction: AIActionIterationAction.UNDO,
    interaction_type: AIActionIterationTrigger.FULLSCREEN_UNDO
  });
}
export function $$c1(e) {
  let t = new Map();
  e.forEach(e => {
    e && e.isAlive && t.set(e.guid, [e]);
  });
  e.forEach(e => {
    if (!e || !e.isAlive) return;
    let i = getMatchingNodesToUpdateForQuery(e, "text-data");
    t.set(e.guid, i);
  });
  return {
    setLoadingStateMatchingNode: e => function (e) {
      e.forEach(e => {
        e && e.isAlive && ComponentPropsAiCPPBindings?.setLoadingStateForTextInSubtree(e.guid);
      });
    }(t.get(e) ?? []),
    clearLoadingStateMatchingNode: e => u(t.get(e) ?? []),
    clearAllLoadingStates: () => {
      t.forEach(e => {
        u(e);
      });
    }
  };
}
function u(e) {
  e.forEach(e => {
    e && e.isAlive && ComponentPropsAiCPPBindings?.unsetLoadingStateForTextInSubtree(e.guid);
  });
}
export function $$p3() {
  return [{
    content: getI18nString("fullscreen_actions.ai_content_fill.placeholder_fill_realistic_content")
  }];
}
export const SZ = function e(t) {
  for (let i of t) if (R(i) || i.childrenNodes.length > 0 && e(i.childrenNodes)) return !0;
  return !1;
};
export const Xu = $$c1;
export const mg = $$d2;
export const zA = $$p3;