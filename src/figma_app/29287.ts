import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { isEditDisabled } from "../figma_app/459490";
import { u4 } from "../figma_app/991591";
import { createNewFileWithRestrictions } from "../905/738636";
import { figjamCreateSlidesOutlineAtom } from "../figma_app/223206";
import { getPermissionsAndView } from "../905/766303";
import { dh } from "../figma_app/186343";
import { openFileKeyAtom, openFileAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { getCurrentTeam, currentTeamAtom } from "../figma_app/598018";
import { TabOpenBehavior } from "../figma_app/915202";
import { S, E as _$$E } from "../figma_app/999099";
import { V } from "../figma_app/761984";
export function $$b3() {
  let e = useAtomWithSubscription(openFileKeyAtom);
  let t = useDispatch();
  let r = debugState.getState();
  let l = getPermissionsAndView(r);
  let d = dh();
  let c = getCurrentTeam() ?? void 0;
  return useCallback(() => {
    e && I({
      figjamData: {
        figjamFileKey: e,
        selectedGuids: getSingletonSceneGraph().getDirectlySelectedNodes().slice(0, S).map(e => e.guid),
        pageGuids: [d]
      },
      newFileState: l,
      dispatch: t,
      currentTeam: c,
      source: _$$E.FJ_SELECTION,
      checkIsViewer: !0
    });
  }, [e, d, l, t, c]);
}
export function $$T0({
  dispatch: e,
  pageGuids: t,
  fileKey: r,
  source: n
}) {
  let i = atomStoreManager.get(openFileKeyAtom);
  let a = atomStoreManager.get(currentTeamAtom);
  let l = debugState.getState();
  I({
    figjamData: {
      figjamFileKey: r || i,
      pageGuids: t
    },
    newFileState: getPermissionsAndView(l),
    dispatch: e,
    currentTeam: a,
    source: n,
    checkIsViewer: !1
  });
}
function I({
  figjamData: e,
  newFileState: t,
  dispatch: r,
  currentTeam: n,
  source: i,
  checkIsViewer: a
}) {
  if (!A({
    checkIsViewer: a
  })) return;
  let o = atomStoreManager.set(figjamCreateSlidesOutlineAtom, e);
  r(createNewFileWithRestrictions({
    state: t,
    from: i,
    editorType: FFileType.SLIDES,
    team: n,
    openNewFileIn: TabOpenBehavior.NEW_TAB,
    slidesAiNewFileData: {
      source: i
    },
    newFileDataLocalStorageKey: o
  }));
}
export function $$S2() {
  let e = V();
  return !!(A({
    checkIsViewer: !0
  }) && e);
}
export function $$v1() {
  return A({
    checkIsViewer: !1
  });
}
function A({
  checkIsViewer: e
}) {
  if (isEditDisabled({
    isDisabledForViewers: e
  })) return !1;
  if (!e) {
    let e = atomStoreManager.get(openFileAtom);
    let t = !atomStoreManager.get(currentTeamAtom)?.starter_team && e?.viewerExportRestricted;
    if (e && !e.canEditCanvas && t) return !1;
  }
  return !0;
}
export function $$x4() {
  let {
    loading,
    isSlidesAiEnabled
  } = u4();
  return {
    loading,
    isCreateSlidesOutlineEnabled: isSlidesAiEnabled
  };
}
export const $t = $$T0;
export const HZ = $$v1;
export const IR = $$S2;
export const iX = $$b3;
export const mp = $$x4;