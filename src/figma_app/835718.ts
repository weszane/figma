import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { G1 } from "../figma_app/691470";
import { CortexErrorV2, ClientContentLengthLimitExceededError, ProviderContentLengthLimitExceededError, OutOfDateFeatureVersionError, ProviderRateLimitExceededError, ProviderOverloadedError, CortexRateLimitExceededError, ProviderServiceIssueError, ProviderServiceBusyError, OfflineError, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError, UnauthorizedError, NotImplementedError, FigjamVisualParsingError } from "../figma_app/316567";
import { getFeatureFlags } from "../905/601108";
import { j } from "../figma_app/602140";
import { Ay } from "../905/612521";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { D } from "../905/347702";
var $$_1 = (e => (e.SUMMARIZE = "sticky-summarization-error", e.CLUSTER = "sticky-cluster-error", e.GENERATE = "generate-error", e))($$_1 || {});
export let $$h4 = {
  "sticky-summarization-error": "Error summarizing sticky selection: ",
  "sticky-cluster-error": "Error sorting sticky selection: ",
  "generate-error": "Error generating: "
};
export var $$m2 = (e => (e.Reload = "reload", e.Trace = "trace", e))($$m2 || {});
export function $$g3() {
  let e = useDispatch();
  return useCallback((t, r, n) => {
    let i;
    if (n) switch (n.type) {
      case "reload":
        i = {
          text: getI18nString("whiteboard.ai.reload"),
          action: () => Ay.reload("Resolving an error encountered in FigJam AI")
        };
        break;
      case "trace":
        getFeatureFlags().cortex_execution_tracing && (i = {
          text: getI18nString("whiteboard.ai_modal.share_trace"),
          action() {
            j(JSON.stringify(n.trace, null, 2), "trace.json");
          }
        });
    }
    e(F.enqueue({
      type: r,
      message: t,
      error: !!i,
      button: i
    }));
  }, [e]);
}
export let $$f0 = D((e, t) => {
  let r = {
    "sticky-summarization-error": {
      content_length_limit_exceeded: getI18nString("whiteboard.ai_summary.content_length_limit_exceeded_error"),
      figjam_summarize_out_of_date: getI18nString("whiteboard.ai_summary.out_of_date_error"),
      rate_limit_exceeded: getI18nString("whiteboard.ai_summary.rate_limit_exceeded_error"),
      ai_opt_out_error: getI18nString("whiteboard.ai.ai_opt_out_error"),
      generic: getI18nString("whiteboard.ai_summary.generic_error"),
      service_issue: getI18nString("whiteboard.ai.service_issue_error"),
      unsafe_or_harmful_content: getI18nString("whiteboard.ai.inappropriate_input_error"),
      offline: getI18nString("whiteboard.ai.offline_error"),
      unauthorized: getI18nString("whiteboard.ai_summary.generic_error"),
      not_implemented: getI18nString("ai.error.not_implemented")
    },
    "sticky-cluster-error": {
      content_length_limit_exceeded: getI18nString("whiteboard.ai_cluster.content_length_limit_exceeded_error"),
      rate_limit_exceeded: getI18nString("whiteboard.ai_cluster.rate_limit_exceeded_error"),
      ai_opt_out_error: getI18nString("whiteboard.ai.ai_opt_out_error"),
      generic: getI18nString("whiteboard.ai_cluster.generic_error"),
      service_issue: getI18nString("whiteboard.ai.service_issue_error"),
      unsafe_or_harmful_content: getI18nString("whiteboard.ai.inappropriate_input_error"),
      offline: getI18nString("whiteboard.ai.offline_error"),
      unauthorized: getI18nString("whiteboard.ai_cluster.generic_error"),
      not_implemented: getI18nString("ai.error.not_implemented")
    },
    "generate-error": {
      content_length_limit_exceeded: getI18nString("whiteboard.ai_generate.content_length_limit_exceeded_error"),
      rate_limit_exceeded: getI18nString("whiteboard.ai_generate.rate_limit_error"),
      ai_opt_out_error: getI18nString("whiteboard.ai.ai_opt_out_error"),
      generic: getI18nString("whiteboard.ai_generate.unknown_error"),
      service_issue: getI18nString("whiteboard.ai.service_issue_error"),
      unsafe_or_harmful_content: getI18nString("whiteboard.ai.inappropriate_input_error"),
      offline: getI18nString("whiteboard.ai.offline_error"),
      unauthorized: getI18nString("whiteboard.ai_generate.unknown_error"),
      not_implemented: getI18nString("ai.error.not_implemented")
    }
  };
  let n = "generic";
  let i = !0;
  if (e instanceof CortexErrorV2) ClientContentLengthLimitExceededError.isInstance(e) || ProviderContentLengthLimitExceededError.isInstance(e) ? n = "content_length_limit_exceeded" : OutOfDateFeatureVersionError.isInstance(e) ? "figjam_summarize" === e.featureName && (n = "figjam_summarize_out_of_date") : ProviderRateLimitExceededError.isInstance(e) || ProviderOverloadedError.isInstance(e) || CortexRateLimitExceededError.isInstance(e) ? n = "rate_limit_exceeded" : ProviderServiceIssueError.isInstance(e) || ProviderServiceBusyError.isInstance(e) ? n = "service_issue" : OfflineError.isInstance(e) ? (n = "offline", i = !1) : UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e) ? (n = "unsafe_or_harmful_content", i = !1) : UnauthorizedError.isInstance(e) ? (n = "unauthorized", i = !1) : NotImplementedError.isInstance(e) ? (n = "not_implemented", i = !1) : FigjamVisualParsingError.isInstance(e) ? (n = "generic", i = !1) : e?.statusCode === 429 ? n = "rate_limit_exceeded" : e?.statusCode === 403 && (n = "ai_opt_out_error");else if (e instanceof G1) switch (e.type) {
    case "content_length_limit_exceeded":
      n = "content_length_limit_exceeded";
      break;
    case "figjam_summarize_out_of_date":
      n = "figjam_summarize_out_of_date";
      break;
    case "rate_limit_exceeded":
      n = "rate_limit_exceeded";
      break;
    case "service_issue":
      n = "service_issue";
      break;
    case "offline":
      n = "offline";
      i = !1;
      break;
    case "unsafe_or_harmful_content":
    case "figjam_generate_moderation_api_unsafe_or_harmful_content":
      n = "unsafe_or_harmful_content";
      i = !1;
      break;
    case "unauthorized":
      n = "unauthorized";
      i = !1;
      break;
    case "figjam_visual_parsing_error":
      n = "generic";
      i = !1;
      break;
    case "generic":
      if (429 === e.data.status) {
        n = "rate_limit_exceeded";
        break;
      }
      403 === e.data.status && (n = "ai_opt_out_error");
  }
  let o = r[t];
  let l = o[n] ?? o.generic;
  return {
    type: n,
    message: l,
    reportToSentry: i
  };
});
export const E$ = $$f0;
export const ez = $$_1;
export const tE = $$m2;
export const um = $$g3;
export const xQ = $$h4;