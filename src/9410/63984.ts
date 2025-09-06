import { lQ } from "../905/934246";
import { j } from "../figma_app/602140";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
export function $$o0(e, t, i = getI18nString("first_draft.share_trace_nudge_in_modal", {
  weirdOutput: getI18nString("first_draft.share_trace_nudge_weird_output")
})) {
  e(F.enqueue({
    type: "FIRST_DRAFT_SHOW_TRACE",
    message: i,
    button: {
      text: getI18nString("first_draft.share_trace"),
      action: () => {
        j(JSON.stringify(t, null, 2), "trace.json");
      }
    },
    onDismiss: lQ,
    timeoutOverride: 2e4,
    timeoutType: "exact"
  }));
}
export const A = $$o0;