import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { deepEqual, ignoreUndefinedEqual } from "../905/382883";
import { getLocalStorage } from "../905/657224";
import { useLatestRef } from "../figma_app/922077";
import { FFileType } from "../figma_app/191312";
import { D } from "../905/347702";
import { selectCurrentUser } from "../905/372672";
import { BR, O1, Ky } from "../figma_app/345997";
let u = e => `SAVED_CART::${e}`;
export function $$m3({
  teamId: e,
  userId: r
}) {
  if (!r) return null;
  let t = g(r);
  return t?.teamId === e ? t : null;
}
export let $$p2 = 443 == require.j ? ["", "", ""] : null;
export function $$E5({
  loadingPaidEditors: e,
  teamId: r,
  teamName: t,
  setTeamName: s,
  collaborators: d,
  setCollaborators: u
}) {
  let m = selectCurrentUser();
  let E = useSelector(e => (r ? e.teamUserByTeamId[r] : {}) || {});
  let T = useSelector(e => e.payment.numDesignEditors);
  let y = useSelector(e => e.payment.numWhiteboardEditors);
  let h = useSelector(e => e.payment.editorStatusChanges);
  let f = useSelector(e => e.payment.cartSelections);
  let S = useLatestRef(e);
  let R = BR(E, m);
  let D = O1(T, Ky(R, h, FFileType.DESIGN));
  let N = O1(y, Ky(R, h, FFileType.WHITEBOARD));
  let b = useCallback(() => {
    let e = g(m?.id);
    if (!e) return null;
    let {
      createdAt,
      updatedAt,
      ...a
    } = e;
    return a;
  }, [m?.id]);
  useEffect(() => {
    let a = b();
    let n = null !== r || t ? t : a?.newTeamName;
    let i = null === r && !d || deepEqual(d, $$p2) ? a?.newCollaborators ?? $$p2 : d;
    let c = {
      teamId: r,
      editorStatusChanges: h,
      numEmptyDesignSeats: D,
      numEmptyWhiteboardSeats: N,
      newTeamName: n,
      newCollaborators: i,
      is3DS: a?.is3DS,
      cartSelections: f
    };
    !e && m && (ignoreUndefinedEqual(a, c) || $$I1(m.id, c), S && (s && n !== t && s(n || ""), u && !deepEqual(d, i) && u(i || $$p2)));
  }, [e, S, m, r, h, D, N, b, t, s, d, u, f]);
}
export let $$I1 = D((e, r) => {
  try {
    let t = new Date().toISOString();
    let a = {
      ...r,
      createdAt: t,
      updatedAt: t
    };
    getLocalStorage()?.setItem(u(e), y(a));
  } catch (e) {
    console.error("Failed to save cart state to Local Storage");
  }
});
export function $$T0(e) {
  if (e) try {
    getLocalStorage()?.removeItem(u(e));
  } catch (e) {}
}
let y = e => JSON.stringify(e);
let g = e => {
  if (!e) return null;
  try {
    let r = getLocalStorage()?.getItem(u(e));
    if (r) return JSON.parse(r);
    return null;
  } catch (e) {
    return null;
  }
};
export function $$h4(e, r) {
  let t = r.map(e => e.id);
  let a = e => e?.filter(e => t.includes(e)) ?? [];
  return {
    upgrade: {
      design: a(e.upgrade.design),
      slides: a(e.upgrade.slides),
      sites: a(e.upgrade.sites),
      whiteboard: a(e.upgrade.whiteboard),
      cooper: a(e.upgrade.cooper),
      figmake: a(e.upgrade.figmake)
    },
    downgrade: {
      design: a(e.downgrade.design),
      slides: a(e.downgrade.slides),
      sites: a(e.downgrade.sites),
      whiteboard: a(e.downgrade.whiteboard),
      cooper: a(e.downgrade.cooper),
      figmake: a(e.downgrade.figmake)
    }
  };
}
export const Al = $$T0;
export const dT = $$I1;
export const kt = $$p2;
export const lX = $$m3;
export const nt = $$h4;
export const pI = $$E5;