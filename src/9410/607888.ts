import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { DesignToBuzzHelpers, Fullscreen, AppStateTsApi } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager, useAtomWithSubscription, useSetAtom, RESET } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { H } from "../905/620380";
import { useConditionalCallback } from "../905/165069";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { createNewFileWithRestrictions } from "../905/738636";
import { sendToBuzzFromDesignAtom, sessionIdAtom } from "../figma_app/223206";
import { getPublishTemplateStatus, canPublishTemplate } from "../figma_app/622574";
import { logAndTrackCTA } from "../figma_app/314264";
import { getPermissionsAndView } from "../905/766303";
import { useCurrentFileKey } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { currentTeamAtom } from "../figma_app/598018";
import { TabOpenBehavior } from "../figma_app/915202";
import { t as _$$t2 } from "../905/825647";
import { loadCanvasDataAsync } from "../figma_app/53049";
import { useIsFullscreenReady } from "../figma_app/21029";
export function $$j2(e, t, i) {
  let r = atomStoreManager.get(currentTeamAtom);
  let n = debugState.getState();
  let a = getPermissionsAndView(n);
  e(createNewFileWithRestrictions({
    state: a,
    from: i,
    editorType: FFileType.COOPER,
    team: r ?? void 0,
    openNewFileIn: TabOpenBehavior.NEW_TAB,
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
  let i = getSingletonSceneGraph().getDirectlySelectedNodes().length > 0 ? DesignToBuzzHelpers?.getSelectedNodesToSend() ?? [] : DesignToBuzzHelpers?.getTopLevelFramesToSend() ?? [];
  if (0 === i.length) {
    let e = "Empty target node ids";
    logError("storeFigmaContentForCooperCreation", e, {}, {
      reportAsSentryError: !0
    });
    return Error(e);
  }
  return atomStoreManager.set(sendToBuzzFromDesignAtom, {
    fileKey: e.key,
    fileVersion: t,
    sourceNodeIds: i
  });
}
export function $$k0() {
  let e = useDispatch<AppDispatch>();
  let t = useAtomWithSubscription(sendToBuzzFromDesignAtom);
  let i = useCurrentFileKey();
  let s = useIsFullscreenReady();
  let l = !!t;
  let u = l && !!i && s;
  let f = useSetAtom(sessionIdAtom);
  let y = getPublishTemplateStatus();
  let C = canPublishTemplate(y);
  let {
    openCooperPublishFlow
  } = _$$t2();
  useConditionalCallback(() => {
    e(VisualBellActions.enqueue({
      message: getI18nString("buzz.send_from_design.copying"),
      type: "send-to-buzz-from-design-loading",
      icon: VisualBellIcon.SPINNER,
      timeoutOverride: 3e5
    }));
  }, [e], () => l);
  let E = H(useCallback(() => {
    C ? e(VisualBellActions.enqueue({
      message: getI18nString("buzz.send_from_design.imported_x_assets_and_maybe_publish", {
        numAssets: t.sourceNodeIds.length
      }),
      type: "send-to-buzz-from-design-success-maybe-publish",
      button: {
        text: getI18nString("community.publishing.publish"),
        action: () => {
          openCooperPublishFlow("send-to-buzz-from-design-success-bell");
          logAndTrackCTA({
            trackingContext: "SendToBuzzFromDesignSuccessBell",
            text: getI18nString("community.publishing.publish")
          });
        }
      }
    })) : e(VisualBellActions.enqueue({
      message: getI18nString("buzz.send_from_design.imported_x_assets", {
        numAssets: t.sourceNodeIds.length
      }),
      type: "send-to-buzz-from-design-success",
      timeoutOverride: 3e3
    }));
  }, [e, C, openCooperPublishFlow, t]));
  useConditionalCallback(() => {
    (async () => {
      Fullscreen?.applyNodesFromBuffer(await loadCanvasDataAsync({
        fileKey: t.fileKey,
        selectedGuids: t.sourceNodeIds
      }), t.fileKey, t.sourceNodeIds, !1);
      f(RESET);
      AppStateTsApi?.cooperFocusView().exitFocusedNodeView();
      e(VisualBellActions.dequeue({
        matchType: "send-to-buzz-from-design-loading"
      }));
      E.current();
    })();
  }, [e, t?.fileKey, t?.sourceNodeIds, E], () => u);
}
export const $k = $$k0;
export const VY = $$I1;
export const rN = $$j2;