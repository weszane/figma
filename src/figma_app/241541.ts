import { useCallback, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { F } from "../905/302958";
import { oB, j7 } from "../905/929976";
export function $$l1({
  activeToolIdAtom: e,
  readOnlyOverlayInfoAtom: t,
  readOnlyTopLevelModeAtom: r,
  readOnlyEditModeTypeAtom: i
}, s) {
  let o = useAtomWithSubscription(t);
  let [l, c] = useAtomValueAndSetter(e);
  let u = useAtomWithSubscription(r);
  let p = useAtomWithSubscription(i);
  let _ = o?.type !== void 0;
  let h = $$d0();
  let m = s || h;
  let g = useCallback(() => {
    m(null);
  }, [m]);
  useEffect(() => {
    _ || g();
  }, [_, g]);
  let f = useCallback(e => {
    c(e);
    g();
  }, [c, g]);
  return {
    activeToolId: l,
    dropdownShown: o,
    openOverlay: e => {
      m(e);
    },
    closeOpenOverlay: g,
    activateTool: f,
    topLevelMode: u,
    editModeType: p
  };
}
export function $$d0() {
  let e = useDispatch();
  return useCallback(t => {
    var r;
    if (!t?.overlayId) {
      e(oB());
      return;
    }
    let n = t.anchorClientRect;
    e(j7({
      type: (r = t.overlayId, `TOOLBAR_STATE_OVERLAY_DROPDOWN_TYPE_${String(r)}`),
      data: {
        targetRect: {
          top: n.top,
          left: n.left + 74,
          width: n.width
        },
        items: t.items,
        selectedToolId: t.selectedToolId,
        recordingKey: t.recordingKey
      }
    }));
    e(F.clearAll());
  }, [e]);
}
export const XZ = $$d0;
export const rM = $$l1;