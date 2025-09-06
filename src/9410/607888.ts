import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { Mpt, glU, Ez5 } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager, useAtomWithSubscription, Xr, Ut } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { H } from "../905/620380";
import { R } from "../905/165069";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { zE } from "../905/738636";
import { Uf, $K } from "../figma_app/223206";
import { J3, JU } from "../figma_app/622574";
import { Cu } from "../figma_app/314264";
import { Kl } from "../905/766303";
import { tS } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { Me } from "../figma_app/598018";
import { ai } from "../figma_app/915202";
import { t as _$$t2 } from "../905/825647";
import { R as _$$R } from "../figma_app/53049";
import { EI } from "../figma_app/21029";
export function $$j2(e, t, i) {
  let r = atomStoreManager.get(Me);
  let n = debugState.getState();
  let a = Kl(n);
  e(zE({
    state: a,
    from: i,
    editorType: FFileType.COOPER,
    team: r ?? void 0,
    openNewFileIn: ai.NEW_TAB,
    newFileDataLocalStorageKey: t
  }));
}
export function $$I1({
  openFile: e,
  fileVersion: t
}) {
  if (null === e || null === t) {
    let i = "No openFile or file version";
    logError("storeFigmaContentForCooperCreation", i, {
      fileKey: e?.key,
      fileVersion: t
    }, {
      reportAsSentryError: !0
    });
    return Error(i);
  }
  let i = getSingletonSceneGraph().getDirectlySelectedNodes().length > 0 ? Mpt?.getSelectedNodesToSend() ?? [] : Mpt?.getTopLevelFramesToSend() ?? [];
  if (0 === i.length) {
    let e = "Empty target node ids";
    logError("storeFigmaContentForCooperCreation", e, {}, {
      reportAsSentryError: !0
    });
    return Error(e);
  }
  return atomStoreManager.set(Uf, {
    fileKey: e.key,
    fileVersion: t,
    sourceNodeIds: i
  });
}
export function $$k0() {
  let e = useDispatch();
  let t = useAtomWithSubscription(Uf);
  let i = tS();
  let s = EI();
  let l = !!t;
  let u = l && !!i && s;
  let f = Xr($K);
  let y = J3();
  let C = JU(y);
  let {
    openCooperPublishFlow
  } = _$$t2();
  R(() => {
    e(F.enqueue({
      message: getI18nString("buzz.send_from_design.copying"),
      type: "send-to-buzz-from-design-loading",
      icon: zX.SPINNER,
      timeoutOverride: 3e5
    }));
  }, [e], () => l);
  let E = H(useCallback(() => {
    C ? e(F.enqueue({
      message: getI18nString("buzz.send_from_design.imported_x_assets_and_maybe_publish", {
        numAssets: t.sourceNodeIds.length
      }),
      type: "send-to-buzz-from-design-success-maybe-publish",
      button: {
        text: getI18nString("community.publishing.publish"),
        action: () => {
          openCooperPublishFlow("send-to-buzz-from-design-success-bell");
          Cu({
            trackingContext: "SendToBuzzFromDesignSuccessBell",
            text: getI18nString("community.publishing.publish")
          });
        }
      }
    })) : e(F.enqueue({
      message: getI18nString("buzz.send_from_design.imported_x_assets", {
        numAssets: t.sourceNodeIds.length
      }),
      type: "send-to-buzz-from-design-success",
      timeoutOverride: 3e3
    }));
  }, [e, C, openCooperPublishFlow, t]));
  R(() => {
    (async () => {
      glU?.applyNodesFromBuffer(await _$$R({
        fileKey: t.fileKey,
        selectedGuids: t.sourceNodeIds
      }), t.fileKey, t.sourceNodeIds, !1);
      f(Ut);
      Ez5?.cooperFocusView().exitFocusedNodeView();
      e(F.dequeue({
        matchType: "send-to-buzz-from-design-loading"
      }));
      E.current();
    })();
  }, [e, t?.fileKey, t?.sourceNodeIds, E], () => u);
}
export const $k = $$k0;
export const VY = $$I1;
export const rN = $$j2;