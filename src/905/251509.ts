import { FZ, eU } from "../figma_app/27355";
import r from "../vendor/128080";
import { az } from "../905/449184";
import { Cc, lX } from "../905/545842";
import { AJ } from "../905/235262";
var a = r;
var $$d0 = (e => (e.None = "No Diff", e.Layer = "Layer Diff", e.Tree = "Tree Diff", e.Full = "Full Diff", e))($$d0 || {});
function c(e) {
  return "Layer Diff" === e ? "layer" : "tree";
}
let $$u1 = FZ(eU(null), (e, t, i) => {
  let n;
  let r;
  let a = new Date();
  if ("clear" === t.type) {
    e && az.trackDefinedEvent("figmascope.diff_end", {
      type: c(e.type),
      duration_seconds: (a.getTime() - e.time.getTime()) / 1e3
    });
    return null;
  }
  if ("start" === t.type ? (n = t.id, r = t.diffType) : "refresh" === t.type && e && (n = e.object.id, r = e.type), !n || !r) return null;
  let l = i(Cc).getObject(n)?.freeze();
  return l ? (az.trackDefinedEvent("figmascope.diff_start", {
    type: c(r)
  }), {
    type: r,
    object: l,
    time: new Date()
  }) : null;
});
let $$p3 = eU(e => {
  let t = e(lX);
  return t ? {
    type: "Full Diff",
    resource: t
  } : e($$u1) ?? {
    type: "No Diff"
  };
});
let $$m4 = eU(e => {
  let t = e(AJ);
  let i = e($$p3);
  switch (i.type) {
    case "Layer Diff":
      return i.object;
    case "Tree Diff":
      return i.object.findDescendant(e => e.id === t, {
        includeSelf: !0
      }) ?? null;
    case "Full Diff":
      for (let e of i.resource.rootObjects) {
        let i = e.findDescendant(e => e.id === t, {
          includeSelf: !0
        });
        if (i) return i;
      }
      return null;
    default:
      return null;
  }
});
export function $$h2(e, t, i = !1) {
  return !e && t ? "REMOVED" : !t && e ? "CREATED" : e?.value && t?.value && (e.value.type !== t.value.type || !a()(e.value.value, t.value.value)) ? "MODIFIED" : i ? "CHILD_MODIFIED" : void 0;
}
export function $$g5(e, t, i = !1) {
  if (!e) return "REMOVED";
  if (!t) return "CREATED";
  let n = e.rawProperties;
  let r = t.rawProperties;
  if (n.length !== r.length) return "MODIFIED";
  for (let e = 0; e < n.length; e++) if (void 0 !== function e(t, i) {
    let n = $$h2(t, i);
    if (void 0 !== n) return n;
    let r = t.children;
    let a = i.children;
    if (r.length !== a.length) return "CHILD_MODIFIED";
    for (let t = 0; t < r.length; t++) if (void 0 !== e(r[t], a[t])) return "CHILD_MODIFIED";
  }(n[e], r[e])) return "MODIFIED";
  return i ? "CHILD_MODIFIED" : void 0;
}
export const Lp = $$d0;
export const Oz = $$u1;
export const Ru = $$h2;
export const sg = $$p3;
export const tH = $$m4;
export const wc = $$g5;