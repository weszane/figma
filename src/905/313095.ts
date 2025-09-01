import { l } from "../905/716947";
export function $$r1(e, t) {
  return e ? "SUBSCRIBED" === e.subscriptionStatus ? e.library_key : t?.libraryKey ? l(t.libraryKey) : void 0 : void 0;
}
export function $$a0(e) {
  if (e) return {
    subscriptionStatus: "SUBSCRIBED",
    library_key: e.libraryKey
  };
}
export function $$s2(e, t) {
  return t ? {
    subscriptionStatus: "SUBSCRIBED",
    library_key: e.library_key
  } : {
    subscriptionStatus: "LOCAL"
  };
}
export const O8 = $$a0;
export const ZR = $$r1;
export const cO = $$s2;