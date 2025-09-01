import { G1 } from "../figma_app/691470";
import { CortexErrorV2, ClientContentLengthLimitExceededError, ProviderContentLengthLimitExceededError, ProviderRateLimitExceededError, ProviderOverloadedError, CortexRateLimitExceededError, ProviderServiceIssueError, ProviderServiceBusyError, OutOfDateFeatureVersionError, MeterExceededError, OfflineError, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError, UnauthorizedError, NotImplementedError } from "../figma_app/316567";
import { k } from "../905/651849";
import { debugState } from "../905/407919";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX, Rw } from "../905/576487";
import { JT } from "../figma_app/632248";
import { cT } from "../figma_app/862289";
let p = "slides-ai-generation-started";
let h = "slides-ai-generation-error";
let m = "slides-ai-generation-completed";
export function $$f0() {
  debugState.dispatch(F.dequeue({
    matchType: p
  }));
  debugState.dispatch(F.dequeue({
    matchType: h
  }));
  debugState.dispatch(F.dequeue({
    matchType: m
  }));
}
export function $$g5() {
  debugState.dispatch(F.enqueue({
    message: _$$t("slides.present_summary.visual_bells.loading"),
    type: p,
    icon: zX.SPINNER,
    button: {
      text: _$$t("slides.present_summary.visual_bells.stop"),
      action: () => {
        debugState.dispatch(F.dequeue({
          matchType: p
        }));
        cT(JT.BOARD_TO_DECK);
      }
    },
    timeoutOverride: 3e5
  }));
}
function _(e, t, i) {
  debugState.dispatch(F.dequeue({
    matchType: p
  }));
  debugState.dispatch(F.enqueue({
    message: e,
    type: i,
    icon: t,
    timeoutOverride: 3e3
  }));
}
export function $$x4() {
  _(_$$t("slides.present_summary.visual_bells.canceled_indirectly"), zX.EXCLAMATION, "slides-ai-generation-canceled");
}
export function $$y1(e) {
  _(e, zX.EXCLAMATION, h);
}
export function $$b3() {
  debugState.dispatch(F.dequeue({
    matchType: p
  }));
  debugState.dispatch(F.enqueue({
    type: m,
    messageComponentKey: Rw.BOARD_TO_DECK_FEEDBACK,
    icon: zX.GREEN_CHECK,
    onDismiss: () => {
      debugState.dispatch(F.dequeue({
        matchType: m
      }));
    },
    timeoutOverride: 6e4
  }));
}
export function $$C2(e) {
  k.error(e);
  let t = {
    content_length_limit_exceeded: _$$t("slides.present_summary.visual_bells.error_content_limit_exceeded"),
    rate_limit_exceeded: _$$t("slides.present_summary.visual_bells.error_rate_limited"),
    service_issue: _$$t("slides.present_summary.visual_bells.error_vendor"),
    offline: _$$t("slides.present_summary.visual_bells.error_offline"),
    unsafe_or_harmful_content: _$$t("slides.present_summary.visual_bells.content_moderation"),
    unauthorized: _$$t("slides.present_summary.visual_bells.error_unknown"),
    generic: _$$t("slides.present_summary.visual_bells.error_unknown"),
    ai_opt_out_error: _$$t("slides.present_summary.visual_bells.error_opt_out"),
    meter_exceeded: _$$t("slides.present_summary.visual_bells.error_meter_exceeded"),
    create_slides_out_of_date: _$$t("slides.present_summary.visual_bells.error_out_of_date"),
    not_implemented: _$$t("ai.error.not_implemented")
  };
  let i = "generic";
  if (e instanceof CortexErrorV2) ClientContentLengthLimitExceededError.isInstance(e) || ProviderContentLengthLimitExceededError.isInstance(e) ? i = "content_length_limit_exceeded" : ProviderRateLimitExceededError.isInstance(e) || ProviderOverloadedError.isInstance(e) || CortexRateLimitExceededError.isInstance(e) ? i = "rate_limit_exceeded" : ProviderServiceIssueError.isInstance(e) || ProviderServiceBusyError.isInstance(e) ? i = "service_issue" : OutOfDateFeatureVersionError.isInstance(e) ? "create_slides" === e.featureName && (i = "create_slides_out_of_date") : MeterExceededError.isInstance(e) ? i = "meter_exceeded" : OfflineError.isInstance(e) ? i = "offline" : UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e) ? i = "unsafe_or_harmful_content" : UnauthorizedError.isInstance(e) ? i = "unauthorized" : NotImplementedError.isInstance(e) ? i = "not_implemented" : e?.statusCode === 404 ? i = "service_issue" : e?.statusCode === 429 || e?.statusCode === 529 ? i = "rate_limit_exceeded" : e?.statusCode === 403 && (i = "ai_opt_out_error");else if (e instanceof G1) switch (e.type) {
    case "content_length_limit_exceeded":
    case "rate_limit_exceeded":
    case "service_issue":
    case "create_slides_out_of_date":
    case "meter_exceeded":
    case "offline":
    case "unsafe_or_harmful_content":
    case "unauthorized":
      i = e.type;
      break;
    default:
      switch (e.data?.status) {
        case 404:
          i = "service_issue";
          break;
        case 429:
          i = "rate_limit_exceeded";
          break;
        case 403:
          i = "ai_opt_out_error";
      }
  }
  $$y1(t[i] ?? _$$t("slides.present_summary.visual_bells.error_unknown"));
}
export const $K = $$f0;
export const D0 = $$y1;
export const D1 = $$C2;
export const Sk = $$b3;
export const Y = $$x4;
export const tO = $$g5;