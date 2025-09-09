import { useDispatch } from "react-redux";
import { J3, kN, JU } from "../figma_app/622574";
import { selectCurrentFile } from "../figma_app/516028";
import { x } from "../905/619833";
import { i$, YM } from "../905/122282";
import { YW } from "../figma_app/553488";
export function $$d0() {
  let e = J3();
  let t = selectCurrentFile();
  let i = useDispatch();
  return {
    openSlidesPublishFlow: async n => {
      if (t) {
        if (await YW(t)) {
          i$(i);
          return;
        }
        e === kN.FILE_IN_DRAFTS ? x({
          file: {
            key: t.key,
            name: t.name,
            folder_id: t.folderId,
            team_id: t.teamId,
            editor_type: t.editorType,
            parent_org_id: t.parentOrgId
          },
          dispatch: i
        }) : JU(e) && YM(i, t.key, t.editorType, n);
      }
    }
  };
}
export const X = $$d0;