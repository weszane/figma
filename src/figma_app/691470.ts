var n;
function i(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
(function (e) {
  e.UNCLOSED_TAGS_BENIGN = "unclosed_tags_benign";
  e.MID_STREAM_REQUEST_EXCEEDS_CONTEXT_LIMIT = "mid_stream_request_exceeds_context_limit";
})(n || (n = {}));
export class $$a0 extends Error {
  constructor(e, t, r, n, a) {
    super(r ?? function (e) {
      let t = e.message;
      return "string" == typeof t ? t : void 0;
    }(t) ?? `CortexError of type ${e}`);
    i(this, "type", void 0);
    i(this, "data", void 0);
    i(this, "trace", void 0);
    i(this, "metadata", void 0);
    i(this, "sentryTags", void 0);
    null != n && (this.stack = n);
    void 0 !== a && (this.trace = a);
    this.type = e;
    this.data = t;
  }
}
let s = {
  parse_request: 400,
  content_length_limit_exceeded: 400,
  payload_too_large: 413,
  unsafe_or_harmful_content: 422,
  figjam_generate_moderation_api_unsafe_or_harmful_content: 422,
  figjam_visual_parsing_error: 587,
  service_issue: 500,
  service_busy: 503,
  timed_out: 503,
  rate_limit_exceeded: 429,
  meter_exceeded: 429,
  figjam_summarize_out_of_date: 410,
  figjam_cluster_tool_not_called: 500,
  create_slides_out_of_date: 410,
  first_draft_image_creation_error: 500,
  first_draft_prompt_generation_error: 500,
  first_draft_theme_generation_error: 500,
  content_fill_parsing_error: 587,
  content_fill_incorrect_number_of_results_error: 587,
  content_fill_image_creation_error: 500,
  streaming_json_parser_error: 587,
  image_creation_error: 500,
  ai_opt_out_error: 403,
  unauthorized: 403,
  client_canceled_request: 499,
  endpoint_disabled: 503,
  external_rate_limit_exceeded: 429,
  image_request_error: 400,
  first_draft_preflight_error: 422,
  make_changes_unsupported: 422,
  make_changes_moderated: 422,
  text_tool_no_text: 400,
  unclosed_tags_benign: 500,
  mid_stream_request_exceeds_context_limit: 413
};
export function $$o1(e) {
  return e instanceof $$a0 && "generic" === e.type ? e.data.status ?? 500 : s[e.type] ?? 500;
}
export const G1 = $$a0;
export const Iu = $$o1;