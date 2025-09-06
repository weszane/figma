import { atomStoreManager, atom } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { qV } from "../figma_app/165623";
var s = (e => (e.FREEFORM = "freeform", e.SUGGESTION = "suggestion", e.AUTOCOMPLETE = "autocomplete", e))(s || {});
var o = (e => (e.AI_PROMPT_EDITED = "ai_prompt_edited", e.AI_PROMPT_BUILDER_OUTPUT_REQUESTED = "ai_prompt_builder_output_requested", e.AI_PROMPT_BUILDER_OUTPUT_STREAMING = "ai_prompt_builder_output_streaming", e.AI_PROMPT_BUILDER_OUTPUT_CREATED = "ai_prompt_builder_output_created", e.AI_PROMPT_REQUEST_ERROR = "ai_prompt_request_error", e.AI_PROMPT_SUGGESTIONS_VIEWED = "ai_prompt_suggestions_viewed", e))(o || {});
let l = e => "board" === e ? "template" : "visual";
export function $$d6(e, t, r, s, o, d, c, u, p, _, h) {
  let m = "inappropriate" === o ? o : l(o);
  qV(s).then(a => {
    trackEventAnalytics("ai_prompt_builder_output_requested", {
      fileKey: e,
      variantIndex: t,
      numVariants: r,
      promptId: a,
      outputType: m,
      oneClickPromptUseCase: p,
      oneClickPromptUseCaseCategory: u,
      oneClickPromptUseCaseSubCategory: _,
      numCharactersInput: s.length,
      localOutputId: atomStoreManager.get($$E4),
      stage: d,
      uiTriggeredFrom: c,
      autocompletePromptAddition: h
    }, {
      forwardToDatadog: !0
    });
  });
}
export function $$c1(e, t, r, s, o) {
  qV(r).then(r => {
    trackEventAnalytics("ai_prompt_builder_output_streaming", {
      fileKey: e,
      variantIndex: t,
      promptId: r,
      outputType: l(s),
      cortexRequestId: o,
      localOutputId: atomStoreManager.get($$E4)
    }, {
      forwardToDatadog: !0
    });
  });
}
export function $$u8(e, t, r, s, o) {
  qV(r).then(r => {
    trackEventAnalytics("ai_prompt_builder_output_created", {
      fileKey: e,
      variantIndex: t,
      promptId: r,
      outputType: l(s),
      cortexRequestId: o,
      localOutputId: atomStoreManager.get($$E4)
    }, {
      forwardToDatadog: !0
    });
  });
}
export function $$p0() {
  trackEventAnalytics("ai_prompt_edited", {
    promptEditType: "freeform"
  }, {
    forwardToDatadog: !0
  });
}
export function $$_7(e, t) {
  trackEventAnalytics("ai_prompt_edited", {
    promptEditType: "suggestion",
    promptSuggestionIndex: e,
    promptSuggestionText: t
  }, {
    forwardToDatadog: !0
  });
}
export function $$h9(e) {
  trackEventAnalytics("ai_prompt_edited", {
    promptEditType: "autocomplete",
    autocompleteSuggestionText: e
  }, {
    forwardToDatadog: !0
  });
}
export function $$m5(e, t) {
  trackEventAnalytics("ai_prompt_request_error", {
    fileKey: e,
    errorMessage: t
  }, {
    forwardToDatadog: !0
  });
}
export function $$g2(e) {
  let t = e.map(e => e.title);
  trackEventAnalytics("ai_prompt_suggestions_viewed", {
    prompt_suggestions: t
  }, {
    forwardToDatadog: !0
  });
}
let $$f3 = atom(null);
let $$E4 = atom(0);
export const Br = $$p0;
export const F9 = $$c1;
export const Fg = $$g2;
export const LX = $$f3;
export const Mg = $$E4;
export const fK = $$m5;
export const h5 = $$d6;
export const lt = $$_7;
export const lx = $$u8;
export const tV = $$h9;