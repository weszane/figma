// ErrorType Enum groups error type strings for clarity and maintainability (original: n)
export enum ErrorType {
  UNCLOSED_TAGS_BENIGN = 'unclosed_tags_benign',
  MID_STREAM_REQUEST_EXCEEDS_CONTEXT_LIMIT = 'mid_stream_request_exceeds_context_limit',
}

/**
 * CortexError class for error handling with extended metadata (original: $$a0)
 */
export class CortexError extends Error {
  type: string
  data: any
  trace?: any
  metadata?: any
  sentryTags?: any

  constructor(
    type: string,
    data: any,
    message?: string,
    stack?: string,
    trace?: any,
  ) {
    super(
      message
      ?? (typeof data?.message === 'string' ? data.message : undefined)
      ?? `CortexError of type ${type}`,
    )

    if (stack != null) {
      this.stack = stack
    }
    if (trace !== undefined) {
      this.trace = trace
    }
    this.type = type
    this.data = data
  }
}

/**
 * Maps error types to HTTP status codes (original: s)
 */
const errorTypeToStatus: Record<string, number> = {
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
  [ErrorType.UNCLOSED_TAGS_BENIGN]: 500,
  [ErrorType.MID_STREAM_REQUEST_EXCEEDS_CONTEXT_LIMIT]: 413,
}

/**
 * Returns the HTTP status code for a given error (original: $$o1)
 * @param error - The error object
 * @returns The corresponding HTTP status code
 */
export function getErrorStatus(error: unknown): number {
  if (error instanceof CortexError && error.type === 'generic') {
    return error.data?.status ?? 500
  }
  return errorTypeToStatus[(error as any)?.type] ?? 500
}

// Export refactored names for external usage
export const G1 = CortexError
export const Iu = getErrorStatus
