export function $$s2(e) {
  return Array.isArray(e.toolCalls) && e.toolCalls.length > 0 ? e.toolCalls.map(e => e.toolName) : [];
}
export function $$n1(e) {
  return Array.isArray(e.toolResults) && e.toolResults.length > 0 ? e.toolResults.map(e => ({
    toolName: e.toolName,
    result: !0 === JSON.parse(e.resultJson).success
  })) : [];
}
export function $$r3(e, t) {
  return t && e.sentAt64 && t.sentAt64 ? "number" != typeof e.sentAt64 || "number" != typeof t.sentAt64 ? null : e.sentAt64 - t.sentAt64 : null;
}
export function $$a0(e) {
  return JSON.parse(e.textContent).plainText || "";
}
export const AY = $$a0;
export const bF = $$n1;
export const el = $$s2;
export const pj = $$r3;