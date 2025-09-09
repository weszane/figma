import { VariablesBindings } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { customHistory } from "../905/612521";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { fullscreenValue } from "../figma_app/455680";
import { isDebugSelectedFigmakeFullscreen } from "../figma_app/552876";
export let $$n0;
class h {
  async pasteVariablesWithLocalizationPopup(e, t, r) {
    let n = [];
    for (let t = 0; t < e.size; t += 25) {
      let r = Array.from(e.entries()).slice(t, t + 25).map(([e, t]) => `${e}|${t}`).join(",");
      let i = `/api/variables/publish_state?keysAndLibrary=${r}`;
      n.push(XHR.post(i));
    }
    let h = {};
    (await Promise.all(n)).forEach(e => {
      Object.assign(h, e.data.meta);
    });
    let m = new Set();
    if (Object.keys(h).forEach(e => !1 === h[e] ? m.add(e) : null), m.size > 0) {
      if (trackEventAnalytics("prototype.variables_pasted", {
        numPublished: e.size - m.size,
        numUnpublished: m.size
      }), getFeatureFlags().variables_paste_remap_popup) {
        if (isDebugSelectedFigmakeFullscreen()) return;
        debugState.dispatch(VisualBellActions.dequeue({
          matchType: "localize_unpublished_variables"
        }));
        debugState.dispatch(VisualBellActions.dequeue({
          matchType: "unpublished_variables_localized"
        }));
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString("proto.paste_unpublished_variable_localize"),
          type: "localize_unpublished_variables",
          button: {
            text: getI18nString("proto.paste_unpublished_variable_localize_cta"),
            action: () => {
              let e = VariablesBindings.performVariableLocalizationFromPopup(m, t, r);
              if (fullscreenValue.commit(), Object.keys(e).includes("numberOfNewVariables")) {
                let t = e.numberOfNewVariables;
                t > 0 && debugState.dispatch(VisualBellActions.enqueue({
                  message: getI18nString("proto.unpublished_variables_localized", {
                    numberOfVariables: t
                  }),
                  type: "unpublished_variables_localized"
                }));
              }
            }
          }
        }));
      } else debugState.dispatch(VisualBellActions.enqueue({
        message: getI18nString("proto.paste_unpublished_variable"),
        button: {
          text: getI18nString("proto.paste_unpublished_variable_cta"),
          action: () => {
            customHistory.unsafeRedirect("https://help.figma.com/hc/articles/14506821864087#copy_paste", "_blank");
          }
        }
      }));
    }
    return {};
  }
}
export function $$m1() {
  $$n0 = new h();
}
export const WH = $$n0;
export const _ = $$m1;