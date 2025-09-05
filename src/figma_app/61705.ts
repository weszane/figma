import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { Xr } from "../figma_app/27355";
import { oJ } from "../905/63728";
import { Cu } from "../figma_app/314264";
import { B } from "../905/524020";
import { TA } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { ai } from "../figma_app/915202";
import { P4 } from "../figma_app/911880";
import { zE } from "../905/738636";
export function $$h1({
  newFileFrom: e,
  isDraftsFolder: t,
  folderId: r,
  forceOpenNewTab: h,
  newFileDataLocalStorageKey: m
}) {
  let g = B();
  let f = useDispatch();
  let E = TA();
  let y = Xr(P4);
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
    f(zE({
      state: g,
      editorType: n,
      triggerElement: a,
      team: b || T,
      from: e,
      openNewFileIn: h || oJ(l) ? ai.NEW_TAB : ai.SAME_TAB,
      folderId: r,
      isDraftsFolder: t,
      callback: e => {
        Cu({
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