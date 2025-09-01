import { O } from "../vendor/240444";
import { T } from "../vendor/570893";
import { vF } from "../vendor/150583";
let r = O;
export function $$a2() {
  if (!("fetch" in r)) return !1;
  try {
    new Headers();
    new Request("http://www.example.com");
    new Response();
    return !0;
  } catch (e) {
    return !1;
  }
}
export function $$o0(e) {
  return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
export function $$u1() {
  if ("string" == typeof EdgeRuntime) return !0;
  if (!$$a2()) return !1;
  if ($$o0(r.fetch)) return !0;
  let e = !1;
  let n = r.document;
  if (n && "function" == typeof n.createElement) try {
    let i = n.createElement("iframe");
    i.hidden = !0;
    n.head.appendChild(i);
    i.contentWindow && i.contentWindow.fetch && (e = $$o0(i.contentWindow.fetch));
    n.head.removeChild(i);
  } catch (e) {
    T && vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
  }
  return e;
}
export const a3 = $$o0;
export const m7 = $$u1;
export const vm = $$a2;