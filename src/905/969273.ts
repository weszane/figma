/**
 * ErrorType enum representing various error codes.
 * Original variable: $$n0
 */
export enum ErrorType {
  RATE_LIMIT_EXCEEDED = "rate_limit_exceeded",
  CONTENT_LENGTH_LIMIT = "content_length_limit",
  UNSAFE_OR_HARMFUL_CONTENT = "unsafe_or_harmful_content",
  GENERIC = "generic",
  OFFLINE = "offline",
  METER_EXCEEDED = "meter_exceeded",
  NOT_IMPLEMENTED = "not_implemented",
  NETWORK_ERROR = "network_error",
  UNCLOSED_TAGS_BENIGN = "unclosed_tags_benign"
}

/**
 * Alias for ErrorType enum.
 * Original variable: B
 */
export const B = ErrorType;
