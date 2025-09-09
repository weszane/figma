import { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { V3 } from "../figma_app/976345";
import { K } from "../905/621769";
import { sf } from "../905/929976";
import { b as _$$b } from "../905/217163";
import { eY } from "../figma_app/722362";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { $ } from "../905/330495";
import { Bv, wS } from "../figma_app/221240";
import { uQ } from "../figma_app/311375";
import { M4 } from "../figma_app/624323";
export function $$f1({
  navigateToStateGroupIfVariant: e = !1,
  trackingFunction: t,
  assetGuid: r
}) {
  let o = uQ();
  let {
    singleBackingSymbol,
    singleBackingStateGroup
  } = $([r ?? o ?? ""]);
  let {
    backingSymbol,
    backingStateGroup
  } = Bv(singleBackingSymbol, singleBackingStateGroup);
  let E = wS();
  let y = M4();
  let b = useOpenFileLibraryKey();
  let T = useDispatch();
  let I = "loaded" === E.status ? E.result : void 0;
  let S = useMemo(() => I && I.isExternal ? I.libraryKey : backingSymbol?.sourceLibraryKey ? backingSymbol?.sourceLibraryKey : b, [I, backingSymbol?.sourceLibraryKey, b]);
  let v = y?.guid;
  let A = S !== b;
  let x = e && backingStateGroup ? backingStateGroup : backingSymbol;
  let N = I ? I.nodeId : A ? x?.publishID : x?.guid;
  let C = _$$b({
    libraryKey: S,
    nodeId: N ?? void 0,
    mainComponent: !0
  });
  let w = !!o && v !== N;
  return N && w && S && (!A || C.data?.link) ? () => {
    if (t && t(), A) {
      let e = C.data?.link;
      e && T(V3({
        url: e
      }));
    } else Fullscreen.goToSymbolOrStateGroupById(N, !0);
  } : null;
}
export function $$E2() {
  let e = eY();
  let t = useOpenFileLibraryKey();
  return useCallback(r => {
    let {
      backingComponentKey,
      backingStateGroupKey
    } = K(r, e, t);
    return backingStateGroupKey || backingComponentKey;
  }, [t, e]);
}
export function $$y0() {
  let e = useDispatch();
  let t = _6();
  let r = eY();
  let n = $$E2();
  let a = uQ();
  let _ = useOpenFileLibraryKey();
  let {
    backingLibraryKey,
    backingNodeId
  } = K(a || "", r, _);
  let f = backingLibraryKey !== _;
  let y = n(a || "");
  let b = _$$b({
    libraryKey: backingLibraryKey,
    nodeId: backingNodeId ?? void 0,
    isDevHandoff: !0,
    isDevModeComponentBrowser: !0,
    componentKey: y
  });
  return f ? () => {
    let t = b.data?.link;
    t && e(V3({
      url: t
    }));
  } : () => {
    "fullscreen" === t.view && e(sf({
      ...t,
      showDevModeComponentBrowser: !0,
      componentKey: y
    }));
  };
}
export const Au = $$y0;
export const dI = $$f1;
export const lR = $$E2;