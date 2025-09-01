import { useCallback } from "react";
import { Pj } from "../vendor/514228";
import { A } from "../vendor/90566";
import { ds, GS, Fr } from "../figma_app/314264";
export function $$o2() {
  let e = Pj();
  return useCallback((t, r, n) => {
    let i = e.getState();
    ds(t, i.openFile?.key, i, r, n);
  }, [e]);
}
export function $$l4() {
  let e = Pj();
  return useCallback((t, r) => {
    let n = e.getState();
    GS(t, n.openFile?.key ?? "", n, r ?? {});
  }, [e]);
}
export function $$d3() {
  let e = Pj();
  return useCallback((t, r, n) => {
    let i = e.getState();
    let a = i.openFile?.key;
    let o = i.user && i.user.id;
    ds(t, a, i, {
      userId: o,
      ...r
    }, n);
  }, [e]);
}
export function $$c0() {
  let e = Pj();
  return useCallback((t, r, n) => {
    let i = e.getState();
    let a = i.openFile?.key;
    let o = i.mirror.appModel.currentPage;
    ds(t, a, i, {
      pageId: o,
      ...r
    }, n);
  }, [e]);
}
export function $$u5() {
  let e = Pj();
  return useCallback((t, r, n) => {
    let i = e.getState();
    let a = i.currentUserOrgId ?? "";
    Fr(t, a, i, {
      ...r
    }, n);
  }, [e]);
}
export function $$p1(e) {
  let t = $$u5();
  return A(t, e, {
    leading: !0,
    trailing: !1
  });
}
export const IL = $$c0;
export const NV = $$p1;
export const U = $$o2;
export const am = $$d3;
export const hC = $$l4;
export const iT = $$u5;