import { Ce } from "../vendor/998256";
import { uT, JD } from "../vendor/40198";
import { zf } from "../vendor/975854";
export function $$a3(e) {
  let {
    spanId,
    traceId
  } = e.spanContext();
  let {
    parent_span_id
  } = $$l2(e);
  return Ce({
    parent_span_id,
    span_id: spanId,
    trace_id: traceId
  });
}
function o(e) {
  return "number" == typeof e ? u(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? u(e.getTime()) : zf();
}
function u(e) {
  return e > 0x2540be3ff ? e / 1e3 : e;
}
export function $$l2(e) {
  if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
  try {
    let {
      spanId,
      traceId
    } = e.spanContext();
    if (e.attributes && e.startTime && e.name && e.endTime && e.status) {
      let {
        attributes,
        startTime,
        name,
        endTime,
        parentSpanId,
        status
      } = e;
      return Ce({
        span_id: spanId,
        trace_id: traceId,
        data: attributes,
        description: name,
        parent_span_id: parentSpanId,
        start_timestamp: o(startTime),
        timestamp: o(endTime) || void 0,
        status: status && 0 !== status.code ? 1 === status.code ? "ok" : status.message || "unknown_error" : void 0,
        op: attributes[uT],
        origin: attributes[JD],
        _metrics_summary: function (e) {
          let n = e._sentryMetrics;
          if (!n) return;
          let i = {};
          for (let [, [e, f]] of n) (i[e] || (i[e] = [])).push(Ce(f));
          return i;
        }(e)
      });
    }
    return {
      span_id: spanId,
      trace_id: traceId
    };
  } catch (e) {
    return {};
  }
}
export function $$d1(e) {
  let {
    traceFlags
  } = e.spanContext();
  return 1 === traceFlags;
}
export function $$s0(e) {
  return e._sentryRootSpan || e;
}
export const zU = $$s0;
export const pK = $$d1;
export const et = $$l2;
export const kX = $$a3;