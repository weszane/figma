export function $$i0() {
  if ("object" == typeof globalThis) return globalThis;
  Object.defineProperty(Object.prototype, "_dd_temp_", {
    get() {
      return this;
    },
    configurable: !0
  });
  let e = _dd_temp_;
  delete Object.prototype._dd_temp_;
  "object" != typeof e && ("object" == typeof self ? e = self : e = "object" == typeof window ? window : {});
  return e;
}
export const V = $$i0;