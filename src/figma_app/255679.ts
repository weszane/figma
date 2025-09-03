import { useCallback } from "react";
import { l as _$$l } from "../905/716947";
import { md, zl, eU } from "../figma_app/27355";
import { oA } from "../905/663269";
import { az } from "../905/449184";
import { subscribeMultipleAndAwaitAll } from "../905/553831";
import { w0 } from "../figma_app/594947";
import { N as _$$N } from "../905/972754";
import { Lom, bsh, yFE, vsj } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { TG, qq } from "../905/72677";
import { QN, r9 } from "../905/991973";
export let $$m4 = M4.Query({
  fetch: async e => e ? (await w0("ui_kits_feedback_urls")).get(e, "") : ""
});
export function $$g2(e, t) {
  if ("loaded" === e.status) {
    let r = e.data.libraryPresetSubscriptionsV2?.find(e => oA(e.libraryKey) === t);
    if (r) return r.partner_type ?? void 0;
  }
}
export function $$f6(e) {
  let t = md(TG);
  return !!e && t.has(e);
}
export function $$E1() {
  return useCallback(e => {
    let t = zl.get(TG);
    return !!e && t.has(e);
  }, []);
}
export function $$y9(e, t) {
  return t.has(e.library_key);
}
export function $$b15() {
  let e = md(TG);
  return useCallback(t => $$y9(t, e), [e]);
}
let $$T7 = eU(null);
let $$I13 = eU({
  value: _$$N(),
  updateSource: "page_load"
});
export function $$S5(e) {
  return !!e && zl.get(qq).has(_$$l(e));
}
export function $$v11(e) {
  let t = zl.get(TG);
  return !!e && t.has(e);
}
export function $$A0(e) {
  if (!e) return !1;
  let t = zl.get(QN);
  let r = zl.get(r9);
  return t.includes(e) || r.includes(e);
}
let x = {
  VariableByKey: null,
  VariableCollectionByKey: null,
  StyleByKey: null,
  CommunityLibraryComponentsAndStateGroups: null
};
let N = [Lom, bsh, yFE, vsj];
let C = e => N.some(t => t._name === e);
let w = e => C(e) ? e : void 0;
let O = e => M4.Query({
  fetch: async t => {
    let r = subscribeMultipleAndAwaitAll(e, t.$$arguments);
    let n = w(e._name);
    if (n) {
      let r = x[n];
      (null === r || t.nonce.value > r) && (az.trackDefinedEvent("preset_libraries.static_update_fetch", {
        viewName: w(e._name),
        batchSize: t.$$arguments.length,
        updateSource: t.nonce.updateSource
      }), x[n] = t.nonce.value);
    }
    return await r;
  }
});
let $$R12 = O(Lom);
let $$L10 = O(bsh);
let $$P14 = O(yFE);
let $$D3 = O(vsj);
export function $$k8(e, t, r) {
  let n = r($$T7);
  let i = r($$I13);
  let a = r(e({
    arguments: t,
    nonce: i
  }));
  "loading" === a.status && null !== n && (a = r(e({
    arguments: t,
    nonce: n
  })));
  return a;
}
export const Ag = $$A0;
export const B8 = $$E1;
export const HA = $$g2;
export const Os = $$D3;
export const Re = $$m4;
export const TX = $$S5;
export const fd = $$f6;
export const fn = $$T7;
export const ku = $$k8;
export const lR = $$y9;
export const nT = $$L10;
export const o3 = $$v11;
export const p9 = $$R12;
export const qA = $$I13;
export const ue = $$P14;
export const xm = $$b15;