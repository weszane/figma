import { M_, OE, ZO, $L, NZ, PI as _$$PI, g6, rY } from "../905/369755";
import { CortexError } from "../figma_app/691470";
import { CortexErrorV2, ProviderRateLimitExceededError, ProviderOverloadedError, CortexRateLimitExceededError, ClientContentLengthLimitExceededError, ProviderContentLengthLimitExceededError, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError, NotImplementedError, OfflineError, MeterExceededError, PayloadTooLargeError } from "../figma_app/316567";
import { atomStoreManager } from "../figma_app/27355";
import { getTrackingSessionId } from "../905/471229";
import { J } from "../905/915227";
import { ErrorType } from "../905/969273";
import { currentUserOrgIdAtom } from "../figma_app/33126";
import { userIdAtom } from "../figma_app/864723";
import { openFileTeamIdAtom, openFileKeyAtom } from "../figma_app/516028";
export function $$_1() {
  return {
    orgId: atomStoreManager.get(currentUserOrgIdAtom) || null,
    teamId: atomStoreManager.get(openFileTeamIdAtom) || null,
    fileKey: atomStoreManager.get(openFileKeyAtom) || null,
    fileSeq: atomStoreManager.get(J)?.toString() || null,
    userId: atomStoreManager.get(userIdAtom) || null,
    trackingSessionId: getTrackingSessionId()
  };
}
export function $$h0(e) {
  if (isNaN(e.getTime())) return;
  let t = new Date(e);
  t.toDateString() === new Date().toDateString() && t.setDate(t.getDate() + 1);
  return t;
}
export function $$m3(e) {
  if (e.data.resetsAt) return $$h0(new Date(e.data.resetsAt));
}
export function $$g5(e) {
  if (e instanceof TypeError && !navigator.onLine) return ErrorType.OFFLINE;
  if (function (e) {
    if (!e.message || !e.name || "TypeError" !== e.name || "string" != typeof e.message) return !1;
    let t = e.message.toLowerCase();
    return t.includes("network") || t.includes("fetch") || t.includes("load") || t.includes("connection") || t.includes("terminated");
  }(e)) return ErrorType.NETWORK_ERROR;
  if (e instanceof CortexErrorV2) {
    if (ProviderRateLimitExceededError.isInstance(e) || ProviderOverloadedError.isInstance(e) || CortexRateLimitExceededError.isInstance(e)) return ErrorType.RATE_LIMIT_EXCEEDED;
    if (ClientContentLengthLimitExceededError.isInstance(e) || ProviderContentLengthLimitExceededError.isInstance(e)) return ErrorType.CONTENT_LENGTH_LIMIT;
    if (UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e)) return ErrorType.UNSAFE_OR_HARMFUL_CONTENT;
    if (NotImplementedError.isInstance(e)) return ErrorType.NOT_IMPLEMENTED;else if (OfflineError.isInstance(e)) return ErrorType.OFFLINE;else if (MeterExceededError.isInstance(e)) return ErrorType.METER_EXCEEDED;else if (PayloadTooLargeError.isInstance(e) || e?.statusCode === 413) return ErrorType.CONTENT_LENGTH_LIMIT;
  }
  if (e instanceof CortexError) switch (e.type) {
    case "rate_limit_exceeded":
      return ErrorType.RATE_LIMIT_EXCEEDED;
    case "content_length_limit_exceeded":
    case "payload_too_large":
      return ErrorType.CONTENT_LENGTH_LIMIT;
    case "unsafe_or_harmful_content":
      return ErrorType.UNSAFE_OR_HARMFUL_CONTENT;
    case "offline":
      return ErrorType.OFFLINE;
    case "meter_exceeded":
      return ErrorType.METER_EXCEEDED;
    case "unclosed_tags_benign":
      return ErrorType.UNCLOSED_TAGS_BENIGN;
    case "generic":
      if (e.data && "status" in e.data && 413 === e.data.status) return ErrorType.CONTENT_LENGTH_LIMIT;
  }
  return ErrorType.GENERIC;
}
export function $$f2(e) {
  if (e instanceof TypeError && !navigator.onLine) return new M_({
    type: "offline",
    data: {}
  });
  if (e instanceof CortexErrorV2) return e;
  if (e instanceof CortexError) {
    let t = {
      type: e.type,
      data: e.data,
      reportToSentry: !0,
      message: e.message,
      trace: e.trace,
      metadata: e.metadata,
      stack: e.stack
    };
    switch (e.type) {
      case "rate_limit_exceeded":
        return new OE(t);
      case "content_length_limit_exceeded":
      case "payload_too_large":
        return new ZO(t);
      case "unsafe_or_harmful_content":
        return new $L(t);
      case "offline":
        return new M_(t);
      case "meter_exceeded":
        return new NZ(t);
      case "generic":
        switch (e.data?.status) {
          case 404:
            return new _$$PI(t);
          case 429:
            return new OE(t);
          case 403:
            return new g6(t);
          case 413:
            return new ZO(t);
        }
    }
    return new rY(t);
  }
  return new rY({
    type: "generic",
    data: {},
    message: e.message,
    stack: e.stack
  });
}
export function $$E4(e) {
  return e instanceof CortexError && "meter_exceeded" === e.type && !!e.data.resetsAt;
}
export const A0 = $$h0;
export const Ay = $$_1;
export const Gx = $$f2;
export const PI = $$m3;
export const _0 = $$E4;
export const sZ = $$g5;