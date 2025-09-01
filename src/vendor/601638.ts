let $$u1 = e => {
  var t;
  return null !== (t = e?.ownerDocument) && void 0 !== t ? t : document;
};
let $$n2 = e => e && "window" in e && e.window === e ? e : $$u1(e).defaultView || window;
export function $$r0(e) {
  return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
export const Ng = $$r0;
export const TW = $$u1;
export const mD = $$n2;