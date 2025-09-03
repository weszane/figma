import { useEffect } from "react";
import { G1 } from "../figma_app/691470";
import { CortexErrorV2, PayloadTooLargeError, ClientContentLengthLimitExceededError, ProviderContentLengthLimitExceededError, MeterExceededError, ProviderRateLimitExceededError, ProviderOverloadedError, CortexRateLimitExceededError, ClientNoTextSelectedError, ProviderServiceIssueError, ProviderServiceBusyError, OfflineError, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError, UnauthorizedError, NotImplementedError } from "../figma_app/316567";
import { l7 } from "../905/189185";
import { fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { zl } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { ZC } from "../figma_app/39751";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { _0, PI } from "../figma_app/948389";
import { JT } from "../figma_app/632248";
import { pP, qy, cT } from "../figma_app/862289";
import { TD } from "../figma_app/164260";
import { lq } from "../9410/548825";
class b extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "SwitchedSlideError";
    this.type = "switched_slide";
  }
}
class C extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "SwitchedToGridViewError";
    this.type = "switched_to_grid_view";
  }
}
class v extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "NotEnoughContentError";
    this.type = "not_enough_content";
  }
}
class E extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "UneditedSlideError";
    this.type = "unedited_slide";
  }
}
export let $$T2 = [b, v, E, G1, CortexErrorV2];
export function $$w4(e, t) {
  let i = function (e) {
    if (e instanceof b) return _$$t("slides.speaker_notes.error.switched-slides");
    if (e instanceof C) return _$$t("slides.speaker_notes.error.switched-to-grid-view");
    if (e instanceof v) return _$$t("slides.speaker_notes.error.add-more-content");
    if (e instanceof E) return _$$t("slides.speaker_notes.error.unmodified_slide");
    if (!(e instanceof G1 || e instanceof CortexErrorV2)) return _$$t("slides.speaker_notes.error.default");
    if (e instanceof PayloadTooLargeError) return _$$t("slides.speaker_notes.error.payload_too_large");
    let t = {
      offline: _$$t("slides.speaker_notes.error.connection"),
      rate_limit_exceeded: _$$t("slides.speaker_notes.error.rate_limit"),
      text_tool_no_text: _$$t("slides.speaker_notes.error.add-more-content"),
      content_length_limit_exceeded: _$$t("slides.speaker_notes.error.token_limit"),
      payload_too_large: _$$t("slides.speaker_notes.error.payload_too_large"),
      unsafe_or_harmful_content: _$$t("slides.speaker_notes.error.inappropriate_input"),
      service_issue: _$$t("slides.speaker_notes.error.openai_down"),
      ai_opt_out_error: _$$t("slides.speaker_notes.error.opt_out"),
      unauthorized: _$$t("slides.speaker_notes.error.default"),
      generic: _$$t("slides.speaker_notes.error.default"),
      not_implemented: _$$t("ai.error.not_implemented")
    };
    if (_0(e)) {
      let t = PI(e);
      return t ? _$$t("slides.speaker_notes.error.meter_limit", {
        resetDate: t
      }) : _$$t("slides.speaker_notes.error.rate_limit");
    }
    return t[function (e) {
      if (e instanceof CortexErrorV2) {
        if (ClientContentLengthLimitExceededError.isInstance(e) || ProviderContentLengthLimitExceededError.isInstance(e)) return "content_length_limit_exceeded";
        if (MeterExceededError.isInstance(e)) return "meter_exceeded";
        if (ProviderRateLimitExceededError.isInstance(e) || ProviderOverloadedError.isInstance(e) || CortexRateLimitExceededError.isInstance(e)) return "rate_limit_exceeded";
        if (ClientNoTextSelectedError.isInstance(e)) return "text_tool_no_text";else if (ProviderServiceIssueError.isInstance(e) || ProviderServiceBusyError.isInstance(e)) return "service_issue";else if (OfflineError.isInstance(e)) return "offline";else if (UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e)) return "unsafe_or_harmful_content";else if (UnauthorizedError.isInstance(e)) return "unauthorized";else if (NotImplementedError.isInstance(e)) return "not_implemented";else if (e?.statusCode === 404) return "service_issue";else if (e?.statusCode === 429 || e?.statusCode === 529) return "rate_limit_exceeded";else if (e?.statusCode === 403) return "ai_opt_out_error";
      } else if (e instanceof G1) switch (e.type) {
        case "content_length_limit_exceeded":
        case "payload_too_large":
        case "meter_exceeded":
        case "rate_limit_exceeded":
        case "text_tool_no_text":
        case "service_issue":
        case "offline":
        case "unsafe_or_harmful_content":
        case "ai_opt_out_error":
        case "unauthorized":
          return e.type;
        case "generic":
          switch (e.data?.status) {
            case 404:
              return "service_issue";
            case 429:
              return "rate_limit_exceeded";
            case 403:
              return "ai_opt_out_error";
          }
      }
      return "generic";
    }(e)] || _$$t("slides.speaker_notes.error.default");
  }(e);
  let r = function (e) {
    switch (e.type) {
      case "meter_exceeded":
      case "content_length_limit_exceeded":
      case "payload_too_large":
      case "service_issue":
      case "ai_opt_out_error":
      case "unsafe_or_harmful_content":
      case "switched_slide":
      case "switched_to_grid_view":
      case "not_enough_content":
      case "unedited_slide":
        return !1;
      default:
        return !0;
    }
  }(e);
  debugState.dispatch(F.enqueue({
    icon: zX.CLOSE_FILLED,
    message: i,
    type: "speaker-notes-visual-bell",
    button: r && t ? {
      text: _$$t("slides.speaker_notes.draft_again"),
      action: () => t()
    } : void 0,
    onDismiss: () => {}
  }));
}
export function $$S0(e) {
  let t = getSingletonSceneGraph().get(e);
  if (t && t.editInfo && t?.editInfo?.createdAt === t?.editInfo?.lastEditedAt) throw new E();
}
export function $$j1(e) {
  if (0 === e.length) throw new v();
}
export function $$I3(e, t) {
  let i = ZC(e);
  let n = i !== e && fn(sH(e)) && fn(sH(i));
  let a = ZC(t) !== t && !t;
  useEffect(() => {
    pP(JT.SLIDES_GENERATE_SPEAKER_NOTES).state === qy.RUNNING && i && (n ? k(new b(), i) : a && k(new C(), i));
  }, [a, n, i]);
}
function k(e, t) {
  cT(JT.SLIDES_GENERATE_SPEAKER_NOTES);
  $$w4(e);
  let i = zl.get(TD);
  if (t && i) {
    let e = JSON.stringify(i.toJSON());
    l7.ai("generate-slide-speaker-notes", () => {
      lq(t, e);
    });
  }
}
export const $3 = $$S0;
export const Ay = $$j1;
export const dk = $$T2;
export const gv = $$I3;
export const k0 = $$w4;