import { useMemo, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { BJ } from "../figma_app/9054";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { U } from "../figma_app/901889";
import { wS } from "../figma_app/221240";
import { uQ } from "../figma_app/311375";
import { d as _$$d } from "../9410/441456";
import { showModalHandler } from "../905/156213";
import { isInvalidValue } from "../905/216495";
import { eY } from "../figma_app/722362";
import { tS } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { Fk } from "../figma_app/167249";
import { ku, jo, EH } from "../figma_app/241341";
import { $ } from "../905/330495";
export function $$C0(e) {
  let t = uQ();
  let {
    backingSymbolGUID
  } = $([e ?? ""]);
  let a = useMemo(() => null === backingSymbolGUID || isInvalidValue(backingSymbolGUID) ? null : backingSymbolGUID, [backingSymbolGUID]);
  let s = useDispatch();
  return useCallback(() => {
    e && a && (globalPerfTimer.reset("dev_handoff.view_history", e), globalPerfTimer.start("dev_handoff.view_history", {
      key: e
    }), trackEventAnalytics("Diff Modal Compare Changes Clicked", {
      nodeId: e,
      mainComponentNodeId: a,
      origin: "cc_overrides"
    }), s(showModalHandler({
      type: ku,
      data: {
        changeNodeId: e,
        basisNodeId: a,
        initialSelectedNodeId: t && t !== e ? t : void 0,
        isComparingOverrides: !0
      }
    })));
  }, [s, t, e, a]);
}
export function $$v2(e) {
  let t = wS();
  let i = uQ();
  let a = useDispatch();
  let s = U();
  return useCallback(() => {
    i && "loaded" === t.status && (s("Diff Modal Compare Changes Clicked", {
      nodeId: i,
      origin: "cc_detached_component"
    }), globalPerfTimer.reset("dev_handoff.view_history", i), globalPerfTimer.start("dev_handoff.view_history", {
      key: i
    }), a(showModalHandler({
      type: jo,
      data: {
        nodeId: i,
        detachedInfoStatus: t,
        origin: e
      }
    })));
  }, [i, t, s, a, e]);
}
export function $$E1(e, t) {
  let i = iZ()?.id;
  let d = uQ();
  let c = Fk((e, t) => e?.get(t ?? "")?.name.trim(), d);
  let m = tS();
  let b = useDispatch();
  let C = useAtomWithSubscription(_$$d);
  let v = eY();
  return useCallback(() => {
    if (globalPerfTimer.reset("dev_handoff.view_history", e || void 0), globalPerfTimer.start("dev_handoff.view_history", {
      key: e || void 0
    }), trackEventAnalytics("Diff Modal Compare Changes Clicked", {
      userId: i,
      fileKey: m,
      frameId: e,
      entrypoint: "lego_layer",
      analyticsEventOrigin: t
    }), e) {
      let t = BJ(v, e, !0);
      if (t) {
        let i = t.lastEditedAt;
        C[e] = new Date(i);
        atomStoreManager.set(_$$d, {
          ...C
        });
      }
    }
    b(showModalHandler({
      type: EH,
      data: {
        nodeId: e,
        layerName: c
      }
    }));
  }, [t, b, m, e, c, v, C, i]);
}
export const Xn = $$C0;
export const dU = $$E1;
export const xY = $$v2;