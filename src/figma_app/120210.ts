import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { Fullscreen, DesignGraphElements } from "../figma_app/763686";
import { parsePxInt } from "../figma_app/783094";
import { NX } from "../figma_app/243213";
import { Point } from "../905/736624";
import { s1, uR, d6 } from "../figma_app/304207";
import { closeUniversalInsertModal } from "../905/116101";
import { isWhiteboardFileType } from "../figma_app/976749";
import { findProfile } from "../figma_app/740025";
import { Tc } from "../905/797478";
import { PinningState } from "../905/192333";
import { wR } from "../figma_app/293326";
import { kLt, M$q } from "../figma_app/27776";
let $$E3 = 480;
let $$y6 = 616;
export function $$b5(e, t = 552, r = 320) {
  let [i, s] = useState();
  let [l, c] = useState();
  let [u, _] = useState(!1);
  let m = isWhiteboardFileType();
  useLayoutEffect(() => {
    let n = () => {
      let n;
      let i;
      switch (e.kind) {
        case "mountCenter":
          n = window.innerWidth / 2;
          i = window.innerHeight / 2;
          break;
        case "buttonTarget":
          let a = Tc(e.buttonTarget);
          if (!a) return;
          let l = a.getBoundingClientRect();
          n = l.x + l.width / 2;
          i = l.y;
          break;
        case "sourceRect":
          n = e.sourceRect.x + e.sourceRect.width / 2;
          i = e.sourceRect.y;
      }
      let c = n - r / 2;
      let p = i - t - 12;
      window.innerWidth - c < r ? (u || _(!0), c = window.innerWidth - r - wR) : u && _(!1);
      let E = parsePxInt(kLt) + parsePxInt(M$q);
      p = Math.max((m ? E : 0) + wR, p);
      s(new Point(c, p));
    };
    setTimeout(n, 0);
    let i = debounce(n, 100);
    window.addEventListener("resize", i);
    return () => {
      window.removeEventListener("resize", i);
    };
  }, [e, t, r, u, m]);
  return {
    initialModalPosition: i,
    modalPosition: l,
    setModalPosition: c,
    modalWasClippedByRightSide: u
  };
}
export function $$T1() {
  let e = useDispatch();
  return useCallback((t = !0) => {
    Fullscreen && t && Fullscreen.triggerAction("set-tool-default", null);
    e(closeUniversalInsertModal());
  }, [e]);
}
export function $$I0(e, t, r) {
  let a = useSelector(e => e.mirror.appModel.currentTool === DesignGraphElements.CODE_BLOCK);
  let o = useSelector(e => e.modalShown);
  let d = useSelector(e => e.mirror.appModel.showUi);
  let c = $$T1();
  let u = useCallback(() => {
    !a && (o || c());
  }, [a, o, c]);
  useEffect(() => {
    let n = n => {
      if (!e || NX(n.target, "data-does-not-dismiss-modal")) return;
      let i = t.current?.getEl();
      if (!i) return;
      let a = i.contains(n.target);
      if (d || a || u(), !r) {
        u();
        return;
      }
      let s = document.querySelector(r);
      if (!s) return;
      let o = s.contains(n.target);
      a || o || u();
    };
    document.addEventListener("pointerdown", n);
    return () => {
      document.removeEventListener("pointerdown", n);
    };
  }, [r, u, e, t, d]);
}
export function $$S4(e) {
  return e.mirror.appModel.currentTool === DesignGraphElements.NONE && e.universalInsertModal.showing && e.universalInsertModal.pinned === PinningState.NOT_PINNED;
}
export function $$v2(e, t, r, a) {
  let s = useDispatch();
  let o = useSelector(e => findProfile({
    authedProfilesById: e.authedProfilesById,
    userId: e.user?.id
  }));
  return {
    unsave: useCallback(r => {
      e && s(s1({
        id: e,
        resourceType: t,
        communityProfile: o || void 0,
        hideSuccessVisualBell: r,
        source: uR.INSERTS_MODAL,
        optimisticData: {
          pluginInstallId: a
        }
      }));
    }, [e, s, t, o, a]),
    save: useCallback((n, i) => {
      e && s(d6({
        id: e,
        resourceType: t,
        communityProfile: o || void 0,
        onSuccess: n,
        hideSuccessVisualBell: i,
        source: uR.INSERTS_MODAL,
        optimisticData: {
          resource: r
        }
      }));
    }, [e, s, t, o, r])
  };
}
export const J$ = $$I0;
export const LR = $$T1;
export const _i = $$v2;
export const gR = $$E3;
export const kg = $$S4;
export const ts = $$b5;
export const zo = $$y6;