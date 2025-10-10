import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSetAtom } from "../figma_app/27355";
import { isCommandOrShift } from "../905/63728";
import { logAndTrackCTA } from "../figma_app/314264";
import { B } from "../905/524020";
import { getUserId } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { TabOpenBehavior } from "../figma_app/915202";
import { P4 } from "../figma_app/911880";
import { createNewFileWithRestrictions } from "../905/738636";
export function $$h1({
  newFileFrom: e,
  isDraftsFolder: t,
  folderId: r,
  forceOpenNewTab: h,
  newFileDataLocalStorageKey: m
}) {
  let g = B();
  let f = useDispatch<AppDispatch>();
  let E = getUserId();
  let y = useSetAtom(P4);
  let b = useSelector(e => {
    let t = r ?? e.user?.drafts_folder_id;
    let n = t ? e.folders[t] : void 0;
    return n && n.team_id ? e.teams[n.team_id] : void 0;
  });
  let T = useSelector(e => e.currentTeamId ? e.teams[e.currentTeamId] : void 0);
  return useCallback(({
    editorType: n,
    contextClicked: i,
    triggerElement: a
  }) => l => {
    f(createNewFileWithRestrictions({
      state: g,
      editorType: n,
      triggerElement: a,
      team: b || T,
      from: e,
      openNewFileIn: h || isCommandOrShift(l) ? TabOpenBehavior.NEW_TAB : TabOpenBehavior.SAME_TAB,
      folderId: r,
      isDraftsFolder: t,
      callback: e => {
        logAndTrackCTA({
          userId: E,
          fileKey: e
        }, i);
      },
      newFileDataLocalStorageKey: m
    }));
    n === FFileType.SITES && y(!0);
  }, [f, r, b, t, T, h, e, g, E, m, y]);
}
export function $$m0({
  editorType: e,
  triggerElement: t,
  contextClicked: r,
  ...i
}) {
  let a = $$h1(i);
  return useMemo(() => a({
    editorType: e,
    triggerElement: t,
    contextClicked: r
  }), [a, e, t, r]);
}
export const $ = $$m0;
export const E = $$h1;