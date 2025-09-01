import { lQ } from "../905/934246";
import { j } from "../figma_app/602140";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
export function $$o0(e, t, i = _$$t("first_draft.share_trace_nudge_in_modal", {
  weirdOutput: _$$t("first_draft.share_trace_nudge_weird_output")
})) {
  e(F.enqueue({
    type: "FIRST_DRAFT_SHOW_TRACE",
    message: i,
    button: {
      text: _$$t("first_draft.share_trace"),
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