import { useCallback } from "react";
import { xb } from "../figma_app/465776";
import { NLJ } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import { LH } from "../figma_app/384673";
import { Kh, uh } from "../figma_app/370763";
import { L } from "../figma_app/819472";
import { rM } from "../figma_app/241541";
import { Y } from "../figma_app/916469";
import { V } from "../9410/365876";
import { hV } from "../figma_app/822177";
import { a as _$$a } from "../9410/510768";
import { w } from "../figma_app/461518";
import { g as _$$g } from "../figma_app/391708";
import { z } from "../figma_app/849005";
import { $o } from "../9410/595754";
import { fo } from "../9410/307066";
import { GC, Jn } from "../9410/999133";
import { i as _$$i } from "../9410/628824";
import { g as _$$g2 } from "../9410/385690";
export function $$E1() {
  let e = GC();
  let t = rM(e);
  let i = function (e) {
    let {
      activeSecondaryToolbeltId,
      setActiveSecondaryToolbeltId
    } = LH();
    let c = md(Kh);
    let h = _$$g2(Y.FigJamQuickActionsMenuOpen);
    let m = V();
    let f = L();
    return useCallback(r => {
      let s = r.type;
      switch (s) {
        case fo.ACTIVATE_TOOL:
          f();
          e(r.toolId);
          break;
        case fo.TOGGLE_ACTIONS:
          m();
          h();
          break;
        case fo.TOGGLE_COMMENTS:
          c === NLJ.COMMENTS ? e($o) : e(NLJ.COMMENTS);
          break;
        case fo.TOGGLE_SUBMENU_AND_TOOL:
          {
            let n = r.secondaryToolbeltId;
            activeSecondaryToolbeltId === n ? (e($o), setActiveSecondaryToolbeltId(null)) : (e(r.toolIdToActivate), setActiveSecondaryToolbeltId(n));
            break;
          }
        default:
          xb(s);
      }
    }, [e, c, h, f, m, activeSecondaryToolbeltId, setActiveSecondaryToolbeltId]);
  }(t.activateTool);
  return {
    ...t,
    handleToolAction: i
  };
}
export function $$T2() {
  return uh(Jn);
}
export function $$w0() {
  let e = md(hV);
  let t = w();
  let i = _$$g();
  let r = _$$a();
  let n = z();
  let a = _$$i.NONE;
  e ? a = _$$i.NONE : t ? a = _$$i.TEAM_TEMPLATES : i ? a = _$$i.VERSION_HISTORY : r ? a = _$$i.PROVISIONAL_ACCESS : n && (a = _$$i.VIEW_ONLY);
  return {
    activeBannerType: a,
    isToolbeltDisabled: t || i || n,
    isCommentsDisabled: i
  };
}
export const Dm = $$w0;
export const W = $$E1;
export const v0 = $$T2;