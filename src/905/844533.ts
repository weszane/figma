import { WE } from "../905/607410";
export function $$r0(e) {
  if ("pending" === e.status) {
    WE(e);
    return Error("unreachable");
  }
  if ("fulfilled" === e.status) return e.value;
  if ("rejected" === e.status) throw e.reason;
  e.status = "pending";
  e.then(t => {
    e.status = "fulfilled";
    e.value = t;
  }, t => {
    e.status = "rejected";
    e.reason = t;
  });
  WE(e);
  return Error("unreachable");
}
export const Y = $$r0;