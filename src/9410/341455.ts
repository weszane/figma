import { jsx } from "react/jsx-runtime";
import { useCallback, useRef, useEffect } from "react";
import { SourceType } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { BT } from "../905/618447";
import { ze } from "../figma_app/516028";
import { JT } from "../figma_app/632248";
import { pP, qy, cT } from "../figma_app/862289";
import { ks, Vm } from "../figma_app/838407";
import { V6, i6, bY, ux } from "../figma_app/60023";
import { Ji } from "../figma_app/553488";
import { yt, WS, S7, NG } from "../7222/396421";
import g from "classnames";
import { DP } from "../905/640017";
import { $K } from "../9410/989613";
import { R } from "../figma_app/53049";
var _ = g;
function y() {
  let e = "dark" === DP();
  return jsx("div", {
    className: _()("slides_ai_shimmer_overlay--shimmer--R2Ru3", e ? "slides_ai_shimmer_overlay--shimmerDark--hd6lU" : "slides_ai_shimmer_overlay--shimmerLight--PGzix")
  });
}
export function $$v0(e) {
  if (e) return e.pageGuids;
  let t = atomStoreManager.get(V6);
  return (() => {
    switch (t.type) {
      case i6.ALL:
        return t.allPages;
      case i6.SINGLE:
        return [t.page];
      default:
        return [];
    }
  })().map(e => e.guid);
}
export function $$E2(e) {
  let t = useAtomWithSubscription(bY).figjamEntryPointData;
  let i = t?.figjamFileKey || e;
  let r = t?.selectedGuids;
  return useCallback(() => {
    if (i) return R({
      fileKey: i,
      selectedGuids: r
    });
  }, [i, r]);
}
export function $$T3(e) {
  let t = yt(e[0]);
  let i = useRef(!1);
  return useCallback(() => {
    if (!atomStoreManager.get(ze)) return;
    let r = atomStoreManager.get(BT);
    if (!i.current && 0 === r.flat().length && e.length > 0) {
      i.current = !0;
      let r = e[0];
      if (!r) return;
      t(r, {
        row: 0,
        col: 0
      }, SourceType.USER, "figjam-board-to-deck-default-slide", Ji.BOARD_TO_DECK);
    }
  }, [t, e]);
}
export function $$w5() {
  let e = function () {
    let e = useAtomWithSubscription(ux);
    let t = WS();
    let i = t.data || [];
    let r = "loaded" === t.status && i.length > 0;
    let n = i[0];
    let a = S7();
    return e || (r && n ? n.library_key : a);
  }();
  let t = NG(e);
  let i = "loaded" === t.status;
  return {
    areSlidePresetsLoaded: i,
    slidePresetModules: i ? t.data : []
  };
}
export function $$S4() {
  let e = useRef(null);
  let t = useRef(new Set());
  return {
    showPlaceholderOverlay: useCallback(i => {
      if (i && i !== defaultSessionLocalIDString && e.current !== i) {
        for (let e of t.current) ks(e);
        e.current = i;
        t.current.add(i);
        Vm(i, jsx(y, {}));
      }
    }, []),
    removeAllPlaceholderOverlays: useCallback(() => {
      for (let e of t.current) ks(e);
      t.current.clear();
      e.current = null;
    }, [])
  };
}
export function $$j1() {
  useEffect(() => () => {
    let {
      state
    } = pP(JT.BOARD_TO_DECK);
    state === qy.RUNNING && cT(JT.BOARD_TO_DECK);
    $K();
  }, []);
}
export const Gd = $$v0;
export const g2 = $$j1;
export const M0 = $$E2;
export const Hn = $$T3;
export const Wb = $$S4;
export const v0 = $$w5;